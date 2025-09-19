# Quiz Rick and Morty

Um aplicativo de quiz divertido e interativo para testar seus conhecimentos sobre o multiverso maluco de Rick and Morty!

## 📜 Sobre o Projeto

Este é um aplicativo móvel desenvolvido com React Native e Expo, que apresenta um quiz temático sobre a popular série de animação "Rick and Morty".

O aplicativo exibe perguntas de múltipla escolha de forma aleatória e, ao final, apresenta a pontuação do usuário com uma mensagem divertida inspirada nos personagens.

## ✨ Funcionalidades

* **Tela de Boas-vindas:** Uma tela inicial estilizada para dar as boas-vindas ao usuário e iniciar o quiz.
* **Quiz Aleatório:** A cada novo jogo, 5 perguntas são selecionadas aleatoriamente de um banco de dados, garantindo uma experiência diferente a cada vez.
* **Feedback Instantâneo:** O aplicativo fornece feedback visual imediato (cores nas opções) para respostas corretas e incorretas.
* **Efeitos Sonoros:** Sons distintos são reproduzidos para acertos e erros, melhorando a experiência do usuário.
* **Tela de Resultados:** Ao final do quiz, o usuário vê sua pontuação e uma mensagem personalizada baseada em seu desempenho.
* **Jogar Novamente:** Opção para reiniciar o quiz e tentar uma nova rodada de perguntas.

## 🛠️ Tecnologias Utilizadas

* **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
* **Expo:** Plataforma e conjunto de ferramentas para criar e implantar aplicativos React Native.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código.
* **Expo Router:** Para navegação baseada em arquivos.
* **Expo AV:** Para reprodução dos efeitos sonoros.
* **Componentes Reutilizáveis:** O projeto é estruturado com componentes para cada tela (Boas-vindas, Quiz, Resultados), facilitando a manutenção.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

**Pré-requisitos:**

* Node.js e npm (ou Yarn) instalados.
* Expo Go instalado em seu dispositivo móvel (Android ou iOS) ou um emulador/simulador configurado.

**Instalação e Execução:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/projeto_quiz_react_native.git](https://github.com/seu-usuario/projeto_quiz_react_native.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd projeto_quiz_react_native
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npx expo start
    ```

5.  **Abra o aplicativo:**
    * **No seu dispositivo móvel:** Escaneie o código QR exibido no terminal com o aplicativo Expo Go.
    * **No emulador/simulador:** Pressione `a` para o emulador Android ou `i` para o simulador iOS no terminal.

## 📁 Estrutura do Projeto

```
projeto_quiz_react_native/
├── app/
│   ├── _layout.tsx    # Configuração do layout principal da navegação
│   └── index.tsx      # Ponto de entrada e lógica principal do quiz
├── assets/
│   ├── fonts/         # Fontes personalizadas (se houver)
│   └── sounds/        # Efeitos sonoros para respostas corretas/incorretas
├── components/
│   ├── QuizScreen.tsx   # Componente da tela do quiz
│   ├── ResultScreen.tsx # Componente da tela de resultados
│   └── WelcomeScreen.tsx# Componente da tela de boas-vindas
├── questions.json     # Banco de dados de perguntas do quiz
└── package.json       # Dependências e scripts do projeto
```
## Produzido por:
Ana Paula Maximo
