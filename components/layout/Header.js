import Link from 'next/link';
import styles from '@/styles/layout.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/" className={styles.logo}>
                    Your Logo
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
