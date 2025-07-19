"use client"

import {
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Typography,
} from "antd"
import { Content } from "antd/es/layout/layout"
import { ArrowRightOutlined } from "@ant-design/icons"
import { SelectRegionCode } from "@/components/select-region-code"

const { Text, Title } = Typography
const colStyle: React.CSSProperties = { padding: 8 }

export default function CreateOrderPage() {
  return (
    <Content>
      <Title level={3}>Crea una orden</Title>
      <Text>
        Dale una ventaja competitiva a tu negocio con entregas{" "}
        <Text strong>el mismo día </Text>
        (Área Metropolitana) y <Text strong>el día siguiente</Text> a nivel
        nacional.
      </Text>

      <Card style={{ marginTop: 30 }}>
        <Title level={5}>Completa los datos</Title>

        <Form>
          <Row gutter={16}>
            <Col span={6} push={18} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Fecha programada
                  </Text>
                }
                name="scheduledDate"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa una fecha",
                  },
                ]}
              > 
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Selecciona una fecha"
                />
              </Form.Item>
            </Col>
            <Col span={18} pull={6} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Dirección de recoleccion
                  </Text>
                }
                name="collectionAddress"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa la direccion",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Nombres
                  </Text>
                }
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Por favor los nombres",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Apellidos
                  </Text>
                }
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Por favor los apellidos",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Correo eléctronico
                  </Text>
                }
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Por favor los nombres",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={18} push={6} style={colStyle}>
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
                <Input addonBefore={SelectRegionCode} placeholder="7777 7777" />
              </Form.Item>
            </Col>
            <Col span={6} pull={18} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Dirección del destinatario
                  </Text>
                }
                name="recipientAddress"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa la direccion",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Departamento
                  </Text>
                }
                name="department"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el departamento",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Municipio
                  </Text>
                }
                name="municipality"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el municipio",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} style={colStyle}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Punto de referencia
                  </Text>
                }
                name="referencePoint"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col style={{ ...colStyle, width: "100%" }}>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Indicaciones
                  </Text>
                }
                name="instructions"
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Flex justify="flex-end" style={{ marginTop: 16 }}>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Siguiente
            </Button>
          </Flex>
        </Form>
      </Card>
    </Content>
  )
}
