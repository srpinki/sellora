import Header from "../components/Header";

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main>{children}</main>
    </div>
  );
}
