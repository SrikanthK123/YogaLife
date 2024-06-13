import React from 'react'
import { ListOfFitness, YogaImageUrl } from './Data';
const Test = () => {
  return (
    <div>
      <div className='row'>
                    {
                        ListOfFitness.map((item,index)=>(
                            <div className='col'>
                                <div class="card">
  <div class="card__image" style={{background:`url(${item.ImageUrl})`,backgroundPosition:'center',backgroundSize:'100% 100%'}}>
    
  </div>
  <div class="card__content">
    <p class="card__title">{item.Title}</p>
    <p class="card__text"> {item.Desc.slice(0,80)}.... </p>
    <a class="card__button" href="#">Read More</a>
  </div>
</div>
                            </div>
                        ))
                    }
                   

                </div>
    </div>
  )
}

export default Test
