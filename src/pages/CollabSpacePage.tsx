import React from 'react'
import { Card, Typography } from 'antd'
import { TeamOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const CollabSpacePage: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <Title level={2}>
          <TeamOutlined /> 实时协作美食空间
        </Title>
        <Paragraph>
          正在开发中... 敬请期待！
        </Paragraph>
        <Paragraph type="secondary">
          功能：多人实时编辑菜谱
        </Paragraph>
      </Card>
    </div>
  )
}

export default CollabSpacePage
