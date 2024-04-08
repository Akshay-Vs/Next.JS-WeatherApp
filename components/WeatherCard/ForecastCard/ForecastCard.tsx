import React from 'react';
import './ForecastCard.scss';
import PropTypes from 'prop-types';
import { IExtandable } from '@/interfaces/IExtandableProp';
import { FullDayForecast } from '..';

const ForecastCard = ({ children, className }: IExtandable<HTMLDivElement>) => {
  return <div className={`forecast-card ${className}`}>{children}</div>;
};

ForecastCard.FullDayForecast = FullDayForecast;

ForecastCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default ForecastCard;
