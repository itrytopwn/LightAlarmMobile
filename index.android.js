/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import App from './App'

export default class LightAlarmMobile extends Component {
    render() {
        return (
            <App />
        )
    }
}


AppRegistry.registerComponent('LightAlarmMobile', () => LightAlarmMobile);