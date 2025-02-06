const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const mySquadUrl = baseURL + endpointSquad;

getData(mySquadUrl).then( dataVanIedereen => {
    // console.log(dataVanIedereen);

    let persons = dataVanIedereen.data;
    // console.log(allPersons);

    // 2de sectie aanspreken
    let everybodySection = document.querySelector("section:nth-of-type(2)");


    // for each zorgt ervoor dat het bij elke persoon een eigen vakje heeft en wordt aangepast.
    persons.forEach( aPerson => {
        // console.log(aPerson.name)

    // Haatl de info uit de JSON
    let personName = aPerson.name;
    let personAvatar = aPerson.avatar;
    let personWebsite = aPerson.website;

    // start voor random image, random nummer generator
    let getalTussen1En5 = Math.random() * 5;
    let afgerondGetal = Math.floor(getalTussen1En5) + 1;
    // console.log(afgerondGetal);


    // als persoon geen afbeelding heeft pak een afbeelding uit het images mapje
    if(personAvatar){
        //do nothing
    } else{
        personAvatar = `images/placeholder${afgerondGetal}.svg`;
    }

    if(personWebsite){
        //do nothing
    } else{
        personWebsite = "https://youtu.be/dQw4w9WgXcQ"
    };



    // Pakt de HTML en voegt daar de let in.
    let personHTML = `<article>
      <h3> ${personName} </h3>
      <img src="${personAvatar}" alt="${personName}">
      <a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
    </article>`;


        // voegt de HTML toe aan het einde van de sectie.
        everybodySection.insertAdjacentHTML("beforeend", personHTML);
        
    } )
} )















/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }