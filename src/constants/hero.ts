import {
  IconDeviceLaptop, IconDeviceMobile, IconApi, IconCloud,
} from '@tabler/icons-react';
import type React from 'react';

export interface ServiceCard {
  key: string;
  Icon: React.FC<{ size?: string | number; color?: string }>;
  color: string;
  bg: string;
}

export const HERO_STAT_KEYS = ['projects', 'satisfaction', 'years'] as const;

export const SERVICE_CARDS: ServiceCard[] = [
  { key: 'web',    Icon: IconDeviceLaptop, color: '#2563EB', bg: '#EFF6FF' },
  { key: 'mobile', Icon: IconDeviceMobile, color: '#10B981', bg: '#ECFDF5' },
  { key: 'api',    Icon: IconApi,          color: '#0EA5E9', bg: '#F0F9FF' },
  { key: 'cloud',  Icon: IconCloud,        color: '#6B7280', bg: '#F9FAFB' },
];
