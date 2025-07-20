"use client"

import {
  Button,
  Card,
  Flex,
  type FormProps,
  Typography,
} from "antd"
import { Content } from "antd/es/layout/layout"
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"
import { useState } from "react"
import { ProductRow } from "@/components/product-row"
import { Product } from "boxful-types"
import { ProductForm } from "@/components/product-form"

const { Text, Title } = Typography

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  const onFinish: FormProps<Product>["onFinish"] = (values) => {
    setProducts([...products, values])
  }

  const handleDeleteProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index))
  }

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
        <Title level={5}>Agrega tus productos</Title>

        <ProductForm onFinish={onFinish} />

        <Content style={{ marginTop: 50 }}>
          <Flex vertical gap={15}>
            {products.map((product, i) => (
              <ProductRow
                key={i}
                product={product}
                onProductDelete={() => handleDeleteProduct(i)}
              />
            ))}
          </Flex>
        </Content>

        <Flex
          align="center"
          justify="space-between"
          style={{
            marginTop: 40,
          }}
        >
          <div>
            <Button
              htmlType="submit"
              block
              icon={<ArrowLeftOutlined />}
              iconPosition="start"
            >
              Regresar
            </Button>
          </div>
          <div>
            <Button
              block
              type="primary"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Enviar
            </Button>
          </div>
        </Flex>
      </Card>
    </Content>
  )
}
