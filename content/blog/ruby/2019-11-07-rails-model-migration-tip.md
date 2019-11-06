---
title: '[RoR] 더이상 쓸모없는 마이그레이션 파일 깔끔하게 지우기'
date: 2019-11-09
category: 'ruby'
---

![마이그레이션 파일들](https://miro.medium.com/max/1034/1*usnQlDE-gCOmT7okziMfwQ.png)

모델을 다루다보면 새로운 칼럼을 추가하거나 삭제하는 일들이 빈번하게 생긴다. 그럴때마다 마이그레이션 파일을 새로 만들게 되는데 이전 마이그레이션 파일들을 지우고 싶을 때가 있다.!

그래서 migrate폴더에서 해당 마이그레이션 파일만 지우면 되겠지 싶었는데 그 이후로 자꾸 Missing Migration.. 과 같은 에러 메세지가 뜨면서 뭔가 확실히 안지워진 느낌에 찝찝해서 확실히 지워버리는 방법을 찾아보았다.



------

**참고: 레일즈 버전 5.2.3 에서 진행 되었음** 



일단 다음 명령어를 통해 현재 마이그레이션 파일들의 상태를 확인할 수 있다.

```ruby
rails db:migrate:status
```

문제가 되는 지우고 싶은 마이그레이션의 version값(파일이름의 날짜부분)을 따로 적어 두고 해당 파일을 지워버린다.



그다음 dbconsole에 접속하여 적어둔 버전에 해당하는 레코드를 삭제하면 끝!

```ruby
delete from schema_migrations where version='version';
```

> sqlite3 기준



다시 status를 찍어보면 해당 마이그레이션이 더 이상 보이지 않게 된다!




> References
>
> *      https://medium.com/learning-to-code-one-bug-at-a-time/fixing-database-mistakes-in-ruby-on-rails-cddca130a38a