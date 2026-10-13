import { MdSearch } from "react-icons/md";

const Topbar = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-4"
      style={{}}
    >
      <div
        className="position-relative"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <MdSearch
          size={22}
          style={{
            position: "absolute",
            top: "50%",
            left: "16px",
            transform: "translateY(-50%)",
            color: "#777",
          }}
        />

        <input
          type="text"
          className="form-control rounded-pill ps-5"
          placeholder="Search artists, songs, podcasts..."
        />
      </div>

      <div className="d-none d-md-block ">
        
      </div>
    </div>
  );
};

export default Topbar;