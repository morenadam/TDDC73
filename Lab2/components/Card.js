import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';

const Card = ({state}) => {
  let random = Math.floor(Math.random() * 25 + 1);
  let tempCardProp = 'amex';
  const image = {
    uri: `https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${random}.jpeg`,
  };
  const chip = {
    uri: `https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png`,
  };
  const cardType = {
    uri: `https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${tempCardProp}.png`,
  };

  const Front = () => {
    return (
      <ImageBackground source={image} style={styles.card}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Image source={chip} style={styles.chip} />
            <Image source={cardType} style={styles.cardType} />
          </View>
          <Text style={styles.number}>#### #### #### ####</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.cardHolder}>Card Holder</Text>
              <Text style={styles.cardHolder}>Full Name</Text>
            </View>
            <View>
              <Text style={styles.expires}>Expires</Text>
              <Text style={styles.expires}>MM/YY</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const Back = () => {
    return (
      <ImageBackground source={image} style={styles.card}>
        <Text style={styles.stripe}></Text>
        <View style={styles.backInfo}>
          <Text style={styles.expires}>CVV</Text>
          <View style={styles.cvv}>
            <Text>***</Text>
          </View>
          <Image source={cardType} style={styles.cardType} />
        </View>
      </ImageBackground>
    );
  };

  return state.isCardFlipped ? <Back /> : <Front />;
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 90,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  card: {
    flex: 1,
    resizeMode: 'cover',
    borderWidth: 0,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardHolder: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  expires: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  number: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    letterSpacing: 3,
  },
  chip: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  cardType: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
  stripe: {
    marginTop: 20,
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.82)',
  },
  backInfo: {
    marginTop: 20,
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingLeft: 20,
  },
  cvv: {
    marginTop: 5,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default Card;
