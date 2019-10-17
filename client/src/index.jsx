import React from 'react';
import ReactDOM from 'react-dom';
// import $ from "jquery";
var $ = require("jquery");
import {Container, Row, Col, Image} from 'react-bootstrap';
import ItemDetails from './components/ItemDetails.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      currentPos: 0
    }

    this.left= this.left;
    this.rigth= this.rigth;
    this.mousehover = this.mousehover;
    this.mouseout = this.mouseout;
  }

  componentDidMount(){
    $.ajax({
      url: 'http://127.0.0.1:3000/products/',
      type: 'GET',
      success: (data)=>{
        var arrData = []
        var groupData = []
        var cn = 0;
        data.result.forEach((item, index)=>{
            if(cn ===3){
              groupData.push(item)
              arrData.push(groupData)
              cn=0;
              groupData = [];
            }else{
              groupData.push(item)
              cn++
            }
        })

        this.setState(state=>({
          data: arrData,
          currentPos: 0
        }))
      }
    })
  }

  left(e){
    var pos = this.state.currentPos;
    if(pos === 0){

    }else{
      pos -=1;
      this.setState(state=>({
        currentPos: pos
      }))
      $(document.getElementById("okIm")).animate({width: 'toggle'});
      $(document.getElementById("okIm")).animate({width: 'toggle'});
    }
  }

  rigth(e){
    var pos = this.state.currentPos;
    if(pos === this.state.data.length -1){

    }else{
      pos += 1;
      this.setState(state=>({
        currentPos: pos
      }))
      $(document.getElementById("okIm")).animate({width: 'toggle'});
      $(document.getElementById("okIm")).animate({width: 'toggle'});
    }
  }

  mousehover(e){
    e.target.style.backgroundColor = '#e5e5e5'
  }

  mouseout(e){
    e.target.style.backgroundColor = ''
  }

  render(){
    return (
      <div className="container-fluid mt-3">
        <h3 className='dj-title-section'>Similar products</h3>

        <div className="d-flex justify-content-center mb-3">
          <div className="p-2 dj-center-vertical">
            <Image onMouseOut={this.mouseout.bind(this)} onMouseOver={this.mousehover.bind(this)} onClick={this.left.bind(this)} src='https://image.flaticon.com/icons/svg/271/271218.svg' roundedCircle style={{ padding:'3px',width: '1.75rem'}}/>
          </div>
          <div className="p-2 overflow-auto" id='okIm' style={{padding: '10rem'}}>
            <ItemDetails listdata={this.state.data} position={this.state.currentPos}/>
          </div>
          <div className="p-2 dj-center-vertical">
            <Image onMouseOut={this.mouseout.bind(this)} onMouseOver={this.mousehover.bind(this)} onClick={this.rigth.bind(this)} src='https://image.flaticon.com/icons/svg/271/271226.svg' roundedCircle className='dj-arrow-next-prev' style={{ padding:'3px',width: '1.75rem'}}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



{/*
  https://react-bootstrap.netlify.com/
  https://www.w3schools.com/bootstrap4/bootstrap_flex.asp
  <Container>
<Row className="justify-content-md-center">
  <Col xs lg="1">
      ---
  </Col>
  <Col xs lg="10" className='overflow-auto' style={{padding:'5px'}}>

  </Col>
  <Col xs lg="1">
    ---
  </Col>
</Row>
</Container> */}