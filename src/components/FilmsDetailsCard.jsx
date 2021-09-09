import React  from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import colors from '../utils/colors';
import imageId from '../utils/imageId';

const FilmDetailsCard = ( { film } ) => (
        <View style={styles.container}>
            <Image 
            source={{uri:`https://starwars-visualguide.com/assets/img/films/${imageId[film.episode_id]}.jpg`}} 
            style={styles.filmImage}
            />
            <View style={styles.dataContainer}>
                <Text style={styles.text}>Title: {film.title}</Text>
                <Text style={styles.text}>Director: {film.director}</Text>
                <Text style={styles.text}>Producer: {film.producer}</Text>
                <Text style={styles.text}>Release Date: {film.release_date}</Text>
            </View>
        </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.charade,
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#3a4049',
        borderBottomWidth: 1,
    },
    filmImage: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
    }, 
    dataContainer: {
        minWidth: 200,
        maxWidth: 200,
        padding: 5,
        alignItems: 'baseline'
    },
    text:{
        color: colors.white,
        marginBottom: 20,
        fontSize: 16,
    }
});

export default FilmDetailsCard;