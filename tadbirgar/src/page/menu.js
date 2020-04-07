import React from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Thumbnail,
} from 'native-base';

export default class Menu extends React.Component {
  render() {
    const uri = 'http://tadbirgar.com/src/image/tg_logo_intro.gif';
    return (
      <Content style={{backgroundColor: '#ffffff'}}>
        <Content>
          <Body style={{marginTop: 20}}>
            <Thumbnail square large source={{uri: uri}} />
          </Body>
        </Content>
        <ListItem itemDivider style={{backgroundColor: '#ffffff'}}></ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#b2b259'}}>
              <Icon active name="torso-business" type="Foundation" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: '#82603c'}}>
                ثبت نام آنلاین
            </Text>
          </Body>
          <Right>
            <Icon active name="chevron-right" type="Octicons"  />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#b2b259'}}>
              <Icon active name="account-check" type="MaterialCommunityIcons" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: '#82603c'}}>اهراز حویت</Text>
          </Body>
          <Right>
            <Icon active name="chevron-right" type="Octicons" />
          </Right>
        </ListItem>
        <ListItem icon onPress={() => { this.props.navigation.replace("Sejam"); }}>
          <Left>
            <Button style={{backgroundColor: '#b2b259'}}>
              <Icon active name="user" type="Entypo" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: '#82603c'}}>
                ثبت نام سجام
            </Text>
          </Body>
          <Right>
            <Icon active name="chevron-right" type="Octicons" />
          </Right>
        </ListItem>
        <ListItem itemDivider></ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#b25a59'}}>
              <Icon active name="credit-card" type="FontAwesome" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: '#82603c'}}>
                واریز وجه به صورت آنلاین
            </Text>
          </Body>
          <Right>
            <Icon active name="chevron-right" type="Octicons" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#b25a59'}}>
              <Icon active name="attachment" type="MaterialIcons" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: '#82603c'}}>ارسال فیش بانکی</Text>
          </Body>
          <Right>
            <Icon active name="chevron-right" type="Octicons" />
          </Right>
        </ListItem>
        <ListItem itemDivider></ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: '#5985b2'}}>
              <Icon active name="cloud-download" type="MaterialCommunityIcons" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: '#82603c'}}>فرم ها</Text>
          </Body>
          <Right>
            <Icon active name="chevron-right" type="Octicons" />
          </Right>
        </ListItem>
      </Content>
    );
  }
}
