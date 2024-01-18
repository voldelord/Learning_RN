import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/chef.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('./src/assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.titleLogo}>FOOD APP</Text>
      </View>
      <View style={styles.form}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  logoContainer: {
    position: 'absolute',
  },
  titleLogo: {
    color: 'white',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
});
