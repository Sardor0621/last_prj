import React from 'react'
import Img1 from "../../../assets/Rectangle 65393.png"
import Img2 from "../../../assets/image 87.png"
import Img3 from "../../../assets/image 88.png"
import Img4 from "../../../assets/image 89.svg"
import Img5 from "../../../assets/image 90.png"
import "./main.css"
import Img6 from "../../../assets/image 103 (1).png"
import Img7 from "../../../assets/image 100.png"
import Img8 from "../../../assets/photo_2024-02-22_23-06-07.jpg"
import Test_bot from "../../test_bot"



export default function Index() {
  return (
    <div className='container-fluid sls'>
        <div className="row">
            <div className="col-md-4 offset-1">
                <span>Меню кейтеринга</span>
            </div>
            <div className="col-md-6"></div>
        </div>
        <div className="row my-3">
            <div className="col-md-4  offset-1">
                <h1>Кофе-брейк</h1>
            </div>
            <div className="col-md-5 offset-1">
                <span>Кофе-брейк важная часть делового мероприятия. Мы предлагаем интересное решение, готовый ассортимент закусок, которые помогут восстановиться во время бизнес мероприятия. Полезный перекус, сытный ланч и напитки, заряжающие энергией!</span>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-5 float-start my-3">
                <button className='btn dark-btn btn-dark'>Посмотреть готовое меню</button>
            </div>
        </div>
        <div className="row cofe">
            <div className="col-md-12 cofe-img">

            <img  className='w-100 cofe-img' src={Img1} alt="" />
            </div>
            <div className="col-md-3 my-5 offset-1">
                <span>Клиенты</span>

            </div>
            <div className="col-md-8 nash-klient my-5">
                <h2 className='w-100'>Наши клиенты - это большие и маленькие компании, частные мероприятия дома и крупные для селебрити.</h2>
                <div className="col-md-8 w-100 sayt ">

                <div className="col-md-2">
                    <img src={Img2} alt="" />
                </div>
                <div className="col-md-2">
                    <img src={Img3} alt="" />
                </div>
                <div className="col-md-2">
                    <img src={Img4} alt="" />
                </div>
                <div className="col-md-2">
                    <img src={Img5} alt="" />
                </div>
                </div>
                <div className="col-md-8 my-3">
                    <span>В этом разделе мы представляем наши лучшие работы и успешные мероприятия, которые мы организовали для наших клиентов. Здесь вы можете увидеть фотографии и видео отчеты о наших последних мероприятиях, таких как свадьбы, корпоративные вечеринки, детские дни рождения и т.д. Это дает вам возможность увидеть нашу работу в действии и убедиться в качестве наших услуг.</span>
                </div>

            </div>


        </div>
        <div className="row">
        <div className="cards d-flex">
        <div className="card1">
            <img className='my-3 wrasm' src={Img6} alt="" />
            <span className='fpp'>Июль 2021 г.</span>
            <h5 className='w-100 my-3'>Юбилей в стиле маленькой Италии</h5>
            <span className='my-3'>Банкет на 40 человек</span>
        </div>
        <div className="card2">
          <img className='my-3 wrasm' src={Img7} alt="" />
          
          <span className='fpp   '>Февраль 2022</span>
          <h5 className='w-100 my-3'>Юбилей Салона Ирины Андерсона</h5>
          <span className='my-3'>Фуршет на 30 человек</span>
        </div>
        <div className="card3">
            <img className='tpp wrasm my-3 ' src={Img8} alt="" />
            <span className='fpp my-3'>Январь 2022 г.</span>
            <h5 className='w-100 my-3'>Юбилей в стиле Марии Антуанетты</h5>
            <span className='my-3'>Гастрономический ужин / Candy Bar</span>
        </div>
      </div>
        </div>
        <Test_bot/>
        

    </div>
  )
}
