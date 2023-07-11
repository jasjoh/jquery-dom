
$("#submit").on("click", addMovie);

function addMovie(evt) {
  evt.preventDefault();

  const movieTitle = $("#title");
  const movieRating = $("#rating");

  const newTitleElement = $("<div>").text(`Movie Title is: ${movieTitle.val()}
  and Movie Rating is ${movieRating.val()}.`);

  $("#Movielist").append(newTitleElement);
}