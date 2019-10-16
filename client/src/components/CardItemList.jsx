import React from 'react';
import RatingImages from './RatingImages.jsx';
// Importing the Bootstrap CSS
import {Row, Col, Card, Badge} from 'react-bootstrap';

const CardItemList = ({itemdetails})=>{
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

  return (
    <Card style={{ width: '14rem', border:'none', cursor: 'pointer'}}>
        <Card.Img variant="top" src={itemdetails.img_similar} />
        <Card.Body style={{padding: '0rem'}}>
          <Card.Title>
            <Badge pill className='dj-new-alert' style={st}>
              New
            </Badge>
            <span className='dj-title-prod'>
              {itemdetails.title_similar}
            </span>
          </Card.Title>
          <Card.Text>
            <span className='dj-desc-prod inline-block'>
              {desc}
            </span>
            <br></br>
            <span className='dj-price-prod'>
            ${itemdetails.price_similar}.00
            </span>
            <div className='dj-rating-block'>
              <Row>
                <Col className='dj-star-prod' style={{float:'left'}}>
                  <RatingImages count={star}/>
                  <span className='dj-starcount-prod'>&emsp;&emsp; {star} ({itemdetails.total})</span>
                </Col>
              </Row>
            </div>
          </Card.Text>
          <small className="text-muted">
            <a href="#" className='dj-diclaimer-prod'>More options available</a>
          </small>
        </Card.Body>
      </Card>
  )
}

export default CardItemList;

//33
//Sleeper sectional, 3-seat