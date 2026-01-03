import React from 'react'
import { Card, Typography } from 'antd'
import { RobotOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const AIGeneratorPage: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card>
        <Title level={2}>
          <RobotOutlined /> AI美食漫画工坊
        </Title>
        <Paragraph>
          正在开发中... 敬请期待！
        </Paragraph>
        <Paragraph type="secondary">
          功能：将菜谱转换为漫画风格视频
        </Paragraph>
      </Card>
    </div>
  )
}

export default AIGeneratorPage
