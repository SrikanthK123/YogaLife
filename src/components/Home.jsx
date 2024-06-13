import React, { useEffect } from 'react';
import { Button, Layout, Row, Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ListOfFitness, YogaImageUrl } from './Data';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  /*const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true, // Enable vertical sliding
    verticalSwiping: true, // Enable vertical swiping
    centerMode: true, // Center the current slide
    centerPadding: '0px', // Adjust padding if needed
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };*/

  return (
    <div>
      <Layout style={{backgroundColor:'#041119'}}>
        <Content>
          <div className="full-height dark-background">
            <div className="text-secondary text-center">
              <div className="py-5" style={{background:'url(https://images.unsplash.com/photo-1624704200567-760cf26ae848?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',backgroundPosition:'center',backgroundSize:'100% 100%',height:'70vh'}}>
                <Row justify="center" className='p-3'  >
                  <Col xs={24} sm={24} md={16} lg={16} style={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <div className='p-4' style={{backgroundColor:'#BADDEA40',borderRadius:'15px', display:'flex'}}> {/** color: '#ff6f3c'  */}
                     <div>
                      <h1 className="display-5 fw-bold" style={{ color: '#ff6f3c',fontFamily:'serif' }}> Positive Energy</h1>
                      <p className="fs-7 mb-4 text-black" style={{fontFamily:'sans-serif'}}>
                        Welcome to Yoga Health, your place for complete wellness with easy yoga routines, mindfulness exercises, and fitness tips. Join us to start your journey to a healthier, balanced life.
                      </p>
                      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Button size="large" className="me-sm-3 fw-bold text-white" id='WatchBtn' style={{ backgroundColor: '#5c5470' }}>Watch Schedule</Button>
                       
                      </div>
                      </div>
                      <div className='m-4 p-4 YogaImage' style={{backgroundColor:'#f8f398',borderRadius:'50%',boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
                      <img   src='https://cdn-icons-png.flaticon.com/512/11465/11465907.png' style={{width:'60px',height:'60px'}} />
                    </div>
                    </div>
                  </Col>
                  {/*<Col xs={24} sm={24} md={8} lg={8} style={{ textAlign: 'center' }}>
                    <Slider {...settings}>
                      {YogaImageUrl.map((image, index) => (
                        <div key={index}>
                          <img
                            id='MainPageImage'
                            className='my-2'
                            src={image.ImageUrl}
                            alt={`Yoga ${index}`}
                            style={{
                              borderRadius: '15px',
                              width: '200px',
                              height: '300px',
                              margin: '0 auto' // Center the image horizontally
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  </Col>*/}
                </Row>
              </div>
              <p className='container px-4 YogaHis py-2' style={{textAlign:'justify', lineHeight: '1.8'}}>The ascent and discovery of yoga trace back over 5,000 years, originating in ancient India. Initially, yoga was a spiritual practice, mentioned in the Rig Veda, with its purpose being to unite the mind, body, and spirit. It evolved through various phases, including the Pre-Classical, Classical, Post-Classical, and Modern periods, adapting to changing cultures and societies. In the Classical period, Patanjali's Yoga Sutras formalized its philosophy and practices. The Post-Classical era saw the development of Hatha Yoga, emphasizing physical postures. Today, yoga is globally recognized for its benefits to physical health, mental clarity, and spiritual growth.</p>
              <div className='p-4'>
              <h2  className='my-2 fw-bold' style={{color:'white '}}>Check More</h2>
              <div className='row p-4 my-2' style={{borderRadius:'15px'}}>
                  {
                    ListOfFitness.map((item,index)=>(
                      <div className='col m-2'>
                        <Link to={`/${item.Title}`} style={{textDecoration:'none'}}>
                          <div class="card">
                          <div class="infos">
  <div class="image">
    <img src={`${item.ImageUrl}`} style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundPosition: 'center', backgroundSize: '100% 100%' }} />
  </div>
  <div class="info" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div>
      <p class="name p-2  fw-bold" style={{fontFamily:'monospace',backgroundColor:'#1A3C45',borderRadius:'13px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
        {item.Title}
      </p>
      <p className="description ">
  {item.Desc.slice(0, 60)}....
</p>


    </div>
  </div>
</div>

    <button class="request" type="button">
            View
        </button>
</div>
</Link>
                      </div>
                    ))
                  }

                </div>
                </div>
                
             
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Home;
