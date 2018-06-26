import React from 'react';
// import Image and Scrollview components - these will make up our Carousel
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Carousel extends React.Component {
    componentDidMount = () => {
        console.log(this.props.images[0])
    }
    render() {
      return (
        <View style={styles.caroContainer}>
            <ScrollView
                horizontal //scrolling left to right instead of top to bottom
                showsHorizontalScrollIndicator={false} //hides native scrollbar
                scrollEventThrottle={10} //how often we update the position of the indicator bar
                pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
            />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    caroContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 40
    },
  });
  