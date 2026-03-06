import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between bg-dark px-6 py-12 md:px-16 md:py-[52px] text-white/90 gap-8">
            <Link href="/" className="flex items-center gap-2.5 font-serif text-[1.7rem] font-semibold tracking-[-0.01em] text-white no-underline">
                <Image src="/logo.png" alt="Yumzy Logo" width={32} height={32} className="w-8 h-8 rounded-lg object-contain" unoptimized />
                Yumzy
            </Link>

            <ul className="flex flex-wrap justify-center gap-7 list-none">
                <li>
                    <Link href="#" className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-white/30 transition-colors hover:text-white/80">
                        Instagram
                    </Link>
                </li>
                <li>
                    <Link href="#" className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-white/30 transition-colors hover:text-white/80">
                        TikTok
                    </Link>
                </li>
                <li>
                    <Link href="#" className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-white/30 transition-colors hover:text-white/80">
                        Privacy
                    </Link>
                </li>
                <li>
                    <Link href="#" className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-white/30 transition-colors hover:text-white/80">
                        Contact
                    </Link>
                </li>
            </ul>

            <p className="text-[0.72rem] text-white/25">
                © 2026 Yumzy — Taste the Joy.
            </p>
        </footer>
    );
}
