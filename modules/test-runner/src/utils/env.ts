export const env = {
  adminToken: process.env.VECTOR_ADMIN_TOKEN || "cxt1234",
  aliceUrl: process.env.VECTOR_ALICE_URL || "http://alice:8000",
  authUrl: process.env.VECTOR_AUTH_URL || "http://auth:5040",
  bobUrl: process.env.VECTOR_BOB_URL || "http://bob:8000",
  carolUrl: process.env.VECTOR_CAROL_URL || "http://carol:8000",
  chainProviders: JSON.parse(process.env.VECTOR_CHAIN_PROVIDERS || "{}"),
  chainAddresses: JSON.parse(process.env.VECTOR_CHAIN_ADDRESSES || "{}"),
  daveUrl: process.env.VECTOR_DAVE_URL || "http://dave:8000",
  logLevel: process.env.VECTOR_LOG_LEVEL || "error",
  natsUrl: process.env.VECTOR_NATS_URL || "http://nats:4222",
  nodeUrl: process.env.VECTOR_NODE_URL || "http://node:8000",
  rogerUrl: process.env.VECTOR_ROGER_URL || "http://roger:8000",
  routerUrl: process.env.VECTOR_ROUTER_URL || "http://router:8008",
  sugarDaddy: process.env.SUGAR_DADDY || "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat",
  port: parseInt(process.env.VECTOR_PORT || "8888"),
};
