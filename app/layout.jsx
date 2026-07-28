import "./globals.css";

export const metadata = {
  title: "ReyCloudShop",
  description: "Website Digital Store ReyCloud",
  icons: {
    icon: "/favicon.ico"
  }
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
