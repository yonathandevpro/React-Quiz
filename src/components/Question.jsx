import Choices from "./Choices";

function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Choices question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
