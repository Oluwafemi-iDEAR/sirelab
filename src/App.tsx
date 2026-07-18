import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home/Home";

const About = lazy(() => import("./pages/About/About"));
const Publications = lazy(() => import("./pages/Publications/Publications"));
const Conferences = lazy(() => import("./pages/Conferences/Conferences"));
const Courses = lazy(() => import("./pages/Courses/Courses"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-slate-400">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <SiteLayout>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conferences-workshops" element={<Conferences />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  );
}
