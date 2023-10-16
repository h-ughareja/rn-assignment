import { View, Text, Pressable } from 'react-native';
import { ApplicationStyles } from '../../theme';
import styles from './HeaderStyles';
import { ArrowLeft } from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';

export const GeneralHeader = ({
    title
}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.generalHeaderContainer}>
            <Pressable style={styles.backButton} onPress={() => {
                navigation.goBack();
            }}>
                <ArrowLeft size={27} />
            </Pressable>
            <Text style={styles.generalHeaderTitle}>
                {title}
            </Text>
        </View>
    )
}
