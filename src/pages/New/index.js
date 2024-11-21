import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { Header } from "../../components/Header";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { RegisterTypes } from "../../components/RegisterTypes";


const New = () => {
    const [motivo,setMotivo] = useState('');
    const [valor,setValor] = useState('');
    const [type,setType] = useState('receita');
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

                <SubmitButton onPress={()=>alert(motivo +' ' + valor)}>
                    <SubmitText>Registrar</SubmitText>
                </SubmitButton>
            </SafeAreaView>
        </Background>
        </TouchableWithoutFeedback>
    )
}


export {New}