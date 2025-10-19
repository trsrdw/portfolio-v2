import Link from "next/link";
import style from "./style.module.scss";

export default function Footer() {
    return (
        <footer className={style.footer}><p>&copy; {new Date().getFullYear()} <Link href={"https://tiarasd.site/"} target="_blank">Tiara Sari Dewi</Link>. All rights reserved.</p></footer>
    );
}