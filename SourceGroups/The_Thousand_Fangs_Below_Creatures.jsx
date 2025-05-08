
export const The_Thousand_Fangs_BelowCreatures = {
  Inkanyamba: {
    source: "The Thousand Fangs Below",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 17,
    hdVal: 10,
    cr: 13,
    racialFeatures: [
      "Darkvision 120 ft.",
      "Scent",
      "Venomsense"
    ],
    speed: {
      base: 60,
      swim: 60
    },
    abilities: {
      str: 34,
      dex: 17,
      con: 20,
      int: 13,
      wis: 17,
      cha: 20
    },
    feats: [
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Dodge",
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
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Spring Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Bite",
        name: "Bite",
        specialAbility: "grab, poison",
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
      "Immune to electricity, poison"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      naturalArmor: 18
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "tropical rivers and lakes",
    visualDescription: "This monstrous serpent rises to a great height, unfurling an opalescent hood the size of a tower shield. Swaying from side to side, the creature drops open its elongated jaw to reveal an assortment of different-sized fangs. As it hisses, lightning slashes the storm-gray sky behind it.",
    description: "Sometimes called elder serpents, inkanyambas are enormous, malevolent snake-like creatures that dwell in tropical lakes and deep jungle rivers. Measuring over 60 feet long and weighing nearly 3,000 pounds, an inkanyamba resembles a dense snake with a vaguely crocodilian head, filled with multiple sets of fangs of varying lengths. Its long body is covered in multicolored scales that range from emerald green to golden and even vermilion. Males have larger hoods than females, who also have small, pointed frills running the length of their bodies. Inkanyambas live for centuries; their maximum possible lifespan is unknown. Ecology Larger than the biggest constrictors and possessing more venom than a hundred asps, the inkanyamba combines the deadliest and most efficient predatory traits of serpentkind with a diabolical intelligence. Able to attack from the water or the land, an inkanyamba is always the top predator in its region, capable of devouring prey as large and formidable as rhinos, dire crocodiles, and even elephants. Sages once thought that the inkanyamba's elongated head was evidence of the creature being crossed with some other species, suggesting magic in the inkanyamba's origin. In reality, the inkanyamba's long skull is necessary to house the numerous glands storing the creature's venom. Once thought to be a shifting, mutating poison, the inkanyamba actually carries several different toxins in its body, each type linked to a different set of fangs within the creature's mouth. Making this ability even more potent, all inkanyambas have a latticework of small sensory organs inside their mouths and throughout their bodies in the small spaces between scales. When an inkanyamba makes physical contact with a living creature, these sensory organs detail the target's physiology in a manner that allows the inkanyamba to know which of its many types of venom would be deadliest. Additionally, special ducts on the inside of the inkanyamba's frontmost fangs allow the creature to spray gouts of venom up to great distances. Although an inkanyamba can only spit a single life-sapping venom, this spray needs only to make contact with a target to take effect and can blind victims caught in its blast. Even without their fabled variety of poisons, inkanyambas are capable predators. When an inkanyamba unfurls its massive hood and sways back and forth, a scintillating pattern of multi-hued scales on the inside of the creature's neck can cause a hypnotic state in those that observe it. Inkanyambas often use this ability to approach targets on land or when confronted with multiple enemies. Once a target has been bitten, an inkanyamba can throw the rest of its body forward like a coiled rope, biting and then wrapping the victim in the creature's crushing body. Inkanyambas dwell near large lakes and deep rivers. Such locations not only allow them to attack from the cover of water, but inkanyambas also lair in underwater caves where pockets of air have become trapped. Such nests are inaccessible to most intruders and allow the great serpents to slumber safely after gorging themselves. Habitat & Society Inkanyambas are solitary creatures except for the brief couplings that occur during mating. They favor areas that are populated by both animal life and human settlements. Pathfinders chronicling the history of the Mwangi Expanse have recounted instances of human and lizardfolk tribes alike revering inkanyambas as gods. In such cases, the monsters use their ability to control the weather and call up storms to create false portents that instill awe in the local inhabitants, extorting offerings and even living sacrifices from their terrified \"subjects.\" Cruel, malicious, and accustomed to being worshiped, inkanyambas are likely to attack anything they perceive as a threat. When facing well-prepared or powerful opponents, inkanyambas retreat deep beneath the closest body of water to exert their control over weather, using high winds to ground airborne opponents and thunderstorms to bolster their ability to summon lightning. If threatened, inkanyambas prefer escape to surrender, but some have been known to parlay with powerful groups of adventurers, usually to help the serpent acquire an item that it cannot gain for itself. Such offers, however, are never genuine, as all inkanyambas seek only their own selfish ends. In the depths of the Mwangi Expanse, the Zenj have a saying: \"Speaking to an inkanyamba only gives it time to encircle you.",
    organization: "solitary or pair",
    languages: "Aquan, Common, Draconic",
    spellLikeAbilities: [
      {
        name: "call lightning",
        casterLevel: 17,
        timesPerDay: 1
      },
      {
        name: "control weather",
        casterLevel: 17,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 8
      },
      Intimidate: {
        ranks: 7
      },
      Perception: {
        ranks: 10
      },
      "Sense Motive": {
        ranks: 9
      },
      Stealth: {
        ranks: 6
      },
      Swim: {
        ranks: 10
      }
    },
    special: {
      "breath weapon": {
        type: "Ex",
        text: "Once every 1d4 rounds, an inkanyamba can spit a 60-foot line of venom at its foes as a standard action. Any creatures struck must make a DC 23 Reflex save or take 1d4 points of Constitution damage and be blinded for 1d6 rounds. A successful save halves the Constitution damage (minimum 1 point) and negates the blindness."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "4d8+12"
      },
      "hypnotic sway": {
        type: "Su",
        text: "As a full-round action, an inkanyamba can unfurl its hood and sway back and forth. Any nonmindless creature within 30 feet that views an inkanyamba's hypnotic sway must make a DC 23 Will save or be fascinated for 1d4 rounds. Any attack by the inkanyamba breaks the fascination effect. Any creature that successfully saves or has the fascination effect broken cannot be affected by the same inkanyamba's hypnotic sway for 24 hours."
      },
      "protean venom": {
        type: "Ex"
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "An inkanyamba's body contains a host of different venoms. Once per round as a swift action, it can change which ability score its poison affects. Vacillating Venom: Bite-injury; save Fort DC 23; frequency 1/round for 4 rounds, effect 1d4 ability damage, cure 1 save. The save DC is Constitution-based. Venomsense (Ex) An inkanyamba that makes physical contact with a living creature through either its bite, tail slap, or constriction ability gains an automatic knowledge of the target's ability scores, allowing the inkanyamba to better use its protean venom on its victims.",
        saveDC: 10
      }
    }
  },

  Umdhlebi: {
    source: "The Thousand Fangs Below",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 17,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 30,
      dex: 13,
      con: 20,
      int: 9,
      wis: 12,
      cha: 15
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
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
        name: "Improved Trip",
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
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slam",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic slashing or bludgeoning"
      },
      naturalArmor: 18
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "tropical forests and jungles",
    visualDescription: "What appeared at first glance to be the decaying husk of an enormous tree erupts into motion, as thick tendrils reach outward hungrily from all sides. Amid the jumble of motion, a subconscious whisper promises sleep and sweet rest to any that lie down at the thing's base.",
    description: "Umdhlebis are massive, intelligent, and carnivorous plants that take root in jungles. Their outer shell is brown and resembles the thick bark of a dead tree, while concealing the softer layer of green cellulose beneath. When they flower, umdhlebis grow broad, fragile-looking crimson leaves with sharp, grasping edges. Umdhlebis draw their prey close with mind-affecting suggestions, enticing would-be victims to rest at the plant's base, and then strike with their vine-like tendrils, each as thick as a man's forearm. Umdhlebis grow to almost 20 feet in height, but can be shorter or taller depending on the surrounding vegetation. An umdhlebi's trunk ranges from 3 to 5 feet in diameter, and the plant as a whole weighs over 10,000 pounds. Umdhlebis can live for up to 50 years. Ecology Legends say that the first umdhlebi was created when an assassin vine crawled into the hollow corpse of a slain, jungle-dwelling treant. The creatures fused together, returning the treant to life, but instilling in it a devastating hunger. Regardless of its true origins, the umdhlebi is known and feared throughout the jungles of the world. Resembling a tree with a hard outer coating, the umdhlebi is actually an intelligent and mobile plant, capable of uprooting itself to find food or escape danger. Although ambulatory, the umdhlebi is too slow to truly hunt and has evolved several methods to attract prey. An umdhlebi uses its large vines and brightly colored leaves to draw in animals and other creatures of lesser intelligence. Once in range, the umdhlebi lashes out with its strong, vine-like tendrils, enveloping and crushing its prey with bone-shattering force. Umdhlebis, however, prefer to feed on humanoids and can compel even the most strongminded individuals to approach their waiting snares. When sensing a nearby humanoid, an umdhlebi vibrates rows of fine, cilia-like hairs along its trunk, producing a sound that targets the minds of any close enough to hear it. This enticing drone causes those under its sway to approach the base of the tree where the umdhlebi can strike. Although the majority of an umdhlebi grows aboveground, the creature's mouth and digestive system are just below the surface. Large, thick roots at the base provide stability and allow for movement, but between these larger roots and beneath the umdhlebi's central trunk exists a populous network of long, thin stems. Each of these growths ends in double-sided fronds lined with spine-like teeth, similar to the leaves of a flytrap. When an umdhlebi roots itself to the ground, these stems burrow up to breach the surrounding earth, forming a moss-like border around the larger roots. Fresh kills are thus devoured from beneath, as the umdhlebi's understems feed. Numbering in the thousands, the umdhlebi's tiny mouths can strip a human carcass to its bones in under an hour, and although these under-stems are too small to effectively damage foes in melee, their shifting, undulating motion of makes traversing the ground around an umdhlebi difficult. Umdhlebis produce a spiny red fruit twice a year. This fruit appears similar to the seed pods of chestnut trees, but instead of holding tough seeds, it contains a bland meat riddled with dozens of triangular seeds. While wellfed umdhlebis sometimes allow monkeys and birds to pluck their fruit and carry it to new ground, they often use their own tendrils to pick and fling the fruit where they please. Some stories tell of undhlebis braining wanderers with these dense pods, or of passersby warned of the dangerous plants by their flying fruit, but these seasonal growths never reliably serve as weapons or warnings. Some tribes maintain dangerous traditions of seeking out and collecting undhlebi fruit to use in the creation of mashes or alcohols. Such products possess a distinctive dry-bitter taste and so are only prepared for use in coming-of-age rituals or other rites of passage. Habitat & Society Umdhlebis root themselves along roads and waterways near humanoid settlements whenever possible. As their roots are highly sensitive to vibrations and can detect the movement of other nearby creatures, they can stay out of sight, despite their size, and still be aware of their surroundings. As the dry shell of their outer layer is particularly susceptible to fire, umdhlebis always entwine themselves with surrounding foliage so that any such attacks against them also risk setting the entire wilderness ablaze. If threatened and such cover is not available, umdhlebis use their compelling whisper ability to manipulate one or more opponents and then draw them in to surround the plant's trunk, using them as living shields. Although they have no use for treasure, umdhlebis pile any leftover items from their prey into the base of their trunks as bait for passersby. When an umdhlebi moves on to other hunting grounds, it sheds its fruit first, hoping that the seeds will take hold and grow. Denizens of the Mwangi Expanse and other jungles are taught to recognize and burn umdhlebi seeds from an early age. Nevertheless, some umdhlebi seeds do make their way into the earth and take root, reaching maturity with frightening speed.",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 3
      },
      Perception: {
        ranks: 6
      },
      "Sense Motive": {
        ranks: 3
      },
      Stealth: {
        ranks: 7
      },
      Survival: {
        ranks: 3
      }
    },
    special: {
      "compelling whisper": {
        type: "Su",
        text: "As a standard action, an umdhlebi can entice any humanoid creature within 30 feet to approach and lie down at the base of its trunk. This acts as a suggestion spell, but the umdhlebi can only compel this one action. A creature that makes a DC 20 Will save is unaffected, and is immune to the same umdhlebi's compelling whisper for 24 hours. An umdhlebi can also use this ability on creatures it is grappling, increasing the DC to 25. The save DC is Charisma-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "3d8+10"
      },
      "treacherous ground": {
        type: "Ex",
        text: "The mass of gnashing roots and stems at the base of an umdhlebi's trunk are constantly in motion. As a result, all squares within 5 feet of the umdhlebi's space are treated as difficult terrain for the purposes of movement through the area."
      },
      "writhing tendrils": {
        type: "Ex",
        text: "All umdhlebis have eight tendrils, but the creature can only make 2 slam attacks in a single round. However, an umdhlebi can continue to make 2 slam attacks even while its other tendrils are grappling or constricting. An umdhlebi can use this ability as long as it has two or more tendrils free to attack."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      "vulnerability to fire"
    ]
  },

};