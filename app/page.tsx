import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium tracking-wider uppercase text-fd-muted-foreground">
          Platform Documentation
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          TolaMandi
        </h1>
        <p className="mb-2 text-xl text-fd-muted-foreground">
          APMC Weighing &amp; Trading Management System
        </p>
        <p className="mb-8 text-fd-muted-foreground">
          Complete technical and operational documentation for platform
          administrators and organization owners.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/en/docs/platform"
            className="inline-flex items-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground shadow transition-colors hover:bg-fd-primary/90"
          >
            Get Started
          </Link>
          <Link
            href="/en/docs/superadmin"
            className="inline-flex items-center rounded-lg border border-fd-border px-6 py-3 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            Super Admin Guide
          </Link>
          <Link
            href="/en/docs/owner"
            className="inline-flex items-center rounded-lg border border-fd-border px-6 py-3 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            Owner Guide
          </Link>
        </div>
      </div>
    </main>
  );
}
