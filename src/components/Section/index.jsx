import * as C from './styles';
import lapis from '../../Images/lapis.png'
import fitas from '../../Images/FitasRosas.jpeg'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import acessoriosSection from '../../Images/Traveseiro.png'

function Section() {
	const itemData = [
		{
		  img: acessoriosSection,
		  title: 'Acessorios',
		},
		{
		  img: 'https://i.pinimg.com/236x/4e/03/78/4e03785498f6c8dc23c8b3be2083ff77.jpg',
		  title: 'Canetas',
		},
		{
		  img: 'https://i.pinimg.com/236x/49/04/c8/4904c8eacd5da4137cda5fd2967701a8.jpg',
		  title: 'Cadernos',
		},
	  ];



  return (
    <C.Container>
      <C.AreaSection1>
		<C.AreaPhoto>
			<img src={lapis} alt="imagem" />
			<C.AreaText>
			<h3>Comece a rabiscar com</h3>
			<h1>lapis Perfeito</h1>
			<a>Compre Ja</a>

			</C.AreaText>
		</C.AreaPhoto>
		<C.AreaPhoto2>
			<img src={fitas} alt="imagem" />
			<C.AreaText2>
			<h3>Novidades</h3>
			<h1>Fitas adesivas</h1>
			<a>Compre Ja</a>

			</C.AreaText2>
		</C.AreaPhoto2>
	  </C.AreaSection1>



	  <C.AreaSection2>
	  <ImageList sx={{ width: 820, height: 250 }} cols={3} rowHeight={250} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=300&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
	  </C.AreaSection2>
		<C.Area2Text2>
			<C.Texto>
				<p>Acessórios de Mesa</p>
				<h1>Volta ás Aulas com Estilos</h1>
			</C.Texto>
			<C.Texto>
				<p>Lápis e Canetas</p>
				<h1>Nossa coleção de Acessórios</h1>
			</C.Texto>
			<C.Texto>
				<p>Cadernos</p>
				<h1>Suas Ideias, Nosso Lindos Cadernos</h1>
			</C.Texto>
		</C.Area2Text2>
    </C.Container>
  );
};

export default Section;
