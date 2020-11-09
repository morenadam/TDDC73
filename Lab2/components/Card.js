import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = () => {
  return (
    <View>
      <Image source={require('../assets/images/1.jpeg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {flex: 1, width: undefined, height: undefined},
  container: {
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 90,
    marginBottom: 15,
  },
});

export default Card;
