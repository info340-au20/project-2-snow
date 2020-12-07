export default function Footer() {
    return (
        <footer className="page-footer font-small black pt-4">
        <div className="container-fluid text-center text-md-center">
          <p className="text-uppercase">Developers:</p>
          <p>Yilin Chen · Class of 2023 (<a href="mailto:ychen023@uw.edu">ychen023@uw.edu</a>)</p>
          <p>Sunny Zheng · Class of 2023 (<a href="mailto:sunnyzyr@uw.edu">sunnyzyr@uw.edu</a>)</p>
        </div>
        <div className="footer-copyright text-center py-3">
          <p>INFO340: Client Side Development ·&nbsp;
            <span><a href="https://github.com/info340-au20/project-1-snow.git" aria-label="Github Repository Link">GitHub</a></span>
            <span>·&nbsp; &copy; Yilin Chen & Sunny Zheng</span>
            · Header photos from <a href="https://unsplash.com/" aria-label="Unsplash website Link">Unsplash</a>
          </p>
        </div>
      </footer>
    )
}