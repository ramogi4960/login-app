import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export default function Register() {

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
            <TextInput
                style={styles.inputs}
                placeholder="Confirm Password"
                placeholderTextColor="#aaa" 
            />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
            <Pressable style={styles.linkButton}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    animatedContainer: {
        height: 400,
        width: "100%",
        backgroundColor: 'transparent',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#fff"
    },
    inputs: {
        height: 60,
        width: "80%",
        borderColor: 'gray',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingHorizontal: 10,
        color: "#fff",
        fontSize: 20,
        borderRadius: 8,
        backgroundColor: 'transparent',
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
    },
    linkButton: {
        backgroundColor: 'transparent',
        padding: 16,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        borderWidth: 1,
        borderColor: '#4a90e2'
    }
})