# ☕ Cikopai - Coffee Shop Website

Website company profile untuk coffee shop Cikopai yang menghadirkan pengalaman kopi terbaik dengan suasana yang hangat dan nyaman.

## 🚀 Features

- **Modern Design**: Landing page dengan design luxury dan elegant
- **Responsive Layout**: Optimized untuk desktop, tablet, dan mobile
- **Smooth Animations**: Lazy load animations dengan efek fade, slide, dan zoom
- **Interactive Components**: Navbar dengan scroll effects dan smooth transitions
- **Professional Gallery**: Bento grid layout untuk showcase ambiance
- **Contact Information**: Location & contact dengan Google Maps integration

## 🎨 Sections

### 🏠 Hero Section
- Full-screen background image dengan zoom animation
- Dynamic navbar dengan scroll effects
- Smooth fade-up animations untuk content

### ☕ Signature Menu
- Horizontal scroll cards untuk menu items
- Staggered animations untuk menu items
- Professional menu showcase

### 📖 The Story
- Two-column grid layout
- Content slide dari kiri, image slide dari kanan
- Typography yang kontras dan readable

### 🖼️ The Ambiance (Gallery)
- Bento grid layout untuk foto-foto
- Asymmetric grid dengan aspect ratio yang terjaga
- Lazy load animations dengan stagger effect

### 📍 Location & Contact
- Two-column layout dengan location info dan Google Maps
- Professional contact information
- Elegant typography dengan serif font

### 🦶 Footer
- Minimalist dan elegant design
- Contact information dan operating hours
- Copyright dengan XTRAHERA branding

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3
- **Styling**: Tailwind CSS 4.1.13
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Icons**: @tabler/icons-react
- **Animations**: CSS animations dengan Intersection Observer
- **Image Optimization**: Next.js Image component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository:
```bash
git clone https://github.com/DrRhea/cikopai.git
cd cikopai
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
```

3. Run development server:
```bash
npm run dev
# atau
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) di browser

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles dan animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── SignatureMenu.tsx    # Menu section
│   ├── TheStory.tsx         # Story section
│   ├── GalleryBentoGrid.tsx # Gallery bento grid
│   ├── LocationCTA.tsx      # Location & contact
│   ├── Footer.tsx           # Footer
│   └── ui/
│       └── bento-grid.tsx   # Bento grid components
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design System

### Colors
- **Primary Green**: `#2e4d3d` (Dark green)
- **Cream**: `#ebf4e5` (Light cream)
- **Gradient**: Linear gradient untuk The Story section

### Typography
- **Headers**: Bold, large sizes untuk impact
- **Body**: Readable dengan proper contrast
- **Serif**: Georgia untuk Location & Contact headers

### Animations
- **Fade Up**: Content muncul dari bawah
- **Slide**: Content slide dari kiri/kanan
- **Zoom**: Background zoom untuk hero section
- **Stagger**: Multiple elements dengan delay

## 🚀 Deployment

### Vercel (Recommended)
1. Push ke GitHub repository
2. Connect ke Vercel
3. Deploy otomatis

### Manual Deployment
```bash
npm run build
npm start
```

## 📱 Responsive Design

- **Mobile**: Optimized untuk smartphone
- **Tablet**: Perfect untuk tablet devices
- **Desktop**: Full experience untuk desktop

## 🎯 Performance

- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Intersection Observer untuk animations
- **CSS Animations**: Hardware-accelerated animations
- **Bundle Size**: Optimized dengan Next.js

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Credits

- **Design & Development**: XTRAHERA
- **Coffee Shop**: Cikopai
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui

---

Made with ❤️ by [XTRAHERA](https://xtrahera.com)