import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const image = {uri: "https://w0.peakpx.com/wallpaper/479/900/HD-wallpaper-gradient-purple-blue-gradient-thumbnail.jpg"};

export default function App() {
  // first, make the Pressable animatable
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  // select what to be animated
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  // define how the animation works
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }]
    };
  })

  // define how pressing changes the shared values
  const on_press_in = () => {
    opacity.value = 0.7;
    scale.value = 0.9;
  }

  const on_press_out = () => {
    opacity.value = 1;
    scale.value = 1;
  }


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <AnimatedPressable style={[
          styles.animatedPressable,
          animatedStyles
        ]}
        onPressIn={on_press_in}
        onPressOut={on_press_out}
        >
        <Text style={styles.text}>Get Started</Text>
        </AnimatedPressable>
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
  animatedPressable: {
    height: 100,
    width: "80%",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "transparent",
    boxShadow: "0 0 20px #ee8efe"
  },
  text: {
    color: "#fff",
    fontSize: 30
  }
});
