import React from "react";
import { Root, Image } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Login from "./screens/login/";
import AboutUs from "./screens/aboutus/";
import TodoList from "./screens/todolist/";
import NHProfile from "./screens/profilepage/";
import SignUp from "./screens/signup";
import SideBar from "./screens/sidebar";


// const Drawer = DrawerNavigator(
//   {
//     Login: { screen: Login },
//     SignUp: {screen: SignUp},
//     TodoList: { screen: TodoList},
//     AboutUs: { screen: AboutUs },
//     NHProfile: { screen: NHProfile }
//   },
//   {
//     initialRouteName: "Login",
//     contentOptions: {
//       activeTintColor: "#e91e63"
//     },
//     contentComponent: props => <SideBar {...props} />
//   }
// );

// const AppNavigator = StackNavigator(
//   {
//     Drawer: { screen: Drawer },
//   },
//   {
//     initialRouteName: "Drawer",
//     headerMode: "none"
//   }
// );
const Drawer = DrawerNavigator({
  Login: {
    screen: Login,
    // navigationOptions: ({ navigation }) => ({
    //   tabBarVisible: false,
    //   drawerLockMode: 'locked-closed'
    // })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      drawerLockMode: 'locked-closed'
    })
  },
  TodoList: { screen: TodoList },
  AboutUs: { screen: AboutUs },
  NHProfile: { screen: NHProfile }
},
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentOptions: {
      activeTintColor: '#ffcc99',

    },
    contentComponent: props => <SideBar {...props} />
  });

const AppNavigator = StackNavigator(
  {
    Drawer: {
      screen: Drawer,
      navigationOptions: ({ navigation }) => ({
        swipeEnabled: false
      }),
    },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
    navigationOptions: {
     headerStyle: {
       backgroundColor: '#000066'
     }
    }
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
