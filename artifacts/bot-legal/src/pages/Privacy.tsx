import { FadeIn } from '@/components/FadeIn';

export default function Privacy() {
  return (
    <div className="flex-1 w-full flex flex-col">
      <section className="w-full py-24 px-6 bg-warm-bg text-warm-fg">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">Chính Sách Bảo Mật</h1>
            <p className="text-2xl font-semibold text-gray-500 mb-2">Privacy Policy</p>
            <p className="text-lg text-gray-400">Cập nhật lần cuối / Last updated: {new Date().toLocaleDateString()}</p>
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
              <h2 className="text-3xl font-bold tracking-tight">1. Thông Tin Chúng Tôi Thu Thập</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                Để cung cấp dịch vụ, HDGBot thu thập dữ liệu tối thiểu khi bạn tương tác với nó, bao gồm:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-cold-fg/80">
                <li>ID người dùng Discord</li>
                <li>ID máy chủ Discord (Guild ID)</li>
                <li>Dữ liệu sử dụng lệnh</li>
              </ul>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                Chúng tôi không ghi lại nội dung tin nhắn lâu dài, cũng không lưu trữ thông tin nhận dạng cá nhân ngoài các ID cơ bản cần thiết cho chức năng Discord.
              </p>
              <p className="text-base leading-relaxed text-cold-fg/50 border-l-2 border-cold-fg/20 pl-4 italic">
                To provide our services, Silly Bot collects minimal data: Discord User IDs, Discord Server (Guild) IDs, and command usage data. We do not log message contents permanently, nor do we store personally identifiable information outside of the basic IDs required for Discord functionality.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">2. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                Dữ liệu được thu thập chỉ được sử dụng để vận hành các tính năng của bot, chẳng hạn như xử lý thay đổi phông chữ, xử lý các yêu cầu xác minh bản quyền và duy trì thời gian chờ hoặc cài đặt người dùng.
              </p>
              <p className="text-base leading-relaxed text-cold-fg/50 border-l-2 border-cold-fg/20 pl-4 italic">
                Data collected is used exclusively to operate the bot's features, such as processing font changes, handling copyright verification queries, and maintaining cooldowns or user settings.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">3. Chia Sẻ Dữ Liệu</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                Chúng tôi coi trọng quyền riêng tư của bạn. Chúng tôi không bán, cho thuê hoặc chia sẻ dữ liệu của bạn với bất kỳ bên thứ ba, nhà quảng cáo hoặc dịch vụ bên ngoài nào.
              </p>
              <p className="text-base leading-relaxed text-cold-fg/50 border-l-2 border-cold-fg/20 pl-4 italic">
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
              <h2 className="text-3xl font-bold tracking-tight">4. Lưu Giữ Dữ Liệu</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Chúng tôi chỉ lưu giữ dữ liệu đã thu thập trong thời gian cần thiết để cung cấp dịch vụ. Cài đặt và tùy chọn người dùng được lưu trữ vô thời hạn để duy trì trải nghiệm liền mạch, nhưng có thể được xóa theo yêu cầu.
              </p>
              <p className="text-base leading-relaxed text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                We keep the collected data only as long as necessary to provide the service. User settings and preferences are stored indefinitely to maintain a seamless experience, but can be removed upon request.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">5. Quyền Của Bạn</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Bạn có quyền yêu cầu bản sao dữ liệu chúng tôi đã lưu trữ về bạn và quyền yêu cầu xóa hoàn toàn dữ liệu đó. Hãy liên hệ qua các kênh hỗ trợ chính thức của chúng tôi để thực hiện các quyền này.
              </p>
              <p className="text-base leading-relaxed text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                You have the right to request a copy of the data we have stored about you and the right to request complete deletion of that data. Reach out through our official support channels to invoke these rights.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">6. Thay Đổi Chính Sách</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Chúng tôi có thể cập nhật Chính Sách Bảo Mật này khi các tính năng phát triển. Chúng tôi khuyến khích người dùng định kỳ xem lại trang này.
              </p>
              <p className="text-base leading-relaxed text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                We may update this Privacy Policy as our features evolve. We encourage users to review this page periodically.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">7. Liên Hệ</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Đối với các câu hỏi liên quan đến quyền riêng tư hoặc yêu cầu xóa dữ liệu, vui lòng liên hệ với nhà phát triển qua Discord.
              </p>
              <p className="text-base leading-relaxed text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                For privacy-related inquiries or data deletion requests, please contact the developer via Discord.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
