import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { FadeInView } from './Components/FadeInView';

const urlHacktoberFest = "https://hacktoberfest.digitalocean.com"

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FadeInView style={{ width: "90%", height: 50, marginVertical: 10, padding: 10, backgroundColor: "powderblue" }}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Welcome to Hacktoberfest 2020!</Text>
        </FadeInView>
        <Text style={{ color: "blue" }} onPress={() => Linking.openURL(urlHacktoberFest)}>
          {urlHacktoberFest}
        </Text>
      </View>
    );
  }
}
