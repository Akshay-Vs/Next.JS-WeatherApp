import { ForecastCard } from '@/components/WeatherCard';
import BluredBlobs from '@/components/shared/BluredBlobs';
import { WeatherMain } from '@components/WeatherCard';

export default function Home() {
  return (
    <main>
      <div className="flex">
        <WeatherMain />
        <ForecastCard>
          <BluredBlobs>
            <BluredBlobs.BlobWarm className="w-full" />
          </BluredBlobs>
          <ForecastCard.FullDayForecast />
        </ForecastCard>
      </div>
    </main>
  );
}
