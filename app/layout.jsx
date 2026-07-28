import "./globals.css";
import NextTopLoader from "nextjs-toploader";

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

        <NextTopLoader
          color="#2563eb"
          height={3}
          showSpinner={false}
        />

        {children}

      </body>
    </html>
  );
}
