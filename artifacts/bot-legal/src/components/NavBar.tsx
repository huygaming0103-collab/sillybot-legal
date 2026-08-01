import { Link } from 'wouter';

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-cold-bg text-white flex items-center justify-center font-bold text-xl group-hover:bg-primary transition-colors">
              H
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-primary transition-colors">
              Silly Bot
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/tos" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </nav>
  );
}
