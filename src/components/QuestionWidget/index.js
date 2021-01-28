/* eslint-disable react/react-in-jsx-scope */
import db from '../../../db.json';
import Widget from '../Widget';
import Button from '../Form/Button';

const QuestionWidget = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [respostas, setRespostas] = React.useState({});
  const [resultado, setResultado] = React.useState(false);

  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const questionId = `question__${questionIndex}`;

  const handleSubmiteAnswere = (event) => {
    event.preventDefault();
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setResultado(true);
    }
  };

  if (resultado === true)
    return (
      <Widget>
        <Widget.Header>Resultado</Widget.Header>
        <Widget.Content>
          <p>Voce acertou </p>
        </Widget.Content>
      </Widget>
    );

  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <form onSubmit={handleSubmiteAnswere}>
          <h2>{question.title}</h2>

          <p>{question.description}</p>

          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative${alternativeIndex}`;
            return (
              <Widget.Topic
                id={alternativeId}
                htmlFor={alternativeId}
                as="label"
                key={alternativeIndex}
              >
                <input
                  type="radio"
                  name={questionId}
                  id={`alternative${alternativeIndex}`}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
};
export default QuestionWidget;
