import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { Header } from "../../components/Header";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard ,Alert} from "react-native";
import { RegisterTypes } from "../../components/RegisterTypes";
import api from "../../services/api";
import { format } from 'date-fns' ;
import { useNavigation } from "@react-navigation/native";


const New = () => {
    const [motivo,setMotivo] = useState('');
    const [valor,setValor] = useState('');
    const [type,setType] = useState('receita');
    const navigation = useNavigation();


    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valor)) || type === null ){
            alert('Preencha todos os campos')
            return;
        }

        Alert.alert(
            'confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valor)}`,
            [
                {text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )

        

    }
    async function handleAdd() {
        Keyboard.dismiss();

        await api.post('/receive',{
            description: motivo,
            value: Number(valor),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')

        })
        setMotivo('');
        setValor('');
        navigation.navigate('Home');

    }

    return(
        

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Background>
            <Header
            title="Registrando"/>
            <SafeAreaView style={{marginTop: 14, alignItems: "center"}}>
                <Input
                placeholder="Descriçao desse registro"
                value={motivo}
                onChangeText={(text) => setMotivo(text)}
                />
                <Input
                placeholder="Valor desejado"
                keyboardType="numeric"
                value={valor}
                onChangeText={(text) => setValor(text)}
                />
                <RegisterTypes type={type} sendTypeChanged={(item) => setType(item) }/>

                <SubmitButton onPress={handleSubmit}>
                    <SubmitText>Registrar</SubmitText>
                </SubmitButton>
            </SafeAreaView>
        </Background>
        </TouchableWithoutFeedback>
    )
}


export {New}