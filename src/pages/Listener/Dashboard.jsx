import { MdFavoriteBorder, MdPause, MdPlayArrow, MdSkipNext, MdSkipPrevious, MdShuffle, MdRepeat, MdQueueMusic, MdVolumeUp, MdFullscreen } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { BsSoundwave } from "react-icons/bs";
import "../../styles/dashboard.css";

const recentlyPlayed = [
  { title: "Ethereal Pulse", artist: "Neon Drift", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=400&q=80" },
  { title: "Silent Lines", artist: "Architect", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" },
  { title: "Deep Waters", artist: "Fluid Theory", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80" },
  { title: "Vector Soul", artist: "Prism", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=400&q=80" },
  { title: "Night Walk", artist: "Solace", image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&q=80" },
  { title: "8-Bit Sunset", artist: "Glitch Heart", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div className="hero-content">
          <span className="hero-kicker">Featured album</span>
          <h1>Midnight Echoes</h1>
          <p>Experience the latest immersive sonic journey from the award-winning cinematic synth artist, Luna Ray.</p>
          <div className="hero-actions">
            <button className="dashboard-button dashboard-button-primary"><MdPlayArrow size={21} /> Listen Now</button>
            <button className="dashboard-button dashboard-button-secondary"><FiPlus size={19} /> Add to Library</button>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading"><h2>Recently Played</h2><button>View All</button></div>
        <div className="album-grid">
          {recentlyPlayed.map((album) => (
            <article className="album-card" key={album.title}>
              <div className="album-art-wrap"><img src={album.image} alt={album.title} /><button className="album-play"><MdPlayArrow /></button></div>
              <h3>{album.title}</h3><p>{album.artist}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dashboard-section recommendation-section">
        <div className="section-heading"><h2>Recommended for You</h2><div className="section-arrows"><button aria-label="Previous"><MdSkipPrevious /></button><button aria-label="Next"><MdSkipNext /></button></div></div>
      </section>

      <div className="dashboard-player">
        <div className="player-track"><div className="player-art"><BsSoundwave /></div><div><strong>Midnight Echoes</strong><span>Luna Ray</span></div><MdFavoriteBorder className="player-heart" /></div>
        <div className="player-controls"><div className="player-actions"><MdShuffle /><MdSkipPrevious /><button className="player-play"><MdPause /></button><MdSkipNext /><MdRepeat /></div><div className="player-progress"><span>2:14</span><div><i /></div><span>4:42</span></div></div>
        <div className="player-options"><MdQueueMusic /><MdVolumeUp /><div className="volume"><i /></div><MdFullscreen /></div>
      </div>
    </div>
  )
}

export default Dashboard