const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">
        <h1 className="text-2xl font-bold">🎥 CineValut</h1>
      </header>
      <main className="max-w-7xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
};
export default MainLayout;
