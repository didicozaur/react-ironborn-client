import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartmentsList" element={<ApartmentDetails />} />

        <Route path="/apartment/new" element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
