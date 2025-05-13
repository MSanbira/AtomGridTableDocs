import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // Enable syntax highlighting
      source: {
        language: "jsx",
        dark: true,
      },
    },
    // Add a storySort parameter to order stories
    options: {
      storySort: {
        order: [
          "Documentation",
          [
            "Introduction",
            "Basic Implementation",
            "Selection",
            "Sorting",
            "Pagination",
            "Resizable Columns",
            "Styling",
            "Context API",
            "Base Components",
            "TypeScript Types",
            "Material-UI Integration",
          ],
          "Examples",
          ["Basic Examples", "Advanced Examples"],
        ],
      },
    },
  },
};

export default preview;
