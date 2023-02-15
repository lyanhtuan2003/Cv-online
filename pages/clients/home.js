
import { useEffect, useState } from "../../lib";

const HomePage = () => {
    //cloudinary
    const [post, setPost] = useState([]);
    const [profile, setProfile] = useState([])
    const [contact, setContact] = useState([]);
    const [menu, setMenu] = useState([])
    const [skill, setskill] = useState([]);
    const [services, setServices] = useState([])
    const [protfolio, setProtfolio] = useState([]);

    const skillName = skill.filter((item) => {
        return Number(item.id) < 6
    })
    let skillNameHtml = '';
    skillName.forEach((item) => {
        skillNameHtml += `<h3> ${item.name} <span>${item.progress}%</span> </h3>
        <div class="bar bar-1-1"><span></span></div>`
    })
    const menuName = menu.filter((item) => {
        return Number(item.id) < 5
    })
    let menuNameHtml = ''
    menuName.forEach((item) => {
        menuNameHtml += `<a href="#">${item.name}</a> </br>`
    })
    const protfolioName = protfolio.filter((item) => {
        return Number(item.id) < 7
    })
    let protfolioNameHtml = ``
    protfolioName.forEach((item) => {
        protfolioNameHtml += `
    <div class="box">
    <img src="pages/assets/image/img-1.jpg" alt="">
    <div class="content">
        <h3>${item.name}</h3>
    </div>
</div>
    `
    })
    const ServicesName = services.filter((item) => {
        return Number(item.id) < 7
    })
    let serviceNameHtml = ''
    ServicesName.forEach((item) => {
        serviceNameHtml += `<div class="box">
        
        <i class="fas fa-code"></i>
        
        <h3>${item.name}</h3>
        <a href="${item.link}">
        <p>${item.describe}.</p>
        </a>
    </div>`
    })
    let profileHtml = '';
    if (profile.length) {
        profileHtml = `      
        <img src="${profile[Number.length - 1]?.image}" alt="">
        <h3>${profile[profile.length - 1]?.name}</h3>
        <p>${profile[profile.length - 1]?.position}</p>
        `
        console.log(profileHtml)
    };
    let profileOneHtml = '';
    if (profile.length) {
        profileOneHtml = `
    <h3>${profile[profile.length - 1]?.name}</h3>
    <p>${profile[profile.length - 1]?.position}</p>
    `
    }
    let contactHtml = '';
    if (contact.length) {
        contactHtml = `
        <form action="">
        <input type="text" placeholder="${contact[contact.length - 1]?.name}" class="box">
        <input type="email" placeholder="${contact[contact.length - 1]?.email}" class="box">
        <input type="text" placeholder="${contact[contact.length - 1]?.subject}" class="box">
        <textarea name="" class="box" placeholder="${contact[contact.length - 1]?.message}" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" class="btn">
    </form> `
    }

    let postHtml = '';
    if (post.length) {
        postHtml = `     
        <div class="box-container">
        <div class="box">
        <h3>${post[post.length - 1]?.years_of_experience}+</h3>
        <p>years of experience</p>
        </div>
        <div class="box">
        <h3>${post[post.length - 1]?.satisfied_clients}+</h3>
        <p>satisfied clients</p>
        </div>
        <div class="box">
        <h3>${post[post.length - 1]?.working_hours}+</h3>
        <p>working hours</p>
        </div>
        <div class="box">
        <h3>${post[post.length - 1]?.awards_won}+</h3>
        <p>awards won</p>
        </div>
        </div>
        <div class="content">
        <h3>my name is <span>${post[post.length - 1]?.author}</span></h3>
        <p>${post[post.length - 1]?.content}</p>
            <a href="#" class="btn">contact me</a>
        </div>
        `  ;
    }

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setPost(data));
        fetch("http://localhost:3000/portfolio")
            .then((response) => response.json())
            .then((data) => setProtfolio(data));
        fetch("http://localhost:3000/services")
            .then((response) => response.json())
            .then((data) => setServices(data));
        fetch("http://localhost:3000/profile")
            .then((response) => response.json())
            .then((data) => setProfile(data));

        fetch("http://localhost:3000/skill")
            .then((response) => response.json())
            .then((data) => setskill(data));

        fetch("http://localhost:3000/contact")
            .then((response) => response.json())
            .then((data) => setContact(data));
        fetch("http://localhost:3000/menu")
            .then((response) => response.json())
            .then((data) => setMenu(data));
    }, []);
    useEffect(() => {
        let menu = document.querySelector("#menu-btn");
        let header = document.querySelector(".header");
        menu.onclick = () => {
            menu.classList.toggle("fa-times");
            header.classList.toggle("active");
        };
        window.onscroll = () => {
            menu.classList.remove("fa-times");
            header.classList.remove("active");
        };
        let themeToggler = document.querySelector("#theme-toggler");
        themeToggler.onclick = () => {
            themeToggler.classList.toggle("fa-sun");
            if (themeToggler.classList.contains("fa-sun")) {
                document.body.classList.add("active");
            } else {
                document.body.classList.remove("active");
            }
        };
    }, []);
    return `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="pages/assets/css/style.css">
<!-- header section starts  -->
<header class="header">
<div class="user">
  ${profileHtml}
  </div>
  <nav class="navbar">
  ${menuNameHtml}
  <a href="/admin/posts/projectpost">Admin</a>
 
</nav>
</header>

<!-- header section ends -->

<div id="menu-btn" class="fas fa-bars"></div>

<!-- theme toggler  -->

<div id="theme-toggler" class="fas fa-moon"></div>

<!-- home section starts  -->

<section class="home" id="home">

    <div class="content">
       ${profileOneHtml}
        <a href="#" class="btn">download CV</a>
    </div>

    <div class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
        <a href="#" class="fab fa-pinterest"></a>
    </div>

</section>

<!-- home section ends -->

<!-- about section starts  -->

<section class="about" id="about">

    <h1 class="heading"> <span>about</span> me </h1>

    <div class="row">
${postHtml}
    </div>

    <div class="row">

        <div class="progress">
            <h3> web design <span>90%</span> </h3>
            <div class="bar bar-1-1"><span></span></div>
            <h3> graphic design <span>75%</span> </h3>
            <div class="bar bar-1-2"><span></span></div>
            <h3> UI/UX design <span>80%</span> </h3>
            <div class="bar bar-1-3"><span></span></div>
        </div>

        <div class="progress">
            <h3> HTML <span>95%</span> </h3>
            <div class="bar bar-2-1"><span></span></div>
            <h3> CSS <span>80%</span> </h3>
            <div class="bar bar-2-2"><span></span></div>
            <h3> javascript <span>65%</span> </h3>
            <div class="bar bar-2-3"><span></span></div>
        </div>

    </div>

</section>

<!-- about section ends -->

<!-- services section starts  -->

<section class="services" id="services">

    <h1 class="heading"> my <span>services</span> </h1>

    <div class="box-container">

      ${serviceNameHtml}

       

    </div>

</section>

<!-- services section ends -->

<!-- portfolio section starts  -->

<section class="portfolio" id="portfolio">

    <h1 class="heading"> my <span>portfolio</span> </h1>

    <div class="box-container">

       ${protfolioNameHtml}

        

    </div>

</section>

<!-- portfolio section ends -->

<!-- contact section starts -->

<section class="contact" id="contact">

    <h1 class="heading"> <span>contact</span> me </h1>

${contactHtml}

</section>

<!-- contact section ends -->

<div class="credits"> created by <span>mr. web designer</span> | all rights reserved </div>

<script src="js/script.js"></script>
  `;
};

export default HomePage;
