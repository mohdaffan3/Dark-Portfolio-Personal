button = document.querySelector('.burger');
logo = document.querySelector('.logo');
rightnav = document.querySelector('.rightnav');
navbar = document.querySelector('.navbar');

button.addEventListener('click',()=>{
    logo.classList.toggle('nav-visible');
    rightnav.classList.toggle('nav-visible');
    navbar.classList.toggle('h-nav');
    navbar.classList.toggle('gray-bg');
})



document.addEventListener('DOMContentLoaded', function() {
    // Get the screen width
    var screen_width = screen.width;
  
    
    if (screen_width <= 800 && screen_width >=400) {
      document.getElementById('about-para').innerHTML =
        "I am a Computer Science student specializing in web development, with proficiency in Python and JavaScript. My skillset spans both frontend and backend technologies. With a keen eye for design and a commitment to responsive development, I utilize various frameworks to build visually appealing and user-friendly websites.";
    }
    else if(screen_width > 800)
    {
        document.getElementById('about-para').innerHTML =
        "I am a Computer Science student specializing in web development,with proficiency in Python and JavaScript.My skillset spans both frontend and backend technologies. With a keen eye for design and a commitment to responsive development, I utilize various frameworks to build visually appealing and user-friendly websites. In the ever-evolving landscape of web development, I am excited to contribute tech world and remain dedicated to refining my skills for impactful and innovative solutions."
    }
    else if (screen_width < 400)
    {
        document.getElementById('about-para').innerHTML =
        "  I am a Computer Science student specializing in web development,with proficiency in Python and JavaScript.My skillset spans both frontend and backend technologies."
    }
    else if (screen_width < 165)
    {
        document.getElementById('about-para').innerHTML =
        "  I am a Computer Science student specializing in web development,with proficiency in Python and JavaScript."
    }
    console.log('Script working')
  });
  
