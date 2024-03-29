package com.jspproject.web;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/calc2")
public class Calc2 extends HttpServlet {

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ServletContext application = request.getServletContext();
		HttpSession session = request.getSession();
		// 쿠키 읽기
		Cookie[] cookies = request.getCookies(); // 쿠키는 배열로 전달된다.
		
		String v_ = request.getParameter("v");
		String op = request.getParameter("operator");
		
		int v = 0;	
		
		if(!v_.equals("")) v = Integer.parseInt(v_);
		

		if(op.equals("=")) {
			//int x = (Integer)application.getAttribute("value");
			//int x = (Integer)session.getAttribute("value");
			
			int x = 0;
			// 쿠키 꺼내기
			// 쿠키가 여러 개 있을 수 있기 때문에 모든 쿠키를 검색해보아야 한다.
			for(Cookie c : cookies) // for문으로 돌면서 원하는 쿠키를 찾아보자.
				if(c.getName().equals("value")) { // value라는 값을 가진 쿠키를 찾으면
					x = Integer.parseInt(c.getValue()); // 쿠키값을 x에 저장
					break;
				}
			
			int y = v;
			//String operator = (String)application.getAttribute("op");
			//String operator = (String)session.getAttribute("op");
			
			String operator = "";
			for(Cookie c : cookies)
				if(c.getName().equals("op")) {
					operator = c.getValue();
					break;
				}
			
			int result = 0;
			
			if(operator.equals("+"))
				result = x+y;
			else
				result = x-y;
			
			response.getWriter().printf("result is %d\n", result);
		}
 
		else {			
			//application.setAttribute("value", v);
			//application.setAttribute("op", op);
			
			//session.setAttribute("value", v);
			//session.setAttribute("op", op);
			
			Cookie valueCookie = new Cookie("value", String.valueOf(v)); // 쿠키는 문자열만 저장할 수 있다.
			Cookie opCookie = new Cookie("op", op);
			// 쿠키가 response Header에 심어져서 전달된다.
			response.addCookie(valueCookie);
			response.addCookie(opCookie);
			
		}		
	}
}
