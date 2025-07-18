import GetStarted from '@/components/GetStarted';
import Login from '@/components/Login';
import { useState } from 'react';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const image = {uri: "https://w0.peakpx.com/wallpaper/479/900/HD-wallpaper-gradient-purple-blue-gradient-thumbnail.jpg"};

export default function App() {
  // choose whether to render login or get started
  const [showLogin, setShowLogin] = useState(false);
  // first, make the Pressable animatable
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage}>
        {showLogin ? (<Login />) : (<Animated.View entering={FadeInDown}><GetStarted togglelogin={setShowLogin}/></Animated.View>)}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#25292e',
    padding: 8,
  },
  backgroundImage: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100
  },
});
