import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';


const LoginGoogle = ({onPress}) => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: "972806024686-d9jr69qlkg4v10ieo7gknonj8midofak.apps.googleusercontent.com",
        iosClientId: '972806024686-3brloquasrr4f25halr8bivlar46udp2.apps.googleusercontent.com',
      });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          }
      }, [response]);

    return (
        <View>
            <Button
            style={styles.btn}
            disabled={!request}
            title="Login"
            onPress={() => {
                promptAsync();
                }}
            >Login
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
      color: 'red',
      fontSize: 50,
    },
    btn: {
      margin: 40,
      padding: 50,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default LoginGoogle;