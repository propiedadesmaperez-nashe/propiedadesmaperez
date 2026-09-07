import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFloat({
  href,
  phone,
}: {
  href: string;
  phone: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-[60] flex items-center gap-2 rounded-full bg-[#1f9a52] px-4 py-3 text-white shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition hover:scale-[1.03] hover:bg-[#188a48] sm:bottom-6 sm:right-6"
      aria-label={`WhatsApp ${phone}`}
    >
      <WhatsAppIcon className="block size-6 shrink-0" />
      <span className="text-[14px] font-semibold leading-none tracking-tight text-white">
        Escríbenos
      </span>
    </a>
  );
}
