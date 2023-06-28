export const BASE_URL = process.env.NODE_ENV!=='production'?"http://localhost:3001/api/":"/api/"
export const BASE_URL_MUSIC =
  process.env.NODE_ENV !== "production" ? "http://localhost:3001/music/" : "/music/";
