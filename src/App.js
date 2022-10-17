import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#",
    },
    space: {},
    fonts: {},
  },
});

function App() {
  return (
    <NextUIProvider theme={theme}>
      <div className="App bg-light">
        <Routes>
          <Route
            element={
              <div className="">
                <Navbar />
                <Outlet />
              </div>
            }
          >
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </NextUIProvider>
  );
}

export default App;
