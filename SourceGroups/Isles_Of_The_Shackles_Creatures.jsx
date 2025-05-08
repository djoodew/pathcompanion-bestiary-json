
export const Isles_Of_The_ShacklesCreatures = {
  "Aashaq's Wyvern": {
    source: "Isles Of The Shackles",
    creatureType: "dragon",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Large",
    hd: 9,
    hdVal: 12,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 20,
      maneuverability: "Poor",
      fly: 60,
      swim: 40
    },
    abilities: {
      str: 21,
      dex: 12,
      con: 20,
      int: 9,
      wis: 12,
      cha: 11
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
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
      },
      {
        weapon: "Sting",
        name: "2 Stings",
        specialAbility: "poison",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Wing",
        name: "2 Wings",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "dragon traits",
      "Immune to magic paralysis and sleep"
    ],
    defense: {
      SR: {
        value: 19
      },
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate or warm hills",
    visualDescription: "This light purple dragon has immense wings and a bifurcated tail, each end tipped with a hooked stinger. Heavy smoke drips from the beast's nostrils and jaws.",
    description: "Aashaq's wyverns resemble the typical wyverns commonly found throughout the Inner Sea region in many regards, but they have been warped by magic. Unlike their more mundane cousins, these wyverns have bifurcated tails that allow for two stinging attacks, and are able to emit a noxious blast of gas that burns and blinds those in its path. Aashaq's wyverns reside in the natural caves that honeycomb the cliffs of Dahak's Teeth, and were common wyverns until the evil dragon Aashaq commandeered the islands. Seeing these beasts as the perfect deacons for her dark cult, Aashaq twisted the very fabric of the wyverns until she settled upon the form now most commonly encountered on Dahak's Teeth. Their very name is indicative of the wyverns' servitor status, and they are occasionally even ridden as mounts by Dahak cultists. Aashaq gives her wyvern minions a remarkable amount of freedom, but most never stray too far from the three islands that make up Dahak's Teeth. Mariners who make their way past the dreaded isles know to watch out for the beasts, which assail unprepared ships from both sky and water in order to feed upon their crews and capture their cargo for Aashaq. The corrupting influence of Aashaq's chaotic manipulations has also provided these unpredictable creatures with resistance to acid, fire, and magic. A typical Aashaq's wyvern is 18 feet in length (including its bifurcated tail) and weighs 2,500 pounds. Their scales can vary in tint, but are usually purple. Though only slightly more intelligent than their common kin, the Dahak-worshiping wyverns enjoy lording their \"superior\" status over the lesser specimens found on other islets.",
    organization: "solitary, pair, or murder (3-5 and 1-3 wyverns)",
    languages: "Draconic",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 9
      },
      Swim: {
        ranks: 9
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "usable every 1d4 rounds",
        text: "Once every 1d4 rounds, an Aashaq's wyvern can emit a cloud of noxious fire in a 30-foot cone that deals 6d6 points of fire damage. Creatures that take damage are also temporarily blinded by the fumes as though by glitterdust for 4 rounds. A DC 19 Reflex save halves the fire damage and negates the glitterdust effect. The save DC is Consitution-based."
      },
      rake: {
        universalMonsterAbility: "Rake",
        type: "Ex",
        weaponName: 5
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
        text: "Sting-injury; save Fort DC 19; frequency 1/round for 6 rounds; effect 1d4 Con; cure 2 consecutive saves.",
        saveDC: 10
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 10
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  "Blood Queen": {
    source: "Isles Of The Shackles",
    creatureType: "outsider",
    subTypes: [
      "native"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 23,
    hdVal: 10,
    cr: 23,
    racialFeatures: [
      "Blindsight 120 ft.",
      "Surrogate Senses"
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 30,
      dex: 11,
      con: 40,
      int: 20,
      wis: 29,
      cha: 37
    },
    feats: [
      {
        name: "Alertness",
        type: "General"
      },
      {
        name: "Awesome Blow",
        type: "Combat"
      },
      {
        name: "Bleeding Critical",
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
        value: "Sting",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Tentacles",
        choiceSource: "Improved Critical"
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
        name: "Power Attack",
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
        weapon: "Sting",
        name: "5 Stings",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "electricity"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "6 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to disease, electricity, mind-affecting effects, poison, sonic"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "epic and lawful"
      },
      SR: {
        value: 34
      },
      naturalArmor: 32
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "any",
    visualDescription: "This hideous monstrosity looks like an enormous curled maggot, varicolored like deeply bruised flesh. Three flailing tentacles adorn each side of the thing's huge, pulsating mouth, and five more arch from its hindquarters.",
    description: "Millennia ago, when the repugnant cyclops empire of Ghol-Gan populated the Shackles, its foul and alien gods sent powerful servants from beyond to act as their intermediaries, guiding and corrupting the empire until its ignominious collapse, at which point the gods and their minions fled Golarion altogether. However, one of these vile servants remained even after Ghol-Gan's collapse, a wretched horror known as the Blood Queen. It has dwelt for centuries in its foul subterranean chamber in a ruined Ghol-Gan temple called Ganagsau in the Cannibal Isles, and it was this blasphemous being who transformed the kuru into the degenerate race they are today, convincing them that it is a living goddess worthy of their veneration. The Blood Queen has a kuru high priest who goes by the name Bukrugsor, and this devoted thrall sees to it that his dark patron is brought regular sacrificial victims and offerings of blood. The Blood Queen has no eyes, per se-rather, what look like angry pustules all over its bloated body act as sensory organs. In addition, it is able to see and hear the world through the various kuru surrogates its followers have interspersed throughout the Cannibal Isles. Its grotesque mouth is capable of articulating a number of languages, though if it deigns to speak with a creature it usually does so via its telepathy. While the Blood Queen uses the short tentacles that extend from its mouth to devour prey and sacrificial offerings, the tentacles that emanate from its hindquarters are long, muscular, and tipped with bonelike stingers that allow it to manipulate objects and electrify victims. The Blood Queen is nearly immobile, being a massive, swollen beast that sits in the middle of a huge underground temple chamber in its ruined cathedral. While it may slowly undulate its bulk in one direction or another, in the years since its appearance on Golarion, the Blood Queen has grown far too large to fit through any of the limestone chamber's exits. Only the Blood Queen's high priest, those destined to become surrogate kuru, or sacrifices to the behemoth monster are allowed within this foul throne room. Sometimes unwilling sacrifices are dropped into the chamber from a hole in the ceiling and the exits are sealed so that the Blood Queen may toy with its food before it feeds. A being of monumental evil, the Blood Queen expresses its rage at its divine abandonment by spreading as much pain and havoc as it can. Whether it ever escapes its ancient, self-made prison remains to be seen, though all right-thinking creatures that know of its existence shudder at the prospect. Kuru Surrogates The Blood Queen's favored deacons are known as kuru surrogates, and such monstrosities are created when the horror digests a creature and entombs the victim in one of its paralytic sacs for long enough. The creature that emerges is essentially brain-dead, having been completely stripped of its wits and nervous system. A kuru surrogate remains in its vegetative state until it starves, is killed, or is affected by a heal spell or a similar effect of equal or greater power. Kuru surrogates are revered among the Blood Queen's devout, who transport the immobile things around the Cannibal Isles, perpetually caring for the \"blessed\" individuals. The Blood Queen acts through these surrogates and uses them to augment and command its kuru followers, linking with its minions in order to capture any who oppose it or its wicked cult of cannibals.",
    organization: "solitary",
    languages: "Abyssal, Aklo, Common, Draconic, Kuru, Undercommon; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "cacophonous call",
        casterLevel: 23,
        timesPerDay: 5
      },
      {
        name: "deeper darkness",
        casterLevel: 23,
        timesPerDay: 5
      },
      {
        name: "dispel good",
        casterLevel: 23,
        timesPerDay: 5
      },
      {
        name: "inflict critical wounds",
        casterLevel: 23,
        timesPerDay: 5
      },
      {
        name: "command, greater",
        casterLevel: 23,
        timesPerDay: 3
      },
      {
        name: "suffocation, mass",
        casterLevel: 23,
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
      Heal: {
        ranks: 23
      },
      Intimidate: {
        ranks: 26
      },
      "Knowledge (arcana)": {
        ranks: 23
      },
      "Knowledge (history)": {
        ranks: 23
      },
      "Knowledge (planes)": {
        ranks: 23
      },
      "Knowledge (religion)": {
        ranks: 26
      },
      Perception: {
        ranks: 23
      },
      "Sense Motive": {
        ranks: 23
      },
      Spellcraft: {
        ranks: 26
      }
    },
    special: {
      "horrifying bellow": {
        type: "Su",
        text: "Three times per day as a standard action, the Blood Queen can release a terrifying bellow that affects a 30-foot-radius spread. Any creature within the affected area must succeed at a DC 34 Will save or be paralyzed for 1d4 rounds. The save DC is Charisma-based. Surrogate Senses (Su) In addition to its Blindsight, the Blood Queen can constantly see and hear through its unholy kuru surrogates as though with a permanent clairaudience/clairvoyance spell. If at any time one of the Blood Queen's surrogates is killed, it is dazed for 1 round."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "15d6 acid damage",
        hp: "47 hp",
        AC: "AC 26"
      },
      "unholy gestation": {
        type: "Ex",
        text: "Whenever the Blood Queen swallows an unconscious humanoid or renders a humanoid unconscious with its swallow whole ability, it moves the victim through its digestive track, where the victim no longer takes damage, but rather begins to gestate within the Blood Queen's transformative stomach for 1d4 rounds. After the creature has finished gestating, it is regurgitated from the hindquarters of the Blood Queen, encased in an opaque mucous pod. Any attempt to remove a gestated humanoid from its pod causes massive system shock, and the humanoid takes 6d6 points of damage unless it succeeds at a DC 25 Fortitude save or those releasing it succeed at a DC 25 Heal check. As a swift action, the Blood Queen can send strong telepathic emanations to any pod within 100 feet, causing it to violently explode. The resulting spray of bilious ooze deals 6d6 points of acid damage to the creature encased in the pod and to any creatures in a 15-foot-radius burst. Alternatively, the Blood Queen may allow an encased humanoid to continue to gestate for at least 24 hours, and after that duration may release the fully metamorphosed creature from its pod at any point. When released, the victim completes its transformation into a kuru surrogate (see the Kuru Surrogate section below). The Blood Queen may create any number of pods, but can only possess up to six kuru surrogates at any one time (if the Blood Queen releases a seventh kuru surrogate from its mucus pod, the oldest surrogate immediately dies no matter where it is and the Blood Queen is dazed for 1 round). The save DCs are Constitution-based."
      },
      "blood link": {
        type: "Su",
        text: "Three times per day as a standard action, the Blood Queen may psychically link to up to 23 Hit Dice of kuru within 100 feet of either itself or one of its kuru surrogates; it may choose which specific kuru it would like to affect with this ability, but HD that are not sufficient to affect a creature are wasted. Any kuru linked to in this way must succeed at a DC 28 Will save or be forced to carry out the Blood Queen's telepathic commands to the best of its ability. In addition, a linked kuru gains a +4 morale bonus to Strength and Constitution and is immune to mind-affecting effects. The blood link lasts for 1 minute or until the Blood Queen ends the effect (a free action). When the blood link is broken, the affected kuru takes 1 point of Intelligence damage and cannot be linked to again for 24 hours. The save DC is Charisma-based."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "good",
        value: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Chickcharney: {
    source: "Isles Of The Shackles",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 6,
      dex: 17,
      con: 14,
      int: 2,
      wis: 13,
      cha: 15
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
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
        specialAbility: "ill-luck",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "ill luck",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm forests, hills, or plains",
    visualDescription: "Resembling a filthy owl with the gangly long legs of a stork, this almost comically ugly bird has piercing black eyes and emits an annoying screech.",
    description: "Chelish explorers first came upon this strange magical bird during their early voyages to the Shackles. While the unusual creature was initially laughed at for its unsightly appearance and awkward gait, the tempestuous bird has nonetheless proven to be a force to be reckoned with in its own way. A chickcharney can grant good luck to those it deems worthy of its gifts, but its favor can just as easily turn to scorn, and a mere scratch from a chickcharney's accursed beak or claws has spelled the end for countless unwary seafarers. Naturally curious and trusting, chickcharneys freely approach most non-threatening humanoids, even accompanying them for short times and often leaving their nesting spots unprotected if they have no eggs or mate. However, they are fickle things, and if they recognize hostility or rudeness, they inflict all manner of chaos upon those who provoke them. Chickcharneys fiercely protect their eggs and young, their eggs being highly coveted by predators as well as humanoids. The shells are thought to possess alchemical properties that can be employed in numerous formulae, and many alchemists are willing to pay exorbitant sums for intact specimens. While some pirates of the Shackles continue to insist that encountering a chickcharney is a good omen, a much larger contingent gives the ornery and erratic bird a wide berth. A chickcharney is 3 feet tall and weighs 50 pounds.",
    organization: "solitary or nesting pair",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 2
      },
      Perception: {
        ranks: 2
      }
    },
    special: {
      "maddening screech": {
        type: "Su",
        text: "Three times per day as a standard action, a chickcharney can emit a piercing cry that affects all other creatures within a 30-foot radius. An affected creature must succeed at a DC 13 Fortitude save or become confused for 1d3 rounds. This is a sonic, mind-affecting effect. The save DC is Constitution-based."
      },
      "blessed trill": {
        type: "Su",
        text: "Once per day as a standard action, a chickcharney can emit a melodious trill that grants all creatures within a 20-foot radius a +1 morale bonus on saving throws for the rest of the day. This is a sonic, mind-affecting effect."
      },
      "ill-luck": {
        type: "Ex"
      },
      "ill luck": {
        type: "Su",
        text: "When a chickcharney hits a creature with one of its natural attacks, the target is exposed to the chickcharney's curse. Curse of Ill Luck: save Will DC 14; effect the creature takes a -1 penalty on attack rolls, saving throws, ability checks, and skill checks. A creature can be affected by a curse of ill luck multiple times (up to a maximum cumulative penalty of -4). Chickcharneys are immune to this curse. The save DC is Charisma-based."
      }
    }
  },

  Duppy: {
    source: "Isles Of The Shackles",
    creatureType: "undead",
    subTypes: [
      "incorporeal"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: "-",
      dex: 22,
      con: "-",
      int: 13,
      wis: 15,
      cha: 19
    },
    feats: [
      {
        name: "Flyby Attack",
        type: "Monster"
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
        name: "Lunge",
        type: "Combat"
      },
      {
        name: "Step Up",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Incorporeal touch",
        name: "Incorporeal touch",
        damage: "2d8",
        bonuses: [
          {
            source: "inherent",
            value: "1d6",
            appliesTo: "damageType",
            damageType: "str drain"
          }
        ]
      }
    ],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm coastal regions",
    visualDescription: "This floating, ghostly humanoid wears a cowl, but the face beneath it is a blend of human and animal, radiating hatred and fury. Transparent, canine shapes twine around its legs.",
    description: "A duppy is the spirit of a cruel and brutal sailor who died by violence on land, away from his ship and crew, and thus was unable to receive a proper burial at sea. While its ghostly form is evidence enough of its twisted hatred, a duppy also possesses power over a pack of faithful, otherworldly hounds that share in their master's malignance. Duppies typically seek out sailors and pirates to exact their vengeance on, seeking to inflict great violence on those living creatures who remind them of what they lost in life. For this reason, duppies are most often found in seaside towns or nearby beaches, and settlements that rely on the ocean know to fear and hate these ghastly beings. The presence of a duppy is often preceded by the distant sound of unearthly howling. While a duppy's incorporeal form ensures that it cannot be captured via mundane means, those who do manage to trick a duppy into a trap are wise to keep the horror confined until day, when its otherworldly abilities are hindered and it can be more easily defeated. However, few creatures can muster powers strong enough to cage a duppy, whose hounds confound enemies and allow the ghostly monster to attack victims from all sides.",
    organization: "solitary, pair, or pack (3-8)",
    languages: "Common, Polyglot",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      Perception: {
        ranks: 9
      },
      "Sense Motive": {
        ranks: 9
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "ravenous hounds": {
        type: "Sp",
        text: "Once per day as a standard action, a duppy can bring into being a pack of incorporeal hounds for 1d4+3 rounds. The ravenous hounds attack as a single unit, have a +11 attack bonus, deal 2d6+3 points of force damage on a successful hit, and threaten a critical hit on a natural 20. This ability is otherwise identical to mage's sword (CL 7th). Resurrection Vulnerability (Su) A raise dead or similar spell cast on a duppy destroys it (Will negates). Using the spell in this way does not require a material component. Strength Drain (Su) Creatures hit by a duppy's touch attack must succeed at a DC 18 Fortitude save or take 1d6 points of Strength drain. On each successful attack, the duppy gains 5 temporary hit points. The save DC is Charisma-based."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 2
      },
      "unnatural aura": {
        universalMonsterAbility: "Unnatural Aura",
        type: "Ex",
        range: "30 ft."
      }
    },
    resistances: [
      "sunlight powerlessness"
    ]
  },

  Larabay: {
    source: "Isles Of The Shackles",
    creatureType: "fey",
    subTypes: [
      "shapechanger"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 17,
    hdVal: 6,
    cr: 11,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      maneuverability: "Good",
      fly: 50
    },
    abilities: {
      str: 18,
      dex: 22,
      con: 21,
      int: 15,
      wis: 16,
      cha: 17
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Alertness",
        type: "General"
      },
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
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Rapier",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Rapier",
        name: "Rapier",
        specialAbility: "mischief",
        damage: "1d6"
      }
    ],
    defense: {
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate or warm coastlines or forests",
    visualDescription: "This pale, blond-haired humanoid possesses bright blue eyes, needlelike teeth, and the large, multicolored wings of a parrot.",
    description: "Larabays are capricious fey creatures that gravitate toward coastal regions with warm and temperate islands. They are especially fond of toying with sailors and fishermen, playing pranks aboard ships or in seaside towns by assuming various shapes and using their otherworldly powers of mischief. A larabay's idea of fun can quickly become quite serious, however, when its love of trickery begins to outweigh its sympathy for humanity, and a larabay's well-executed joke may result in a potentially fatal situation for those involved. In their never-ending pursuit of a good laugh, larabays have been known to employ their supernatural illusions to draw ships and their crews into precarious situations such as hazardous waters or hidden shoals, and the depredations of a larabay are often only realized after it's too late. On land, larabays entice their unknowing dupes off cliffs' edges, through monster lairs, or into hidden ravines or pools of quicksand. Larabays use their shapechanging abilities to craft intricate webs of social intrigue, though such schemes are always concocted in an effort simply to conduct a masterful hoax, usually resulting in the devastation or heartbreak of one or more of the parties involved rather than any concrete gains on the fey's part. While larabays have been known to inadvertently perform acts of good in the process of gulling cruel-hearted individuals, their unpredictable and precarious natures make them difficult allies, and one can never be sure just how long a larabay will remain faithful to a particular cause before getting bored or whether its companions are simply its latest victims.",
    organization: "solitary, pair, or rabble (3-6)",
    languages: "Common, Polyglot, Sylvan",
    spellLikeAbilities: [
      {
        name: "burning hands",
        casterLevel: 11,
        timesPerDay: 5
      },
      {
        name: "gust of wind",
        casterLevel: 11,
        timesPerDay: 5
      },
      {
        name: "hallucinatory terrain",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "invisibility",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "solid fog",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 11,
        timesPerDay: 3
      },
      {
        name: "cone of cold",
        casterLevel: 11,
        timesPerDay: 1
      },
      {
        name: "mirage arcana",
        casterLevel: 11,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 17
      },
      Diplomacy: {
        ranks: 17
      },
      Disguise: {
        ranks: 17
      },
      Fly: {
        ranks: 17
      },
      "Knowledge (nature)": {
        ranks: 17
      },
      Perception: {
        ranks: 17
      },
      "Sense Motive": {
        ranks: 17
      },
      Stealth: {
        ranks: 17
      }
    },
    special: {
      "befuddling gaze": {
        type: "Su",
        text: "Three times per day as a standard action, a larabay can employ a befuddling gaze attack in a 30-foot cone. Creatures that fail a DC 21 Will save become dazed for 1d4 rounds. Creatures that successfully save are dazzled for 1 round. The save DC is Charisma-based."
      },
      "change shape": {
        universalMonsterAbility: "Change Shape",
        spell: "Medium humanoid; alter self"
      },
      mischief: {
        type: "Su",
        text: "A larabay can channel its magical energy through whatever one-handed weapon it wields to mystify and disorient foes. Creatures hit by a larabay's weapon must make a DC 21 Will save or take 1 point of Dexterity damage and become confused for 1d6 rounds. The save DC is Charisma-based."
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
      },
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Lusca: {
    source: "Isles Of The Shackles",
    creatureType: "magical beast",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Gargantuan",
    hd: 20,
    hdVal: 10,
    cr: 17,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10,
      swim: 40
    },
    abilities: {
      str: 30,
      dex: 11,
      con: 26,
      int: 13,
      wis: 21,
      cha: 18
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
        name: "Improved Initiative",
        type: "Combat"
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
        name: "Snatch",
        type: "Monster"
      },
      {
        name: "Vital Strike",
        type: "Combat"
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
        name: "3 Bites",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "8 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to electricity, poison"
    ],
    defense: {
      naturalArmor: 26
    },
    space: "20 ft.",
    reach: "20 ft.",
    environment: "warm oceans",
    visualDescription: "This behemoth has three huge, snapping sharklike heads on short, scaly necks, while its lower body appears to be that of a gigantic octopus with eight muscular tentacles.",
    description: "Luscas are among the most feared predators in the open ocean, their snapping shark heads and writhing tentacles spelling the end for many crews. A lusca's presence can first be felt in the air, as its body naturally conducts electricity, and sailors who have encountered the being claim that thunderclouds seem to roll in alongside the creature. Ravenous and unpredictable, a lusca claims wide swaths of territory in order to maximize the number of ships it can sink and crews it can feast upon. While luscas prefer to make quick meals of the sailors onboard a ship, they will eat just about any aquatic creature, and even giant octopuses and whales know to steer clear of a hungry lusca. The average lusca is 90 feet from tentacle to snout and weighs 3,800 pounds.",
    organization: "solitary",
    languages: "Aquan, Common",
    spellLikeAbilities: [
      {
        name: "chain lightning",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "geyser",
        casterLevel: 18,
        timesPerDay: 3
      },
      {
        name: "summon",
        casterLevel: 18,
        limitations: "level 8, 1d3 dire sharks 50%",
        timesPerDay: 1
      },
      {
        name: "vortex",
        casterLevel: 18,
        timesPerDay: 1
      }
    ],
    skills: {
      Perception: {
        ranks: 20
      },
      Stealth: {
        ranks: 20
      },
      Swim: {
        ranks: 12
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+5 plus poisonous suckers"
      },
      "rend ship": {
        type: "Ex",
        text: "As a full-round action, a lusca can attempt to use four of its tentacles to grapple a ship of its size or smaller by making a combat maneuver check opposed by the ship's captain's Profession (sailor) check; the lusca receives a cumulative +4 bonus on the check for each size category smaller than Gargantuan the ship is. If the lusca grapples the ship, it holds the ship motionless; it can attack targets anywhere on or within the ship with its tentacles, but can't attack foes at all with its shark heads. Each round it maintains its hold on the ship, it automatically deals bite damage to the ship's hull."
      },
      "tenacious grapple": {
        type: "Ex",
        text: "A lusca does not gain the grappled condition if it grapples a foe with its tentacles."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      jet: {
        universalMonsterAbility: "Jet",
        distance: "200 ft."
      }
    }
  },

  Nirento: {
    source: "Isles Of The Shackles",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 5,
    hdVal: 8,
    cr: 4,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 18,
      dex: 14,
      con: 19,
      int: 2,
      wis: 9,
      cha: 11
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
        name: "Weapon Focus",
        type: "Combat",
        value: "Vines",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Vine",
        name: "2 Vines",
        specialAbility: "grab, trip",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to sonic"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "slashing"
      },
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "15 ft.",
    environment: "warm forests or plains",
    visualDescription: "Thorny vines encircle this tropical tree's thick, spongy trunk, and jungle debris lies strewn about its base.",
    description: "Nirentos are predatory plants with brutish intelligence, their thorny vines able to tear foes limb from limb. A nirento lures prey toward it by swaying its branches and vines in a visually stimulating dance, striking at victims mercilessly once they are within range of its natural weapons. Slain prey then piles up around the tree's base and is absorbed through its roots. Nirentos' spongy bodies ensure they absorb most physical blows, though they remain susceptible to slashes and cuts, and when so injured, a translucent green sap oozes from their wounds. Elder nirentos are individuals that have lived for well over a century, and have absorbed nutrients from countless victims over the years. A typical nirento is 15 feet tall and weighs 1,000 pounds, while elder nirentos can reach heights of up to 25 feet and weigh over a ton.",
    organization: "solitary, pair, or grove (3-5)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 5
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+4"
      },
      "hypnotic display": {
        type: "Ex",
        text: "Once per day as a standard action, a nirento can sway and dance in such a way that it attracts any who see the tree within a 60-foot radius. Any creatures other than nirentos in the area must succeed at a DC 17 Will save or become entranced by the nirento's graceful movements, thereafter believing the nirento to be a perfectly normal tree. Affected creatures become passive for 1d6 minutes and refuse to attack the nirento during this time. Affected creatures can attempt a new Will save each round that the nirento attacks an ally-if a hypnotized creature is attacked by the nirento, it gains a +4 bonus on its Will save to see through the hypnotic display. This is a mind-affecting compulsion effect. The save DC is Constitution-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      },
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  "Elder Nirento": {
    source: "Isles Of The Shackles",
    creatureType: "plant",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 9,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Blindsight 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 10
    },
    abilities: {
      str: 20,
      dex: 14,
      con: 19,
      int: 2,
      wis: 9,
      cha: 11
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
      },
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Vines",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Vine",
        name: "4 Vines",
        specialAbility: "grab",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to bludgeoning weapons, sonic"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "slashing"
      },
      naturalArmor: 10
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "warm forests or plains",
    visualDescription: "Thorny vines encircle this tropical tree's thick, spongy trunk, and jungle debris lies strewn about its base.",
    description: "Nirentos are predatory plants with brutish intelligence, their thorny vines able to tear foes limb from limb. A nirento lures prey toward it by swaying its branches and vines in a visually stimulating dance, striking at victims mercilessly once they are within range of its natural weapons. Slain prey then piles up around the tree's base and is absorbed through its roots. Nirentos' spongy bodies ensure they absorb most physical blows, though they remain susceptible to slashes and cuts, and when so injured, a translucent green sap oozes from their wounds. Elder nirentos are individuals that have lived for well over a century, and have absorbed nutrients from countless victims over the years. A typical nirento is 15 feet tall and weighs 1,000 pounds, while elder nirentos can reach heights of up to 25 feet and weigh over a ton.",
    organization: "solitary, pair, or grove (3-5)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 9
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+5"
      },
      "hypnotic display": {
        type: "Ex"
      },
      uproot: {
        type: "Ex",
        text: "As a full-round action, a nirento can thrust its vines into the soil and attack up to four creatures around it in a 10-foot radius. Creatures in this area take 1d8+5 points of damage (DC 17 Reflex half). In addition, a nirento can attempt to trip any creatures that fail their Reflex saves as a free action without provoking attacks of opportunity. The save DC is Constitution-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Sea Scourge": {
    source: "Isles Of The Shackles",
    creatureType: "ooze",
    subTypes: [
      "aquatic"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 9,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Blindsight 60 ft."
    ],
    speed: {
      base: 10,
      climb: 10,
      swim: 20
    },
    abilities: {
      str: 24,
      dex: 7,
      con: 18,
      int: "-",
      wis: 1,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "grab",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid"
    ],
    defense: {},
    space: "10 ft.",
    reach: "10 ft.",
    environment: "warm oceans",
    visualDescription: "This whitish-gray amoeboid creature has bits of flotsam embedded in its amorphous form, which moves inexorably against the current.",
    description: "On watch at night in warm seas, wise sailors are especially vigilant for the hated sea scourge, an ooze that has adapted itself so well to its maritime habitat as to become a significant hazard to native oceanic creatures as well as to humanoid seafarers. While its typical diet consists of sea turtles, dugongs, and other aquatic prey, the sea scourge will feed on whatever creatures it can manage to get a hold of, and is known to prey on humanoids both in shallow waters and at sea, even going so far as to board seagoing vessels. A sea scourge's acid is capable of dissolving wood in addition to flesh and bone, making it a particularly dangerous threat to most boats. Though it can swim beneath the waves indefinitely, a sea scourge more often tends to search the surface of the ocean for prey, camouf laged as a large clump of ambergris or other seaborne excretion. Variant Sea Scourges Most sea scourges are encountered off the western coast of Garund in the Arcadian Ocean, but some breeds have been known to stalk other parts of the high seas. Coldwater Scourge (+0 CR): Stalking the watery expanses of the northern Arcadian Ocean and Inner Sea, the coldwater scourge is a menace to merchant ships and war galleons alike. A coldwater scourge is immune to cold damage, and creatures that fail their Ref lex saves versus the scourge's acid jet are also staggered for 1 round. Steaming Scourge (+1 CR): The steaming scourge plagues the open waters of the Obari Ocean, sapping the life from unsuspecting marine animals as well as unwary fisherfolk and small seaside settlements. A steaming scourge possesses additional Hit Dice and the heat universal monster ability, and emits so much energy that any water in a 10-foot-radius spread around it begins to boil, dealing 1d6 points of damage to creatures that begin their turn submerged in it.",
    organization: "solitary, swarm (2-5), or bloom (6-9)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "acid jet": {
        type: "Ex",
        text: "Once every 1d4 rounds as a standard action, a sea scourge can shoot a stream of acidic juices in a 30-foot line, dealing 2d8 points of acid damage to any creatures in the area (DC 18 Reflex save for half damage). The save DC is Constitution-based."
      },
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d6+7 plus 1d4 acid"
      },
      engulf: {
        type: "Ex",
        preText: "DC 21, 1d6 acid and paralysis"
      },
      amphibious: {
        universalMonsterAbility: "Amphibious"
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Sea Snake": {
    source: "Isles Of The Shackles",
    creatureType: "animal",
    snake: true,
    reptile: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Small",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      climb: 20,
      swim: 40
    },
    abilities: {
      str: 8,
      dex: 15,
      con: 12,
      int: 1,
      wis: 13,
      cha: 2
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
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
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 1
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any oceans",
    visualDescription: "This scaly blue-green snake skims the surface of the water in a sinuous ballet of muscle and agility.",
    description: "This nasty water-dwelling creature is a particular bane to fisherfolk in tropical seas, occasionally getting caught up in their nets and striking angrily at unwary sailors as they spill their catch out onto the deck. The sea snake tends to follow schools of fish and pick off stragglers, choosing to hunt smaller prey instead of larger foes and only attacking more formidable enemies if it feels threatened. A sea snake's anatomy is particularly well adapted to its environment, and its single lung takes up its entire length. The average sea snake is 4 feet long from tail to head and weighs 10 pounds.",
    organization: "solitary, pair, or nest (3-8)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 1,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      },
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 12; frequency 1/round for 6 rounds; effect 1d3 Con; cure 1 save.",
        saveDC: 10
      }
    }
  },

  "Giant Sea Snake": {
    source: "Isles Of The Shackles",
    creatureType: "animal",
    snake: true,
    reptile: true,
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 9,
    hdVal: 8,
    cr: 7,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 30,
      climb: 20,
      swim: 40
    },
    abilities: {
      str: 29,
      dex: 14,
      con: 20,
      int: 1,
      wis: 15,
      cha: 2
    },
    feats: [
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bite",
        choiceSource: "Improved Critical"
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
        name: "Snatch",
        type: "Monster"
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
        specialAbility: "poison",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 10
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "warm oceans",
    visualDescription: "This great, writhing aquatic beast is pale blue with bright yellow stripes, and possesses a flipperlike tail to aid it as it swims.",
    description: "The giant sea snake is one of the biggest reasons many sailors of the Shackles have a downright visceral and phobic response to the thought of falling overboard. These patient predators are known to follow sailing ships, swimming just below the surface of the water while they wait for the opportunity to strike at any unfortunate crew members who might fall over the side. Particularly hungry giant sea snakes have been known to climb the side of a vessel and snatch unwary sailors right from the deck. Giant sea snakes typically reach up to 30 feet in length and weigh 500 pounds.",
    organization: "solitary or pair",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 0
      },
      Perception: {
        ranks: 3,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Stealth: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Swim: {
        ranks: 0
      }
    },
    special: {
      poison: {
        universalMonsterAbility: "Poison",
        type: "Ex",
        text: "Bite-injury; save Fort DC 19; frequency 1/round for 6 rounds; effect 1d2 Dex and 1d2 Con; cure 2 consecutive saves.",
        saveDC: 10
      },
      "hold breath": {
        universalMonsterAbility: "Hold Breath",
        parenthetical: ""
      }
    }
  },

  Soucouyant: {
    source: "Isles Of The Shackles",
    creatureType: "monstrous humanoid",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 12,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Magic"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 18,
      dex: 22,
      con: 17,
      int: 14,
      wis: 17,
      cha: 19
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Claw",
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
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to fire, charm, disease, fear, sleep"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron and magic"
      },
      SR: {
        value: 19
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "This walking nightmare resembles a white-haired old woman who looks as though she has been skinned alive, her bloody muscles and sinews pulsing grotesquely.",
    description: "Soucouyants are insidious monsters also known as blood crones. They prefer to live near small humanoid societies, assuming the appearance of a wizened old woman. It is only at night that she assumes her true form, when her wrinkled skin peels back and reveals the monstrosity that lurks within, which seeks the blood of those sleeping, unsuspecting neighbors who know her merely as the eccentric widow living at the edge of town. Soucouyants prefer to capture victims for their cruel experiments when possible, and drain such unfortunates of their blood over a course of days or even weeks to sate their sanguinary appetites. A typical soucouyant is 6 feet tall and weighs 120 pounds. The most powerful soucouyants take it upon themselves to further their spellcasting abilities, and usually possess levels as witches.",
    organization: "solitary",
    languages: "Abyssal, Common, Infernal",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "detect magic",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "chill touch",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "deep slumber",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "scorching ray",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "spider climb",
        casterLevel: 8,
        timesPerDay: -1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 12
      },
      Bluff: {
        ranks: 12
      },
      Disguise: {
        ranks: 12
      },
      Intimidate: {
        ranks: 12
      },
      Perception: {
        ranks: 12
      },
      Stealth: {
        ranks: 12
      }
    },
    special: {
      "blood drain": {
        universalMonsterAbility: "Blood Drain",
        damage: "1d2 Constitution"
      },
      "fiery form": {
        type: "Su",
        text: "As a standard action, a soucouyant who has removed her skin can assume the form of a flying ball of fire similar to that created by a flaming sphere spell (CL 8th) for up to 8 rounds. Upon returning to humanoid form, a soucouyant must wait 1d4 rounds before she can assume fiery form again. A soucouyant who enters the same space as a creature stops moving for that round and deals 3d6 points of fire damage to the creature unless it succeeds at a DC 18 Reflex save. A soucouyant in fiery form retains her usual AC, but is immune to nonmagical attacks and effects. A successful targeted dispel magic spell or dealing 20 points of cold damage to a soucouyant in fiery form forces her to return to her humanoid form. A soucouyant can assume fiery form a number of times per day equal to her Charisma modifier (6 for most soucouyants). The save DC is Charisma-based."
      },
      "mask evil": {
        type: "Su",
        text: "During the day, a soucouyant has the appearance of an old woman, an illusion created by an effect like alter self; at night the illusion fades, revealing her monstrous nature. While she is \"wearing\" her skin, a soucouyant's evil nature is masked as though by a constant undetectable alignment spell."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Kuru: {
    source: "Isles Of The Shackles",
    creatureType: "humanoid",
    subTypes: [
      "kuru"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 1,
    hdVal: 8,
    dontUseRacialHD: true,
    cr: "1/3",
    racialFeatures: [
      "Low-Light Vision",
      "Light Sensitivity"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 11,
      dex: 15,
      con: 12,
      int: 10,
      wis: 9,
      cha: 6
    },
    feats: [],
    attacks: [],
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "",
    visualDescription: "",
    description: "From the waist up, merfolk bear the torsos of well-built humans and delicate features reminiscent of elves and other humanoids tied to the natural world. A merfolk's lower body consists of the fins and tail of a great fish. Depending on the region, the scales of merfolk vary in hue, including gleaming silver, pale green, or even blue with stripes of yellow and crimson. Merfolk typically measure 6 to 8 feet in length and weigh over 200 pounds, with females being slightly smaller than males. Although amphibious, merfolk move only with difficulty on land and rarely wander more than a mile from sea. It is quite rare for a merfolk to make contact with a creature not of its kind. In fact, many go to great lengths to steer sailors away from their lands, even resorting to violence if necessary. Ancient accounts hint at merfolk protecting a terrible secret bound to the depths, and though no reports mention what this secret is, the lengths merfolk go to remain isolated from other races highlight the importance of this safeguard. While merfolk outwardly appear to be a beautiful and powerful race, some sages and seafarers whisper that degenerate and mutated merfolk roam the deepest, most isolated regions of the seas and oceans. Some evidence states that this offshoot fell to the worship of twisted and sinister powers lurking in the darkness below, while other theories include all merfolk in this sinister agenda, holding that even those merfolk who believe they control their own destinies are, in fact, merely unknowing puppets of a sinister and unknown master race deep under the sea. Merfolk Characters Merfolk are defined by their class levels-they do not possess racial Hit Dice. All merfolk have the following racial traits. +2 Dexterity, +2 Constitution, +2 Charisma: Merfolk are graceful, hale, and beautiful. +2 Natural Armor: Merfolk have tough skin. Aquatic: Merfolk are aquatic and can breathe water. Their land speed is 5 feet, but their swim speed is 50 feet. They are amphibious, but prefer not to spend long periods out of the water. Low-Light Vision: All merfolk have Low-Light Vision. Languages: Merfolk begin play speaking Common and Aquan. Merfolk with high Intelligence scores can choose any of the following bonus Languages: Aboleth, Aklo, Draconic, Elven, Sahuagin, and Sylvan.",
    organization: "",
    languages: "Common",
    spellLikeAbilities: [],
    skills: {},
    special: {}
  },

};