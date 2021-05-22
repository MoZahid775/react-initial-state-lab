// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    
    
    state={ 
       secondsLeft : this.props.initialCount 

    }

   
    
    
    
    
    
    render() {
      //let countDown = () => {
           
              
              
                 
                 
                 
         // this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!`
          
                 

               //}
        
          return (
              <div>
              {this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!`}
              </div>
        )
    }
}

