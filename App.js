import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const App = () => {

  const handleLocalImagePress = () => {
    alert('You clicked the school image');
  };

  return (
    <View style={styles.container}>

      {/* Local asset image */}
      <TouchableHighlight onPress={handleLocalImagePress} underlayColor='yellow'>
        <View>
          <Image
            source={require('./assets/dtc.jpg')}
            style={styles.localImage}
            resizeMode='cover'
            fadeDuration={1000}
          />
          <Text style={styles.localCaption}>Davis Technical College</Text>
        </View>
      </TouchableHighlight>

      {/* remote URL image */}
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor='yellow'
        onPress={() => alert('You pressed the Castle')}
      >
        <View>
          <Image
            source={{ uri: 'https://picsum.photos/id/1040/300/200' }}
            style={styles.remoteImage}
            resizeMode='cover'
          />
          <Text style={styles.remoteCaption}>Neuschwanstein Castle</Text>
        </View>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tan',
  },
  localImage: {
    height: 400,
    width: 400,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  localCaption: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  remoteImage: {
    height: 200,
    width: 300,
    marginBottom: 10,
  },
  remoteCaption: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default App;
