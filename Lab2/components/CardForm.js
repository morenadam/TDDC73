import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CardForm = ({state, onUpdateState}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberMaxLength, setCardNumberMaxLength] = useState(20);

  const onCardNumberChange = (text, name) => {
    let cardNumber = text;
    //Replace everything except numbers
    text = text.replace(/\D/g, '');
    if (/^3[47]\d{0,13}$/.test(text)) {
      // american express, 15 digits
      cardNumber = text
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
      setCardNumberMaxLength(15);
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(text)) {
      // diner's club, 14 digits
      cardNumber = text
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
      setCardNumberMaxLength(14);
    } else if (/^\d{0,16}$/.test(text)) {
      // regular cc number, 16 digits
      cardNumber = text
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
        .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
      setCardNumberMaxLength(14);
    }
    setCardNumber(text);
    onUpdateState(name, cardNumber);
  };

  return (
    <View style={styles.container}>
      <Text>Card Number</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onCardNumberChange(text, 'cardNumber')}
        value={cardNumber}
        maxLength={cardNumberMaxLength}
      />
      <Text>Card Holder</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        Value={state.cardName}
        maxLength={cardNumberMaxLength}
      />
      <View style={styles.row}>
        <View>
          <Text style={{marginLeft: 5}}>Expiration Date</Text>
          <View style={styles.row}>
            <Picker
              selectedValue={'Month'}
              style={{height: 50, width: 120}}
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
              <Picker.Item label="Month" value="0" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>
            <Picker
              selectedValue={'Year'}
              style={{
                height: 50,
                width: 120,
              }}
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
              <Picker.Item label="Year" value="0" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2021" value="2020" />
              <Picker.Item label="2022" value="2020" />
              <Picker.Item label="2023" value="2020" />
              <Picker.Item label="2024" value="2020" />
            </Picker>
          </View>
        </View>
        <View>
          <Text>CVV</Text>
          <TextInput
            style={{
              height: 40,
              width: 130,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 3,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={state.cvv}
          />
        </View>
      </View>
      <Button title="Submit" onPress={() => Alert.alert('Card submitted')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    marginTop: 5,
    marginBottom: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CardForm;
