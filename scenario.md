Artifact list (Chapters):
1. Almighty Flag
2. Magical Anchor
3. 

## Intro. Chapter description:

You play as a wizard, who wants to get a magical staff with great power.
To wield it, he needs to find artifacts, that will help him to summon it and prove yourself
worthy of it.

**Picture:** a book with a staff and some characteristics.

The book where you found it mentions a dungeon with the first artifact, this is where you go.
You pick up your stuff and glance at the scrolls you found near the book. 
Better take them with you if they'll be needed.

**Picture:** seven scrolls ( \d, \s, \w, \D, \S, \W, .)

## Chapter 1. Description:

You enter the dungeon, equipped with your torch and knowledge. The keepers inside are unrested,
better not to attract their attention. 

**Picture:** dungeon entrance

### Level 1. You shall not pass. Description:

You are going down the stairs, see a bridge with a _space_ in between. In order to proceed, you 
have to get rid of them. Use one of the spells on the scrolls to pass.

**Scene:** divs that form a bridge and then flip to repair it

Regex: \s

### Level 2. What is dead may never die. Description:

Unfortunately the sounds of the bridge awaken the skeleton inside.
You have to put them to rest, so you can proceed. You notice,
that skeleton has a _number_ encrypted on his forehead. Perhaps
you can hit him with one spell?

**Scene:** emodji skeleton, animated fade out when correct

Regex: \d

### Level 3. ~~Rider~~ at the gates

After skeletons are put to rest, you see a gate with a "d" symbol and a control panel nearby.
Seems that the control panel is linked to the stones near ceiling.
The stones have numbers and symbols on them. Perhaps this gate likes 
_numbers_, like the skeletons around?
What if we get rid of all symbols, that are not digits?

**Scene:** gates gif and stones for highlighting?

Regex: \D

### Level 4. Sike

The gates shaked and opened but damn it! There is another door beside 
them. 

You see a cyphered tablet with symbols:

O*PENP"LEA@(SE

Maybe if we clear the tablet, it will open? 
Let's clean it with spells. Clearing one by one is annoying, if only there 
was a way to make it faster...

**Scene:** tablet
TWEAK: multiple attempts?

Regex: \W

### Level 5. I'm in

The second door opened and you find yourself in a spacious room. Another gate
in front of you and a large cup. You come up to it and see the title:
Sacrifice something, anything will do. 

Hm. All of your possessions are in a sack, you have to take out anything and
put it on the altar.

**Scene:** Some things with emodjis and different symbols attached to them.
Regex: '.'

### Level 6. Touchy

Okay, you sacrificed your cotton ear buds and slowly walked into small
room that looks like an elevator. On the wall you see a set of buttons,
one of them marked with a letter. Touch it. 

**Scene**: Blocks with spaces and one with a letter
Regex: \S

### Level 7. Almost there...

The elevator started slowly going down. Thankfully it stops at some point
and you are free to leave. You find yourself in a deep cave, standing on the edge.
Across the vast deep you see an entrance to the hall with a pedestal. The Almighty Flag!
It's there. How do we get across?
You see a hook on the ceiling, perhaps you can swing your magical lasso there
and make this jump?

Scene: ---s----

Regex: \w

### Level 8. The Almighty Flag
Phew, that jump was surely not a piece of cake, but the reward is here.
The Almighty Flag is finally in your hands, and you can feel its power and 
knowledge. Even though it is a bit smaller than you expected.

You take a look at the near table with some papers and find some scrolls,
they might come handy. Among dusted and almost dissolved scrolls you see 
a colorful map, that reveals the location of the next artifact - Magical
Anchor. Of course, it is buried deep in the sea...
Time to head back home and think about the next move.

There is a noticeable door in the end of the room. The door has
numbers and letters and the same d symbol.

Regex: \d/g