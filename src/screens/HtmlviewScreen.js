import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';

export default class HtmlviewScreen extends Component {
  static navigationOptions = {
    title: 'react-native-htmlview',
  };

  render() {
    const html = this.props.navigation.getParam('html')
    return (
      <ScrollView style={{padding: 10}}>
        <HTMLView value={html} />
      </ScrollView>
    );
  }
}

