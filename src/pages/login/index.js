/**
 * Page for Login
 * @author: Cleber
 */

import React, { Component } from 'react';
import Svg,{
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
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
import Intersecao1 from 'components/Intersecao1';
import Intersecao2 from 'components/Intersecao2';
import Agrupar1 from 'components/Agrupar1';
import Agrupar2 from 'components/Agrupar2';
import Logo from 'components/Logo';
import styles from './styles';

class Login extends Component {

  state = {
    login: '',
    loading: false,
    password: '',
  }

  signIn = () => {
    const { navigation } = this.props;
    navigation.navigate('Stack');
  }


  render() {
    const {
      login,
      loading,
      password,
    } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
        <View
          style={styles.intersecao1}>
          <Intersecao1 PWidth="100" PHeight="100" />
        </View>
        <View
          style={styles.agrupar1}>
          <Agrupar1 />
        </View>
        <View style={styles.contentView}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Logo />
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>

          <Text style={styles.titleG}>G</Text>
          <Text style={styles.titleP}>:</Text>
          </View>
          <Text style={styles.title}>GoodTask</Text>
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
            <View
              style={styles.agrupar2}>
              <Agrupar2 />
            </View>
            <View
              style={styles.intersecao2}>
              <Intersecao2 />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.signUpButton}
              title="Don't have account"
            >
              <Text style={styles.signUpButtonText}> Don't have account </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    );
  }
}

export default Login;
