# 🛒 Sellora

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Next.js](https://img.shields.io/badge/Next.js-13-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-5.0-brightgreen) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue)

**Sellora** is a **modern, AI-powered B2C multivendor marketplace** built for 2026 and beyond.

It enables multiple sellers to list and sell products on a single platform, while buyers enjoy a fast, SEO-friendly, personalized shopping experience powered by AI.

Sellora is inspired by platforms like **Daraz, Amazon, and Flipkart**, but designed to be:

* Lighter
* Smarter
* More flexible
* Built with modern web architecture

---

## 🚀 Vision

To build a **global, scalable, AI-first ecommerce platform** that:

* Helps sellers sell more
* Helps buyers find the right products faster
* Works efficiently even with a small engineering team

---

## ✨ Core Features

### 🧑‍💻 Buyer

* Browse products by category
* Product search (AI-assisted later)
* Product recommendations
* Wishlist & cart
* Secure checkout
* Order tracking
* Reviews & ratings

### 🏪 Seller

* Seller registration & onboarding
* Product management (CRUD)
* Inventory & stock control
* Order management
* Earnings dashboard
* Reviews & performance insights

### 🛠 Admin

* Vendor approval
* Category management
* Commission control
* Order monitoring
* User & seller moderation
* Platform analytics

---

## 🤖 AI-Powered Features (Planned)

* 🔍 Smart product search
* 🎯 Personalized recommendations
* 📝 AI product description suggestions
* 📈 Seller performance insights
* 🚨 Fraud & spam detection
* 🛍 Smart upsell & cross-sell

(All AI features are designed using **free & open-source tools**.)

---

## 🧰 Tech Stack

### Frontend

* **Next.js (App Router)**
* **JavaScript (JSX)**
* **Tailwind CSS**
* Server Components (SEO-friendly)

### Backend

* **Next.js backend (API routes + Server Actions)**
* **MongoDB** (native driver)
* **Zod** for validation

### AI (Open-Source Only)

* Sentence Transformers
* Vector similarity search
* Rule-based + ML hybrid logic
* No paid APIs required

---

## 📁 Project Structure

```
src/
├─ app/
│  ├─ (public)/           # Home, category, product pages
│  ├─ (auth)/             # Login / Register
│  ├─ (buyer)/            # Buyer dashboard
│  ├─ (seller)/           # Seller dashboard
│  ├─ (admin)/            # Admin panel
│  ├─ api/                # Backend APIs
│  ├─ layout.jsx
│  └─ globals.css
│
├─ components/
│  ├─ ui/                 # Reusable UI components
│  └─ layout/             # Header, footer
│
├─ lib/
│  ├─ mongodb.js          # DB connection
│  ├─ auth.js             # Auth helpers
│  ├─ schemas.js          # Zod schemas
│  └─ utils.js
│
├─ actions/               # Server Actions
└─ constants/             # Roles, enums
```

---

## 🔍 SEO-First by Design

Sellora is built with SEO as a **core feature**, not an afterthought:

* Server-side rendering
* Clean URLs
* Metadata API
* Dynamic sitemap support
* Minimal client JavaScript
* Fast page loads

Perfect for:

* Organic traffic
* Product discovery
* Global reach

---

## 🔐 Security Basics

* Server-only business logic
* Input validation with Zod
* Password hashing
* Role-based access (buyer / seller / admin)
* Secure environment variables

---

## 💰 Monetization Model

Sellora supports:

* Commission per order
* Category-based commission rates
* Seller subscription plans (future)
* Sponsored product listings (future)

Commission is calculated **per order**, not per product view.

---

## 🧠 Design Philosophy

* Keep it simple
* Server-first architecture
* Avoid unnecessary dependencies
* Scalable, but not over-engineered
* Solo-founder friendly

---

## 🛣 Roadmap

### Phase 1 (MVP)

* Buyer & seller flows
* Product listings
* Cart & checkout
* Orders
* Admin controls

### Phase 2

* AI recommendations
* Smart search
* Seller analytics

### Phase 3

* Global payments
* Logistics integrations
* Advanced AI personalization

---

## 📦 Installation

```bash
npm install
npm run dev
```

Environment variables:

```env
MONGODB_URI=mongodb://localhost:27017/sellora
```

---

## 📄 License

MIT

---

## 👤 Author

Built by a **solo founder** with the goal of creating a **global, AI-powered ecommerce platform** using only **free and open-source technologies**.
