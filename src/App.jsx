import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import Allnotes from "./components/allnotes/Allnotes";
import CreateNew from "./components/createNew/CreateNew";
import NoteFormat from "./components/noteFormat/NoteFormat";
import Edit from "./components/edit/Edit";
function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Allnotes />} />
        <Route path="/create" element={<CreateNew />} />
        <Route path="/:id">
          <Route index element={<NoteFormat />} />
          <Route path="edit" element={<Edit />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
