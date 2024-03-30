import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<nav>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/roster'>Roster</Link>
						</li>
            <li>
					    <Link href='/schedule'>Schedule</Link>
						</li>
            <li>
					    <Link href='/stats'>Stats</Link>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
