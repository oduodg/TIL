import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class Nana extends HttpServlet {
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		//System.out.println("Hello Servlet!"); // 서버쪽 console에 출력
		OutputStream os = response.getOutputStream();
		PrintStream out = new PrintStream(os, true);
		out.println("Hi Servlet!"); // 클라이언트에게 출력
	}
}    