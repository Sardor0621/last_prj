import React from 'react'
import Img1 from "../../assets/Group 70.png"
import "./main.css"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Button, Space } from 'antd';
import {  SmileOutlined } from '@ant-design/icons';
import  { Menu} from 'antd';

export default function Index () {
    const [open, setOpen] = React.useState(false);
    const reels = [
        {
            label: (
              <a target="_blank" rel="noopener noreferrer" href="/vezdnoy">
                Выездной фуршет
              </a>
            ),
            key: '0',
          },
    ]
    const items = [
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/vezdnoy">
            Выездной фуршет
          </a>
        ),
        key: '0',
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/cofe">
            Кофе-брейк
          </a>
        ),
        key: '1',
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/dining">
            Гастрономический ужин 
          </a>
        ),
        key: '2',
      },
      {
        type: 'divider',
      },
    //   {
    //     label: '3rd menu item（disabled）',
    //     key: '3',
    //     disabled: true,
    //   },
    ]; 
    const items2 = [
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
    <div className='container-fluid'>
        <div className="row text-white">
            <div className="col-md-3 offset-1">
                <span>Лучший кейтеринг в Санкт-Петербурге</span>
            </div>
            <div className="col-md-4 d-flex offset-4 px-5 gap-5">
                <p >+7 921 123 45 67</p>
                <p >contact@nordic-c.ru</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 offset-1">
                <img src={Img1} alt="" />
            </div>
            <div className="col-md-7 offset-1">
            <Dropdown className='text-white'
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      Вид кейтеринга
        <DownOutlined  />
      </Space>
    </a>
  </Dropdown>
            </div>
            <Dropdown
    menu={{
      items2,
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
        </div>
    </div>
  )
}
