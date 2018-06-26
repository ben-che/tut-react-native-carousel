import React from 'react';
// import Image and ScrollView components - these will make up our Carousel
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class Carousel extends React.Component {
    render() {
      return (
        <View style={styles.caroContainer}>
          <Text>Carousel</Text>
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    caroContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  