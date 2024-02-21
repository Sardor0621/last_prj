import React from 'react'
import "./main.css"
import Img1 from "../../assets/image 100.png"
import Img2 from "../../assets/image 110 (1).png"
import Img3 from "../../assets/image 103.png"

export default function Index() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-4 offset-1">
          <span>Меню кейтеринга</span>
          <h1>Выездной фуршет</h1>
        </div>
        <div className="col-md-5 my-5 offset-1">
          <span >Прекрасная возможность порадовать ваших гостей вкусной и красиво оформленной закуской. Мы предлагаем выездной фуршет на заказ для любого мероприятия - свадьбы, корпоратива, юбилея или другого торжественного мероприятия.</span>
          <br />
          <button className='btn btn-dark my-3'> Оставить заявку</button>
        </div>
      </div>
    
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active d-flex gaps my-3 ">
          <img src={Img1} class="d-block dls " alt="..."/>
          <img src={Img2} class="d-block dbs " alt="..."/>
    
        </div>
         <div class="carousel-item">
         <img src={Img3} alt="" />


        </div>
       
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div className="row my-4">
      <div className="col-md-4 offset-1">
        <span>Что включено</span>
        <h1>В фуршет включено  все необходимое для праздника</h1>
      </div>
      <div className="col-md-5 offset-1 my-4  ">
        <span>
        Прекрасная возможность порадовать ваших гостей вкусной и красиво оформленной закуской. Мы предлагаем выездной фуршет на заказ для любого мероприятия - свадьбы, корпоратива, юбилея или другого торжественного мероприятия.
        </span>
      </div>

    </div>
    </div>
    
  )
}
