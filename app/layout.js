import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Home Page",
  description: "Home page Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container max-w-3xl my-2 py-2 px-4 mx-auto">
          <Header />
          <div className="my-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
