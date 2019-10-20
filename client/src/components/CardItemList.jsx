import React from 'react';
import CardItem from './CardItem.jsx';

const CardItemList = ({itemdetailslist})=>{
  var ItemGroupCard = itemdetailslist.map((item, index)=>{
    return (
      <div className="col-xs-3 col-sm-3 col-md-3" key={index}>
        <CardItem itemdetails={item} />
      </div>
    )
  })

  return (
    <div>
      {ItemGroupCard}
      </div>
  )
}

export default CardItemList;