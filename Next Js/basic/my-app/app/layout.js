import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="bg-amber-500 p-5">Header</div>
      <h1 className="font-bold text-black">Welcome Prem now everything will run on updated version</h1>
      
      <body>{children}</body>
      <footer className="bg-pink-400 p-4">
        <h1>This our footer Page</h1>
      </footer>
    </html>
  )
}