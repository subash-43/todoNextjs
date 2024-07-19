import "../styles/globals.css";

import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body className="mx-3 md:mx-10 bg-indigo-400">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
