import React, { Component } from 'react';
import { WebView, ScrollView } from 'react-native';

export default class WebviewScreen extends Component {
  static navigationOptions = {
    title: 'react-native-autoheight-webview',
  };

  render() {
    const html = this.props.navigation.getParam('html')
    return (
      <ScrollView style={{padding: 10, flex: 1}}>
        <WebView originWhitelist={['*']} source={{html}} style={{flex: 1, height: 400}} />
      </ScrollView>
    );
  }
}

