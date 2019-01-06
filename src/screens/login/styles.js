const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const { width: WIDTH } = Dimensions.get('window')

export default {
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    marginTop: 10,
    padding: 5,
    width: WIDTH - 55,
    height: 40,
    borderRadius: 25,
    marginHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white',
    paddingLeft: 45
  },
  inputIcon: {
    position: 'absolute',
    top: 14,
    left: 37
  },
  logo: {
    width: 700,
    height: 300,
    marginTop: 100
  },
  logoContainer: {
    alignItems: 'center'
  },

  btnShowPass: {
    position: 'absolute',
    top: 14,
    right: 37
  },

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#ff8c66',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5
  },

  btnSignup: {
    width: WIDTH - 350,
    height: 20,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 5
  },

  textLogin: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center'
  },

  textSignup: {
    color: 'rgb(102, 204, 255)',
    
    textAlign: 'center'
  },


  signUpText: {
    color: 'rgba(255, 255, 255, 0.7)',
 
    marginRight: 10,
    marginTop: 5
  }


};
