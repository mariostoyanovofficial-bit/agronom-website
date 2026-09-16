"use client";

import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { OBYAVLENIYA, TAG_COLORS } from "@/lib/obyavleniya-data";

const CalendarIcon = () => (
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
);

const PinIcon = () => (
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
);

export default function ObyavleniyaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

  const years = [
    "all",
    ...Array.from(new Set(OBYAVLENIYA.map((o) => o.year)))
      .sort()
      .reverse(),
  ];
  const types = ["all", ...Array.from(new Set(OBYAVLENIYA.map((o) => o.type)))];

  const filtered = OBYAVLENIYA.filter((o) => {
    const matchSearch =
      searchQuery === "" ||
      o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchYear = yearFilter === "all" || o.year === yearFilter;
    const matchType = typeFilter === "all" || o.type === typeFilter;
    return matchSearch && matchYear && matchType;
  });

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
            <span style={{ color: "#374151" }}>Обявления</span>
          </nav>

          {/* Header */}
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
            Обявления
          </p>
          <h1
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              margin: 0,
              marginBottom: 12,
              maxWidth: 700,
            }}
          >
            Публични обявления по екологични процедури
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#6B7280",
              lineHeight: 1.7,
              maxWidth: 620,
              margin: 0,
              marginBottom: 40,
            }}
          >
            Задължителни съобщения за инвестиционни предложения, екологични
            оценки и доклади, публикувани за обществен достъп.
          </p>

          {/* Filters row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              gap: 12,
              marginBottom: 36,
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

            {/* Type dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => {
                  setTypeDropdownOpen((v) => !v);
                  setYearDropdownOpen(false);
                }}
                style={{
                  height: 48,
                  minWidth: 200,
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
                {typeFilter === "all" ? "Всички типове" : typeFilter}
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
              {typeDropdownOpen && (
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
                    minWidth: 200,
                    overflow: "hidden",
                  }}
                >
                  {types.map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTypeFilter(t);
                        setTypeDropdownOpen(false);
                      }}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        padding: "10px 16px",
                        fontSize: "0.925rem",
                        color: typeFilter === t ? "#2d6a4f" : "#374151",
                        fontWeight: typeFilter === t ? 600 : 400,
                        backgroundColor:
                          typeFilter === t ? "#ecfdf5" : "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {t === "all" ? "Всички типове" : t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Year dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => {
                  setYearDropdownOpen((v) => !v);
                  setTypeDropdownOpen(false);
                }}
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

          {/* Results count */}
          <p
            style={{ fontSize: "0.875rem", color: "#9CA3AF", marginBottom: 20 }}
          >
            {filtered.length === OBYAVLENIYA.length
              ? `${OBYAVLENIYA.length} обявления`
              : `${filtered.length} от ${OBYAVLENIYA.length} обявления`}
          </p>

          {/* Cards grid */}
          {filtered.length > 0 ? (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))",
                gap: 16,
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
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
                        <CalendarIcon />
                        <time dateTime={o.dateVal}>{o.date}</time>
                      </span>
                    </div>
                    <h2
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
                    </h2>
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
                      <PinIcon />
                      {o.location}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "64px 0",
                color: "#9CA3AF",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D1D5DB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: "block", margin: "0 auto 16px" }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.34-4.34" />
              </svg>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#6B7280",
                  margin: 0,
                }}
              >
                Няма намерени обявления
              </p>
              <p
                style={{ fontSize: "0.875rem", color: "#9CA3AF", marginTop: 6 }}
              >
                Опитайте с различни критерии за търсене.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
