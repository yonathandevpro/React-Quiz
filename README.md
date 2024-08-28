
# React Quiz Application

## Overview

This is a React-based quiz application that allows users to take a quiz by answering multiple-choice questions. The app features a clean UI, progress tracking, and a final score display. The project is built with modern JavaScript and React practices, utilizing components, context API, and Vite for development.

## Features

- **Multiple-choice questions**: Users can select an answer from a list of choices.
- **Progress tracking**: The app shows the current question number and overall progress.
- **Timer**: A countdown timer is provided for each question.
- **Score display**: The app displays the user's score at the end of the quiz.
- **Responsive design**: The layout is designed to work on both desktop and mobile devices.

## Project Structure

The project is organized into the following key directories and files:

### Root Directory

- **`.gitignore`**: Specifies which files and directories to ignore in version control.
- **`eslint.config.js`**: Configuration for ESLint to maintain code quality.
- **`index.html`**: The main HTML file where the React app is mounted.
- **`package-lock.json`**: Automatically generated file that locks the version of dependencies.
- **`package.json`**: Contains project metadata and dependencies.
- **`vite.config.js`**: Configuration file for Vite, the build tool.

### Public Directory

- **`logo512.png`**: The app's logo.
- **`vite.svg`**: Vite logo used in the application.

### Data Directory

- **`questions.json`**: A JSON file containing the quiz questions and possible answers.

### Source Directory (`src/`)

- **`index.css`**: Global styles for the application.
- **`main.jsx`**: The entry point for the React application.

#### Components (`src/components/`)

- **`App.jsx`**: The main component that brings together all other components.
- **`Choices.jsx`**: Renders the possible answers for each quiz question.
- **`DateCounter.jsx`**: A component that manages and displays the date.
- **`Error.jsx`**: Displays error messages when something goes wrong.
- **`FinishScreen.jsx`**: Displays the final score and completion message.
- **`Footer.jsx`**: The footer component of the application.
- **`Header.jsx`**: The header component of the application.
- **`Loader.jsx`**: Displays a loading animation while data is being fetched.
- **`Major.jsx`**: Possibly a key component, details need further inspection.
- **`NextButton.jsx`**: A button component to proceed to the next question.
- **`Progress.jsx`**: Displays the progress of the quiz, i.e., how many questions have been answered.
- **`Question.jsx`**: Displays the current quiz question.
- **`StartScreen.jsx`**: The initial screen that users see when they start the quiz.
- **`Timer.jsx`**: Manages the countdown timer for each quiz question.

#### Contexts (`src/contexts/`)

- **`QuizContext.jsx`**: Manages the global state for the quiz, including current question, score, and timer.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yonathandevpro/React-Quiz.git
   cd react-quiz
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm run dev
   ```

   This command will start the development server, and you can view the app at `http://localhost:5173`.

## Usage

1. Open the app in your browser.
2. Click the "Start Quiz" button to begin.
3. Answer each question by selecting one of the multiple-choice options.
4. Your progress is displayed at the top, along with a timer.
5. At the end of the quiz, your score will be shown on the final screen.

## Contributing

Contributions are welcome! If you have any suggestions or bug reports, feel free to open an issue or submit a pull request.
Email me `yonathanber@icloud.com` for more info.

## License

This project is licensed under the MIT License. 
