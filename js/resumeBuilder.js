/*
This is empty on purpose! Your code to build the resume will go here.
 */




// BIO

var bio = {
	"name":"Vivek Yadav",
	"age":34,
	"role": "Data Scientist",
	"contacts": {
		"mobile": "814-380-2579",
		"email": "vivek.yadav@gmail.com",
		"github":"vxy10",
		"location": "Port Jefferson, NY"
	},
	"welcomeMsg": "Welcome to my page",
	"bioPic": "images/me.jpg",
	"skills": ["Programming","Machine learning","Python/R","JavaScript/d3","EDA","A/B Testing"]
};





// WORK
var work = {

	"jobs": [{
		"title":"Assistant Professor",
		"employer":"Stony Brook University",
		"startyears":"August 2015",
		"endyears":"Current",
		"Dates":"August 2015 - Current",
		"location" :"Stony Brook, NY",
		"Description":"Assistant professor in the departments of Mechanical Engineering and Neurology.",
		"Responsibilites":["Developed and applied audio signal and natural language processing algorithms to quantify psychiatric effects of stroke.",
			"Performed numerical simulations to investigate the role of non-linear dynamics in causing repetitive-use injuries.",
			"Developed and tested nerual network based schemes for robust control of robotic manipulation.",
			"Taught <i>Engineering Dynamics</i> (150 undegraduate students), <i> Advanced Control Systems </i> (30 graduate students).",
			"Co-taught <i> Biomechanics and Movement I </i> (10 graduate students).",
			"Advised senior design projects; Brain-computer interface for robot control, Automated mixologist, Knee/hip energy harvesting device.",
			"Prepared manuscripts for journal and conference proceedings.",
			"Developed algorithms for data analysis and collection in MATLAB, Python and Realbasic"]
		},
		{
		"title":"Post-doctoral Researcher",
		"employer":"Pennsylvania State University",
		"startyears":"Sept 2010",
		"endyears":"August 2015",
		"Dates":"September 2010 - August 2015",
		"location" :"State College, PA",
		"Description":"Post-doctoral researcher in the departments of Kinesiology and Neurology.",
		"Responsibilites":["Developed the first computational model of motor lateralization in humans.",
			"Applied particle swarm optimization to estimate parameters of a hybrid control model.",
			"Condcted experiments in healthy humans and stroke patients to test the validitity of the computational model",
			"Demonstrated that the dominant arm is specialized for optimal control.",
			"Demonstrated that the non-dominant arm is specialized for impedance control.",
			"Advised/trained graduate and undergraduate students in the lab.",
			"Prepared manuscripts for journal and conference proceedings.",
			"Developed algorithms for data analysis and collection in MATLAB and Realbasic"
			]
		},
		{
		"title":"Graduate Research/Teaching Assistant",
		"employer":"Ohio State University",
		"startyears":"August 2006",
		"endyears":"August 2010",
		"Dates":"August 2006 - August 2010",
		"location" :"Columbus, OH",
		"Description":"PhD researcher in the department of Mechanical Engineering.",
		"Responsibilites":["Developed robotic device for upper-arm rehabilitation",
			"Investigated how gravity torques are represented in the brain by conducting experiments in humans",
			"Taught <i> statics </i> (60 undergraduate students).",
			"Prepared manuscripts for journal and conference proceedings.",
			"Developed algorithms for data analysis and collection in MATLAB and VB.Net."]
		},
		{
		"title":"Graduate Research/Teaching Assistant",
		"employer":"University of Missouri",
		"startyears":"August 2004",
		"endyears":"August 2006",
		"Dates":"August 2004 - August 2006",
		"location" :"Rolla, MO",
		"Description":"MS student researcher in the department of Mechanical Engineering.",
		"Responsibilites":["Developed neural network based algorithms for control of complex dynamic systems, non-linear dynamics, partial differential equations",
				"Applied grossberg neural network to compute obstacle free path for unmanned air vehicles.",
				"Developed and tested online clustering and routing algorithm based on grossberg neural networks for communication control between numerous unmanned air vehicles",
				"Prepared manuscripts for journal and conference proceedings.",
				"Taught <i>LABView and PLC control </i> (48 undergraduate students)."]
		},
		{
		"employer":"Tata Motors",
		"startyears":"July 2003",
		"endyears":"June 2004",
		"Dates":"July 2003 - June 2004",
		"location" :"Pune, India",
		"Description":"Graduate Engineer.",
		"Responsibilites":["aa",
			"bb"],
		"title":"Graduate Engineer."
		}
	]
};

// EDUCATION
var education = {
	"schools": [{
		"name": "The Ohio State University",
		"years": "2006-2010",
		"location": "Columbus, OH",
		"State": "Ohio",
		"Courses": ["Mathematical introduction to robotics",
			"Robot control and manipulation",
			"Solid Mechanics",
			"Geometric design of Mechanisms"
		],
		"Majors": "Mechanical Engineering",
		"degree" :"PhD"
	}, {
		"name": "University of Missouri",
		"years": "2004-2006",
		"location": "Rolla, MO",
		"State": "Missouri",
		"Courses": ["Linear control systems",
			"Nonlinear control system",
			"Neural network design",
			"Optimal control and estimation"
		],
		"Majors": "Mechanical Engineering",
		"degree":"Masters"
	}, {
		"name": "Indian Institute of Technology",
		"years": "1999-2003",
		"location": "Chennai, India",
		"State": "India",
		"Courses": ["Linear control systems",
			"Nonlinear control system",
			"Neural network design",
			"Optimal control and estimation"
		],
		"Majors": "Mechanical Engineering",
		"degree":"Bachelors"
	}],

	"Online": [{
		"title": "Data Analyst Nano-Degree",
		"school": "Udacity",
		"url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002",
		"dates":"May 2016 (expected)",
		"Courses": ["Introduction to Machine learning", "Data Analysis with R",
			"Statics", "Data Wrangling with MongoDB",
			"Data Visualization and D3.js", "Introduction to HTML and CSS",
			"JavaScript Basics", "A/B testing"]
	}, {
		
		"title": "Data Science Specialization",
		"school": "Coursera",
		"dates":"August 2015",
		"url":"https://www.coursera.org/specializations/jhu-data-science",
		"Courses": ["Machine learning", "R Programming", "Getting and Cleaning Data",
			"Developing data products", "Exploratory Data Analysis", "Reproducible Research",
			"Practical Machine Learning", "Regression Models"
		]

	}]
};


var projects = {
	"projects":[
	{
		"title":"22",
		"dates": "2016",
		"description":"222222",
		"images":["images/me.jpg",
		"images/me.jpg"]
	},{
		"title":"22",
		"dates": "2016",
		"description":"222222",
		"images":["images/me.jpg",
		"images/me.jpg"]
	} 
	]
}

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDsc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDsc);
		if (projects.projects[project].images.length>0) {
			//console.log(projects.projects[project].images.length)
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image])
				$(".project-entry:last").append(formattedImage);
			}
		}
		

	}
}
projects.display()

education.displayschool = function() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedTitle);
		var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].years);
		$(".education-entry:last").append(formattedDate);
		var formattedDsc = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDsc);
		var formattedMjr = HTMLschoolMajor.replace("%data%",education.schools[school].Majors);
		$(".education-entry:last").append(formattedMjr);
		var formattedLoc = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLoc);
		$(".education-entry:last").append('<div align="left" class = "list-entry"><b>Courses</b></div>');
        $(".education-entry:last").append(HTMLlistStart);
	    var school_courses = education.schools[school].Courses
	    for (course in school_courses){
			var formattedCourse = HTMLlistItem.replace("%data%", school_courses[course]);
			$(".education-entry:last").append(formattedCourse);
			}
		$(".education-entry:last").append(HTMLlistEnd);
		
		

	}
}
education.displayschool()
var formattedDesc ="AAAAA"

$("#education").append(HTMLonlineClasses);
education.displayonline = function() {
	for (Online in education.Online){
		$("#education").append(HTMLschoolStart);




		mooc = education.Online[Online];
		var formattedUrl = HTMLonlineURL.replace("%data%", mooc["url"]);
        var formattedTitle = HTMLonlineTitle.replace("%data%", mooc["title"]);
        var formattedSchool = HTMLonlineSchool.replace("%data%", mooc["school"]);
        var formattedDates = HTMLonlineDates.replace("%data%", mooc["dates"]);
        $(".education-entry:last").append(formattedUrl+formattedTitle + formattedSchool + formattedDates);
        $(".education-entry:last").append('<div align="left" class="list-entry"><b>Courses</b></div>');
        $(".education-entry:last").append(HTMLlistStart);
	    for (course in mooc.Courses){
	    		console.log(education.Online.Courses)
			var formattedCourse = HTMLlistItem.replace("%data%", mooc["Courses"][course]);
			$(".education-entry:last").append(formattedCourse);
			}
		$(".education-entry:last").append(HTMLlistEnd);
			
		}
}
education.displayonline()

function displaywork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer+formattedTitle;
	//console.log(formattedEmployerTitle);
	var formattedloc = HTMLworkLocation.replace("%data%",work.jobs[job].location);

	var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].Description);
	var formattedDays = HTMLworkDates.replace("%data%",work.jobs[job].Dates);
	
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDays);
	$(".work-entry:last").append(formattedloc);
	$(".work-entry:last").append(formattedDesc);

	Resp = work.jobs[job];
	$(".work-entry:last").append('<div align="left"  class="list-entry"><b>Contributions</b></div>');
    $(".work-entry:last").append(HTMLlistStart);
	for (rr in Resp.Responsibilites){
		console.log(education.Online.Courses)
		var formattedCourse = HTMLlistItem.replace("%data%", Resp.Responsibilites[rr]);
		$(".work-entry:last").append(formattedCourse);
	}
	$(".work-entry:last").append(HTMLlistEnd);
			
	
	}
}

function inName(name) {
    var finalName = name;
    var str_split = name.trim().split(' ');
    var lastName = str_split[1].toUpperCase();
    var firstName = str_split[0].slice(0,1).toUpperCase().concat(str_split[0].slice(1).toLowerCase());
    var Names = [firstName,lastName];
    finalName = Names.join(' ');
    return finalName;
};








// add header


var formattedName = HTMLheaderName.replace("%data%","Vivek Yadav");
var roleName = HTMLheaderRole.replace("%data%","Data Scientist");
var img_src = bio.bioPic;
var formatImg = HTMLbioPic.replace("%data%",img_src);

$("#header").prepend(roleName);
$("#header").prepend(formattedName);


// add Contact




var ContactObj = bio.contacts;
var formattedContact = ""; 
var formattedLine = []; 
for(obj in ContactObj) {
	formattedContact = HTMLcontactGeneric.replace("%contact%", obj);
	formattedContact = formattedContact.replace("%data%", ContactObj[obj]); 
	formattedLine.push(formattedContact);
	$("#topContacts").append(formattedContact);
	$("#footerContacts").append(formattedContact);
	

};

ContactLine = formattedLine.join(" ");




// add Image

$("#header").append(formatImg);

// add Descriotion
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);


//$("#header").prepend(ContactLine);

//description

// skills
var len_skills = bio.skills.length
$("#header").append(HTMLskillsStart);

for (var i=0;i<len_skills;i++) {
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
	$("#skills").append(formattedSkill);
}


// add Work
displaywork();

function locationizer(work_obj) {
    var location = [];
    for (i_work in work_obj.jobs) {
        var loc_i = work_obj.jobs[i_work].location;
        //console.log(location)
        location.push(loc_i);
        
  
     }
    //console.log(location)
    return location;
}

locationizer(work);
//name = "Vivek Yadav"
// adding internationalize button
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


//$("#main").append(bio.Role);
//$("#main").append(bio.contact.email);
//$("#main").append(bio.welcomeMsg);
//$("#main").append(bio.bioPic);
//$("#main").append(bio.skills);
//$("#main").append(work["position"]);