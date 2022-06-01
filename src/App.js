import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Error, SharedLayout } from "./Pages/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const {isDarkmode} = useSelector(store => store.navbar);

  useEffect(() => {
    if (isDarkmode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  })
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
