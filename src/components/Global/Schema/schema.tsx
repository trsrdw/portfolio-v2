import Script from "next/script";

export default function SchemaMarkup() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tiarasdewi.com";

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": "Tiara S. Dewi",
                "alternateName": "tiarasdewi.com",
                "publisher": {
                    "@id": `${baseUrl}/#organization`
                }
            },
            {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                "name": "Tiara S. Dewi",
                "url": baseUrl,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logo/logo-icon.png`
                }
            },
            {
                "@type": "Person",
                "@id": `${baseUrl}/#person`,
                "name": "Tiara S. Dewi",
                "url": baseUrl,
                "image": `${baseUrl}/logo/logo-icon.png`,
                "jobTitle": "Frontend Developer",
                "worksFor": {
                    "@id": `${baseUrl}/#organization`
                },
                "sameAs": [
                    "https://www.linkedin.com/in/tiarasdewi",
                    "https://github.com/trsrdw"
                ]
            }
        ]
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}
