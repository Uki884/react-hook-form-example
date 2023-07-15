# rhf-sample
react-hook-formを使用したフォームのサンプル集

## controlled form pattern (Reactで値を管理する)
### メリット
- 再レンダリングを発生させることができるので画面UIを更新しながら入力するフォームに便利
- MUI等のUIライブラリで使える
### デメリット
- uncontrolled formに比べると入力するたびに再レンダリングするのでパフォーマンスが悪い

### サンプルコード
- dir path<br/>
src/patterns/uncontrolledPattern
- url<br/>
uncontrolled/step1<br/>
uncontrolled/step2

## uncontrolled form pattern(DOMで値を管理する)
### メリット
再レンダリングが起きない
### デメリット
- MUI等のUIライブラリで使えない

### サンプルコード
- dir path<br>
src/patterns/controlledPattern
- url<br>
controlled/step1<br/>
controlled/step2

### 参考リンク
[controlled-vs-uncontrolled-inputs-react](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)