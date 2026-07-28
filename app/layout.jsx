import "./globals.css";

export const metadata = {
  title: "ReyCloudShop",
  description: "Marketplace Digital ReyCloud"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
