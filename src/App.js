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
    clickedFish: [],
    score: 0
  };

//when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentFish = event.target.alt;
    const FishAlreadyClicked =
      this.state.clickedFish.indexOf(currentFish) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
    if (FishAlreadyClicked) {
      this.setState({
        fish: this.state.moonimages.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFish: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          moonimages: this.state.moonimages.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFish: this.state.clickedFish.concat(
            currentFish
          ),
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              moonimages: this.state.moonimages.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFish: [],
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
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
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