import { notFound } from "next/navigation";

interface ApiResponse<T> {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: T[];
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchAll<T>(endpoint: string, limit = 500): Promise<T[]> {
    const baseUrl = `${apiUrl}/${endpoint}`;
    // const baseUrl = `test error`;
    let results: T[] = [];
    let nextUrl: string | null = baseUrl;

    while (nextUrl && results.length < limit) {
        const response: Response = await fetch(nextUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
        }

        const data: ApiResponse<T> = await response.json();
        results = results.concat(data.results);

        nextUrl = data.info?.next || null;
    }

    return results.slice(0, limit);
}


export async function fetchDetail<T>(endpoint: string, id: number | string): Promise<T[]> {
    const url = `${apiUrl}/${endpoint}/${id}`;

    const response = await fetch(url);

    if (response.status === 404) {
        notFound();
    }

    if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint} with id ${id}: ${response.status}`);
    }

    const data: T = await response.json();
    return [data];
}