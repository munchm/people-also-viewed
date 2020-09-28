import React from 'react';
import axios from 'axios';
import RestaurantsList from './RestaurantsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsArr: [],
    };
    this.getRestaurants = this.getRestaurants.bind(this);
  }

  getRestaurants() {
    axios.get('/getRestaurants')
      .then((response) => {
        console.log('response from index.js in App.jsx', response.data);
        this.setState({
          restaurantsArr: response.data
        });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    console.log('this.state.restaurantsArr: ', this.state.restaurantsArr);
    return (
      <div>
        <h2>
          People Also Viewed
        </h2>
        <RestaurantsList restaurants={this.state.restaurantsArr} />
      </div>
    );
  };
}

export default App;
