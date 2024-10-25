import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Lazy load other pages
const Discover = React.lazy(() => import('./pages/Discover'));
const PlanTrip = React.lazy(() => import('./pages/PlanTrip'));
const Community = React.lazy(() => import('./pages/Community'));
const About = React.lazy(() => import('./pages/About'));
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/plan-trip" element={<PlanTrip />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;