import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

export default class AutoheightWebviewScreen extends Component {
  static navigationOptions = {
    title: 'react-native-autoheight-webview',
  };

  render() {
    const html = this.props.navigation.getParam('html')
    return (
      <ScrollView style={{padding: 10}}>
        <AutoHeightWebView originWhitelist={['*']} source={{html, baseUrl: 'web/'}} style={{flex: 1}} />
      </ScrollView>
    );
  }
}

