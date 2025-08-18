class Constants {
    static about = "I am an ambitious, creative, and self-motivated Computer Science student at Benue State University, with over five years of hands-on experience in front-end web development and mobile app engineering. I possess strong analytical and mathematical skills and am proficient in Java, C++, Python, Dart, and JavaScript. My expertise encompasses frameworks and libraries such as Codename One, Flutter, React.js, and the Android SDK, and I am well-versed in modern development practices, version control with Git, and agile methodologies.<br/><br/>" +

        "To date, I have designed, built, and deployed more than four projects—each featuring sleek, intuitive user interfaces and high-performance functionality—that are actively used by educational institutions and nonprofit organizations. These solutions demonstrate my ability to translate complex requirements into engaging, user-centric applications that deliver tangible value. I am passionate about continuous learning, collaboration, and problem-solving, and I look forward to graduating with a B.Sc. in Computer Science in 2027."

    static projects = [
        {
            projectName: "AI calc",
            logoSrc: "assert/project_logo/ai_calc.png",
            projectPurpose: "Natural Form & Exact Results Calculator.",
            decription: "An advanced calculator app with features including matrix computations, product log computations, nth derivative calculations, and numerical integration among many more features. Designed to display both natural form and exact results for various mathematical functions.",
            screenShotsURLs: [
                "assert/project_logo/AI_calc/Screenshot_20250419_231647.png",
                "assert/project_logo/AI_calc/Screenshot_20250419_232800.png",
                "assert/project_logo/AI_calc/Screenshot_20250419_233337.png",
                "assert/project_logo/AI_calc/Screenshot_20250419_233439.png",
                "assert/project_logo/AI_calc/Screenshot_20250419_233752.png"
            ]
        },
        {
            projectName: "Study Resources",
            logoSrc: "assert/project_logo/study_resources.png",
            projectPurpose: "Study Resources (Materials, Past Question and Live Quiz System).",
            decription: "A mobile application to help university students prepare for exams by offering real-time quizzes, access to past questions, and study materials. Integrated a GPA/CGPA calculator to assist students in tracking their academic performance.",
            screenShotsURLs: [
                "assert/project_logo/study_resources/Screenshot_20250302-191328.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191337.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191346.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191354.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191702.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191740.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191749.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191819.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191834.jpg",
                "assert/project_logo/study_resources/Screenshot_20250302-191922.jpg"
            ]
        },
        {
            projectName: "Result Compiler",
            logoSrc: "assert/project_logo/lower_benue_staff_school_logo.jpg",
            projectPurpose: "Result Compiler & Report Card Generator.",
            decription: "A mobile application that compiles student results from grade 1 to 12 and generates detailed report cards in PDF.•	Streamlined the process of data collection and report generation for educational institutions.",
            screenShotsURLs: [
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153427.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153613.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153701.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153756.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153858.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153927.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_154212.png"
            ]
        },
        {
            projectName: "eAttendance",
            logoSrc: "assert/project_logo/study_resources.png",
            projectPurpose: "University Electronic Attendance Marker.",
            decription: "A mobile application that records student attendance during exams by scanning a unique QR code on their printed exam permit; it validates the student’s details against the required format and submits them to the university database, rejecting invalid entries.Implemented course-code authentication to ensure only valid exam courses are processed,Deployed and actively used by the university.",
            screenShotsURLs: [
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153427.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153613.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153701.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153756.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153858.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_153927.png",
                "assert/project_logo/LBBS_result_compiler/Screenshot_20250708_154212.png"
            ]
        }
    ]

    static skills = [
        ["Mobile App Development", 95],
        ["Front-End Web Development", 86],
        ["UI Designing", 85],
        ["Elementry Mathematices", 92],
        ["Advanced Mathematices", 58],
        ["Algorithm Writing", 90],
        ["Java", 97],
        ["Dart", 88],
        ["Python", 85],
        ["C++", 73],
        ["JavaScript", 70],
        ["HTML", 95],
        ["CSS", 90],
        ["XML", 93],
        ["React.js", 80]
    ]

    static contact = [
        ["Phone Dial (+234)","08163621604"],
        ["Gmail","ajirsesughtersuccess@gmail.com"],
        ["Facebook",""],
        ["Whatsapp","+2348163621604"],
        ["Instagram",""],
        ["Twitter-X","@AjirSuccess47329"],
        ["Linkedln","Ajir Sesughter Success"],
        ["Github","AlexEddy19"]
    ]

    static stacks = [
        "App Developer.",
        "Web Developer.",
        "UI/UX Designer.",
        "Mathematician.",
        "Tutor.",
        "Algorithm Writter."
    ]
}

function lockScroll() {
    document.body.classList.add('no-scroll');
}

function unlockScroll() {
    document.body.classList.remove('no-scroll');
}


const stack_view = document.getElementById("stack-view");

const typingSpeed = 150;    // ms per character
    const deletingSpeed = 100;  // ms per character when deleting
    const pauseBetween = 900;  // ms to wait after a word is fully typed
    const words = Constants.stacks;

    let currentWord = 0;
    let currentChar = 0;
    let isDeleting = false;

    function tick() {
      const fullText = words[currentWord];
      if (!isDeleting) {
        // type forward
        currentChar++;
        stack_view.textContent = fullText.slice(0, currentChar);

        if (currentChar === fullText.length) {
          // done typing, pause then start deleting
          isDeleting = true;
          return setTimeout(tick, pauseBetween);
        }
      } else {
        // delete backward
        currentChar--;
        stack_view.textContent = fullText.slice(0, currentChar);

        if (currentChar === 0) {
          // done deleting, move to next word
          isDeleting = false;
          currentWord = (currentWord + 1) % words.length;
        }
      }

      // schedule next tick
      const delay = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(tick, delay);
    }

    // kick it off
    tick();


document.getElementById("about").children[1].innerHTML = Constants.about


const projects = document.getElementById("project-list");
const skills = document.getElementById("skills");
const dialog = document.getElementById("screenshoot-dialog");

/*
template:
<div class="card">
    <img src="project1.jpg" alt="Project 1">
    <h3>Project 1</h3>
    <p>A brief description of the project.</p>
</div>
*/
Constants.projects.forEach((detail, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const tittle = document.createElement("div");
    tittle.className = "tittle";

    const logo = document.createElement("img");
    logo.src = detail.logoSrc;
    logo.alt = detail.projectName;

    const project_name = document.createElement("span");
    project_name.innerHTML = detail.projectName;

    tittle.append(logo, project_name);

    const purpose = document.createElement("h3");
    purpose.innerHTML = detail.projectPurpose;

    const description = document.createElement("p");
    description.innerHTML = detail.decription;

    const project_screenshots = document.createElement("div");
    project_screenshots.className = "project-screenshots";

    detail.screenShotsURLs.forEach((URL, i) => {
        const screenshot = document.createElement("img");
        screenshot.src = URL;
        screenshot.alt = URL;
        screenshot.onclick = () => screenshootView(project_name.textContent, URL);
        project_screenshots.append(screenshot);
    });
    card.append(tittle, purpose, description, project_screenshots);
    projects.appendChild(card);
});

function screenshootView(project_name, URL) {
    dialog.style.display = "flex";

    const project_name_view = document.getElementById("project-name");
    const screenshoot_view = document.getElementById("screenshoot-view");
    const close_dialog = document.getElementById("close-dialog");

    close_dialog.onclick = () => {
        dialog.style.display = "none";
        dialog.close();
    }
    project_name_view.textContent = project_name;
    screenshoot_view.src = URL;
    dialog.showModal();
    lockScroll();//prevent background view from scrolling
}

/*
template:
<div>
    <label>Mobile App Development</label>
    <progress value="95" max="100" title="95%"></progress>
</div>
*/

Constants.skills.forEach((skill,index) =>{
    const skillHolder = document.createElement("div");
    const title = document.createElement("label");
    title.innerHTML = skill[0];
    const progress = document.createElement("progress");
    progress.value = skill[1];
    progress.max = 100;
    progress.title = skill[1]+'%';

    skillHolder.append(title,progress);
    skills.children[1].appendChild(skillHolder);
});

const contact_list = document.getElementById("contacts").children;
const contact_dialog = document.getElementById("contact-dialog");

for (let index = 0; index < contact_list.length; index++) {
    const contact = contact_list[index];
    contact.onclick = ()=>{
        contactView(Constants.contact[index][0],Constants.contact[index][1]);
    };
}

function contactView(contact_type, contact) {
    contact_dialog.style.display = "flex";

    const contact_type_name_view = document.getElementById("contact-type-name");
    const contact_view = document.getElementById("contact-view");
    const close_dialog = document.getElementById("close-contact-dialog");

    close_dialog.onclick = () => {
        contact_dialog.style.display = "none";
        contact_dialog.close();
    };

    contact_type_name_view.textContent = contact_type;
    contact_dialog.showModal();
    contact_view.value = contact;

    lockScroll();//prevent background view from scrolling
}

