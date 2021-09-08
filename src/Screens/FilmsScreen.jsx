import React from "react";
import { View, Text, FlatList } from "react-native";
import useFetchAPI from "../hooks/useFetchAPI";
import FilmsCard from "../components/FilmsCard";

const FilmsScreen = () => {
    const films = useFetchAPI("films/").response;
    const loading = useFetchAPI("films/").loading;


    return(
        <View>
            {loading 
                ? <Text>Loading...</Text> 
                : 
                <FlatList
                    data={films}
                    keyExtractor={item => item.episode_id + ""}
                    renderItem={({ item }) => <FilmsCard film={item} />}
                >
                </FlatList>}
        </View>
    );
};

export default FilmsScreen;