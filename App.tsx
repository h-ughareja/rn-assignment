import React from "react";
import { StatusBar, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { MainNavigation, TabNavigation } from "./app/navigation";
import { ApplicationStyles, Colors } from "./app/theme";
import { persistor, store } from "./app/redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { useApp } from "./app/hooks";

function App() {

  const {} = useApp();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            animated={true}
            backgroundColor={Colors.white}
            barStyle={"dark-content"}
          />
          <SafeAreaView style={ApplicationStyles.screenContainer}>
            <MainNavigation />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}

export default App;
