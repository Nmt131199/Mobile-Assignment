import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  Alert,
  SafeAreaView
} from 'react-native';

import { Form, Input, Item , Label} from 'native-base';

const bgImage = require("../../../assets/background.png");
//const bgImage = require("./images/background.png");
const { width: WIDTH } = Dimensions.get('window');


class SignUp extends React.Component {
  render() {
    return (
      <ImageBackground
        source={bgImage}
        style={styles.backgroundContainer}>
        <Text style={styles.headline}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <Form>
            <Item stackedLabel>
              <Label>First Name:</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Last Name:</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Email:</Label>
              <Input textContentType='emailAddress'/>
            </Item>
            <Item stackedLabel>
              <Label>Phone Number:</Label>
              <Input keyboardType= 'numeric'/>
            </Item>
            <Item stackedLabel>
              <Label>Username:</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Password:</Label>
              <Input />
            </Item>
          </Form>
        </View>

        <TouchableOpacity style={styles.btnSignup}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: 'row', height: 100 }}>
          <Text style={styles.signUpText}>
            Already had an account ?
          </Text>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textLogin}
             onPress={() => this.props.navigation.navigate("Login")}
            >Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>




    );
  }
}
export default SignUp;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  headline: {
    color: 'white',
    fontSize: 50,
    fontWeight: '500',
    marginTop: 30,
    marginLeft: 30,
    opacity: 0.5
  },
  inputContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 10,
    padding: 15,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  btnSignup:{
    width: WIDTH - 110,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#ff8c66',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  btnLogin: {
    width: WIDTH - 350,
    height: 20,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 5
  },
  textSignUp: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  },
  textLogin: {
    color: 'rgb(102, 204, 255)',
    fontSize: 16,
    textAlign: 'center'
  },
  signUpText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    marginRight: 10,
    marginLeft: 80,
    marginTop: 5
  }

});
