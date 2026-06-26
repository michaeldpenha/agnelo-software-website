import {
  IconRocket, IconShield, IconMessageCircle, IconUsers,
} from '@tabler/icons-react';
import type React from 'react';

export interface ValueItem {
  key: string;
  Icon: React.FC<{ size?: string | number; color?: string }>;
  color: string;
  bg: string;
}

export const VALUE_ITEMS: ValueItem[] = [
  { key: 'delivery',     Icon: IconRocket,        color: '#2563EB', bg: '#EFF6FF' },
  { key: 'quality',      Icon: IconShield,        color: '#10B981', bg: '#ECFDF5' },
  { key: 'transparency', Icon: IconMessageCircle, color: '#0EA5E9', bg: '#F0F9FF' },
  { key: 'partnership',  Icon: IconUsers,         color: '#8B5CF6', bg: '#F5F3FF' },
];

export const STAT_KEYS = ['founded', 'remote', 'products'] as const;
