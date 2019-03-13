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
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    login: '',
    password: '',
  }


  render() {
    const {
      login,
      password,
    } = this.state;
    const { navigation, user } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        { user.isLogged && this.signInNavigation() }
        { user.fbSignUp && this.fbSignUp() }
        { !!user.message && this.showMessage() }
        <View>
          <View style={styles.logoImage}>
            <Image
              source={require('images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
              alignSelf="center"
            />
          </View>
          {/* <Text style={styles.title}>Login</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="CPF"
            value={login}
            onChangeText={login => this.setState({ login })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Senha"
            value={password}
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.signIn}
            activeOpacity={0.8}
          >
            { user.isLoading
              ? <ActivityIndicator size="small" color="#FFF" />
              : <Text style={styles.buttonText}> Entrar </Text>
            }
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={this.fbLogin}
            activeOpacity={0.8}
          >
            { user.isFbLoading
              ? <ActivityIndicator size="small" color="#FFF" />
              : (
                <Text>
                  <Icon name="facebook-official" size={28} style={styles.facebookIcon} />
                  <Text style={styles.facebookButtonText}> Entrar com Facebook </Text>
                </Text>
              )
            }
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.singUpButton}
            title="Cadastre-se"
            onPress={() => {
              navigation.navigate('SignUp', { name: 'SignUp' });
            }}
          >
            <Text style={styles.signUpButtonText}> Cadastre-se </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
