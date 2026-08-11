import { FadeIn } from '@/components/FadeIn';

export default function Tos() {
  return (
    <div className="flex-1 w-full flex flex-col">
      <section className="w-full py-24 px-6 bg-cold-bg text-cold-fg">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">Điều Khoản Dịch Vụ</h1>
            <p className="text-2xl font-semibold text-cold-fg/70 mb-2">Terms of Service</p>
            <p className="text-lg text-cold-fg/60">Cập nhật lần cuối / Last updated: {new Date().toLocaleDateString()}</p>
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
              <h2 className="text-3xl font-bold tracking-tight">1. Chấp Nhận Điều Khoản</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Bằng cách mời và sử dụng HDGBot trong máy chủ Discord của bạn, bạn đồng ý với các Điều Khoản Dịch Vụ này. Nếu bạn không đồng ý, bạn bắt buộc phải đồng ý
              </p>
              <p className="text-base leading-relaxed text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                By inviting and using Silly Bot in your Discord server, you agree to these Terms of Service. If you do not agree, you must agree
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">2. Sử Dụng Bot</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                HDGBot (tiền tố: H) được thiết kế để phục vụ mọi người và công cụ ấy luôn luôn tuân thủ điều khoản sử dụng và chính sách bảo mật của discord.
              </p>
              <p className="text-base leading-relaxed text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                Silly Bot (prefix: H) is designed as a tool for everyone and it always follow Discord's Developer Terms of Service and Community Guidelines.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">3. Các Hành Vi Bị Cấm</h2>
              <p className="text-lg leading-relaxed text-gray-700">Bạn không được sử dụng HDGBot để:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Spam các kênh, người dùng hoặc dịch vụ bên ngoài.</li>
                <li>Phân phối nội dung lạm dụng, thù địch hoặc quấy rối.</li>
                <li>Cố tình vượt qua, lạm dụng hoặc làm quá tải cơ chế kiểm tra bản quyền.</li>
                <li>Tham gia vào bất kỳ hoạt động nào gây gián đoạn sự hoạt động của bot đối với người khác.</li>
              </ul>
              <p className="text-base leading-relaxed text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                You may not use HDGBot to: spam channels, users, or external services; distribute abusive, hateful, or harassing content; intentionally bypass, abuse, or overload the copyright checking mechanisms; or engage in any activity that disrupts the bot's availability for others.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">4. Tuyên Bố Miễn Trừ Bảo Đảm</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                HDGBot được cung cấp &quot;nguyên trạng&quot; mà không có bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý. Chúng tôi không đảm bảo dịch vụ không bị gián đoạn, phát hiện bản quyền hoàn hảo hoặc khả năng tương thích hiển thị phông chữ tuyệt đối trên mọi thiết bị.
              </p>
              <p className="text-base leading-relaxed text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                HDGBot is provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee uninterrupted service, flawless copyright detection, or absolute font rendering compatibility across all devices.
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
              <h2 className="text-3xl font-bold tracking-tight">5. Giới Hạn Trách Nhiệm</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                Trong mọi trường hợp, các nhà phát triển của HDGBot sẽ không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc do hậu quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng bot, bao gồm nhưng không giới hạn ở lệnh cấm máy chủ, xóa tin nhắn hoặc các khiếu nại bản quyền được cho là.
              </p>
              <p className="text-base leading-relaxed text-cold-fg/50 border-l-2 border-cold-fg/20 pl-4 italic">
                In no event shall the developers of HDGBot be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the bot, including but not limited to server bans, message deletions, or perceived copyright strikes.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">6. Thay Đổi Điều Khoản</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                Chúng tôi có quyền cập nhật các Điều Khoản này bất kỳ lúc nào. Việc tiếp tục sử dụng HDGBot sau khi có sửa đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
              </p>
              <p className="text-base leading-relaxed text-cold-fg/50 border-l-2 border-cold-fg/20 pl-4 italic">
                We reserve the right to update these Terms at any time. Continued use of HDGBot after modifications constitutes your acceptance of the new terms.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">7. Liên Hệ</h2>
              <p className="text-lg leading-relaxed text-cold-fg/80">
                Nếu bạn có thắc mắc về các Điều Khoản này, vui lòng liên hệ với nhà phát triển qua Discord hoặc máy chủ hỗ trợ chính thức của chúng tôi.
              </p>
              <p className="text-base leading-relaxed text-cold-fg/50 border-l-2 border-cold-fg/20 pl-4 italic">
                If you have questions about these Terms, please reach out to the developer via Discord or our official support server.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
