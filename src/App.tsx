import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "О лавке" },
  { href: "#assortment", label: "Ассортимент" },
  { href: "#why", label: "Почему мы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#visit", label: "Контакты" },
];

const CATEGORIES = [
  {
    title: "Говядина",
    text: "Мраморные стейки, вырезка и отруба на каждый день",
    image: "/images/beef.jpg",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Свинина",
    text: "Шейка, карбонад, рёбра — свежий разруб",
    image: "/images/pork.jpg",
    span: "",
  },
  {
    title: "Фарш",
    text: "Свиной и говяжий, крутим в лавке",
    image: "/images/mince.jpg",
    span: "",
  },
  {
    title: "Птица",
    text: "Филе, бёдра, тушка — всегда свежая",
    image: "/images/chicken.jpg",
    span: "",
  },
  {
    title: "Шашлык",
    text: "Маринованные полуфабрикаты к мангалу",
    image: "/images/shashlik.jpg",
    span: "",
  },
  {
    title: "Колбасы",
    text: "Варёные, копчёные и деликатесы к столу",
    image: "/images/sausages.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Разливное пиво",
    text: "К мясу — после работы или в пятницу",
    image: "/images/beer.jpg",
    span: "lg:col-span-2",
  },
];

const REASONS = [
  {
    n: "01",
    title: "Свежий разруб",
    text: "Мясо на витрине — не со склада «на всякий случай». Привозим и разделываем так, чтобы брать сегодня и готовить сегодня.",
  },
  {
    n: "02",
    title: "Мраморная говядина",
    text: "Гости отдельно отмечают мраморные отруба: сочные, с жировой сеточкой, как для стейка, так и для домашнего ужина.",
  },
  {
    n: "03",
    title: "Свои полуфабрикаты",
    text: "Фарш, шашлык, заготовки к мангалу — чтобы не стоять у плиты час, если хочется просто вкусно поесть.",
  },
  {
    n: "04",
    title: "Лавка, а не сеть",
    text: "Знаем постоянных гостей в лицо, подскажем отруб и нальём пива. Девчата за прилавком — то, за что нас хвалят.",
  },
];

const REVIEWS = [
  {
    name: "Гость лавки",
    date: "Яндекс Карты",
    text: "Магазин хороший, девчата приветливые, продукты свежие, пиво тоже. Часто захожу — всем советую.",
  },
  {
    name: "Элис Котик",
    date: "Яндекс Карты",
    text: "Очень вкусная мраморная говядина в этом магазине, фарш свиной. Так же они торгуют разливным пивом.",
  },
  {
    name: "Светлана Ш.",
    date: "Яндекс Карты",
    text: "Замечательное обслуживание и много всякой вкуснятинки. Заглядываю регулярно — ассортимент всегда живой.",
  },
];

const MARQUEE = [
  "Мраморная говядина",
  "Свиной фарш",
  "Шашлык",
  "Колбасы",
  "Свежая птица",
  "Разливное пиво",
  "Полуфабрикаты",
  "Хабаровск-2",
];

function IconKnife({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 14.5c4.5-1 9.5-6.2 14.8-11.2.4-.4 1.1-.3 1.4.2 1.4 2.3 1.7 4.6.2 6.1L8.8 20.4c-.6.6-1.6.6-2.2 0L3.4 17c-.6-.6-.5-1.6.2-2.1.3-.2.8-.3 1.4-.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8 18.5 20.5 6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconPin({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9.8" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconClock({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4.2L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || catalogOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, catalogOpen]);

  const openCatalog = () => {
    setMenuOpen(false);
    setCatalogOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-ink text-cream font-sans">
      <div className="grain" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-ink/90 backdrop-blur-md border-b border-gold/15 shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src="/images/emblem.png"
              alt="Мясная лавка"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40 group-hover:ring-gold transition"
            />
            <div className="leading-tight">
              <div className="font-serif text-[1.35rem] tracking-wide text-cream">Мясная лавка</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold/80">Хабаровск</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] uppercase tracking-[0.18em] text-cream/70 hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openCatalog}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-wine px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream hover:bg-wine-deep transition-colors"
            >
              Перейти в каталог
              <IconArrow />
            </button>
            <button
              type="button"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 h-[1.5px] w-4 bg-current transition ${
                    menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-current transition ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-4 bg-current transition ${
                    menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-md lg:hidden">
          <div className="flex h-full flex-col justify-center px-8 pt-16">
            <nav className="flex flex-col gap-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl text-cream hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={openCatalog}
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-wine px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em]"
            >
              Перейти в каталог
              <IconArrow />
            </button>
          </div>
        </div>
      )}

      <main id="top">
        <section className="relative min-h-[100svh] overflow-hidden">
          <img
            src="/images/hero-meat.jpg"
            alt="Стейк из мраморной говядины"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
            <div className="max-w-2xl animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-10 bg-gold" />
                У рынка Хабаровск-2
              </div>
              <h1 className="font-serif text-[3.4rem] leading-[0.9] text-cream sm:text-7xl md:text-8xl">
                Мясная
                <span className="block italic text-gold">лавка</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
                Свежий разруб, мраморная говядина, сочный фарш и разливное пиво.
                Настоящая лавка в Хабаровске — без витрины «на неделю вперёд».
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openCatalog}
                  className="inline-flex items-center gap-3 rounded-full bg-wine px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-cream shadow-[0_12px_40px_rgba(122,29,29,.45)] hover:bg-wine-deep transition-colors"
                >
                  Перейти в каталог
                  <IconArrow className="h-4 w-4" />
                </button>
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-6 py-3.5 text-[13px] uppercase tracking-[0.18em] text-cream/90 hover:border-gold hover:text-gold transition-colors"
                >
                  Как добраться
                </a>
              </div>
            </div>

            <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-gold/20 pt-8 text-sm">
              <div>
                <div className="font-serif text-3xl text-gold">09–21</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/55">каждый день</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-gold">82</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/55">пр-т 60 лет Октября</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-gold">3.9</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/55">на Яндекс Картах</div>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-gold/15 bg-ink-soft py-4">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-8 px-8">
                <span className="text-[12px] uppercase tracking-[0.35em] text-gold/90">{item}</span>
                <span className="h-[3px] w-[3px] rotate-45 bg-wine" />
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="bg-paper text-ink">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-6">
              <div className="absolute -left-3 -top-3 hidden h-24 w-24 border border-gold/50 md:block" />
              <img
                src="/images/butcher-work.jpg"
                alt="Разруб мяса в лавке"
                className="relative h-[420px] w-full object-cover md:h-[560px]"
              />
              <div className="absolute -bottom-6 -right-2 hidden max-w-[220px] bg-wine px-6 py-5 text-cream md:block">
                <p className="font-serif text-xl italic leading-snug">«Берите сегодня — готовьте сегодня.»</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="text-[11px] uppercase tracking-[0.32em] text-gold-dim">01 — О нас</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                Лавка у рынка,
                <span className="italic text-wine"> не супермаркет</span>
              </h2>
              <div className="gold-rule my-8 max-w-xs" />
              <p className="text-[17px] leading-relaxed text-ink/75">
                Мы стоим на проспекте 60-летия Октября, 82 — рядом с рынком Хабаровск-2
                и парком железнодорожников. Сюда заходят за мясом «на ужин» и за
                шашлыком на выходные: без очереди на кассе гипермаркета и без мяса,
                которое неделю лежит под лампой.
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-ink/75">
                На витрине — говядина с мраморной сеточкой, свинина, свежий фарш,
                птица, колбасы и полуфабрикаты. А если день выдался длинный, нальём
                разливного пива. Так и задумано: лавка, в которую хочется возвращаться.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Свежий ежедневный разруб",
                  "Мраморная говядина",
                  "Фарш и шашлык",
                  "Разливное пиво",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm tracking-wide">
                    <span className="h-1.5 w-1.5 rounded-full bg-wine" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="assortment" className="bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-gold">02 — Витрина</div>
                <h2 className="mt-4 font-serif text-4xl md:text-6xl">
                  То, за чем
                  <span className="italic text-gold"> к нам приходят</span>
                </h2>
              </div>
              <button
                type="button"
                onClick={openCatalog}
                className="inline-flex items-center gap-2 self-start text-[12px] uppercase tracking-[0.22em] text-gold hover:text-cream transition-colors"
              >
                Перейти в каталог
                <IconArrow />
              </button>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:h-[920px]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.title}
                  type="button"
                  onClick={openCatalog}
                  className={`card-shine group relative min-h-[240px] overflow-hidden text-left ${cat.span}`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-3xl text-cream">{cat.title}</h3>
                        <p className="mt-1 max-w-xs text-sm text-cream/70">{cat.text}</p>
                      </div>
                      <span className="mb-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition group-hover:bg-wine group-hover:text-cream group-hover:border-wine">
                        <IconArrow className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="relative overflow-hidden bg-wine-deep">
          <div className="pointer-events-none absolute -right-24 -top-24 font-serif text-[18rem] leading-none text-white/5">
            МЛ
          </div>
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.32em] text-gold">03 — Принципы</div>
              <h2 className="mt-4 font-serif text-4xl text-cream md:text-6xl">
                Почему за мясом
                <span className="italic"> идут сюда</span>
              </h2>
            </div>
            <div className="mt-14 grid gap-px bg-gold/15 sm:grid-cols-2">
              {REASONS.map((item) => (
                <article key={item.n} className="bg-wine-deep p-8 md:p-10">
                  <div className="font-serif text-gold text-2xl">{item.n}</div>
                  <h3 className="mt-5 font-serif text-3xl text-cream">{item.title}</h3>
                  <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-cream/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
            <div>
              <IconKnife className="h-8 w-8 text-wine" />
              <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                Мясо к ужину.
                <span className="italic text-wine"> Пиво — к мясу.</span>
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink/70">
                После работы можно не только взять отруб или фарш, но и остановиться
                на кружку разливного. Гости пишут об этом отдельно — значит, попали.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/beer.jpg"
                alt="Разливное пиво"
                className="h-80 w-full object-cover md:h-[420px]"
              />
              <div className="absolute left-4 top-4 bg-ink/85 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-gold">
                На розлив
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-cream text-ink">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-gold-dim">04 — Голоса</div>
                <h2 className="mt-4 font-serif text-4xl md:text-6xl">Что говорят гости</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink/60">
                Отзывы с Яндекс Карт. Коротко, по делу и без рекламного глянца.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {REVIEWS.map((review) => (
                <blockquote
                  key={review.name}
                  className="flex h-full flex-col border border-ink/10 bg-paper p-8"
                >
                  <div className="flex gap-1 text-wine" aria-label="5 из 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="mt-6 flex-1 font-serif text-2xl leading-snug italic text-ink/90">
                    «{review.text}»
                  </p>
                  <footer className="mt-8 border-t border-ink/10 pt-5">
                    <div className="text-sm font-semibold">{review.name}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">{review.date}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="bg-ink">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="flex flex-col justify-between px-5 py-20 md:px-8 md:py-24">
              <div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-gold">05 — Визит</div>
                <h2 className="mt-4 font-serif text-4xl md:text-6xl">
                  Приходите
                  <span className="italic text-gold"> в лавку</span>
                </h2>
                <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
                  Железнодорожный район, рядом с рынком Хабаровск-2. Ориентир —
                  проспект 60-летия Октября. Зашли за мясом — не уходите без совета,
                  какой отруб лучше на сегодня.
                </p>
              </div>

              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <span className="mt-1 text-gold">
                    <IconPin />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-gold/80">Адрес</div>
                    <p className="mt-1 font-serif text-2xl">
                      г. Хабаровск,
                      <br />
                      пр-т 60-летия Октября, 82
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 text-gold">
                    <IconClock />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-gold/80">Часы работы</div>
                    <p className="mt-1 font-serif text-2xl">Ежедневно, 09:00 — 21:00</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={openCatalog}
                    className="inline-flex items-center gap-2 rounded-full bg-wine px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] hover:bg-wine-deep transition-colors"
                  >
                    Перейти в каталог
                    <IconArrow />
                  </button>
                  <a
                    href="https://yandex.ru/maps/org/myasnaya_lavka/1729883924/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors"
                  >
                    Открыть на карте
                  </a>
                </div>
              </div>
            </div>

            <div className="min-h-[420px] bg-ink-soft">
              <iframe
                title="Мясная лавка на карте"
                src="https://yandex.ru/map-widget/v1/?ol=biz&oid=1729883924&z=16"
                className="h-full min-h-[420px] w-full border-0 grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-wine">
          <img
            src="/images/sausages.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wine via-wine/85 to-ink/70" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl">Витрина ждёт.</h2>
              <p className="mt-4 max-w-lg text-cream/75">
                Каталог с ценами откроется здесь. А мясо — уже на прилавке, на
                проспекте 60-летия Октября, 82.
              </p>
            </div>
            <button
              type="button"
              onClick={openCatalog}
              className="inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-wine hover:bg-paper transition-colors"
            >
              Перейти в каталог
              <IconArrow />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/15 bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <img src="/images/emblem.png" alt="" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <div className="font-serif text-xl">Мясная лавка</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold/70">Хабаровск · с рынка</div>
            </div>
          </div>
          <p className="text-sm text-cream/45">
            пр-т 60-летия Октября, 82 · ежедневно 09:00–21:00
          </p>
          <p className="text-xs text-cream/30">© {new Date().getFullYear()} Мясная лавка</p>
        </div>
      </footer>

      {catalogOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-5 backdrop-blur-sm animate-fade-in"
          onClick={() => setCatalogOpen(false)}
        >
          <div
            className="relative w-full max-w-lg border border-gold/25 bg-ink-soft p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,.5)] md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/emblem.png" alt="" className="mx-auto h-16 w-16 rounded-full object-cover" />
            <h3 className="mt-6 font-serif text-4xl text-cream">Каталог скоро</h3>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
              Онлайн-витрина с ценами ещё собирается. А живая — уже работает:
              приходите на пр-т 60-летия Октября, 82, с 09:00 до 21:00.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#visit"
                onClick={() => setCatalogOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wine px-6 py-3 text-[12px] uppercase tracking-[0.18em]"
              >
                Как добраться
              </a>
              <button
                type="button"
                onClick={() => setCatalogOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-gold/35 px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:border-gold"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
