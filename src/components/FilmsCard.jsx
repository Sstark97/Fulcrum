import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import colors from "../utils/colors";

const FilmsCard = ({ film, navigation }) => {
    const filmDetail = film.url;

    const handlePress = () => {
        navigation.navigate("FilmDetail", { film });
    };

    return(
        <Pressable onPress={handlePress} style={filmStyles.container}>
            <Image style={filmStyles.filmImage} source={{uri:`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}} />
            <View style={filmStyles.dataContainer}>
                <Text style={filmStyles.text}>Title: {film.title}</Text>
                <Text style={filmStyles.text}>Director: {film.director}</Text>
                <Text style={filmStyles.text}>Producer: {film.producer}</Text>
                <Text style={filmStyles.text}>Release Date: {film.release_date}</Text>
            </View>
    </Pressable>
    )

};

const filmStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        borderBottomColor: '#3a4049',
        borderBottomWidth: 1,
    },
    dataContainer: {
        minWidth: 200,
        maxWidth: 200,
        padding: 5,
    },
    filmImage: {
        width: 100,
        height: 90,
        resizeMode: 'contain',
    },
    text:{
        color: colors.white,
    }
});

export default FilmsCard;