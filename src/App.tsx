import { AtomGridTable } from '@sanbira/atom-grid-table';
import '@sanbira/atom-grid-table/style.css';

function App() {
  return (
    <div>
      <AtomGridTable
        colOptions={[
          { name: "id", label: "ID", width: "70px" },
          { name: "name", label: "Name", width: "130px" },
        ]}
        rows={[
          { cells: [{ content: "1" }, { content: "Alice" }] },
          { cells: [{ content: "2" }, { content: "Bobie" }] },
        ]}
      />
    </div>
  );
}

export default App;
