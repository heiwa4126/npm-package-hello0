# npm-package-hello0 (@heiwa4126/hello0)

npm のパッケージを書いて、それを使うテスト。

まず CommonJS 版。パッケージ名は @heiwa4126/hello0

ここはパッケージ側。使う側は ./example/以下参照。

## とりあえず動かす

プロジェクトルートで

```sh
pnpm ex1
```

## このパッケージを作った手順

1. 作業ディレクトリ作る。`mkdir hello0 && cd hello0`
1. `pnpm init`する (pnpm はお好みで yarn でも npm でも)
1. lib ディレクトリの下にモジュール書く。JSDoc も書く
1. `./test`の下にテストコードを書く。テストには Node.js 組み込みの`node:test`を使う
1. package.json の"main"に設定されている`./index.js`にモジュールの export 追加する
1. package.json の "scripts" を整える
1. `pnpm test`ぐらいはしておく

## 使い方

### ローカルな使い方 1

使う側で`npm i <ここへのパス>`

パスは絶対でも相対でもいいみたい。`npm link`に比べてこっちのほうが使いやすいと思う

### ローカルな使い方 2

`pnpm link -g`または`npm link`でグローバルにリンクをはる。

使う側で`npm link <モジュール名>`

使い勝手に難がある。package.json の dependencies に書かれないし。

あと`npm unlink`は無いので

```bash
cd "$(npm config get prefix)/lib/node_modules"
```

して該当 symlink を rm すること。
pnpm は`pnpm uninstall -g`があります。

### GitHub ダイレクト参照で使う

このモジュールはごくごく単純なので、

```sh
mkdir x
cd x
npm init -y
npm i --allow-git=root github:heiwa4126/npm-package-hello0
## `--allow-git=root` は npm v12 以降で必要
```

で使うことができます。例として以下のような`index.js`で

```js
# index.js
const h1 = require("../src");
console.log(h1.hello.hello());
const h = new h1.hello2.Hello("test");
console.log(h.hello());
```

`node index.js`で実行できます。

### GitHub Releases の tarball から使う

`v1.0.0`のような SemVer タグを push すると、GitHub Release に固定名の
`hello0.tgz`を添付します。

ふつうは`hello0-1.0.2.tgz`みたいになるのですが、リネームしてあります。

バージョンを指定してインストールする場合:

```sh
npm i https://github.com/heiwa4126/npm-package-hello0/releases/download/v1.0.2/hello0.tgz
```

最新の Release をインストールする場合:

```sh
npm i https://github.com/heiwa4126/npm-package-hello0/releases/latest/download/hello0.tgz
```

`latest` の URL は同じまま内容が更新されるため、再現性を重視する場合はバージョン指定を使ってください。
