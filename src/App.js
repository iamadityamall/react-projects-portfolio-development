import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Error, SharedLayout } from "./Pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
