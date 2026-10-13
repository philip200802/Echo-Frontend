import { MdArrowUpward, MdAutoAwesome, MdBarChart, MdCampaign, MdCloudUpload, MdGroup, MdMoreHoriz, MdMusicNote, MdPalette, MdPayments, MdPlayArrow, MdTrendingUp } from "react-icons/md";
import "../../styles/artist.css";

const activities = [
    ["Neon Midnight", "New track is now live on all regions.", "2 hours ago", "#d9b98c"],
    ["New milestone: 40k Followers", "You reached a new audience milestone today.", "6 hours ago", "#83d5c8"],
    ["New comment on Echoes", "@jason_music: The production on this is insane!", "Yesterday", "#dce6e2"],
];

const ArtistDashboard = () => (
    <div className="artist-page">
        <header className="artist-page-header"><div><span className="artist-eyebrow">Artist workspace</span><h1>Welcome back, Alex.</h1><p>Your listener count is up 12% this week. Keep up the momentum!</p></div><button className="artist-primary-action"><MdCloudUpload /> Upload track</button></header>
        <section className="artist-stat-grid">
            <article className="artist-stat-card"><div className="stat-top"><span className="stat-icon"><MdPlayArrow /></span><span className="stat-change"><MdTrendingUp /> +12%</span></div><span>Total Plays</span><strong>1,248,302</strong><div className="stat-sparkline spark-one" /></article>
            <article className="artist-stat-card"><div className="stat-top"><span className="stat-icon"><MdGroup /></span><span className="stat-change"><MdTrendingUp /> +4.1%</span></div><span>Followers</span><strong>42,850</strong><div className="stat-sparkline spark-two" /></article>
            <article className="artist-stat-card"><div className="stat-top"><span className="stat-icon"><MdBarChart /></span><span className="stat-badge">Active</span></div><span>Live Tracks</span><strong>14</strong><div className="artist-mini-avatars"><i>NR</i><i>AR</i><i>LM</i><b>+11</b></div></article>
        </section>
        <div className="artist-dashboard-grid"><section className="artist-panel activity-panel"><div className="artist-panel-heading"><h2>Recent activity</h2><button>View all</button></div>{activities.map(([title, detail, time, color]) => <div className="activity-row" key={title}><span className="activity-thumb" style={{ backgroundColor: color }}><MdMusicNote /></span><div><strong>{title}</strong><span>{detail}</span></div><small>{time}</small><MdMoreHoriz className="activity-more" /></div>)}</section><aside className="artist-panel creator-tools"><div className="artist-panel-heading"><h2>Creator tools</h2></div><div className="creator-tool-grid"><button><MdCampaign /><span>Promote</span></button><button><MdPalette /><span>Profile Kit</span></button><button><MdPayments /><span>Earnings</span></button><button><MdAutoAwesome /><span>Smart Tag</span></button></div></aside></div>
        <section className="artist-depth-banner"><div><span className="artist-eyebrow">Creator intelligence</span><h2>Unlock deeper insights.</h2><p>Understand where your listeners come from and what makes them stay.</p></div><button className="artist-light-action">Explore analytics <MdArrowUpward /></button></section>
    </div>
);

export default ArtistDashboard;
