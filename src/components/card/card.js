import React from 'react';

import Link from '../link';

import './card.scss';

const Card = props => {
  const content = props.content;
  const cardType = [props.type];
  const classes = ['card', ...cardType].join(' ');
  return (
    <div className={classes}>
      <header>{content.title}</header>
      <figure>
        <img src={content.media.src} />
        <figcaption>{content.media.title}</figcaption>
      </figure>
      <p>{content.copy}</p>
      <div className="links">
        {content.links &&
          content.links.map((link, i) => (
            <Link href={link.href} text={link.title} type={link.type} />
          ))}
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  content: {
    title: 'Card Title',
    media: {
      src: 'https://www.psdstack.com/wp-content/uploads/2016/10/featured-copyright-free-mages.jpg',
      title: 'An Image',
    },
    copy: 'Some interesting content here',
    links: [
      {
        title: 'Click Me',
        href: '#',
        type: 'primary',
      },
      {
        title: 'Not Me',
        href: '#',
        type: 'secondary',
      },
    ],
  },
};
