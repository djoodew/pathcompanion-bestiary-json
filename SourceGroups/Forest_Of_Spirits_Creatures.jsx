
export const Forest_Of_SpiritsCreatures = {
  Dosojin: {
    source: "Forest Of Spirits",
    creatureType: "outsider",
    subTypes: [
      "kami",
      "native"
    ],
    alignments: [
      "Neutral Good"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 15,
      dex: 17,
      con: 16,
      int: 12,
      wis: 14,
      cha: 17
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Invisibility",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Slam",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      naturalArmor: 7
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "This ancient, weathered statue of a venerable monk with a shaven head possesses an air of both reverence and patience.",
    description: "Dosojins are kami that take the form of stone icons and watch over roads and trails. They are often found in statue form at the edges of villages, along mountain passes, at the beginnings of tunnels and other major works of roadway construction, or at simple country crossroads. In urban areas, dosojins can sometimes be found on street corners and near bridges. They serve as the guardians of travelers, keeping the malicious and malevolent off the paths they diligently watch over. Wise travelers know to seek a dosojin's blessing before traveling upon its ward, for falling out of favor with the kami of travel is a sure way to become lost or hampered. Pious mortal couples also seek out dosojin for their own reasons, as the kami are often regarded as patrons of fertility, and are known for their habit of choosing mates and standing beside one another for their entire lives. In many regions, the blessing of a dosojin is believed to ensure a long and happy marriage, as well as many healthy children. The average dosojin stands about 4-1/2 feet tall and weighs upward of 400 pounds. Ecology As creatures that symbolize travel and connections, dosojins straddle the line between the lands of the civilized and the wild, often with one foot literally in each. Dosojins spend most of their time guarding their chosen sites in the form of nondescript statues and way markers, meditating motionlessly for seasons at a time. While semi-social dosojins within cities and other settlements are not uncommon, the majority of these kami stand along remote and secluded roads, going to great lengths to ensure that their true identity is not known. It is not uncommon for dosojins to create false duplicates of themselves using their stone shape ability, and these misleading markers inspire a certain amount of faith among those who look out for the kami of roads, as one can rarely tell if a sculpture is a dosojin by looks alone. A dosojin requires no sustenance, but it is not uncommon for travelers to leave offerings for a silent watcher, usually tributes of fruits, nuts, and potables, gifts that the kami gladly shares with hungry travelers, happy to inspire such good faith among passersby and to foster a system of give-and-take between strangers. Dosojins are fond of the creatures that traverse their roads and trails, and maintain the roadways they guard to ensure both the ward's survival and the safe travel of the voyagers that traverse it. Though they have an aff inity for the creatures that constructed their roadways, dosojins still protect their wards with the aggressive righteousness typical of all kami, and scarcely hesitate when faced with an oni or other evildoer seeking to disrupt the balance. Dosojin have little patience for those who litter on their roadways or unnecessarily obstruct the paths, and they take it upon themselves to discipline those they deem worthy of punishment. Rarely violent in an overt sense, dosojins prefer to use their magic in order to trick travelers into becoming lost, letting the wilds they travel through become the primary instruments of their demise. Dosojins prove quite deadly to those who fail to show kami proper respect, as they use their powers of illusion to lead troublesome caravans into impassible ravines and destructive oni onto unsound, derelict bridges. Habitat & Society Dosojins are odd among kami in that they are known to select mates from among their own kind, and it is not uncommon to see two seemingly redundant statues standing next to one another near a trailhead or fork in the road. While they do not reproduce in any typical sense of the word, dosojins are nonetheless sought out by mortal couples hoping to conceive, as many people see the kami as symbols of fertility. However, most scholars agree that dosojins do not collaborate in this way to foster fecundity, but rather act as symbols of camaraderie and companionship for travelers on their roads, encouraging teamwork and cooperation among groups of diverse individuals with a shared goal. While most dosojins are content to watch over particular highways or roads for their entire existences and act as helpful guardians for most passersby, some choose instead to act as appraisers of travelers' skills and bravery. Cunning individuals that indulge in acts of trickery more often than their tamer brethren, these rogue dosojins craft obstacles and trials for travelers they deem worthy of the challenge. The tests are not meant to substantially impede voyagers, and are simply forms of innocent fun that a dosojin uses to gauge the strength and resolve of various wayfarers. Those who surpass a dosojin's challenges (which usually take the form of puzzles or illusions) earn the kami's respect and the assurance of safe travel throughout the rest of its domain, while those who avoid the obstacle or overcome it through brutish and witless means garner only scorn. Careful travelers know to watch out for the statuelike kami when making their way along potentially protected roads, as the guardians expect voyagers to act honorably and respectfully while travelling upon their paths. Some of the most important mandates to keep in mind when interacting with dosojin and walking through their territories are as follows. • Mortals who respect the land and its laws shall know no harm. • Mortals who fail to show proper reverence for tradition shall not pass by a dosojin upon the first attempt. • Mortals who actively harm the natural world shall be cursed to wander it. • Mortals who stray from a dosojin's path to do harm should not expect to find that path ever again.",
    organization: "solitary, mated pair, or cloister (3-10)",
    languages: "Common; speak with plants, telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "know direction",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "misdirection",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "speak with plants",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "dispel magic",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "fog cloud",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 10,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "longstrider",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "pass without trace",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "stone shape",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "locate object",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "mirage arcana",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "nondetection",
        casterLevel: 10,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 10
      },
      Diplomacy: {
        ranks: 13
      },
      Disguise: {
        ranks: 13
      },
      "Handle Animal": {
        ranks: 13
      },
      "Knowledge (nature)": {
        ranks: 13
      },
      Perception: {
        ranks: 0
      },
      "Sense Motive": {
        ranks: 10
      },
      Survival: {
        ranks: 13
      }
    },
    special: {
      "manipulate path": {
        type: "Su",
        text: "As a standard action, a dosojin can alter the structure and stability of its ward, making travel along its road or trail either easier or harder for specific groups of travelers. Helping travelers in this way makes a dosojin's ward sturdier and more straightforward, allowing creatures to reach their destination in half the time they would normally take (though this does not grant a bonus to creatures' movement speeds in combat). If a dosojin instead chooses to hinder travelers, it creates unexpected twists and turns within its ward, turning the path into difficult terrain and so causing travelers to take twice as long as they normally would to reach their destination. These effects last as long as the targets stay within the boundaries of the dosojin's ward."
      },
      "mimic statue": {
        type: "Su",
        text: "As a standard action, a dosojin can assume the appearance of any Medium-sized statue, such as a stone marker, a religious icon, or a sculpture carved into the side of a cliff. A dosojin's body is hard and has the texture of rough stone no matter what appearance it takes. A dosojin gains a +20 racial bonus on Disguise checks when imitating a statue in this manner."
      },
      ward: {
        type: "Ex",
        preText: "roads or trails"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      }
    }
  },

  Fukujin: {
    source: "Forest Of Spirits",
    creatureType: "outsider",
    subTypes: [
      "kami",
      "native"
    ],
    alignments: [
      "Lawful Neutral"
    ],
    size: "Tiny",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 13,
      dex: 16,
      con: 14,
      int: 11,
      wis: 17,
      cha: 14
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Short sword",
        name: "Short sword",
        damage: "1d6"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron or evil"
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This diminutive humanoid looks like a truly ancient but proud old warrior. A tiny tree branch juts from the top of his head.",
    description: "Spiritual guardians of ornamental shrubs and miniature trees, fukujin are highly regarded among Tians as bringers of good fortune and sound wisdom. Fukujins are thought to only come to goodhearted and devoted bonsai gardeners, and since bonsai plants are often only cultivated by astute and aesthetically minded humanoids, the kami are usually of a similar nature, speaking to mortals rarely and always cryptically. Regardless of how much of their coveted knowledge they impart upon favored mortals, however, fukujins always bring with them a sense of hope and good luck, and almost all within close proximity of the kami feel an instant sense of relief. Fukujins resemble humanoids with tree branches protruding from their bodies, most often their heads, and some fukujins possess leafy hair or treelike limbs. A fukujin in its physical form is only as tall as its bonsai ward-usually only a foot or two-and weighs less than 30 pounds. Ecology While many see the art of bonsai gardening as humanoids' attempts at controlling or forming nature, fukujins ref lect the practice's virtues of patience and nurturing. Fukujins maintain that a moment of patience and study can reveal multitudes more than years of trial and error, and the diminutive beings spread this knowledge wherever they go. While kami do not reproduce in any typical sense, fukujins are known to sow seeds of bonsai plants in the wake of their footsteps, further delighting communities that appreciate such flora. Though assignment of kami remains up to the mysterious will of the gods, fukujins do their part in creating numerous hosts for these spirits. The health and strength of the tree branch protruding from a fukujin's head is often said to be a good indicator of the skill of the warded bonsai tree's caretaker. While the aesthetic values of bonsai trees are often completely subjective, the kami spirits are evidence that there is perhaps a series of core doctrines bonsai farmers should adhere to when taking care of their plants-ideals that a gardener can strive toward to ensure he achieves success in his maintenance of the small tree. A poorly trimmed bonsai plant may sicken the spirit for a time, for instance, while expert grafting can result in a strong or knowledgeable kami. In most cases, however, a kami will almost always leave its ward if a bonsai gardener neglects the plant long enough or effectively ruins the effort, for though fukujins are patient, they have little tolerance for the virtues of negligence and wastefulness. While nearly all fukujins are calm, collected, and patient spirits, the beings are by no means all the same, as their physical appearances, predispositions, and demeanors are just as often reflections of the particular bonsai plant that they watch over. Fukujins who reside within the hearts of deciduous trees, for example, tend to be of lighter color as well as more airy and spirited than the hardy and resilient fukujins of coniferous shrubs, who take on a red, earthy hue. Plant type can also hint at particular magical qualities the spirit might have-white-trunked trees tend to attract gaunter, more fatalistic individuals, while plants with brown or ebon bark inspire kami that are more attuned to the energies and mysteries of magic. The tree branch that sticks out of a fukujin's head while the spirit is in its physical form is often of the same variety as the bonsai tree that the kami protects, though exceptions have been known to exist among particularly dual-natured spirits. Habitat & Society Since their wards are by nature the direct result of humanoid intervention, fukujins are naturally social creatures, and most seek to assist their humanoid partners in not only cultivating beautiful plants, but in all spheres of life. Many bonsai gardeners are often content to live in a permanent home, establish a family, and live a life of tranquility, and fukujins happily provide all manner of advice regarding these domestic issues. In other instances, however, fukujins have been known to travel alongside particularly adventurous cultivators, humanoids who keep the shrubbery and kami spirit in safe and comfortable packs or pouches and consult them for wisdom in circumstances both dire and unusual. The miniature kami's insights and good luck prove as useful in the heat of battle as in the hearthstone, and so humanoids from nearly all walks of life seek the favor of these beings. Bonsai trees are delicate plants and their kami ref lect this fragility. What they lack in physical defenses, however, fukujins make up for in grace and keen insight, using their natural acumen to avoid and deter hazards before they're even encountered. Some might mistakenly see this expert passiveness as a manifestation of fukujins' philanthropic ideals and good intentions, but more often than not their flightiness is simply what they deem to be the wisest course of action. In situations where violence is inevitable, fukujins seek the aid of stronger individuals to help protect them, true to the tradition of their wards' reliance on humanoid intervention and maintenance. Rather than view this reliance on humanoids as a weakness, however, most fukujins accept it as part of a long-lasting transaction between the two forces, each providing unique benefits to the other throughout the relationship. To bolster this partnership, fukujins harness healing powers as well as the strength of their insight, ensuring that their caretakers remain healthy and able to protect the kami and their wards. While they almost always possess pertinent and useful advice, fukujins are known for being reserved under most circumstances, sharing what knowledge they have only when it is absolutely necessary, and they never share wisdom superfluously. Fukujins are normally individualistic and solitary like the plants they watch over, and when they interact with one another they usually do so telepathically. What people often perceive as the luck of fukujins is often merely the result of wise advice garnered from the spirits, though when asked if the kami really are bringers of fortune, fukujins are known to remain even more tight-lipped than usual. Occasionally one might encounter a fukujin in the wild, in lands far from the societies and plants where they commonly make their homes. In such cases, these miniature kami often claim shrubs, young plants, and even whimiscal-looking mushrooms as their wards, grooming nearby groves and glades into quiet meditation gardens or into artistic shapes, inviting visitors to rest and reflect.",
    organization: "solitary, garden (2-4)",
    languages: "Common; speak with plants, telepathy 100 ft.",
    note: "* See Ultimate Magic.",
    spellLikeAbilities: [
      {
        name: "speak with plants",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "mending",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "purify food and drink",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "detect snares and pits",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "remove sickness",
        casterLevel: 4,
        timesPerDay: 3
      },
      {
        name: "delay poison",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "goodberry",
        casterLevel: 4,
        timesPerDay: 1
      },
      {
        name: "soften earth and stone",
        casterLevel: 4,
        timesPerDay: 1
      }
    ],
    skills: {
      Appraise: {
        ranks: 7
      },
      Bluff: {
        ranks: 4
      },
      Diplomacy: {
        ranks: 7
      },
      "Knowledge (nature)": {
        ranks: 7
      },
      Perception: {
        ranks: 4
      },
      "Sense Motive": {
        ranks: 4
      }
    },
    special: {
      "precise attacks": {
        type: "Su",
        text: "A fukujin can detect weak points in a foe's defenses as an immediate action by succeeding at a DC 15 Perception check. Once these weak points have been determined, a fukujin gains a +2 bonus on attack rolls to confirm critical hits against that creature for 24 hours. A fukujin can inform a single ally within 30 feet of its findings as a swift action, granting that ally the same bonus. This bonus cannot be granted to more than one creature, even if a fukujin attempts to point out a weakness to another."
      },
      ward: {
        type: "Ex",
        preText: "bonsai trees and small plants"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "aura of luck": {
        type: "Su",
        text: "A fukujin brings good fortune with it wherever it goes. Any allied creature that begins its turn within 15 feet of a fukujin gains a +2 bonus on skill checks.",
        preText: "15 ft."
      }
    }
  },

  Kaminari: {
    source: "Forest Of Spirits",
    creatureType: "outsider",
    subTypes: [
      "air",
      "kami",
      "native"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Huge",
    hd: 23,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 28,
      dex: 21,
      con: 22,
      int: 16,
      wis: 17,
      cha: 25
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: "Chain lightning",
        choiceSource: "Empower Spell-Like Ability"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stand Still",
        type: "Combat"
      },
      {
        name: "Trample",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "cacophonous blow",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to electricity, sonic"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "cold iron"
      },
      SR: {
        value: 28
      },
      naturalArmor: 19
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "temperate skies, hills, and mountains",
    visualDescription: "This enormous humanoid possesses vibrant green skin and equally loud hair, and is surrounded by a ring of huge drums and storm clouds.",
    description: "Kaminaris are robust spirits of enormous size that watch over the balance of weather, taking the form of violent storms wherever they go. More monstrous-looking and boisterous than most kami, kaminaris are often mistaken for oni upon first glance, their unpredictable natures furthering the confusion. Kaminaris care little for most mortals, primarily concerning themselves with the maintenance and protection of their wards- enormous storm clouds that represent the awesome power of thunder and lightning. In addition to their duties guarding their storm wards and the balance of weather, kaminaris are endlessly fascinated with musical instruments, particularly drums. Kaminaris have vibrant skin and equally colorful features; the specific hues vary from kaminari to kaminari. A kaminari stands roughly 25 feet tall and weighs about 10 tons. Ecology Though a kaminari commands the awe-inspiring powers of lightning and thunder as though they were simply extensions of itself, the kami of storms have limited power over their wards. As dictated by the obscure and convoluted Laws of Golden Perfection, a kaminari has only limited ability to will its ward to travel in any particular direction or halt its movement for a modest amount of time per day. Thus it is often merely a passenger upon the clouds of a storm. Though most storms collect and dissipate with some frequency, a kami-inhabited storm is more permanent than most weather patterns, and as long as both the kami and its ward are neither destroyed nor corrupted, the storm could exist for a potentially infinite amount of time. Kaminaris despise the use of magic to alter weather patterns, and attempts to disrupt their storm clouds often result in the enormous kami's unabashed and wrathful ire. A kaminari is as volatile as the storm it protects, and the powerful spirit is quick to exterminate any creature-mortal or otherwise-it deems a threat to the natural balance of weather. Whether an evil sorcerer is trying to bring devastation to a seaside town by calling forth powerful hurricanes or a benevolent wizard is summoning rain to save a desert city in the midst of a natural drought, if such manipulation comes to the attention of the watchful and wandering kaminaris, they find little forgiveness. This is not to suggest that the kami of storms are evil-their threshold for nuisances is simply lower than most kami, and their punishments more destructive. Habitat & Society Floating thousands of feet above most civilizations, kaminaris are usually isolated from other creatures, and this suits the reclusive kami just fine. A kaminari does not interfere with the matters of mortals beyond the natural destruction caused by its storm clouds, and only aides such diminutive creatures when the task would be required of it because of some stricture of the Laws of Golden Perfection. Once a kaminari has fulfilled its required duty, it is only too happy to continue on its way, where it can remain uninterrupted as it creates its music and fills the air around it with thunder and lightning. A kaminari is as devoted to its ward as it is to the practice of music, and the intensity of the storm it sits upon usually corresponds to the amount of aggression with which it plays its instrument. While it rarely cares to interact with mortals, tending first and foremost to its ward, a kaminari may entertain the idea of interacting with a fellow virtuoso. Kaminaris thus have a great affection for bards who practice an instrument, and will occasionally interrupt their diligent guardianship of their storm if doing so allows them the opportunity to play with a skillful accompanist. Amateurs need not apply, as the immortal kaminaris are often among the best players of their instruments, commanding powers of music so stirring that even the most talented bard might have trouble keeping up. A kaminari goes to great lengths to surround itself with booming noise, and is rarely seen without its instrument of choice. While most kaminaris prefer to use drums and other percussion instruments to fill the air around them with sound, rare individuals also adhere to the use of keyboard, string, and wind instruments. The powers of these kaminaris do not greatly differ, but their choice of instrument is usually a fair indicator of their temperament as well as the kind of storm they travel upon-those who play keyboards are usually found amid desert-quenching storms that wander arid environments, bringing with them the power of tornadoes and dust storms; players of string instruments tend toward oceanic environs, residing within the hearts of devastating hurricanes of incredible magnitude far out at sea; and kaminaris who use wind instruments occupy blizzards, commanding the powers of the ice and snow that constantly whip about them.",
    organization: "solitary, duet, or symphony (3-5)",
    languages: "Auran, Common; telepathy 100 ft.",
    note: "* See the Advanced Player's Guide.",
    spellLikeAbilities: [
      {
        name: "invisibility",
        casterLevel: 20,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "shatter",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "sound burst",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "control weather",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "deafening song bolt",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "discordant blast",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "dispel magic, greater",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "cacophonous call, mass",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "chain lightning",
        casterLevel: 20,
        limitations: "Metamagic: Empower ",
        timesPerDay: 1
      },
      {
        name: "shout, greater",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "storm of vengeance",
        casterLevel: 20,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 23
      },
      Diplomacy: {
        ranks: 26
      },
      Fly: {
        ranks: 18
      },
      Intimidate: {
        ranks: 26
      },
      "Knowledge (nature)": {
        ranks: 26
      },
      "Knowledge (planes)": {
        ranks: 23
      },
      Perception: {
        ranks: 23
      },
      Perform0: {
        subSkill: "percussion",
        ranks: 23
      },
      "Sense Motive": {
        ranks: 23
      }
    },
    special: {
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+13 plus cacophonous blow",
        saveDC: 10
      },
      "storm ward": {
        type: "Su",
        text: "A kaminari treats a specific mass of transient storm clouds as its ward. This storm is about 1 mile in diameter, and a kaminari can observe the world from any point within its storm ward, whether merged with it or in its physical form. A kaminari can only control the movement of its ward to a minimal extent, willing it to remain in one place or move in a cardinal direction for up to 2d4 hours every day. After this time, the ward continues on its natural course for 24 hours, after which the kaminari may will it to remain stationary again. When a kaminari is in its physical form and within its ward or within 120 feet of its ward's boundaries, it gains the power to call down bolts of lightning. The kaminari can call up to a total of 15 bolts of lightning each day, each of which deals 5d10 points of electricity damage. This ability is otherwise identical to call lightning storm. Vulnerable to Silence (Su) A kaminari constantly surrounds itself with sound and music, and can't stand any form of silence. Whenever a kaminari is affected by a silence spell or effect or is rendered deaf by any means, it loses its cacophonous blow ability and its fast healing for the duration of the effect. But because a kaminari possesses incredible resilience to such effects, any silence or deafening effect lasts only 2d4 rounds or as long as the effect's duration states, whichever is shorter."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "cacophonous blow": {
        type: "Su",
        text: "Whenever a kaminari deals damage with a slam or trample attack, it also deals 11d6 points of sonic damage. In addition, a creature struck with this ability is rendered permanently deaf. A creature that makes a successful DC 27 Reflex save takes half damage and avoids the deafening effect. The save DC is Constitution-based."
      }
    }
  },

  Suijin: {
    source: "Forest Of Spirits",
    creatureType: "outsider",
    subTypes: [
      "kami",
      "native",
      "water"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 18,
    hdVal: 10,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 60,
      swim: 60
    },
    abilities: {
      str: 24,
      dex: 15,
      con: 23,
      int: 18,
      wis: 22,
      cha: 19
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Lightning Reflexes",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Quicken Spell-Like Ability",
        type: "Monster",
        value: "Telekinesis",
        choiceSource: "Quicken Spell-Like Ability"
      },
      {
        name: "Stand Still",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "grab",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to polymorph effects"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron and evil"
      },
      SR: {
        value: 25
      },
      naturalArmor: 18
    },
    space: "10 ft.",
    reach: "10 ft. (15 ft. with bite)",
    environment: "any water",
    visualDescription: "This massive, serpentine carp explodes forth from the water, its rainbow-colored scales gleaming in the sunlight and glossy eyes bright with good-natured intelligence.",
    description: "Suijins are the kami of lakes, ponds, springs, and wells. When they are not merged with their wards, these spirits of nature resemble giant carp or sea serpents, usually beautiful specimens with rainbow scales. While they are as benevolent and well meaning as all other kami, suijins are often mistaken for beasts of the waters they inhabit, and are thus feared by superstitious or simple-minded creatures. Those who encounter suijins know better than to believe such unfounded fears, however, as the kami often only emerge from their wards in order to protect innocent creatures in trouble near its waters. Considered reclusive even by other kami, a suijin usually tries to protect creatures within its wards by covert means if at all possible, slowing the flow of its waters' currents or pushing struggling creatures to shore via magic. Suijins are infinitely patient, and though most enjoy helping creatures, those in more remote regions are just as content to simply exist among their waters, protecting their wards from those who would seek to defile them. The general attitude among most suijins is often one of simple acceptance of things as they are, based on the belief that all things are fluid and subject to change; even the largest lakes are bound to recede or expand, and even the most eternal kami are not entirely permanent, a point proven by the vicious oni. In its true form, a typical suijin is 15 feet long and weighs about 1,200 pounds, though numerous rumors suggest that lesser and greater suijins do exist in some parts of the world, typically residing in bodies of water that are proportionate to the kami's size and power. Ecology A suijin's particular ward is usually a good indicator of its temperament. A suijin residing in a secluded and placid mountain lake is often more calm and forgiving of trespasses than one dwelling in the heart of a turbulent river, and though all suijins typically mean well, those with more tumultuous wards are generally less tolerant of intruders within their domains. For instance, a suijin protecting a natural whirlpool within a larger body of water may not help a passing boat of traders that happens to start sinking into its depths, viewing the ship as a disturbance to the forces of nature. Those suijins who are used to seeing their waterways casually abused by the forces of civilization-as almost all cities in some way impose upon or corrupt the rivers and streams that flow near them, and even farming communities may pollute with manure and runoff- can be much more hard-hearted. Suijins in isolated areas care far less about the mortal world than those who interact with it on a daily basis, so the attitude of a suijin dwelling within a mountain stream is often far different than that of one residing in a regularly visited pond. Travelers can earn the approval of a suijin by placing minerals or gemstones within its ward, and those who pollute the waters or use it for evil (such as by executing innocents via drowning) are quick to encounter a normally calm suijin's fearsome wrath. Unusual floods and droughts are both signs of a suijin's displeasure with a nearby development's effects on the surrounding waters, and wary villagers are careful to appease a suijin and change their destructive ways, lest they feel the full brunt of the powerful water kami's righteous wrath. Those suijins who continually fail to protect their waters from troublesome residents or visitors are often quick to fall out of favor with their kindred, and the wards of these kami often become treacherous during the time in which a corrupted suijin makes its gradual transition toward becoming an oni. Habitat & Society A suijin can occupy virtually any body of water, whether it be a stream up to several dozen miles long or a lake no more than a single mile in diameter. A particularly social suijin might choose to occupy the aqueduct of an urban development if the inhabitants are especially conscious of their impact on the surrounding environs, and such settlements recognize and appreciate the blessing of the benevolent resident, as a suijin cleans and purifies the waters it inhabits. Suijins are solitary kami, and rarely go out of their way to band with others of their kind, preferring instead to protect isolated bodies of water. This form of aloofness isn't out of fear of or apathy for other kami; instead, suijins merely adhere to a loosely established territorial pact, knowing that their powers are more valuable when spread throughout regions, rather than concentrated on particular bodies of water. When suijins do interact with one another, they do so at points where two bodies of water meet, such as estuaries and deltas. If two connecting bodies of water are especially healthy and the suijins residing in them are entirely undisturbed by forces of corruption, it is said that the water kami celebrate nature in a sort of bonding ritual. The rare event can be seen as motes of blue and green light whirling in the shallows of the adjoining water, and scholars speculate that this event may symbolize the creation of a new suijin.",
    organization: "solitary",
    languages: "Aquan, Common; speak with animals, telepathy 100 ft.",
    note: "* See the Advanced Player's Guide.",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "speak with animals",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "control water",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "create water",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "modify memory",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "slipstream",
        casterLevel: 18,
        timesPerDay: -1
      },
      {
        name: "aqueous orb",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "telekinesis",
        casterLevel: 18,
        limitations: "Metamagic: Quicken ",
        timesPerDay: 3
      },
      {
        name: "break enchantment",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 18
      },
      Diplomacy: {
        ranks: 18
      },
      Fly: {
        ranks: 13
      },
      "Handle Animal": {
        ranks: 21
      },
      Intimidate: {
        ranks: 18
      },
      "Knowledge (nature)": {
        ranks: 21
      },
      Perception: {
        ranks: 18
      },
      "Sense Motive": {
        ranks: 18
      },
      Survival: {
        ranks: 21
      },
      Swim: {
        ranks: 13
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "80-ft. line",
        damage: "usable every 1d4 rounds",
        text: "When a suijin uses its breath weapon, it unleashes a pressurized blast of water that knocks over and soaks everything in its line of effect. Any creature that is struck by the blast and fails its saving throw is pushed back 10 feet as though bull rushed. For every 5 by which a creature fails its saving throw, it is pushed back an additional 5 feet. This effect also extinguishes any normal fires within the line of effect, as well as magical fires, which are dispelled as though by greater dispel magic. A suijin can choose to have its breath weapon deal nonlethal damage instead of lethal damage before using this ability."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+3"
      },
      "whitewater barrier": {
        type: "Su",
        text: "Three times per day as a standard action, a suijin can create a wall of turbulent water. A suijin can make this barrier however long it wishes, up to a maximum length of 180 feet, and the wall is 20 feet tall. A whitewater barrier acts as a sheet of stormy water, and any Large or smaller creature that attempts to pass through the barrier must succeed at a DC 26 Swim check or be rushed to the top of the wave and pushed back to the side it started on, taking fall damage as appropriate. It is possible to create cylindrical or square whitewater barriers to enclose specific points. This effect acts like wind wall in regard to how ranged missiles, breath weapons, gases, and creatures in gaseous form interact with it. The Swim DC is Constitution-based."
      },
      ward: {
        type: "Ex",
        preText: "small body of water"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Ja Noi": {
    source: "Forest Of Spirits",
    creatureType: "outsider",
    subTypes: [
      "goblinoid",
      "native",
      "oni",
      "shapechanger"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 19,
      dex: 15,
      con: 18,
      int: 12,
      wis: 13,
      cha: 14
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Outflank",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Tetsubo",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Tetsubo",
        damage: "1d10"
      },
      {
        weapon: "Longbow",
        name: "Longbow",
        damage: "1d8"
      }
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm hills",
    visualDescription: "This hunchbacked, fiery-skinned humanoid possesses black eyes beneath the bony ridges of its brow, wears elaborate heavy armor, and wields an ornate metal club.",
    description: "A ja noi is an oni spirit that takes the form of a hobgoblin, and differs physically from the hobgoblins in a variety of ways, most notably its unearthly strength and distorted appearance. A ja noi's skin blazes a fiery red rather than a drab gray, and the oni bears prominent ridges on its brow and forehead. Ja noi live to fight. While not as physically powerful as most oni, ja noi nonetheless have an insatiable thirst for combat that drives them to pursue the trials of battle and bloodshed. The sensation of hot blood splattering on a ja noi's skin provokes an adrenaline rush that only fuels its lust for the kill. Its broad, tightly muscled physique and prowess in combat inspire awe within typical hobgoblins, who see the ja noi as a leader who ensures victory in their conquests. Towering over the hobgoblins it resembles, a ja noi stands a little over 6 feet tall and weighs about 220 pounds. Ecology All oni believe the Material Plane's inhabitants fail to take advantage of the wealth of sensations they have at their disposal. While most of these evil spirits inhabit shells and rise to power by working behind the scenes- manipulating others into doing most of their foul deeds for them-ja noi take a more direct approach, conquering and slaughtering any who would stand against them and their armies. Ja noi embrace the carnal joys of slaughter, and no situation is more pleasant to a ja noi than the heat of combat upon a war-ravaged battlef ield. These hardened oni often recognize the inevitable outcome of their warlike tendencies, knowing that death could always be just around the corner; this knowledge, however, only further stimulates their greed for sensation, inspiring them to embrace every fight, as they know it could be their last. A ja noi silences its mind and ignores everything else while on the battlef ield, reveling in the current moment and the sensations of combat: the crunch of bones beneath a worn club, the spray of dying foes' blood, and the scattered guts and heads of fallen brawlers. Like other oni, ja noi possess the ability to change shape, and often use this ability to confuse enemies in the midst of battle, altering their appearances to look like allies, only to bash in an unsuspecting foe's head before the victim knows what's happened. This brutish trickery is usually the extent of a ja noi's guile, however, as the hobgoblin oni are hardly known for their cunning. Even in regard to tactics, ja noi usually implement only the basest plans of action, simply relying on their weaker minions to take the brunt of an opposing army's blow while they target the commanders, always seeking the most worthy challenger and forever striving for that feeling that comes just as one is fighting for one's life. The most powerful ja noi are exceptions to this rule, however, and tales tell of expert ja noi leaders who excel in both physical prowess and tactical wit. These commanders quickly reach the status of generals, and work alongside other oni to manipulate vast armies of soldiers, both humanoid and goblinoid. Once they take physical form, ja noi rarely last more than a couple years on the Material Plane, their deadly lifestyle often a limiting factor in this regard. They either die in battle or at the hands of mutinous troops or allies, minions who realize that they are merely pawns in the game of war that the ja noi is constantly playing. Thus, most of these oni practice their battle skills constantly against one another, their strongest hobgoblin followers, and their adroit adversaries, always fighting and becoming more powerful. While they care little for the arcane, ja noi hone some magical abilities in order to inflict maximum damage on the battlefield, and a few even seek out magical items to bolster their strength. Habitat & Society Whereas many oni prefer to act alone and in secret, ja noi recognize the concept of strength in numbers, and understand that banding together is often a surer way to glorious victories than lone pursuits. The rare lone ja noi may seek out renowned heroes and martial senseis to challenge in one-on-one combat, but most of these creatures know the best way to demonstrate their prowess is in the midst of the chaotic battlefield in front of other oni, especially fellow ja noi. Often, when ja noi work together to bring carnage to the field of war, they keep track of each other's kills, ranking one another in terms of strength and skill. An individual who shows cowardice repeatedly or does not prove a useful ally swiftly meets the blade of a supposed comrade, as ja noi have little patience for weak accomplices. Ja noi are seen as lowly and primal by other oni, but they possess immense amounts of authority among the lesser hobgoblins around them, and so they surround themselves with these minions, viewing them as useful fodder for the battles to come. During the fight, a ja noi's amateur hobgoblin warriors combat the masses of the opposing army, allowing the prideful oni to engage the commanders. Having found what they consider an ideal militaristic race, ja noi prefer to use hobgoblins for their war campaigns if possible, though they settle for other soldiers if doing so clearly benefits the oni and they have the mortals' unquestioning loyalty. More often, a ja noi will employ non-hobgoblin minions to serve as slaves or some other form of chattel, putting them to work crafting armor and weapons or cleaning up during the aftermath of a successful battle. In rare cases, more powerful oni ask ja noi to lead armies against particularly stubborn groups of opponents. Ja noi rarely refuse such requests, knowing that much blood will be shed in the ventures-and that denying the requests of stronger oni is a sure path to a quick death. Like all oni, ja noi despise and seek out kami, reveling in the destruction of minor spirits and hunting the more powerful individuals for the sheer challenge of it. Because of the strictures of the Laws of Golden Perfection, ja noi cannot directly slay kami, and so they work to direct their vicious hobgoblin armies to complete the task instead. In extremely rare cases, when they have no campaigns to wage and no humanoid enemies to battle, ja noi simply disappear into the wilderness to fight the mightiest creatures they can find. Laying waste to big game such as bulettes and owlbears can distract a ja noi between large-scale battles, but it doesn't take long before the natural warrior quickly feels the lust for battle surge within it once again. Given too much time between skirmishes, a ja noi might turn its violent attention toward its followers, slaughtering entire hobgoblin tribes out of frustration and madness. Canny hobgoblins in service to a bloodthirsty ja noi are wise to find opposing groups for the oni to battle, that the resulting conf lict might temporarily sate the ja noi's incessant desire for war.",
    organization: "solitary, patrol (2-4), warband (5-7 plus 8-15 hobgoblins), or company (8-12 plus 20-50 hobgoblins, 1-2 lieutenants of 4th-5th level, and 1 general of 7th- 10th level)",
    languages: "Common, Goblin",
    note: "* See the Advanced Player's Guide.<br>** See Ultimate Combat.",
    spellLikeAbilities: [
      {
        name: "command",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "doom",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "fly",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "magic weapon",
        casterLevel: 6,
        timesPerDay: 3
      },
      {
        name: "bull's strength",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 6
      },
      Disguise: {
        ranks: 9
      },
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self",
        type: ", alter self"
      },
      "serene fighter": {
        type: "Su",
        text: "A ja noi is extremely disciplined and maintains its focus even in the midst of combat. Once per day as an immediate action, a ja noi may reroll a Will save."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid or fire",
        value: 3
      }
    }
  },

};