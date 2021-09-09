import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const FilmDetailScreen = ( { route } ) => {
    const [film, setFilm] = useState({});

    useEffect(() => {
        setFilm(route.params.film);
    },[]);

    return (
        <View>
            <Image 
            source={{uri:`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}} 
            style={{width: 200, height: 200}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.charade,
    }
});

export default FilmDetailScreen;