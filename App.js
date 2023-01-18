import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export const assets = [
  require('./assets/1.jpg'),
  require('./assets/2.jpg'),
  require('./assets/3.jpg'),
  require('./assets/4.jpg'),
  require('./assets/5.jpg'),
];
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  pictures: {
    width: width * assets.length,
    height,
    flexDirection: 'row',
  },
  picture: {
    width,
    height,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <PanGestureHandler>
          <Animated.View style={styles.pictures}>
            {assets.map(source => {
              <View key={source} style={styles.picture}>
                <Image style={styles.image} {...{source}} />
              </View>;
            })}
          </Animated.View>
        </PanGestureHandler>
        <Text>Hello World!</Text>
      </View>
    </>
  );
};

export default App;
