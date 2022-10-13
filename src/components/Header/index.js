import { useState } from 'react';
import CountDown from '../CountDown';
import { Container, ContentContainer, FormContainer } from './styles';

export default function Header() {
  const [text, setText] = useState('');

  function clearInput() {
    setText('');
  }
  return (
    <Container>
      <CountDown />
      <ContentContainer>
        <h1>Prédio Acqua</h1>
        <span>Receba novidades sobre nosso lançamento.</span>
        <small>
          Morar contemporâneo para pessoas com estilo de vida dinâmico e que buscam praticidade
          no seu dia a dia. Lazer, esporte, trabalho e contato com a natureza em um só lugar.
        </small>
        <FormContainer>
          <input
            type="text"
            placeholder="Digite seu e-mail..."
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <button type="submit" onClick={clearInput}>Quero saber mais</button>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
}
