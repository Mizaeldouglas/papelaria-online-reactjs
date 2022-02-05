import * as C  from './styles';

function Menu() {
  return (
    <C.Container>
      <C.Logo>
        <h1>Logo</h1>
      </C.Logo>
      <C.AreaMenu>
      <h1>Home</h1>
      <h1>Loja</h1>
      <h1>Sobre</h1>
      <h1>Contato</h1>
      <h1>Carrinho</h1>
      </C.AreaMenu>
    </C.Container>
  );
};

export default Menu;
