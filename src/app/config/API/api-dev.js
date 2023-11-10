import { HTTPS, PORT, trailURL, URL } from "./api_url";

const hostUrl = `${HTTPS}://${URL}${PORT ? ":" + PORT : ""}`;
const endpoint = `${HTTPS}://${URL}${PORT ? ":" + PORT : ""}${trailURL}`;

const config = {
  protocol: HTTPS,
  host: URL,
  port: PORT,
  apiUrl: trailURL,
  endpoint: endpoint,
  hostUrl: hostUrl,
};
export default config;
