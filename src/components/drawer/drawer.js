import React from 'react';

import './drawer.scss';

const Drawer = props => {
  return <aside>{props.children}</aside>;
};

export default Drawer;

Drawer.defaultProps = {
  children: 
  [
    <div className="sideBar">
      <h3>Stuff</h3>
      <nav>
        <ul className="navBar">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </nav>
    </div>
  ],
};
