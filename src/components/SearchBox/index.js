import React from 'react';
import { Wrapper, Icon, IconClose, Input } from './style';

import Search from '../../assets/icon-search.svg';
import Close from '../../assets/icon-close.svg';

const SearchBox = ({ onChange, placeholder, onClear, clearable, term }) => (
  <Wrapper>
    <Icon src={Search} />
    <Input type="text" placeholder={placeholder} onChange={onChange} value={term} />
    { clearable && <IconClose src={Close} onClick={onClear} title="Clear search" /> }
  </Wrapper>
);

export default SearchBox;