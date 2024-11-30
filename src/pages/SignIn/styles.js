import styled from "styled-components/native";

// Background do layout
export const Background = styled.View`
  margin-top: 60px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

// Container que envolve o conteúdo e ajuda a evitar sobreposição do teclado
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom:150px;
  
`;

export const Logo = styled.Image`
width: 70%;
height: 50%;
border-radius: 350px;
margin-bottom:100px

`;


export const AreaInput = styled.View``;

export const Input = styled.TextInput`
width: 370px;
border-width: 1px;
border-radius: 15px;

margin-bottom:10px;
`;

export const Titulo = styled.Text`
font-size: 40px;
font-weight: bold;
margin-bottom:50px;
margin-top: 100px;



`;

export const Submit = styled.TouchableOpacity`
background-color: #00BFFF;
width: 90%;
height: 45px;
border-radius: 8px;
margin-top: 10px;
align-items: center;
justify-content: center;

`;
export const SubmitText = styled.Text`

font-size: 20px;
color: #FFF;

`;
export const Link = styled.TouchableOpacity`

background-color: #00BFFF;
width: 90%;
height: 45px;
border-radius: 8px;
margin-top: 10px;
align-items: center;
justify-content: center;
`;
export const LinkText = styled.Text`

font-size: 20px;
color: #FFF;

`;

