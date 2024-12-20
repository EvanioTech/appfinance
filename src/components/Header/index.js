import React from "react";
import { Container, Title, ButtonMenu } from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";


const Header = ({ title }) => {
    const navigation = useNavigation();
  return (
    <Container>
      <ButtonMenu onPress={()=> navigation.openDrawer() }>
      <Feather name="menu" size={30} color="#121212" />
      </ButtonMenu>
      {title && (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  );
};

export { Header };
