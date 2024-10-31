import colors from '../styles/colors';

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'green':
      return colors.success;
    case 'yellow':
      return colors.warning;
    case 'red':
      return colors.error;
    default:
      return colors.textSecondary;
  }
};