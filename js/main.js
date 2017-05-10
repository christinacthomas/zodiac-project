// array of objects to store zodiac data
var zodiac = [
	{
		sign: "aquarius",
		breed: "West Highland Terrier",
		why: "You don't like to be bored. Terriers are always ready to play",
		image: "img/aquarius.jpg",
	},
	{
		sign: "aries",
		breed: "German Shepherd",
		why: "You're courageous, determined and confident. German Shepherds are courageous, obedient breed. You two will get along great!",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		breed: "Chihuahua",
		why: "You're imaginative and spontaneous. Chihuahuas are also known for their eccetric behaviors and loveable personalites",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		breed: "Chow Chow",
		why: "You posses and inner state of independance, but once you get to know this proud dog, you’re sure to make room for one more.",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		breed: "Weimaraner",
		why: "A Weimaraner is a breed that can keep up with a busy Gemini",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		breed: "Golden Retriever",
		why: "You're both warm-hearted and cheerful. A perfect match!",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		breed: "Australian Shepherd",
		why: "As a balanced Libra, an Australian Shepherd is perfect. Equal parts playful and serious.",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		breed: "French Bulldog",
		why: "A huge personality packed into a little dog. ",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		breed: "Beagle",
		why: "Beagles are always prepared for the next thing, just like you.",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		breed: "Labrador Retriever",
		why: "Brave, loyal, and good-natured, are traits that both of you share",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		breed: "Siberian Husky",
		why: "You live an active lifestyle. A siberian husky is strong and energetic. They'll be able to keep up with all your adventures!",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		breed: "Siba Inu",
		why: "Considered the most intellegent of the signs, you need a dog that's just as smart!",
		image: "img/virgo.jpg"
	}
]
 
 //fuctions
function match() {

	var userdata = document.getElementById("userdata")
	console.log(userdata)
	console.log("users value is: " + userdata.value)
	
	// loop through zodiac array 
	for(i = 0; i < zodiac.length; i = i + 1) {
		console.log("users value lowercase is: " + userdata.value.toLowerCase())
		console.log("current zodiac sign in loop is: " + zodiac[i].sign)

		// to make non case-sesitive
		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran")
			console.log("users typed in: " + userdata.value)
			console.log("current image value is: " + zodiac[i].image)
			console.log("current breed value is:" + zodiac[i].breed)
			console.log("current why value is: " + zodiac[i].why)

			
			document.getElementById("yourBreed").textContent = "Your match is: " + zodiac[i].breed
			document.getElementById("img").src = zodiac[i].image
			document.getElementById("why").textContent = "You match best because: " + zodiac[i].why
			document.getElementById("error").innerHTML = ""
			return
		}
	}

		var error = document.getElementById("error")
		error.innerHTML = "<h1>Not a sign. Try again!</h1>" 

		// confirm no matches are found if that's the case
			// var error = document.createElement("h1"); 
			// error.textContent = "Not a sign. Try again!";
			// document.getElementsByClassName("container")[0].appendChild(error);


			//location.reload();

			//wipes out image and text
		console.log("no matches were found, user failed to type in a correct zodiac sign")
		document.getElementById("yourBreed").textContent = ""
		document.getElementById("why").textContent = ""
		document.getElementById("img").src = ""
	}
