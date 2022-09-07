import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ReadQrCode } from "../pages/ReadQrCode";
import { Register } from "../pages/Register";

export function Routes () {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ReadQrCode" component={ReadQrCode} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}