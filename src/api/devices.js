/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */
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
        "Authorization": `Bearer ${endpointConfig.api.choreoAccessToken}`
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch the devices');
  }
}
