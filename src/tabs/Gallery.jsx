import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    inputValue: '',
    page: 1,
    photos: [],
    total: 0,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.getPhotos(inputValue, page);
    }
  }

  getPhotos = async (query, page) => {
    this.setState({ isLoading: true });

    try {
      const { photos, total_results } = await ImageService.getImages(
        query,
        page
      );

      this.setState(prevState => ({
        photos: [...prevState.photos, ...photos],
        total: total_results,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = value => {
    this.setState({ inputValue: value });
  };

  render() {
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>

        <SearchForm onSubmit={this.onSubmit} />
      </>
    );
  }
}
