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
        if (selectedOption) {
            const isCorrect = option === currentQuestion.correctAnswer;
            if (isCorrect) {
                return styles.correctOption;
            }
            if (option === selectedOption && !isCorrect) {
                return styles.incorrectOption;
            }
        }
        return {};
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
                        style={[styles.option, getOptionStyle(option)]}
                        onPress={() => onOptionPress(option)}
                        disabled={isOptionsDisabled}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedOption && (
                <TouchableOpacity style={styles.nextButton} onPress={onNextQuestion}>
                    <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        padding: 24,
    },
    card: {
        backgroundColor: '#2C2C2E',
        borderRadius: 20,
        padding: 30,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    questionText: {
        fontSize: 26,
        fontWeight: '600',
        color: '#EFEFEF',
        textAlign: 'center',
        lineHeight: 32,
    },
    optionsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    option: {
        backgroundColor: '#2C2C2E',
        padding: 18,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#3A3A3C',
        marginBottom: 10,
    },
    optionText: {
        fontSize: 18,
        color: '#EFEFEF',
        textAlign: 'center', // Centraliza o texto das alternativas
    },
    correctOption: {
        borderColor: '#34C759',
        backgroundColor: '#1F2925',
    },
    incorrectOption: {
        borderColor: '#FF3B30',
        backgroundColor: '#2E2020',
    },
    nextButton: {
        backgroundColor: '#8afb67ff', // Cor rosa vibrante
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginTop: 24,
        alignSelf: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});