import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-renderer';

export default class MarkdownRendererScreen extends Component {
  static navigationOptions = {
    title: 'react-native-markdown-renderer',
  };

  render() {
    const markdown = this.props.navigation.getParam('markdown')
    return (
      <ScrollView>
        <Markdown>
          {markdown}
        </Markdown>
      </ScrollView>
    );
  }
}

