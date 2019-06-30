import React from "react"
import { Button, View, TouchableOpacity, Platform } from "react-native"
import { createStackNavigator } from "react-navigation"

import Icon from "@expo/vector-icons/Ionicons"

class DummyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "入力",
    headerLeft: Platform.select({
      ios: (
        <Button title="閉じる" onPress={() => navigation.goBack(null)} />
      ),
      android: (
        <TouchableOpacity onPress={() => navigation.goBack(null)} style={{ marginLeft: 20 }}>
          <Icon name="md-close" size={24} />
        </TouchableOpacity>
      )
    }),
    headerRight:(
      <TouchableOpacity onPress={() => navigation.goBack(null)} style={{ marginRight: 20 }}>
        <Icon name={Platform.select({
          ios: "ios-qr-scanner",
          android: "md-qr-scanner",
        })} size={24} />
      </TouchableOpacity>
    )
  })

  render() {
    return <View />
  }
}

export default createStackNavigator({
  Dummy: DummyScreen,
})
