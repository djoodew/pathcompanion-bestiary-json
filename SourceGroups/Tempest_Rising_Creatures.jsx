
export const Tempest_RisingCreatures = {
  Angustiden: {
    source: "Tempest Rising",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 10,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Keen Scent"
    ],
    speed: {
      swim: 90
    },
    abilities: {
      str: 31,
      dex: 12,
      con: 23,
      int: 3,
      wis: 10,
      cha: 4
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Lunge",
        type: "Combat"
      },
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
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 9
    },
    space: "20 ft.",
    reach: "5 ft.",
    environment: "any ocean",
    visualDescription: "This majestic beast glides through the water with murderous intent. Its thick-toothed maw is wide enough for a human to stand in, and its body stretches back more than 20 feet.",
    description: "The angustiden is a gargantuan hunter of the deep sea. The size and ferocity of this behemoth are matched only by those of the megalodon, and it counts even the great white shark among its prey. Its foot-long, dense, and jagged teeth tear through anything they choose to clamp down on, and very few creatures manage to leave such an embrace with all of their body parts.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 10
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      grab: {
        universalMonsterAbility: "Grab"
      },
      "powerful jaws": {
        type: "Ex",
        text: "The teeth of the angustiden are so sharp and tough that they make light work of almost any material. When the angustiden makes a successful grapple attempt following the use of its grab ability, it automatically makes a sunder attempt against the armor worn by the creature grappled as a free action. Each round the grapple is maintained it makes another sunder attempt against its victim's armor."
      }
    }
  },

  "Hammerhead Shark": {
    source: "Tempest Rising",
    creatureType: "animal",
    shark: true,
    fish: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 4,
    hdVal: 8,
    cr: 3,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Keen Scent"
    ],
    speed: {
      swim: 60
    },
    abilities: {
      str: 21,
      dex: 16,
      con: 17,
      int: 1,
      wis: 16,
      cha: 6
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Initiative",
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
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any ocean",
    visualDescription: "Beneath this sleek gray shark's unusually shaped head, a disproportionately small mouth flashes with razor-sharp teeth.",
    description: "Hammerheads' heads give them a wider field of vision and allow them to pin prey to the seaf loor before devouring it.",
    organization: "solitary, pair, school (3-6), or pack (7-13)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 4
      },
      Swim: {
        ranks: 0
      }
    },
    special: {}
  },

  Helicoprion: {
    source: "Tempest Rising",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 8,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Keen Scent"
    ],
    speed: {
      swim: 60
    },
    abilities: {
      str: 25,
      dex: 18,
      con: 19,
      int: 3,
      wis: 12,
      cha: 4
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Great Fortitude",
        type: "General"
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
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "bleed"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate oceans",
    visualDescription: "This creature resembles an ordinary shark from tail to mouth, but the unusual shape of its lower jaw marks it as something else. A whorl of teeth spirals inward, tiny at the centre, but long and brutal farther out.",
    description: "The helicoprion is a bizarre beast to behold. The remarkable physiology of its mouth allows it to flick out its bottom jaw, unrolling the whorl of teeth and snaring prey along its length. As its powerful muscles roll its jaw, the prey becomes trapped in a spiral of ragged, brutal incisors. Once it has captured a hearty meal, the helicoprion retreats in a thickening cloud of its victim's blood to patiently await the slowing of struggles and the imminent demise of its dinner.",
    organization: "solitary, pair, school (3-5)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 8
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
      "whorled jaw": {
        type: "Ex",
        text: "When a helicoprion hits a Medium or smaller creature with its bite it can, as a free action, attempt to grapple and then pin that creature should the initial grapple be successful. Once the target is pinned, the helicoprion continues to do its bite damage (including bleed) for as long as it maintains the pin."
      }
    }
  },

  "Jigsaw Shark": {
    source: "Tempest Rising",
    creatureType: "animal",
    shark: true,
    fish: true,
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Blindsense 30 ft.",
      "Keen Scent"
    ],
    speed: {
      swim: 60
    },
    abilities: {
      str: 15,
      dex: 14,
      con: 13,
      int: 1,
      wis: 12,
      cha: 2
    },
    feats: [
      {
        name: "Improved Initiative",
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
    environment: "any ocean",
    visualDescription: "Jagged markings decorate the body of this human-sized shark. A multitude of stains on its large teeth tell of the frequency and ferocity with which it uses its bite.",
    description: "The fact that these sharks dwell in shallow coastal waters places them in direct contact with those making a living from the sea. It's not uncommon to hear stories of jigsaw sharks leaping from the water and taking out dockworkers or fishermen in small boats. Their patchwork coloration of browns and blue-grays partly inspires their name.",
    organization: "solitary, pair, school (3-6)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 2
      },
      Swim: {
        ranks: 0
      }
    },
    special: {}
  },

  "Ship In A Bottle": {
    source: "Tempest Rising",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 3,
    hdVal: 10,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 12,
      dex: 15,
      con: "-",
      int: 5,
      wis: 10,
      cha: 13
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Ram",
        name: "Ram",
        damage: "1d3"
      },
      {
        weapon: "Ballista",
        name: "Ballista",
        damage: "1d6"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "bludgeoning"
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "A model sailing ship in a display bottle the size of a boot sails the air on vaporous waves. Speckles of water move about the deck like a crew, arming a miniature ballista and preparing to take aim.",
    description: "A ship in a bottle signifies patience and devotion. Parts are assembled through an obstinate hole to create the illusion of something impossible. The average model maker devotes months of delicate handling and blinding eyestrain to its creation. Most ships in bottles are built by sea captains and modeled after their vessels. As the devotion of a captain to his ship compares to that of a marriage, a ship in a bottle could be seen as the offspring of that relationship. This devotion is palpable well beyond the Material Plane. Water sprites, tiny elemental spirits from the Plane of Water, see boats as perversions enabling landlubbers' insistence on venturing where they do not belong. These water spirits commandeer ships in bottles and sail them through the air to chase off the sailors who invade the high seas. Even if the ship in a bottle is destroyed, the water spirit at the helm claims victory, having effectively forced a captain to destroy his offspring. A ship in a bottle is about 1 foot long and weighs about 5 pounds. Ecology Model ships in bottles stand prominently on shelves in the quarters of captains and admirals, usually made to perfectly replicate their creators' ships. Once brought to life by a water spirit, a ship in a bottle maneuvers through the air on waves of mist. The strings of its miniature ballistae winch with enough tension to fire, and the water spirit turns a tribute into something that is both a weapon and a parody at once. Not all ships in bottles are captained willingly. Captains or admirals who desire more dramatic tributes to the ships they have commanded sometimes have mundane ships in bottles seemingly brought to life via magic. Through either great devotion or greater gold, they gain access to the magic necessary to bind water spirits to their model ships. The magic binding a water spirit to a ship in a bottle also enchants the elemental spirit into believing it is the captain and crew of a typical vessel. Magically bound water spirits follow the orders of either the caster who bound them or the maker of the ship in a bottle, treating him or her as their admiral. Habitat & Society A ship in a bottle's life is on the high seas, and its water spirit captain sets sail toward the nearest body of water. Its mission is to seek and destroy land creatures on the seas, and tales of ships in bottles' voyages rarely speak of glory. When a ship in a bottle manages to survive long enough to log journeys, what can be extrapolated from its miniscule logbook makes for fascinating insight into the elemental mind. The ways in which the water spirit captain justifies the world as seen from its viewpoint reads like a mix of mythology and a child's bathtime story. The spirit inhabiting this construct determines the nature of the crew and replicates tiny sailors on deck. These are solely to unnerve onlookers, as the spirit operates the ship in a bottle's sails and weaponry hydraulically. A water spirit magically bound to a ship in a bottle agains its will often crews the vessel with manifested sailors based on the bottle's owner, or his descriptions of the original ship's crew. A ship in a bottle sails alone only when it has no other choice, and usually welcomes the opportunity to join, form, or lead a fleet with other water spirits, flying tiny flags designed seemingly at random. Usually unbound water spirits captain all the ships in a bottled armada, although sometimes an unbound water spirit takes advantage of naive bound water spirits. A chance meeting between individual ships in bottles is not the only manner in which fleets form. Water spirits sometimes conspire to commandeer multiple ships in bottles together, and nautical museums have reported dozens of ships in bottles flying off shelves and out to sea. Construction A ship in a bottle can be created through a binding ritual undertaken by a powerful spellcaster. The ritual requires a masterwork model ship in a bottle that must be built from materials worth 100 gp, and DC 30 Craft (woodworking) skill checks made over 2 consecutive weeks. Alternatively, a masterwork model ship in a bottle can instead be purchased for the ritual, but it must be worth at least 600 gp. Ship in a Bottle CL 9th; Price 5,100 gp (5,600 gp) CONSTRUCTION Requirements Craft Construct, animate object, magic jar, suitable spirit of a living creature, 2 ranks in Craft (woodworking); Cost 2,600 gp (3,100 gp)",
    organization: "solitary, fleet (2-5)",
    languages: "understands Aquan and Common",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 6
      }
    },
    special: {
      "shatter spray": {
        type: "Ex",
        text: "The first time a ship in a bottle fires its ballista, rams a creature, or is dealt weapon damage, the bottle containing it shatters, spraying glass in a circle around it. All creatures in a 5-foot radius take 1d6 points of piercing damage. A successful DC 12 Reflex save halves this additional damage."
      }
    }
  },

  "Bottled Armada": {
    source: "Tempest Rising",
    creatureType: "construct",
    subTypes: [
      "swarm"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Tiny",
    hd: 8,
    hdVal: 10,
    cr: 6,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: 16,
      dex: 17,
      con: "-",
      int: 5,
      wis: 14,
      cha: 15
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      }
    ],
    attacks: [
      {
        weapon: "swarm",
        name: "swarm",
        specialAbility: "distraction",
        damage: "2d6"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "A fleet of miniature ships, each secure in a glass bottle, flies through the air. The ships move as one, coordinating their attacks.",
    description: "A ship in a bottle signifies patience and devotion. Parts are assembled through an obstinate hole to create the illusion of something impossible. The average model maker devotes months of delicate handling and blinding eyestrain to its creation. Most ships in bottles are built by sea captains and modeled after their vessels. As the devotion of a captain to his ship compares to that of a marriage, a ship in a bottle could be seen as the offspring of that relationship. This devotion is palpable well beyond the Material Plane. Water sprites, tiny elemental spirits from the Plane of Water, see boats as perversions enabling landlubbers' insistence on venturing where they do not belong. These water spirits commandeer ships in bottles and sail them through the air to chase off the sailors who invade the high seas. Even if the ship in a bottle is destroyed, the water spirit at the helm claims victory, having effectively forced a captain to destroy his offspring. A ship in a bottle is about 1 foot long and weighs about 5 pounds. Ecology Model ships in bottles stand prominently on shelves in the quarters of captains and admirals, usually made to perfectly replicate their creators' ships. Once brought to life by a water spirit, a ship in a bottle maneuvers through the air on waves of mist. The strings of its miniature ballistae winch with enough tension to fire, and the water spirit turns a tribute into something that is both a weapon and a parody at once. Not all ships in bottles are captained willingly. Captains or admirals who desire more dramatic tributes to the ships they have commanded sometimes have mundane ships in bottles seemingly brought to life via magic. Through either great devotion or greater gold, they gain access to the magic necessary to bind water spirits to their model ships. The magic binding a water spirit to a ship in a bottle also enchants the elemental spirit into believing it is the captain and crew of a typical vessel. Magically bound water spirits follow the orders of either the caster who bound them or the maker of the ship in a bottle, treating him or her as their admiral. Habitat & Society A ship in a bottle's life is on the high seas, and its water spirit captain sets sail toward the nearest body of water. Its mission is to seek and destroy land creatures on the seas, and tales of ships in bottles' voyages rarely speak of glory. When a ship in a bottle manages to survive long enough to log journeys, what can be extrapolated from its miniscule logbook makes for fascinating insight into the elemental mind. The ways in which the water spirit captain justifies the world as seen from its viewpoint reads like a mix of mythology and a child's bathtime story. The spirit inhabiting this construct determines the nature of the crew and replicates tiny sailors on deck. These are solely to unnerve onlookers, as the spirit operates the ship in a bottle's sails and weaponry hydraulically. A water spirit magically bound to a ship in a bottle agains its will often crews the vessel with manifested sailors based on the bottle's owner, or his descriptions of the original ship's crew. A ship in a bottle sails alone only when it has no other choice, and usually welcomes the opportunity to join, form, or lead a fleet with other water spirits, flying tiny flags designed seemingly at random. Usually unbound water spirits captain all the ships in a bottled armada, although sometimes an unbound water spirit takes advantage of naive bound water spirits. A chance meeting between individual ships in bottles is not the only manner in which fleets form. Water spirits sometimes conspire to commandeer multiple ships in bottles together, and nautical museums have reported dozens of ships in bottles flying off shelves and out to sea. Construction A ship in a bottle can be created through a binding ritual undertaken by a powerful spellcaster. The ritual requires a masterwork model ship in a bottle that must be built from materials worth 100 gp, and DC 30 Craft (woodworking) skill checks made over 2 consecutive weeks. Alternatively, a masterwork model ship in a bottle can instead be purchased for the ritual, but it must be worth at least 600 gp. Ship in a Bottle CL 9th; Price 5,100 gp (5,600 gp) CONSTRUCTION Requirements Craft Construct, animate object, magic jar, suitable spirit of a living creature, 2 ranks in Craft (woodworking); Cost 2,600 gp (3,100 gp)",
    organization: "solitary, fleet (2-5)",
    languages: "understands Aquan and Common",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 5
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 0
      }
    },
    special: {
      "shatter swarm": {
        type: "Ex",
        text: "Whenever a bottled armada fires its ballistae, swarms a creature, or is dealt weapon damage, one of the containing bottles shatters, spraying glass in a circle around it. All creatures in a 5-foot radius take 1d6 points of piercing damage. A successful DC 13 Reflex save (DC 13) halves the damage."
      }
    }
  },

  "Ship Sentinel": {
    source: "Tempest Rising",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 7,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Ship Sight"
    ],
    speed: {
      base: 30,
      swim: 30
    },
    abilities: {
      str: 19,
      dex: 21,
      con: "-",
      int: "-",
      wis: 23,
      cha: 16
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Spear",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Spear",
        specialAbility: "salted wound/x3",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "salted wound",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Spear",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Spear",
        specialAbility: "salted wound/x3",
        damage: "1d8"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "slashing or piercing"
      },
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any water",
    visualDescription: "A larger-than-life wooden carving of a mermaid holding a spear clambers forward, the vibrant paint coating her frame encrusted in years' worth of sea salt.",
    description: "Ship sentinels are animated constructs that are bound to a specific vessel and to that ship's captain. Crafted to resemble a humanoid figurehead, a ship sentinel normally rests at the prow of its ship, granting good fortune and protection to the crew. But in times of dire need, the captain can also activate the ship sentinel, causing it to spring to life and fight alongside the vessel's crew. Although individual features of ship sentinels may vary, all ship sentinels are made of wood and have the same general statistics. A ship sentinel stands roughly 6 feet tall and weighs 400 pounds. Ecology A ship sentinel's form is carved and shaped by skilled woodworkers, but cannot truly be brought to \"life\" without offerings from the sea. Most spellcasters who endeavor to create these guardians crush a mixture of sand, shells, and valuable pearls and mix it with saltwater and oils, creating a grainy varnish. The carved figure is coated with the solution and then brought to the shores of the sea and affixed to the bowsprit of the craft it will protect. Only then is the construct's creation finally complete. Unlike with most constructs, however, control of the creature does not fall to the creator, but rather to the captain of the ship to which it is affixed. If the captain of the ship changes, control of the construct passes to the new captain. Although resistant to most hazards of sea and storm, all ship sentinels eventually wear down after a time and require polishing, cleaning, and recoating with the specially prepared varnish used during the construct's creation. If maintained in this fashion, however, a single ship sentinel can guard a ship-passing from captain to captain-for decades or even centuries. Habitat & Society Ship sentinels are solitary creations, and a single construct is capable of defending even the largest of ships. Their presence is an undisputed boon to all aboard-though most captains prefer not to speak of their crafts' guardians, preferring to keep the constructs as secret weapons. When the sentinel is needed, the captain must shout a word or short phrase to bring the construct to life. An awakened ship sentinel is able to recognize loyal members of its crew, placing them under its protective wards, and directs its attacks against any living targets that it does not ward, though the construct's master can point it toward specific targets. In combat, ship sentinels can pulverize flesh and bone with their heavy wooden hands, but normally wield a weapon of some kind-usually a spear, rapier, shortsword, or other light weapon. Stories even exist of elven vessels that armed their ship sentinels with huge bows, or of daring Brevic sea captains who gave their constructs the fabled Aldori dueling swords of their homeland. Regardless of these variations, most weapons used in a ship sentinel's construction draw upon the construct's inherent nimbleness, an agility belied by the figurehead's wooden form. But whether their weapons are forged or natural, all ship sentinels can infuse the sting of seawater and salt air into their blows, wracking their foes with crippling pain. Ship sentinels are resilient foes, their wooden bodies capable of turning aside most attacks that cannot pierce or gouge them. Unfortunately their construction also makes them vulnerable to fire-their greatest weakness-and any magical fire quickly dries a ship sentinel's body to a nearly immobile brittleness. Variant Ship Sentinels Ship sentinels can be crafted in a wide variety of forms and are often embellished and customized similarly to mundane figureheads. The following are some of these constructs' most common customizations. Ballista Marksman: Some ship sentinels have a light ballista built into their forms; these sentinels are usually designed to look like an archer with an oversized bow, a beauteous lillend, or a cruel erinyes. Such ship sentinels rarely have a melee weapon, resorting instead to slams if unable to use their ballistae to make ranged attacks. Statistics for ballista marksmen are modified as follows: Ranged light ballista +12 (3d8+0/19-20 plus salted wound). See Chapter 3 of Pathfinder RPG Ultimate Combat for additional details on siege engines. Mariner's Muse: Sculpted to resemble harp-playing angels or armored heralds, a mariner's muse ship sentinel can use the inspire courage effect of a bard's bardic performance once per day for 5 rounds as if it were a 5th-level bard. It always uses all 5 rounds of its performance at the same time and can never use the performance multiple times in 1 day for any duration. Sea Sorcerer: These ship sentinels are often crafted to resemble wizards, sea serpents, or abstract orrery-like sculptures, and possess limited spell-like abilities. They can only use these abilities while onboard a sailing vessel. These spell-like abilities can each be used 3 times per day, and include animate objects, grease, and obscuring mist. Construction A ship sentinel is built from 400 pounds of wood. The creator or a hired artisan must then shape the creature into the desired likeness, usually after a fashion common to the nautical vessels of the region. Afterward, a special varnish is made from a mixture of sand, seawater, crushed pearls and shells, and magically treated oils- the varnish is worth a total of 250 gp and is applied to the entire form. If the creator intends for the ship sentinel to wield a weapon, a masterwork or better version of that weapon must also be supplied. Ship Sentinel CL 9th; Price 21,250 gp; 21,750 gp (ballista marksman); 23,250 gp (mariner's muse); 25,250 gp (sea sorcerer) CONSTRUCTION Requirements Craft Construct, animate object, limited wish, creator must be caster level 9th; Craft (woodworking) check DC 25; Cost 10,750 gp; 11,000 gp (ballista marksman); 11,750 gp (mariner's muse); 12,750 gp (sea sorcerer)",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "salted wound/x3": {
        type: "Ex"
      },
      "salted wound": {
        type: "Su",
        text: "Any living creature damaged by a ship sentinel must make a successful DC 16 Fortitude save or take a -1 penalty on attack and damage rolls for 1 round as salty brine drips painfully onto the wound. On a successful critical hit, the target takes an additional 3d6 points of damage as its flesh cracks and withers from dehydration. The save DC is Charisma-based. Ship Sight (Su) A ship sentinel is treated as having Tremorsense out to 100 feet while onboard a ship, as its senses permeate the vessel's timbers. It can only detect creatures in contact with the vessel or on objects in contact with the vessel. It cannot use this ability to detect creatures not in contact with the ship, even if they are within the ability's 100-foot radius."
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

  "Voidstick Zombie": {
    source: "Tempest Rising",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 15,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Lifesense 60 ft"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 12,
      dex: 11,
      con: "-",
      int: 7,
      wis: 6,
      cha: 15
    },
    feats: [
      {
        name: "Channel Smite",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Channel",
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
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Stealth",
        choiceSource: "Skill Focus"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Melee touch",
        name: "2 Melee touch",
        damage: "1d8"
      }
    ],
    defense: {
      naturalArmor: 12
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This shambling humanoid's taut gray skin shows signs of arcane symbols now faded with age and decay. Long, darkwood spikes riddle its body; every inch of flesh is staked and violated. A palpable aura of entropy and despair hangs over the sorry, perforated creature.",
    description: "The voidstick zombie is the hateful creation of wicked shamans and necromancers, who use voidsticks to animate the dead. One voidstick is required for every Hit Die possessed by the base creature. These vile devices, each of which is 6 to 10 inches in length, are pierced through the living or dead body of a creature, pumping the dark energy of the void into its form. Packed with the bitter entropy of negative energy, the creature rises, seeking out the life force of others with endless sadness and insane determination. Its single goal is to extinguish life and smother any source of positive energy. Multiple voidsticks in a creature's form feed one another, augmenting their standard abilities and imbuing the touch of the voidstick zombie with the power to drain life from anything it touches. The zombie becomes almost a sliver of the void itself, existing in a state of such negative power that its very proximity can tamper with other creatures' abilities to summon the powers of the Positive Energy Plane, and with the perpetual sadness that numbs its own intellect it gains the power to enhance and influence other creatures that depend on negative energy. These sad creatures, wracked with soulless negative energy, constantly hunger for destruction, delighted at every chance they get to snuff the spark of life from the living. They hunt the islands throughout the Shackles, especially the Cannibal Isles, where their creation began long before its current inhabitants made their home there. As the brutal and savage kuru people of the Cannibal Isles explored the ruins of Ghol-Gan, they discovered the foul magic involved with the voidsticks, and as they turned to barbarism and cannibalism, their shamans carved these devices and created the first voidstick zombie seen on Golarion in thousands of years. The kuru use voidstick zombies for war against each other and to serve as ruthless hunters, culling humanoids who wander too close to their blood-drenched islands. Kuru shamans create the vile voidsticks in order to enhance their own necromantic strength as well as to animate voidstick zombies. In some tribes it is seen as a great honor to be transformed into one of these powerful creatures, and some aged shamans on the eve of their death elect to undergo this transformation instead of becoming a ritual meal for their tribes. Since the rediscovery of voidsticks, those interested in necromancy and the creation of new undead have sent emissaries to the Shackles eager to buy them. These enterprising necromancers experiment with the devices and unleash voidstick zombies into Avistan and Garund to fulfill their murderous intent. Voidsticks In remote parts of the world, it is not always practical for the faithful to visit holy places with any regularity. In particular, the weak, the sick, and the dying may be in no position to trek across plains or risk dangerous water crossings to see their spiritual leaders. In response to this, the godstick was born-a crafted rod that serves as a portable shrine, carried by shamans and witchdoctors and pushed into the ground to focus devotion at any location. Ingenuity is not just the way of the benign, however, and just as often it is the way of evil. Before long, shamans who worshiped more hateful deities corrupted this notion; they created the voidsticks and drove them into bodies, living or dead, charging those bodies with the power of the endless void and creating rattling, hungry abominations. Voidstick Aura faint necromancy [evil]; CL 5 Slot special; Price 2,500 gp, Weighs 1 lb. DESCRIPTION Each voidstick is 6 t0 10 inches long, with a diameter of about an inch. Carved from single pieces of polished darkwood, they often display markings or symbols sacred to the deity of their creator, but can just as easily be plain and smooth. Planting a voidstick into the ground with an appropriate prayer is a full-round action that provokes attacks of opportunity. The device floods the area with negative energy, producing an effect identical to the desecrate spell in a 20- foot radius. In addition, any evil divine caster within 20 feet of the voidstick may cast her spells without the need for any material component with a value of 10 gp or less, or any focus item with a value of 50 gp or less. This ability functions only for the individual planting the voidstick and persists until the stick is uprooted. While this is a useful tool for shamans in locations poorly serviced by trade in magical goods, it pales in comparison to the voidstick's most potent function: the creation of undead. Creating a voidstick zombie requires an hour-long ritual during which foul symbols are drawn across a corpse's flesh. At the end of the hour, the creator must make a DC 25 Knowledge (religion) check before driving the first voidstick into the victim's heart. If this check succeeds, the victim is transformed into a voidstick zombie. To fully animate the creature, one voidstick must be used for each Hit Die the base creature has. In 12 rounds, the creature rises under its own power, eager to spread its negative energy and snuff out life nearby. Undead created using voidsticks are not under the control of their creator but can be commanded using channeled negative energy, spells, or similar effects. Voidsticks can also be driven into a living body to slay the creature and transition it to undeath. If a living body is used, the creature must be pinned or otherwise helpless for the duration of the entire ritual. When the ritual is complete and the first voidstick is inserted, the creature must make a DC 18 Fortitude save. If this save succeeds, the creature is reduced to 0 hit points and is dying, but the magic of the voidstick and the ritual are wasted and the ritual must be performed again, using another voidstick. If the save fails, the creature dies and the ritual is successful, transforming the base creature into a voidstick zombie. Undead that contain such an item benefit from the +2 bonus hit points per Hit Die for having been created in the area of an enhanced desecrate spell. CONSTRUCTION Requirements Craft Wondrous Item, animate dead, desecrate; Creator must have 5 ranks in Knowledge (religion). Cost 1,750 gp",
    organization: "solitary, pair, or plague (3-9)",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 9
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "channel negative energy 5/day": {
        type: "Ex",
        preText: "DC 22, 8d6"
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      },
      "sacrilegious aura": {
        type: "Sp",
        text: "The overwhelming entropic energies and the sheer number of voidsticks animating the voidstick zombie warp and augment negative and positive energy around the creature. As with all voidsticks, an aura of intense negative energy extends in a 30-foot radius from the zombie functioning as the spell desecrate. Undead within this aura receive a +1 profane bonus on attack and damage rolls and the DC to resist channeled negative energy increases by +3. The voidstick zombie constantly gains the benefits of this effect (the attack and damage bonuses are already incorporated into its statistics). In addition, this miasma of void energies also interferes with wielding positive energy. Any creature attempting to use positive energy in this area-such as through a cleric's channel energy ability, a paladin's lay on hands, or any spell with the healing descriptor-must make a DC 25 concentration check. If this check fails, the effect is blocked, consuming one use of the ability, or the spell is lost."
      }
    }
  },

};