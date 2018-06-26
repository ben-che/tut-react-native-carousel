import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      images: ["./images/1.jpg", "./images/2.jpeg", "./images/3.jpeg", "./images/4.jpeg"]
    })
  }

  render() {
    // Pass in desired images into the Carousel component
    return (
      <View style={styles.container}>
        <Text>React Native Carousel</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
