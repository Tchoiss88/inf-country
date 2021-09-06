export const addCountry = country => {
  return {
    type: 'ADD_COUNTRY_SIDEBAR',
    payload: country,
  };
};

export const removeCountry = country => {
  return {
    type: 'REMOVE_COUNTRY_SIDEBAR',
    payload: country,
  };
};
