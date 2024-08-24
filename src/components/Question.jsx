import { useQuiz } from "../contexts/QuizContext";
import Choices from "./Choices";

function Question() {
  const { questions, index } = useQuiz();
  return (
    <div>
      <h4>{questions.at(index).question}</h4>
      <Choices />
    </div>
  );
}

export default Question;
