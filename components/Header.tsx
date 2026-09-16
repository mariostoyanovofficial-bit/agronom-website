"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "Начало", href: "#home" },
    { label: "За нас", href: "/za-nas" },
    {
      label: "Консултантски услуги",
      children: [
        {
          label: "Екологични оценки и ОВОС",
          href: "/uslugi/ekologichni-ocenki-ovos",
        },
        {
          label: "Комплексни разрешителни",
          href: "/uslugi/kompleksni-razreshitelni",
        },
        {
          label: "Екологичен мониторинг",
          href: "/uslugi/ekologichen-monitoring",
        },
        { label: "Води", href: "/uslugi/vodi" },
        {
          label: "Управление на отпадъците",
          href: "/uslugi/upravlenie-na-otpaducite",
        },
        {
          label: "Опасни химични вещества и смеси",
          href: "/uslugi/opasni-himichni-veshtestva",
        },
        { label: "Шум", href: "/uslugi/shum" },
        { label: "Въздух", href: "/uslugi/vazduh" },
        { label: "Планове и програми", href: "/uslugi/planove-i-programi" },
      ],
    },
    {
      label: "Проектантски услуги",
      children: [
        { label: "Геодезия", href: "/uslugi/geodeziya" },
        { label: "Геология", href: "/uslugi/geologiya" },
        { label: "Надзор", href: "/uslugi/nadzor" },
      ],
    },
    {
      label: "Процедури по ЗУТ",
      children: [
        {
          label: "Изготвяне на подробен устройствен план (ПУП)",
          href: "/uslugi/izgotvyane-na-pup",
        },
      ],
    },
    { label: "Дейности", href: "#deinosti" },
    { label: "Партньори", href: "/partnori" },
    { label: "Обявления", href: "#obyavleniya" },
    { label: "ЧЗВ", href: "#chzv" },
    { label: "Контакти", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Agronom лого"
              width={200}
              height={70}
              className="h-11 w-auto sm:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav
            aria-label="Основна навигация"
            className="hidden items-center gap-0.5 lg:flex mx-auto"
          >
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[0.8rem] font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-agro-primary xl:px-2.5 xl:text-[0.9rem]"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full min-w-[280px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                      <ul className="py-2">
                        {item.children.map((child, i) => (
                          <li key={i}>
                            <Link
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-agro-primary/10 hover:text-agro-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="whitespace-nowrap rounded-md px-2 py-2 text-[0.8rem] font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-agro-primary xl:px-2.5 xl:text-[0.9rem]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Right Section */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=61577639725841"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-100 hover:text-agro-primary h-9 w-9 md:inline-flex"
              aria-label="Facebook страница"
              title="Facebook"
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
                className="size-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* Phone Button - visible on md+ */}
            <a
              href="tel:+359892704368"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#2d6a4f",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span style={{ color: "#ffffff" }}>0892 704 368</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="inline-flex lg:hidden items-center justify-center rounded-md text-gray-700 transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-9 w-9"
              aria-label="Меню"
              aria-expanded={mobileMenuOpen}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              title="Меню"
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
                className="size-5"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-gray-200 bg-gray-50 py-2 lg:hidden">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubOpen(
                        mobileSubOpen === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-[0.95rem] font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-agro-primary"
                    aria-expanded={mobileSubOpen === item.label}
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${mobileSubOpen === item.label ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {mobileSubOpen === item.label && (
                    <div className="bg-white">
                      {item.children.map((child, i) => (
                        <Link
                          key={i}
                          href={child.href}
                          className="block py-2.5 pl-8 pr-4 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-agro-primary"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileSubOpen(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block px-4 py-3 text-[0.95rem] font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-agro-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="border-t border-gray-200 px-4 py-2.5 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61577639725841"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-agro-primary hover:text-agro-light transition-colors"
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
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
