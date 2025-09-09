import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type ResultScreenProps = {
    score: number;
    totalQuestions: number;
    onPlayAgain: () => void;
};

export default function ResultScreen({ score, totalQuestions, onPlayAgain }: ResultScreenProps) {
    return (
        <View style={styles.container}>
            <View style={styles.contentCard}>
                <Text style={styles.title}>FIM DE JOGO!</Text>
                <Text style={styles.scoreText}>
                    Você acertou {score} de {totalQuestions} perguntas!
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
                <Text style={styles.buttonText}>Jogar Novamente</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1E', // Fundo escuro
        padding: 20,
    },
    contentCard: {
        backgroundColor: '#2C2C2E', // Um tom mais claro para o "cartão"
        borderRadius: 20,
        padding: 40,
        alignItems: 'center',
        marginBottom: 40,
        // Sombras para dar profundidade (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        // Elevação para profundidade (Android)
        elevation: 8,
    },
    title: {
        fontSize: 34,
        fontWeight: '700', // Semibold
        color: '#EFEFEF', // Texto claro
        marginBottom: 10,
    },
    scoreText: {
        fontSize: 22,
        fontWeight: '400', // Regular
        color: '#AFAFAF', // Texto secundário mais suave
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#8afb67ff', // Cor vibrante para o botão
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 30, // Bordas bem arredondadas
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600', // Semibold
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});