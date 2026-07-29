import Navbar from "@/components/Navbar";

export default function AdminLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container">
        {children}
      </main>
    </>
  );
}
