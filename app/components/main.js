import React from 'react';
import axios from 'axios';
import Thumbnails from './Thumbnails'

export default class Main extends React.Component{
  state={
    fileSent : {},
    fileArray:[]
  }

  handleFile = (e) =>{
    this.setState({fileSent : e.target.files});
  }

  handleClick=() =>{
      const that=this;
    var data = new FormData();
          data.append('file', document.getElementById('file').files[0]);
   console.log(data);
    axios.post('/users/add', data)
    .then(function (response) {
      var files = response.data
      
      console.log("in click......",files);
      that.setState({fileArray:files})
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  componentDidMount(){
    const that=this;
    axios.get('/users/upload')
    .then(function (response) {
      var files = response.data
      that.setState({fileArray:files})
      console.log(response.data);
    })
    .catch(function (error) {
      alert('error while uplaoding fetching file')
      console.log(error);
    });
  }

  render(){
    var thumb = this.state.fileArray.map((data,index)=>
       <Thumbnails key = {index} index = {index} myFiles={data}/>

    )
    return (
      <div>
        <input type="file" id="file" onChange={this.handleFile}/>
        <button  onClick={this.handleClick} >Upload File</button>
        {thumb}


      </div>
      )
  }
}
