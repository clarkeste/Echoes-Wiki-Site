In [[Echoes of the Departed]], Mass Combat is done when a [[PC]] is commanding an army of significant size into combat alongside a similarly powerful force. It can be run in parallel to a traditional [[Combat]] [[Encounter]], or it can be its own independent engagement.

Instead of individual [[Character|Characters]] fighting it out, Mass Combat is instead carried out by [[Mass Combat#Units|Units]], a type of [[NPCs|NPC]] similar to [[Adversary#Minions|Minions]]. They represent a large group of soldiers or combatants, and have a simplified stat-block.

In Mass Combat, the Battle Commander or Leader of the allied forces, almost always a PC, controls these Units, often multiple in a turn. They can move an amount of Units per turn equal to their ranks in [[Leadership]].

## Movement and Combat
Mass Combat is done on a hexagonal grid, similar to the [[Range Bands|Range Band]] system, with Units on adjacent hexagons being within [[Short Range]]. Each hexagon represents a [[Maneuvers|Maneuver]]’s worth of space. In some cases, Mass Combat may be abstracted just like regular [[Combat]], and vice versa, as these the hexagon system is simply a visual aid and represents the same system mechanically.

In Mass Combat, a [[Mass Combat#Units|Unit]], cannot be within [[Engaged Range|Engaged]] Range of another Unit, even if they are an allied Unit. In hex terms, this means only one Unit can be on a hexagon/tile at any time.

Each turn, a Unit gains one [[Actions|Action]]. They can downgrade this to a [[Maneuvers|Maneuver]] to move or interact with the environment, or they can choose to [[Attack Check|Attack]] an enemy within range. If the Unit is attacking another Unit with a Melee Attack, then a successful Attack Check results in that Unit pushing its target back one hexagon, forcing them to ‘retreat’. The attacking Unit then moves into the position/hex they were previously attacking.

If a Unit instead downgrades their Action to a Maneuver and uses the [[Maneuvers#Move|Move Maneuver]], they move just like a regular [[Character]]. That means they move one hex tile. However, the place they move into must be an empty location or tile. Two Units next to each other can switch spots, although it takes both of their Actions to do so.

Only an amount of Units equal to the Battle Commander’s (the PC’s) ranks in [[Leadership]] can be moved in a single Mass Combat turn.

Just like in regular Combat, there are various environmental factors or modifiers that can change the strategy of a Mass Combat, such as [[Cover]]. These modifiers largely act in the same way as they do in regular Combat.
## Initiative and Combining
If a Mass Combat is being run independently of a personal-scale [[Encounter]], then deciding Initiative is simple. The side with the lowest amount of Units at the start of the Mass Combat gets to go first. This represents the simpler chain of command that is feasible with a smaller army.

If a personal-scale [[Combat]] [[Encounter]] is happening simultaneously, and is linked to the Mass Combat, then the turns of the Mass Combat will often happen at the end of a Round. They occur in the same order, with the one that started the Mass Combat with the least Units going first.

Regular Combat Encounters can overlap with a Mass Combat in a variety of ways, but what is likely the most common is the Combat Encounter representing a particularly important battleground. For example, while a larger battle rages over a fortification, the [[PC|PCs]] are stationed at the front gate, and fighting to keep their enemies from entering the fortress.

Usually, Mass Combat and a regular Combat Encounter overlaps by [[Character|Characters]] fighting one or more Units. In that case, the Units are ‘converted’ to an army of [[Adversary#Minions|Minions]], [[Adversary#Rivals|Rivals]], and [[Adversary#Nemesis|Nemesis]] enemies. This, obviously, varies depending on the amount and type of people people or monsters the Unit consists of.

## Unit Commanders
No matter how high or low-ranking the [[Character]] controlling an army is, in the context of Mass Combat, they likely have subordinates who take orders from them, before forwarding those commands to the troops on the battlefield. Unit Commanders (or just ‘Commanders’) are a Character that is leading Units on a battlefield.

If a Unit does not have an assigned Commander, they act as normal, without any bonuses or debuffs. However, if they do have a Commander, that Commander provides a series of benefits.

Commanders have s stat-block, much like Units, but their stats instead represent what bonuses are added to Units under their command. For example, if a Commander has +3 [[Strain Threshold]] listed on their sheet, it means all Units under their command have their Strain Threshold increased by 3. Possibly the most important stat a Commander has is the Focus value, which determines how many Units the Commander can lead/how many Units can benefit from their effects. The amount of Units that can benefit from a Commander’s benefits is equal to their Focus value. For example, a Commander with a Focus of 3 can have up to three Units benefit from their effects.

Here is an example of a Commander’s stat-block:

**General Noril**
The leader of the Royalist military. He is an excellent tactician and strategist.

**Stats**
[[Strain Threshold|Strain Threshold]]: +3
[[Defense]]: +2
[[Damage|Damage]]: +2
Focus: 5

**Abilities:**
[[Mass Combat#Hold Steady!|Hold Steady!]]
[[Mass Combat#Shock Troopers|Shock Troopers]]

**Skill:**
3y, 2g

Any existing [[NPCs|NPC]] or [[PC|PC]] with a [[Character Sheet]] can be turned into a Commander fairly easily. 

[[Strain Threshold]] is increased by an amount equal to the Character’s [[Willpower]] rating. [[Defense]] is increased equal to half of a Character’s [[Cunning]], rounding up. Damage is equal to half their [[Intellect]], rounding up. Focus is equal to ranks in [[Leadership]]. Finally, they may pick a number of Abilities equal to half their ranks in [[Knowledge - Warfare|Knowledge: Warfare]], rounding up, so long as [[The GM]] agrees and the Abilities make narrative sense. The Skill stat, which is used whenever a Unit Commander’s prowess at ordering their troops is to be tested, is the same as the Unit Commander’s Leadership skill.

To see an example of a Commander, take a look at [General Noril’s](https://app.rpgsessions.com/char/nds/6492150d18fddf535714fc6c) Character Sheet. The Mass Combat profile is at the bottom of the Sheet, at the “notes” section.

When a Commander takes control of a Unit, pick one Unit they are commanding. They are now directly embedded into that Unit, and the Unit’s [[Defense]] increases by 1 in addition to all other effects. However, if that Unit is defeated, so is the Commander, and all Units cease receiving benefits from them.

## Units
Units are the core of Mass Combat, and the pieces on the board that determine if ground is held, lost, or captured. There are four types of Units.
### Unit Types
#### Infantry
Infantry are melee Units who almost always take territory/a position after a successful [[Attack Check]]. They make up the majority of an army, and hold the frontline.
#### Ranged 
Ranged Units are archers, artillery and other long-range Units. Ranged Units are usually fragile. Additionally, their main purpose is to soften up enemy Units for Infantry—Ranged Units cannot capture territory, and do not enter tiles or positions after a successful [[Attack Check|Attack]].
#### Mounted
Mounted Units are calvary, Chariots, or other Units that have a vehicle or mount that allows them to travel faster. In addition to the [[Actions|Action]] all Units have, they gain an extra [[Maneuvers|Maneuver]]. They can ‘jump over’ an enemy Unit, moving two spaces by skipping the position with the enemy, with a single Maneuver. If the Unit is an enemy, it deals two [[Damage]], akin to [[Swift Strike (Passive) (Quality)|Swift Strike]]. When Mounted units do [[Attack Check|Attack]] directly, they push back an enemy on a successful Check and take territory, just like Infantry. In uneven or rough terrain that is not suitable for calvary, Mounted Units may lose most of their unique benefits.
#### Aerial
Aerial Units can fly and therefore can only be attacked by Ranged Units. Their movement is not impeded by any other Unit, they can exist on the same tile as any non-aerial Unit by flying above, and they can’t be displaced. They can attack any Unit below them or adjacent to them. Just like Mounted Units, they have an additional [[Maneuvers|Maneuver]].

### Unit Stats
Units have various different stats, just like regular [[Character|Characters]]. However, their stats are not identical to Characters.

A notable change is that, on the [[Character Sheet]] of a Unit, the [[Wound Threshold]] and [[Soak]] are always left blank. This is because a Unit does not use these stats. Additionally, [[Weapons]] are not a factor for a Unit; instead, each Unit has a flat Attack number that is increased by the amount of [[Success|Successes]] rolled on a [[Attack Check|Check]]. Essentially, they have a Weapon ‘built-in’. If the Weapons of the Units change en masse, the Attack stat of the Unit changes to represent this increase or decrease in power.

The following are the stats on a Unit’s Character Sheet:

#### Strain Threshold
Each time a Unit is the target of a successful [[Attack Check]], they suffer [[Strain]] equal to the [[Damage]] rating of the Unit, and any uncancelled [[Success|Successes]]. 

The Strain Threshold represents the organization of the Unit, and any dead or gravely injured soldiers. Once their current Strain passes their Strain Threshold, the Unit disbands.

The reason why a Unit has a Strain Threshold but not a [[Wound Threshold]] is simple: it is rare that a Unit is defeated by having all, or even most, of its members, die in battle. More often than not, a Unit flees or disbands due to being routed, disorganized, or overwhelmed. 

When disbanded, some members of the Unit may join surrounding Units. However, this is often counter-acted by the morale loss of seeing a nearby Unit be routed, and so surrounding Units do not add any Strain.
#### Defense
Defense acts identically to personal [[Defense]]. It adds [[Setback Dice]] to [[Attack Check|Attack Checks]] targeting this Unit equal to the Defense rating of the Unit.
#### Damage
How much [[Strain]] [[Damage]] a Unit inflicts when attacking another Unit. This is usually determined by the quality of their equipment and the skill of the Unit.
#### Range
How far a Unit can attack from. Melee Units always attack from [[Short Range]], but Ranged Units can have a range of anywhere from Medium to Extreme. Some Artillery can fire at Strategic.
#### Cost
The amount of [[Rupees]] that this Unit expects to be paid for a day of service. Often, this does not have to come out of a [[Character]]’s pocket and is instead paid by the relevant organization or benefactor.
#### Abilities
Many Units have special Abilities. This denotes any additional powers or abilities unique to them that can change the way they are seen on the battlefield.

### Actions
In Mass Combat, when a Unit is picked to be used on that turn, they gain one [[Actions|Action]]. They can do a variety of things with this Action, which are listed below. A number of Units equal to the overall Battle Commander’s ranks in [[Leadership]] can be moved on a turn.

#### Attack
[[Attack Check|Attack]] another Unit. If this is a Melee Attack, success will cause the attacking Unit to enter the space previously held by the defender. The defending Unit will then suffer [[Damage]] equal to the Damage stat of the attacking Unit plus any additional [[Success|Successes]], and fall back to a position.

The [[Dice Pool]] a Unit uses to attack is determined by the [[Skills|Skill]] of the overall Battle Commander—in the case of the allied side, almost always a [[PC|PC]]. There are up to four Skills that can be used as the positive Dice Pool—however, each one can only be used once on any given turn. These Skills are:

[[Leadership]]
[[Knowledge - Warfare]]
[[Cool]]
[[Discipline]]

Additionally, the Dice Pool under the Skill section of a [[Mass Combat#Commanders|Unit Commander]] can be used instead if the Unit being moved is under their command. However, the Skill of each Unit Commander can only be used once per turn.

[[Difficulty]] is always [[Difficulty|Average]] (2p) Difficulty. Modifiers, of course, still apply, most notably [[Defense]]. Others still are important, such as [[Sacred Points|Sacred Points]] expenditure, and Cover.

The defending Battle Commander always gets to pick where their Unit flees. It is encouraged that [[PC|PCs]] overseeing a battle decide ahead of time where they would want their Units to flee, or stay for the enemy’s Mass Combat turn so that they can decide in real time.
#### Move
Move to an unoccupied position or hex within one [[Maneuvers|Maneuver]] of the current position/an adjacent hex. This is done by downgrading the Action to a Maneuver.
#### Reorganize
Reorganize to heal [[Strain]] when needed. When Reorganize is used, Units heal Strain equal to 1 + the amount of adjacent friendly Units.
#### Ability
Some Units may have Abilities that can only be activated by using their [[Actions|Action]].
#### Interactions, and Other
There may be some cases where a Unit can gain some benefit, or change the battlefield, by interacting with something within [[Engaged Range]] of them/on the same hex tile as them, such as pillaging a tile. May do so, or other similar things, by downgrading the [[Actions|Action]] to a [[Maneuvers|Maneuver]].

### Effects in Combat
#### Surrounded
When there are Enemy Units on two spaces around a Unit (and they are not on positions/hexes directly adjacent to each other), that Unit is Surrounded. When Surrounded, all [[Attack Check|Attack Checks]] against a Unit gain [[Boost Dice]] equal to adjacent friendly Units surrounding the enemy Unit.

If a Unit has no valid path to retreat (all tiles are blocked by enemy Units or impassable terrain), then they are considered Encircled. If a Unit is Encircled, then they suffer double [[Damage]] from a successful [[Mass Combat#Attack|Attack]]. 

If there is an adjacent hex tile that is an occupied by an ally, the encircled Unit still suffers double Damage but is then ‘undeployed’ and returns to the reserves. They can be deployed again at a later date.

#### Flanking
Flanking is identical to the [[Flanking]] mechanic in personal combat.

If a Unit approaches a target from behind, they gain a [[Boost Dice|Boost Die]] when attacking. This is usually determined by if the targeted enemy is [[Engaged Range|Engaged]] with another Unit, or if they [[Attack Check|Attacked]] another Unit in the opposite direction on their previous turn. Additionally, all benefits from [[Cover]] or otherwise beneficial positions or fortifications are null and void when Flanked.

#### Cover
Same as in personal combat. Various different types and levels of [[Cover]] exist, like in personal-combat. In Mass Combat, cover tends to represent terrain advantageous for the defender, and therefore applies to melee attacks as well.

Some Cover may be significant enough to [[Dice Upgrade|upgrade]] the [[Difficulty]] of a Check, instead of just adding [[Setback Dice]].

Cover can be in some cases be built by military engineers, and provide increasing significant benefits, or benefits against certain unit types. For example, the digging of trenches.



### Abilities
Here is a list, although not exhaustive, of Abilities that various Units can have, that provide strategic bonuses or considerations.

#### Hold Steady!
Requires an [[Mass Combat#Actions|Action]] to activate. When “Hold Steady!” is activated, this [[Mass Combat#Units|Unit]] cannot be Routed/pushed back. Instead, a successful [[Mass Combat#Attack|Attack]] against them will deal double [[Mass Combat#Damage|Damage]]. Spend another Action to cancel this [[Mass Combat#Ability|Ability]].
#### Shock Troopers
On their first turn in a Mass Combat battle, Shock Troopers gain an additional [[Mass Combat#Actions|Action]] .
#### Keep Them Busy
Given to Skirmisher-type [[Mass Combat#Units|Units]]. Requires an [[Mass Combat#Actions|Action]] to activate. Both Units suffer 2 [[Damage]] and the targeted Unit is unable to be used next turn.
#### Professional
Units with Professional are disciplined, trained soldiers. When using [[Mass Combat#Reorganize|Reorganize]], heal 1 additional Strain.
#### Insurgent
[[Mass Combat#Units|Units]] with Insurgent engage in guerrilla warfare. They can [[Mass Combat#1 Deployment|Deploy]] on any part of the battlefield so long as it’s not an area entirely enclosed by enemy Units.
#### Mindless
A [[Mass Combat#Units|Unit]] with this Ability follows orders without hesitation. They must be annihilated to be defeated. They are immune to Fear checks. They can be annihilated if their Strain goes over twice their Strain Threshold, if two [[Triumph|Triumphs]] are generated in an Attack, or they are Imperiled and then targeted by a successful Attack.
#### Stand Your Ground!
Requires an [[Mass Combat#Actions|Action]] to activate. Until the start of their next turn, all [[Mass Combat#Attack|Attacks]] against the Unit with this [[Mass Combat#Ability|Ability]] increase [[Difficulty]] by one.
#### Will and Resolve
This [[Mass Combat#Units|Unit]] is strong-willed, and can reorganize itself. It heals 2 [[Strain]] at the end of every turn it ends while over half its [[Strain Threshold]]. Additionally, fear-related maluses do not affect them.
#### Defender
Whenever a Unit with the Defender ability is [[Attack Check|attacked]], or a friendly [[Mass Combat#Units|Unit]] adjacent to them is attacked, that attack targeting an ally adds a [[Setback Dice|Setback Die]]. This represents a Unit protecting Allies around them.
#### Wave
This [[Mass Combat#Units|Unit]] can be [[Mass Combat#1 Deployment|Deployed]] at the start of a turn and be used on that turn right away.
#### Suppressive Fire
When this [[Mass Combat#Units|Unit]] attacks another Unit, it can spend 2 [[Advantage|Advantages]] to prevent the target Unit from being used on the Enemy’s turn.
#### Mounted
This [[Mass Combat#Units|Unit]] is riding a vehicle or animal, such as a horse or carriage. In addition to the [[Actions|Action]] all Units have, they gain an extra [[Maneuvers|Maneuver]]. They can ‘jump over’ an enemy Unit, moving two spaces by skipping the position with the enemy, with a single Maneuver. If the Unit is an enemy, it deals two [[Damage]], akin to [[Swift Strike (Passive) (Quality)|Swift Strike]]. When Mounted units do [[Attack Check|Attack]] directly, they push back an enemy on a successful Check.
#### Aerial
This [[Mass Combat#Units|Unit]] can fly. Some Units with Aerial can land, others cannot. When flying, they can only be attacked by [[Mass Combat#Ranged|Ranged]] Units. Their movement is not impeded by any other Unit, they can exist on the same tile as any non-aerial Unit by flying above, and they can’t be displaced. They can attack any Unit below them or adjacent to them. Just like Mounted Units, they have an additional [[Maneuvers|Maneuver]].
#### Carriers
This [[Mass Combat#Units|Unit]] can carry an additional Unit, and be dropped at any time. This [[Mass Combat#Ability|Ability]] is usually given to aerial units that are transports for Units, or aerial units such as Aerocuda who can carry Bokoblins and other small monsters with their talons. They can be dropped with an [[Actions|Action]].

### Example Units:

#### Royal Guard
The cream of the crop, the most elite units of the Royalist Army. These [[Mass Combat#Units|Units]] are incredibly powerful, in the hands of a competent strategist.

[[Strain Threshold|Strain Threshold]]: 16
[[Defense]]: 2
[[Damage|Damage]]: 4
[[Range Bands|Range]]: [[Engaged Range|Engaged]]

Abilities:
[[Mass Combat#Hold Steady!|Hold Steady!]]
[[Mass Combat#Defender|Defender]]
[[Mass Combat#Will and Resolve!|Will and Resolve]]

Cost: 1500 [[Rupees]]

## Mass Combat Process
The following is a list of what is done in Mass Combat, in order, from beginning to end.

### 1: Deployment
To start, available [[Mass Combat#Units|Units]] must be Deployed. Each side in a Mass Combat will have a Deployment Area, usually a forward-operating base, camp, or fortification. 

At the beginning of the Mass Combat, pick up to 10 Units from the Units ‘in reserve’. Then, select places for those Units to be deployed. The Unit must be deployed on an unoccupied position/hex, and must not be adjacent to an enemy Unit. The Deployed Units are the ones that the Mass Combat will begin with, on either side. The Attacker will always Deploy their Units first.

After initial Deployment, at the start of each turn, the [[Mass Combat#Battle Commander|Battle Commander]] may choose to Deploy only one additional Unit. If they use a [[Sacred Points|Sacred Point]], they may Deploy two.

After both sides have Deployed their Units, [[Mass Combat#2 Initiative|Initiative]] begins.

### 2: Initiative
Initiative, in Mass Combat, is determined simply. The side that, at the end of [[Mass Combat#1 Deployment|Deployment]], has the least [[Mass Combat#Units|Units]] on the battlefield, goes first. This leads to either the [[Mass Combat#3 Allied Turn|Allied Turn Section]], or the [[Mass Combat#4 Enemy Turn|Enemy Turn Section]] depending on who goes first. The two sides then alternate turns indefinitely, until the Mass Combat is over.

### 3: Allied Turn
During an allied turn, the overall [[Mass Combat#Battle Commander|Battle Commander]]—almost always a [[PC|PC]]—moves allied [[Mass Combat#Units|Units]]. The **Battle Commander can use/move Units equal to their ranks in [[Leadership]] on an allied turn.**

Each of these Units gains one [[Actions|Action]] and may do a variety of things with it, such as moving or [[Mass Combat#Attack|Attacking]]. [[Mass Combat#Actions|Here is the list]]. A Unit can only be moved once per turn.

Once the leader of the army chooses to end their turn, or they have moved all the Units they could on their turn, the allied turn ends. At the end of a turn, a Battle Commander may choose to deploy additional Units. When that is finished, the [[Mass Combat#4 Enemy Turn|enemy turn]] begins.

### 4: Enemy Turn
When the enemy turn commences, the enemy [[Mass Combat#Battle Commander|Battle Commander]]—almost always played by the [[The GM|GM]]—carries out the battle strategies of their faction, in a way largely symmetrical to that of the allied turn. Essentially everything listed in the [[Mass Combat#3 Allied Turn|Allied Turn Section]] can be done on an Enemy turn.

During an Enemy turn, enemy [[Mass Combat#Units|Units]] can attack and push back allied Units, just as vice versa. However, when pushed back, the allied [[Mass Combat#Battle Commander|Battle Commander]] (usually a [[PC]]) gets to choose which position/hex they fall back to. This can be any of the three hexes opposite to the one they were attacked from. It is encouraged that [[PC|PCs]] overseeing a battle decide ahead of time where they would want their Units to flee, or stay for the enemy’s Mass Combat turn so that they can decide in real time.

If a Unit has no viable place to retreat (ie, all valid hexes are already occupied) then they suffer double [[Damage]] from a successful [[Mass Combat#Attack|Attack]]. If there is an adjacent hex tile that is an occupied by an ally, the Unit still suffers double Damage but is then ‘undeployed’ and returns to the reserves, and can be deployed again at a later date.

### 5: Repeat
Once an [[Mass Combat#4 Enemy Turn|Enemy Turn]] is over, it reverts back to the [[Mass Combat#3 Allied Turn|Allied Turn]], until the end of the Mass Combat. So on and so fourth.

### 6: End of Combat
A Mass Combat is ‘ended’ when one faction in the Mass Combat chooses to cut their loses and retreat (any [[Mass Combat#Units|Unit]] not in the [[Mass Combat#1 Deployment|Deployment]] area when this is done is lost to the enemy). The Mass Combat may also be ended if all of the Units on one side are defeated, if the Deployment area for one side is completely overrun with enemy Units, or if the situation is so untenable for one side that victory for the other is essentially guaranteed.

## Battle Commander
The Battle Commander refers to the [[Character]] and or [[Player]] who is deciding the strategy for the Mass Combat, ie, the Character who chooses which [[Mass Combat#Units|Units]] move where.

This is distinct from the [[Mass Combat#Unit Commanders|Unit Commander]].

## Narrative Dice in Mass Combat
Just like in every other part of [[Echoes of the Departed]], [[Narrative Dice]] is used in Mass Combat Checks to change the situation.

|                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 Advantage, or Triumph | Notice something that could be beneficial in the Mass Combat if taken advantage of.<br><br>Add a [[Boost Dice\|Boost Die]] the next allied check<br><br>The [[Mass Combat#Units\|Unit]] notice a key feature of the enemy force (an enemy officer, weapon emplacement, etc.) that the Unit could benefit from separately.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2 Advantage, or Triumph | Add a [[Setback Dice\|Setback Die]] to another [[Skill Checks\|Check]] in the scene<br><br>Add a [[Boost Dice\|Boost Die]] to another [[Skill Checks\|Check]] in the scene<br><br>All individual [[Character]] that are a part of or nearby to the Unit heal 1 [[Strain]] per 2 [[Advantage]].<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3 Advantage, or Triumph | Recover 1 [[Strain]] for the active [[Mass Combat#Units\|Unit]]  per 3 [[Advantage]].<br><br>[[Dice Upgrade\|Upgrade]] the positive [[Dice Pool\|Dice]] of a friendly [[Skill Checks\|Check]].<br><br>Cause the [[Mass Combat#Unit Commanders\|Commander]] of the targeted [[Mass Combat#Units\|Unit]] to be unable to provide any bonuses on the next Mass Combat turn.<br><br>The active [[Mass Combat#Units\|Unit]] ignores dangerous battlefield conditions for the next turn.<br><br>Cause the defending [[Mass Combat#Units\|Unit]] to retreat to a viable space that you choose when defeated.                                                                                                                                                                                                                                                                  |
| 4 Advantage, or Triumph | Change the environment beneficially, such as a [[Mass Combat#Units\|Unit]] finding a way to cause a landslide to create a bridge across a river.<br><br>Damage, or find a way to destroy, an enemy fortification.<br><br>The [[Mass Combat#Unit Commanders\|Unit Commander]] of the acting force makes a rousing speech, or enacts a cunning plan. Each [[Mass Combat#Units\|Unit]] under their command adds a [[Boost Dice\|Boost Die]] to their next [[Skill Checks\|Check]].<br><br>When [[Mass Combat#Attack\|attacking]], the retreating enemy [[Mass Combat#Units\|Unit]] retreats two spaces instead of one, and the active Unit may move two spaces.                                                                                                                                                                                                           |
| 5 Advantage, or Triumph | Move an additional [[Mass Combat#Units\|Unit]] on the [[Mass Combat#3 Allied Turn\|allied turn]]. <br><br>If the active [[Mass Combat#Units\|Unit]] does not have a [[Mass Combat#Unit Commanders\|Unit Commander]], one brave soldier takes initiative and becomes a Commander permanently.<br><br>Reinforcements arrive, in the form of two additional [[Mass Combat#Units\|Units]] being able to be Deployed immediately, or another [[Mass Combat#Units\|Unit]] being added to the reserve.<br><br>Give the [[PC\|PCs]] an opening they can exploit separately for a major advantage.                                                                                                                                                                                                                                                                              |
| Two Triumphs            | Kill (or [[Incapacitated\|incapacitate]] if an important [[Character]]) the [[Mass Combat#Unit Commanders\|Unit Commander]] of the targeted [[Mass Combat#Units\|Unit]].<br><br>Destroy a [[Mass Combat#Units\|Unit]], permanently.<br><br>Cause a major event visible from most of the battlefield that rallies the troops. All allied [[Mass Combat#Units\|Units]] heal 4 [[Strain]].                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1 Threat, or Despair    | The active Unit suffers 1 [[Strain]] per [[Threat]].<br><br>A temporary advantage ends early.<br><br>If the targeted [[Mass Combat#Units\|Unit]] is nearby to the [[PC\|PCs]], members of the Unit are able to peel off and intercept the PCs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2 Threat, or Despair    | This [[Mass Combat#Units\|Unit]] becomes occupied and cannot be moved next turn.<br><br>Add a [[Setback Dice\|Setback Die]] to the next allied Unit’s check.<br><br>Add a [[Boost Dice\|Boost Die]] to the next [[Mass Combat#Attack\|Attack Check]] targeting the active [[Mass Combat#Units\|Unit]].<br><br>All individual [[Character\|Characters]] that are a part of or nearby to the [[Mass Combat#Units\|Unit]] suffer 1 [[Strain]] per 2 [[Threat]].                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3 Threat, or Despair    | An environmental effect occurs that is bad for the active faction, such as smoke covering their targets.<br><br>Due to a costly battle, the attacking [[Mass Combat#Units\|Unit]] suffers just as [[Damage]] as they inflict on the defending Unit.<br><br>On a successful [[Skill Checks\|Check]], the benefits of the space captured by the active [[Mass Combat#Units\|Unit]], such as a bunker, was lost or destroyed in the fighting.<br><br>The enemy is able to move an additional [[Mass Combat#Units\|Unit]] on their turn.                                                                                                                                                                                                                                                                                                                                   |
| 4 Threat, or Despair    | Change the environment negatively, such as a dam breaking and causing a stream to form between the active [[Mass Combat#Units\|Unit]] and their targets.<br><br>A vital piece of equipment near or in the active [[Mass Combat#Units\|Unit]] is destroyed.<br><br>The active [[Mass Combat#Units\|Unit]] suffers a major loss that is visible from the whole battlefield. The next check of every Unit adds a [[Setback Dice\|Setback Die]].<br><br>Communications and messengers between the [[Mass Combat#Battle Commander\|Battle Commander]] and a [[Mass Combat#Units\|Unit]] are cutoff. Until that Unit takes an [[Actions\|Action]] to re-establish communication, they are unable to act.                                                                                                                                                                     |
| 5 Threat, or Despair    | On a successful [[Mass Combat#Attack\|Attack Check]] , the enemy Unit either suffers [[Damage]] but does not retreat, or retreats but does not suffer Damage.<br><br>All individual [[Character]] that are a part of or are nearby to the Unit suffer a [[Critical Injury]].<br><br>Communications and messengers between [[Mass Combat#Battle Commander\|Battle Commander]] and a [[Mass Combat#Unit Commanders\|Unit Commander]] are cutoff. Until every Unit under the command of that Commander takes an [[Actions\|Action]] to re-establish communication, they are unable to act.<br><br>An entire enemy [[Mass Combat#Units\|Unit]] rushes towards the [[PC\|PCs]] and intercepts them.<br><br>The active [[Mass Combat#Units\|Unit]] becomes Imperiled. If the next [[Mass Combat#Attack\|Attack Check]]  against them is successful, the Unit is annihilated. |
