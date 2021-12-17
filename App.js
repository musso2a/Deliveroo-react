
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Deliveroo from './components/Deliveroo'

function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Deliveroo"
                onPress={() => navigation.navigate('Deliveroo')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (


        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}> 
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Deliveroo" component={Deliveroo} />
            </Stack.Navigator>
        </NavigationContainer>











    );
}

const styles = StyleSheet.create({

});
