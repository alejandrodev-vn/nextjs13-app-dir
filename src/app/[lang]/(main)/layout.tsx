export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-400">
      <h1>Feeds page</h1>
      {children}
    </div>
  )
}
