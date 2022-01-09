const formPart = document.querySelector('form');
const inputNumper = document.querySelector('input[type=text]');
const navPart = document.querySelector('nav');
const ulPart = document.createElement('ul');
const sectionsSpace = document.querySelector('div.sections-space')
// var numberOfSections;

formPart.addEventListener('submit', function (evet) {
    evet.preventDefault();
    
    let numberOfSections = inputNumper.value;
    navPart.innerHTML = "";
    ulPart.innerHTML = "";
    sectionsSpace.innerHTML = "";

    for (let i = 1; i <= numberOfSections; i++) {
        const anchorPart = document.createElement('a');
        // anchorPart.setAttribute(`href`, `#section-${i}`); // I remove this line because we dont depend on href="#sectioni" to scroll
        // console.log(anchorPart);
        anchorPart.appendChild(document.createTextNode(`section ${i}`));
        // console.log(anchorPart.innerHTML);
        const listPart = document.createElement('li');
        listPart.appendChild(anchorPart);
        ulPart.appendChild(listPart);
        // :::::::::::::::::::::::::::::::::
        const sectionPart = document.createElement('section');
        sectionPart.setAttribute(`id`, `section-${i}`);
        // :::::::::::::::::::::::::::::::::
        // add scrollIntoView() function for all listPart 
        listPart.addEventListener('click', function () {
            sectionPart.scrollIntoView();
            // sectionPart.classList.add('active');
        });
        // :::::::::::::::::::::::::::::::::
        // create container inside sectionPart 
        const containerPart = document.createElement('div');
        sectionPart.appendChild(containerPart);
        containerPart.classList.add('container'); // create div with class .container inside every (section)
        // create h2 and p inside container 
        const titlePart = document.createElement('h2');
        titlePart.appendChild(document.createTextNode(`section ${i}`));
        containerPart.appendChild(titlePart);
        const paragraphElement = document.createElement('p');
        containerPart.appendChild(paragraphElement);
        // create lorem text inside p 
        paragraphElement.appendChild(document.createTextNode(`
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reiciendis 
    eum in incidunt nostrum repellat temporibus repudiandae, cum, necessitatibus,
    odit rem at alias recusandae debitis. Molestias impedit suscipit explicabo laboriosam!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reiciendis 
    eum in incidunt nostrum repellat temporibus repudiandae, cum, necessitatibus,
    odit rem at alias recusandae debitis. Molestias impedit suscipit explicabo laboriosam!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reiciendis 
    eum in incidunt nostrum repellat temporibus repudiandae, cum, necessitatibus,
    odit rem at alias recusandae debitis. Molestias impedit suscipit explicabo laboriosam!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reiciendis 
    eum in incidunt nostrum repellat temporibus repudiandae, cum, necessitatibus,
    odit rem at alias recusandae debitis. Molestias impedit suscipit explicabo laboriosam!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reiciendis 
    eum in incidunt nostrum repellat temporibus repudiandae, cum, necessitatibus,
    odit rem at alias recusandae debitis. Molestias impedit suscipit explicabo laboriosam!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reiciendis 
    eum in incidunt nostrum repellat temporibus repudiandae, cum, necessitatibus,
    odit rem at alias recusandae debitis. Molestias impedit suscipit explicabo laboriosam!`));
        // ::::::::::::::::::::::::::::::::::
        sectionsSpace.appendChild(sectionPart);
    }
    // append ul inot navegation part
    navPart.appendChild(ulPart);
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // add active class to viewable section 
    const sectionParts = document.querySelectorAll('section');
    document.addEventListener('scroll', function () {
        // I wrote the first three Element to I can write good for loop:
        // .............................................................
        // ...... first section part ...... 
        // if (document.documentElement.scrollTop >= 500 && document.documentElement.scrollTop <= 1200) {
        //     sectionParts[1].classList.add('active');
        // } else if (document.documentElement.scrollTop < 500 || document.documentElement.scrollTop > 1200) {
        //     sectionParts[1].classList.remove('active');
        // }
        // ...... second section part ...... 
        // if (document.documentElement.scrollTop >= 1201 && document.documentElement.scrollTop <= 1856) {
        //     sectionParts[2].classList.add('active');
        // } else if (document.documentElement.scrollTop < 1201 || document.documentElement.scrollTop > 1856) {
        //     sectionParts[2].classList.remove('active');
        // }
        // ...... third section part ...... 
        // if (document.documentElement.scrollTop >= 1857 && document.documentElement.scrollTop <= 2512) {
        //     sectionParts[3].classList.add('active');
        // } else if (document.documentElement.scrollTop < 1857 || document.documentElement.scrollTop > 2512) {
        //     sectionParts[3].classList.remove('active');
        // }
        //...............................................................
        // Now we have 5 cases depend on .clientHeight of any section 
        // I chose the sectionParts[1] because the sectionParts[0] is (.landing) part
        // console.log(sectionParts[1].clientHeight);
        // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // very small screens (container width = 320 px)
        if (sectionParts[1].clientHeight >= 1579) {
            var view1 = 500; // I chose (var) by forced 
            var view2 = 2200;
        }
        //  small screens (container width = 550px)
        if (sectionParts[1].clientHeight >= 1005 && sectionParts[1].clientHeight < 1579) {
            var view1 = 500;
            var view2 = 1800;
        }
        //  medium screens (container width = 700px)
        if (sectionParts[1].clientHeight >= 830 && sectionParts[1].clientHeight < 1005) {
            var view1 = 500;
            var view2 = 1600;
        }
        //  larg screens (container width = 930px)
        if (sectionParts[1].clientHeight >= 730 && sectionParts[1].clientHeight < 830) {
            var view1 = 500;
            var view2 = 1400;
        }
        //  very larg screens (container width = 1100px)
        if (sectionParts[1].clientHeight <= 655) {
            var view1 = 500;
            var view2 = 1200;
        }
        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        for (let i = 1; i <= numberOfSections; i++) {
            if (document.documentElement.scrollTop >= view1 && document.documentElement.scrollTop <= view2) {
                sectionParts[i].classList.add('active');
            } else if (document.documentElement.scrollTop < view1 || document.documentElement.scrollTop > view2) {
                sectionParts[i].classList.remove('active');
            }
            // very small screens
            if (sectionParts[1].clientHeight >= 1579) {
                view1 = view2 + 1;
                view2 = view1 + 1579;
            }
            // small screens
            if (sectionParts[1].clientHeight >= 1005 && sectionParts[1].clientHeight < 1579) {
                view1 = view2 + 1;
                view2 = view1 + 1005;
            }
            // medium screens
            if (sectionParts[1].clientHeight >= 830 && sectionParts[1].clientHeight < 1005) {
                view1 = view2 + 1;
                view2 = view1 + 830;
            }
            // larg screens
            if (sectionParts[1].clientHeight >= 730 && sectionParts[1].clientHeight < 830) {
                view1 = view2 + 1;
                view2 = view1 + 730;
            }
            // very larg screens
            if (sectionParts[1].clientHeight <= 655) {
                view1 = view2 + 1;
                view2 = view1 + 655;
            }
        }
    });
});





