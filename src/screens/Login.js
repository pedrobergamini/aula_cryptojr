import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <LinearGradient style={styles.background} colors={['#ff911e', '#fff']}>
    <View style={styles.form}>
      <TextInput style={styles.input} name="name" placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        style={styles.input}
        name="password" 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
      />
    </View>

    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input : {
    borderRadius: 8,
    width: 300,
    height: 40,
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  form: {
    marginBottom: 30,    
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 14,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#ff911e'
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 15
  }
});
