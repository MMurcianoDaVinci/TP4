import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useState , useEffect } from "react";
import { Text, Pressable, View, StyleSheet, ActivityIndicator } from 'react-native';
import Http from "../lib/http";
import ItemListado from "./ItemListado";
import LoginGoogle from "./Login";

const Listado = (props) => {

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(false);
    
    const getData = async () => {
        setLoading(true);
        let res = await Http.instance.get("https://pokeapi.co/api/v2/pokemon/?limit=120");
        setPokemon(res.results);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    let handelPress = (item) => {
        props.navigation.navigate('Detalle', { item });
    }

    return (
        <View style={styles.container}>
        {loading ? <ActivityIndicator color="FFF" size="large" />: null}
            <Text style={styles.txt}>Listado de Pokemones</Text>
            <FlatList
                style={styles.lista}
                data={pokemon}
                renderItem={({ item }) => 
                    <ItemListado item={item} 
                    onPress={ () => handelPress(item) } />
                }
                keyExtractor={( item, index) => index.toString()}
            />
            <LoginGoogle onPress={'Login'}></LoginGoogle>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt: {
        textAlign: 'center',
        fontSize: 30,
    },
    lista: {
        margin: 30,
    },
    btn: {
        borderRadius: 15,
        backgroundColor: "blue",
        padding: 20,
        margin: 30,
        textAlign: "center",
    }
});

export default Listado;