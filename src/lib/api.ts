import axios from 'axios';
import Cookies from 'js-cookie';
import { DashboardMetrics, TopAdvisorMetric, MonthlyPerformance } from '@/types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (credentials: any) =>
  api.post('/auth/login', credentials);

export const fetchDashboardMetrics = async (): Promise<DashboardMetrics> => {
  const response = await api.get('/dashboard/metrics');
  return response.data;
};

export const fetchTopAdvisors = async (): Promise<TopAdvisorMetric[]> => {
  const response = await api.get('/dashboard/top-advisors');
  return response.data;
};

export const fetchMonthlyPerformance = async (): Promise<MonthlyPerformance[]> => {
  const response = await api.get('/dashboard/monthly-performance');
  return response.data;
};

// ...outras chamadas para clientes, ativos, etc.