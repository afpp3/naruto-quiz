import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuestionWidget from '../src/components/QuestionWidget';
import LoadingWidget from '../src/components/LoadingWidget';

function Quiz() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {loading ? <LoadingWidget /> : <QuestionWidget />}
      </QuizContainer>
    </QuizBackground>
  );
}

export default Quiz;
