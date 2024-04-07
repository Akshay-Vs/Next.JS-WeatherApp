import React from 'react';
import './Seperator.scss';

interface ISeperator {
  className?: string;
}

const Seperator = ({ className }: ISeperator) => {
  return <div className={`seperator ${className}`} />;
};
export default Seperator;
