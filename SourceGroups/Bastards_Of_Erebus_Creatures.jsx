
export const Bastards_Of_ErebusCreatures = {
  Shadowgarm: {
    source: "Bastards Of Erebus",
    creatureType: "aberration",
    subTypes: [
      "extraplanar"
    ],
    alignments: [
      "Neutral Evil"
    ],
    size: "Medium",
    hd: 3,
    hdVal: 8,
    cr: 2,
    racialFeatures: [
      "Darkvision 60 ft.",
      "Low-Light Vision",
      "Scent"
    ],
    speed: {
      base: 30,
      climb: 30
    },
    abilities: {
      str: 14,
      dex: 15,
      con: 14,
      int: 5,
      wis: 14,
      cha: 11
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      }
    ],
    attacks: [
      {
        weapon: "Claw",
        name: "3 Claws",
        specialAbility: "shadow slime",
        damage: "1d4",
        type: "primary"
      }
    ],
    defense: {
      SR: {
        value: 7
      }
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "any (Plane of Shadow)",
    visualDescription: "This amorphous creature loosely resembles a cross between a large snake and an insect. It has black oily skin, and parts of its very flesh blend seamlessly into the shadows. Its constantly moving, writhing form makes it difficult to identify from a distance.",
    description: "Shadowgarms are strange monsters from the Plane of Shadow, where they function as lowly predators and pests somewhat akin to the Material Plane's coyotes, leopards, and similar hunting mammals. Yet to a creature unfamiliar with the workings of the Plane of Shadow, the shadowgarm is a hideous and frightening beast. Generally lairing in ruined sections of towns or dead-end alleys clogged with refuse during the day, they come out at night to prey upon creatures that stray too far from the safety of light. These aberrant predators \"leak\" into the Material Plane anywhere the Plane of Shadow's influence is strong. Small groups of shadowgarms are occasionally seen lurking in old graveyards where undead (particularly shadows) are known to reside, and anywhere that has strong traditions of shadow magic tends to have a healthy population of shadowgarms lurking in out-of-the-way areas as well. The typical shadowgarm measures about 4-1/2 feet long and weighs approximately 90 pounds, their bodies being strangely light, composed of a spongy dark matter and seemingly wisps of shadow itself. Some, however, grow to be much larger, though shadowgarms of all sizes prove especially adept at blending in among the shadows and detritus of their hunting grounds or crawling into crevices it seems creatures of their size would not be able to squeeze. Ecology Strange beings with a little-understood physiology, shadowgarms prove endlessly hungry, taking sustenance from shadow as if it were water and drawing nutrition from the flesh of other creatures as their only source of food. Shadowgarms can eat and digest any sort of animal matter, from flesh to bone, converting them into little more than smoke and shadow. A creature left to a shadowgarm to feed upon leaves behind nothing but trappings of metal and similarly solid accessories. A shadowgarm's physical form seems strangely fluid, proving slightly malleable and generalized. No two shadowgarms appear exactly alike, and even individuals of the race seem to gradually change, all the faster in areas of deep shadows. Regardless of their endless, fluid alterations, they retain three primary clawed appendages, which serve them in consuming meals and fighting. Their number of feelers or tentacle-like legs, however, is constantly in flux, numbering but two or three one moment and then multiplying to dozens the next. Shadowgarms do not have a mouth and hardly have heads to speak off-possessing only slight knobby protuberances that seem to have little role in guiding their motions. When ingesting matter, they slowly dissolve their meals, their bodies breaking down any organic substance they choose by resting upon their meal for a matter of moments. The entire process might be likened to a body-wide ingestion process similar to that of a fly, as matter is dissolved and subsumed by the shadowy hunter's bulk. Once every several months, the urge to mate descends upon shadowgarms like a mass racial insanity. At this time, their natural aversion to their own kind is overwhelmed by a need to procreate. Shadowgarms are hemaphroditic, but cannot fertilize themselves- when a shadowgarm gathering begins, these creatures congregate in groups of up to a dozen, remaining in close proximity to each other for days at a time. The cycle that drives shadowgarm gatherings is nothing connected to the Material Plane-most scholars have been unable to determine what pattern the timing follows, if indeed there is a pattern at all. Habitat & Society Although shadowgarms are quite active at all times on the Plane of Shadow, the realities of the Material Plane force them into the niche of nocturnal predator. Yet despite their hatred of light, they seem to need it in some strange way. Observers have noted that the creatures prefer to stand in actual shadows, rather than just in darkness, and seem to savor the ever-changing nature of the shadows themselves. It may be that shadowgarms abhor total darkness as much as light, though neither bright light nor utter darkness causes them physical harm. Most shadowgarms' hunts take place under the light of the full moon, or in the shadowy hours of dusk or dawn. In cities where shadowgarms are common, they naturally gravitate to sewers or narrow alleys. This allows them the easiest way to quickly strike at unwary victims from above or below. They do not build any sort of true nest or lair, preferring to remain constantly afoot in search of new prey. As shadowgarms have no fear of falling, they often clamber up to corners and niches at the tops of tunnels or just under rooftop overhangs, both to avoid any bright light that might be shining down from above and to lie in wait to ambush unsuspecting prey that walks underneath. This leads to the discovery of shadowgarms in truly unexpected and unnerving places, like in bell towers, within attics and crawl spaces, and even hidden amid cracks and loose shingles in old roofing. More than one child's tale of boogiemen or strange shapes lurking outside their windows might actually be attributed to the daring nocturnal wanderings of shadowgarms. Shadowgarms are incredibly territorial, and usually do not nest together except during their mating gathering. Shadowgarms immediately confront one another upon meeting. Pickpockets and other street urchins often share wild tales of shadowgarms battling fiercely in the alleyways and nighted dens, fighting with raw savagery instead of their more customary stealth. Some canny streetfolk use this territorial nature to trick competing shadowgarms into fighting each other, giving wanderers out after dark enough time to move through territories infested by these lurking hunters without being attacked. Of course, this tactic doesn't work well in areas where large numbers of shadowgarms are known to skulk, as directing one's attention to avoid a single hunter might prevent a traveler from noticing other predators lying in wait in the shadows. On rare occasions, a shadowgarm might take to the seas, stealing aboard a ship at dock and hiding in the hold. Once at sea, such hunters emerge nightly to prey upon the ship's crew. Since a shadowgarm melts away into shadow and fog when it dies, leaving no evidence of a corpse behind, this might be one explanation for mysteriously derelict ships found adrift on the waves with nothing living on board.",
    organization: "solitary or gathering (2-12)",
    spellLikeAbilities: [],
    skills: {
      Climb: {
        ranks: 1
      },
      Perception: {
        ranks: 1
      },
      Stealth: {
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
      "feather fall": {
        type: "Ex",
        text: "A shadowgarm's body is both light and consists of numerous folds of thin flesh. Although it cannot fly, a falling shadowgarm always descends as if under the effects of a feather fall spell, and thus never takes falling damage. Light Fixation (Su) Although a shadowgarm is not particularly harmed by bright light, it prefers dim lighting. Magical light, on the other hand, causes a shadowgarm to grow slow and lethargic. Whenever a shadowgarm is within an area of bright light that is magically created, it is staggered."
      },
      "shadow blend": {
        type: "Su",
        text: "In conditions of dim light, a shadowgarm's outline wavers and blends with the surrounding shadows, granting it concealment (20% miss chance) even if its opponents are capable of seeing clearly in dim light."
      },
      "shadow slime": {
        type: "Su",
        text: "A shadowgarm is coated with a thin layer of oily black slime. Whenever it strikes a foe, it transfers a swath of this cold black slime onto the creature struck. This slime causes a growing numbness and lethargy in the bodies of those it coats. Each time a creature takes damage from a shadowgarm's claws, the creature struck must make a DC 13 Fortitude save or take a cumulative -2 penalty to its Dexterity score. A creature whose total Dexterity penalty equals its Dexterity score is paralyzed and blinded as long as the penalty remains in effect. All accrued Dexterity penalties fade an hour after the last time the victim was affected by shadow slime, but any new shadow slime resets the recovery period. Exposure to bright light of any sort causes the Dexterity penalty to lessen by 2 points per round until all of the shadow slime is effectively \"burned away\" by the light. A shadowgarm is immune to the effects of its shadow slime and the shadow slime of other shadowgarms. The save DC is Constitution-based."
      }
    }
  },

  Ukobach: {
    source: "Bastards Of Erebus",
    creatureType: "outsider",
    subTypes: [
      "devil",
      "evil",
      "extraplanar",
      "lawful"
    ],
    alignments: [
      "Lawful Evil"
    ],
    size: "Small",
    hd: 5,
    hdVal: 10,
    cr: 4,
    racialFeatures: [
      "Darkvision 60 ft.",
      "See in Darkness"
    ],
    speed: {
      base: 30
    },
    abilities: {
      str: 9,
      dex: 19,
      con: 13,
      int: 13,
      wis: 16,
      cha: 13
    },
    feats: [
      {
        name: "Improved Initiative",
        type: "Combat"
      },
      {
        name: "Lightning Reflexes",
        type: "General"
      },
      {
        name: "Throw Anything",
        type: "Combat"
      }
    ],
    attacks: [
      {
        weapon: "Fire poker",
        name: "Fire poker",
        damage: "1d6",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ]
      },
      {
        weapon: "Claw",
        name: "2 Claws",
        damage: "1d4",
        bonuses: [
          {
            source: "inherent",
            value: "1d4",
            appliesTo: "damageType",
            damageType: "fire"
          }
        ],
        type: "primary"
      },
      {
        weapon: "Ember",
        name: "Ember",
        damage: "1d6"
      }
    ],
    defense: {
      DR: {
        value: 5,
        damageType: "silver or good"
      },
      SR: {
        value: 15
      },
      naturalArmor: 2
    },
    space: "5 ft.",
    reach: "5 ft.",
    environment: "Hell",
    visualDescription: "The light of a flaming pitchfork illuminates a creepily malformed little man, his red skin scarred and raw like the victim of horrific burns. Although barely taller than a child, his features mock those of a terrible old man with an oversized head, knife-like nose, and crazed round eyes flickering with wild flames.",
    description: "Maniacal and clever, ukobachs embody the tenacity and ever advancing genius of Hell. Legions of these tiny devils labor throughout the it, and from their efforts rise new heresies and tools of depravity. They revel in the fires of Hell and manipulate them not toward destruction, but to the creation of ever greater and more innovative diabolical ends. The keepers of Hell's furnaces, they delight in their mad work, breaking only to torment the damned with their burning tools or newest inventions. Ukobachs stand approximately 3-1/2 feet tall and weigh 70 pounds on average. Their fire pokers are fundamentally tied to their beings and disintegrate in a flash of cinders and ash upon the devil's death. These tools hold up to 10 fistsized embers, which an ukobach can fling at its enemies. Ecology Born from the burning depths of Hell, ukobachs find themselves most at home amid the choking and sultry pits where mortals dare not delve, proving well adapted to such stifling environs. While they must breathe, they prove equally well adapted to breathing smoke, cinders, and steam as air. Like all devils, the ukobachs' infernal eyes gaze through even the most stygian night, but unlike their brethren, they dislike the dark. While they harbor no fear of darkness and certainly see its value when tormenting mortals, they view it largely as a waste, seeking to dispel even the most fleeting shadow with an explosion of flame. Habitat & Society Most ukobachs originate from the flaming canals of Dis or the fiery pits of Phlegethon. Although rarely born from Moloch's crematoriums at the heart of Citadel Ba'al, hordes of ukobach furnace keepers tend the flames of the archdevil's ceremonial ovens. Devastating ukobach engineers also tinker in the foundries at the heart of Phlegethon, creating ingenious devices of intentional or incidental immolation-some infernal rumors claim a particularly insidious ukobach inspired the invention of the first fireworks, leaving these devils with a universal love of such creations. On the mortal plane, ukobachs gravitate to cities. While many metropolises prove ill prepared to defend against the flames these devils delight in spreading, most ukobachs take more subtle approaches, finding lairs in abandoned smithies, large furnaces, stone ruins, and other places likely to survive the occasional errant flame. While indisputably pyromaniacal, ukobachs are more than merely crazed marauders. Seeing a small hovel, pile of leaves, or alley cat burn is nothing to creatures born from the flames of Hell. Rather, they enjoy the order and progression of flames, exalting in striking the spark that ignites a wildfire, upturning the lantern that sets a whole city quarter aflame, or immolating the leader whose death results in the dispersal of a formerly devout congregation. Further satisfying their methodological obsessions, ukobachs prefer setting elaborate traps for their victims over direct combat, often turning whole structures into burning deathtraps, trapping and retrapping the same location, or setting obvious snares that cause their quarries to overlook more devious ambushes. These impish devils understand the use of flammable fluids and materials well, often employing barrels of oil, casks of alcohol, heaps of coal, and even alchemical items like tindertwigs in their creations. Among diabolists, it is said that all ukobachs know the secret of creating berith, an alchemical element by which any material might be distilled into gold. Stories tell of ukobachs trading knowledge of this element for wild prices or only after an alchemist gathers components from exotic lands. Such tales often offer blatant moral lessons and warnings against these unnatural obsessions, such as the Taldan author and former alchemist Smardina's cryptic and symbol-laden work Shagreen, wherein an obsessed alchemist adventures across the world and ultimately trades an ukobach 23 years of his life, only to find his age and journeys have made his hands too crippled to work-he dies soon after and is dragged to Hell in a golden coffin. Summoning Ukobachs Ukobachs prove unusually congenial when it comes to answering the summons of many diabolists, especially those with an obvious creative streak, interest in alchemy, or queries regarding the inventions of Hell. Any diabolist who draws the magic circle necessary to bind an ukobach with mercury or silver powder, or who lights their diabolical summoning with chemical fire rather than normal oil or tinder, increases how difficult an ukobach finds it to escape from the magical trap by +2. Additionally, a diabolist gains a +2 bonus on the opposed Charisma check made to obtain an ukobach's service if the task involves creating alchemical or metallurgical works, or otherwise involves fire. In addition, ukobachs who know and favor their summoner sometimes bring gifts with them from Hell. While on the surface such boons might seem like blessings, they are always carefully selected by an ukobach and meant to encourage a summoner toward a destructive end. Commonly, such infernal gifts take the form of fireworks and explosives-especially in lands where such creations are uncommon-inscrutable blueprints or formulas for fiendish devices or magic items, or powerfully volatile alchemical reagents.",
    organization: "solitary, pair, or team (4-16)",
    languages: "Celestial, Common, Infernal; telepathy 100 ft.",
    spellLikeAbilities: [],
    skills: {
      Acrobatics: {
        ranks: 8
      },
      Appraise: {
        ranks: 8
      },
      Bluff: {
        ranks: 5
      },
      Climb: {
        ranks: 8
      },
      Craft0: {
        subSkill: "any",
        ranks: 5
      },
      "Knowledge (arcana)": {
        ranks: 8
      },
      Stealth: {
        ranks: 5
      }
    },
    special: {
      "animate flames": {
        type: "Su",
        text: "As a standard action, an ukobach can animate an existing fire of Small size or larger. Doing so requires an ukobach to make a DC 15 Wisdom check as it impresses its will upon the fire. This DC increases by +5 for every size category of the flame above Small. If an ukobach succeeds, the flame animates with the statistics of a fire elemental of the same size, and follows the ukobach's mental commands. The flames remain animate for a number of rounds equal to the ukobach's Wisdom modifier-usually 3-after which they return to being simple flames, setting the square they cease moving in alight or being extinguished, as their surroundings warrant. Up to five ukobachs can make use of the aid another action to each grant an adjacent ukobach a +2 bonus on this Wisdom check to animate flames (granting a maximum +10 bonus)."
      },
      firebreathing: {
        type: "Su",
        text: "An ukobach can spend a standard action to guzzle a pint of oil, alcohol, or similarly flammable fluid and hold the combustible liquid within its body. At any point within 10 minutes of doing so, the ukobach can expel the liquid either as a 10-foot cone of fire or a 20-foot line of flame, both dealing 3d6 points of fire damage (Reflex DC 13 for half). Upon breathing fire an ukobach cannot make use of this ability again until it drinks another pint of oil. The save DC is Constitution-based."
      },
      scorch: {
        type: "Su",
        text: "An ukobach's touch is searing hot, causing its claws and any metal weapon it grasps to deal an additional 1d4 points of fire damage."
      },
      "fire leap": {
        type: "Su",
        text: "As a swift action, an ukobach occupying the same space as a fire, pool of lava, vent of searing steam, or similar blaze can teleport from that burning feature and emerge from another within 100 feet. This ability functions similarly to the spell dimension door, but only between fires. Upon entering a flame, an ukobach is instantly aware of all flames within range through which it might exit. If an ukobach enters a flame and there are no others to exit through within 100 feet, the devil's movement immediately ends and it is stunned for 1 round."
      }
    }
  },

};