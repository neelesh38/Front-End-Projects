//biodata-------------------------------------------------------------------------------------------------------
var bio = {
    "name": "Neelesh Bansal",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9569088837",
        "email": "neeleshbansal38@gmail.com",
        "location": "Punjab",
        "twitter": "@Neeleshbansal02",
        "github": "neelesh38"
    },
    "welcomeMessage": "All happiness depends on courage and work.",
    "skills": ["C", "HTML", "CSS", "Bootstrap", "Computer Networks"],
    "biopic": "images/fry1.jpg"
};
bio.display = function() {
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts,#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
};
bio.display();
//---------------------------------------------------------------------------------------------------------------------------
//work----------------------------------------------------------------------------------
var work = {
	'jobs':[{
    "employer": "Chitkara University",
    "title": "Student",
    "dates": "2015-Present",
    "description": "B.tech Computer science",
    "location": "Chitkara university, Village Jhansla, Patiala, Punjab",
	}]
};
//formattedWork = [];
//formattedWork.push(HTMLworkEmployer.replace("%data%", work.jobs.employer) + HTMLworkTitle.replace("%data%", work.jobs.title));
//formattedWork.push(HTMLworkDates.replace("%data%", work.dates));
//formattedWork.push(HTMLworkLocation.replace("%data%", work.location));
///formattedWork.push(HTMLworkDescription.replace("%data%", work.description));
work.display = function() {
   for (var i=0;i<work.jobs.length;i++) {
        $("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title), HTMLworkDates.replace("%data%", work.jobs[i].dates), HTMLworkLocation.replace("%data%", work.jobs[i].location), HTMLworkDescription.replace("%data%", work.jobs[i].description));

        //$(".work-entry:last").append(formattedWork[i]);
    }
};
work.display();
//------------------------------------------------------------------------------------------------------------------
var education = {
    "schools": [{
        "name": "ST Xaviers High School",
        "location": "ST Xaviers High School, Rampura Phul, Punjab",
        "degree": "High School",
        "majors": ["PCM"],
        "dates": "2015",
        "url": "http://www.xavierrampura.com/"
    }, {
        "name": "Chitkara University",
        "location": "Chitkara University, Village Jhansla, Patiala, Punjab",
        "degree": "B.E",
        "majors": ["Computer Science"],
        "dates": "2015-2019",
        "url": "www.chitkara.edu.in"
    }],
    "onlineCourses": [{
        "title": "1. Intro to Html and Css",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }, {
        "title": "2. Javascript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com/courses/ud804"
    }]
};

//Education-----------------------------------------------------------------
education.display = function() {
    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }
    //-----------------------------------------------------------------------------
    //online classes------------------------------------------------------------------------
    $("#education").append(HTMLonlineClasses);
    for (j = 0; j < education.onlineCourses.length; j++) {
        formattedOnline = [];
        formattedOnline.push(HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school));
        formattedOnline.push(HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates));
        formattedOnline.push(HTMLonlineURL.replace("%data%", education.onlineCourses[j].url));
        for (i = 0; i < formattedOnline.length; i++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedOnline[i]);
            //document.write(formattedOnline[i]);
        }
    }
};
education.display();
//------------------------------------------------------------------------------------------
//Projects-----------------------------------
var projects = {
    "projects": [{
            "title": "Fire Extinguishing Robot",
            "dates": "12-June-2015",
            "description": "Fire is like a double-edged sword. Discovery of fire stands as a milestone in the history of mankind. Fire fighters try their best to fight and extinguish fires when in need. But at the household level, it is observed that if the fire can be extinguished at an early stage, many major accidents can be averted.",
            "images": ['images/im.jpg']
        },
        {
            "title": "Animal trading Cards Master",
            "dates": "26-Jan-2017",
            "description": "Description About animal of Panda.",
            "images": ['images/panda.png']
        },
        {
            "title": "Portfolio Master Page",
            "dates": "27-Jan-2017",
            "description": "Description About Type of cycle used for exercise",
            "images": ['images/portfolio.png']
        }
    ]
};

//display project
projects.display = function() {
    for (project=0; project<projects.projects.length;project++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title), HTMLprojectDates.replace("%data%", projects.projects[project].dates) + HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            for (var image=0;image<projects.projects[project].images.length;image++)
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
    }
};

projects.display();
//-----------------------------------------------------------------------------
//Map
$("#mapDiv").append(googleMap);