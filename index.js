//Modal for About Me on Index page
var modal = document.getElementById("aboutMeModal");
var aboutmelink = document.getElementById("headerCardOne");
var spanOne = document.getElementsByClassName("close")[0];

aboutmelink.onclick = function() {
	modal.style.display = "block";
}

spanOne.onclick = function() {
	modal.style.display = "none";
}

// Function for closing either the About Me modal OR Coding Portfolio Modal
window.onclick = function() {
	if (event.target == modal || event.target == modalCodingPortfolio) {
		modal.style.display = "none";
		modalCodingPortfolio.style.display = "none";
	}
}

//Modal for Coding Portfolio on Index page
var modalCodingPortfolio = document.getElementById("codingPortfolioModal");
var codingPortfoliolink = document.getElementById("headerCardThree");
var spanTwo = document.getElementsByClassName("close")[1];

codingPortfoliolink.onclick = function() {
	modalCodingPortfolio.style.display = "block";
}

spanTwo.onclick = function() {
	modalCodingPortfolio.style.display = "none";
}

projectTwoFunc = function() {
	window.open("crud.html")
}