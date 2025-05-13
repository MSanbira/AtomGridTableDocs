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

export const Basic: Story = {
  args: {
    colOptions: [
      { label: 'id' },
      { label: 'name', width: '2fr' },
      { label: 'email', width: '2fr' },
    ],
    rows: [
      { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
      { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
      { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
    ],
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

export const WithSelection: Story = {
  args: {
    ...Basic.args,
    isHasSelect: true,
    // In a real app, you would manage this state with useState
    // and provide a real callback for setSelected
    selectedRows: ['1'],
  },
  parameters: {
    docs: {
      source: {
        code: `
const WithSelection = () => {
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

  // In a real app, you would manage this state with useState
  const [selectedRows, setSelected] = useState(['1']);

  return (
    <AtomGridTable 
      colOptions={colOptions} 
      rows={rows} 
      isHasSelect={true}
      selectedRows={selectedRows}
      setSelected={setSelected}
    />
  );
};
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

export const WithPagination: Story = {
  args: {
    ...Basic.args,
    isPagination: true // Simplest way to enable pagination
  },
  parameters: {
    docs: {
      source: {
        code: `
const WithPagination = () => {
  const colOptions = [
    { label: 'id' },
    { label: 'name', width: '2fr' },
    { label: 'email', width: '2fr' },
  ];
  
  const rows = [
    { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
    { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
    { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
    // Additional rows would be here in a real application
  ];

  return (
    <AtomGridTable 
      colOptions={colOptions} 
      rows={rows} 
      isPagination={true} // Simplest way to enable pagination
    />
  );
};
        `
      }
    }
  }
};

export const WithSorting: Story = {
  args: {
    ...Basic.args,
    sortingOptions: {
      // No configuration needed for basic sorting
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
const WithSorting = () => {
  const colOptions = [
    { label: 'id', name: 'id' },       // 'name' is required for sorting
    { label: 'name', name: 'name', width: '2fr' },
    { label: 'email', name: 'email', width: '2fr' },
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
      sortingOptions={{
        // No configuration needed for basic sorting
      }}
    />
  );
};
        `
      }
    }
  }
};