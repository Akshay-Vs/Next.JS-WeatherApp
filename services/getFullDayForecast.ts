// import axios from "axios";

import { formatDate } from "@/utils/formatDate";

const mockData = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1712566800,
      "main": {
        "temp": 309.27,
        "feels_like": 308.79,
        "temp_min": 309.27,
        "temp_max": 309.27,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 926,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 9
      },
      "wind": {
        "speed": 1.91,
        "deg": 241,
        "gust": 4.09
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-08 09:00:00"
    },
    {
      "dt": 1712577600,
      "main": {
        "temp": 307.08,
        "feels_like": 307.3,
        "temp_min": 302.71,
        "temp_max": 307.08,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 926,
        "humidity": 35,
        "temp_kf": 4.37
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 9
      },
      "wind": {
        "speed": 2.73,
        "deg": 244,
        "gust": 3.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-08 12:00:00"
    },
    {
      "dt": 1712588400,
      "main": {
        "temp": 300.43,
        "feels_like": 301.76,
        "temp_min": 296.01,
        "temp_max": 300.43,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 927,
        "humidity": 62,
        "temp_kf": 4.42
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 9
      },
      "wind": {
        "speed": 0.96,
        "deg": 240,
        "gust": 2.24
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-08 15:00:00"
    },
    {
      "dt": 1712599200,
      "main": {
        "temp": 294.05,
        "feels_like": 294.57,
        "temp_min": 294.05,
        "temp_max": 294.05,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 928,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 0.63,
        "deg": 124,
        "gust": 0.82
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-08 18:00:00"
    },
    {
      "dt": 1712610000,
      "main": {
        "temp": 293.36,
        "feels_like": 293.81,
        "temp_min": 293.36,
        "temp_max": 293.36,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 926,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 21
      },
      "wind": {
        "speed": 0.84,
        "deg": 68,
        "gust": 0.92
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-08 21:00:00"
    },
    {
      "dt": 1712620800,
      "main": {
        "temp": 293.05,
        "feels_like": 293.32,
        "temp_min": 293.05,
        "temp_max": 293.05,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 927,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 30
      },
      "wind": {
        "speed": 0.8,
        "deg": 67,
        "gust": 0.92
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-09 00:00:00"
    },
    {
      "dt": 1712631600,
      "main": {
        "temp": 300.97,
        "feels_like": 301.32,
        "temp_min": 300.97,
        "temp_max": 300.97,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 930,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 15
      },
      "wind": {
        "speed": 0.7,
        "deg": 199,
        "gust": 0.88
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-09 03:00:00"
    },
    {
      "dt": 1712642400,
      "main": {
        "temp": 308.25,
        "feels_like": 307.76,
        "temp_min": 308.25,
        "temp_max": 308.25,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 930,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 11
      },
      "wind": {
        "speed": 1.75,
        "deg": 233,
        "gust": 3.68
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-09 06:00:00"
    },
    {
      "dt": 1712653200,
      "main": {
        "temp": 309.14,
        "feels_like": 308.82,
        "temp_min": 309.14,
        "temp_max": 309.14,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 926,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 7
      },
      "wind": {
        "speed": 2.03,
        "deg": 243,
        "gust": 4.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-09 09:00:00"
    },
    {
      "dt": 1712664000,
      "main": {
        "temp": 303.23,
        "feels_like": 304.01,
        "temp_min": 303.23,
        "temp_max": 303.23,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 926,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 11
      },
      "wind": {
        "speed": 2.66,
        "deg": 251,
        "gust": 3.24
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-09 12:00:00"
    },
    {
      "dt": 1712674800,
      "main": {
        "temp": 295.85,
        "feels_like": 296.24,
        "temp_min": 295.85,
        "temp_max": 295.85,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 928,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 7
      },
      "wind": {
        "speed": 0.75,
        "deg": 248,
        "gust": 1.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-09 15:00:00"
    },
    {
      "dt": 1712685600,
      "main": {
        "temp": 294.11,
        "feels_like": 294.51,
        "temp_min": 294.11,
        "temp_max": 294.11,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 928,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 0.26,
        "deg": 129,
        "gust": 0.74
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-09 18:00:00"
    },
    {
      "dt": 1712696400,
      "main": {
        "temp": 293.01,
        "feels_like": 293.45,
        "temp_min": 293.01,
        "temp_max": 293.01,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 926,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 31
      },
      "wind": {
        "speed": 0.43,
        "deg": 83,
        "gust": 0.75
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-09 21:00:00"
    },
    {
      "dt": 1712707200,
      "main": {
        "temp": 292.58,
        "feels_like": 292.95,
        "temp_min": 292.58,
        "temp_max": 292.58,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 927,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 35
      },
      "wind": {
        "speed": 0.52,
        "deg": 78,
        "gust": 0.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-10 00:00:00"
    },
    {
      "dt": 1712718000,
      "main": {
        "temp": 300.34,
        "feels_like": 300.88,
        "temp_min": 300.34,
        "temp_max": 300.34,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 930,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 60
      },
      "wind": {
        "speed": 0.99,
        "deg": 214,
        "gust": 1.23
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-10 03:00:00"
    },
    {
      "dt": 1712728800,
      "main": {
        "temp": 307.72,
        "feels_like": 307.03,
        "temp_min": 307.72,
        "temp_max": 307.72,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 930,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 1.65,
        "deg": 226,
        "gust": 3.62
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-10 06:00:00"
    },
    {
      "dt": 1712739600,
      "main": {
        "temp": 308.74,
        "feels_like": 307.84,
        "temp_min": 308.74,
        "temp_max": 308.74,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 927,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 77
      },
      "wind": {
        "speed": 2.18,
        "deg": 240,
        "gust": 4.07
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-10 09:00:00"
    },
    {
      "dt": 1712750400,
      "main": {
        "temp": 302.51,
        "feels_like": 302.9,
        "temp_min": 302.51,
        "temp_max": 302.51,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 926,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 51
      },
      "wind": {
        "speed": 2.8,
        "deg": 251,
        "gust": 3.33
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-10 12:00:00"
    },
    {
      "dt": 1712761200,
      "main": {
        "temp": 295.03,
        "feels_like": 295.31,
        "temp_min": 295.03,
        "temp_max": 295.03,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 928,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 9
      },
      "wind": {
        "speed": 0.68,
        "deg": 262,
        "gust": 1.77
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-10 15:00:00"
    },
    {
      "dt": 1712772000,
      "main": {
        "temp": 293.35,
        "feels_like": 293.7,
        "temp_min": 293.35,
        "temp_max": 293.35,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 928,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 19
      },
      "wind": {
        "speed": 0.17,
        "deg": 99,
        "gust": 0.65
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-10 18:00:00"
    },
    {
      "dt": 1712782800,
      "main": {
        "temp": 292.47,
        "feels_like": 292.78,
        "temp_min": 292.47,
        "temp_max": 292.47,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 926,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 62
      },
      "wind": {
        "speed": 0.33,
        "deg": 35,
        "gust": 0.68
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-10 21:00:00"
    },
    {
      "dt": 1712793600,
      "main": {
        "temp": 292.05,
        "feels_like": 292.27,
        "temp_min": 292.05,
        "temp_max": 292.05,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 928,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 50
      },
      "wind": {
        "speed": 0.77,
        "deg": 49,
        "gust": 0.9
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-11 00:00:00"
    },
    {
      "dt": 1712804400,
      "main": {
        "temp": 300.57,
        "feels_like": 300.77,
        "temp_min": 300.57,
        "temp_max": 300.57,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 931,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 0.61,
        "deg": 265,
        "gust": 0.81
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-11 03:00:00"
    },
    {
      "dt": 1712815200,
      "main": {
        "temp": 308.05,
        "feels_like": 307.11,
        "temp_min": 308.05,
        "temp_max": 308.05,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 931,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 78
      },
      "wind": {
        "speed": 1.67,
        "deg": 244,
        "gust": 3.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-11 06:00:00"
    },
    {
      "dt": 1712826000,
      "main": {
        "temp": 309.02,
        "feels_like": 308.03,
        "temp_min": 309.02,
        "temp_max": 309.02,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 927,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 1.98,
        "deg": 238,
        "gust": 4.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-11 09:00:00"
    },
    {
      "dt": 1712836800,
      "main": {
        "temp": 302.2,
        "feels_like": 302.75,
        "temp_min": 302.2,
        "temp_max": 302.2,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 927,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 2.89,
        "deg": 253,
        "gust": 3.62
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-11 12:00:00"
    },
    {
      "dt": 1712847600,
      "main": {
        "temp": 294.94,
        "feels_like": 295.26,
        "temp_min": 294.94,
        "temp_max": 294.94,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 928,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 0.7,
        "deg": 285,
        "gust": 1.65
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-11 15:00:00"
    },
    {
      "dt": 1712858400,
      "main": {
        "temp": 293.42,
        "feels_like": 293.77,
        "temp_min": 293.42,
        "temp_max": 293.42,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 928,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 0.29,
        "deg": 136,
        "gust": 0.74
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-11 18:00:00"
    },
    {
      "dt": 1712869200,
      "main": {
        "temp": 292.64,
        "feels_like": 292.99,
        "temp_min": 292.64,
        "temp_max": 292.64,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 927,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 0.9,
        "deg": 104,
        "gust": 1.01
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-11 21:00:00"
    },
    {
      "dt": 1712880000,
      "main": {
        "temp": 292.09,
        "feels_like": 292.42,
        "temp_min": 292.09,
        "temp_max": 292.09,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 927,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 0.66,
        "deg": 79,
        "gust": 0.92
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-12 00:00:00"
    },
    {
      "dt": 1712890800,
      "main": {
        "temp": 300.18,
        "feels_like": 300.79,
        "temp_min": 300.18,
        "temp_max": 300.18,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 931,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 1,
        "deg": 204,
        "gust": 1.1
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-12 03:00:00"
    },
    {
      "dt": 1712901600,
      "main": {
        "temp": 307.32,
        "feels_like": 306.66,
        "temp_min": 307.32,
        "temp_max": 307.32,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 930,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 2.12,
        "deg": 227,
        "gust": 2.8
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-12 06:00:00"
    },
    {
      "dt": 1712912400,
      "main": {
        "temp": 308.7,
        "feels_like": 308.19,
        "temp_min": 308.7,
        "temp_max": 308.7,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 927,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 3.03,
        "deg": 234,
        "gust": 4.32
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-12 09:00:00"
    },
    {
      "dt": 1712923200,
      "main": {
        "temp": 302.35,
        "feels_like": 302.7,
        "temp_min": 302.35,
        "temp_max": 302.35,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 926,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 2.86,
        "deg": 253,
        "gust": 3.76
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-12 12:00:00"
    },
    {
      "dt": 1712934000,
      "main": {
        "temp": 294.95,
        "feels_like": 295.25,
        "temp_min": 294.95,
        "temp_max": 294.95,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 928,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 46
      },
      "wind": {
        "speed": 0.48,
        "deg": 255,
        "gust": 1.35
      },
      "visibility": 10000,
      "pop": 0.15,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-12 15:00:00"
    },
    {
      "dt": 1712944800,
      "main": {
        "temp": 293.69,
        "feels_like": 294.05,
        "temp_min": 293.69,
        "temp_max": 293.69,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 928,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 0.42,
        "deg": 146,
        "gust": 0.76
      },
      "visibility": 10000,
      "pop": 0.12,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-12 18:00:00"
    },
    {
      "dt": 1712955600,
      "main": {
        "temp": 292.91,
        "feels_like": 293.29,
        "temp_min": 292.91,
        "temp_max": 292.91,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 927,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 65
      },
      "wind": {
        "speed": 0.41,
        "deg": 24,
        "gust": 0.75
      },
      "visibility": 10000,
      "pop": 0.03,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-12 21:00:00"
    },
    {
      "dt": 1712966400,
      "main": {
        "temp": 292.8,
        "feels_like": 293.09,
        "temp_min": 292.8,
        "temp_max": 292.8,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 927,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 43
      },
      "wind": {
        "speed": 0.9,
        "deg": 42,
        "gust": 0.89
      },
      "visibility": 10000,
      "pop": 0.02,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-13 00:00:00"
    },
    {
      "dt": 1712977200,
      "main": {
        "temp": 300.97,
        "feels_like": 301.16,
        "temp_min": 300.97,
        "temp_max": 300.97,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 930,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 39
      },
      "wind": {
        "speed": 0.62,
        "deg": 169,
        "gust": 0.71
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-13 03:00:00"
    },
    {
      "dt": 1712988000,
      "main": {
        "temp": 307.91,
        "feels_like": 307.48,
        "temp_min": 307.91,
        "temp_max": 307.91,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 931,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 23
      },
      "wind": {
        "speed": 1.69,
        "deg": 237,
        "gust": 2.24
      },
      "visibility": 10000,
      "pop": 0.08,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-13 06:00:00"
    }
  ],
  "city": {
    "id": 1268327,
    "name": "Kalpatta",
    "coord": {
      "lat": 11.6106,
      "lon": 76.0822
    },
    "country": "IN",
    "population": 0,
    "timezone": 19800,
    "sunrise": 1712537270,
    "sunset": 1712581603
  }
}

export const getFullDayForcast = () => {
  const { city, list } = mockData;
  const formattedForecast = list.slice(0, 8).map((forecast) => {
    const tempInCelsius = Math.round(forecast.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
    const tempInFahrenheit = Math.round((tempInCelsius * 9) / 5 + 32); // Convert temperature from Celsius to Fahrenheit
    const dateTime = formatDate(forecast.dt_txt)
    return { ...forecast, main: { ...forecast.main, tempInCelsius, tempInFahrenheit, dateTime }, wind: { ...forecast.wind } };
  });
  return { city, formattedForecast };
};