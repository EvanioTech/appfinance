import React from "react";
import { Container, Tipo, TipoText, IconView, ValorText } from "./styles";
import  Icon  from "react-native-vector-icons/Feather";
import { Alert, TouchableWithoutFeedback } from "react-native";


const HistoricoList = ({data, deleteItem}) => {

    function deleteRegister() {
        Alert.alert(
          'Atençao',
          'Você deja deletar este Registro?',
          [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Continuar',
                onPress: () => deleteItem(data.id)
            }
          ]
        )
    }

    const formattedMovments = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(data.value);



    return(
        <TouchableWithoutFeedback onLongPress={deleteRegister}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                    <Icon 
                        name={data.type === 'despesa' ? "arrow-down" : "arrow-up"} 
                        size={20} 
                        color="#FFF"/>
                    <TipoText>{data.type}</TipoText>
                    </IconView>
                    
                </Tipo>
                <ValorText>
                    {formattedMovments} - {data.description}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    )

}


export {HistoricoList}