# npm-package-hello0

npm のパッケージを書いて、それを使うテスト。

CommonJS 版。パッケージ名は@heiwa4126/hello0

ここはパッケージ側。使う側は ./example/ 以下

## このパッケージを作った手順

1. 作業ディレクトリ作る。`mkdir hello0 && cd hello0`
1. `pnpm init` する (pnpm はお好みで yarn でも npm でも)
1. lib ディレクトリの下にモジュール書く。JSDoc も書く
1. `./__tests__` の下にテストコード書く。今回は jest 使った。`pnpm i -D jest`
1. package.json の"main"に設定されている`./index.js` にモジュールの export 追加する
1. package.json の "scripts" を整える
1. `pnpm run test` ぐらいはしておく

## ローカルな使い方 1

使う側で `npm i {ここへのパス}`

パスは絶対でも相対でもいいみたい。`npm link`に比べてこっちのほうが使いやすいと思う

## ローカルな使い方 2

`pnpm link -g` または `npm link` で グローバルにリンクをはる。

使う側で `npm link {モジュール名}`

使い勝手に難がある。package.json の dependencies に書かれないし。

あと `npm unlink` は無いので

```bash
cd "$(npm config get prefix)/lib/node_modules"
```

して該当 symlink を rm すること。
pnpm は `pnpm uninstall -g` があります。
