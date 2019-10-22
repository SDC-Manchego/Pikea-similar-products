import React from 'react';
import CardItemList from './CardItemList.jsx';

const ItemDetails = ({listdata, position})=>{
  var ItemList = listdata.map((item, index)=>{
    var classvalue = index === 0 ? 'carousel-item active': 'carousel-item'
    return (
      <div className={classvalue} key={index}>
        <CardItemList itemdetailslist={item} />
      </div>
    )
  })

  return (
    <div className="carousel-inner no-padding">
      {ItemList}
    </div>
  )
}

export default ItemDetails;