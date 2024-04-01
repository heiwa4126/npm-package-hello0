# hello1

npm のモジュールを書いて、それを使うテスト。モジュール側。

## 手順

1. 作業ディレクトリ作る。`mkdir hello1 && cd hello1`
1. `pnpm init` する (pnpm はお好みで yarn でも npm でも)
1. lib ディレクトリの下にモジュール書く。JSDoc も書く
1. `./__tests__` の下にテストコード書く。今回は jest 使った。`pnpm i -D jest`
1. package.json の"main"に設定されている`./index.js` にモジュールの export 追加する
1. package.json の "scripts" を整える
1. `pnpm run test` ぐらいはしておく

## ローカルな使い方 1

使う側で `npm i {ここへのパス}`

パスは絶対でも相対でもいいみたい。こっちのほうが使いやすいと思う

## ローカルな使い方 2

`pnpm link -g` または `npm link` で グローバルにリンクをはる。

使う側で `npm link {モジュール名}`

使い勝手に難がある。あと `unlink` は無い。
