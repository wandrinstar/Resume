var bio = {
            "name": "Martin D. Edson",
            "role": "Backend Developer",
            "contacts": {
                        "email": "m.edson373@gmail.com",
                        "mobile": "+1 (713) 364-5587",
                        "github": "wandrinstar",
                        "location": "Seattle",
                        "skype": "klondi99"
                        },
            "bioPic": "images/code.jpg",
            "welcomeMsg": "Welcome, to my resume. I am looking for an entry-level Back-End developer position but am " +
                            "open to other possibilities as well. Location is flexible.",
            "skills": ["Python", "HTML", "CSS", "Javascript", "Online Gaming", "Remote Team Management"]
}

var work = {
           "jobs": [
                    {"title": "Project Manager",
                    "dates": "2011 - Present",
                    "location": "Washington, D.C.",
                    "description": "Recruitment",
                    "employer": "Flipster LLC"
                    },
                    {
                    "title": "Project Manager",
                    "dates": "2006 - 2012",
                    "location": "Manila, Philippines",
                    "description": "Online Gaming",
                    "employer": "Beltere Consulting LLC"
                    }
            ]
}

var education = {
                "schools": [
                            {
                            "name": "University of Texas",
                            "location": "Austin, TX",
                            "degree": "Bachelor of Science",
                            "majors": ["Biology"],
                            "dates": "May, 2001 - July, 2003",
                            "url": "www.utexas.edu/"
                            }
                ],
                "onlineCourses": [
                                {
                                "title": "Intro to Statistics",
                                "school": "Udacity with San Jose State University",
                                "dates": "2013",
                                "url": "https://www.udacity.com/course/intro-to-statistics--st101"
                                },
                                {
                                "title": "Intro to Java Programming",
                                "school": "Udacity",
                                "dates": "2015",
                                "url": "https://www.udacity.com/course/intro-to-java-programming--cs046"
                                },
                                {
                                "title": "Intro to Computer Science",
                                "school": "Udacity",
                                "dates": "2015",
                                "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
                                },
                                {
                                "title": "Intro to Programming Nanodegree",
                                "school": "Udacity",
                                "dates": "2015",
                                "url": "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
                                },
                                {
                                "title": "Front-End Developer Nanodegree",
                                "school": "Udacity",
                                "dates": "2015",
                                "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
                                }
                ]
}

var projects = {
    "projects": [
                {
                "title": "Casino Games Simulator",
                "dates": "2015",
                "description": "A simulator which models popular slot games. It takes various parameters from the user, "+
                                "and returns figures such as the house advantage (HA), theoretical return to player (RTP), and risk of ruin (ROR). " +
                                "It also can be used for various other casino games such as roulette.",
                "technologies": ["Python", "PyPy"],
                "github": "https://github.com/wandrinstar/sims",
                "image": ["images/slot-sim.jpg", "images/roulette-wheel.jpg", "images/sim-code.jpg"]
                },
                {
                "title": "Udacity Nanodegree Notes Website",
                "dates": "2015",
                "description": "This website was built as the main project for Udacity's Into to Programming Nanodegree. " +
                                "It displays class notes and takes comments from users. " +
                                "The purpose was to demonstrate topics covered such as HTML, CSS, Python, Servers, Databases and APIs. ",
                "technologies": ["Jinja2 Template", "Google App Engine", "Google Datastore", "HTML", "Python"],
                "github": "https://github.com/wandrinstar/Udacity-IPND",
                "image": ["images/nano.jpg", "images/nano2.jpg", "images/nano3.jpg"]
                },
                {
                "title": "Portfolio Website",
                "dates": "2015",
                "description": "A portfolio website that showcases my projects. It was built as an assignment for Udacity's " +
                                "Front-End Nanodegree program. The main focus is on responsive design.",
                "technologies": ["Boostrap", "Modals", "HTML", "CSS"],
                "github": "https://github.com/wandrinstar/portfolio",
                "image": ["images/portfolio.jpg", "images/portfolio2.jpg", "images/portfolio3.jpg"]
                }
    ]
}

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedskype = HTMLcontactGeneric.replace("%data%", bio.contacts.skype);
    formattedskype = formattedskype.replace("%contact%", "skype");
    $("#topContacts").append(formattedskype);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);

    $("#header").append(HTMLskillsStart);
    for (s in bio.skills) {
        var formatedSkill = HTMLskills.replace("%data%", bio.skills[s]);
        $("#skills").append(formatedSkill);
    }
}

work.display = function() {
    for (j in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation + formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}

projects.display = function() {
    for (p in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        $(".project-entry:last").append(HTMLprojectTechnologiesStart);
        for (t in projects.projects[p].technologies) {
            var formattedTechnology = HTMLprojectTechnology.replace("%data%", projects.projects[p].technologies[t]);
            $(".technologies:last").append(formattedTechnology);
        }

        for (i in projects.projects[p].image){
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].image[i]);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

education.display = function() {
    for (s in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
        $(".education-entry:last").append(formattedschoolMajor);
    }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);