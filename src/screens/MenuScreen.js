import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, FlatList, Alert } from 'react-native'
import MenuImage from '../components/MenuImage'
import {TouchableOpacity} from 'react-native-gesture-handler'
const MenuScreen = ({navigation}) => {
    const [menu, setMenu] = useState([{nombre: 'Tacos'}, {nombre: 'Quesadillas'}, {nombre: 'Volcanes'},
    {nombre: 'Gringas'}, {nombre: 'Bebidas'}, {nombre: 'Aguas'}, {nombre: 'Cheves'}


]);

    function handlePress(item){
        //navigation.navigate('Perfil')
        console.log(item.item.nombre)
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                    data={menu}
                    renderItem={(item)=>(
                        <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
                            <MenuImage styles={styles.card} name={item.item.nombre}/>
                        </TouchableOpacity>
                    )}
                />
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,

    },
    card: {
        padding: 10,
        width: 340, 
        height: 200, 
        borderRadius: 10
    }
  });

export default MenuScreen
