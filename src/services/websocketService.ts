// websocketService.js
type WebSocketAction = {
  action: string;
  payload: Record<string, any>;
};
export class WebSocketService {
  url: string;
  ws: WebSocket | null;
  eventHandlers: Record<string, (message: WebSocketAction) => void>;
  constructor(url: string) {
    this.url = url;
    this.ws = null;
    this.eventHandlers = {};
  }

  connect() {
    if (this.ws) {
      return;
    }
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log("WebSocket connected");
    };

    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const action = message.action;
      if (this.eventHandlers[action]) {
        this.eventHandlers[action](message);
      }
    };

    this.ws.onclose = () => {
      console.log("WebSocket connection closed");
      this.ws = null;
    };

    this.ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }

  sendMessage(action: string, payload: Record<string, any>) {
    const message = JSON.stringify({ action, ...payload });
    if (this.ws) this.ws.send(message);
  }

  on(action: string, handler: (message: WebSocketAction) => void) {
    this.eventHandlers[action] = handler;
  }

  close() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}
