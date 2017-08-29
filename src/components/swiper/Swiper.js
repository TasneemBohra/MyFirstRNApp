import React from 'react';
import { ScrollView, Image } from 'react-native';

const Swiper = (props) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
  >
      {renderImages(props.images)}
  </ScrollView>
);

const renderImages = images =>
  images.map(image => <Image source={{ uri: image }} style={styles.imageStyle} />);


const styles = {
  imageStyle: {
    flex: 1,
    height: 400,
    width: 350
  }
};

export default Swiper;
