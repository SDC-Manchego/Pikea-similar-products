import React from 'react';
import RatingImages from './RatingImages.jsx';
// Importing the Bootstrap CSS
import {Row, Col, Badge} from 'react-bootstrap';

const CardItem = ({itemdetails})=>{
  var star =0;
  if(itemdetails.review !== null){
    star = Math.round(itemdetails.review/itemdetails.total);
  }

  var st = '';
  if(itemdetails.id_similar % 2 === 0){
    st = {display: 'none'}
  }else{
    st = {display: 'block'}
  }
  var desc = itemdetails.desc_similar.substr(0,25);
  var price = parseFloat(itemdetails.price_similar).toFixed(2)

  return (
    <div className="card" style={{width:'100%', height:'100%', border:'none', cursor: 'pointer'}}>
      <img className="card-img-top" src={itemdetails.img_similar} alt={itemdetails.img_similar} style={{width:'100%'}}></img>
      <div className="card-body" style={{width:'100%', height:'100%'}}>
        <Badge pill className='dj-new-alert' style={st}>New</Badge>
        <h4 className="dj-title-prod">{itemdetails.title_similar}</h4>
        <p className="dj-desc-prod">{desc}</p>
        <span className='dj-price-prod'>${price}</span>
        <div className='dj-rating-block'>
          <Row>
            <Col className='dj-star-prod' style={{float:'left'}}>
              <RatingImages count={star}/>
              <span className='dj-starcount-prod'>&emsp;&emsp; {star} ({itemdetails.total})</span>
            </Col>
          </Row>
        </div>
        <small className="text-muted">
          <a href="#" className='dj-diclaimer-prod'>More options available</a>
        </small>
      </div>
    </div>
  )
}

export default CardItem;

//33
//Sleeper sectional, 3-seat