import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeInDown, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

type Props = {
    togglelogin: (value: boolean) => void;
}

export default function GetStarted({ togglelogin }: Props) {
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
        <AnimatedPressable style={[
            styles.animatedPressable,
            animatedStyles
        ]}
        entering={FadeInDown}
        onPressIn={on_press_in}
        onPressOut={on_press_out}
        onPress={() => {
            togglelogin(true)
        }}
        >
        <Text style={styles.text}>Get Started</Text>
        </AnimatedPressable>
    )
}

const styles = StyleSheet.create({
    animatedPressable: {
        backgroundColor: '#4a90e2',
        padding: 13,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250
    },
    text: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    }
})