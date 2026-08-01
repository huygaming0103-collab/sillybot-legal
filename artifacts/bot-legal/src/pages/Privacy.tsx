import { FadeIn } from '@/components/FadeIn';

export default function Privacy() {
  return (
    <div className="flex-1 w-full flex flex-col">
      <section className="w-full py-24 px-6 bg-warm-bg text-warm-fg">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </FadeIn>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none block -mt-1 bg-cold-bg">
        <svg className="w-full h-12 md:h-20 fill-warm-bg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <section className="w-full py-24 px-6 bg-cold-bg text-cold-fg">
        <div className="max-w-3xl mx-auto space-y-16">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">1. Information We Collect</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                To provide our services, Silly Bot collects minimal data when you interact with it. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-cold-fg/80">
                <li>Discord User IDs</li>
                <li>Discord Server (Guild) IDs</li>
                <li>Command usage data</li>
              </ul>
              <p className="text-lg leading-relaxed text-cold-fg/80 mt-4">
                We do not log message contents permanently, nor do we store personally identifiable information outside of the basic IDs required for Discord functionality.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">2. How We Use Information</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                Data collected is used exclusively to operate the bot&apos;s features, such as processing font changes, handling copyright verification queries, and maintaining cooldowns or user settings.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">3. Data Sharing</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                We value your privacy. We do not sell, rent, or share your data with any third parties, advertisers, or external services.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none block -mt-1 bg-warm-bg">
        <svg className="w-full h-12 md:h-20 fill-cold-bg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

      <section className="w-full py-24 px-6 bg-warm-bg text-warm-fg">
        <div className="max-w-3xl mx-auto space-y-16">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">4. Data Retention</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We keep the collected data only as long as necessary to provide the service. User settings and preferences are stored indefinitely to maintain a seamless experience, but can be removed upon request.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">5. Your Rights</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                You have the right to request a copy of the data we have stored about you and the right to request complete deletion of that data. Reach out through our official support channels to invoke these rights.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">6. Changes to Policy</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We may update this Privacy Policy as our features evolve. We encourage users to review this page periodically.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">7. Contact</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                For privacy-related inquiries or data deletion requests, please contact the developer via Discord.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
