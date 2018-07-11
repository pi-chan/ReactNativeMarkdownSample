参考リンク: https://blog.piyo.tech/posts/2018-07-12-markdown-on-react-native/

2018/07/12次点で以下の2つのライブラリは内部で使っているWebViewに`originWhitelist={['*']}`がないため動きません。

- react-native-showdown
- react-native-autoheight-webview

ローカルで無理やりWebViewにprop足したら動くので試す方はそれで。
