import * as C from './styles';
import ImagemHeader from '../../Images/ImagemHeader.jpg'

function Header() {
  return (
    <C.Container>
      <C.AreaFoto>
        <img src={ImagemHeader} alt="imgDev" />
        <C.AreaText >
          <C.Text>
          <h6>Apresentando Acessórios</h6>
          <h1>ALEGRES E ESTILOSOS</h1>
          <a href="http://#" target="_blank" rel="noopener noreferrer">Comprar já</a>

          </C.Text>
        </C.AreaText>
      </C.AreaFoto>
    </C.Container>
  );
};

export default Header;
