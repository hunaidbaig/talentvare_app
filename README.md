
# Job Portal UI 🚀

> A **Talentvare Portal UI** built with **React** and **CSS**.  
> It includes reusable components like **Top Navbar**, **Sidebar**, **Job Cards**, **Calendar Section**, and more — with clean separation of concerns and full mobile responsiveness.

![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![CSS](https://img.shields.io/badge/CSS-Responsive-blue?logo=css3)

---

## ✨ Features

- 🔹 Fully Responsive Layout (Desktop only)
- 🔹 Top Navigation Bar with:
  - Logo
  - Navigation Links
  - Search Input
  - Resume Button
  - Profile Avatar
- 🔹 Sidebar Navigation with Active States
- 🔹 Job Cards with Promotions, Details, and Apply Button
- 🔹 Calendar Accordion for Upcoming Interviews
- 🔹 Reusable Button Component (Variants: primary, outline, fullWidth)
- 🔹 Smooth Transitions on Expand/Collapse
- 🔹 **Mobile-Friendly Navbar** (only shows Logo, Resume Button, Avatar)
- 🔹 Clean Code Structure (No inline styles, no comments inside CSS)

---

## 🛠️ Tech Stack

- [React](https://react.dev/) (Frontend Framework)
- Plain [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (Modular, BEM Naming Convention)
- [React Icons](https://react-icons.github.io/react-icons/) / Inline SVGs (for icons like Search)

---

## 📁 Folder Structure

```bash
src/
├── assets/
│   └── (images like logo.png, profile.png)
├── fonts/
|   └──(Dailypro.ttf)
├── components/
│   ├── TopNavbar/
│   │   ├── TopNavbar.jsx
│   │   └── style.css
│   ├── Sidebar/
│   │   ├── Sidebar.jsx
│   │   └── style.css
│   ├── JobCard/
│   │   ├── JobCard.jsx
│   │   └── style.css
│   ├── CalendarSection/
│   │   ├── CalendarSection.jsx
│   │   └── style.css
│   ├── ui/
│   │   └── Button.jsx
│   └── icons/
│       └── SearchIconSvg.jsx
├── App.jsx
└── index.jsx
```

---

## 📜 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/job-portal-ui.git
cd Talentvare
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/).

---

## 📱 Mobile Responsiveness

- Navbar hides navigation links on screens smaller than 768px.
- **Mobile View** shows only:
  - Logo
  - Resume Button
  - Profile Avatar
- Job Cards stack vertically on mobile for better readability.
- Sidebar toggle feature (future improvement scope).

---
