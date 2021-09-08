import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import filmStyles from "../assets/styles/FilmCardStyle";

const FilmsCard = ({ film }) => {

    return(
        <View style={filmStyles.container}>
            {/* <Image source={`episode${film.episode_id}.png`} /> */}
            <Text>Prueba</Text>
            <View style={filmStyles.dataContainer}>
                <Text>{film.title}</Text>
                <Text>{film.director}</Text>
                <Text>{film.producer}</Text>
                <Text>{film.release_date}</Text>
            </View>

        </View>
    )

};

export default FilmsCard;