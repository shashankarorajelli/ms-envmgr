package com.jelli.platform.envmgr.helpers;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.KeyFactory;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Date;

import org.bouncycastle.util.io.pem.PemObject;
import org.bouncycastle.util.io.pem.PemReader;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;

public class JwtGenerator {
	private static final String issuer = "ms-test";
	private RSAPublicKey publicKey;
	private RSAPrivateKey privateKey;

	public String createAndSignJwt() {
		loadKeys();

		Algorithm algorithm = Algorithm.RSA256(publicKey, privateKey);

		String token = JWT.create().withIssuer(issuer).withIssuedAt(new Date()).sign(algorithm);

		// Test token created successfully
		JWTVerifier verifier = JWT.require(algorithm).withIssuer(issuer).build();
		verifier.verify(token);
		JWT.decode(token);

		return token;
	}

	private void loadKeys() {
		try {
			if (publicKey == null) {
				publicKey = readPublicKeyFromFile("/jwt.pub");
			}

			if (privateKey == null) {
				privateKey = readPrivateKeyFromFile("/jwt.pem");
			}
		} catch (Exception e) {
			throw new RuntimeException("Error loading keys", e);
		}
	}

	private byte[] readPemFile(String filename) throws IOException {
		try (InputStream is = JwtGenerator.class.getResourceAsStream(filename)) {
			if (is == null) {
				throw new RuntimeException(String.format("Public key not found: %s", filename));
			}

			PemReader reader = new PemReader(new InputStreamReader(is));
			PemObject pemObject = reader.readPemObject();

			return pemObject.getContent();
		}
	}

	private RSAPrivateKey readPrivateKeyFromFile(String filename) throws IOException {
		byte[] bytes = readPemFile(filename);

		try {
			KeyFactory keyFactory = KeyFactory.getInstance("RSA");
			PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(bytes);

			return (RSAPrivateKey) keyFactory.generatePrivate(keySpec);
		} catch (Exception e) {
			throw new RuntimeException("Error constructing private key", e);
		}
	}

	private RSAPublicKey readPublicKeyFromFile(String filename) throws IOException {
		byte[] bytes = readPemFile(filename);

		try {
			KeyFactory keyFactory = KeyFactory.getInstance("RSA");
			X509EncodedKeySpec keySpec = new X509EncodedKeySpec(bytes);

			return (RSAPublicKey) keyFactory.generatePublic(keySpec);
		} catch (Exception e) {
			throw new RuntimeException("Error constructing public key", e);
		}
	}
}
