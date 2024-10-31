import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusColor } from '../utils/helpers';
import colors from '../styles/colors';

interface ReportCardProps {
  title: string;
  description: string;
  status: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ title, description, status }) => {
  return (
    <View style={[styles.card, { borderLeftColor: getStatusColor(status) }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={[styles.status, { color: getStatusColor(status) }]}>
        {status.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

export default ReportCard;