/**
 * Main menu
 *
 * @author: Ramon
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
}  from 'react-native';
import { SafeAreaView, NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';
import MenuItem from 'components/MenuItem';
import Utils from 'utils/utils';
import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Hello!',
  }
  // static navigationOptions = ({ navigation }) => ({
  //   headerLeft: <HeaderLeft navigation={navigation} />,
  // })
  state = {
    loading: false,
  };

  navigateOnPress(route) {
    const { navigation } = this.props;
    navigation.navigate(route);
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
       
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer} bounces={false}>
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('EticketBuy')} route="" icon="car" title="Estacionar" />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('CreditBuy')} route="" icon="money" title="Comprar Créditos" />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('CreditExtract')} route="" icon="list-alt" title="Extrato de Créditos" />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('EticketExtract')} route="" icon="ticket" title="Extrato de e-ticket" />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('VehicleRegister')} route="" icon="plus" title="Cadastrar Veículo" />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('AddressRegister')} route="" icon="home" title="Cadastrar Endereço" />
          <MenuItem navigation={navigation} onPress={() => this.signOut()} route="" icon="sign-out" title="Sair" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Main;
