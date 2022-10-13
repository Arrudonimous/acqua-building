import { Container, ImagesContainer } from './styles';
import Image1 from '../../assets/images/predio01.png';
import Image2 from '../../assets/images/predio02.png';
import Image3 from '../../assets/images/predio03.jpg';
import Image4 from '../../assets/images/predio04.jpg';
import Image5 from '../../assets/images/predio05.jpg';
import Image6 from '../../assets/images/predio06.png';

export default function Images() {
  return (
    <Container>
      <h1>Andamento do projeto</h1>
      <small>Veja como está o andamento da construção.</small>
      <ImagesContainer>
        <img src={Image1} alt="Imagem1" className="first" />
        <img src={Image2} alt="Imagem2" className="second" />
        <img src={Image3} alt="Imagem3" className="thirthy" />
        <img src={Image4} alt="Imagem4" className="forthy" />
        <img src={Image5} alt="Imagem5" className="fifthy" />
        <img src={Image6} alt="Imagem6" className="sixthy" />
      </ImagesContainer>
    </Container>
  );
}
