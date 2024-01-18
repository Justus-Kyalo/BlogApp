import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Home from "./pages/Home";
import "./styles.scss"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/write" element={<Write />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
