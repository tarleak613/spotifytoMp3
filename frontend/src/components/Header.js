import React from 'react'

export default function Header() {
  return (
    <>
 {/* Header of the index page */}
<header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid d-flex align-items-center justify-content-between">
    <a href="index.html" className="logo d-flex align-items-center  me-auto me-lg-0">
      <img src="assets/img/music-book-with-musical-notes-vector-glyph-icon-graph-symbol-for-music-and-sound-web-site-and-apps-design-logo-app-ui-2GP8T18.jpg" alt />
    </a>
    <div className="header-social-links">
      <a href="https://www.instagram.com/tarleak613/" className="instagram"><i className="bi bi-instagram" /></a>
      <a href="https://www.linkedin.com/in/ayush-kumar-b42805279/" className="linkedin"><i className="bi bi-linkedin" /></a>
    </div>
    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
  </div>
</header>
{/* Here ends the header */}

    </>
  )
}