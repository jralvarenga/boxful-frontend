"use client"

import {
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  Form,
  FormProps,
  Input,
  Layout,
  Modal,
  Row,
  Select,
  theme,
  Typography,
} from "antd"
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LeftOutlined,
} from "@ant-design/icons"
import warningImg from "@/assets/images/warning.png"
import { useRouter } from "next/navigation"
import { SelectRegionCode } from "@/components/select-region-code"
import { User } from "boxful-types"
import { setCookie } from "@/actions/cookies"
import { useState } from "react"
import { Content } from "antd/es/layout/layout"
import Image from "next/image"

const { Title, Text } = Typography

export default function LoginPage() {
  const router = useRouter()
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const [openConfirm, setOpenConfirm] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const onFinish: FormProps<User>["onFinish"] = async (values) => {
    setUser(values)
    setOpenConfirm(true)
  }

  function handleCancel() {
    setUser(null)
    setOpenConfirm(false)
  }

  const createUser = async () => {
    // @ts-expect-error password repeat is not part of the types for this model
    delete user?.passwordRepeat
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          ...user!,
        }),
      },
    )

    const data = await res.json()
    await setCookie("token", data.access_token)
    router.push("/")
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
                  <Flex gap={10} align="center">
                    <Title level={4}>
                      <Button
                        shape="circle"
                        size="small"
                        onClick={() => router.back()}
                        style={{ border: 0, marginRight: 10 }}
                      >
                        <LeftOutlined />
                      </Button>
                      Cuentanos de ti
                    </Title>
                  </Flex>
                  <Text>Completa la informacion de registro</Text>
                </div>
                <Form onFinish={onFinish}>
                  <Row gutter={10} style={{ marginBottom: 30 }}>
                    <Col span={12}>
                      <Form.Item
                        layout="vertical"
                        label={
                          <Text strong style={{ fontSize: 12 }}>
                            Nombre
                          </Text>
                        }
                        name="firstName"
                      >
                        <Input placeholder="Digita tu nombre" />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        layout="vertical"
                        label={
                          <Text strong style={{ fontSize: 12 }}>
                            Apellido
                          </Text>
                        }
                        name="lastName"
                      >
                        <Input placeholder="Digita tu apellido" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={10} style={{ marginBottom: 30 }}>
                    <Col span={12}>
                      <Form.Item
                        layout="vertical"
                        label={
                          <Text strong style={{ fontSize: 12 }}>
                            Sexo
                          </Text>
                        }
                        name="gender"
                      >
                        <Select placeholder="Seleccionar">
                          <Select.Option value="male">Masculino</Select.Option>
                          <Select.Option value="female">Femenino</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        layout="vertical"
                        label={
                          <Text strong style={{ fontSize: 12 }}>
                            Fecha de nacimiento
                          </Text>
                        }
                        name="birthDate"
                      >
                        <DatePicker
                          style={{ width: "100%" }}
                          placeholder="Seleccionar"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={10} style={{ marginBottom: 30 }}>
                    <Col span={12}>
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
                        <Input placeholder="Digitar correo" type="email" />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        layout="vertical"
                        label={
                          <Text strong style={{ fontSize: 12 }}>
                            Número de Whatsapp
                          </Text>
                        }
                        name="phoneNumber"
                        rules={[
                          {
                            required: true,
                            message: "Por favor ingresa tu número de telefono",
                          },
                        ]}
                      >
                        <Input
                          addonBefore={SelectRegionCode}
                          placeholder="7777 7777"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={10} style={{ marginBottom: 50 }}>
                    <Col span={12}>
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
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        layout="vertical"
                        label={
                          <Text strong style={{ fontSize: 12 }}>
                            Repetir contraseña
                          </Text>
                        }
                        name="passwordRepeat"
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
                    </Col>
                  </Row>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Siguiente
                    </Button>
                  </Form.Item>
                </Form>
              </Flex>
            </Card>
          </Flex>
        </Col>
        <Col span={12}></Col>
      </Row>

      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={openConfirm}
        onOk={createUser}
        centered
        onCancel={handleCancel}
        okText="Aceptar"
        cancelText="Cancelar"
      >
        <Flex vertical gap={7} align="center">
          <Content
            style={{
              flex: 1,
            }}
          >
            <Image src={warningImg} width={70} height={70} alt="warning" />
          </Content>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Confirmar número{" "}
            <Text
              strong
              style={{
                fontSize: 18,
              }}
            >
              de teléfono
            </Text>
          </Text>
          <p>
            <Text>
              Está seguro que desea continuar con el número{" "}
              <Text strong>{user?.phoneNumber || ""}</Text>
            </Text>
          </p>
        </Flex>
      </Modal>
    </Layout>
  )
}
