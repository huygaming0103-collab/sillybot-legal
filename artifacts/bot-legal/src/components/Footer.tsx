import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-cold-bg text-cold-fg py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-lg">
            H
          </div>
          <span className="font-semibold text-lg tracking-tight">HDGBot</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/HDGBot-tos" className="text-sm text-cold-fg/70 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/HDGBot-pp" className="text-sm text-cold-fg/70 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 text-center text-sm text-cold-fg/40">
        &copy; {new Date().getFullYear()} Silly Bot. All rights reserved.
      </div>
    </footer>
  );
}
