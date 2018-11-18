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
