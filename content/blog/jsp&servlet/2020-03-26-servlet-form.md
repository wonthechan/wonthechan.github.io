---
title: '[JSP&Servlet] Servlet에서 form 데이터 처리하기'
date: 2020-03-26
category: 'jsp&servlet'
---

















클라이언트가 form 데이터를 Get 혹은 Post 방식으로 전송한 경우 Servlet 에서는 어떻게 값을 받아오고 처리할 수 있을까?



### html (jsp)

```html
<form action="mSignUp" method="get">
    name : <input type="text" name="m_name"><br>
    password : <input type="password" name="m_password"><br>
    취미 <input type="checkbox" name="m_hobby" value="cook"> Cook
    	<input type="checkbox" name="m_hobby" value="movie"> Movie
    	<input type="checkbox" name="m_hobby" value="jogging"> Jogging
    <input type="submit" value="Sign Up">
</form>
```

위와 같은 간단한 form 태그를 통해 Servlet으로 데이터를 전송할 수 있는데, 이때 form 태그의 action 부분에 서블릿의 주소나 jsp 파일의 경로가 지정된다.



<h3>Servlet</h3>

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    String mName = request.getParameter("m_name");
    String mPassword = request.getParameter("m_password");
    String[] mHobby = request.getParameterValues("m_hobby");

    PrintWriter out = response.getWriter();	// 문서 출력 스트림 객체 얻기
    out.println("Name : " + name + "<br>");
}
   
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	doGet(request, response);
}
```



위와 같이 서블릿에서 form 데이터를 받아올 수 있으며 post 방식이든 get 방식이든 우선 doGet 메소드가 실행되도록 했다.

```java
String mName = request.getParameter("m_name");
```

```java
String[] mHobby = request.getParameterValues("m_hobby");
```

request.getParameter([input태그의 name 값]) 을 통해 값을 가지고 오는 것을 확인할 수 있다.

체크박스나 라디오 버튼과 같이 받아올 값이 여러개인 경우는 request.getParameterValues() 를 사용하여 배열로 저장한다.



doGet() 메소드의 마지막 부분에서 문서 출력 스트림을 얻어온 후 받은 데이터를 출력하고 있다.

데이터가 영어인 경우는 상관 없었지만 한글 데이터인 경우에는 테스트해보니 웹브라우저상에서 깨져 보이는 것을 확인할 수 있었다.

문제를 찾아보니 별도로 한글 처리 작업이 필요하기 때문에 이를 위한 코드가 Servlet 파일에 들어가야 한다고 한다.

이부분에 대해서는 다음 포스트에서 알아보도록 하자 ~~~