import Typography from '@/components/shared/Typography/Typography';
import {
  faCalendarDays,
  faCloudShowersHeavy,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './WeatherCard.scss';
import BluredBlobs from '@/components/shared/BluredBlobs';
import Image from 'next/image';

import ThunderStormImage from '@/assets/images/thunderstorm.png';
import Seperator from '@/components/shared/Seperator';

const WeatherMain = () => {
  const unit = 'C';
  const temperature = 23;
  const weatherStatus = 'Rainy Storm Clouds';
  const location = 'California, USA';
  const currentDate = '12-02-2024';
  const currentTime = '12:34 AM'; // TODO: Add actual data

  return (
    <div className="weather-card">
      <BluredBlobs>
        <BluredBlobs.BlobCold />
        <BluredBlobs.BlobWarm />
        <BluredBlobs.BlobNeutral />
      </BluredBlobs>

      <Typography>
        <div className="flex items-center gap-8">
          <Typography.Heading className="flex items-center">
            {temperature}
            <span className="text-5xl mb-[20%]">&deg;{unit}</span>
          </Typography.Heading>
          <Image
            src={ThunderStormImage}
            alt="Thunder Storm"
            height={160}
            width={160}
          />
        </div>

        <Typography.Heading
          variant="h6"
          className="flex justify-start items-center"
        >
          <FontAwesomeIcon icon={faCloudShowersHeavy} className="mr-3" />
          {weatherStatus}
        </Typography.Heading>

        <Seperator className="mt-5 mb-5" />

        <div className="flex flex-col gap-2">
          <Typography.Heading variant="h7">
            <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
            {location}
          </Typography.Heading>

          <Typography.Heading variant="h7">
            <FontAwesomeIcon icon={faCalendarDays} className="mr-3" />
            {currentDate} <b>{currentTime}</b>
          </Typography.Heading>
        </div>
      </Typography>
    </div>
  );
};

export default WeatherMain;
