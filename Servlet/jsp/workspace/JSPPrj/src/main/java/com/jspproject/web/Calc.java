package com.jspproject.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calc")
public class Calc extends HttpServlet {

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String x_ = request.getParameter("x");
		String y_ = request.getParameter("y");
		String op = request.getParameter("operator");
		
		// x, y를 0으로 초기화
		int x = 0;
		int y = 0;
		
		// 조건검사 => x, y가 빈 문자열이 아닌 경우 int로 타입 변환
		if(!x_.equals("")) x = Integer.parseInt(x_);
		if(!y_.equals("")) y = Integer.parseInt(y_);
		
		int result = 0;
		
		if(op.equals("덧셈"))
			result = x + y;
		else
			result = x - y;
		response.getWriter().printf("result is %d\n", result);
	}
}
