import React from 'react';
import CardItemList from './CardItemList.jsx';

const ItemDetails = ({listdata, position})=>{

  var list = []
  if(listdata.length){
    list = listdata[position]
  }

  var ItemList = list.map((item, index)=>{
    return (
      <div className="p-2" style={{margin:'5px'}} key={index}>
        <CardItemList itemdetails={item}/>
      </div>
    )
  })

  return (
    <div className="d-flex justify-content-center mb-3">
    {ItemList}
    </div>
  )
}

export default ItemDetails;