import type { Meta, StoryObj } from '@storybook/react';
import { AtomGridTable } from '@sanbira/atom-grid-table';
import '@sanbira/atom-grid-table/style.css';

const meta = {
  title: 'Main/Basic AtomGridTable implementation',
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
      { name: 'id', label: 'ID', width: '70px' },
      { name: 'name', label: 'Name', width: '130px' },
      { name: 'email', label: 'Email', width: '200px' },
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