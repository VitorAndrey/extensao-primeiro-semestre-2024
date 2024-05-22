export function Header() {
  return (
    <header className="flex h-16 items-center justify-center px-6">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h1 className="text-lg font-semibold text-emerald-500 md:text-2xl">
          Lorem
        </h1>

        <nav className="hidden gap-20 md:flex">
          <p>link</p>
          <p>link</p>
          <p>link</p>
        </nav>
      </div>
    </header>
  );
}
