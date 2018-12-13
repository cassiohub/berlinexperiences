import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Section from '../../components/Section';
import Separator from '../../components/Separator';
import BackButton from '../../components/BackButton';
import DetailsSection from '../../components/DetailsSection';

import ExperienceService from '../../services/experiences';

import Hero from '../../assets/hero.jpg';

class Details extends Component {
  state = {
    item: null,
    related: []
  }

  componentDidMount() {
    this.getData(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.getData(nextProps.match.params.id);
    }
  }

  getData = (id) => {
    this.setState({ item: ExperienceService.get({ id }) }, () => this.getRelated());
  }

  getRelated = () => {
    this.setState({ related: ExperienceService.list().filter(r => r.category === this.state.item.category).slice(0, 3) });
  }

  render() {
    const { item, related } = this.state;
    const category = item ? item.category : null;

    return (
      <>
        <BackButton onClick={this.props.history.goBack} />
        <Header
          image={item && item.image ? item.image : Hero}
          disableSearch={true}
        />
        <DetailsSection { ...item } />
        <Separator />
        <Section
          title="Related Experiences"
          cards={related}
          full={true}
          button={category ? <Button to={`/categories/${category}`}>See More</Button> : null}
        />
      </>
    );
  }
}

export default withRouter(Details);
