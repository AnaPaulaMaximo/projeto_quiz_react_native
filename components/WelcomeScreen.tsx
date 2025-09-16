import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";



type WelcomeScreenProps = {

onStartQuiz: () => void;

};



// Sugestão: Para um fundo temático, você pode usar uma imagem do espaço.

// const backgroundImage = require('../assets/images/space_background.png');



export default function WelcomeScreen({ onStartQuiz }: WelcomeScreenProps) {

return (

// <ImageBackground source={backgroundImage} style={styles.container}>


<View style={styles.container}>

<View style={styles.contentCard}>

{/* Para um visual ainda mais autêntico, considere usar uma fonte customizada

como 'Get Schwifty' ou 'Creepster' para os títulos.

*/}

<Text style={styles.title}>QUIZ RICK AND MORTY</Text>

<Text style={styles.description}>

Teste seus conhecimentos sobre o multiverso maluco de Rick and Morty!

</Text>

</View>



<TouchableOpacity style={styles.button} onPress={onStartQuiz}>

<Text style={styles.buttonText}>Começar!</Text>

</TouchableOpacity>

</View>

// </ImageBackground>

);

};



const styles = StyleSheet.create({

container: {

flex: 1,

justifyContent: 'center',

alignItems: 'center',

// Fundo inspirado no espaço profundo

backgroundColor: '#040C18',

padding: 20,

},

contentCard: {

backgroundColor: 'rgba(31, 41, 55, 0.8)', // Cor de painel de nave, com transparência

borderRadius: 15,

padding: 30,

alignItems: 'center',

marginBottom: 40,

// Borda verde-portal para dar o estilo da série

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

// Cor de texto que remete ao logo

color: '#97F571',

marginBottom: 20,

textAlign: 'center',

textTransform: 'uppercase',

},

description: {

fontSize: 18,

fontWeight: '400',

color: '#E5E7EB', // Texto secundário claro

textAlign: 'center',

},

button: {

// Cor verde-portal para o botão principal

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

// Texto escuro para melhor contraste com o botão verde

color: '#040C18',

fontSize: 18,

fontWeight: '700',

textTransform: 'uppercase',

},

});