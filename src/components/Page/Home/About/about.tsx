"use client";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { tools } from "@/lib/helper/list";

export default function AboutSection() {
    return (
        <div id="about" className={style.about}>
            <h1><span>About</span> & Skills</h1>
            <p>
                I specialize in building modern, responsive web
                applications using <strong>React.js</strong> and <strong>Next.js</strong>. With over three years of hands-on experience, I&#39;ve contributed to a wide range of projects—from dynamic landing pages to complex web platforms. While my core strength lies in frontend development, I&#39;m currently expanding my skillset as a Fullstack Developer, gaining valuable experience in backend technologies and API integration.
            </p>

            <p>These are the tools I use currently:</p>
            <ul className={style.tools}>
                {tools.map((item) => (
                    <li key={item.label}>
                        <Link href={item.link} target="_blank">
                            <Image className={style.logo} src={item.logo} alt={item.label} width={128} height={128} />
                            <span className={style.label}>{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}