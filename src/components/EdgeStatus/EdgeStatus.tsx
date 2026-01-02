import React, { useEffect, useState } from 'react';
import styles from './EdgeStatus.module.css';

// 边缘节点状态组件：展示节点、延迟、缓存状态（演示版）
const EdgeStatus: React.FC = () => {
  const [edgeInfo, setEdgeInfo] = useState({
    node: '本地演示节点',
    latency: '32ms',
    cacheStatus: '已缓存',
    isOffline: false
  });

  // 监听离线状态
  useEffect(() => {
    const handleOffline = () => {
      setEdgeInfo(prev => ({ ...prev, isOffline: true, cacheStatus: '边缘缓存模式' }));
    };
    const handleOnline = () => {
      setEdgeInfo(prev => ({ ...prev, isOffline: false, cacheStatus: '已缓存' }));
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    // 模拟获取边缘节点信息
    setTimeout(() => {
      setEdgeInfo(prev => ({
        ...prev,
        node: ['杭州节点', '上海节点', '广州节点', '深圳节点', '新加坡节点'][Math.floor(Math.random() * 5)]
      }));
    }, 500);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return (
    <div className={`${styles.edgeStatus} ${edgeInfo.isOffline ? styles.offline : ''}`}>
      <span className={styles.label}>边缘状态：</span>
      <span className={styles.info}>
        {edgeInfo.node} · 延迟 {edgeInfo.latency} · {edgeInfo.cacheStatus}
      </span>
    </div>
  );
};

export default EdgeStatus;
