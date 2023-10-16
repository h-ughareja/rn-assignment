import React from 'react';
import styles from './HeaderStyles';
import { Text, View, Pressable } from 'react-native';
import { Colors } from '../../theme';
import {List } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes } from '../../contants';

export const MainHeader = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.mainHeaderContainer}>
            <Text style={styles.mainHeaderAppName}>Track <Text style={{color: Colors.primary}}>Me</Text></Text>
            <Pressable style={styles.mainHeaderBar} onPress={() => {
                navigation.push(NavigationRoutes.SettingScreen);
            }}>
                <List size={32} color={Colors.black} />
            </Pressable>
        </View>
    )
}