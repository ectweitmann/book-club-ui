import '../styles/App.css';
import React, { Component } from 'react';
import BookContainer from './BookContainer';
import Favorites from './Favorites';
import BookDetails from './BookDetails';
import { apiCalls } from '../apiCalls';
import { cleanBookData } from '../utils';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          isbn: '9781250278210',
          title: 'ABANDONED IN DEATH',
          description: 'The 54th book of the In Death series. Eve Dallas investigates a homicide and the disappearance of other women who resemble that victim.',
          amazon_link: 'https://www.amazon.com/dp/125027821X?tag=NYTBSREV-20',
          author: 'J.D. Robb',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9781250278210.jpg'
        },
        {
          isbn: '9780525559474',
          title: 'THE MIDNIGHT LIBRARY',
          description: 'Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.',
          amazon_link: 'https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20',
          author: 'Matt Haig',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg'
        },
        {
          isbn: '9781501171345',
          title: 'THE LAST THING HE TOLD ME',
          description: 'Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.',
          amazon_link: 'https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20',
          author: 'Laura Dave',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg'
        },
        {
          isbn: '9780735222359',
          title: 'THE LINCOLN HIGHWAY',
          description: 'Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in 1954.',
          amazon_link: 'https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20',
          author: 'Amor Towles',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9780735222359.jpg'
        },
        {
          isbn: '9780593356159',
          title: 'THE MAID',
          description: 'When a wealthy man is found dead in his room, a maid at the Regency Grand Hotel becomes a lead suspect.',
          amazon_link: 'https://www.amazon.com/dp/0593356152?tag=NYTBSREV-20',
          author: 'Nita Prose',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9780593356159.jpg'
        },
        {
          isbn: '9781250274618',
          title: 'THE CHRISTIE AFFAIR',
          description: 'Miss Nan O’Dea becomes the mistress of Agatha Christie’s husband.',
          amazon_link: 'https://www.amazon.com/dp/1250274613?tag=NYTBSREV-20',
          author: 'Nina de Gramont',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9781250274618.jpg'
        },
        {
          isbn: '9780525618584',
          title: 'CITY OF THE DEAD',
          description: 'The 37th book in the Alex Delaware series. Delaware and Sturgis investigate a double homicide.',
          amazon_link: 'https://www.amazon.com/dp/0525618589?tag=NYTBSREV-20',
          author: 'Jonathan Kellerman',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9780525618584.jpg'
        },
        {
          isbn: '9780385546027',
          title: "THE JUDGE'S LIST",
          description: 'The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.',
          amazon_link: 'https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20',
          author: 'John Grisham',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg'
        },
        {
          isbn: '9780316499774',
          title: 'THE HORSEWOMAN',
          description: 'As the Paris Olympics draw near, a mother and daughter, who are champion horse riders, compete against each other.',
          amazon_link: 'https://www.amazon.com/dp/0316499773?tag=NYTBSREV-20',
          author: 'James Patterson and Mike Lupica',
          book_image: 'https://storage.googleapis.com/du-prd/books/images/9780316499774.jpg'
        }
      ]
    }
  }

  componentDidMount = () => {
    apiCalls.getAllBooks()
      .then(booksData => {
        const cleanedBooksData = booksData.map(book => cleanBookData(book));
        this.setState({ books: cleanBookData})
      }) 
  }

  render() {
    return (
     <section className='App'>
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
