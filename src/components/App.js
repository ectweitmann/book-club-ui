import '../styles/App.css';
import React, { Component } from 'react';
import BookContainer from './BookContainer';
import Favorites from './Favorites';
import BookDetails from './BookDetails';
import Nav from './Nav';
import { apiCalls } from '../apiCalls';
import { cleanBookData } from '../utils';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      error: ''
    }
  }

  componentDidMount = () => {
    apiCalls.getAllBooks()
      .then(booksData => {
        const cleanedBooksData = booksData.map(book => cleanBookData(book));
        this.setState({ books: cleanedBooksData})
      })
      .catch(error => this.setState({ error: error.message}))
  }

  render() {
    return (
     <section className='App'>
       <Switch>
        <Route exact path='/'>
          <Nav />
          <BookContainer allBooks={this.state.books}/>
        </Route>
        <Route exact path='/favorites' render={() => {
          return [<Nav location="favorites"/>, <Favorites />]
        }} />
        <Route exact path='/:isbn' render={({ match }) => {
          return [<Nav />, <BookDetails isbn={match.params.isbn} />]
        }} />
       </Switch>
     </section>
    )
  }
}

export default App;
