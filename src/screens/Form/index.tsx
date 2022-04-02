import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { styles } from './styles';

export function Form() {
    const navigation = useNavigation();

    return (
            <View style={styles.container}>
                <Button title='Go Home' onPress={() => navigation.navigate("Home")}>
                    Ola
                </Button>
            </View>
    );
}