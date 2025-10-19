"use client";
import style from "./style.module.scss";
// import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/helper/list";
import SvgIcon from "@/lib/utils/svg";

export default function ProjectsSection() {
    const featured = projects.find((p) => p.type === "featured");
    const personals = projects.find((p) => p.type === "personal");

    return (
        <div id="projects" className={style.projects}>
            <h1>All <span>Projects</span></h1>

            <div className={style.project}>
                <h3>{featured?.type}</h3>
                <ul className={style.list}>
                    {featured?.items.map((item) => (
                        <li key={item.title}>
                            <div className={style.head}>
                                <div className={style.imageWrapper}>
                                    <Image
                                        className={style.banner}
                                        src={item.banner}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <p className={style.title}>{item.title}</p>
                            </div>
                            <div className={style.tail}>
                                <div className={style.tools}>
                                    {item.tools.map((tool) => (
                                        <div className={style.label} key={tool.label}>
                                            <Image
                                                className={style.logo}
                                                src={tool.logo}
                                                alt={tool.label}
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className={style.arrow}>
                                    <SvgIcon url={"/arrow.svg"} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.project}>
                <h3>{personals?.type}</h3>
                <ul className={style.list}>
                    {personals?.items.map((item) => (
                        <li key={item.title}>
                            <div className={style.head}>
                                <div className={style.imageWrapper}>
                                    <Image
                                        className={style.banner}
                                        src={item.banner}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <p className={style.title}>{item.title}</p>
                            </div>
                            <div className={style.tail}>
                                <div className={style.tools}>
                                    {item.tools.map((tool) => (
                                        <div className={style.label} key={tool.label}>
                                            <Image
                                                className={style.logo}
                                                src={tool.logo}
                                                alt={tool.label}
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className={style.arrow}>
                                    <SvgIcon url={"/arrow.svg"} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}