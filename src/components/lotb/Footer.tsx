const Footer = () => (
  <footer className="border-t border-border mt-4 py-5 text-muted-foreground text-[13px]">
    <div className="max-w-[1120px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <span>© {new Date().getFullYear()} Lords of the Boards – Snowboard Culture Club</span>
      <a href="mailto:lotb.scc@gmail.com" className="hover:text-foreground transition-colors">lotb.scc@gmail.com</a>
    </div>
  </footer>
);

export default Footer;
