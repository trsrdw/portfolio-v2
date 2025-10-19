"use client";
import { useRef, useState, useEffect, ReactNode } from "react";
import { CharacterList, EpisodeList, LocationList } from "@/lib/types/data";
import { SliderItemMap, SliderProps, SliderType } from "@/lib/types/pageprops";
import Link from "next/link";
import SvgIcon from "@/lib/utils/svg";
import style from "./style.module.scss";

export default function Slider<T extends SliderType>({ type, items }: SliderProps<T>) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        updateScrollButtons();
        slider.addEventListener("scroll", updateScrollButtons);
        return () => slider.removeEventListener("scroll", updateScrollButtons);
    }, []);

    const slide = (direction: "left" | "right") => {
        if (!sliderRef.current) return;
        const scrollAmount = sliderRef.current.offsetWidth;
        sliderRef.current.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };

    const renderItem = (item: SliderItemMap[T]): ReactNode => {
        switch (type) {
            case "characters":
                const char = item as CharacterList;
                return (
                    <Link
                        key={char.id}
                        className={style.card}
                        style={{ backgroundImage: `url(${char.image})` }}
                        href={`/characters/${char.id}`}
                    >
                        <div className={style.cardContent}>{char.name}</div>
                    </Link>
                );
            case "episodes":
                const ep = item as EpisodeList;
                return (
                    <Link
                        key={ep.id}
                        className={`${style.card} ${style.ep}`}
                        style={{
                            background: `linear-gradient(135deg, hsl(${ep.id * 20}, 70%, 50%), #000)`,
                        }}
                        href={`/episodes/${ep.id}`}
                    >
                        <div className={style.cardContent}>{ep.episode}</div>
                    </Link>
                );
            case "locations":
                const loc = item as LocationList;
                return (
                    <Link
                        key={loc.id}
                        className={`${style.card} ${style.loc}`}
                        style={{
                            background: `linear-gradient(135deg, hsl(${(loc.id * 35 + 200) % 360}, 70%, 55%), #000)`,
                        }}
                        href={`/locations/${loc.id}`}
                    >
                        <div className={style.cardContent}>{loc.name}</div>
                    </Link>
                );
        }
    };

    return (
        <div className={style.sliderContainer}>
            {canScrollLeft && (
                <button className={`${style.chevron} ${style.left}`} onClick={() => slide("left")}>
                    <SvgIcon url={"/chevron-left.svg"} />
                </button>
            )}

            <div className={style.cardwrapper} ref={sliderRef}>
                {items.map(renderItem)}
            </div>

            {canScrollRight && (
                <button className={`${style.chevron} ${style.right}`} onClick={() => slide("right")}>
                    <SvgIcon url={"/chevron-left.svg"} />
                </button>
            )}
        </div>
    );
}
