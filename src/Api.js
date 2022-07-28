import axios from 'axios';

export default axios.create( {
  baseURL: `https://api.alkareemcitylhr.com/api/v1/`
} );