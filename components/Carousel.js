import React from 'react';
// import Image and Scrollview components - these will make up our Carousel
//  importing Dimensions allows us to use a method to get the dimensions of the window
//  imported Animated to allow for fluid swiping animations and transitions
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Animated } from 'react-native';

export default class Carousel extends React.Component {
    componentDidMount = () => {
        console.log(this.props.images[0])
    }
    
    render() {
        // we declare some constants here for calcuations later on:
        // allows us to get the width of the window
        const deviceWidth = Dimensions.get('window').width
        const FIXED_CIRC_WIDTH = 20
        const CIRC_PADDING = 10

        // calculations are done here:
        let animVal = new Animated.Value(0)
        let numItems = this.props.images.length
        let itemWidth = (FIXED_CIRC_WIDTH / numItems) - ((numItems - 1) * CIRC_PADDING) // allows us to add spacing between circles evenly

        // declare an array for images and for circles
        let imageArray = []
        let circArray = []

        // loop through image array to create each image component
        this.props.images.forEach((image, i) => {
            console.log(image, i)
            const imageElem = (
                <Image
                  key={`image${i}`}
                  source={{uri: image}}
                  style={{ width: deviceWidth }}
                />
              )
              // adding images to array for render
              imageArray.push(imageElem)
        })

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
  