import { WebSocket } from "ws";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// const client = new WebSocket("ws://localhost:3001");
// const client = new WebSocket("ws://52.187.28.140:3001");
const client = new WebSocket("wss://tt-dev.wistron.com/websocket");

const subscribe = {
  type: "subscribe",
  payload: {
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lQSI6IkhPV0FSRCBIVU5HIiwibmFtZSI6Iua0que0ueiIqiIsImVtcGxpZCI6IjEwNzExMzA4IiwiZW1haWxBZGRyZXNzQSI6Ikhvd2FyZF9IdW5nQHdpc3Ryb24uY29tIiwiaWF0IjoxNjI5Njg3NTg0fQ.ho4fSjJwW6PVFobzjGnjidPpe92wnQm0A4w3mSwB57c`,
    // token: `Howard`,
  },
};

const request = {
  type: "request",
  method: "POST",
  path: "/use_case/1/test",
  payload: {
    previous_value: ``,
    value: ``,
    editor: ``,
    editTime: ``,
  },
};

client.on("open", () => {
  client.send(JSON.stringify(subscribe));
});

client.on("message", (message) => {
  console.log(`received: ${message}`);
});

client.on("ping", (msg) => {
  console.log(`receive a ping from server`);
});

client.on("close", (msg) => {
  process.exit(0);
});

const run = async () => {
  while (1) {
    await sleep(3000);
    // client.send(JSON.stringify(request));
  }
};

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

run();
