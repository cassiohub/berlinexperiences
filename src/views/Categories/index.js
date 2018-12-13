import React, { Component } from 'react';

import Header from '../../components/Header';
import Section from '../../components/Section';
import BackButton from '../../components/BackButton';

import ExperienceService from '../../services/experiences';
import CategoryService from '../../services/categories';

import Hero from '../../assets/hero.jpg';

class Categories extends Component {
  state = {
    category: null,
    experiences: [],
  }
  
  componentDidMount() {
    this.getCategory(this.props.match.params.id);
  }

  getCategory = id => {
    this.setState({ category: CategoryService.get({ id }) }, () => this.getData());
  }
  
  getData = () => {
    this.setState({ experiences: ExperienceService.list().filter(e => e.category === this.state.category.id) });
  }

  render() {
    const { experiences, category } = this.state;

    return (
      <>
        <BackButton onClick={this.props.history.goBack} />
        <Header
          image={Hero}
          disableSearch={true}
        />
        { category && <Section title={category.name} cards={experiences || []} /> }
      </>
    );
  }
}

export default Categories;
