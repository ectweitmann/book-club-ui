import '../styles/App.css';
import React, { Component } from 'react';
import BookContainer from './BookContainer';
import Favorites from './Favorites';
import BookDetails from './BookDetails';
import Error404 from './Error404';
import Nav from './Nav';
import ErrorModal from './ErrorModal';
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
    const errorModal = this.state.error ? <ErrorModal message={this.state.error}/> : null
    return (
     <section className='App'>
       <Switch>
        <Route exact path='/'>
          <Nav />
          <BookContainer allBooks={this.state.books}/>
        </Route>
        <Route exact path='/favorites' render={({ match }) => {
          return [<Nav location="favorites" key={match + '-nav'}/>, <Favorites key={match + '-book-details'}/>]
        }} />
        <Route exact path='/:isbn/selectedBook' render={({ match }) => {
          return [<Nav key={match.params.isbn + '-nav'} />, <BookDetails isbn={match.params.isbn} key={match.params.isbn + '-book-details'} />]
        }} />
        <Route>
          <Nav />
          <Error404 />
        </Route>
       </Switch>
       {errorModal}
     </section>
    )
  }
}

export default App;
