import "react-native-url-polyfill/auto"; // For URL and Fetch APIs
import { registerRootComponent } from "expo";
import { ReadableStream } from "web-streams-polyfill";

import App from "./App"; // Polyfill ReadableStream

// Add to global for environments that need it
if (typeof global !== "undefined") {
  global.ReadableStream = ReadableStream;
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
