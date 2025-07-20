"use client"

import { Button, Card, Flex, type FormProps, Typography } from "antd"
import { Content } from "antd/es/layout/layout"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { useState } from "react"
import { ProductRow } from "@/components/product-row"
import { Product } from "boxful-types"
import { ProductForm } from "@/components/product-form"
import { useParams } from "next/navigation"
import { useUser } from "@/hooks/use-user"
import { revalidateDataWithTag } from "@/actions/api"

interface Props {
  products: Product[]
}

const { Text, Title } = Typography

export function ProductsOnOrder({ products: initialProducts }: Props) {
  const { token } = useUser()
  const params = useParams()
  const [products, setProducts] = useState<Product[]>([])

  const onFinish: FormProps<Product>["onFinish"] = (values) => {
    setProducts([...products, values])
  }

  const handleDeleteProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index))
  }

  async function onSend() {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}/products`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(products),
      },
    )
  }

  async function deleteProduct(id: string) {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/products/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json; charset=utf-8",
        authorization: `Bearer ${token}`,
      },
    })
    await revalidateDataWithTag(`get_order_${params.id}`)
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
            {[...initialProducts, ...products].map((product, i) => (
              <ProductRow
                key={i}
                product={product}
                onProductDelete={
                  product.id
                    ? () => deleteProduct(product.id!)
                    : () => handleDeleteProduct(i)
                }
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
              onClick={onSend}
            >
              Guardar
            </Button>
          </div>
        </Flex>
      </Card>
    </Content>
  )
}
