# 🏏 Cricket Nerd

A stunning, comprehensive web application designed to gamify cricket learning and provide live updates. The app is fully responsive, leveraging high-quality UI aesthetics, glassmorphism, and vanilla CSS for a premium feel.

![Cricket Nerd Dashboard](src/assets/hero.png) *(Placeholder if you want to add screenshots later!)*

## 🌟 Features

### 1. **The Deck (Flashcard Module)**
- **Gamified Learning**: A deck of 20 intricately detailed flashcards where each flip rewards the user with XP, encouraging them to progress.
- **Topics Covered**: Legendary Players, History, Fielding, Bowling types, and Batting Shots.
- **3D Animations**: A buttery-smooth 3D card-flip animation utilizing pure CSS (`perspective` and `backface-visibility`).
- **Engaging Visuals**: Each card has a gorgeous background image corresponding to its category.

### 2. **Interactive Ground Visualizer**
- **Top-Down Perspective**: An accurately mapped 2D cricket pitch featuring stumps, creases, and the 30-yard circle.
- **Strategic Mapping**: Key fielding positions (Third Man, Fine Leg, Slips, etc.) are plotted dynamically.
- **Responsive Popups**: Hovering over or tapping the golden interactive dots instantly updates the info panel with the position's name and description.

### 3. **Live Score & News Dashboard (API Integration)**
- **API Key Manager**: Users can input their own keys for `cricketdata.org` (CricAPI) and `NewsAPI.org` via a secure settings modal to pull real-time live match scores and news data.
- **Graceful Fallback**: The application seamlessly falls back to beautifully crafted mock data if no API keys are provided.
- **Dashboards**: A split view featuring horizontally scrolling live match cards and a masonry-style grid for the latest news articles.

### 4. **IPL Predictor & Analytics**
- **Matchup Analysis**: Users can select two top IPL teams and a historic venue.
- **Algorithm Engine**: Provides a predictive win probability based on an aggregated, compiled historical Head-to-Head dataset specific to that ground.
- **Fantasy Composition UI**: Highlights the Pace-vs-Spin wicket ratio of the stadium, driving a generative "Fantasy Team Composition" recommendation based on historical pitch behaviors.

---

## 💻 Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Vanilla CSS (No external CSS frameworks required)
- **Routing**: `react-router-dom`
- **Icons**: `lucide-react`

---

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vikramrajj/Cricket-Nerd.git
   cd Cricket-Nerd
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173` to see the app in action!

---

## 🔑 Setting up Live Data

While the app comes fully loaded with mock data for demonstration purposes, you can easily connect real endpoints:
1. Navigate to the `Live & News` tab.
2. Click the **API Config** button (Key icon).
3. Paste a free API key from [cricketdata.org](https://cricketdata.org/) and/or [NewsAPI.org](https://newsapi.org/).
4. Click **Save & Refresh**. The app will now fetch real-time data!
