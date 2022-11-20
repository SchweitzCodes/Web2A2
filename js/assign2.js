


/* url of song api --- https versions hopefully a little later this semester */	
const api = 'http://www.randyconnolly.com/funwebdev/3rd/api/music/songs-nested.php';

const artists = JSON.parse(artistData);
const genres = JSON.parse(genreData);(artistData);
const songs = JSON.parse(songData);(artistData);
 

/* note: you may get a CORS error if you try fetching this locally (i.e., directly from a
   local file). To work correctly, this needs to be tested on a local web server.  
   Some possibilities: if using Visual Code, use Live Server extension; if Brackets,
   use built-in Live Preview.
*/
document.addEventListener("DOMContentLoaded", function() {

// TESTING OF TOGGLE HIDE 
const test = document.querySelector('#hideTest');
test.addEventListener('click',toggleHide);
function toggleHide() {
   const test2 = document.querySelector("#songView");
   test2.classList.toggle('hidden');
}

// POPULATE ARTIST LIST
for (let a of artists){
   for (let artist of a){ // it gives me an array in an array, so the double for is needed
      let option = document.createElement('option');
      option.setAttribute('value', artist.id);
      option.textContent = artist.name;
      let dropdown = document.querySelector('.artist_drop');
      dropdown.appendChild(option);
   }
}

// POPULATE GENRE LIST
for (let g of genres){
   for (let genre of g){ // it gives me an array in an array, so the double for is needed
      let option = document.createElement('option');
      option.setAttribute('value', genre.id);
      option.textContent = genre.name;
      let dropdown = document.querySelector('.genre_drop');
      dropdown.appendChild(option);
   }
}



});

