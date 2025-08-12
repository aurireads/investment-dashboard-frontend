import { Decimal } from 'decimal.js'; // Importar Decimal ou usar 'string' se a API retornar string

export interface DashboardMetrics {
  nnm_current_week: Decimal;
  nnm_current_week_change: Decimal;
  nnm_semester: Decimal;
  nnm_semester_change: Decimal;
  nnm_monthly: Decimal;
  nnm_monthly_change: Decimal;
  auc_total: Decimal;
  auc_start_period: Decimal;
  auc_end_period: Decimal;
  auc_variation: Decimal;
  total_revenue_january: Decimal;
  total_revenue_change: Decimal;
  total_advisors: number;
  gross_commission_week: Decimal;
  gross_commission_change: Decimal;
  net_commission_month: Decimal;
  net_commission_change: Decimal;
  total_commission: Decimal;
  total_commission_change: Decimal;
}

export interface TopAdvisorMetric {
  advisor_id: number;
  advisor_name: string;
  revenue: Decimal;
  revenue_percentage: Decimal;
  net_new_money: Decimal;
  clients_count: number;
  change_percent: Decimal;
}

export interface MonthlyPerformance {
  month: string;
  nnm_value: Decimal;
  revenue_value: Decimal;
  commission_value: Decimal;
  auc_value: Decimal;
}

// ...outros tipos para Clientes, Alocações, etc.