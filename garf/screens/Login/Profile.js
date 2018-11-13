import React from 'react';
import { Icon } from 'expo';
import { Stylesheet, Text, View } from 'react-native';


import Colors from '../../constants/Colors';

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello from Profile</Text>
        <Icon.Ionicons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      </View>
    )
  }
}