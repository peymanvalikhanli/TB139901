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

export default class sejam extends Component {
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
          uri:  'https://dara.csdiran.com/sejam/bourse/fromcompany/79buQYw4Rr51XHL0JZUKUH59LXoLuKL9pyS0k3Zp8ck2ed7FgnYcU9vNYwLmhTh3',
        }}
      />
    );
  }
}
