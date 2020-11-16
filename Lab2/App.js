import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Card from './components/Card';
import CardForm from './components/CardForm';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card />
      </View>
      <View style={styles.formContainer}>
        <CardForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {flex: 1, width: undefined, height: undefined},
  container: {
    flex: 1,
  },
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
