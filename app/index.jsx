import { Redirect } from "expo-router";
import { useState, useEffect, useCallback } from "react";

import * as Font from 'expo-font';

import Login from './login'
import Toast from 'react-native-toast-message';
import Register from "./register";

const getFonts = () => Font.loadAsync({
  'poppins': require('./../assets/fonts/Poppins-Regular.ttf'),
  'poppins-bold': require('./../assets/fonts/Poppins-Bold.ttf'),
  'poppins-light': require('./../assets/fonts/Poppins-Light.ttf'),
});



export default function Index() {



  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLogged] = useState(true);

  const loadFonts = useCallback(async () => {
    await getFonts();
    setFontsLoaded(true);
  }, []);

  useEffect(() => {
    loadFonts();
  }, [loadFonts]);

  if (!fontsLoaded) return null;

  return (
    <>
      <Toast position="top" bottomOffset={20} />
      
      {isLogged ? <Redirect href={'/(tabs)/home'} /> : <Login />}


    </>
  );
}
