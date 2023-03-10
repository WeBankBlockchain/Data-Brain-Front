import React from "react";
import AdminTemplate from "../components/AdminTemplate";
import { Badge, Descriptions } from "antd";

const usersList = () => (
  <Descriptions title="用户信息" bordered>
    <Descriptions.Item label="账户类型">机构</Descriptions.Item>
    <Descriptions.Item label="账户名称" >
      微众银行
    </Descriptions.Item>
    <Descriptions.Item label="证件类型"> 其他证件 </Descriptions.Item>
    <Descriptions.Item label="证件号码" >
      123456
    </Descriptions.Item>
    <Descriptions.Item label="did" span={2}>
      did123456
    </Descriptions.Item>
    <Descriptions.Item label="开户日期" span={2}>
      2018-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="审核状态" >
      <Badge status="processing" text="审核中" />
    </Descriptions.Item>
    <Descriptions.Item label="联系方式">0755-12345678</Descriptions.Item>
  </Descriptions>
);

export default function UserList() {
  const AdminPage = AdminTemplate(usersList);

  return (
    <AdminPage
      defaultSelectedKeys={["5"]}
      defaultOpenKeys={["sub2"]}
    ></AdminPage>
  );
}
