import React from 'react';
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

import Menu from './menu'

export default class HomeScreen extends React.Component {
  
  closeDrawer() {
    this.drawer._root.close();
  }
  openDrawer() {
    this.drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<Menu navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
        <Container>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>تدبیرگر سرمایه</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            {/* <Card>
              <CardItem>
                <Body>
                  <Text>Chat App to talk some awesome people!</Text>
                </Body>
              </CardItem>
            </Card>
            <Button
              full
              rounded
              dark
              style={{marginTop: 10}}
              onPress={() => this.props.navigation.navigate('Chat')}>
              <Text>Chat With People</Text>
            </Button>
            <Button
              full
              rounded
              primary
              style={{marginTop: 10}}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Text>Goto Profiles</Text>
            </Button> */}
          </Content>
        </Container>
      </Drawer>
    );
  }
}
