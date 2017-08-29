// Import libs for making a Component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native'; // Destructured import
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';
import Swiper from './swiper/Swiper';
//<Image source={{ uri: image }} style={styles.imageStyle} />
// Make a Component
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <Card>
      <CardItem style={styles.cardContainerStyles}>
        <View>
          <Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
        </View>
        <View style={styles.textContainerStyle}>
          <Text style={styles.textTitleStyle} >{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Swiper images={[image, image, image]} />
      </CardItem>

      <CardItem>
        <Button onPress={() => Linking.openURL(url)} >
        Buy Now
        </Button>
      </CardItem>
    </Card>
  );
};

const styles = {
  cardContainerStyles: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10
  },
  textTitleStyle: {
    fontSize: 18,
    color: '#000'
  },
  thumbnailStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1
  },
  imageStyle: {
    flex: 1,
    height: 400
  }
};

export default AlbumDetail;
