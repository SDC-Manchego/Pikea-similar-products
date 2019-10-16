import React from 'react';
import {Image} from 'react-bootstrap';
const RatingImages = ({count})=>{
  var ImageCount = [];
  var c = count;
  for(var i=0; i<5; i++){
    if(c>0){
      ImageCount.push((
        <Image key={i} src="https://image.flaticon.com/icons/svg/1040/1040230.svg" style={{ width: '0.9rem'}}/>
      ))
      c--;
    }else{
      ImageCount.push((
        <Image key={i} src="https://image.flaticon.com/icons/svg/126/126482.svg" style={{ width: '0.9rem'}}/>
      ))
    }

  }

  return (
    <span>
      {ImageCount}
    </span>
  )
}

export default RatingImages;


/*

                <div className='dj-rating-block'>
                <a href='#' className='dj-diclaimer-prod'>
                More options available
                </a>
                </div>
                */