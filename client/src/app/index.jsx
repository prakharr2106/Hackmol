import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Section with Logo and Title */}
      <View style={styles.topHalf}>
        <Image
          source={require('../assets/images/logo.png')} // Update path if needed
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Women's Safety App</Text>
      </View>

      {/* Bottom Section with Button */}
      <View style={styles.bottomHalf}>
        <Text style={styles.subtitle}>Empowering Safety Through Innovation</Text>

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
    paddingTop: 40,
  },
  topHalf: {
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
  bottomHalf: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
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
