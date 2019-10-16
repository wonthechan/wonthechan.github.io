---
title: '[Python] 자료형의 기본 활용 Tip - 1'
date: 2019-10-16
category: 'python'
---

파이썬에서의 자료형은 다음과 같이 크게 단일 변수를 다루는 **single** 타입과 여러 데이터를 다루는 **container** 타입으로 나눌 수 있다.

| single  | container  |
| :-----: | :--------: |
| Integer |    List    |
|  Float  |   Tuple    |
| String  | Dictionary |
| Boolean |    Set     |

앞선 자료형들의 기본적인 사항에 대해서 모두 다루진 않고, 코딩테스트를 준비하면서 각 자료형들을 사용할 때 주의해야 할점이나 알아두면 유용한 팁들을 간략하게 정리해보았다.



## Integer (정수 자료형)

파이썬에서의 int형 사용은 다른 언어와 비교하여 몇가지 특징을 가진다.

수의 크기 제한이 없기 때문에 overflow에 대한 걱정을 줄일 수 있고 다음과 같은 큰 수를 표현할 수 있다.

```python
print(2**10000)
# 10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376
```

String 문자열로의 형변환이 간편하다.

```python
str(2)
# '2'
```

int형에서 나눗셈을 할 경우 **//** 연산을 사용하여 float로 변환되지 않도록 하는 것이 좋다.

```python
type(3//3)
# int

type(3/3)
# float
```

또는 divmod를 사용하면 나눗셈 결과의 몫과 나머지를 튜플형태로 받아올 수 있다.

```python
divmod(5,3)
# (1, 2)
```



## Float (실수 자료형)

당연히 0.1 곱하기 6은 0.6인것 같지만 파이썬에서의 실수연산은 실수 오차를 가지고 있기 때문에 실제로 해당 연산 결과를 비교해보면 False를 리턴하는 것을 확인할 수 있다.

```python
0.1 * 6 == 0.6
# False
```

Decimal과 같은 외부 모듈을 사용하거나 다른 여러가지 방법을 통해 해결할 수 있지만 이를 관리하기 어렵거나 귀찮다면 되도록 float 연산은 하지 않는 것이 여러모로 안전하다.

유리수 연산이 필요한 경우에는 tuple 자료형을 사용하여 분자와 분모를 따로 관리하는 방식으로 float 사용을 피할 수 있다.



## String (문자열 자료형)

기본적으로 파이썬에서 String은 Immutable 변수이기 때문에 수정이 불가능하다.

```python
string = 'wonthechan'
for i in string:
    i = '3'
    
print(string)
# wonthechan
```

 기본적으로 더하기 및 곱하기 연산을 지원하기 때문에 다음과 같이 활용할 수도 있다.

```python
a = 'good'
b = 'morning'

print(a+b)
# goodmorning

print(a*3)
# goodgoodgood
```

사용이 간편하긴 하지만 연산량이 커지는 경우에는 시간을 많이 소요할 수 있기 때문에 그럴때는 join() 메소드로 대체하는것이 좋다.

Char형을 다루고자 할 때는 **ord()** 또는 **chr()** 같은 내장함수를 활용할 수 있다.

```python
chr(65)
# 'A'
ord('A')
# 65
```



## Boolean (불 자료형)

#### Short-circuit evaluation

두가지 조건에 대해 AND와 OR 연산을 사용할 때에는 첫번째 조건의 결과에 따라 두번째 조건을 확인하지 않아도 결과가 정해지기 때문에, 두 번째 조건은 실행 하지 않는 것이 효율적이다.

이런 방식을 **Short-circuit evaluation** 이라고 하는데 첫 번째 조건과 상관없이 항상 두 번째 조건을 실행하는 **eager operator** 방식과 반대되는 개념이다.

이를 위해 파이썬에서는 **&** 과 **and** 를 구분하여 사용할 수 있게 하였다.

* eager operator => & / |

* circuit evaluation => and / or

```python
3 < 0 and 3/0 == 0
# False (short-circuit 방식 - 두 번째 조건 확인 안함)

3 < 0 & 3/0 == 0
# ZeroDivisionError: division by zero (eager 방식 - 두 번째 조건 확인)
```



2편에서 계속... &#9995; 

> References
>
> *  https://wikidocs.net/12 
> *  https://yahwang.github.io/posts/55 