import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faLocationDot,
  faSnowflake,
} from '@fortawesome/free-solid-svg-icons';
import Typography from '../shared/Typography/Typography';
import SearchBar from '../shared/SearchBar';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar">
      <FontAwesomeIcon icon={faSnowflake} className="navbar__icon" />
      <Typography className="h-[80%] bg-[#2c2c2f] mx-3 rounded-[30px] justify-start items-center px-5 hidden sm:flex">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-[#fefefe] mx-2 text-[18px]"
        />
        <Typography.Heading variant="h7" className="font-[600] ">
          California, USA
        </Typography.Heading>
      </Typography>
      <SearchBar />
      <div className="flex justify-center items-center gap-3">
        <div className="hidden md:flex">
          <FontAwesomeIcon icon={faGithub} className="navbar__icon" />
        </div>
        <FontAwesomeIcon icon={faGear} className="navbar__icon" />
      </div>
    </nav>
  );
};

export default NavBar;
