# AquaClean Services - Professional Water Tank Cleaning Application

> **"Professional Water Tank Cleaning at Your Doorstep"**

A modern, high-conversion, responsive web application for residential, commercial, industrial, and cooperative housing society water tank cleaning and sanitization services across Mumbai, Thane, Navi Mumbai, and MMR.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 + Custom Modern Design System
- **Routing**: React Router DOM (v7)
- **Icons**: Lucide React
- **Persistence**: `localStorage` (with backend-ready data models and storage utility abstraction)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Application Pages & Features

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero with statistics, 8+ featured service cards, 6-stage process, why choose us, customer reviews, coverage locations, and multi-channel CTAs. |
| **About Us** | `/about` | Company story, mission, core values (Hygiene, Safety, Transparency, Professionalism, Satisfaction), leadership team, and credentials. |
| **Services** | `/services` | Comprehensive listing across 5 categories: Residential, Commercial, Society, Industrial, and Specialized Treatments with real-time search & category tabs. |
| **Service Details** | `/services/:slug` | Dynamic pages with 8-stage cleaning steps, equipment deployed, safety precautions, starting price, relevant FAQs, and direct booking trigger. |
| **Pricing** | `/pricing` | Transparent pricing tiers (Small, Medium, Large, Commercial), interactive pricing calculator, optional add-ons, and Society AMC proposal section. |
| **How It Works** | `/how-it-works` | Step-by-step deep dive into the 6-stage mechanized cleaning process, comparing traditional manual labor vs. mechanized high-pressure protocols. |
| **Why Choose Us** | `/why-choose-us` | The 6 core pillars of service excellence and our 4-way customer protection guarantees. |
| **Customer Reviews** | `/reviews` | Verified reviews with 5-star & 4-star filtering, rating breakdown, and an interactive review submission modal. |
| **FAQ** | `/faq` | Categorized, searchable accordion answering all 12 key questions regarding tank frequency, underground sumps, safety, and timing. |
| **Contact Us** | `/contact` | Complete contact directory (+91 98765 43210, WhatsApp, Email, Office address), business hours (Mon-Sun 8 AM - 7 PM), interactive message form, and map container. |
| **Book a Service** | `/book` | Multi-step interactive booking form with dynamic live price preview, slot selection, `localStorage` persistence, and instant confirmation receipt with Booking ID (`AC-YYYYMMDD-XXX`). |
| **Areas We Serve** | `/areas` | Live searchable area checker for Mumbai, Borivali, Andheri, Thane, Vasai, Virar, Nalasopara, Mira Road, Bhayandar, Navi Mumbai, and Panvel. |
| **Terms & Conditions** | `/terms` | Clear, professional service guidelines, cancellation rules, site access requirements, and 30-day warranty. |
| **Privacy Policy** | `/privacy` | Strict data privacy policy highlighting zero third-party spam and safe handling of customer details. |

---

## 📱 Mobile-First Features

- **Sticky Mobile Bottom Navigation Bar**: One-touch access to **Call Now** (`tel:+919876543210`), **WhatsApp Chat** (with pre-filled text), and **Book Now**.
- **Responsive Hamburger Drawer**: Clean slide-down menu with direct links and quick helpline.
- **Large Touch Targets**: Form elements, dropdowns, and buttons optimized for mobile ergonomics.

---

## ⚙️ Configuration

Central configuration for phone numbers, WhatsApp link, email, office address, and stats is located in:
```
src/config/site.ts
```
To update the company phone number or WhatsApp across the entire site, change `siteConfig.phone` and `siteConfig.whatsapp` in this single file.

---

## 🔌 Future Backend Integration Ready

The application uses clean abstract functions in `src/utils/storage.ts` (`saveBooking`, `getBookings`, `saveContactMessage`), which can be directly replaced with REST or GraphQL endpoints (`axios` or `fetch`) without altering component interfaces.
