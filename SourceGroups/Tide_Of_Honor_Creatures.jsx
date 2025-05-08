
export const Tide_Of_HonorCreatures = {
  "Chon Chon": {
    source: "Tide Of Honor",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Tiny",
    hd: 2,
    hdVal: 8,
    cr: "1/2",
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 6,
      dex: 15,
      con: 10,
      int: 7,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Lightning Reflexes",
        type: "General"
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
        weapon: "Acid spit",
        name: "Acid spit",
        specialAbility: "Acid spit",
        damage: "1d4"
      }
    ],
    defense: {},
    space: "2-1/2 ft.",
    reach: "0 ft.",
    environment: "temperate or tropical forests or ruins",
    visualDescription: "This flying head has incredibly large ears that constantly flap to keep the creature aloft. It babbles to itself as it flies, as if to remind itself of secrets only it knows.",
    description: "Chon chons appear to be human heads with ears so grotesquely enlarged that they can serve as fleshy wings. Their jealous hatred of all beings with full bodies easily counters their comical appearance, however. Accursed creatures drawn to places of dark magic and arcane disasters, chon chons possess the desires of the most obsessed magic users, but their dementia and twisted forms prevent them from ever obtaining the power they seek. Although these crazed beings loathe all things, they do find a vicious kind of solace among their own kind, not out of any sort of commiseration, but rather by wallowing in the pain of their own kind. Such hateful swarms gather to bear witness to each others' misery, inadvertently increasing the deadly efficacy of the entire group. A single chon chon is no larger than a human head and weighs 10 pounds at most. The creature's ears give it a total wingspan of 3 feet, making it appear much larger and more menacing. Ecology A chon chon's winglike ears endlessly flap, serving as monstrous wings that give it surprising grace in flight. These creatures always seem distracted, carrying on perpetual one-sided conversations and listening to voices only they can hear, then replying aloud with magical recitations or snippets of botched arcane formulae in a gibberish amalgam of Common, Draconic, and meaningless noises. This blathering has no meaning, mundane or arcane, but sounds so similar to the common phrases and syllables of magic that it insidiously intrudes upon the minds of spellcasters working their craft, invading their thoughts like an arcane earworm. An individual chon chon can suppress this babbling to speak semi-intelligibly-as much as such an insanely erratic creature can be called intelligible-but rarely does so for more than a minute before lapsing back into nonsense. Groups of chon chons seem to have no ability to quiet themselves, being little more than a collection of raving lunatics inspiring one another to ever-greater heights of insanity. Although chon chons appear to be disembodied human heads, they are a unique race of creatures and not merely the victims of a magical curse-though some particularly demented spellcasters have discovered methods by which they might take the forms of these creatures to horrific effect (see below). How chon chons increase their numbers few scholars know-and far fewer care to find out. Hateful of all things, including others of their kinds, to say nothing of their lack of generative organs, they seem doomed to extinction. Many assume these terrors spread their terrible condition in a way similar to that of vargouilles, which many mistake them for at first glance. Chon chons, however, lack those outsiders' terrifying kiss. Beyond general appearance, few similarities exist between these two races. Secret of the Kalkus Certain nefarious sorcerers-known in some lands as kalkus-seek to mimic the horrifying shape and strange abilities of chon chons, or aff lict their foes with such a curse. To this end, they've created a terrifying draught with the power to transform the drinker into a being resembling a chon chon, though few can guess for how long.",
    organization: "solitary, pair, flight (3-12)",
    languages: "Common",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 3,
        timesPerDay: -1
      }
    ],
    skills: {
      Fly: {
        ranks: 2
      },
      Perception: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            situational: true,
            note: " (+4 to listen)"
          }
        ]
      }
    },
    special: {
      jabber: {
        type: "Su",
        text: "A chon chon endlessly mutters half-remembered spells and meaningless arcane formulae to itself. This jabbering creates a kind of magical static that interferes with spells being cast nearby. Any creature attempting to cast a spell within 15 feet of a chon chon must make a successful DC 11 concentration check or lose the spell. This is a sonic, mind-affecting effect. The concentration DC is Charisma-based.",
        preText: "15 ft., DC 11"
      },
      "acid spit": {
        type: "Ex",
        text: "A chon chon can spit a disgusting blob of acid at a single foe, making a ranged attack with a range of 30 feet and no range increment. A successful attack deals 1d4 points of acid damage and forces the target to make a DC 11 Fortitude saving throw to avoid becoming nauseated for 1 round. The save DC is Constitution-based. Jabber (Su) A chon chon endlessly mutters half-remembered spells and meaningless arcane formulae to itself. This jabbering creates a kind of magical static that interferes with spells being cast nearby. Any creature attempting to cast a spell within 15 feet of a chon chon must make a successful DC 11 concentration check or lose the spell. This is a sonic, mind-affecting effect. The concentration DC is Charisma-based."
      }
    }
  },

  "Chon Chon Swarm": {
    source: "Tide Of Honor",
    creatureType: "aberration",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Tiny",
    hd: 6,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 10,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 10,
      dex: 15,
      con: 10,
      int: 7,
      wis: 12,
      cha: 13
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Lightning Reflexes",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm"
      },
      {
        weapon: "Acid spit",
        name: "Acid spit",
        specialAbility: "Acid spit",
        damage: "2d4"
      }
    ],
    defense: {},
    space: "10 ft.",
    reach: "0 ft.",
    environment: "temperate or tropical forests or ruins",
    visualDescription: "This flying head has incredibly large ears that constantly flap to keep the creature aloft. It babbles to itself as it flies, as if to remind itself of secrets only it knows.",
    description: "Chon chons appear to be human heads with ears so grotesquely enlarged that they can serve as fleshy wings. Their jealous hatred of all beings with full bodies easily counters their comical appearance, however. Accursed creatures drawn to places of dark magic and arcane disasters, chon chons possess the desires of the most obsessed magic users, but their dementia and twisted forms prevent them from ever obtaining the power they seek. Although these crazed beings loathe all things, they do find a vicious kind of solace among their own kind, not out of any sort of commiseration, but rather by wallowing in the pain of their own kind. Such hateful swarms gather to bear witness to each others' misery, inadvertently increasing the deadly efficacy of the entire group. A single chon chon is no larger than a human head and weighs 10 pounds at most. The creature's ears give it a total wingspan of 3 feet, making it appear much larger and more menacing. Ecology A chon chon's winglike ears endlessly flap, serving as monstrous wings that give it surprising grace in flight. These creatures always seem distracted, carrying on perpetual one-sided conversations and listening to voices only they can hear, then replying aloud with magical recitations or snippets of botched arcane formulae in a gibberish amalgam of Common, Draconic, and meaningless noises. This blathering has no meaning, mundane or arcane, but sounds so similar to the common phrases and syllables of magic that it insidiously intrudes upon the minds of spellcasters working their craft, invading their thoughts like an arcane earworm. An individual chon chon can suppress this babbling to speak semi-intelligibly-as much as such an insanely erratic creature can be called intelligible-but rarely does so for more than a minute before lapsing back into nonsense. Groups of chon chons seem to have no ability to quiet themselves, being little more than a collection of raving lunatics inspiring one another to ever-greater heights of insanity. Although chon chons appear to be disembodied human heads, they are a unique race of creatures and not merely the victims of a magical curse-though some particularly demented spellcasters have discovered methods by which they might take the forms of these creatures to horrific effect (see below). How chon chons increase their numbers few scholars know-and far fewer care to find out. Hateful of all things, including others of their kinds, to say nothing of their lack of generative organs, they seem doomed to extinction. Many assume these terrors spread their terrible condition in a way similar to that of vargouilles, which many mistake them for at first glance. Chon chons, however, lack those outsiders' terrifying kiss. Beyond general appearance, few similarities exist between these two races. Secret of the Kalkus Certain nefarious sorcerers-known in some lands as kalkus-seek to mimic the horrifying shape and strange abilities of chon chons, or aff lict their foes with such a curse. To this end, they've created a terrifying draught with the power to transform the drinker into a being resembling a chon chon, though few can guess for how long.",
    organization: "solitary",
    languages: "Common (cannot speak)",
    spellLikeAbilities: [
      {
        name: "detect magic",
        casterLevel: 7,
        timesPerDay: -1
      }
    ],
    skills: {
      Fly: {
        ranks: 6
      },
      Perception: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            situational: true,
            note: " (+4 to listen)"
          }
        ]
      }
    },
    special: {
      babble: {
        type: "Ex"
      },
      jabber: {
        type: "Su",
        text: "A chon chon swarm mutters even more loudly than a solitary chon chon. Any creature attempting to cast a spell within 30 feet of a chon chon must make a successful DC 11 concentration check or lose the spell. This is a sonic, mind-affecting effect. The concentration DC is Charisma-based.",
        preText: "15 ft., DC 11"
      },
      "acid spit": {
        type: "Ex",
        text: "A chon chon can spit a disgusting blob of acid at a single foe, making a ranged attack with a range of 30 feet and no range increment. A successful attack deals 2d4 points of acid damage and forces the target to make a DC 13 Fortitude saving throw to avoid becoming nauseated for 1 round. The save DC is Constitution-based. Jabber (Su) A chon chon swarm mutters even more loudly than a solitary chon chon. Any creature attempting to cast a spell within 30 feet of a chon chon must make a successful DC 11 concentration check or lose the spell. This is a sonic, mind-affecting effect. The concentration DC is Charisma-based."
      }
    }
  },

  Kijimuna: {
    source: "Tide Of Honor",
    creatureType: "humanoid",
    subTypes: [
      "goblinoid"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Small",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 13,
      dex: 17,
      con: 15,
      int: 12,
      wis: 10,
      cha: 14
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Stealthy",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Spear",
        name: "Spear",
        damage: "1d8"
      },
      {
        weapon: "Net",
        name: "Net",
        damage: ""
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm forests or coasts",
    visualDescription: "At first glance, this creature appears to be a mischievously smiling young child with bright red hair clad only in a grass skirt. A closer look reveals goblinoid ears and a mouth full of pointed teeth.",
    description: "The childlike kijimunas bear physical similarities to their Inner Sea cousins, the goblins, sharing their small size, leathery skin, and large, pointed ears. However, kijimunas' hair stands out as their most prominent features-long, wild manes of blazing red. These tricky creatures nearly always wear devilish grins, causing some who first see them to mistake them for trouble-making urchins. Kijimunas take pleasure in two pastimes: fishing and playing pranks. When a kijimuna grows distracted from its catch, it seeks out targets for its practical jokes. These hijinks often prove relatively harmless, but some escalate to the point of becoming injurious or potentially lethal. Most kijimunas genuinely do not understand how their \"play\" frustrates, harms, or otherwise impacts the targets of their tricks and are insulted when victims become angry rather than seeing the comedy of the situation. The insulted kijimunas then take retribution the only way they know how: with more elaborate pranks. A kijimuna stands only about 3 feet tall and weighs approximately 50 pounds. Its size belies its sinewy strength, gained from years of fishing and climbing tall banyan trees. Ecology Consummate fishermen, kijimunas while away the hours fishing on the shores of oceans or large lakes. Although they delight in the taste of fish-especially the eyes- they easily grow bored and become distracted, sometimes leaving their fishing spears and a pile of fish to rot onshore. The creatures alleviate their boredom by playing tricks on fishermen and villagers living near their cavern or treetop homes. A kijimuna makes every effort to hide its involvement in the tricks it pulls, more out of a sense of pride about a well-executed joke than fear of reprisal. A young kijimuna grows to adulthood in a matter of 5 months, but retains its childish appearance for the entirety of its life. In the unlikely event that its activities don't cause its premature demise, the creature lives for about 15 years. An elderly kijimuna, having reached the ripe old age of 12, settles down and does little else beyond fish in solitude, except perhaps to bargain with children from nearby villages for its catch. It extracts a promise from a child in return for the fish, as well instructions for a devious prank or practical joke to pull on an elder. Although their societies and world view differ wildly from those of the goblins of the Inner Sea Region and elsewhere in Golarion, physiologically kijimuna are little different. As true goblinoids, any sort of device, concoction, or magical effect that only affects goblins affects these erratic tricksters as well. Habitat & Society Tribes of kijimunas maintain small lairs in seaside caves, amid groves of banyan trees, or in other secluded, enclosed areas near the shore. Their homes typically stink of rotten fish from catches brought home and promptly forgotten, while the walls often bear half-completed diagrams of pranks members intend to pull on neighboring creatures. Kijimunas rarely pull pranks on each other, mostly because they hold their peoples' cleverness in high regard, and believe that it's impossible to trick their own kind. Occasionally, however, some event leaves a kijimuna the victim of some accidental hilarity- well-placed meal scraps left on its face, tripping into a tide pool, falling down-such occurrences are the height of kijimuna comedy. Much like their Inner Sea cousins, kijimunas have a strong, bizarre hatred for a particular creature-in this case, the octopus. When faced with octopuses, kijimunas either flee in terror or desperately attack, their whoops and howls vastly exaggerating the threat the cephalopods pose. Kijimunas often share frightening stories about octopuses at night, scaring one another with fearful tales of squirming tentacles and clutching suckers. Occasionally these stories incite groups to action, leading them to go on raids of local tide pools and rocky beaches where the sea creatures regularly lurk. The resulting battles prove loud but brief, with skewered octopuses and the occasional \"hostage\" taken as supplies for the goblinoids' most startling jokes. Kijimunas have few strong feelings about other animals, especially as predators more dangerous than large lizards and the occasional hunting cat rarely occupy the same lands that they do. They delight in sharing their homes with large tropical birds, however, a sentiment that is hardly reciprocated, as they frequently employ the creatures (and the creatures' eggs) in their pranks and take endless delight in mimicking the birds' squawking. Spiders, with their numerous legs, are generally avoided by kijimuna, many of which suspect the insects might be just miniature octopuses in disguise. Kijimunas share goblins' affinity for fire, but this attraction manifests in a less overtly destructive way. These creatures have developed secret techniques allowing them to befriend small fires, calling such flames to them to light their paths, lead travelers into their pranks, or steal a lantern's ability to hold a light. No kijimunas remember how their people managed to make friends with small fires, just that they did a long time ago. Large fires remain dangerous to kijimunas, however, and not only do they have no power over such blazes, but they generally have nothing pleasant to say about any flame larger than a campfire. Kijimunas often form relationships with other humanoids who fish along the same shore. Some befriend such creatures, eagerly sharing all manner of trivial secrets-where the best fishing spots are, what trees grow the stinkiest fruit, and which rocks octopuses hardly ever visit. As a show of friendship, kijimunas make their companions favored targets for particularly embarrassing practical jokes. Those of a superstitious bent view kijimunas as evil spirits, pointing to the ghostly flames that often follow the creatures and their mischievous behavior as proof. Once in a while, someone discovers kijimunas' hatred for octopuses and carries one around as a ward. This typically backfires spectacularly, as the kijimunas then focus their ire on the person-who is obviously some sort of octopus spy or ally. Kijimunas reserve their most elaborate tricks for cephalopod sympathizers. The only counter to most humanoids' distrust and wariness regarding kijimunas manifests in times of famine or poor fishing seasons. In numerous such cases, a town on the brink of starvation has found its food stores replenished on a daily basis by an energized tribe of kijimunas, as these creatures apply their considerable fishing talents to feed their neighbors. After all, kijimunas realize that corpses are considerably less entertaining than living creatures, especially when serving as the butts of jokes. Thus, most communities accept that if their benefactors happen to play a trick or two on them, matters could be far worse.",
    organization: "solitary, family (2-7), or tribe (8-28)",
    languages: "Common, Goblin",
    spellLikeAbilities: [],
    skills: {
      "Escape Artist": {
        ranks: 0
      },
      Profession0: {
        subSkill: "fisherman",
        ranks: 6
      },
      "Sleight of Hand": {
        ranks: 2
      },
      Stealth: {
        ranks: 5
      },
      Survival: {
        ranks: 1
      },
      Swim: {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      "steal fire": {
        type: "Su",
        text: "As a standard action, a kijimuna can call out to a nonmagical fire within 30 feet equivalent in size to the flames of a burning torch. Doing so causes the flame to become a light similar to that created by a dancing lights spell, under the control of the kijimuna. An attended object can make a DC 13 Reflex saving throw to avoid this effect. Unlike a dancing lights spell, a kijimuna's steal fire ability can cause a stolen fire to strike a creature, either ringing the target in light as per the spell faerie fire for 5 minutes, or dealing 2d6 points of fire damage (DC 13 Reflex, half). Both save DCs are Charisma-based. A lantern, candle, torch, or similar item that has its flame stolen cannot be relit by any means for 24 hours."
      }
    }
  },

  "Oni, Earth Yai": {
    source: "Tide Of Honor",
    creatureType: "outsider",
    subTypes: [
      "giant",
      "native",
      "oni",
      "shapechanger"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 16,
    hdVal: 10,
    cr: 13,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 50,
      maneuverability: "Good",
      fly: 50
    },
    abilities: {
      str: 27,
      dex: 22,
      con: 23,
      int: 12,
      wis: 14,
      cha: 15
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Precise Shot",
        type: "Combat"
      },
      {
        name: "Intimidating Prowess",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Pinpoint Targeting",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Greatclub",
        name: "Greatclub",
        damage: "1d10"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Stony missile",
        name: "Stony missile",
        specialAbility: "awesome blow",
        damage: "3d6"
      }
    ],
    defense: {
      SR: {
        value: 24
      },
      naturalArmor: 14
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate mountains",
    visualDescription: "Jagged cracks and pebbled growths mar the surface of this three-eyed giant's rocky skin, making it appear to have burst forth from rugged stone.",
    description: "Although they possess the rocky physiques and near indestructibility of stone giants, earth yai scorn that race's humble ambitions, and instead prove as brutal and destructive as avalanches. For them, physical force and destruction are the ultimate demonstration of power. This belief doesn't necessarily require them to be the strongest or to go on gory rampages, though. After all, what is mere strength if a soldier can fire a catapult that brings down an entire tower, or an emperor can give the decree beginning a war that ravages an entire empire, using both their tools and words to sow ruin. Such ability to cause calamity grants one power over others; those who have the potential to cause the greatest devastation have the greatest power. Earth yai endlessly seek to hold the greatest power, leading many to become brutal warlords or bandit kings, but some to embrace more subtle, long-term machinations in their pursuit of gradual and far-reaching ruin. In its natural form, an earth yai stands 16 feet tall and weighs 3,000 pounds. Ecology Earth yai possess forms similar to the rocky bodies of the stone giants their otherworldly shapes mimic. While stone giants often appear to be sculpted from rock, earth yai tend to have a more rugged appearance, with features that seem to have been clawed from mountainsides, teeth and claws like sharp stones, and three eyes like angry red gems. Their skin is always as hard as rock, the cracks and ravines that riddle their bodies having no impact on their formidable resilience. Like their yai brethren, earth yai possess an unnerving third eye that serves as a portal through which destruction passes. Whenever one so chooses, it can cause a shard of stone to blast from its eye at the speed of a catapult shot. Those struck risk being crushed by the rock, but might also be thrown aside by the sizable projectile. Earth yai typically use this incredible ability not only to annihilate those who oppose them and intimidate witnesses, but also to tear down larger structures or sow greater devastations, like by using it to start landslides, break dams, or destroy bridge supports. Habitat & Society Earth yai dream of conquest like many other oni, but how they pursue victory tends to vary from individual to individual. While all would agree that victory is only attained when one's foes are crushed and shattered, the methods used to accomplish this goal range from brute displays of power to the slow erosion of a foe till nothing remains. The scope of an earth yai's ambitions also seems largely dependent on its age, with younger oni proving content to raid territories and subjugate peasant villages, while older individuals seek greater conquests and the destruction of whole lands. Earth yai enjoy the moment when their long-term plans reach fruition, and might spend decades reveling in past successes before moving on to new conquests. An earth yai who manages to conquer a community or subjugate a region might spend this time acting as a brutal tyrant, installing itself in a palace or fortress and demanding that its slaves supply its every whim. Those who refuse are dramatically murdered. While one of these oni would never give up past conquests, most earth yai eventually grow bored and seek new challenges-if such opportunities don't present themselves during the oni's rule. These oni might move on to find new opponents, but still regularly return to their past holdings to reinforce their control and instill dread among their prisoners. While an earth yai does not have the greatest intelligence and cannot necessarily outwit a wise hero, most possess deep wells of patience and centuries of experience. An oni who finds itself bested time and time again might wait out foes or opposing alliances. Their ages of experience mean that earth yai can generally discern the amount of time they must wait before a threat to them passes- perhaps with the help of a few inconvenient disasters to accelerate an enemy's decline. When two or more earth yai encounter one another, they invariably engage in an extended strategic match, seeking to undermine and outdo each other in acts of cleverness and violence. All earth yai know that a battle between two of their kind must end in a face-to-face confrontation and brutal combat. Occasions for assassination or impersonal defeats might arise in such conf licts, but they are never exploited. These oni see a final battle between members of their kind as a form of honor, and all seek to avoid slighting even their weakest or most reviled kindred. Although all earth yai dream of being the masters of regal citadels dominating lands filled with fearful servants, few actually achieve this goal. Those still campaigning for their despotic dreams typically find lairs in mazelike mountain ravines and in large caverns near the earth's surface. These hideaways can prove notoriously difficult to uncover, as the oni often make use of their passwall ability to sink through solid barriers or walk past gates that don't appear to be portals at all. There they meditate and plot, seeing all the threads of probable events in their minds and determining which ones they need to pull on to shape the future to their liking. If any creature interrupts an oni in its lair, the oni violently attacks, viewing intruders as not just dangerous, but dishonorable, as they trespass upon the oni's private home. This obsession with privacy extends not just to yai in their secret lairs, but also to those with greater holdings. Most earth yai only tolerate creatures of living stone to share their homes, and only bear the intrusion of lesser creatures when they themselves demand the lesser creatures' presence. Earth Yai Daifu Just as stone giants develop a variety of special abilities related to their age, so too do earth yai grow in power as their years mount upon them. Known as daifus, such earth yai have Charisma scores of at least 20 and can use the following spell-like abilities once per day: stoneskin, summon monster XI (earth elementals only), wall of stone. Most earth yai daifus are sorcerers or oracles with abilities tied to the earth or destruction. Earth yai daifus add +1 to their CRs.",
    organization: "solitary, band (1 plus 4-8 stone giants), or tribe (1 plus 2-3 stone giant elders and 10-20 stone giants)",
    languages: "Common, Giant",
    spellLikeAbilities: [
      {
        name: "fly",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "darkness",
        casterLevel: 16,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 16,
        limitations: "self only",
        timesPerDay: -1
      },
      {
        name: "passwall",
        casterLevel: 16,
        limitations: "stone only",
        timesPerDay: -1
      },
      {
        name: "spike stones",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "stone shape",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "stone tell",
        casterLevel: 16,
        timesPerDay: 3
      },
      {
        name: "earthquake",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "repel metal or stone",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "transmute mud to rock",
        casterLevel: 16,
        timesPerDay: 1
      },
      {
        name: "transmute rock to mud",
        casterLevel: 16,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 16
      },
      Fly: {
        ranks: 15
      },
      Intimidate: {
        ranks: 0
      },
      "Knowledge (arcana)": {
        ranks: 19
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      },
      Stealth: {
        ranks: 8,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      "spiky skin": {
        type: "Ex",
        text: "An earth yai may grow spikes from its stony skin at will as a free action. These spikes are treated as armor spikes that deal 1d10 points of damage. Stony Missile (Su) As a swift action, an earth yai can fire an incredibly dense stone from its third eye. This attack has a range of 200 feet, with no range increment, and deals 3d6 points of bludgeoning damage. Upon striking the target, the stone immediately makes an Awesome Blow attempt against the target using the earth yai's CMB."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "alter self or giant form I",
        type: ", alter self or giant form I"
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "acid or fire",
        value: 5
      },
      "awesome blow": {
        type: "Ex"
      }
    }
  },

  Raiju: {
    source: "Tide Of Honor",
    creatureType: "outsider",
    subTypes: [
      "air",
      "extraplanar",
      "shapechanger"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Small",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40,
      maneuverability: "Good",
      fly: 60
    },
    abilities: {
      str: 12,
      dex: 19,
      con: 16,
      int: 5,
      wis: 11,
      cha: 10
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claw",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ],
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity"
    ],
    defense: {
      naturalArmor: 4
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land or sky (lightning storms)",
    visualDescription: "The air around this strange, pale animal sparks with erratic flashes of static electricity, its body constantly twitching as if filled to capacity with the energy. It suddenly perks up, alert and seemingly ready to bolt.",
    description: "Raijus are beings of living electricity that cross the border between the mundane world and their native plane, a region of the Plane of Air alive with endless thunderstorms. Raijus can be involuntarily hurled across the dimensions by a powerful lightning bolt originating in the Plane of Air, or might be called by magic users to do their bidding. When the weather is calm, raijus are quiet, and assume the forms of Tiny or Small animals such as cats, raccoon dogs, monkeys, or weasels. As weather gets worse, however, so do their tempers. In their real form, raijus appear as lean, foxlike creatures with long, sharp claws and luminous eyes, shrouded by crackling electricity. These swift, even panicky, creatures are charged with the electricity of their native realm, and those who touch them risk receiving a deadly shock. In times of great distress, they transform entirely into living electricity, a force that few barriers can contain and even fewer creatures can survive the passage of. In their natural forms, raijus measure about 3-1/2 feet long and weigh 40 pounds, but they often take the form of small mammals when not on the Plane of Air. They can be still recognized as raijus in this form, however, as they bear markings suggestive of jagged lightning. Ecology When they are born on the Elemental Plane of Air, raijus are semi-sentient, formless spheres of living electricity. Only after a period of weeks or months do they gradually take on a favored form, that of a vaguely rodent- or caninelike beast, agile enough to twist and bound amid the endless storms and debris that soar through their home plane. Sometimes particularly powerful elemental storms, strange eddies of magic, or drifting portals bring raijus to the Material Plane. When this happens, invariably during a thunderstorm, the creature spends but a little time regaining its bearings; it then uses its innate shapechange power to blend in with the local fauna, taking on the shape of a local animal-typically a cat, raccoon dog, monkey, or weasel. While such raijus constantly seek to return to their home plane, they aren't terribly uncomfortable on the Material Plane. When the weather is calm, raijus are likewise quiet, and remain in their apparently harmless animal forms all the time. As weather gets worse, however, they become increasingly energetic, racing and soaring about in rampages that occasionally prove accidentally destructive. They typically resume their natural forms during such storms, reveling in their memories of their home plane. Some scholars believe that raijus can return to their native plane when lightning strikes them, thus explaining the creatures' eagerness and agitation during such weather. Habitat & Society Raijus are extraplanar creatures that have little organization on their home plane, roaming and romping as little more than wild animals in their dangerous planar wilderness. On the Material Plane, they gravitate toward areas where storms are frequent, or where the effects of lightning are apparent. This means they frequently occupy the windward sides of mountains and wet forests, eagerly making small dens in the trunks of lightning-blasted trees or scorched, rocky crevices. Raijus can live on the Material Plane indefinitely, though all seek ways they might return to the Elemental Plane of Air. Those separated from their native plane rarely manage to find their way home without the intervention of some other being. Although life on the Material Plane often means a raiju will never encounter others of its kind again, few seem to realize this fact, or, if they do, become despondent over it. Rather, many raijus adopt the habits and communities of the creatures they spend the most time imitating and live as such creatures-except, of course, during violent lightning storms. Many believe that despite their destructive natures, raijus are good luck. This belief comes from the creatures' propensity for finding warm spots to nestle into and rest in during the lazy times between storms. One story tells of a raiju that found a snug spot in the navel of a sleeping giant. The giant was exhausted after a day of tromping on a local town and stealing away an entire year's harvest of rice, so it didn't even notice the sleeping creature. When the giant finally awoke and felt the dozing creature's claws on its belly, it flew into a panicked rage. The sudden activity startled the sleeping raiju, and it immediately summoned a storm and called down lightning, which promptly electrocuted the giant-killing the villain on the spot. When the curious townsfolk saw the brief, explosive storm nearby, they stopped rebuilding their homes and came to investigate. What they found was a charred giant and a sleepy raiju, nestled amid their stolen rice. Raijus have been considered lucky spirits ever since, though many refuse to sleep face up during lighting storms lest their bellies seem like a comfortable place for a raiju to rest. Kaenju This rarer variant of the raiju dwells upon the Plane of Fire, in regions filled with smoke and wracked by firestorms and endless volcanic eruptions. Just as their kin from the Plane of Air, kaenjus may visit mundane worlds during volcanic eruptions or when huge fires devastate towns or forests. A kaenju is very similar to its cousin, but its substance is made of fire instead of lightning. Defensive Abilities: Kaenjus have the fire subtype (immunity to fire, vulnerability to cold) and resistance 10 to lightning. Special Attacks: A kaenju's tail and claws are considered flaming burst weapons. Special Qualities: All kaenjus' supernatural abilities are based on flame instead of lightning, and have the same effects but deal fire damage instead of electricity damage. Also, instead of a raiju's spell-like abilities, a kaenju can cast produce flame at will, and flaming sphere and quench 3 times per day.",
    organization: "solitary, pair, or group (3-12)",
    languages: "Auran",
    spellLikeAbilities: [
      {
        name: "call lightning",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "control weather",
        casterLevel: 5,
        limitations: "thunderstorm only",
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 2
      },
      Fly: {
        ranks: 5
      },
      Perception: {
        ranks: 6
      }
    },
    special: {
      "shocking burst": {
        type: "Su",
        text: "Besides dealing normal slashing damage, the claw and tail of a raiju are considered to have the shocking burst weapon special quality. They deal 1d6 extra points of electrical damage on a normal hit and an additional 1d10 points on a critical hit."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Small animal only"
      },
      "electric body": {
        type: "Su",
        text: "As an immediate action, a raiju can transform itself into a ball of living lightning. While in this form, the raiju gains the incorporeal subtype and incorporeal quality. It only takes half damage from corporeal sources if they are magical (it takes no damage from nonmagical weapons and objects). Additionally, it sparks with electricity while it is in this form. Any creature that touches the raiju with a natural or unarmed attack or whose square the raiju passes through during its movement must succeed at a DC 17 Reflex save or take 2d6 points of electricity damage. The save DC is Dexterity-based. In normal weather, a raiju can remain incorporeal for a number of rounds per day equal to its Hit Dice, though it can remain incorporeal for as long as it pleases during a thunderstorm."
      }
    }
  },

};