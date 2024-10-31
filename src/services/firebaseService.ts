import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signIn = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth().signOut();
};

export const getCompanyReports = () => {
  return firestore().collection('companyReports').get();
};

export const getStudentReports = () => {
  return firestore().collection('studentReports').get();
};

export const addCompanyReport = (report: any) => {
  return firestore().collection('companyReports').add(report);
};

export const addStudentReport = (report: any) => {
  return firestore().collection('studentReports').add(report);
};

export const getDashboardData = async () => {
  const companyReports = await getCompanyReports();
  const studentReports = await getStudentReports();

  return {
    totalCompanyReports: companyReports.size,
    totalStudentReports: studentReports.size,
  };
};