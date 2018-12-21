import React, { Component } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { DinoScroll } from "./app/DinoScroll";

export default class App extends Component {
  constructor() {
    super();
    this.state = { horizonalIsOn: false };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Bouncing Dinos</Text>
        <Text>Scroll Horizontal</Text>
        <Switch
          onValueChange={value => this.setState({ horizonalIsOn: value })}
          style={{ marginBottom: 10 }}
          value={this.state.horizonalIsOn}
        />
        <DinoScroll horizontal={this.state.horizonalIsOn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    borderWidth: 25
  },
  header: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 25
  }
});
