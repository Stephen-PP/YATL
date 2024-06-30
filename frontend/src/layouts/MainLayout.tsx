import '../styles/main.css'

export default function MainLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <div className="mb-12">
        <h1 className="font-semibold text-3xl text-gray-300">Yet Another Todo List</h1>
      </div>
      <div className="container flex flex-col h-4/6 w-9/12 items-center justify-center">
        {children}
      </div>
    </>
  );
}