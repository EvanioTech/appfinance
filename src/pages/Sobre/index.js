import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable } from "react-native";

 export function Sobre(){
    const navigation = useNavigation();
    return(
        <View>
<Pressable onPress={()=>navigation.openDrawer()}><Text style={{marginTop:200,justifyContent:'center',alignItems:'center'}}>TELA SOBRE</Text></Pressable>
       
    </View>
    )
    
}

export default Sobre;