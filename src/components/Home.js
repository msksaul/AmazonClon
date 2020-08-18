import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return(
    <div className='home'>
      <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='banner'/>
    
      <div className='home__row'>
        <Product
          id='123'
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Bussinness Paperback'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />
        <Product
          id='124'
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Bussinness Paperback'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='125'
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Bussinness Paperback'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />
        <Product
          id='126'
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Bussinness Paperback'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />
        <Product
          id='127'
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Bussinness Paperback'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='128'
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Bussinness Paperback'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />
      </div>

    </div>
  )
}

export default Home;