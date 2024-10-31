import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardCard from '../components/DashboardCard';
import { getDashboardData, signOut } from '../services/firebaseService';
import colors from '../styles/colors';

export default function HomeScreen({ navigation }) {
  const [dashboardData, setDashboardData] = useState({
    totalCompanyReports: 0,
    totalStudentReports: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      const data = await getDashboardData();
      setDashboardData(data);
    };
    fetchDashboardData();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dashboard}>
        <Text style={styles.dashboardTitle}>Panel de Control</Text>
        <View style={styles.cardContainer}>
          <DashboardCard
            title="Reportes de Empresas"
            value={dashboardData.totalCompanyReports}
            icon="business"
          />
          <DashboardCard
            title="Reportes de Estudiantes"
            value={dashboardData.totalStudentReports}
            icon="school"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Companies')}
        >
          <Icon name="business" size={24} color="white" />
          <Text style={styles.buttonText}>Empresas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Students')}
        >
          <Icon name="school" size={24} color="white" />
          <Text style={styles.buttonText}>Estudiantes</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  dashboard: {
    padding: 20,
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  signOutButton: {
    backgroundColor: colors.error,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});