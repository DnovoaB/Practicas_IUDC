export interface CompanyReport {
    id: string;
    companyName: string;
    reportContent: string;
    status: 'green' | 'yellow' | 'red';
    createdAt: Date;
  }
  
  export interface StudentReport {
    id: string;
    studentName: string;
    reportContent: string;
    status: 'green' | 'yellow' | 'red';
    createdAt: Date;
  }