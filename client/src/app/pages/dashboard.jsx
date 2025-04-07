import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Animatable from 'react-native-animatable';

const Dashboard = () => {
  const [location, setLocation] = useState(null);
  const [sosActive, setSosActive] = useState(false);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const handleSOS = () => {
    setSosActive(true);
  };

  const mockVolunteers = [
    { id: 1, latitude: 37.78825, longitude: -122.4324 },
    { id: 2, latitude: 37.7888, longitude: -122.4312 },
    { id: 3, latitude: 37.7875, longitude: -122.4332 },
  ];

  return (
    <View style={styles.container}>
      {!sosActive && (
        <Animatable.View animation="fadeInDown" style={styles.topHalf}>
          {location ? (
            <>
              <Text style={styles.title}>Your Current Location:</Text>
              <Text style={styles.locationText}>
                Lat: {location.coords.latitude.toFixed(4)}, Lon: {location.coords.longitude.toFixed(4)}
              </Text>
            </>
          ) : (
            <ActivityIndicator color="#fff" size="large" />
          )}
        </Animatable.View>
      )}

      <Animatable.View
        animation={sosActive ? 'fadeInUpBig' : 'fadeInUp'}
        duration={600}
        style={[styles.bottomHalf, sosActive && styles.mapExpanded]}
      >
        {sosActive ? (
          region && (
            <MapView style={styles.map} region={region} showsUserLocation>
  {mockVolunteers.map((vol, index) => (
    <Marker
      key={index}
      coordinate={{ latitude: vol.latitude, longitude: vol.longitude }}
      title={`Volunteer #${vol.id}`}
      pinColor="orange"
    />
  ))}
</MapView>
          )
        ) : (
          <>
            <Text style={styles.subtitle}>Press SOS to alert nearby volunteers</Text>
            <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
              <Text style={styles.sosText}>SOS</Text>
            </TouchableOpacity>
          </>
        )}
      </Animatable.View>
    </View>
  );
};

export default Dashboard;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bottomHalf: {
    height: height / 2,
    backgroundColor: '#2c2c3e',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapExpanded: {
    height: height,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 0,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    color: '#ccc',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  sosButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 100,
    shadowColor: '#e74c3c',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
  sosText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});