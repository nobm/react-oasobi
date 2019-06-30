import React from "react"
import { View } from "react-native"
import { createStackNavigator } from "react-navigation"

class DummyScreen extends React.Component {
  render() {
    return <View />
  }
}

export default createStackNavigator({
  Dummy: DummyScreen,
})
