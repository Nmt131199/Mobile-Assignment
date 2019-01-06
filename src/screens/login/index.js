import React, { Component } from "react";
import { ImageBackground, View, StatusBar,SafeAreaView,TextInput,TouchableOpacity,Image } from "react-native";
import { Container, Button, H3, Text, Toast } from "native-base";

import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';

const bgImage = require("../../../assets/background.png");
const logoImage = require("../../../assets/logo.png");

class Home extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      showPassWord: true,
      press: false
    }
  }
 
  // hide/display the visibility of the password
  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPassWord: false, press: true })
    }
    else {
      this.setState({ showPassWord: true, press: false })
    }
  }
 
  //check the valid username + password to acquire accessibility
  verifyLogin = () => {
    if(this.state.username == 'Admin' && this.state.password == '1'){
      Toast.show({
        text: 'Welcome back ' + this.state.username,
        buttonText: "Ok",
        type: "success",duration: 2000
      })
      this.props.navigation.navigate("TodoList")
    }
    else if(this.state.username == '' && this.state.password == ''){
      Toast.show({
                text: "Please enter correct username/password",
                buttonText: "Ok",
                type: "danger",
              })
    }
    else{
      Toast.show({
                text: "Wrong username/password!",
                buttonText: "Ok",
                type: "danger"
              })
    }
  }
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
        source={bgImage}
        style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logo} />
        </View>

        <SafeAreaView>
          <Ionicons name="ios-person" size={28}
            style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} />
          <TextInput
            value={this.state.username}
            onChangeText={(s) => this.setState({ username: s })}
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent' />
        </SafeAreaView>

        <SafeAreaView>
          <Ionicons name="ios-lock" size={28} color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon} />
          <TextInput
            value={this.state.password}
            onChangeText={(s) => this.setState({ password: s })}
            style={styles.input}
            //this will eveluate the state "showPassWord"
            secureTextEntry={this.state.showPassWord}
            placeholder={'Password'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent' />

          <TouchableOpacity style={styles.btnShowPass}
            //when press on the eye icon, the showPass function will be executed
            onPress={this.showPass.bind(this)}>
            <Ionicons name={this.state.press == false ? "ios-eye" : 'ios-eye-off'} size={30} color={'rgba(255, 255, 255, 0.7)'} />

          </TouchableOpacity>
        </SafeAreaView>

        <TouchableOpacity style={styles.btnLogin}
          onPress={this.verifyLogin.bind(this)}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: 'row', height: 100 }}>
          <Text style={styles.signUpText}>
            Don't have an account ?
          </Text>

          <TouchableOpacity style={styles.btnSignup}>
            <Text onPress= {() => this.props.navigation.navigate("SignUp")}
            style={styles.textSignup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </Container>
    );
  }
}

export default Home;
