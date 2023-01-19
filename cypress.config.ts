import { defineConfig } from "cypress";
// require('cypress-xpath')
// import  "cypress-xpath";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
  },
});
