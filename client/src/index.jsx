import React from 'react';
import ReactDOM from 'react-dom';
// import $ from "jquery";
var $ = require("jquery");
import {Image} from 'react-bootstrap';
import ItemDetails from './components/ItemDetails.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      currentPos: 0,
      dataAlso: [],
      currentPosAlso: 0
    }
    //console.log = console.warn = console.error = () => {};
    this.left= this.left;
    this.rigth= this.rigth;
    this.mousehover = this.mousehover;
    this.mouseout = this.mouseout;
  }
  /*
  GET CURRENT URL->
  window.location.href, document.baseURI, document.URL
  */

  componentDidMount(){
    this.getData('')
    setTimeout(this.getData('Also'), 500);
  }

  getData(arg){
    var url = `${window.location.origin}/products/similar/`
    if(arg!== ''){
      url = `${window.location.origin}/products/alsolike/`;
    }
    $.ajax({
      url: url,
      type: 'GET',
      success: (data)=>{
        var arrData = []
        var groupData = []
        var cn = 0;
        if(data.error !== null){
          return ;
        }else{
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
        }

        var obj = {}
        obj[`data${arg}`] = arrData;
        obj[`currentPos${arg}`] = 0;
        this.setState(state=>(obj))
      }
    })
  }

  left(e){
    var arg = `currentPos${arguments[0]}`;
    var pos = this.state[arg];
    if(pos > 0){
      pos -=1;
      var obj = {}
      obj[arg] = pos
      this.setState(state=>(obj))

      $(document.getElementById("okIm")).animate({width: 'toggle'});
      $(document.getElementById("okIm")).animate({width: 'toggle'});
    }
  }

  rigth(e){
    var arg = `currentPos${arguments[0]}`;
    var pos = this.state[arg];
    if(pos < this.state.data.length -1){
      pos += 1;
      var obj = {}
      obj[arg] = pos
      this.setState(state=>(obj))

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
        <hr style={{width:'90%'}}></hr>

        <h3 className='dj-title-section'>Similar products</h3>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2 align-self-center">
              <Image onMouseOut={this.mouseout.bind(this)} onMouseOver={this.mousehover.bind(this)} onClick={this.left.bind(this, '')} src='https://image.flaticon.com/icons/svg/271/271218.svg' roundedCircle style={{ padding:'3px',width: '1.75rem'}}/>
            </div>
            <div className="col col-lg-8" >
              <ItemDetails id='okIm' listdata={this.state.data} position={this.state.currentPos}/>
            </div>
            <div className="col col-lg-2 align-self-center">
              <Image onMouseOut={this.mouseout.bind(this)} onMouseOver={this.mousehover.bind(this)} onClick={this.rigth.bind(this, '')} src='https://image.flaticon.com/icons/svg/271/271226.svg' roundedCircle className='dj-arrow-next-prev' style={{ padding:'3px',width: '1.75rem', float: 'right'}}/>
            </div>
          </div>
        </div>

        <hr style={{width:'90%'}}></hr>

        <h3 className='dj-title-section'>You might also like</h3>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2 align-self-center">
              <Image onMouseOut={this.mouseout.bind(this)} onMouseOver={this.mousehover.bind(this)} onClick={this.left.bind(this, 'Also')} src='https://image.flaticon.com/icons/svg/271/271218.svg' roundedCircle style={{ padding:'3px',width: '1.75rem'}}/>
            </div>
            <div className="col col-lg-8">
              <ItemDetails listdata={this.state.dataAlso} position={this.state.currentPosAlso}/>
            </div>
            <div className="col col-lg-2 align-self-center">
              <Image onMouseOut={this.mouseout.bind(this)} onMouseOver={this.mousehover.bind(this)} onClick={this.rigth.bind(this, 'Also')} src='https://image.flaticon.com/icons/svg/271/271226.svg' roundedCircle className='dj-arrow-next-prev' style={{ padding:'3px',width: '1.75rem', float: 'right'}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));