import  Menu  from "./components/Menu";
import  Header  from "./components/Header";
import Section from "./components/Section";
// import  {Container}  from "./stylesglobal";
import Container from '@mui/material/Container';
import Footer from "./components/Footer";

function App() {
  return (
    <Container >
      <Menu />
      <Header />
	  <Section />
	  <Footer />
      </Container>
    
  );
}

export default App;
