import Widget from '../../../src/components/Widget';

function LoadingWidget() {
  const loadingImages = [
    'https://media.giphy.com/media/w7CP59oLYw6PK/giphy.gif',
    'https://media.giphy.com/media/qYHlTos5CDu0/giphy.gif',
    'https://media.giphy.com/media/EETZoyWldXgJ2/giphy.gif',
    'https://media.giphy.com/media/fY0H0Zr5ybY1Yp2aU6/giphy.gif',
  ];
  const randomImage = Math.floor(Math.random() * loadingImages.length);
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>
        <img
          src={loadingImages[randomImage]}
          alt=""
          style={{ width: '100%' }}
        />
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
