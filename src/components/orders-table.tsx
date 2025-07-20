"use client"

import { Order } from "boxful-types"
import {
  Button,
  DatePicker,
  Divider,
  Flex,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd"
import { Content } from "antd/es/layout/layout"
import { useRouter } from "next/navigation"

interface Props {
  orders: Order[]
}

const columns: TableColumnsType<Order> = [
  {
    title: "No. de orden",
    dataIndex: "id",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Nombre",
    dataIndex: "firstName",
  },
  {
    title: "Apellidos",
    dataIndex: "lastName",
  },
  {
    title: "Departamento",
    dataIndex: "department",
  },
  {
    title: "Fecha de Municipio",
    dataIndex: "municipality",
  },
  {
    title: "Paquetes en orden",
    dataIndex: "numberOfPackages",
    render: (text: string) => <Tag color="blue">{text}</Tag>,
    align: "center",
  },
]

export function OrdersTable({ orders }: Props) {
  const router = useRouter()
  const rowSelection: TableProps<Order>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Order[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows,
      )
    },
    getCheckboxProps: (record: Order) => ({
      disabled: record.firstName === "Disabled User", // Column configuration not to be checked
      name: record.firstName ?? undefined,
    }),
  }

  return (
    <Content>
      <Flex align="center" gap={10}>
        <DatePicker.RangePicker picker="month" />
        <Button type="primary">Buscar</Button>
        <Button>Descargar ordenes</Button>
      </Flex>
      <Divider />
      <Table<Order>
        rowSelection={{ ...rowSelection }}
        columns={columns}
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            router.push(`/orders/${record.id}/products`)
          },
        })}
        dataSource={orders.map((order) => ({
          ...order,
          numberOfPackages: order._count?.Product,
        }))}
      />
    </Content>
  )
}
