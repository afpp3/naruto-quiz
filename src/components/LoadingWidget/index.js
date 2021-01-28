import Widget from '../../../src/components/Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Loading...]</Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
