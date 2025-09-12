import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
};

type QuizScreenProps = {
    currentQuestion: Question;
    selectedOption: string | null;
    isOptionsDisabled: boolean;
    onOptionPress: (option: string) => void;
    onNextQuestion: () => void;
};

export default function QuizScreen({
    currentQuestion,
    selectedOption,
    isOptionsDisabled,
    onOptionPress,
    onNextQuestion,
}: QuizScreenProps) {
    const getOptionStyle = (option: string) => {
        if (!selectedOption) return styles.option;

        const isCorrect = option === currentQuestion.correctAnswer;
        const isSelected = option === selectedOption;

        if (isCorrect) {
            return [styles.option, styles.correctOption];
        }
        if (isSelected && !isCorrect) {
            return [styles.option, styles.incorrectOption];
        }
        
        // Deixa as outras opções com opacidade menor após uma seleção
        return [styles.option, styles.disabledOption];
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>

            <View style={styles.optionsContainer}>
                {currentQuestion.options.map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={getOptionStyle(option)}
                        onPress={() => onOptionPress(option)}
                        disabled={isOptionsDisabled}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedOption && (
                <TouchableOpacity style={styles.nextButton} onPress={onNextQuestion}>
                    <Text style={styles.nextButtonText}>Próxima</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040C18',
        padding: 20,
        justifyContent: "center"
    },
    card: {
        backgroundColor: 'rgba(31, 41, 55, 0.9)',
        borderRadius: 15,
        padding: 25,
        marginBottom: 30,
        borderColor: '#82F341',
        borderWidth: 1,
    },
    questionText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#E5E7EB',
        textAlign: 'center',
    },
    optionsContainer: {
        width: "100%",
        marginBottom: 30,
    },
    option: {
        backgroundColor: '#1F2937',
        padding: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#4B5563',
        marginBottom: 12,
    },
    optionText: {
        fontSize: 18,
        color: '#E5E7EB',
        textAlign: 'center',
        fontWeight: '500',
    },
    correctOption: {
        borderColor: '#82F341', // Verde-portal para resposta correta
        backgroundColor: 'rgba(130, 243, 65, 0.2)',
    },
    incorrectOption: {
        borderColor: '#FF414D', // Vermelho-alerta para resposta incorreta
        backgroundColor: 'rgba(255, 65, 77, 0.2)',
    },
    disabledOption: {
        opacity: 0.5,
    },
    nextButton: {
        backgroundColor: '#82F341', // Verde-portal
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 50,
        marginTop: 10,
        alignSelf: 'center',
    },
    nextButtonText: {
        color: '#040C18',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});