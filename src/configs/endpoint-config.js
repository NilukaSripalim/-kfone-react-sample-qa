const asgardeoBaseUrl = process.env.REACT_APP_ASGARDEO_BASE_URL;
const apiBaseUrl = 'https://choreo.api'; // Should come from process.env.REACT_APP_API_ENDPOINT

const endpointConfig = {
  api: {
    apiBaseUrl,
    asgardeoBaseUrl,
    endpoints: {
      devices: `${apiBaseUrl}/orders`
    },
  },
};

export default endpointConfig;
