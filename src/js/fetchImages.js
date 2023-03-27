import axios from 'axios';
export { fetchImages };

// Встановлення значення ключа API
const API_KEY = '34641575-5b7af07926b499b252d30275f';
const API_URL = 'https://pixabay.com/api/';

async function fetchImages(currentQuery, pageNumber, per_page) {
  const params = {
    key: API_KEY,
    q: currentQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: per_page,
  };

  try {
    const response = await axios.get(API_URL, { params });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
