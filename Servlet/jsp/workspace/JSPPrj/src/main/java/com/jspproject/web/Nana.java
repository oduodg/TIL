package com.jspproject.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hi")
public class Nana extends HttpServlet{
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.setCharacterEncoding("UTF-8"); // 사용자에게 보내는 인코딩 방식
		resp.setContentType("text/html; charset=UTF-8"); // html 문서를 UTF-8로 읽어라
		
		PrintWriter out = resp.getWriter();
		
		
		String cnt_ = req.getParameter("cnt"); // 임시 변수
		
		int cnt = 100; // 기본값
		if(cnt_ != null && !cnt_.equals("")) // null이 아니고 빈 문자열이 아닌 경우
			cnt = Integer.parseInt(cnt_); // Integer로 변환 
		
		for(int i=0; i<cnt; i++) {
			out.println((i+1)+ ": 안녕 Servlet! <br>");
		}
	}
}
