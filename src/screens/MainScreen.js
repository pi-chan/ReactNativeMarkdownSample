import React, { Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'blue',
      padding: 20,
      width: 200,
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
    return (
      <View style={styles.container}>
        <CustomButton
          title="react-native-showdown"
          onPress={() => this.props.navigation.navigate('Showdown')}
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
