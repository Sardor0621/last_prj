import React, {useState} from 'react';
import Nordic from "../assets/Group 70.png"
import { Outlet, Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Img1 from ".././assets/17-12-2019-nordic-046 1.png"

import Img2 from ".././assets/06-08-18-nordic-058 1.png"
import Img3 from ".././assets/image 106.png"
import Img4 from ".././assets/Vector (4).png"
import Img5 from ".././assets/image 109.png"
import Back from ".././assets/groups_FILL1_wght700_GRAD200_opsz48 1.png"
import Back2 from ".././assets/menu_book_FILL1_wght700_GRAD200_opsz48 1.png"
import Back3 from ".././assets/checklist_FILL1_wght700_GRAD200_opsz48 1.png"
import Back4 from ".././assets/Frame.png"

import { MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout,Menu, Select, Button } from 'antd';

import { useNavigate, NavLink } from 'react-router-dom';
import {   Typography } from 'antd';
import Vid_kontey from "../components/vid_kontey"
import Uslugi from "../components/uslugi"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./main.css"


// const Apps = () => {
//     return (
//       <BrowserRouter>
//           <Route path="/" exact component={Layouts} />
//       <Route path="/vid_kontey" component={Vid_kontey} />
//       </BrowserRouter>
//     );
//   };
function Layoutt (props) {

    const navigate = useNavigate()
    const DropdownContext = React.createContext({
      open: false,
      setOpen: () => {},
  });
  const [open, setOpen] = React.useState(false);

  const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/uslugi">
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item（disabled）',
      key: '3',
      disabled: true,
    },
  ]; 
    return (
        
        <div className='container-fluid'>
         
            <div className='backs'>
                <div className='nord'>
                    <span>Лучший кейтеринг в Санкт-Петербурге</span>
                    <div className='numbers d-flex gap-4'>
                        <span>+7 921 123 45 67  </span>
                        <span>contact@nordic-c.ru</span>
                    </div>

                </div>
                <nav>
                    <img src={Nordic} alt="" />
                    
                    {/* <div className='selects'>

                    <select className='sel'>
                        <option>Вид кейтеринга</option>
                    </select>
                    <select className='sel'>
                        <option>События</option>
                    </select>
                    <select className='sel'>
                        <option>Площадки</option>
                    </select>
                    <select className='sel'>
                        <option>Услуги</option>
                    </select>
                    <select className='sel'>
                        <option>О компании </option>
                    </select>
                    </div> */}
                    
                  
    

                   
                    <select>
                      {/* <option value="/uslugi" to="/uslugi" key={'/uslugi'}>kfk</option> */}
                      {/* <NavLink to="/uslugi">Portfolio2</NavLink> */}

                      {/* <option> jf</option> */}
                    {/* <option>

                    {/* <NavLink to="/keytering">Portfolio2</NavLink> */}


                    


                    {/* </option>     */}
                    </select>
                    <div>
     
    
    

    </div>
                 
                </nav>
    <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
                <select>
                  <option>
                    <button className='btn btn-dark'>
                        {/* <Link to={/uslugi}>Option</Link> */}
                 <Link to={'/vid_kontey'} class="nav-link" >About</Link> 
                    </button>
        
                  </option>
                </select>
         
            </div>
            <div className="row clls">
              <div className="col-md-3 offset-1">
                <span>О нас</span>
              </div>
              <div className="col-md-6 my-2">

                <h2>Мы поможем сделать ваше мероприятие особенным, чтобы ваши гости запомнили праздник надолго.</h2>
              </div>
              <div className="col-md-3 offset-1">

              </div>
              <div className="col-md-7 d-flex clls2 gap-5 my-3">
                <div className="col-md-5">
                  <span>Nordic за 5 лет стал брендом, который заключает в себе высокое качество предоставляемых услуг и неповторимую кухню. С недавнего времени мы сотрудничаем со скандинавскими шеф-поварами, которые вдохновляют этот проект новыми идеями. </span>
                </div>
                <div className="col-md-5">
                  <span>Наша команда опытных профессионалов во главе с идеологом проекта Надеждой Третьяковой и шеф-поваром Игорем Васильевым создадут для вас уникальное меню, оригинальные коктейли, стильное накрытие, предложат и разработают нестандартный фуршет.</span>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <button className='btn btn-dark'>
                  <Link className='text-white' to="/company">Подробнее о компании</Link>
                </button>
              </div>
            </div>
            <div className="row gap-5 sonlar_asosiy my-5">
              <div className="col-md-2  offset-1">
                <div className="sons gap-3 d-flex">

                <h1>200</h1>
                <h1>+</h1>
                </div>
                <p className='w-75 p_tag'>довольных заказчиков в год</p>
              </div>
              <div className="col-md-2 ">
                <div className="sons gap-3 d-flex">

                <h1>5</h1>
                <h1>+</h1>
                </div>
                <p className='w-75 p_tag'>лет в ресторанной индустрии</p>
              </div>
              <div className="col-md-2 ">
                <div className="sons gap-3 d-flex">

                <h1>100</h1>
                <h1>+</h1>
                </div>
                <p className='w-75 p_tag'>разных стилей меню под тематику вашего мероприятия</p>
              </div>
              <div className="col-md-2 ">
                <div className="sons gap-3 d-flex">

                <h1>1000</h1>
                <h1>+</h1>
                </div>
                <p className='w-75 p_tag'>вариантов необычной посуды и подачи блюд</p>
              </div>
            </div>
            
            <div className="shirokiys ">

              <div className="shirokiy">
                <div className="cls py-5  ">

                <div className="row my-5">
                  <div className="col-md-3 my-3 offset-1">
                    <span>Виды кейтеринга</span>
                  </div>
                  <div className="col-md-7 my-3  ">
                    <h1 className='w-100'>Широкий спектр услуг выездного кейтеринга на разные виды мероприятий</h1>
                  </div>
                  <div className="col-md-7 offset-4"> 
                    <span className='my-2'>
                    Мы выезжаем на площадки в разных форматах. Это может быть фуршет в нордическом стиле или банкет в стиле Марии Антуанетты, мы сервируем разработанный под вас гастрономический сет с 10 переменами блюд, или готовим на природе блюда на гриле. Кроме того, мы делаем тематические станции - коктейльный бар, Candy bar, Smorrebrod station и т.д.
                    </span>
                  </div>
                </div>
                </div>
                <div className="napitki d-flex">
                 

                  <div className="rub border px-5 offset-1 py-5  bg-white text-dark ">
                  
                    <h1>Напитки</h1>
                    <p className='my-2'>от 4000 руб/чел</p>
                    <p className='w-100 my-3'>Организация выездного фуршета. Мы поможем вам организовать выездной фуршет в любом удобном для вас месте. Оцените по достоинству мастерство наших поваров. Продемонстрируйте гостям свой хороший вкус и утонченные манеры.</p>
                  
                  </div>
                  <div className="pivo">
                  <img className='imgg2' src={Img2} alt="" />
                  </div>
                  
                </div>
                <div className="row my-5 darks">
                  <div className="col-md-5 offset-1">
                    <img src={Img3} alt="" />
                  </div>
                  <div className="col-md-6 ">
                    <div className="col-md-12">
                    <img src={Img4} alt="" />

                    </div>
                    <div className="col-md-12 py-5 my-5">

                    <h4 className='w-75  '>Мы почувствовали, что должны снова бросить себе вызов: ресторан Nordic завоевал признание многих гостей, а значит настало время удивлять их чаще, выезжая с кейтерингом на разные мероприятия, наша кухня - это настоящая феерия вкусов, праздник для всех любителей гастрономических приключений</h4>
                    </div>
                    <div className="col-md-12">
                      <p>Шеф-повар ресторана</p>
                    </div>
                    <div className="col-md-12">
                      <h2>Игорь Васильев</h2>
                    </div>

                  </div>
                </div>
                <div className="image py-5">
                  <img className='img5' src={Img5} alt="" />
                </div>
            <div className="row text-dark">
              <div className="col-md-3 offset-1">
                <span>Почему мы</span>
              </div>
              <div className="col-md-7">
                <h2>Мы считаем, что каждое событие особенное и заслуживает стильного празднования.</h2>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-7 d-flex">
                <div className="col-md-5">
                  <img className='myx' src={Back} alt="" />
                  <p className='my-4'>
                  Nordic имеет команду опытных профессионалов в сфере общественного питания, которые занимаются поставкой высококачественной еды и исключительного обслуживания.
                  </p>
                </div>
                <div className="col-md-5">
                  <img className='myx' src={Back2} alt="" />
                  <p className='my-4'>
                  Nordic предлагает множество вариантов меню, которые можно настроить в соответствии с вашими конкретными потребностями и предпочтениями.
                  </p>
                </div>

              </div>
              <div className="col-md-4"></div>
              <div className="col-md-7 d-flex ">
                <div className="col-md-5">
                  <img src={Back3} alt="" />
                  <p className='my-4'>
                  Nordic помогает снять стресс при планировании мероприятий, предлагая комплексное решение для всех ваших потребностей в сфере кейтеринга, включая планирование мероприятий и выбор места проведения.
                  </p>
                </div>
                <div className="col-md-5">
                  <img src={Back4} alt="" />
                  <p className='my-4'>
                  Nordic использует только самые свежие ингредиенты и готовит всю еду на месте, чтобы обеспечить максимальный вкус и качество.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </div>
               
        

        </div>
        
    );
}

export default Layoutt;



