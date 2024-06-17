import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "your-github-client-id",
  token: "your-github",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        fields: [
          {
            name: "Title",
            type: "string",
          },
        ],
      },
    ],
  },
});
