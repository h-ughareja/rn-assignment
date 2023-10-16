import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationRoutes, Strings } from '../contants';
import { HomeScreen, MyPlacesScreen } from '../modules';
import styles from './NavigationStyles';
import { View, Text } from 'react-native';
import { House, MapPinLine } from 'phosphor-react-native';
import { Colors } from '../theme';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarLabelPosition: "below-icon",
            tabBarStyle: styles.tabBarContainer
        }}>
            {/* <Tab.Screen name={NavigationRoutes.HomeScreen} component={HomeScreen} /> */}
            <Tab.Screen name={NavigationRoutes.HomeScreen} component={HomeScreen} options={{
                tabBarIcon: (({ focused }) => {
                    return (
                        <View style={styles.tabNavTab}>
                            {focused ?
                                <House size={30} weight="fill" color={Colors.primary} /> :
                                <House size={30} color={Colors.black} />
                            }
                            <Text style={focused ? styles.tabNavTabNameActive : styles.tabNavTabName}>
                                {Strings.common.tradeMe}
                            </Text>
                        </View>
                    )
                }),
                headerShown: false,
            }} />
            <Tab.Screen name={NavigationRoutes.LocationsScreen} component={MyPlacesScreen} options={{
                tabBarIcon: (({ focused }) => {
                    return (
                        <View style={styles.tabNavTab}>
                            {focused ?
                                <MapPinLine size={30} weight="fill" color={Colors.primary} /> :
                                <MapPinLine size={30} color={Colors.black} />
                            }
                            <Text style={focused ? styles.tabNavTabNameActive : styles.tabNavTabName}>
                                {Strings.common.myPlaces}
                            </Text>
                        </View>
                    )
                }),
                headerShown: false,
            }} />
        </Tab.Navigator>
    );
}
