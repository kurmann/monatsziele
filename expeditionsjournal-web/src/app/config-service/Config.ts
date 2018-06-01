export interface Config {
  connections: Connections;
}
export interface Connections {
  unsplash: Unsplash;
}
export interface Unsplash {
  url: string;
  clientId: string;
}
