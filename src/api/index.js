import { endpoints, API_URL } from './config';
import ky from 'ky';

const api = ky.create({
	headers: {
		'content-type': 'application-json'
  },
  prefixUrl: API_URL,
  searchParams: {
    classification_id: 5,
    device_identifier: 'web',
    locale: 'es',
    market_code: 'es'
  }
});

export const fetcher = (endpoint, method = 'GET', body) =>
  fetch(
    `${API_URL}/${endpoint}?classification_id=5&device_identifier=web&locale=es&market_code=es`,
    {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : null
    }
  ).then((res) => res.json())
  .then(json => json && json.data);

export const fetchContents = (id) => {
  return api.get(`${endpoints.lists}/${id}`).json();
};

export const fetchContent = (id) => {
  return api.get(`${endpoints.movies}/${id}`).json();
};

export const playTrailer = ({ type, id }) => {
  const body = {
      "audio_language": "SPA",
      "audio_quality": "2.0",
      "content_id": id,
      "content_type": type,
      "device_serial": "device_serial_1",
      "device_stream_video_quality": "FHD",
      "player": "web:PD-NONE",
      "subtitle_language": "MIS",
      "video_type": "trailer"
  }
  return api.post(`me/${endpoints.streamings}/`, { json: body }).json();
};
