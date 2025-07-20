import {
  Button,
  Card,
  Flex,
  Form,
  Input,
  InputNumber,
  theme,
  Typography,
} from "antd"
import { CodeSandboxOutlined, DeleteOutlined } from "@ant-design/icons"
import { Product } from "boxful-types"

const { Text } = Typography

interface Props {
  product: Product
  onProductDelete: () => void
}

export function ProductRow({ product, onProductDelete }: Props) {
  const {
    token: { colorSuccess },
  } = theme.useToken()
  return (
    <Card style={{ borderColor: colorSuccess }}>
      <Flex align="center" gap={24}>
        <Form.Item
          layout="vertical"
          label={
            <Text strong style={{ fontSize: 12 }}>
              Peso en libras
            </Text>
          }
        >
          <Input value={product.weight} onChange={() => {}} />
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
        >
          <Input value={product.content} onChange={() => {}} />
        </Form.Item>
        <CodeSandboxOutlined size={24} />
        <Flex>
          <Form.Item
            layout="vertical"
            label={
              <Text strong style={{ fontSize: 12 }}>
                Largo
              </Text>
            }
          >
            <InputNumber
              min={1}
              max={100000}
              value={product.length}
              onChange={() => {}}
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
          >
            <InputNumber
              min={1}
              max={100000}
              style={{ borderRadius: 0 }}
              value={product.height}
              onChange={() => {}}
            />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label={
              <Text strong style={{ fontSize: 12 }}>
                Ancho
              </Text>
            }
          >
            <InputNumber
              min={1}
              max={100000}
              value={product.width}
              onChange={() => {}}
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
          </Form.Item>
        </Flex>
        <Button
          htmlType="submit"
          onClick={onProductDelete}
          icon={<DeleteOutlined />}
        />
      </Flex>
    </Card>
  )
}
