
export const Broken_MoonCreatures = {
  Vilkacis: {
    source: "Broken Moon",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 50
    },
    abilities: {
      str: "-",
      dex: 23,
      con: "-",
      int: 8,
      wis: 14,
      cha: 17
    },
    feats: [
      {
        name: "Blind-Fight",
        type: "Combat"
      },
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
      },
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Incorporeal touche",
        name: "2 Incorporeal touches",
        damage: "1d8",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ]
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "silver"
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "Within a swirling mass of frigid air manifests the form of a bestial specter. Claws the size of daggers lash menacingly before its half-bestial, half-humanoid form, and its narrow eyes glow with a smoldering malevolence.",
    description: "Beings of pure malevolence and destruction, vilkacis arise from the souls of the most desperate and brutal werewolves as spirits burning with the need for bloodshed and vengeance. Specters of savagery escaped from remains tainted by lycanthropy, vilkacis desire to wear mortal flesh and again revel in the vicious ecstasy of hunting and killing. Some see these beings as malign manifestations of the lycanthropic curse-the spirits of the infamous aff liction itself-while others know them as the deathly continuance of lives consumed by lycanthropy. In either case, these ravenous spirit-beasts seek only to garb themselves in the skins of deadly hunters and revel in bloodshed once more. Vilkacis typically look like more savage versions of the werewolves they were in life, appearing in their hybrid forms with exaggerated fangs and claws. Ecology Although a vilkacis exists only in a spectral form, its canopic stone permanently binds the spirit to the Material Plane. So long as the stone exists, the creature remains stuck between life and death, its spirit strangling on its own rage. When a vilkacis seizes possession of a victim, the host takes on an altered appearance ref lective of the beast within its body. The victim undergoes severe physical dysmorphia. Musculature enlarges, posture becomes stooped, and hands curl into gashing claws. The face takes on a bestial appearance. The victim's jaws extend and grow into jagged, wolfish fangs, while the brow thickens and the pupils widen to black pools that radiate a mad, feral stare. In this state, the vilkacis-possessed creature froths with the curse of lycanthropy and can pass the curse on as though it were a werewolf. Although such a possessed creature might pass on the infamous disease, its own transformation typically lasts only a matter of hours. A vilkacis is ever searching for stronger and more vicious hunters to use as tools in slaking its eternal bloodlust; if it finds a particularly promising host, it might visit and possess the favored body again and again for its rampages. Habitat & Society Vilkacis most commonly appear in areas where human settlements border or stand within wildernesses. While they are commonly associated with werewolves, the folklore of many nomadic and nature-worshiping societies contains stories of creatures whose descriptions bear strong resemblance to vilkacis. Most haunt the territories where they were created, staying within range of their canopic stones, and hunting within the lands they prowled in life. However, those with the ability to summon vilkacis usually attempt to direct them toward specific prey. This often proves a dangerous or even fatal proposition, however, and few reports exist of anyone successfully mastering a vilkacis. Creating a Vilkacis While many vilkacis spontaneously arise under the light of the full moon from the remains of the most savage werewolves, some foul spellcasters seek out the corpses of such bestial murderers, attempting to enslave their spirits and harness their capacity for brutality to fulfill the spellcasters' dark whims. To do this, a spellcaster must prepare a canopic stone, a talisman that typically takes the form of a ceramic totem or amulet bound in silver. Upon creating this object, the bearer can summon a vilkacis once per day. The stone grants no control over the vilkacis, but the creature will not attack or attempt to possess the stone's bearer. Upon being summoned, the vilkacis turns its attention to the nearest creature other than the summoner, attempting to possess the creature's body and go on a murderous rampage. Using a canopic stone to summon a vilkacis is considered an evil act. Although many vilkacis are purposefully created and employed by evil spellcasters, some manifest spontaneously. These beings wander and rampage as they please, but still are bound to a talisman similar to a canopic stone. This spontaneously created artifact can be utilized by those who discover it and discern its importance in the same way as can a canopic stone created specifically to summon and control a vilkacis, and typically takes the form of the dead werewolf 's skull, the silver weapon that killed the werewolf, or a talisman it bore in life. Canopic Stone CL 12th; Price 28,800 gp Construction Requirements Craft Wondrous Item, create undead, rage; Cost 14,400 gp",
    organization: "solitary",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "bestial possession": {
        type: "Su",
        text: "A vilkacis is a spirit of savagery and can take control of other beings, afflicting them with its savage nature. Once per round, the vilkacis can merge its body with a creature on the Material Plane. This ability is similar to a magic jar spell (caster level 10th), except it does not require a receptacle and lasts for up to 3 hours (or a number of hours equal to the vilkacis's Charisma modifier, whichever is greater). To use this ability, the vilkacis must be adjacent to the target. The target can resist the attack with a successful DC 18 Will save. A creature that successfully saves is immune to that same vilkacis's bestial possession for 24 hours. The save DC is Charisma-based. Upon being possessed by a vilkacis, the target takes on a number of bestial features, most notably growing claws and vicious fangs, and flies into a savage rage. The victim gains two claws and a bite natural attack appropriate to its size (1d4 and 1d6 for Medium creatures; see Table 3-1 on page 302 of the Pathfinder RPG Bestiary), and gains a barbarian's greater rage class ability (see page 31 of the Core Rulebook). This rage lasts for as long as the victim is being possessed by the vilkacis. After the possession ends, the victim is fatigued for a period of time equal to double the duration of the possession. The victim also gains Low-Light Vision and scent. The possessed creature loses all of these natural attacks and abilities immediately when the vilkacis leaves its body. Curse of Lycanthropy (Su) Any humanoid who is bitten by a creature possessed by a vilkacis must make a DC 18 Fortitude save or be infected with lycanthropy as if bitten by a werewolf. If the victim's size is not within one size category of the possessed creature's, this ability has no effect. The save DC uses the vilkacis's ability scores and is Charisma-based."
      },
      "curse of lycanthropy": {
        type: "Su",
        text: "Any humanoid who is bitten by a creature possessed by a vilkacis must make a DC 18 Fortitude save or be infected with lycanthropy as if bitten by a werewolf. If the victim's size is not within one size category of the possessed creature's, this ability has no effect. The save DC uses the vilkacis's ability scores and is Charisma-based.",
        preText: "DC 18"
      },
      "lycanthropic empathy": {
        type: "Ex",
        text: "A vilkacis or creature possessed by a vilkacis can communicate and empathize with wolves and dire wolves. It can use its Diplomacy to alter such an animal's attitude, and when so doing gains a +4 racial bonus on the check."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      },
      rejuvenation: {
        type: "Su",
        text: "A vilkacis that is destroyed in combat restores itself after 2d4 days. The only way to permanently do away with a vilkacis is to locate its canopic stone, the occult artifact that binds it to the Material Plane, and then destroy the artifact in the presence of the vilkacis's mortal remains. Once the canopic stone is destroyed, the vilkacis can no longer rejuvenate and can be destroyed as normal. Vulnerability to Silver (Su) Vilkacis are particularly susceptible to silver. A vilkacis struck with a silver weapon takes an additional 2d6 points of damage. If a creature under the effects of a vilkacis's bestial possession is damaged by a silver weapon, it also takes this extra damage and receives another saving throw to resist the bestial possession. If successful, the possession ends, and the vilkacis is driven into an adjacent square and cannot use its bestial possession ability again until the following day."
      }
    }
  },

  Weaverworm: {
    source: "Broken Moon",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Huge",
    hd: 10,
    hdVal: 8,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 30,
      burrow: 10,
      climb: 30
    },
    abilities: {
      str: 24,
      dex: 18,
      con: 18,
      int: 13,
      wis: 14,
      cha: 17
    },
    feats: [
      {
        name: "Far Shot",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Point-Blank Shot",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Weapon Finesse",
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
        specialAbility: "paralytic nails",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "any forests or hills",
    visualDescription: "The bloated white segments of a maggot's body erupt in a torso of mixed feminine and insectile features. Pale humanoid skin and carapace meld together beneath a face with segmented eyes and mandibles chittering a song of discordant alien clicks and hisses, as overlong carapace claws weave cords of thick webbing between them.",
    description: "Foul servants of the goddess of disease and gluttony, weaverworms-or simply \"weavers,\" as they are often called-are terrifying abominations, combining the features of predatory insects, monstrously huge larvae, and deathly pale humanoids. Creations of Urgathoa forgotten by their cruel mistress long ago, these horrors seek out the dark places of the world, sowing murder and fear from the darkness, and all the while raising unnatural songs in praise of the goddess of gluttony. Weaverworms typically measure 18 feet long, though the most bloated weigh upward of a ton. Ecology A weaverworm's lower body is approximately 3 feet in diameter, and is divided into numerous segments that secrete a viscous film. The creature moves by expanding and contracting these segments, giving it an incredible range of motion, as well as the capability to scale surfaces with an ease equal to that with which they move across the ground. Weaverworms are also know for their claws' deadly nails, which function more like the stingers or barbs of many insects than weapons alone. These nails contain a potent paralytic fluid that passes into the bloodstream of a weaverworm's victim, leaving it vulnerable to slaughter and ready for consumption. The nails often break off while embedded in the victim's body, where they continue pumping the weaverworm's toxins, filling potential meals with dose after dose of paralytic excretions. Occasionally, those who encounter a weaverworm and flee find themselves paralyzed well after they think they've escaped, again falling into the deadly clutches of the pursuing abomination. The flesh of the creature's underbelly is relatively soft and slightly rubbery, running in shades of sickly brown flesh to pale blue. The exposed carapace is tougher and dotted with thousands of short bristles. Over time the weaverworm adjusts to match whatever environment it dwells in. The upper portion of the creature has a female body, but one disfigured by insectile traits. Such monstrous malformations vary between weavers, though all have deadly claws and heads with a terrible assortment of mandibles, pincers, spines, and segmented eyes. Typically, these appearances are similar to the faces of predatory insects common to the region the weaverworm inhabits, with spider features proving most prevalent, but the visages of horrible mantises and monstrous annelids also arise in warmer climates. Habitat & Society Much like larger arachnids, weaverworms are chief ly ambush hunters. They live in solitary burrows, near or within old ruins and similar places that tend to attract prey. While they tend to avoid colder climes, they prove resilient to most extremes of weather and terrain, tending to choose somewhat isolated areas where their hunting goes unnoticed. Typically, once a weaverworm claims a burrow, she remains there for life. In this manner, weaverworms are largely consistent, enough so that they frequently catch the attention of primitive humanoids such as goblins, orcs, or, in particular, ettercaps who believe them the embodiment of various gods or fiends and pay them worship. The relationship between weaverworms and their worshipers tends to be brutal, as weaverworms have few qualms about eating worshipers who come too close. Origins Among the vast libraries of mysteries and ancient legends documented and passed on by the faithful of Pharasma is the tale of Lamia of Avalos, a seer of Pharasma from a distant land who blasphemed against the goddess and was transformed into a beastlike creature denied the judgment promised sentient beings in death, as were her sister sibyls. Yet this punishment unleashed greater terror than even the Lady of Graves might have imagined. Unknown to the furious goddess and her false worshipers, another divinity had noticed the tragic drama. Urgathoa, goddess of disease and undeath, watched and laughed at the terror wrought by the goddess of prophecy upon her vicious servants. Delighted and inspired, Urgathoa went into the world to wreak a similar horror. The Pallid Princess searched the world over, and among her servants living and undead, found none who displeased her enough to curse as Pharasma had her priestess. So she turned her mind toward granting a rare and terrible blessing. Deep in a tangled forest she happened upon a brood of maggots and lowly worms, and in them found all she delighted in-filth and disease, hunger and life amid the dead. Momentarily delighted, she raised up this terrible swarm and molded them and gave them a single body, terrible but not unlike her favored daughters. The result was a monster, a servant of hungers and foul dooms, part grotesque insect, part poisonous fanatic. And the goddess was pleased. Yet Urgathoa is a fickle goddess; her momentary pleasure soon passed, and she left her terror in the forest, content to let it praise her, yet unwilling to care for its needs or safety. So the weaverworm crawled through the forest, insane and terrifying, preying upon what she could and sowing new generations in fits of atrocity-all the while plucking out Urgathoa's praises upon strands of deadly webbing.",
    organization: "solitary",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {
      Bluff: {
        ranks: 5
      },
      Climb: {
        ranks: 1
      },
      Intimidate: {
        ranks: 10
      },
      "Knowledge (dungeoneering)": {
        ranks: 6
      },
      Perception: {
        ranks: 5
      },
      Perform0: {
        subSkill: "string",
        ranks: 11
      },
      Spellcraft: {
        ranks: 9
      },
      Stealth: {
        ranks: 7
      }
    },
    special: {
      drag: {
        type: "Ex",
        text: "A weaverworm that successfully entangles a victim with its web attack can retract the web, dragging the victim into its clutches. Each round, the entangled victim can attempt a CMD check to escape. Upon a failed check, the weaverworm forcibly drags its victim 20 feet toward it."
      },
      "weaver's song": {
        type: "Su",
        text: "A weaverworm can play its webs like a grotesque musical instrument. When doing so, all nonweaverworms within 300 feet must make DC 18 Will saves. Those who make their saves are unaffected. Those who fail are fascinated, and on their turn, move toward the weaverworm by the most direct means available. If the path leads into a dangerous area, such as through fire or off a cliff, that creature receives a second saving throw to end the effect before moving into peril. A victim within 5 feet of the weaverworm simply stands and listens. This effect continues for as long as the weaverworm performs and for 1d4 rounds thereafter. This is a sonic mind-affecting charm effect. Whether or not the save is successful, the victim is immune to the same weaverworm's song for 24 hours. The save DC is Charisma-based."
      },
      "paralytic nails": {
        type: "Ex",
        text: "A weaverworm's nails secrete a potent paralytic agent. Any creature damaged by its claw attacks must make a DC 19 Fortitude save or be paralyzed for 1 round. In addition, the weaverworm's nails break off in the bodies of those it paralyzes. A paralyzed creature must make another save to avoid being paralyzed again at the beginning of its round, doing so every round until the nail is removed as a full-round action. A weaverworm's nail can be removed with either a DC 12 Strength check, which removes the nail and deals 1d4 points of damage to the victim, or a DC 14 Heal check, which deals no damage. A weaverworm's paralytic nails don't affect any creature that is immune to poison. The save DC is Constitution-based."
      },
      web: {
        universalMonsterAbility: "Web",
        hit: 11,
        saveDC: 10,
        hp: "10 hp"
      }
    }
  },

};