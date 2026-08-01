import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="flex-1 w-full flex items-center justify-center bg-warm-bg text-warm-fg p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link href="/" className="px-6 py-3 bg-cold-bg text-white font-bold rounded-xl hover:bg-cold-bg/90 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
