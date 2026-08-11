import { Link } from 'wouter';
import { FadeIn } from '@/components/FadeIn';

export default function Home() {
  return (
    <div className="flex-1 w-full bg-warm-bg text-warm-fg">
      <section className="relative w-full pt-32 pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-black/5 text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Prefix: H
            </div>
          </FadeIn>
          
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 text-gray-900 leading-[1.1]">
              HDGBot
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Bot Discord Thập Cẩm
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/HDGBot-tos" className="w-full sm:w-auto px-8 py-4 bg-cold-bg text-white font-bold rounded-2xl hover:bg-cold-bg/90 transition-all hover:scale-105 hover:-translate-y-1 shadow-lg shadow-cold-bg/20">
                Terms of Service
              </Link>
              <Link href="/HDGBot-pp" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all border border-gray-200 hover:scale-105 hover:-translate-y-1 shadow-lg shadow-black/5">
                Privacy Policy
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none block -mt-1 bg-cold-bg">
        <svg className="w-full h-16 md:h-24 fill-warm-bg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <section className="w-full py-32 px-6 bg-cold-bg text-cold-fg relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Commitment to Transparency</h2>
              <p className="text-lg text-cold-fg/80 leading-relaxed">
                We believe that trust is the foundation of any community. Our documentation is designed to be clear, straightforward, and respectful of your privacy.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-6">
            <FadeIn>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Clear Terms</h3>
                <p className="text-cold-fg/70">No hidden clauses. We outline exactly what HDGBot does and what we expect from our users.</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Minimal Data</h3>
                <p className="text-cold-fg/70">We only collect what is strictly necessary to run the bot. Nothing more, nothing less.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none block -mt-1 bg-warm-bg">
        <svg className="w-full h-16 md:h-24 fill-cold-bg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

    </div>
  );
}
