import Image from "next/image";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-16 py-32 text-center bg-white dark:bg-black sm:items-center">
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Error Report
          </p>

          <h1 className="text-7xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-8xl">
            404
          </h1>

          <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 sm:text-3xl">
            Not Found
          </h2>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The requested resource was not found on this server.
          </p>

          <div className="mt-4 flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center rounded-full bg-black px-6 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:w-auto"
              href="/"
            >
              Go Home
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-300 px-6 text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900 sm:w-auto"
              href="javascript:history.back()"
            >
              Go Back
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
