import React, {createContext, useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Card from './components/Card';
import CardForm from './components/CardForm';

const initialState = {
  cardNumber: '',
  cardHolder: 'FULL NAME',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
  isCardFlipped: false,
};

const App = () => {
  const [state, setState] = useState(initialState);

  const updateStateValues = (keyName, value) => {
    setState({
      ...state,
      [keyName]: value || initialState[keyName],
    });
  };

  //debug
  useEffect(() => {
    console.log('cardnumber: ' + state.cardNumber);
    console.log('cardholder:' + state.cardHolder);
    console.log(state.cardMonth);
    console.log(state.cardYear);
    console.log(state.cardCvv);
    console.log(state.isCardFlipped);
  }, [state]);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card state={state} />
      </View>
      <View style={styles.formContainer}>
        <CardForm state={state} onUpdateState={updateStateValues} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {flex: 1, width: undefined, height: undefined},
  container: {flex: 1},
  cardContainer: {
    flex: 4,
    padding: 10,
  },
  formContainer: {
    flex: 6,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default App;
