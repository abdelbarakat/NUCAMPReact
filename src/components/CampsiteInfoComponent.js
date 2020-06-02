import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';
//import { CAMPSITES } from './../shared/campsites';

class CampsiteInfo extends Component {
        // constructor(props){
        //   super(props);
        //   this.state = {
        //     campsites : CAMPSITES
        //   };
        // }
        renderComments(comments) {
            if (comments) 
            {
                return(
                    <div className="col-md-5 m-1">
                        <h4>Comments</h4>
                        {
                            comments.map(comment => {
                            return (
                                <div>
                                 <div>{comment.text} </div>  
                                 <div>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </div>
                                </div>
                                    );
                            })
                        }
                    </div>
                );
            }
            return (
                <div></div>
             );
           
        }
        renderCampsite(campsite){

            return (
               <div className="col-md-5 m-1">
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
               </div>
            );
        }
          render() {
            if (this.props.campsite)
            {
                return (
                    <div className="container">
                        <div className="row">
                            {this.renderCampsite(this.props.campsite)}
                            {this.renderComments(this.props.campsite.comments)}
                        </div>
                    </div>
                );
            }
            else
            {
              return (
                 <div>***Not selected***</div>
              );
            }
          }
      }
      


export default CampsiteInfo;