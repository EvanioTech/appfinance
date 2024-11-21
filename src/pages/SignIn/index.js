import React, { useState,useContext } from "react";
import { ActivityIndicator } from "react-native";
import { Background,
     Container, 
     Logo,
     Input, 
     AreaInput, 
     Titulo, 
     Submit, 
     SubmitText,
     Link, 
     LinkText
     } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";



export default function SignIn() {
    const navigation = useNavigation();
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    const{ signIn, loadingAuth} = useContext(AuthContext)


    function login(){
        signIn(email,pass)
    }
    return (
        <Background>
            <Container>
                <Titulo>Minhas Finanças</Titulo>
                <Logo
                source={require('../../assets/fin.jpg')}/>
                
                
                <AreaInput>
                    <Input
                        placeholder="seu email..."
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        placeholder="sua senha..."
                        value={pass}
                        onChangeText={(text) => setPass(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>
                <Submit onPress={login}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={30} color='#FFF'/>
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                    
                </Submit>
                <Link onPress={() => navigation.navigate('SignUp')}>
                <LinkText> Criar conta</LinkText>
                </Link>
            </Container>
        </Background>
    );
}
