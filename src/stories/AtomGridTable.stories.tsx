import type { Meta, StoryObj } from '@storybook/react';
import { AtomGridTable } from '@sanbira/atom-grid-table';
import '@sanbira/atom-grid-table/style.css';

const meta = {
  title: 'Examples/Basic Examples',
  component: AtomGridTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Core properties
    colOptions: {
      description: 'Array of column configuration objects that define the table columns',
      control: 'object',
    },
    rows: {
      description: 'Array of row objects that contain cell data for the table',
      control: 'object',
    },
    
    // Selection properties
    isHasSelect: {
      description: 'Enables row selection functionality',
      control: 'boolean',
    },
    selectedRows: {
      description: 'Array of row identifiers that are currently selected',
      control: 'object',
    },
    setSelected: {
      description: 'Callback function that is called when selection changes',
      control: false,
    },
    
    // Styling properties
    className: {
      description: 'Additional CSS class to apply to the table',
      control: 'text',
    },
    tableTheme: {
      description: 'Theme name to apply to the table',
      control: 'text',
    },
    tableStyleOptions: {
      description: 'Style configuration object for the table appearance',
      control: 'object',
    },
    selectionArea: {
      description: 'Defines the clickable area for row selection',
      control: 'text',
    },
    
    // Loading state
    isLoading: {
      description: 'Shows loading state when true',
      control: 'boolean',
    },
    
    // Pagination properties
    paginationOptions: {
      description: 'Configuration object for pagination functionality',
      control: 'object',
    },
    
    // Sorting properties
    sortingOptions: {
      description: 'Configuration object for sorting functionality',
      control: 'object',
    },
    
    // Event handlers
    onPageOptionChange: {
      description: 'Callback when page/page size changes',
      control: false,
    },
    onSortOptionChange: {
      description: 'Callback when sorting changes',
      control: false,
    },
    onChange: {
      description: 'General callback for any table change',
      control: false,
    },
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
};

export const WithStyling: Story = {
  args: {
    ...Basic.args,
    tableStyleOptions: {
      isFirstRowHeader: true,
      isZebra: true,
      isStickyHeader: true,
      colorScheme: 'light',
    },
  },
};

export const WithSelection: Story = {
  args: {
    ...Basic.args,
    isHasSelect: true,
    // In a real app, you would manage this state with useState
    // and provide a real callback for setSelected
    selectedRows: ['1'],
  },
};

export const WithLoading: Story = {
  args: {
    ...Basic.args,
    isLoading: true,
    tableStyleOptions: {
      loaderRowsCount: 3,
    },
  },
};

export const WithPagination: Story = {
  args: {
    ...Basic.args,
    isPagination: true // Simplest way to enable pagination
  },
};

export const WithSorting: Story = {
  args: {
    ...Basic.args,
    sortingOptions: {
      // No configuration needed for basic sorting
    },
  },
};