import Header from "./components/header";
import hoshino from "./hoshino.svg";
import "./index.css";
import Contact from "./pages/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>;
  return (
    <div>
      <Header />
      <div className="flex bg-black">
        <div className="w-[50%] max-h-[60%]">
          <img src={hoshino} className="ml-20" alt="logo" />
        </div>
        <div className="w-[50%]">
          <div>
            <div class="max-w-md mt-10">
              <input
                placeholder="Username"
                type="text"
                id="large-input"
                class="block p-4 usernameClass w-64"
              />
            </div>
            <div class="max-w-md mt-10">
              <input
                placeholder="Username"
                type="text"
                id="large-input"
                class="block p-4 infoClass w-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
