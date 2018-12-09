# TODO

- [ ] お気に入りをPOSTする
- [ ] jsonデーターを受け取る
- [ ] 描画する
- [ ] テストを用意する

# jest を Rails つかう

ES6 で jest でテストを書く場合、babelが必要になります

```
yarn add --dev jest
yarn add --dev babel-jest
yarn add --dev babel-preset-env
```

env で test というのは、node.js の NODE_ENV が test に自動的にテスト時にはなるので、設定をします
（ただ、これでいいのかな...）

```
"env": {
  "test": {
    "presets": ["env"]
  }
},
```

# Promise

fetch は、promise

```
return fetch(url, {})
```

fetch したデーターをどうやって受け渡しするか？

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('setTimeout です')
  }, 1000)
})

promise.then((message) => {
  console.log(`${message} こんにちは`)
})
```

# rails-ujs

rails-ujs が使えるのは下記のため

```
javascript_include_tag 'application'
```

```
//= require rails-ujs
```

pack に移行するのであれば...
上記を削除して
下記を追記

```
$ yarn add --dev rails-ujs
```

app/javascript/packs/application.js
```javascript
import Rails from 'rails-ujs'
Rails.start()
```

# 疑問

- test のディレクトリをどうするか？
