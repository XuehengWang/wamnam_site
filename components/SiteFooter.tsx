export default function SiteFooter() {
 return (
    <footer className="bg-emerald-900">
      <div className="mx-auto max-w-6xl px-6 py-10 text-white/80">
        <div className="text-sm font-semibold text-white">WAMNAM Dance Crew</div>

        <div className="mt-5 space-y-3 text-sm">
          <a className="flex items-center gap-3 hover:text-white" href="#">
            <span className="h-5 w-5 rounded bg-white/20" aria-hidden />
            <span>@wamnam.official</span>
          </a>
          <a className="flex items-center gap-3 hover:text-white" href="#">
            <span className="h-5 w-5 rounded bg-white/20" aria-hidden />
            <span>@wamnam</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
 
