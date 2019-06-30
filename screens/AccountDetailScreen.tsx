import React from "react";
import { View, Platform } from "react-native";
import styled from "styled-components/native";

class AccountHeaderTitle extends React.Component {
  render() {
    return (
      <TitleView>
        <LargeTitle>三井住友銀行</LargeTitle>
        <SubTitle>浜松支店 普通</SubTitle>
      </TitleView>
    )
  }
}

export default class AccountsView extends React.Component {
  static navigationOptions = {
    title: `三井住友銀行`,
    headerTitle: <AccountHeaderTitle />,
  }

  render() {
    return <View />
  }
}

const TitleView = styled.View`
  align-items: ${Platform.select({
    ios: "center",
    android: "flex-start",
  })};
`

const LargeTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #004831;
`

const SubTitle = styled.Text`
  font-size: 11px;
  font-weight: bold;
  padding-top: 0px;
  color: #222;
`;
