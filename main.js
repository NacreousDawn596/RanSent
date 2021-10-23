//by NacreousDawn596

//you can add more nouns, verbs, adjectives, adverbs or even prepositions! 
//enjoy!

//https://github.com/NacreousDawn596/

var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog", "cat", "fish", "robot"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed", "wrote", "ate", "saw", "said"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", "cold", "jubly"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function generate() {
		var rand1 = Math.floor(Math.random() * adjectives.length);
		var rand2 = Math.floor(Math.random() * adjectives.length);
		var rand3 = Math.floor(Math.random() * adjectives.length);
		var rand4 = Math.floor(Math.random() * adjectives.length);
		var rand5 = Math.floor(Math.random() * nouns.length);
		var rand6 = Math.floor(Math.random() * nouns.length);
		var rand7 = Math.floor(Math.random() * nouns.length);
		var rand8 = Math.floor(Math.random() * nouns.length);
		var rand9 = Math.floor(Math.random() * verbs.length);
		var rand10 = Math.floor(Math.random() * verbs.length);
		var rand11 = Math.floor(Math.random() * adverbs.length);
		var rand12 = Math.floor(Math.random() * adverbs.length);
		var rand13 = Math.floor(Math.random() * preposition.length);
		var content = "The " + adjectives[rand1] + " " + nouns[rand5] + " " + adverbs[rand11] + " " + verbs[rand9] + " because some " + nouns[rand6] + " " + adverbs[rand12] + " " + verbs[rand10] + " " + preposition[rand13] + " a " + adjectives[rand2] + " " + nouns[rand7] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand8] + ".";
    console.log('"' + content + '"')
}
generate()
