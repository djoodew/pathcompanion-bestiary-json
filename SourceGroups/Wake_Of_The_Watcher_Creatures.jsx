
export const Wake_Of_The_WatcherCreatures = {
  "Dark Young of Shub-Niggurath": {
    source: "Wake Of The Watcher",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 14,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Tremorsense 30 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 30,
      dex: 17,
      con: 24,
      int: 16,
      wis: 19,
      cha: 21
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
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
      },
      {
        name: "Weapon Focus",
        type: "Combat",
        value: "Tentacles",
        choiceSource: "Weapon Focus"
      }
    ],
    attacks: [
      {
        weapon: "Tentacle",
        name: "4 Tentacles",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to acid, electricity, fire, poison"
    ],
    defense: {
      DR: {
        value: 15,
        damageType: "slashing"
      },
      naturalArmor: 16
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "temperate forest or swamp",
    visualDescription: "The lumbering bulk of a treelike monster lurches out of the mist, its branches tentacles, its roots ending in hooves, and its trunk decorated with numerous drooling maws.",
    description: "The Elder God known in whispered circles as Shub- Niggurath is reputed to have a thousand young, when in fact her spawn are myriad. Yet some of her children are more fecund and successful than others, and the monstrosities known as her dark young are perhaps the best known of this legion of monstrosities. In combat, a dark young usually starts by using entangle and command plants to seize control of the surrounding terrain-its ability to constantly use freedom of movement affords it mobility through such regions, allowing it to move through the areas and select its prey with ease. Intelligent and canny, dark young know that spell-casters are more difficult to affect with insanity, and save that spell-like ability for use against rogues, fighters, and similar foes. Flight offers no guarantee of safety from the dark young, for they can pursue their foes through the air as surely as across land. Ecology A dark young superficially resembles a tree, and while it possesses magic that allows it some ability to appear as a tree or to control the plants of the trackless forests it favors, upon close inspection a dark young is manifestly something far more than a mere tree. Even the smallest of these creatures stand taller than a house, while the largest of them shake the very earth with their cloven hooves and crush cities and forests alike with their passage. A typical dark young of Shub-Niggurath stands nearly 30 feet tall and weighs 12,000 pounds, but many are much larger. While most are encountered in temperate regions, they can also be found in subarctic or tropical forests. These dark young appear no different than their temperatedwelling kin, but when they use their tree shape ability, they assume the forms of plants native to the region. Habitat & Society Dark young prefer to dwell in large wilderness regions, particularly within temperate woodlands or swamps. While their presence amid cults of Shub-Niggurath have given rise to assumptions that these foul lunatics possess strange secrets that allow them to conjure the dark young to serve their cabals as guardians, in fact the reverse is true. Cultists of Shub-Niggurath often seek out the dark young and offer themselves to the creatures in sacrifice, in hopes of either being transported to the embrace of their goddess Shub-Niggurath in the process of being digested or impressing the dark young with their devotion so they might be granted reincarnation as one of them-or simply out of madness. In most cases, these offerings end poorly for the cultist, for the dark young of Shub- Niggurath are ravenous-the numerous sucking mouths that stud their trunks drain blood, drink flesh, and devour life rapidly, causing the victim's body to wither and atrophy. Often, a dark young takes pains to avoid damaging those it grabs and holds against its hungry flanks, for a living, squirming meal is so much more delicious than a lifeless husk. Those drained to zero Strength by a dark young are sometimes left hideously alive, perhaps draped across high branches in a tree where the paralyzed victim has no choice but a slow death from thirst and exposure, or maybe left for hungrier jaws in the woods amid the cloven prints and pools of thick green waste that drain from these creatures as they feed. Yet not all cultists who seek the dark young meet such ends, for some of the dark young have strange needs and uses for mortal minions. These dark young serve as objects of veneration and obsession for their cults, and happily accept their sacrifices in Shub-Niggurath's name, even though most dark young themselves feel no great debt of loyalty to their fecund progenitor. The actual uses the dark young put their cults to vary wildly-these aberrations are quite intelligent, and many have their own goals and plans that are made much easier to achieve with the addition of a blindly loyal cult. Most dark young merely enjoy the idea of being worshiped as a god, while others stand apart from their kin and do feel a strong link to Shub-Niggurath, seeing these cults as a way to honor their inhuman mother with mortal minions. Yet the dark young of Shub-Niggurath are the spawn of a body and mind alien to most forms of mortal life, and as such the majority of these monsters have plans and goals that may seem nonsensical at best (such as a strange desire to drive all avian life from a swamp, or a drive to build a series of stone menhirs in a massive spiral shape recognizable only from absurdly great heights) or wantonly destructive at worst (such as the destruction of all settlements within a mile of a forest's edge). It's rare for the cultists themselves to be privy to the dark young's reasoning, and most worshipers content themselves with their own interpretations of why they serve one of the Thousand Young.",
    organization: "solitary, pair, or grove (3-6)",
    languages: "Aklo",
    spellLikeAbilities: [
      {
        name: "freedom of movement",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "air walk",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "tree shape",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "entangle",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "command plants",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "insanity",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "tree stride",
        casterLevel: 12,
        timesPerDay: 1
      }
    ],
    skills: {
      "Knowledge (arcana)": {
        ranks: 14
      },
      "Knowledge (nature)": {
        ranks: 14
      },
      "Knowledge (religion)": {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      "Sense Motive": {
        ranks: 14
      },
      Spellcraft: {
        ranks: 14
      },
      Stealth: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+10"
      },
      "sucking maws": {
        type: "Su",
        text: "A dark young of Shub-Niggurath that successfully pins a creature it is grappling automatically inflicts 1d4 points of Strength drain on that creature. A DC 24 Fortitude save reduces this effect to 1 point of Strength drain. A creature drained to 0 Strength does not die, but must make a DC 24 Will save at that point to resist being driven mad by the experience, as the foul green waste exuded from the same sucking mouths that drink life implant in the emptied shells strange visions and horrifying certainties. If you use the GameMastery Guide in your game, this madness manifests as schizophrenia, but with a save DC equal to the dark young's Strength drain save DC listed above (DC 24 for most dark young). One common result of this unfortunate madness is a strange desire to return to the site of their original encounter in hopes of being consumed entirely by the creature that only drank a part of their body and mind-many of those who survive this horrific ordeal go on to found dark young cults of their own. If you don't use the GameMastery Guide in your game, treat this madness instead as an insanity spell. The madness element of a dark young's sucking maws is a mind-affecting effect. The save DC for all of the saving throws involved with this special ability is Constitution-based."
      },
      trample: {
        universalMonsterAbility: "Trample",
        damage: "1d8+15",
        saveDC: 10
      },
      "frightful presence": {
        universalMonsterAbility: "Frightful Presence",
        range: "30 ft."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Dimensional Shambler": {
    source: "Wake Of The Watcher",
    creatureType: "outsider",
    subTypes: [
      "chaotic",
      "evil"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 9,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 21,
      dex: 16,
      con: 20,
      int: 7,
      wis: 14,
      cha: 13
    },
    feats: [
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
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "2 Claws",
        specialAbility: "grab",
        damage: "1d4",
        type: "primary"
      }
    ],
    immunities: [
      "Immune to summoning"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "lawful"
      },
      naturalArmor: 8
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "This rugose figure rears up to a man's height, its large hands bearing far too many twitching fingers.",
    description: "The dimensional shambler is a vagabond of the realms between realms. With its ability to shift planes, it is no stranger to the weirdest the Great Beyond has to offer, and despite its brutish and unrefined intellect, its knowledge of the planes and the relationships between dimensions is significant indeed. A dimensional shambler is humanoid in outline, yet it moves with a weird and alien gait that gives it the appearance of a creature not in full possession of its faculties, almost as if it were drunk or horribly wounded. Yet those who mistake this shambling posture as a sign of weakness swiftly learn of their error, for the dimensional shambler is in fact quite agile-the weird lumbering cadence of its movements is simply another outward manifestation of its inhuman countenance. A dimensional shambler typically stands just over 7 feet in height, and weighs 350 pounds. Ecology As outsiders, dimensional shamblers have no need to feed-a trait that comes in handy for a creature that often finds itself adrift or lost in strange realms where food and water does not-or perhaps cannot-exist. They are certainly most at home in regions that function similarly to most Material Plane worlds, for their bodies are built to traverse the ground. They have no inborn ability to fly, cannot breathe water, and possess no unusual resistance to energies, and as such there are many realms throughout the Great Beyond that are dangerous or even deadly to dimensional shamblers. Yet they are masters of traveling the planes, and instinctively avoid appearing in regions that would cause them harm. More powerful dimensional shamblers often seek out magical devices to aid them in traveling the stranger and less hospitable corners of reality. The need a dimensional shambler has for exploring the Great Beyond is not fully understood by mortal scholars. Certainly, curiosity seems to be a large part of their drive-a dimensional shambler can spend weeks or even years simply observing a particularly unusual planar feature, such as the expulsion of raw protolife from the Positive Energy Plane into the surrounding realities, the strange semianimate heavings of an Abyssal swamp giving birth to a legion of demons, or the mind-numbing violence of a reality storm deep in the Maelstrom. As chaotic evil outsiders, they are most comfortable on planes that either have no strong alignment traits or are close to chaotic evil, yet this does not prevent them from exploring realms beyond. The mind of a dimensional shambler, as with its body and mobility, is not quite \"in tune\" with mortal expectations, and it may be that what scholars have assumed is curiosity could be some other driving force. Perhaps the race instinctively travels the Great Beyond in search of a forgotten or hidden goal, or maybe the constant change of reality is something that brings them pleasure or some strange nutrition. Dimensional shamblers generally lack the wits to carry on long philosophical discussions, and are prone to attacking other creatures when they encounter them, so attempts to learn more about this mysterious race through conversation have not resulted in particularly informative results. Habitat & Society Dimensional shamblers seem to have very little interest in others of their kind. While they do not display any instinctual need for violence against others of their ilk when chance brings them together, neither do they seek out their own kind for companionship. Dimensional shamblers are solitary beings, and the majority of their interactions with other forms of life are violent- they are fond of snatching creatures who are capable of comprehending their own peril and whisking them away to remote corners of the multiverse. Those few who have endured these abductions and survived to tell the tale did so either by escaping their captors and hiding, or by slaying the shamblers. In all cases, their return home has involved harrowing journeys through the Great Beyond, for the dimensional shambler is frustratingly skilled at selecting particularly remote and dangerous realms as destinations for its abductions. The fate of the majority of these victims is unknown, although circumstantial evidence indicates that the shambler itself plays a key and grisly role in the victims' doom. Spellcasters have long sought to harness the dimensional shambler's ability to accurately travel between planes. Mortal magic has traditionally found this feat a difficult one to master-plane shift is notorious for its inaccuracy, often leaving powerful effects like gate, miracle, or wish as the favored methods of safe interplanar travel. Yet the dimensional shambler seems able to navigate the unnavigable with ease, traveling between incredibly diverse and distant locations with no more difficulty than a human might have stepping out of a house into his own front yard. Unfortunately, the same mastery over dimensional travel that affords shamblers such accurate navigation allows them to resist the call of conjurers with surprising skill. In fact, by the time most spellcasters master the magic required to lure or conjure a dimensional shambler, it is often a simpler matter to use a gate spell instead. Some conjurers claim to have developed methods of attracting dimensional shamblers more easily. Through the use of blood sacrifice via a blade of purest metal and the application of exacting mathematical symbols or other complex combinations of runes, these spellcasters can call upon dimensional shamblers with relative ease. Unfortunately, the exact combination of runes, metals, and bloodshed seems different for every dimensional shambler, so once a spellcaster discovers the correct combination to lure one of these monsters, the secret that caster has uncovered is as closely guarded as her greatest treasures. The nature and availability of these secret rituals are left to the GM to determine, but such a ritual's recipe could well be worth 8,000 gp or more to an interested party.",
    organization: "solitary, pair, or gang (3-9)",
    languages: "Aklo",
    spellLikeAbilities: [
      {
        name: "dimension door",
        casterLevel: 8,
        timesPerDay: -1
      },
      {
        name: "blink",
        casterLevel: 8,
        timesPerDay: 3
      },
      {
        name: "dimensional anchor",
        casterLevel: 8,
        timesPerDay: 3
      }
    ],
    skills: {
      "Knowledge (planes)": {
        ranks: 9,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
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
      "dimension mastery": {
        type: "Ex",
        text: "A dimensional shambler can take actions normally after using dimension door effects. A dimensional shambler under the effects of a dimensional anchor or dimensional lock spell can ignore the effects of the spell for 1 round by making a DC 25 Knowledge (planes) check as a move action."
      },
      "shift planes": {
        type: "Su",
        text: "A dimensional shambler can shift between planes once per hour, using an effect that is similar to that created by the plane shift spell, save that a dimensional shambler is a master of such travel and can manifest at an exact location on its destination plane if it makes a DC 20 Knowledge (planes) check. If it exceeds this DC by 10 or more, it can place itself in such a position upon arrival that if combat immediately results from its appearance, it gains a +10 bonus on its resulting initiative check. Using shift planes is a full-round action that provokes attacks of opportunity, during which the dimensional shambler shimmers and grows increasingly transparent. A dimensional shambler can use this ability while grappling a creature-doing so does not provoke attacks of opportunity from the creature it is grappling. If the creature is of the dimensional shambler's size or smaller (Medium for most dimensional shamblers), that creature shifts planes with the dimensional shambler unless it makes a DC 15 Will save. The save DC is Charisma-based."
      },
      "resist conjuration": {
        type: "Ex",
        text: "Dimensional shamblers detest being conjured by other creatures. They are immune to all spell effects of the summoning school, and are treated as if they had double their actual Hit Dice (18 HD for most dimensional shamblers) for the purposes of determining if they can be conjured by spells like planar ally or planar binding."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

  "Gnoph-Keh": {
    source: "Wake Of The Watcher",
    creatureType: "magical beast",
    subTypes: [
      "cold"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Large",
    hd: 14,
    hdVal: 10,
    cr: 11,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Snow Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 24,
      dex: 13,
      con: 20,
      int: 13,
      wis: 20,
      cha: 21
    },
    feats: [
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
        value: "Gore",
        choiceSource: "Improved Critical"
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
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "4 Claws",
        damage: "1d4",
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
      naturalArmor: 15
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any cold",
    visualDescription: "A vortex of freezing wind swirls around this six-legged, bearlike monstrosity. A single horn protrudes from its snarling face.",
    description: "The gnoph-keh is a six-legged horned creature vaguely akin to a polar bear in shape and outline, yet possessed of a cruel and creative intellect that elevates it from the rank of wild beast to murderous warmonger. Covered with a dense pelt of shaggy white fur, the gnoph-keh is equally at home walking on two, four, or six legs. The creature prefers to travel on all six when using its powerful charge or running, but rears up on its hind legs in combat to bring its four front claws to bear on its foes. With the gnophkeh's ability to call up and direct powerful blizzards matched to its ability to move and see in such conditions without any disadvantage, the creature is rightfully feared in the frozen realms where it dwells. Ecology The gnoph-keh is, and always has been, a beast of the frozen white realms. Temperatures above freezing are uncomfortable to the gnoph-keh, to the extent that prolonged exposure to warm or hot temperatures can actually kill this mighty creature. Its aura of cold helps to protect it somewhat when it ventures into temperate areas, but once in a subtropical or similarly heated environment, the monster's freezing body cannot compensate-its flesh begins to literally melt, as if it were composed of ice and snow. The gnoph-keh has watery blue blood, and as it melts, this pale fluid runs in copious, steaming gouts from its body, inflicting severe pain on the creature. Accounts of gnoph-kehs being driven to blind rage in such conditions and simply attacking all nearby creatures and objects with no attempt to seek safety are likely apocryphal, since a gnoph-keh presented with such extreme temperatures generally does everything in its power to flee. They can use their ability to create blizzards to delay this fate, but in hot areas, the fact that this ability lasts only a minute usually only postpones the inevitable. Although once much more numerous, gnoph-kehs today are spread quite thin through the frozen wastelands and mountain heights they prefer to dwell in. This, combined with the creatures' long gestation period, means that few gnoph-kehs are born. The monsters are exceptionally long-lived, with all indications that they can survive for centuries, or even millennia, if not slain by sickness or violence. Gnoph-kehs typically only seek out others of their kind for two reasons-to mate (an event that generally happens only once a century for any single gnoph-keh) or to make war. Gnoph-kehs are hermaphrodites, capable of fertilizing others of their kind while also capable of becoming pregnant (although they cannot fertilize themselves). Despite its resemblance to a mammal, the gnoph-keh does not birth live young-instead, it lays a clutch of a dozen or so furry eggs that it buries in the snow or in the ice of a glacier. As the eggs grow, they slowly absorb each other until finally only a single egg remains. The creature inside doesn't hatch as much as it simply absorbs the leathery, furry sphere that surrounds it, transforming into a fully grown gnoph-keh. Habitat & Society The primary driving force behind gnoph-keh society is war-not between themselves, but against other creatures that share their realms. Whether this drive to wage war is rooted in a strange psychological need, spurred by racial memories of the creatures' interactions with even more hostile races in the distant past, or something else entirely, there can be no denying that the gnoph-kehs enjoy the act of spreading misery to other races-particularly to humanoids. The only times a gnophkeh interacts with one of these \"lesser races\" is to subjugate it for the purposes of establishing an army that the gnoph-kehs can then use against similar races, for the only thing that eclipses a gnoph-keh's lust for warfare is the delight in turning tribes against each other. Once one tribe wipes out all of its competitors, the inevitable result is the final destruction of the victorious tribe by its own hateful commander. In this way, a single gnoph-keh can eradicate far larger groups than it would normally be able to destroy on its own. While gnoph-keh society may seem monolithic to humanity, this is largely due to the simple fact that most of humanity's interactions with the gnoph-kehs are in the framework of pain and death. And while gnoph-kehs do not usually gather in groups or build cities, there is evidence that this is not always the case in certain strange and ancient ruins found in frozen corners of the world. Most gnoph-kehs spend their time alone in contemplation or worship of strange statues they carve from glaciers or frozen lakes. The countenances of these gnoph-keh gods are alien and frightening. Very few gnoph-keh clerics or other divine spellcasters exist, prompting some scholars to theorize that these statues are in fact effigies of a long-forgotten and even more terrible force-perhaps the same one that nearly drove the gnoph-kehs into extinction so long ago and instilled in their minds such an overwhelming predisposition for war.",
    organization: "solitary, pair, or gathering (3-8)",
    languages: "Aklo",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 14
      },
      Perception: {
        ranks: 14
      },
      Stealth: {
        ranks: 6,
        bonuses: [
          {
            source: "inherent",
            value: 8
          }
        ]
      }
    },
    special: {
      cold: {
        name: "cold aura",
        preText: "30 ft."
      },
      blizzard: {
        type: "Su",
        text: "Once per hour as a standard action, a gnoph-keh can create a stationary blizzard that fills a 20-foot-radius spread. The gnoph-keh can place the center of this blizzard at any point within its reach. Multiple gnoph-kehs can use the aid another action to help a single gnoph-keh create a much larger blizzard-every additional gnoph-keh who aids the first increases the area of the blizzard's radius by 20 feet. All gnoph-kehs wishing to aid the primary creature must be within the area of that gnoph-keh's cold aura. Once created, the blizzard remains active for 1 hour if it was created in a cold environment, or for 1 minute if created anywhere else. The wind in the blizzard's area blows in a clockwise circular pattern at windstorm speeds, restricts visibility as fog does, and makes the region count as difficult terrain. A gnoph-keh can move through a blizzard (either one created by magic or a naturally occurring blizzard) without penalty. Cold Aura (Su) A gnoph-keh radiates an aura of blistering cold in a 30-foot radius. Any creature that ends its turn within this area takes 2d6 points of cold damage. While in a blizzard (either one created by magic, such as the gnoph-keh's blizzard power, or a naturally occurring blizzard), any creature that takes damage from a gnoph-keh's cold aura must make a DC 22 Fortitude save to avoid being staggered by the numbing cold for 1 round. The save DC is Constitution-based. Heat Susceptible (Ex) A gnoph-keh takes a -4 penalty on all saving throws made to resist the effects of high temperatures (see page 444 of the Pathfinder RPG Core Rulebook). When a gnoph-keh takes damage from heat in this way, and the damage is from temperatures in excess of 90º F, the damage the creature takes is always lethal damage. In these conditions, the gnoph-keh's cold aura does not function at all."
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: 3
      },
      icewalking: {
        type: "Ex",
        text: "This ability works like the spider climb spell, but the surfaces the gnoph-keh climbs must be icy. The beast can move across icy surfaces without penalty and does not need to make Acrobatics checks to run or charge on ice. Snow Vision (Ex) A gnoph-keh can see perfectly well in snowy conditions, and does not take any penalties on Perception checks while in snow."
      }
    },
    resistances: [
      "vulnerable to fire"
    ]
  },

  "Spawning Canker": {
    source: "Wake Of The Watcher",
    creatureType: "aberration",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 10,
    hdVal: 8,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 26,
      dex: 23,
      con: 24,
      int: 7,
      wis: 14,
      cha: 17
    },
    feats: [
      {
        name: "Dodge",
        type: "Combat"
      },
      {
        name: "Great Fortitude",
        type: "General"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Slam",
        name: "2 Slams",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Tentacle",
        name: "Tentacle",
        specialAbility: "grab",
        damage: "1d4",
        type: "secondary"
      }
    ],
    immunities: [
      "Immune to mind-affecting effects"
    ],
    defense: {
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any land",
    visualDescription: "Pale and bloodless, a brutally decapitated corpse lurches forth. Where a head should be instead lashes a forest of horrific, unnatural tentacles, whipping as though trying to simultaneously burrow deeper into and escape from its fleshy husk.",
    description: "A spawning canker is a terrible dual creature, an unnatural parasite and the decapitated humanoid body its tentacles writhe from like a knot of lashing, aberrant heads. Few ever see a spawning canker without its humanoid armor, but within the chest cavity of these hollowed-out hosts squirms a heartlike body contorting with a misassembled mass of fetal features and trailing a thicket of spiny tendrils. These tendrils lash from the stump of the host body's exploded head, but also riddle the body, taking control of muscles and organs like the strings of some abominable puppet master. The body of a former host is pumped full of strange excretions and reinforced with the tendrils riddling its form, giving what appears to be a crippled frame an unnatural strength and speed. Those tentacles that extend forth serve as both the thing's sensory organs and its feeding tubes, through which a canker drains the essence of other thinking creatures. Once it has gorged itself, a spawning canker erupts in a burst of obscene generation, its body withering with terrible speed, splitting both its own and its stolen essence into tentacles. These limbs split and tear from the remains of the canker's body as writhing, dumb slugspawn, parasitic terrors with no desire but to infest other living creatures and, through their deaths, spread ever more of their terrible kind. A typical spawning canker stands as tall as the humanoid body it infests, plus 2 to 3 feet of added height from its dozen or so wild tendrils. Slugspawn (CR 5) Bloated alien worms the length of a man's forearm, slugspawn are the basest form of a moit of Shub- Niggurath. These repulsive creatures possess sluglike bodies the color of rotting algae, covered with thick mucus. Vulnerable to the predations of larger creatures, slugspawn rarely venture forth on their own. Although they can move at a speed of 10 feet per round, slugspawn frequently hide themselves in dark pools or shadowy crevices, waiting for the warm flesh and pliant brains they crave to come to them. Upon entering a square with a slugspawn in it (or if attacked by a slugspawn), a creature must make a DC 16 Perception check to note that a slugspawn is something other than a normal slug (though hidden slugspawn can be more difficult to detect). If this Perception check is failed, the slugspawn leaps upon the creature and burrows into its flesh. The creature can attempt a DC 16 Reflex save to avoid the slugspawn, but only if the creature is aware of the slugspawn's presence. Any amount of damage reduction is enough to provide immunity to infestation. Once a slugspawn has infested a living body, it burrows toward the host's skull and wraps around the lower brain, growing and feeding upon the energies generated by thought. On the first round of infestation, dealing cold damage to the victim can kill the slugspawn and save the host-but only if the victim takes 10 or more points within 1 round of being infested. Cutting the slugspawn out also works, but the longer it remains in a host, the more damage this method does. Cutting it out requires a slashing weapon and a DC 25 Heal check, and deals 1d6 points of damage per round that the host has been infested. If the Heal check is successful, the slugspawn is removed. After 3 rounds, though, the slugspawn has reached the host's brain and cannot be surgically removed without killing the host. Remove disease kills any slugspawn in or on a host. After a slugspawn has reached a host's brain, it proves to be a beneficial parasite-at least initially. A slugspawn's host benefits from complete immunity to mind-affecting effects, as the slugspawn's presence confuses and devours such magic. This benefit doesn't last for long, though, as after a variable period (typically lasting 2d6 days in humanoids, though sometimes more or less in other creature types) the slugspawn matures into a spawning canker, a new stage in its lifecycle that begins with it violently devouring its host's brain, erupting from its skull, and taking over the beheaded host body-a near instantaneous process that immediately kills the host. The result is a new creature, a spawning canker garbed in its former host's skin. If the host is killed before the slugspawn fully matures, the parasite undergoes a rapid, emergency maturation, taking control of the host body as if it had fully matured-though such spawning cankers rarely prove as long-lived as their fully matured brethren. Reproductive Rampage Moits of Shub-Niggurath, in both their spawning canker and slugspawn forms, exist for a single reason: to propagate their fouls species as their unknowable brood mother desires. Theirs are not the ways of obsessed cultists or otherworldly masterminds. Rather, they are akin to living diseases, massive viruses that infiltrate, infest, and overwhelm, desiring nothing more than to spread their kind and pave the way for a new, larger generation that might spawn in the name of the Goat with a Thousand Young, their very existence being an unholy prayer to her power. Moits lack agendas beyond spawning. In their alien philosophies, infesting a victim, growing into a canker, and then \"ascending\" is the ultimate glory. While slugspawn have only an instinctual impression of their role in the greater cycle, spawning cankers are true fanatics, obsessed with propagation. While they avoid competing with others of their kind, if resources are limited, each canker seeks to assure that it can spawn. The moits have no interest in rationing humanoid hosts to assure their allies or spawn have the means to reproduce. Instead, they care only for the moment and the immediate potential to spawn. Thus, whole regions might be wiped clean by the infectious invasion of these moits, which grow all the more desperate as hosts and, by extension, opportunities to fulfill their lives' only purpose diminish.",
    organization: "solitary",
    languages: "Aklo",
    spellLikeAbilities: [],
    skills: {
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 10
      }
    },
    special: {
      constrict: {
        universalMonsterAbility: "Constrict",
        type: "Ex",
        damage: "1d8+4"
      },
      feeding: {
        type: "Ex",
        text: "Whenever a spawning canker deals damage to a sentient living creature with its constrict attack, it also deals 1d3 points of Charisma damage as it feeds off the victim's vital essence. If a spawning canker drains 10 points of Charisma in 1 hour, the canker immediately spawns (see below). Spawn (Ex) When a spawning canker has drained enough life force, it bursts apart into 2d4+2 slugspawn. These wormlike terrors crawl into nearby shadows and lurk in wait for any potential hosts to come nearby. The spawning canker is destroyed when this occurs. There is a 1% chance that instead of turning into slugspawn, a spawning canker transforms into a dark young of Shub-Niggurath (see page 78)."
      },
      grab: {
        universalMonsterAbility: "Grab"
      }
    }
  },

};