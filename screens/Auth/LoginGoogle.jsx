import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black } from '@expo-google-fonts/montserrat';

export default function SignInScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black
  });

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
    }

    if (!fontsLoaded && !fontError) { 
      loadResourcesAndDataAsync(); 
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#4285F4",
          width: "75%",
          padding: 8,
          borderRadius: 15,
          marginTop: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={{color: "white", fontSize: 16, fontFamily: 'Montserrat_600SemiBold', }}>
          Continuar com Google
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}