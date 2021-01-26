import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import db from '../db.json';
import { QuizContainer } from '.';
import Button from '../src/components/Button';

function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <Button href="/"> Voltar </Button>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Alternativa 1</p>
            <p>Alternativa 2</p>
            <p>Alternativa 3</p>
            <p>Alternativa 4</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

export default Quiz;
