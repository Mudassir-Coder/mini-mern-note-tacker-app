// Layout-only navbar
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <div className="navbar-logo">N</div>
          <div>
            <p className="text-base">NoteApp</p>
            <p className="section-label mt-0.5">Simple Note Taker</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="tag tag-work">RHF + Zod</span>
          <span className="tag tag-ideas">MERN Stack</span>
        </div>
      </div>
    </nav>
  );
}
