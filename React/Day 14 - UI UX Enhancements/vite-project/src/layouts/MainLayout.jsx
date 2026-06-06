const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex flex-col">
          <span>🎬 CineVault</span>
          <span className="text-sm font-normal">Discover Movies</span>
        </h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Favorites</a>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
};
export default MainLayout;
