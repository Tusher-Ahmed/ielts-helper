/* ============================================================
   IELTS Academic Reading — 15 full tests (3 passages · 40 Q each)
   Tests 1–10 rewritten to full exam standard (matching hard tests 11–15):
   P1 headings + TFNG + summary · P2 MCQ + matching + completion ·
   P3 YES/NO/NG + sentence-endings + short answer.
   Topics chosen NOT to overlap with mock-data.js.
   Q shapes: {head?,t:'mc',q,o:[...],a:'B'} | {t:'tf',a:'true|false|not given'} |
             {t:'yn',a:'yes|no|not given'} | {t:'txt',q,a:'x|alt'}
   ============================================================ */
const READING = [
 {
  "name": "Lighthouses · The Bicycle · Laughter",
  "blurb": "Engineering · History · Psychology · 🔴 Exam level",
  "passages": [
   {
    "title": "Lighthouses",
    "text": "<p><b>A</b> For as long as people have gone to sea, they have feared the hidden dangers of the coast, where rocks and reefs have wrecked countless ships. To warn sailors away, communities built lighthouses — tall towers that shine a bright light far out to sea. The idea is very old: the most famous of the ancient lights, the great Pharos of Alexandria, was built over two thousand years ago and counted among the seven wonders of the ancient world, guiding ships into a busy harbour for centuries before earthquakes finally destroyed it.</p>\n<p><b>B</b> For most of their history, the great weakness of lighthouses was the light itself. Early towers simply burned wood or coal in an open fire at the top, producing a weak, smoky and unreliable glow that was easily swallowed up by the very fog in which ships were in the greatest danger. A first improvement came in the eighteenth century, when open fires were replaced by enclosed oil lamps fitted with polished mirrors, which gathered the scattered light and threw more of it towards the sea.</p>\n<p><b>C</b> The decisive breakthrough came in 1822, from the French engineer Augustin-Jean Fresnel. His invention, the Fresnel lens, used concentric rings of precisely shaped glass to bend almost all of a lamp's scattered light into a single, concentrated beam. The effect was extraordinary: a small flame could now be seen more than thirty kilometres out to sea. So successful was the design that Fresnel lenses were fitted in lighthouses all over the world and remained in everyday use for well over a century.</p>\n<p><b>D</b> A powerful light, however, created a new problem: along a busy coast, how was a captain to know which lighthouse he was looking at? The solution was to give each lighthouse its own distinctive pattern of flashes — some shining steadily, others flashing at fixed intervals. This unique signature, known as the light's 'character', was recorded on every sea chart, so that a navigator, by carefully timing the flashes, could identify exactly which light he had sighted and so fix his position.</p>\n<p><b>E</b> Traditionally, every lighthouse depended on a keeper who lived in or beside the tower and tended the light through every night and in all weathers. It was a famously lonely and demanding life, and a keeper on an isolated rock might be cut off by storms for weeks at a time. During the twentieth century, however, machines took over these tasks one by one, until today almost every lighthouse is fully automatic, monitored electronically from a distant control room, and the last of the keepers have gone.</p>\n<p><b>F</b> Some argue that lighthouses are now obsolete, since ships find their way by satellite navigation, which can fix a vessel's position to within a few metres. Yet the old towers have not gone dark. Many are deliberately kept in working order as a reliable backup, for satellite signals can fail or be jammed, whereas a light that a sailor can see with their own eyes needs no electronics at all. Others have found new life as museums or unusual holiday homes, treasured landmarks that still stand guard over the coast.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> The struggle to be seen<br><b>ii</b> A revolution in optics<br><b>iii</b> The ancient roots of a warning light<br><b>iv</b> Telling one light from another<br><b>v</b> The end of a way of life<br><b>vi</b> New purposes in a satellite age<br><b>vii</b> How a lighthouse is built<br><b>viii</b> The most famous keepers</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Early lighthouse fires gave a bright and dependable light.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Every lighthouse flashes its light in exactly the same way.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "The Fresnel lens was more expensive to make than earlier mirror systems.",
      "a": "not given"
     },
     {
      "t": "tf",
      "q": "Some lighthouses are kept in use because satellite systems can sometimes fail.",
      "a": "true"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">beam &middot; character &middot; fog &middot; harbour &middot; keeper &middot; mirrors</div>",
      "t": "txt",
      "q": "Before modern optics, the light of a lighthouse could easily be lost in ______.",
      "a": "fog"
     },
     {
      "t": "txt",
      "q": "The Fresnel lens of 1822 bent the light into a single concentrated ______.",
      "a": "beam"
     },
     {
      "t": "txt",
      "q": "To avoid confusion, each lighthouse was given its own pattern of flashes, called its ______.",
      "a": "character"
     }
    ]
   },
   {
    "title": "The Bicycle",
    "text": "<p>The bicycle, one of the most efficient machines ever devised, took nearly a century to reach its familiar modern form. Its earliest ancestor appeared in 1817, when the German inventor Karl von Drais built a wooden two-wheeled 'running machine'. It had no pedals at all; the rider simply sat astride it and pushed along the ground with their feet. A fashionable toy for wealthy young men, who nicknamed it the 'dandy horse', it was too awkward and costly for ordinary use, and the craze soon faded.</p>\n<p>Pedals arrived in the 1860s, when French makers fixed them directly to the front wheel of a machine known as the velocipede. Built of iron and wood and ridden over cobbled streets, it shook its rider so violently that it earned the nickname 'boneshaker'. Because the pedals turned the front wheel directly, the only way to travel faster with each turn of the pedals was to make that wheel bigger — and so was born, in the 1870s, the extraordinary 'penny-farthing', with its enormous front wheel and tiny rear one. It was fast, but, perched high above the ground, the rider risked a serious fall, and only fit, daring young men could manage it.</p>\n<p>The machine that finally opened cycling to everyone was the 'safety bicycle', designed in 1885 by the Englishman John Kemp Starley. Instead of driving the front wheel, it used a chain to drive the rear wheel, which allowed two wheels of equal, sensible size and placed the rider much closer to the ground. Three years later, in 1888, John Dunlop added the air-filled, or pneumatic, tyre, and at last the bicycle was safe, comfortable and, before long, cheap. Its basic design has scarcely changed since.</p>\n<p>The social effects were profound. For the first time, ordinary working people had cheap personal mobility, able to travel where and when they wished without a horse or a railway ticket. The bicycle is often linked, in particular, with greater freedom for women, who used it to escape the confines of the home and even helped bring about more practical styles of dress. Today, valued afresh for health, for crowded cities and for the environment, the humble bicycle is enjoying yet another revival.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "The earliest form of bicycle, built in 1817, was:",
      "o": [
       "fitted with pedals on the front wheel",
       "moved by the rider pushing their feet on the ground",
       "designed mainly for poor working people",
       "built with two wheels of equal size"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The penny-farthing was given a very large front wheel in order to:",
      "o": [
       "make the machine safer to ride",
       "reduce the cost of building it",
       "achieve greater speed for each turn of the pedals",
       "allow it to carry heavier loads"
      ],
      "a": "C"
     },
     {
      "t": "mc",
      "q": "The safety bicycle differed from the penny-farthing chiefly because it:",
      "o": [
       "was noticeably faster",
       "drove the rear wheel by means of a chain",
       "had a much larger front wheel",
       "was made entirely of wood"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The passage says the bicycle is particularly associated with:",
      "o": [
       "the decline of the railways",
       "use by the military",
       "greater freedom for women",
       "the invention of the motor car"
      ],
      "a": "C"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each achievement with the correct person, <b>A</b>, <b>B</b> or <b>C</b>. (A person may be chosen more than once.)<div class=\"bank\"><b>A</b> Karl von Drais<br><b>B</b> John Kemp Starley<br><b>C</b> John Dunlop</div>",
      "t": "txt",
      "q": "built a machine with no pedals that riders pushed along with their feet",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "designed the safety bicycle, driven by a chain to the rear wheel",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "added the air-filled tyre that made riding far more comfortable",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "created the design from which the modern bicycle is still recognisable",
      "a": "B"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>NO MORE THAN TWO WORDS OR A NUMBER</b> from the passage.",
      "t": "txt",
      "q": "The 1860s velocipede was nicknamed the '______' because of its rough ride.",
      "a": "boneshaker"
     },
     {
      "t": "txt",
      "q": "A rider of the penny-farthing risked a serious ______.",
      "a": "fall|falls"
     },
     {
      "t": "txt",
      "q": "The safety bicycle placed the rider much closer to the ______.",
      "a": "ground"
     },
     {
      "t": "txt",
      "q": "The air-filled tyre was added by John Dunlop in the year ______.",
      "a": "1888"
     },
     {
      "t": "txt",
      "q": "For the first time, the bicycle gave ordinary people cheap personal ______.",
      "a": "mobility|transport"
     }
    ]
   },
   {
    "title": "The Science of Laughter",
    "text": "<p>Laughter is one of the most universal of all human behaviours. It is found in every known culture, and babies begin to laugh at around four months old, long before they can speak a single word. This has led many researchers to conclude that laughter is far older than language — an ancient form of communication inherited from our distant ancestors.</p>\n<p>What surprises most people is that laughter has very little to do with jokes. When psychologists have secretly recorded ordinary conversations, they have found that most laughter follows perfectly unremarkable comments — 'I'll see you later', or 'Where have you been?' — rather than anything genuinely funny. Laughter, it turns out, is overwhelmingly social: people are far more likely to laugh in the company of others than when they are alone, even when reading or watching exactly the same amusing material. Its main purpose seems to be not to signal amusement but to strengthen the bonds between people.</p>\n<p>Laughter is also remarkably contagious. Simply hearing someone else laugh tends to make us laugh too, which is why television comedies have long added recorded 'laugh tracks', and why fits of helpless giggling can spread through a classroom. The brain, it appears, is wired to respond almost automatically to the sound of laughter in others.</p>\n<p>There are physical effects as well. Laughing releases endorphins, the body's natural painkillers, which can genuinely reduce the sensation of pain and leave us feeling relaxed and at ease. Nor is laughter unique to human beings: great apes make panting, laughter-like sounds during play, and even rats have been found to produce high-pitched chirps when they are gently tickled.</p>\n<p>Taken together, these findings suggest that we have misunderstood laughter for a very long time. Far from being simply a reaction to humour, laughter is best understood as a social signal — a way of telling those around us that all is well, that we mean no harm, and that this is a safe and playful moment to share. It is, in a sense, the glue that has helped hold human groups together since long before anyone told the first joke.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "Laughter probably developed before human language.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "People laugh mainly in response to jokes.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Laughter is equally common whether we are alone or with others.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "The sound of other people laughing can make us laugh.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Laughter has been observed in some animals.",
      "a": "yes"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> before they are able to speak.<br><b>B</b> even when nothing genuinely funny has been said.<br><b>C</b> by releasing the body's natural painkillers.<br><b>D</b> that a situation is safe and playful.<br><b>E</b> rather than a reaction to humour.<br><b>F</b> only among human beings.</div>",
      "t": "txt",
      "q": "Human babies begin to laugh",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "People very often laugh during ordinary conversation",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "Laughter can reduce the feeling of physical pain",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "Laughter may originally have signalled to others",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "The writer argues that laughter is mainly a social signal",
      "a": "E"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What does laughter release that can ease pain?",
      "a": "endorphins"
     },
     {
      "t": "txt",
      "q": "What kind of signal does the writer say laughter mainly is?",
      "a": "social|a social signal|social signal"
     },
     {
      "t": "txt",
      "q": "Which is older, according to the passage — laughter or language?",
      "a": "laughter"
     },
     {
      "t": "txt",
      "q": "Besides great apes, which animal is said to laugh when tickled?",
      "a": "rats|rat"
     }
    ]
   }
  ]
 },
 {
  "name": "Penguins · The Pencil · The Placebo Effect",
  "blurb": "Zoology · Everyday Objects · Medicine · 🔴 Exam level",
  "passages": [
   {
    "title": "Penguins",
    "text": "<p><b>A</b> Penguins are among the most instantly recognisable of all birds, and yet they cannot do the one thing most birds can: fly. Over millions of years, their wings have evolved into stiff, narrow flippers, useless for flight but superbly shaped for swimming. Beneath the water a penguin is transformed, 'flying' through the sea with astonishing speed and grace, twisting and turning after fish far more skilfully than it can ever move on land, where it waddles about awkwardly and upright.</p>\n<p><b>B</b> It is widely believed that penguins are creatures of ice and snow, but this is only partly true. Although the famous emperor and Adélie penguins do live on and around Antarctica, most of the world's eighteen or so penguin species live in far milder places — on the coasts of South America, southern Africa, Australia and New Zealand. One species even lives on the Galápagos Islands, right on the equator. Penguins, in short, are birds of the southern hemisphere in general, not of the frozen south alone.</p>\n<p><b>C</b> Those penguins that do live in the cold are wonderfully equipped to survive it. Their bodies are covered with a dense layer of short, overlapping feathers that traps a blanket of warm air against the skin, and beneath this lies a thick layer of fat, or blubber, for extra insulation. In the very coldest conditions, emperor penguins also huddle together in their thousands, constantly shuffling so that each bird takes a turn on the freezing outer edge, sharing and conserving precious body heat.</p>\n<p><b>D</b> Penguins are devoted and hard-working parents. The emperor penguin's efforts are especially remarkable: after the female lays a single egg, she returns to the sea to feed, leaving the male to balance the egg on top of his feet, beneath a warm fold of skin, all through the long and bitterly cold Antarctic winter. For around two months he neither eats nor leaves his post, until the female at last returns and the pair take turns to feed and guard the growing chick.</p>\n<p><b>E</b> Today, however, penguins face a growing list of dangers, almost all of them caused by human beings. Climate change is melting the sea ice on which some species depend, and warming the seas in ways that drive away their food. Overfishing removes the very fish they need to survive, while oil spills and plastic pollution take a further toll. As a result, several penguin species are now in serious decline, and a number of them are considered endangered.</p>\n<p><b>F</b> Everything about a penguin's body is built for life in the water. Its shape is smoothly streamlined, like a torpedo, to slip through the sea with the least possible effort. Its back is dark and its belly white — a pattern called countershading that hides it both from predators looking down into the dark water and from prey looking up towards the bright surface. And, unlike most birds, penguins have solid, heavy bones rather than hollow ones, which help them to dive deep instead of bobbing back to the surface.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> Keeping out the cold<br><b>ii</b> Not only creatures of the ice<br><b>iii</b> Birds that swim instead of fly<br><b>iv</b> Built for the water<br><b>v</b> Devoted parents<br><b>vi</b> A growing list of dangers<br><b>vii</b> How penguins were first discovered<br><b>viii</b> The largest penguin species</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "vi"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "iv"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Penguins use their wings to swim rather than to fly.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Every species of penguin lives in or near Antarctica.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "The emperor penguin is the largest of all the penguin species.",
      "a": "not given"
     },
     {
      "t": "tf",
      "q": "Emperor penguins huddle together mainly to keep warm.",
      "a": "true"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">blubber &middot; equator &middot; feathers &middot; flippers &middot; huddle &middot; streamlined</div>",
      "t": "txt",
      "q": "A penguin's wings have evolved into ______ for swimming.",
      "a": "flippers"
     },
     {
      "t": "txt",
      "q": "For insulation against the cold, penguins have a thick layer of fat called ______.",
      "a": "blubber"
     },
     {
      "t": "txt",
      "q": "In extreme cold, emperor penguins ______ together to share body heat.",
      "a": "huddle"
     }
    ]
   },
   {
    "title": "The Pencil",
    "text": "<p>Despite its common name, a 'lead' pencil contains no lead at all. The grey material that leaves a mark on the paper is in fact graphite, a soft, dark form of the element carbon, mixed with clay. The confusing name is a leftover from history: when a large deposit of unusually pure graphite was discovered at Borrowdale, in the north of England, in the sixteenth century, people mistakenly believed the strange black substance to be a kind of lead, and the name has stuck ever since.</p>\n<p>At first, this natural graphite was simply sawn into thin rods and wrapped in string or pushed into a wooden holder. The modern pencil was really born in 1795, when the Frenchman Nicolas-Jacques Conté worked out how to grind graphite into a fine powder, mix it with clay, and bake the mixture hard in an oven. His method had a great advantage: by changing the proportions, a maker could control the hardness of the line. More clay produced a harder, paler line; more graphite a softer, darker one. This is the origin of the familiar grades, from hard 'H' pencils to soft, black 'B' pencils.</p>\n<p>The thin core is then glued inside a wooden casing, traditionally made from fragrant cedar, which is soft enough to sharpen easily yet strong enough to protect the brittle graphite within. For centuries the pencil ended there, and mistakes had to be scratched out with a knife. Then, in the middle of the nineteenth century, an American named Hymen Lipman patented a pencil with a small rubber eraser fixed to one end, so that errors could be rubbed away in an instant.</p>\n<p>Simple as it is, the pencil remains extraordinarily useful. It needs no ink and never dries up, it works upside down or in freezing cold where a pen would fail, and a single ordinary pencil, it is often claimed, can draw a continuous line more than fifty kilometres long before it is worn away.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "The writing core of a pencil is actually made from:",
      "o": [
       "lead",
       "graphite mixed with clay",
       "charcoal",
       "a thin strip of iron"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The word 'lead' is used for a pencil because people once believed graphite was:",
      "o": [
       "a kind of lead",
       "poisonous to touch",
       "extremely rare",
       "a metal from France"
      ],
      "a": "A"
     },
     {
      "t": "mc",
      "q": "Conté's method was important above all because it allowed makers to:",
      "o": [
       "produce pencils more cheaply",
       "control the hardness of the line",
       "do away with the wooden casing",
       "add bright colours"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The hardness of a pencil's line depends on the amount of:",
      "o": [
       "graphite alone",
       "cedar",
       "clay",
       "rubber"
      ],
      "a": "C"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each fact with the correct place or person, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> Borrowdale, England<br><b>B</b> Nicolas-Jacques Conté<br><b>C</b> Hymen Lipman</div>",
      "t": "txt",
      "q": "where a large deposit of very pure graphite was first discovered",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "developed the method of mixing powdered graphite with clay",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "patented a pencil with an eraser attached to the end",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "made it possible to manufacture pencils of different grades",
      "a": "B"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>NO MORE THAN TWO WORDS OR A NUMBER</b> from the passage.",
      "t": "txt",
      "q": "Graphite is a soft, dark form of the element ______.",
      "a": "carbon"
     },
     {
      "t": "txt",
      "q": "Conté developed his modern method in the year ______.",
      "a": "1795"
     },
     {
      "t": "txt",
      "q": "Adding more clay to the mixture produces a harder and ______ line.",
      "a": "paler|lighter|fainter"
     },
     {
      "t": "txt",
      "q": "The wooden casing of a pencil is traditionally made from ______.",
      "a": "cedar"
     },
     {
      "t": "txt",
      "q": "In the nineteenth century a rubber ______ was added to one end of the pencil.",
      "a": "eraser"
     }
    ]
   },
   {
    "title": "The Placebo Effect",
    "text": "<p>One of the strangest facts in all of medicine is that a treatment can work even when it contains no medicine at all. A placebo is a dummy treatment — most famously a sugar pill — that has no active ingredient whatsoever, and yet patients who take one often genuinely improve. This puzzling improvement is known as the placebo effect.</p>\n<p>The effect is so powerful and so reliable that it lies at the very heart of how new drugs are tested. In a proper trial, one group of patients is given the real drug while another is given an identical-looking placebo, and usually neither the patients nor even the doctors know who has received which. To be judged truly effective, a new drug must produce a clearly better result than the placebo — a surprisingly hard test that many promising drugs go on to fail.</p>\n<p>How can a mere sugar pill possibly help? Much of the answer seems to lie in expectation. When a patient firmly believes they are being treated, the brain appears to release its own natural chemicals, such as endorphins, which can genuinely reduce symptoms. This is why the placebo effect works best for complaints that are strongly influenced by the mind, such as pain, anxiety and nausea, and not at all for shrinking a tumour or mending a broken bone.</p>\n<p>Strangely, the small details of the treatment matter a great deal. Larger pills work better than small ones, brightly coloured pills better than plain white ones, injections better than pills, and an expensive treatment better than a cheap one; a calm, confident doctor strengthens the effect still further. Most surprising of all, researchers have found that some patients improve even when they are honestly told that they are taking a placebo, a practice now known as 'open-label' placebo. Far from being mere trickery, then, the placebo effect is a real and revealing demonstration of the power of the mind over the body — though one with clear limits, since belief alone can never cure every illness.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "A placebo contains an active medical ingredient.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "New drugs are tested against placebos to see whether they really work.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "The placebo effect works equally well for every kind of illness.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "The way a treatment is given can change the strength of the placebo effect.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Placebos only work when the patient does not know they are taking one.",
      "a": "no"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> even when they know they are taking a dummy pill.<br><b>B</b> because the brain releases its own chemicals.<br><b>C</b> for symptoms such as pain and anxiety.<br><b>D</b> must perform better than a placebo.<br><b>E</b> the power of the mind over the body.<br><b>F</b> only in very young children.</div>",
      "t": "txt",
      "q": "To be judged effective, a new drug",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "The placebo effect works best",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "Part of the effect seems to occur",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "Some patients still improve",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Ultimately, the placebo effect reveals",
      "a": "E"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What is the name for a dummy treatment with no active ingredient?",
      "a": "placebo|a placebo"
     },
     {
      "t": "txt",
      "q": "Name one symptom for which the placebo effect works well.",
      "a": "pain|anxiety|nausea"
     },
     {
      "t": "txt",
      "q": "What does the brain appear to release that may help explain the effect?",
      "a": "endorphins"
     },
     {
      "t": "txt",
      "q": "What term describes a placebo given openly, with the patient's knowledge?",
      "a": "open-label|open label"
     }
    ]
   }
  ]
 },
 {
  "name": "Bamboo · The Calendar · Procrastination",
  "blurb": "Botany · History of Science · Psychology · 🔴 Exam level",
  "passages": [
   {
    "title": "Bamboo",
    "text": "<p><b>A</b> With its tall, woody, tree-like stems, bamboo is easily mistaken for a tree. In fact, it is nothing of the sort: bamboo is a kind of grass, more closely related to wheat or to a garden lawn than to an oak. Like other grasses, it has hollow, jointed stems, called culms, divided into sections by solid rings, and it grows from a spreading network of roots rather than from a single trunk. This humble grass, however, can tower to the height of a five-storey building.</p>\n<p><b>B</b> Bamboo is the fastest-growing plant on the whole of the Earth. Under the right conditions, certain species can grow almost a metre in a single day, so quickly that the growth can very nearly be seen with the naked eye. This astonishing speed is possible because a new bamboo stem does not thicken as it rises, as a tree does; instead, all of its segments are already formed, in miniature, underground, and simply extend and stretch upward, reaching full height in a single growing season.</p>\n<p><b>C</b> For its light weight, bamboo is remarkably strong and flexible, which has made it one of the most useful plants known to humankind. Across Asia it has been used for thousands of years to build houses and bridges, and it is still widely used today as scaffolding on the outside of tall buildings. It is turned into furniture, flooring, paper, cloth and cooking utensils, while its tender young shoots are cooked and eaten as a vegetable. Few plants in the world serve so many different purposes.</p>\n<p><b>D</b> One of the strangest features of bamboo is the way that it flowers. Most bamboos flower extremely rarely — many only once every several decades — and, mysteriously, when a species does flower, every plant of that species flowers at the same time, all around the world, even plants grown far apart from cuttings of the same original. Stranger still, having flowered and produced their seed, the exhausted plants then very often all die together, and the long cycle begins once more from seed.</p>\n<p><b>E</b> Bamboo is also unusually good for the environment. Because it grows back again from its roots after being cut, it need never be replanted, and it absorbs large amounts of carbon dioxide while releasing plenty of oxygen as it grows. Its dense network of roots binds the soil and helps to prevent erosion on hillsides, and it thrives without any need for pesticides or fertiliser. For all of these reasons it is now often promoted as a highly sustainable building material.</p>\n<p><b>F</b> Bamboo's great vigour, however, has a darker side. The very same spreading underground roots that make it so easy to grow can also make it extremely difficult to control. Some species send up new shoots far and wide, invading gardens, cracking paths and crowding out other plants, and once established they can be very hard indeed to remove. Gardeners who plant bamboo without care may find, to their cost, that it simply does not know when to stop.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> A grass in disguise<br><b>ii</b> Growth at record speed<br><b>iii</b> A material of a thousand uses<br><b>iv</b> A rare and deadly flowering<br><b>v</b> Good for the planet<br><b>vi</b> The problem of spreading<br><b>vii</b> Where in the world bamboo grows<br><b>viii</b> Bamboo and the giant panda</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Bamboo is a type of grass rather than a tree.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Some bamboo can grow almost a metre in a single day.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Every species of bamboo produces flowers every year.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Bamboo is stronger than steel of the same weight.",
      "a": "not given"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">culms &middot; erosion &middot; grass &middot; scaffolding &middot; shoots &middot; trunk</div>",
      "t": "txt",
      "q": "Although it has tall, woody stems, bamboo is really a kind of ______.",
      "a": "grass"
     },
     {
      "t": "txt",
      "q": "Its stems are strong enough to be used as ______ on tall buildings.",
      "a": "scaffolding"
     },
     {
      "t": "txt",
      "q": "The dense roots of bamboo help to prevent soil ______.",
      "a": "erosion"
     }
    ]
   },
   {
    "title": "The Calendar",
    "text": "<p>Designing a calendar is far harder than it looks, because the natural cycles that a calendar tries to follow simply do not fit neatly together. The day is the time the Earth takes to spin once; the month is roughly the time the Moon takes to circle the Earth, about 29.5 days; and the year is the time the Earth takes to travel once around the Sun, about 365.25 days. None of these divides evenly into any other, and the whole history of the calendar is really one long struggle to reconcile them.</p>\n<p>The ancient Egyptians were among the first to base their calendar firmly on the Sun. They used a year of 365 days, divided into twelve months of thirty days, with five extra days added at the end. It was simple and convenient, but because the true year is about a quarter of a day longer, their calendar slowly drifted out of step with the seasons over the centuries.</p>\n<p>The great reformer was Julius Caesar, who in 46 BC introduced what became known as the Julian calendar. To deal with that troublesome extra quarter of a day, he added one leap day every four years. This was a huge improvement, but not quite perfect: the Julian year was just eleven minutes too long, and over many centuries those minutes added up to whole days, pushing the calendar out of line with the seasons once again.</p>\n<p>The problem was finally solved by Pope Gregory XIII, who in 1582 introduced the Gregorian calendar that we still use today. He ordered ten days to be dropped all at once to correct the accumulated error, and refined the leap-year rule so that century years count as leap years only when they can be divided by 400. Not every calendar follows the Sun, however. The Islamic calendar is purely lunar, with a year of only about 354 days, which is why its festivals gradually move through all the seasons as the years pass.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "Calendars are difficult to design mainly because:",
      "o": [
       "the Earth moves too fast",
       "the year and the month do not divide evenly into days",
       "the Sun changes its speed",
       "people disagree about which day is which"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The calendar of the ancient Egyptians was based on a year of:",
      "o": [
       "360 days",
       "365 days",
       "365.25 days",
       "354 days"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The calendar introduced by Julius Caesar added:",
      "o": [
       "a leap day every four years",
       "months of equal length",
       "a purely lunar system",
       "the seven-day week"
      ],
      "a": "A"
     },
     {
      "t": "mc",
      "q": "The Gregorian reform of 1582 was needed because the Julian calendar was:",
      "o": [
       "missing several months",
       "slightly too long",
       "based on the Moon",
       "without any leap years"
      ],
      "a": "B"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each achievement with the correct people or person, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> The ancient Egyptians<br><b>B</b> Julius Caesar<br><b>C</b> Pope Gregory XIII</div>",
      "t": "txt",
      "q": "introduced a 365-day solar calendar with five extra days",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "added a leap day once every four years",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "ordered ten days to be removed to correct the drift",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "created the calendar now used across most of the world",
      "a": "C"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE NUMBER OR WORD</b> from the passage.",
      "t": "txt",
      "q": "A solar year lasts about ______ days.",
      "a": "365.25|365"
     },
     {
      "t": "txt",
      "q": "The Julian calendar was introduced in the year ______ BC.",
      "a": "46"
     },
     {
      "t": "txt",
      "q": "The Gregorian calendar was introduced in the year ______.",
      "a": "1582"
     },
     {
      "t": "txt",
      "q": "The ______ calendar is purely lunar, so its festivals move through the seasons.",
      "a": "islamic"
     },
     {
      "t": "txt",
      "q": "Under the modern rule, century years are leap years only if they divide by ______.",
      "a": "400"
     }
    ]
   },
   {
    "title": "Why We Procrastinate",
    "text": "<p>Almost everyone, at one time or another, puts off a task they know they really ought to be doing — answering an important email, starting an essay, booking a dentist's appointment — and does something easier or more pleasant instead. This near-universal habit is called procrastination, and, for something so common, it is very badly misunderstood.</p>\n<p>The usual assumption is that procrastination is simply laziness, or a failure of time management. Most psychologists now firmly disagree. Procrastination, they argue, is really a problem of managing our emotions, and not our time. We tend to put off precisely those tasks that make us feel bad in some way — tasks that are boring, difficult, or that stir up anxiety and self-doubt — because avoiding them brings a small but immediate sense of relief.</p>\n<p>The trouble is that this relief gives only short-term comfort, while the task itself, and all the stress that goes with it, still remain. Part of the explanation lies in the way the human brain naturally values immediate rewards far more highly than future ones, a tendency that psychologists call 'present bias'. The distant deadline, and the future self who will one day have to meet it, can feel almost like a stranger's problem.</p>\n<p>The consequences, however, are very real: procrastination is linked to greater stress, poorer performance, nagging guilt, and even worse health, as people delay exercise or medical check-ups. Fortunately, understanding the true cause points towards better solutions. Rather than simply demanding more willpower, experts suggest breaking a task into very small steps so that starting it feels easy, removing tempting distractions, and — perhaps surprisingly — practising self-forgiveness, since studies show that people who forgive themselves for putting something off are then less likely to do it again. Procrastination, in the end, is best understood not as a character flaw but as an emotional habit that can be changed.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "Almost everyone procrastinates at one time or another.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Procrastination is essentially a failure of time management.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Putting off a task gives a sense of relief that lasts a long time.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "People who forgive themselves for procrastinating tend to do it less afterwards.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Procrastination can affect a person's health.",
      "a": "yes"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> gives only short-term relief.<br><b>B</b> rather than a problem of managing time.<br><b>C</b> value immediate rewards over future ones.<br><b>D</b> tend to procrastinate less in future.<br><b>E</b> breaking a task into small steps.<br><b>F</b> only affects students and young people.</div>",
      "t": "txt",
      "q": "Avoiding an unpleasant task",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Psychologists see procrastination as a problem of managing emotions",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "Human brains naturally",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "People who forgive themselves",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "One useful strategy is",
      "a": "E"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "According to psychologists, procrastination is really about managing what?",
      "a": "emotions|our emotions|mood|feelings"
     },
     {
      "t": "txt",
      "q": "What term describes the brain valuing immediate rewards over future ones?",
      "a": "present bias"
     },
     {
      "t": "txt",
      "q": "Name one negative consequence of procrastination mentioned in the passage.",
      "a": "stress|guilt|worse health"
     },
     {
      "t": "txt",
      "q": "Into what should a task be broken so that starting it feels easy?",
      "a": "small steps|steps"
     }
    ]
   }
  ]
 },
 {
  "name": "Beavers · Maps · The Science of Taste",
  "blurb": "Zoology · Geography · Biology · 🔴 Exam level",
  "passages": [
   {
    "title": "Beavers: Nature's Engineers",
    "text": "<p><b>A</b> After human beings, few animals reshape their surroundings as dramatically as the beaver. Using nothing but their teeth and their front paws, beavers build dams of branches and mud across streams and small rivers, holding back the water to create ponds where none existed before. In doing so they can flood whole valleys, change the course of streams and turn dry woodland into wetland. For this reason they are often called nature's engineers — the only creatures besides ourselves that so deliberately remake the landscape to suit their own needs.</p>\n<p><b>B</b> A beaver does not build its dam for its own sake, but in order to create a safe and deep pond. In the middle of this pond it builds a dome-shaped home, called a lodge, whose only entrances lie hidden underwater, below the surface of the pond. This means that a beaver can come and go without ever being seen by the wolves, bears and other predators that hunt it on land, and the deep water does not freeze solid in winter, allowing the beaver to reach its store of food beneath the ice.</p>\n<p><b>C</b> Beavers are superbly equipped for their work. Their large front teeth never stop growing throughout their lives, and are kept sharp and short by constant gnawing, allowing a beaver to fell a tree as thick as a person's leg in a single night. Working mostly after dark, the animals drag branches and logs into place, weave them together, and pack the whole structure tight with mud and stones scooped from the riverbed, hurrying to repair any leak the very moment they hear running water.</p>\n<p><b>D</b> The ponds and wetlands that beavers create are a great gift to other wild creatures. The still, deep water and the flooded trees provide new homes for fish, frogs, insects, water birds and many other animals, so that a single beaver pond can become one of the richest habitats in the whole area. Where beavers return to a river, the variety of wildlife around it — its biodiversity — very often increases sharply, and species that had grown rare may reappear.</p>\n<p><b>E</b> Beaver dams also bring real benefits to people. By slowing the flow of water and storing it in ponds and soggy ground, the dams reduce the sudden rush of water that causes flooding further downstream after heavy rain, and then release it slowly during dry spells, keeping rivers flowing through a drought. The wetlands also filter out mud and pollutants, cleaning the water. For all these reasons, beavers are now being deliberately reintroduced to many rivers to help manage water naturally.</p>\n<p><b>F</b> It was not always so. For centuries beavers were hunted relentlessly for their thick, waterproof fur, until they had been wiped out across much of Europe and North America. Even today they are not welcomed by everyone, since their dams can flood farmland, block drains and bring down trees where they are not wanted. Yet as the value of their work has become clear, beavers are increasingly protected, and carefully reintroduced to places from which they had vanished long ago.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> Why the dam is built<br><b>ii</b> Animal engineers<br><b>iii</b> The tools and the technique<br><b>iv</b> A gift to other wildlife<br><b>v</b> Help with floods and drought<br><b>vi</b> From near extinction to reintroduction<br><b>vii</b> What beavers eat<br><b>viii</b> Life inside the beaver family</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Beavers reshape their environment more than almost any other animal.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "A beaver's front teeth stop growing when it becomes an adult.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Beavers can live for more than twenty years in the wild.",
      "a": "not given"
     },
     {
      "t": "tf",
      "q": "Beaver dams can help to reduce flooding downstream.",
      "a": "true"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">dam &middot; lodge &middot; mud &middot; teeth &middot; underwater &middot; wetlands</div>",
      "t": "txt",
      "q": "Beavers build a ______ across a stream to create a deep pond.",
      "a": "dam"
     },
     {
      "t": "txt",
      "q": "The entrances to their home lie ______, keeping them safe from predators.",
      "a": "underwater"
     },
     {
      "t": "txt",
      "q": "Beavers cut down trees using their strong front ______.",
      "a": "teeth"
     }
    ]
   },
   {
    "title": "Maps",
    "text": "<p>Maps are among the oldest of all human inventions; one of the earliest known examples, a small clay tablet made by the Babylonians, is several thousand years old. From the very beginning, every map has had to do one thing above all else: simplify. A map can never show everything that is really there, so the mapmaker must always choose what to include and what to leave out, and every map is therefore a simplified picture of the world rather than a perfect copy of it.</p>\n<p>There is also a deeper problem at the very heart of mapmaking. The Earth is very nearly a sphere, but a map is flat, and it is simply impossible to flatten the curved surface of a globe onto a sheet of paper without stretching or squashing something. A method of doing this is called a projection, and every projection involves a trade-off: it may keep the shapes of countries correct, or their relative sizes, or the directions between them, but it can never keep all of these correct at the same time.</p>\n<p>The most famous projection of all was created by the Flemish geographer Gerardus Mercator in 1569. His map had one great virtue for the sailors of his day: a straight line drawn on it always represented a single constant compass direction, which made it invaluable for navigation across the open sea. But this convenience came at a price. The Mercator projection badly exaggerates the size of land far from the equator, so that on his map Greenland appears almost as large as Africa, although in reality Africa is about fourteen times bigger.</p>\n<p>Other projections make different compromises, keeping sizes correct while distorting shapes instead. Even today, when a satellite can fix our position to within a few metres and maps appear instantly on our phones, those digital maps still rest upon a chosen projection, and still, like every map before them, leave things out and quietly reflect the choices of the people who made them.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "According to the passage, every map must:",
      "o": [
       "be drawn entirely by hand",
       "leave things out and simplify",
       "use the Mercator projection",
       "show the whole surface of the Earth"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The basic problem of mapmaking is that:",
      "o": [
       "the Earth is far too large to map",
       "a round Earth cannot be shown on flat paper without distortion",
       "paper has always been expensive",
       "countries keep changing their shape"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The Mercator projection was designed mainly to help:",
      "o": [
       "farmers",
       "sailors and navigators",
       "artists",
       "astronomers"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "A serious weakness of the Mercator projection is that it:",
      "o": [
       "shows compass directions incorrectly",
       "exaggerates the size of land far from the equator",
       "cannot show the sea",
       "is very difficult to print"
      ],
      "a": "B"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each fact with the correct people, person or thing, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> The Babylonians<br><b>B</b> Gerardus Mercator<br><b>C</b> Modern digital maps</div>",
      "t": "txt",
      "q": "made one of the earliest known maps, on a clay tablet",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "created a projection that keeps compass directions correct",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "rely on satellites to fix a position on the Earth",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "produced a map that was especially useful for sailing",
      "a": "B"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD OR A NUMBER</b> from the passage.",
      "t": "txt",
      "q": "A method of showing the round Earth on flat paper is called a ______.",
      "a": "projection"
     },
     {
      "t": "txt",
      "q": "Mercator created his famous projection in the year ______.",
      "a": "1569"
     },
     {
      "t": "txt",
      "q": "On the Mercator map, ______ appears almost as large as Africa.",
      "a": "greenland"
     },
     {
      "t": "txt",
      "q": "Every map must ______ the world, since it cannot show everything.",
      "a": "simplify"
     },
     {
      "t": "txt",
      "q": "One of the earliest known maps was made by the ______.",
      "a": "babylonians|babylonian"
     }
    ]
   },
   {
    "title": "The Science of Taste",
    "text": "<p>Taste is one of the least understood of our senses, and much of what most people were taught about it is simply wrong. It is often said, for example, that there are four basic tastes — sweet, sour, salty and bitter. In fact there is a fifth, umami, the savoury taste of meat, cheese and ripe tomatoes, which Western science was slow to recognise but which is now firmly accepted.</p>\n<p>Another common belief is the so-called 'tongue map', the idea that different regions of the tongue are responsible for different tastes — sweetness at the tip, bitterness at the back. This, too, is a myth. Every part of the tongue that has taste buds can, in fact, detect all of the basic tastes, and the neat map found in many old textbooks was based on a simple misunderstanding of some early research.</p>\n<p>Perhaps the greatest surprise of all is that most of what we think of as 'taste' is really smell. The flavour of food is not produced by the tongue alone but combines taste, smell, texture and even temperature into a single experience, and of all of these it is smell that matters most. This is why food seems so dull and bland when we have a heavy cold and our nose is blocked: with the sense of smell shut off, even a favourite meal loses almost all of its flavour.</p>\n<p>Our sense of taste did not evolve for pleasure but for survival. A sweet taste signalled valuable energy in ripe fruit; a bitter taste warned that a plant might be poisonous; saltiness pointed to minerals that the body needs; and sourness could reveal food that was unripe or beginning to go bad. People also differ from one another: some, known as 'supertasters', are born with many more taste buds than average and experience strong tastes, especially bitterness, far more intensely — which may be exactly why some people cannot bear certain vegetables that others happily enjoy.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "There are only four basic tastes.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Each part of the tongue can detect only one kind of taste.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Much of what we call taste is actually the sense of smell.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Bitterness may have evolved as a warning of poison.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Everyone is born with the same number of taste buds.",
      "a": "no"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> that a food might be poisonous.<br><b>B</b> combines taste, smell and texture.<br><b>C</b> can detect all of the basic tastes.<br><b>D</b> have more taste buds than other people.<br><b>E</b> the fifth basic taste, umami.<br><b>F</b> only sweet and salty foods.</div>",
      "t": "txt",
      "q": "Every part of the tongue with taste buds",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "What we call the flavour of food actually",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "A bitter taste may warn us",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Scientists now recognise",
      "a": "E"
     },
     {
      "t": "txt",
      "q": "People known as 'supertasters'",
      "a": "D"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What is the name of the savoury fifth taste?",
      "a": "umami"
     },
     {
      "t": "txt",
      "q": "Which sense contributes most to the flavour of food?",
      "a": "smell"
     },
     {
      "t": "txt",
      "q": "A bitter taste may warn us that a plant is what?",
      "a": "poisonous|poison"
     },
     {
      "t": "txt",
      "q": "What name is given to people born with far more taste buds than average?",
      "a": "supertasters|supertaster"
     }
    ]
   }
  ]
 },
 {
  "name": "Bioluminescence · Ice Cream · Sign Language",
  "blurb": "Biology · Food Science · Linguistics · 🔴 Exam level",
  "passages": [
   {
    "title": "Bioluminescence: Living Light",
    "text": "<p><b>A</b> One of the most magical sights in all of nature is a living thing that glows with its own light. This ability, called bioluminescence, is found in a surprising range of creatures — the flickering firefly of a summer meadow, strange fish of the deep sea, certain fungi that make rotting wood shine faintly, and tiny plankton that light up the breaking waves at night. Unlike the light of a lamp or a fire, this is a cold light, produced with almost no heat at all, and it has fascinated human beings for as long as they have watched the dark.</p>\n<p><b>B</b> The glow is produced by a chemical reaction inside the animal's body. A special light-producing molecule, known as luciferin, reacts with oxygen, and the reaction is speeded up by an enzyme called luciferase. What makes the process so remarkable is its extraordinary efficiency: almost all of the energy is turned directly into light, and only a tiny amount is wasted as heat. An ordinary electric light bulb, by contrast, wastes most of its energy as heat — which is why bioluminescence is sometimes described as the most efficient light in the world.</p>\n<p><b>C</b> On land, bioluminescence is quite rare, but in the deep sea it is astonishingly common. Below the depth that any sunlight can reach, the ocean is a world of perpetual darkness, and there the great majority of animals — fish, squid, jellyfish and countless smaller creatures — are able to produce their own light. In this vast, dark environment, light has become the commonest and most important means of communication, a silent language of flashes and glows exchanged endlessly throughout the deep.</p>\n<p><b>D</b> Animals glow for many different reasons. Fireflies flash in distinctive patterns to attract a mate, each species with its own coded signal. The deep-sea anglerfish dangles a glowing lure in front of its mouth to draw curious prey to their doom. Some creatures light up suddenly to startle or blind an attacker, or release a glowing cloud to confuse it, while others use a faint downward glow to hide their own shadow from predators lurking below — a clever trick known as counter-illumination.</p>\n<p><b>E</b> Not every glowing animal makes its own light. Many, including some fish and squid, cannot produce light at all by themselves, and instead keep colonies of light-producing bacteria in special organs on their bodies. The animal provides the bacteria with a safe home and a supply of food; the bacteria, in return, provide the light. It is a partnership, or symbiosis, that benefits both sides, and it is one of the many ways in which living things have learned to cooperate.</p>\n<p><b>F</b> Bioluminescence has proved to be a wonderful gift to science. Researchers have borrowed the glowing molecules, and the very genes that make them, and now use them as tools — for example, by attaching a glow to particular cells so that they can be watched inside a living body, or to reveal the hidden presence of disease. Some scientists even dream of one day growing glowing plants to light our streets, turning nature's cold light to entirely new human purposes.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> A cold and efficient chemistry<br><b>ii</b> Light made by life<br><b>iii</b> Common in the deep ocean<br><b>iv</b> Many reasons to glow<br><b>v</b> Borrowed light<br><b>vi</b> A tool for science<br><b>vii</b> The brightest animals on Earth<br><b>viii</b> Light and the changing seasons</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Bioluminescence produces light without producing much heat.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Bioluminescence is more common on land than in the sea.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Some animals produce light with the help of bacteria.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Fireflies use their light mainly to frighten away predators.",
      "a": "not given"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">bacteria &middot; efficient &middot; enzyme &middot; heat &middot; lure &middot; oxygen</div>",
      "t": "txt",
      "q": "Bioluminescence occurs when a special molecule reacts with ______.",
      "a": "oxygen"
     },
     {
      "t": "txt",
      "q": "The reaction is speeded up by an ______ called luciferase.",
      "a": "enzyme"
     },
     {
      "t": "txt",
      "q": "The process is highly ______, giving off light but almost no heat.",
      "a": "efficient"
     }
    ]
   },
   {
    "title": "The Story of Ice Cream",
    "text": "<p>People have enjoyed chilled and frozen treats for a very long time. More than two thousand years ago, the Chinese and the Persians were already making refreshing desserts from snow and ice flavoured with fruit and honey. True ice cream, however — a smooth, frozen mixture of cream and sugar — is a later and more difficult invention, because freezing cream well is far harder than it sounds.</p>\n<p>The great problem is texture. If cream is simply left to freeze, it turns into a hard, gritty block full of large ice crystals, unpleasant to eat. To make it smooth, two things are needed: the mixture must be brought well below the freezing point of water, and it must be stirred constantly as it freezes, so that only very small ice crystals can form. Before mechanical freezers existed, cooks achieved the necessary cold by a clever trick: they surrounded the container of cream with a bath of ice mixed with salt. Adding salt dramatically lowers the freezing point of water, making the icy bath far colder than plain ice, and cold enough to freeze the cream inside.</p>\n<p>From these beginnings, ice cream spread across Europe as a great luxury, first in Italy and then in France, where it was enjoyed at the tables of the rich before slowly reaching everyone else through cafés and street sellers. What finally made ice cream cheap and common, however, was modern refrigeration, developed in the nineteenth and twentieth centuries, which allowed it to be made and stored on a huge scale.</p>\n<p>The smoothness we enjoy depends on more than tiny crystals alone. Air is whipped into the mixture to make it lighter and softer, while the sugar it contains lowers the freezing point of the cream itself, helping to keep it from setting rock hard. The edible cone, which made ice cream easy to carry and to eat in the street, became hugely popular in the early twentieth century, and completed the familiar treat we know today.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "To make ice cream smooth, it is essential to:",
      "o": [
       "freeze it as slowly as possible",
       "keep stirring it while it freezes",
       "add no sugar at all",
       "use only pure cream"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Before freezers existed, cooks made cream cold enough to freeze by mixing ice with:",
      "o": [
       "sugar",
       "milk",
       "salt",
       "air"
      ],
      "a": "C"
     },
     {
      "t": "mc",
      "q": "Salt is used in this process because it:",
      "o": [
       "adds a pleasant flavour",
       "lowers the freezing point of water",
       "keeps the cream fresh for longer",
       "makes the ice melt more slowly"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Ice cream became cheap and widely available thanks to:",
      "o": [
       "the invention of the cone",
       "modern refrigeration",
       "the cafés of Italy",
       "ancient Persian recipes"
      ],
      "a": "B"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each description with the correct ingredient, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> salt<br><b>B</b> sugar<br><b>C</b> air</div>",
      "t": "txt",
      "q": "is whipped into the mixture to make it lighter and softer",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "is mixed with ice to create a very cold, freezing bath",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "is dissolved in the mixture and lowers its freezing point",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "is part of the icy bath outside, not of the cream itself",
      "a": "A"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD</b> from the passage.",
      "t": "txt",
      "q": "Smooth ice cream depends on keeping the ice ______ very small.",
      "a": "crystals"
     },
     {
      "t": "txt",
      "q": "Adding salt lowers the ______ point of water.",
      "a": "freezing"
     },
     {
      "t": "txt",
      "q": "In Europe, ice cream first spread through ______ before reaching France.",
      "a": "italy"
     },
     {
      "t": "txt",
      "q": "The edible ______ became hugely popular in the early twentieth century.",
      "a": "cone"
     },
     {
      "t": "txt",
      "q": "______ is whipped into the mixture to make the ice cream lighter.",
      "a": "air"
     }
    ]
   },
   {
    "title": "Sign Language",
    "text": "<p>Many hearing people imagine that sign language is a simple set of gestures, a kind of picture-drawing in the air, or perhaps just spoken English shown on the hands. Nothing could be further from the truth. Sign languages are full, natural human languages, every bit as rich and complex as spoken ones, with their own vocabulary, their own grammar, and even their own regional dialects and slang.</p>\n<p>A common mistake is to assume that there is a single sign language used by deaf people all over the world. In fact there are hundreds of different sign languages, which have grown up separately and are, for the most part, mutually unintelligible. American Sign Language and British Sign Language, for example, are completely different from one another and share very few signs, even though both are used in English-speaking countries.</p>\n<p>Sign languages work in ways that spoken languages cannot. They make full use of space, movement and hand shape, so that their grammar unfolds in three dimensions rather than in a single line of sound. Facial expressions, too, are not merely a show of emotion but a genuine part of the grammar: a particular movement of the eyebrows, for instance, can turn a statement into a question.</p>\n<p>Sign languages arise naturally and spontaneously wherever deaf people come together. In one famous case, in the 1980s, deaf children brought together at a new school in Nicaragua, who had no shared language at all, invented a complete and sophisticated sign language of their own within just a few years, astonishing the linguists who studied them. For much of history, sadly, sign languages were suppressed: many schools banned signing and forced deaf children to try to speak instead, a harmful practice known as oralism. Today, at last, sign languages are recognised and celebrated as the true languages they are — and they teach us a profound lesson: that human language is not tied to sound or speech at all, but will build itself in any medium the mind is given.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "Sign languages have a grammar of their own.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "There is a single sign language used all over the world.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "American and British sign languages are basically the same.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Facial expressions can carry grammatical meaning in sign languages.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Deaf children in Nicaragua created a new sign language of their own.",
      "a": "yes"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> wherever deaf people come together.<br><b>B</b> are as complex as spoken languages.<br><b>C</b> part of the grammar, not just emotion.<br><b>D</b> forced deaf children to speak instead.<br><b>E</b> is not tied to sound or speech.<br><b>F</b> easier for hearing people to learn.</div>",
      "t": "txt",
      "q": "Sign languages arise naturally",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Sign languages",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "In sign languages, facial expressions are",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "In the past, many schools",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "Sign languages show that human language",
      "a": "E"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "Besides vocabulary, what do sign languages have of their own?",
      "a": "grammar"
     },
     {
      "t": "txt",
      "q": "In which country did deaf children famously invent a new sign language?",
      "a": "nicaragua"
     },
     {
      "t": "txt",
      "q": "What was the name of the practice of forcing deaf children to speak?",
      "a": "oralism"
     },
     {
      "t": "txt",
      "q": "According to the writer, human language is not tied to sound or what?",
      "a": "speech"
     }
    ]
   }
  ]
 },
 {
  "name": "Owls · Windmills · The Dog",
  "blurb": "Zoology · Technology · Animal Behaviour · 🔴 Exam level",
  "passages": [
   {
    "title": "The Owl: A Silent Hunter",
    "text": "<p><b>A</b> The owl is one of nature's most perfect hunters, and its deadliest weapon is silence. The wings of most birds make a distinct rushing or flapping sound as they beat the air, but the owl's feathers are quite different. The leading edge of each flight feather is fringed with a soft, comb-like row of teeth that breaks up the flow of air, while the surface of the wing is covered in a velvety down that muffles any remaining noise. The result is that an owl can swoop down on a mouse in almost total silence, giving its prey no warning at all until it is far too late.</p>\n<p><b>B</b> An owl's enormous, forward-facing eyes are superbly adapted for seeing in very dim light, gathering far more of it than a human eye ever could. But these great eyes come at a cost: they are so large that there is simply no room in the skull for the muscles that would allow them to move. An owl, in other words, cannot roll its eyes at all; they are fixed firmly in their sockets, staring straight ahead. To make up for this, the owl can turn its head with astonishing flexibility — as much as 270 degrees, three-quarters of a full circle — to look almost directly behind itself.</p>\n<p><b>C</b> Even more remarkable than an owl's sight is its hearing. Its two ears are set at slightly different heights on the sides of its head, one a little higher than the other, so that a sound reaches each ear at a fractionally different moment. From this tiny difference the owl's brain can work out the exact position of the source in three dimensions. The dish-shaped ring of feathers around its face, known as the facial disc, funnels faint sounds towards the ears. So precise is this system that some owls can catch a mouse moving beneath snow or leaves in complete darkness, guided by sound alone.</p>\n<p><b>D</b> Once an owl has located its prey, it strikes with powerful feet armed with long, curved talons that seize and crush the victim in an instant. Owls generally swallow small prey whole, rather than tearing it into pieces first. Later, the parts they cannot digest — the bones, fur and feathers — are compressed into a neat lump and coughed back up as a pellet. Scientists prize these pellets, for by carefully pulling them apart they can discover exactly what an owl has been eating.</p>\n<p><b>E</b> There are around two hundred species of owl, and they are found almost everywhere on Earth, on every continent except Antarctica and in almost every kind of habitat, from frozen tundra to hot desert and thick rainforest. They range in size from tiny owls no bigger than a sparrow to great birds with a wingspan of nearly two metres. Although most owls hunt at night, a few, such as certain species of the far north, hunt quite happily by day.</p>\n<p><b>F</b> Human feelings about owls have always been divided. In ancient Greece the owl was the companion of the goddess of wisdom, and to this day it remains a symbol of learning and knowledge. In many other cultures, however, the owl's night-time habits and eerie call have made it a creature of ill omen, a messenger of death to be feared. Today owls face more practical dangers, from the loss of the old trees and quiet places they need, and their future in many regions is far from certain.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> Eyes that cannot move<br><b>ii</b> Flying without a sound<br><b>iii</b> Hunting by sound<br><b>iv</b> Built to catch and kill<br><b>v</b> A widespread family<br><b>vi</b> Between wisdom and superstition<br><b>vii</b> How owls raise their chicks<br><b>viii</b> The largest owl of all</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Owls can fly almost silently.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Owls can move their eyes freely within their sockets.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "All owls hunt only during the night.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Owls live longer than most other kinds of bird.",
      "a": "not given"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">disc &middot; ears &middot; feathers &middot; head &middot; pellets &middot; talons</div>",
      "t": "txt",
      "q": "An owl flies almost silently thanks to its specially shaped ______.",
      "a": "feathers"
     },
     {
      "t": "txt",
      "q": "Because its eyes cannot move, an owl turns its ______ to look around.",
      "a": "head"
     },
     {
      "t": "txt",
      "q": "After a meal, an owl coughs up ______ of bone and fur.",
      "a": "pellets"
     }
    ]
   },
   {
    "title": "Windmills",
    "text": "<p>For well over a thousand years, long before electricity or the steam engine, people harnessed the free power of the wind to do heavy work. A windmill catches the moving air on its sails and uses it to turn machinery — most often to grind grain into flour, or to pump water. In an age when the only other sources of power were the muscles of humans and animals, and flowing water, the windmill was a machine of enormous value.</p>\n<p>The first true windmills are thought to have been built in Persia, in the region of modern Iran, around the ninth century. These early machines were quite unlike the windmills we picture today: their sails were mounted on a vertical shaft and spun round horizontally, like a merry-go-round, driving a millstone below to grind grain.</p>\n<p>The familiar windmill, with its great sails turning on a horizontal axis and facing into the wind, developed later in Europe, from around the twelfth century, and was considerably more efficient. In the earliest European design, the 'post mill', the entire body of the mill was mounted on a central post and had to be pushed round bodily so that its sails always faced the wind. In the later 'tower mill', only the cap at the very top turned, which was far easier to manage.</p>\n<p>No people made greater use of windmills than the Dutch, who used them not only to grind grain but, famously, to pump water and drain their low-lying land, holding back the sea and creating new fields where there had once been marsh. Windmills were also used to saw timber and to make paper. In the nineteenth century, the steam engine gradually replaced them, and the old mills fell silent. Yet the power of the wind has not been forgotten: today, tall modern wind turbines, working on exactly the same principle, once again capture the wind — this time to generate clean electricity.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "The earliest windmills were used mainly to:",
      "o": [
       "pump water",
       "grind grain",
       "generate electricity",
       "saw timber"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The first true windmills are believed to have been built in:",
      "o": [
       "the Netherlands",
       "England",
       "Persia",
       "China"
      ],
      "a": "C"
     },
     {
      "t": "mc",
      "q": "European windmills differed from the earlier Persian ones because they:",
      "o": [
       "were much smaller",
       "had sails on a horizontal axis facing the wind",
       "could not grind grain",
       "used no sails at all"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The Dutch used windmills especially to:",
      "o": [
       "make paper only",
       "pump water and drain land",
       "grind grain only",
       "generate electricity"
      ],
      "a": "B"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each description with the correct type of windmill, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> the Persian windmill<br><b>B</b> the post mill<br><b>C</b> the modern wind turbine</div>",
      "t": "txt",
      "q": "had sails that turned around a vertical shaft",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "had to be turned bodily so that its sails faced the wind",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "is used to generate electricity today",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "was the earliest known kind of windmill",
      "a": "A"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD OR A NUMBER</b> from the passage.",
      "t": "txt",
      "q": "A windmill captures the energy of the ______ to do work.",
      "a": "wind"
     },
     {
      "t": "txt",
      "q": "The first windmills appeared in Persia around the ______ century.",
      "a": "ninth|9th"
     },
     {
      "t": "txt",
      "q": "In a ______ mill, only the cap at the top turns to face the wind.",
      "a": "tower"
     },
     {
      "t": "txt",
      "q": "In the nineteenth century, windmills were replaced by the ______ engine.",
      "a": "steam"
     },
     {
      "t": "txt",
      "q": "Modern wind ______ generate clean electricity from the wind.",
      "a": "turbines|turbine"
     }
    ]
   },
   {
    "title": "The Dog",
    "text": "<p>The dog holds a unique place in the history of our species: it was the very first animal that human beings ever domesticated. Astonishingly, this happened not after the invention of farming, as with sheep, goats and cattle, but long before it — tens of thousands of years ago, when all humans still lived as hunters and gatherers. Every dog alive today, from the tiniest lapdog to the largest hound, is descended from the grey wolf.</p>\n<p>Exactly how wolves became dogs is still debated, but many scientists now favour a surprising idea: that dogs largely domesticated themselves. According to this view, the wolves that were naturally less fearful of people began to scavenge around the edges of human camps, feeding on scraps and waste. The tamest and boldest of these animals did best, and, breeding among themselves over many generations, they slowly grew tamer, friendlier and more dog-like, until a new kind of animal had come into being.</p>\n<p>Since then, and especially in just the last few centuries, humans have bred dogs into an astonishing variety of shapes and sizes — more physical variety, in fact, than is found in any other single species on Earth. Yet what truly sets dogs apart is not their bodies but their minds. Dogs are extraordinarily attuned to human beings: they follow our gaze, respond to our moods, and can understand human gestures, such as pointing to hidden food, better even than our closest relatives, the chimpanzees, can.</p>\n<p>Life alongside people has shaped dogs in the very deepest ways. They have even evolved special muscles in their faces that let them raise their eyebrows and make the appealing expressions — the famous 'puppy-dog eyes' — that so effectively melt human hearts, expressions that wolves simply cannot make. The dog, in short, is far more than a merely tame wolf. It is a creature that has been shaped by us, and for life with us, over an immense span of time — perhaps the closest partnership between two different species that the natural world has ever known.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "Dogs were domesticated after the invention of farming.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Dogs are descended from wolves.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Most modern dog breeds are very ancient.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Dogs are unusually good at understanding human gestures.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Dogs may have partly domesticated themselves.",
      "a": "yes"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> before the beginning of farming.<br><b>B</b> better than chimpanzees can.<br><b>C</b> that appeal to human beings.<br><b>D</b> bred only in the last few centuries.<br><b>E</b> scavenged near human camps.<br><b>F</b> only from tamed foxes.</div>",
      "t": "txt",
      "q": "Dogs were first domesticated",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Dogs can read human gestures",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "Dogs have evolved facial expressions",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "Most modern breeds were",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "The first dogs may have been wolves that",
      "a": "E"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "Which wild animal are all dogs descended from?",
      "a": "wolf|the wolf|grey wolf|wolves"
     },
     {
      "t": "txt",
      "q": "Name one kind of human cue that dogs are good at reading.",
      "a": "gestures|pointing|gaze|moods"
     },
     {
      "t": "txt",
      "q": "Which animal is said to be worse than dogs at reading human gestures?",
      "a": "chimpanzees|chimpanzee|chimps"
     },
     {
      "t": "txt",
      "q": "What have dogs evolved in their faces to make appealing expressions?",
      "a": "muscles|special muscles|facial muscles"
     }
    ]
   }
  ]
 },
 {
  "name": "Kangaroos · Glass · Salt",
  "blurb": "Zoology · Materials · History · 🔴 Exam level",
  "passages": [
   {
    "title": "Kangaroos",
    "text": "<p><b>A</b> The kangaroo is the most famous of the marsupials, a special group of mammals found almost only in Australia and the islands nearby. Unlike other mammals, whose young grow to a fairly advanced stage inside the mother's body before birth, marsupials give birth to tiny, barely formed young, which then complete their development inside a warm pouch of skin on the mother's belly. It is in this pouch that a baby kangaroo, feeding on its mother's milk, spends the first months of its life, safe and hidden from the world.</p>\n<p><b>B</b> The kangaroo is the only large animal in the world that moves by hopping. Far from being clumsy, hopping is a wonderfully efficient way to travel at speed across the open plains. The great tendons in a kangaroo's powerful back legs work like springs, stretching as the animal lands and then snapping back to fling it forward again, storing and returning energy with each bound so that very little effort is wasted. Its thick, muscular tail acts as a counterbalance in the air and, when the animal is resting or moving slowly, as a kind of fifth leg on which to lean.</p>\n<p><b>C</b> The birth of a kangaroo is one of the strangest sights in all of nature. The newborn, called a joey, is no bigger than a jelly bean — blind, hairless and looking barely alive. Yet, entirely unaided, this tiny creature must crawl, using its front legs, all the way up through its mother's fur to reach the pouch. There it fastens tightly onto a teat and does not let go for weeks, drinking milk and growing steadily until, months later, it is at last ready to put its head out and look at the world.</p>\n<p><b>D</b> Kangaroos are superbly suited to the hot, dry and unpredictable land in which they live. In times of drought, a female has a remarkable ability: she can pause the development of a tiny embryo inside her, holding it in waiting until the rains return and there is enough food to raise a young one. Kangaroos also obtain much of the water they need from the plants they eat, and they rest quietly in the shade during the hottest part of the day, saving their energy and their moisture for the cool of the evening.</p>\n<p><b>E</b> Kangaroos are social animals that live together in groups known as 'mobs', which may number anything from a handful of animals to more than fifty. Within a mob, the males compete for the chance to mate, often by 'boxing' — balancing on their tails and striking out at one another with their powerful hind legs. For the most part, however, kangaroos lead peaceful lives, grazing quietly on grass and other low plants much as sheep and cattle do.</p>\n<p><b>F</b> The kangaroo is one of the great symbols of Australia, appearing on its coat of arms, its coins and the tail of its aircraft. Yet the relationship between kangaroos and people is not always an easy one. In good seasons their numbers can grow enormously, and farmers may then regard them as pests that eat the grass their livestock need and cause dangerous accidents on the roads at night. As a result, kangaroo numbers are carefully monitored, and in some areas the animals are culled to keep them in balance with the land.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> Travelling by spring<br><b>ii</b> Raising young in a pouch<br><b>iii</b> A remarkable birth<br><b>iv</b> Built for a harsh land<br><b>v</b> Living in groups<br><b>vi</b> A national symbol and a pest<br><b>vii</b> The largest kangaroo<br><b>viii</b> How kangaroos communicate</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "A kangaroo stores energy in its legs as it hops.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Newborn kangaroos are fully formed at the moment of birth.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "A female kangaroo can pause a pregnancy until conditions improve.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Kangaroos can live for as long as thirty years.",
      "a": "not given"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">embryo &middot; joey &middot; mob &middot; pouch &middot; spring &middot; tail</div>",
      "t": "txt",
      "q": "A kangaroo gives birth to a tiny young called a ______.",
      "a": "joey"
     },
     {
      "t": "txt",
      "q": "The newborn grows for months inside its mother's ______.",
      "a": "pouch"
     },
     {
      "t": "txt",
      "q": "When resting, a kangaroo can lean on its strong ______.",
      "a": "tail"
     }
    ]
   },
   {
    "title": "Glass",
    "text": "<p>Glass is such an ordinary part of daily life — in our windows, our bottles and the screens of our phones — that we rarely stop to think what a strange and remarkable material it really is. Glass is made chiefly from sand, or more precisely from the silica it contains, which is heated to around 1,700 degrees Celsius until it melts, and is then cooled. Stranger still, when it cools it does not become a normal solid: glass is neither quite a solid nor quite a liquid, but something curiously in between, which is part of what makes it transparent.</p>\n<p>Nature made glass long before people did. When lightning strikes sand, or when a volcano erupts, the intense heat can melt rock and sand into natural glass, and the black volcanic glass called obsidian was prized by early humans, who chipped it into some of the sharpest blades and tools they ever possessed.</p>\n<p>People have been making their own glass for around four thousand years, since the days of ancient Egypt and Mesopotamia. At first it was a rare and precious substance, made into small, cloudy coloured beads. The great breakthrough came with the Romans, who around two thousand years ago invented the art of glassblowing — gathering a blob of molten glass on the end of a tube and blowing it into a bubble. This simple technique made it possible to produce cups, bottles and even window panes quickly and cheaply, and glass became, for the first time, an everyday material.</p>\n<p>The last great advance came in the 1950s, with the invention of the float glass process, in which a continuous ribbon of molten glass is floated on a bath of molten tin to produce perfectly flat, clear sheets — the way almost all window glass is still made today. Modern glass does far more than merely let in the light: drawn out into hair-thin threads, so-called fibre-optic cables now carry telephone calls and the entire internet across the world as flashes of light, and glass can be melted down and recycled again and again without ever losing its quality.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "Glass is made chiefly from:",
      "o": [
       "clay",
       "sand",
       "metal",
       "salt"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Glass can occur naturally when:",
      "o": [
       "rivers freeze in winter",
       "lightning strikes sand or a volcano erupts",
       "sand is pressed together underground",
       "the sea slowly evaporates"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The technique that first made glass cheap and common was invented by:",
      "o": [
       "the Egyptians",
       "the Romans",
       "the British",
       "the Chinese"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Modern flat window glass is made by floating molten glass on:",
      "o": [
       "water",
       "oil",
       "molten tin",
       "dry sand"
      ],
      "a": "C"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each fact with the correct people, process or thing, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> the Romans<br><b>B</b> the float glass process<br><b>C</b> natural glass</div>",
      "t": "txt",
      "q": "was used by early humans to make very sharp tools",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "invented the art of glassblowing",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "produces perfectly flat sheets on a bath of molten tin",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "forms when lightning strikes sand",
      "a": "C"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD OR A NUMBER</b> from the passage.",
      "t": "txt",
      "q": "The main ingredient of glass is ______.",
      "a": "sand|silica"
     },
     {
      "t": "txt",
      "q": "Glass is unusual because it is neither quite solid nor quite ______.",
      "a": "liquid"
     },
     {
      "t": "txt",
      "q": "The Romans made glass common by inventing glass______.",
      "a": "blowing|glassblowing"
     },
     {
      "t": "txt",
      "q": "The float glass process was developed in the ______.",
      "a": "1950s"
     },
     {
      "t": "txt",
      "q": "Thin threads of glass, called ______ cables, carry the internet as light.",
      "a": "fibre-optic|fibre optic|fiber-optic"
     }
    ]
   },
   {
    "title": "The History of Salt",
    "text": "<p>Common salt, known to chemists as sodium chloride, is one of the very few minerals that human beings actually eat, and we cannot live without it. The body needs salt for its nerves to work and to keep the right balance of fluids, and yet, unlike many other creatures, the human body cannot make its own salt, so it must all be obtained from food. This is why salt tastes so good to us, and why it is one of the basic tastes the tongue can detect. Too much salt, however, is harmful, and is linked to high blood pressure and heart disease.</p>\n<p>For most of history, salt was far more than a mere seasoning; it was one of the most valuable substances on Earth, sometimes called 'white gold'. The reason was simple: before the invention of refrigeration, salt was the best way to stop food from rotting. Meat and fish rubbed with salt, or soaked in salty water, could be kept for months or even years, which meant that people could store food for the winter, feed armies on the march, and send ships on long voyages of exploration.</p>\n<p>Salt was obtained in two main ways: it was dug as rock salt from mines deep underground, where ancient seas had dried up long ago, or it was produced by letting the sun evaporate seawater and salt lakes, leaving the salt behind. Wherever it came from, its great value shaped human history in surprising ways. Whole cities and trade routes grew up around the salt trade, heavy taxes on salt provoked anger and even revolts, and it is often said, though it may not be strictly true, that Roman soldiers were partly paid in salt — the origin, so the story goes, of our word 'salary'.</p>\n<p>Today, thanks to industrial production, salt is so cheap and abundant that we scatter it without a second thought, and it is hard to imagine that this humble white mineral was once fought over, taxed and treated as a treasure. Yet for thousands of years salt shaped economies, wars and empires alike — a reminder that the most ordinary things can once have been among the most precious of all.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "The human body can make its own salt.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Eating too much salt can be harmful to health.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Before refrigeration, salt was important for preserving food.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Salt has always been cheap and easy to obtain.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Salt can be obtained by evaporating seawater.",
      "a": "yes"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> before refrigeration existed.<br><b>B</b> so it must be obtained from food.<br><b>C</b> by evaporating seawater in the sun.<br><b>D</b> led to taxes, trade and even revolts.<br><b>E</b> harmful in large amounts.<br><b>F</b> found only in the deep sea.</div>",
      "t": "txt",
      "q": "The body cannot make salt,",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "Salt was vital for preserving food",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Salt can also be produced",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "Too much salt is",
      "a": "E"
     },
     {
      "t": "txt",
      "q": "The great value of salt",
      "a": "D"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What is the chemical name for common salt?",
      "a": "sodium chloride"
     },
     {
      "t": "txt",
      "q": "Name one food that salt was used to preserve before refrigeration.",
      "a": "meat|fish"
     },
     {
      "t": "txt",
      "q": "Besides mining, how can salt be obtained from the sea?",
      "a": "evaporate|evaporation|evaporating"
     },
     {
      "t": "txt",
      "q": "Which English word for pay is said to come from salt?",
      "a": "salary"
     }
    ]
   }
  ]
 },
 {
  "name": "The Dead Sea · The Great Wall · Fungi",
  "blurb": "Geography · History · Biology · 🔴 Exam level",
  "passages": [
   {
    "title": "The Dead Sea",
    "text": "<p><b>A</b> The Dead Sea, which lies between Jordan and Israel in the Middle East, is one of the most extraordinary bodies of water on Earth. It is not really a sea at all, but a large salt lake — and a record-breaking one. Its shore lies about 430 metres below the level of the ocean, which makes it by far the lowest point on the entire land surface of the planet. To stand beside the Dead Sea is quite literally to stand at the bottom of the world.</p>\n<p><b>B</b> What makes the Dead Sea so remarkable is its salt. Rivers, chiefly the River Jordan, flow into it, but no river ever flows out again. In the fierce heat of the desert, the only way for water to leave is by evaporation into the air, and when the water evaporates it leaves all of its dissolved salt behind. Over thousands of years this salt has built up, until the Dead Sea has become about ten times as salty as an ordinary ocean — one of the saltiest bodies of water anywhere in the world.</p>\n<p><b>C</b> This extreme saltiness has a famous and delightful effect. Salt water is denser than fresh water, and the water of the Dead Sea is so heavy with salt that a person cannot sink in it at all. Instead of swimming, visitors simply lie back and float effortlessly on the surface, often reading a newspaper to prove the point — an experience that has drawn curious tourists to its shores for well over a hundred years.</p>\n<p><b>D</b> The lake is called the 'Dead' Sea because its water is far too salty for fish, or for the plants and creatures of an ordinary sea, to survive in it; nothing could possibly live in such conditions, or so people long believed. In fact this is not quite true. Scientists have discovered that certain tiny, tough microbes — some kinds of bacteria and simple algae — do manage to live in the salty water, so the sea is not entirely dead after all.</p>\n<p><b>E</b> The Dead Sea has long been valued for more than its strangeness. Its waters and mud are extraordinarily rich in minerals such as salt, potash and magnesium, which are extracted on a large scale for use in farming and industry. The same minerals are believed to be good for the skin, and the black Dead Sea mud is sold around the world in creams and soaps. For thousands of years people have come to bathe in the mineral-rich water in the hope of curing skin complaints and other ills.</p>\n<p><b>F</b> Today, however, the Dead Sea is in serious danger. So much water is now taken from the River Jordan and the other streams that once fed it, for drinking and for farming, that far less reaches the lake than before. As a result its level is falling by more than a metre every year, its shoreline is retreating, and dangerous holes called sinkholes are opening up around its edges. Engineers have proposed ambitious schemes, such as a canal to bring in water from the distant Red Sea, but the future of this unique sea remains deeply uncertain.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> Why the water is so salty<br><b>ii</b> The lowest place on Earth<br><b>iii</b> A sea you cannot sink in<br><b>iv</b> Not entirely dead<br><b>v</b> A source of minerals and health<br><b>vi</b> A shrinking sea in danger<br><b>vii</b> How the Dead Sea was formed<br><b>viii</b> The rivers that feed it</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "The Dead Sea is the lowest point on the Earth's land surface.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Fish are able to live in the Dead Sea.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "The Dead Sea attracts more tourists now than it did fifty years ago.",
      "a": "not given"
     },
     {
      "t": "tf",
      "q": "The level of the Dead Sea is falling because its rivers are being diverted.",
      "a": "true"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">evaporation &middot; float &middot; microbes &middot; minerals &middot; salt &middot; sinkholes</div>",
      "t": "txt",
      "q": "Because water leaves the lake only by ______, it has become extremely salty.",
      "a": "evaporation"
     },
     {
      "t": "txt",
      "q": "The water is so dense that swimmers ______ very easily on the surface.",
      "a": "float"
     },
     {
      "t": "txt",
      "q": "Although it is called 'dead', tiny ______ do live in the water.",
      "a": "microbes"
     }
    ]
   },
   {
    "title": "The Great Wall of China",
    "text": "<p>The Great Wall of China is one of the most famous structures ever built, yet much of what people believe about it is mistaken. To begin with, it is not a single wall at all. It is really a vast collection of walls, built and rebuilt over more than two thousand years by many different rulers and dynasties. If every section that has ever existed were added together, the total length would come to well over twenty thousand kilometres, snaking across mountains and deserts along China's northern edge.</p>\n<p>The purpose of these walls was, above all, defence. For centuries China was threatened by fierce nomadic peoples who lived on the grasslands to the north, and the walls were built to keep their raiding horsemen out. But the Great Wall did more than simply block the way. Soldiers stationed in the many towers along it could watch the frontier, control the movement of people and goods, and, crucially, send warnings. From tall beacon towers, guards raised columns of smoke by day, or lit fires by night, to pass news of an attack along the wall far faster than any messenger could ride.</p>\n<p>The idea of a single great wall began with the first emperor of a united China, Qin Shi Huang, who, in the third century BC, ordered many older, separate walls to be joined together into one. Hundreds of thousands of labourers were forced to build it, and a great many died in the harsh conditions. The wall that most tourists visit today, however, with its impressive stone and brick, was mostly built very much later, by the Ming dynasty, between the fourteenth and seventeenth centuries.</p>\n<p>One popular belief should be laid to rest. It is often claimed that the Great Wall is the only human-made object that can be seen from space with the naked eye. This is simply a myth. The wall, though enormously long, is very narrow and much the same colour as the land around it, and astronauts have confirmed that it cannot, in fact, be picked out from orbit without help. Even so, it remains a breathtaking monument, and a powerful symbol of China itself.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "The Great Wall is best described as:",
      "o": [
       "a single continuous wall",
       "many walls built over many centuries",
       "a natural barrier of mountains",
       "a modern tourist attraction"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The main purpose of the Great Wall was to:",
      "o": [
       "mark the border and nothing more",
       "defend China against invaders from the north",
       "provide roads across the mountains",
       "store grain for the army"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The earlier walls were first joined into one under:",
      "o": [
       "the Ming dynasty",
       "the first emperor, Qin Shi Huang",
       "the Mongols",
       "the modern Chinese state"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The stone-and-brick wall that tourists see today was mostly built by:",
      "o": [
       "the Qin",
       "the Han",
       "the Ming dynasty",
       "the Mongols"
      ],
      "a": "C"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each fact with the correct person, dynasty or thing, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> Qin Shi Huang<br><b>B</b> the Ming dynasty<br><b>C</b> beacon towers</div>",
      "t": "txt",
      "q": "first linked the earlier separate walls into a single wall",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "built most of the wall that tourists see today",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "were used to send warnings with smoke and fire",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "forced hundreds of thousands of labourers to build the wall",
      "a": "A"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD</b> from the passage.",
      "t": "txt",
      "q": "The wall was built mainly to keep out invaders from the ______.",
      "a": "north"
     },
     {
      "t": "txt",
      "q": "Warnings of attack were sent from beacon towers using smoke and ______.",
      "a": "fire"
     },
     {
      "t": "txt",
      "q": "The separate walls were first united by the first ______, Qin Shi Huang.",
      "a": "emperor"
     },
     {
      "t": "txt",
      "q": "It is a myth that the wall can be seen from ______ with the naked eye.",
      "a": "space"
     },
     {
      "t": "txt",
      "q": "The best-known sections of the wall were built by the ______ dynasty.",
      "a": "ming"
     }
    ]
   },
   {
    "title": "The Hidden Kingdom of Fungi",
    "text": "<p>For a long time, fungi were thought of as a strange kind of plant. In fact, they are nothing of the sort. Fungi — a group that includes mushrooms, moulds and yeasts — belong to a kingdom entirely of their own, quite separate from both plants and animals, and, surprisingly, they are more closely related to animals than to plants. The crucial difference from plants is that fungi cannot make their own food from sunlight; instead, they must absorb their food from the living or dead things around them.</p>\n<p>What we usually think of as a fungus — a mushroom on the forest floor — is really only a small part of the whole organism, and a temporary one at that. Most of a fungus is hidden from sight, a vast, spreading network of fine, thread-like filaments, called a mycelium, growing through the soil or through rotting wood. The mushroom is simply the fruiting body that the fungus pushes up above the surface, for a short time, in order to release its spores and reproduce.</p>\n<p>Hidden though they are, fungi are absolutely essential to life on Earth. They are the great decomposers: it is chiefly fungi that break down fallen leaves, dead wood and other remains, rotting them away and returning their nutrients to the soil for plants to use once again. Without fungi to do this endless work, dead matter would simply pile up, and the whole cycle of life would grind to a halt. Just as importantly, the roots of most plants are wrapped in a partnership with fungi, which help them to obtain water and nutrients from the soil in exchange for sugar — a hidden network sometimes called the 'wood-wide web'.</p>\n<p>Human beings depend on fungi too. The yeast that makes bread rise and turns grape juice into wine is a fungus, and the first antibiotic, penicillin, was discovered in a common mould. Yet fungi have a darker side as well: some cause serious diseases in plants, animals and people, and a few wild mushrooms are deadly poisonous. Vast, ancient and still largely mysterious, the kingdom of the fungi is one of the least understood, and yet most important, of all the great branches of life.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "Fungi belong to the same kingdom as plants.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Most of a fungus is usually hidden from view.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Fungi can make their own food from sunlight.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Fungi play an essential role in recycling dead matter.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Many plants depend on fungi to obtain nutrients.",
      "a": "yes"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> break down dead wood and leaves.<br><b>B</b> to obtain nutrients from the soil.<br><b>C</b> cannot make food from sunlight.<br><b>D</b> the temporary fruiting body of the fungus.<br><b>E</b> a kingdom of their own.<br><b>F</b> only harmful to other living things.</div>",
      "t": "txt",
      "q": "Fungi are neither plants nor animals but",
      "a": "E"
     },
     {
      "t": "txt",
      "q": "Unlike plants, fungi",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "A mushroom is really only",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "Fungi are vital because they",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Most plants rely on fungi in their roots",
      "a": "B"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What is the underground network of fungal threads called?",
      "a": "mycelium|a mycelium"
     },
     {
      "t": "txt",
      "q": "What does a mushroom release in order to reproduce?",
      "a": "spores"
     },
     {
      "t": "txt",
      "q": "Which antibiotic was first discovered in a common mould?",
      "a": "penicillin"
     },
     {
      "t": "txt",
      "q": "Name one food or drink made using the fungus yeast.",
      "a": "bread|wine"
     }
    ]
   }
  ]
 },
 {
  "name": "Spider Silk · Fireworks · Chess",
  "blurb": "Materials · Chemistry · Games & AI · 🔴 Exam level",
  "passages": [
   {
    "title": "Spider Silk",
    "text": "<p><b>A</b> Spider silk is one of the most remarkable materials in the whole of nature. Fine as it is, it is astonishingly strong: weight for weight, a thread of spider silk is stronger than steel, and tougher even than the man-made fibres used in bulletproof vests. At the same time it is extraordinarily stretchy, able to stretch to several times its length before it finally snaps. This rare combination of strength and stretchiness has fascinated scientists for years, and they have long dreamed of copying it for themselves.</p>\n<p><b>B</b> A spider does not carry a store of ready-made thread inside it. Instead, the silk begins life as a liquid protein, produced in special glands within the spider's body. When the spider needs a thread, this liquid is forced out through tiny nozzles, called spinnerets, at the rear of its body. The crucial change happens as the liquid is pulled: the very act of drawing it out, rather than any squeezing, causes the protein to line up and harden almost instantly into a solid, elastic thread of silk.</p>\n<p><b>C</b> Most people imagine that a spider makes only one kind of silk, but in fact a single spider can produce several quite different types, each suited to a particular task. It uses a strong, stiff silk for the outer frame and spokes of its web, and a stretchy, sticky silk for the spiral that actually traps insects. It spins yet another kind to wrap up captured prey, a soft silk to protect its eggs, and a tough 'dragline' silk, on which it dangles in the air and by which it can lower itself quickly to safety.</p>\n<p><b>D</b> The most familiar use of silk is, of course, the web. The beautiful, wheel-shaped 'orb' web is a superb piece of natural engineering: light, nearly invisible, and yet strong enough to stop a flying insect without breaking. The spider itself usually waits at the centre or to one side, holding a signal thread, and feels the tiny vibrations that tell it exactly where a struggling insect has become stuck. Because a web soon becomes damaged and loses its stickiness, many spiders eat the old web and spin a fresh one, often every single day.</p>\n<p><b>E</b> Spider silk would be enormously useful to human beings, if only we could make enough of it. Engineers imagine using it for lightweight body armour, for strong but fine surgical stitches that the body readily accepts, and for ropes, nets and even parachute cords. The obvious solution — simply to farm spiders, as we farm silkworms for ordinary silk — turns out to be impossible, however, because spiders are fiercely territorial and will attack and eat one another if they are kept close together.</p>\n<p><b>F</b> The answer, scientists hope, lies in producing the silk without any spiders at all. By taking the spider genes that carry the instructions for making silk protein, and placing them into other living things — bacteria, yeast, goats and even silkworms — researchers have managed to produce spider-silk protein in useful amounts. Turning that protein into thread as fine and as strong as the real thing remains difficult, but progress is steady, and artificial spider silk may yet become one of the wonder materials of the future.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> From liquid to thread<br><b>ii</b> A wonder material<br><b>iii</b> Different silks for different jobs<br><b>iv</b> The engineering of the web<br><b>v</b> Copying nature<br><b>vi</b> A silk without spiders<br><b>vii</b> The largest spiders in the world<br><b>viii</b> Catching prey without a web</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Weight for weight, spider silk is stronger than steel.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "A spider squeezes out its silk already hard and solid.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Every spider can produce only a single type of silk.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Spider silk is more expensive to produce than steel.",
      "a": "not given"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">liquid &middot; protein &middot; spinnerets &middot; steel &middot; vibrations &middot; web</div>",
      "t": "txt",
      "q": "Spider silk is made from a ______ produced inside the spider's body.",
      "a": "protein"
     },
     {
      "t": "txt",
      "q": "This substance starts out as a ______ before it becomes a thread.",
      "a": "liquid"
     },
     {
      "t": "txt",
      "q": "It is drawn out of the body through nozzles called ______.",
      "a": "spinnerets"
     }
    ]
   },
   {
    "title": "Fireworks",
    "text": "<p>The dazzling fireworks that light up the sky on festival nights were invented, like so many things, in ancient China, more than a thousand years ago. They grew directly out of the discovery of gunpowder — a mixture of saltpetre, charcoal and sulphur. The very first fireworks were simply hollow bamboo tubes packed with gunpowder, which exploded with a loud bang when thrown onto a fire. They were used, at first, not for their beauty but to frighten away evil spirits and to mark celebrations with plenty of noise.</p>\n<p>A modern firework is a small marvel of engineering. It is a shell, packed with gunpowder and other chemicals, that is fired high into the sky by a first, 'lifting' charge. A carefully timed fuse then sets off a second explosion at the very top of its flight, which scatters and ignites dozens of small pellets known as 'stars'. It is these burning stars, flung outward in every direction, that create the glittering shapes we see far above us.</p>\n<p>The glorious colours are the result of clever chemistry. When different metals are heated in a flame, each one glows with its own particular colour, and firework makers add carefully chosen metal salts to the stars to produce them. Copper burns a brilliant blue — one of the hardest colours of all to achieve — while barium gives green, strontium a deep red, and sodium a bright yellow-gold. The shape a firework makes in the sky, whether a ring, a heart or a great glittering sphere, depends simply on how the stars are arranged inside the shell before it bursts.</p>\n<p>Gunpowder, of course, had a darker future. When knowledge of it spread westward to Europe, it was turned above all to war, giving the world the gun and the cannon and changing the nature of warfare for ever. In China, however, its first and favourite use was always celebration, and today fireworks have come full circle: computer-controlled and set precisely to music, they remain, as they began, a way of turning a simple chemical reaction into pure wonder and delight.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "Fireworks were first invented in:",
      "o": [
       "Europe",
       "China",
       "India",
       "Egypt"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The different colours of fireworks are produced by burning various:",
      "o": [
       "gases",
       "metal salts",
       "kinds of gunpowder",
       "types of paper"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The shape a firework makes in the sky depends on:",
      "o": [
       "the colour that is used",
       "how the 'stars' are arranged inside the shell",
       "the length of the fuse",
       "the weather that night"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "In China, gunpowder was originally used mainly for:",
      "o": [
       "warfare",
       "celebration",
       "mining",
       "cooking"
      ],
      "a": "B"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each colour with the metal that produces it, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> copper<br><b>B</b> strontium<br><b>C</b> barium</div>",
      "t": "txt",
      "q": "produces a brilliant blue colour",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "produces a deep red colour",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "produces a green colour",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "is the metal used to make fireworks burn blue",
      "a": "A"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD</b> from the passage.",
      "t": "txt",
      "q": "Fireworks developed from the discovery of ______.",
      "a": "gunpowder"
     },
     {
      "t": "txt",
      "q": "A firework rises, then a second explosion lights up small pellets called ______.",
      "a": "stars"
     },
     {
      "t": "txt",
      "q": "The metal ______ makes a firework burn a brilliant blue.",
      "a": "copper"
     },
     {
      "t": "txt",
      "q": "In Europe, gunpowder above all changed the nature of ______.",
      "a": "war|warfare"
     },
     {
      "t": "txt",
      "q": "Fireworks were invented in China more than a ______ years ago.",
      "a": "thousand"
     }
    ]
   },
   {
    "title": "The Game of Chess",
    "text": "<p>Chess is among the oldest and best-loved games in the world, played by millions of people in almost every country. Although many people assume it is a European game, its true origins lie far to the east: chess was first played in India around fifteen hundred years ago, before spreading to Persia, then across the Islamic world, and finally reaching Europe, changing gradually as it travelled.</p>\n<p>The pieces still carry the memory of an ancient Indian army. The pawns represent foot soldiers, the knights represent cavalry, and the piece we now call the rook, or castle, was once a war chariot. The queen, however, has a curious history. In the original game the piece beside the king was a weak adviser or minister, able to move only one square at a time; it was only in Europe, around five hundred years ago, that it was transformed into the queen — by far the most powerful piece on the whole board.</p>\n<p>The rules of chess are simple enough to learn in a few minutes, yet the game they create is almost boundless. After only a handful of moves, the number of possible games becomes staggeringly large — greater, it is often said, than the number of atoms in the entire universe. And, unlike games played with dice or cards, chess contains no element of luck whatsoever: every single game is decided purely by the skill of the two players.</p>\n<p>For this reason, chess became a famous test of intelligence, and, in time, of machine intelligence too. For decades, computers were simply no match for the best human players. Then, in 1997, a chess-playing computer built by IBM, called Deep Blue, defeated the reigning world champion, Garry Kasparov, in a match that made headlines around the globe and marked a turning point in the history of artificial intelligence. Today, chess programs are far stronger than any human being who has ever lived, and the latest ones have even taught themselves the game from scratch, discovering brilliant new strategies of their own. Chess endures, in the end, because it offers something rare: rules that a child can learn, and a depth that not even the greatest minds, human or machine, have ever fully exhausted.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "Chess was originally invented in Europe.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "The queen has always been the most powerful piece in chess.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Chess involves an element of luck.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "A computer first defeated a world chess champion in 1997.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Modern chess programs can now defeat the best human players.",
      "a": "yes"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> before spreading to Persia and Europe.<br><b>B</b> more possible games than atoms in the universe.<br><b>C</b> defeated the world champion in 1997.<br><b>D</b> became the most powerful piece in Europe.<br><b>E</b> no element of luck at all.<br><b>F</b> a game only for the wealthy.</div>",
      "t": "txt",
      "q": "Chess first appeared in India",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "The rules are simple, yet there are",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "The queen only later",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "Chess is a game of pure skill, with",
      "a": "E"
     },
     {
      "t": "txt",
      "q": "IBM's computer Deep Blue",
      "a": "C"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "In which country did chess originate?",
      "a": "india"
     },
     {
      "t": "txt",
      "q": "Which piece became the most powerful only after chess reached Europe?",
      "a": "queen|the queen"
     },
     {
      "t": "txt",
      "q": "What was the name of the IBM computer that defeated Kasparov?",
      "a": "deep blue"
     },
     {
      "t": "txt",
      "q": "In what year did a computer first defeat the world chess champion?",
      "a": "1997"
     }
    ]
   }
  ]
 },
 {
  "name": "The Horse · Rubber · Tulip Mania",
  "blurb": "History · Materials · Economics · 🔴 Exam level",
  "passages": [
   {
    "title": "The Horse in Human History",
    "text": "<p><b>A</b> Few animals have shaped the course of human history as profoundly as the horse. For thousands of years, until little more than a century ago, the horse was the fastest means of travel on land, the power behind farming, the key to victory in war, and the swiftest way to carry news and goods across a country. Empires rose and fell on the strength of their horses, and it is hard to imagine how human history could possibly have unfolded without them.</p>\n<p><b>B</b> The horse began as a wild animal of the open grasslands, and was first domesticated on the vast steppes of Central Asia around five or six thousand years ago. At first, it seems, people kept horses chiefly for their meat and their milk, much as they kept cattle. Only later did someone make the momentous discovery that a horse could be ridden — and with that single step the whole relationship between people and horses, and indeed the very pace of human life, was transformed for ever.</p>\n<p><b>C</b> For much of recorded history, the horse ruled the battlefield. A warrior mounted on a fast, strong horse held an enormous advantage over an enemy on foot, and horse-drawn chariots, and later disciplined cavalry, decided the fate of countless battles. The Mongols, perhaps the greatest horsemen of all, built the largest land empire in history on the speed and endurance of their horses, sweeping across whole continents faster than any army had ever moved before.</p>\n<p><b>D</b> Away from the battlefield, the horse was the tireless engine of everyday life. It pulled the plough that turned the farmer's fields, the cart that carried his crops to market, and the great carriages and wagons that moved people and goods along the roads. Horses hauled boats along canals and turned the machinery of early mills and mines. So central were they to work of every kind that even today we still measure the power of our engines in 'horsepower', a lasting reminder of the age of the horse.</p>\n<p><b>E</b> The horse's whole body is built for one thing above all: running. As an animal that in the wild survives by fleeing from its predators, it has long, slender legs and stands on a single large toe, the hoof, which lets it gallop swiftly over hard ground. Its great heart and powerful lungs supply the oxygen for sustained effort, and it can even doze while standing up, ready to flee in an instant. Its eyes, set on the sides of its head, give it a very wide field of view, so that danger can be spotted from almost any direction.</p>\n<p><b>F</b> The reign of the horse came to an end with surprising speed. Within a few decades of the twentieth century, the motor car, the lorry and the tractor had replaced it almost entirely for transport and for work, and the once-familiar sight of horses in the streets and fields largely vanished. Yet the horse has not disappeared. Freed from its ancient labours, it is now kept above all for sport, for leisure and for companionship, and the bond between people and horses, though changed, remains as strong as ever.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br><b>i</b> From wild herds to riders<br><b>ii</b> The animal that changed history<br><b>iii</b> Masters of the battlefield<br><b>iv</b> The engine of the old world<br><b>v</b> Built to run and to flee<br><b>vi</b> From necessity to leisure<br><b>vii</b> The many colours of horses<br><b>viii</b> How horses communicate</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Horses were first domesticated on the grasslands of Central Asia.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Horses were ridden before they were kept for their meat.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Horses are able to sleep while standing up.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "A horse can run faster than any other land animal.",
      "a": "not given"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE WORD</b> from the box.<div class=\"bank\">cavalry &middot; grasslands &middot; hoof &middot; horsepower &middot; leisure &middot; plough</div>",
      "t": "txt",
      "q": "Horses were first tamed on the ______ of Central Asia.",
      "a": "grasslands"
     },
     {
      "t": "txt",
      "q": "In war, soldiers mounted on horseback formed the ______.",
      "a": "cavalry"
     },
     {
      "t": "txt",
      "q": "On the farm, horses pulled the ______ that turned the fields.",
      "a": "plough"
     }
    ]
   },
   {
    "title": "Rubber",
    "text": "<p>Rubber is such a familiar material that it is easy to forget it comes from a living tree. Natural rubber is made from latex, the milky white sap that flows just beneath the bark of the rubber tree, which grows wild in the rainforests of the Amazon in South America. Long before any European set eyes on it, the peoples of the Amazon had learned to collect this sap and use it, shaping it into bouncing balls for their games and spreading it onto cloth to make the cloth waterproof.</p>\n<p>For a long time, however, rubber seemed more of a curiosity than a useful material, because raw rubber has a serious flaw. In hot weather it turns soft and unpleasantly sticky, while in the cold it becomes hard and brittle and cracks. In neither state is it much use at all. The problem was finally solved in 1839 by an American named Charles Goodyear, who discovered, partly by accident, that heating rubber together with sulphur completely transformed it. This process, called vulcanisation, made rubber strong, springy and stable in both heat and cold — and so made it genuinely useful at last.</p>\n<p>Suddenly the world could not get enough rubber, above all once bicycles and then motor cars created an enormous demand for rubber tyres. At first almost all the world's rubber came from the wild trees of Brazil, which guarded its valuable monopoly jealously. But rubber-tree seeds were eventually taken to Britain and then planted out in the colonies of Southeast Asia, where vast, orderly plantations, especially in Malaysia, soon grew to become the world's main source of natural rubber.</p>\n<p>In the twentieth century, chemists learned to make synthetic rubber out of oil, which proved especially important in wartime, when natural supplies were cut off. Yet natural rubber has never been entirely replaced, for it remains better than the synthetic kind for certain demanding uses. Today the two are used side by side, and by far the greatest use of all the rubber in the world, natural and synthetic alike, is still in the tyres of the vehicles that carry us about.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
      "t": "mc",
      "q": "Natural rubber comes from:",
      "o": [
       "a mineral dug from the ground",
       "the sap of a tree",
       "crude oil",
       "a kind of grass"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Raw, untreated rubber is difficult to use because it:",
      "o": [
       "is far too heavy",
       "becomes sticky when hot and brittle when cold",
       "is poisonous to the touch",
       "dissolves in water"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Vulcanisation, which made rubber genuinely useful, was discovered by:",
      "o": [
       "the peoples of the Amazon",
       "Charles Goodyear",
       "British plantation owners",
       "early car makers"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Vulcanisation involves heating rubber together with:",
      "o": [
       "water",
       "oil",
       "sulphur",
       "salt"
      ],
      "a": "C"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each fact with the correct people, person or place, <b>A</b>, <b>B</b> or <b>C</b>. (An option may be chosen more than once.)<div class=\"bank\"><b>A</b> the peoples of the Amazon<br><b>B</b> Charles Goodyear<br><b>C</b> the plantations of Southeast Asia</div>",
      "t": "txt",
      "q": "used rubber long before Europeans ever arrived",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "discovered that heating rubber with sulphur improved it",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "became the world's main source of natural rubber",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "made balls and waterproof cloth from latex",
      "a": "A"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD OR A NUMBER</b> from the passage.",
      "t": "txt",
      "q": "The milky sap of the rubber tree is called ______.",
      "a": "latex"
     },
     {
      "t": "txt",
      "q": "Goodyear discovered vulcanisation in the year ______.",
      "a": "1839"
     },
     {
      "t": "txt",
      "q": "By far the greatest single use of rubber today is in ______.",
      "a": "tyres|tyre"
     },
     {
      "t": "txt",
      "q": "Rubber-tree seeds were taken from Brazil to plantations in ______ Asia.",
      "a": "southeast|south-east"
     },
     {
      "t": "txt",
      "q": "______ rubber, made from oil, was later developed as an alternative.",
      "a": "synthetic"
     }
    ]
   },
   {
    "title": "Tulip Mania",
    "text": "<p>In the 1630s, the wealthy Dutch Republic was gripped by one of the strangest episodes in the whole history of money. For a few extraordinary years, the price of tulip bulbs rose higher and higher, until it reached dizzying, unbelievable heights — and then, almost overnight, collapsed. The affair, known ever since as 'tulip mania', is often described as the very first great financial bubble.</p>\n<p>The tulip was then a fairly new and exotic flower in Europe, having been brought from the Ottoman Empire, in what is now Turkey, only a few decades earlier. Its bold colours quickly made it a fashionable luxury and a symbol of wealth, and the most prized bulbs of all were those that produced strange, flame-like patterns on their petals. Nobody at the time understood what caused these beautiful patterns; in fact, as scientists discovered only very much later, they were the work of a virus that infected the plant.</p>\n<p>As the craze grew, prices climbed to astonishing levels. A single rare bulb, it is said, could change hands for more than the price of a fine house on an Amsterdam canal. People began to buy and sell not only the bulbs themselves but written contracts promising to deliver bulbs that were still in the ground, trading these promises over and over — each buyer expecting to sell them on at a still higher price to someone else. Then, early in 1637, confidence suddenly evaporated. Buyers vanished, prices crashed, and many people were left holding contracts for bulbs that were now worth almost nothing.</p>\n<p>For centuries the story has been told as a great warning about human greed and folly. Yet some historians now argue that the tale has been much exaggerated in the retelling: relatively few people were actually ruined, most of them wealthy speculators who could well afford the loss, and the wider Dutch economy came through almost untouched. Whatever the truth of the details, tulip mania endures as the classic example of a speculative bubble — of what can happen when crowds of people pay ever more for something, not because of what it is really worth, but simply because they expect others to pay even more for it tomorrow.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "Tulip mania took place in the Dutch Republic.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Tulips were originally native to the Netherlands.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "At the height of the mania, a single bulb could cost more than a house.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "All historians agree that tulip mania ruined the Dutch economy.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "The patterns on the most valued tulips were caused by a virus.",
      "a": "yes"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, <b>A–F</b>.<div class=\"bank\"><b>A</b> more than the price of a house.<br><b>B</b> that the story has been exaggerated.<br><b>C</b> caused by a virus unknown at the time.<br><b>D</b> expecting to sell them at a higher price.<br><b>E</b> the first great financial bubble.<br><b>F</b> soon banned by the government.</div>",
      "t": "txt",
      "q": "Tulip mania is often called",
      "a": "E"
     },
     {
      "t": "txt",
      "q": "People bought tulip bulbs",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "A single rare bulb could cost",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "The prized flame-like patterns were",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "Some historians now believe",
      "a": "B"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN THREE WORDS</b> from the passage.",
      "t": "txt",
      "q": "From which empire did tulips originally come to Europe?",
      "a": "ottoman|the ottoman empire|ottoman empire"
     },
     {
      "t": "txt",
      "q": "In which year did the price of tulip bulbs collapse?",
      "a": "1637"
     },
     {
      "t": "txt",
      "q": "What caused the admired patterns on the rarest tulips?",
      "a": "a virus|virus"
     },
     {
      "t": "txt",
      "q": "Tulip mania is often described as the first great financial ______.",
      "a": "bubble"
     }
    ]
   }
  ]
 },
 {
  "name": "The Commons · Behavioural Economics · Extremophiles",
  "blurb": "🔴 HARD · longer, denser passages with trickier questions",
  "level": "hard",
  "passages": [
   {
    "title": "The Tragedy of the Commons",
    "text": "<p><b>A</b> In 1968 the ecologist Garrett Hardin published an essay that would become one of the most cited in the social sciences. He asked his readers to imagine a pasture open to all, on which herders graze their cattle. Each herder, acting rationally, gains the full benefit of adding another animal, while the cost of the resulting overgrazing is shared among everyone. The individually sensible decision, multiplied across all herders, ends in collective ruin as the pasture is destroyed. Hardin called this outcome the \"tragedy of the commons\".</p>\n<p><b>B</b> The idea proved enormously influential because it appeared to explain so much. Overfished seas, polluted rivers, deforested hillsides and even a warming atmosphere could all be understood as commons degraded by the pursuit of individual self-interest. Wherever a resource was shared and access unrestricted, Hardin's logic seemed to predict its exhaustion.</p>\n<p><b>C</b> Hardin himself drew a stark conclusion: freedom in a commons brings ruin to all. To prevent catastrophe, he argued, societies must impose either strict government control or private ownership, since only external coercion or the self-interest of an owner could restrain the destructive logic of the commons. For decades this pessimistic prescription dominated environmental policy.</p>\n<p><b>D</b> Yet the theory had a serious flaw, as the political scientist Elinor Ostrom demonstrated. Studying real communities around the world — Swiss alpine pastures, Japanese forests, Filipino irrigation systems — she found that people had, for centuries, managed shared resources sustainably without either privatisation or the state. Hardin, she pointed out, had described not a true commons but an open-access free-for-all with no rules at all.</p>\n<p><b>E</b> Ostrom's research revealed that successful communities devised their own arrangements: clear boundaries defining who could use the resource, rules matched to local conditions, systems for monitoring behaviour, and graduated sanctions for those who broke the rules. Crucially, the users themselves, not distant authorities, made and enforced these agreements. In 2009 Ostrom became the first woman to win the Nobel Prize in economics, largely for this work.</p>\n<p><b>F</b> The debate is far from academic. As humanity confronts global commons such as the oceans and the atmosphere — resources no single government controls — the question of how shared things can be governed has never mattered more. Ostrom's insight, that neither pure markets nor pure states hold the only answer, offers a more hopeful and more complicated lesson than Hardin's bleak parable.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br>i&nbsp; A flawed but powerful idea<br>ii&nbsp; Ostrom's alternative evidence<br>iii&nbsp; The herder's fatal logic<br>iv&nbsp; The rules that make sharing work<br>v&nbsp; Hardin's harsh solution<br>vi&nbsp; Why the argument still matters<br>vii&nbsp; Criticism of Ostrom's methods<br>viii&nbsp; The economics of modern fishing</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Hardin's essay was largely ignored by other academics.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Hardin believed shared resources could be protected only by state control or private ownership.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Ostrom found that community-managed resources always outperform privately owned ones.",
      "a": "not given"
     },
     {
      "t": "tf",
      "q": "Ostrom argued that Hardin had actually described a situation with no rules.",
      "a": "true"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class=\"bank\">boundaries &middot; coercion &middot; monitoring &middot; sanctions &middot; owner &middot; authorities &middot; markets</div>",
      "t": "txt",
      "q": "Hardin thought only government coercion or a private ______ could prevent ruin.",
      "a": "owner"
     },
     {
      "t": "txt",
      "q": "Ostrom showed that communities set clear ______ around a resource.",
      "a": "boundaries"
     },
     {
      "t": "txt",
      "q": "They also imposed graduated ______ on those who broke the rules.",
      "a": "sanctions"
     }
    ]
   },
   {
    "title": "The Rise of Behavioural Economics",
    "text": "<p><b>A</b> For most of the twentieth century, mainstream economics rested on a convenient assumption: that people are rational actors who weigh costs and benefits and choose whatever maximises their own advantage. This idealised figure, sometimes called \"homo economicus\", made economic models elegant and mathematically tractable. It also, as a growing body of evidence showed, bore little resemblance to how real humans behave.</p>\n<p><b>B</b> The challenge came chiefly from psychology. In the 1970s Daniel Kahneman and Amos Tversky conducted a series of experiments demonstrating that people rely on mental shortcuts, or heuristics, that lead to systematic and predictable errors. Faced with uncertainty, we do not calculate probabilities like statisticians; we are swayed by how vividly we can imagine an outcome, or by whatever number happens to be mentioned first.</p>\n<p><b>C</b> One of their most striking findings concerned loss. Kahneman and Tversky showed that the pain of losing a sum of money is felt roughly twice as intensely as the pleasure of gaining the same amount. This \"loss aversion\" means that people will often take irrational risks to avoid a loss, while refusing sensible gambles that would, on average, leave them better off.</p>\n<p><b>D</b> The way a choice is presented, or \"framed\", also proved decisive. Told that a medical treatment has a ninety per cent survival rate, patients are far more willing to accept it than when told it has a ten per cent mortality rate — even though the two statements are identical. Such framing effects have no place in a world of perfectly rational actors.</p>\n<p><b>E</b> These ideas gradually moved from the fringes to the centre of the discipline. The economist Richard Thaler argued that, because our errors are predictable, choices can be gently redesigned to help people without restricting their freedom — a philosophy he called \"nudging\". Automatically enrolling employees in a pension scheme, while letting them opt out, dramatically increases savings, since inertia now works in their favour rather than against them.</p>\n<p><b>F</b> Critics warn that nudging can slide into manipulation, and that deciding what counts as a person's \"own good\" is far from straightforward. Nonetheless, behavioural insights are now used by governments worldwide, and in 2017 Thaler, like Kahneman before him, was awarded the Nobel Prize. The rational actor has not vanished from economics, but he now shares the stage with a messier, more human character.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, A, B, C or D.",
      "t": "mc",
      "q": "The assumption of 'homo economicus' appealed to economists because it:",
      "o": [
       "matched real behaviour",
       "made models mathematically neat",
       "was proven by experiments",
       "came from psychology"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Kahneman and Tversky showed that, under uncertainty, people:",
      "o": [
       "calculate probabilities carefully",
       "use shortcuts that cause predictable errors",
       "always avoid all risk",
       "ignore vivid outcomes"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "'Loss aversion' means the pain of a loss feels about:",
      "o": [
       "the same as an equal gain",
       "half as strong as a gain",
       "twice as strong as a gain",
       "ten times as strong"
      ],
      "a": "C"
     },
     {
      "t": "mc",
      "q": "Thaler's idea of 'nudging' aims to:",
      "o": [
       "ban bad choices",
       "tax bad choices",
       "redesign choices while keeping freedom",
       "remove choice entirely"
      ],
      "a": "C"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each statement with the correct person or group. <div class=\"bank\"><b>A</b> Kahneman &amp; Tversky &nbsp; <b>B</b> Thaler &nbsp; <b>C</b> Critics</div>",
      "t": "txt",
      "q": "developed the concept of loss aversion",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "proposed automatically enrolling people in pension schemes",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "warned that gentle redesign could become manipulation",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "showed that mental shortcuts cause systematic errors",
      "a": "A"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD ONLY</b> from the passage.",
      "t": "txt",
      "q": "The idealised rational human is sometimes called homo ______.",
      "a": "economicus"
     },
     {
      "t": "txt",
      "q": "Mental shortcuts are also known as ______.",
      "a": "heuristics"
     },
     {
      "t": "txt",
      "q": "The way a choice is presented is called its ______.",
      "a": "framing|frame"
     },
     {
      "t": "txt",
      "q": "Thaler called his philosophy '______'.",
      "a": "nudging"
     },
     {
      "t": "txt",
      "q": "Automatic pension enrolment works because ______ now helps savers.",
      "a": "inertia"
     }
    ]
   },
   {
    "title": "Extremophiles: Life at the Limits",
    "text": "<p><b>A</b> For a long time, biologists assumed that life required fairly gentle conditions: moderate temperatures, fresh water, neutral acidity. Then, in the 1960s, researchers began to find organisms thriving in places that ought to have been utterly lethal — in boiling hot springs, in water saltier than the sea, in acid that would dissolve metal. These hardy microbes were named extremophiles, \"lovers of extremes\".</p>\n<p><b>B</b> The discovery forced a rethink of the very limits of life. In the scalding water of deep-sea vents, where temperatures exceed a hundred degrees Celsius, entire ecosystems flourish without any sunlight, powered instead by chemicals rising from beneath the sea floor. Some microbes endure pressures that would crush a submarine; others survive being frozen solid for thousands of years, only to revive when thawed.</p>\n<p><b>C</b> Perhaps the most remarkable is a bacterium able to withstand radiation thousands of times stronger than a dose fatal to humans. It does so not by preventing damage to its DNA but by repairing the shattered genetic material with extraordinary speed. Such abilities suggest that life is far tougher, and far more inventive, than anyone had imagined.</p>\n<p><b>D</b> The implications extend beyond biology. If organisms can flourish in Earth's most hostile corners, then the harsh environments of other worlds — the frozen oceans thought to lie beneath the ice of certain moons, or the salty soils of Mars — may not be as barren as they appear. Extremophiles have thus become central to the search for life beyond our planet.</p>\n<p><b>E</b> They have practical uses too. An enzyme taken from a heat-loving microbe made possible the technique that allows scientists to copy DNA rapidly, a breakthrough underpinning much of modern medicine and forensic science. Other extremophiles are being studied for cleaning up toxic waste and for producing chemicals that function at temperatures where ordinary ones fail.</p>\n<p><b>F</b> Yet many scientists caution against assuming that extreme conditions are where life began. It is one thing for organisms to have adapted to extremes over billions of years; it is another to claim, as some do, that life first arose in such places. On that question, which remains unresolved, the extremophiles themselves are silent.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "The discovery of extremophiles changed scientists' understanding of the limits of life.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Deep-sea vent ecosystems depend on sunlight.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "The radiation-resistant bacterium avoids damage to its DNA in the first place.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Extremophiles have made scientists more optimistic about finding life on other worlds.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "It is now proven that life on Earth began in extreme environments.",
      "a": "no"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class=\"bank\">A&nbsp; without any sunlight.<br>B&nbsp; by repairing its DNA quickly.<br>C&nbsp; the technique for copying DNA.<br>D&nbsp; may support life elsewhere.<br>E&nbsp; remains an open question.<br>F&nbsp; are being studied to clean toxic waste.</div>",
      "t": "txt",
      "q": "Ecosystems around deep-sea vents survive ______",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "The radiation-resistant bacterium survives ______",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "An enzyme from a heat-loving microbe enabled ______",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "Harsh environments on other worlds ______",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "Whether life first began in extreme places ______",
      "a": "E"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What name is given to organisms that live in extreme conditions?",
      "a": "extremophiles"
     },
     {
      "t": "txt",
      "q": "What powers deep-sea vent ecosystems instead of sunlight?",
      "a": "chemicals"
     },
     {
      "t": "txt",
      "q": "Copying DNA rapidly was made possible by an ______ from a heat-loving microbe.",
      "a": "enzyme"
     },
     {
      "t": "txt",
      "q": "Frozen oceans are thought to lie beneath the ice of certain ______.",
      "a": "moons"
     }
    ]
   }
  ]
 },
 {
  "name": "Biomimicry · The History of Zero · Linguistic Relativity",
  "blurb": "🔴 HARD · abstract topics, heavy paraphrase, subtle traps",
  "level": "hard",
  "passages": [
   {
    "title": "Biomimicry",
    "text": "<p><b>A</b> Nature has had some 3.8 billion years to test its designs. Over that vast span, evolution has produced solutions to problems of energy, materials and structure that human engineers are only beginning to appreciate. Biomimicry — the practice of imitating nature's models to solve human problems — treats the living world not as a warehouse of resources to be extracted but as a library of ideas to be studied.</p>\n<p><b>B</b> The approach has produced some celebrated successes. A Japanese bullet train, whose blunt nose created a deafening boom when it burst from tunnels, was redesigned to resemble the streamlined beak of a kingfisher, a bird that dives into water with barely a splash. The result was a train that was quieter, faster and more efficient. The rough skin of sharks, which resists the build-up of bacteria, has inspired surfaces for hospitals that discourage infection without chemicals.</p>\n<p><b>C</b> Materials science has been especially fruitful. Spider silk, tougher for its weight than steel, is made at body temperature from water and protein, whereas human high-performance fibres demand extreme heat and toxic solvents. Mother-of-pearl, formed by molluscs, is astonishingly resistant to cracking. Understanding how nature builds such materials so cheaply and cleanly could transform manufacturing.</p>\n<p><b>D</b> Biomimicry also offers lessons in how systems, not just single objects, might be organised. In a mature forest or a coral reef, the waste of one organism becomes the food of another, so that nothing is truly discarded. Advocates argue that human economies, which generate mountains of waste, might be redesigned along the same closed-loop lines, an idea central to what is now called the circular economy.</p>\n<p><b>E</b> Enthusiasts sometimes overstate the case. Not every natural design is worth copying; evolution produces solutions that are merely \"good enough\" to survive, not perfect, and a structure that suits a beetle may be useless at human scale. Nature optimises for the survival of genes, which is not always the same as optimising for human convenience or efficiency.</p>\n<p><b>F</b> Even so, the deeper value of biomimicry may be less a set of specific inventions than a change of attitude. It invites engineers to ask not \"how can we bend nature to our will?\" but \"how does nature already solve this?\" In an age of environmental strain, that humbler question may prove the most useful design principle of all.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br>i&nbsp; Lessons from whole systems<br>ii&nbsp; Nature as a library of designs<br>iii&nbsp; Famous imitations<br>iv&nbsp; Copying nature's materials<br>v&nbsp; A word of caution<br>vi&nbsp; A change of attitude<br>vii&nbsp; The cost of research<br>viii&nbsp; Nature's greatest failures</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "The redesigned bullet train was modelled on a kingfisher's beak.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "Spider silk requires very high temperatures to produce.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Biomimicry has already replaced most traditional manufacturing.",
      "a": "not given"
     },
     {
      "t": "tf",
      "q": "Evolution always produces perfect solutions.",
      "a": "false"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class=\"bank\">waste &middot; forest &middot; genes &middot; chemicals &middot; protein &middot; splash &middot; convenience</div>",
      "t": "txt",
      "q": "Shark skin has inspired surfaces that resist bacteria without ______.",
      "a": "chemicals"
     },
     {
      "t": "txt",
      "q": "In a mature ______, the waste of one organism feeds another.",
      "a": "forest"
     },
     {
      "t": "txt",
      "q": "Nature optimises for the survival of ______, not for human needs.",
      "a": "genes"
     }
    ]
   },
   {
    "title": "The History of Zero",
    "text": "<p><b>A</b> Of all the numbers, zero is the strangest and, historically, the most controversial. It is hard for us to imagine counting without it, yet for most of human history mathematics managed without a symbol for nothing. Counting, after all, begins with things that are present; the absence of things seems to need no number at all.</p>\n<p><b>B</b> The ancient Babylonians, some four thousand years ago, took a first step. To avoid confusion in their place-value system — distinguishing, say, sixty from six hundred — they eventually used a mark to show an empty position. But this was merely a placeholder, a gap-filler; it was not yet a number that could itself be added or multiplied.</p>\n<p><b>C</b> The decisive leap came in India. By around the seventh century, Indian mathematicians, above all Brahmagupta, treated zero as a number in its own right and set out rules for calculating with it. Zero, they saw, was what remained when a quantity was subtracted from itself. This was a profound conceptual shift: nothing had become something.</p>\n<p><b>D</b> From India the concept travelled, carried by scholars of the medieval Islamic world, who developed it further and passed it, along with the numerals we still call \"Arabic\", towards Europe. There, however, it met resistance. Zero was viewed with suspicion, even fear; some authorities associated the void it represented with disorder, and a few cities banned its use.</p>\n<p><b>E</b> The obstacle was not merely superstition. Zero genuinely misbehaves. Dividing by it produces nonsense, and its properties troubled mathematicians for centuries. Yet these very difficulties drove mathematics forward, forcing thinkers to define their terms with new rigour and eventually making possible the calculus on which modern science depends.</p>\n<p><b>F</b> Today zero is so familiar that its strangeness is invisible. It sits, unremarked, at the heart of every computer, whose entire language is written in noughts and ones. A symbol once feared as the mark of nothingness turned out to be one of the most powerful ideas humanity has ever devised.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, A, B, C or D.",
      "t": "mc",
      "q": "For most of human history, mathematics:",
      "o": [
       "used several symbols for zero",
       "functioned without a symbol for zero",
       "forbade counting",
       "treated zero as the first number"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The Babylonian mark for an empty position was:",
      "o": [
       "a full number",
       "a placeholder only",
       "invented in India",
       "used for division"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Brahmagupta's key contribution was to:",
      "o": [
       "invent Arabic numerals",
       "treat zero as a number with rules",
       "ban zero",
       "build the first computer"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "In medieval Europe, zero was initially:",
      "o": [
       "welcomed at once",
       "met with suspicion",
       "kept secret by scholars",
       "used only for calculus"
      ],
      "a": "B"
     },
     {
      "head": "<b>Questions 18–21</b> · Match each achievement with the correct civilisation. <div class=\"bank\"><b>A</b> Babylonians &nbsp; <b>B</b> Indians &nbsp; <b>C</b> medieval Islamic scholars</div>",
      "t": "txt",
      "q": "first used a placeholder for an empty position",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "treated zero as a number in its own right",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "passed zero and the numerals towards Europe",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "wrote rules for calculating with zero",
      "a": "B"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD ONLY</b> from the passage.",
      "t": "txt",
      "q": "For a long time zero was seen not as a number but as a ______.",
      "a": "placeholder"
     },
     {
      "t": "txt",
      "q": "Indians realised zero was what remained when a quantity was subtracted from ______.",
      "a": "itself"
     },
     {
      "t": "txt",
      "q": "The numerals spread by Islamic scholars are still called ______.",
      "a": "Arabic"
     },
     {
      "t": "txt",
      "q": "A few European cities ______ the use of zero.",
      "a": "banned"
     },
     {
      "t": "txt",
      "q": "A computer's language is written in noughts and ______.",
      "a": "ones"
     }
    ]
   },
   {
    "title": "Does Language Shape Thought?",
    "text": "<p><b>A</b> Does the language you speak shape the way you think? The question, known as linguistic relativity, has provoked one of the longest-running debates in the study of the mind. In its boldest form, associated with the linguist Benjamin Lee Whorf in the 1930s, the claim was dramatic: that the categories of our language determine, and even limit, the thoughts we are able to have.</p>\n<p><b>B</b> This strong version fell out of favour. Critics pointed out that people can plainly think about things their language lacks a single word for, and that we are not the prisoners of our vocabulary. If language rigidly controlled thought, they argued, translation would be impossible and new ideas could never arise. The claim was dismissed, for a time, as an appealing but unfounded myth.</p>\n<p><b>C</b> In recent decades, however, a subtler version has won cautious support. Careful experiments suggest that language does not imprison thought but does nudge it. Speakers of languages that use compass directions — \"north\", \"south\" — rather than \"left\" and \"right\" prove remarkably good at staying oriented, even in unfamiliar places, because their language obliges them to track direction constantly.</p>\n<p><b>D</b> Colour offers another example. Languages divide the spectrum differently; some treat blue and green as shades of a single colour, while Russian, for instance, has separate basic words for lighter and darker blue. Experiments show that Russian speakers are slightly faster at telling these two blues apart, as though the linguistic boundary had sharpened their perception.</p>\n<p><b>E</b> Grammar, too, may leave its mark. In some languages a speaker must, by the very structure of the verb, indicate whether an event was witnessed personally or merely reported. Speakers of such languages, some researchers suggest, may pay closer habitual attention to the sources of their information, though such claims remain difficult to test.</p>\n<p><b>F</b> The modern consensus is a moderate one. Language is not a cage, but nor is it a neutral vehicle that leaves thought untouched. It is better pictured as a lens, subtly colouring the way its speakers attend to the world — a conclusion less sensational than Whorf's, but far better supported by evidence.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "The strong version of linguistic relativity claimed language limits which thoughts are possible.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Critics accepted that translation between languages is impossible.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Speakers of compass-direction languages are unusually good at staying oriented.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Russian speakers are slower than others at distinguishing two shades of blue.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Claims about grammar and attention to information sources are easy to test.",
      "a": "no"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class=\"bank\">A&nbsp; nudges it in subtle ways.<br>B&nbsp; track direction constantly.<br>C&nbsp; sharpened their perception of colour.<br>D&nbsp; whether an event was witnessed or reported.<br>E&nbsp; an appealing but unfounded myth.<br>F&nbsp; impossible to learn a second language.</div>",
      "t": "txt",
      "q": "For a time, the strong version was dismissed as ______",
      "a": "E"
     },
     {
      "t": "txt",
      "q": "Compass-direction languages oblige speakers to ______",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "A linguistic boundary seems to have ______",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "Some grammars force speakers to mark ______",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "The modern view is that language does not control thought but ______",
      "a": "A"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "Which linguist is associated with the strong version of the theory?",
      "a": "Whorf|Benjamin Lee Whorf"
     },
     {
      "t": "txt",
      "q": "Instead of 'left' and 'right', some languages use ______ directions.",
      "a": "compass"
     },
     {
      "t": "txt",
      "q": "The passage compares language not to a cage but to a ______.",
      "a": "lens"
     },
     {
      "t": "txt",
      "q": "Russian has separate basic words for lighter and darker ______.",
      "a": "blue"
     }
    ]
   }
  ]
 },
 {
  "name": "Game Theory · The Microbiome · The Anthropocene",
  "blurb": "🔴 HARD · dense argument, close distractors",
  "level": "hard",
  "passages": [
   {
    "title": "Game Theory",
    "text": "<p><b>A</b> Game theory is the mathematical study of strategic decisions — situations in which the outcome for each participant depends not only on their own choices but on the choices of others. Though its roots lie in the analysis of parlour games such as poker, it has grown into a powerful tool used in economics, biology, politics and computer science.</p>\n<p><b>B</b> The field was largely founded in the 1940s by the mathematician John von Neumann and the economist Oskar Morgenstern. Their work was later extended by John Nash, who introduced the idea of an equilibrium: a set of choices from which no player can gain by changing their own strategy alone, given what everyone else is doing.</p>\n<p><b>C</b> The most famous illustration is the \"prisoner's dilemma\". Two suspects are questioned separately and each is offered a deal to betray the other. If both stay silent, both receive a light sentence; if both betray, both suffer heavily; but if one betrays while the other stays silent, the betrayer goes free. Rationally, each is tempted to betray — yet if both do so, both end up worse off than if they had cooperated.</p>\n<p><b>D</b> The dilemma captures a deep and uncomfortable truth: individually rational choices can produce collectively disastrous results. It helps explain why nations struggle to limit weapons, why businesses undercut each other on price, and why people overuse shared resources, even when everyone would benefit from restraint.</p>\n<p><b>E</b> Yet cooperation does emerge in the real world, and game theory helps explain why. When the same players interact repeatedly, betrayal can be punished and trust rewarded. A famously successful strategy, \"tit for tat\", simply cooperates first and then mirrors whatever the other player did last, proving that a willingness to cooperate, combined with a readiness to retaliate, can flourish.</p>\n<p><b>F</b> Biology, too, has embraced these ideas. Animal behaviours once thought merely instinctive — when to fight, when to share, when to signal honestly — can be modelled as strategies shaped by evolution. In this way a branch of mathematics born from card games now illuminates the behaviour of everything from corporations to cells.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br>i&nbsp; The founders of the field<br>ii&nbsp; A dilemma with wide relevance<br>iii&nbsp; What game theory studies<br>iv&nbsp; How cooperation can survive<br>v&nbsp; The classic thought experiment<br>vi&nbsp; From mathematics to biology<br>vii&nbsp; Games purely as entertainment<br>viii&nbsp; Criticism of Nash's equilibrium</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Game theory is used only in economics.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "In the prisoner's dilemma, the two suspects are questioned together.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "The 'tit for tat' strategy begins by betraying the other player.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "John Nash won a Nobel Prize for his work.",
      "a": "not given"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class=\"bank\">equilibrium &middot; betray &middot; repeatedly &middot; instinct &middot; cooperate &middot; poker &middot; punish</div>",
      "t": "txt",
      "q": "Nash described an ______ in which no player gains by changing strategy alone.",
      "a": "equilibrium"
     },
     {
      "t": "txt",
      "q": "In the prisoner's dilemma each is tempted to ______ the other.",
      "a": "betray"
     },
     {
      "t": "txt",
      "q": "When players meet ______, cooperation can survive.",
      "a": "repeatedly"
     }
    ]
   },
   {
    "title": "The Human Microbiome",
    "text": "<p><b>A</b> The human body is often described as a single organism, but in truth each of us is a walking ecosystem. Trillions of microbes — bacteria, viruses and fungi — live in and on our bodies, above all in the gut. Together they are known as the microbiome, and their genes vastly outnumber our own. In a real sense, we are more microbial than human.</p>\n<p><b>B</b> For most of medical history these microbes were ignored or, when noticed, regarded as enemies to be destroyed. The discovery of antibiotics reinforced the idea that bacteria were simply agents of disease. Only in recent decades have scientists come to appreciate that the great majority are harmless or positively beneficial.</p>\n<p><b>C</b> The gut microbiome performs functions our own bodies cannot. Its bacteria break down fibres we could not otherwise digest, synthesise certain vitamins, and train the immune system to distinguish friend from foe. A healthy, diverse microbiome, research increasingly suggests, is a foundation of good health.</p>\n<p><b>D</b> When that community is disturbed, trouble may follow. Studies have linked an unbalanced microbiome to conditions ranging from obesity and diabetes to allergies, and even, more controversially, to mood and mental health, through what is sometimes called the \"gut–brain axis\". Much of this research, however, is still young, and cause and effect are hard to separate.</p>\n<p><b>E</b> One striking treatment has already proven its worth. For patients with a dangerous gut infection resistant to antibiotics, transplanting stool — and with it a healthy microbiome — from a donor can restore balance with remarkable success. Once regarded as bizarre, the procedure is now an accepted therapy.</p>\n<p><b>F</b> The field is advancing quickly but demands caution. Popular enthusiasm has raced ahead of the evidence, and the shelves are full of probiotic products making claims that science cannot yet support. What is clear is that the tiny passengers we carry are not mere hitchhikers but partners, shaped by our diet and shaping our health in return.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, A, B, C or D.",
      "t": "mc",
      "q": "The microbiome consists of:",
      "o": [
       "only bacteria",
       "microbes living in and on the body",
       "human genes only",
       "antibiotics"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "For most of medical history, microbes were regarded as:",
      "o": [
       "partners",
       "harmless",
       "enemies to be destroyed",
       "vitamins"
      ],
      "a": "C"
     },
     {
      "t": "mc",
      "q": "Gut bacteria help the body by:",
      "o": [
       "producing antibiotics",
       "digesting fibre and making vitamins",
       "replacing the immune system",
       "causing obesity"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The stool-transplant treatment is used for:",
      "o": [
       "all diseases",
       "a gut infection resistant to antibiotics",
       "mental illness",
       "allergies"
      ],
      "a": "B"
     },
     {
      "head": "<b>Questions 18–21</b> · Which paragraph (A–F) contains the following information? Write the correct letter.",
      "t": "txt",
      "q": "a treatment involving a transplant from a donor",
      "a": "E"
     },
     {
      "t": "txt",
      "q": "a warning that products overstate the evidence",
      "a": "F"
     },
     {
      "t": "txt",
      "q": "the claim that our microbial genes outnumber our own",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "links between the microbiome and various diseases",
      "a": "D"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD ONLY</b> from the passage.",
      "t": "txt",
      "q": "Most of our microbes live in the ______.",
      "a": "gut"
     },
     {
      "t": "txt",
      "q": "Antibiotics reinforced the idea that bacteria cause ______.",
      "a": "disease"
     },
     {
      "t": "txt",
      "q": "Gut bacteria help train the ______ system.",
      "a": "immune"
     },
     {
      "t": "txt",
      "q": "The gut–brain ______ may link microbes to mood.",
      "a": "axis"
     },
     {
      "t": "txt",
      "q": "Products claiming gut benefits are often called ______.",
      "a": "probiotic|probiotics"
     }
    ]
   },
   {
    "title": "The Anthropocene",
    "text": "<p><b>A</b> Geologists divide Earth's history into named intervals — eras, periods and epochs — each marked by distinctive layers in the rock. For the last 11,700 years we have officially lived in the Holocene, the warm, stable epoch in which all of human civilisation arose. Now a growing number of scientists argue that we have entered a new epoch, one defined not by natural forces but by ourselves: the Anthropocene, the \"age of humans\".</p>\n<p><b>B</b> The case rests on the sheer scale of humanity's impact. We have transformed more than half the planet's land surface, dammed most of its major rivers, and altered the chemistry of its air and oceans. Human activity now moves more rock and soil than all the world's rivers combined. Future geologists, the argument runs, will read our presence unmistakably in the rock.</p>\n<p><b>C</b> What that lasting signal will be is much debated. Candidates include the plastics that now litter every environment, the ash from burning fossil fuels, the bones of the billions of chickens we consume, and — most precisely datable of all — the radioactive particles scattered worldwide by nuclear tests in the mid-twentieth century.</p>\n<p><b>D</b> That date, around 1950, is favoured by many, since it marks the \"Great Acceleration\", a sudden post-war surge in population, consumption and pollution. Others argue for an earlier start, with the rise of farming or the Industrial Revolution, while a few reject the whole idea, insisting the changes are too recent to count as a true geological epoch.</p>\n<p><b>E</b> The dispute is not merely technical. To name an epoch after ourselves is to make a statement about responsibility. It declares that humanity has become a geological force, on a par with volcanoes and asteroids, and that the future of the planet's systems now lies, to a frightening degree, in our hands.</p>\n<p><b>F</b> Whether or not the term is formally adopted, its popularity reflects a genuine shift in understanding. We can no longer think of nature as a vast backdrop, indifferent to our doings. The line between the human and the natural, once seemingly clear, has, in the space of a few generations, all but dissolved.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "Human civilisation developed during the Holocene epoch.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Humans now move less rock and soil than the world's rivers.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "There is complete agreement on when the Anthropocene began.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Radioactive particles from nuclear tests offer a precisely datable marker.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "The idea of the Anthropocene is purely technical, with no wider meaning.",
      "a": "no"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class=\"bank\">A&nbsp; arose during the Holocene.<br>B&nbsp; more rock than all the world's rivers.<br>C&nbsp; the radioactive fallout of nuclear tests.<br>D&nbsp; the post-war \"Great Acceleration\".<br>E&nbsp; that humans are now a geological force.<br>F&nbsp; the eruption of a single volcano.</div>",
      "t": "txt",
      "q": "All of human civilisation ______",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Human activity now moves ______",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "The most precisely datable marker is ______",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "The date of about 1950 marks ______",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "Naming the epoch declares ______",
      "a": "E"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What is the current official epoch called?",
      "a": "Holocene"
     },
     {
      "t": "txt",
      "q": "What name means the 'age of humans'?",
      "a": "Anthropocene"
     },
     {
      "t": "txt",
      "q": "The sudden post-war surge is called the Great ______.",
      "a": "Acceleration"
     },
     {
      "t": "txt",
      "q": "Nuclear tests scattered radioactive ______ worldwide.",
      "a": "particles"
     }
    ]
   }
  ]
 },
 {
  "name": "Dark Matter · Origins of Agriculture · Swarm Intelligence",
  "blurb": "🔴 HARD · science & prehistory, heavy inference",
  "level": "hard",
  "passages": [
   {
    "title": "Dark Matter",
    "text": "<p><b>A</b> One of the great embarrassments of modern science is that we do not know what most of the universe is made of. The atoms that form stars, planets and people — everything we can see and touch — account for only about five per cent of the cosmos. The rest is invisible, detectable only by its effects. Roughly a quarter is thought to be \"dark matter\", and the remainder a still more mysterious \"dark energy\".</p>\n<p><b>B</b> The first hint of dark matter came in the 1930s, when the astronomer Fritz Zwicky noticed that galaxies in a distant cluster were moving far too fast. The visible matter they contained could not possibly generate enough gravity to hold them together; something unseen, he proposed, must be supplying the extra pull. His idea was ignored for decades.</p>\n<p><b>C</b> Stronger evidence arrived in the 1970s from the work of Vera Rubin, who studied how stars orbit within galaxies. According to the visible matter, stars at the edge should move slowly; instead they raced round just as fast as those near the centre. The simplest explanation was that each galaxy sits within a vast, invisible halo of dark matter, whose gravity keeps the outer stars moving quickly.</p>\n<p><b>D</b> What dark matter actually is remains unknown. It emits no light, which is why we cannot see it, and it appears to pass straight through ordinary matter. Most physicists suspect it consists of some as-yet-undiscovered particle, and enormous, sensitive detectors have been built deep underground to catch one. So far, none has been found.</p>\n<p><b>E</b> A minority of scientists take a bolder view: that dark matter does not exist at all, and that our theory of gravity is simply wrong on the largest scales. Modifying the laws of gravity can reproduce some observations, but this approach struggles to explain everything that dark matter accounts for, and most researchers remain unconvinced.</p>\n<p><b>F</b> The stakes could hardly be higher. To resolve the puzzle would be to discover the substance that makes up most of the material universe and shapes the largest structures within it. Until then, we are in the curious position of understanding, in detail, only a tiny fraction of the cosmos we inhabit.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br>i&nbsp; The first overlooked clue<br>ii&nbsp; An unknown substance<br>iii&nbsp; How much we cannot see<br>iv&nbsp; Evidence from spinning galaxies<br>v&nbsp; A rival explanation<br>vi&nbsp; Why the answer matters<br>vii&nbsp; The birth of the universe<br>viii&nbsp; Building better telescopes</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Ordinary atoms make up most of the universe.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Zwicky's early idea was quickly accepted by other scientists.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Detectors built to find dark-matter particles have so far succeeded.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Dark-matter detectors are placed deep underground.",
      "a": "true"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class=\"bank\">halo &middot; light &middot; gravity &middot; particle &middot; centre &middot; energy &middot; visible</div>",
      "t": "txt",
      "q": "Dark matter emits no ______, so it cannot be seen directly.",
      "a": "light"
     },
     {
      "t": "txt",
      "q": "Vera Rubin's work suggested each galaxy sits in an invisible ______ of dark matter.",
      "a": "halo"
     },
     {
      "t": "txt",
      "q": "Most physicists think dark matter is an unknown ______.",
      "a": "particle"
     }
    ]
   },
   {
    "title": "The Origins of Agriculture",
    "text": "<p><b>A</b> For more than ninety per cent of our species' existence, humans lived as hunter-gatherers, moving in small bands to follow game and gather wild plants. Then, beginning around twelve thousand years ago, in several parts of the world independently, people began to plant crops and keep animals. This shift to farming, often called the Neolithic Revolution, was among the most consequential in human history.</p>\n<p><b>B</b> Curiously, it may not have made individual lives better, at least at first. Studies of ancient skeletons suggest that early farmers were often shorter, less well nourished and more prone to disease than the hunter-gatherers who preceded them. Their diet, based on a few staple crops, was narrower, and living close to animals and to other people bred new illnesses.</p>\n<p><b>C</b> Why, then, did farming spread? The likeliest answer is numbers. Although farming was harder work and less healthy, it produced far more food per unit of land, which allowed populations to grow. Farming communities, however unhealthy, simply out-bred and displaced their hunter-gatherer neighbours.</p>\n<p><b>D</b> Farming also transformed society itself. A settled life allowed people to accumulate possessions and to store surplus grain — a store that had to be defended and could be seized. For the first time, some people could live off the labour of others, and durable differences in wealth and power began to appear.</p>\n<p><b>E</b> The domesticated species themselves were changed in the process. Wild wheat scatters its seeds to reproduce; the plants farmers favoured were mutants whose seeds stayed on the stalk, easy to harvest but now dependent on humans to sow them. Animals, too, were bred to be smaller, tamer and more useful. Human and crop had entered a partnership from which neither could easily withdraw.</p>\n<p><b>F</b> The consequences are still unfolding. Everything that we call civilisation — cities, writing, states, and the vast human population itself — ultimately rests on the surplus that agriculture first made possible, along with the inequalities that came with it.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, A, B, C or D.",
      "t": "mc",
      "q": "For most of human existence, people lived as:",
      "o": [
       "farmers",
       "hunter-gatherers",
       "city-dwellers",
       "herders"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Compared with hunter-gatherers, early farmers were often:",
      "o": [
       "taller and healthier",
       "shorter and less healthy",
       "longer-lived",
       "better fed"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Farming spread mainly because it:",
      "o": [
       "was easier work",
       "was healthier",
       "produced more food per unit of land",
       "required no animals"
      ],
      "a": "C"
     },
     {
      "t": "mc",
      "q": "Stored surplus grain led to:",
      "o": [
       "equal societies",
       "differences in wealth and power",
       "the end of farming",
       "smaller populations"
      ],
      "a": "B"
     },
     {
      "head": "<b>Questions 18–21</b> · Which paragraph (A–F) contains the following information? Write the correct letter.",
      "t": "txt",
      "q": "evidence taken from ancient skeletons",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "how the wheat farmers favoured differed from wild wheat",
      "a": "E"
     },
     {
      "t": "txt",
      "q": "the independent origins of farming in several regions",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "the link between farming and modern civilisation",
      "a": "F"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD ONLY</b> from the passage.",
      "t": "txt",
      "q": "The shift to farming is called the ______ Revolution.",
      "a": "Neolithic"
     },
     {
      "t": "txt",
      "q": "Early farmers relied on a few ______ crops.",
      "a": "staple"
     },
     {
      "t": "txt",
      "q": "Farming allowed people to store surplus ______.",
      "a": "grain"
     },
     {
      "t": "txt",
      "q": "Wild wheat scatters its ______ to reproduce.",
      "a": "seeds"
     },
     {
      "t": "txt",
      "q": "Domesticated animals were bred to be smaller and ______.",
      "a": "tamer"
     }
    ]
   },
   {
    "title": "Swarm Intelligence",
    "text": "<p><b>A</b> A single ant is not impressive. With a brain smaller than a pinhead, it can do little on its own and would quickly perish if left alone. Yet a colony of ants can build elaborate nests, wage wars, farm fungus and find the shortest route to food, solving problems that no individual ant could begin to comprehend. This is the paradox of what scientists call swarm intelligence.</p>\n<p><b>B</b> The secret is that complex group behaviour can arise from simple individual rules, with no leader in charge. Ants find efficient paths not by planning but by laying down chemical trails; the shortest route is travelled fastest, so its trail grows strongest and attracts more ants, in a self-reinforcing loop. Order emerges from the bottom up, without anyone directing it.</p>\n<p><b>C</b> Such \"emergence\" is found throughout nature. A flock of thousands of starlings wheels through the sky as one, yet each bird merely follows a few simple rules about its nearest neighbours. A colony of bees chooses a new home through a kind of collective vote, with no bee overseeing the decision. The group behaves as if it were a single intelligent creature.</p>\n<p><b>D</b> These natural systems have inspired human technology. Engineers have written \"ant-colony\" algorithms that solve difficult routing problems — directing lorries, or data through a network — by mimicking the trail-laying of insects. Swarms of small, cheap robots, each following simple rules, are being developed to explore, to search collapsed buildings, or to monitor crops.</p>\n<p><b>E</b> The appeal of the approach is its robustness. A swarm has no leader whose loss would cause collapse and no single point of failure; if some members are lost, the rest carry on. Such systems are flexible and resilient in ways that centrally controlled ones are not, though they can also be harder to predict and control.</p>\n<p><b>F</b> There is a broader lesson here about intelligence itself. It need not reside in a single powerful brain. It can be distributed across a multitude of simple parts, emerging from their interactions — a possibility that challenges our very idea of what it means to be clever.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "A single ant can accomplish little on its own.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Ant colonies find short routes because a leader plans them.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "In a starling flock, each bird follows only a few simple rules.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Ant-colony algorithms have been used to solve routing problems.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "Swarm systems collapse if any single member is lost.",
      "a": "no"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class=\"bank\">A&nbsp; follows simple rules about its neighbours.<br>B&nbsp; the shortest trail grows strongest.<br>C&nbsp; directing lorries or data through a network.<br>D&nbsp; has no single point of failure.<br>E&nbsp; reside in one powerful brain.<br>F&nbsp; are difficult to breed in captivity.</div>",
      "t": "txt",
      "q": "Ants find efficient paths because ______",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "Each bird in a flock merely ______",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "Ant-colony algorithms solve problems such as ______",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "A swarm is robust because it ______",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "Intelligence need not ______",
      "a": "E"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What do scientists call the collective problem-solving of groups like ant colonies?",
      "a": "swarm intelligence"
     },
     {
      "t": "txt",
      "q": "What do ants lay down to mark efficient routes?",
      "a": "chemical trails|trails"
     },
     {
      "t": "txt",
      "q": "Order in a swarm arises from the ______ up.",
      "a": "bottom"
     },
     {
      "t": "txt",
      "q": "Swarms of small ______ are being developed to search collapsed buildings.",
      "a": "robots"
     }
    ]
   }
  ]
 },
 {
  "name": "Epigenetics · The Wisdom of Crowds · Convergent Evolution",
  "blurb": "🔴 HARD · abstract science, opinion & nuance",
  "level": "hard",
  "passages": [
   {
    "title": "Epigenetics: Beyond the Gene",
    "text": "<p><b>A</b> For much of the twentieth century, the gene was regarded as destiny. The DNA sequence inherited from our parents, it was thought, was a fixed blueprint that determined our traits, and the environment could do nothing to alter the instructions written in it. The emerging field of epigenetics has complicated this tidy picture.</p>\n<p><b>B</b> Epigenetics studies changes in how genes are used — switched on or off — without any change to the underlying DNA sequence itself. Chemical tags attached to the DNA, or to the proteins around which it is wound, can silence a gene or activate it. Every cell in your body carries the same DNA, yet a liver cell and a brain cell differ precisely because different genes are switched on in each.</p>\n<p><b>C</b> What has caused excitement, and controversy, is evidence that these switches can respond to the environment. Diet, stress and exposure to toxins appear able to alter the pattern of tags, changing which genes are active. In this way experience may leave a lasting mark on the body, without touching the genetic code itself.</p>\n<p><b>D</b> More startling still is the suggestion that some of these marks may be passed to offspring. Studies of populations that suffered famine have hinted that the effects of starvation in one generation can show up in the health of the next, and even the generation after that. If confirmed, this would mean that, to a limited degree, the experiences of parents could be biologically inherited.</p>\n<p><b>E</b> Such claims must be treated with care. Much of the evidence for inherited epigenetic effects comes from animals or from small human studies that are hard to interpret, and the mechanisms remain poorly understood. Enthusiasts have sometimes drawn sweeping conclusions that the data cannot yet support.</p>\n<p><b>F</b> Nevertheless, epigenetics has already reshaped biology. It has shown that the old opposition between \"nature\" and \"nurture\" is far too simple: the two are entwined, with the environment reaching in to influence the very expression of our genes. Heredity, it turns out, is more flexible, and more interesting, than we once believed.</p>",
    "Q": [
     {
      "head": "<b>Questions 1–6</b> · Choose the correct heading for each paragraph from the list.<div class=\"bank\"><b>List of Headings</b><br>i&nbsp; Switching genes on and off<br>ii&nbsp; The gene once seen as destiny<br>iii&nbsp; A response to the environment<br>iv&nbsp; Inheritance across generations<br>v&nbsp; Reasons for caution<br>vi&nbsp; Rethinking nature and nurture<br>vii&nbsp; The discovery of the DNA molecule<br>viii&nbsp; Treating inherited disease</div>",
      "t": "txt",
      "q": "Paragraph A",
      "a": "ii"
     },
     {
      "t": "txt",
      "q": "Paragraph B",
      "a": "i"
     },
     {
      "t": "txt",
      "q": "Paragraph C",
      "a": "iii"
     },
     {
      "t": "txt",
      "q": "Paragraph D",
      "a": "iv"
     },
     {
      "t": "txt",
      "q": "Paragraph E",
      "a": "v"
     },
     {
      "t": "txt",
      "q": "Paragraph F",
      "a": "vi"
     },
     {
      "head": "<b>Questions 7–10</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
      "t": "tf",
      "q": "Epigenetic changes alter the underlying DNA sequence.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Liver cells and brain cells contain different DNA.",
      "a": "false"
     },
     {
      "t": "tf",
      "q": "Some studies suggest the effects of famine can appear in later generations.",
      "a": "true"
     },
     {
      "t": "tf",
      "q": "The mechanisms of inherited epigenetic effects are now fully understood.",
      "a": "false"
     },
     {
      "head": "<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class=\"bank\">tags &middot; sequence &middot; famine &middot; environment &middot; blueprint &middot; offspring &middot; proteins</div>",
      "t": "txt",
      "q": "Epigenetics studies how genes are switched on or off without changing the DNA ______.",
      "a": "sequence"
     },
     {
      "t": "txt",
      "q": "Chemical ______ attached to DNA control this switching.",
      "a": "tags"
     },
     {
      "t": "txt",
      "q": "The pattern can respond to the ______, such as diet and stress.",
      "a": "environment"
     }
    ]
   },
   {
    "title": "The Wisdom of Crowds",
    "text": "<p><b>A</b> In 1906 the scientist Francis Galton attended a country fair where visitors competed to guess the weight of an ox. Expecting to prove the foolishness of the crowd, he collected the hundreds of guesses and calculated their average. To his surprise, the crowd's average guess was almost exactly the ox's true weight, and closer than any single expert's estimate. Galton had stumbled upon what is now called the wisdom of crowds.</p>\n<p><b>B</b> The principle is that, under the right conditions, the combined judgement of many ordinary people can be more accurate than that of any individual, however expert. Each person's guess carries some information and some error; when the guesses are averaged, the errors, being random, tend to cancel out, while the information adds up.</p>\n<p><b>C</b> The effect is not magic, and it does not always work. It depends, researchers have found, on certain conditions. The members of the crowd must be diverse, bringing different information and viewpoints; they must judge independently, without simply copying one another; and there must be a way to combine their judgements fairly.</p>\n<p><b>D</b> When these conditions fail, crowds can be foolish indeed. If people influence one another too much, independent errors are replaced by shared bias, and the crowd stampedes in the wrong direction — as in the financial bubbles where investors, watching each other, drive prices to absurd heights. The same crowd that is wise when independent becomes a mob when it merely imitates.</p>\n<p><b>E</b> The idea has found many modern uses. \"Prediction markets\", in which people bet on future events, often forecast elections and product sales more accurately than polls or panels of experts. Businesses and governments increasingly gather dispersed judgements to make decisions, harnessing the knowledge scattered among many heads.</p>\n<p><b>F</b> The lesson is a subtle one. Crowds are neither reliably wise nor reliably foolish; it depends entirely on how they are organised. Diversity and independence, it turns out, are not obstacles to good collective judgement but the very conditions that make it possible.</p>",
    "Q": [
     {
      "head": "<b>Questions 14–17</b> · Choose the correct letter, A, B, C or D.",
      "t": "mc",
      "q": "Galton expected the crowd's guesses to be:",
      "o": [
       "accurate",
       "foolish",
       "identical",
       "expert"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "The crowd's average guess turned out to be:",
      "o": [
       "far too high",
       "far too low",
       "almost exactly right",
       "impossible to calculate"
      ],
      "a": "C"
     },
     {
      "t": "mc",
      "q": "Averaging many guesses works because random errors:",
      "o": [
       "add up",
       "tend to cancel out",
       "disappear entirely",
       "are ignored"
      ],
      "a": "B"
     },
     {
      "t": "mc",
      "q": "Crowds become unreliable when members:",
      "o": [
       "judge independently",
       "are diverse",
       "influence one another too much",
       "stay silent"
      ],
      "a": "C"
     },
     {
      "head": "<b>Questions 18–21</b> · Which paragraph (A–F) contains the following information? Write the correct letter.",
      "t": "txt",
      "q": "an example from a country fair",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "the conditions that a wise crowd requires",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "an example of crowds behaving foolishly",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "a modern use of crowds in forecasting",
      "a": "E"
     },
     {
      "head": "<b>Questions 22–26</b> · Complete the sentences. Write <b>ONE WORD ONLY</b> from the passage.",
      "t": "txt",
      "q": "Galton averaged the crowd's guesses of an ox's ______.",
      "a": "weight"
     },
     {
      "t": "txt",
      "q": "When guesses are averaged, random ______ tend to cancel out.",
      "a": "errors"
     },
     {
      "t": "txt",
      "q": "A wise crowd must be ______, bringing different viewpoints.",
      "a": "diverse"
     },
     {
      "t": "txt",
      "q": "Members must judge ______, without copying others.",
      "a": "independently"
     },
     {
      "t": "txt",
      "q": "'Prediction ______' let people bet on future events.",
      "a": "markets"
     }
    ]
   },
   {
    "title": "Convergent Evolution",
    "text": "<p><b>A</b> Why do a shark, a dolphin and an extinct marine reptile all share the same sleek, torpedo-shaped body? They are only distantly related — one a fish, one a mammal, one a reptile — and each evolved from very different ancestors. Yet all three arrived, independently, at almost the same design. This phenomenon, in which unrelated organisms evolve similar features, is called convergent evolution.</p>\n<p><b>B</b> The explanation is that similar problems tend to have similar solutions. Anything that moves fast through water faces the same physical challenge of drag, and a streamlined shape is simply the best answer. Evolution, working separately on each lineage, was pushed towards the same form by the same unyielding laws of physics.</p>\n<p><b>C</b> Examples abound. The eye, one of nature's most complex organs, has evolved independently dozens of times. Wings for powered flight arose separately in insects, in the extinct pterosaurs, in birds and in bats. Even echolocation — navigating by sound — evolved twice over, in bats and in dolphins, using strikingly similar genetic changes.</p>\n<p><b>D</b> Convergence carries a deeper message about the nature of evolution. It is sometimes imagined as pure chance, a series of random accidents that could have turned out entirely differently. Convergence suggests otherwise: that there are only so many good ways to solve a given problem, and that evolution will find them again and again.</p>\n<p><b>E</b> This has fuelled a fascinating debate. If evolution repeatedly arrives at the same solutions, then life on other planets, should it exist, might not be as alien as science fiction imagines. Creatures shaped by the same physics — needing to see, to move, to capture energy — might converge on forms not wholly unlike those on Earth.</p>\n<p><b>F</b> Convergence must not be overstated, however. For every case of striking similarity there are countless unique forms that arose only once, and much of life's diversity is genuinely unrepeatable. Evolution is neither wholly random nor wholly predictable, but a subtle interplay of chance and constraint — of history and of physical law.</p>",
    "Q": [
     {
      "head": "<b>Questions 27–31</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.",
      "t": "yn",
      "q": "The shark, dolphin and marine reptile are closely related.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "A streamlined shape is an efficient solution for moving through water.",
      "a": "yes"
     },
     {
      "t": "yn",
      "q": "The eye has evolved only once in the history of life.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "Convergence suggests evolution is purely a matter of chance.",
      "a": "no"
     },
     {
      "t": "yn",
      "q": "The writer thinks convergence can explain all of life's diversity.",
      "a": "no"
     },
     {
      "head": "<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class=\"bank\">A&nbsp; the same laws of physics.<br>B&nbsp; evolved independently many times.<br>C&nbsp; may not be wholly alien.<br>D&nbsp; arose only once and are unrepeatable.<br>E&nbsp; reside in one powerful brain.<br>F&nbsp; are always larger than their ancestors.</div>",
      "t": "txt",
      "q": "Streamlined bodies were shaped by ______",
      "a": "A"
     },
     {
      "t": "txt",
      "q": "The complex eye has ______",
      "a": "B"
     },
     {
      "t": "txt",
      "q": "Life on other planets ______",
      "a": "C"
     },
     {
      "t": "txt",
      "q": "Much of life's diversity consists of forms that ______",
      "a": "D"
     },
     {
      "t": "txt",
      "q": "Similar problems, the passage says, tend to have similar ______.",
      "a": "solutions"
     },
     {
      "head": "<b>Questions 37–40</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.",
      "t": "txt",
      "q": "What is the term for unrelated organisms evolving similar features?",
      "a": "convergent evolution"
     },
     {
      "t": "txt",
      "q": "What physical challenge does anything moving fast through water face?",
      "a": "drag"
     },
     {
      "t": "txt",
      "q": "Besides bats, which animal evolved echolocation?",
      "a": "dolphins"
     },
     {
      "t": "txt",
      "q": "Evolution is described as an interplay of chance and ______.",
      "a": "constraint"
     }
    ]
   }
  ]
 }
];
