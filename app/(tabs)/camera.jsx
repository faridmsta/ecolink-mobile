import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { Stack } from "expo-router";
import {
  AppState,
  Button,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useRef } from "react";
import Style from "./../../constants/Style";



const Overlay = () => {


  return (
    <View style={{
      width: '100vh'

    }}>

    </View>
  )

}


export default function Home() {
  const qrLock = useRef(false);

  const appState = useRef(AppState.currentState);

  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={[Style.container, {
        backgroundColor: Style.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }]}>
        <Text style={{
          marginBottom: 20,
          fontFamily: 'poppins',
          color: 'white',
          fontSize: 24
        }}>We need your permission to show the camera</Text>
      
        <Pressable
          style={{
            padding: 10,
            backgroundColor: Style.colors.light,
            borderRadius: 5
          }}
          onPress={requestPermission}>
          <Text
            style={{
              color:Style.colors.primary,
              fontFamily:'poppins',
              fontSize:20
            }}
          >Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen
        options={{
          title: "Overview",
          headerShown: false,
        }}
      />
      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(async () => {
              await Linking.openURL(data);
            }, 500);
          }
        }}
      />
    </SafeAreaView>
  );
}
