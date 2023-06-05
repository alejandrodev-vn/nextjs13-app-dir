export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-500">
      <h1>Dashboard page</h1>
      {children}
    </div>
  )
}
