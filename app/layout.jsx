import "./globals.css";

export const metadata = {
  title: "GymBuddies",
  description: "Find your perfect training partner."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
