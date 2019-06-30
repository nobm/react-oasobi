import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import styled from "styled-components/native";

import AccountListScreen from "./screens/AccountListScreen";
import AccountDetailScreen from "./screens/AccountDetailScreen";
import InputScreen from "./screens/InputScreen";
import DummyScreen from "./screens/DummyScreen";

const AccountsNavigator = createStackNavigator({
  Home: AccountListScreen,
  Account: AccountDetailScreen,
}, {
    headerTransitionPreset: "uikit",
  })

const TabBarIcon = styled.Image`
  width: 22px;
  height: 22px;
  opacity: ${props => props.active ? 0.9 : 0.3};
`

const tabBarLabel = (text) => Platform.select({
  ios: text,
  android: () => null,
})

const TabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: DummyScreen,
    navigationOptions: () => ({
      tabBarLabel: tabBarLabel("ホーム"),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          source={require("./assets/icons/home.png")}
          active={focused}
        />
      )
    })
  },
  BookTab: {
    screen: DummyScreen,
    navigationOptions: () => ({
      tabBarLabel: tabBarLabel("家計簿"),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          source={require("./assets/icons/piggy.png")}
          active={focused}
        />
      )
    })
  },
  InputTab: {
    screen: InputScreen,
    navigationOptions: () => ({
      tabBarLabel: tabBarLabel("入力"),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          source={require("./assets/icons/add.png")}
          active={focused}
        />
      ),
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate("InputModal")
      }
    })
  },
  AccountsTab: {
    screen: AccountsNavigator,
    navigationOptions: () => ({
      tabBarLabel: tabBarLabel("口座"),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          source={require("./assets/icons/wallet.png")}
          active={focused}
        />
      )
    })
  },
  MenuTab: {
    screen: DummyScreen,
    navigationOptions: () => ({
      tabBarLabel: tabBarLabel("その他"),
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          source={require("./assets/icons/menu.png")}
          active={focused}
        />
      )
    })
  },
}, {
    tabBarOptions: {
      activeTintColor: "#222",
      labelStyle: {
        fontWeight: "bold",
      }
    }
  });

const Root = createStackNavigator({
  Root: TabNavigator,
  InputModal: InputScreen,
}, {
    headerMode: "none",
    mode: "modal",
  })

const AppContainer = createAppContainer(Root);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          nav._navigation.navigate("AccountsTab")
        }}
      />
    )
  }
}
