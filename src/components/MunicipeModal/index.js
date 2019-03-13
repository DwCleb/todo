import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { TextInputMask } from 'react-native-masked-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MunicipeActions } from 'store/ducks/municipe';
import ModalDropdown from 'react-native-modal-dropdown';
import Utils from 'utils/utils';
import styles from './styles';

class MunicipeModal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    cpf: PropTypes.string.isRequired,
  };

  state = {
    name: '',
    email: '',
    login: '',
    cities: [],
    states: [],
    cityId: '',
    stateId: '',
    message: null,
    loading: false,
    areaCode: '',
    profileId: 7,
    telephone: '',
    onMonitor: true,
  }

  componentDidMount() {
    const { municipeRegister } = this.props;
    this.setState({ login: municipeRegister });
    this.dropdownCities = React.createRef();
    this.fetchStates();
  }

  fetchStates = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(res => res.json())
      .then(json => this.setState({
        states: json,
      }));
  };

  fetchCities = (UF) => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
      .then(res => res.json())
      .then(json => this.setState({
        cities: json,
      }));
  };

  registerMunicipe = () => {
    console.tron.log('lob');
    this.setState({ loading: true });
    const { insertMunicipe, cleanMunicipeMessage } = this.props;
    const {
      name,
      email,
      login,
      areaCode,
      telephone,
    } = this.state;

    let response = true;
    let message = null;

    try {
      console.tron.log(this.state);
      console.tron.log('empty');
      if (!this.isEmptyMunicipe()) return false;
      console.tron.log('email');
      if (!Utils.validateEmail(email)) {
        message = 'Informe o E-mail corretamente.';
        response = false;
      }
      console.tron.log('phone');
      if (!Utils.validateTelephone(telephone)) {
        message = 'Informe o Telefone corretamente.';
        response = false;
      }
      console.tron.log('ddd');
      if (!Utils.validateDDD(areaCode)) {
        message = 'Informe o DDD corretamente.';
        response = false;
      }
      console.tron.log('cpf');
      if (!Utils.validateCPF(login)) {
        message = 'Informe o CPF corretamente.';
        response = false;
      }
      console.tron.log('nome');
      if (!Utils.validateName(name)) {
        message = 'Informe o Nome corretamente, com mais de 3 caracteres.';
        response = false;
      }
      console.tron.log('erros');
      if (!response) {
        this.setState({ message, loading: false });
        return false;
      }
      console.tron.log('cadas');
      insertMunicipe(this.state);
      cleanMunicipeMessage();

      this.setState({ loading: false });
      return true;
    } catch (error) {
      return false;
    }
  }

  isEmptyMunicipe() {
    const fields = this.state;
    let status = true;
    for (let index in fields) {
      if ((index !== 'message') && (fields[index] != undefined)) {
        if (
          (fields[index].length < 1)
          && (index !== 'loading')
          && (index !== 'profileId')
          && (index !== 'cities')
          && (index !== 'states')
          ) {
            let field;
            if(index === 'name') field = 'Nome Completo';
            else if(index === 'login') field = 'CPF';
            else if(index === 'areaCode') field = 'DDD';
            else if(index === 'telephone') field = 'Telefone';
            else if(index === 'email') field = 'E-mail';
            else if(index === 'password') field = 'Senha';
            else if(index === 'stateId') field = 'Estado';
            else if(index === 'cityId') field = 'Cidade';
          
            this.setState({ message: `O campo ${field} precisa ser preenchido.`, loading: false });
            status = false;
          break;
        }
      }
    }

    return status;
  }

  adjustFrame(style, length) {
    if (length < 4) {
      style.height = length.length * 42;
    }
    return style;
  }

  render() {
    const {
      isVisible,
      toggleModal,
      municipe,
      municipeRegister,
    } = this.props;
    const {
      name,
      email,
      login,
      cities,
      states,
      areaCode,
      telephone,
    } = this.state;
    return (
      <Modal
        isVisible={isVisible}
        style={styles.modal}
      >
        <TouchableOpacity
          disabled={!isVisible}
          style={styles.buttonBack}
          onPress={ () => { toggleModal(); }}
          activeOpacity={0.8}
        >
          <Text style={styles.textBack}> Cancelar </Text>
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={styles.container}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
        >
          <Text style={styles.title}> Cadastro de Munícipe </Text>

          <View>
            {/* campo do nome completo */}
            <Text style={styles.inputTitle}> Nome Completo </Text>
            <TextInput
              style={styles.input}
              value={name}
              name="name"
              placeholder="José da Silva Almeida"
              autoCorrect={false}
              onChangeText={name => this.setState({ name })}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
            />
            {/* campo de CPF  */}
            <Text style={styles.inputTitle}> CPF </Text>
            <TextInputMask
              type="cpf"
              style={styles.input}
              disabled={(login.length === 14)}
              value={(login.length === 14) ? municipeRegister : login}
              maxLength={14}
              placeholder="999.999.999-99"
              autoCorrect={false}
              onChangeText={login => this.setState({ login })}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
            />
            {/* área dos campo de DDD e telefone */}
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={styles.inputTitle}> DDD </Text>
                <TextInput
                  style={styles.inputDDD}
                  value={areaCode}
                  maxLength={2}
                  placeholder="99"
                  autoCorrect={false}
                  onChangeText={areaCode => this.setState({ areaCode })}
                  keyboardType="numeric"
                  autoCapitalize="none"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View>
                <Text style={styles.inputTitle}> Telefone </Text>
                <TextInputMask
                  type="cel-phone"
                  style={styles.inputTelephone}
                  value={telephone}
                  options={ { withDDD: false } }
                  maxLength={10}
                  placeholder="9999-9999"
                  autoCorrect={false}
                  onChangeText={telephone => this.setState({ telephone })}
                  autoCapitalize="none"
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            {/* campo de E-mail */}
            <Text style={styles.inputTitle}> E-mail </Text>
            <TextInput
              style={styles.input}
              value={email}
              placeholder="E-mail"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
            />
            {/* campo de seleção de estado */}
            <Text style={styles.inputTitle}> Estado </Text>
            <ModalDropdown
              style={styles.pickerStyle}
              options={states.map(state => `${state.nome}`)}
              textStyle={styles.pickerTextStyle}
              defaultValue="Selecione o estado"
              dropdownStyle={styles.pickerDropdownStyle}
              dropdownTextStyle={styles.pickerDropdownTextStyle}
              dropdownTextHighlightStyle={styles.pickerDropdownTextHighlightStyle}
              showsVerticalScrollIndicator={false}
              adjustFrame={style => this.adjustFrame(style, states.length)}
              onSelect={ (index) => {
                this.dropdownCities.current.select(-1);
                this.setState({
                  stateId: states[index].id,
                });
                this.fetchCities(states[index].id);
              }
              }
            />
            {/* campo de seleção de cidade */}
            <Text style={styles.inputTitle}> Cidade </Text>
            <ModalDropdown
              ref={this.dropdownCities}
              style={styles.pickerStyle}
              options={cities.map(city => `${city.nome}`)}
              textStyle={styles.pickerTextStyle}
              defaultValue="Selecione a cidade"
              dropdownStyle={styles.pickerDropdownStyle}
              dropdownTextStyle={styles.pickerDropdownTextStyle}
              dropdownTextHighlightStyle={styles.pickerDropdownTextHighlightStyle}
              adjustFrame={style => this.adjustFrame(style, cities.length)}
              showsVerticalScrollIndicator={false}
              onSelect={ (index) => {
                this.setState({
                  cityId: cities[index].id,
                });
              }
              }
            />
            {/* botão de cadastro */}
            <TouchableOpacity
              style={styles.button}
              onPress={ () => { this.registerMunicipe(); }}
              activeOpacity={0.8}
            >
              { municipe.isLoading
                ? <ActivityIndicator size="small" color="#FFF" />
                : <Text style={styles.buttonText}> Cadastrar </Text>
              }
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    );
  }
}
const mapStateToProps = state => ({
  municipe: state.municipe,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...MunicipeActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MunicipeModal);
