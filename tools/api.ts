export const getApiUrl = (url: string, query?: Record<string, any>) => {
  if (query) {
    const queryString = Object.keys(query)
      .filter((key) => query[key] !== undefined && query[key] !== null)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
      )
      .join("&");

    return `${process.env.EXPO_PUBLIC_API_HOST}${url}?${queryString}`;
  } else {
    return `${process.env.EXPO_PUBLIC_API_HOST}${url}`;
  }
};
