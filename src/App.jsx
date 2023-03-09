import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import React, { Suspense, useState } from "react";
// import Error from "./components/error";

const Main = React.lazy(() => import("./components/main"));
const Assignment = React.lazy(() => import("./components/assignment"));

function App() {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <div className="h-screen flex justify-center items-center">
      <div class="spinner-border text-green-400" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div>
      <Suspense
        fallback={
          <div>
            <div class="center">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<Main></Main>} path="/"></Route>
          <Route element={<Assignment></Assignment>} path="/assignment"></Route>

          {/* <Route element={<Error></Error>} path="*" exact></Route> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
