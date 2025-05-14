import type { Meta, StoryObj } from '@storybook/react';
import { AtomGridTable } from '@sanbira/atom-grid-table';
import '@sanbira/atom-grid-table/style.css';

const meta = {
  title: 'Examples/Basic Examples',
  component: AtomGridTable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AtomGridTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for examples
const sampleRows = [
  { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
  { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
  { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
];

export const Basic: Story = {
  args: {
    colOptions: [
      { label: 'id' },
      { label: 'name', width: '2fr' },
      { label: 'email', width: '2fr' },
    ],
    rows: sampleRows,
  },
  parameters: {
    docs: {
      source: {
        code: `
const Basic = () => {
  const colOptions = [
    { label: 'id' },
    { label: 'name', width: '2fr' },
    { label: 'email', width: '2fr' },
  ];
  
  const rows = [
    { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
    { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
    { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
  ];

  return <AtomGridTable colOptions={colOptions} rows={rows} />;
};
        `
      }
    }
  }
};

export const WithStyling: Story = {
  args: {
    ...Basic.args,
    className: 'custom-styled-table',
    tableTheme: 'purple-theme',
    tableStyleOptions: {
      isFirstRowHeader: true,
      isZebra: true,
      isStickyHeader: true,
      colorScheme: 'light',
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
// Define custom CSS variables
const CustomStyledTable = () => {
  return (
    <AtomGridTable
      colOptions={colOptions}
      rows={rows}
      className="custom-styled-table"
      tableTheme="purple-theme"
      tableStyleOptions={{
        isFirstRowHeader: true,
        isZebra: true,
        isStickyHeader: true,
        colorScheme: 'light',
      }}
    />
  );
};

/* In your CSS file */
.custom-styled-table.AGT-table-wrapper,
.purple-theme.AGT-table-wrapper {
  --AGT-c-primary: #9c00ff;
  --AGT-c-header: #f0d4ff;
  --AGT-c-line: #d87aff;
  --AGT-c-active: #e0b0ff;
  --AGT-c-hover: #faf0ff;
  --AGT-base-font-size: 16px;
  --AGT-c-text-primary: #5d0075;
  --AGT-border-width: 2px;
  --AGT-base-size: 10px;
}
        `
      }
    }
  }
};

export const WithLoading: Story = {
  args: {
    ...Basic.args,
    isLoading: true,
    tableStyleOptions: {
      loaderRowsCount: 3,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
const WithLoading = () => {
  const colOptions = [
    { label: 'id' },
    { label: 'name', width: '2fr' },
    { label: 'email', width: '2fr' },
  ];
  
  // Rows aren't displayed when loading is true
  const rows = [];

  return (
    <AtomGridTable 
      colOptions={colOptions} 
      rows={rows} 
      isLoading={true}
      tableStyleOptions={{
        loaderRowsCount: 3, // Show 3 skeleton rows while loading
      }}
    />
  );
};
        `
      }
    }
  }
};

export const WithResizableColumns: Story = {
  args: {
    colOptions: [
      { label: 'ID' },
      { label: 'Name', width: '2fr', isResizable: true, resizeOptions: { min: 100, max: 300 } },
      { label: 'Email', width: '2fr', isResizable: true },
    ],
    rows: sampleRows,
    tableStyleOptions: {
      isZebra: true,
      isStickyHeader: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
const WithResizableColumns = () => {
  const colOptions = [
    { label: 'ID' },
    { 
      label: 'Name', 
      width: '2fr', 
      isResizable: true, 
      resizeOptions: { min: 100, max: 300 } 
    },
    { label: 'Email', width: '2fr', isResizable: true },
  ];
  
  const rows = [
    { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
    { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
    { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
  ];

  return (
    <AtomGridTable 
      colOptions={colOptions} 
      rows={rows}
      tableStyleOptions={{
        isZebra: true,
        isStickyHeader: true,
      }}
    />
  );
};
        `
      }
    }
  }
};

export const WithDarkTheme: Story = {
  args: {
    ...Basic.args,
    tableStyleOptions: {
      isZebra: true,
      isStickyHeader: true,
      colorScheme: "dark",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
const WithDarkTheme = () => {
  const colOptions = [
    { label: 'ID' },
    { label: 'Name', width: '2fr' },
    { label: 'Email', width: '2fr' },
  ];
  
  const rows = [
    { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
    { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
    { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
  ];

  return (
    <AtomGridTable 
      colOptions={colOptions} 
      rows={rows}
      tableStyleOptions={{
        isZebra: true,
        isStickyHeader: true,
        colorScheme: "dark",
      }}
    />
  );
};
        `
      }
    }
  }
};
