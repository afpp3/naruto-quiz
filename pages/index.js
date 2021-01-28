import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Meta from '../src/components/Meta';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Form/Input';
import Button from '../src/components/Form/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
    setName(name);
  }

  return (
    <>
      <Meta
        url="https://naruto-quiz.afpp3.vercel.app/"
        title={db.title}
        title={db.title}
        description={db.description}
        image={db.bg}
      />

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Teste seus conhecimentos sobre o univero de Naruto e se divirta
                jogando nosso Quiz :)
              </p>
              <form onSubmit={handleSubmit}>
                <Input
                  name="username"
                  placeholder="Digite seu nome para poder jogar"
                  onChange={({ target }) => setName(target.value)}
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  Jogar
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Quizes da galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae odit distinctio quasi magnam soluta. Nesciunt
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/afpp3/naruto-quiz" />
      </QuizBackground>
    </>
  );
}
