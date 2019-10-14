import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';

const urlHacktoberFest = "https://hacktoberfest.digitalocean.com"

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to Hacktoberfest 2019!</Text>
        <Text onPress={() => Linking.openURL(urlHacktoberFest)}>
          {urlHacktoberFest}
        </Text>
      </View>
    );
  }
}
