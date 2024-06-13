import React, { useEffect } from 'react'
import DatesGif from '../Images/Days.gif'

const IndividualInfo = (props) => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <div style={{backgroundColor:'#041119'}}>
       <div className=' container p-3'>
        <h3 className='text-center text-white mt-2'> {props.Title} </h3>
         <p className='container px-4 YogaHis py-4 text-white my-4 HistroyPara' > {props.HistoryInfo} </p>
         <ul class="list-unstyled ps-0 p-3 mx-4" style={{backgroundColor:'#a2a8d3',width:'300px',textAlign:'center',borderRadius:'15px'}}>
         <li >
           <img src='https://ugokawaii.com/wp-content/uploads/2022/12/hourglass-1024x1024.gif' alt='clock' style={{width:'70px',height:'60px'}} /> <span className='text-white fw-bold p-3 mx-3' style={{backgroundColor:'black',padding:'6px',borderRadius:'12px',fontSize:'13px'}}> {props.Time} </span>
          </li>
          <li>
           <img className='' src= "https://media.baamboozle.com/uploads/images/125978/1649164987_357223_gif-url.gif" alt='clock' style={{width:'70px',height:'60px'}} /> <span className='text-white fw-bold p-3 mx-3'  style={{backgroundColor:'black',padding:'6px',borderRadius:'12px',fontSize:'13px'}}> {props.DaysReq} </span>
          </li>
         
         
        </ul>
        
        <div class="star-container my-5">
    <img src={`${props.Gallery1}`} alt="Boat on Calm Water" class="top"/>
    <img src={`${props.Gallery2}`} alt="Wintry Mountain Landscape" class="bottom"/>
    <img src={`${props.Gallery3}`} alt="Mountains in the Clouds" class="left"/>
    <img src={`${props.Gallery4}`} alt="Waves at Sea" class="right"/>
    <img src={`${props.Gallery5}`} alt="Waves at Sea" class="center"/>
    <img src={`${props.Gallery6}`} alt="Yosemite National Park" class="top-left"/>
    <img src={`${props.Gallery7}`}  alt="Yosemite National Park" class="top-right"/>
    <img src={`${props.Gallery8}`}  alt="Yosemite National Park" class="bottom-left"/>
    <img src={`${props.Gallery9}`}  alt="Yosemite National Park" class="bottom-right"/>
  </div>
 
<div class="container col-xxl-10 px-4">
    <div class="row flex-lg-row-reverse align-items-center g-5">
      <div class="col-12 col-sm-8 col-lg-6">
        <img src={`${props.InspirePerson}`}  class="d-block mx-lg-auto img-fluid" title={`${props.PersonName}`} alt="Bootstrap Themes" loading="lazy" style={{width:'300px',height:'300px',borderRadius:'50%',border:'4px solid orange'}}/>
      </div>
      <div class="col-lg-6">
        <h1 class=" fw-bold  lh-1 mb-3 text-white" style={{fontFamily:'serif'}}> {props.Solgan} </h1>
        <p class=" text-white container" style={{fontFamily:'sans-serif',textAlign:'justify', lineHeight: '1.3'}}>{props.Words}</p>
        {/*<div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>*/}
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default IndividualInfo
