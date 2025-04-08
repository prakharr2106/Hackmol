import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Centered Logo and Title */}
      <View style={styles.centeredSection}>
        <Image
          source={require('../assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>HerShield</Text>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.getStartedButton} onPress={() => router.push('/pages/register')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
  },
  centeredSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e0e0e0',
    textAlign: 'center',
  },
  bottomSection: {
  position: 'absolute',
  bottom: 50,
  left: 0,
  right: 0,
  alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#8e44ad',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
