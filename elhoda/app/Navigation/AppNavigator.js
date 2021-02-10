import React from 'react';
import I18n from 'i18next';

import AboutPage from '../Containers/AboutPage/AboutPage.component';
import QuranList from '../Containers/QuranListPage/QuranList.container';
import QuranDetail from '../Containers/QuranDetailPage/QuranDetail.container';
import SettingsPage from '../Containers/SettingsPage/SettingsPage.component';
import SplashScreen from '../Containers/SplashScreenPage/SplashScreen.component';
import { Colors } from '../Themes/Colors';
import { FontType } from '../Themes/Fonts';
import { fromRight } from '../Utils/Transition';
import { HeaderComponent } from '../Components/HeaderSurahList/HeaderSurahList.component';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


function AppStack (){
  return(
      <NavigationContainer>
           {/* mandtory to write initialRouteName */}
        <Stack.Navigator initialRouteName = "SplashScreen"
              screenOptions={{
                transitionConfig: () => fromRight(700),
                headerPressColorAndroid: Colors.rippleColor,
              
                headerStyle: {
                  borderBottomWidth: 0.5,
                  borderBottomColor: Colors.iron,
                  elevation: 0,
                },
                headerTitleStyle: {
                  fontFamily: FontType.semiBold,
                  fontSize: 18,
                  marginLeft: 0,
                },
                headerTintColor: Colors.black,
              }}
          > 
            <Stack.Screen name = "Splash" component= {SplashScreen} />
            <Stack.Screen name = "AboutPage" component= {AboutPage}  options={{title: I18n.t('AboutTitle')}} />
            <Stack.Screen name = "SettingsPage" component= {SettingsPage} options={{title: I18n.t('SettingsTitle')}}/>
            <Stack.Screen 
              name = "QuranList" 
              component= {QuranList} 
              options={{ header: props => (
                  <HeaderComponent title={I18n.t('AppTitle')} {...props} />
                ),}} 
              />
            <Stack.Screen name = "QuranDetail" component= {QuranDetail} 
             
            />
        </Stack.Navigator>
      </NavigationContainer>
  )
}



export default AppStack;
