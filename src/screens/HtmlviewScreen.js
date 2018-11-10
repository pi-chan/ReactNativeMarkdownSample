import React, { Component } from 'react';
import { Dimensions, View, ScrollView, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';

const { width } = Dimensions.get('window');

export default class HtmlviewScreen extends Component {
  static navigationOptions = {
    title: 'react-native-htmlview',
  };

  renderNode(node, index, siblings, parent, _) {
    if (node.name === 'img') {
      const { src } = node.attribs;
      return (
        <Image
          key={index}
          style={{ width: width * 0.9, height: 300 }}
          source={{ uri: src }}
          resizeMode="contain"
        />
      );
    }
  }

  render() {
    const html = this.props.navigation.getParam('html')
    return (
      <ScrollView style={{padding: 10}}>
        <HTMLView
           value={`<html><body>${html}</body></html>`}
          renderNode={this.renderNode.bind(this)}
         />
      </ScrollView>
    );
  }
}
