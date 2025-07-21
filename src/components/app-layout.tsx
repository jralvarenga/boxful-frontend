"use client"

import React, { useState } from "react"
import {
  FileSearchOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
} from "@ant-design/icons"
import logoImg from "@/assets/images/logo.png"
import logoMiniImg from "@/assets/images/logo-mini.png"
import { Button, Flex, Layout, Menu, theme, Typography } from "antd"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useUser } from "@/hooks/use-user"

const { Title, Text } = Typography
const { Header, Sider, Content } = Layout

interface Props {
  children: React.ReactNode
}

export function AppLayout({ children }: Props) {
  const { user, logout } = useUser()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const [selected, setSelected] = useState('2')
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{
          background: "inherit",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={340}
      >
        <div
          className="demo-logo-vertical"
          style={{
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {collapsed ? (
            <Image
              src={logoMiniImg}
              width={39}
              height={30}
              alt="boxful-logo-mini"
            />
          ) : (
            <Image src={logoImg} width={260} height={40} alt="boxful-logo" />
          )}
        </div>
        <div style={{ paddingLeft: 10, textTransform: "uppercase" }}>
          <Text strong>Menú</Text>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selected]}
          onSelect={(e) => {
            setSelected(e.key)
          }}
          style={{
            background: "inherit",
            padding: 20,
            color: "red",
          }}
          items={[
            {
              key: "1",
              icon: <PlusOutlined />,
              label: "Crear orden",
              onClick: () => router.push("/orders/create"),
              style: {
                borderRadius: 0,
                height: 72,
                color: selected === '1' ? "white" : 'initial',
              },
            },
            {
              key: "2",
              icon: <FileSearchOutlined />,
              label: "Historial",
              onClick: () => router.push("/orders"),
              style: {
                borderRadius: 0,
                height: 72,
                color: selected === '2' ? "white" : 'initial',
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, paddingRight: 10, background: colorBgContainer }}
        >
          <Flex align="center" justify="space-between">
            <Title level={5}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  marginRight: 10,
                }}
              />
              Crear orden
            </Title>
            <Flex align="center" gap={10}>
              <Text strong>
                {user?.firstName} {user?.lastName}
              </Text>
              <Button
                onClick={logout}
                danger
                type="primary"
                shape="circle"
                icon={<LogoutOutlined />}
              />
            </Flex>
          </Flex>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
