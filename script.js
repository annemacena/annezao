$(function(){
	let q = [{ quote: "Your best and wisest refuge from all troubles is in your science.", author: "Ada Lovelace" }, { quote: "Recognize and embrace your uniqueness.", author: "Erin Teague" }, { quote: "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.", author: "Grace Hopper" }, { quote: "There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.", author: "Indira Gandhi" }, { quote: "I think men will always find an excuse for keeping women in their ‘place.’ So, let’s make that place the executive suite and start more of our own companies.", author: "Jean Bartik" }, { quote: "We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.", author: "J.K. Rowling" }, { quote: "You can never leave footprints that last if you are always walking on tiptoe.", author: "Leymah Gbowee" }, { quote: "If one man can destroy everything, why can't one girl change it?", author: "Malala Yousafzai" }, { quote: "A woman with a voice is, by definition, a strong woman.", author: "Melinda Gates" }, { quote: "A bird cannot fly with one wing only. Human space flight cannot develop any further without the active participation of women.", author: "Valentina Tereshkova" }, { quote: "There is no problem in science that can be solved by a man that cannot be solved by a woman.", author: "Vera Rubin" }, { quote: "Sometimes you have to fight for the things that are worth fighting for.", author: "Arrietty Clock" }, { quote: "They say that the best blaze burns brightest when circumstances are at their worst.", author: "Sophie Hatter" }, { quote: "You cannot alter your fate. However, you can rise to meet it.", author: "Princess Mononoke" }],
	n = Math.floor(Math.random() * Math.floor(14)),
		c = q[n]
	console.log('%cthanks for coming🚀🌈🍡🍷🎨🦄🍑🍙🌩️🥀🧚‍🌊🔮', 'font-size: small');
	console.log(('%c💡 ' + c.quote), 'color: #9e9e9e; font-size: x-large');
	console.log(('%c- ' + c.author), 'color: #737272; font-size: small');
})

$(".card-toggle.event").on("click", function(){
	
	// Card toggle state 	
	$(".card-toggle.event").removeClass("active");
	$(this).addClass("active");
	
	var isAnimating = false;
	
	if( !isAnimating ){
		isAnimating = true;
		
		$(".card").find(".card-content").css("z-index",0);
		$(".card").removeClass("active");

		var that = $(this);

		$(this).siblings().css("z-index",1);

		setTimeout(function(){
			var el = that.parent().toggleClass("active").find(".card-content");
			el.off("transitionend.event");
			el.on("transitionend.event", function(){
				isAnimating = false;
			});	;
			
		},10);
	} else {
		return;
	}
});

$(window).on('load', function () {
	$(".cards #spotify .card-content .col.right iframe#song")
		.attr('src', 'https://open.spotify.com/embed?uri=spotify%3Aalbum%3A48m37AdUVMrmpU0uUGZ6Gp');
});