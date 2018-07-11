import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Markdown from 'react-native-simple-markdown';

export default class SimpleMarkdownScreen extends Component {
  static navigationOptions = {
    title: 'react-native-simple-markdown',
  };

  render() {
    const markdown = this.props.navigation.getParam('markdown')
    return (
      <ScrollView style={{padding: 10}}>
        <Markdown>
          {markdown}
        </Markdown>
      </ScrollView>
    );
  }
}

