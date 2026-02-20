const JoinCrew = () => (
  <section className="mt-4 scroll-reveal relative z-[25]">
    <div className="glass-card rounded-[26px] p-6 lg:p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/6 pointer-events-none" />
      <div className="relative z-10">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2 font-heading">Werde Teil der Familie</p>
        <a
          href="https://forms.gle/JvvsNWYdJeLwWrxUA"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full text-2xl lg:text-3xl font-heading uppercase tracking-wider text-primary-foreground bg-gradient-to-r from-primary to-primary/80 hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Join the Crew →
        </a>
      </div>
    </div>
  </section>
);

export default JoinCrew;
