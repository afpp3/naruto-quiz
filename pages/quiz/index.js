import db from '../../db.json';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import QuestionWidget, {
  ResultWidget,
} from '../../src/components/QuestionWidget';
import LoadingWidget from '../../src/components/LoadingWidget';

function Quiz() {
  const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };

  const [screenState, setScreenState] = React.useState(screenStates.LOADING);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            setScreenState={setScreenState}
            screenStates={screenStates}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultWidget />}
      </QuizContainer>
    </QuizBackground>
  );
}

export default Quiz;
