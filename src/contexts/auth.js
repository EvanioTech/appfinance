import React ,{ createContext, useState, useEffect}from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
export const AuthContext = createContext({});
import AsyncStorage from "@react-native-async-storage/async-storage";

function AuthProvider({children}){
 const [user, setUser] = useState (null);
 const navigation = useNavigation();
 const [loadingAuth,setLoadingAuth] = useState(false);
 const [loading, setLoading] = useState(true)

 useEffect(()=> {
    async function loadStorage() {
        const storageUser = await AsyncStorage.getItem('@finToken');

        if (storageUser) {
            const response = await api.get('/me', {
                headers:{
                    'Authorization': `Bearer ${storageUser}`
                }
            })
            .catch(()=>{
                setUser(null)
                console.log('erro')
            })

            api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
            setUser(response.data);
            setLoading(false)
            
        }
        setLoading(false)

    }
    loadStorage();
 },[])




async function signUP(nome, email, pass){
    setLoadingAuth(true)
    try{
        const response = await api.post('/users',{
            name: nome,
            email: email,
            password: pass
        })
        setLoadingAuth(false)
        navigation.goBack()
        console.log('cadastrado')

    }catch(err){
        console.log('erro no cadastro', err)
        setLoadingAuth(false);
    }
    
}
async function signIn(email, pass){
    setLoadingAuth(true);
    try{
        const response = await api.post('/login',{
            email: email,
            password: pass
        })

        const{ id, name, token } = response.data;

        const data = {
            id,
            name,
            token,
            email
        };

        await AsyncStorage.setItem('@finToken', token)
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        
        

        setUser({
            id,
            name,
            email,
        })

        setLoadingAuth(false)
        
        console.log('logado')

    }catch(err){
        console.log('erro no Acesso', err)
        setLoadingAuth(false);
    }
}

async function signOut(){
    await AsyncStorage.clear()
    .then(() =>{
        setUser(null);
    })
}

    return(
        <AuthContext.Provider value={{signed: !!user ,user,signUP, loadingAuth, signIn, loading,signOut}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;