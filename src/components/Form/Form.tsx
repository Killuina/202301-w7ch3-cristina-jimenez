import { Button, FormStyled, Input, Label } from "./FormStyled";

const Form = (): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input type="text" id="name" name="name" />

      <Label htmlFor="imageUrl">Image URL:</Label>
      <Input type="text" id="imageUrl" name="imageUrl" />

      <Button type="submit">Create Pokémon</Button>
    </FormStyled>
  );
};

export default Form;
