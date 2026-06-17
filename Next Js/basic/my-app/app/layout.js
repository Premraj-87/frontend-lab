import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className="bg-amber-500 p-5">Header</header>
      <body>{children}</body>
      <footer className="bg-pink-400 p-4">
        <h1>This our footer Page</h1>
      </footer>
    </html>
  )
}