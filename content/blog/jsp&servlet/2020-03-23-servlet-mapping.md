---
title: '[JSP&Servlet] Servlet 매핑'
date: 2020-03-23
category: 'jsp&servlet'
---



코로나 상황으로 인해 지금까지 약 한달간 교육을 못나가고 있다.. 원격 강의를 수강하면서 재택학습을 하고는 있지만 아무래도 집에 있다보니까 뭔가 교육장을 왔다갔다 할때보다는 나태해지는거 같은 느낌적인 느낌

이 들어서 교육이 정상 재개화가 될 때까지는 평소 미뤄왔던 jsp, servlet 공부를 다 끝내자는 마음을 먹었다.



감사하게도 인프런에서 코로나 상황과 관련해서 무료로 풀어준 JSP&Servlet 강좌가 있어서 매일 매일 조금씩 듣고 들은 내용을 여기에 간략히 정리해보려 한다.

------

> 인프런 "실전 JSP (renew ver.) - 신입 프로그래머를 위한 강좌" 강의 내용을 바탕으로 작성하였습니다.
>

서블릿 파일을 별도의 매핑 과정 없이 로드하기 위해서는 해당 서블릿 파일의 풀 패키지 경로와 함께 클래스 명으로 이루어진 url 을 사용해야 한다.

이는 복잡하기도 하고 서블릿 파일의 경로가 노출될 수 있기 때문에 매핑 작업을 통해 간결한 url을 통해 로드할 수 있어야 한다.

매핑을 위한 방법으로는 두가지가 있다.



### web.xml에서 매핑하는 방법

웹 환경설정을 정의할 수 있는 web.xml에 파일에 다음과 같은 코드를 집어넣어서 원하는 주소와 매핑할 수 있다.

```xml
<servlet>
  	<servlet-name>servletEx</servlet-name>
  	<servlet-class>com.servlet.ServletEx</servlet-class>
</servlet>
<servlet-mapping>
  	<servlet-name>servletEx</servlet-name>
  	<url-pattern>/SE</url-pattern>
</servlet-mapping>
```



### 자바 어노테이션을 이용한 매핑 방법

web.xml 파일에 매핑 코드를 정의하는 것보다는 Java Annotation을 doGet()이나 doPost() 메소드에 명시하는 방법으로 매핑하는 것이 훨씬 더 간단해보인다.

```java
@WebServlet("/SE")
```



이후 **http://localhost:[포트번호]/[프로젝트이름]/SE** 경로로 접속이 가능하다.