// About page Header
export function AboutPageHeader() {
    return (
      <div className="header-img">
        <div className="header-name">
          <h1>About US</h1>
        </div>
        <br></br>
      </div>
    )
}

// render About content
export function About() {
    return (
        <div>
            <section className="about">
                <br></br>
                <div className="intro">
                <h2>The problem we are trying to solve!</h2>
                <p>During the 2019-2020 season, the U.S had about 51.1 million snow sports visits in
                    total. The demand for ski-related information is tremendous. Unlike other sports,
                    snow-related sports highly depend on weather conditions, locations, and trail
                    difficulty. Get data from different ski resorts would be crucial for people
                    to decide which one would be their best destination, considering both safety and
                    moderation factors. 
                </p>
                <p>
                    Since there are so many ski resorts that the skiers and snowboarders can choose
                    from, each snow trail's data is very scattered. People need to go to various snow
                    resort websites to obtain relevant information, which is a waste of time and
                    difficult to compare. 
                </p>
                <h2>How can SkiUS help skiers?</h2>
                <p>
                    Our app mainly serves skiers and snowboarders looking for inspiration for their next destination 
                    or just checking resort conditions before their trip regardless of skill levels. 
                    Users could look for various ski resorts in the Washington State from our website, including 
                    the basic information of specific ski resorts, lift numbers and runs difficulties. 
                </p>
                <p>Using a single app designed by our team, users will never need to check different 
                    official websites for information regarding ski resorts. Confusions through 
                    the searching process will be reduced. Users can find inspirations and be able to 
                    find the ski destination that best fits their needs.
                </p>
                <h2>Who are we?</h2>
                <p>We are two students from the University of Washington who aim to help skiers find inspirations for their next ski destination.</p>
                </div>
            </section>
            <br></br>
        </div>
    )
}