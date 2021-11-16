import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8888 });

wss.on("connection", (ws, request, client) => {
  console.log(ws);
  console.log(request);
  console.log(client);
  ws.on("message", (message) => {
    console.log("received: %s", message);
    ws.send(`server received`);
  });
});
