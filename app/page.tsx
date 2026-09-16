"use client";

import Image from "next/image";
import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { OBYAVLENIYA, TAG_COLORS } from "@/lib/obyavleniya-data";

const phoneIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
);

const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2d6a4f"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SERVICES = [
  {
    title: "Екологични оценки и ОВОС",
    tabLabel: "ОВОС / ЕО",
    description:
      "Пълно съпровождане на инвестиционни предложения през процедурите по глава шеста от ЗООС – от уведомление до решение на компетентния орган.",
    details: [
      "Доклади за оценка на въздействието върху околната среда (ОВОС)",
      "Екологична оценка (ЕО) на планове и програми",
      "Оценка за съвместимост (ОС) с предмета и целите на Натура 2000",
      "Уведомления и информация за инвестиционни предложения",
      "Представяне и защита пред експертни екологични съвети",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Комплексни разрешителни (КР)",
    tabLabel: "Комплексни разрешителни",
    description:
      "Изготвяне и актуализация на заявления за комплексни разрешителни за инсталации по Приложение 4 на ЗООС.",
    details: [
      "Изготвяне на заявления за издаване и актуализация на КР",
      "Консултации и кореспонденция с ИАОС, РИОСВ и МОСВ",
      "Прилагане на най-добри налични техники (НДНТ)",
      "Годишни доклади за изпълнение на условията в КР",
      "Оценка на съответствието и предотвратяване на санкции",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Управление на отпадъците и НИСО",
    tabLabel: "Управление на отпадъците и НИСО",
    description:
      "Отчетност, разрешителни и регистрационни режими по Закона за управление на отпадъците, включително работа в НИСО.",
    details: [
      "Работа с Националната информационна система \u201eОтпадъци\u201c (НИСО)",
      "Разрешителни и регистрационни документи за дейности с отпадъци",
      "Класификация на отпадъците и работни листове",
      "Годишни отчети, отчетни книги и месечни справки",
      "Програми за управление на отпадъците",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    title: "Екологичен мониторинг и фактори на средата",
    tabLabel: "Екологичен мониторинг и фактори на средата",
    description:
      "Измервания, моделиране и анализ на факторите на околната среда за доказване на съответствие с нормите.",
    details: [
      "Шум в околната среда и на работното място",
      "Качество на атмосферния въздух – моделиране PLUME и TRAFFIC ORACLE",
      "Води – отпадъчни, повърхностни и подземни",
      "Опасни химични вещества и смеси, оценка на риска",
      "Собствен мониторинг и програми за контрол",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Проектантски услуги и ЗУТ",
    tabLabel: "Проектантски услуги и ЗУТ",
    description:
      "Пълен инженерен пакет по Закона за устройство на територията – от заснемане до въвеждане в експлоатация.",
    details: [
      "Подробен устройствен план (ПУП) и изменения",
      "Геодезически заснемания и трасировъчни планове",
      "Инженерно-геоложки и хидрогеоложки проучвания",
      "Строителен надзор и технически контрол",
      "Инвестиционни проекти по всички части",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const s = SERVICES[activeService];
  return (
    <MainLayout>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="w-full"
        style={{ backgroundColor: "#2d6a4f" }}
      >
        <Image
          src="/hero-banner.webp"
          alt="Agronom – бизнес решения в екологията"
          width={1919}
          height={711}
          className="h-auto w-full object-contain"
          priority
        />

        <div
          className="hero-inner"
          style={{
            maxWidth: 1152,
            margin: "0 auto",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "1.5px solid rgba(255,255,255,0.5)",
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              Екологичен консултант · Шумен · цяла България
            </span>

            <h1
              style={{
                marginTop: 24,
                fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                color: "#ffffff",
              }}
            >
              Точни и навременни екологични решения за вашия бизнес
            </h1>

            <p
              style={{
                marginTop: 20,
                fontSize: "clamp(1rem, 1.5vw, 1.175rem)",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.9)",
                maxWidth: 620,
              }}
            >
              Пълен набор от консултантски и проектантски услуги по опазване на
              околната среда в цялата страна. Спазване на националното и
              европейското законодателство.
            </p>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:+359892704368"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#ffffff",
                  color: "#2d6a4f",
                  padding: "14px 28px",
                  borderRadius: 8,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  whiteSpace: "nowrap",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                Обади се сега · 0892 704 368
              </a>
              <a
                href="#services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "2px solid rgba(255,255,255,0.65)",
                  color: "#ffffff",
                  padding: "14px 28px",
                  borderRadius: 8,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  backgroundColor: "transparent",
                }}
              >
                Разгледай услугите
              </a>
            </div>

            <ul
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 12,
              }}
            >
              {[
                {
                  text: "Работим с всички РИОСВ, ИАОС и МОСВ",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  text: "100% законово съответствие",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  text: "Национален обхват",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                      <circle cx="12" cy="8" r="2" />
                      <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                    </svg>
                  ),
                },
              ].map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1.5px solid rgba(255,255,255,0.35)",
                    backgroundColor: "rgba(255,255,255,0.13)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    color: "#ffffff",
                  }}
                >
                  <span style={{ flexShrink: 0 }}>{b.icon}</span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section
        id="services"
        className="section-py"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="page-container" style={{ maxWidth: 1024 }}>
          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2d6a4f",
                marginBottom: 12,
              }}
            >
              Услуги
            </p>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                maxWidth: 680,
              }}
            >
              Всичко необходимо за екологичното съответствие на вашия обект
            </h2>
          </div>

          {/* Tab pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 32,
            }}
          >
            {SERVICES.map((svc, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 16px",
                  borderRadius: 999,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  border:
                    activeService === i
                      ? "1.5px solid #2d6a4f"
                      : "1.5px solid #E5E7EB",
                  backgroundColor: activeService === i ? "#2d6a4f" : "#ffffff",
                  color: activeService === i ? "#ffffff" : "#374151",
                  boxShadow:
                    activeService === i
                      ? "0 2px 8px rgba(45,106,79,0.25)"
                      : "none",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    opacity: activeService === i ? 1 : 0.6,
                  }}
                >
                  {svc.icon}
                </span>
                {svc.tabLabel}
              </button>
            ))}
          </div>

          {/* Active card */}
          <div
            className="service-card"
            style={{
              border: "1px solid #E5E7EB",
              backgroundColor: "#ffffff",
              borderRadius: 20,
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {/* Card title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: "#ecfdf5",
                  color: "#2d6a4f",
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>
            </div>

            <p
              style={{
                fontSize: "0.975rem",
                color: "#6B7280",
                lineHeight: 1.75,
                marginBottom: 28,
                maxWidth: 760,
              }}
            >
              {s.description}
            </p>

            {/* Details grid — 1 col mobile, 2 cols desktop */}
            <ul
              className="service-details"
              style={{
                marginBottom: 32,
              }}
            >
              {s.details.map((d, di) => (
                <li
                  key={di}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    backgroundColor: "#f8fafc",
                    borderRadius: 10,
                    padding: "10px 14px",
                    fontSize: "0.9rem",
                    color: "#374151",
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: 2,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      backgroundColor: "#dcfce7",
                    }}
                  >
                    {checkIcon}
                  </span>
                  {d}
                </li>
              ))}
            </ul>

            <a
              href="tel:+359892704368"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#2d6a4f",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: 8,
                fontSize: "0.925rem",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(45,106,79,0.3)",
              }}
            >
              {phoneIcon}
              Обади се за тази услуга · 0892 704 368
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section
        id="about"
        className="section-py"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="page-container">
          <div
            className="about-grid"
            style={{
              alignItems: "center",
            }}
          >
            {/* Left — stacked photos */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              >
                <Image
                  src="/team-field-kSfS5md-.jpg"
                  alt="Екип на терен"
                  width={640}
                  height={380}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              >
                <Image
                  src="/eco-architecture-DxnwDaO6.jpg"
                  alt="Екологична архитектура"
                  width={640}
                  height={340}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* Right — content */}
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#2d6a4f",
                  marginBottom: 12,
                }}
              >
                За нас и защо нас
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "#0f172a",
                  margin: 0,
                }}
              >
                Екологичен партньор, който поема отговорността вместо вас
              </h2>
              <p
                style={{
                  marginTop: 20,
                  fontSize: "1.05rem",
                  color: "#4B5563",
                  lineHeight: 1.8,
                  fontWeight: 400,
                  marginBottom: 32,
                }}
              >
                „Зелени Проекти Консулт“ ЕООД съпровожда инвеститори,
                производствени предприятия и общини през целия жизнен цикъл на
                един обект – от идеята и уведомлението до въвеждането в
                експлоатация и годишната отчетност.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  {
                    title: "Опит с РИОСВ, ИАОС и МОСВ",
                    desc: "Познаваме изискванията и практиката на всяка регионална инспекция – процедурите минават без излишни връщания и забавяния.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2d6a4f"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 22h18" />
                        <path d="M6 18V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v11" />
                        <path d="M10 18v-4h4v4" />
                        <path d="M2 22h20" />
                        <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    ),
                  },
                  {
                    title: "Опитен екип от експерти",
                    desc: "Еколози, химици, геодезисти, инженер-геолози и проектанти работят заедно по един и същ обект.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2d6a4f"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                  },
                  {
                    title: "Индивидуален подход",
                    desc: "Всеки проект получава конкретен план на процедурите, срокове и ясна цена – без скрити етапи.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2d6a4f"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 16,
                      border: "1px solid #E5E7EB",
                      backgroundColor: "#ffffff",
                      borderRadius: 14,
                      padding: "20px 22px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 42,
                        height: 42,
                        borderRadius: 10,
                        backgroundColor: "#ecfdf5",
                      }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p
                        style={{
                          fontSize: "0.975rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          marginBottom: 5,
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "#6B7280",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ДЕЙНОСТИ ─────────────────────────────────────────── */}
      {/* Lightbox state */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            cursor: "zoom-out",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImg(null)}
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={lightboxImg}
            alt="Увеличено изображение"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 12,
              boxShadow: "0 8px 48px rgba(0,0,0,0.6)",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      <section
        id="deinosti"
        className="section-py"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="page-container">
          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                margin: 0,
                marginBottom: 14,
              }}
            >
              Реализирани дейности
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: 560,
                margin: 0,
              }}
            >
              Част от проектите и услугите, които сме изпълнили за нашите
              клиенти в цялата страна.
            </p>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {[
              {
                img: "/deinosti/gallery-stroitelni-otpaduci.jpg",
                title: "Предварително третиране на строителни отпадъци",
                desc: "Мобилна роторна трошачка на място за образуване и материално оползотворяване на строителни отпадъци в конкретни строителни обекти – в съответствие с действащото законодателство.",
              },
              {
                img: "/deinosti/gallery-dnsh.jpg",
                title: "Доклад за съответствие с принципа DNSH",
                desc: 'Изготвяне на доклад "Ненасяне на значителни вреди" (DNSH) по процедура BG-RRP-3.007 "AttractInvestBG" съгласно методологията на МЕУ.',
              },
              {
                img: "/deinosti/gallery-kr-ferma.jpg",
                title: "Комплексни разрешителни за ферми за кокошки",
                desc: "Цялостно консултиране и документация за издаване, изменение и актуализация на комплексни разрешителни за инсталации за отглеждане на кокошки, вкл. прилагане на НДНТ.",
              },
              {
                img: "/deinosti/gallery-laboratoria.jpg",
                title: "Промяна на предназначението – от офис в лаборатория",
                desc: "Инвестиционно предложение за преустройство на офис в микробиологична лаборатория с пълно съдействие по чл. 147а от ЗУТ.",
              },
              {
                img: "/deinosti/gallery-energiyna-nezavisimost.jpg",
                title: "Фотоволтаични решения и енергийна независимост",
                desc: "Проектиране и професионален монтаж на фотоволтаични системи и системи за съхранение на енергия за дома, бизнеса и индустрията.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 16,
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image — contain so full infographic is visible, click to enlarge */}
                <div
                  onClick={() => setLightboxImg(item.img)}
                  style={{
                    backgroundColor: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 220,
                    cursor: "zoom-in",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{ objectFit: "contain", padding: 8 }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Zoom hint */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      backgroundColor: "rgba(0,0,0,0.45)",
                      borderRadius: 6,
                      padding: "4px 8px",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                      pointerEvents: "none",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    Увеличи
                  </div>
                </div>
                <div
                  style={{
                    padding: "22px 24px 28px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#2d6a4f",
                      lineHeight: 1.4,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#6B7280",
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПАРТНЬОРИ ────────────────────────────────────────── */}
      <section
        id="partnori"
        className="section-py"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="page-container">
          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                margin: 0,
                marginBottom: 10,
              }}
            >
              Хора, които ни се довериха
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: 480,
                margin: 0,
              }}
            >
              Партньори и клиенти, с които сме работили по екологични процедури,
              разрешителни и проектиране.
            </p>
          </div>

          {/* Partners grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {[
              "Метизи АД",
              "Индустриална зона Търговище",
              "Община Велики Преслав",
              "Агро Инвест Хитрино",
              "Строймонтаж Шумен",
              "Био Фарм Разград",
            ].map((name, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  backgroundColor: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  padding: "16px 20px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {/* Shield-check icon */}
                <span
                  style={{
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    backgroundColor: "#ecfdf5",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#1e3a2f",
                    lineHeight: 1.3,
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ОБЯВЛЕНИЯ ────────────────────────────────────────── */}
      {(() => {
        const filtered = OBYAVLENIYA.slice(0, 4).filter((o) => {
          const matchSearch =
            searchQuery === "" ||
            o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            o.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            o.type.toLowerCase().includes(searchQuery.toLowerCase());
          const matchYear = yearFilter === "all" || o.year === yearFilter;
          return matchSearch && matchYear;
        });

        const years = [
          "all",
          ...Array.from(new Set(OBYAVLENIYA.map((o) => o.year))),
        ];

        return (
          <section
            id="obyavleniya"
            className="section-py"
            style={{ backgroundColor: "#f8fafc" }}
          >
            <div className="page-container">
              {/* Header */}
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#2d6a4f",
                  marginBottom: 8,
                }}
              >
                Обявления
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "#0f172a",
                  margin: 0,
                  marginBottom: 12,
                  maxWidth: 640,
                }}
              >
                Публични обявления по екологични процедури
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6B7280",
                  lineHeight: 1.7,
                  maxWidth: 580,
                  margin: 0,
                  marginBottom: 32,
                }}
              >
                Задължителни съобщения за инвестиционни предложения, екологични
                оценки и доклади, публикувани за обществен достъп.
              </p>

              {/* Search + Year filter row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 12,
                  marginBottom: 32,
                  alignItems: "center",
                }}
              >
                {/* Search */}
                <div style={{ position: "relative" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.34-4.34" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Търсене по обект, тип или населено място"
                    aria-label="Търсене в обявленията"
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: 48,
                      paddingLeft: 42,
                      paddingRight: 16,
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      fontSize: "0.925rem",
                      color: "#374151",
                      backgroundColor: "#ffffff",
                      outline: "none",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    }}
                  />
                </div>
                {/* Year dropdown */}
                <div style={{ position: "relative" }}>
                  <button
                    onClick={() => setYearDropdownOpen((v) => !v)}
                    style={{
                      height: 48,
                      minWidth: 160,
                      paddingLeft: 16,
                      paddingRight: 12,
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      fontSize: "0.925rem",
                      color: "#374151",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      cursor: "pointer",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {yearFilter === "all" ? "Всички години" : yearFilter}
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
                      style={{ opacity: 0.5 }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {yearDropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        right: 0,
                        zIndex: 50,
                        backgroundColor: "#ffffff",
                        border: "1px solid #E5E7EB",
                        borderRadius: 8,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                        minWidth: 160,
                        overflow: "hidden",
                      }}
                    >
                      {years.map((y) => (
                        <button
                          key={y}
                          onClick={() => {
                            setYearFilter(y);
                            setYearDropdownOpen(false);
                          }}
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            padding: "10px 16px",
                            fontSize: "0.925rem",
                            color: yearFilter === y ? "#2d6a4f" : "#374151",
                            fontWeight: yearFilter === y ? 600 : 400,
                            backgroundColor:
                              yearFilter === y ? "#ecfdf5" : "transparent",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          {y === "all" ? "Всички години" : y}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Cards grid */}
              <ul className="obyavleniya-grid">
                {filtered.map((o, i) => (
                  <li key={i}>
                    <article
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        backgroundColor: "#ffffff",
                        border: "1px solid #E5E7EB",
                        borderRadius: 16,
                        padding: "20px 22px 22px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                      }}
                    >
                      {/* Meta row */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 10,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            backgroundColor: TAG_COLORS[o.type] ?? "#ecfdf5",
                            color: "#1e3a2f",
                            padding: "3px 10px",
                            borderRadius: 999,
                          }}
                        >
                          {o.type}
                        </span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: 12,
                            color: "#9CA3AF",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <rect width="18" height="18" x="3" y="4" rx="2" />
                            <path d="M3 10h18" />
                          </svg>
                          <time dateTime={o.dateVal}>{o.date}</time>
                        </span>
                      </div>
                      {/* Title */}
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          lineHeight: 1.4,
                          margin: 0,
                          marginBottom: 8,
                        }}
                      >
                        {o.title}
                      </h3>
                      {/* Description */}
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "#6B7280",
                          lineHeight: 1.7,
                          margin: 0,
                          flex: 1,
                          marginBottom: 14,
                        }}
                      >
                        {o.desc}
                      </p>
                      {/* Location */}
                      <p
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#6B7280",
                          margin: 0,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#2d6a4f"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {o.location}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>

              {filtered.length === 0 && (
                <p
                  style={{
                    textAlign: "center",
                    color: "#9CA3AF",
                    padding: "40px 0",
                    fontSize: "0.95rem",
                  }}
                >
                  Няма намерени обявления по зададените критерии.
                </p>
              )}

              {/* "Виж всички" button */}
              <div style={{ marginTop: 28 }}>
                <a
                  href="/obyavleniya"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    border: "1px solid #E5E7EB",
                    borderRadius: 8,
                    backgroundColor: "#ffffff",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#374151",
                    textDecoration: "none",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  Виж всички обявления
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── ЧЗВ ─────────────────────────────────────────────── */}
      <section
        id="chzv"
        className="section-py"
        style={{ backgroundColor: "#f0f4f1" }}
      >
        <div className="page-container" style={{ maxWidth: 800 }}>
          {/* Header */}
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#2d6a4f",
              marginBottom: 10,
            }}
          >
            Често задавани въпроси
          </p>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              margin: 0,
              marginBottom: 40,
            }}
          >
            Отговори на най-честите въпроси за екологичните процедури
          </h2>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                q: "Какви процедури са необходими при инвестиционно предложение?",
                a: "При ново инвестиционно предложение първата стъпка е подаване на уведомление до компетентния орган – съответната РИОСВ, а при по-мащабни обекти до МОСВ. Следва преценка на необходимостта от ОВОС и/или оценка за съвместимост с Натура 2000. В зависимост от решението се изготвя доклад за ОВОС или се получава решение да не се извършва ОВОС. Паралелно се уреждат режимите по води, отпадъци и въздух, а при инсталации по Приложение 4 на ЗООС – и комплексно разрешително. Зелени Проекти Консулт ЕООД поема цялата процедура – документация, кореспонденция и защита пред експертния екологичен съвет.",
              },
              {
                q: "Кога се изисква Комплексно разрешително (КР)?",
                a: "Комплексно разрешително се изисква за инсталации и съоръжения, попадащи в Приложение 4 на Закона за опазване на околната среда – например големи горивни инсталации, производство на метали, химическа промишленост, третиране на отпадъци над определени прагове, интензивно животновъдство и други. Разрешителното се издава от Изпълнителна агенция по околна среда (ИАОС) и се основава на прилагането на най-добрите налични техники (НДНТ). Експлоатацията без валидно КР води до принудителни административни мерки и имуществени санкции.",
              },
              {
                q: 'Как се работи с Националната информационна система "Отпадъци" (НИСО)?',
                a: "НИСО е задължителната електронна платформа на ИАОС, в която се водят отчетните книги, подават се годишните отчети и се заявяват документи по Закона за управление на отпадъците. Работата изисква регистрация на задълженото лице, оторизиране на потребители с квалифициран електронен подпис, коректна класификация на отпадъците и своевременно вписване на всяко образуване, предаване или приемане. Ние поемаме пълното администриране на профила – от първоначална регистрация и работни листове до месечна отчетност и годишни отчети в законовите срокове.",
              },
              {
                q: "В кои градове и региони предоставяте услуги?",
                a: "Зелени Проекти Консулт ЕООД работи на територията на цяла България. Офисът ни е в гр. Шумен, ул. „Хан Крум“ №4, ет. 1, офис 19, а активно обслужваме клиенти в София, Пловдив, Варна, Бургас, Русе, Стара Загора, Търговище, Разград, Добрич и Велико Търново. Имаме опит с всички регионални инспекции по околната среда и водите (РИОСВ), ИАОС и МОСВ.",
              },
            ].map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E5E7EB",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "18px 22px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#0f172a",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.q}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.2s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 22px 20px",
                        fontSize: "0.9rem",
                        color: "#4B5563",
                        lineHeight: 1.75,
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── КОНТАКТИ ─────────────────────────────────────────── */}
      <section
        id="contact"
        className="section-py"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="page-container">
          {/* Header */}
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#2d6a4f",
              marginBottom: 10,
            }}
          >
            Контакти
          </p>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              margin: 0,
              marginBottom: 12,
              maxWidth: 600,
            }}
          >
            Обадете се – ще получите план на процедурите
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#6B7280",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: 0,
              marginBottom: 40,
            }}
          >
            Консултацията започва с кратък разговор. Обадете ни се в работно
            време и опишете обекта – ще ви кажем какви процедури са необходими и
            в какви срокове.
          </p>

          {/* Main grid: left cards + right map */}
          <div
            className="contact-grid"
            style={{
              alignItems: "start",
            }}
          >
            {/* Left — cards */}
            <div className="contact-cards">
              {/* Phone card — spans full width */}
              <div
                style={{
                  gridColumn: "1 / -1",
                  backgroundColor: "#1e3a2f",
                  borderRadius: 16,
                  padding: "28px 28px 24px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: 0,
                    marginBottom: 8,
                  }}
                >
                  Обадете се сега
                </p>
                <a
                  href="tel:+359892704368"
                  style={{
                    display: "block",
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    fontWeight: 800,
                    color: "#52b788",
                    textDecoration: "none",
                    lineHeight: 1.1,
                    marginBottom: 20,
                  }}
                >
                  0892 704 368
                </a>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href="tel:+359892704368"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      backgroundColor: "#2d6a4f",
                      color: "#ffffff",
                      padding: "12px 24px",
                      borderRadius: 8,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
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
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                    Обади се сега
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61577639725841"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      color: "#ffffff",
                      padding: "12px 24px",
                      borderRadius: 8,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      backgroundColor: "transparent",
                    }}
                  >
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
                      aria-hidden="true"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>

              {/* Office card */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderRadius: 16,
                  padding: "22px 24px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#0f172a",
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Офис
                </h3>
                <address
                  style={{
                    fontSize: "0.875rem",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    fontStyle: "normal",
                    marginBottom: 10,
                  }}
                >
                  гр. Шумен, ул. &quot;Хан Крум&quot; №4, ет. 1, офис 19
                  <br />
                  България
                </address>
                <a
                  href="https://www.google.com/maps?q=43.271842648077495,26.933416935534503"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#2d6a4f",
                    textDecoration: "underline",
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  Виж в Google Maps
                </a>
                <a
                  href="mailto:greenpconsult@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: "0.875rem",
                    color: "#374151",
                    textDecoration: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  greenpconsult@gmail.com
                </a>
              </div>

              {/* Hours card */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderRadius: 16,
                  padding: "22px 24px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#0f172a",
                    margin: 0,
                    marginBottom: 16,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  Работно време
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      fontSize: "0.875rem",
                      color: "#6B7280",
                    }}
                  >
                    <span>Понеделник – Петък</span>
                    <span style={{ fontWeight: 600, color: "#0f172a" }}>
                      08:00 – 19:00
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      fontSize: "0.875rem",
                      color: "#6B7280",
                    }}
                  >
                    <span>Събота – Неделя</span>
                    <span style={{ fontWeight: 600, color: "#0f172a" }}>
                      08:00 – 17:00
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right — map */}
            <div
              className="contact-map"
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}
            >
              <iframe
                title="Карта – офис в гр. Шумен, ул. Хан Крум №4"
                src="https://www.openstreetmap.org/export/embed.html?bbox=26.9304%2C43.2705%2C26.9365%2C43.2732&layer=mapnik&marker=43.271842648077495%2C26.933416935534503"
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
