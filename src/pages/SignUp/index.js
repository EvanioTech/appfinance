import React, {useContext, useState} from "react";
import { View, Text , ActivityIndicator} from "react-native";
import { Background,
    Container,
    AreaInput,
    Input,
    Submit,
    SubmitText
 } from "../SignIn/styles";
 import { useNavigation } from "@react-navigation/native";
 import { AuthContext } from "../../contexts/auth";
 

export default function SignUP(){
    const navigation = useNavigation();
    const {user,signUP, loadingAuth} = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    function cadastro(){
        if(nome === '' || email === '' || pass === '') return;
        
        signUP(nome ,email ,pass);
        //navigation.navigate('SignIn')
        
     }
    return(
        <Background>
            <Container>
                <AreaInput>
                <Input
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={(text)=>setNome(text)}
                />
                <Input
                placeholder="Digite seu Email"
                value={email}
                onChangeText={(text)=>setEmail(text)}
                />
                <Input
                placeholder="Digite sua Senha"
                value={pass}
                onChangeText={(text)=>setPass(text)}
                secureTextEntry={true}
                />
                
                </AreaInput>
                <Submit onPress={cadastro}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={30} color='#FFF'/>
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                    
                </Submit>
            </Container>
        </Background>
    )
}