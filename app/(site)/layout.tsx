export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="border-b sticky top-0 backdrop-blur">
        <div className="container mx-auto p-3">
          <h1 className="font-bold text-3xl">
            K<span className="text-purple-600">an</span>daraku
          </h1>
        </div>
      </header>
      <main>
        <div className="container p-6 mx-auto">
          {children}
        </div>
      </main>
    </>
  );
}
