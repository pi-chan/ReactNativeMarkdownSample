import React, { Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'blue',
      padding: 20,
      width: 300,
      margin: 20,
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <Text style={{color: 'white'}}>{title}</Text>
  </TouchableOpacity>
);

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'ホーム',
  };

  render() {
    const markdown = `
# 見出し
    
- 箇条書き
  - 入れ子
  - 入れ子      
- 箇条書き
- 箇条書き

[Google](https://www.google.co.jp/)

> 引用

**太字太字**

![画像](https://blog.piyo.tech/images/prof.png)
    `

    return (
      <View style={styles.container}>
        <CustomButton
          title="react-native-simple-markdown"
          onPress={() => this.props.navigation.navigate('SimpleMarkdown', { markdown })}
        />
        <CustomButton
          title="react-native-showdown"
          onPress={() => this.props.navigation.navigate('Showdown', { markdown })}
        />
        <CustomButton
          title="react-native-markdown-renderer"
          onPress={() => this.props.navigation.navigate('MarkdownRenderer', { markdown })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
