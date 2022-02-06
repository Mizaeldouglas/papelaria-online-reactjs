import * as C from './styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
	  <Container maxWidth='xl'>
		  <C.Container>
		<Box
			sx={{
				width: {xl: 500,},
			}}
  		>
			<Box sx={{
				width: {sm:800}
			}}>
				<C.AreaText>
					<C.Text1>
						<h1>Alfabeto</h1>
						<a>Sobre</a>
						<a>FAQ</a>
						<a>Envio e Devolução</a>
						<a>Politica da Loja</a>
						<a>Contato</a>
						
					</C.Text1>
					<C.Text2>
						<h1>Endereço</h1>
						<p>Rua Donna Asme Abdale Salibe, 57, São Paulo - SP Tel: (19) 995283104</p>
					</C.Text2>
					<C.Text3>
						<h1>Funcionamento</h1>
						<p>Seg-Sex: 10:00 - 19:00</p>
						<p>Sabado: 10:00 - 12:00</p>
						<p>Domingo: Fechado</p>
					</C.Text3>
					<C.Text4>
						<h1>Assine a NewsLetter</h1>
						<TextField 
							id="standard-basic" 
							label="Insira o seu Email aqui*" 
							variant="standard"
						/>
						<Button>Assine Já</Button>
						<C.SocialMedia>
							<FacebookOutlinedIcon />
							<InstagramIcon />
							<LinkedInIcon />
							<WhatsAppIcon />
						</C.SocialMedia>
					</C.Text4>
					
				</C.AreaText>
			</Box>
		</Box>
		  </C.Container>
		  <Box
		  	sx={{
				width: 1000,
				height: 100,
				display:'flex',
				alignItems: 'center',
				justifyContent:'center',
				textAlign:'center',
				paddingLeft:5
			}}
		  >
			<C.Footer>
				<p>
				© 2023 por Alfabeto. Orgulhosamente criado com Wix.com
					ALFABETO Ltda. - CPF/CNPJ: 12.345.678/0000-01 - Rua Donna Asme Abdale Salibe, 57, São Paulo - SP 
					info@meusite.com - Tel: (19) 995283104
				</p>
			</C.Footer>

		  </Box>
	  </Container>
  );
};

export default Footer;
