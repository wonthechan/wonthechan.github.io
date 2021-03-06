---
title: '[Python] 자료형의 기본 활용 Tip - 2'
date: 2019-10-23
category: 'python'
---

| single  | container  |
| :-----: | :--------: |
| Integer |    List    |
|  Float  |   Tuple    |
| String  | Dictionary |
| Boolean |    Set     |

single 타입을 다루었던 지난편에 이어 이번편에서는 container 타입중에서 가장 빈번하게 사용하는 4가지 : **List, Tuple, Dictionary, Set** 객체에 대해 간략하게 정리해보자.

## List (리스트 자료형)

파이썬에서 리스트는 배열의 역할을 하면서 동시에 몇가지 확장된 기능들을 가지고 있다. 또한 리스트는 mutable하기 때문에 요소를 자유롭게 삭제하거나 추가하는 등 수정이 가능하다.

#### List Comprehension

List Comprehension을 활용하면 몇줄의 코드를 다음과 같이 한줄로 간결하게 대체할 수 있다. 

```python
my_list = [i for i in range(100)]
```

조건이 딸린 for문도 사용 가능하다.

```python
my_list = [i for i in range(100) if i%2 == 0]
```

#### Sort()와 sorted 구분

리스트안의 요소를 정렬하고 싶을 때는 **sort()**와 **Sorted**를 사용할 수 있지만 그 사용법이 서로 조금 다르다.

먼저 **Sorted** 함수는 리스트를 인자로 받아서 정렬된 리스트를 반환해준다.

```python
my_sorted_list = sorted(my_list)
```

반면 **sort()**는 리스트의 메소드로서 아무것도 반환하지 않고 그 리스트 객체 자체를 정렬된 상태로 수정한다.

```python
my_list.sort()
```

따라서 정렬하기전 상태의 기존의 리스트를 보존하고 싶은 경우에는 **sorted** 함수를, 그럴 필요가 없는 경우에는 **sort()** 메소드를 사용하면 된다.

#### 다양한 내장 함수 활용

별도의 함수를 만들지 않아도 왠만한 함수들을 내장하고 있기 때문에 필요할때마다 편하게 사용하여 생산성을 높일 수 있다.

```python
# 리스트의 길이를 반환
len(my_list)
# 리스트 원소들의 합을 반환
sum(my_list)
# 최대값을 가진 원소를 반환
max(my_list)
# 최소값을 가진 원소를 반환
min(my_list)
```

#### 슬라이싱, 음수 인덱스 활용

원하는 범위만큼 리스트를 자르고 싶을 때 유용하게 사용할 수 있는 것이 슬라이싱이다.

```python
# 처음부터 다섯번째 원소까지 잘라서 반환
my_sliced_list = my_list[:6]
```

음수 인덱스를 활용하면 가장 마지막 인덱스의 원소를 참조하거나 리스트의 뒷부분을 잘라낼 때 요긴하게 써먹을 수 있다.

```python
# 리스트의 가장 마지막 인덱스 원소 참조
tail_element = my_list[-1]

# 끝에서 다섯번째 원소까지 잘라서 반환
my_tail_list = my_list[-5:]
```

#### map, reduce 및 filter 함수 활용

람다 함수와 함께 map, reduce 및 filter와 같은 함수를 결합하여 사용하면 리스트를 좀 더 효율적으로 댜룰 수 있다. 람다 함수를 활용하는 법에 대해서는 나중에 더 자세히 따로 다뤄보도록 하자.



## Tuple (튜플 자료형)

사실 튜플 자료형은 리스트와 그 사용 유형이 꽤 겹치기 때문에 사용빈도가 그렇게 높지는 않은 편이다.

그렇지만 튜플 자료형만이 가지는 몇가지 장점들이 있기 때문에 적재적소에 잘 활용한다면 리스트만 사용할 때보다 훨씬 더 간결한 코드를 작성할 수 있다.

#### 초기 상태 표현시 사용

초반에서 변수 초기화할 때 다음과 같이 표현이 가능하기 댸문에 코드가 길어지는 것을 방지한다.

```python
a, b, c, d = 1, 2, 3, 4
```

#### Map을 함께 사용한 입력 받기

map 함수를 함께 사용하면 한 줄에 주어지는 입력을 편리하게 변수에 저장할 수 있다.

```python
a, b, c = map(int, input(),split(' '))
```

#### 객체의 값을 동시에 바꾸는 것이 가능

C/C++ 에서는 두개의 변수 값을 서로 맞바꾸는 일을 하기 위해서는 별도의 swap 함수를 만들어서 사용해야 했지만 튜플 자료형을 활용하면 그냥 위치만 바꿔서 그대로 써주면 된다(?) 매우 직관적이고 간단하다.

```python
a = 3
b = 5

# Swap
a, b = b, a
```



## Dictionary (딕셔너리 자료형)

딕셔너리 자료형은 자바의 map 자료형에 대응되며 단어 뜻 그대로 key를 가지고 value를 찾아내는 사전같은 의미를 지닌다.

#### keys() 와 values()

딕셔너리가 가지고 있는 key와 value들을 따로 빼서 관리하는 것이 가능하다.

```python
my_dict = {1 : 2, 2 : 3, '4' : 'abc'}

# 딕셔너리의 현재 모든 key들을 반환
my_dict.keys()
# 딕셔너리의 현재 모든 value들을 반환
my_dict.values()
```

 나중에 정렬을 해야 하는 경우 key값이나 value값에 따라 정렬하는것도 가능하다.

#### 단어 등장 횟수 세기

문자열을 key, 즉 인덱스로 활용할 수 있기 때문에 이런 특성을 이용하여 텍스트에서 등장하는 단어 빈도수를 셀 때 유용하게 쓰일 수 있다.

```python
...
if word not in my_dict.keys():
    my_dict[word] = 1
else:
    my_dict[word] += 1
...
```



## Set (셋 자료형)

말 그대로 집합의 의미를 가지는 자료형. 

집합의 특성을 이용하므로 중복이 허용되지 않는 자료형을 만들고자 하거나 교집합 연산이 필요한 케이스에서 요긴하게 쓰일 수 있다.

#### 중복 체크

중복된 원소를 가지고 있는 리스트를 set 자료형으로 변환하게 되면 모든 중복 원소를 체크하여 단 한번만 원소가 등장할 수 있게 만들어준다.

```python
my_set = set([1,2,3,2,3,5,4,3,2,2,1,4,5])
print(st)
# {1,2,3,4,5}
```

이런 특성을 이용하여 리스트의 원소 중복체크를 하는 함수를 간단하게 만들어볼 수 있다.

```python
# 리스트에 원소가 중복되어 등장하는 경우 True를 반환한다.
def has_duplicates(lst):
    return len(lst) != len(set(lst))
```

#### 합집합, 여집합, 차집합 등의 집합 연산

```python
s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

# 교집합 구하기 => {4, 5, 6}
print(s1 & s2)
print(s1.intersection(s2))

# 합집합 구하기 => {1, 2, 3, 4, 5, 6, 7, 8, 9}
print(s1 | s2)
print(s1.union(s2))

# 차집합 구하기 => {1, 2, 3}
print(s1 - s1)
print(s1.difference(s2))
```

위와 같은 연산들은 시간복잡도가 크기 때문에 주의하여 사용해야 한다.



> References
>
> *  https://wikidocs.net/16 
> *  https://wikidocs.net/1015

