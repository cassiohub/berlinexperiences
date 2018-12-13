import React from 'react';
import { Link } from 'react-router-dom';

import SearchBox from '../SearchBox';
import { Wrapper, Title } from './style';

const Header = props => (
  <Wrapper image={props.image}>
    <Title><Link to='/'>Berlin</Link></Title>
    { !props.disableSearch &&
      <SearchBox
        placeholder='Search for experiences...'
        onChange={props.onSearch}
        clearable={props.clearable}
        onClear={props.onClear}
        term={props.term}
      />
    }
  </Wrapper>
);

export default Header;
