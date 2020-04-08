import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Drawer,
} from 'native-base';

import Menu from './menu';

export default class register extends Component {
  closeDrawer() {
    this.drawer._root.close();
  }
  openDrawer() {
    this.drawer._root.open();
  }
  render() {
    return (
      <WebView
        source={{
          uri: 'https://register.tadbirgar.com/',
        }}
      />
    );
  }
}
