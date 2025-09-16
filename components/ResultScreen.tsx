import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type ResultScreenProps = {
    score: number;
    totalQuestions: number;
    onPlayAgain: () => void;
};

export default function ResultScreen({ score, totalQuestions, onPlayAgain }: ResultScreenProps) {
    const getResultMessage = () => {
        const percentage = (score / totalQuestions) * 100;
        if (percentage === 100) return "WUBBA LUBBA DUB DUB! Você é um gênio!";
        if (percentage >= 70) return "Schwifty! Você mandou bem!";
        if (percentage >= 40) return "Você precisa de mais Szechuan Sauce no cérebro.";
        return "Ai, caramba! Isso foi constrangedor.";
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentCard}>
                <Text style={styles.title}>FIM DE JOGO!</Text>
                <Text style={styles.resultMessage}>{getResultMessage()}</Text>
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
        backgroundColor: '#040C18',
        padding: 20,
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
        textTransform: 'uppercase',
    },
    resultMessage: {
        fontSize: 20,
        fontWeight: '600',
        color: '#E5E7EB',
        textAlign: 'center',
        marginBottom: 15,
        fontStyle: 'italic',
    },
    scoreText: {
        fontSize: 22,
        fontWeight: '400',
        color: '#9CA3AF',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#82F341',
        paddingVertical: 18,
        paddingHorizontal: 40,
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