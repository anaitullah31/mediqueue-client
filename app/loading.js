export default function Loading() {
  return (
    <section className="min-h-[calc(100vh-350px)] bg-linear-to-bl from-background via-background to-cyan-100/60 px-6 py-16 dark:to-cyan-950/20">
      <div className="mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-10 w-56 animate-pulse rounded-full bg-primary/10" />
          <div className="mx-auto mt-8 h-14 w-full max-w-xl animate-pulse rounded-xl bg-muted" />
          <div className="mx-auto mt-4 h-14 w-full max-w-lg animate-pulse rounded-xl bg-muted" />
          <div className="mx-auto mt-6 h-6 w-full max-w-md animate-pulse rounded-lg bg-muted" />
        </div>

        {/* Cards Skeleton */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-border bg-background/80 p-8 backdrop-blur"
            >
              <div className="h-16 w-16 animate-pulse rounded-2xl bg-primary/10" />

              <div className="mt-8 h-7 w-3/4 animate-pulse rounded-lg bg-muted" />
              <div className="mt-4 h-4 w-full animate-pulse rounded bg-muted" />
              <div className="mt-3 h-4 w-5/6 animate-pulse rounded bg-muted" />
              <div className="mt-3 h-4 w-2/3 animate-pulse rounded bg-muted" />

              <div className="mt-8 h-11 w-32 animate-pulse rounded-xl bg-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
