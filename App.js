import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from './components/Carousel'

export default class App extends React.Component {
  // saving image paths in state
  constructor() {
    super();
    this.state = {
      images : []
    }
  }

  // componentDidMount used to simulate a get request to database to grab required images
  //  often, in production, this will have more server logic, but we can save that for another
  //  tutorial
  componentDidMount = () => {
    this.setState({
      images: ["http://www.gstatic.com/webp/gallery/1.jpg", "http://www.gstatic.com/webp/gallery/2.jpg", "http://www.gstatic.com/webp/gallery/3.jpg", "http://www.gstatic.com/webp/gallery/4.jpg"]
    })
  }

  render() {
    // Pass in desired images into the Carousel component
    return (
      <View style={styles.container}>
        <Text>React Native Carousel</Text>
        <Carousel 
        images={this.state.images}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  },
});
