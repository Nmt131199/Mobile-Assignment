import React, { Component } from "react";
import { Image, ImageBackground } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/background.png");
const drawerImage = require("../../../assets/DrawerLogo.png");
const datas = [
  {
    name: "To Do List",
    route: "TodoList",
    icon: "ios-list-box",
    bg: "#cc0000",
  },
  {
    name: "Your Profile",
    route: "NHProfile",
    icon: "ios-person",
    bg: "#cc0000",
  },
  {
    name: "About Us",
    route: "AboutUs",
    icon: "ios-analytics",
    bg: "#cc0000",
  },
  {
    name: "Sign out",
    route: "Login",
    icon: "ios-key",
    bg: "#48525D"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}>
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 30, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
