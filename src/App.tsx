import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-(--wc-cream) text-(--wc-charcoal)">
      <Navbar />

      <section className="flex min-h-[calc(100vh-88px)] items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-(--wc-gold)">
            Welcome to
          </p>

          <h1 className="font-display text-6xl font-medium tracking-tight md:text-8xl">
            WEALTH COLLECTION
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-(--wc-muted)">
            Quiet luxury. Timeless living.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
