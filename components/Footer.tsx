"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2d6a4f] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Column - About with Logo */}
          <div>
            <span className="inline-flex rounded-xl bg-white px-3 py-2">
              <Image
                src="/logo.png"
                alt="ЗЕЛЕНИ ПРОЕКТИ КОНСУЛТ ЕООД – лого"
                width={200}
                height={70}
                className="h-11 w-auto"
                loading="lazy"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm text-white/75">
              Консултантски и проектантски услуги по опазване на околната среда
              за бизнеса – с национален обхват и доказан опит пред РИОСВ, ИАОС и
              МОСВ.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61577639725841"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-agro-accent hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Последвайте ни във Facebook
            </a>
          </div>

          {/* Middle Column - Services */}
          <nav aria-label="Услуги">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-agro-accent">
              Услуги
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="/#services"
                  className="transition-colors hover:text-agro-accent"
                >
                  Екологични оценки и ОВОС
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors hover:text-agro-accent"
                >
                  Комплексни разрешителни (КР)
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors hover:text-agro-accent"
                >
                  Управление на отпадъците и НИСО
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors hover:text-agro-accent"
                >
                  Екологичен мониторинг и фактори на средата
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="transition-colors hover:text-agro-accent"
                >
                  Проектантски услуги и ЗУТ
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Column - Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-agro-accent">
              Контакти
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>гр. Шумен, ул. „Хан Крум" №4, ет. 1, офис 19</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <a href="tel:+359892704368" className="hover:text-agro-accent">
                  0892 704 368
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <a
                  href="mailto:greenpconsult@gmail.com"
                  className="break-all hover:text-agro-accent"
                >
                  greenpconsult@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <span>
                  <span className="block">
                    Понеделник – Петък: 08:00 – 19:00
                  </span>
                  <span className="block">Събота – Неделя: 08:00 – 17:00</span>
                </span>
              </li>
              <li>
                <a
                  href="/#obyavleniya"
                  className="underline underline-offset-4 hover:text-agro-accent"
                >
                  Всички обявления
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/15 px-4 py-6 text-center text-xs text-white/65 sm:px-6">
        © 2026 ЗЕЛЕНИ ПРОЕКТИ КОНСУЛТ ЕООД. Всички права запазени.
      </div>
    </footer>
  );
}
