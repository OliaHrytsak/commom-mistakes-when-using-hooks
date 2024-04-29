const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

console.log("WebSocket server running on port 8080");

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  // Send a message to the client every second
  const interval = setInterval(() => {
    ws.send("Hello from WebSocket server!");
  }, 1000);

  ws.on("close", function () {
    console.log("Client disconnected");
    clearInterval(interval); // Clear the interval when the client disconnects
  });
});
