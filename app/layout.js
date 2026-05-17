import "./globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "StacLabs | Open Source Geospatial Infrastructure",
  description: "Building practical, high-performance STAC API architectures and cloud-native geospatial tooling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className={styles.header}>
          <div className={styles.navContainer}>
            <a href="/" className={styles.brand}>
              <span className={styles.brandText}>StacLabs</span>
            </a>
            
            <nav className={styles.navLinks}>
              <a href="#hero">Home</a>
              <a href="#sfeos">SFEOS</a>
              <a href="#featured">Extensions</a>
              <a href="#services">Services</a>
              <a 
                href="https://github.com/StacLabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.primaryNavBtn}
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>
        
        {children}
        
      </body>
    </html>
  );
}
