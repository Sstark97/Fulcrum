import React from "react";
import { View, Text, Image, Pressable } from "react-native";

const FilmsCard = ({ film }) => {

    return(
        <View>
            <Image source={`episode${film.episode_id}.png`} />
            <View>
                <Text>{film.title}</Text>
                <Text>{film.director}</Text>
                <Text>{film.producer}</Text>
                <Text>{film.release_date}</Text>
            </View>

        </View>
    )

};

export default FilmsCard;