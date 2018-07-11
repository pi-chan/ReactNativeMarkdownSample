import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Markdown from 'react-native-showdown';

export default class ShowdownScreen extends Component {
  static navigationOptions = {
    title: 'react-native-showdown',
  };

  render() {
    const markdown = this.props.navigation.getParam('markdown')
    return (
        <Markdown body={markdown} style={{height: 500}} />
    );
  }
}

