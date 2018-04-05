const BASE_MEDIA_URL = "https://demo.front-commerce.com";

const createMediaUrlFromPath = path => {
  if (path && path.indexOf("http") !== -1) {
    return path;
  }

  return BASE_MEDIA_URL + path;
};

export default createMediaUrlFromPath;
