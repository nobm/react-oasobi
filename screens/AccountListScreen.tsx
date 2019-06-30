import React from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import styled from "styled-components/native";

import Account from "../components/Account";

import { accounts } from "../assets/datas/accounts.json";

export default class extends React.Component {

  static navigationOptions = {
    title: "口座一覧",
  }

  navigate = (val) => {
    this.props.navigation.navigate(val)
  }

  componentWillMount() {
    // this.navigate("Account")
  }

  render() {
    return (
      <ScrollView refreshControl={<RefreshControl refreshing={false} />}>
        <AccountContainer style={{ marginTop: 14 }}>
          <Account
            title="総資産"
            amount="¥0"
            onPress={() => this.navigate("Account")}
          />
        </AccountContainer>
        {
          accounts.map((section) => <View key={section.title}>
            <SubTitle>{section.title}</SubTitle>
            {
              section.data.map((item) => <AccountContainer key={item.name + item.detail}>
                <Account
                  title={item.name}
                  color={item.color}
                  detail={item.detail}
                  error={item.error}
                  amount="¥0"
                  onPress={() => this.navigate("Account")}
                />
              </AccountContainer>)
            }
          </View>
          )
        }
      </ScrollView>
    );
  }
}

const AccountContainer = styled.View`
  margin: 6px 12px;
`

const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 14px;
  margin-left: 23px;
  margin-bottom: 4px;
`;
