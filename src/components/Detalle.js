import React from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useState , useEffect } from "react";
import Http from "../lib/http";
import { FlatList } from "react-native-gesture-handler";
import Pokemon from 'pokemon-images';


const Detalle = (props) => {
    const {name} = props.route.params.item;
    const [pokemon, setPokemon] = useState({});
    const [pokemonImg, setPokemonImg] = useState("#");
    const [loading, setLoading] = useState(false);


    const getData = async (url) => {
        setLoading(true);
        let res = await Http.instance.get(url);
        setPokemon(res.abilities);
        setLoading(false);
    }

    useEffect(() => {   
        const {item} = props.route.params;
        props.navigation.setOptions({ title: item.name });
        let pokeImg = Pokemon.getSprite(item.name);
        setPokemonImg(pokeImg);
        getData(item.url);
    }, [])

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator color="red" size="large" />: null}
            <Text style={styles.titulo}>{ name }</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    url: pokemonImg,
                }}
            />
            <Text style={styles.hab}>Habilidades:</Text>
            <FlatList
                data={pokemon}
                renderItem={({ item }) => <Text>{item.ability.name}</Text>}
                
                keyExtractor={( item, index) => index.toString()}
                />
        </View>

    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 200,
        height: 200,
    },
    titulo: {
        fontSize: 23,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    hab: {
        fontWeight: 'bold',
    },
    container: {
        margin: 20,
    },
});

export default Detalle;