export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {year} Vincent Mugondora. All rights reserved.
      </div>
    </footer>
  )
}
