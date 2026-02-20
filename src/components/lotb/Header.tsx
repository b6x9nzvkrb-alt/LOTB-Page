import { Instagram, MessageCircle, Mail } from "lucide-react";
import { type ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SocialIcon = ({ href, icon, label }: { href: string; icon: ReactNode; label: string }) => (
  <TooltipProvider delayDuration={200}>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={label}
          className="w-14 h-14 rounded-full border border-border bg-card/80 backdrop-blur flex items-center justify-center text-foreground hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg transition-all animate-[bounce_3s_ease-in-out_infinite]"
          style={{ animationDelay: `${Math.random() * 2}s` }}
        >
          {icon}
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const Header = () => (
  <header className="sticky top-0 z-50 bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur-sm" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
    <div className="max-w-[1120px] mx-auto px-4 h-[120px] flex items-center justify-center gap-6">
      <div className="text-center">
        <strong className="font-heading text-2xl uppercase tracking-wider text-foreground">Lords of the Boards</strong>
        <span className="text-sm text-muted-foreground block">Snowboard Culture Club</span>
      </div>
      <SocialIcon href="https://www.instagram.com/lotb_scc?igsh=a2NpZ2V6bmg3aWhw" icon={<Instagram className="w-7 h-7" />} label="Instagram" />
      <SocialIcon href="https://chat.whatsapp.com/ETMCXDQePkDDUZApJIXvWz" icon={<MessageCircle className="w-7 h-7" />} label="WhatsApp" />
      <SocialIcon href="mailto:lotb.scc@gmail.com" icon={<Mail className="w-7 h-7" />} label="E-Mail" />
    </div>
  </header>
);

export default Header;
