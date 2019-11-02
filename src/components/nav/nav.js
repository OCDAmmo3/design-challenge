import React from 'react';

import './nav.scss';

const Nav = props => {
  return <nav className={props.type}>{props.children}</nav>;
};

export default Nav;

Nav.defaultProps = {
  children: [
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <ul>Item 3
        <li>Nested 1</li>
        <li>Nested 2</li>
        <li>Nested 3</li>
      </ul>
    </ul>,
  ],
};
