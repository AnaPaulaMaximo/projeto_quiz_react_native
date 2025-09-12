import { useState } from 'react';
import { Vibration } from 'react-native';
import { Audio } from 'expo-av';
import QuizScreen from '../components/QuizScreen';
import ResultScreen from '../components/ResultScreen';
import WelcomeScreen from '../components/WelcomeScreen';
import questions from '../questions.json';

// Definindo o tipo para uma única pergunta para melhor manutenibilidade
type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export default function HomePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  
  // Novo estado para armazenar as 5 perguntas aleatórias do quiz atual
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  // Função para tocar os sons
  const playSound = async (isCorrect: boolean) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        isCorrect
          ? require('../assets/sounds/correct.mp3')
          : require('../assets/sounds/error.mp3')
      );
      await sound.playAsync();

      sound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.isLoaded && status.didJustFinish) {
          await sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("Erro ao tocar o som: ", error);
    }
  };

  // A pergunta atual agora vem da nossa lista aleatória
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionPress = (option: string) => {
    const isCorrect = option === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      playSound(true);
    } else {
      Vibration.vibrate(400);
      playSound(false);
    }

    setSelectedOption(option);
    setIsOptionsDisabled(true);
  };

  const handleNextQuestion = () => {
    // A condição agora verifica o tamanho da nossa lista de 5 perguntas
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsOptionsDisabled(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handlePlayAgain = () => {
    // Reseta tudo e volta para a tela inicial para um novo quiz aleatório
    setIsQuizStarted(false);
    setIsQuizFinished(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionsDisabled(false);
    setScore(0);
  };

  const handleStartQuiz = () => {
    // 1. Embaralha a lista completa de perguntas
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    // 2. Seleciona as primeiras 5 perguntas da lista embaralhada
    const selectedQuestions = shuffledQuestions.slice(0, 5);
    
    // 3. Armazena essas 5 perguntas no estado e inicia o quiz
    setQuizQuestions(selectedQuestions);
    setIsQuizStarted(true);
  };

  if (!isQuizStarted) {
    return <WelcomeScreen onStartQuiz={handleStartQuiz} />;
  }

  return isQuizFinished ? (
    <ResultScreen
      score={score}
      // O total de perguntas agora é o tamanho da nossa lista de quiz (5)
      totalQuestions={quizQuestions.length}
      onPlayAgain={handlePlayAgain}
    />
  ) : (
    <QuizScreen
      currentQuestion={currentQuestion}
      selectedOption={selectedOption}
      isOptionsDisabled={isOptionsDisabled}
      onOptionPress={handleOptionPress}
      onNextQuestion={handleNextQuestion}
    />
  );
}