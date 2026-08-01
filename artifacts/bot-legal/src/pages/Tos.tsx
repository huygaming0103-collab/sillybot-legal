import { FadeIn } from '@/components/FadeIn';

export default function Tos() {
  return (
    <div className="flex-1 w-full flex flex-col">
      <section className="w-full py-24 px-6 bg-cold-bg text-cold-fg">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Terms of Service</h1>
            <p className="text-xl text-cold-fg/80">Last updated: {new Date().toLocaleDateString()}</p>
          </FadeIn>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none block -mt-1 bg-warm-bg">
        <svg className="w-full h-12 md:h-20 fill-cold-bg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>

      <section className="w-full py-24 px-6 bg-warm-bg text-warm-fg">
        <div className="max-w-3xl mx-auto space-y-16">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                By inviting and using Silly Bot in your Discord server, you agree to these Terms of Service. If you do not agree, you must remove the bot from your server immediately.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">2. Bot Usage</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Silly Bot (prefix: H) is designed as a tool for font changing and copyright checking. You agree to use these features responsibly and in accordance with Discord's Developer Terms of Service and Community Guidelines.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">3. Prohibited Uses</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                You may not use Silly Bot to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Spam channels, users, or external services.</li>
                <li>Distribute abusive, hateful, or harassing content.</li>
                <li>Intentionally bypass, abuse, or overload the copyright checking mechanisms.</li>
                <li>Engage in any activity that disrupts the bot's availability for others.</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">4. Disclaimer of Warranties</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Silly Bot is provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee uninterrupted service, flawless copyright detection, or absolute font rendering compatibility across all devices.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full overflow-hidden leading-none block -mt-1 bg-cold-bg">
        <svg className="w-full h-12 md:h-20 fill-warm-bg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200,120V73.71c-47.79-22.2-103.59-32.17-158-28-70.36,5.37-136.33,33.31-206.8,37.5-73.84,4.36-147.54-16.88-218.2-35.26C547.73,30,478.7,23.12,407.6,34.92,371.45,40.92,337.75,52.76,303.15,64.26,210.51,95,87,134.29,0,67.53V120Z" />
        </svg>
      </div>

      <section className="w-full py-24 px-6 bg-cold-bg text-cold-fg">
        <div className="max-w-3xl mx-auto space-y-16">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">5. Limitation of Liability</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                In no event shall the developers of Silly Bot be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the bot, including but not limited to server bans, message deletions, or perceived copyright strikes.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">6. Changes to Terms</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                We reserve the right to update these Terms at any time. Continued use of Silly Bot after modifications constitutes your acceptance of the new terms.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">7. Contact</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                If you have questions about these Terms, please reach out to the developer via Discord or our official support server.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
