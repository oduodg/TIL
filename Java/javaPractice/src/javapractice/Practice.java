package javapractice;

class Practice {
	// fields
	int aaa;
	static int bbb = staticCall();
	
	// 생성자 
	public Practice() { // default constructor를 사용한다 하더라도 생성자는 쓰는게 원칙이다.
		
	}
	
	// static block
	// main이 실행되기 직전에 프로그램에서 필요한 다른 library 같은 것들을 loading할 필요가 있을 때 static block을 사용한다.
	// 프로그램 실행 전 사전작업이 필요할 때
	static {
		System.out.println("static block");
	}
	
	// method
	static int staticCall() { // static이니까 먼저 호출
		System.out.println("staticCall 호출되었어요!");
		return 100;
	}
	
	public static void main(String[] args) {
		System.out.println("main 호출");
	}
}
