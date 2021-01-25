import styled from 'styled-components';
import db from '../db.json';
import Meta from '../src/components/Meta';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const BackgroundImage = styled.div`
  flex: 1;
  background: url(${db.bg}) no-repeat center center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <>
      <Meta
        url="https://www.alura.com.br/"
        title={db.title}
        title={db.title}
        description={db.description}
        image={db.image}
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
        <GitHubCorner projectUrl="https://github.com/afpp3" />
      </QuizBackground>
    </>
  );
}
