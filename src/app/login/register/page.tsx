"use client"

import {
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  Form,
  Grid,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from "antd"
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LeftOutlined,
} from "@ant-design/icons"

const { Title, Text } = Typography

const selectBefore = (
  <Select defaultValue="+503">
    <Select.Option value="+503">+503</Select.Option>
  </Select>
)

export default function LoginPage() {
  return (
    <>
      <Row
        style={{
          height: "100vh",
        }}
      >
        <Col span={12}>
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
                        style={{ border: 0, marginRight: 10 }}
                      >
                        <LeftOutlined />
                      </Button>
                      Cuentanos de ti
                    </Title>
                  </Flex>
                  <Text>Completa la informacion de registro</Text>
                </div>
                <Form>
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
                        name="firstName"
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
                          addonBefore={selectBefore}
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
    </>
  )
}
