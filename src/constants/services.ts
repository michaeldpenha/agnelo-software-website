import {
  IconDeviceLaptop, IconDeviceMobile, IconApi,
  IconCloud, IconDatabase, IconBulb,
} from '@tabler/icons-react';
import type React from 'react';

export interface ServiceItem {
  key: string;
  Icon: React.FC<{ size?: string | number; color?: string }>;
  color: string;
  bg: string;
}

export const SERVICES: ServiceItem[] = [
  { key: 'web',        Icon: IconDeviceLaptop, color: '#2563EB', bg: '#EFF6FF' },
  { key: 'mobile',     Icon: IconDeviceMobile, color: '#10B981', bg: '#ECFDF5' },
  { key: 'api',        Icon: IconApi,          color: '#0EA5E9', bg: '#F0F9FF' },
  { key: 'cloud',      Icon: IconCloud,        color: '#6B7280', bg: '#F9FAFB' },
  { key: 'database',   Icon: IconDatabase,     color: '#8B5CF6', bg: '#F5F3FF' },
  { key: 'consulting', Icon: IconBulb,         color: '#F59E0B', bg: '#FFFBEB' },
];
