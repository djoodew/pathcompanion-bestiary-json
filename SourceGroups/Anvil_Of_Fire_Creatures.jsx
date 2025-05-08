
export const Anvil_Of_FireCreatures = {
  Calpina: {
    source: "Anvil Of Fire",
    creatureType: "fey",
    subTypes: [],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Small",
    hd: 5,
    hdVal: 6,
    cr: 3,
    racialFeatures: [
      "Low-Light Vision"
    ],
    speed: {
      base: 20,
      maneuverability: "Good",
      fly: 40
    },
    abilities: {
      str: 10,
      dex: 17,
      con: 14,
      int: 11,
      wis: 12,
      cha: 15
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Improved Grapple",
        type: "Combat"
      },
      {
        name: "Improved Initiative",
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
        specialAbility: "grab",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "cold iron"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "temperate forests and mountains",
    visualDescription: "Pearlescent, membranous wings hold this small insectile woman aloft in the air. She peers through red multifaceted eyes, and her tough, sharp-edged tongue resembles a proboscis.",
    description: "Calpinas are strange, primordial fey whose bodies possesses a combination of insectile and humanoid features. An exoskeleton the color of dull brass encases a calpina's boneless form, and four pink wings that resemble those of a dragonf ly emerge from the center of her back. Each calpina has a group of sensitive feelers on her head, which she controls nearly as dexterously as a humanoid wiggles its fingers. She uses her feelers to detect slight alterations in the air currents as well as to latch on to her victims more tightly when feeding. Calpinas view their victims as little more than sources of nutrition. They are, however, intensely curious creatures and may sometimes, albeit rarely, interact with other creatures without harmful intentions. Calpinas are usually just over 3 feet tall, with a wingspan of 5 to 6 feet. Most weigh only 25 pounds. Ecology Calpinas originate in the First World, where they thrive in the vast, lush expanses of eldritch forests and impossible mountains. They share their First World habitat with clusters of giant flowers and sentient plant creatures, both of which they rely upon for sustenance. Thanks to their natural curiosity, quite a few calpinas cross to the Material Plane, following the beckoning lights, smells, and sounds that seep in through planar breaches. Most calpinas' lives are more difficult on the Material Plane than on the First World, where the abundant greenery and free-f lowing magic makes finding suitable meals easy. With sentient plants being relatively rare on the Material Plane, calpinas that leave the First World adopt a new method of sating their unusual fey diets- feeding on the egos of non-plant creatures. A calpina's tongue is actually a tough, razor-edged proboscis-like appendage, well suited for piercing a victim's flesh. When a calpina begins feeding, she wraps her wings tightly around her target's body to prevent it from escaping. Her supernatural venom draws in a victim's ego, which combine to form a sticky-sweet \"psyche honey\" that she extracts through the same proboscis. The compound eyes of a calpina are usually a dull, dark red, but after feeding they glow brighter. A typical humanoid victim can provide sustenance to a single calpina for up to 2 weeks, but in the spring calpinas become particularly voracious and may feed daily to gather sufficient nutrients for egg production. A calpina fertilizes her own eggs. Although calpinas do not need mates, some join together into colonies each year, forming tight-knit sisterhoods. Habitat & Society Calpinas make their nests in hollow, rotting trees or shallow caves in cliff sides at the lower altitudes of mountains. The nests are rather simple, with only leaves, twigs, and other natural materials added for cushioning, warmth, and camouf lage. The social and territorial tendencies of calpinas change with the seasons. In early spring, calpinas become largely solitary and nomadic, wandering in search of appetizing prey. A few months later, when they lay their eggs, calpinas band together into colonies of their own kind for mutual protection of their young. They also become fiercely territorial and attempt to kill anyone they can't persuade to leave their territory. Once the eggs have hatched, though, calpinas welcome visitors, as their larvae require substantial quantities of food to grow. Small groups of calpinas called eclipses often work together to lure victims into ambushes, draining their egos to the last drop before leaving the comatose victims for the fey's mindless offspring to eat. Calpinas feed primarily upon the animals inhabiting their forests. However, more charismatic victims provide larger and well-flavored egos, and for this reason, most calpinas prefer humanoid prey. Especially creative or willful sorts-artists, performers, politicians, and especially half lings and gnomes-prove particularly irresistible to these fey. They may sometimes even capture an unfortunate soul and keep it for their amusement and nourishment for weeks before growing bored. Lucky captives are released alive, though weakened by starvation, and left hazed and covered in curious scars by the constant feeding on their egos. More often than not, a captured creature becomes food for the calpinas' larvae or for forest predators that take advantage of its disoriented state. Calpinas may engage in conversation with intelligent creatures if approached cautiously. They vocalize in short chirps, habitually repeating the same word over and over again with different nuances. While they are capable of more complex communication, they quickly grow tired of prolonged or abstruse conversations and prefer to savor only a few ideas at a time. Even when they don't intend to feed on an individual, they like to provoke strong emotions and pry at deeply held beliefs. Topics that stir up passions influence the flavor of a victim's ego, and a calpina never knows at the beginning of a conversation whether she'll be hungry by the end. When calpinas face an enemy too powerful to kill or chase away, they may offer useful advice about mountain passes or other local creatures, if only to encourage the intruder to move on. They are cautious by nature, and rarely initiate fights they don't believe they will win. Unless they are defending their young in the summer months, calpinas are quick to flee from a losing battle. Calpinas are most active in the twilight hours, but they also hunt on moonlit nights, using magical lights to locate, attract, or distract prey so that they can approach close enough to launch an attack. They try to tire or disorient their victims before latching on to feed.",
    organization: "solitary, eclipse (3-6), colony (6-12 plus 8-24 calpina larvae)",
    languages: "Common, Sylvan",
    spellLikeAbilities: [
      {
        name: "dancing lights",
        casterLevel: 5,
        timesPerDay: -1
      },
      {
        name: "command",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "hypnotism",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "sleep",
        casterLevel: 5,
        timesPerDay: 3
      },
      {
        name: "suggestion",
        casterLevel: 5,
        timesPerDay: 1
      }
    ],
    skills: {
      Bluff: {
        ranks: 5
      },
      Fly: {
        ranks: 5
      },
      "Knowledge (nature)": {
        ranks: 5
      },
      Perception: {
        ranks: 5
      },
      Perform0: {
        subSkill: "dance",
        ranks: 5
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "ego drain": {
        type: "Su",
        text: "A calpina feeds on her target's ego at the end of its turn if she grapples a foe, dealing 1d4 points of Charisma damage. Once a calpina has dealt Charisma damage equal to her Constitution score, she is fully sated and cannot use this ability again for 24 hours.",
        preText: "1d4 Charisma"
      },
      "fragrant haze": {
        type: "Su",
        text: "As a standard action, a calpina can release magical vapors that cause stupor and vertigo in creatures other than calpinas or their larvae. Each living creature within 20 feet must succeed at a DC 14 Will save or be exhausted for 1d4 rounds. A creature that succeeds at its save is immune to that calpina's fragrant haze for 24 hours. The DC is Charisma-based."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Ikelos: {
    source: "Anvil Of Fire",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "incorporeal"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 10,
    cr: 7,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      maneuverability: "Perfect",
      fly: 30
    },
    abilities: {
      str: "-",
      dex: 19,
      con: 12,
      int: 15,
      wis: 16,
      cha: 17
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
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Stealthy",
        type: "General"
      },
      {
        name: "Toughness",
        type: "General"
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
    defense: {},
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This creature's eyes are large and lidless, and its large head dominates its lanky frame. Tiny wings spread across its back and the four digits of each hand end in sharp claws.",
    description: "Ikeloses are monsters that lurk just out of the sight of insomniacs; they are nightmares that freeze the body even as the mind recoils in horror. To those who are fully awake, an ikelos remains unseen, a silently invisible nightmare that can travel undetected wherever it pleases. Only supernatural vision or drowsy eyes perceive these creatures. Ikeloses are painted in the colors of dreams-constantly warping hues that cannot be reproduced with light or pigments, and as such are impossible to accurately remember. An ikelos is frightening in aspect, appearing as a distorted humanoid with large eyes and elongated limbs. Its flat, ovoid face has the barest hint of a nose, and its mouth is a barely noticeable seam until distended to reveal row upon row of sharp teeth. An ikelos's short wings are unnecessary for its flight, but when unfolded, they give the creature the illusion of size. Many a dream-addled victim has mistaken an ikelos for a sinister fiend or an avenging angel. Ikeloses are commonly the size of a human, though both larger and smaller members of their kind exist. As incorporeal beings, they are entirely weightless. Ecology Ikeloses are born in dreamscapes in the Dimension of Dreams. They begin as recurring nightmares. When they've fed on enough fear, they create bodies from planar gossamer that can survive even as their dreamscapes crumble each morning. Eventually, a mature ikelos rides its dreamer back to the Material Plane, usually drawing its first meal from the unwitting \"parent.\" Although they don't need to eat or breathe in the conventional sense, ikeloses draw sustenance from fear. They use fear to mend their wounds and replenish their dream-spun forms. Deprived of this emotional fuel, they eventually waste away to nothing. An ikelos's frightful gaze is often enough to extract the emotion it needs. By returning to a victim several times a week, it can, in theory, sustain itself without killing the victim. In practice, however, such unfortunate souls often die of fright or sleep deprivation, or else seek means to ward off their tormentors. Against a victim that resists its paralyzing gaze, an ikelos resorts to violence. The resulting corpses usually foment more fear and sleeplessness in others. An ikelos could rely solely on its aura of lethargy to tire its victims and quickly extract their fear. But being born from nightmares, ikeloses see such direct tactics as inelegant, and take pride in creative plans that slowly drive their victims mad. As a few surviving victims remember from the monster's taunts, ikeloses claim that fear tastes better when it has time to ripen. When an ikelos is threatened, it doesn't hesitate to unleash its aura of lethargy and viciously claw apart whoever stands in its way. Ikeloses usually prey on insomniacs, those most prone to weariness and paranoia. In a pinch, they drift around invisibly during the day, searching for anxious individuals to target. They prefer to torment prey with alien whispers and intrusive thoughts-which become increasingly diffficult to dismiss as days pass into weeks-before revealing their true forms. Many ikeloses dislike that diviners can grant themselves and others the ability to see them, and target these spellcasters out of spite. Magic that pierces invisibility reveals ikeloses but, as with fatigue, makes the viewer more susceptible to ikeloses's malignancies. Habitat & Society Ikeloses exist wherever sentient creatures dream, especially poor urban areas where hopes die and anxieties run high. Though they don't need to sleep, ikeloses become torpid during the day, anticipating their nocturnal games. An ikelos's alien mind is ever turned toward finding suitable prey and devising new and unexpected ways to horrify. Typically loners, ikeloses sometimes form packs-not for companionship, but to aid in their hunting. Like a wolf pack, ikeloses surround their prey, increasing the chance that the victim will be paralyzed or unable to flee. Interactions between such ikeloses are usually contests of dominance. While food and mating are of no concern to these creatures, the dominant ikelos makes most of the decisions for the group; ikeloses crave autonomy as much as any living thing hungers or lusts. Acts of deviousness and depravity are the usual measure of standing. Knowing it can't heal in a normal fashion, an ikelos almost always avoids committing violence against others of its kind, unless it can do so without anticipation of reprisal. Ikeloses don't interact with living creatures except to harvest their fear. Even were they not often invisible and intangible to most beings, they have little desire to socialize with creatures they consider food. However, as parasites, they can be found living invisibly amid all manner of creatures. An ikelos might seek to defend its \"cattle\" from other predators-whether monsters preying on its human stock or adventurers slaying its hobgoblin victims-or else seek to harvest a new source of fear. Creatures who are immune to fear cannot sustain an ikelos's unnatural existence, and thus hold little interest for these stalkers. Occasionally, ikeloses encounter creatures similar to themselves, such as house-haunting undead or soul-harvesting night hags, and choose to form temporary alliances. Such a creature might complement the ikelos's abilities, and an ikelos has no use for its victim's bodies or souls. However, such alliances can prove tenuous and dangerous for both sides. Perhaps the creature most similar to an ikelos is an animate dream (Pathfinder RPG Bestiary 2 29). While animate dreams are nonspecific fragments of a single dream, ikeloses are specific figures that build up strength across multiple dreams. Ikeloses and animate dreams each believe themselves to be superior manifestations, and when an ikelos and an animate dream set their sights on the same prey, the conf lict typically ends in violent confrontation.",
    organization: "solitary or pack (2-6)",
    languages: "Aklo, Common; telepathy 100 ft.",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 12
      },
      Bluff: {
        ranks: 9
      },
      "Escape Artist": {
        ranks: 0
      },
      Fly: {
        ranks: 12
      },
      Intimidate: {
        ranks: 12
      },
      Perception: {
        ranks: 9
      },
      "Sense Motive": {
        ranks: 9
      },
      Spellcraft: {
        ranks: 12
      },
      Stealth: {
        ranks: 9
      }
    },
    special: {
      "frightful gaze": {
        type: "Su",
        text: "Creatures within 30 feet that meet an ikelos's gaze must succeed at a DC 17 Will save or be paralyzed with fear for 1 round. This is a mind-affecting fear effect and a paralysis effect. A creature that succeeds at this saving throw is immune to the frightful gaze of that ikelos for 24 hours. The save DC is Charisma-based. Lethargy Aura (Su) An ikelos exudes an aura that makes nearby creatures increasingly lethargic. Creatures that fail a DC 17 Fortitude save become fatigued. Fatigued creatures that fail a DC 17 Fortitude save become exhausted. The effects of the aura end 10 rounds after an affected creature exits the aura. An ikelos can suppress or reactivate its aura as a free action. Ikeloses are immune to this ability. The save DC is Charisma-based."
      },
      "feed on fear": {
        type: "Su",
        text: "Anytime an ikelos is within 15 feet of a dying creature or a creature subject to a fear effect, it gains fast healing 5."
      },
      "dream-phased": {
        type: "Su",
        text: "An ikelos is typically invisible. Creatures that are fatigued or under the effects of see invisibility can see an ikelos, but its nature is partially obscured. An ikelos gains the benefit of partial concealment against such creatures. In addition, its claws deal 3d6 points of damage to such creatures, instead of 2d6. Creatures that are exhausted or under the effects of true seeing can see the ikelos clearly. They suffer no miss chance when striking the ikelos. However, an ikelos's claws deal 4d6 points of damage to such creatures, instead of 2d6. Fear Dependency (Ex) An ikelos is a creature of nightmares, and it depends completely on fear for its sustenance. An ikelos doesn't recover hit point damage naturally and cannot heal by any means other than its feed on fear ability."
      },
      lethargy: {
        type: "Ex",
        preText: "30 ft., DC 17, 10 rounds"
      }
    }
  },

  "Iron Rhinoceros": {
    source: "Anvil Of Fire",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 28,
      dex: 12,
      con: "-",
      int: 1,
      wis: 11,
      cha: 5
    },
    feats: [
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Gore",
        choiceSource: "Improved Critical"
      },
      {
        name: "Intimidating Prowess",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Multiattack",
        type: "Monster"
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
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Chain",
        name: "2 Chains",
        specialAbility: "grab",
        damage: "2d6"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to fire"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "10 ft. (20 ft. with chains)",
    environment: "warm mountains or underground",
    visualDescription: "Dangling chains cover the riveted iron body of this massive rhinoceros like thick, woolly fur. Its hollow eyes glow-windows into a mighty furnace-and smoke that smells suspiciously like burning flesh billows from its smokestack horns.",
    description: "The brutality of fire giants is matched only by their ingenuity at crafting devices of war. Of all their creations, however, few match the ruthless efficiency or raw power of the iron rhinoceros. Built to sate the fire giants' endless desire for slaves, iron rhinoceroses serve as both tireless mounts for giant warlords campaigning against lesser races and as temporary prisons for troublesome captives. An iron rhinoceros measures 18 feet long from snout to tail and stands 12 feet tall at the shoulder. Ecology It is a quirk of fate that fire giants, the most rigid and militaristic of the giant races, created a construct as willful and obstinate as the iron rhinoceros. Early prototypes for the creature borrowed techniques from golem manufacturing and relied on bound elementals to provide the construct's animating force. The results were initially promising, as these unintelligent creatures obeyed without hesitation and executed their orders with mechanical precision. However, they also inherited their golem forebears' tendency to go berserk in battle. Few generals were willing to ride a mount that might turn on its rider, and so these first creations were deemed unreliable and most were broken down for scrap. For the second generation of iron rhinoceroses, fire giant blacksmiths bound the spirits of animals rather than elementals into the construct's frame. The results were surprisingly lifelike. When not in use as mounts or engines of war, these new iron rhinoceroses rest and graze as normal rhinoceroses do, even without the need for food or sleep. They \"eat\" combustible materials, such as wood and coal, to fuel their internal furnaces, and seek warm places to lie down. They also share their living cousins' aggressive tendencies, and attack unfamiliar creatures on sight. An iron rhinoceros is only truly loyal to its maker, or to an individual whom its maker designates at the time of its creation. At best, it tolerates the presence of other creatures, and more often displays barely constrained hostility toward its master's servants. An iron rhinoceros prefers not to allow riders other than its master, and such riders take a -4 penalty on Ride checks to control it in battle. Habitat & Society Iron rhinoceroses are rarely found outside of fire giant camps. Although any sufficiently experienced and equipped spellcaster can create one, something in the mechanical beasts' construction predisposes them to favor giants over other creatures. While they might remain loyal to their creator, iron rhinoceroses display aggression toward any other non-giant creature they meet. These tendencies, combined with the creatures' immense size and strength, make them dangerous to keep in even lightly civilized areas. Among some fire giant communities, iron rhinoceroses are a mark of status and power. Many fire giants assume that a general who possesses and commands one has been successful enough at war to afford the exorbitant cost of the beast's creation. Because iron rhinoceroses cannot (or will not) bond with a new master after their creation, elders rarely pass them down along family lines or to successors. Up-and-coming fire giant generals are expected to produce their own iron rhinoceroses to prove their worth as military commanders. In truth, few iron rhinoceroses survive their masters, as both tend to fall in battle against more powerful enemies. On the rare occasion when an iron rhinoceros does outlast its owner, the construct is placed within its master's tomb to serve as a guardian for his body and grave goods. Desperate or foolish young commanders sometimes attempt to steal iron rhinoceroses from the tombs of their ancestors, hoping to gain the prestige that comes with ownership without first proving themselves in war. These young generals more often than not end up impaled, making their attempted theft readily apparent to whatever unfortunate giants must clean up the mess. Construction An iron rhinoceros is made of 6,000 pounds of forge-hardened iron and steel that costs 5,000 gp. IRON RHINOCEROS CL 15th; Price 117,500 gp Construction Requirements Craft Construct, geas/quest, limited wish, resist energy, summon nature's ally V, creator must be caster level 15th; Skill Craft (armor) or Craft (weapons) DC 25; Cost 61,250 gp",
    organization: "solitary",
    spellLikeAbilities: [],
    skills: {
      Intimidate: {
        ranks: 0
      },
      Perception: {
        ranks: 14
      }
    },
    special: {
      "grasping chains": {
        type: "Ex",
        text: "An iron rhinoceros is covered in animated chains that grasp at its enemies. It doesn't gain the grappled condition when using its chains to grapple enemies, and can maintain a grapple using its chains as a free action, though doing so prevents it from attacking with that chain. An iron rhinoceros may have up to two creatures grappled in its chains at a time. Additionally, the chains seek to ensnare creatures the rhino tramples. The chains entangle any creature that fails its saving throw against the rhinoceros's trample attack, or that chooses to forgo its save in order to make an attack of opportunity against the rhinoceros. An entangled creature can escape from the chains as a standard action by succeeding on a DC 26 Strength check or a DC 20 Escape Artist check. Each chain has AC 12, hardness 10, and 15 hit points. Creatures entangled in the chains can't move farther than 20 feet away from the rhinoceros. If the rhinoceros moves farther than 20 feet from an entangled target, the tethering chain breaks, but the target remains entangled."
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: "e"
      },
      "powerful drag": {
        type: "Ex",
        text: "An iron rhinoceros can use the drag combat maneuver to savagely scrape its foes across the ground. As a full-round action, an iron rhinoceros can attempt a single drag combat maneuver against every creature currently tethered to its grasping chains. This deals 1d6 points of damage for every 5 feet dragged, and the chains tethered to any creature more than 20 feet away break. The dragging damage may increase depending on the terrain, at the GM's discretion. Creatures dragged any distance are knocked prone. Scooping Charge (Ex) An iron rhinoceros can unhinge its snout in order to scoop enemies into the furnace-like cavity within its belly. When making a powerful charge, the iron rhinoceros can forgo dealing damage in order to gain the grab and fast swallow abilities with its gore attack. The rhinoceros must make this choice at the beginning of its charge. Swallow Whole (Ex) An iron rhinoceros's belly functions as a furnace, dealing 2d6 points of fire damage to swallowed creatures. Hatches on the rhinoceros's sides allow it to swallow creatures grappled in its chains. In order to take swallowed creatures prisoner without dealing fire damage, the rhinoceros can suppress (or activate) the flames within its furnace as a swift action. When the rhinoceros is suppressing the flames, the furnace instead fills with smoke, forcing swallowed creatures to succeed at a DC 17 Fortitude save each round or be sickened for as long as they remain in the rhinoceros's belly. This save DC is Constitution-based. Creatures attempting to cut their way out of the iron rhinoceros's belly must overcome the durability of the thick furnace walls (hardness 10)."
      },
      "swallow whole": {
        universalMonsterAbility: "Swallow Whole",
        damage: "2d6 fire damage",
        hp: "13 hp",
        AC: "AC 18"
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "2d6+8 plus grasping chains",
        saveDC: 10
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Magnetite Golem": {
    source: "Anvil Of Fire",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 13,
    hdVal: 10,
    cr: 10,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 20
    },
    abilities: {
      str: 27,
      dex: 9,
      con: "-",
      int: "-",
      wis: 12,
      cha: 1
    },
    feats: [],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "inescapable grip, magnetic disarm",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "construct traits",
      "Immune to magic"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "adamantine"
      },
      naturalArmor: 16
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any",
    visualDescription: "This vaguely humanoid mass of polished black metal lumbers forward, with all manner of metallic objects clinging to its body.",
    description: "Though softer than iron golems-upon whom their design is based-and problematic in most industrial settings, magnetite golems still prove to be useful, specialized constructs for both security and salvage. A magnetite golem's humanoid body is made of magnetite, a naturally magnetic mineral. A magnetite golem mindlessly obeys its creator's instructions, and, like most golems, shrugs off the most devastating magical assaults. To complicate matters, a magnetite golem emits a magnetic field, which forcefully pulls metallic objects closer-including creatures holding metal weapons or clad in metal armor. Once within range, metal-bearing opponents find it difficult to pull themselves away. Magnetite golems specialize in grappling and disarming creatures that rely on metal equipment. Magnetite golems are usually about 9 feet tall, and weigh approximately 1,500 pounds. Ecology Magnetite golems prove tricky to build for even experienced golem crafters. Because of the sheer amount of magnetite required for their construction, these golems must be constructed in specially designed workshops with brass, stone, or wooden tools. While magnetite golems are invaluable in specific circumstances, they are equally inconvenient in other instances. Due to the golems' magnetic fields, small metal bits constantly fly toward them and cling to their bodies, perpetually covering them in metal detritus-chains fittings, scrap metal, and the occasional tool or weapon. A golem's owner must regularly pry off such debris, lest the clinging metal clog the construct's joints. Additionally, the golem's magnetic field prohibits using any kind of mundane metal objects (like basic tools, locks, or nails) nearby. Due to this, wealthy individuals in the market for golems usually purchase iron, stone, or wood golems. However, in the rare cases in which a magnetite golem is the perfect tool for the job, it proves a devastatingly effective weapon. Habitat & Society Magnetite golems have existed on Golarion for many millennia. Explorers delving into Thassilonian ruins occasionally come across these hulking guardians. In Edasseril, the Thassilonian nation tied to the sin of envy, some powerful wizards commanded magnetite golems, and delighted in the constructs' ability to seize their foes' prized possessions. Because of the unique difficulties associated with the crafting of magnetite golems, the production of new specimens is a rare event. Only a few workshops-such as Magnimar's famous Golemworks or the forges of Quantium-have the resources necessary to create these golems. Most magnetite golems toil as guardians. A few individuals use magnetite golems for private security, including particularly wealthy alchemists and mages who wish to protect nonmetallic caches of alchemical reagents, artwork, spell components, or tomes. A few jealous warlords even protect their legendary armor or weapons by attaching them to the backs of magnetite golem guardians. For eccentrics who work exclusively with glass, paper, or wood, magnetite golems are ideal companions. Magnetite golems are sometimes tasked to guard lightly trafficked areas that hold objects of cultural, historical, or material value, such as spacious tombs or far-flung libraries. A few paranoid aristocrats and wealthy thieves' guilds station magnetite golems at their visitor's entrances, as the inexorable pull of the golems' auras reveal even the most thoroughly hidden weapons. Individuals with substantial wealth may also station magnetite golems in secret passageways leading to their hidden vaults. Even if a magnetite golem fails to notice an intruder, its magnetic aura still pulls the intruder and her metallic gear closer. The thundering crash of metal objects striking the golem conveniently alerts other nearby guardians. Construction A magnetite golem's body is sculpted from 1,500 pounds of pure magnetite, smelted with rare oils worth 5,000 gp. MAGNETITE GOLEM CL 13th; Price 90,000 gp Construction Requirements Craft Construct, geas/quest, limited wish, reverse gravity, telekinesis, creator must be caster level 13th; Skill Craft (armor) or Craft (weapons) DC 18; Cost 47,500 gp",
    organization: "solitary or gang (2-4)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "inescapable grip": {
        type: "Ex",
        text: "Whenever a magnetite golem hits a metallic creature or a creature wearing metal armor with its slam attack, it attempts to grapple the creature as a free action that doesn't provoke an attack of opportunity. If a magnetite golem successfully grapples such a creature, it partially adheres to the golem's body, and the golem needs only one arm to maintain the grapple. In these instances, a magnetite golem may still make a single slam attack on its turn with its remaining arm."
      },
      "magnetic disarm": {
        type: "Su",
        text: "Whenever a magnetite golem hits a creature wielding a metal weapon with its slam attack, it attempts to disarm the weapon as a free action that doesn't provoke attacks of opportunity. If the golem successfully disarms a metal weapon, the weapon sticks to the golem's magnetic body rather than dropping to the ground. The golem is considered to have possession of the weapon, and the weapon must be retrieved using a disarm combat maneuver. Magnetic Field (Su) A magnetite golem is surrounded by a magnetic field, which pulls all metallic creatures and objects toward it. At the start of a magnetite golem's turn, as a free action that doesn't provoke attacks of opportunity, the golem attempts a combat maneuver check against every creature within 30 feet that is connected to a piece of metal. Affected creatures include (but are not limited to) metallic creatures, creatures wearing metal armor, and creatures wielding metal weapons. If the golem succeeds at its combat maneuver against a creature, the affected creature is pulled 10 feet closer to the golem, and can't move away from the golem during its next round. The magnetic field is stronger than gravity, and can pull creatures off the ground. This movement doesn't provoke attacks of opportunity. Unattended Large or smaller metal objects automatically travel toward magnetite golem at a rate of 10 feet per round. This magnetism is supernatural in nature and affects all metal objects."
      },
      "magnetic field": {
        type: "Su",
        text: "A magnetite golem is surrounded by a magnetic field, which pulls all metallic creatures and objects toward it. At the start of a magnetite golem's turn, as a free action that doesn't provoke attacks of opportunity, the golem attempts a combat maneuver check against every creature within 30 feet that is connected to a piece of metal. Affected creatures include (but are not limited to) metallic creatures, creatures wearing metal armor, and creatures wielding metal weapons. If the golem succeeds at its combat maneuver against a creature, the affected creature is pulled 10 feet closer to the golem, and can't move away from the golem during its next round. The magnetic field is stronger than gravity, and can pull creatures off the ground. This movement doesn't provoke attacks of opportunity. Unattended Large or smaller metal objects automatically travel toward magnetite golem at a rate of 10 feet per round. This magnetism is supernatural in nature and affects all metal objects.",
        preText: "30 ft."
      }
    }
  },

  Pyropiscis: {
    source: "Anvil Of Fire",
    creatureType: "magical beast",
    subTypes: [
      "fire"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Large",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Tremorsense 60 ft."
    ],
    speed: {
      base: 10,
      burrow: 60
    },
    abilities: {
      str: 24,
      dex: 14,
      con: 18,
      int: 2,
      wis: 15,
      cha: 6
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
        name: "Lunge",
        type: "Combat"
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
        specialAbility: "burn, grab",
        damage: "1d6",
        type: "primary"
      },
      {
        weapon: "Lava bomb",
        name: "Lava bomb",
        damage: "3d6",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ]
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "adamantine"
      }
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "warm mountains or underground",
    visualDescription: "Glowing-hot plates of iron cover the head of this immense, primordial lungfish, and lava spills from between its jagged teeth.",
    description: "Few environments are more inhospitable to life than the depths of a volcano, where magma surges through the rock like blood through veins. Of the creatures that do live in this hellish landscape, few are better adapted than the pyropiscis. Pyropiscises depend on this deadly environment of extreme temperatures and choking gases for their very lives. While they have a fishlike appearance, pyropiscises do not swim-their bodies are far too dense to float in water or similar liquids. Instead, pyropiscises rely on their powerful muscles and sharp scales to burrow through molten rock. A typical pyropiscis measures over 12 feet long, and weighs almost 4,000 pounds. Brilliant red scales glow and pulse with terrible heat, protecting those portions of their bodies not covered in blackened iron plates. Ecology The unique physiology of pyropiscises allows them to derive sustenance directly from molten rock, leaching necessary minerals and volatiles from lava as it passes through their gills. A pyropiscis draws energy directly from the lava in which it dwells, using the intense heat to power its metabolic processes. While pyropiscises don't need to consume the flesh of other creatures to survive, they require nutrients from flesh to grow and to reproduce. A well-fed pyropiscis continues to grow throughout its lifetime and can reach an immense size. Pyropiscises typically lurk close to the surface of active volcanoes, and ride eruptions like flowing tides to find prey. They burst forth from rivers of lava to snatch fleeing creatures with their jaws, and consume the charred corpses of those who can't outrun the volcano's fury. Once they have finished feeding, they swim back against the current of lava and into the volcano. Those pyropiscises that linger to gorge themselves, and those too weak to fight the downhill flow, become stranded on land. They then enter hibernation, awaiting the next eruption. A pyropiscis can hibernate for centuries at a time. Eventually, however, a stranded pyropiscis begins to starve, and will break out of its hibernation in search of food. Pyropiscises reproduce by laying clutches of four to six eggs. They surround their eggs in fiercely guarded nests constructed of iron drawn from the surrounding stone. Newly hatched pyropiscises look like worms made of lava. Their scales are soft, and they lack the protective plating of their adult counterparts. Sometimes, pyropiscises venture deep into the hearts of volcanoes that host portals to other planes, and wander through in search of sustenance. The Elemental Plane of Fire is their most common extraplanar hunting ground, but occasionally pyropiscises are found hunting in Hell. Lengthy sojourns into infernal realms sometimes grant pyropiscises fiendish traits. Habitat & Society Pyropiscises are found across Golarion, almost exclusively in areas of intense volcanic activity. They can reach many of the world's active volcanoes by navigating the interconnected series of magma chambers that worm their way through the depths of the earth, ranging from arctic hot springs to volcanic tropical islands. These lava-dwelling fish rarely venture far onto the surface, preferring to remain belowground where rock remains molten for hundreds or thousands of years. The natural instability of their homes sometimes turns against pyropiscises, however, and particularly violent eruptions send angry pyropiscises raining down on nearby surface settlements, where they gorge themselves and cause even greater destruction. Pyropiscises are social creatures. They live in schools of a dozen or more individuals, typically hunting alone or in smaller packs. They reproduce infrequently, and only ever after a successful hunt. Pyropiscises are intensely protective of all the young in their school regardless of parentage, and take turns guarding them. When a new crop of young reaches maturity, they form a school of their own, venturing to a different part of the same volcano. Even if a pyropiscis's hunts take it to other planes, it always strives to return to the volcano of its birth to spawn. Pyropiscis schools readily adopt stranded wanderers, but while welcoming to their own kind, these fiery beasts are hostile to all other creatures. Some fire giants domesticate pyropiscises, overcoming their surly, willful nature through stubbornness. The giants' size and immunity to fire allow groups of them to handle an unruly pyropiscis throughout its training. Still, fire giants must continually placate their pets with charred flesh to prevent them from lashing out. This steady stream of food grows the pyropiscis to an enormous size, and some fire giants have been known to ride giant pyropiscises as mounts into battle. Pyropiscises also serve fire giants as fortress guardians, swimming in moats of magma at the entrances to their tunnels. Pyropiscises are a recurring bane to miners and excavators. The rumble and activity of mining efforts can stir hibernating pyropiscises from their slumber, and the newly wakened pyropiscises spare few lives in their search for food and safety. The most unfortunate miners may even break directly into a pyropiscis's cocoon, as a hibernating pyropiscis encased in solid rock is indistinguishable from the surrounding stone. Those with the skill or unfortunate experience to recognize a sleeping pyropiscis for what it is can make a decent profit selling the monster to individuals in search of a guardian or owners of particularly opulent menageries, provided they can chisel the cocoon free and transport it to market without rousing the creature inside.",
    organization: "solitary, pack (3-6), or school (12-20)",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 5
      },
      Stealth: {
        ranks: 0,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      burn: {
        universalMonsterAbility: "Burn",
        saveDC: 10,
        damage: "1d6"
      },
      "searing bite": {
        type: "Ex",
        text: "A pyropiscis's searing-hot jaws are designed to bind readily to flesh, giving it a firm grasp on its prey. This functions as the constrict ability, except that a pyropiscis deals 2d6 points of fire damage when it makes a successful grapple check, rather than dealing bludgeoning damage."
      },
      sprint: {
        type: "Ex",
        text: "Once per minute, a pyropiscis may sprint, increasing its land speed to 40 feet for 1 round."
      },
      hibernation: {
        type: "Ex",
        text: "A pyropiscis can enter a state of hibernation for an indefinite period of time in order to survive longer periods away from a source of lava. Entering a state of hibernation takes 1 hour, during which the pyropiscis encases itself in a thick layer of igneous stone. While hibernating, a pyropiscis doesn't need to breathe, drink, or eat. The stone casing has hardness 8 and 90 hit points. As long as the casing remains intact, the pyropiscis within remains unharmed. The pyropiscis remains in a state of hibernation until it senses lava (or another source of extreme heat) nearby, at which point it breaks out of its case over the course of 1d4 minutes. Lava Bomb (Ex) Like an active volcano, a pyropiscis can spit a lava bomb-a blob of molten rock-as a ranged attack (range increment 30 feet). If a lava bomb hits, it deals 3d6 points of bludgeoning damage and 2d6 points of fire damage to its target. Lava Dependency (Ex) A pyropiscis can breathe indefinitely while submerged in lava. It can survive out of lava for 1 hour per point of Constitution. Beyond this limit, the pyropiscis runs the risk of suffocation, as if it were drowning."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    },
    resistances: [
      "vulnerable to cold"
    ]
  },

};