"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useErrorContext } from "@/lib/context/errorcontext";
import { ErrorProps } from "@/lib/types/pageprops";
import style from "./style.module.scss";

export default function ErrorClient({ msg, reset }: ErrorProps) {
    const { setHasError } = useErrorContext();

    useEffect(() => {
        setHasError(true);
        return () => setHasError(false);
    }, [setHasError]);

    return (
        <main className={style.error}>
            <div className={style.title}>
                <h1>500</h1>
                <p>Internal server error.</p>
                {msg && <p>{msg}</p>}
            </div>
            <div className={style.groupbtn}>
                <Link href="/" className={style.primary}>Go back home</Link>
                {reset && (
                    <button
                        onClick={() => reset()}
                        className={style.secondary}
                    >
                        Retry
                    </button>
                )}
            </div>
        </main>
    );
}
