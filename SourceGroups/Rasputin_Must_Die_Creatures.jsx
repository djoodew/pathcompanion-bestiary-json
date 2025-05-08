
export const Rasputin_Must_DieCreatures = {
  "Animated Tank": {
    source: "Rasputin Must Die",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 16,
    hdVal: 10,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 35,
      dex: 12,
      con: "-",
      int: 13,
      wis: 10,
      cha: 9
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
        name: "Improved Bull Rush",
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
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Maxim m1910 machine gun",
        name: "3 Maxim m1910 machine guns",
        damage: "2d8"
      },
      {
        weapon: "Hotchkis",
        name: "Hotchkiss"
      }
    ],
    immunities: [
      "construct traits"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      naturalArmor: 20
    },
    space: "15 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "Like a deranged caterpillar of grinding metal and protruding turrets, this massive armored vehicle dominates the battlefield, spitting hot lead and artillery-seemingly without a crew.",
    description: "The brains of great military commanders and tacticians need not go to waste simply because their mortal bodies have been slain. Preserved in glass vessels, bathed in nutrient fluids, and wired to strange energies and bizarre technologies, these organs are given new life, as their mental talents are preserved and tapped to independently control monstrous war machines. Though the methods, magic, and technology used differ between creators of these hulking engines, incarnations of these creatures typically take the form of captured siege engines and vehicles retrofitted to allow independent control by the pickled brains inside. Animated tanks are perhaps the most dangerous of such animate siege engines. Thought haunted by some, and simply assumed by others to be well-commanded vehicles crewed by crack soldiers, these animated monstrosities are feared and loathed on battlefields across the front. Blessed with incredible armor and the ability to never tire or deplete their stocks of ammunition, these creatures run roughshod over trenches and barricades alike, grinding troops unfortunate enough to fall beneath their tracks to splinters of meat and bone. The tremendous range afforded by their armaments only makes matters worse for those forced to confront the lumbering monstrosities, and finding a weakness within their steel carcasses is nigh impossible. Animated tanks are found in the company of one or more rifle or flamethrower troops; these soldiers are usually either keenly aware of the tank's unique magical animation, or wholly ignorant of its mysterious and taciturn movements as they simply follow their commander's orders without regard to the tank's missing crew. Those hearing the tanks' orders in their own heads, however, instantly realize that something is not quite normal. As animated tanks are built with the armored frames of British Mark IV tanks-a common war wagon on First World War battlefields-few soldiers question the orders of their superiors when tasked with accompanying one of the beasts. Though Mark IV tanks could normally hold a crew of eight, the cabin of an animated tank is filled with strange technological and alchemical devices, allowing only four Medium creatures space to ride inside-that is, if the animated tank agrees to carry passengers. Animated tanks were designed by Viktor Miloslav for use by the Russian Imperial Army, and it is thought that this mad experimentation and blasphemous use of the deceased is what triggered his exile to the cold wastes of Siberia and his imprisonment in the Akuvskaya prison camp. It is ultimately unknown how effective the creations of Viktor Miloslav proved on the battlefields of the Great War, or whether any of the monstrosities survived the war, as their shelled-out carcasses look little different from normal tanks, with the exception of a faint smell of formaldehyde and remnants of broken glass not usually found with tanks of this model. Whether some slumbering beast waits patiently in some forgotten barn or warehouse remains to be seen, or whether brave soldiers have laid this dangerous and blasphemous technology to rest is unknown, but hopefully Viktor Miloslav's mad designs have all been destroyed or lost forever. Variants Viktor Miloslav is rumored to have created variations on the normal Mark V tank during his brief explorations into self-animated war machines during World War I. \"Female\" Animated Tank (CR 11): So named because it lacked the heavier Hotchkiss 6 pounder guns of its more robust counterpart, this variant makes up for its lack of explosive firepower with a bristling barrage of machine gun fire, being able to make up to five attacks per round with its Maxim M1910 machine guns. The tanks are otherwise identical in most respects, and few find a female animated tank's lack of Hotchkiss 6 pounder guns a relief when faced with its withering machine gun attacks. The \"Moving Fortress\" (CR 13): Once word of Viktor Miloslav's inventions spread to Germany, the engineers there tried to replicate the effects he'd achieved, though it's unknown to what degree they succeeded. Should one of these specimens have survived, it would have been much more highly armored, built on the base of the German A7V tank-designed literally like a tracked, armored land ship. A moving fortress has 2 additional Hit Dice, and its natural armor bonus is increased by 5. Its single main gun, more robust than the Hotchkiss 6 pounder, deals an additional 4d6 points of damage, and the moving fortress is equipped with six Maxim M1910 machine guns. Construction An animated tank is built by retrofitting a preexisting tank and hard-wiring its pickled brain to the controls through strange technology, rather than crafting the construct's tank body from scratch. The secrets to preserving brains and connecting them to metal war wagons is lost, as is the nonmagical technological process by which Viktor Miloslav constructed the monstrosities found on Earth during the First World War. However, those able to inspect a destroyed specimen may be able to reconstruct the process. In addition to an animated tank's creation requirements-beyond the body of an intact tank-an animating brain must be harvested soon after its body is deceased, preserved with gentle repose, and subjected to a special nutrient bath before being revived and ultimately hooked into the tank. Only time and experimentation will reveal whether other secrets to this mysterious process were lost in the chaos of war on Earth. ANIMATED TANK CL 12th; Price 200,000 gp CONSTRUCTION Requirements Craft Construct, animate object, geas/quest, resurrection, telekinesis; Skill Craft (blacksmithing), Knowledge (engineering), and Heal DC 25; Cost 100,000",
    organization: "solitary, troop (2-4), squadron (5-12)",
    languages: "Russian (can't speak); telepathy 100 ft.",
    spellLikeAbilities: [],
    skills: {
      Intimidate: {
        ranks: 16
      },
      Perception: {
        ranks: 16
      },
      "Sense Motive": {
        ranks: 16
      }
    },
    special: {
      "integrated weaponry": {
        type: "Ex",
        text: "An animated tank is equipped with three Maxim M1910 machine guns (see page 65) and two Hotchkiss 6 pounders (see page 66) built into its body. It treats these weapons as natural attacks and not manufactured weapons. It cannot make iterative attacks with these weapons. An animated tank has its weapons arranged on all sides of its body and can make three machine gun attacks and one Hotchkiss 6 pounder attack each round. An animated tank's weapons can still be targeted by effects that target manufactured weapons (such as magic weapon spells or sunder attempts), but cannot easily be harvested for use once the animated tank is destroyed. An animated tank is always proficient with its weapons, and its ranged weapons do not provoke attacks of opportunity when fired in melee combat."
      },
      telekinesis: {
        type: "Su",
        text: "The pickled brain that animates the tank possesses a supernatural ability to manipulate its surroundings and reload its armament. The animated tank can use telekinesis as a standard action every 1d4 rounds (caster level 16th). Vicious Trample (Ex) An animated tank's powerful metal treads deal 6d6+18 points of damage on a successful trample."
      },
      "vicious trample": {
        type: "Ex",
        text: "An animated tank's powerful metal treads deal 6d6+18 points of damage on a successful trample.",
        preText: "6d6+18, DC 30"
      },
      "inexhaustible ammo": {
        type: "Su",
        text: "An animated tank loads and fires its weapons as a normal tank, but it telekinetically reloads from a supernaturally endless supply of ammunition."
      }
    }
  },

  Genthodaemon: {
    source: "Rasputin Must Die",
    creatureType: "outsider",
    subTypes: [
      "daemon",
      "evil",
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 6,
    hdVal: 10,
    cr: 5,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30,
      maneuverability: "Average",
      fly: 30
    },
    abilities: {
      str: 18,
      dex: 11,
      con: 16,
      int: 11,
      wis: 12,
      cha: 15
    },
    feats: [
      {
        name: "Power Attack",
        type: "Combat"
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bite",
        choiceSource: "Weapon Focus"
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
        specialAbility: "bleed",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tail slap",
        name: "Tail slap",
        specialAbility: "bleed",
        damage: "1d6",
        type: "secondary"
      },
      {
        weapon: "Shrapnel",
        name: "4 Shrapnel",
        specialAbility: "Shrapnel",
        damage: "1d6"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "good or silver"
      },
      naturalArmor: 9
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any (Abaddon)",
    visualDescription: "Jagged bits of metal, armor, and sharp pieces of wire embed the flesh of this towering fiend.",
    description: "Genthodaemons are common troops of daemonic armies, resolutely obedient to any greater type of daemon that gives them orders. They personify death in hopeless or futile wars, genocide, and the despair created by long, bloody stalemates where the combatants lose their will to live and forget why they were fighting in the first place. They have almost no role in corrupting mortals, as they are devoid of interest in the fates of most other creatures, but are sometimes called by daemonologists or greater daemons for use in war or their ability to shape battlefields. Any daemon that can summon a ceustodaemon can instead use its summon ability to summon a genthodaemon. A genthodaemon looks like a stereotypical fiend- basically humanoid, but with claws, a tail, batlike wings, and cloven hooves. Metal armored plates, barbs, and spikes cover its body, though these are part of the daemon rather than armor it wears. Its claws are jagged metal shards sprouting from its fingers where nails should be. Genthodaemons are only slightly above cacodaemons and lacridaemons in the hierarchy of Abaddon. A greater daemon may create a genthodaemon from a cacodaemon or one of the hunted (a dead soul trying to survive on Abaddon); however, most arise naturally from war-battered souls who band together as hunted, transforming into true daemons simultaneously when the group has cannibalized enough souls. Genthodaemons show unusual loyalty to others in their band, though this doesn't interfere with their obligations to more powerful daemons. A typical genthodaemon stands over 9 feet tall and weighs 500 to 600 pounds (with much of this weight stemming from the daemon's embedded metal). Ecology Souls that become genthodaemons usually come from worlds where war technology has advanced to allow production of large amounts of metal armor and weapons-particularly worlds where firearms have been invented. When battle grows so such a scope that the enemy becomes a faceless tide, or killing becomes casual and easy at long range, the act of waging war becomes completely dehumanized and soldiers become mere pieces in a perpetual machine. In such grim instances and the seeds are planted to send soldiers' souls to Abaddon. These ties to the craft of war stain the dead soul and the daemon created from it, manifesting as armor plates fused with daemonic flesh, pieces of weapons embedded in its bones, or even remnants of siege engines or barbed wire sprouting from or wrapped around the daemon's body. These elements are part of the daemon, not mere decorations, but any mechanical pieces merely resemble functional items and no longer work (for example, a daemon with a crossbow or rifle embedded in its arm cannot shoot it). Genthodaemons from the same band often resemble each other, including the shape of their metal parts, sometimes because their mortal selves were even in the same army and uniform. Though genthodaemons serve in the armies of all four Horsemen, they are most strongly associated with Szuriel, the Horseman of War. Her military background, strong discipline, and focus on the brutality of war resonates with the core of a genthodaemon's being. Those who (as mortals) were involved in acts of genocide have a morbid fascination with obscisidaemons and tend to follow them. Though genthodaemons were not the instigators of genocide in their mortal lives (which could have granted them higher status on Abaddon), those who participated in such acts feel a fawning admiration for the greater daemons who orchestrated such atrocities. Like other daemons, genthodaemons hate all living things-and to an extent, themselves-and look forward to the death of the last mortal, for on that day they will have no other reminders of their bleak mortal lives and can focus all their hate inward. Habitat & Society Genthodaemons patrol the fortresses, cities, ruins, and wastelands of Abaddon looking for invaders, hostile non-daemons, and gangs of the hunted. Because they usually travel in groups, they are rarely preyed upon by other creatures and only have to face death when deployed as part of a Horseman's army. They are of low status but fulfill a necessary role as soldiers of Abaddon. Greater daemons treat them with the formal respect due their relative difference in rank, much like how a general might treat a common soldier. However, in the wars against mortal life, the Horsemen understand the value of suicidal missions and brazen sacrifice, and are not above sending countless genthodaemons to permanent destruction if it advances the cause of Abaddon. The genthodaemons accept this as their lot and never complain, as protests require effort, will, and the belief that there is a possibility of change-three things these shell-shocked creatures lost long ago. On the Material Plane, genthodaemons sometimes serve daemonic cults that are unworthy of a greater daemon's attention or lacking the power to summon a more powerful creature. As their magic is suitable for war and destruction, they have limited use to mortal cultists not intent on violence.",
    organization: "solitary or squad (2-18)",
    languages: "Abyssal, Draconic, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [
      {
        name: "detect good",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "cause fear",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "confusion, lesser",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "message",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "obscuring mist",
        casterLevel: 6,
        timesPerDay: -1
      },
      {
        name: "crushing despair",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "dispel magic",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "meld into stone",
        casterLevel: 6,
        timesPerDay: 1
      },
      {
        name: "move earth",
        casterLevel: 6,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 9
      },
      Intimidate: {
        ranks: 9
      },
      "Knowledge (engineering)": {
        ranks: 9
      },
      "Knowledge (planes)": {
        ranks: 6
      },
      Perception: {
        ranks: 6
      },
      Stealth: {
        ranks: 6
      }
    },
    special: {
      "penetrating slivers": {
        type: "Ex",
        text: "When a genthodaemon confirms a critical hit with a claw attack, pieces of its metal nails break off and enter the target's body, working their way toward its heart. When the slivers reach the heart 1d3 rounds later, the creature takes 1d6 points of Constitution damage. The slivers are destroyed by anything that removes curses, diseases, or death effects. Likewise, creatures immune to curses, diseases, and death effects are immune to this ability."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d6+6 plus bleed (1d4"
      },
      "DC 17)": {
        type: "Ex",
        preText: "DC 17"
      },
      bleed: {
        universalMonsterAbility: "Bleed",
        damage: "1d4"
      },
      "barbed defense": {
        type: "Su",
        text: "A creature that strikes a genthodaemon with a melee weapon, an unarmed strike, or a natural weapon takes 1d4+4 points of piercing damage from the barbed wire and other pieces of jagged metal embedded in the genthodaemon's body. Melee weapons with reach do not endanger their users in this way."
      },
      destruction: {
        type: "Su",
        text: "A genthodaemon can create an aura of pure carnage. All critical threats made against targets within the aura (including the genthodaemon) are automatically confirmed. Dying creatures within the aura take a -10 penalty on stabilization checks. The genthodaemon can activate or suppress this aura as a free action.",
        preText: "30 ft."
      },
      shrapnel: {
        type: "Ex",
        text: "A genthodaemon can shake loose four large pieces of the shrapnel embedded in its body as a standard action (make a separate attack roll for each piece). This attack has a range of 180 feet with no range increment. All targets of this attack must be within 30 feet of each other. The daemon can launch at most 24 pieces of shrapnel in any 24-hour period."
      }
    }
  },

  Fext: {
    source: "Rasputin Must Die",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 15,
    hdVal: 8,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 23,
      dex: 18,
      con: "-",
      int: 13,
      wis: 15,
      cha: 18
    },
    feats: [
      {
        name: "Cleave",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Great Cleave",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Improved Critical"
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
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Bastard sword",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Bastard sword",
        name: "Bastard sword",
        damage: "1d10"
      },
      {
        weapon: "Slam",
        name: "Slam",
        specialAbility: "energy drain",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "glass or obsidian"
      },
      SR: {
        value: 21
      },
      naturalArmor: 10
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This creature's pallid skin belies its healthy, powerful physique. Dressed in a fine military uniform, complete with numerous decorations and medals, the creature gazes from eyes that are dead and vacant, its thin lips grinning wickedly and revealing pointed, inhuman teeth.",
    description: "Any good general forbids mention of fexts among his ranks, but such strictures do little to prevent soldiers from whispering tales of undying officers leading enemy units. These supernatural officers-often the targets of dozens of strikes and attempted assassinations over the course of their careers-never seem to fall to these attempts, and when they do, they return for the next clash unfazed. Soldiers whisper that these undead officers are only vulnerable to glass arrows, glass bullets, or glass daggers. Tales of fexts, usually dismissed as camp folktales derived from soldiers' frustration at failed campaigns and lost battles, are most frighteningly true-a truth living officers keep from the normal rank and file, for it takes a truly strong leader to send his soldiers against an unkillable foe. Fexts are relatively new on the face of Golarion. The Whispering Way is said to be behind the existence of these powerful creatures, which not only possess skills at warfare and widespread destruction, but also excel at the subterfuge and guile necessary to pass themselves off as normal, living humanoids. While these abominations often serve corrupt monarchs or power-hungry and desperate tyrants, some fexts infiltrate good armies and act as horrible warlords, defying their nation's ideals. These fexts use politics and miscommunication to distort the truth of their battlefield atrocities. Though a fext normally acts as a commander on the battlefield, when engaged in combat, a fext favors its martial prowess, intermingling quick strikes and deadly blows with disruptive curses and its energy drain ability. Many fexts enjoy cruel and humiliating alternatives for their curses instead of simply reducing ability scores or the effectiveness of attack rolls-they may choose abstract effects such as having the target's commander view him as an enemy or making the target of the curse appear loathsome to fellow soldiers in order to break ranks. In war zones, fexts never spare a kill, being eager to use their death knell spell-like ability. Also, as they wade through scorched battlefields, they frequently use their speak with dead spell-like ability to discern information about rival armies. Ecology Strange rituals doom a child to becoming a fext, ensuring its twisted immortality. Usually male and usually human, the child is destined from birth to die young, but will shine in undeath as a great military leader. Wicked rites corrupt the child while it's still in its mother's womb, infusing it with a power that burns brightly during its development, only to dim upon reaching adulthood into a spiral of blackness followed by an immediate descent into undeath. Creating a fext requires a caster of at least 15th level who must subject an expectant mother to weekly treatments throughout her pregnancy, consisting of an array of charms, herbs, oils, pastes, and powders. After the child is born, a portion of the preserved placenta must be carried or kept near the fext throughout its childhood, usually disguised as a charm, stuffed into a doll, or worked into a favored toy or memento. Born a strong and healthy child, the fext leads a mostly typical life for a child of its parentage, region, and status, maintaining a keen intellect and hearty physique. These boons in its youth all but guarantee it a powerful place in society, especially in the field of battle. A young fext finds itself enamored with warfare of any kind and usually studies weaponry, fighting styles, and historical battles with a voracious appetite. Some fexts grow up knowing their destiny-or learn of it along the way-and choose to dedicate their lives to preparing for some dark purpose. Upon reaching adulthood, a fext falls ill. With fever rising and a head full of hallucinations, the fext lies comatose for a week. During this time, the creature slowly passes from mortality, its soul hanging suspended between worlds, then crumbling into undeath. The transition from life to undeath yields great benefits to a fext, though some experience shocking revelations during the transformation. Like vampires, fexts decay at a slower rate than most undead, allowing the creatures to feign normal life for at least a decade. During this time, their skin slowly grows pallid and the odor of death increasingly haunts them. As fexts begin to degrade, the creatures employ mundane disguises and use restorative spells to maintain their physical bodies' previous appearance. Maintaining their image, fexts generally keep to their expected behavior and use their given names until disguise becomes too difficult. At that point, they often choose a name from the Necril tongue, granted in a vision during their transformation to undeath. Habitat & Society Fexts have no choice as to where they grow up, but in adolescence and young adulthood, before the transformation takes place, they find themselves drawn to areas of conflict and war. In fact, regions of political turmoil and constant battles are breeding grounds for fexts-the ritual that creates these creatures is performed almost exclusively in war-torn countries for two reasons. First, it ensures the youth grows up knowing the ravages of war, allowing the fext to learn the reality of death early on, just as a child in a more idyllic setting might learn to play make-believe. Second, it places the youth in a position to become a great leader and a strong warrior who strives to lead forces in battle. The ritual for creating a fext is nearly as variable as the path to lichdom, and must be customized for each potential child who is to carry the honor. Some parents are aware of the path their unborn child is destined to walk, but others are manipulated into allowing these foul rites. They remain unaware of what the procedure will do to their child, and being told it will protect the child and make it stronger. Subjects for this transformation are usually children of nobles or families renowned for a lineage of strong soldiers. When those driven to create a fext discover an ideal mother is with child, they pose as midwives or doctors, and work the rites into their regular care, explaining the tinctures and herbs away as beneficial supplements for the mother and child.",
    organization: "solitary",
    languages: "Common, Necril",
    spellLikeAbilities: [
      {
        name: "death knell",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "protection from good",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "speak with dead",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 15,
        timesPerDay: 3
      }
    ],
    skills: {
      Acrobatics: {
        ranks: 2
      },
      Disguise: {
        ranks: 8
      },
      Intimidate: {
        ranks: 13
      },
      "Knowledge (engineering)": {
        ranks: 11
      },
      "Knowledge (religion)": {
        ranks: 8
      },
      Perception: {
        ranks: 15
      },
      "Sense Motive": {
        ranks: 4
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1
      },
      unkillable: {
        type: "Su",
        text: "When reduced to 0 hit points by anything other than a glass or obsidian weapon, a fext is not destroyed, but instead becomes unconscious. Additionally, 1d4 minutes after falling, a fext gains fast healing 1. To be completely destroyed, a fext must be reduced to 0 hit points by a glass or obsidian weapon or, once a fext is rendered unconscious, its head must be severed and anointed with holy water. Once destroyed, a fext dissolves into fine ash."
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

  "Trench Mist": {
    source: "Rasputin Must Die",
    creatureType: "aberration",
    subTypes: [
      "air"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Gargantuan",
    hd: 15,
    hdVal: 8,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Lifesense"
    ],
    speed: {
      base: 0,
      maneuverability: "Perfect",
      fly: 40
    },
    abilities: {
      str: "-",
      dex: 20,
      con: 16,
      int: 7,
      wis: 13,
      cha: 10
    },
    feats: [
      {
        name: "Ability Focus",
        type: "Monster",
        value: "Engulfing mists",
        choiceSource: "Ability Focus"
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
        name: "Skill Focus",
        type: "General",
        value: "Perception",
        choiceSource: "Skill Focus"
      },
      {
        name: "Weapon Finesse",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Touch",
        name: "Touch",
        damage: "4d6",
        bonuses: [
          {
            source: "inherent",
            value: "4d6",
            appliesTo: "damageType",
            damageType: "negative energy"
          }
        ]
      }
    ],
    immunities: [
      "Immune to acid, electricity, sonic"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      }
    },
    space: "20 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "A noxious mustard-colored vapor hangs low over the battlefield, concealing the sickening forms of dead soldiers who walk once more among the living. Its heavy fumes shift and swirl as if alive.",
    description: "Trench mists are created anywhere that deadly gas attacks are used for the wholesale slaughter of troops, whether attacks of a mundane poisonous nature, or from the magical effects of spells such as acid fog. Under mysterious circumstances likely born of the horrors of war and the final throes of young soldiers dying before their time, these mists linger over the battlefield, absorbing the departing souls of the slain. This commingling of loosed life energy and strange chemicals grants the miasma a sly, malevolent sentience. Once so born, the trench mist then seeks only to impart misery and share its singular fate with those fortunate enough to have escaped the poisonous attacks that birthed the creature in the first place. As it preys upon the living it absorbs the aff licted into its growing horde of shambling servants. Victims of its acidic mist rise as hateful zombies under the creature's control, and a trench mist that gains a horde of zombies is a dangerous foe indeed. On battlefields where trench mists are known to have arisen, wise commanders arrange cease-fires during which both sides abandon the site, lest their troops succumb to the horrifying fate of their comrades. Part of the trench mist's self-awareness comes from the symbiotic trench zombies it gains as it slaughters its victims, as the zombies under the mist's control retain the abilities they had in life as well as some snippets of their former memories, which all feed into the collective consciousness of the trench mist. This allows the mist to learn and adapt, granting it a relatively keen intelligence compared to other similar creatures, and allowing it to make canny combat decisions and cleverly manipulate its surroundings. Trench mists wander battlefields looking for prey so they can add more shambling zombies to their collective hordes. Occasionally they might even enter inhabited areas to seek out fresh ammunition and armaments for those of their symbiotic undead who may have exhausted their weaponry. When bereft of such foul company, trench mists often persist for years after the tides of war have receded, settling into the soil and slumbering until fresh prey arises. The lifespan of trench mists is unknown, though through this sort of hibernation they very well may be immortal, reemerging without warning at the scenes of ancient battles centuries after they have taken place, whether turned up by an unsuspecting farmer's plow or war waged anew.",
    organization: "solitary, pair, or horror (3-5)",
    languages: "Russian (can't speak); telepathy 30 ft.",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 9
      },
      Perception: {
        ranks: 15
      }
    },
    special: {
      "create trench zombie": {
        type: "Su",
        text: "A trench mist can animate any corporeal creature slain while engulfed within its form. The victim rises as a trench zombie (see facing page) in 1d4 rounds and is under the control of the trench mist that created it. A trench zombie becomes free-willed if it is separated from its parent trench mist. A trench mist can animate a number of trench zombies whose Hit Dice total does not exceed more than twice its own Hit Dice."
      },
      "engulfing mists": {
        type: "Ex",
        text: "A trench mist can engulf foes (see the engulf special ability on page 296 of Pathfinder RPG Bestiary 2). A creature engulfed by a trench mist does not gain the pinned condition and may move normally-such a creature is not in danger of suffocating, but as long as it begins its turn engulfed, it automatically takes 4d6 points of acid damage and 4d6 points of negative energy damage. A trench mist's vapors obscure all sight, including Darkvision, beyond 5 feet. Creatures 5 feet away have concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, and the attacker can't use sight to locate targets). The save DC to avoid the engulfing mists is Constitution-based."
      },
      gaseous: {
        type: "Ex",
        text: "A trench mist has a body composed of foul, mustard-colored vapors. This form grants the amorphous defensive ability and allows it to pass through small holes or narrow openings, even mere cracks, with no reduction to its speed, but it cannot enter water or other liquids. A trench mist doesn't have a Strength score. It can't manipulate or wear objects, and it is treated as a creature three size categories smaller than its actual size (Medium for most trench mists) for the purposes of how wind affects it."
      },
      "trench zombie symbiosis": {
        type: "Su",
        text: "Because of its symbiotic relationship with the trench zombies it creates, a trench mist shares senses with its animated creatures when they are engulfed within its form, granting them lifesense and making them immune to the concealment the trench mist grants to creatures within and outside of its foggy form."
      },
      "fast healing": {
        universalMonsterAbility: "Fast Healing",
        type: "Ex",
        value: null
      },
      amorphous: {
        universalMonsterAbility: "Amorphous"
      },
      "negative energy affinity": {
        universalMonsterAbility: "Negative Energy Affinity",
        parenthetical: ""
      }
    }
  },

};