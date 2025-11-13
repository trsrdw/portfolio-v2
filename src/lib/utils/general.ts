export function flattenAttributes<T>(data: T): T {
    if (
        typeof data !== "object" ||
        data === null ||
        data instanceof Date ||
        typeof data === "function"
    ) {
        return data;
    }

    if (Array.isArray(data)) {
        return data.map((item) => flattenAttributes(item)) as unknown as T;
    }

    const flattened: Record<string, unknown> = {};

    for (const key in data as Record<string, unknown>) {
        if (!Object.prototype.hasOwnProperty.call(data, key)) continue;

        const value = (data as Record<string, unknown>)[key];

        if (
            (key === "attributes" || key === "data") &&
            typeof value === "object" &&
            !Array.isArray(value)
        ) {
            Object.assign(flattened, flattenAttributes(value));
        } else {
            flattened[key] = flattenAttributes(value);
        }
    }

    return flattened as T;
}

export function getStrapiURL(): string {
    return process.env.STRAPI_BASE_URL || "http://localhost:1337";
}

export function getStrapiMedia(url?: string | null): string | null {
    if (!url) return null;
    if (url.startsWith("data:")) return url;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return `${getStrapiURL()}${url}`;
}