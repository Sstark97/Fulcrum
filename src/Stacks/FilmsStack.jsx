import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FilmsScreen from "../Screens/FilmsScreen";
const Stack = createStackNavigator();

const FilmsStack = () => {

    return (
        <Stack.Navigator> 
            <Stack.Screen name="Films" component={FilmsScreen}/>
        </Stack.Navigator>
    )
}

export default FilmsStack;