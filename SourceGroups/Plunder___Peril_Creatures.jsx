
export const Plunder___PerilCreatures = {
  "Incutilis Lord": {
    source: "Plunder & Peril",
    creatureType: "aberration",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 11,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "All-Around Vision",
      "Darkvision 60 ft."
    ],
    speed: {
      base: 10,
      climb: 10,
      swim: 40
    },
    abilities: {
      str: 20,
      dex: 17,
      con: 18,
      int: 15,
      wis: 16,
      cha: 15
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Tentacle",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Tentacle",
        name: "4 Tentacles",
        specialAbility: "calcifying sting",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to disease, mind-affecting effects, poison"
    ],
    defense: {
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "15 ft.",
    environment: "any oceans",
    visualDescription: "A curved shell protects an unsightly mass of barbed tentacles, ringed by numerous inhuman eyes.",
    description: "The elders of the incutilis race display an unearthly beauty, with vibrant colors and considerable aquatic grace for their size. As these horrors live for hundreds of years in remote aquatic locations, scholars remain unsure whether the lesser incutilises eventually attain this majestic form or are a separate race, and-more worrying-what their relationship is with these ancient aberrations of the deep ocean and the great subterranean seas. Incutilis lords attack with barbed tentacles, inflicting a painful sting and injecting a calcifying agent that transforms living tissue into a dense black growth resembling a cross between chitin and coral. The stinger anchors the incutilis lord's senses in a calcified minion, leaving a disturbing exoskeleton that moves the minion about at the monster's whim. Unlike the mindless zombies that serve a more common incutilis, an incutilis lord's servitors retain muscle memory and a grasp of their magical abilities. An incutilis lord can survive for decades by feeding on the body and psyche of a single Medium-sized victim, but rarely settles for having only one minion to manipulate or feed upon. An incutilis lord's shell is about 8 feet in diameter, and the aberration measures nearly 20 feet long from the back of the shell to the tips of its longest tentacles. An incutilis lord weighs about 600 pounds.",
    organization: "solitary, pair, or coven (1-2 incutilis lords plus 3-7 incutilises [Pathfinder RPG Bestiary 4 157])",
    languages: "Aklo, Aquan, Common; telepathy (100 ft.)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Intimidate: {
        ranks: 8
      },
      "Knowledge (arcana)": {
        ranks: 4
      },
      "Knowledge (local)": {
        ranks: 4
      },
      "Knowledge (nature)": {
        ranks: 8
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 7
      },
      Spellcraft: {
        ranks: 7
      },
      Stealth: {
        ranks: 9
      },
      Survival: {
        ranks: 5
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      "black coral secretion": {
        type: "Ex",
        text: "An incutilis lord's tentacles generate an oily black residue that quickly hardens into a dense, coral-like substance. A single application covers a 5 foot square and completely hardens in 1 minute, even when exposed to water. This substance is malleable until hardened, allowing an incutilis lord or the lord's minions to shape it into armor, walls, and more. Once calcified, it has a hardness of 4 and 8 hit points per inch of thickness. An incutilis lord can produce one application of black coral per Hit Die each day."
      },
      "calcified minion": {
        type: "Su",
        text: "A calcifying stinger imparts a strong psychic connection between a calcified target and the incutilis lord who implanted the stinger. Once the target succumbs to the incutilis lord's will (see the calcifying sting ability, below), the target's whole body is infused with new secretions that allow the incutilis lord to dictate the target's actions and restore any Dexterity lost to the calcifying sting, as the secretions assist the minion's movement rather than hindering it. The incutilis lord can control a number of minions equal to its Charisma modifier as a free action. If the incutilis lord attempts to control a new minion in excess of this limit, it must first release one of its current calcified minions; see the calcifying sting ability, below. The minions have no will of their own but retain a small portion of their identity, giving the incutilis lord access to their feats, physical skills, extraordinary abilities, spell-like abilities, and supernatural abilities. A calcified creature moves under the direct control of its incutilis lord until the stinger is removed from its body. While under the incutilis lord's control, a calcified minion takes its own normal actions each round, as directed by its controller. A minion can survive this process for a number of days equal to its Constitution score. After this time, the calcified minion dies, though its body retains a semblance of life. The dead minion is treated as a living creature and can be controlled in the same fashion as before until the calcifying stinger is removed or the incutilis lord that controls the creature dies."
      },
      "calcifying sting": {
        type: "Su",
        text: "The tentacles of an incutilis lord inject a painful stinger that constantly generates a black coral secretion. A creature stung by an incutilis lord must attempt a DC 19 Fortitude saving throw at the beginning of every turn until the stinger is removed. Each time it fails this save, the creature takes an additional 1d6 points of damage and 2 points of Dexterity drain. If this causes the creature to reach 0 or fewer hit points or a Dexterity score of 0, it loses all will of its own and immediately comes under the control of the incutilis lord (see the calcified minion ability, above). As a swift action, the incutilis lord can psychically command one of its stingers to remove itself from a stung creature, releasing its control over that creature. Another creature can forcefully remove a stinger from a willing or unconscious target by a succeeding at a DC 19 Heal check. Regardless of whether this Heal check succeeds or fails, attempting to remove the stinger deals 1d8 points of damage to the target. If the stinger is removed or the incutilis lord dies, the fluid seeps out of the controlled creature's wounds and the creature is released from the incutilis lord's control-though the creature may be dead by that time. The save DC is Constitution-based."
      },
      jet: {
        universalMonsterAbility: "Jet",
        distance: "120 ft."
      }
    },
    resistances: [
      {
        damageType: "cold",
        value: 10
      },
      {
        damageType: "electricity",
        value: 10
      }
    ]
  },

  "Karkinoi Brood Swarm": {
    source: "Plunder & Peril",
    creatureType: "monstrous humanoid",
    subTypes: [
      "aquatic",
      "swarm"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Tiny",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      swim: 30
    },
    abilities: {
      str: 6,
      dex: 14,
      con: 13,
      int: 3,
      wis: 10,
      cha: 7
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Step Up",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        damage: "2d6"
      }
    ],
    defense: {
      naturalArmor: 4
    },
    space: "10 ft.",
    reach: "0 ft.",
    environment: "any water",
    visualDescription: "Each member of this horde of blue crablike things is armed with a menacing, oversized pincer.",
    description: "Among the myriad horrors inhabiting the Shackles, a karkinoi brood swarm is one of the most terror-inspiring to behold. The brutish karkinoi (Pathfinder RPG Bestiary 4 173) reproduce after collecting sufficient meat to feed their offspring, which is usually obtained by raiding coastal settlements. After mating, the female karkinoi lays a mass of eggs in the calm water of a coastal sea cave or sheltered underwater area. The voracious spawn hatch almost simultaneously, instinctively cluster together to form an endlessly ravenous karkinoi brood swarm, and devour all nearby meat. The taste of that first meal imprints itself on the karkinoi spawn, pushing these creatures to become savage marauders when they mature. The karkinoi brood mother remains close by her progeny after they hatch, both to educate them and to safeguard them from predators, especially other karkinoi, which have been known to cannibalize karkinoi spawn. Karkinoi spawn mature rapidly, growing larger and aggressively vying for domination over each other. A karkinoi brood swarm's spawn rapidly diminish in number as the stronger members consume the vanquished. Eventually the karkinoi adolescents split up, searching for their own aquatic lairs and ample sources of soft meat.",
    organization: "solitary, pair, or wave (3-4 swarms)",
    languages: "Aquan",
    spellLikeAbilities: [],
    skills: {
      Swim: {
        ranks: 0
      }
    },
    special: {
      "clinging grasp": {
        type: "Ex",
        text: "The spawn in a karkinoi brood swarm clutch with their pincers to tenaciously cling to other creatures and each other, inhibiting their targets' movement as they swarm over prey. When the karkinoi brood swarm ends its turn in the space of a Medium or smaller creature, that creature must succeed at a DC 15 Reflex save or become entangled. This effect lasts for 1 round or until the creature leaves the karkinoi brood swarm's space, whichever comes first. The save DC is normally Strength-based, but because the karkinoi brood swarm has the Agile Maneuvers feat, the DC is instead Dexterity-based.",
        preText: "DC 15"
      },
      consume: {
        type: "Ex",
        text: "A karkinoi brood swarm can rapidly consume any creature it swarms over. Against helpless or nauseated targets, a karkinoi brood swarm's attack deals 4d6 points of damage."
      },
      "scuttling swarm": {
        type: "Ex",
        text: "A karkinoi brood swarm can use its Step Up feat to move and reshape itself when a creature takes a 5-foot step while within the swarm's area. Each part of the swarm can move 5 feet, provided each part of the swarm ends this movement in a square occupied by the creature taking the 5-foot step or in a square that the swarm occupied before taking this movement."
      },
      "water dependency": {
        type: "Ex",
        text: "A karkinoi brood swarm can survive out of the water for 1 hour per point of Constitution. Beyond this limit, it runs the risk of suffocation, as if it were drowning."
      }
    }
  },

  "Onwu Azu": {
    source: "Plunder & Peril",
    creatureType: "animal",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Keen Scent",
      "Low-Light Vision"
    ],
    speed: {
      base: 5,
      swim: 70
    },
    abilities: {
      str: 12,
      dex: 16,
      con: 12,
      int: 1,
      wis: 11,
      cha: 3
    },
    feats: [
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "attach, bleed",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm oceans or rivers",
    visualDescription: "This oversized piranha bursts from the water, spreading broad fins as it takes to the air to sate its hunger.",
    description: "Onwu azus are a species of saltwater flying fish that grow to a hefty size and have a taste for the blood of warm-blooded animals. They're similar to giant flying piranha, and their name roughly translates to \"flying death\" in the dialect of Polyglot spoken along the coasts of the western Mwangi Expanse. Like salmon, onwu azus are born in rivers and migrate downstream to the ocean during their adolescence. There, they grow to their adult size and develop the ability to swim at incredible speeds and use their wing-like pectoral fins to glide above the waves. Onwu azus return to the river where they were born to reproduce, and die shortly afterward. Onwu azus use their glide ability to hunt prey, and although they are capable of subsisting on smaller fish and other marine animals, they prefer the blood and meat of land-dwelling creatures. After spotting a target, schools of onwu azus soar over the waves at great speeds, hurling themselves at their preferred food sources and biting with their incredibly sharp teeth, employing a suction grip that is difficult to break. Once attached, the onwu azus continue biting until their prey is killed. Their bites cause continuous bleeding, and most of their victims die from shock and blood loss long before the onwu azus reach vital organs. These fish can survive for up to 5 minutes out of the water, and if they succeed at killing their prey on land, they briefly feed before flopping back into the water to look for their next meal. More than one pirate has been knocked from his ship by a surprise onwu azu attack. Rather than just leaping to take a bite of air-breathing prey, the fish will often bull rush prey on either a coast or ship's deck, intending to knock it into the waiting mouths of the school below. Shallow inlets and river mouths in the paths of spawning onwu azus are often littered with the remains sailors and explorers who ran afoul of these deadly fish. Adventurers who find treasure in such areas would do well to wonder what killed any corpses lying beside loot and take appropriate precautions. Onwu azus grow to over 4 feet in length with fin-spans of over 6 feet, and can weigh close to 90 pounds. Their skin is generally dark blue or brown, and their pectoral fins are a scintillating red that shimmers in the sun with a kaleidoscope of colors.",
    organization: "solitary, school (4-11), or shoal (13-33)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 1
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d4"
      },
      glide: {
        type: "Ex",
        text: "An onwu azu can launch itself into the air and glide for up to 1 minute (depending on water and weather conditions, at the GM's discretion). When gliding, it has a fly speed of 60 feet with clumsy maneuverability and gains Flyby Attack. Keen Scent (Ex) An onwu azu can notice creatures by scent within a 180-foot radius underwater and can detect blood in the water at ranges of up to 1 mile."
      },
      ferocity: {
        universalMonsterAbility: "Ferocity"
      },
      attach: {
        universalMonsterAbility: "Attach"
      }
    }
  },

};