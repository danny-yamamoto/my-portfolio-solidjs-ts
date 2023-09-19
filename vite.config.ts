import solid from "solid-start/vite";
import { defineConfig } from "vite";
import cloudflare from "solid-start-cloudflare-pages"; // Comment out when starting locally.

export default defineConfig({
  //plugins: [solid()],
  plugins: [solid({ adapter: cloudflare({}) })],  // Comment out when starting locally.
});
