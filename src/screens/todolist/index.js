import React, { Component } from "react";
import { ListView, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Form,
  Item,
  Input,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const datas = [
  {
    text: "Go to supermarket",
    note: "January 9 at 5:00 AM"
  },
  {
    text: "Buy milk",
    note: "Tomorrow"
  },
  {
    text: "Work out",
    note: "3:00 PM"
  },
];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
        <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          
          <Body style={{ flex: 3 }}>
            <Title>Todos</Title>
          </Body>
          <Right></Right>
        </Header>

        <Content>
        
          <Form>
            <Item rounded style={{marginTop : 10, marginBottom: 10, marginLeft: 10, marginRight: 10}}>
              <Input placeholder="Add new task" />
              <Right>
            <Button
              transparent
              onPress={() => Alert.alert("Add new task")} 
            >
              <Icon name="add" />
            </Button>  
          </Right>
            </Item>
          </Form>
      
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem style={{ paddingLeft: 20 }}>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button
                full
                onPress={() => alert(data)}
                style={{
                  backgroundColor: "#CCC",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />

        <Button transparent info style={[styles.mb15, styles.center]}>
            <Text>Show completed todos</Text>
          </Button>
        </Content>
      </Container>
      

      
    );
  }
}

export default TodoList;
