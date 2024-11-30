import React, {useState} from "react";
import { Container,
     ButtonFilterText,
      ModalContent,
    ButtonFilter,
    } from "./styles";

import { View , TouchableWithoutFeedback} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";


const CalendarModal = ({setVisible, handleFilter}) => {
    const [dateNow, setDateNow] = useState(new Date());
    const [markeddates, setMarkedDates] = useState({});

    function handleOnDayPress(date) {
        //console.log(date.dateString);

        setDateNow(new Date(date.dateString));

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selected: '#3b3dbf',
            textColor: '#FFF'
        }

        setMarkedDates(markedDay)
    }

    function handleFilterDate() {
        handleFilter(dateNow);
        setVisible();
        
    }


    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>

            <ModalContent>

                <Calendar
                onDayPress={handleOnDayPress}
                markedDates={markeddates}
                enableSwipeMonths={true}
                theme={{
                    todayTextColor: 'red',
                    selectedDayBackgroundColor: 'blue',
                    selectedDayTextColor: '#FFF'
                }}
                
                />


                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}


export {CalendarModal};