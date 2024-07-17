import React from 'react'
import Header from './childs/header'
import Library from './childs/library'
import Footer from './childs/footer'
import { useSelector } from 'react-redux'
import { DownOutlined, MenuFoldOutlined, SearchOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'

const SidebarMain = () => {

  const formVals = useSelector((state) => state.changeVal.value)

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <div>
      <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Click me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
        <Header />
        <Library/>
        <Footer/>
    </div>
  )
}

export default SidebarMain
