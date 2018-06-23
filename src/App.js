//imports dependencies and files
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import moonimages from "./moonimages.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    moonimages,
    clickedImage: [],
    score: 0,
    topScore: 0
  };

//every click removes images from array
  imageClick = event => {
    const currentImage = event.target.alt;
    const thisImageClicked =
      this.state.clickedImage.indexOf(currentImage) > -1;

//click the same, resets game
    if (thisImageClicked) {
      this.setState({
        //randomize images
        moonimages: this.state.moonimages.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
        alert("Play again?");

//else will increment score
    } else {
      this.setState(
        {
          //randomize images
          moonimages: this.state.moonimages.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(
            currentImage
          ),
          score: this.state.score + 1
        },
//all the images clicked, winner        
        () => {
          if (this.state.score >= this.state.topScore) {
            this.setState({
              moonimages: this.state.moonimages.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              topScore: this.state.score
            })
          }
          if (this.state.score === 12) {
            alert("Winner!");
            this.setState({
              moonimages: this.state.moonimages.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedImage: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <NavBar 
          topScore={this.state.topScore}
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
        {/*gets all the images from the json file */}
          {this.state.moonimages.map(moonimages => (
            <ImageCard
              imageClick={this.imageClick}
              id={moonimages.id}
              key={moonimages.id}
              image={moonimages.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;