import { Form, Input, Button } from './styles';

const PlayerForm = ({ onSubmit, setName, name }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Digite seu nome para poder jogar"
        onChange={({ target }) => setName(target.value)}
      />
      <Button type="submit" disabled={name.length === 0 ? true : false}>
        JOGAR
      </Button>
    </Form>
  );
};

export default PlayerForm;
