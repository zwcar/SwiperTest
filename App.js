import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
 
//...
export default class SwiperComponent extends Component {
render() {
  return (
    <GallerySwiper
      images={[
        {source: require("./components/images/cat.jpg"),
          dimensions: { width: 1080, height: 1920 } },
        {source: require("./components/images/dog.jpg"),
          dimensions: { width: 1080, height: 1920 } },
        {source: require("./components/images/otter.jpg"),
          dimensions: { width: 1080, height: 1920 } },
        {source: require("./components/images/frog.png"),
          dimensions: { width: 1080, height: 1920 } },
      ]}
      initialNumToRender={4}
      sensitiveScroll={true}
    />
  );}
};