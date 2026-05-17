import "./globals.css";

export const metadata = {
  title: "StacLabs",
  description: "StacLabs - building practical software solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
