import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import colors from '../utils/colors';
import FilmDetailsCard from '../components/FilmsDetailsCard';
import { loadAsync } from 'expo-font';

const FilmDetailScreen = ( { route } ) => {
    const [film, setFilm] = useState({});
    const [fontLoaded, setFontLoaded] = useState(false);
      
    const loadFont = async () => {
        await loadAsync({
            Starwars: require('../assets/fonts/starWars.ttf'),
        });
        setFontLoaded(true);
    }

    useEffect(() => {
        setFilm(route.params.film);
        loadFont();
    },[]);

    return (
        <View style={styles.container}>
            <FilmDetailsCard film={film}/>
            <Text style={fontLoaded ? styles.openingText : ""}>{film.opening_crawl}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.charade,
        padding: 10,
    },
    openingText: {
        textAlign: "center",
        marginTop: 15,
        fontFamily: 'Starwars',
        color: colors.black,
        textShadowColor: colors.banana,
        textShadowRadius: 2,
        fontSize: 16,
        lineHeight: 16
    }
});

export default FilmDetailScreen;