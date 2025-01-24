import { Stack } from "expo-router";
import { store } from "../components/redux/store";
import { Provider } from "react-redux";




export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen
          name="marketplace/index"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="chat/index"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="login/index"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="register/index"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </Provider>
  );
}
