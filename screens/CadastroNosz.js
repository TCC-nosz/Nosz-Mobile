import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import { getAuth, createUserWithEmailAndPassword,} from '@firebase/auth';
import * as SplashScreen from 'expo-splash-screen';
import { initializeApp } from '@firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyC7dEbqAOFTgaHAgNyGWKm6N0DtIOhlCok",
  authDomain: "bdnosz.firebaseapp.com",
  projectId: "bdnosz",
  storageBucket: "bdnosz.appspot.com",
  messagingSenderId: "304409954868",
  appId: "1:304409954868:web:833478c74d88ee55681861",
  measurementId: "G-QC6QBJJ54F"
};

const app = initializeApp(firebaseConfig);

export default function Cadastro({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);


  //CONFIGURAÇÃO DAS FONTES
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync(); 
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  //FIM DAS CONFIGURAÇÕES DAS FONTES!!!

  //INICIO CÓDIGO DE CADASTRO
  const handleCadastro = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuário Criado com sucesso");
      setTimeout(() => {
        navigation.navigate('Inicial');
      }, 5000);
    } catch (error) {
      alert(error.mesage)
      console.error('Cadastro error:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.vheader}>

          <View style={styles.preheader}>
            <View style={styles.vgoback}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Inicial', { title: 'Início' })}
              >
                <Image source={require('../assets/images/voltar-icon.png')} style={styles.voltar} />
              </TouchableOpacity>
            </View>

            <View style={styles.vtexto}>
              <Text style={styles.t1}>Realize seu</Text>
              <Text style={styles.t2}>Cadastro</Text>
              <Text style={styles.txt}>Digite seu email e senha.</Text>
            </View>
          </View>

          <Image source={require('../assets/images/nosz.png')} style={styles.nosz} />
          <View style={styles.circulo}></View>
        </View>

        <View style={styles.vinputs}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            cursorColor={'#E46216'}
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
          />

          <TextInput
            style={styles.input}
            placeholder='Senha'
            cursorColor={'#E46216'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

        </View>

        <View style={styles.buttonview}>
          <TouchableOpacity
            style={styles.buttonCadastro}
            onPress={handleCadastro}
          >
            <Text style={styles.buttonTextCadastro}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.circulo2}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  voltar: {
    width: 34,
    height: 40,
    margin: 10
  },
  nosz: {
    width: 170,
    height: 170,
    alignSelf: 'flex-end',
    zIndex: -1
  },
  t1: {
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'left',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-start',
  },
  t2: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
    fontSize: 35,
    alignSelf: 'flex-start',
    color: '#e36216',
  },
  txt: {
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'left',
    fontSize: 18,
    color: '#565656',
    alignSelf: 'flex-start',
  },
  circulo: {
    position: 'absolute',
    backgroundColor: '#f89a14',
    borderRadius: 360,
    width: '130%',
    height: '285%',
    right: '34%',
    bottom: '-290%',
    zIndex: -1,
  },
  vinputs:{
    flex: 1, 
    justifyContent: 'flex-end',
    marginBottom: 80 
  },
  input: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    color: '#131313',
    height: 35,
    fontSize: 19,
    margin: 20
  },
  circulo2: {
    position: 'absolute',
    backgroundColor: '#f89a14',
    borderRadius: 360,
    width: '150%',
    height: '504%',
    bottom: '-90%',
    right: '-4%',
    zIndex: -999,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    margin: 10,
    padding: 18,
    width: '100%',
    height: '100%',
  },
  buttonview: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCadastro: {
    backgroundColor: '#479d32',
    alignSelf: 'center',
    width: '75%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    margin: 13,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonTextCadastro: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#f5f5f5',
    fontSize: 18,
    textAlign: 'center',
  },
});