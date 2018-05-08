import React, { Component } from 'react'

import './style.css'


class ReverseString extends Component {

    state = {
      alert: '',
      userWord: ''
    }

    inputChange = (e) => {
      this.setState({
        userWord: e.target.value,
        alert: ''
      })
    }

    isPalindrome = () => {
      let str = this.state.userWord.toLowerCase()
      let reverse = str.split('').reverse().join('').toLowerCase()

      if(str === reverse) {
        this.setState({
          alert: "Yes this is a palindrome! Cool!"
        })
      } else {
        this.setState({
          alert: "No palindrome here, just another random word..."
        })
      }
    }

    render() {
      return (
        <div>
          <h1>Check if it's a palindrome</h1>
          <div className="description-container">
            <div className="description-container__instructions">
              <strong><p>Instructions:</p></strong>
              <p>
                Check to see if a given string is a palindrome (same word forwards and backwards)
                <br/>
                <strong>Example String:</strong> 1. "Kayak"
                <br/>
                 <strong>Output:</strong> 1. "It's a palindrome!"
              </p>
            </div>
            <div className="description-container__required">
            <strong><p>Requirments:</p></strong>
              <ul>
                <li>Allow and length String</li>
                <li>Caseing shouldn't matter</li>
                <li>Return an answer</li>
              </ul>
            </div>
          </div>
          <div className="code-block">
            <h5>My Solution:</h5>
            <code>
              {`const isPalindrome = (str) => { `}
              <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`let userWord = str.toLowerCase()`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`let reverse = str.toLowerCase().split('').reverse().join('')`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`let isTrue = "It's a palindrome!"`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`let isFalse = "It's not a palindrome..."`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`if (userWord === reverse) {`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return isTrue`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`} else {`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return isFalse`}
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}
              <br/>
              {`}`}
            </code>
          </div>

          <div className="example-app">
            <div className="example-app__inputs">
              <input type="text" placeholder="Palindrome Test" onChange={this.inputChange} value={this.state.userWord}/>
              <button onClick={this.isPalindrome}>Submit</button>
            </div>
            <div className="example-app__answer">
              <h5>And the answer is: <br/>{this.state.alert}</h5>
            </div>
          </div>
        </div>
      )
    }
  }

export default ReverseString;