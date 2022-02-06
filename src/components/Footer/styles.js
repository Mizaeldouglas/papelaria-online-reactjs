import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 1100px;
	height: 400px;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: #A0CFD3;
`;
export const AreaText = styled.div`
  background-color: #fed9e8;
  width: 800px;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  text-align: start;
  border-radius: 30px;
`;
export const Text1 = styled.div`
  display: flex;
  flex-direction: column;
  
  h1{
	  font-size: 20px;
	  padding-top: 30px;
	  padding-bottom: 30px
  }
  a{
	padding-top: 10px;
  }
`;
export const Text2 = styled.div`
  display: flex;
  flex-direction: column;
  h1{
	  font-size: 20px;
	  padding-top: 30px;
	  padding-bottom: 30px;
	  
  }
  p{
	  width: 180px;
	  line-height: 30px;
	  

  }
`;
export const Text3 = styled.div`
  display: flex;
  flex-direction: column;
  h1{
	  font-size: 20px;
	  padding-top: 30px;
	  padding-bottom: 30px
  }
  p{
	  padding-top: 10px;
  }
`;
export const Text4 = styled.div`
  display: flex;
  flex-direction: column;
  h1{
	  font-size: 20px;
	  padding-top: 30px;
	  padding-bottom: 30px
  }
`;
export const SocialMedia = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Footer = styled.div`
  font-size: 17px;
`;