import { Button, Space, Table, Tag } from "antd";
import data from "./Product";
import { useState } from "react";
import { Modal } from "antd";

function Products(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailData, setDetailData] = useState({});
  const showModal = () => {
    setIsModalOpen(true);
  };
  const { Column, ColumnGroup } = Table;

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onRowTable = (record) => {
    setDetailData(record);
  };
  return (
    <>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              onRowTable(record);
              console.log(record);
            }, // click row
          };
        }}
        dataSource={data}
      >
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="primary" onClick={showModal}>
                chi tiet{" "}
              </Button>
              <Button type="primary" onClick={showModal}>
              xoa{" "}
            </Button>
            </Space>
          )}
        />
      </Table>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{detailData.firstName}</p>
        <p>{detailData.lastName}</p>
        <p>{detailData.age}</p>
        <p>{detailData.address}</p>
        <p>{detailData.tags}</p>
      </Modal>
    </>
  );
}
export default Products;
