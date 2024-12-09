
interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({title, children}: PageLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
     <header className="bg-white p-4 shadow-md sticky top-0 z-10">
     <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
     </header>
     <main className="flex-1 overflow-y-auto p-4 md:p-8">
      {children}
     </main>
    </div>
  )
}
