---
aliases:
  - Spellbook
tags:
  - RPGSessions
  - Guide
---
The Spellbook is a feature in [[RPGSessions]] that allows you to add and manage [[Spell Creation|Spells]] used in [[Echoes of the Departed]], adding them and modifying them on your [[Character Sheet]]. It is primarily designed for the [[Genesys|Genesys RPG]]’s default magic system, and so does not perfectly conform to the rules of the EotD [[Spell Creation]] system, but you may still find it better than the other two options of adding Spells as [[Weapons]], or simply adding as text in the “Notes” section.

The following are some steps on how to use the RPGSessions Spellbook, and then I will go into more detail on how it works with Echoes.

You should read the [[Spell Creation]] system and wrap your head around how it works before getting started on the Spellbook, as this system is somewhat confusing.

#### Step 1 - Enable the Spellbook
First, to use it, you must enable the Spellbook on a [[Character Sheet]] so it appears. 

After copying a template [[Character Sheet]], open the sheet and look for the button pencil button in the top-right corner.

After clicking on it, click on the green “Customize Sheet” button near the top-left.

That will open up a modal to modify the Character Sheet. In the bottom-left corner of the modal, you will see a variety of tick-box options to add various auxiliary mechanics to your sheet. The furthest bottom-left of these is called the *Spellbook*. Tick its corresponding box to enable it.

Once you’ve done that, hit the blue “update” button in the bottom-right of the modal. Hit the blue “Save” button where you initially hit the pencil button earlier.

#### Step 2 - Add Spell
Scroll down to near the bottom of your Character sheet, just above the “Notes” section. You should see the “Spellbook” section if it was properly enabled previously. Hit the blue “Add Spell” button just below it.

Assuming you’ve set up the [[RPGSessions Data Library|Data Library]], this will show you some example [[Spell Creation|Spells]] that you can add to your sheet to peruse and to understand how the system works. However, we’ll run you through how to make your own Spells, as that is the core of the magic system in Echoes of the. Departed.

After hitting “Add Spell”, ***do not hit “Add Blank Spell”***. I’m aware this doesn’t make much sense, however Blank Spells added via this method tend to have problems regarding [[Qualities]]. Instead, pick the “*Add New Spell*” option from the list. The “*Add New Spell*” option is blank and provides a blank slate for you to make your own. Hit the “Add” button next to its name.

The “New Spell” template does have a single [[Modifiers or Qualities (RPGSessions)|Quality/Modifier]]. It is one designed specifically for [[Attack|Attack Spells]]. If you are adding an Attack Spell, **do not remove it**. Even if you aren’t, other Spell types have no [[Damage]] rating so it should have absolutely no effect on any Spell aside from Attack Spells, which it is designed to be on for your own convenience to make adding Spells easier.

Once this is done, it will appear in your Spell list. Hit the “…” button next to the Spell’s dice pool, then hit the “edit” button which appears.

From there, you can edit the Spell. Give it a unique name, but don’t edit it beyond that yet; we need to do something first.

Once you’ve made the Spell and given it a new name, make sure to hit the blue “Save” button in the bottom-right corner of the modal. After this, hit the “…” button and hit the “Save as New” option which appears. **This is very important.** It makes sure your newly-created Spell is saved as a new Spell in your own personal [[RPGSessions Data Library|Data Library]], as opposed to just being a modified copy of the blank “New Spell” template which could be overwritten later on to match the blank template if you make a mistake. Once you hit “Save as New”, it becomes saved as a new entry with its own unique identity and version.

Then, edit it your heart’s content! Technically you can edit it first and then hit “Save as New”, but for the tutorial, we’re being extra safe so you don’t forget.

The following steps here in the article are explanations on the various fields to edit when adding a Spell, and how to add an [[Echoes of the Departed]] Spell, made using its Spell system, to the Spellbook. We’ll be using an [[Attack]] Spell as an example, because they have the most variables and are also an easy example. If you’re trying to add a Spell of a different type or Base Power but can’t find it, see [[RPGSessions Spellbook#Spell Types & Base Powers|Spell Types & Base Powers]], but only after you have read this part.

##### Spell Action
Leave this as “Attack” for now. A later section, [[RPGSessions Spellbook#Spell Types & Base Powers|Spell Types & Base Powers]], explains how to represent the other [[Spell Creation|Base Powers]] in Echoes of the Departed in the Spellbook.

##### Difficulty
When creating an [[Attack]] Spell, *put the number of [[Difficulty Dice]] that a [[Attack Check|Check]] at maximum Range of this [[Spell Creation|Spell]] would require.* So if the maximum range of the Spell is [[Short Range]], put 1 in the [[Difficulty]] field. If the maximum range is [[Long Range|Long]], put 3 in the Difficulty field.

##### Strain Cost
Almost all Spells in [[Echoes of the Departed]] cost 2 [[Strain]]. Leave this at 2 in almost all cases. Some exceptions, such as non-Spellcasters using [[Spiritual Arts]], exist.

##### Range
Set this as the default [[Range Bands|Range]] of the [[Spell Creation|Base Power]] you are using. For example, [[Endow]] has a default Range of [[Engaged Range|Engaged]]. [[Attack]] has a default Range of [[Short Range]], so we’ll put Short Range.

Adding [[Increase Range (Modifier)|Increase Range]] later as a [[Modifiers or Qualities (RPGSessions)|Quality/Modifier]] will automatically increase the Range Band of the Spell by one per rank of Increase Range, so the Range value you put for your Spell should *always* be the default Range of the Base Power.

##### Damage Bonus
This is the amount of [[Damage]] added to your Spell. RPGSessions adds this + your [[Willpower]] rating to determine the Damage of the Spell. This is not how it is done in [[Echoes of the Departed]]. Instead, it is your Damage Bonus + ranks in [[Force]] + your [[Willpower]] rating.

This is why, for [[Attack|Attack Spells]], the “New Spell” template has the “Spell Damage Increase from Force” [[Modifiers or Qualities (RPGSessions)|Quality/Modifier]] automatically. It adds [[Damage]] to your Spell equal to your [[Character]]’s ranks in Force. If you *aren’t* adding an Attack Spell, it has no effect; non-Attack Spells don’t have any Damage rating at all for it to modify.

The only other thing that can increase Spell [[Damage]] in Echoes of the Departed is the Increase Power [[Modifiers|Modifier]]. However, whenever you add the Increase Power [[Modifiers or Qualities (RPGSessions)|Quality/Modifier]] to your Spell, it *automatically* increases the Damage of the Spell by an amount equal to your Increase Power rating.

Long-story short, this means you should *always* leave Damage Bonus at 0, unless you have a Spell that behaves very abnormally.

##### Critical Rating
Almost all Attack Spells, with the exception of those benefitting from [[Crucial Casting]], have a [[Critical Rating]] of 3. So put 3 here.

##### Requires Concentration
Tick if the Spell is a [[Spell Creation#Long-Lasting Powers, Curses and Blessings|Long-Lasting Power]]. See the [[RPGSessions Spellbook#Concentration?|Concentration?]] section further down for more information.

##### Qualities
Add the [[Modifiers]] of your [[Spell Creation|Spell]] here. [[Accurate (Passive) (Quality)|Accurate]], [[Guided (Modifier)|Guided]], etc. Since most Modifiers simply add the same effect as their [[Qualities|Quality]] version, please just add the Qualities from the Echoes of the Departed [[RPGSessions Data Library|Data Library]] kit in this section.

Let’s say the Spell has [[Increase Damage (Modifier)|Increase Damage]] 2 and [[Accurate (Modifier)|Accurate]] 1. First, hit “+ Add Quality”. 

In the resulting modal, search “Accurate”. 

When it appears, hit “Select”.

Then search “Increase Damage”. When you see it, it the + button next to “Select” so that you increase it from Increase Damage 1 to Increase Damage 2, which is what we’re trying to add.

Then, hit “Select” again.

There you go—you’ve added the Spell Modifiers/Qualities!

##### Additional Effects
This section should be ignored. It does not correspond to anything in the [[Echoes of the Departed]] [[Spell Creation]] system.

##### Description & Mechanical Effect
Add your own description of the Spell. If you know what it does (such as it being simple like an [[Attack]] [[Spell Creation|Spell]], or by having tested it), leave it in the “Mechanical Effect” section. If you don’t know, put your theory or your hypothesis in the “Mechanical Effect” section.


#### Step 3 - Game Table Test
That’s it! Go to the [[Game Table]] and put your [[Character]] there, and then test the Spell. Do this by clicking on the [[Dice Pool]] in the Spellbook area of your Character Sheet to open the roll modal. When you roll/cast it, it should automatically deduct 2 [[Strain]] from your Character!

The Spellbook and its Spells should work now, and be a fairly good way of managing Spells once you get the hang of it.

Read on for information on how to translate Echoes Spells to RPGSessions, as there are some cases which need addressing.


## Spell Discrepancies
As mentioned before, not everything in the [[Echoes of the Departed]] Spell system lines up or can be translated accurately to the Spellbook. Foremost among these are the [[Difficulty]] and the Spell Action types, or as they’re known in Echoes, the Base Powers.

First, the Difficulties. In EotD, the difficulties of Spells is very simple. It acts essentially like any other [[Skill Checks|Skill Check]] does, and some Spells which target other people act like [[Attack Check|Attack Checks]].

That is not the case with the RPGSessions Spellbook, which, being made for the [[Genesys Core Rulebook]]’s magic system, is a little more complicated to input. For the sake of simplicity, let us split all [[Echoes of the Departed]] [[Spell Creation|Spells]] into two categories: either their [[Difficulty]] is based on distance (ie, the [[Range Bands]] between the caster and the target), or on **set Difficulties**, such as [[Endow]] which is listed as essentially always being of [[Difficulty|Average]] (2p) [[Difficulty]]. 
### Difficulties
#### Range-Based Difficulties
Firstly, there are *two* relevant values here in the Spell modal. Difficulty and [[Range Bands|Range]]. Range, for the purposes of [[Echoes of the Departed]], should *always* be the Maximum Range of a Spell. For example, you created an [[Attack]] Spell with [[Increase Range (Modifier)|Increase Range]] so that it has a maximum range of [[Medium Range]]? Put “Medium Range” in the modal.

Then, in [[Difficulty]], you should put the number of [[Difficulty Dice]] associated with that Range. Remember that each Range Band, in their article, lists the Difficulty associated with it. For example, [[Long Range]] is associated with [[Difficulty|Hard]] (3p) Difficulty, which is equivalent to 3 Difficulty Dice. So, for reference:

If Range is [[Engaged Range|Engaged]], list Difficulty as **2**; if Range is [[Short Range|Short]], list difficulty as **1**; if Range is [[Medium Range|Medium]], list Difficulty as **2**; if Range is [[Long Range|Long]], list Difficulty as **3**; if Range is [[Extreme Range|Extreme]], list Difficulty as **4**.

#### Set Difficulties
So that works for Range-based [[Spell Creation|Base Powers]], but what about Difficulties that are static? For example, [[Endow]] Spells, on a willing target, almost always have a Difficulty of [[Difficulty|Average]] (2p). You don’t want that to scale with distance.

Although it is a little unsatisfactory, the best way to do this is to simply set the Range to be the maximum Range of the Spell, set the Difficulty to be what the Spell usually is (so list Endow as 2), and then just ignore the Range-picking modal. Just hit “Skip” or “Cast as-is” (which sometimes appears as “Build pool”) to go directly to the rolling modal. Before rolling, double-check to make sure the amount of [[Difficulty Dice]] is correct for the [[Skill Checks|Check]] you’re undertaking. There is unfortunately no real way to automate this. In some cases, you may have to remove Difficulty Dice, or add additional ones, after using the Range-select modal, as it is entirely superfluous to Spells with set Difficulties.

#### Opposed Checks
There is one more type of Difficulty, which is when a Spell is an [[Opposed Check]] due to it directly affecting an unwilling, significant [[Character]].

The Spell modal has no automation for this. However, rolling [[Force]] as a [[Skill Checks|Skill Check]] does. It is suggested, until an Opposed Check modal is added for the Spellbook, that you simply click on your “Force” [[Skills|Skill]] in the Skills section, and then select the [[Character]] you’re targeting from the top of the dice rolling modal.

It will then ask you what Skill your Check should be opposed by. Usually, this is mentioned in the rules for a Spell or type of Check. If multiple Skills are mentioned as Skills which can oppose a type of Spell or Check, the Skill that is more beneficial to the defender must always be picked. If you’re unsure of which one that would be, ask [[The GM|the GM]] and they will tell you which one to roll.

You can see more information on how to do an [[Opposed Check]] with any Skill in the [[Opposed Check]] article, which includes pictures.

### Spell Types & Base Powers
In the Spellbook, when you add a [[Spell Creation|Spell]], it asks you what “Spell Action” it is. You can add custom “Spell Actions”; unfortunately, I cannot share them via the [[RPGSessions Data Library|Data Library]], so you will have to make your own. This is very simple to do, however.

When editing a Spell, click on the drop-down menu just below where it says “Spell Action”. This will open up a list. Scroll to the bottom of the list, where it says “+ New Custom Action”. Click on that.

A modal to add a new custom Spell Action will appear. First, give it the right name. Make sure it’s one of the Base Powers from Echoes, of course. If you’re adding a [[Relocate]] Spell for instance, name it “Relocate”.

Then you must select what it “Behaves Like”. This option, as far as I know, has no effect unless you pick “Attack”. To be safe, you can pick one that seems close. For example, [[Manipulate]] can “behave like” Move, [[Life]] like Heal, [[Relocate]] like Area, [[Invoke]] like Conjure, [[Endow]] like Augment, [[Telepathy]] like Mind, [[Prophecy]] like Predict, [[Enchantment]] like Transform, etc.

The next parameter, “Base Difficulty”, does not really matter. I would suggest setting it to 0 in every case. See the above section on Spell Difficulties for why the Difficulty system in general for the Spellbook is better bypassed in most situations.

The final parameter, “Base Range”, should be the Default Range of the Base Power you’re adding. For example, you’re adding [[Telepathy]], list the Base Range as [[Long Range|Long]]. This just means that when you make a new Spell with Telepathy as the Base Power, it will (usually) automatically assume the Range is Long. 

But, really above all, the important part is that you get the name right, and that unless it’s an [[Attack]] Spell, you do not make it behave like an Attack Spell.

### Concentration?
When adding a Spell in the Spellbook, there is a box you can tick which asks “Requires Concentration”.

This is another part of the [[Genesys]] Magic System, however it is relevant to us. If a Spell is a [[Spell Creation#Long-Lasting Powers, Curses and Blessings|Long-Lasting Power]], ie it is an [[Endow]] or [[Invoke]] [[Spell Creation|Spell]], then tick the box “Requires Concentration” to represent this. Do *not* tick it just because it requires [[Prepare (Passive) (Quality)|Prepare]] to use, or something similar like that.