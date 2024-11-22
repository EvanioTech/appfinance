import React, {useContext} from "react";
import { View, Text, Image } from "react-native";
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AuthContext } from "../../contexts/auth";

const CustomDrawer = (props) => {
    const {user, signOut} = useContext(AuthContext)
    return(
        <DrawerContentScrollView {...props}>
            <View style={{alignItems:"center", justifyContent:"center", marginTop: 25}}>
                <Image
                source={require('../../assets/fin.jpg')}
                style={{width:100, height: 100, borderRadius:50}}
                />
                <Text style={{fontSize: 18, marginTop: 14}}>
                    Bem-vindo!
                    </Text>
                    <Text style={{fontSize: 17,fontWeight:"bold", marginBottom: 25, paddingHorizontal: 20}}
                    numberOfLines={1}
                    >
                    {user && user.name }
                    </Text>
            </View>
            
            <DrawerItemList {...props}/>
            <DrawerItem
            {...props}
            label= 'Sair do App'
            pressColor="red"
            onPress={()=> signOut()}
            />
        </DrawerContentScrollView>
    )
}


export {CustomDrawer}