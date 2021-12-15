/Import
import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

//Define About screen.
const About = ({}) => {
    return (
        <View>
            <Text category='h5' style={style.title}>About UniBooks</Text>
            <Text category='p1' style={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Text>

            <Text category='h6'style={style.subTitle}>What happens when i rent out a book?</Text>
            <Text category='p1' style={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Text>

            <Text category='h6'style={style.subTitle}>How am i ensured if my books are damaged?</Text>
            <Text category='p1' style={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Text>

        </View>
    )
}

export default About;

const style = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 20
    },
    subTitle: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 20
    },
    description: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 20
    }
})
