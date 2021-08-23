package com.jelli.platform.envmgr.service.impl;

import com.jelli.platform.envmgr.repository.EnvmgrRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class EnvmgrServiceImplTests {

	@Test
	public void defaultTestPleaseReplaceMe() {
		String mockedString = "This is only a test";
		EnvmgrRepository mockedRepository = Mockito.mock(EnvmgrRepository.class);
		Mockito.when(mockedRepository.getHello()).thenReturn(mockedString);

		EnvmgrServiceImpl serviceImpl = new EnvmgrServiceImpl(mockedRepository);
		String result = serviceImpl.getHello();

		Assertions.assertEquals(mockedString, result, "Result doesn't match the mock!");
	}
}
