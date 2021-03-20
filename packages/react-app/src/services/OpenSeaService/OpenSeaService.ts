import axios from 'axios';
<<<<<<< HEAD

=======
>>>>>>> add OpenSea feed
import { ITEMS_LIMIT, OPEN_SEA_API } from './config';

const OpenSeaService = () => {
  const instance = axios.create({
    baseURL: OPEN_SEA_API
  });

  const getAssets = async (offset: number) =>
    instance
      .get('/assets', {
        params: {
          order_by: 'visitor_count',
          order_direction: 'desc',
          limit: ITEMS_LIMIT,
          offset
        }
      })
      .then(res => res.data)
      .catch(err => {
        console.error('Error with OpenSeaService : ', err);
      });

  return { getAssets };
};

export default OpenSeaService();
