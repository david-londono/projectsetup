var team = {
    users: [ {
        person: {
            firstName: "Carlos",
            lastName: "Avila"
        },
        jobTitle: "Front End Technical Lead",
        twitter: "cavila"
    }, {
        person: {
            firstName: "Claudia",
            lastName: "Buitrago"
        },
        jobTitle: "Senior FrontEnd Engineer",
        twitter: "cbuitrago"
    }, {
        person: {
            firstName: "Victor",
            lastName: "Perez"
        },
        jobTitle: "Graphic Designer",
        twitter: "vaperezr"
    }, {
        person: {
            firstName: "Andres",
            lastName: "Alvarez"
        },
        jobTitle: "Functional QA Analyst",
        twitter: "aalvarez"
    }, {
        person: {
            firstName: "Alfonso",
            lastName: "Leal"
        },
        jobTitle: "PM",
        twitter: "aleal"
    }
   ]
};

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

var templateScript = Handlebars.templates.data(team);

//we append the data to the body of the document
$('.container').append(templateScript);
