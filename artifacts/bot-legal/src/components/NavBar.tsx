import { Link } from 'wouter';

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-primary transition-colors">
              HDGBot
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/HDGBot-tos" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="/HDGBot-pp" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </nav>
  );
}
