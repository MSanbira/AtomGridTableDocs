import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AtomGridTable, AtomGridTableProvider, type TableProps, type CustomComponents } from "@sanbira/atom-grid-table";
import "@sanbira/atom-grid-table/style.css";
import { Skeleton, Tooltip, Typography } from "@mui/material";

const meta = {
  title: "Examples/Advanced Examples",
  component: AtomGridTable,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AtomGridTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Create a separate React component for the SelectionExample story
const SelectionExampleComponent = () => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>(["1", "3"]);

  return (
    <AtomGridTable
      colOptions={[{ label: "ID" }, { label: "Name", width: "2fr" }, { label: "Email", width: "2fr" }]}
      rows={[
        {
          selectIdentifier: "1",
          cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }],
        },
        {
          selectIdentifier: "2",
          cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }],
        },
        {
          selectIdentifier: "3",
          cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }],
        },
      ]}
      isHasSelect={true}
      selectedRows={selectedRows}
      setSelected={(selected) => setSelectedRows(selected)}
    />
  );
};

export const SelectionExample: Story = {
  render: () => <SelectionExampleComponent />,
  args: {
    colOptions: [{ label: "ID" }, { label: "Name", width: "2fr" }, { label: "Email", width: "2fr" }],
    rows: [
      {
        selectIdentifier: "1",
        cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }],
      },
      {
        selectIdentifier: "2",
        cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }],
      },
      {
        selectIdentifier: "3",
        cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }],
      },
    ],
    isHasSelect: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
import { useState } from 'react';
import { AtomGridTable } from '@sanbira/atom-grid-table';

const SelectionExample = () => {
  // Pre-select rows '1' and '3'
  const [selectedRows, setSelectedRows] = useState(['1', '3']);
  
  return (
      <AtomGridTable
        colOptions={[
          { label: 'ID' },
          { label: 'Name', width: '2fr' },
          { label: 'Email', width: '2fr' },
        ]}
        rows={[
          { 
            selectIdentifier: '1',
            cells: [
              { content: '1' }, 
              { content: 'John Doe' }, 
              { content: 'john@example.com' }
            ] 
          },
          { 
            selectIdentifier: '2',
            cells: [
              { content: '2' }, 
              { content: 'Jane Smith' }, 
              { content: 'jane@example.com' }
            ] 
          },
          { 
            selectIdentifier: '3',
            cells: [
              { content: '3' }, 
              { content: 'Bob Johnson' }, 
              { content: 'bob@example.com' }
            ] 
          },
        ]}
        isHasSelect={true}
        selectedRows={selectedRows}
        setSelected={setSelectedRows}
      />
  );
};
        `,
      },
    },
  },
};

// Create a component with AtomGridTable wrapped in AtomGridTableProvider
const ContextExampleComponent = (props: {
  defaultTableOptions?: Partial<TableProps>;
  customComponents?: CustomComponents;
  agtProps?: Partial<TableProps>;
}) => {
  const { defaultTableOptions, customComponents, agtProps } = props;

  return (
    <AtomGridTableProvider defaultTableOptions={defaultTableOptions} customComponents={customComponents}>
      <AtomGridTable
        colOptions={[{ label: "ID" }, { label: "Name", width: "2fr" }, { label: "Email", width: "2fr" }]}
        rows={[
          { cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }] },
          { cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }] },
          { cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }] },
        ]}
        {...agtProps}
      />
    </AtomGridTableProvider>
  );
};

export const ContextExample: StoryObj<typeof meta> = {
  render: () => (
    <ContextExampleComponent
      defaultTableOptions={{
        tableStyleOptions: {
          isZebra: true,
          isStickyHeader: true,
          isNoXCellBorders: true,
        },
      }}
    />
  ),
  args: {
    colOptions: [{ label: "ID" }, { label: "Name", width: "2fr" }, { label: "Email", width: "2fr" }],
    rows: [
      { cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }] },
      { cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }] },
      { cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }] },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
import { AtomGridTable, AtomGridTableProvider } from '@sanbira/atom-grid-table';

const ContextExample = () => {
  return (
    <AtomGridTableProvider 
      defaultTableOptions={{
        tableStyleOptions: {
          isZebra: true,
          isStickyHeader: true,
          isNoXCellBorders: true
        }
      }}
    >
      <AtomGridTable
        colOptions={[
          { label: 'ID' },
          { label: 'Name', width: '2fr' },
          { label: 'Email', width: '2fr' },
        ]}
        rows={[
          { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
          { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
          { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
        ]}
      />
    </AtomGridTableProvider>
  );
};
        `,
      },
    },
  },
};

export const MUIComponentsExample: StoryObj<typeof meta> = {
  render: () => (
    <ContextExampleComponent
      defaultTableOptions={{
        tableStyleOptions: {
          loaderRowsCount: 3,
        },
      }}
      customComponents={{
        tooltip: Tooltip,
        typography: Typography,
        skeleton: Skeleton,
        // TODO: Add these back in once type fix
        // iconButton: IconButton,
        // select: Select,
        // checkbox: Checkbox,
      }}
      agtProps={{
        colOptions: [
          { label: "ID", tooltip: "This is a tooltip!" },
          { label: "Name", width: "2fr" },
          { label: "Email", width: "2fr" },
        ],
        tableStyleOptions: {
          colorScheme: "light",
        },
      }}
    />
  ),
  args: {
    colOptions: [
      { label: "ID", tooltip: "This is a tooltip!" },
      { label: "Name", width: "2fr" },
      { label: "Email", width: "2fr" },
    ],
    rows: [
      { cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }] },
      { cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }] },
      { cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }] },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
import { AtomGridTable, AtomGridTableProvider } from '@sanbira/atom-grid-table';

const ContextExample = () => {
  return (
    <AtomGridTableProvider 
      defaultTableOptions={{
        tableStyleOptions: {
          isZebra: true,
          isStickyHeader: true,
          isNoXCellBorders: true
        }
      }}
    >
      <AtomGridTable
        colOptions={[
          { label: 'ID' },
          { label: 'Name', width: '2fr' },
          { label: 'Email', width: '2fr' },
        ]}
        rows={[
          { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
          { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
          { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
        ]}
      />
    </AtomGridTableProvider>
  );
};
        `,
      },
    },
  },
};
