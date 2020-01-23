import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      book: {},
      error: false
    }
  }

  componentDidMount() {
    this.dotThen()
  }

  dotThen = () => {
    console.log(11111, this.state.book)
    axios.get('/api/harry').then(res => {
      console.log(222222, this.state.book)
      this.setState({
        book: res.data[0]
      })
      console.log(444444, this.state.book)
    }).catch(err => {
      console.log(err)
      this.setState({
        error: true
      })
    })
    console.log(33333, this.state.book)
  }

  render() {
    const { book, error } = this.state
    return (
      <div>
        <h1>App</h1>
        {book.title && 
          <div>
            <h2>{book.title}</h2>
            <h3>By {book.author}</h3>
            <p>{book.pages} pages</p>
          </div>
        }
        {error &&
        <div>
          <h2>there's been an error</h2>
        </div>
        }
      </div>
    )
  }
}

export default App;
