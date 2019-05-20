import React, { Component } from 'react';
import Modal from 'react-modal';
import Review from './review';
import ReviewForm from './review_form';
import modalStyles from '../utils/modal_styles';

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    const { reviews } = this.props;
    this.state = { 
      reviews,
      modalIsOpen: false,
    };
  }

  appendReview = (review) => {
    this.setState((state) => {
      return { reviews: [review, ...state.reviews] };
    });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { reviews } = this.state;
    const { restaurantId } = this.props;
    return (
      <div className="reviews-container">
        <div className="reviews-title">reviews</div>
        <div className="review-list">
          <div className="reviews-top">
            <div>{`${reviews.length} reviews`}</div>
            <button className="leave-review-button" onClick={this.openModal}>Leave a review</button>
          </div>
          {reviews.map(review => <Review key={review.id} review={review} />)}
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Review Modal"
            style={modalStyles}
          >
            <ReviewForm
              closeModal={this.closeModal}
              appendReview={this.appendReview}
              restaurantId={restaurantId}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default ReviewsContainer;
