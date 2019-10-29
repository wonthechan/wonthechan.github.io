---
title: '[RoR] 모델(Model)에 새로운 컬럼(Column) 추가하는 법'
date: 2019-10-29
category: 'ruby'
---

이미 만들어둔 모델에 새로운 컬럼을 추가하는 법을 몰라서 필요할때마다 destroy 하고 모델을 다시 생성하는 식으로 했는데.. 번거롭기도 하고 이건 뭔가 아닌거 같아서 구글링해보니 방법이 바로 나왔다.!

## Active Record Migrations

이미 만들어둔 모델의 이름이 **Post**이고 새로 추가하려는 컬럼의 이름이 **title**이라면

```ruby
rails g migration AddTitleToPost title:string
```

이런식으로 하면 된다. 실행 후에는 db 폴더내에 새로운 마이그레이션 rb 파일이 생긴다.



최종적으로 적용을 위해서는 마이그레이션을 다시 진행해 주어야 한다.

```
rake db:migrate
```






> References
>
> *    https://stackoverflow.com/questions/14371633/adding-more-fields-to-an-existing-model 
> *    [https://relaxwrighting.tistory.com/entry/RUBY-ON-RAILS-Model-%EC%88%98%EC%A0%95-%EC%BB%AC%EB%9F%BC-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0](https://relaxwrighting.tistory.com/entry/RUBY-ON-RAILS-Model-수정-컬럼-추가하기) 
> *    https://guides.rubyonrails.org/active_record_migrations.html 