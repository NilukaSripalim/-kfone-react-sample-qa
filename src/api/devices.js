import {AsgardeoSPAClient} from '@asgardeo/auth-react';
import endpointConfig from '../configs/endpoint-config';

const request = requestConfig =>
  AsgardeoSPAClient.getInstance()
    .httpRequest(requestConfig)
    .then(response => response)
    .catch(error => error);

/**
 * Fetches the list of devices using the REST API.
 *
 * @async
 * @function
 * @returns {Promise<Object>} Devices response.
 * @throws {Error} If the API request fails.
 */
export async function fetchDevices() {
  const endpoint = `${endpointConfig.api.endpoints.devices}`;

  try {
    const response = await request({
      method: 'get',
      url: endpoint,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch the devices');
  }
}
