"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

// ⭐ Currency type - fixes TypeScript indexing error
type CurrencyType = "INR" | "USD" | "GBP" | "EUR";

// ⭐ PricingCard props types (fix for implicit any errors)
interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  active?: boolean;
  custom?: boolean;
}

export default function Pricing() {
  const [currency, setCurrency] = useState<CurrencyType>("INR");

  const priceMap: Record<CurrencyType, { symbol: string; startup: number; pro: number; team: number }> = {
    INR: { symbol: "₹", startup: 15000, pro: 25000, team: 40000 },
    USD: { symbol: "$", startup: 180, pro: 250, team: 350 },
    GBP: { symbol: "£", startup: 145, pro: 200, team: 280 },
    EUR: { symbol: "€", startup: 165, pro: 230, team: 325 },
  };

  const { symbol, startup, pro, team } = priceMap[currency];

  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Pricing">
      <section className="pricing-area pt-110 pb-120 overflow-hidden">
        <div className="container text-center">
          <h2 className="title mb-20">Pick a Plan</h2>

          {/* Currency Selector */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyType)}
            style={{
              padding: "0px 16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginBottom: "40px",
            }}
          >
            <option value="INR">🇮🇳 INR</option>
            <option value="USD">🇺🇸 USD</option>
            <option value="GBP">🇬🇧 GBP</option>
            <option value="EUR">🇪🇺 EUR</option>
          </select>

          {/* Pricing Cards */}
          <div className="row gy-30 justify-content-center">
            <PricingCard
              title="Startup"
              price={`${symbol}${startup}`}
              features={[
                "1 Website / Landing Page",
                "SEO Basics (5 keywords)",
                "12 Social Posts / Month",
                "Monthly Report",
              ]}
            />

            <PricingCard
              title="Pro"
              active
              price={`${symbol}${pro}`}
              features={[
                "Full Website Optimization",
                "Advanced SEO (15 keywords)",
                "20+ Social Posts / Month",
                "Ad Campaign Setup",
                "Analytics & Strategy Call",
              ]}
            />

            <PricingCard
              title="Team"
              price={`${symbol}${team}`}
              features={[
                "Complete Marketing Management",
                "E-commerce or Web Dev",
                "SEO + Ads + Content",
                "Email Campaigns + Lead Funnel",
              ]}
            />

            <PricingCard
              title="Custom Plan"
              price="Let's Talk"
              custom
              features={[
                "Tailored Enterprise Strategy",
                "International SEO",
                "CRM + Automation",
                "Dedicated Growth Team",
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// ⭐ Fully typed card component
function PricingCard({ title, price, features, active, custom }: PricingCardProps) {
  return (
    <div className="col-lg-3 col-md-6">
      <div
        className="pricing-card"
        style={{
          background: active ? "#f26b38" : "#fff",
          color: active ? "#fff" : "#111",
          borderRadius: "18px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          padding: "40px 24px",
          transition: "all .3s",
          transform: active ? "scale(1.05)" : "scale(1)",
        }}
      >
        <h4 style={{ fontSize: "22px", marginBottom: "10px" }}>{title}</h4>
        <h3 style={{ fontSize: "32px", margin: "10px 0" }}>
          {price}
          {!custom && <span style={{ fontSize: "16px" }}>/mo</span>}
        </h3>

        <ul style={{ textAlign: "left", lineHeight: "1.8", marginTop: "20px" }}>
          {features.map((f, i) => (
            <li key={i}>✓ {f}</li>
          ))}
        </ul>

        <div style={{ marginTop: "30px" }}>
          <Link
            href="/contact"
            className="btn btn-three square-btn mt-40"
            style={{
              background: active ? "#fff" : "#f26b38",
              color: active ? "#111" : "#fff",
              padding: "10px 26px",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            {custom ? "GET CUSTOM QUOTE" : "CHOOSE THIS PLAN"}
          </Link>
        </div>
      </div>
    </div>
  );
}
