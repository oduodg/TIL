package com.jspproject.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

@WebFilter("/*")
public class CharacterEncodingFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		// 다음 실행이 시작되기 전에 실행할 부분
		System.out.println("before filter");
		// 인코딩 같은 것을 적어준다.
		request.setCharacterEncoding("UTF-8");
		
		chain.doFilter(request, response); // 흐름을 다음 실행으로 넘겨줌
		
		// 다음 실행이 시작되고 나서 실행할 부분 
		System.out.println("after filter");

	}

}
