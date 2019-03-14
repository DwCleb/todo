/**
 * Page for Login 
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    login: '',
    loading: false,
    password: '',
  }


  render() {
    const {
      login,
      loading,
      password,
    } = this.state;
    const { navigation, user } = this.props;
    return (
      <View style={styles.container}> 
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: 100,
            marginLeft: 100,
          }}>
          <SvgUri
          width="200"
          height="200"
              source={{uri: 'https://github.com/DwCleb/todo/blob/master/src/assets/Interse%C3%A7%C3%A3o%201.svg'}}
            />
          </View>
        <View style={styles.contentView}>
          <View>
            <SvgUri
              style={{flex: 1,justifyContent: 'center', alignItems: 'center', left: 20, top: -40}}
              source={require('assets/logo.svg')}
            />
          </View>
          <Text style={[styles.title, { marginBottom: 25 }]}>GoodTask</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Login"
            value={login}
            onChangeText={login => this.setState({ login })}
            underlineColorAndroid="transparent"
            placeholderTextColor="#FFFFFF"
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            value={password}
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="transparent"
            placeholderTextColor="#FFFFFF"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.signIn}
            activeOpacity={0.8}
          >
            { loading
              ? <ActivityIndicator size="small" color="#FFF" />
              : <Text style={styles.buttonText}> Enter </Text>
            }
          </TouchableOpacity>
          </View>


          <View style={styles.signUpView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.signUpButton}
              title="Don't have account"
            >
              <Text style={styles.signUpButtonText}> Don't have account </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

export default Login;
