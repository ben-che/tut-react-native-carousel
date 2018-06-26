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
        const FIXED_CIRC_WIDTH = 200
        const CIRC_MARGIN = 10

        // calculations are done here:
        let animVal = new Animated.Value(0)
        let numItems = this.props.images.length
        let itemWidth = (FIXED_CIRC_WIDTH / numItems) - ((numItems - 1) * CIRC_MARGIN) // allows us to add spacing between circles evenly

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

              // interpolation maps input ranges to output ranges, smooth animation
              const circVal = animVal.interpolate({
                inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
                outputRange: [-itemWidth, itemWidth],
                extrapolate: 'clamp',
              })

              // creating circles to display on the images
              const oneCirc = (
                <View
                  key={`circ${i}`}
                  style={[
                    styles.track,
                    {
                      width: this.itemWidth,
                      marginLeft: i === 0 ? 0 : CIRC_MARGIN,
                    },
                  ]}
                >
                  <Animated.View
        
                    style={[
                      styles.circ,
                      {
                        width: itemWidth,
                        transform: [
                          { translateX: circVal },
                        ],
                      },
                    ]}
                  />
                </View>
              )
              circArray.push(oneCirc)
        })

        return (
            <View>
                <View
                    style={styles.caroContainer}
                    flex={1}
                >
                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={10}
                    pagingEnabled
                    onScroll={
                        Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                        )
                    }
                    >

                    {imageArray}

                    </ScrollView>
                    <View
                    style={styles.circContainer}
                    >
                    {circArray}
                    </View>
                </View>
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
    circContainer: {
        position: 'absolute',
        zIndex: 2,
        top: 40,
        flexDirection: 'row',
        backgroundColor: '#ccc',
      },
      track: {
        backgroundColor: '#ccc',
        overflow: 'hidden',
        height: 2,
      },
      circ: {
        backgroundColor: '#5294d6',
        height: 200,
        position: 'absolute',
        left: 0,
        top: 0,
      },
  });
  