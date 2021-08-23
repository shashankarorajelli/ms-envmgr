package com.jelli.platform.envmgr.service.impl;

import com.jelli.platform.envmgr.repository.EnvmgrRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jelli.platform.envmgr.service.EnvmgrService;

@Service
public class EnvmgrServiceImpl implements EnvmgrService {

	private EnvmgrRepository envmgrRepository;

	@Autowired
	public EnvmgrServiceImpl(EnvmgrRepository envmgrRepository) {
		this.envmgrRepository = envmgrRepository;
	}

	public String getHello() {
		return envmgrRepository.getHello();
	}
}
