//by NacreousDawn596

//you can add more nouns, verbs, adjectives, adverbs or even preposition! 
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
		var rand2 = Math.floor(Math.random() * nouns.length);
		var rand3 = Math.floor(Math.random() * adverbs.length);
		var rand4 = Math.floor(Math.random() * verbs.length);
		var rand5 = Math.floor(Math.random() * nouns.length);
		var rand6 = Math.floor(Math.random() * nouns.length);
		var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
    console.log('"' + content + '"')
}
generate()
