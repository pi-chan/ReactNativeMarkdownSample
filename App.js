/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from "./src/screens/MainScreen";
import ShowdownScreen from "./src/screens/ShowdownScreen";
import SimpleMarkdownScreen from "./src/screens/SimpleMarkdownScreen";
import MarkdownRendererScreen from "./src/screens/MarkdownRendererScreen";
import HtmlviewScreen from "./src/screens/HtmlviewScreen";
import AutoheightWebviewScreen from "./src/screens/AutoheightWebviewScreen";
import WebviewScreen from "./src/screens/WebviewScreen";
import RenderHtmlScreen from "./src/screens/RenderHtmlScreen";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainNavigator = StackNavigator({
  Main: MainScreen,
  Showdown: ShowdownScreen,
  SimpleMarkdown: SimpleMarkdownScreen,
  MarkdownRenderer: MarkdownRendererScreen,
  Htmlview: HtmlviewScreen,
  AutoheightWebview: AutoheightWebviewScreen,
  Webview: WebviewScreen,
  RenderHtml: RenderHtmlScreen,
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
