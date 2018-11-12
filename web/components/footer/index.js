import React from 'react';
import PropTypes from 'prop-types';
import { EXTERNAL } from '../home/External';

import leftScenery from '../../assets/footer/scenery/left-scenery.svg';
import bike from '../../assets/footer/scenery/bike.svg';
import bikeMobile from '../../assets/footer/scenery/bike-mobile.svg';
import rightScenery from '../../assets/footer/scenery/right-scenery.svg';
import rightSceneryMobile from '../../assets/footer/scenery/right-scenery-mobile.svg';
import rightSceneryLHD from '../../assets/footer/scenery/right-scenery-lhd.svg';
import rightSceneryLHDMobile from '../../assets/footer/scenery/right-scenery-lhd-mobile.svg';

import facebookIcon from '../../assets/footer/icons/facebook.svg';
import instagramIcon from '../../assets/footer/icons/instagram.svg';
import mediumIcon from '../../assets/footer/icons/medium.svg';
import twitterIcon from '../../assets/footer/icons/twitter.svg';

const social = {
  nwplus: [
    {
      alt: 'facebook',
      src: facebookIcon,
      href: EXTERNAL.FACEBOOK,
    },
    {
      alt: 'instagram',
      src: instagramIcon,
      href: EXTERNAL.INSTAGRAM,
    },
    {
      alt: 'medium',
      src: mediumIcon,
      href: EXTERNAL.MEDIUM,
    },
    {
      alt: 'twitter',
      src: twitterIcon,
      href: EXTERNAL.TWITTER,
    },
  ],
  lhd: [
    {
      alt: 'facebook',
      src: facebookIcon,
      href: EXTERNAL.FACEBOOK,
    },
    {
      alt: 'instagram',
      src: instagramIcon,
      href: EXTERNAL.INSTAGRAM,
    },
    {
      alt: 'twitter',
      src: twitterIcon,
      href: EXTERNAL.TWITTER,
    },
  ],
};

const getImage = (alt, src, className) => (
  <img
    className={className}
    alt={alt}
    src={src} />
);

const getIcon = (obj) => {
  if (obj) {
    return (
      <a href={obj.href}>
        {getImage(obj.alt, obj.src, obj.className)}
      </a>
    );
  }
  return (null);
};

const Footer = ({ type }) => (
  <footer className="footer fill-width">
    <div className="scale-scenery">
      {getImage('left-scenery', leftScenery, 'left-scenery')}
      {getImage('bike', bike, 'bike')}
      {getImage('bike-mobile', bikeMobile, 'bike-mobile')}
      {(type === 'lhd')
        ? getImage('right-scenery-lhd', rightSceneryLHD, 'right-scenery-lhd')
        : getImage('right-scenery', rightScenery, 'right-scenery')}
      {(type === 'lhd')
        ? getImage('right-scenery-lhd-mobile', rightSceneryLHDMobile, 'right-scenery-lhd-mobile')
        : getImage('right-scenery-mobile', rightSceneryMobile, 'right-scenery-mobile')}
    </div>
    <div className="footer-content">
      <div className="social flex dir-row jc-between">
        {social[type].map(icon => getIcon(icon))}
      </div>
      <div className="links flex jc-between pad-ends-l">
        <a href={EXTERNAL.EMAIL_US}>E-mail Us</a>
        <a href={EXTERNAL.CODE_OF_CONDUCT}>Code of Conduct</a>
        <a href={EXTERNAL.SPONSORSHIP_PACKAGE}>Become a Sponsor</a>
      </div>
      <div className="footnote pad-bot-l">
        <p>Organized and held by nwPlus
          <br />Copyright © 2018 nwHacks
        </p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  type: PropTypes.string,
};

export { Footer };
