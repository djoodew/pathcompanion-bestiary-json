
export const From_Hell_s_HeartCreatures = {
  Ifestus: {
    source: "From Hell's Heart",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Colossal",
    hd: 23,
    hdVal: 10,
    cr: 23,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 60
    },
    abilities: {
      str: 47,
      dex: 14,
      con: 40,
      int: 19,
      wis: 21,
      cha: 24
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Greater Vital Strike",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Improved Sunder",
        type: "Combat"
      },
      {
        name: "Improved Vital Strike",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Staggering Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Warhammer",
        enchantments: [
          {
            name: "Enhancement Bonus +3",
            source: "inherent"
          },
          {
            name: "Anarchic",
            source: "inherent"
          }
        ],
        name: "Warhammer",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to aging, death effects, disease, fire"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "good and lawful"
      },
      SR: {
        value: 34
      },
      naturalArmor: 26
    },
    space: "30 ft.",
    reach: "30 ft.",
    environment: "any",
    visualDescription: "No description given",
    description: "Ifestus found his way to Golarion thousands of years ago. He separates his time between catastrophic destruction and millennia-long slumbers in the molten bowels of the planet. A patient being, he uses his special ability to seek solitude in magma chambers, in massive volcanoes, and along the edges of grinding tectonic plates. It's rumored that many of Golarion's greatest earthquakes and volcanic eruptions were either facilitated by or witnessed by Ifestus. He was slumbering in a great volcano in Casmaron when Earthfall struck, and wandered the surface of the planet for a decade thereafter before finally settling into Mount Keeba. Quiet for thousands of years, Ifestus now rumbles and stirs.",
    organization: "unique",
    languages: "Abyssal, Celestial, Common; telepathy 300 ft.",
    gear: "+3 breastplate, +3 anarchic warhammer",
    spellLikeAbilities: [
      {
        name: "air walk",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "detect thoughts",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "spell turning",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "break enchantment",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "sending",
        casterLevel: 20,
        timesPerDay: -1
      },
      {
        name: "earthquake",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "scrying, greater",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "heal",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "suggestion, mass",
        casterLevel: 20,
        timesPerDay: 3
      },
      {
        name: "meteor swarm",
        casterLevel: 20,
        timesPerDay: 1
      },
      {
        name: "regenerate",
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
        ranks: 10
      },
      Craft0: {
        subSkill: "any",
        ranks: 16
      },
      Diplomacy: {
        ranks: 14
      },
      "Disable Device": {
        ranks: 18
      },
      Intimidate: {
        ranks: 26
      },
      "Knowledge (engineering)": {
        ranks: 20
      },
      "Knowledge (geography)": {
        ranks: 16
      },
      "Knowledge (planes)": {
        ranks: 18
      },
      Perception: {
        ranks: 23
      },
      "Sense Motive": {
        ranks: 20
      },
      Survival: {
        ranks: 20
      },
      Swim: {
        ranks: 12
      },
      "Use Magic Device": {
        ranks: 23
      }
    },
    special: {
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d8+27",
        saveDC: 10
      }
    }
  },

  "Gigas Clam": {
    source: "From Hell's Heart",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Huge",
    hd: 13,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      swim: 60
    },
    abilities: {
      str: 28,
      dex: 10,
      con: 23,
      int: 7,
      wis: 18,
      cha: 11
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Siphon dart",
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
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Vital Strike",
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
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Dart",
        name: "Dart",
        specialAbility: "poison",
        damage: "1d4"
      }
    ],
    immunities: [
      "Immune to disease, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic and slashing"
      },
      naturalArmor: 18
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any oceans",
    visualDescription: "This monstrous clam's conjoined shells open wide enough to swallow a horse. Inside, two tubular siphons flank the thing's innards, which resemble a fleshy, vaguely humanoid woman, save that instead of a face, it has a singular massive maw filled with rows of ravenous teeth.",
    description: "Commonly found only in shallow beds of sediment on the ocean floor, the gigas clam is an unusual foe-one that often catches divers and sailors unaware when they mistake it for merely an oversized mollusk. Shining, misshapen barnacles cover a gigas clam's tough and distinctive shell, glittering nodes that attract curious fish toward the beast's side. Even larger predator fish such as marlins, tuna, and sharks can find themselves in the tightly clasped jaws of a gigas clam. Gigas clams are primarily sedentary monsters, content to lie in wait as prey inevitably wanders toward their seemingly harmless forms. Vast fields of the titanic bivalves can be found scattered along the ocean floor of the Inner Sea, feeding on fish and any debris that falls to the bottom, including shipwreck victims and castaways thrown overboard by pirates. If no food presents itself for some time, a bed of gigas clams either relocates or crawls toward land in search of a more dependable source of food. Gigas clams depart from their mostly passive hunting style once per year, when the bulging summer moon is at its fullest. Entire beds of the creatures propel themselves upward and burst through the surface of the water, attacking passing ships as well as coastal communities. During these times, gigas clams seek out their most favored prey: air-breathing humanoids. Using their powerful siphons to slam into passing merchant vessels and war galleons, the massive clams are indiscriminate in their search for humanoid flesh. Though they are normally hasty and seldom use tactics to obtain their prey, occasionally a lone gigas clam uses its feminine figure to trick unsuspecting ships into gigas clam-infested waters. The clam and its kin ruthlessly ram the vessel until its contents spill into the open water. Once trapped inside a gigas clam's quivering and contracting musculature, victims are almost certainly doomed, as the clam's acidic innards swiftly melt and destroy anything within. When engaged in melee, a gigas clam can strike with both its fleshy siphons as well as its terrible foot, which terminates in a toothy maw that can deliver devastating wounds. Since gigas clams openly attack land-dwellers only during 1 month out of the year, coastal communities and fisherfolk dwelling near gigas clam beds know to prepare their ships and docks for the deadly onslaughts of these creatures. But even the most formidable defenses are not enough to hold back great numbers of the clams, and most find it easier to simply avoid settling near gigas clam fields. Particularly bold monster hunters and sages travel throughout the Inner Sea during the summer in hopes of spotting the slimy beasts, using elaborate charts and maps listing past reports of the creatures to pick which areas to observe. A few whisper tales of immense magical pearls buried within the clams, which they postulate are responsible for the clams' increased size and intelligence. Others propose that the monsters absorb a portion of their victims' intelligence and memories while digesting them. Infamous Deeds Primarily encountered in the shallow depths of the Inner Sea and off the coast of western Garund, gigas clams leave a trail of destruction during their annual rampages, and have committed numerous deeds that prove them worthy of their notoriety. Humanoids living beneath the waves fear gigas clams as well-a field of the creatures destroyed the merfolk town of Selsurisa west of Absalom 10 years ago. The settlement had fought off the ravenous clams in years past, but the attack that devastated it was odd in that it took place during the region's cold season. The merfolk were thus unprepared when the beasts amassed and overran the town in a matter of hours. As the clams destroyed the town's sculpted caves and elegant spires, the merfolk sent waves of soldiers and giant crab companions to fight back, but their hasty defenses were no match for the sheer ferocity of the gigas clams. The merfolk have since relocated to other settlements around the Isle of Kortos, but have not forgotten the day of the attack, which many claim was inspired by fiendish sorcery not normally available to the gigas clams. Many of the merfolk still yearn to reclaim their overrun settlement, whose ruined towers and rubble-choked caves now serve as the breeding grounds for the brutal beings. In the early days of Bloodcove's founding, gigas clams found their way deep into the Fever Sea and settled in the Vanji River delta, where they feed on the plentiful fish and other sea creatures that travel downstream with the river's current. The mammoth clams posed a great threat to the fledgling Bloodcove's fragile trade and commerce, since few ships dared sail near the shallow delta in fear of surprise attacks by the unpredictable creatures. The pirates of the then-small port banded together and eventually defeated the beasts, but were unable to kill all of them. Some residents still worry that the clams might organize a retributive assault. Adventure Hooks Gigas clams tend to remain passive during the cooler months, but those who venture too close to their homes during the wrong season might run afoul of the giant mollusks. • A trio of scavenger ships recently returned from looting Azlanti ruins only to meet their fate at the hands of a gigas clam, which smashed the ships to pieces and littered their treasures all over the sea floor below. Only the captain and two sailors survived the ordeal; the captain wants to return and claim what's his, while his two crew members want to have nothing to do with the sea for a long while. • In response to sightings of a gigas clam breaching the water this past summer near Corentyn, the Chelish Navy issued notice of a substantial bounty on the strange beasts. Several folk plan to set sail to hunt the creature. One ship in particular is crewed entirely by tengus, who keep a mysterious contraption covered with oiled canvas on their ship's deck and guard it day and night.",
    organization: "solitary, cluster (2-5), or field (6-12)",
    languages: "Aquan",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 6
      },
      Swim: {
        ranks: 2
      }
    },
    special: {
      "devastating bite": {
        type: "Ex",
        text: "A gigas clam's bite attack threatens a critical hit on a roll of 19 or 20."
      },
      "siphon jet": {
        type: "Ex",
        text: "As a full-round action, a gigas clam can use its powerful siphon to move a creature or object at least one size smaller up to 20 feet directly away from itself or directly toward itself in a straight line. A creature trapped in this stream of water can avoid the push or pull with a DC 22 Reflex save. A gigas clam can also use this jet to propel itself up to five times its swim speed in a straight line, and can use its trample attack in conjunction with this increased movement. If at any point during this movement the gigas clam comes in contact with a solid object (such as a ship's hull), it deals 4d8 points of damage as it rams the object with its durable shell. The save DC is Constitution-based."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "4d8 acid damage",
        hp: "28 hp",
        AC: "AC 19"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d8+13",
        saveDC: 7
      },
      jet: {
        universalMonsterAbility: "Jet",
        distance: "300 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Siphon dart-injury; save Fort DC 24; frequency 1/ round for 6 rounds; effect 1d6 Str damage and paralysis; cure 2 consecutive saves. Siphon Dart (Ex) A gigas clam constantly rolls collected sediment and calcifications into needle-like darts it can eject through its siphons. A gigas clam can fire one of these darts as a standard action at a maximum range of 100 feet with no range increment, dealing an amount of damage equal to 2d6 plus its Strength modifier, and possibly poisoning the target.",
        saveDC: 12
      }
    }
  },

  "Ugash-iram": {
    source: "From Hell's Heart",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Colossal",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Low-Light Vision",
      "See in Darkness"
    ],
    speed: {
      base: 5,
      swim: 60
    },
    abilities: {
      str: 32,
      dex: 19,
      con: 26,
      int: 13,
      wis: 20,
      cha: 16
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Deadly Finish",
        type: "Combat"
      },
      {
        name: "Greater Disarm",
        type: "Combat"
      },
      {
        name: "Improved Disarm",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Stand Still",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Tentacle",
        name: "Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      naturalArmor: 22
    },
    space: "30 ft.",
    reach: "30 ft.",
    environment: "?",
    visualDescription: "This immense creature resembles a horrific, twelve-armed squid. Its emerald eyes burn with a terrifying malignance, and the thing has a fanged maw where its beak should be.",
    description: "South of Jalmeray, deep in the Yogisa Trench in the middle of the Obari Ocean, the terrifying gutaki known as Ugash-Iram lords over the underwater city of Achom. Ugash-Iram and its lesser kin practice foul rites and perform horrible rituals to honor their patron deity, Dagon, amid the city's strange and twisted spires, which rise out of a dark fissure in the seabed like claws climbing toward the surface. Crackling eruptions of magical energy brief ly illuminate the city in flashes of light, but it is otherwise as dark and lightless as the souls of its foul inhabitants. Because of its isolation in the deepest waters of the Obari Ocean, few surface-dwellers know of Ugash- Iram's existence, though those fisherfolk and sailors who've heard tales of the mighty being know to fear it. Locathah sages place the indomitable gutaki's age at over 3,000 years old, and dwellers in the underwater regions surrounding Achom have long loathed and feared Ugash-Iram, whose legions of devotees have spelled the ruin of countless aquatic cities. Ugash-Iram itself is responsible for destroying a dozen massive underwater cities in the past millennium, and the scattered ruins that lie around the Yogisa Trench serve as testament to its power. Those aquatic creatures Ugash-Iram doesn't outright annihilate are captured and integrated into Achom either as members of the slave caste or as converted devotees to Dagon. Entire tribes of sahuagin, adaros, and iku-tursos have united under the banner of Ugash-Iram and its gutaki kin in Achom, and the underwater metropolis bulges at the borders with the thousands of evil inhabitants who make their home there. These inhabitants raid for Ugash-Iram and populate its city, protecting Achom and performing all kinds of menial tasks for their overlord. With these minions, Ugash-Iram's deadly reach extends all the way to the surface of the Obari Ocean and even the nearby shores of Geb, Jalmeray, and Qadira. Isolated in its flooded metropolis beneath the sea, Ugash-Iram has plenty of resources, a generous life span, and thousands of minions at its disposal, making it a formidable foe for any who would seek to stop the despotic gutaki before its influence spreads even further. Infamous Deeds The legends of Ugash-Iram remain shrouded in mystery, since few aquatic humanoids have seen the monster, and fewer still have lived to tell the tale. Some claim that the gutaki gained its power by devouring other gutaki, gaining greater power and its array of 12 tentacles. One especially strange tale claims Ugash-Iram once captured a great kraken and imprisoned it deep in the gaping Yogisa Trench. Ugash-Iram is said to keep the behemoth perpetually on the brink of death-the gutaki and its minions carefully torture the kraken and subject it to grotesque experiments and disfiguring transformations. Just as gutaki were supposedly born when Dagon defeated the great kraken Kaktora, Ugash-Iram hopes that by subjecting its captured kraken to cruel experiments, it can create its own race of 12-tentacled followers. While ships crossing the middle of the Obari Ocean face all manner of risks, perhaps the worst is capture by Ugash-Iram's minions. Records tell of a combined effort by Ugash-Iram's adaro and sahuagin soldiers to capture a diplomatic fleet from Vudra some years ago. A dozen lucky sailors perished during the raid; the aquatic horrors captured everyone else, smearing them with a magical jelly that allowed them to breathe underwater and dragging them to Achom for torture, experimentation, and eventual sacrifice to their lord Dagon. Adventure Hooks Tracking Ugash-Iram down is not a task for the faint of heart, and those who do manage to find the vile underwater metropolis of Achom would do well to stay away. Despite the danger, adventurers might find any number of reasons to explore the foul settlement and face its cruel inhabitants. • A tribe of adaro aligned with Ugash-Iram of Achom threatens Vudrani vessels bound for Jalmeray. At risk of losing their precious cargo, merchants send word to ports along the Obari Ocean's shores, searching for a group to deal with the adaro threat and determine their true motives. • Tired of living in fear of Ugash-Iram, locathah, merfolk, cecaelias, and other non-evil aquatic creatures recently formed a congress to address the gutaki's tyranny. Legends tell of a magical device of unknown origin lost within the Obari Ocean south of Stonespire Island. Thought to be capable of blocking out mental domination-among other powers-this device would prove a great weapon in the fight against Ugash-Iram and the other denizens of Achom. The aquatic council has put out a great bounty for retrieval of the item.",
    organization: "?",
    languages: "Abyssal, Aquan, Common; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "disfiguring touch",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "freedom of movement",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "protection from energy",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "dominate monster",
        casterLevel: 15,
        timesPerDay: 1
      },
      {
        name: "rage",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 10
      },
      "Knowledge (geography)": {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 10
      },
      Perception: {
        ranks: 12
      },
      "Sense Motive": {
        ranks: 8
      },
      Stealth: {
        ranks: 0
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "savage bite": {
        type: "Ex",
        preText: "+20 melee, 4d8+11/18-20 plus poison"
      },
      "unholy blood": {
        type: "Ex"
      },
      jet: {
        universalMonsterAbility: "Jet",
        distance: "320 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 10
      },
      {
        damageType: "cold",
        value: 10
      }
    ]
  },

  Addu: {
    source: "From Hell's Heart",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 17,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      swim: 80
    },
    abilities: {
      str: 36,
      dex: 18,
      con: 25,
      int: 2,
      wis: 15,
      cha: 13
    },
    feats: [
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Claw",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Iron Will",
        type: "General"
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
        name: "Sickening Critical",
        type: "Combat"
      },
      {
        name: "Vital Strike",
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
        weapon: "Claw",
        name: "2 Claw",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to poison"
    ],
    defense: {
      naturalArmor: 18
    },
    space: "20 ft.",
    reach: "20 ft. (30 ft. with tail slap)",
    environment: "warm oceans",
    visualDescription: "Striped with the brilliant colors of a maritime sunset, this beast winds its enormous body through the waves, a pair of wiry, talon-tipped arms and a snout full of horrendous teeth preceding a fan of razorlike fins.",
    description: "As enigmatic as they are dangerous, addus hail from the most hellish corners of Golarion's deepest seas. Addu encounters are thankfully rare, but those who have faced one and survived tell tales of the beasts' unimaginable powers. As a result, merchant and pirate lookouts alike carefully watch the watery horizons for jagged, fiery-hued spines, which have come to signal seafarers' imminent doom. The colors of the tropical deep-simmering reds, yellows, and oranges-decorate addus' long, serpentine bodies. In addition to the ominous fins on their backs, smaller spines jut from addus' snouts, heads, and necks. Their short but powerful forearms can strip flesh from bone, especially when the beasts employ them alongside their barge-sized jaws, which bear teeth the length of daggers. With long tails that can sweep from the water with whiplike velocity, addus can reach up to 50 feet long and weigh up to 14,000 pounds. Ecology Legends claim that when Golarion was young, fissures in its deepest seaf loors began spewing noxious gases left over from the planet's formation. These geysers helped provide life-giving heat to the equatorial oceans, but also rendered small pockets of deep-sea waters uninhabitable. Golarion's thriving aquatic ecosystem pushed back, however, and from these poisonous environs emerged the hardy addus. The geysers nurtured and strengthened these enormous, tropically colored creatures, instilling in them a mindless cruelty and a voracious hunger for raw meat. Legends maintain early addus trolled the edges of their toxic haunts, harnessing the power of rip currents to kill any prey lurking within the tolerable waters beyond. Eventually, addus evolved to embrace the poison native to their homes, and even to expel it as a weapon, bringing instant death to any creature unlucky enough to inhale it. Experts are unsure just how the addus developed their hunting techniques-whether magically or through a fluke of nature-but all agree that nothing known to modern scholarship explains their deadly abilities. In time, the deep-sea creatures developed heightened instincts that kept them far away from the telltale haze of addus' watery lairs. It was then that hunger drove the beasts to establish hunting grounds in shallower waters. Their natural maliciousness led addus to fight among themselves until each survivor had enough space to roam and feed alone. Scholars believe that every few weeks, addus experience a blinding hunger that prompts them to turn the seas red with the blood of their meals, which often consist of hundreds of pounds of raw, still-twitching meat. Addus are known to feed on whales, giant squid, dire sharks and-when other prey is scarce-sea serpents. Tales of epic battles between addus and sea serpents exist among many seafaring nations, scaring children and serving as a warning to sailors. Even more terrifying, however, are rumors that claim addus periodically crave humanoid flesh, and will capsize ships as large as their own bodies to obtain just a few bites of this succulent treat. Scholars debate whether addus hunt ships or rather attack them by mistake, confusing the vessels' shadows with those of surfacing whales. Regardless, addus pose a major threat to any vessel that frequents the vast stretches of open water where these beasts tend to stake their claims. Habitat & Society Owing to their violent natures, addus are nearly always found alone. They are said to be most concentrated in Golarion's southern seas, where legends allege ancient, noxious underwater geysers once were plentiful. A particularly unsettling tale speaks of an area several hundred miles west of the Shackles archipelago where addus' hunting grounds perfectly abut one another like a deadly, invisible puzzle. Although an addu that intrudes on another's hunting grounds can most certainly expect to battle its fellow beast to the death, some pirate legends maintain that these creatures occasionally cooperate-when it suits them. For example, an Ollo-based pirate captain once claimed that after happening upon a vicious battle between two addus, his vessel came under attack when the beasts spotted his ship's sails. Once the pirates outran them, the addus turned on each other again, intent on settling their original quarrel. But given that survivors of addu attacks speak of the speed with which the creatures dispatch their targets, most old salts conclude the captain invented a compelling but ultimately fictitious tale. It's believed that no one has yet survived a battle involving more than one addu. Scholars believe that female addus typically patrol hunting grounds measuring only a few square miles, while male members of the species are more nomadic, often moving on to new territories every few weeks. This may explain the beasts' reproductive practices. Aquatic elves report that up to five times during the creatures' fertile years, female addus deposit groups of six to eight eggs at the edge of their hunting grounds. The eggs secrete the noxious fumes that lend addus their infamy, attracting any nearby males, which then fertilize them. Addlets (as their young are called) appear to be born into a state of frenzy, immediately initiating brawls among their siblings. As is fitting for such vicious creatures, only the strongest addlet of a litter survives to seek its own hunting grounds and wreak havoc on its own victims. Despite their violent tendencies, addus appear to be long-lived creatures. Native tales speak of single addus that have terrorized the same waters for up to 6 centuries. These stories say the longer addus live, the more they crave humanoid flesh-or the more they crave maritime battle, depending on the variety of the tale. Either way, some of these stories describe addus, wizened through millennia of survival, capsizing ships before their unfortunate crew members ever realize they're being targeted. Then, the tales claim, the ancient addus pluck their victims from the sea, stripping the flesh from their bones one by one and offering no mercy save the final rest of death.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 16
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      capsize: {
        type: "Ex"
      },
      "miasmic breath": {
        type: "Su",
        text: "Once every 1d4 rounds, an addu can exhale a 30-foot cone of poisonous breath. Creatures caught in the area must make a successful DC 25 Fortitude save or take 1d6 points of Constitution damage. This is a poison effect and the save DC is Constitution-based."
      },
      "rip current": {
        type: "Su",
        text: "An addu can stir the water in such a way that it creates powerful currents in its immediate area. As a move action, an addu can either push creatures and objects up to 30 feet away from it or draw creatures and objects within 30 feet toward it. Creatures and objects caught in the rip current can resist being moved with a successful DC 25 Reflex save. This ability can only be used in the water, and the save DC is Constitution-based."
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  "Faceless Whale": {
    source: "From Hell's Heart",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Colossal",
    hd: 16,
    hdVal: 10,
    cr: 15,
    racialFeatures: [
      "Blindsight 150 ft."
    ],
    speed: {
      base: 0,
      swim: 40
    },
    abilities: {
      str: 45,
      dex: 6,
      con: 30,
      int: 4,
      wis: 11,
      cha: 5
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Diehard",
        type: "General"
      },
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Overrun",
        type: "Combat"
      },
      {
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Power Attack",
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
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to sonic, gaze attacks, sight-based attacks, visual effects and illusions"
    ],
    defense: {
      naturalArmor: 30
    },
    space: "30 ft.",
    reach: "30 ft.",
    environment: "any water",
    visualDescription: "A deep groan at the edge of hearing precedes the appearance of this sightless leviathan, whose pallid body breaks the surface of dark waters without as much as a ripple.",
    description: "Called \"ansiktsloshvals\" in Aklo, and sometimes called \"Darklands whales,\" faceless whales are enigmatic predators of the Sightless Sea rarely encountered elsewhere on Golarion. Like cavefish, faceless whales lost their eyes and pigmentation from countless generations spent living and breeding in the lightless depths. The lack of pigmentation leaves the creatures' skin little more than a transparent, blubber-lined film, with pulsing veins and churning organs visible beneath the silvery membrane. Sailors' lore from the Sightless Sea claims a faceless whale's most recent meal shows through the taut skin of its belly. It is unknown precisely how long faceless whales have inhabited the Sightless Sea. Some legends claim faceless whales began their lives as normal toothed whales that washed into the Darklands during the cataclysm of Earthfall, if not long before. Darker tales contend the faceless whales were driven into the realm of Orv by a coven of powerful sea hags, who robbed the faceless whales of their sight when they refused to teach the hags their potent song. An adult faceless whale is 70 feet long and weights 90,000 pounds, though some specimens stretch these averages and grow half again as large. Ecology Faceless whales resemble the toothed whales common to the Arcadian Ocean in body structure, possessing a tapered mouth lined with stubby, conical teeth and a streamlined body. Lacking eyes, faceless whales depend totally upon their keen Blindsight to navigate, seek prey, and avoid the predations of the Sightless Sea's most horrific inhabitants. Faceless whales prefer to hunt near the bottom of the Sightless Sea, where crushing pressures and freezing temperatures nurture large, sluggish organisms with few places to hide, and where the whales find safety from other menacing predators. Because of the unusual and outright alien composition of the creatures found within the lowest depths, faceless whales developed indiscriminate appetites. A hungry faceless whale consumes virtually any living thing it can gulp into its jaws, including the plentiful aquatic aberrations. Faceless whales can remain submerged for hours at a time, diving to depths of over 7,000 feet. Faceless whales that survive to adulthood in the harsh conditions of Orv live 80 years or longer. As predators that spend the majority of their lives in the deepest waters, Darklands whales are rarely spotted. Those who sail upon the dark currents of the Sightless Sea and Lake Nirthran see these beasts only when the whales surface to breathe. When surfacing, a faceless whale breathes for minutes at a time, exhaling and inhaling massive volumes of air in great misty spouts. When a faceless whale finds prey it can easily outswim, it plunges downward with its mouth agape, snapping up the morsel before it can react. When pursuing larger or faster prey, the faceless whale becomes a persistence hunter, hounding its quarry at a deceptively leisurely pace. After what often proves to be days of dogged pursuit, the whale's prey becomes too exhausted to swim further. Before the quarry can marshal the last of its strength to defend itself, the faceless whale renders it helpless with a resonant song. When the faceless whale is not in combat, it uses this sonic attack to break through rock and gain access to new hunting grounds within Orv and beyond. Habitat & Society Faceless whales typically hunt and swim alone, except when prey is abundant. When hunting is favorable, faceless whales organize into pods led by the oldest (and typically largest) female. Pods are short lived, often forming only a handful of times within a faceless whale's lifetime. As such, males compete fiercely for breeding rights during these gatherings. Pods last only as long as prey sustains them. Once food becomes scarce, the pod disperses into the Sightless Sea, and individual whales brave the chill waters alone in search of richer hunting grounds. Mated pairs of faceless whales remain together only long enough to raise their first calf. This period of nurturing typically lasts no longer than 5 years-just enough time for the parents to teach a calf basic hunting strategies and witness its first unassisted kill. Afterward, the parents part ways, leaving the calf to mature to adulthood or perish in the uncertain depths of the abyss. A faceless whale spends the majority of its life in isolation, plumbing the depths of the Sightless Sea in search of prey, the occasional mate, and hunting grounds rich enough to support a temporary pod. When it makes such a discovery, a faceless whale circles the boundary of the new territory, calling out to its fellows with a groaning, dirge-like song that carries for leagues. Whalers who ply their trade upon the Sightless Sea listen for this dirge with fanatical obsession. Faceless whales provide numerous alchemical ingredients, and their bones and teeth make excellent weapons and armor. An adult faceless whale possesses enough of both to make a crew of whalers rich, provided they have the courage and skill to slay the creature. Though faceless whales prefer larger meals, they eagerly prey upon humanoids when other food is scarce. A sailor fallen overboard makes an easy snack for an adult or a full meal for a juvenile. Conventional wisdom claims that faceless whales consider seagoing vessels indigestible, but serpentfolk hiss tales of faceless whales of exceptional cunning that capsize or fracture ships and feast upon the drowning crews, plucking them from among the flotsam. On rare occasion, a faceless whale finds its way into the oceans of Golarion. Some believe the creatures possess an instinctive knowledge of hidden waterways linking the Sightless Sea to the world above (perhaps all that remains of the migratory instincts that once drove their cetacean ancestors). Those few faceless whales that venture beyond the Darklands typically do so only brief ly, breaching the surface on moonless nights just long enough to take in a breath of air free from the fetid staleness of Orv. Many sages postulate that the Sightless Sea is bottomless, its deepest trenches connecting to planes of primordial darkness where the pressure is capable of crushing living beings into stone. It is possible that the Sightless Sea is just one of many faceless whale hunting grounds. If this is the case, there is no telling what a faceless whale might bring up from the ebon depths.",
    organization: "solitary, pair, or pod (3-16)",
    languages: "Aklo (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 16
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      capsize: {
        type: "Ex"
      },
      "resonant song": {
        type: "Su",
        text: "As a standard action, a faceless whale can focus a 60-foot ray of sonic energy on a single target that deals 8d6 points of damage. This ray deals normal damage to objects, but is still subject to hardness. Alternatively, a faceless whale can blast this resonant energy in a 60- foot cone. Creatures in this area must succeed at a DC 28 Fortitude or be stunned for 1d4 rounds. Any submerged creature holding its breath must succeed at a second Fortitude saving throw at the same DC or it has its breath knocked out of it and instantly begins drowning."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "4d6 acid damage",
        hp: "24 hp",
        AC: "AC 25"
      },
      blind: {
        type: "Ex",
        text: "A faceless whale sees and senses exclusively through its Blindsight ability, which is based on sound and movement-beyond 150 feet, the whale is considered blind. A deafened faceless whale is effectively blinded as well. It is invulnerable to all sight-based effects and attacks, including gaze attacks."
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      }
    },
    resistances: [
      "blind"
    ]
  },

  Gargiya: {
    source: "From Hell's Heart",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 12,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 90 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      swim: 50
    },
    abilities: {
      str: 31,
      dex: 13,
      con: 23,
      int: 2,
      wis: 10,
      cha: 10
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Improved Bull Rush",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        damage: "1d6",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to fire"
    ],
    defense: {
      naturalArmor: 15
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "warm oceans",
    visualDescription: "With burning eyes and a snapping maw, this blood-red serpent rises from the ocean's depths. Sweltering heat radiates from its rippling scales.",
    description: "Crueler and more volatile than their sea-serpent cousins, gargiyas gravitate toward and sustain themselves on seismic hotspots. Far from being a danger to the beasts, these bubbling crevices spew a form of magma that imbues gargiyas with incredible abilities. From birth, gargiyas ingest magma bubbling up from the ocean floor. By the time they've reached maturity, the monsters develop a molten core in their gullets that allows them to call forth scalding heat at will. Gargiyas' aggressive tendencies toward seafarers have garnered them a well-earned nickname-\"boiler beasts.\" Gargiyas' affinity for all things volcanic has left a pattern of stippled crimson on their massive, snake-like bodies. The spiny frills jutting from their heads and necks resemble enormous, iron-forged blades, and hundreds of stubby appendages line the sides of their underbellies, wriggling ominously when the beasts rear from the sea. Of all the gargiyas' features, though, perhaps the most intimidating are their eyes and maws, which seethe with the light and heat of burning coals-particularly when the beasts are aggravated. Capable of slithering through water like an enormous python, a gargiya stretches 30 feet in length and weighs up to 5 tons. Ecology Legends of the seas say that early in gargiyas' existence, as the ocean floor around them shuddered and stretched, the warmth of the seas' burgeoning volcanoes fascinated the beasts. To the gargiyas, these seismic regions offered a siren call of safety, isolation and-unbeknownst to the animalistic creatures-power. While it's unclear just how it lends gargiyas such power, scholars agree that this magma serves as gargiyas' primary sustenance and as the source of their hyperthermal abilities. Scholars believe that as gargiyas became more adept at manipulating heat, they became more protective of the magma vents they call home. Whereas early legends speak of gargiyas that rarely surfaced, preferring to stay close to their volcanic lairs, modern stories tell of gargiyas that see any sentient creatures-even if they're sailing a mile away-as threats to be met head-on. The few sailors who have survived these encounters warn of gargiyas that actively patrol the waters surrounding their magma vents, surfacing at even the slightest sign of unlucky passersby. Apparently, to the gargiyas, any who venture near their precious lairs must covet them. Because of gargiyas' aggressiveness, a small subset of oceanic cartographers has devoted itself to recording the locations of their known lairs. These maps, available in many southern ports' markets, are popular among traders and pirates who wish to skirt fiery confrontation. However, in testament to the cutthroat competition between many port merchants, it's not unheard of for these maps to contain \"mistakes\"-oversights built into the guides by their previous owners, hoping to lure rivals to horrific doom, or protect favored shipping lanes. Despite gargiyas' destructive reputations, some Golarion cultures revere their molten cores as a symbol of status and wealth. Taldans, in particular, are drawn to the cores' seductively mysterious glow. The richest Taldan patriarchs often believe owning such a rare treasure-and showing it off, of course-is a worthy life goal. Careless of the risks gargiya hunts entail, these patriarchs sometimes sponsor teams of adventurers to quest for these cores. Most of these expeditions end in bloody and burning tragedy, but to some hardy sea-goers, the potential rewards of glory and riches are too alluring to resist. Habitat & Society Gargiyas mostly live alone near major archipelagos with abundant volcanic activity. They are most numerous in the isolated waters surrounding the Shackles, though scattered sightings have been reported throughout Golarion's warmer seas. There is a significant concentration of gargiyas near the Smoker where magma seeps up from the sea floor, and also talk of a stretch north of Shark Island where gargiya lairs speckle the ocean floor by the dozens. No one knows, however, whether this latter story is true or rather was concocted to deter authorities from the hideouts of buccaneers who roamed the islands before the sahuagin staked their claim there. Gargiyas do not typically share their homes with others of their kind. However, sailors have told stories of defeating a gargiya after a long and brutal struggle only to come face to face with another one-ostensibly coming to its kin's aid. The question of whether these tales are simple exaggerations or evidence of gargiya collaboration has prompted many a fistfight in portside taverns. How well these braggarts fare in such brawls often indicates whether they're capable of the outlandish adventures they so boldly claim. Although tales of collaborating gargiyas are unsettling enough, even more sinister rumors have surfaced from seafarers who dare to brave the Eye of Abendego. There, the tales say, the turbulent seas beneath Golarion's permanent hurricane hide groups of gargiyas whipped into a frenzy by the tempest that followed Aroden's death a century ago. According to legend, these gargiyas roam the entire area of the Eye as predators, ambushing ships and boiling their crews in the ocean's salty waters. It is said that they decorate their volcanic lairs with their victims' bones, hinting that gargiyas possess an intelligence beyond that of mere animals. Unlike many reptilian creatures, gargiyas birth their young live. Scholars agree that, typically, male and female gargiyas come together to breed every decade or so. Afterward, the beasts abandon each other. When the female returns to her lair, she is thought to consume large amounts of magma while her single snakeling gestates, usually for a period of about 10 years. When giving birth, the gargiya expels her offspring into a magma-spewing fissure, where it grows and gathers strength until it leaves to find its own home. Although there is some debate about gargiyas' longevity, scholars believe they typically live around 300 years. Rumors, however, speak of gargiyas that have lived much longer-perhaps even predating modern civilization-but if any have encountered such an ancient terror and survived, they have never surfaced to tell the tale.",
    organization: "solitary or shoal (2-3)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 3
      },
      Stealth: {
        ranks: 8
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "boiling seas": {
        type: "Ex",
        text: "Once per minute, a gargiya can concentrate the heat within its body, causing seawater in a 20-foot radius to boil for 1d6 rounds. All creatures caught in this boiling seawater take 4d8 points of fire damage. Creatures spending 2 or more consecutive rounds subjected to this damage must succeed at a DC 22 Fortitude save or fall unconscious. The save DC is Constitution-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "3d6+12"
      },
      "dying gasp": {
        type: "Su",
        text: "When a gargiya is killed, it disgorges from its gullet the molten boulder that heats its body. Its fiery death throes deal 6d6 points of fire damage to all creatures within a 20-foot-radius burst. A DC 22 Reflex save halves this damage. The save DC is Constitution-based."
      },
      "scalding scales": {
        type: "Ex",
        text: "A gargiya generates such intense heat that anything touching it takes 2d6 points of fire damage. Creatures striking a gargiya with natural attacks or unarmed strikes are subject to this damage. Any metal weapon striking a gargiya must succeed at a DC 22 Fortitude save or melt, gaining the broken condition. A metal weapon that fails a second save is destroyed. Wooden weapons are destroyed after only one failed save. The save DC is Constitution-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Kronosaurus: {
    source: "From Hell's Heart",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 12,
    hdVal: 8,
    cr: 10,
    racialFeatures: [
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      swim: 60
    },
    abilities: {
      str: 36,
      dex: 13,
      con: 24,
      int: 2,
      wis: 13,
      cha: 9
    },
    feats: [
      {
        name: "Endurance",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
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
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
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
      naturalArmor: 16
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "warm oceans",
    visualDescription: "This enormous, finned reptile has a long mouth full of sharp teeth and moves through the water with incredible speed.",
    description: "The mighty kronosaurus is a relentless hunter that, once it picks up a potential meal's scent, rarely stops seeking its prey until its appetite is sated. A kronosaurus's diet consists of everything from large fish and sharks to small whales, giant squids, and sea turtles. Remains of other giant saurians have reportedly been found in the stomachs of those rare kronosauruses that are killed by hunters or wash up dead on shore. Unlike other reptiles, a kronosaurus does not lay eggs, but instead births its young live. The young kronosauruses stay with their mother for less than a year before parting ways and hunting on their own. A fully grown kronosaurus can reach lengths of up to 50 feet and weigh as much as 40,000 pounds.",
    organization: "solitary, pair, or school (3-8)",
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
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "3d6+12 damage",
        hp: "13 hp",
        AC: "AC 18"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Nothosaur: {
    source: "From Hell's Heart",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 6,
    hdVal: 8,
    cr: 5,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      swim: 40
    },
    abilities: {
      str: 23,
      dex: 12,
      con: 18,
      int: 2,
      wis: 15,
      cha: 7
    },
    feats: [
      {
        name: "Multiattack",
        type: "Monster"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
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
        damage: "1d6",
        type: "secondary"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any water",
    visualDescription: "This long-necked reptile swims through the water propelled by four paddle-like feet, whipping a long and slender tail behind it as it gnashes its sharp, needle-like teeth.",
    description: "The nothosaur resembles a smaller version of the land-based brachiosaurus, sharing the distinctive long neck and tail and short legs of its herbivorous brethren. Nothosaurs are also similar in many ways to seals-they spend much of their time in the water, including when they hunt, but emerge to sleep and breed on land. They lay their eggs in massive sandy mounds in the summer, then abandon their nests and slip back into the sea. A nothosaur is most vulnerable out of the water, but when caught unawares, it can return to the water with alarming speed, notwithstanding its awkwardly short legs and disproportionately large neck and tail. Nothosaurs can exist in water of any temperature, but prefer the warmer equatorial waters. Herds of nothosaurs make seasonal migrations, following schools of fish over the course of many months. From head to the tip of its tail, an adult nothosaur is 12 feet long and weighs 3,000 pounds.",
    organization: "solitary, pair, or herd (3-12)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 6
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      sprint: {
        type: "Ex",
        text: "Once per minute, a nothosaur may sprint, increasing its land speed to 40 feet for 1 round."
      }
    }
  },

  Zeuglodon: {
    source: "From Hell's Heart",
    creatureType: "animal",
    dinosaur: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Gargantuan",
    hd: 11,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      swim: 60
    },
    abilities: {
      str: 37,
      dex: 18,
      con: 22,
      int: 1,
      wis: 13,
      cha: 6
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
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
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Run",
        type: "General"
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
      naturalArmor: 14
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "warm oceans",
    visualDescription: "This elongated, whale-like creature moves through the water with an eel-like motion despite its wide, fluked tail. Razor-sharp teeth fill its almost reptilian mouth.",
    description: "The primordial zeuglodon is often mistaken for a dinosaur or other large reptile, in part because of its almost crocodilian mouth as well as its snake-like elongation. Despite these features, it is more closely related to whales and other cetaceans than either aquatic reptiles or fish. A zeuglodon moves through the water with a vertical anguiliform (eel-like) motion that seems almost to be a primitive version of the efficient fluke-driven locomotion of its cetacean relatives. Zeuglodons breathe air through blowholes on the tops of their heads, though they lack the lung capacity to stay underwater for as long as their more evolved kin. The relative dimensions of their angular heads are too small to encase the enlarged brains or melons developed by other cetaceans for echolocation or communication with others of their kind, and as such zeuglodons are less social than whales and dolphins. What they lack in specialized anatomy, however, they make up for in sheer ferocity and speed. A hunting zeuglodon is a furious foe to contend with. An adult zeuglodon measures around 50 feet long and weighs upward of 50,000 pounds.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 8,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Swim: {
        ranks: 3
      }
    },
    special: {
      thrash: {
        type: "Ex",
        text: "A zeuglodon grappling a foe can thrash its body back and forth rapidly, dealing extra damage due to the violent motion of its whipping head. This attack deals 4d8+19 points of damage, but allows the grappled creature a free attempt to escape the grapple. If a creature escapes, it is thrown 30 feet in a random direction by the zeuglodon's erratic thrashing."
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};