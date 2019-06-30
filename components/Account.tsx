import React from "react"
import { Animated, Platform } from "react-native"
import styled from "styled-components/native"
import Icon from "@expo/vector-icons/Ionicons"

interface Props {
  onPress(): any
  title: string
  detail?: string
  color?: string
  amount: string
  error?: string
}

interface State { }

export default class AccountList extends React.Component<Props, State> {
  push = () => {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  scale = new Animated.Value(1)

  onPressIn = () => {
    Animated.spring(this.scale, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start()
  }

  onPressOut = () => {
    Animated.timing(this.scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  render() {
    return (
      <AccountItem onPress={this.push}
        activeOpacity={1}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        style={[{ transform: [{ scale: this.scale }] }]}
      >
        <AccountMain>
          <AccountDeatils>
            <AccountNameText color={this.props.color}>{this.props.title}</AccountNameText>
            {
              this.props.detail ? <AccountDeatilText>{this.props.detail}</AccountDeatilText> : null
            }
          </AccountDeatils>
          <AccountRight>
            <AccountAmountText>{this.props.amount}</AccountAmountText>
            {
              Platform.select({
                ios: <Icon name="ios-arrow-forward" size={18} color={this.props.color} />
              })
            }
          </AccountRight>
        </AccountMain>
        {
          (() => {
            if (this.props.error) {
              return (<ConfirmButton title="ConfirmLoginInformation">
                <ConfirmButtonText>確認してください</ConfirmButtonText>
              </ConfirmButton>)
            }

          })()
        }
      </AccountItem>
    )
  }
}

const AccountItem = styled.TouchableOpacity`
  background: #fff;
  padding: 10px 12px;
  ${
    Platform.select({
      ios: `border-radius: 10px;
            box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);`,
      android: `border-radius: 8px;
                box-shadow: 0 1px 2px rgba(0,0,0,0.8);
                border: 1px solid #ddd;`
    })
  }
`

const AccountMain = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AccountDeatils = styled.View``

const AccountRight = styled.View`
  flex-direction: row;
  align-items: center;
`

const AccountNameText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${props => props.color ? props.color : "#000"};
`

const AccountDeatilText = styled.Text`
  font-size: 14px;
  margin-top: 2px;
  color: #777;
`

const AccountAmountText = styled.Text`
  font-size: 28px;
  font-family: System;
  margin-right: 10px;
`

const ConfirmButton = styled.View`
  background: #e33;
  padding: 10px;
  border-radius: 10px;
  margin-top: 6px;
`

const ConfirmButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`
