import { WebSocket } from "ws";

const client = new WebSocket("ws://localhost:8888");
// const client = new WebSocket("ws://52.187.28.140:3001");

const subscribe = {
  type: "subscribe",
  payload: {
    token: `Jack`,
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
