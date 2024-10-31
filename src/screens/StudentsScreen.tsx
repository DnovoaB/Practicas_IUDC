import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { getStudentReports } from '../services/firebaseService';
import ReportCard from '../components/ReportCard';
import colors from '../styles/colors';
import type { StudentReport } from '../types/reports';

export default function StudentsScreen() {
  const [reports, setReports] = useState<StudentReport[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const snapshot = await getStudentReports();
        const fetchedReports = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date(),
        })) as StudentReport[];
        setReports(fetchedReports);
      } catch (error) {
        console.error('Error al obtener reportes de estudiantes:', error);
      }
    };

    fetchReports();
  }, []);

  const renderItem = ({ item }: { item: StudentReport }) => (
    <ReportCard
      title={item.studentName}
      description={item.reportContent}
      status={item.status}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportes de Estudiantes</Text>
      {reports.length > 0 ? (
        <FlatList
          data={reports}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noReportsText}>No hay reportes disponibles</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  noReportsText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 20,
  },
});