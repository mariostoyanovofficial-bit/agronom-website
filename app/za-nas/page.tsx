"use client";

import Image from "next/image";
import { useState } from "react";
import MainLayout from "@/components/MainLayout";

const GREEN = "#2d6a4f";

const SERVICE_BLOCKS: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}[] = [
  {
    title: "Екологичен аутсорсинг",
    items: [
      "Абонаментно обслужване на фирми",
      "Представителство пред контролни органи",
      "Пълно поемане на задълженията по екозаконодателството",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={GREEN}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Документи и процедури",
    items: [
      "Уведомления за инвестиционни предложения",
      "Цялостно водене на процедури по ОВОС (Оценка на въздействието върху околната среда)",
      "ЕО (Екологична оценка)",
      "ОС (Оценка на съвместимост)",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={GREEN}
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
    title: "Екологични доклади",
    items: [
      "Доклади по ЗООС (за предприятия с нисък или висок рисков потенциал)",
      "Доклади за отпадъци, шум, емисии, подземни води и други",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={GREEN}
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
    title: "Европейски проекти",
    items: [
      "Партньорство с водещи фирми за подготовка и управление на проекти",
      "Подкрепа по програми като ПРСР, Иновации и конкурентоспособност и др.",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={GREEN}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Фотоволтаични системи",
    items: [
      "Доставка, проектиране и монтаж на соларни инсталации",
      "За дома, бизнеса и индустрията",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={GREEN}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
];

const WHY_US = [
  "Екип с опит в държавната администрация и реалния сектор",
  "Професионализъм, коректност и навременно изпълнение",
  "Персонализиран подход и дългосрочни решения",
  "Висока успеваемост при административни процедури",
];

const REFERENCES = [
  { src: "/zanas/reference-b101.png", alt: "Референция Б101" },
  { src: "/zanas/reference-b102.png", alt: "Референция Б102" },
  { src: "/zanas/reference-b103.png", alt: "Референция Б103" },
  { src: "/zanas/reference-b103-2.png", alt: "Референция Б103 (2)" },
  { src: "/zanas/reference-b104-1.png", alt: "Референция Б104 (1)" },
  { src: "/zanas/reference-b104-a.png", alt: "Референция Б104 (a)" },
  { src: "/zanas/reference-b104-b.png", alt: "Референция Б104 (b)" },
  {
    src: "/zanas/reference-sun-technology.png",
    alt: "Референция Сън Технолоджи",
  },
];

const OFFICE_PHOTOS = [
  { src: "/zanas/office-1.jpg", alt: "Офис 1" },
  { src: "/zanas/office-2.jpg", alt: "Офис 2" },
  { src: "/zanas/office-3.jpg", alt: "Офис 3" },
  { src: "/zanas/office-4.jpg", alt: "Офис 4" },
  { src: "/zanas/office-5.jpg", alt: "Офис 5" },
];

const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke={GREEN}
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ZaNasPage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <MainLayout>
      {/* ── Breadcrumb ───────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          className="page-container"
          style={{
            paddingTop: 16,
            paddingBottom: 16,
            fontSize: 14,
            color: "#6B7280",
          }}
        >
          <a href="/" style={{ color: GREEN, textDecoration: "none" }}>
            Начало
          </a>
          <span style={{ margin: "0 8px" }}>›</span>
          <span>За нас</span>
        </div>
      </div>

      {/* ── HERO / Intro ─────────────────────────────────────── */}
      <section style={{ backgroundColor: GREEN, color: "#ffffff" }}>
        <div
          className="page-container"
          style={{
            paddingTop: "clamp(44px, 7vw, 64px)",
            paddingBottom: "clamp(48px, 8vw, 72px)",
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
              marginBottom: 14,
            }}
          >
            За нас
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              margin: 0,
              maxWidth: 820,
            }}
          >
            Добре дошли в „Зелени проекти консулт“ ЕООД
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.92)",
              maxWidth: 720,
            }}
          >
            Вашият доверен партньор за екологични услуги, европейски проекти и
            зелени енергийни решения.
          </p>
        </div>
      </section>

      {/* ── Кои сме ние ──────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "clamp(44px, 8vw, 72px) 0",
        }}
      >
        <div className="page-container">
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Кои сме ние?
          </h2>
          <div
            style={{
              maxWidth: 820,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                color: "#4B5563",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              „Зелени проекти консулт“ ЕООД е специализирана консултантска
              компания с богат опит в областта на екологичното законодателство,
              устойчивото развитие и управлението на екологични ангажименти на
              фирми и организации.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#4B5563",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Работим с частни и публични клиенти в цялата страна, като
              предлагаме пълна експертна подкрепа – от административни процедури
              до реализация на зелени енергийни проекти.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#4B5563",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Много силни и утвърдени компании вече ни се довериха, като избраха
              нашия професионализъм и ангажираност към детайла. Можете да ги
              видите в страницата{" "}
              <a
                href="/partnori"
                style={{
                  color: GREEN,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                „Компаниите, които ни се довериха“
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Нашите основни услуги ────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "clamp(44px, 8vw, 72px) 0",
        }}
      >
        <div className="page-container">
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 36,
            }}
          >
            Нашите основни услуги
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {SERVICE_BLOCKS.map((b, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  padding: "26px 26px 24px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: "#ecfdf5",
                    marginBottom: 16,
                  }}
                >
                  {b.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: 14,
                  }}
                >
                  {b.title}
                </h3>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {b.items.map((it, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: "0.925rem",
                        color: "#374151",
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: 3,
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
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Защо да изберете нас ─────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "clamp(44px, 8vw, 72px) 0",
        }}
      >
        <div className="page-container">
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 32,
            }}
          >
            Защо да изберете нас?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {WHY_US.map((w, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  border: "1px solid #E5E7EB",
                  borderLeft: `4px solid ${GREEN}`,
                  backgroundColor: "#f8fafc",
                  borderRadius: 12,
                  padding: "18px 20px",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    backgroundColor: "#dcfce7",
                  }}
                >
                  {checkIcon}
                </span>
                <span
                  style={{
                    fontSize: "0.975rem",
                    fontWeight: 600,
                    color: "#0f172a",
                    lineHeight: 1.5,
                  }}
                >
                  {w}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Свържете се с нас ────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "clamp(40px, 7vw, 64px) 0",
        }}
      >
        <div className="page-container">
          <div
            style={{
              backgroundColor: GREEN,
              borderRadius: 20,
              padding: "clamp(24px, 5vw, 40px) clamp(20px, 5vw, 44px)",
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Свържете се с нас
              </h2>
              <p
                style={{
                  marginTop: 10,
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.7,
                }}
              >
                Готови сме да поемем екологичните задължения на вашия бизнес.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="tel:+359892704368"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  backgroundColor: "#ffffff",
                  color: GREEN,
                  padding: "13px 24px",
                  borderRadius: 10,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
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
                0892 704 368
              </a>
              <a
                href="mailto:GreenPConsult@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  border: "2px solid rgba(255,255,255,0.6)",
                  color: "#ffffff",
                  padding: "13px 24px",
                  borderRadius: 10,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                GreenPConsult@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Референции и препоръки ───────────────────────────── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "clamp(44px, 8vw, 72px) 0",
        }}
      >
        <div className="page-container">
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GREEN,
              marginBottom: 12,
            }}
          >
            Референции и препоръки от наши клиенти и партньори
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 36,
            }}
          >
            Нашите референции
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {REFERENCES.map((ref, i) => (
              <button
                key={i}
                onClick={() => setLightboxImg(ref.src)}
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 14,
                  overflow: "hidden",
                  padding: 0,
                  backgroundColor: "#ffffff",
                  cursor: "zoom-in",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
                aria-label={`Отвори ${ref.alt}`}
              >
                <Image
                  src={ref.src}
                  alt={ref.alt}
                  width={480}
                  height={640}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Галерия / офис ───────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "0 0 clamp(52px, 9vw, 80px)",
        }}
      >
        <div className="page-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {OFFICE_PHOTOS.map((p, i) => (
              <button
                key={i}
                onClick={() => setLightboxImg(p.src)}
                style={{
                  border: "none",
                  borderRadius: 14,
                  overflow: "hidden",
                  padding: 0,
                  cursor: "zoom-in",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
                aria-label={`Отвори ${p.alt}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={640}
                  height={420}
                  style={{
                    width: "100%",
                    height: 180,
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────── */}
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
            aria-label="Затвори"
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
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <Image
            src={lightboxImg}
            alt="Преглед"
            width={1000}
            height={1400}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: 8,
            }}
          />
        </div>
      )}
    </MainLayout>
  );
}
