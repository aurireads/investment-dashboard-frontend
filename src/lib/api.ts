import axios from 'axios';
import Cookies from 'js-cookie';
import Decimal from 'decimal.js';
import { DashboardMetrics, TopAdvisorMetric, MonthlyPerformance } from '@/types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Função para converter dados da API em Decimal
const convertToDecimal = (data: any): any => {
  const converted = { ...data };
  
  // Lista de campos que devem ser convertidos para Decimal
  const decimalFields = [
    'nnm_current_week', 'nnm_current_week_change', 'nnm_semester', 'nnm_semester_change',
    'nnm_monthly', 'nnm_monthly_change', 'auc_total', 'auc_start_period', 'auc_end_period',
    'auc_variation', 'total_revenue_january', 'total_revenue_change', 'gross_commission_week',
    'gross_commission_change', 'net_commission_month', 'net_commission_change',
    'total_commission', 'total_commission_change', 'revenue', 'revenue_percentage',
    'net_new_money', 'change_percent', 'nnm_value', 'revenue_value', 'commission_value',
    'auc_value'
  ];

  decimalFields.forEach(field => {
    if (converted[field] !== undefined && converted[field] !== null) {
      converted[field] = new Decimal(converted[field]);
    }
  });

  return converted;
};

// Auth
export const login = (credentials: any) =>
  api.post('/auth/login', credentials);

// Dashboard Metrics
export const fetchDashboardMetrics = async (): Promise<DashboardMetrics> => {
  try {
    const response = await api.get('/dashboard/metrics');
    return convertToDecimal(response.data);
  } catch (error) {
    console.error('Erro ao buscar métricas do dashboard:', error);
    // Retornar dados mock em caso de erro para desenvolvimento
    return {
      nnm_current_week: new Decimal(150000),
      nnm_current_week_change: new Decimal(8.2),
      nnm_semester: new Decimal(850000),
      nnm_semester_change: new Decimal(12.5),
      nnm_monthly: new Decimal(320000),
      nnm_monthly_change: new Decimal(5.8),
      auc_total: new Decimal(5200000),
      auc_start_period: new Decimal(4800000),
      auc_end_period: new Decimal(5200000),
      auc_variation: new Decimal(8.3),
      total_revenue_january: new Decimal(180000),
      total_revenue_change: new Decimal(15.2),
      total_advisors: 25,
      gross_commission_week: new Decimal(45000),
      gross_commission_change: new Decimal(12.1),
      net_commission_month: new Decimal(125000),
      net_commission_change: new Decimal(9.8),
      total_commission: new Decimal(420000),
      total_commission_change: new Decimal(11.5),
    };
  }
};

// Top Advisors
export const fetchTopAdvisors = async (): Promise<TopAdvisorMetric[]> => {
  try {
    const response = await api.get('/dashboard/top-advisors');
    return response.data.map(convertToDecimal);
  } catch (error) {
    console.error('Erro ao buscar top assessores:', error);
    // Retornar dados mock em caso de erro
    return [
      {
        advisor_id: 1,
        advisor_name: 'João Silva',
        revenue: new Decimal(85000),
        revenue_percentage: new Decimal(18.5),
        net_new_money: new Decimal(320000),
        clients_count: 45,
        change_percent: new Decimal(12.3),
      },
      {
        advisor_id: 2,
        advisor_name: 'Maria Santos',
        revenue: new Decimal(72000),
        revenue_percentage: new Decimal(15.8),
        net_new_money: new Decimal(280000),
        clients_count: 38,
        change_percent: new Decimal(8.9),
      },
      {
        advisor_id: 3,
        advisor_name: 'Pedro Costa',
        revenue: new Decimal(68000),
        revenue_percentage: new Decimal(14.2),
        net_new_money: new Decimal(245000),
        clients_count: 32,
        change_percent: new Decimal(-2.1),
      },
    ];
  }
};

// Monthly Performance
export const fetchMonthlyPerformance = async (): Promise<MonthlyPerformance[]> => {
  try {
    const response = await api.get('/dashboard/monthly-performance');
    return response.data.map(convertToDecimal);
  } catch (error) {
    console.error('Erro ao buscar performance mensal:', error);
    // Retornar dados mock em caso de erro
    return [
      {
        month: 'Jan',
        nnm_value: new Decimal(280000),
        revenue_value: new Decimal(45000),
        commission_value: new Decimal(12000),
        auc_value: new Decimal(4800000),
      },
      {
        month: 'Feb',
        nnm_value: new Decimal(320000),
        revenue_value: new Decimal(52000),
        commission_value: new Decimal(14000),
        auc_value: new Decimal(4950000),
      },
      {
        month: 'Mar',
        nnm_value: new Decimal(290000),
        revenue_value: new Decimal(48000),
        commission_value: new Decimal(13000),
        auc_value: new Decimal(5100000),
      },
      {
        month: 'Apr',
        nnm_value: new Decimal(350000),
        revenue_value: new Decimal(58000),
        commission_value: new Decimal(16000),
        auc_value: new Decimal(5200000),
      },
    ];
  }
};

// Outras funções para clientes, ativos, etc.
export const fetchClients = async () => {
  const response = await api.get('/clients');
  return response.data;
};

export const fetchAssetAllocation = async () => {
  const response = await api.get('/dashboard/asset-allocation');
  return response.data;
};