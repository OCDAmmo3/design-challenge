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
          <li><a href="http://localhost:3000/forms">Forms Page</a></li>
          <li><a href="http://localhost:3000/list">List Page</a></li>
          <li><a href="http://localhost:3000/nav/horizontal">Horizontal Nav Page</a></li>
        </ul>
      </nav>
    </div>
  ],
};
