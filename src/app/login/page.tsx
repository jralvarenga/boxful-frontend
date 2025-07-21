"use client"

import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  FormProps,
  Input,
  Layout,
  message,
  Row,
  theme,
  Typography,
} from "antd"
import Link from "next/link"
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import { setCookie } from "@/actions/cookies"
import { useRouter } from "next/navigation"

const { Title, Text } = Typography

export default function LoginPage() {
  const router = useRouter()
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const [messageApi] = message.useMessage()

  const onFinish: FormProps<{
    email: string
    password: string
  }>["onFinish"] = async (values) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          ...values,
        }),
      })

      if (res.status !== 200) {
        return
      }

      const data = await res.json()

      await setCookie("token", data.access_token)
      router.push("/")
    } catch (error) {
      console.error(error)
      messageApi.open({
        type: "error",
        content: "Correo o contraseña incorrectos",
      })
    }
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
