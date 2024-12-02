import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./home";
import BootstrapUi from "./bootstrap-ui";
import MaterialUi from "./material-ui";
import ApiCallExample from "./api-call-example";
import ApiCallDetails from "./api-call-details";
import AddEditUser from "./add-edit-user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bootstrap" element={<BootstrapUi />}></Route>
        <Route path="/material/:id/:username" element={<MaterialUi />}></Route>
        <Route path="/api-example" element={<ApiCallExample />}></Route>
        <Route path="/api-details/:id" element={<ApiCallDetails />}></Route>
        <Route path="/add-user" element={<AddEditUser />}></Route>
        <Route path="/edit-user/:id" element={<AddEditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
