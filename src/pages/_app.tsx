import "../styles/global.scss";
import type { AppProps } from 'next/app'
import Nav from "../layouts/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Nav />
    <Component {...pageProps} />
  </div>
}
