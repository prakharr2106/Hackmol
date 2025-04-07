import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';

const Login = () => {
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    console.log('Logging in with:', { contact, password });
    // Add actual login logic here
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Animatable.View animation="fadeInUp" duration={700} style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <Animatable.View animation="fadeInRight" delay={200} style={styles.inputWrapper}>
          <TextInput
            placeholder="Email or Phone"
            style={styles.input}
            value={contact}
            onChangeText={setContact}
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
        </Animatable.View>

        <Animatable.View animation="fadeInRight" delay={400} style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#aaa"
            secureTextEntry
          />
        </Animatable.View>

        <Pressable
          onPress={handleLogin}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#27ae60' : '#2ecc71' },
          ]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <TouchableOpacity onPress={() => router.back()} style={styles.goBack}>
          <Text style={styles.backText}>← Go Back</Text>
        </TouchableOpacity>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e1e2f',
      justifyContent: 'center',
      padding: 20,
    },
    formContainer: {
      backgroundColor: '#2c2c3e',
      padding: 24,
      borderRadius: 20,
      elevation: 8,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#e0e0e0',
      marginBottom: 24,
      textAlign: 'center',
    },
    inputWrapper: {
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: '#444',
      borderRadius: 10,
      padding: 12,
      fontSize: 16,
      color: '#e0e0e0',
      backgroundColor: '#3a3a4f',
    },
    button: {
      marginTop: 20,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: '#8e44ad',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    loginRedirect: {
      marginTop: 18,
      alignItems: 'center',
    },
    loginText: {
      color: '#bbb',
      fontSize: 14,
    },
    loginLink: {
      color: '#bd93f9',
      fontWeight: '600',
    },
    goBack: {
      marginTop: 20,
      alignItems: 'center',
    },
    backText: {
      color: '#888',
      fontSize: 14,
    },
  });
  
