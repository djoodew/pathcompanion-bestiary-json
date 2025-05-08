
export const Empty_GravesCreatures = {
  Esobok: {
    source: "Empty Graves",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "psychopomp"
    ],
    alignments: [
      "Neutral"
    ],
    size: "Medium",
    hd: 4,
    hdVal: 10,
    cr: 3,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Detect Undead",
      "Low-Light Vision",
      "Scent",
      "Spirit Sense"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 16,
      dex: 17,
      con: 14,
      int: 5,
      wis: 14,
      cha: 15
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
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
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 2,
        damageType: "adamantine"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (the Boneyard)",
    visualDescription: "Malice oozes from this stout, hunched predator. A ruff of dirty feathers adorns its hairless, muscular body just below its crocodilian skull.",
    description: "The mad dogs of the Boneyard, esoboks are the blunt and vicious predator caste of psychopomps. They patrol the Spire as feral hunters, hungry for undead flesh. Though as outsiders esoboks don't have to eat and draw no sustenance from this behavior, the spark of undeath is a feast for their every sense, and they pursue and ravenously consume undead creatures given the chance. Mortals rarely see these otherworldly hunters, and only those steeped in the ways of death know of their existence. They hazily creep into the edges of living mythologies, appearing as torturers of fallen souls or delivering a gnashing end to mortals whose souls don't meet Pharasma's expectations. In truth, esoboks show a curious neutrality towards petitioners. Only the living- and even more so the undead-catch their eye, while the truly dead have little to fear. Esoboks are stout, physically impressive specimens, with dog-like bodies and the girth of rhinoceroses or hippopotamuses. Their bodies are bald, aside from a thick collar of oily feathers at their necks, but bear distinctive spots, stripes, or patterns that identify individuals. Even among psychopomps, there is speculation regarding how to differentiate between male and female esoboks, or even whether they have physical sexes. The typical esobok stands 3 feet tall at the shoulder and nearly as wide, and weighs upwards of 300 pounds. Ecology Like all psychopomps, esoboks are native to the Boneyard and Pharasma's Spire. Esoboks are savage and dogged beings, gifted with impressive teeth and claws, but they are less intelligent than other psychopomps, and less perceptive. They do, however, possess an uncanny ability to sniff out the negative energy that animates undead. Their bodies are nearly unassailable, with an immune system any living scavenger would envy. In addition to dealing physical damage with their bites, an esobok can plunge its eldritch jaws deep inside a creature and tear out the living essence that sustains its prey. The ties that bind soul to body are strong, though, and esoboks eventually lose their grip on all but the weakest of spirits, at which point the spirits return to their victims' bodies. Some fringe cults even summon esoboks expressly to loosen the spirit from a guru's physical body, allowing her to seek wisdom unburdened by the trivial concerns of the living. While as outsiders they have no need to eat or drink to survive, esoboks' gnawing hunger and focused purpose cause them to grow restless, irritated, and unpredictable if denied prey too long. They favor unliving meals, but will hunt anything they can chase. Esoboks prefer rich sources of negative and positive energy-such as characters who can channel energy, beings that radiate these energies naturally, or potions and scrolls of various cure and inflict spells-but most every entity in the multiverse holds some shining seed of energy that an esobok would savor. Most psychopomps arise from the souls of the unaligned dead, and bring an unusual amount of their living selves with them into eternal services. Esoboks instead rise from the Boneyard itself. Most believe they are the souls of animals, bound into eternal service by Pharasma. A few scholars of esoteric lore believe the Spire forges the creatures from lingering shreds of soulstuff that have flaked from the countless weary dead. Whatever their origins, esoboks lack the strong personalities common among other psychopomps. They have few personal proclivities and loathe individuality. Within the Boneyard, packs of esoboks roam like wolves, constantly searching for intruders and those who would raise the dead or interfere with their tombs. These feral packs carve out territories and defend them from outsiders and even other psychopomps. While they prefer the taste of undeath, esoboks eat their fill of infernal or celestial trespassers. Only petitioners and other psychopomps escape their predation. Habitat & Society Esoboks are the savage guard dogs of Pharasma. While vanths serve as eerily disciplined soldiers, morrignas hunt fugitives of the system, and other psychopomps tend to the bureaucracy of death, esoboks are her guardian beasts. Uncorrupted by ethical questions or personal desires, they simply shred whatever they encounter. Their unruly nature and limited intelligence make esoboks ideal border guards and attack animals. Like vanths, their behavior is alien and unsettling, seemingly devoid of the mortal heritage of most outsiders. Vanths find the creatures comforting, and frequently recruit them to direct their savage fury against astradaemons, night hags, and others who might profit from interfering with the River of Souls. Yamarajes permit only the most disciplined of esoboks within sight of the Boneyard's great palaces of justice and record halls, and even then only when tightly chained. Esoboks are never trusted to retrieve the souls of the fallen. Despite their fondness for petitioners, they are rough and simple-minded brutes that are difficult to control. Even if allowed to visit the mortal world, they require short leashes and disciplined masters. They most frequently accompany vanths to sites of undead infection, and more rarely act as muscle for morrignas tired of subtlety. Occasionally, mortal summoners call forth esoboks to contain outbreaks of undead-their joy at the taste of undead flesh usually keeps them from causing much harm to other creatures. If they lack undead prey, however, esoboks stranded on the Material Plane prey on whatever they can chase and catch. Though esoboks respect and fear more powerful psychopomps, only vanths seem capable of training them into anything more than crude animals. Such trained esoboks grow substantially in power, as their newfound discipline taps into their latent magic. These war dogs have the advanced simple template and gain the following spell-like abilities, each usable once per day: ear-piercing scream, haunting mists, and teleport.",
    organization: "solitary, pack (2-6), or hunting party (3-10 esoboks plus 1 vanth psychopomp)",
    languages: "Abyssal, Celestial, Infernal",
    spellLikeAbilities: [
      {
        name: "detect undead",
        casterLevel: 4,
        timesPerDay: -1
      },
      {
        name: "invisibility",
        casterLevel: 4,
        limitations: "self only",
        timesPerDay: 3
      }
    ],
    skills: {
      Climb: {
        ranks: 6
      },
      Intimidate: {
        ranks: 6
      },
      Stealth: {
        ranks: 3
      },
      Survival: {
        ranks: 6
      }
    },
    special: {
      pounce: {
        universalMonsterAbility: "Pounce"
      },
      "wrench spirit": {
        type: "Su",
        text: "If an esobok begins its turn grappling a living or undead creature, it can attempt to wrench that creature's animating spirit free as a standard action. If the target succeeds at a DC 14 Will save, it takes 1d6 points of force damage; if the target fails, its spirit is stripped from its body. This effect instantly destroys mindless undead and leaves intelligent undead stunned. All other targets are paralyzed. Once per round, a creature paralyzed by this effect can attempt a new saving throw to free its soul from the esobok's jaws. An esobok can't use its bite attack while it holds a disembodied spirit, but it can release the spirit back to the spirit's body as a free action. Creatures without souls (such as constructs and oozes) and creatures whose bodies and souls are one unit (such as outsiders) are immune to this ability."
      },
      "eater of the dead": {
        type: "Su",
        text: "Esoboks feed on the decaying flesh of undead. They are immune to the nauseated condition, and any effect that would normally cause them to become nauseated instead causes them to become sickened."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  Sha: {
    source: "Empty Graves",
    creatureType: "magical beast",
    subTypes: [],
    alignments: [
      "Lawful Evil"
    ],
    size: "Medium",
    hd: 6,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Sandstorm Sight"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 16,
      dex: 19,
      con: 14,
      int: 5,
      wis: 15,
      cha: 10
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Following Step",
        type: "Combat"
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
        specialAbility: "disease, trip",
        damage: "1d6",
        type: "primary"
      }
    ],
    defense: {
      naturalArmor: 3
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm deserts",
    visualDescription: "This canine creature possesses erect, squared-off ears, a forked tail, and a downward-turned snout. Black fur covers its body, and its emotionless eyes glow red.",
    description: "Once more prominent in Ancient Osirion, shas are favored creatures of the god Set, and faded scrolls detailing the past of Osirion refer to more powerful versions of these creatures the people called Set beasts. Considered heralds of the dark god Set, shas stalk the deepest deserts, only skirting the edge of civilization. Villagers whisper that a sha nears when they spot faint red lights in the distance, believing those lights to be the menacing eyes of the sha. Many times, simple worry drives these sightings, but shas live in the deep deserts and they certainly keep an eye on humankind. An urge to hunt the people who forgot their patron drives shas to attack caravans, harass remote villages, and prowl isolated oases to slaughter humanoids. Black fur, tinted with the dust and sand of the desert, covers a sha's body. The creature's eyes glow a dull red. Explorers report that seeing a sha's eyes glowing in the dark night is often the only indication of an impending attack. A sha's strong jaw, lined with razor-sharp teeth, allows the creature to drag down larger prey in a fashion similar to a wolf. Standing at chest height to most humans, shas weigh between 100 and 150 pounds. Shas possess a distinct canine appearance, and they are often mistaken at night for common jackals whose eyes are illuminated by firelight. This misidentification was prevalent in Ancient Osirion as well, leading some to wrongfully associate the creatures with Anubis. These days, scholars and those who still worship the old gods of Osirion are among the few people who correctly identify these beasts and their deific association. Ecology Legends state that shas were once simple canine animals long ago. The Osirian deity Set admired their reliability as trackers, hunters, killers, and masters of the deep deserts, and so blessed these early creatures with supernatural powers and sapience to create the first shas. Possessing the gifts of keen perception and eyes that would never tire, shas served Set as protectors of his cults and weapons to be sent against rivals. They also have the ability to understand the tongue of ancient Osirion, though they lack the physical capability to speak the language. This way, the creatures can understand and carry out commands, but lack any way to disagree or communicate displeasure at their directives. Set gave his loyal beasts the ability to conjure supernatural sandstorms, tying them closer to his portfolio as god of storms. This power allows the creatures to obfuscate their approach and drive off dangerous enemies, yet the creatures' ability to see through their own sandstorms allows shas to pick off their quarry unhindered. Set also imbued his beasts with the ability to transmit horrific plagues upon those they bite, weakening their victims' minds and driving the victims deep into madness. When Set first imbued the shas with divine might, his creations were much more powerful and cunning. With the passage of millennia and the gradual decline of Set's worship, his blessings have faded, resulting in the shas that now prowl the deserts. On rare occasions, a convergence of old sha bloodlines results in a particularly formidable, devious, and cruel sha known as a Set beast, which Osirionologists believe is the original form once taken by Set's favored creatures. Malice and strength are not the only qualities passed from generation to generation; shas still seem to remember the source of their power, for they attack those who openly display holy symbols of other gods before savaging those who show faith in one of the gods of ancient Osirion. Habitat & Society Most shas lead a solitary existence, though some end up finding a lone partner to hunt with or a small pack to join. When alone, a sha spends its days trekking the vast wastelands of the desert, prowling among lost monuments that were once proud accomplishments of ancient Osirion. Those exploring such sites must keep alert, because shas plan ambushes and silently stalk their prey, often waiting until their victims emerge from darkened ruins before striking. While wandering the deserts, shas also attack small convoys or groups of nomads along the desert fringes. Using their innate ability to conjure sandstorms, shas close in on the unsuspecting groups and try to injure as many different enemies as possible, then retreat before their foes can regroup. By doing this, the shas ensure that survivors return to civilization mad with disease and then spread the sickness to others or act on their insane urges. When packs of shas come together, they usually do so because a number of their kind happened upon each other in pursuit of a caravan or some other nomadic prey, then decided to continue hunting together once they fed. If a group forms, it follows a strict hierarchy that revolves around the strongest sha taking the lead. If more than one sha feels it has the right to lead, the pack forms a circle and the two shas fight until one submits to the other. Such competition never takes place if a Set beast is present; the pack members acquiesce to this greater creature and follow its commands unerringly, lest they invite its wrath. Set beasts travel the breadth of what once constituted Ancient Osirion, as lone wanderers or packs that never stray far from the ancestral borders of that old empire. The largest enclaves roam the deserts of modern Osirion and Thuvia, generally avoiding civilization until the urge to hunt overtakes them. A handful of sizeable packs even hunt in the open wilds of Katapesh, seeking trade convoys to ambush. Deeper into the Brazen Peaks, a pack of shas has recently been harassing settlements of Pahmet dwarves between Oe-Tet and Erekrus, going so far as to stalk the dwarves as they travel between towns. Groups of shas dot the eastern edges of Rahadoum, where their infectious bites have strained the resources of many settlements that lack divine healing. For protection from these creatures, a handful of remote settlements and nomadic wanderers in Osirion once again embraced their ancient religions and began paying token homage to Set, hoping their meager efforts would stave off any further attacks from shas and Set beasts. Set Beasts(CR 6) The people of Osirion and northern Garund watch out for shas, but more threatening than those creatures are their ancient and powerful kin known as Set beasts. These Set beasts are even more closely tied to their patron, and Osirionologists claim that Set beasts were among the first of their kind created by the god himself. A Set beast is a sha with both the advanced simple template and the fiendish simple template (Pathfinder RPG Bestiary 294). In addition to this, the Set beast gains the ability to speak and knows one additional language beyond Ancient Osiriani (typically Common or Infernal). More closely tied to Set's portfolio of storms, Set beasts also deal an additional 1d6 points of electricity damage with their bite attacks.",
    organization: "solitary, pair, or pack (3-8)",
    languages: "Ancient Osiriani (can't speak)",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 0
      },
      Perception: {
        ranks: 2
      },
      Stealth: {
        ranks: 3
      }
    },
    special: {
      disease: {
        universalMonsterAbility: "Disease",
        type: "Su",
        text: "A sha transmits a potent disease with its bite. The most common form of disease carried by a sha drives its victims insane, reducing them to babbling fools or raving lunatics. Set's Touch: Bite-injury; save Fort DC 15; onset 1d3 days; frequency 1 day; effect 1d4 Wis damage and 1d4 Cha damage; cure 2 consecutive saves."
      },
      sandstorm: {
        type: "Su",
        text: "Once per day as a full-round action, a sha can create a sandstorm (Pathfinder RPG Core Rulebook 431). The sandstorm has a radius of 100 feet centered on the sha, and lasts for 1 minute per Hit Die the sha possesses (6 minutes for a typical sha). Sandstorm Sight (Su) A sha can see clearly in a naturally occurring sandstorm or one created by it or another sha using its sandstorm ability."
      },
      trip: {
        universalMonsterAbility: "Trip"
      }
    }
  },

  "Sunbaked Zombie": {
    source: "Empty Graves",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 2,
    hdVal: 8,
    cr: 1,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 17,
      dex: 12,
      con: "-",
      int: "-",
      wis: 10,
      cha: 10
    },
    feats: [
      {
        name: "Toughness",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "slashing"
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any warm",
    visualDescription: "This humanoid creature's skin is scorched brown and pulled taut against its bones. Flames flicker in its hollow eye sockets.",
    description: "Most creatures that die in the desert are consumed by roaming scavengers or buried forever by sand, yet those who avoid such a fate bake under the merciless sun. Such desiccated corpses near pyramids or other areas with strong necromantic magic sometimes rise as sunbaked zombies. With their corporeal bodies warped by the sun, and their innards but a dry facsimile of living organs, sunbaked zombies use the gifts of the sun to lash those who cross their paths. A sunbaked zombie is the same size as its original form, but typically weighs less than half its original weight. Ecology Other than the dry, leathery skin clinging to the creature's bones, the most striking physical difference between a sunbaked zombie and a normal zombie is the sunbaked zombie's flame-filled eye sockets. Though it lacks functioning eyes-those having long since shriveled to dust-the sunbaked zombie can see as well as any other zombie, and the flames in its dried sockets can set enemies afire. With its dried, taut skin and taut and insides reduced to dust, it retains a normal zombie's resistance to damage. When its animating spark is extinguished, a sunbaked zombie's corpse bursts into a cloud of poisonous gas, choking those around it. So long as the sun shines, sunbaked zombies move about as if with purpose. At night, however, they wander in circles until the sun blazes across the morning sky once more. The faint light given off by their eye sockets, combined with their stumbling movement, has led some desert nomads to claim they are desert will-o-wisps. Habitat & Society Sun-baked zombies most often rise near pyramids and other burial sites in hot deserts, where latent necromantic energy lingers from countless arcane rituals and restless spirits. As such, sunbaked zombies are primarily found among the dunes of Osirion and the other nations that make up northern Garund. Typically animated in isolation, sunbaked zombies rarely form hordes like normal zombies, but when entire caravans fall to thirst and the desert sun, all of its members might rise as these terrible undead. When one intentionally raises a sunbaked zombie using animate dead, the body to be raised must be left out in the sun's rays for a full 12 hours and must be salted every hour during this time to hasten its desiccation. Spell effects that produce light work for this purpose only if they count as actual sunlight, and even then they must be combined with desecrate. Casting the animating spell at night always fails; the sun must be out and directly beating down on the corpse. Without the intense magical focus of a spell, it takes many days for the corpse to absorb enough sun and necromantic energy to rise spontaneously. Creating a Sunbaked Zombie \"Sunbaked zombie\" is an acquired template that can be added to any corporeal creature (other than undead), referred to hereafter as the base creature. CR: This depends on the creature's new total number of Hit Dice, as follows. HD CR XP 1 1/2 200 2 1 400 3-4 2 600 5-6 3 800 7-8 4 1,200 9-10 5 1,600 11-12 6 2,400 13-16 7 3,200 17-20 8 4,800 21-24 9 6,400 25-28 10 9,600 Alignment: Always neutral evil. Type: The creature's type changes to undead. It retains any subtypes except for alignment subtypes (such as good) and subtypes that indicate kind (such as giant). It does not gain the augmented subtype. Armor Class: The natural armor bonus is based on the creature's size. Sunbaked Zombie Size Natural Armor Bonus Tiny or smaller +0 Small +1 Medium +2 Large +3 Huge +4 Gargantuan +7 Colossal +11 Hit Dice: Drop Hit Dice gained from class levels (to a minimum of 1) and change racial HD to d8s. Sunbaked zombies gain additional HD as noted on the following table. Sunbaked zombies use their Charisma modifiers to determine bonus hit points (instead of Constitution). Sunbaked Zombie Size Bonus Hit Dice Tiny or smaller- Small or Medium +1 HD Large +2 HD Huge +4 HD Gargantuan +6 HD Colossal +10 HD Saves: A sunbaked zombie's base save bonuses are Fort +1/3 HD, Ref +1/3 HD, and Will +1/2 HD + 2. Defensive Abilities: A sunbaked zombie loses the base creature's defensive abilities and gains DR 5/slashing and resist fire 10 (or immunity to fire if it has 11 HD or more), as well as all of the standard immunities and traits granted by the undead type. Speed: Winged sunbaked zombies can still fly, but their maneuverability drops to clumsy. If the base creature flew magically, so can the sunbaked zombie. Retain all other movement types. Attacks: A sunbaked zombie retains all natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. It also gains a slam attack that deals damage based on the sunbaked zombie's size, but as if it were one size category larger than its actual size (Pathfinder RPG Bestiary 301-302). Special Attacks: A sunbaked zombie retains none of the base creature's special attacks, but gains the following. Death Throes (Su): When a sunbaked zombie is destroyed, its body explodes in a burst of stale dust. Adjacent creatures must succeed at a Fortitude save or be staggered for 1d4+1 rounds. The DC is equal to 10 + 1/2 the sunbaked zombie's Hit Dice + the sunbaked zombie's Cha modifier. Creatures that don't breathe are immune to this effect. Fiery Gaze (Su): A sunbaked zombie's eye sockets flicker with a small flame that gives light equivalent to that of a candle. As a standard action, a sunbaked zombie can direct its gaze against a single creature within 30 feet of it. A creature targeted must succeed at a Fortitude save or take 1d6 points of fire damage. If the sunbaked zombie has 5 or more Hit Dice, its fiery gaze deals 2d6 points of fire damage, and this damage increases by an additional 1d6 points of fire damage for every 4 additional Hit Dice the sunbaked zombie possesses. A creature damaged by this effect must succeed at a Reflex save or catch fire. Each round, a burning creature can attempt a Reflex save to quench the flames; failure results in another 1d6 points of fire damage. Flammable items worn by a creature must also save or take the same damage as the creature. If a creature is already on fire, it suffers no additional effects from a fiery gaze. The save DC is Charisma-based. Abilities: Str +2. A sunbaked zombie has no Con or Int score, and its Wis and Cha become 10. BAB: A sunbaked zombie's base attack bonus is equal to 3/4 of its Hit Dice. Skills: A sunbaked zombie has no skill ranks. Feats: A sunbaked zombie loses all feats possessed by the base creature and gains Toughness as a bonus feat. Special Qualities: A sunbaked zombie loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks.",
    organization: "solitary, pair, or infestation (3-12)",
    spellLikeAbilities: [],
    skills: {},
    special: {
      "death throes": {
        type: "Ex",
        preText: "DC 11"
      },
      "fiery gaze": {
        type: "Ex",
        preText: "1d6 fire, DC 11"
      }
    },
    resistances: [
      {
        damageType: "fire",
        value: 10
      }
    ]
  },

  Tekenu: {
    source: "Empty Graves",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Neutral Evil"
    ],
    size: "Small",
    hd: 10,
    hdVal: 8,
    cr: 6,
    racialFeatures: [
      "Lifesense"
    ],
    speed: {
      base: 10,
      maneuverability: "Poor",
      fly: 30
    },
    abilities: {
      str: 11,
      dex: 19,
      con: "-",
      int: 2,
      wis: 10,
      cha: 15
    },
    feats: [
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
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "warm ruins",
    visualDescription: "A collection of cast-off organs rolls and squeezes against itself, forming a writhing mass of viscera that hovers in the air.",
    description: "Guardians of long-abandoned tombs, tekenu are the result of a vile practice that instills the discarded piles of flesh left over from the mummification process with an unholy awareness. Separated from the sacred organs placed in canopic jars, tekenus attempt to reconnect with their counterparts among the living by killing creatures so that they can absorb intestines, livers, lungs, and stomachs into their squirming forms-a process that grants the undead creature additional powers. Tekenus have been known to hide inside canopic jars collected from excavations (cleverly pulling the lid closed), attacking passersby like a trapdoor spider. Adventurers searching through lost reliquaries and tombs of ancient Osirion commonly call these foul creatures \"gutswarms\"; however, the name scholars give them is derived from an ancient Osirian term for the cast off remains of mummification rituals. A tekenu has an ever-changing form roughly 3 feet long and 2 feet wide, essentially the size of a robust humanoid's torso and abdomen. The mass weighs about 40 pounds. Ecology Scholars debate the genesis of the tekenu. Some propose these atrocities are the creations of sects of evil priests in ancient Osirion, as they have been encountered only in tombs in that nation and of that era. However, several groups claim responsibility for the creation of the tekenu, including modern cults of Kabriri and Urgathoa. More cautious and traditional scholars claim that the tekenu are instead undead abominations resulting from improperly conducted mummification rituals, specifically ones in which the incision to remove organs was performed by a criminal or laborer. The viscera that constitute a tekenu make it less susceptible to weapon damage and provide it with defensive abilities similar to those of swarms. In fact, until a tekenu absorbs one of the sacred canopic organs, it poses no stronger a threat than that of a swarm of Tiny vermin. The absorption of a sacred organ, however, prompts a radical transformation in the tekenu. Only fresh organs or those preserved by magic enhance the tekenu in this way. Unearthed tekenu have typically consumed one or two organs, normally those belonging to laborers trapped in the tomb at the time it was sealed. Intestines merge with the discarded remnants to act as long, rope-like appendages, which the tekenu uses to snag and pummel prey. Consuming a liver allows the tekenu to poison its victims and wither their bodies. A set of lungs gives the swarm the ability to hide as a pile of dried gore and increases its mobility. When the tekenu consumes a stomach, its attacks carry a digestive acid to help break down their victims. Of these organs, the tekenu shows particular affinity for absorbing the lungs first, as most adventurers discover a tekenu after being deceived by desiccated viscera they assume to be harmless. Habitat & Society Created in ritual chambers and tombs, most tekenus have no choice of where they are found. Only the most perverse of ancient nobility would have tekenu present in their final resting places. In the most heinous of cases, tekenu would be stealthily placed into a resting chamber immediately prior to the tomb's sealing. This serves as a final insult to the dead, leaving the undead abomination to break into the holy canopic jars and consume the vital organs within while they were still fresh enough to bestow power. In cases where a tekenu was used as a guardian, a fifth jar was placed inside the tomb to house it. In some cases, either because the canopic jars were exceptionally sealed or because they were absent altogether, a tekenu may have none of the abilities granted by its canopic consumption ability. Once its tomb prison is breached (by explorers or some natural calamity), the tekenu becomes a roaming hunter, leaving its lair in search of fresh organs to consume. Acting on base instinct, the creature hunts until it successfully absorbs all four required organs. Upon gathering these absent parts, the tekenu then moves back to the tomb of its creation, where it dutifully guards the site from future intruders. Although a tekenu is barely intelligent, it is drawn to the site of its creation, a lingering result of the ritual that created it. A tekenu has no ability to communicate or interact, and its thoughts, if read by some form of magic, are simple and instinctual. As it preys upon only living and recently dead creatures, it often overlooks constructs and undead. Rare necropolises can be found filled with larger groups of these undead creatures, sealed away in remote chambers or allowed to wander the greater complex unopposed. These groups of tekenus-given stewardships by the priests of Ancient Osirion-ignore other tomb guardians, provided they are not living creatures. These tekenus are set to roam the necropolis consuming small rodents and vermin in the same manner a wizard might use an acidic ooze to dispose of waste.",
    organization: "solitary, pair, or stewardship (3-5)",
    spellLikeAbilities: [],
    skills: {
      Fly: {
        ranks: 3
      },
      Perception: {
        ranks: 3
      },
      Stealth: {
        ranks: 4
      }
    },
    special: {
      "canopic consumption": {
        type: "Su",
        text: "As a full-round action, a tekenu can consume a single organ from the body of a helpless or recently dead humanoid or monstrous humanoid. This organ must either be magically preserved or come from a creature that is alive or has been dead no longer than 3 days. Only one organ may be harvested from each body; all others are destroyed in the process as the tekenu rips the body apart. Each organ consumed grants the tekenu a unique ability listed below. When discovered, a tekenu typically has 1d4 of the following abilities, each corresponding to the most recent organs the creature absorbed. Even when the creature has absorbed all four organs (thus gaining a full suite of abilities), it still hungers for more. The challenge rating of a tekenu that possesses all four canopic organs increases by 1. Intestines: The tekenu gains the grab ability when using its slam attacks. A tekenu can grapple Medium or smaller creatures with this attack, and it gains a +2 racial bonus on its CMB and to its CMD. In addition, the tekenu gains the constrict ability, dealing 2d6 points of damage. Liver: The tekenu's slam attacks deal 1d3 points of Constitution damage to any living creature that fails a DC 17 Fortitude save. This is a poison effect, and the save DC is Charisma-based. Lungs: As a standard action, the tekenu can expel most of the air and moisture from its form, turning into a pile of desiccated viscera. While in this form, the tekenu gains a +8 racial bonus on Stealth checks, and its fly speed increases to 60 feet with good maneuverability. It can revert to its normal form as a free action. Stomach: The tekenu deals an additional 1d6 points of acid damage with its slam attacks."
      },
      distraction: {
        type: "Ex",
        preText: "DC 18"
      },
      "odd anatomy": {
        type: "Ex",
        text: "As a collection of various individual organs and flesh, a tekenu is in many ways similar to a swarm. The creature is not subject to critical hits or flanking, and it is immune to any spell or effect that targets a specific number of creatures (including single-target spells such as disintegrate). Vulnerable to Channeled Energy (Ex) A tekenu takes 150% as much damage as normal from channeled positive energy."
      }
    },
    resistances: [
      "vulnerable to channeled energy"
    ]
  },

};