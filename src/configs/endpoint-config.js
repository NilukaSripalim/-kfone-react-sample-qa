/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

const apiBaseUrl = 'https://eff16ae0-0cfd-4eb1-83a9-6e69411bef74-prod.e1-us-east-azure.choreoapis.dev/aqiw/kfonechoreointegration/1.0.0'; // Should come from process.env.REACT_APP_API_ENDPOINT
const choreoAccessToken = "eyJ4NXQiOiJNR0l4TTJFM05UaG1NRFprTkdZd1l6SmhaR1F5WkRRMVltUTFOamxoWVdZd01HVmxZelpqT0RabVptTXhOak5oWW1Vek56WXhaREJoWWpabVpESTBOUSIsImtpZCI6Ik1HSXhNMkUzTlRobU1EWmtOR1l3WXpKaFpHUXlaRFExWW1RMU5qbGhZV1l3TUdWbFl6WmpPRFptWm1NeE5qTmhZbVV6TnpZeFpEQmhZalptWkRJME5RX1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDRmODY4Ni03ODQxLTRlOTUtODQ3OC1jY2YyNDIwOWFlOTkiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEiLCJuYmYiOjE2ODAwNjI5OTMsImF6cCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEiLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9vcmdrZm9uZXJlYWN0XC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjgwMDY2NTkzLCJpYXQiOjE2ODAwNjI5OTMsImp0aSI6IjhmMzEyM2FlLTU1NTItNDc1Yi1hMmM0LWJkZjkzZDkwZGFiNiIsImNsaWVudF9pZCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEifQ.h2-gdJyMMFwLO1i70Niaww2ZfXXUiFuwWKbmy2KC9vMoIezK_DgOE-3eo1_0s2PMejGkmPiZjKijNZRBtCrLaZv8ebzdbnJHPAyY5nOBbyQGyfBxgqq6JkjqAEpp404UcYdEXLZzBH7DfCgQLvwh25T8MSxbMGjMgKyazkj6da54nHQDTHfESYQTPdHLbkM49aebdaLWfqjuQeZMbTB_cpla_SAQmxXTmWQYYT1i5DzK7LDaIqItxemJtT_YJ8CkdlGdWvZL9nFAAd39QS4y4-c_sCJWpA59scbHp5llPJTw9rxG437KqDipwqHl5Tq2xfJJPe6mBsppZFlCKa7AkA"
const endpointConfig = {
  api: {
    choreoAccessToken,
    endpoints: {
      devices: `${apiBaseUrl}/orders`
    },
  },
};

export default endpointConfig;
