import React , {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
 
// import list from '../../public/list.json';
import Cards from './Cards';

function FreeMagazine() {
  const[magazine,setMagazine]=useState([])
  useEffect(() =>{
    const getMagazine=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/magazine");
        
        const data = (res.data.filter((data) => data.category === "Free"))
        console.log(data);
        setMagazine(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMagazine();
  },[]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    // const filterData = list.filter((data) => data.category === "Free");
    // console.log(filterData);
  return (
    <div>
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pd-2'>Free Offered Magazines</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Dolore vitae fugiat ab libero soluta odit iure rerum! Cum culpa a at!
              Expedita eligendi eum accusantium amet dolores possimus numquam consectetur?</p>
        </div>
        <div>
            <Slider {...settings}>
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div> */}
                    {magazine.map((item) => (
                        <Cards item={item} key={item.id}/>
                    ))}
      </Slider>
    </div>
    </div>

    </>
    </div>
  );
}

export default FreeMagazine