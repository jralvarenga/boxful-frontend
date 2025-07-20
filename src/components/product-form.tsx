import {
  Button,
  Card,
  Flex,
  Form,
  type FormProps,
  Input,
  InputNumber,
  theme,
  Typography,
} from "antd"
import { CodeSandboxOutlined, PlusOutlined } from "@ant-design/icons"
import { Product } from "boxful-types"

interface Props {
  onFinish: FormProps<Product>["onFinish"]
}

const { Text } = Typography

export function ProductForm({ onFinish }: Props) {
  const {
    token: { colorBgBase },
  } = theme.useToken()

  return (
    <Form onFinish={onFinish}>
      <Card style={{ background: colorBgBase, marginTop: 20 }}>
        <Flex vertical gap={50}>
          <Flex align="center" gap={24}>
            <CodeSandboxOutlined size={24} />
            <Flex>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Largo
                  </Text>
                }
                name="length"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el largo",
                  },
                ]}
              >
                <InputNumber
                  min={1}
                  max={100000}
                  style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                />
              </Form.Item>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Alto
                  </Text>
                }
                name="height"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el alto",
                  },
                ]}
              >
                <InputNumber min={1} max={100000} style={{ borderRadius: 0 }} />
              </Form.Item>
              <Form.Item
                layout="vertical"
                label={
                  <Text strong style={{ fontSize: 12 }}>
                    Ancho
                  </Text>
                }
                name="width"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el ancho",
                  },
                ]}
              >
                <InputNumber
                  min={1}
                  max={100000}
                  style={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                />
              </Form.Item>
            </Flex>
            <Form.Item
              layout="vertical"
              label={
                <Text strong style={{ fontSize: 12 }}>
                  Peso en libras
                </Text>
              }
              name="weight"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el peso en libras",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              style={{
                flex: 1,
              }}
              label={
                <Text strong style={{ fontSize: 12 }}>
                  Contenido
                </Text>
              }
              name="content"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el contenido",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Flex>
        </Flex>
        <Flex justify="flex-end" style={{ marginTop: 30 }}>
          <Form.Item>
            <Button
              htmlType="submit"
              block
              icon={<PlusOutlined />}
              iconPosition="end"
            >
              Agregar
            </Button>
          </Form.Item>
        </Flex>
      </Card>
    </Form>
  )
}
