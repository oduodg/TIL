package com.jspproject.web;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calc2")
public class Calc2 extends HttpServlet {

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// Application 저장소인 ServletContext 객체를 생성 
		ServletContext application = request.getServletContext();
		
		String v_ = request.getParameter("v");
		String op = request.getParameter("operator");
		
		int v = 0;	
		
		if(!v_.equals("")) v = Integer.parseInt(v_);
		
		// 값을 계산
		if(op.equals("=")) {
			int x = (Integer)application.getAttribute("value");
			// application은 Object로 값을 반환하기 때문에 Integer로 형 변환해준다.
			int y = v;
			String operator = (String)application.getAttribute("op");
			
			int result = 0;
			
			if(operator.equals("+"))
				result = x+y;
			else
				result = x-y;
			
			response.getWriter().printf("result is %d\n", result);
		}
		// 값을 저장 
		else {
			// application에 value와 op를 저장한다.
			// 나중에 여기 저장된 값들은 꺼내서 두고두고 쓸 수 있다.
			application.setAttribute("value", v); // 맵 형태로 key, value를 저장한다.
			application.setAttribute("op", op);
		}		
	}
}
