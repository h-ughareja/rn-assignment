import { View, Text, TextInput, Pressable } from 'react-native';
import { ApplicationStyles, Colors } from '../../theme';
import { GeneralHeader } from '../../components';
import styles from './AddLocationStyles';
import { Strings } from '../../contants';
import { useAddLocation } from './useAddLocation';

export const AddLocationScreen = () => {

    const {
        handleOnAdd,
        showReq,
        locationTitle,
        setLocationTitle
    } = useAddLocation();

    return (
        <View style={ApplicationStyles.screenContainer}>
            <GeneralHeader title={Strings.common.addToYourPlaces} />
            <View style={styles.mainContainer}>
                <Text style={styles.inputTitleText}>
                    {Strings.common.locationTitle}
                </Text>
                <View>
                    <TextInput
                        placeholder={Strings.common.locationTitleHere}
                        placeholderTextColor={Colors.grey}
                        style={styles.inputField}
                        value={locationTitle}
                        onChangeText={(text) => setLocationTitle(text)}
                    />
                    {showReq && locationTitle.trim().length == 0 && (
                        <Text style={styles.instructionText}>
                            Please enter title
                        </Text>
                    )}
                </View>
                <View style={styles.addButtonContainer}>
                    <Pressable style={styles.addButton} onPress={handleOnAdd}>
                        <Text style={styles.addButtonText}>
                            {Strings.common.addLocation}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}