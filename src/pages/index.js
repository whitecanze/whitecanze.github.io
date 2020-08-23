import Head from 'next/head'
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Typed from 'typed.js';
import Link from 'next/link'
import Project from '../util/projects.json'

export default class Home extends Component {
    

    constructor(props) {
        super(props)
        this.myhome = React.createRef();
        this.myabout = React.createRef();
        this.myskill = React.createRef();
        this.myproject = React.createRef();
        this.mycontact = React.createRef();
    }

    componentDidMount() {
        const strings  = 
            [
            "tech geek",
            "developer",
            "Analytical",
            "Enjoy taking challenges",
            "Make everything possible",
            "Get things done",
            ];
        const options = {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        };
        this.typed = new Typed(this.el, options);

        const isBrowser = window && window.addEventListener('scroll', () => {
            let navbar = document.getElementById("mynav")
            let sticky = ReactDOM.findDOMNode(navbar).offsetTop
            let myprogressbar = document.getElementById('progressbar')
            // let myprogrsspercentpercent = document.getElementById('percent')
            let totalheight = document.body.scrollHeight - window.innerHeight
            let homebtn = ReactDOM.findDOMNode(document.getElementById("home-btn"))
            let aboutbtn = ReactDOM.findDOMNode(document.getElementById("about-btn"))
            let skillbtn = ReactDOM.findDOMNode(document.getElementById("skills-btn"))
            let projectbtn = ReactDOM.findDOMNode(document.getElementById("projects-btn"))
            let contactbtn = ReactDOM.findDOMNode(document.getElementById("contact-btn"))
            // let header = ReactDOM.findDOMNode(document.getElementById("header")).offsetTop
            let aboutme = ReactDOM.findDOMNode(document.getElementById("aboutme")).offsetTop
            let skills = ReactDOM.findDOMNode(document.getElementById("skills")).offsetTop
            let projects = ReactDOM.findDOMNode(document.getElementById("projects")).offsetTop
            let contact = ReactDOM.findDOMNode(document.getElementById("contact")).offsetTop
            let progress = (window.pageYOffset / totalheight) * 100
            if (progress > 100) {
                progress = 100
            }
            ReactDOM.findDOMNode(myprogressbar).style.width = progress + "%"
            if (window.pageYOffset > sticky) {
                ReactDOM.findDOMNode(navbar).classList.add("fixed-top")
            } else {
                ReactDOM.findDOMNode(navbar).classList.remove("fixed-top")
            }
            // console.log("pageYOffset:"+window.pageYOffset,"header:"+header,"aboutme:"+aboutme,"skills:"+skills,"projects:"+projects,"contact:"+contact)
            if (window.pageYOffset < aboutme) {
                if (aboutbtn.classList.contains('has-focus')) {
                    aboutbtn.classList.remove('has-focus')
                    homebtn.classList.add('has-focus')
                }
                else if (skillbtn.classList.contains('has-focus')) {
                    skillbtn.classList.remove('has-focus')
                    homebtn.classList.add('has-focus')
                }
                else if (projectbtn.classList.contains('has-focus')) {
                    projectbtn.classList.remove('has-focus')
                    homebtn.classList.add('has-focus')
                }
                else if (contactbtn.classList.contains('has-focus')) {
                    contactbtn.classList.remove('has-focus')
                    homebtn.classList.add('has-focus')
                }
            }
            if (window.pageYOffset >= aboutme-184 && window.pageYOffset < skills) {
                if (homebtn.classList.contains('has-focus')) {
                    homebtn.classList.remove('has-focus')
                    aboutbtn.classList.add('has-focus')
                }
                else if (skillbtn.classList.contains('has-focus')) {
                    skillbtn.classList.remove('has-focus')
                    aboutbtn.classList.add('has-focus')
                }
                else if (projectbtn.classList.contains('has-focus')) {
                    projectbtn.classList.remove('has-focus')
                    aboutbtn.classList.add('has-focus')
                }
                else if (contactbtn.classList.contains('has-focus')) {
                    contactbtn.classList.remove('has-focus')
                    aboutbtn.classList.add('has-focus')
                }
            }
            if (window.pageYOffset >= skills-100 && window.pageYOffset < projects) {
                if (homebtn.classList.contains('has-focus')) {
                    homebtn.classList.remove('has-focus')
                    skillbtn.classList.add('has-focus')
                }
                else if (aboutbtn.classList.contains('has-focus')) {
                    aboutbtn.classList.remove('has-focus')
                    skillbtn.classList.add('has-focus')
                }
                else if (projectbtn.classList.contains('has-focus')) {
                    projectbtn.classList.remove('has-focus')
                    skillbtn.classList.add('has-focus')
                }
                else if (contactbtn.classList.contains('has-focus')) {
                    contactbtn.classList.remove('has-focus')
                    skillbtn.classList.add('has-focus')
                }
            }
            if (window.pageYOffset >= projects-100 && window.pageYOffset < contact) {
                if (aboutbtn.classList.contains('has-focus')) {
                    aboutbtn.classList.remove('has-focus')
                    projectbtn.classList.add('has-focus')
                }
                else if (skillbtn.classList.contains('has-focus')) {
                    skillbtn.classList.remove('has-focus')
                    projectbtn.classList.add('has-focus')
                }
                else if (contactbtn.classList.contains('has-focus')) {
                    contactbtn.classList.remove('has-focus')
                    projectbtn.classList.add('has-focus')
                }
                else if (homebtn.classList.contains('has-focus')) {
                    homebtn.classList.remove('has-focus')
                    projectbtn.classList.add('has-focus')
                }
            }
            if (window.pageYOffset >= contact-300 ) {
                if (homebtn.classList.contains('has-focus')) {
                    homebtn.classList.remove('has-focus')
                    contactbtn.classList.add('has-focus')
                }
                else if (aboutbtn.classList.contains('has-focus')) {
                    aboutbtn.classList.remove('has-focus')
                    contactbtn.classList.add('has-focus')
                }
                else if (skillbtn.classList.contains('has-focus')) {
                    skillbtn.classList.remove('has-focus')
                    contactbtn.classList.add('has-focus')
                }
                else if (projectbtn.classList.contains('has-focus')) {
                    projectbtn.classList.remove('has-focus')
                    contactbtn.classList.add('has-focus')
                }
            }
            return progress
        })
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    render() {
        return (
            <div>
            <Head>
                <title>WhiteCanZE - Developer 🚀</title>
                <link rel="icon" href="/mylogo4.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossOrigin="anonymous" />
            
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossOrigin="anonymous"/>
            </Head>
            {/* navbar */}
                <div className="navbar">
                    <nav className = "my-nav" id="mynav" >
                        <div className="box-content-nav">
                            <div className="mylogo">
                                <img loading="lazy" src="/mylogo4.png" alt="my logo"></img>
                                <h1 id="mytext">WhiteCanZE</h1>
                            </div>
                            <div className="my-list-box">
                                <ul className="mynav-list">
                                    <li className="has-focus" id="home-btn" onClick={() => {this.scroll(this.myhome)}}>Home</li>
                                    <li id="about-btn" onClick={() => {this.myabout ? this.scroll(this.myabout) : pass}}>About</li>
                                    <li id="skills-btn" onClick={() => {this.myskill ? this.scroll(this.myskill) : pass}}>Skills</li>
                                    <li id="projects-btn" onClick={() => {this.myproject ? this.scroll(this.myproject) : pass}}>Projects</li>
                                    <li id="contact-btn" onClick={() => {this.mycontact ? this.scroll(this.mycontact) : pass}}>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className = "myprogressbar">
                            <div id="progressbar"></div>
                            <div id="percent"></div>
                        </div>
                    </nav>
                </div>
            {/* header */}
                <div className="myheader" ref={this.myhome} id="header">
                    <div className="content-header">
                        <div className="first-header-text">
                            <h1 id="first-text">
                                hi!
                            </h1>
                            <h1 id="sub-text">
                                I'm WhiteCanZE
                            </h1>
                            <h1 id="sub-text2">
                                <span ref={(el) => { this.el = el; }}/>
                            </h1>
                        </div>
                        <div className="my-btn-box">
                            <a className="my-cus-btn1" onClick={() => {this.mycontact ? this.scroll(this.mycontact) : pass}}>
                                Contact me
                            </a>
                            <a className="my-cus-btn2" data-toggle="modal" data-target="#resume-image">
                                view resume
                            </a>
                        </div>
                        <img className="header-image" src="/new-img3.png" alt="header-image" />
                        <div className="modal fade" id="resume-image" tabIndex="-1" aria-labelledby="My resume image" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="Myresume">
                                            <img loading="lazy" src="/my-resume-en.jpg" alt="My resume image" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger btn-lg btn-block" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* content */}
                <div className="mybody" ref={this.myabout}>
                    <div className="aboutme" id="aboutme">
                        <div className="aboutme-content">
                            <h1>🚀  A li'l bit <br/> about myself</h1><br/>
                            <p> Hi!, i'm Phatcharapong Jullamonton i love tech and computer<br />
                                since i was young it's make me be a tech geek, dunno why when <br />
                                the first met the coding in a computer class at university i felt <br/>
                                it's right for me, then i think coding it's a part of my life, each <br />
                                computer language when i learn and write it easier than other <br />
                                class for me Python language is the best of me because <br />
                                it's useful so much stuff of this time. 😄
                            </p><br />
                            <Link href="/my-resume-en.pdf">
                                <a>
                                    <button className="my-cus-btn3" download>
                                            download resume
                                    </button>
                                </a>
                            </Link>
                        </div>
                        <div className="aboutme-img">
                            <img loading="lazy" src="/new-img1.png" alt=""/>
                        </div>
                    </div>
                    <div className="myskills" ref={this.myskill} id="skills">
                        <h1><i className="fas fa-chevron-left"></i> My_skills <span>/</span><i className="fas fa-chevron-right"></i></h1>
                        <div className="card-zone">
                            <div className="card-skill">
                                <i className="devicon-html5-plain-wordmark colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-css3-plain-wordmark colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-javascript-plain colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-python-plain-wordmark colored drop-shadow"></i>
                            </div><br />
                            <div className="card-skill">
                                <i className="devicon-django-plain colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <img className="drop-shadow" src="/flask.png" alt="flask-icon" width="80px"/>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-csharp-plain colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-dot-net-plain-wordmark colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-mongodb-plain-wordmark colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-mysql-plain-wordmark colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-java-plain-wordmark colored drop-shadow"></i>
                            </div>
                            <div className="card-skill">
                                <i className="devicon-android-plain-wordmark colored drop-shadow"></i>
                            </div>
                        </div>
                    </div>
                    <div className="myprojects" ref={this.myproject} id="projects">
                        <h1><i className="fas fa-chevron-left"></i> My Projects <span>/</span><i className="fas fa-chevron-right"></i></h1>
                        <div className="card-zone">
                            {Object.entries(Project).map((val, i) => {
                                return <div className="card-project" key={i}>
                                    <Link href={val[1].link}>
                                        <a>
                                            <h1>
                                                {val[1].title}
                                            </h1>
                                        </a>
                                    </Link>
                                    <p>
                                        {val[1].detail}
                                    </p>
                                    <div className="detail-box">
                                        <div className="detail-data-box">
                                            <span className="text-q-box">Platform</span>
                                            <span className="text-a-box a1">{val[1].platform}</span>
                                        </div>
                                        <div className="detail-data-box">
                                            <span className="text-q-box">Editor</span>
                                            <span className="text-a-box a2">{val[1].editor}</span>
                                        </div>
                                        <div className="detail-data-box">
                                            <span className="text-q-box">Framework</span>
                                            <span className="text-a-box a3">{val[1].framework}</span>
                                        </div>
                                        <div className="detail-data-box">
                                            <span className="text-q-box">Library</span>
                                            <span className="text-a-box a4">{val[1].library}</span>
                                        </div>
                                        <div className="detail-data-box">
                                            <span className="text-q-box">Language</span>
                                            <span className="text-a-box a5">{val[1].language}</span>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="mycontact" ref={this.mycontact} id="contact">
                        <h1><i className="fas fa-chevron-left"></i> My Contact <span>/</span><i className="fas fa-chevron-right"></i></h1>
                        <h3>Say Hi to me! 👋</h3>
                        <div className="mybodywork">
                            <ul>
                                <li>
                                    <Link href="mailto:phatcharapongjullamonton@gmail.com">
                                        <a><i className="fas fa-envelope-open"></i></a> 
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://github.com/whitecanze">
                                        <a><i className="fab fa-github"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.facebook.com/WhiteCanZE/">
                                        <a><i className="fab fa-facebook-f"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <a data-toggle="modal" data-target="#line-qrcode">
                                        <i className="fab fa-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="modal fade" id="line-qrcode" tabIndex="-1" aria-labelledby="Line@benjaminiza QR-CODE" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen ">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img loading="lazy" src="/lineqrcode.jpg" alt="@benjaminiza"/>
                                        <h2>ID : benjaminiza</h2>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger btn-lg btn-block" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            {/* footer */}
                    <div className="myfooter">
                        © 2020 WHITECANZE.
                    </div>
                </div>
            </div>
        )
    }
}




