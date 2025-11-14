import qs from "qs";
import { CategoriesResponse, Category, Post, PostsResponse } from "../types/data";
import { flattenAttributes, getStrapiURL } from "./general";

type FetchOptions = {
    authToken?: string;
    revalidate?: number | false;
};

type NextRequestInit = RequestInit & { next?: { revalidate?: number | false } };

export async function fetchData<T = unknown>(
    url: string,
    { authToken, revalidate = 3600 }: FetchOptions = {}
): Promise<T> {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    };

    const baseOptions: RequestInit = { headers };

    let finalOptions: NextRequestInit;
    if (revalidate === false) {
        // force-cache expects a RequestCache literal
        finalOptions = { ...baseOptions, cache: "force-cache" as RequestCache };
    } else {
        finalOptions = { ...baseOptions, next: { revalidate } };
    }

    const response = await fetch(url, finalOptions);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return flattenAttributes(data) as T;
}

export async function getPosts(lang: string, opts: { revalidate?: number | false } = {}) {
    const path = "/api/posts";
    const baseUrl = getStrapiURL();

    const query = qs.stringify({
        locale: lang,
        populate: {
            banner: {
                fields: ["url", "alternativeText", "name", "height", "width"],
            },
            categories: {
                populate: true,
            }
        },
        sort: ["createdAt:desc"],
    });

    const url = new URL(path, baseUrl);
    url.search = query;

    try {
        const data = fetchData<PostsResponse<Post[]>>(url.href, { revalidate: opts.revalidate });
        // console.log("📦 Posts data:", data);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to fetch posts data:`, error.message);
        }
        throw error;
    }
}

export async function getCategories(lang: string): Promise<CategoriesResponse<Category[]>> {
    const path = "/api/categories";
    const baseUrl = getStrapiURL();

    const query = qs.stringify({
        locale: lang,
        populate: true,
    });

    const url = new URL(path, baseUrl);
    url.search = query;

    try {
        const data = fetchData<CategoriesResponse<Category[]>>(url.href);
        // console.log("📦 Categories data:", data);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to fetch posts data:`, error.message);
        }
        throw error;
    }
}