import React from "react";
import { Container,
     ButtonFilterText,
      ModalContent,
    ButtonFilter,
    } from "./styles";

import { View , TouchableWithoutFeedback} from "react-native";


const CalendarModal = ({setVisible}) => {
    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>

            <ModalContent>
                <ButtonFilter>
                    <ButtonFilterText>oi</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}


export {CalendarModal};