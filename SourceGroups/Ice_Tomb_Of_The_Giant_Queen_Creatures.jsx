
export const Ice_Tomb_Of_The_Giant_QueenCreatures = {
  Birelu: {
    source: "Ice Tomb Of The Giant Queen",
    creatureType: "outsider",
    subTypes: [
      "extraplanar",
      "incorporeal"
    ],
    alignments: [
      "Chaotic Neutral"
    ],
    size: "Medium",
    hd: 13,
    hdVal: 10,
    cr: 10,
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
      con: 16,
      int: 10,
      wis: 13,
      cha: 19
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
        name: "Iron Will",
        type: "General"
      },
      {
        name: "Mobility",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Gore",
        name: "Gore",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "force"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "force"
          }
        ],
        type: "primary"
      }
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "cold iron"
      },
      SR: {
        value: 21
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any forest, mountain, or plains",
    visualDescription: "This figure seems caught at the moment of transformation between human and animal. Though its bearded face seems like a man's, its head is crowned with a rack of antlers, and its hunched body is covered in patches of sleek black fur.",
    description: "In ages past, humans didn't live apart from nature as they do now. They had no cities, no farms, and no metal tools. In this primitive time, humans lived as beasts, hunting and foraging in the savage wild, living and dying by the cruel whims of nature. To these early humans, a successful hunt sometimes meant the difference between the life of the tribe and utter extinction. For this reason, the land and the animals who lived on it commanded great respect among the tribes. The environment represented more than just food or clothing or territory; it was an ally, an enemy, or even a god unto itself. There was need in those days for people who could pass from the physical world and into the world of the spirits, where they could intercede with the spirits of the land and the animals to ensure the tribe's survival. From this need came the birelus, manifestations of humankind's desire to bridge the boundary between humans and nature. These ancient beings served as guardians and travelers of the paths between worlds. A birelu seems to both stand upright and walk upon all fours at the same time, its form shifting and flowing incomprehensibly between the two poses. Even while partially hunched in this manner, a birelu stands over 7 feet tall when in its natural state. Ecology Birelus are ancient beings, having existed since time immemorial. It may be that they were born at the very dawn of time, champions of a unity between humankind and nature that would not exist on the Material Plane for eons hence, and simply waited to intrude upon the world when it was ready for them. More likely, they owe their existence to humankind itself, springing to life as the manifestation of ideas held sacred by the early mortal races. Whatever the case, birelus came to Golarion when the mortal races were still young. In those primordial times, they acted as guardians and guides, teaching the first mortal shamans how to cross the boundaries between the physical world and the spirit world, and bringing terrible destruction upon those who violated that sacred boundary. These early birelus sought to guide humanity, to groom its growth in harmony with nature as a way to restrict the destructive tendencies of civilization. Despite these efforts, humanity marched forward through time to establish cities, discover arcane magic, and usher in the destruction that the early birelus had attempted to hinder. As outsiders, birelus don't need to eat or drink to survive, though they take great pleasure in hunting and feeding on wild prey. Most often they hunt while possessing the body of an animal, usually the apex predator of the local environment. Occasionally, a birelu stalks its prey in the possessed body of a humanoid, though typically this is done to honor the humanoid host. As much as they delight in such behavior, birelus never over-hunt an area, and they seem to have an innate sense about the state of the local Ecology. Habitat & Society Birelus have no set habitat, nor do they hold territory, preferring instead to wander the wild places of the world. Birelus don't often intrude upon inhabited areas, though when they do, the results are often disastrous. They find the trappings of civilized life distasteful, even blasphemous, and focus their attentions on destroying the objects of their ire. Often they accomplish this by possessing people and turning them against their own homes and their fellow citizens. Birelus can sometimes be reasoned with and convinced to depart in peace, but this is rare, as their attacks are often confused for the actions of lycanthropes, and are met with violence rather than diplomacy by mortal humanoids. For the most part, birelus are solitary creatures. They don't scorn the company of their own kind, but neither do they delight in it or seek it out. Birelus who meet in passing are more likely to ignore each other than to interact in any meaningful way. Some have speculated that there may in fact be only one birelu, and that those specimens encountered on Golarion emanate from it or serve as its avatars. A birelu's attentions are drawn to animals more often than to any other kind of creature, earning them the title \"spirits of the beasts\" in some cultures. Birelus seem to delight in possessing animals and using their bodies to explore and interact with the world. Upon entering new territory, a birelu uses its call animal spell-like ability to draw in potential hosts, choosing the strongest and fastest of the native creatures to inhabit. Birelus are very protective of their wild animal hosts, and they abandon a creature's body if the animal is at grave risk rather than fighting to the host's death. Domesticated animals-or those serving as animal companions to the birelu's enemies- don't receive the same consideration. Birelus' interactions with humanoids are more complicated. Civilized peoples hold no interest to them, and in fact often earn their scorn. Birelus react with hostility toward those who openly bear the signs of civilization, such as worked metal or agricultural tools. A birelu's attitude is much softer toward less civilized humanoids. Primitive tribes of hunter-gatherers and those who shun the cities of the world and live in communion with nature are often able to make peaceful contact with a birelu. In return, the birelu might draw in prey animals to feed the tribe, or guide them to more fertile lands in times of scarcity. It may even join the tribe's warriors in combat against their enemies, leaping from warrior to warrior in order to grant them the benefits of greater animal aspect.",
    organization: "solitary",
    languages: "Sylvan, speak with animals",
    spellLikeAbilities: [
      {
        name: "speak with animals",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "call animal",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "charm animal",
        casterLevel: 13,
        timesPerDay: -1
      },
      {
        name: "dominate animal",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "moonstruck",
        casterLevel: 13,
        timesPerDay: 3
      },
      {
        name: "baleful polymorph",
        casterLevel: 13,
        timesPerDay: 1
      },
      {
        name: "commune with nature",
        casterLevel: 13,
        timesPerDay: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 6
      },
      "Handle Animal": {
        ranks: 9
      },
      "Knowledge (geography)": {
        ranks: 16
      },
      "Knowledge (nature)": {
        ranks: 16
      },
      Perception: {
        ranks: 13
      },
      "Sense Motive": {
        ranks: 10
      },
      Stealth: {
        ranks: 13
      },
      Survival: {
        ranks: 7
      }
    },
    special: {
      "force of nature": {
        type: "Su",
        text: "A birelu channels the raw power of nature into its attacks. Its natural attacks are considered to have the ghost touch special ability, and each of its natural attacks deals an additional 2d6 points of force damage. This damage is doubled when a birelu makes a powerful charge."
      },
      "powerful charge": {
        universalMonsterAbility: "Powerful Charge",
        type: "Ex",
        weaponName: "e"
      },
      "spirit walk": {
        type: "Su",
        text: "Once per round as a standard action, a birelu can merge itself with a single humanoid or animal. This ability is similar to the magic jar spell (caster level 13th), except it doesn't require a receptacle. To use this ability, the birelu must be adjacent to the target. The target can resist the attack with a successful DC 20 Will save. A creature that successfully saves is immune to the same birelu's spirit walk ability for 24 hours. The save DC is Charisma-based. Additionally, a creature affected by this ability undergoes a physical transformation, growing either more beastlike or more humanlike, depending on its original form. A humanoid affected by this ability is affected as by greater animal aspect. The birelu chooses the aspect gained from this effect. This aspect can't be changed, though the birelu can select a new aspect if it merges with the same creature again at a later time. An animal affected by the spirit walk ability is affected as by anthropomorphic animal. Either effect lasts for as long as the creature remains possessed by the birelu, ending once the birelu leaves the creature's body."
      }
    }
  },

  "Tomb Giant": {
    source: [
      "Ice Tomb Of The Giant Queen",
      "Bestiary 6"
    ],
    creatureType: "humanoid",
    subTypes: [
      "giant"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Large",
    hd: 13,
    hdVal: 8,
    cr: 12,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 32,
      dex: 17,
      con: 26,
      int: 13,
      wis: 19,
      cha: 14
    },
    feats: [
      {
        name: "Combat Expertise",
        type: "Combat"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Improved Critical"
      },
      {
        name: "Improved Iron Will",
        type: "General"
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
        name: "Martial Weapon Proficiency",
        type: "Combat",
        value: "Scythe",
        choiceSource: "Martial Weapon Proficiency"
      },
      {
        name: "Power Attack",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Scythe",
        enchantments: [
          {
            name: "Masterwork",
            source: "inherent"
          }
        ],
        name: "Scythe",
        specialAbility: "energy drain",
        damage: "2d4"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "energy drain",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "1d8"
      }
    ],
    immunities: [
      "Immune to death effects, paralysis"
    ],
    defense: {
      naturalArmor: 10
    },
    space: "10 ft.",
    reach: "10 ft.",
    environment: "any land or underground",
    visualDescription: "This towering, lean figure is hairless and has smooth, milky white skin. A scythe gleams in her hands.",
    description: "Since the time Urgathoa first fled the Boneyard, there have been living creatures that have given their allegiance to powers that offer the promise of existence eternal. Tomb giants are an entire race of humanoids who have given themselves over to necromancy, and in so doing have gained sinister powers. These giants are born as the living agents of undeath, and they show great skill in creating all manner of undead creatures-even from their own kind. Tomb giants fully expect to be transformed after they die, though most don't have to worry about the cost of sacrificing their experiences and memories, for they know their brothers and sisters can raise intelligent undead much greater than shambling zombies or clattering skeletons. Tomb giants possess an alabaster complexion. They are devoid of all body hair and have smooth, rounded features and marbleized skin. Tomb giants often tattoo their pale skin with arcane symbols in stark black ink. The sclerae of their eyes are jet black, and ghostly white pupils glow in the centers. They move with an eerie, silent grace for humanoids of their size, and rarely talk unless it is necessary. Tomb giants favor simple clothing, typically wearing togas at home and hooded cloaks when they emerge from their shadowy lairs. The average tomb giant stands 11 to 13 feet tall and weighs approximately 1,300 pounds. Tomb giants can live for up to 400 years. Ecology Tomb giants were created as an offshoot of taiga giants, forged by a Runelord of Gluttony during Thassilon's rule. When this ancient necromancer discovered the taiga giants' ability to sense and direct the life energy that pulses through every living creature, he hid a number of them away a secret complex deep beneath Golarion's surface. Using a now-lost ritual, the runelord altered the essence of these specimens to create the first tomb giants. He wanted to use the new species of giants as a deadly army of necromancers against the other runelords, but the conniving Runelord of Gluttony died before he could enact his plan, and his project was lost to the mists of time. The tomb giants lingered in their isolation for generations before they began to spread throughout the Darklands. These days, tomb giants are born rather than created, though it would be a misnomer to call their procreation natural. The giants' adaptation to their unwholesome powers has come at a cost, for tomb giants have trouble conceiving except during a small window of time (not much longer than an hour) after they have drained a portion of the life energy from another living creature. It is therefore common for tomb giants to take prisoners and keep them on hand for when they wish to conceive children. Although tomb giants possess inherent powers of necromancy, they are not undead. They aren't particularly troubled by sunlight (aside from their tendency to sunburn), but they have an instinctual dislike of bright light and open spaces. They are omnivorous and have no qualms about consuming sentient humanoids. By the time tomb giants are 10 years old, they are as large as an adult human and are capable of hunting and fighting. They reach maturity by age 50 or 60, when they gain full use of their magical abilities. When tomb giants die, their families or friends often transform them into sentient undead creatures or use the deceased giants' parts in the creation of other undead abominations. Tomb giants view their mortal life spans much as humans view puberty: as merely one stage in the development of the individual. An undead tomb giant is likely to be valued as a family elder. For tomb giants, sentient undeath represents the perpetual continuation of self-identity, and is the highest hope for those still alive. Thus, some of the most feared tomb giant punishments consist of execution followed by the offender's transformation into a mindless undead. Such unfortunates are often turned into an eternal servant, and are sometimes passed down from generation to generation within families. Habitat & Society Tomb giants prefer enclosed spaces and underground lairs. While tombs and crypts can serve as lairs, tomb giants are more commonly found in renovated cave systems near the surface and in scattered pockets in the Darklands. Tomb giants have no compunction about living among undead, but are circumspect about their own safety and well aware that some undead have no loyalty to the living. It's common to create undead horrors from the corpses of lesser creatures to use as servants or guards-smaller undead are often used as components for necrocrafts. Tomb giants are a secretive race, and go to extraordinary lengths to pursue and capture anyone they catch spying on them. Surrounding themselves with undead creatures (most of which are under their control) has provided the giants the secrecy they crave, as the dead don't utter secrets. Some folktales speak of silent, pale folk of impossible height who come out of the night in pursuit of a victim who has \"seen something no one should see.\" These stories have a grain of truth to them, and invariably end with the foolhardy individual vanished from his home, never to be seen again. Those few fortunate enough to have escaped with their lives bear scars of their interactions with the sinister giants, and survivors tell tales of pale giants who made light conversation with their victims while preparing to cook them. Darker tales hint at the tomb giants' perverse mating rituals, wherein chained victims are drained of their life force and left hanging on the walls, bearing witness to the giants' frenzied couplings before the pale creatures eat their weakened captives alive. Wherever these alabaster fiends tread, horror and madness is sure to follow.",
    organization: "solitary, pair, or cabal (3-13)",
    languages: "Common, Giant",
    spellLikeAbilities: [
      {
        name: "deathwatch",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "detect undead",
        casterLevel: 12,
        timesPerDay: -1
      },
      {
        name: "make whole",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "sculpt corpse",
        casterLevel: 12,
        timesPerDay: 3
      },
      {
        name: "animate dead",
        casterLevel: 12,
        timesPerDay: 1
      },
      {
        name: "control undead",
        casterLevel: 12,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 1
      },
      Heal: {
        ranks: 5
      },
      "Knowledge (religion)": {
        ranks: 13
      },
      Perception: {
        ranks: 11
      },
      Stealth: {
        ranks: 6
      },
      Survival: {
        ranks: 3
      }
    },
    special: {
      "energy drain": {
        universalMonsterAbility: "Energy Drain",
        saveDC: 10,
        levels: 1,
        text: "A tomb giant can channel its energy drain attack through any melee weapon it wields."
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "120 ft."
      },
      "corpse stitcher": {
        type: "Sp",
        text: "Tomb giants can cast make whole as a spell-like ability, but only for the purposes of creating undead creatures. For example, a tomb giant can use this ability to aid in the creation of a necrocraft (Pathfinder RPG Bestiary 4 200), to restore armor to be used for the creation of a phantom armor (Bestiary 4 213), or even to repair the armor of a graveknight (Pathfinder RPG Bestiary 3 138)."
      },
      "sinister synergy": {
        type: "Su",
        text: "Multiple tomb giants can combine their efforts to gain the ability to create undead. When two or more tomb giants are within 30 feet of each other, they can work together to use create undead as a spell-like ability (caster level 13th). Three or more tomb giants working in unison in this way can use greater create undead as a spell-like ability (caster level 15th). Every additional tomb giant beyond the third who participates in this synergy increases the caster level of this effect by 1."
      },
      "negative energy affinity": {
        universalMonsterAbility: "Negative Energy Affinity",
        parenthetical: ""
      },
      "rock catching": {
        universalMonsterAbility: "Rock Catching"
      }
    }
  },

  Indarugant: {
    source: "Ice Tomb Of The Giant Queen",
    creatureType: "undead",
    subTypes: [],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Huge",
    hd: 20,
    hdVal: 8,
    cr: 14,
    racialFeatures: [
      "Darkvision 60 ft."
    ],
    speed: {
      base: 40
    },
    abilities: {
      str: 31,
      dex: 14,
      con: "-",
      int: 12,
      wis: 19,
      cha: 19
    },
    feats: [
      {
        name: "Combat Reflexes",
        type: "Combat"
      },
      {
        name: "Dodge",
        type: "Combat"
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
        name: "Mobility",
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
        name: "Precise Shot",
        type: "Combat"
      },
      {
        name: "Toughness",
        type: "General"
      },
      {
        name: "Vital Strike",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Battleaxe",
        name: "Battleaxe",
        damage: "1d8"
      },
      {
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "curse of frozen flesh",
        damage: "1d4",
        type: "primary"
      },
      {
        weapon: "Rock",
        name: "Rock",
        damage: "2d6"
      }
    ],
    immunities: [
      "Immune to cold"
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "-"
      },
      SR: {
        value: 25
      },
      naturalArmor: 14
    },
    space: "15 ft.",
    reach: "15 ft.",
    environment: "cold mountains",
    visualDescription: "Taut, leathery skin clings to the skeleton of this giant, whose hide garments only partially conceal the simple geometric tattoos and ancient battle scars that decorate his flesh.",
    description: "In times of need, the taiga giants of Varisia turn to the spirits of their ancestors for aid, relying on signs and omens from the spirit world to guide them out of danger. Yet sometimes the power and insight of these ancestral spirits is not enough. When invaders overhunt the land, when disease and pestilence run rampant, or when war and slavery threaten to decimate whole tribes, some giants seek a different sort of aid-one that comes at a far higher price. High above the snow line, trapped within ancient glacial floes, the indarugants wait to be unleashed so they might once again bring disaster and ruin to the enemies of their tribes. Most indarugants resemble the desiccated corpses of taiga giants, though other types of giants may become indarugants as well. After taiga giants, stone giants are the most likely to follow through with this ritual, though by doing so they risk being shunned by neighboring tribes. Indarugants stand 20 feet tall, but weigh only 3,000 pounds due to the lack of water in their shriveled, skeletal bodies. The ritual that creates an indarugant involves marking and maiming the body of the candidate, and many still bear these fading tattoos and ancient scars. Ecology Indarugants are remarkable among corporeal undead in that they can't be created from a deceased creature's corpse-a creature must be alive and willing to be transformed into an indarugant. This process usually begins with a pilgrimage of a group of taiga giants into the icy mountains. The tribe's shaman or chieftain accompanies the candidate in order to perform the profane rituals necessary for the transformation. Once above the snow line, the candidate is subjected to a week-long ritual designed to sever its connection to the spirits of its ancestors, the intent being that the future indarugant can do whatever must be done to protect the tribe without fear of offending the spirits or bringing dishonor to the tribe. At the ritual's conclusion, the candidate is killed with a single blow to the head, then buried in the ice and snow along with the weapons and tools it will use once it rises as an indarugant. How long it takes the indarugant to rise varies-some rise as early as the following evening, while others remain in the ice for months or even years. Not all giants who agree to undergo the transformation successfully complete their promise. Many lose their gall at the ritual's outset and attempt to escape back down the mountain to safety. Those who flee are hunted ruthlessly by their fellow pilgrims and the rest of the tribe, who fear offending the spirits. If possible, such escapees are captured alive and brought back to the frozen heights to undergo the ritual at spear point. This forced ritual does not produce an indarugant, but serves as a deterrent to those who would think to renege on their commitments in the future. Some tribal leaders claim that those who successfully escape their promise to serve as an indarugant are cursed. They say that these traitors to their people transform into even more grotesque and sinister creatures, though no evidence of such monsters exists-these claims are widely thought to be a scare tactic to elicit compliance. Those that successfully undergo the transformation come back changed. They are no longer constrained by moral concerns such as honor, fear, or mercy. Indarugants are capable of committing any act, no matter how taboo, so long as it furthers the interests of the tribe and its people. They treat their foes with such brutality that even the most wicked of giants cringe at the sight. Habitat & Society Indarugants reside high in the mountains of Varisia, in places where the snow never melts. They hide themselves away in glacial caves, deep foreboding crevasses, and other secluded chasms where only those initiated into the secrets of their creation will know to find them. In times of need, a giant shaman or oracle will journey to the hidden places, braving the dangers of the cold and high elevation in order to beseech the indarugants for aid. Usually this aid comes in the form of exacting violence against the tribe's enemies, as indarugants are powerful warriors and cunning strategists. Rarely, an especially evil or desperate tribe may entreat an indarugant to serve as its chief or shaman, though usually only for a limited period of time, and only when the tribe is leaderless and under dire threat. Whatever form the indarugant's aid takes, it comes at a steep price. A giant who would petition an indarugant for aid must first swear a profane pact with the creature to someday undergo the transformation and become an indarugant itself. Once the indarugant has accomplished its agreed-upon task, it will lead the petitioner back up the mountain to its desolate home, and perform the necessary rituals to add the petitioner to the ranks of the undead. This serves both as a deterrent to keep the giants from calling on the indarugants too readily, and as a way to ensure the indarugant population grows along with the tribe. In this way, the tribes of giants will always have guardians waiting for them in the high ice, ready to defend them against any threat. Scholars of giant lore claim that all the races of giants once buried their dead in this manner, or at least created indarugants through similar rituals, if they did not live in icy climates. In Varisia, this changed during the Age of Legend, when the runelords of Azlant enslaved the giants and bent them to their sinister will. Those giants who fought back against the runelords called upon the might of their undying ancestors, sending legions of indarugants down into the plains to defend the giant tribes. Though the undead guardians fought fiercely, they were unable to stand against the might of Thassilon, and all were eventually destroyed. Since that time, only the taiga giants, who largely escaped slavery, continue the practice of creating indarugants. This may not be true for much longer, however, as reports of stone and frost giants burying their dead in the high ice now grow ever more common.",
    organization: "solitary or warband (1 indarugant and 2-6 taiga giants)",
    languages: "Common, Giant",
    spellLikeAbilities: [
      {
        name: "ill omen",
        casterLevel: 15,
        timesPerDay: -1
      },
      {
        name: "bestow curse",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "blindness/deafness",
        casterLevel: 15,
        timesPerDay: 3
      },
      {
        name: "cone of cold",
        casterLevel: 15,
        timesPerDay: 1
      }
    ],
    skills: {
      Climb: {
        ranks: 4
      },
      Intimidate: {
        ranks: 0
      },
      "Knowledge (religion)": {
        ranks: 3
      },
      Perception: {
        ranks: 20
      },
      "Sense Motive": {
        ranks: 10
      },
      Stealth: {
        ranks: 17
      },
      Survival: {
        ranks: 20
      }
    },
    special: {
      "curse of frozen flesh": {
        type: "Su",
        text: "Slam-contact; save Will DC 24; effect Creature gains vulnerability to cold. Anytime the cursed creature fails a saving throw against a spell or effect with the cold descriptor, it is also slowed for 1d4 rounds."
      },
      "lingering curses": {
        type: "Su",
        text: "An indarugant is an accursed creature, and so has dominion over misfortune and curses. An indarugant can apply the effects of its curse of frozen flesh with its bestow curse spell-like ability (in place of bestow curse's normal effects). Additionally, the DC of any attempt to remove a curse inflicted by the indarugant increases by 5. If a caster level check to remove an indarugant's curse fails by 5 or more, the curse appears to be lifted and is temporarily suppressed until the next time the victim enters combat or is otherwise faced with a life-threatening situation (subject to the GM's discretion)."
      },
      "rock throwing": {
        universalMonsterAbility: "Rock Throwing",
        type: "Ex",
        range: "120 ft."
      },
      "channel resistance": {
        universalMonsterAbility: "Channel Resistance",
        bonus: 4
      }
    }
  },

  "Living Effigy": {
    source: "Ice Tomb Of The Giant Queen",
    creatureType: "construct",
    subTypes: [],
    alignments: [
      "Neutral"
    ],
    size: "Huge",
    hd: 10,
    hdVal: 10,
    cr: 8,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision"
    ],
    speed: {
      base: 0,
      maneuverability: "Perfect",
      fly: 10
    },
    abilities: {
      str: 20,
      dex: 7,
      con: "-",
      int: 13,
      wis: 16,
      cha: 17
    },
    feats: [
      {
        name: "Empower Spell-Like Ability",
        type: "Monster",
        value: "Sound burst",
        choiceSource: "Empower Spell-Like Ability"
      },
      {
        name: "Hover",
        type: "Monster"
      },
      {
        name: "Improved Critical",
        type: "Combat",
        value: "Slam",
        choiceSource: "Improved Critical"
      },
      {
        name: "Skill Focus",
        type: "General",
        value: "Intimidate",
        choiceSource: "Skill Focus"
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
        weapon: "Slam",
        name: "Slam",
        damage: "1d4",
        type: "primary"
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
      naturalArmor: 14
    },
    space: "15 ft.",
    reach: "5 ft.",
    environment: "any",
    visualDescription: "Carved from gray stone, this enormous figure is shaped like the head of some primordial giant.",
    description: "Resting among countless tribes across the world are strange icons and statues dedicated to the memories of ancient leaders or spiritual guides. Sometimes such figures hide greater intellects, inhabiting essences that watch over nearby settlements. Known as living effigies, these stone statues are possessed by the spirits of deceased chieftains and shamans who managed to partially cheat death by imparting a portion of their souls into stone images. Each living effigy is unique in its features-some resemble the heads of great giants, while others are busts of other creatures. Twin gems are embedded in the eyes of each living effigy; they glow a vibrant color whenever the statue uses one of its many magical abilities. A living effigy's personality is as unique as its countenance, as the souls inhabiting the massive stones range from kind protectors wishing to continue their vigil over a settlement to brutal tyrants wishing only to reign past death. A living effigy stands 15 feet tall and weighs 40 tons. Ecology Despite sharing most of the traits common to other constructs, living effigies are sentient creatures that possess a portion of an inhabiting soul's intellect. Spells and abilities possessed by the originating soul are lost in the transfer, though some knowledge from the soul's past life remains. In addition to possessing this knowledge, the living effigy takes on the personal characteristics of the spirit that possesses it. In most cases, this directly impacts its alignment. The longer an effigy exists, though, the more detached it becomes from material concerns, eventually adopting an impartial stance on most subjects. Much of a living effigy's existence is spent in unassuming silence, watching over the settlement around it. Unable to move (save for a limited means of supernatural travel that typically draws unwanted attention) these effigies often learn to appreciate their isolation. Preferring that others see them as nothing more than ordinary sculptures, living effigies act only when their settlements are in danger. Should someone seek to harm it or its people, an effigy uses its charming gaze or its calm emotions spell-like ability to ease the anger of enemies and members of the settlement. Though effigies rarely issue direct commands, their gaze make the weak-willed see them in a positive light. Though living effigies can speak, they rarely do so. Instead, the constructs prefer to rely on their mystical abilities to communicate with those nearby. Their most common means of direct communication are its dream and nightmare spell-like abilities. Living effigies use these abilities to intrude on the sleeping minds of leaders to influence the direction of their settlements. In situations where approval or rejection is necessary, the effigy uses its stone shape spell-like ability to alter its facial expression to an appropriate emotion. Habitat & Society Transferring from a body of flesh to a monument of stone is a trauma that takes a spirit some time to recover from. It takes a living effigy a full week to learn its various abilities, and even after this initial adjustment, the spirit still needs to cope with the solitary nature of its new existence. Cut off from the sensations it once had, a living effigy learns to rely on the surface thoughts of those nearby and minor interaction through dreams. Its eye gems can attract unwanted attention when it uses its charming gaze, but can't be removed until the construct is destroyed. Settlements guided by living effigies are typically found in remote locations, away from the administration of governments or the intervention of outside agencies. Because of their nature as silent watchers, such effigies are most commonly found in far-f lung communities in the Realm of the Mammoth Lords, where they are treated as honored ancestors, and in the wilds of the Mwangi Expanse, where they are sometimes seen as ancestral spirit gods. Worshipers of most deities find the idea of a living effigy worrying, especially if the effigy's settlement has raised a pseudo-religion around the idol. While living effigies aren't technically undead, Pharasmin priests in particular have problems with them and often oppose them once their true nature is discovered, heedless of the protection and aid the living effigies offer to their communities. Construction The construction of the stone effigy requires an appropriate amount of stone (at least 40 tons' worth) and a successful DC 20 Craft (stonemasonry) check. If the crafter fails the check, the stone is rendered useless for this purpose and a new block must be obtained. The creation of the effigy also requires two gems that are worth at least 500 gp each. A completed effigy acts as a soul receptacle, sucking in the intended target's soul as long as it dies within a mile of the inert statue. It takes the soul a full week to adjust to its new home, at which point the effigy animates and can use all of its abilities normally. During this transition period, the effigy remains a stone statue; it can be destroyed as normal or by removing or destroying the eye gems. Other forms of living effigies can be made of bone, bronze, wood, or similar materials. LIVING EFFIGY CL 15th; Price 71,000 gp Construction Requirements Craft Construct, limited wish, nightmare, trap the soul, creator must be caster level 15th; Skill Craft (stonemasonry) DC 20; Cost 35,000 gp",
    organization: "solitary",
    languages: "Common, Giant",
    spellLikeAbilities: [
      {
        name: "detect thoughts",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "obscuring mist",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "sound burst",
        casterLevel: 10,
        timesPerDay: -1
      },
      {
        name: "calm emotions",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "crushing despair",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "good hope",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "sound burst",
        casterLevel: 10,
        limitations: "Metamagic: Empower ",
        timesPerDay: 3
      },
      {
        name: "stone shape",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "thundering drums",
        casterLevel: 10,
        timesPerDay: 3
      },
      {
        name: "arcane concordance",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "fear",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "witness",
        casterLevel: 10,
        timesPerDay: 1
      },
      {
        name: "dream",
        casterLevel: 10,
        timesPerDay: -1,
        timesPerWeek: 1
      },
      {
        name: "nightmare",
        casterLevel: 10,
        timesPerDay: -1,
        timesPerWeek: 1
      }
    ],
    skills: {
      Fly: {
        ranks: 0
      },
      Intimidate: {
        ranks: 6
      },
      "Knowledge (history)": {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      "Knowledge (religion)": {
        ranks: 5,
        bonuses: [
          {
            source: "inherent",
            value: 4
          }
        ]
      },
      Perception: {
        ranks: 13
      },
      "Sense Motive": {
        ranks: 5
      },
      Spellcraft: {
        ranks: 5
      }
    },
    special: {
      "charming gaze": {
        type: "Su",
        text: "As charm person with a range of 30 feet (Will DC 18 negates). The save DC is Charisma-based."
      },
      "preserved mind": {
        type: "Ex",
        text: "A living effigy is inhabited by an entrenched spirit that holds on to some aspects of its former intellect. A living effigy can choose two Knowledge skills, typically Knowledge (history) and Knowledge (religion). These Knowledge skills are class skills for the living effigy, and it gains a +4 racial bonus on checks with these skills. Shape Self (Sp) Three times a day, a living effigy can shift its facial expression as if using stone shape, even though the construct exceeds the volume the spell can usually affect and is a creature rather than an object."
      },
      "silent watcher": {
        type: "Su",
        text: "As a standard action, a living effigy can use greater teleport (self only) as long as there are no creatures with an Intelligence score higher than 2 within 150 feet that can see the effigy. When using this ability, the living effigy can travel up to 10 miles from its settlement."
      },
      statue: {
        type: "Ex",
        text: "A living effigy can remain perfectly still and emulate a statue. An observer must succeed at a DC 25 Perception check to notice that the living effigy is alive. If a living effigy initiates combat from this pose, it gains a +6 bonus on its initiative check. Susceptible to Mind-Affecting Effects (Ex) Unlike most constructs, a living effigy isn't immune to mind-affecting effects."
      }
    },
    resistances: [
      "susceptible to mind-affecting effects"
    ]
  },

  Thremindyr: {
    source: "Ice Tomb Of The Giant Queen",
    creatureType: "outsider",
    subTypes: [
      "air",
      "cold",
      "native"
    ],
    alignments: [
      "Chaotic Evil"
    ],
    size: "Medium",
    hd: 11,
    hdVal: 10,
    cr: 9,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Sense Protection"
    ],
    speed: {
      base: 30,
      maneuverability: "Perfect",
      fly: 60
    },
    abilities: {
      str: 15,
      dex: 25,
      con: 16,
      int: 11,
      wis: 14,
      cha: 16
    },
    feats: [
      {
        name: "Agile Maneuvers",
        type: "Combat"
      },
      {
        name: "Flyby Attack",
        type: "Monster"
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
        weapon: "Slam",
        name: "2 Slams",
        specialAbility: "entrap",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "2d6",
            appliesTo: "damageType",
            damageType: "cold"
          }
        ],
        type: "primary"
      }
    ],
    immunities: [
      "elemental traits"
    ],
    defense: {
      DR: {
        value: 10,
        damageType: "magic"
      },
      naturalArmor: 6
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "cold hills or mountains",
    visualDescription: "Blustering winds and snow swirl around this white, almost transparent feylike phantom.",
    description: "Thremindyrs are often mistaken for ghosts or some manner of frozen spirits when spotted in the wild. Although they are not incorporeal, these icy elemental beings are pale and wispy, and are easily overlooked in the wintery outdoors where there is little to contrast with their translucent white bodies. If viewed against a dark backdrop, a thremindyr looks like a long-limbed humanoid. Close up, their features have an inhuman, angular, and almost crystalline quality to them. They sport high cheekbones, upward-slanted eyes, and pointed ears. What might represent hair is a swirling mass of ever-roiling tendrils of mist and snow. Thremindyrs are usually androgynous, but very rarely some thremindyrs sport what appears to be a beard composed of icicles. When agitated, these arctic elementals radiate a flurry of snow in the direction of their attention, especially when they howl and roar. They possess a considerable strength but are ephemeral, like an air elemental. Thremindyrs stand roughly 7 feet tall and weigh no more than 15 pounds. Ecology The name \"thremindyr\" roughly translates from the Giant language as \"breath of Thremyr,\" and a connection between the giant god and these creatures appears certain. Students of ancient lore and experts on the planes point to legends that describe how parts of the god Thremyr fell away from the deity and sprang to life, creating the frost giant, ice troll, and winter wolf races, and suggest that thremindyrs may have been created in the same way. These legends say that, instead of sloughing off of Thremyr as he staggered into the Steaming Sea, the first thremindyr escaped from Thremyr's lungs as the ancient being sighed, passing through his lips and onto Golarion. Although this in some ways parallels how thremindyrs reproduce on the Material Plane, the theory that thremindyrs spawn directly from the deity isn't supported by the evidence. For one thing, thremindyrs hail from the Plane of Air, and Thremyr does not reside there. Scholars propose that the thremindyrs' existence actually informs one of the nature of Thremyr-and other gods worshiped by giants (such as Gozreh)-far more than the other way around. Thremindyrs are consistently humanoid in shape, unlike many other elemental beings, whose shapes are often chaotic or take on animalistic forms. Thremindyrs spontaneously generate on the Plane of Air, but procreate through asexual reproduction on the Material Plane. They seem to thrive on the Material Plane, and by some accounts are slowly evolving to a less elemental state of existence. Habitat & Society Thremindyrs are thought to have originally sprung into existence in the misty zone where the Elemental Plane of Air juts up against the Plane of Water. Whatever their origin, thremindyrs have proliferated and are encountered as indigenous forms of life in many places on the Material Plane, especially on Golarion. When encountered outside of the Material Plane, thremindyrs possess the extraplanar subtype. Thremindyrs who dwell on the Material Plane require air, food, and moisture and have daily periods of inactivity. The creatures wither and die quickly in hot environments, and are found only in environments where water can freeze. Though thremindyrs need to eat, the period of time between each feeding can stretch for months. Thremindyrs are curious creatures, but they are contemptuous of beings that can't adapt to the environments in which these outsiders thrive. When they coexist with creatures immune to their bitter cold presence, it is with a reserved indifference or muted curiosity. They are fickle and rarely maintain long-term alliances with other creatures. Among their own kind, thremindyrs are peaceable and demonstrate a willingness to share ideas and cooperate- though they lack any ideas that do not lend themselves to mischief and mayhem. Thremindyrs are disastrously curious, and tend to treat any new stimulus as an excuse for playful destruction. A gathering of thremindyrs is dangerous indeed; more than one mountaineering expedition has been lost by being frozen to the side of a mountain by these strange elemental beings. Thremindyrs chafe at being summoned-they have little patience for communication with creatures that have no natural inclination to cold or abilities to overcome it. Yet if directed toward an objective or opponent that it can freeze solid, a summoned thremindyr quickly forgets the indignity and sets about its work with malicious glee. In combat, thremindyrs attempt to keep their distance from their enemies. They prefer to fly just out of the reach of their foes and attack with their breath weapons, hoping to entrap those struck. Once an opponent is immobilized, the thremindyr focuses on other foes until they are all coated in rime. Thremindyrs can tell whether creatures are magically protected against the cold, and they find these sorts of protections affronts to their icy nature. Thremindyrs focus their attacks on protected creatures first, and use their shatter protection ability to break down these defenses. If their enemies fight using ranged weapons, thremindyrs soar down and attack using Flyby Attack, sometimes remaining in melee combat long enough for their auras to damage their opponents.",
    organization: "solitary, pair, or blizzard (3-6)",
    languages: "Auran, Giant",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 8
      },
      Bluff: {
        ranks: 5
      },
      "Escape Artist": {
        ranks: 13
      },
      Fly: {
        ranks: 2
      },
      Intimidate: {
        ranks: 13
      },
      "Knowledge (planes)": {
        ranks: 7
      },
      "Knowledge (religion)": {
        ranks: 10
      },
      Perception: {
        ranks: 10
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "breath weapon": {
        universalMonsterAbility: "Breath Weapon",
        distance: "30-ft. cone",
        damage: "usable every 1d4 rounds"
      },
      entrap: {
        universalMonsterAbility: "Entrap",
        hardness: "hardness 5",
        duration: "1d10 rounds",
        saveDC: 10,
        hp: "hp 10"
      },
      "shatter protection": {
        type: "Su",
        text: "A thremindyr can pit its intense supernatural cold against another creature's magical protections in an attempt to wear them down or even shatter them completely. As a melee touch attack, the thremindyr can attempt to diminish the effectiveness of resist energy (cold) or protection from energy (cold) effects. If the touch attack is successful, the target is affected by a targeted dispel magic effect (caster level 11th). If the dispel check is successful, the spell protecting the target ends. This ability can affect only protection from energy (cold) or resist energy (cold) effects, and it deals no damage to the target directly. This ability can be used at will, but each use can affect the effects of only one spell. If the target is under the effects of both spells, this ability affects protection from energy first; a separate use of this ability is needed to remove resist energy. If a target is under the effects of resist energy (cold) or protection from energy (cold) as an effect of a magic item, the thremindyr's dispel check must overcome the item's caster level. Creatures with inherent resistance or immunity to cold are unaffected by this ability. This does not extend to creatures that have immunity or resistance due to the effects of magic items or spells."
      },
      indistinct: {
        type: "Ex",
        text: "A thremindyr barely stands out against snow and wintery skies except when it attacks. While in cold terrain, a thremindyr can use the Stealth skill even while being observed. Sense Protection (Su) A thremindyr can automatically sense when a creature within 30 feet is under the effects of protection from energy (cold) or resist energy (cold)."
      },
      "cold aura": {
        type: "Su",
        text: "A thremindyr is surrounded by an aura of intense cold. At the beginning of the thremindyr's turn, all creatures within 10 feet of the thremindyr take 1d6 points of cold damage.",
        preText: "10 ft."
      }
    }
  },

};