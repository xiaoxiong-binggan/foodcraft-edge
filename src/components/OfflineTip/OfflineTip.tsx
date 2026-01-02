import React from 'react';
import styles from './OfflineTip.module.css';
import { useOffline } from '@/hooks/useOffline';

// 离线可用提示组件
const OfflineTip: React.FC = () => {
  const { isOffline } = useOffline();

  return (
    <div className={`${styles.offlineTip} ${isOffline ? styles.offline : ''}`}>
      {isOffline ? (
        <span>📡 当前为边缘缓存离线模式，可查看已缓存内容</span>
      ) : (
        <span>📡 已缓存，离线可查看</span>
      )}
    </div>
  );
};

export default OfflineTip;
