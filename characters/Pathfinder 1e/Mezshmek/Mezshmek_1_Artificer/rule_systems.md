# Mezshmek's Rules Notes
## craft skill breakdown
### check bonus
#### base
- +5 intelligence bonus
- +1 trait bonus glory of old
- +1 insight bonus adrena's token
total: +7

#### any subschool, but situational
- +5 luck bonus *crafter's fortune*
- +2 untyped bonus aid another from familiar or other
total: +7

#### most subskills (not alchemy)
- +2 circumstance *traveler's any-tool*

#### stone or metal
- +2 racial bonus craftsman

#### metal
- +5 competence *forgefather's hammer*

#### any ranks
- +3 untyped bonus class skill
- +# of ranks
total: +(ranks+3)

### magic item crafting rate
- time
    - 5% reduced cost
    - 25% reduced total time for magic items
    total: 71.25% gross time cost
- speed
    - double progress for familiar
    - accelerate (day's progress in 4 hrs) for +5 DC
    total: x4 speed
- net time cost: 17.8125% of item's construction cost
- base progress
    - 1200 gp/day for arms and armor
    - 1400 gp/day for wondrous
- misc
    - full 4 hrs/day progress for working while adventuring
    - can make multiple items per day (gp limited, rather than 1 item/day limited)

### mundane item crafting time
- accelerated crafting +10 DC
- double the gp value per day you can craft, from familiar
- double normal progress on craft checks for mundane
<!-- * (if 5+ ranks) double check result for weekly progress -->

### buying/selling
- mundane crafting cost is 33.33% (1/3rd) price
- magical crafting cost is 47.5% (19/40ths) price
- purchase at 95% price, sell at 55% price
    - doesn't affect crafting time

# alternate rule systems
- Unchained Alignment and Removing Alignment https://www.d20pfsrd.com/alignment-description/additional-rules#TOC-Variant-Alignment-Rules-Unchained-Variant-
    - This helps me think more deeply about my characters' alignments
    - Come up with Loyalties for Mezshmek
- Wounds and Vigor https://www.d20pfsrd.com/gamemastering/other-rules/wounds-and-vigor
    - Wound Points: 2x Con score (+ Toughness), "wounded" is Con score; 38 WP, 16/38 WP wounded threshold
        - When below threshold, staggered, strenuous forces Con check DC 10 or unconscious
        - 0 WP = dead
        - Con damage/drain reduces WP but not threshold
    - Vigor Points: HP from HD rolls = 31
        - When out of VP, damage goes to WP
    - Healing
        - Magical: Choose either VP or WP; Heal VP as normal, or 1 WP per healing die (or CL WP if fixed amount)
        - Long Rest: Heal all VP and 1 WP
        - Full day's bed rest: All VP, lvl/2 WP
    - Attacks that deal WP directly
        - Crits: Do damage as usual, plus bonus WP damage equal to crit multiplier
        - Negative Energy: Like magical healing, but damage; excess VP damage does not go to WP
    - Other Effects
        - Temp HP: Temp VP, no rule changes
        - Nonlethal: Only ever VP damage; When out of VP, either 1 WP or crit multiplier (on crit)
        - Spell HP Triggers: "0 or fewer" -> wounded threshold, same with effects that can't reduce below 1
    - Modified Feats
        - Diehard: No Con check needed to stay conscious when wounded
        - Toughness: 1 WP/lvl
    - New Feats
        - Deathless Initiate: Not staggered at wounded, still 1 damage if strenuous, +2 melee atk/dmg if wounded
        - Deathless Master: No damage for strenuous if wounded
    - Final synthesis of online discussion about WaV system
        - Bringing back negative wounds is meh, I could go either way on this. I personally like not having to deal with negatives math.
        - Have nonlethal damage hurt vigor as normal, but rather than 1 wound per attack, it stacks separately against wounds (like vs hp) and knocks you out when it hits your "wounded" threshold.
        - Fast healing heals vigor every round, and wounds every minute.
        - Toughness should remain unchanged, improving wound points as written
        - Constructs should get 10 wound points plus size mod, and undead use Charisma for wounds
        - A short rest heals half of max vigor, and can be done up to Con mod times per day (min 1)
        - A character that is at half wound points (or halfway to "wounded" threshold) gets -2 to attack, saves, checks, AC, and CL
        - A character that has taken any wound damage gets half the above penalties
        - The Endurance feat reduces the above penalties for being wounded by 1 point
        - Negative energy does NOT go straight to wounds as suggested by the top commenter, as that would be utterly broken
        - Bleed going straight to wounds I could see, again up for debate
        - Healing flat massive amounts with magic restores some combination of 10 vigor or 2 wounds per 10 points
        - The "Treat Deadly Wounds" heal skill can restore wounds taken in the current fight. DC 20 = 1d4 wounds, DC 25 = 1d4 + wis mod wounds. Can be done no more than once per character per fight.

## traps
- rules
    - mechanical traps
        - craft (traps) to make
        - perception dc based on specific trap, identifies trigger
        - beat perception by 5 for general idea of function
        - perception and disable device dc is base 20
    - magic
        - perception dc 25 + spell lvl
        - save dc 15 + 1.5x spell level
        - disarmed with trapfinding class feature with disable device dc 25 + spell lvl
            - can't attempt dd without trapfinding
        - magic device trap created with craft wondrous
        - spell trap just requires relevant spells
    - trigger
        - location: stand on particular square
        - proximity: when creature approaches
            - mechanical proximity triggers very sensitive to air changes
            - magical triggers could be *alarm*, *detect [something]*, etc
                - *alarm* can only cover trap itself (like, a trigger area?)
            - sound: triggers when hears sound as +15 perception skill
                - requires *clairaudience*
                - beaten by stealth skill, magical silence, or anything that negates hearing
            - visual: triggers when "sees" something, based on spell incorporated
                - *arcane eye*: line of sight (no range), +20 perception
                - *clairvoyance*: preselected location, +15 perception
                - *true seeing*: line of sight (120ft), +30 perception
                - for seeing in the dark, either *true seeing* or add darkvision (how?)
                    - "adding darkvision limits to 60ft vision in darkness"
            - touch: triggers when touched
                - can choose to be magical trigger with *alarm* covering only a trigger spot
            - timed: triggers after set duration
            - spell: all spell traps have this trigger
                - the appropriate spell description explains the trigger conditions
    - duration: usually instantaneous, or num rounds
        - if num rounds, effect repeats on initiative triggered
            - if not triggered during combat, effect at top of init order
    - reset: "usually only takes a minute or so"
        - no reset: need to rebuild; spell traps cannot be reset
        - repair: craft (traps) equal to build DC, cost 1/5 market price
            - repair time is build time as if market price was repair cost
        - manual: most mechanical traps
        - automatic: either immediate or after timed interval
    - bypass: optional element, built-in temporary disarm
        - lock: dc 30 disable device to open
        - hidden switch: dc 25 perception to locate
        - hidden lock: both of above
    - effect
        - pit: ref to avoid, usual fall damage
            - uncovered: usually only dangerous in the dark, or if people fail acrobatics
            - covered: perception dc 20 (only if carefully search area), ref dc 20 if not detected
                - running or reckless movement offers no save
            - trap coverings: usually weight gated
                - might auto-close (and might lock)
                - dc 13 str to keep spring-loaded door open
            - might contain spikes, monsters, pool of water/acid/lava, secondary trap
        - ranged attack: builder sets atk bonus, dmg as normal ammunition type
            - can be configured to simulate composite bow with high str rating
        - melee attack: builder sets atk bonus
            - "falling stone block can deal any amount of damage, but remember that reset requires lifting it"
        - spell: save dc 10 + spell lvl + CAM
        - magic device: save dc 15 + 1.5x spell lvl
            - some make atk rolls instead
        - special: some traps have misc effects
            - poison ability damage
            - drowning water
    - misc trap features
        - alchemical items: if item mimics spell effect, increase CR
        - gas: usually have the delay onset and never miss features
        - liquid: same as gas
        - multiple targets
        - never miss: no atk or save rolls, but delayed onset
        - onset delay: time between triggering and damage
        - poison: only injury, contact, inhaled are eligible
        - pit spikes: treat as daggers with +10 atk bonus
            - dmg bonus +1/10 ft (max +5)
            - each char falling in pit attacked by 1d4 spikes
            - dmg in addition to fall
        - pit bottom: if not spikes, best to treat as separate trap
        - touch attack
- designing
    - mechanical: select what you want, add up CR adjustments
        - from CR you can derive craft DC
        - base CR is 0
    - magic: need craft wondrous, and relevant spells
        - ignore spell reqs at +5 dc as normal?
        - base CR is 1
    - CR (mechanical)
        - DCs: <16 = -1, 16-20 = 0, 21-25 = +1, 26-29 = +2, >29 = +3
            - Perception, Disable Device, Reflex (if relevant)
        - atk: <+1 = -2, +1-5 = -1, +6-10 = 0, +11-15 = +1, +16-20 = +2, touch = +1
        - damage: +1 per 10 points avg dmg
        - misc features
            - alchemical device: lvl of spell mimicked
            - auto reset: +1
            - liquid: +5
            - multiple targets (non-damage): +1
            - never miss: +2
            - proximity/visual trigger: +1
        - poison
            - black adder venom: +1
            - black lotus extract: +8
            - bloodroot: +1
            - blue whinnis: +1
            - burnt othur fumes: +6
            - deathblade: +5
            - dragon bile: +6
            - giant wasp poison: +3
            - greenblood oil: +1
            - insanity mist: +4
            - large scorpion venom: +3
            - malyass root paste: +3
            - medium spider venom: +2
            - nitharit: +4
            - purple worm poison: +4
            - sassone leaf residue: +3
            - shadow essence: +3
            - small centipede poison: +1
            - terinav root: +5
            - ungol dust: +3
            - wyvern poison: +5
    - CR (magic): apply ONLY higher of the two below modifiers
        - highest-lvl spell effect: +lvl
        - damaging spell effect: + 1 per 10 avg dmg
    - "average damage": round to nearest 10
        - x2 for multiple targets
        - multiply by num rounds active (avg if variable)
        - poison doesn't count, but pit spikes and multiple attacks do
    - multiple traps: if trap is really 2+ connected traps, determine separate CR
    - price (mechanical): CR x 1000gp
        - if uses spells in effect/reset, add separately
        - automatic reset: +50% price
        - no reset: 1/2 price
        - particularly simple: GM discretion, as low as 1/4 price
        - after CR price, add alchemical/poison price
            - if auto reset, 20x price
    - price (magic): *alarm* trigger is free
        - per spell: 50gp x CL x spell lvl, + materials
        - auto-reset trap: 10x spell price, 100x material price
    - price (spell): none (how do you make it?)
    - craft dc (mechanical)
        - by CR: 1-5 = 20, 6-10 = 25, 11-15 = 30, 16+ = 35
        - proximity trigger: +5
        - auto reset: +5

## wands recrafted
* assumptions made
    - you can make a wand at lower CL than yours as normal
    - single-spell wands are activated as normal
    - don't lose "excess" charges if wielded by someone with lower CAM than required for current num of charges
    - non-casters can't recharge them (need wand spells to be on class's spell list), so don't worry about max charges
* personal ruling calls that I could see the other side of 
    - multi-spell wands require UMD only if the specific spell being used is not on your list
* ideas that I like
    - new spells could be added to a wand after creation
        - must have CL at least equal to the wand
        - can only add spells if your CAM allows more in one wand
        * breaks flavor of wands being physically constructed in a way that represents the spell
            - unless you are rebuilding the wand, or adding to it
    - could increase a wand's CL
        - requires CL of what you want to increase it to
        - requires ability to craft a wand that holds all the spells in it
        - pay difference in creation price (normally 375 gp x spell lvl x difference in CL, for each spell in it)
        - adds charges equal to CL difference (can't exceed charges cap at new CL and your CAM)
* how is this not just a staff?
    - wands have max 4th lvl spells
    - staves use wielder's ability score and feats for DCs
    - staves use wielder's CL if higher
    - spells in staves can be made cheaper but use more charges
    - staves with more than one spell are cheaper overall
- recharging
    - when a spellcaster prepares spells/slots, can recharge wand
        - requires all spells cast by wand to be known/in book
        - forgo one spell/slot equal to highest lvl of spell in wand to add 1 charge
        - a wand can only get 1 charge per day this way
        - a caster can do this to num wands/day equal to CAM (casting ability modifier)
    - feats allow for other recharging methods
        - [list feats]
    - can recharge dead wand
- when using last charge of wand, UMD DC 10 + highest spell lvl + creator's CL
    - on fail, wand gains broken condition, and consumes double charges
    - repairing requires *mending* or *make whole* cast at CL equal or higher than creator's CL
    - failure by 10+ destroys wand, 1d6/CL untyped damage to wielder and adjacent creatures/objects
- wizard who selects wand as arcane bond can't recharge it with different spells
    - (look up arcane bond with wand to see what this means in practice)
- creating wands
    - hold initial charges equal to 5 + creator's CL
    - max charges equal to 10 + creator's CL + wielder's CAM
    - pay material component cost (if any) for num spells equal to 50 - creator's CL - creator's CAM
        - never lower than num initial charges
    - can hold multiple spells, pay as if making separate wands
        - 375 gp x spell lvl x creator's CL, per spell in wand
        - can have num spells up to creator's CAM

# homebrew stuff
## https://www.d20pfsrd.com/extras/community-creations
### tools/references
- DM quick references https://www.d20pfsrd.com/extras/community-creations/vip-s-lab/vip-s-dm-screen
- Mundane weapon comparison spreadsheet https://docs.google.com/spreadsheets/d/1PABw6g82gw17om24tFpepAoq_a7Y9KZ8sJVG_EESfvE
- Ability score generation methods https://www.d20pfsrd.com/extras/community-creations/momentums-lab/ability-score-generation-guide
- Quick equipment kits https://www.d20pfsrd.com/extras/community-creations/brreitz-s-lab/equipment-kits

### custom rules/mechanics
- Magic DR, lvl up hp https://www.d20pfsrd.com/extras/community-creations/aranian-s-lab/houserules
- Profile system (notoriety) https://www.d20pfsrd.com/extras/community-creations/juper0-lab
- Talent Points (non-loot reward) https://www.d20pfsrd.com/extras/community-creations/duckfin-s-lab/talent-point-system

### feats
- Half-Swording Style https://www.d20pfsrd.com/extras/community-creations/black-flame-studios-lab/feats/half-swording-style
**Half-Swording Style**
*You learn to grab the blade of your sword when needed, to exploit the weaknesses of heavy armor.*
- Prerequisite: Weapon Focus (Longsword, Bastard Sword, or Greatsword) or Combat Expertise, Base Attack Bonus +1
- Benefit: The sword being wielded can be used in two special forms of attack. Both styles require the sword to be held in two hands, but you mayonly apply half your strength to damage, the sword's damage is reduced by one step (for example, a Medium longsword would deal 1d6 damage). You may only choose which form of attack to use at the start of your turn, and it lasts until the start of your next turn. Choosing to use one of these special styles imposes a -2 penalty to AC against melee attacks, as it makes parrying more difficult. Gripping the blade of your sword does not subject you to any extra effects from your own weapon, such as a *flaming* enchantment.
    - *Half-Sword Thrust*: By gripping the blade with your off-hand, you can aim for the gaps in a suit of armor. With this style, the sword does piercing damage, and you treat your opponent's armor bonus to AC as lower by 1 point + 1 point per four levels above first (maximum 5 at level 17), to a minimum of +0. If your opponent has no armor bonus to AC, you may apply this reduction to their natural armor bonus instead.
    - *Mordhau*: By flipping the sword around and gripping the blade with both hands, you can strike with the crossguard or pommel, dealing a resounding blow even through the heaviest of helmets. With this style, the sword deals bludgeoning damage, and a successful strike forces your opponent to make a Fortitude save (DC 10 + 1/2 user’s level + Strength modifier), or they are staggered until the start of your next turn. If a creature is immune to extra damage from critical hits, it is not subject to this effect.
- Special: This technique is intended for western swords like the longsword, bastard sword, or greatsword. Other weapons may be used with this feat at GM's discretion. Additionally, if Weapon Focus is used as the prerequisite, you can still use any applicable weapon, not just the one you chose with Weapon Focus.

### classes
- Prophet https://www.d20pfsrd.com/extras/community-creations/house-rules/prophet

### prestige classes
- Master Channeler https://www.d20pfsrd.com/extras/community-creations/master-channeler

### archetypes
- Liberator (Paladin) https://www.d20pfsrd.com/extras/community-creations/black-flame-studios-lab/classes/archetypes-paizo-classes/liberator

### items
- Scoundrel's Boots of Maneuver https://www.d20pfsrd.com/extras/community-creations/mad-brew-s-lab/magic-items/scoundrel-s-boots-of-maneuver
- Wondrous Items and enchantments https://www.d20pfsrd.com/extras/community-creations/house-rules/wondrous-items
    - Brilliant: Needs restrictions on auto-dispel, maybe by effect level or frequency of use. Faint evocation.
    - Featherweight: I really like mithral-as-enchant, lets you use other skymetals instead and still get its bonuses. Clever to not double-count mwk reduction to ACP. Faint transmutation.
    - Fiery: Needs less awkward wording, but solid (like "5x/day activate for 1 minute", "striking the wearer with melee/natural wpns"). Moderate evocation.
    - Healing: Also awkward wording, but good. Is +4 a good spot for it? Moderate conjuration.
    - Mighty Bulwark: Doesn't indicate rules for choosing a direction to face, ambiguity on awkward wording of ASFC note. Moderate abjuration.
    - Staff of Shadows: Solid, but please follow staff description format. Moderate illusion.
    - Everfull Component Pouch: Solid, maybe add Eschew Materials feat to prereqs, as it duplicates that effect. Minor divination.
    - Handy Scroll Tube: "For all purposes" line is awkward, otherwise great. Moderate divination.
    - Handy Wand Case: Consider that this item reverses the specific decision to not allow Quick Draw for wands, and for only 2k. Also, a spell to call an item might be more appropriate than *unseen servant*. Minor creation.
    - Bottomless Money Pouch: Good for ignoring coin weights. -10 is too high for the price. Moderate conjuration.
    - Quiver of Arrow Creation: A consumable that's not overpriced!? Is this even pathfinder??? Moderate transmutation.
    - Quiver of Endless Arrows: Masterwork is a nice touch while still being totally balanced. Clearly defined rules. Moderate conjuration.
    - Vest of Storing: Useful and clearly defined. Moderate transmutation.
    - Ring Bracelet: There is no such thing as "one" arm or hand slot, nor "bracer" or "glove" slots. But, a creative way to mess with magic item slots. Half cost for an item might still be unbalanced, and is absolutely ripe for powergaming at lower levels. At least requiring Forge Ring will prevent low-level abuse of crafting with it.
        - Shadowguard Ring Bracers: Minor illusion.
        - Handflower of Grace: Replace *charm monster* with *eagle's splendor*. Moderate transmutation.
        - Ring Bracers of Shielding: Devalues *Ring of Protection*, scales cost way too slowly. Absolutely not allowed. Moderate abjuration, I guess.
        - Figment Weavers: At-will usage but different action is interesting. Minor illusion.
    - Shoes of Agility: Should be 5000gp, not 2500. Could be more creative with spell requirement. Minor transmutation.

### unique creatures/characters
- Champion of Steel https://www.d20pfsrd.com/extras/community-creations/vip-s-lab/champion-of-steel
