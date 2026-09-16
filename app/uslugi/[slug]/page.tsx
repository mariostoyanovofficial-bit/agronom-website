import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainLayout from "@/components/MainLayout";
import {
  USLUGI,
  getUslugaBySlug,
  USLUGI_KONSULTANTSKI,
  USLUGI_PROEKTANTSKI,
} from "@/lib/uslugi-data";

export function generateStaticParams() {
  return USLUGI.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const usluga = getUslugaBySlug(slug);
  if (!usluga) return { title: "Услуга" };
  return {
    title: `${usluga.title} | Агроном`,
    description: usluga.intro,
  };
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2d6a4f"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default async function UslugaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const usluga = getUslugaBySlug(slug);

  if (!usluga) {
    notFound();
  }

  const related =
    usluga.category === "Консултантски услуги"
      ? USLUGI_KONSULTANTSKI
      : USLUGI_PROEKTANTSKI;

  return (
    <MainLayout>
      <div
        style={{
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
          padding: "72px 0 104px",
        }}
      >
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 32px" }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.85rem",
              color: "#9CA3AF",
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                color: "#2d6a4f",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Начало
            </a>
            <span>/</span>
            <span style={{ color: "#6B7280" }}>{usluga.category}</span>
            <span>/</span>
            <span style={{ color: "#374151" }}>{usluga.title}</span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) 300px",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* Main */}
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#2d6a4f",
                  margin: 0,
                  marginBottom: 8,
                }}
              >
                {usluga.category}
              </p>
              <h1
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "#0f172a",
                  margin: 0,
                  marginBottom: 16,
                }}
              >
                {usluga.title}
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#4B5563",
                  lineHeight: 1.8,
                  margin: 0,
                  marginBottom: usluga.paragraphs?.length ? 20 : 40,
                }}
              >
                {usluga.intro}
              </p>

              {/* Additional body paragraphs */}
              {usluga.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "1.05rem",
                    color: "#4B5563",
                    lineHeight: 1.8,
                    margin: 0,
                    marginBottom: i === usluga.paragraphs!.length - 1 ? 40 : 20,
                  }}
                >
                  {p}
                </p>
              ))}

              {/* Headed lists */}
              {usluga.lists && usluga.lists.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                    marginBottom: 24,
                  }}
                >
                  {usluga.lists.map((list, li) => (
                    <div
                      key={li}
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #E5E7EB",
                        borderRadius: 16,
                        padding: "24px 26px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                      }}
                    >
                      {list.heading && (
                        <p
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            margin: 0,
                            marginBottom: 16,
                          }}
                        >
                          {list.heading}
                        </p>
                      )}
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                        }}
                      >
                        {list.items.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              gap: 12,
                              fontSize: "0.975rem",
                              color: "#374151",
                              lineHeight: 1.65,
                            }}
                          >
                            <span
                              style={{
                                flexShrink: 0,
                                display: "inline-flex",
                                marginTop: 2,
                              }}
                            >
                              <CheckIcon />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Structured sections (subheading + paragraphs and/or list) */}
              {usluga.sections?.map((section, si) => (
                <div key={si} style={{ marginBottom: 24 }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      color: "#2d6a4f",
                      margin: 0,
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((sp, pi) => (
                    <p
                      key={pi}
                      style={{
                        fontSize: "1.05rem",
                        color: "#4B5563",
                        lineHeight: 1.8,
                        margin: 0,
                        marginBottom: 16,
                      }}
                    >
                      {sp}
                    </p>
                  ))}
                  {section.list && (
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #E5E7EB",
                        borderRadius: 16,
                        padding: "24px 26px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                        marginTop: 4,
                      }}
                    >
                      {section.list.heading && (
                        <p
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            margin: 0,
                            marginBottom: 16,
                          }}
                        >
                          {section.list.heading}
                        </p>
                      )}
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                        }}
                      >
                        {section.list.items.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              gap: 12,
                              fontSize: "0.975rem",
                              color: "#374151",
                              lineHeight: 1.65,
                            }}
                          >
                            <span
                              style={{
                                flexShrink: 0,
                                display: "inline-flex",
                                marginTop: 2,
                              }}
                            >
                              <CheckIcon />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Features */}
              {usluga.features && usluga.features.length > 0 && (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  {usluga.features.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: 16,
                        backgroundColor: "#ffffff",
                        border: "1px solid #E5E7EB",
                        borderRadius: 16,
                        padding: "22px 24px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 42,
                          height: 42,
                          borderRadius: 10,
                          backgroundColor: "#ecfdf5",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CheckIcon />
                      </span>
                      <div>
                        <p
                          style={{
                            fontSize: "1.02rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            margin: 0,
                            marginBottom: 6,
                          }}
                        >
                          {f.title}
                        </p>
                        <p
                          style={{
                            fontSize: "0.925rem",
                            color: "#6B7280",
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Extra services list */}
              {usluga.extraServices && (
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E5E7EB",
                    borderRadius: 16,
                    padding: "24px 26px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: 0,
                      marginBottom: 16,
                    }}
                  >
                    {usluga.extraServices.heading}
                  </p>
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
                    {usluga.extraServices.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          fontSize: "1rem",
                          color: "#374151",
                        }}
                      >
                        <span style={{ flexShrink: 0, display: "inline-flex" }}>
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Closing line */}
              {usluga.closing && (
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#4B5563",
                    lineHeight: 1.8,
                    margin: 0,
                    marginTop: 24,
                  }}
                >
                  {usluga.closing}
                </p>
              )}

              {/* CTA */}
              <div
                style={{
                  marginTop: 40,
                  background:
                    "linear-gradient(135deg, #1e3a2f 0%, #2d6a4f 100%)",
                  borderRadius: 20,
                  padding: "32px 36px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    margin: 0,
                    marginBottom: 8,
                  }}
                >
                  Нуждаете се от консултация?
                </h2>
                <p
                  style={{
                    fontSize: "0.975rem",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.7,
                    margin: 0,
                    marginBottom: 20,
                    maxWidth: 520,
                  }}
                >
                  Обадете ни се и ще получите конкретен план на процедурите,
                  срокове и ясна цена.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href="tel:+359892704368"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      backgroundColor: "#52b788",
                      color: "#0f172a",
                      padding: "12px 24px",
                      borderRadius: 8,
                      fontSize: "0.95rem",
                      fontWeight: 700,
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
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                    0892 704 368
                  </a>
                  <a
                    href="/#contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      border: "1.5px solid rgba(255,255,255,0.4)",
                      color: "#ffffff",
                      padding: "12px 24px",
                      borderRadius: 8,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Контакти
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar — other services in category */}
            <aside style={{ position: "sticky", top: 96 }}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderRadius: 16,
                  padding: "22px 20px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#2d6a4f",
                    margin: 0,
                    marginBottom: 14,
                  }}
                >
                  {usluga.category}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {related.map((r) => {
                    const active = r.slug === usluga.slug;
                    return (
                      <li key={r.slug}>
                        <a
                          href={`/uslugi/${r.slug}`}
                          style={{
                            display: "block",
                            padding: "10px 12px",
                            borderRadius: 8,
                            fontSize: "0.9rem",
                            fontWeight: active ? 700 : 500,
                            color: active ? "#2d6a4f" : "#374151",
                            backgroundColor: active ? "#ecfdf5" : "transparent",
                            textDecoration: "none",
                          }}
                        >
                          {r.short}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
