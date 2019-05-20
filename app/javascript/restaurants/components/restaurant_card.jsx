import React, { Component } from 'react';
import axios from 'axios';
import TimeSlot from './time_slot';
import BASE_URL from '../utils/base_url';
import history from '../utils/history';
import RestaurantPhoto from './restaurant_photo';

class RestaurantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSlotsToday: [],
    };
  }

  componentDidMount() {
    const { restaurant } = this.props;
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    axios.get(`${BASE_URL}/restaurants/${restaurant.id}/time_slots?start=${start}&end=${end}`)
      .then(response => this.setState({ timeSlotsToday: response.data }));
  }

  linkToRestaurant = () => {
    const { restaurant } = this.props;
    history.push(`/restaurants/${restaurant.id}`);
  }

  render() {
    const { timeSlotsToday } = this.state;
    const { restaurant } = this.props;
    return (
      <div className="col-12 col-sm-3" style={{ padding: '0 10px' }}>
        <div className="restaurant-card-container" onClick={this.linkToRestaurant}>
          <div className="restaurant-card-image-container">
            <RestaurantPhoto photo={restaurant.restaurant_photos[0]} />
          </div>
          <div className="restaurant-card-content">
            <div className="restaurant-card-info">
              <div className="restaurant-card-title">{restaurant.name}</div>
              <div className="restaurant-card-cuisine">{restaurant.cuisine.name}</div>
            </div>
            <div className="time-slots-container">
              {timeSlotsToday.map(timeSlot => <TimeSlot key={timeSlot.id} timeSlot={timeSlot} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantCard;