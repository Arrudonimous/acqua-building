import { useState } from 'react';
import calcDate from '../../functions/calcDate';
import { Container } from './styles';

export default function CountDown() {
  const [currrentTime, setCurrentTime] = useState(calcDate());
  setInterval(() => {
    setCurrentTime(calcDate());
  }, 1000);

  return (
    <Container>
      <ul>
        <li className="number">{currrentTime.days}</li>
        <li>dias</li>
      </ul>
      <ul>
        <li className="number">{currrentTime.hours}</li>
        <li>horas</li>
      </ul>
      <ul>
        <li className="number">{currrentTime.minutes}</li>
        <li>minutos</li>
      </ul>
      <ul>
        <li className="number">{currrentTime.seconds}</li>
        <li>segundos</li>
      </ul>
    </Container>
  );
}
