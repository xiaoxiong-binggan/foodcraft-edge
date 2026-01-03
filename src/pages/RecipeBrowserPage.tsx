import React from 'react'
import { Card, Typography } from 'antd'
import { RocketOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const RecipeBrowserPage: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <Title level={2}>
          <RocketOutlined /> 边缘菜谱速查助手
        </Title>
        <Paragraph>
          正在开发中... 敬请期待！
        </Paragraph>
        <Paragraph type="secondary">
          功能：离线可用的菜谱浏览器
        </Paragraph>
      </Card>
    </div>
  )
}

export default RecipeBrowserPage
