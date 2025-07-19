"use client"

import { Button, Card, Col, Flex, Form, Row, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import { ArrowRightOutlined } from "@ant-design/icons"

const { Text, Title } = Typography

export default function OrderPage() {
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
          <Row>
            <Col span={6} push={18}>
              col-18 col-push-6
            </Col>
            <Col span={18} pull={6}>
              col-6 col-pull-18
            </Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={18} push={6}>
              col-18 col-push-6
            </Col>
            <Col span={6} pull={18}>
              col-6 col-pull-18
            </Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>

          <Row>
            <Col span={28}>col-12</Col>
          </Row>
          <Flex justify="flex-end">
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
