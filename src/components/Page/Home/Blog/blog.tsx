"use client";
import Image from "next/image";
import SvgIcon from "@/lib/utils/svg";
import Link from "next/link";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { useEffect, useRef, useState } from "react";
import { useIsMobileSmall, useIsTablet } from "@/lib/utils/mediaquery";
import { Post } from "@/lib/types/data";
import style from "./style.module.scss";
import { getStrapiMedia } from "@/lib/utils/general";

export default function BlogSection({ posts }: { posts: Post[] }) {
    const blogUrl = (process.env.NEXT_PUBLIC_BLOG_URL ?? "https://blog.tiarasdewi.com/posts").replace(/\/$/, "");
    const isTablet = useIsTablet();
    const isMobile = useIsMobileSmall();
    const personalRef = useRef<HTMLUListElement>(null);
    const [desktopInView, setDesktopInView] = useState(false);

    const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;
    const [currentItems, setCurrentItems] = useState(posts.slice(0, itemsPerPage));
    const [pageCount, setPageCount] = useState(Math.ceil(posts.length / itemsPerPage));
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(posts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(posts.length / itemsPerPage));
    }, [itemOffset, posts, itemsPerPage]);

    const handlePageClick: ReactPaginateProps["onPageChange"] = (event) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        if (!personalRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setDesktopInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(personalRef.current);
        return () => observer.disconnect();
    }, []);
    return (
        <div id="blog" className={style.blog}>
            <h1>Personal <span>Blog</span></h1>

            <ul
                ref={personalRef}
                className={`${style.list} ${desktopInView ? style.animate : ""}`}
            >
                {currentItems.map((item) => (
                    <li key={item.title}>
                        <div className={style.content}>
                            <Link href={`${blogUrl}/${item.slug}`} target="_blank">
                                <div className={style.head}>
                                    <div className={style.imageWrapper}>
                                        <Image
                                            className={style.banner}
                                            src={getStrapiMedia(item.banner?.url) || "/placeholder.png"}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <p className={style.title}>{item.title}</p>
                                    <p className={style.description}>{item.excerpt}</p>
                                </div>
                                <div className={style.tail}>

                                    <div className={style.arrow}>
                                        <SvgIcon url={"/arrow.svg"} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>

            {pageCount > 1 && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<div className={`${style.pagebtn} ${style.next}`}><span>Next</span><SvgIcon url={"/chevron-left.svg"} /></div>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={<div className={`${style.pagebtn} ${style.prev}`}><SvgIcon url={"/chevron-left.svg"} /><span>Prev</span></div>}
                    renderOnZeroPageCount={null}
                    containerClassName={style.pagination}
                    pageLinkClassName={style.pagenum}
                    previousClassName={`${style.arrow} ${style.prev}`}
                    nextClassName={`${style.arrow} ${style.next}`}
                    activeLinkClassName={style.active}
                    disabledClassName={style.disabled}
                />
            )}
        </div>
    );
}