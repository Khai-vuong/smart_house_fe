import NavBar from "../components/Navbar.jsx";

export default function HomePage() {
  return (
    <div className="w-full h-full bg-blue-300">
      <h1>Home Page</h1>
      <NavBar selecting={1}></NavBar>
    </div>
  );
}
