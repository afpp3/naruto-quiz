import { motion } from 'framer-motion';

import db from '../../../db.json';
import Widget from '../Widget';
import AlternativesForm from '../AlternativesForm';
import Button from '../Form/Button';
import { ReactComponent as CorrectAnswer } from '../../../public/assets/correct-answer.svg';
import { ReactComponent as WrongAnswer } from '../../../public/assets/wrong-answer.svg';

const QuestionWidget = ({ setScreenState, screenStates }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAlternarive, setSelectedAlternative] = React.useState(null);
  const [questionSubmited, setQuestionSubmited] = React.useState(false);
  const [results, setResults] = React.useState([]);

  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const questionId = `question__${questionIndex}`;
  const hasAlternativeSelected = selectedAlternarive !== null;
  const isCorrect = selectedAlternarive === question.answer;

  const handleSubmiteAnswer = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  const addResult = (result) => {
    setResults([...results, result]);
  };

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.4, duration: 0.8 }}
      variants={{
        show: { opacity: 1, x: '0' },
        hidden: { opacity: 0, x: '-100%' },
      }}
      initial="hidden"
      animate="show"
    >
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
        <h2>{question.title}</h2>

        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setQuestionSubmited(true);

            setTimeout(() => {
              addResult(isCorrect);
              handleSubmiteAnswer();
              setQuestionSubmited(false);
              setSelectedAlternative(null);
            }, 2000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternarive === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={questionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  type="radio"
                  name={questionId}
                  id={alternativeId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {questionSubmited && isCorrect && <CorrectAnswer />}
          {questionSubmited && !isCorrect && <WrongAnswer />}

          <Button
            type="submit"
            disabled={!hasAlternativeSelected}
            style={{ display: `${questionSubmited ? 'none' : 'block'}` }}
          >
            Confirmar
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
};

export function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>Tela de Resultado:</Widget.Header>

      <Widget.Content>
        <p>Você acertou {'...'} perguntas</p>
        <ul>
          {/* {results.map((result, index) => (
            <li key={`result__${result}`}>
              #{index + 1} Resultado:
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))} */}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
export default QuestionWidget;
