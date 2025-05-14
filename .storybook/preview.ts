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
            "TypeScript Types",
            "Selection",
            "Resizable Columns",
            "Styling",
            "Sorting",
            "Pagination",
            "API Integration",
            "Context API",
            "Material-UI Integration",
            "Base Components",
          ],
          "Examples",
          ["Basic Examples", "Advanced Examples"],
        ],
      },
    },
  },
};

export default preview;
