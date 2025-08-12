import { Decimal } from 'decimal.js';

export function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatPercentage(value: Decimal) {
  return `${value.toFixed(2)}%`;
}