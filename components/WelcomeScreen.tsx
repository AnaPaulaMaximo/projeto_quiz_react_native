import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

type WelcomeScreenProps = {
    onStartQuiz: () => void;
};

// 1. Imagem de fundo ativada
const backgroundImage = require('../assets/images/background.png');

export default function WelcomeScreen({ onStartQuiz }: WelcomeScreenProps) {
    return (
        // 2. O <View> principal foi substituído por <ImageBackground>
        <ImageBackground 
            source={backgroundImage} 
            style={styles.container}
            resizeMode="cover" // Garante que a imagem cubra toda a tela
        >
            <View style={styles.contentCard}>
                <Text style={styles.title}>QUIZ RICK AND MORTY</Text>
                <Text style={styles.description}>
                    Teste seus conhecimentos sobre o multiverso maluco de Rick and Morty!
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onStartQuiz}>
                <Text style={styles.buttonText}>Começar!</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // 3. A cor de fundo foi removida, pois a imagem agora cuida disso.
        // backgroundColor: '#040C18', 
    },
    contentCard: {
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
        marginBottom: 40,
        borderColor: '#82F341',
        borderWidth: 2,
        shadowColor: '#82F341',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    title: {
        fontSize: 36,
        fontWeight: '900',
        color: '#97F571',
        marginBottom: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    description: {
        fontSize: 18,
        fontWeight: '400',
        color: '#E5E7EB',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#82F341',
        paddingVertical: 18,
        paddingHorizontal: 50,
        borderRadius: 50,
        shadowColor: '#82F341',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 12,
    },
    buttonText: {
        color: '#040C18',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});