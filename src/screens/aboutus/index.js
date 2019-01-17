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
  View
} from "native-base";
import styles from "./styles";
import {ImageBackground} from "react-native";

const logo1 = require("../../../assets/triet_icon.jpg");
const logo2 = require("../../../assets/robert_icon.jpg");
const logo3 = require("../../../assets/hau_icon.jpg");

const cover = require("../../../assets/AboutUsCover.png");
const background= require("../../../assets/bg4.jpg");
const datas = [
  {
    img: logo1,
    text: "Nguyen Manh Triet",
    note: "Its time to build a difference"
  },
  {
    img: logo2,
    text: "Robert Dooley",
    note: "One needs courage to be happy and smiling all time"
  },
  {
    img: logo3,
    text: "Duong Cong Hau",
    note: "Time changes everything"
  }];

class AboutUs extends Component {
  
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>About Us</Title>
          </Body>
          <Right />
        </Header>

        <ImageBackground source={background} style={styles.aboutUsBg}>
        <Content padder>
          <View style={styles.center}>
          <Thumbnail Xlarge source={cover} style={styles.mb10} />
          </View>
          <View >
            <Text style={styles.companyName}>Me.Organized</Text>
            <Text style={styles.description}> Very simple To-do list Application {"\n"} built for Android and iOS users. {"\n"}Hope you enjoy</Text>
            <Text style={styles.meetTheTeam}>Meet the team</Text>
    
            <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail  mediumTeam source={data.img}  style={{marginBottom: 15}}/>
                </Left>
                <Body>
                  <Text style={{fontSize: 18}}>
                    {data.text}
                  </Text>
                  <Text style={{color: "white"}} note>
                    {data.note}
                  </Text>
                </Body>
              </ListItem>}
          />
        
          </View>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default AboutUs;
