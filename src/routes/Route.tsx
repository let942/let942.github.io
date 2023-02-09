import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Contact from "../pages/Contact";
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Projects from "../pages/Projects";
import RootLayout from "../components/RootLayout";
import Technologies from "../pages/Technologies";

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<NotFound />}
    >
      <Route errorElement={<NotFound />}>
        <Route index element={<Profile />} />
        <Route index element={<Profile />} />
        <Route
          path="/technologies"
          element={<Technologies />}
        />
        <Route
            path="/projects"
            element={<Projects />}
          />
        <Route
          path="/contact"
          element={<Contact/>}
        />
      
      </Route>
    </Route>
  )
);

export default router;
