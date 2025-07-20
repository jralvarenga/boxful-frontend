"use client"

import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  FormProps,
  Grid,
  Input,
  Layout,
  Row,
  Space,
  theme,
  Typography,
} from "antd"
import Link from "next/link"
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"

const { Title, Text } = Typography

export default function LoginPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const onFinish: FormProps<{
    email: string
    password: string
  }>["onFinish"] = (values) => {
    console.log(values);
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Row
        style={{
          height: "100vh",
        }}
      >
        <Col
          span={12}
          style={{
            background: colorBgContainer,
          }}
        >
          <Flex
            justify="center"
            align="center"
            style={{
              height: "100%",
              padding: 20,
            }}
          >
            <Card style={{ width: "100%", border: 0 }}>
              <Flex style={{ width: "100%" }} vertical gap={40}>
                <div>
                  <Title level={4}>Bienvenido</Title>
                  <Text>Por favor ingresa tus credenciales</Text>
                </div>
                <Form onFinish={onFinish}>
                  <Flex style={{ width: "100%" }} vertical gap={40}>
                    <Form.Item
                      layout="vertical"
                      label={
                        <Text strong style={{ fontSize: 12 }}>
                          Correo electrónico
                        </Text>
                      }
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Por favor ingresa tu correo",
                        },
                      ]}
                    >
                      <Input placeholder="Digita tu correo" type="email" />
                    </Form.Item>

                    <Form.Item
                      layout="vertical"
                      label={
                        <Text strong style={{ fontSize: 12 }}>
                          Contraseña
                        </Text>
                      }
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Por favor ingresa tu contraseña",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="Digitar contraseña"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>
                  </Flex>

                  <div
                    style={{
                      marginTop: 10,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Form.Item style={{ marginTop: 100 }}>
                      <Button type="primary" htmlType="submit" block>
                        Iniciar sesión
                      </Button>
                    </Form.Item>
                    <Text>
                      ¿Necesitas una cuenta?{" "}
                      <Link href={"/login/register"}>
                        <Text strong>Regístrate aquí</Text>
                      </Link>
                    </Text>
                  </div>
                </Form>
              </Flex>
            </Card>
          </Flex>
        </Col>
        <Col span={12}></Col>
      </Row>
    </Layout>
  )
}
