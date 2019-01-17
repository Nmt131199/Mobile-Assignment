import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Thumbnail,
  List,
  ListItem,
  Text,
  Body,
  Left,
  Right,
  View,
  Form,
  Item,
  Label,
  Input
} from "native-base";

import { ImageBackground} from 'react-native';
import styles from "./styles";

const logo = require("../../../assets/splashscreen.png");
const cover = require("../../../assets/AboutUsCover.png");
const background = require("../../../assets/bg3.jpg");

// const datas = [
//   {
//     img: logo,
//     text: "Nguyen Manh Triet",
//     note: "Its time to build a difference . ."
//   },
//   {
//     img: logo,
//     text: "Robert Dooley",
//     note: "One needs courage to be happy and smiling all time . . "
//   },
//   {
//     img: logo,
//     text: "Duong Cong Hau",
//     note: "Time changes everything . ."
//   }];

class NHProfile extends Component {
  constructor() {
    super()
    this.state = {
      textValue: 'Edit',
      isEditable: false
    }
  }

  // enable/disable the text input for profile page
  enableEdit = () => {
    if (this.state.textValue == 'Edit'){
      this.setState({
        textValue: 'Save',
        isEditable: !this.state.isEditable
      })
    }
    else if (this.state.textValue == 'Save'){
      this.setState({
        textValue: 'Edit',
        isEditable: !this.state.isEditable
      })
    }
  }

  render() {
    //console.log(typeof(this.state.isEditable))
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Your Profile</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={this.enableEdit.bind(this)}>
              <Text>{this.state.textValue}</Text>
            </Button>
          </Right>
        </Header>


        <ImageBackground source={background} style={styles.profileBg}>
          <Content>
            <View style={styles.center}>
              <Thumbnail Xlarge source={cover} style={[styles.mb10, styles.mt20]} />
              <Text style={styles.username}>Nguyen Manh Triet</Text>
            </View>
            <View style={styles.profileForm}>
              <Form>
                <Item stackedLabel>
                  <Label style={[styles.wordBold]}>First name</Label>
                  <Input editable={this.state.isEditable} />
                </Item>
                <Item stackedLabel>
                  <Label style={[styles.wordBold]}>Last name</Label>
                  <Input editable={this.state.isEditable} />
                </Item>
                <Item stackedLabel>
                  <Label style={[styles.wordBold]}>Email</Label>
                  <Input textContentType='emailAddress' editable={this.state.isEditable} />
                </Item>
                <Item stackedLabel>
                  <Label style={[styles.wordBold]}>Phone number</Label>
                  <Input keyboardType='numeric' editable={this.state.isEditable} />
                </Item>
              </Form>
            </View>
          </Content>
        </ImageBackground>



      </Container>
    );
  }
}

export default NHProfile;
