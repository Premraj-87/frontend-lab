// app/layout.js 
import './globals.css'

export const metadata = {
  title: 'My Next App',
  description: 'Simple Root Layout',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-3 bg-blue-300">
          <h1>My Next App</h1>
        </header>

        <main>{children}</main>

        <footer className="p-3 bg-gray-300">
          © 2026 My Next App
        </footer>
      </body>
    </html>
  )
}
