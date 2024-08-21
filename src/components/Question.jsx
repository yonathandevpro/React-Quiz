import Choices from "./Choices";

function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Choices question={question} />
    </div>
  );
}

export default Question;
