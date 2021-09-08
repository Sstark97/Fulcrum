import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FilmsScreen from "../Screens/FilmsScreen";
import FilmDetailScreen from "../Screens/FilmDetailScreen";
const Stack = createStackNavigator();

const FilmsStack = () => {

    return (
        <Stack.Navigator screenOptions={{
            title: "Star Wars Films",
            headerStyle: {
                backgroundColor: "#20252c",
                shadowColor: "#20252c",
            },
            headerTintColor: "#fff"

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