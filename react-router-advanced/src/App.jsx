import { Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; // dynamic route

export default function App() {
  return (
    <div className="p-6">
      <nav className="space-x-4 border-b pb-2 mb-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/101">Blog 101</Link>
        <Link to="/blog/202">Blog 202</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected profile route will wrap Profile (Step 3) */}
        <Route path="/profile/*" element={<Profile />} />

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/profile/*" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
      </Routes>
    </div>
  );
}
