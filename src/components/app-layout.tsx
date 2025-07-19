"use client"

import React, { useState } from "react"
import {
  FileSearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import logoImg from "@/assets/images/logo.png"
import logoMiniImg from "@/assets/images/logo-mini.png"
import { Button, Flex, Layout, Menu, theme, Typography } from "antd"
import Image from "next/image"

const { Title } = Typography
const { Header, Sider, Content } = Layout

interface Props {
  children: React.ReactNode
}

export function AppLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={340}>
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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <PlusOutlined />,
              label: "Crear orden",
            },
            {
              key: "2",
              icon: <FileSearchOutlined />,
              label: "Historial",
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
              Crear envio
            </Title>
            <div>
              <Title level={5}>Nombre</Title>
            </div>
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
