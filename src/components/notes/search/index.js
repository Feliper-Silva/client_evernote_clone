import React, { useState, useEffect } from 'react';
import { Input, Column } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ColumnGroup } from 'rbx/grid/columns/column-group';

function Search(props) {
  const [query, setQuery] = useState('');

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      props.searchNotes(query);
    }
  };

  return (
    <ColumnGroup className="is-vcentered" breakpoint="mobile">
      <Column size="9" offset={1}>
        <Input
          type="text"
          name={query}
          value={query}
          placeholder="Search note..."
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Column>
      <Column>
        <a
          href="#"
          onClick={() => {
            props.fetchNotes();
            setQuery('');
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            color="grey"
            className="is-pulled-left"
          />
        </a>
      </Column>
    </ColumnGroup>
  );
}

export default Search;
