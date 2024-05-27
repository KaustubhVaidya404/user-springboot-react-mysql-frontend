import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import UserList from "./components/UserList";
import AllUsers from "./components/AllUsers";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/userpaging" element={<UserList />} />
          <Route path="/allusers" element={<AllUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
