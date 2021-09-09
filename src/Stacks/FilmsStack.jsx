import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FilmsScreen from "../Screens/FilmsScreen";
import FilmDetailScreen from "../Screens/FilmDetailScreen";
import colors from "../utils/colors";

const Stack = createStackNavigator();

const FilmsStack = () => {

    return (
        <Stack.Navigator screenOptions={{
            title: "Star Wars Films",
            headerStyle: {
                backgroundColor: colors.blackPearl,
                shadowColor: colors.blackPearl,
            },
            headerTintColor: colors.white

        }}> 
            <Stack.Screen 
                name="Films" 
                component={FilmsScreen}
            />
            <Stack.Screen name="FilmDetail" component={FilmDetailScreen}/>
        </Stack.Navigator>
    )
}

export default FilmsStack;