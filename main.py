#by NacreousDawn596

#you can add more nouns, verbs, adjectives, adverbs or even preposition! 
#enjoy!

#https://github.com/NacreousDawn596/

import random

nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog", "cat", "fish", "robot"]
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed", "wrote", "ate", "saw", "said"]
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", "cold", "jubly"]
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"]
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"]

def get(name):
	return random.randint(0, len(name) - 1)
	
def generate():
	content = f"The {adjectives[get(adjectives)]} {nouns[get(nouns)]} {adverbs[get(adverbs)]} {verbs[get(verbs)]} because some {nouns[get(nouns)]} {adverbs[get(adverbs)]} {verbs[get(verbs)]} {preposition[get(preposition)]} a {adjectives[get(adjectives)]} {nouns[get(nouns)]} which, became a {adjectives[get(adjectives)]}, {adjectives[get(adjectives)]} {nouns[get(nouns)]}."
	print(content)
	
generate()
