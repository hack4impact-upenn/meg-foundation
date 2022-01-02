import qs from 'query-string';

const setWithoutReload = (qsValue) => {
  const newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    qsValue;
  window.history.pushState({ path: newurl }, '', newurl);
};

const getQueryStringValue = (key, queryString = window.location.search) => {
  const values = qs.parse(queryString);
  return values[key];
};

const setQueryStringValue = (
  key,
  value,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  const newQsValue = qs.stringify({
    ...values,
    [key]: value,
  });
  setWithoutReload(`?${newQsValue}`);
};

export { setWithoutReload, getQueryStringValue, setQueryStringValue };
