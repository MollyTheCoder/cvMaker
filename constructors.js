


//VARIABLES AND ADDING DOM ELEMENTS

const body = document.getElementById('body');
const $form = $('#form');
const $info = $('#info');
const $skills = $('#skills')



const $jobs = $('#jobs');
const $newJob = $('<h6> *Add New Job</h6>');
$jobs.append($newJob);

const $education = $('#education');
const $newSchool = $('<h6> *Add New School</h6>');
$education.append($newSchool);

const $newLanguage = $('#addnewL');
const $newComputerSkill = $('#addnewCo');
const $newCertificate = $('#addnewCe');


$jobs.on('click', 'h6', function(e) {

	
	
	const $jobTitle = $('<label> Job Title: </label>');
	const $inputJobTitle = $('<input>');
	
	$inputJobTitle.attr({type: "text", name: "jobtitle"});

	const $company = $('<label> Company Name: </label>');
	const $inputCompany = $('<input>');
	$inputCompany.attr({type: "text", name: "companyname"});

	const $periodStart = $('<label> Start Date: </label> ');
	const $startDate = $('<input>');
	$startDate.attr({type: "text", name: "startdate"});

	const $periodEnd = $('<label> End Date: </label> ');
	const $endDate = $('<input>');
	$endDate.attr({type: "text", name: "enddate"});

	const $jobDescription = $('<label> Job Description: </label>');
	const $inputJobDescription = $('<textarea></textarea>');
	$inputJobDescription.attr({name: "jobdescription"});


	$jobs.append($jobTitle);
	$jobs.append($inputJobTitle);
	$jobs.append($company);
	$jobs.append($inputCompany);
	$jobs.append($periodStart);
	$jobs.append($startDate)
	$jobs.append($periodEnd);
	$jobs.append($endDate)
	$jobs.append($jobDescription);
	$jobs.append($inputJobDescription);

	$buttonExperience.insertBefore($jobTitle);
	$buttonExperience.insertBefore($inputJobTitle);
	$buttonExperience.insertBefore($company);
	$buttonExperience.insertBefore($inputCompany);
	$buttonExperience.insertBefore($periodStart);
	$buttonExperience.insertBefore($startDate)
	$buttonExperience.insertBefore($periodEnd);
	$buttonExperience.insertBefore($endDate)
	$buttonExperience.insertBefore($jobDescription);
	$buttonExperience.insertBefore($inputJobDescription);

	$jobs.append($(e.target));
	$buttonExperience.insertBefore($(e.target));


});


$education.on('click', 'h6', function(e) {
	
	

	const $school = $('<select> </select>');
	$school.attr('name', 'typeofschool');

	$school.append('<option value="High School"> High School </option>')
	$school.append('<option value="University"> University </option>')
	$school.append('<option value="Masters Degree"> Masters Degree </option>')
	$school.append('<option value="PHD"> PHD </option>')

	const $schoolName = $('<label> School Name: </label>');
	const $inputSchoolName = $('<input>');
	$inputSchoolName.attr({type: "text", name: "schoolname"});
	

	const $periodStart = $('<label> Start Date: </label> ');
	const $startDate = $('<input>');
	$startDate.attr({type: "text", name: "startdateschool"});

	const $periodEnd = $('<label> End Date: </label>');
	const $endDate = $('<input>');
	$endDate.attr({type: "text", name: "enddateschool"});


	$education.append($school);
	$education.append($schoolName);
	$education.append($inputSchoolName);
	$education.append($periodStart);
	$education.append($startDate)
	$education.append($periodEnd);
	$education.append($endDate)

	$buttonEducation.insertBefore($school);
	$buttonEducation.insertBefore($schoolName);
	$buttonEducation.insertBefore($inputSchoolName);
	$buttonEducation.insertBefore($periodStart);
	$buttonEducation.insertBefore($startDate);
	$buttonEducation.insertBefore($startDate)
	$buttonEducation.insertBefore($periodEnd);
	$buttonEducation.insertBefore($endDate)
	
	
	$education.append($(e.target));
	$buttonEducation.insertBefore($(e.target));


});

$newLanguage.on('click', function(e) {

	const $language = $('<label> Language: </label>');
	const $inputLanguage = $('<input>');
	$inputLanguage.attr({type: "text", name: "languageskills"});

	const $languageLevel = $('<select> </select><br>');
	$languageLevel.attr('name', 'languagelevel');

	$languageLevel.append('<option value="Beginner"> Beginner </option>')
	$languageLevel.append('<option value="Intermediate"> Intermediate </option>')
	$languageLevel.append('<option value="Fluent"> Fluent </option>')

	$newLanguage.before($language);
	$newLanguage.before($inputLanguage);
	$newLanguage.before($languageLevel);

});


$newComputerSkill.on('click', function(e) {

	const $computer = $('<label> Computer: </label>');
	const $inputComputer = $('<input>');
	$inputComputer.attr({type: "text", name: "computerskills"});

	const $computerLevel = $('<select> </select><br>');
	$computerLevel.attr('name', 'computerlevel');

	$computerLevel.append('<option value="Beginner"> Beginner </option>')
	$computerLevel.append('<option value="Intermediate"> Intermediate </option>')
	$computerLevel.append('<option value="Fluent"> Fluent </option>')

	$newComputerSkill.before($computer);
	$newComputerSkill.before($inputComputer);
	$newComputerSkill.before($computerLevel);

});

$newCertificate.on('click', function(e) {

	const $certificate = $('<label> Certificate: </label>');
	const $inputCertificate = $('<input>');
	$inputCertificate.attr({type: "text", name: "certificates"});

	
	$newCertificate.before($certificate);
	$newCertificate.before($inputCertificate);

});
            


//VARIABLES FOR GET ELEMENTS BY NAME (INPUTS)

const nameJobTitle = document.getElementsByName('jobtitle');
const nameCompany = document.getElementsByName('companyname');
const nameStartDate = document.getElementsByName('startdate');
const nameEndDate = document.getElementsByName('enddate');
const nameDescription = document.getElementsByName('jobdescription');

const typeSchool = document.getElementsByName('typeofschool');
const nameSchool = document.getElementsByName('schoolname');
const startDateSchool = document.getElementsByName('startdateschool');
const endDateSchool = document.getElementsByName('enddateschool');

const languageSkills = document.getElementsByName('languageskills');
const languageLevel = document.getElementsByName('languagelevel');

const computerSkills = document.getElementsByName('computerskills');
const computerLevel = document.getElementsByName('computerlevel');

const certificates = document.getElementsByName('certificates');

// FUNCTIONS

const $submit = $('#submit');

 function getData() {

 	//event.preventDefault();
  
	 $skills.hide();
   $submit.hide();
  
  let printingData = document.createElement('div')
  printingData.setAttribute('id', '');

  	
  	printingData.innerHTML += `<h1> Curriculum Vitae </h1>`;
 	printingData.innerHTML  += `<h4> ${document.myForm.name.value} </h4>`;
	printingData.innerHTML  += `<p> Telephone number: ${document.myForm.phonenumber.value}  </p>`;
	printingData.innerHTML  += `<p> Email: ${document.myForm.useremail.value} </p>`;
	printingData.innerHTML  += `<h3> Work Experience </h3>`;

	for(let i = 0; i < nameJobTitle.length; i++) {
		printingData.innerHTML  += `<h4> ${nameJobTitle[i].value}  </h4>`;
		printingData.innerHTML  += `<h4> ${nameCompany[i].value} </h4>`;
		printingData.innerHTML  += `<p> ${nameStartDate[i].value} - ${nameEndDate[i].value} </p>`;
		printingData.innerHTML  += `<p> ${nameDescription[i].value} </p>`;
	}	

	printingData.innerHTML  += `<h3> Education </h3>`;
		
	for(let a = 0; a < typeSchool.length; a++) {

		printingData.innerHTML  += `<h5> ${typeSchool[a].value}: </h5>`;
		printingData.innerHTML  += `<h4> ${nameSchool[a].value} (${startDateSchool[a].value} - ${endDateSchool[a].value}) </h4>`;
	
	}	

	printingData.innerHTML  += `<h3> Skills </h3>`;
	printingData.innerHTML  += `<h4> Language(s) </h4>`;

	for(let b = 0; b < languageSkills.length; b++) {
		printingData.innerHTML  += `<p> ${languageSkills[b].value} </p>`;
		
		if (languageSkills[b].value){
		printingData.innerHTML  += `<p> Level: ${languageLevel[b].value} </p>`;
	}
}

	printingData.innerHTML  += `<h4> Computer Skills </h4>`;

	for(let c = 0; c < computerSkills.length; c++) {
		printingData.innerHTML  += `<p> ${computerSkills[c].value} </p>`;

		if (computerSkills[c].value){
		printingData.innerHTML  += `<p> LeveL: ${computerLevel[c].value} </p>`;
	}
}
		if(myForm.otherskills.value) {
	printingData.innerHTML  += `<h4> Certificates </h4>`;

}

	for(let d = 0; d < certificates.length; d++) {
		printingData.innerHTML  += `<p> ${certificates[d].value} </p>`;

}
		if (document.myForm.otherskills.value){
	printingData.innerHTML  += `<h4> Other skills or hobbies: </h4>`;
}
	printingData.innerHTML  += `<p> ${document.myForm.otherskills.value}  </p>`;
	
	body.appendChild(printingData);

	const button = document.createElement('button');
	body.appendChild(button);
	button.textContent = 'Get PDF';


	button.addEventListener('click', (e) => {
		var doc = new jsPDF();

	   doc.fromHTML(printingData);
	   doc.save('myCV.pdf');


	});
	  
}

//NEXT BUTTONS HIDE CURRENT FIELDSET AND SHOW NEXT FIELDSET

const $buttonExperience = $('<button> Next </button>');
$jobs.append($buttonExperience);


const $buttonEducation = $('<button> Next </button>');
$education.append($buttonEducation);



$jobs.hide();
$education.hide();
$skills.hide();
$submit.hide();


$info.on('click', 'button',  function(e) {

 event.preventDefault();

 if(!document.myForm.name.value || !document.myForm.phonenumber.value || !document.myForm.useremail.value) {

    	window.alert("You have to fill in all the fields before moving along");
    } else if (isNaN(document.myForm.phonenumber.value)  || document.myForm.phonenumber.value.length != 10) {

    	window.alert("Please insert a valid phone number");
    }
    else {

   $info.hide();
    $jobs.toggle();

}
});


$jobs.on('click', 'button',  function(e) {
 
 event.preventDefault();

for(let i = 0; i < nameJobTitle.length; i++) {
 if(!nameJobTitle[i].value || !nameCompany[i].value || !nameEndDate[i].value || !nameStartDate[i].value  || !nameDescription[i].value) {

    	window.alert("You have to fill in all the fields before moving along");
    } else {
  
   $jobs.hide();
   $education.show();
}
 }
});


$education.on('click', 'button',  function(e) {

 event.preventDefault();
  for(let i = 0; i < typeSchool.length; i++) {
 if(!typeSchool[i].value || ! nameSchool[i].value || !startDateSchool[i].value || !endDateSchool[i].value) {

    	window.alert("You have to fill in all the fields before moving along");
    } 
    else {
   $education.hide();
   $skills.show();
   $submit.show();
}
}
});

//PRINT TO PDF



