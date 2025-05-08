
export const Stolen_LandCreatures = {
  Drekavac: {
    source: "Stolen Land",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 10,
      dex: 12,
      con: "-",
      int: 9,
      wis: 12,
      cha: 17
    },
    feats: [
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Chilling grasp",
        qualities: [
          "touch"
        ],
        name: "Chilling grasp",
        specialAbility: "disease",
        damage: "1d6"
      },
      {
        weapon: "Shadow",
        qualities: [
          "touch"
        ],
        name: "Shadow",
        specialAbility: "Shadow"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "silver"
      },
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "Dressed in graveyard rags, this pitiful creature cries out like a sick child. An oversized, bestial head perches atop its spindly, child-sized body, and its eyes are nothing but sunken pools of shadow with no trace of life in them. A cloying mist wreathes its frail form, accompanied by the stench of death and disease.",
    description: "Drekavacs are the undead remains of children who perished from disease, particularly in plague-ridden areas where many such deaths occurred in a short period of time. Able to become as insubstantial as the mist rising from a graveyard on a cold, dark night, drekavacs are carriers of disease, seeking to infect the living with the afflictions that slew them. According to some stories, drekavacs only result from young plague victims who remain unburied or died bereft of the proper funeral rites; performing those rites may allow their spirits to rest and no longer haunt the world of the living. Ecology Drekavacs typically haunt desolate places, from windswept plains and mountains to dark forests and abandoned homes or villages. They may move among inhabited areas in gaseous form, but are typically warded off by bright lights and the sounds and sights of life. They are always encountered indoors or at night, preferring dark, cloudy or foggy nights, ideally during the waning moon. Drekavacs are usually encountered during the gloomy, cold winter months rather than in the spring or summer. Rural clerics and adepts must sometimes deal with one or more drekavacs seeking to spread disease in their communities. Their favored targets are children, some of whom can also become drekavacs 3 days after death unless their bodies are burned and the ashes scattered. The work of drekavacs in a community can sometimes lead to hysterical accusations by grief-stricken parents and families, stirring up resentment and violence toward outsiders or anyone suspected of involvement with unnatural forces. It is customary in some rural areas to surround a child's crib with a ring of blessed salt to keep evil influences at bay, including drekavacs, who cannot cross an unbroken line of salt. However, drekavacs can convince others to break the line of salt for them. Habitat & Society Drekavacs are lonesome, bitter, and pitiful creatures, often crying when they appear, mourning their lost lives. Some folk mistake them for living children, lost or starving, although the creatures are not very effective liars. Still, a dim night and a half-seen form huddled and sobbing pitifully are often enough to trick someone into approaching close enough to become victim of the drekavac's chilling grasp. Once they have inflicted their plagues upon victims, drekavacs quickly lose interest and move on, although they may follow a victim, begging for aid and attention, behaving as if they were still living victims of disease rather than its agents. They rarely kill victims outright, preferring instead to inflict long and lingering deaths through disease. Drekavacs threatened with salt, magic, or silver weapons become vicious, attacking opponents like snarling dogs until they are dead or the creatures are driven off. Drekavacs sometimes band together in small packs, particularly in places where epidemics or plagues have swept through a population, either recently or long ago, but they have no real organization beyond seeking out new victims to infect. Drekavacs are intelligent and aware, able to converse in Common, or whatever languages they knew in life. This means some drekavacs are only able to communicate in largely dead or forgotten languages. They are childlike in their understanding and largely incapable of being reasoned with, but deft use of Bluff or Diplomacy and a playful or parental tone may keep a drekavac at bay, at least temporarily.",
    organization: "solitary or pack (2-5)",
    languages: "Common",
    spellLikeAbilities: [
      {
        name: "gaseous form",
        casterLevel: 5,
        timesPerDay: -1
      }
    ],
    skills: {
      Intimidate: {
        ranks: 4
      },
      Perception: {
        ranks: 4
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      "create spawn": {
        type: "Su",
        text: "A child slain by a drekavac's disease has a 1-in- 6 chance of rising as another drekavac 3 days after death. The new drekavac is not in any way controlled by its maker, and is immediately capable of exercising its full powers, including creating spawn of its own. It does not possess any of the abilities it had in life."
      },
      disease: {
        universalMonsterAbility: "Disease",
        type: "Su",
        text: "Drekavacs are spirits of disease and contagion. While most drekavacs carry bubonic plague, drekavacs who died from other afflictions may carry those diseases instead. Any illness caused by a drekavac must be potentially fatal. Other diseases commonly carried include demon fever, filth fever, and slimy doom. If a drekavac is reduced to 0 hit points (from weapons or other sources, including channeled energy), all of the diseases it caused are cured, although the victims must recover from any effects normally, and slain victims are not restored. Bubonic plague: Touch-injury; save Fort DC 15; onset 1 day; frequency 1/day; effect 1d4 Con damage, 1 Cha damage, victim is fatigued; cure 2 consecutive saves."
      },
      "unnatural aura": {
        universalMonsterAbility: "Unnatural Aura",
        type: "Ex",
        range: "30 ft."
      },
      shadow: {
        type: "Su",
        text: "Any creature touched by a drekavac's shadow is also affected by the creature's disease ability. If there is a question about which way the drekavac's shadow falls, roll 1d8 to determine a random square around the creature. A character with a light source cannot be touched by the drekavac's shadow, but the light causes the shadow to fall directly opposite the character (unless there is another light source there as well). A drekavac can deliberately touch a creature with its shadow as a standard action by making a successful touch attack. A target missed by the drekavac's chilling grasp attack must make a DC 15 Reflex save to avoid being touched by the creature's shadow as well. This save DC is Charisma-based. Sunlight Aversion (Ex) Drekavacs hate natural sunlight and immediately flee from it. A drekavac caught in natural sunlight is staggered. Unnatural Aura (Su) Animals, wild or domesticated, can sense the unnatural presence of a drekavac at a distance of 30 feet. They do not willingly approach nearer than that and panic if forced to do so unless a master succeeds at a DC 25 Handle Animal, Ride, or wild empathy check. Panicked animals remain so as long as they are within 30 feet of the drekavac. Vulnerability to Magic (Ex) A remove curse or remove disease spell cast directly upon a drekavac (DC equal to the drekavac's disease ability) immediately destroys the creature, allowing the afflicted soul to move on. Destroying a drekavac with remove curse or remove disease does not cure any of the creature's diseases. Vulnerability to Salt (Ex) Drekavacs are vulnerable to salt that has been consecrated in the same fashion as holy water, and cannot cross an unbroken line of blessed salt. A handful of blessed salt thrown at a drekavac inflicts the same damage as a flask of holy water (Pathfinder RPG Core Rulebook 160)."
      }
    },
    resistances: [
      "sunlight aversion",
      "vulnerability to magic",
      "vulnerability to salt"
    ]
  },

  "River Elk": {
    source: "Stolen Land",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 50,
      swim: 30
    },
    abilities: {
      str: 17,
      dex: 15,
      con: 18,
      int: 2,
      wis: 15,
      cha: 6
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Run",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "cold or temperate plains",
    visualDescription: "This majestic beast stands the height of a man at its shoulders, a many-tipped rack of proud antlers crowning its head.",
    organization: "solitary, pair, or herd (3-50)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 3
      },
      Swim: {
        ranks: 0
      }
    },
    special: {}
  },

  "Megaloceros Elk": {
    source: "Stolen Land",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 20,
      dex: 15,
      con: 18,
      int: 2,
      wis: 15,
      cha: 5
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Run",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Hoof",
        name: "2 Hooves",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 5
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "cold or temperate plains",
    visualDescription: "This majestic beast stands the height of a man at its shoulders, a many-tipped rack of proud antlers crowning its head.",
    organization: "solitary, pair, or herd (3-50)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4
      }
    },
    special: {
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 7
      }
    }
  },

  Thawn: {
    source: "Stolen Land",
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 8,
      con: 14,
      int: 7,
      wis: 12,
      cha: 6
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Throw Anything",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "temperate hills and plains",
    visualDescription: "A hulking humanoid cloaked in ragged cloth limps forward, its malformed, tumorous arms ending in claws the length of scythe blades. From beneath its rags droop lengths of loose flesh and a strangled wheezing issues from its deformed lips.",
    description: "Grotesque nomads native to wretched plains and barren hills, thawns seem to bear the curse of both nature and the divine. Ogre-like in stature and dimwittedness, these monstrously ugly humanoids bear fold upon fold of sagging, excess flesh, draping them in wrinkled, poxriddled hides. This wretched appearance, in tandem with their great size and monstrous claws, leads most creatures to shun them. Indeed, even thawns find one another repulsive, creating a barely tolerable society of universal mistrust and loathing. Thawns average 9 feet tall and their excess skin pushes their average weight to 700 pounds. Ecology Often called \"mud giants\" due to the foul, mottled skin that hangs loosely from their misshapen frames, thawns are universally malformed and dreadful, though each is quite distinctive in its singular monstrousness. Hair only grows in small tufts-thick, oily, and black. Their eyes easily pick up the flaws in their appearance, driving them to hide their figures as much as possible. Such revulsion of their form has led many scholars to hypothesize that thawns once possessed a different one, potentially relating them directly to ogres, hill giants, or other humanoids victimized by the hands of some more powerful and malicious race. Such possibilities remain nothing more than conjecture, however, as the brutes have no ability and even less interest in retaining details of their history. Even with this overpowering self-loathing, ancient instincts drive thawns together for safety and procreation, and no other race tolerates their ugliness and savagery. Opportunistic feeders, thawns seek out fresh battlefields and the scraps of slain beasts, reluctantly sharing their pickings with other parasites and scavengers. Alone as they wander the lands, thawns take care of their own needs first and foremost, caring little for others of their kind. Disdaining anything like a fair fight, they excel at crafting clever decoys and simple traps. Though sizable creatures, thawns typically strive to draw as little attention to themselves as possible, preferring to craft convincing dummies from mud, stone, and animal carcasses while they wait in hiding. Habitat & Society Most thawns collect in nomadic groups, wandering grim plains and moody hills more like ravaging gangs than tribes traveling out of necessity. While their dim intellects provide them the most basic tools to seek out what they need to survive, their lives prove pitiful and often violently short. Hateful of themselves and their own kind, thawns aspire to no great works. Their nomadism thus comes less from need as from indifference, as one ugly hillside or leaking cave proves little better or worse than any other. It's their own inhabitance that causes most thawns to move on, as once they've despoiled an area, it's then time to find new lands. This cycle of pillaging and pressing on proves uncomfortable to most thawns, but most lack the foresight to live any other way. Groups of thawns prove highly changeable, with members joining and leaving with little hesitation. As no love is lost between members, the savages drift apart as the whim takes them. Typically such changes in group structure go ignored, unless those left behind believe their former kinsman possesses some valuable information or reason for departing. Thawns don't believe in hoarding material possessions, disdaining most metals and valuables in part because shiny surfaces invariably betray their monstrous visages to them. They use whatever is nearest at hand to satisfy their basic needs, though some carry with them items of simple usefulness or trophies of brutal victories. They move away from defended and civilized areas out of simple survival instinct, but attack small groups of humanoids if driven to desperation. Occasionally some uninformed samaritan attempts to take pity on a thawn, believing it cast out merely for its appearance and simplicity. Such charity typically proves fatal, though, as in the case of these hulks, their outward ugliness matches a dull-witted sadism and raving, violent hatred of all living things. Even ogres, with whom they hold many similarities, revile thawns as mindless killers and bogeymen, attacking and slaying them on sight. If mud giants excel at any one thing, it's physical deception. Knowing most creatures' hatred of them and their widespread treatment as dangerous lepers, they have learned to hide themselves where no sane creature would lurk and deceive eyes that would seek them with loathing. Thus, thawns willingly lair and hide amid filth-choked pools, muddy ravines, rotting bogs, and worse places. To aid them in their ambushes, they often create cunningly hidden pits, similar simple traps, and, most notoriously, decoys. With their misshapen frames, it's not difficult to mistake a tall, awkward pile of mud and rocks covered in rags for a thawn, while the reverse also proves dangerously true. More than one wary traveler, sighting a thawn-like shape upon a low hillock or on a dusty trail, has circled widely to avoid the dangerous hunter only to blunder into the ambush of the true thawn lurking in wait. Treasure Thawns rarely keep any possessions other than those which they can carry, these typically being crude or foul items even the most desperate wayfarers wouldn't consider clothing or food. In filthy sacks or-even more revoltingly- slung in useful flesh folds, there is a 40% chance that any thawn possesses 1d4 unsettling items, typically scraps of skin, leather, and stolen cloth for the creation of new cloaks; trophies of skulls, bones, and hide bound into crude fetishes; and rotting animal meat of unwholesome cuts and uncertain origin. Such things are typically soiled beyond use and rarely valuable, but often suggest what victims the mud giant has recently preyed upon and where their foul wanderings have led them.",
    organization: "solitary, pair, or gang (3- 8)",
    languages: "Giant",
    spellLikeAbilities: [],
    skills: {
      Craft0: {
        subSkill: "traps",
        ranks: 3
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {}
  },

  "Brush Thylacine": {
    source: "Stolen Land",
    creatureType: "animal",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 16,
      dex: 14,
      con: 19,
      int: 2,
      wis: 13,
      cha: 7
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Step Up",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forest",
    visualDescription: "This odd creature is about the size of a dog, but it has the slender build of a cat, heavy whiskers, and dark stripes down its back. Its long tail flips about, smacking the ground as it scans the woods. It yips and bays in a complex pattern, offering warning to anything that may cross its path.",
    description: "Thylacines are large marsupial carnivores. They typically hunt alone, only occasionally forming small packs. Thylacines hunt at night, and rest during the day in nests hidden away from the world in hollowed trees or bushes. Farmers fear the creatures, blaming all manner of problems on them. However, thylacines are quite shy and antisocial, and usually avoid human settlements. Because of their odd, almost hybrid appearance, thylacines have a far harsher reputation than they probably should, playing a sort of bogeyman role in farming communities. Ecology At a distance, thylacines are sometimes mistaken for dogs or jackals, but can be easily identified by the defining stripes on their gold-hued backs. Thylacines usually have between 13 and 21 dark stripes. Their muscular jaws, filled with teeth, can gape open to an impressive 120 degrees. While thylacines may appear rather quick, they are far from proficient runners. Due to their oddly shaped legs, their run is awkward and slow. However, the animals can stand on their haunches for short periods, helping them to fend off other predators and kill larger prey. Thylacines are also capable jumpers, not dissimilar to kangaroos, and often surprise opponents with this ability. By most standards, a thylacine's senses aren't impressive. They can see and hear well enough to hunt prey, but their olfactory senses, while competent, do not approach canine levels. Thylacines hunt in a manner similar to wolves, focusing on wearing down prey by chasing and harrying instead of direct attacks. Their stomachs are able to greatly distend, enabling thylacines to eat vast amounts of food in a single sitting, devouring larger animals to compensate for long periods of drought or poor hunting. Thylacines are quite cowardly, avoiding confrontation whenever possible. If cornered, a thylacine tries to frighten off attackers with growls, hisses, and threat-yawns, in which it displays its teeth and the full extent of its wide jaws. If these threat displays are ineffective, however, a thylacine does not hesitate to attack. Their powerful jaws may not snap bones, but they can still make quick work of an unprepared traveler. In addition, thylacines are not picky eaters. If driven to starvation, they aren't afraid to hunt humans, in which case their nocturnal hunting cycles tend to lead them to attack sleeping travelers or outlying farms. Thylacines are fiercely independent. While wolves and other canines can be tamed and domesticated, thylacines are wild without exception. If captured, they become territorial and mark everything they can in their territories with strong-smelling odors from their scent glands. Many a farmer has made the sad mistake of attempting to domesticate a thylacine, only to find his farm smelling atrocious and his livestock killed in the night. An adult thylacine stands 2 feet tall at the shoulder, is 4 feet long (not counting an additional 2 feet of tail), and weighs roughly 50 pounds. The larger and more aggressive brush thylacine breed can reach almost 8 feet long from nose to tail-tip, though still only weighing 100 pounds. Habitat & Society Thylacines breed year-round, but like most marsupials, they don't maintain strong family ties. Females keep their young in pouches. Unlike many marsupials, males also have pouches, but these are to protect their genitals, not their young. Females produce about 10 viable joeys in a given breeding season, but only about four can expect to see more than a year of life. The average thylacine lives between 4 and 10 years. Thylacines keep dens similar to those of plains mammals such as foxes and cougars. Dens are often very hard to find, in trees, caves, or other inconvenient locations out of the way of most predators, and in natural shade. Thylacine young reside in the den for only a short period, as joeys stay in their mothers' pouches for most of their development. During periods when a mother is incubating her young, she can be downright violent to trespassers or any other potential threats. Regional Variants Several breeds of thylacine are known to exist, hunting plains and woodlands in regions of Avistan, Garund, and beyond. Three of the most common are noted here. Blood Cougar: Not actually related to the big cats, Tian thylacines are known as blood cougars for their vivid red coloring. Surprisingly, they are often kept as pets by Tian-La leaders, as blood cougars are more easily domesticated and tamed, and serve as far better companions and hunting aids. Although they are slightly smaller than normal thylacines, they make up for it in ferocity and cunning. These red beasts have the advanced creature template (Pathfinder RPG Bestiary 294). Casmar Thylacine: In Casmaron, most thylacines are smaller than the typical beast. For this reason, they tend to form larger packs, often twice the size of an average thylacine pack. These smaller beasts stand 6 inches to a foot shorter at the shoulders. Casmar thylacines are normal thylacines with the young creature template added (Pathfinder RPG Bestiary 295), and gather in packs of 2-10. Sarusan Wolf: The Sarusan wolf is a slightly bigger and more doglike form of the normal thylacine. Whereas indigenous people refer to the thylacine as a lion or other great cat, the Sarusan wolf has an unmistakable canine jaw. While they are physically larger, Sarusan wolves are actually less hardy than their traditional cousins, due to poor weight allocation. Prone to tiring quickly and falling down, Sarusan wolves focus more on rapid takedowns of their prey. Sarusan wolves have a Constitution score of 12 and gain Power Attack as a bonus feat. Thylacine Companions Starting Statistics: Size Small; Speed 30 ft; Attack bite (1d4); Ability Scores Str 12, Dex 15, Con 16, Int 2, Wis 13, Cha 7; Special Qualities Low-Light Vision, powerful jaws. 4th-Level Advancement: Size Medium; AC +2 natural armor; Attack bite (1d6); Ability Scores Str +4, Dex -2, Con +4.",
    organization: "solitary or pack (2-5)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
        ranks: 1
      }
    },
    special: {
      "powerful jaws": {
        type: "Ex",
        text: "A thylacine's muscular jaws threaten a critical hit on a natural roll of 19 or 20."
      }
    }
  },

};