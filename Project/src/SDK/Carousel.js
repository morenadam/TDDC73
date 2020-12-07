import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Card = ({cardInfo, rounded, callback}) => (
  <TouchableOpacity
    style={{...styles.card, borderRadius: rounded ? 10 : 0}}
    onPress={callback ? () => callback(cardInfo) : () => {}}>
    <Image source={{uri: cardInfo.img}} style={styles.coverImage} />
    {cardInfo.title && (
      <View>
        <Text style={styles.title}>{cardInfo.title}</Text>
      </View>
    )}
  </TouchableOpacity>
);

const Carousel = (props) => {
  const [pageIndex, setPageIndex] = useState(0);
  let dots = [];
  let myColor = props.colorTheme ? props.colorTheme : '#39CCCC';
  let itemsPerPage = props.itemsPerPage ? props.itemsPerPage : 3;
  let numberOfPages = props.items.length / itemsPerPage; // get number of pages that will display cards

  // set dots to display number of existing pages
  // if active page, set colored dot, otherwise grey dot
  for (let i = 0; i < numberOfPages; i++) {
    pageIndex === i
      ? dots.push(
          <View key={i} style={{...styles.circle, backgroundColor: myColor}} />,
        )
      : dots.push(
          <View key={i} style={{...styles.circle, backgroundColor: 'grey'}} />,
        );
  }

  return (
    <View>
      <View style={styles.header}>{dots}</View>
      <View style={styles.body}>
        <View>
          <TouchableOpacity
            // arrow to go left
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
        <View style={styles.cardsContainer}>
          {props.items
            //get correct range of items
            .slice(
              pageIndex * itemsPerPage,
              pageIndex * itemsPerPage + itemsPerPage,
            )
            .map((card, index) => (
              <Card
                key={index}
                cardInfo={card}
                rounded={props.rounded}
                callback={props.onPress}
              />
            ))}
        </View>
        <View>
          <TouchableOpacity
            // arrow to go right
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
    </View>
  );
};

const styles = StyleSheet.create({
  header: {flexDirection: 'row', justifyContent: 'center', paddingTop: 10},
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    borderWidth: 1,
    overflow: 'hidden',
    margin: 5,
    width: 95,
  },
  body: {
    flexDirection: 'row',
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
  },
});

export default Carousel;
