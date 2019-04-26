import React, { Component } from 'react';
import logo from './logo.svg';
import ImagesDB from './images.json';
import ImagesCard from './components/images';
import './App.css';

class App extends Component {

  state = {
    images : ImagesDB,
    tested : [0],
    score: 0

  }

  HandleClick = params => {

    var passed = true;
    var tested = this.state.tested;

    this.state.tested.map(el =>{
    
    if(el ===  params ){ 
      passed = false;
    } 

    });

    var current_score = this.state.score;

    if(passed){
      current_score++;
      tested.push(params);
     } 
     
     else if(!passed){
      current_score = 0;
      tested = [0];
      alert('Sorry You Failed! Try Again! :-(');
    }

    this.setState({ score:current_score });
    this.setState({ tested });
    // Shuffle();

    var imgdb = this.state.images;
    var length = this.state.images.length;
    for (let i = length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgdb[i], imgdb[j]] = [imgdb[j], imgdb[i]];
    }
    console.log(imgdb);
    this.setState({ images:imgdb });
  }


  render() {
    return (
      <div>
        <div className='header'>
          <span className="header-text">Test Your Memory</span>
          <span className="header-score">Score: {this.state.score}</span>
        </div>
        <div className='main-section'>
          {this.state.images.map( img => (
            <ImagesCard
            id={img.id}
            key={img.id}
            image={img.image}
            name={img.name} 
            onEcrement={this.HandleClick}
            // onShuffle={this.Shuffle}
            />
          ))}
        </div>
      </div>
    );

  }


}

export default App;
