import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useFetchAPI from "../hooks/useFetchAPI";
import FilmsCard from "../components/FilmsCard";
import colors from "../utils/colors";

const FilmsScreen = ({ navigation }) => {
    const films = useFetchAPI("films/").response;
    const loading = useFetchAPI("films/").loading;


    return(
        <View style={styles.container}>
            {loading 
                ? <Text>Loading...</Text> 
                : 
                <FlatList
                    data={films}
                    keyExtractor={item => item.episode_id + ""}
                    renderItem={({ item }) => <FilmsCard film={item} navigation={navigation}/>}
                >
                </FlatList>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.charade,
    }
});

export default FilmsScreen;