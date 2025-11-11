
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { pipework2, pipework3 } from "../assets";

// ✅ Properly import all images from assets
// import pipework2 from "../assets/pipework2.jpeg";
// // import pipework3 from "../assets/pipework3.jpeg";
// import drainCleaning from "../assets/gallery/drain-cleaning.jpg";
// import waterHeater from "../assets/gallery/water-heater.jpg";
// import leakDetection from "../assets/gallery/leak-detection.jpg";
// import sewerLine from "../assets/gallery/sewer-line.jpg";

// ✅ Professional Plumbing Gallery Page
const GALLERY_ITEMS = [
    { id: 1, src: pipework3, title: "Pipe Installation", tag: "Installation" },
    { id: 2, src: pipework2, title: "Bathroom Repair", tag: "Repair" },
    // { id: 3, src: drainage, title: "Drain Cleaning", tag: "Maintenance" },
    // { id: 4, src: waterHeater, title: "Water Heater Setup", tag: "Installation" },
    // { id: 5, src: leakDetection, title: "Leak Detection", tag: "Inspection" },
    // { id: 6, src: sewerLine, title: "Sewer Line Work", tag: "Maintenance" },
];

const uniqueTags = ["All", ...new Set(GALLERY_ITEMS.map((item) => item.tag))];
console.log()

export default function PlumbingGallery() {
    const [activeTag, setActiveTag] = useState("All");
    const [lightbox, setLightbox] = useState({ open: false, index: 0 });

    const filteredItems =
        activeTag === "All"
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.tag === activeTag);

    function openLightbox(index) {
        setLightbox({ open: true, index });
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        setLightbox({ open: false, index: 0 });
        document.body.style.overflow = "";
    }

    function nextImage(delta) {
        setLightbox((prev) => ({
            open: true,
            index: (prev.index + delta + filteredItems.length) % filteredItems.length,
        }));
    }

    return (
        <div>
            {/* <Navbar /> */}

            {/* Page Header */}
            <header className="bg-primary text-white py-5 shadow-sm">
                <div className="container text-center">
                    <h1 className="fw-bold mb-2">Our Plumbing Gallery</h1>
                    <p className="lead mb-0">
                        Explore our professional plumbing projects and maintenance services.
                    </p>
                </div>
            </header>

            {/* Gallery Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    {/* Filter Buttons */}
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                        {uniqueTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`btn ${activeTag === tag ? "btn-primary" : "btn-outline-primary"}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="row g-4">
                        {filteredItems.map((item, index) => (
                            <div key={item.id} className="col-12 col-sm-6 col-md-4">
                                <div
                                    className="card border-0 shadow-sm overflow-hidden gallery-item"
                                    role="button"
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="ratio ratio-4x3">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="img-fluid object-fit-cover"
                                            loading="lazy"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="card-body bg-white text-center">
                                        <h5 className="fw-semibold mb-1">{item.title}</h5>
                                        <span className="badge bg-primary">{item.tag}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightbox.open && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ background: "rgba(0,0,0,0.8)", zIndex: 2000 }}
                    onClick={closeLightbox}
                >
                    <div
                        className="container position-relative"
                        style={{ maxWidth: "900px" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="position-absolute top-0 end-0 p-3">
                            <button className="btn btn-light btn-sm" onClick={closeLightbox}>
                                ✕ Close
                            </button>
                        </div>

                        <div className="ratio ratio-16x9">
                            <img
                                src={filteredItems[lightbox.index].src}
                                alt={filteredItems[lightbox.index].title}
                                className="w-100 h-100 object-fit-cover rounded shadow-lg"
                            />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <button className="btn btn-outline-light" onClick={() => nextImage(-1)}>
                                ‹ Prev
                            </button>
                            <h5 className="text-white text-center mb-0">
                                {filteredItems[lightbox.index].title}
                            </h5>
                            <button className="btn btn-outline-light" onClick={() => nextImage(1)}>
                                Next ›
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Social Links */}
            <div
                style={{
                    position: "fixed",
                    right: "20px",
                    top: "45%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    zIndex: 1000,
                }}
            >
                <a href="https://wa.me/254758849440" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
                        alt="WhatsApp"
                        style={{ width: "24px", height: "24px" }}
                    />
                </a>

                <a href="https://instagram.com/yourplumbingpage" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                        alt="Instagram"
                        style={{ width: "24px", height: "24px" }}
                    />
                </a>

                <a href="https://facebook.com/yourplumbingpage" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                        alt="Facebook"
                        style={{ width: "24px", height: "24px" }}
                    />
                </a>
            </div>
        </div>
    );
}

