import React, { Component } from 'react';
import { Dimensions, View, ScrollView, Image, Linking } from 'react-native';
import HTML from 'react-native-render-html';

const { width } = Dimensions.get('window');

export default class RenderHtmlScreen extends Component {
  static navigationOptions = {
    title: 'react-native-render-html',
  };

  render() {
    const html = this.props.navigation.getParam('html')
    return (
      <ScrollView style={{padding: 10}}>
        <HTML
          html={html}
          imagesMaxWidth={width * 0.9}
          onLinkPress={(evt, href) => { Linking.openURL(href) }}
        />
      </ScrollView>
    );
  }
}
