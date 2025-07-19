"use client"

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

interface DataType {
  id: string
  firstName: string
  lastName: string
  department: string
  municipality: string
  numberOfPackages: number
}

const columns: TableColumnsType<DataType> = [
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

export default function OrdersPage() {
  const router = useRouter()
  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows,
      )
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.firstName === "Disabled User", // Column configuration not to be checked
      name: record.firstName,
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
      <Table<DataType>
        rowSelection={{ ...rowSelection }}
        columns={columns}
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            router.push(`/orders/${record.id}`)
          },
        })}
        dataSource={[
          {
            id: "1234567890",
            firstName: "Juan",
            lastName: "Perez",
            department: "San Salvador",
            municipality: "San Salvador",
            numberOfPackages: 10,
          },
        ]}
      />
    </Content>
  )
}
