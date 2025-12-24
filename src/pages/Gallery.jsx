
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { inst1, inst2, inst3, install10, install11, install12, install2, install3, install4, install5, install6, install7, install8, install9, pipeinst, pipeinst1, pipeinst10, pipeinst11, pipeinst12, pipeinst13, pipeinst14, pipeinst15, pipeinst16, pipeinst17, pipeinst18, pipeinst19, pipeinst2, pipeinst20, pipeinst21, pipeinst22, pipeinst23, pipeinst3, pipeinst4, pipeinst5, pipeinst6, pipeinst7, pipeinst8, pipeinst9, pipework2, pipework3 } from "../assets";

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

    { id: 3, src: pipeinst, title: "drainage", tag: "Maintenance" },
    { id: 4, src: pipeinst1, title: "piping", tag: "Installation" },
    { id: 5, src: pipeinst2, title: "waste disposing", tag: "Inspection" },
    { id: 6, src: pipeinst3, title: "drainage", tag: "Maintenance" },
    { id: 6, src: pipeinst4, title: "toilet piping", tag: "Maintenance" },
    { id: 6, src: pipeinst5, title: "drainage", tag: "Maintenance" },
    { id: 6, src: pipeinst6, title: "drainage", tag: "Maintenance" },
    { id: 6, src: pipeinst7, title: "waste disposing", tag: "Maintenance" },
    { id: 6, src: pipeinst8, title: "pipe layouts", tag: "Maintenance" },
    { id: 6, src: pipeinst9, title: "drainage laytouts", tag: "Maintenance" },
    { id: 6, src: pipeinst10, title: "tank oulets", tag: "Maintenance" },
    { id: 6, src: pipeinst11, title: "tank instalation", tag: "Maintenance" },
    { id: 6, src: pipeinst12, title: "tank inlets", tag: "Maintenance" },
    { id: 6, src: pipeinst13, title: "pipework", tag: "Maintenance" },
    { id: 6, src: pipeinst14, title: "Tow pipe sytem", tag: "Maintenance" },
    { id: 6, src: pipeinst15, title: "pump instaling", tag: "Maintenance" },
    { id: 6, src: pipeinst16, title: "rainwater", tag: "Maintenance" },
    { id: 6, src: pipeinst17, title: "drainage", tag: "Maintenance" },
    { id: 6, src: pipeinst18, title: "rainwater", tag: "Maintenance" },
    { id: 6, src: pipeinst19, title: "outside tap", tag: "Maintenance" },
    { id: 6, src: pipeinst20, title: "pipework", tag: "Maintenance" },
    { id: 6, src: pipeinst21, title: "pipework", tag: "Maintenance" },
    { id: 6, src: pipeinst22, title: "public tap", tag: "Maintenance" },
    { id: 6, src: pipeinst23, title: "rainwater", tag: "Maintenance" },
    { id: 6, src: inst1, title: "tank instal", tag: "Maintenance" },
    { id: 6, src: inst2, title: "tank stand", tag: "Maintenance" },
    { id: 6, src: inst3, title: "tank instal", tag: "Maintenance" },
    { id: 6, src: install2, title: "handwash", tag: "install" },
    { id: 6, src: install3, title: "toilet and handwash", tag: "install" },
    { id: 6, src: install4, title: "kitchen and  dinning handwash", tag: "install" },
    { id: 6, src: install5, title: "handwash", tag: "install" },
    { id: 6, src: install6, title: "slub pointing", tag: "install" },
    { id: 6, src: install7, title: "washroom", tag: "install" },
    { id: 6, src: install8, title: "new installions", tag: "install" },
    { id: 6, src: install9, title: "new installions", tag: "install" },
    { id: 6, src: install10, title: "new installions", tag: "install" },
    { id: 6, src: install11, title: "new installions", tag: "install" },
    { id: 6, src: install12, title: "new installions", tag: "install" },

















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

