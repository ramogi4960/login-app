import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export default function Login() {

    return (
        <Animated.View style={styles.animatedContainer} entering={FadeIn}>
            <TextInput
                style={styles.inputs}
                placeholder="Email"
                placeholderTextColor="#aaa" 
            />
            <TextInput
                style={styles.inputs}
                placeholder="Password"
                placeholderTextColor="#aaa" 
            />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    animatedContainer: {
        height: 500,
        width: "100%",
        backgroundColor: 'transparent',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#fff"
    },
    inputs: {
        height: 40,
        width: "80%",
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: "#fff",
        fontSize: 16,
        borderRadius: 8,
        backgroundColor: '#25292e',
        paddingLeft: 20
    },
    button: {
        backgroundColor: '#4a90e2',
        padding: 16,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
    },
    buttonText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
    }
})