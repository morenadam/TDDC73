import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Card = ({cardInfo, index}) => (
  <TouchableOpacity style={styles.cardContainer} key={index}>
    <Image source={{uri: cardInfo.img}} style={styles.coverImage} />
    <View>
      <Text style={styles.title}>{cardInfo.title}</Text>
    </View>
  </TouchableOpacity>
);

const Carousel = ({items, itemsPerPage}) => {
  const [pageIndex, setPageIndex] = useState(0);

  let dots = [];
  let numberOfPages = items.length / itemsPerPage;
  for (let i = 0; i < numberOfPages; i++) {
    pageIndex === i
      ? dots.push(<View style={styles.activeCircle} />)
      : dots.push(<View style={styles.circle} />);
  }

  return (
    <View>
      <View style={styles.header}>{dots}</View>
      <View style={styles.body}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setPageIndex(pageIndex - 1);
            }}
            disabled={pageIndex === 0}>
            <View>
              <FontAwesomeIcon
                icon={faArrowLeft}
                size={32}
                color={pageIndex === 0 ? 'grey' : 'black'}
              />
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
          {items
            .slice(
              pageIndex * itemsPerPage,
              pageIndex * itemsPerPage + itemsPerPage,
            )
            .map((card, index) => (
              <Card cardInfo={card} index={index}></Card>
            ))}
        </View>
        <TouchableOpacity
          onPress={() => {
            setPageIndex(pageIndex + 1);
          }}
          disabled={pageIndex === numberOfPages - 1}>
          <View>
            <FontAwesomeIcon
              icon={faArrowRight}
              size={32}
              color={pageIndex === numberOfPages - 1 ? 'grey' : 'black'}
            />
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
    borderRadius: 10,
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
    backgroundColor: 'grey',
  },
  activeCircle: {
    width: 10,
    height: 10,
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#0074D9',
  },
});

export default Carousel;
