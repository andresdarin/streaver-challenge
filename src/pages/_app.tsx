import type { AppProps } from "next/app";
import "../app/globals.css"; // Importa Tailwind aquí

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
