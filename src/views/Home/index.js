import React, { Component } from 'react';
import content from '../../data/content';

import About from '../../components/About';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Section from '../../components/Section';
import Separator from '../../components/Separator';

import ExperienceService from '../../services/experiences';
import CategoryService from '../../services/categories';

import Hero from '../../assets/hero.jpg';

class Home extends Component {
  state = {
    limit: 3,
    term: '',
    isSearching: false,
    experiences: [],
    categories: [],
    results: [],
  }
  
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({
      experiences: ExperienceService.list(),
      categories: CategoryService.list(),
    });
  }

  resetSearch = () => {
    this.setState({
      isSearching: false,
      results: [],
      term: '',
    });
    this.getData();
  }

  filter = ({ term, prop, items }) => {
    return items ? items.filter(i => i[prop] === term) : [];
  };

  onSearch = e => {
    const term = e.target.value;

    if (!term.length) return this.resetSearch();

    this.setState({
      term,
      isSearching: true,
      results: ExperienceService.search({ term }),
    });
  }

  onClear = () => {
    this.resetSearch();
  };

  render() {
    const { isSearching, experiences, categories, results, term, limit } = this.state;

    return (
      <>
        <Header
          image={Hero}
          onSearch={this.onSearch}
          onClear={this.onClear}
          clearable={isSearching}
          term={term}
        />

        { isSearching ?
          <Section title="Search Results" cards={results} full={true} /> :
          categories && categories.map((c, k) => {
            const cards = this.filter({
             term: c.id,
             prop: 'category',
             items: experiences,
            });
 
            return (
              <Section
                title={c.name}
                cards={cards.slice(0, limit)}
                full={c.fullLayout}
                carrousel={true}
                key={k}
                button={<Button to={`/categories/${c.id}`}>See More on {c.name}</Button>}
              />
            );
          })
        }

        { !isSearching &&
          <>
            <Separator />
              <About title="About Berlin" content={content.about} />
            <Separator />
          </>
        }
      </>
    );
  }
}

export default Home;
