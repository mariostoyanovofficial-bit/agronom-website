"use client";

import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import { PARTNORI } from "@/lib/partnori-data";

export default function PartnoriPage() {
  return (
    <MainLayout>
      <div className="page-shell">
        <div className="page-container">
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
            <span style={{ color: "#374151" }}>Партньори</span>
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
            Партньори
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
            Хора, които ни се довериха
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#6B7280",
              lineHeight: 1.7,
              maxWidth: 620,
              margin: 0,
              marginBottom: 48,
            }}
          >
            Партньори и клиенти, с които сме работили по екологични процедури,
            разрешителни и проектиране.
          </p>

          {/* Logo grid */}
          <ul className="partnori-grid">
            {PARTNORI.map((p, i) => {
              const card = (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 150,
                    padding: "24px 28px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #E5E7EB",
                    borderRadius: 16,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={220}
                    height={110}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );

              return (
                <li key={i}>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={p.name}
                      style={{ display: "block" }}
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
