import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableHighlight,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Carousel = ({items}) => {
  const Card = ({cardInfo, index}) => (
    <TouchableOpacity style={styles.cardContainer} key={index}>
      <Image
        source={{uri: 'https://picsum.photos/700'}}
        style={styles.coverImage}
      />
      <View>
        <Text style={styles.title}>{cardInfo.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
      <View style={styles.body}>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <View>
              <FontAwesomeIcon icon={faArrowLeft} size={32} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {items.map((card, index) => (
            <Card cardInfo={card} index={index}></Card>
          ))}
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View>
            <FontAwesomeIcon icon={faArrowRight} size={32} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {flexDirection: 'row', justifyContent: 'center', paddingTop: 10},
  cardContainer: {
    borderWidth: 1,
    overflow: 'hidden',
    margin: 5,
    width: 95,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  coverImage: {
    width: '100%',
    height: 140,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  title: {
    padding: 10,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    margin: 10,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});

export default Carousel;
