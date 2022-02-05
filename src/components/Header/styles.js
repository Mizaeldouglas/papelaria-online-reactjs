import styled from 'styled-components';

export const Container = styled.div`

`;
export const AreaFoto = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
 .img{
    background-size: contain;
    width: 100vw;
   height: 100vh;
 }
`;
export const AreaText = styled.div`
position: absolute;
  width: 423px;
  height: 240px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.text`
  display: flex;
  flex-direction: column;
  align-items: center;
  h6{
    padding-bottom: 10px;
    font-size: 22px;
  }
  h1{
    font-size: 30px;
    padding-bottom: 30px;
  }
  a{
    color: #666;
    font-size: 16px;
  }
`;
