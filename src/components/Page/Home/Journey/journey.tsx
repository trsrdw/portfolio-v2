"use client";
import style from "./style.module.scss";
import { educations, experiences } from "@/lib/helper/list";
import { useState } from "react";

export default function JourneySection() {
    const allPositions = experiences.flatMap(exp =>
        exp.position.map(pos => ({
            ...pos,
            type: "work" as const,
            company: exp.company,
            location: exp.location,
            logo: exp.logo,
        }))
    );

    const allEducation = educations.map(edu => ({
        ...edu,
        type: "education" as const,
    }));

    const timelineItems = [...allPositions, ...allEducation];

    const groupedByYear = Object.values(
        timelineItems.reduce((acc, item) => {
            if (!acc[item.year]) acc[item.year] = { year: item.year, items: [] };
            acc[item.year].items.push(item);
            return acc;
        }, {} as Record<number, { year: number; items: typeof timelineItems }>)
    ).sort((a, b) => b.year - a.year);

    const [visibleCount, setVisibleCount] = useState(3);

    const handleToggle = () => {
        if (visibleCount >= groupedByYear.length) {
            setVisibleCount(3);
        } else {
            setVisibleCount((prev) => prev + 3);
        }
    };

    const visibleJourney = groupedByYear.slice(0, visibleCount);
    const allVisible = visibleCount >= groupedByYear.length;

    return (
        <div id="journey" className={style.journey}>
            <h1>Work & Education <span>Journey</span></h1>
            <ul className={style.path}>
                {visibleJourney.map(group => (
                    <li key={group.year}>
                        <h3 className={style.year}>{group.year}</h3>
                        {group.items.map(item => (
                            <div key={item.id} className={style.step}>
                                {item.type === "work" ? (
                                    <span>
                                        <p className={style.title}>{item.title}</p>
                                        <p className={style.middle}>{item.company}</p>
                                        <p className={style.period}>{item.period}</p>
                                    </span>
                                ) : (
                                    <span>
                                        <p className={style.title}>{item.degree}</p>
                                        <p className={style.middle}>{item.institution}</p>
                                        <p className={style.period}>{item.period}</p>
                                    </span>
                                )}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>

            <button className={style.more} onClick={handleToggle}>
                {allVisible ? "Show Less" : "Show All"}
            </button>
        </div>
    );
}
