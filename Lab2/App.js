import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Card from './components/Card';
import CardForm from './components/CardForm';

const App = () => {
  return (
    <View style={styles.text}>
      <View>
        <Card />
      </View>
      <View>
        <CardForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {flex: 1, width: undefined, height: undefined},
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default App;
