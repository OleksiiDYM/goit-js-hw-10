const BASE_URL = 'https://restcountries.com/v3.1/name';

const fetchCountries = name => {
  response => {
    if (response.status === 404) {
      return Promise.reject(new Error());
    }
  };
};

export { fetchCountries };
