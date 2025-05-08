
export const Sword_Of_ValorCreatures = {
  "Demon Lord, Shax": {
    source: "Sword Of Valor",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 33,
    hdVal: 10,
    cr: 28,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Good",
      "Detect Law",
      "True Seeing"
    ],
    speed: {
      base: 50
    },
    abilities: {
      str: 30,
      dex: 39,
      con: 40,
      int: 30,
      wis: 31,
      cha: 31
    },
    feats: [
      {
        name: "Blinding Critical",
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
        name: "Craft Magic Arms and Armor",
        type: "ItemCreation"
      },
      {
        name: "Critical Focus",
        type: "Combat"
      },
      {
        name: "Double Slice",
        type: "Combat"
      },
      {
        name: "Greater Disarm",
        type: "Combat"
      },
      {
        name: "Greater Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Dagger",
        choiceSource: "Improved Critical"
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
        name: "Improved Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Improvised Weapon Mastery",
        type: "Combat"
      },
      {
        name: "Quick Draw",
        type: "Combat"
      },
      {
        name: "Throw Anything",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Two-Weapon Rend",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Dagger",
        enchantments: [
          {
            name: "Enhancement Bonus +5",
            source: "inherent"
          },
          {
            name: "Unholy",
            source: "inherent"
          }
        ],
        name: "Dagger",
        damage: "1d4"
      },
      {
        weapon: "Dagger",
        enchantments: [
          {
            name: "Enhancement Bonus +5",
            source: "inherent"
          },
          {
            name: "Unholy",
            source: "inherent"
          }
        ],
        name: "Dagger",
        damage: "1d4"
      },
      {
        weapon: "Bite",
        name: "Bite",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Thrown surgical tool",
        name: "Thrown surgical tool",
        damage: "1d6"
      }
    ],
    immunities: [
      "Immune to ability damage and drain, bleed, charm and compulsion effects, death effects, energy drain, petrification"
    ],
    defense: {
      DR: {
        value: 20,
        damageType: "cold iron, epic, and good"
      },
      SR: {
        value: 39
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "This stork-headed, winged humanoid is spattered with blood and wields a pair of gory, razor-sharp daggers in his dripping hands.",
    description: "Shax is the demon lord of envy, lies, and-above all else-murder. He rules an Abyssal realm known as Charnelhome, an immense mansion the size of a city perched atop a slanted bluff surrounded by a bog of thorny, blood-drinking plants. He is fond of inviting his captured enemies as well as his greatest worshipers into the chambers of this building, for those who survive his deathtraps often serve as lessons as to how he can improve his methods of mayhem. Shax is particularly skilled at blinding foes with critical hits-when he does so, he likes to pluck the eyes from his victim's face as part of the attack and swiftly gobble them down whole. He can hurl the countless surgical tools he carries on his body as deadly weapons, but prefers to slaughter foes in melee. Shax'sCult Babaus, chokers, derros, drow, evil nobles, serial killers, and torturers worship Shax by inflicting grisly torments on other conscious and living souls. The subjects of these tortures aren't always unwilling or innocent victims, although his cultists prefer tormenting enemies of the faith over allies or members. The cult's holy places are narrow alleyways in violent parts of large cities, hidden rooms in grand estates, and secret dungeons filled with deathtraps and torture chambers. These unholy temples are often guarded by fiendish animals (particularly large, predatory birds) and shadow demons, but are usually watched over by a number of babau demons as well. Enhanced versions of these demons, called the Sons of Shax, and can be found serving his greatest cults (Pathfinder Campaign Setting: Demons Revisited 7). Shax's unholy symbol is a curved white feather sitting in a pool of blood. His favored weapon is the dagger. He grants access to the domains of Chaos, Destruction, Evil, and Nobility, and to the subdomains of Demon, Leadership, Martyr, and Rage. For more rules about demon lords, including the full rules of Shax's Abyssal resurrection and summon demons abilities, see Pathfinder Adventure Path #73 page 81 or Pathfinder RPG Bestiary 4.",
    organization: "solitary (unique)",
    languages: "Abyssal, Celestial, Common, Draconic; telepathy 300 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "detect law",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "freedom of movement",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "true seeing",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "unholy aura",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "astral projection",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "blasphemy",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "blood biography",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "desecrate",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "dispel magic, greater",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "telekinesis",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "shapechange",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "spiritual weapon",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "unhallow",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "unholy blight",
        casterLevel: 28,
        timesPerDay: -1
      },
      {
        name: "blade barrier",
        casterLevel: 28,
        timesPerDay: 3
      },
      {
        name: "mage's sword",
        casterLevel: 28,
        timesPerDay: 3
      },
      {
        name: "symbol of pain",
        casterLevel: 28,
        timesPerDay: 3
      },
      {
        name: "finger of death",
        casterLevel: 28,
        timesPerDay: 1
      },
      {
        name: "time stop",
        casterLevel: 28,
        timesPerDay: 1
      },
      {
        name: "weird",
        casterLevel: 28,
        timesPerDay: 1
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 28
      },
      Bluff: {
        ranks: 33
      },
      Craft0: {
        subSkill: "alchemy",
        ranks: 33
      },
      "Disable Device": {
        ranks: 36
      },
      Fly: {
        ranks: 33
      },
      Heal: {
        ranks: 33
      },
      Intimidate: {
        ranks: 36
      },
      "Knowledge (arcana)": {
        ranks: 33
      },
      "Knowledge (engineering)": {
        ranks: 11
      },
      "Knowledge (planes)": {
        ranks: 33
      },
      "Knowledge (religion)": {
        ranks: 33
      },
      Perception: {
        ranks: 33,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      "Sense Motive": {
        ranks: 33
      },
      "Sleight of Hand": {
        ranks: 33
      },
      Spellcraft: {
        ranks: 33
      },
      Stealth: {
        ranks: 33
      },
      "Use Magic Device": {
        ranks: 36
      }
    },
    special: {
      "command blood": {
        type: "Su",
        text: "As a swift action, Shax can command the blood of any creature that is currently suffering from bleed damage to do his bidding. The target must be within 60 feet of Shax for him to use this ability. The target can resist this ability with a successful DC 36 Fortitude save. If the target fails the save, Shax can command the victim's blood to behave in one of the manners listed below. Once commanded, the blood continues to function in this way for as long as the victim continues to bleed. Shax can change the effect in a subsequent round by using this ability again, but no more than one of the following effects can be in effect at any one time. The save DC is Charisma-based. Blinding Blood: The victim's blood runs up into its eyes and blinds it at the start of its turn unless the victim takes a move action to wipe away the blood. Once a victim is blinded in this way, it remains blinded as long as the bleed effect continues. Bloody Mess: The victim's blood spreads out across its body, making it slippery. This grants a +10 circumstance bonus on Escape Artist checks and all attempts to resist being grappled, but the victim must succeed at a DC 36 Reflex save at the start of each round or drop objects it holds. These effects last as long as the bleed effect continues. Choking Blood: The target's blood runs up into its nostrils and mouth unless the creature uses a free hand to pinch its nose shut and holds its breath. If the target doesn't do so, the blood runs into its lungs and the creature must succeed at a Constitution check each round or it begins to drown. Once a victim begins to drown, it continues to do so as long as the bleed effect persists. Gruesome Tendrils: This effect automatically ends any bleed effects the victim is currently suffering as it causes the blood coating the victim to solidify into thin, whiplike tendrils that lash out at any creature within 5 feet. Any creature that begins its turn in this area automatically takes 1d6 points of slashing damage and 1d6 points of bleed damage; a successful DC 36 Reflex save prevents this damage."
      },
      "frightful weapon prowess": {
        type: "Ex",
        text: "When an opponent observes Shax's attacks, the frightening display of the demon lord's grace makes the victim take additional damage from those attacks, as if simply imagining the damage were enough to cause injury. Shax gains a profane bonus equal to his Charisma modifier on damage rolls (+10 damage) with all weapon attacks and ranged attacks made against a victim who can observe him. This damage is negated if the victim closes its eyes, but doing so puts the opponent in greater danger from Shax's sneak attacks. This is a visual fear effect."
      },
      "painful cuts": {
        type: "Ex",
        text: "Whenever Shax threatens a critical hit with a slashing weapon, the victim must succeed at a DC 36 Fortitude save or be staggered by the pain for 1 round. If the hit was a critical hit, the staggered effect lasts for 1d4 rounds on a failed saving throw. The save DC is Charisma-based."
      },
      "sneak attack": {
        universalMonsterAbility: "Sneak Attack",
        bonus: "5d6"
      },
      "summon demons": {
        type: "Sp",
        text: "Once per day, nascent demon lords can summon any demon or combination of demons whose total combined CR is 20 or lower. This ability always works, and is equivalent to a 9th-level spell."
      },
      "master of lies": {
        type: "Ex",
        text: "Shax is immune to any magical effect that discerns lies or forces him to speak the truth."
      },
      regeneration: {
        universalMonsterAbility: "Regeneration",
        type: "Ex",
        damageType: "deific or mythic",
        value: 30
      },
      "absorb blood": {
        type: "Su",
        text: "If a creature dies while under the effects of Shax's ability to command blood, all of the victim's blood slithers out of its body and moves at a speed of 60 feet toward Shax. If the slithering blood reaches Shax, it flows up onto his body and is absorbed, affecting Shax as a heal spell (CL 28th). A slithering pool of blood can be destroyed by any amount of fire damage applied to it before it reaches its goal, or by the application of an effect that transmutes liquid to something other than blood. Aura of Bleeding Wounds (Su) Whenever a creature takes piercing or slashing damage within 30 feet of Shax, it takes an additional 1d6 points of bleed damage. This bleed damage stacks with itself, up to a maximum of 10d6 points. As a free action, Shax may designate any number of creatures within the aura to be exempt from this effect."
      },
      "abyssal resurrection": {
        type: "Ex"
      },
      "freedom of movement": {
        type: "Ex"
      },
      "bleeding wounds": {
        type: "Su",
        text: "Whenever a creature takes piercing or slashing damage within 30 feet of Shax, it takes an additional 1d6 points of bleed damage. This bleed damage stacks with itself, up to a maximum of 10d6 points. As a free action, Shax may designate any number of creatures within the aura to be exempt from this effect.",
        preText: "30 ft."
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "120 ft."
      }
    },
    resistances: [
      {
        damageType: "acid",
        value: 30
      },
      {
        damageType: "cold",
        value: 30
      },
      {
        damageType: "fire",
        value: 30
      }
    ]
  },

  Thoxel: {
    source: "Sword Of Valor",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "demon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 19,
      dex: 15,
      con: 17,
      int: 8,
      wis: 10,
      cha: 14
    },
    feats: [
      {
        name: "Double Slice",
        type: "Combat"
      },
      {
        name: "Two-Weapon Fighting",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Two-bladed sword",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Two-bladed sword",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "2 Two-bladed sword",
        damage: "1d8/1d8"
      },
      {
        weapon: "Composite longbow",
        name: "Composite longbow",
        damage: "1d8",
        strBonus: 4
      }
    ],
    defense: {
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Abyss)",
    visualDescription: "Dead white scars and raw red flesh crisscross this creature's scorched and sallow skin as though it has been flogged and branded a thousand times.",
    description: "Able to take the shape of rank-and-file soldiers and infect military ranks like a cancer, thoxels-also known as insubordination demons-spend every drop of their malice to break down the cooperative spirit of those who fight together. Among mortal soldiers, thoxels whisper disparaging words about commanders, talk in hushed tones about the danger of upcoming battles, or belittle other soldiers' accomplishments. Many great battles are said to have been lost because of the presence of these subtle but murderous demons within an army's ranks. They represent a passion to kill as they please without caring about order, control, or their allies. Despite their skill at martial exploits, thoxels are lazy and untrustworthy creatures. Thoxel demons are 6 feet tall and weigh 200 pounds. Ecology Thoxel demons form from the souls of deserters and traitors, those who abandoned their posts and their erstwhile allies to their fates while they sought glory elsewhere on the battlefield, or safety far from it. These cowardly demons delight in breaking the spirits of those they hide among, disguised as typical soldiers. Their defining sin is the ruin, pain, and death they brought to others by failing to follow orders, keep discipline, and stand firm in face of adversity. It is not just that they failed private tests of character, but also that their moral disintegration led to great suffering in others who trusted them and depended on them. Those betrayers who sought to expiate their guilt through reconciliation and reparations to those they abandoned still earned their shame but preserved their eternal souls, but the unrepentant souls who callously disregarded the tragedies left in their wake, hewing to their own path again and again despite the havoc they left behind, often find their way to the Abyss. Thoxel demons are lazy in the extreme, prone to shirking labor and sleeping whenever they have the chance-despite not needing to do so. Thoxels usually have to be herded into work details and closely supervised by more powerful demons. When closely directed, they can perform impressively in battlefield maneuvers and move with tight precision, coordinating their attacks between one another in order to bring down lone prey too strong for a single thoxel to defeat on its own. Once their prey is taken or the enemy's resolve is broken, their temporary alliances fracture quickly and they resort to squabbling and fighting among themselves over the spoils, with the strongest taking the lion's share and the rest settling for scraps. Habitat & Society Thoxel demons are instruments of spiritual torture, in that they represent the advent of hope followed by its shattering destruction. They appear to be strong and steadfast warriors who march in precise formation and keep their armaments perpetually polished to a parade ground shine, yet at precisely the wrong moment they break and run, or disrupt careful formations with sudden and unexpected maneuvers aimed at self-aggrandizement or self-preservation. They corrode discipline and morale, turning troops against commanders and allies against friends. Thoxels are agents of dissension and disruption, whether working alone or using magical or mundane disguises to infiltrate existing units. Thoxels are reborn into bodies very much like the ones they possessed in life, though they are scarred and physically tormented for their cowardice and treachery in life before being reborn into an eternity of spreading their sin to others. They are formed up into squads and platoons and set to patrol the endless realms of the Abyss when not sent to break armies on the Material Plane. These groups of thoxels form fluid ranks, gathering together for short periods of time interspersed with long periods of lazy rest. Though thoxels willingly fight for any demons more powerful than themselves, they are common within the Abyssal realm of Charnelhome, where the psychic implements of Shax dissect and dismember soul and spirit as surely as they do flesh and bone. There, thoxels spar continuously with the babaus and chokers who lurk in every shadowy corner of Charnelhome, fighting a guerrilla war to show who are the fittest servants of the Blood Marquis. Thoxel demons are skilled artisans, able to forge and maintain weapons and armor of excellent quality, and they take a certain pride in ensuring their personal armaments are always sharp and in good repair. When closely supervised, thoxel demons can be tasked with forge duty, turning out weapons for demonic legions in great numbers. However, their selfishness and laziness impairs their usefulness as foundry smiths for demon armies, as they frequently take shortcuts to get through their quotas and care little for the fate of demonic soldiers whose weapons shatter in battle or whose armor is ill-fitting or missing key fasteners. Anyone who relies on an insubordination demon's craftsmanship takes a great risk, for thoxels rarely put much care and attention to detail into the armor or weapons that are intended for anyone but themselves.",
    organization: "solitary, pair, squad (3-6), or platoon (7-12)",
    languages: "Abyssal, Celestial, Common, Draconic; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "alter self",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "teleport, greater",
        casterLevel: 6,
        limitations: "self plus 50 pounds of objects only",
        timesPerDay: -1
      },
      {
        name: "confusion, lesser",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "murderous command",
        casterLevel: 6,
        timesPerDay: 3
      }
    ],
    skills: {
      Bluff: {
        ranks: 6
      },
      Craft0: {
        subSkill: "weapons",
        ranks: 2
      },
      Craft1: {
        subSkill: "armor",
        ranks: 0
      },
      Disguise: {
        ranks: 6
      },
      Intimidate: {
        ranks: 6
      },
      Perception: {
        ranks: 2,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      },
      Profession0: {
        subSkill: "soldier",
        ranks: 9
      }
    },
    special: {
      "betrayer's blade": {
        type: "Su",
        text: "If a thoxel demon hits a creature with both ends of its two-bladed sword in the same round, the target is compelled to attack its leader. The target can negate this effect with a successful DC 15 Will save. A creature affected by this effect turns on its leader or commander and attacks as if it were dominated for 1d6 rounds. An animal companion, cohort, or familiar must attack its master, and a called, charmed, dominated, or summoned creature must attack the creature controlling it. If a creature has no leader, it instead attacks a random ally. This is a mind-affecting compulsion effect, and the save DC is Charisma-based."
      },
      "disrupt coordination": {
        type: "Su",
        text: "Whenever a creature threatened by a thoxel demon uses the aid another action, the thoxel can, as an immediate action, attempt to interrupt and negate that action. The thoxel demon must make an attack roll. The attack roll of the creature performing the aid another action must equal or exceed the thoxel demon's attack roll; otherwise, the aid another action is negated."
      },
      insolence: {
        type: "Su",
        text: "Any creature adjacent to a thoxel demon must succeed at a DC 15 Will save or become insolent and uncooperative with its allies. Creatures affected by this aura stop functioning as allies to other creatures. An affected creature can't provide flanking, can't serve as an ally for teamwork feats or aid another actions, and doesn't allow its allies to move through its space. Any spell or effect that requires a willing target fails if it is used on an affected creature, and even harmless effects require an attack roll (if applicable) and require the insolent creature to attempt a saving throw against them. An affected creature remains insolent as long as it is adjacent to a thoxel demon and for 1d4 rounds thereafter. A creature that successfully saves is not subject to the same thoxel's aura for 24 hours. Thoxel demons are immune to this effect. The save DC is Charisma-based.",
        preText: "5 ft., DC 15"
      }
    }
  },

  "Man-Eating Aurochs": {
    source: "Sword Of Valor",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 3,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 23,
      dex: 10,
      con: 21,
      int: 4,
      wis: 15,
      cha: 8
    },
    feats: [
      {
        name: "Endurance",
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
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "slashing"
      },
      naturalArmor: 6
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "temperate plains",
    visualDescription: "No ordinary bovine, this hulking beast has bloodstained horns and sharpened teeth. Its eyes show a malign intelligence.",
    description: "Scholars will explain that though many animals fight to defend their territory and their young, only a few apex predators hunt humanoids for food. Yet any villager across the Inner Sea region can recount tales about man-eating beasts that once lurked in the local wilderness (and might still). Any sort of animal can become a man-eater, from known predators to seemingly harmless herbivores. Though the creatures and locations may change, certain elements remain the same in tales of man-eating animals. Having tasted human flesh, these animals can't be sated by any other type of food. Man-eaters have terrible bites, and hunters' arrows bounce off their hides. Man-eaters are unusually bold, no longer frightened by human presence like their kin. Yet they are also canny, employing tactics no mere animal could conceive. Man-eaters appear able to understand human speech, and some of the more fanciful stories even claim the animals can speak. A man-eating animal can be distinguished from its common relatives by its carnivorous teeth, enlarged jaws, and the glint of intelligence in its eyes. Ecology Most tales of man-eating animals are sparked by rabid or starving (but otherwise normal) animals, but true man-eaters do exist. Such abominations are the result of a fiendish spirit fusing with that of a mundane animal. Though not wholly fiendish in nature, the beast gains limited sentience, increased resilience, and unnatural appetites. Despite popular belief, eating humanoid flesh isn't enough to turn an animal into a man-eater. The creature must be exposed to chaotic and evil influences, whether from a planar gate, demonic altar, or transformative elixir (such as the blood of Baphomet). Man-eating animals can also result from botched summonings and incomplete exorcisms. A fiendish spark set loose might inhabit an animal's form so that the foul spirit can continue to spread suffering. Man-eating animals are no longer part of the natural Ecology. They hunt almost ceaselessly, preferring intelligent prey above all else. They rarely die of natural causes, almost always meeting their ends in bloody conf lict. These creatures can and do mate with members of their original species. In cases of multiple births, only one of the litter inherits this corruption, and it soon devours its siblings. Habitat & Society Individual man-eaters might be found anywhere-the freak results of black magic and vicious natures-but they're encountered in numbers only where fiendish influence is strong. Man-eating animals are most common in the blasted landscape of the Worldwound, where they nearly outnumber their natural counterparts. In Kyonin, man-eaters have been born to otherwise normal animals, a sign to the elves that Tanglebriar's corruption is expanding. Man-eating animals, especially large bovines such as aurochs and bison, are sacred to the followers of Baphomet, demon lord of beasts. Away from civilized lands, cults of Baphomet raise small herds of these carnivorous cattle, feeding them on corpses when live victims are unavailable. Man-eating animals serve as guards and pets for dark cultists and the demons they worship. Though too intelligent and willful to be trained like normal animals, man-eaters gladly serve those who encourage their bloodlust. A dissatisfied man-eater, however, is likely to turn on its so-called master the second its master displays a moment of weakness. With their rudimentary intelligence, man-eating animals are able to understand the guttural tongue of the Abyss, and to learn common words in the language of those they hunt. Many take advantage of hunters who assume they are dumb animals. Man-eaters' combination of animal instinct and demonic cunning allows them to more easily hunt their preferred prey: humanoids. Man-eating animals are known to track victims over long distances, their enhanced senses and great endurance allowing them to continue the chase long after their prey becomes fatigued. An innate sense of direction sometimes allows a man-eater to anticipate (or overhear) its victim's destination and reach it before the creature. Even latched gates and animal traps prove ineffective against the man-eater's cunning. Creating a Man-Eating Animal \"Man-Eating\" is an inherited or acquired template that can be added to a creature of the animal type. A man-eating animal uses all the base creature's statistics and special abilities except as noted here. CR: HD 4 or fewer, as base creature + 1; HD 5 to 10, as base creature + 2; HD 11 or more, as base creature + 3. Alignment: Chaotic evil. Type: A man-eating animal's type changes to magical beast. It retains any subtypes except for alignment subtypes. Armor Class: A man-eating animal's natural armor improves by +2. Hit Dice: A man-eating animal's racial HD change to d10s. Defenses/Qualities: A man-eating animal gains Darkvision 60 feet, and DR 5/slashing (if HD 11 or fewer) or 10/slashing (if HD 12 or more). Melee: A man-eating animal gains a bite attack. Damage from the bite attack depends on the creature's size (Pathfinder RPG Bestiary 301-302). If the base creature already has a bite attack, it gains Improved Natural Attack (bite) and Improved Critical (bite) as bonus feats. It also adds 1-1/2 times its Str bonus to the damage (or twice its Str bonus if a bite is its only natural attack). Abilities: Con +4, Int +2, Wis +4, Cha +4. BAB: A man-eating animal's base attack bonus is equal to its Hit Dice. Skills: A man-eating animal gains a +4 racial bonus on Survival checks to follow tracks. Languages: A man-eating animal understands Abyssal and Common, but cannot speak. Blood of Baphomet The demon lord of beasts grants dedicated followers the means to turn ordinary animals into man-eaters by means of a magical elixir. Called the blood of Baphomet, this ichorous fluid is purported to contain the distilled essence of animal savagery. A cleric of Baphomet can gain access to the required spells from her domains: beast shape III from the Animal domain or Fur subdomain and rage from the Demon or Ferocity subdomain.",
    organization: "solitary, pair, or herd (3-30)",
    languages: "Abyssal, Common (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 3
      },
      Survival: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      }
    },
    special: {
      stampede: {
        type: "Ex",
        text: "A stampede occurs when three or more creatures with stampede make a trample attack while remaining adjacent to each other. While stampeding, the creatures can trample foes of their size of smaller, and the trample's save DC increases by 2."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d6+9",
        saveDC: 10
      },
      "natural cunning": {
        type: "Ex"
      }
    }
  },

  "Vescavor Queen": {
    source: [
      "Sword Of Valor",
      "Bestiary 5"
    ],
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 12,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 50
    },
    abilities: {
      str: 17,
      dex: 16,
      con: 18,
      int: 11,
      wis: 14,
      cha: 13
    },
    feats: [
      {
        name: "Blind-Fight",
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
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Power Attack",
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
        name: "Bite",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "3d6",
            appliesTo: "damageType",
            damageType: "acid"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Spit acid",
        qualities: [
          "ranged touch"
        ],
        name: "Spit acid",
        specialAbility: "Spit acid",
        damage: "5d6"
      }
    ],
    immunities: [
      "Immune to acid, poison"
    ],
    defense: {
      SR: {
        value: 20
      },
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "5 ft.",
    environment: "any (the Abyss)",
    visualDescription: "With a black carapace that has a sheen reminiscent of watery oil, this verminlike creature has membranous wings the shade of obsidian. Its sharp teeth drip with acid.",
    organization: "solitary or hive (1 vescavor queen and 2-20 vescavor swarms)",
    languages: "Abyssal",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 13
      },
      Climb: {
        ranks: 9
      },
      Fly: {
        ranks: 15
      },
      "Knowledge (dungeoneering)": {
        ranks: 10
      },
      "Knowledge (planes)": {
        ranks: 7
      },
      Perception: {
        ranks: 12
      },
      Stealth: {
        ranks: 12
      },
      Survival: {
        ranks: 13
      }
    },
    special: {
      "spit acid": {
        type: "Ex",
        text: "As a standard action, a vescavor queen can spit acid at a foe within 30 feet. With a successful ranged touch attack, the target is hit with a glob of acid and takes 5d6 points of acid damage. In addition, the spit of a vescavor queen contains some of its pheromones. Any target that takes damage from this attack acts as a beacon for any vescavor swarms; the damaged creature takes a -8 penalty on Stealth checks against the vescavor queen and swarms it controls, and likely becomes the swarm's next target."
      },
      compression: {
        universalMonsterAbility: "Compression"
      },
      "swarm mother": {
        type: "Su",
        text: "A vescavor queen can mentally control up to 20 Hit Dice of vescavor swarms through a combination of supernatural pheromones and magical manipulation. To control a vescavor swarm, the vescavor queen must be able to see it and must be within 120 feet of it. Attempting to control a vescavor swarm is a standard action, and the swarm can attempt to resist this attempt with a DC 17 Will save. If the swarm fails this save, the vescavor queen can issue a simple mental command as a swift action, like \"fight,\" \"come here,\" \"go there,\" or \"stay still.\" Vescavor swarms affected by this ability act normally unless a vescavor queen is actively controlling them, but never attack the vescavor queen. The save DC is Charisma-based. In addition, a vescavor queen is immune to a vescavor swarm's swarm attacks and supernatural special abilities. A vescavor queen can release a vescavor swarm from its control as a free action. If a vescavor queen is killed, any vescavor swarms under its control disperse."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      chaos: {
        type: "Ex",
        preText: "10 ft."
      },
      gibber: {
        type: "Su",
        text: "Like their broods, vescavor queens yammer the endless chorus of the Abyss. Any creature within 15 feet of a vescavor queen must succeed at a DC 20 Will save or be confused for 1 round. A creature that successfully saves can't be affected by the same vescavor queen's gibbering for 24 hours. The save DC is Constitution-based.",
        preText: "15 ft., DC 20"
      }
    },
    resistances: [
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

};