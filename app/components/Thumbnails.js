import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export  default class Thumbnails extends React.Component{

  render(){
    // const self=this;
    // const titleNo="Video "+{self.props.index};
  return (
    <Card style={{width:300,  marginTop: 50, background: '#4488a3', color:'black'}}>
    <CardHeader
    title= {this.props.myFiles}
    />
  </Card>

  )}
};
