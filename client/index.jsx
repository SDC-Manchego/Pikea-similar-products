import React from 'react';
import ReactDOM from 'react-dom';
// import $ from "jquery";
var $ = require("jquery");
import ItemDetails from './components/ItemDetails.jsx';
import 'bootstrap'
import './src/css/style.css';
import './src/css/bootstrap.min.css';

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
    /*
     window.location
    `${window.location.hostname}:3000/products/similar/`
    */

    var url = `http://127.0.0.1:3000/products/similar/`
    if(arg!== ''){
      url = `http://127.0.0.1:3000/products/alsolike/`;
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

  render(){
    return (
      <div className="container">
        <hr style={{width:'90%'}}></hr>
{/*SIMILAR PRODUCT SECTION START*/}
        <h3 className='dj-title-section'>Similar products</h3>
        <div className="row no-gutters carousel slide" id="similar" data-ride="carousel" data-interval="false">
{/* LEFT ARROW */}
          <div className="col align-self-center">
            <a className="carousel-control-prev" href="#similar" data-slide="prev">
              <span className="carousel-control-prev-icon-arrow sp dj-rounded align-self-center" style={{textAlign: 'center'}}>
                <img style={{padding:'0.9rem', fontSize:'1.5rem', width:'50px', height:'50px',color:'#000', backgroundColor: 'transparent', borderRadius:'50px'}} src="https://image.flaticon.com/icons/svg/271/271218.svg"></img>
              </span>
            </a>
          </div>
{/*CAROUSEL ITEM PRODUCT */}
          <div className="col-10 align-self-center">
            <ItemDetails listdata={this.state.data} />
          </div>
{/* RIGHT ARROW */}
          <div className="col align-self-center">
            <a className="carousel-control-next text-center" href="#similar" data-slide="next">
              <span className="carousel-control-next-icon-arrow sp dj-rounded text-center">
                <img style={{padding:'0.9rem', fontSize:'1.5rem', width:'50px', height:'50px',color:'#000', backgroundColor: 'transparent', borderRadius:'50px'}} src="https://image.flaticon.com/icons/svg/271/271226.svg"></img>
              </span>
            </a>
          </div>
        </div>
{/*SIMILAR PRODUCT SECTION START*/}
        <hr style={{width:'90%'}}></hr>
{/*ALSO LIKE SECTION START*/}
        <h3 className='dj-title-section'>You might also like</h3>
        <div className="row no-gutters carousel slide" id="alsolike" data-ride="carousel" data-interval="false">
{/* LEFT ARROW */}
          <div className="col align-self-center">
            <a className="carousel-control-prev" href="#alsolike" data-slide="prev">
              <span className="carousel-control-prev-icon-arrow sp dj-rounded align-self-center">
                <img style={{padding:'0.9rem', fontSize:'1.5rem', width:'50px', height:'50px',color:'#000', backgroundColor: 'transparent', borderRadius:'50px'}} src="https://image.flaticon.com/icons/svg/271/271218.svg"></img>
              </span>
            </a>
          </div>
{/*CAROUSEL ITEM ALSO LIKE*/}
          <div className="col-10 align-self-center">
            <ItemDetails listdata={this.state.dataAlso} />
          </div>
{/* RIGHT ARROW */}
          <div className="col align-self-center">
            <a className="carousel-control-next text-center" href="#alsolike" data-slide="next">
              <span className="carousel-control-next-icon-arrow sp dj-rounded text-center">
                <img style={{padding:'0.9rem', fontSize:'1.5rem', width:'50px', height:'50px',color:'#000', backgroundColor: 'transparent', borderRadius:'50px'}} src="https://image.flaticon.com/icons/svg/271/271226.svg"></img>
              </span>
            </a>
          </div>
        </div>
{/*ALSO LIKE SECTION END*/}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('CarouselSimilar'));