import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  View,
  ScrollView,
  Text,
} from 'react-native';

const images = [
  'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg',
  'https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518__340.jpg',
  'https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281__340.jpg',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const App = () => {
  const [imgActive, setImgActive] = useState(0);

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={{uri: e}}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive === index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    position: 'static',
    width: WIDTH,
    height: HEIGHT * 0.5,
    opacity: 0.9,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margi: 3,
    colr: 'black',
  },
  dot: {
    margin: 3,
    color: '#FFF',
  },
});

export default App;
