export type QualityStatus = 'BEST' | 'GOOD' | 'BAD';
export type MetricCategory = 'Particulates' | 'Gases' | 'Compounds' | 'Environment';

export interface ChartPoint {
  value: number;
  [key: string]: any;
}

export interface MetricData {
  id: string;
  name: string;
  chemical?: string;
  value: number;
  unit: string;
  status: QualityStatus;
  category: MetricCategory;
  icon: string; // key for the icon component
}

export interface DashboardData {
  lastUpdated: string;
  systemStatus: string;
  metrics: MetricData[];
}