"use client";
import Image from "next/image";
import style from "./style.module.scss";
import { useState } from "react";

export default function About() {
    const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);

    const toggleZoom = (src?: string) => {
        setZoomedSrc(src || null);
    };
    return (
        <div className={style.wrapper}>
            <h2>Tentang Mini Project</h2>

            <div className={style.content}>
                <div className={style.section}>
                    <p>Project ini dibangun dengan <strong>Next.js (App Router)</strong> dan pendekatan modular supaya setiap bagian punya peran yang jelas dan mudah dikembangkan ke depannya. Strukturnya dibuat supaya stabil, mudah dimaintain, dan siap dipakai untuk project berskala besar. Setiap halaman punya error dan not-found handler sendiri, jadi kalau satu bagian bermasalah, tidak akan mengganggu bagian lain.</p>
                </div>

                <div className={style.section}>
                    <h3>📸 Galeri Screenshot</h3>
                    <div className={style.cardStack}>
                        {[
                            "/about/ss1.png",
                            "/about/ss2.png",
                            "/about/ss3.png",
                            "/about/ss4.png",
                            "/about/ss5.png",
                            "/about/ss6.png",
                            "/about/ss7.png",
                            "/about/ss8.png",
                            "/about/ss9.png",
                            "/about/ss10.png",
                            "/about/ss11.png",
                        ].map((src, i) => (
                            <div
                                key={i}
                                className={style.card}
                                style={{ zIndex: 10 - i }}
                                onClick={() => toggleZoom(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Screenshot ${i + 1}`}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <div className={style.section}>
                    <h3>⚙️ Pendekatan Teknis</h3>
                    <p>Komponen disusun berdasarkan fungsinya:</p>
                    <ul>
                        <li><strong>Global components</strong> seperti header, footer, dan context disiapkan untuk elemen yang muncul di seluruh halaman.</li>
                        <li><strong>Layout components</strong> seperti container, loader, dan slider dipakai buat menjaga konsistensi tampilan.</li>
                        <li><strong>Page components</strong> berisi bagian-bagian khusus tiap halaman, mulai dari Home, Detail, About, sampai List.</li>
                    </ul>
                    <p>Untuk folder <strong>lib</strong>, semua logic tambahan seperti fetch data, context, dan type definition disimpan di sana.</p>
                    <p>Struktur ini bikin kode tetap bersih, mudah dibaca, dan scalable.</p>
                </div>

                <div className={style.section}>
                    <h3>🎨 Inspirasi Desain UI</h3>
                    <div className={style.imageWrapper} onClick={() => toggleZoom("/about/netflix.png")}>
                        <Image
                            src={"/about/netflix.png"}
                            alt={"Screenshot Netflix Website"}
                            fill
                            style={{ objectFit: "cover", objectPosition: "top" }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <p>Secara visual, inspirasi utama datang dari website <strong>Netflix</strong>, khususnya dalam penggunaan layout berbasis grid, section berlapis, dan elemen interaktif seperti slider. Sisanya dibuat secara freestyle (mohon maaf bukan UI/UX Designer 🙏), dengan beberapa referensi tambahan dari project-project yang pernah dikerjakan sebelumnya.</p>
                </div>

                <div className={style.section}>
                    <h3>🧩 Fitur & Implementasi</h3>
                    <p>Bagian <strong>List</strong> dibuat dinamis, bisa menampilkan daftar karakter, episode, atau lokasi dari API, lengkap dengan fitur <strong>pencarian (search)</strong> dan <strong>pagination</strong>.</p>

                    <div className={style.groupimage}>
                        <Image
                            src={"/about/ss12.png"}
                            alt={"Screenshot Search Feature"}
                            width={379}
                            height={97}
                        />
                        <Image
                            src={"/about/ss13.png"}
                            alt={"Screenshot Pagination Feature"}
                            width={393}
                            height={79}
                        />
                    </div>

                    <p>Untuk meningkatkan performa dan <em>user experience</em>, project ini juga menggunakan <strong>React Suspense</strong> dan <strong>lazy loading</strong> pada tiap section di halaman <strong>Home</strong>. Bagian seperti Characters, Episodes, dan Locations dimuat secara terpisah agar proses loading terasa lebih cepat dan efisien. Dengan pendekatan ini, user bisa mulai melihat konten yang sudah siap tanpa perlu menunggu seluruh halaman selesai dimuat, konsepnya mirip dengan <em>progressive rendering</em>.</p>

                    <div className={`${style.imageWrapper} ${style.suspense}`} onClick={() => toggleZoom("/about/ss14.png")}>
                        <Image
                            src={"/about/ss14.png"}
                            alt={"Screenshot Suspense + Lazy Loading"}
                            fill
                            style={{ objectFit: "cover", objectPosition: "top" }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <p>Pendekatan yang sama juga diterapkan di halaman lain seperti <strong>About</strong>, <strong>List</strong>, dan <strong>Detail</strong>. Tiap komponen dibungkus dengan <code>Suspense</code> untuk menampilkan <strong>loading state</strong> secara halus saat proses pengambilan data dari server berlangsung. Dengan begitu, transisi antarhalaman terasa mulus tanpa tampilan kosong di layar.</p>
                </div>

                <div className={style.section}>
                    <h3>🧱 Desain Arsitektur</h3>
                    <div className={`${style.imageWrapper} ${style.architecture}`} onClick={() => toggleZoom("/about/FE-architecture.png")}>
                        <Image
                            src={"/about/FE-architecture.png"}
                            alt={"Screenshot FE Architecture"}
                            fill
                            style={{ objectFit: "cover", objectPosition: "top" }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <p>Tujuan utama dari struktur ini adalah membuat aplikasi yang:</p>
                    <ul>
                        <li>Mudah didevelop dan dimaintenance</li>
                        <li>Reusable antar komponen</li>
                        <li>Aman dari error dengan bantuan TypeScript</li>
                        <li>Fleksibel untuk update fitur atau tampilan</li>
                    </ul>
                    <p>Dengan pendekatan ini, tiap bagian punya tanggung jawab jelas, sehingga project tetap rapi, ringan, dan efisien, bahkan saat terus developing.</p>
                </div>

                <div className={style.section}>
                    <h3>💭 Tantangan dalam Proses Pengembangan</h3>
                    <p>Salah satu tantangan terbesar dalam project ini adalah menentukan bagian mana yang sebaiknya dibuat dinamis. Awalnya, komponen Detail direncanakan hanya satu file dinamis saja untuk menampilkan tiap tipe data (character, episode, location). Tapi setelah dijalankan, ternyata strukturnya terlalu kompleks dan membuat kode jadi panjang serta susah dicustom jika ingin detail character berbeda tampilannya dengan detail episode atau detail location. Akhirnya, keputusan terbaik adalah memisahkan komponen Detail per tipe data; Character, Episode, dan Location. Sehingga, tiap halaman bisa fokus menampilkan datanya sendiri, lebih mudah diatur, dan lebih bersih secara struktur.</p>
                    <p>Selain itu adalah bagaimana cara menyeimbangkan antara SSR (Server-Side Rendering) dan CSR (Client-Side Rendering). Ada beberapa bagian yang lebih cocok dirender di server untuk performa, loading state(suspense) dan SEO, tapi ada juga yang butuh interaksi cepat di sisi klien seperti fitur pencarian dan pagination pada halaman List. Kombinasi keduanya akhirnya dibuat secara <strong>hybrid</strong>, supaya tetap efisien dan responsif.</p>
                    <p>Terakhir, banyak visi-visi kecil 🤏 yang ingin diwujudkan: misalnya menampilkan icon-icon characters di halaman episode detail, icon-icon residents di halaman location detail, atau melengkapi metadata di setiap halaman. Tapi sepertinya waktunya tidak cukup ya (huhu ✋✊✋✊) jadi beberapa ide disimpan untuk versi berikutnya saja.</p>
                </div>

                {zoomedSrc && (
                    <div className={style.zoomOverlay} onClick={() => toggleZoom()}>
                        <Image
                            src={zoomedSrc}
                            alt="Zoomed Image"
                            width={1800}
                            height={1800}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                )}
            </div>

            <div className={style.identification}>
                <h3>🚀 Info Project</h3>
                <div className={style.infoGrid}>
                    <p><strong>Nama:</strong> Rick and Morty Explorer</p>
                    <p><strong>Penulis:</strong> Tiara Sari Dewi</p>
                    <p><strong>Peran:</strong> Frontend Engineer</p>
                    <p><strong>Teknologi:</strong> Next.js, React, TypeScript, SCSS</p>
                    <p><strong>API:</strong> Rick and Morty API (https://rickandmortyapi.com)</p>
                    <p><strong>Tujuan:</strong> Character, episode, location dynamic listing dengan search & pagination, error handling (custom error pages), full responsive layout, dan smooth loading states menggunakan Suspense & lazy loading</p>
                    <p><strong>Durasi:</strong> 3 hari</p>
                    <p><strong>Status:</strong> Prototype</p>
                    <p><strong>Repo:</strong> <a href="https://github.com/trsrdw/ricknmorty" target="_blank">GitHub</a></p>
                </div>
            </div>
        </div>
    );
}