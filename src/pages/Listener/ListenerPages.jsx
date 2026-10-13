import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    MdAdd, MdArrowForward, MdCheck, MdClose, MdCloudDownload, MdFavorite,
    MdHeadphones, MdLibraryMusic, MdMoreHoriz, MdPause, MdPlayArrow,
    MdSearch, MdSettings, MdShuffle, MdTune, MdVolumeUp,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const artwork = [
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=500&q=80",
];

const tracks = [
    { title: "Midnight Echoes", artist: "Luna Ray", duration: "4:42", image: artwork[0] },
    { title: "Glass Horizon", artist: "Mira Sol", duration: "3:58", image: artwork[1] },
    { title: "Static Bloom", artist: "Neon Drift", duration: "4:16", image: artwork[2] },
    { title: "Low Tide Memory", artist: "Fluid Theory", duration: "5:01", image: artwork[4] },
    { title: "Afterlight", artist: "Solace", duration: "3:44", image: artwork[5] },
];

const PageHeader = ({ eyebrow, title, description, action }) => (
    <header className="listener-page-header">
        <div><span className="listener-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
        {action}
    </header>
);

const TrackRow = ({ track, index, liked = false, onRemove }) => (
    <div className="track-row">
        <span className="track-index">{String(index + 1).padStart(2, "0")}</span>
        <img src={track.image} alt="" />
        <div className="track-details"><strong>{track.title}</strong><span>{track.artist}</span></div>
        <button className={liked ? "icon-button liked" : "icon-button"} aria-label={liked ? "Unlike song" : "Like song"} onClick={onRemove}><MdFavorite /></button>
        <span className="track-duration">{track.duration}</span>
        <button className="icon-button" aria-label="More options"><MdMoreHoriz /></button>
    </div>
);

export const Discover = () => (
    <div className="listener-page">
        <PageHeader eyebrow="Find your next favorite" title="Discover" description="Fresh sounds, thoughtful collections, and artists worth hearing." action={<button className="outline-action"><MdTune /> Filters</button>} />
        <section className="discover-feature"><div><span className="listener-eyebrow">Curator's pick</span><h2>Soundtrack your<br />quiet hours.</h2><p>A calm collection of ambient textures for focus, rest, and everything between.</p><button className="solid-action"><MdPlayArrow /> Play collection</button></div><div className="feature-art"><img src={artwork[4]} alt="Abstract album cover" /></div></section>
        <div className="content-section-title"><h2>Made for your ears</h2><button className="text-action">See all <MdArrowForward /></button></div>
        <div className="discover-grid">{tracks.slice(0, 4).map((track) => <article className="discover-card" key={track.title}><div className="discover-art"><img src={track.image} alt={track.title} /><button className="floating-play" aria-label={`Play ${track.title}`}><MdPlayArrow /></button></div><strong>{track.title}</strong><span>{track.artist}</span></article>)}</div>
    </div>
);

export const Search = () => {
    const [query, setQuery] = useState("");
    const results = tracks.filter((track) => `${track.title} ${track.artist}`.toLowerCase().includes(query.toLowerCase()));
    return <div className="listener-page"><PageHeader eyebrow="The whole library" title="Search" description="Look for a song, artist, album, or mood." /><div className="large-search"><MdSearch /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search EchoStream" /><kbd>⌘ K</kbd></div><div className="search-suggestions"><span>Try searching</span>{["Ambient", "Luna Ray", "Late night", "Focus"].map((item) => <button key={item} onClick={() => setQuery(item)}>{item}</button>)}</div><section className="content-section"><div className="content-section-title"><h2>{query ? "Results" : "Popular right now"}</h2><span className="result-count">{results.length} tracks</span></div><div className="track-list">{results.map((track, index) => <TrackRow key={track.title} track={track} index={index} />)}</div></section></div>;
};

export const Playlist = () => (
    <div className="listener-page"><PageHeader eyebrow="Your collection" title="Playlists" description="Organize the moments you want to return to." action={<button className="solid-action"><MdAdd /> New playlist</button>} /><div className="playlist-grid"><article className="playlist-card playlist-create"><MdAdd /><strong>Create a playlist</strong><span>Start with a blank canvas</span></article>{["Late Night Drives", "Deep Focus", "Sunday Morning"].map((name, index) => <article className="playlist-card" key={name}><div className="playlist-collage"><img src={artwork[index]} alt="" /><img src={artwork[index + 2]} alt="" /></div><strong>{name}</strong><span>{index + 8} songs · Updated recently</span><button className="playlist-menu" aria-label="Playlist options"><MdMoreHoriz /></button></article>)}</div></div>
);

export const LikedSongs = () => {
    const [likedTracks, setLikedTracks] = useState(tracks.slice(0, 4));
    return <div className="listener-page"><PageHeader eyebrow="Your personal favorites" title="Liked Songs" description="The songs that stayed with you." action={<button className="solid-action"><MdShuffle /> Shuffle play</button>} /><div className="liked-summary"><div className="liked-icon"><MdFavorite /></div><div><strong>{likedTracks.length} songs you love</strong><span>Saved across your EchoStream library</span></div><button className="outline-action"><MdCloudDownload /> Download</button></div><div className="track-list">{likedTracks.map((track, index) => <TrackRow key={track.title} track={track} index={index} liked onRemove={() => setLikedTracks((current) => current.filter((item) => item.title !== track.title))} />)}</div>{likedTracks.length === 0 && <div className="empty-state"><MdFavorite /><h2>Your favorites are waiting</h2><p>Tap the heart on a song to keep it close.</p></div>}</div>;
};

export const Settings = () => {
    const [autoplay, setAutoplay] = useState(true);
    const [quality, setQuality] = useState("High");
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    return <div className="listener-page settings-page"><PageHeader eyebrow="Make it yours" title="Settings" description="Tune your listening experience." /><div className="settings-layout"><aside className="settings-nav"><button className="selected"><MdSettings /> Account</button><button><MdVolumeUp /> Playback</button><button><MdHeadphones /> Notifications</button></aside><div className="settings-panels"><section className="settings-panel"><div className="panel-heading"><div><h2>Profile</h2><p>Your public listener details.</p></div><button className="text-action">Edit</button></div><div className="profile-row"><div className="profile-avatar">SR</div><div><strong>Sarah R.</strong><span>sarah@example.com</span></div></div></section><section className="settings-panel"><div className="panel-heading"><div><h2>Playback</h2><p>Choose how EchoStream behaves.</p></div></div><label className="setting-row"><span><strong>Autoplay</strong><small>Continue with similar songs when a track ends.</small></span><button className={`toggle ${autoplay ? "on" : ""}`} onClick={() => setAutoplay(!autoplay)} aria-label="Toggle autoplay"><i /></button></label><label className="setting-row"><span><strong>Streaming quality</strong><small>Higher quality uses more data.</small></span><select value={quality} onChange={(event) => setQuality(event.target.value)}><option>Standard</option><option>High</option><option>Very High</option></select></label></section><section className="settings-panel settings-logout-panel"><div className="panel-heading"><div><h2>Sign out</h2><p>End your current listening session.</p></div><FiLogOut /></div><button className="settings-logout-button" onClick={() => setShowLogoutModal(true)}><FiLogOut /> Log out</button></section></div></div>{showLogoutModal && <div className="admin-logout-backdrop" role="presentation" onClick={() => setShowLogoutModal(false)}><div className="admin-logout-modal" role="dialog" aria-modal="true" aria-labelledby="listener-logout-title" onClick={(event) => event.stopPropagation()}><div className="admin-logout-icon"><FiLogOut /></div><h2 id="listener-logout-title">Log out of EchoStream?</h2><p>You will need to sign in again to continue listening.</p><div className="admin-logout-actions"><button className="admin-logout-cancel" onClick={() => setShowLogoutModal(false)}>Cancel</button><button className="admin-logout-confirm" onClick={() => window.location.href = "/listener/signin"}>Proceed</button></div></div></div>}</div>;
};

export const Logout = () => {
    const navigate = useNavigate();
    return <div className="logout-page"><div className="logout-mark"><FiLogOut /></div><span className="listener-eyebrow">See you soon</span><h1>Ready to leave the stream?</h1><p>Your listening session is saved. You can come back whenever the next song finds you.</p><div><button className="solid-action" onClick={() => navigate("/listener/signin")}><MdCheck /> Log out</button><button className="outline-action" onClick={() => navigate("/listener/dashboard")}><MdClose /> Stay signed in</button></div></div>;
};
