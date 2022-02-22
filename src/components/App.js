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
       <Nav />
       <Switch>
        <Route exact path='/'>
          <BookContainer allBooks={this.state.books}/>
        </Route>
        <Route exact path='/favorites' render={() => {
          return <Favorites />
        }} />
        <Route exact path='/:id' render={({ match }) => {
          return <BookDetails id={match.params.id} />
        }} />
       </Switch>
     </section>
    )
  }
}

export default App;
