import React, { Component } from 'react';
import logo from './logo.svg';
import ImagesDB from './images.json';
import ImagesCard from './components/images';
import './App.css';

class App extends Component {

  state = {
    ImagesDB,
    tested : [0],
    score: 0

  }

  HandleClick = params => {

    var passed = true;
    var tested = this.state.tested;

    this.state.tested.map(el =>{
    
    if(el ===  params ){ 
      passed = false;
        // console.log('true ', this.state.tested);
    } 
    // else if(el !=  params ) {
    // //   var score = this.state.score;
    // // score++; 
    // // this.state.tested.push(params)
    // //   this.setState({ score });
    // }
      // console.log('false ', this.state.tested);

    });

    var current_score = this.state.score;

    if(passed){
      current_score++;
      tested.push(params);
     } 
     
     else if(!passed){
      current_score = 0;
      tested = [0];
    }

    this.setState({ score:current_score });
    this.setState({ tested });

  }


  render() {
    return (
      <div>
        <div className='header'>
          <span className="header-text">Test Your Memory</span>
          <span className="header-score">Score: {this.state.score}</span>
        </div>
        <div className='main-section'>
          {this.state.ImagesDB.map( img => (
            <ImagesCard
            id={img.id}
            key={img.id}
            image={img.image}
            name={img.name} 
            onEcrement={this.HandleClick}
            />
          ))}
        </div>
      </div>
    );

  }


}

export default App;
