import React from "react";
import { Text, Pressable, StyleSheet } from 'react-native';

const ItemListado = ({ item, onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.txt}>{item.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        fontSize: 23,
    }
})

export default ItemListado;