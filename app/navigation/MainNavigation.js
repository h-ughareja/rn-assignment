import { NavigationRoutes } from '../contants';
import { TabNavigation } from './TabNavigation';
import { AddLocationScreen, SettingScreen, ViewLocationScreen } from '../modules';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { ViewAllLocationScreen } from '../modules/view-location/ViewAllLocationScreen';

const Stack = createStackNavigator();

export const MainNavigation = () => {

  return (
    <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
    }}>
      <Stack.Screen name={NavigationRoutes.TabNavigation} component={TabNavigation} />
      <Stack.Screen name={NavigationRoutes.AddLocationScreen} component={AddLocationScreen} />
      <Stack.Screen name={NavigationRoutes.ViewLocationScreen} component={ViewLocationScreen} />
      <Stack.Screen name={NavigationRoutes.ViewAllLocationScreen} component={ViewAllLocationScreen} />
      <Stack.Screen name={NavigationRoutes.SettingScreen} component={SettingScreen} />
    </Stack.Navigator>
  );
}
