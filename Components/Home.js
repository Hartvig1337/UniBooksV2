//Import
import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

//Define Home screen
const Home = ({}) => {
    return (
        <View>
            <Text category='h3' style={style.title}>Welcome to UniBooks</Text>
            <Text category='p1' style={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    )
}

export default Home;

const style = StyleSheet.create({
    title: {
        marginTop: 200,
        textAlign: 'center'
    },
    description: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    }
})
