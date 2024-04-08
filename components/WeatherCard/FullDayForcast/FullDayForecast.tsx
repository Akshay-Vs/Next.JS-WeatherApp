import React from 'react';
import ThunderStormImage from '@/assets/images/thunderstorm.png';

import Typography from '@/components/shared/Typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faWind } from '@fortawesome/free-solid-svg-icons';
import Seperator from '@/components/shared/Seperator';

import Image from 'next/image';
import './FullDayForecast.scss';
import { getFullDayForcast } from '@/services/getFullDayForecast';

const FullDayForecast = () => {
  const { formattedForecast } = getFullDayForcast();
  const unit = 'C';
  return (
    <div className="full-day-forecast h-full w-full">
      {formattedForecast.map((item) => (
        <div className="full-day-forecast__card" key={item.dt}>
          <Image
            src={ThunderStormImage}
            alt="Full Day Forecast"
            width={86}
            height={86}
            className="w-[86px] h-[86px] object-cover object-center mb-3"
          />

          <Typography>
            <Typography.Heading
              variant="h3"
              className="flex justify-center items-center"
            >
              {item.main.tempInCelsius}
              <span className="text-2xl mb-[20%]">&deg;{unit}</span>
            </Typography.Heading>

            <Seperator />

            <Typography.Heading variant="h8" className="mt-4">
              <FontAwesomeIcon icon={faCalendarDays} className="mr-3" />
              {item.main.dateTime}
            </Typography.Heading>

            <Typography.Heading variant="h8" className="mt-4">
              <FontAwesomeIcon icon={faWind} className="mr-3" />
              {item.wind.speed}
            </Typography.Heading>
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default FullDayForecast;
