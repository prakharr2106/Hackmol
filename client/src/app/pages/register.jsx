import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';
import axios from '../../utils/axios.js'; // This is correct path

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

const handleRegister = async () => {
  console.log("Register button clicked");

  if (!name || !email || !password) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  try {
    const res = await axios.post('/api/auth/signup', {
      name,
      email,
      password,
    });

    console.log('Registered:', res.data);
    router.push('/pages/dashboard');
  } catch (err) {
    console.log("Register error:", err?.response?.data || err.message);
    Alert.alert('Error', err?.response?.data?.message || 'Something went wrong');
  }
};

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Animatable.View animation="fadeInUp" duration={700} style={styles.formContainer}>
        <Text style={styles.title}>Register</Text>
        <Animatable.View animation="fadeInRight" delay={200} style={styles.inputWrapper}>
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholderTextColor="#aaa"
          />
        </Animatable.View>

        <Animatable.View animation="fadeInRight" delay={400} style={styles.inputWrapper}>
          <TextInput
            placeholder="Email or Phone"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
        </Animatable.View>

        <Animatable.View animation="fadeInRight" delay={600} style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#aaa"
            secureTextEntry
          />
        </Animatable.View>
        <Pressable onPress={handleRegister} style={({ pressed }) => [styles.button, { backgroundColor: pressed ? '#2980b9' : '#3498db' }]}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>

        <TouchableOpacity onPress={() => router.push('/pages/login')}>
          <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Login</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} style={styles.goBack}>
          <Text style={styles.backText}>← Go Back</Text>
        </TouchableOpacity>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};


export default Register;

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
    