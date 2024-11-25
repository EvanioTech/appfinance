
import React ,{useContext, useEffect, useState }from "react";
import { Background , ListBalance, Area, Title, List} from "./styles";
import { AuthContext } from "../../contexts/auth";
import {Header}   from "../../components/Header";
import api from "../../services/api";
import { format } from 'date-fns' ;
import { useIsFocused } from "@react-navigation/native";
import { BalanceItem } from "../../components/BalanceItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity, Text, Modal } from "react-native";
import { HistoricoList } from "../../components/HistoricoList";
import { CalendarModal } from "../../components/CalendarModal";





export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [movments, setMovments] = useState([]);
    
    const [dateMovements, setDateMovements] = useState(new Date());
    
    const{ singOut} = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(()=>{
        let isActive = true;

        async function getMovements() {

            let dateFormated = format(dateMovements, "dd/MM/yyyy");


            const receives = await api.get('/receives' , {
                params: {
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })

            
            if(isActive){
                setMovments(receives.data);
                setListBalance(balance.data);
            }
            console.log(receives.data);
            console.log(balance.data);

        }
        

        getMovements();

        return () => isActive= false;
    }, [isFocused, dateMovements])



        async function deleted(id) {
            try{
                await api.delete('/receives/delete', {
                    params:{
                        item_id: id
                    }
                })
                setDateMovements(new Date());
            }catch(err){
                console.log(err);
            }
        }




    return(
        <Background>
            <Header title= "Minhas Movimentações"/>
            <ListBalance
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.tag}
            renderItem={({item}) => (<BalanceItem data={item}/>)}
            />
            <Area>
            
            <TouchableOpacity style={{marginTop:15}} onPress={()=> setModalVisible(true)}>
            
            <Icon name="event" color='#121212' size={40}/>
                
            </TouchableOpacity>
            <Title>Ultimas Movimentações</Title>
            
            
            </Area>
            <List
            data={movments}
            keyExtractor={item => item.id}
            renderItem={({item}) => <HistoricoList data={item} deleteItem={deleted}/>}
            showsVerticalScrollIndicator= {false}
            contentContainerStyle={{paddingBottom:20}}
            />

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <CalendarModal
                setVisible={()=> setModalVisible(false)}
                />

            </Modal>

           
        </Background>
    )
}