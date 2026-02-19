import type { Metadata } from "next";
import {ThemeProvider} from '@/components/providers/ThemeProvider';
import { Roboto} from "next/font/google";
import "./globals.css";



const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome Tour",
  description: "You can plan your next trip with this app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<body className={` ${roboto.variable} antialiased`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
