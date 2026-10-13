import { useState } from "react";
import { MdAdd, MdAnalytics, MdArrowBack, MdCheck, MdCloudUpload, MdDownload, MdEdit, MdImage, MdLibraryMusic, MdSearch, MdSettings, MdShare, MdTrendingUp } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import "../../styles/artist.css";

const artistTracks = [
    { title: "Neon Midnight", type: "Single", plays: "248,302", status: "Live", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=300&q=80" },
    { title: "Midnight Echoes", type: "Album · 8 tracks", plays: "690,184", status: "Live", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&q=80" },
    { title: "Glass Horizon", type: "Single", plays: "118,920", status: "Draft", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=300&q=80" },
];

const ArtistHeader = ({ eyebrow, title, description, action }) => <header className="artist-page-header"><div><span className="artist-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action}</header>;

export const ArtistSearch = () => <div className="artist-page"><ArtistHeader eyebrow="Your studio" title="Search" description="Find releases, listeners, and catalog details." /><div className="artist-large-search"><MdSearch /><input placeholder="Search your catalog" /><kbd>⌘ K</kbd></div><section className="artist-panel artist-search-empty"><MdSearch /><h2>Search your artist workspace</h2><p>Find a track, release, or listener segment to get started.</p></section></div>;

export const ArtistLibrary = () => <div className="artist-page"><ArtistHeader eyebrow="Your catalog" title="Library" description="Everything you have released, in one place." action={<button className="artist-primary-action"><MdCloudUpload /> Upload track</button>} /><section className="artist-panel"><div className="artist-panel-heading"><h2>All releases <span className="artist-count">{artistTracks.length}</span></h2><button className="artist-filter"><MdLibraryMusic /> All types</button></div><div className="artist-release-list">{artistTracks.map((track) => <div className="artist-release" key={track.title}><img src={track.image} alt="" /><div><strong>{track.title}</strong><span>{track.type}</span></div><span className={`release-status ${track.status.toLowerCase()}`}>{track.status}</span><strong className="release-plays">{track.plays} plays</strong><button className="artist-icon-button" aria-label={`Edit ${track.title}`}><MdEdit /></button></div>)}</div></section></div>;

export const ArtistUpload = () => {
    const [releaseType, setReleaseType] = useState("single");
    const [audioFiles, setAudioFiles] = useState([]);
    const [albumTracks, setAlbumTracks] = useState([{ id: 1, title: "", featuredArtist: "", file: null }]);
    const [featuredArtist, setFeaturedArtist] = useState("");
    const [coverPreview, setCoverPreview] = useState("");
    const [coverName, setCoverName] = useState("");

    const handleAudioChange = (event) => {
        const files = Array.from(event.target.files || []);
        setAudioFiles(files);
        if (releaseType === "album") {
            setAlbumTracks((tracks) => files.map((file, index) => ({
                id: tracks[index]?.id || Date.now() + index,
                title: tracks[index]?.title || "",
                featuredArtist: tracks[index]?.featuredArtist || "",
                file,
            })));
        }
    };

    const updateAlbumTrack = (trackId, field, value) => {
        setAlbumTracks((tracks) => tracks.map((track) => track.id === trackId ? { ...track, [field]: value } : track));
        if (field === "file") setAudioFiles((files) => files.some((file) => file.name === value.name) ? files : [...files, value]);
    };

    const addAlbumTrack = () => setAlbumTracks((tracks) => [...tracks, { id: Date.now(), title: "", featuredArtist: "", file: null }]);
    const handleCoverChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        setCoverName(file.name);
        setCoverPreview(URL.createObjectURL(file));
    };

    return <div className="artist-page">
        <ArtistHeader eyebrow="Share your sound" title={releaseType === "album" ? "Create an album" : "Upload a track"} description="Put your next release in front of the people who are listening." />
        <section className="upload-layout">
            <div className="artist-panel upload-dropzone">
                <MdCloudUpload />
                <h2>{releaseType === "album" ? "Add your album tracks" : "Drop your audio here"}</h2>
                <p>{releaseType === "album" ? "Select multiple WAV, FLAC, or MP3 files" : "WAV, FLAC, or MP3 up to 500 MB"}</p>
                <label className="artist-primary-action upload-file-button">
                    <MdCloudUpload /> {audioFiles.length ? `${audioFiles.length} file${audioFiles.length > 1 ? "s" : ""} selected` : "Browse audio files"}
                    <input type="file" accept="audio/wav,audio/flac,audio/mpeg,audio/mp3" multiple={releaseType === "album"} onChange={handleAudioChange} />
                </label>
                {audioFiles.length > 0 && <span className="upload-success"><MdCheck /> {audioFiles[0].name}{audioFiles.length > 1 ? ` + ${audioFiles.length - 1} more` : ""}</span>}
            </div>
            <div className="artist-panel upload-form">
                <h2>Release details</h2>
                <div className="release-type-picker"><span>What are you releasing?</span><div><button className={releaseType === "single" ? "selected" : ""} onClick={() => setReleaseType("single")} type="button">Single</button><button className={releaseType === "album" ? "selected" : ""} onClick={() => setReleaseType("album")} type="button">Album</button></div></div>
                {releaseType === "album" && <label>Album title<input placeholder="e.g. Midnight Echoes" /></label>}
                {releaseType === "album" ? <div className="album-track-fields">
                    <div className="album-track-heading"><span>Album tracks</span><small>{albumTracks.length} track{albumTracks.length > 1 ? "s" : ""}</small></div>
                    {albumTracks.map((track, index) => <div className="album-track-row" key={track.id}>
                        <span className="album-track-number">{index + 1}</span>
                        <input value={track.title} onChange={(event) => updateAlbumTrack(track.id, "title", event.target.value)} placeholder={`Track ${index + 1} title`} aria-label={`Track ${index + 1} title`} />
                        <input className="featured-artist-input" value={track.featuredArtist} onChange={(event) => updateAlbumTrack(track.id, "featuredArtist", event.target.value)} placeholder="Featured artist (optional)" aria-label={`Featured artist for track ${index + 1}`} />
                        <label className="track-file-button">
                            <MdCloudUpload /> {track.file ? "Replace audio" : "Add audio"}
                            <input type="file" accept="audio/wav,audio/flac,audio/mpeg,audio/mp3" onChange={(event) => {
                                const file = event.target.files?.[0];
                                if (file) updateAlbumTrack(track.id, "file", file);
                            }} />
                        </label>
                        {track.file && <small className="track-file-name">{track.file.name}</small>}
                    </div>)}
                    <button className="add-track-button" type="button" onClick={addAlbumTrack}><MdAdd /> Add another track</button>
                </div> : <>
                    <label>Track title<input placeholder="e.g. Neon Midnight" /></label>
                    <label>Featured artist <span className="optional-label">(optional)</span><input value={featuredArtist} onChange={(event) => setFeaturedArtist(event.target.value)} placeholder="e.g. Maya Stone" /></label>
                </>}
                <label>Artist name<input value="Alex Rivers" readOnly /></label>
                <label>Genre<select><option>Electronic</option><option>Alternative</option><option>Ambient</option></select></label>
                <label className="cover-upload-label">Cover artwork<span className="cover-upload-box">{coverPreview ? <img src={coverPreview} alt="Selected cover artwork" /> : <MdImage />}<span>{coverName || "Choose a square JPG or PNG"}</span><input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleCoverChange} /></span></label>
                <button className="artist-primary-action upload-submit" disabled={!audioFiles.length}>Save {releaseType === "album" ? "album" : "draft"} <MdArrowBack className="rotate-icon" /></button>
            </div>
        </section>
    </div>;
};

export const ArtistAnalytics = () => <div className="artist-page"><ArtistHeader eyebrow="Know your audience" title="Analytics" description="A clear view of how your music is moving through the world." action={<button className="artist-filter"><MdDownload /> Export report</button>} /><section className="artist-analytics-grid"><article className="artist-panel analytics-chart"><div className="artist-panel-heading"><div><h2>Listener growth</h2><p>Unique listeners over the last 30 days</p></div><span className="analytics-total"><MdTrendingUp /> 18.6%</span></div><div className="chart-area"><div className="chart-line" /><div className="chart-labels"><span>May 01</span><span>May 15</span><span>May 30</span></div></div></article><article className="artist-panel audience-card"><h2>Top listener locations</h2><p>Where your sound is being heard</p>{[["United States", "42%"], ["United Kingdom", "18%"], ["Germany", "11%"], ["Canada", "8%"]].map(([country, value]) => <div className="audience-row" key={country}><span>{country}</span><strong>{value}</strong><i style={{ width: value }} /></div>)}</article></section><section className="artist-analytics-cards"><div><MdAnalytics /><strong>248K</strong><span>Total plays</span></div><div><MdShare /><strong>14.2K</strong><span>Shares</span></div><div><MdLibraryMusic /><strong>8.4K</strong><span>Library saves</span></div></section></div>;

export const ArtistSettings = () => { const [publicProfile, setPublicProfile] = useState(true); const [showLogoutModal, setShowLogoutModal] = useState(false); return <div className="artist-page"><ArtistHeader eyebrow="Your studio" title="Settings" description="Manage your artist profile and publishing preferences." /><section className="artist-settings-grid"><div className="artist-panel"><div className="artist-profile-large"><div className="artist-avatar-large">AR</div><div><strong>Alex Rivers</strong><span>Electronic artist · New York</span></div><button className="artist-filter"><MdEdit /> Edit profile</button></div></div><div className="artist-panel"><div className="artist-panel-heading"><div><h2>Artist profile</h2><p>Control how listeners see your page.</p></div><MdSettings /></div><label className="artist-setting-row"><span><strong>Public profile</strong><small>Make your artist page visible to everyone.</small></span><button className={`artist-toggle ${publicProfile ? "on" : ""}`} onClick={() => setPublicProfile(!publicProfile)}><i /></button></label><label className="artist-setting-row"><span><strong>Release notifications</strong><small>Get notified when your tracks are approved.</small></span><input type="checkbox" defaultChecked /></label><div className="artist-logout-row"><div><strong>Sign out</strong><small>End your artist session.</small></div><button className="settings-logout-button" onClick={() => setShowLogoutModal(true)}><FiLogOut /> Log out</button></div></div></section>{showLogoutModal && <div className="admin-logout-backdrop" role="presentation" onClick={() => setShowLogoutModal(false)}><div className="admin-logout-modal" role="dialog" aria-modal="true" aria-labelledby="artist-logout-title" onClick={(event) => event.stopPropagation()}><div className="admin-logout-icon"><FiLogOut /></div><h2 id="artist-logout-title">Log out of EchoStream?</h2><p>You will need to sign in again to manage your artist account.</p><div className="admin-logout-actions"><button className="admin-logout-cancel" onClick={() => setShowLogoutModal(false)}>Cancel</button><button className="admin-logout-confirm" onClick={() => window.location.href = "/artist/signin"}>Proceed</button></div></div></div>}</div>; };
