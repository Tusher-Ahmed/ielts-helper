/* ============================================================
   IELTS Academic Reading — 10 full tests (3 passages · 40 Q each)
   Topics chosen NOT to overlap with mock-data.js.
   Q types: tf (T/F/NG) · yn (Y/N/NG) · mc (A–D) · txt (completion,
   matching headings/info, short answer).  head = section instructions.
   ============================================================ */
const H = {
  tf:(a,b)=>`<b>Questions ${a}–${b}</b> · Do the statements agree with the passage? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.`,
  yn:(a,b)=>`<b>Questions ${a}–${b}</b> · Do the statements agree with the writer's views? Write <b>YES</b>, <b>NO</b> or <b>NOT GIVEN</b>.`,
  comp:(a,b,w)=>`<b>Questions ${a}–${b}</b> · Complete the sentences. Write <b>${w||'ONE WORD ONLY'}</b> from the passage.`,
  mc:(a,b)=>`<b>Questions ${a}–${b}</b> · Choose the correct letter, A, B, C or D.`,
  info:(a,b)=>`<b>Questions ${a}–${b}</b> · Which paragraph (A–F) contains the following information? Write the correct letter.`,
  sa:(a,b)=>`<b>Questions ${a}–${b}</b> · Answer using <b>NO MORE THAN TWO WORDS</b> from the passage.`,
  head:(a,b,list)=>`<b>Questions ${a}–${b}</b> · Choose the correct heading for each paragraph from the list.<div class="bank"><b>List of Headings</b><br>${list}</div>`
};

const READING = [
/* ================= TEST 1 ================= */
{name:"Lighthouses · The Bicycle · Laughter", blurb:"Engineering · History · Psychology",
 passages:[
  {title:"Lighthouses",
   text:`<p><b>A</b> For thousands of years, sailors have feared rocky coasts and hidden reefs, where countless ships have been wrecked. To warn them of danger, people built lighthouses — tall towers that shine a bright light out to sea. The earliest known example was the great Pharos of Alexandria, built in Egypt over two thousand years ago and counted among the wonders of the ancient world.</p>
<p><b>B</b> Early lighthouses burned wood or coal in an open fire at the top of the tower. This gave only a weak, unreliable light that was easily hidden by fog or rain. A major improvement came in the eighteenth century with the use of oil lamps fitted with mirrors to focus the beam.</p>
<p><b>C</b> The greatest breakthrough was the Fresnel lens, invented by a French engineer in 1822. This remarkable lens used rings of glass to concentrate light into a powerful beam that could be seen far out at sea. Fresnel lenses transformed lighthouses across the world and remained in use for over a century.</p>
<p><b>D</b> Traditionally, every lighthouse needed a keeper who lived in or beside the tower, tending the light through the night and in all weathers. It was a lonely and demanding job. Today, however, almost all lighthouses are automatic, controlled by machines and monitored from a distance.</p>
<p><b>E</b> Some people fear that lighthouses are no longer needed, since modern ships navigate by satellite. Yet many remain in operation as a reliable backup, and others have found new life as museums or unusual holiday homes.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"The Pharos of Alexandria was one of the wonders of the ancient world.", a:"true"},
    {t:'tf', q:"Early wood or coal fires produced a strong, reliable light.", a:"false"},
    {t:'tf', q:"The Fresnel lens was invented in the eighteenth century.", a:"false"},
    {t:'tf', q:"Lighthouse keepers often worked in difficult conditions.", a:"true"},
    {t:'tf', q:"Most lighthouses today are operated automatically.", a:"true"},
    {t:'tf', q:"More lighthouses are now used as holiday homes than as museums.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"Lighthouses warn sailors about rocks and hidden ______.", a:"reefs"},
    {t:'txt', q:"The oldest known lighthouse was the ______ of Alexandria.", a:"Pharos"},
    {t:'txt', q:"Eighteenth-century lamps used ______ to focus the beam.", a:"mirrors"},
    {t:'txt', q:"The Fresnel lens was made from rings of ______.", a:"glass"},
    {t:'txt', q:"Each traditional lighthouse needed a ______ to tend the light.", a:"keeper"},
    {t:'txt', q:"Modern lighthouses are monitored from a ______.", a:"distance"},
    {t:'txt', q:"Modern ships mainly navigate by ______.", a:"satellite"}]},
  {title:"The History of the Bicycle",
   text:`<p><b>A</b> The earliest ancestor of the bicycle appeared in Germany in 1817. Called the "running machine", it had two wheels and a frame but no pedals; the rider simply pushed along the ground with their feet.</p>
<p><b>B</b> In the 1860s, French inventors added pedals to the front wheel, creating a machine nicknamed the "boneshaker" because its iron frame and wooden wheels made for a very uncomfortable ride on cobbled streets.</p>
<p><b>C</b> The 1870s saw the arrival of the "penny-farthing", with its enormous front wheel. The large wheel allowed greater speed, but the rider sat so high that falls were common and often dangerous.</p>
<p><b>D</b> The real breakthrough came in the 1880s with the "safety bicycle", which had two wheels of equal size and a chain driving the rear wheel. This design, close to the modern bicycle, was far safer and easier to ride.</p>
<p><b>E</b> The addition of air-filled rubber tyres soon made cycling smoother and more comfortable still. Bicycles quickly became affordable, and by 1900 millions of people owned one.</p>
<p><b>F</b> The bicycle had social effects too. It gave ordinary people, especially women, a new freedom to travel independently, and some historians credit it with helping to change attitudes about women's roles.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; A dangerously tall machine<br>ii&nbsp; The first two-wheeler<br>iii&nbsp; The uncomfortable pedal machine<br>iv&nbsp; Social change on two wheels<br>v&nbsp; The modern design emerges<br>vi&nbsp; Comfort and mass ownership<br>vii&nbsp; Bicycles in sport<br>viii&nbsp; The cost of manufacture"),
     t:'txt', q:"Paragraph A", a:"ii"},
    {t:'txt', q:"Paragraph B", a:"iii"},
    {t:'txt', q:"Paragraph C", a:"i"},
    {t:'txt', q:"Paragraph D", a:"v"},
    {t:'txt', q:"Paragraph E", a:"vi"},
    {t:'txt', q:"Paragraph F", a:"iv"},
    {head:H.mc(20,23), t:'mc', q:"The 1817 'running machine' had no:", o:["wheels","frame","pedals","rider"], a:"C"},
    {t:'mc', q:"The 'boneshaker' was uncomfortable because of its:", o:["large front wheel","iron frame and wooden wheels","chain","rubber tyres"], a:"B"},
    {t:'mc', q:"The penny-farthing was known for its:", o:["equal wheels","huge front wheel","air tyres","low seat"], a:"B"},
    {t:'mc', q:"On the 'safety bicycle', the chain drove which wheel?", o:["the front","the rear","both","neither"], a:"B"},
    {head:H.comp(24,26), t:'txt', q:"On the first machine, riders pushed along with their ______.", a:"feet"},
    {t:'txt', q:"The penny-farthing let riders reach greater ______.", a:"speed"},
    {t:'txt', q:"Air-filled rubber ______ made cycling smoother.", a:"tyres|tires"}]},
  {title:"The Science of Laughter",
   text:`<p><b>A</b> Laughter is often thought of as a simple response to something funny, but scientists argue that it is far more complex. In fact, most laughter has little to do with jokes; it occurs during ordinary conversation, serving mainly to strengthen social bonds.</p>
<p><b>B</b> Studies show that people are up to thirty times more likely to laugh in company than when alone. This suggests that laughter is fundamentally social, a signal that says we are friendly and wish to connect.</p>
<p><b>C</b> Laughter also appears to be contagious. Hearing others laugh often makes us laugh too, which is why comedy programmes sometimes add recorded laughter. Critics argue this is manipulative, though it undeniably works.</p>
<p><b>D</b> There may be health benefits as well. Some research links laughter to reduced stress hormones and a stronger immune system, and a few doctors have even used "laughter therapy" with patients. However, the evidence remains limited and not all scientists are convinced.</p>
<p><b>E</b> Interestingly, humans are not the only species to laugh. Chimpanzees and even rats produce laughter-like sounds when they play, which hints that laughter evolved long before human language.</p>
<p><b>F</b> Whatever its origins, laughter clearly plays an important role in human life. It brings people together, eases tension, and may even do us good — a reminder that not everything valuable is entirely serious.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"Most laughter is a response to jokes.", a:"no"},
    {t:'yn', q:"People laugh more often when they are with others.", a:"yes"},
    {t:'yn', q:"Recorded laughter in comedy shows has no effect on viewers.", a:"no"},
    {t:'yn', q:"The health benefits of laughter are firmly proven.", a:"no"},
    {t:'yn', q:"Laughter therapy is now offered in every hospital.", a:"not given"},
    {t:'yn', q:"Some animals produce laughter-like sounds.", a:"yes"},
    {head:H.info(33,36), t:'txt', q:"a claim that laughter mainly serves to bond people", a:"A"},
    {t:'txt', q:"the point that laughter is contagious", a:"C"},
    {t:'txt', q:"an example of laughter in other species", a:"E"},
    {t:'txt', q:"a statistic comparing laughing alone and in company", a:"B"},
    {head:H.sa(37,40), t:'txt', q:"How many times more likely are people to laugh in company?", a:"thirty|30|thirty times"},
    {t:'txt', q:"What does laughter mainly strengthen, according to paragraph A?", a:"social bonds|bonds"},
    {t:'txt', q:"Laughter may reduce stress ______.", a:"hormones"},
    {t:'txt', q:"According to the passage, laughter eases ______.", a:"tension"}]}
]},

/* ================= TEST 2 ================= */
{name:"Penguins · The Pencil · The Placebo Effect", blurb:"Nature · History · Medicine",
 passages:[
  {title:"Penguins",
   text:`<p><b>A</b> Penguins are among the most instantly recognisable of all birds, yet in many ways they are highly unusual. Although they are birds, they cannot fly. Instead, their wings have evolved into stiff flippers that make them superb swimmers, able to chase fish underwater at considerable speed.</p>
<p><b>B</b> Almost all of the world's seventeen or so penguin species live in the southern hemisphere. Contrary to popular belief, not all of them inhabit the freezing Antarctic; some are found on the coasts of South America, Africa and Australia, and one species even lives near the equator on the Galápagos Islands.</p>
<p><b>C</b> Penguins are wonderfully adapted to the cold. A thick layer of fat beneath the skin keeps them warm, while their tightly packed, waterproof feathers trap a layer of air. When temperatures fall, emperor penguins huddle together in huge groups, taking turns to stand on the cold outer edge.</p>
<p><b>D</b> Breeding is a remarkable affair. The emperor penguin lays a single egg, which the male balances on his feet and keeps warm for about two months through the Antarctic winter, going without food the entire time while the female returns to the sea to feed.</p>
<p><b>E</b> Many penguin populations are now under threat. Overfishing reduces their food supply, while warming seas and oil pollution add further pressure. Several species are officially classed as endangered.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"Penguins are birds that cannot fly.", a:"true"},
    {t:'tf', q:"All penguin species live in Antarctica.", a:"false"},
    {t:'tf', q:"One penguin species lives near the equator.", a:"true"},
    {t:'tf', q:"Penguins' feathers trap a layer of water for warmth.", a:"false"},
    {t:'tf', q:"The female emperor penguin keeps the egg warm on her feet.", a:"false"},
    {t:'tf', q:"Overfishing is the single main cause of penguin decline.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"A penguin's wings have become stiff ______.", a:"flippers"},
    {t:'txt', q:"Most penguins live in the southern ______.", a:"hemisphere"},
    {t:'txt', q:"A layer of ______ under the skin keeps penguins warm.", a:"fat"},
    {t:'txt', q:"Emperor penguins ______ together to stay warm.", a:"huddle"},
    {t:'txt', q:"The emperor penguin lays a single ______.", a:"egg"},
    {t:'txt', q:"While the male holds the egg, the ______ feeds at sea.", a:"female"},
    {t:'txt', q:"Several penguin species are now classed as ______.", a:"endangered"}]},
  {title:"The History of the Pencil",
   text:`<p><b>A</b> Few everyday objects are as humble as the pencil, yet its history is surprisingly rich. It began in the 1560s, when a large deposit of pure graphite was discovered in Borrowdale, in the north of England. Local people found that this soft grey mineral was excellent for making marks.</p>
<p><b>B</b> At first, people wrongly believed graphite was a form of lead, and the mistaken name has stuck: we still speak of the "lead" in a pencil, although no lead is involved. The valuable Borrowdale graphite was even guarded by armed men to prevent theft.</p>
<p><b>C</b> Because pure graphite is brittle and dirty to hold, people began wrapping sticks of it in string or wood. The modern wooden pencil, with a graphite core glued between two halves of wood, took shape in the following centuries.</p>
<p><b>D</b> A key advance came in 1795, when a French inventor named Nicolas-Jacques Conté found a way to mix powdered graphite with clay. By changing the proportions, he could make the core harder or softer, which is why pencils today are graded from soft to hard.</p>
<p><b>E</b> Pencil-making grew into a major industry. In the nineteenth century, huge factories in Europe and America produced them by the million. The familiar yellow colour of many pencils was a marketing choice, meant to suggest quality.</p>
<p><b>F</b> The pencil has one great advantage over the pen: its marks can be erased. This makes it invaluable for drawing, design and mathematics, and ensures that, even in a digital age, the pencil is far from obsolete.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; A discovery in England<br>ii&nbsp; The mistaken name<br>iii&nbsp; From raw mineral to wooden case<br>iv&nbsp; Conté's improvement<br>v&nbsp; A growing industry<br>vi&nbsp; Why the pencil survives<br>vii&nbsp; Famous pencil artists<br>viii&nbsp; The environmental cost"),
     t:'txt', q:"Paragraph A", a:"i"},
    {t:'txt', q:"Paragraph B", a:"ii"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"Graphite was first discovered in:", o:["France","Borrowdale, England","America","Germany"], a:"B"},
    {t:'mc', q:"The 'lead' in a pencil is actually:", o:["real lead","clay","graphite","carbon fibre"], a:"C"},
    {t:'mc', q:"Nicolas-Jacques Conté mixed graphite with:", o:["string","wood","clay","wax"], a:"C"},
    {t:'mc', q:"The yellow colour of many pencils was chosen to suggest:", o:["cheapness","quality","safety","speed"], a:"B"},
    {head:H.comp(24,26), t:'txt', q:"Graphite was originally thought to be a kind of ______.", a:"lead"},
    {t:'txt', q:"Valuable graphite was guarded by ______ men.", a:"armed"},
    {t:'txt', q:"Conté could make the core harder or softer by adding ______.", a:"clay"}]},
  {title:"The Placebo Effect",
   text:`<p><b>A</b> The placebo effect is one of the strangest phenomena in medicine. A placebo is a "dummy" treatment — a sugar pill or harmless injection with no active ingredient — yet patients who take it often genuinely feel better. This shows, many argue, the remarkable power of the mind over the body.</p>
<p><b>B</b> In a typical experiment, one group of patients receives a real drug while another receives an identical-looking placebo. Neither the patients nor the doctors know who has which, a method called a double-blind trial. Surprisingly, the placebo group frequently reports real improvement.</p>
<p><b>C</b> Scientists do not fully understand why placebos work, but expectation seems central. If a person believes they are being treated, the brain may release its own natural painkillers. Interestingly, the effect can be stronger when the pill is larger, more expensive, or given by a confident doctor.</p>
<p><b>D</b> The placebo effect has clear limits, however. It can ease symptoms such as pain, anxiety and tiredness, but it cannot shrink a tumour or cure an infection. Anyone who relies on placebos alone for a serious illness is taking a grave risk.</p>
<p><b>E</b> There is also an opposite, darker version known as the "nocebo" effect, in which negative expectations make people feel worse. Patients warned of a drug's side effects, for example, are more likely to experience them, even from a placebo.</p>
<p><b>F</b> Far from being a nuisance, the placebo effect is now taken seriously by researchers. Understanding it, they believe, could help doctors make real treatments more effective by paying attention to what patients expect and believe.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"The placebo effect demonstrates the influence of the mind on the body.", a:"yes"},
    {t:'yn', q:"In a double-blind trial, doctors know which patients receive the real drug.", a:"no"},
    {t:'yn', q:"A larger or more expensive pill can produce a stronger placebo effect.", a:"yes"},
    {t:'yn', q:"Placebos can cure serious infections.", a:"no"},
    {t:'yn', q:"The nocebo effect has been banned in medical trials.", a:"not given"},
    {t:'yn', q:"Researchers now regard the placebo effect as worth studying.", a:"yes"},
    {head:H.info(33,36), t:'txt', q:"an explanation involving the brain's natural painkillers", a:"C"},
    {t:'txt', q:"a description of the double-blind method", a:"B"},
    {t:'txt', q:"an example of negative expectations causing harm", a:"E"},
    {t:'txt', q:"a warning about the limits of placebos", a:"D"},
    {head:H.sa(37,40), t:'txt', q:"What is a placebo with no active ingredient sometimes called?", a:"dummy treatment|dummy|sugar pill"},
    {t:'txt', q:"What seems to be the central reason placebos work?", a:"expectation"},
    {t:'txt', q:"What is the opposite effect, caused by negative expectations, called?", a:"nocebo|nocebo effect"},
    {t:'txt', q:"Placebos can ease pain, anxiety and ______.", a:"tiredness"}]}
]},

/* ================= TEST 3 ================= */
{name:"Bamboo · The Calendar · Procrastination", blurb:"Nature · History · Psychology",
 passages:[
  {title:"Bamboo",
   text:`<p><b>A</b> Bamboo is often mistaken for a tree, but it is in fact a giant grass. It is famous above all for its extraordinary speed of growth. Some species can grow almost a metre in a single day, making bamboo the fastest-growing plant on Earth.</p>
<p><b>B</b> There are well over a thousand species of bamboo, growing naturally across Asia, Africa and the Americas. They range from tiny plants no taller than a person to giants over thirty metres high. Bamboo is especially important in East and Southeast Asia, where it has been used for thousands of years.</p>
<p><b>C</b> The uses of bamboo are almost endless. It serves as a building material, as scaffolding, as furniture and flooring, and even as food, since bamboo shoots are eaten in many Asian cuisines. Its hollow, jointed stems are both light and remarkably strong.</p>
<p><b>D</b> Bamboo is increasingly praised as an environmentally friendly material. Because it grows so quickly and can be harvested without killing the plant, it is far more sustainable than slow-growing hardwood trees. It also absorbs large amounts of carbon dioxide as it grows.</p>
<p><b>E</b> Bamboo does have one curious feature. Many species flower only once every several decades, and when they do, all the plants of that species flower and then die at the same time, all around the world. Scientists still cannot fully explain this strange behaviour.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"Bamboo is a type of grass, not a tree.", a:"true"},
    {t:'tf', q:"Bamboo is the fastest-growing plant on Earth.", a:"true"},
    {t:'tf', q:"There are fewer than a hundred species of bamboo.", a:"false"},
    {t:'tf', q:"Bamboo shoots cannot be eaten.", a:"false"},
    {t:'tf', q:"Bamboo grows more slowly than hardwood trees.", a:"false"},
    {t:'tf', q:"Bamboo furniture is more popular than bamboo flooring.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"Some bamboo can grow nearly a ______ in one day.", a:"metre|meter"},
    {t:'txt', q:"Bamboo is especially important in East and Southeast ______.", a:"Asia"},
    {t:'txt', q:"Bamboo stems are hollow and ______.", a:"jointed"},
    {t:'txt', q:"Bamboo can be harvested without ______ the plant.", a:"killing"},
    {t:'txt', q:"As it grows, bamboo absorbs carbon ______.", a:"dioxide"},
    {t:'txt', q:"Many bamboo species ______ only once every several decades.", a:"flower"},
    {t:'txt', q:"After flowering, the plants all ______ at the same time.", a:"die"}]},
  {title:"The History of the Calendar",
   text:`<p><b>A</b> From the earliest times, humans have needed to measure the passing of time in order to know when to plant crops or hold festivals. The first calendars were based on the moon, whose phases repeat roughly every twenty-nine days and are easy to observe.</p>
<p><b>B</b> The trouble with a lunar calendar is that twelve moon-cycles add up to about 354 days — some eleven days short of the true solar year. Over time, the months drift out of step with the seasons, so that a "summer" month may eventually fall in winter.</p>
<p><b>C</b> The ancient Egyptians were among the first to base their calendar on the sun instead, giving a year of 365 days. This was much closer to the truth, but still not exact, since the real solar year is about a quarter of a day longer.</p>
<p><b>D</b> In 46 BC the Roman leader Julius Caesar introduced a reformed calendar that added an extra day every four years — the leap year we still use. This Julian calendar was a great improvement and lasted for many centuries.</p>
<p><b>E</b> Yet even the Julian calendar was slightly too long, and by the sixteenth century it had drifted ten days out. In 1582 Pope Gregory XIII corrected it, creating the Gregorian calendar that most of the world uses today.</p>
<p><b>F</b> Not everyone adopted the new system at once. Some countries kept the old calendar for centuries, and even now several cultures maintain their own traditional calendars alongside the international one.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; The problem with moon-based years<br>ii&nbsp; Measuring time by the moon<br>iii&nbsp; The Egyptian solar year<br>iv&nbsp; Caesar's leap-year reform<br>v&nbsp; The modern Gregorian calendar<br>vi&nbsp; Different calendars side by side<br>vii&nbsp; The invention of the clock<br>viii&nbsp; Naming the months"),
     t:'txt', q:"Paragraph A", a:"ii"},
    {t:'txt', q:"Paragraph B", a:"i"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"The first calendars were based on:", o:["the sun","the moon","the stars","the seasons"], a:"B"},
    {t:'mc', q:"Twelve lunar months fall short of the solar year by about:", o:["one day","eleven days","a month","a quarter of a day"], a:"B"},
    {t:'mc', q:"The leap year was introduced by:", o:["the Egyptians","Pope Gregory","Julius Caesar","the Greeks"], a:"C"},
    {t:'mc', q:"The Gregorian calendar was introduced in:", o:["46 BC","1492","1582","1700"], a:"C"},
    {head:H.comp(24,26), t:'txt', q:"Early calendars followed the phases of the ______.", a:"moon"},
    {t:'txt', q:"The Egyptian solar year had ______ days.", a:"365"},
    {t:'txt', q:"The Julian calendar added an extra day every ______ years.", a:"four|4"}]},
  {title:"The Psychology of Procrastination",
   text:`<p><b>A</b> Almost everyone puts off tasks they know they should do, a habit we call procrastination. It is easy to dismiss this as simple laziness, but psychologists insist the truth is more complicated. Procrastination, they argue, is really a problem of managing emotions, not time.</p>
<p><b>B</b> When a task makes us feel anxious, bored or uncertain, we are tempted to avoid it in order to escape those unpleasant feelings. Checking a phone or tidying a desk offers instant relief, even though it makes the underlying problem worse. In this sense, procrastination is a way of feeling better now at the cost of later.</p>
<p><b>C</b> Research suggests that procrastinators are often perfectionists. Fearing that their work will not be good enough, they delay starting at all, since a task not begun cannot yet be judged a failure. The very desire to do well can therefore prevent people from doing anything.</p>
<p><b>D</b> Procrastination carries real costs. Beyond missed deadlines and poorer work, chronic procrastinators report higher levels of stress and even worse health. Ironically, the relief they gain by delaying is quickly replaced by guilt and worry.</p>
<p><b>E</b> Psychologists suggest several remedies. Breaking a large task into small, manageable steps makes it feel less threatening. So does forgiving oneself for past delay, which, surprisingly, makes people less likely to procrastinate again.</p>
<p><b>F</b> The key insight is that willpower alone is rarely enough. Understanding why we avoid certain tasks, and treating ourselves with patience rather than harsh criticism, offers a far more effective path to getting things done.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"Procrastination is best understood as simple laziness.", a:"no"},
    {t:'yn', q:"People often procrastinate to escape unpleasant feelings.", a:"yes"},
    {t:'yn', q:"Perfectionism can make procrastination worse.", a:"yes"},
    {t:'yn', q:"Delaying tasks has no effect on health.", a:"no"},
    {t:'yn', q:"Most students procrastinate more than working adults.", a:"not given"},
    {t:'yn', q:"Being kind to oneself can reduce future procrastination.", a:"yes"},
    {head:H.info(33,36), t:'txt', q:"the idea that procrastination is about emotions, not time", a:"A"},
    {t:'txt', q:"the link between perfectionism and delay", a:"C"},
    {t:'txt', q:"a practical tip about breaking tasks down", a:"E"},
    {t:'txt', q:"the health costs of chronic delay", a:"D"},
    {head:H.sa(37,40), t:'txt', q:"Procrastination is mainly a problem of managing what?", a:"emotions"},
    {t:'txt', q:"What kind of people are procrastinators often said to be?", a:"perfectionists"},
    {t:'txt', q:"Chronic procrastinators report higher levels of ______.", a:"stress"},
    {t:'txt', q:"Large tasks feel less threatening when broken into small ______.", a:"steps"}]}
]},

/* ================= TEST 4 ================= */
{name:"Beavers · Maps · The Science of Taste", blurb:"Nature · History · Science",
 passages:[
  {title:"Beavers: Nature's Engineers",
   text:`<p><b>A</b> The beaver is one of nature's most skilful builders. Using its powerful teeth, it fells trees and uses the wood to construct dams across streams and rivers. Behind each dam a pond forms, in the middle of which the beaver builds a dome-shaped home called a lodge, with an underwater entrance for safety.</p>
<p><b>B</b> Beavers are the second-largest rodents in the world, after the capybara. Their bodies are perfectly suited to life in water: they have webbed back feet for swimming, a broad flat tail that acts as a rudder, and fur that is naturally waterproof.</p>
<p><b>C</b> By building dams, beavers dramatically change the landscape around them. The ponds they create become rich habitats for fish, birds, insects and plants. For this reason, scientists describe beavers as a "keystone species", one whose activities support a whole community of other creatures.</p>
<p><b>D</b> Beavers were once hunted almost to extinction for their fur and for a substance from their bodies used in perfume. Across Europe and North America their numbers collapsed. In recent decades, however, they have been reintroduced to many rivers, often with striking success.</p>
<p><b>E</b> Not everyone welcomes the beaver's return. Their dams can flood farmland and block drainage, bringing them into conflict with landowners. Yet many experts argue that beaver ponds help to store water, reduce flooding downstream and improve water quality.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"A beaver's lodge has an entrance underwater.", a:"true"},
    {t:'tf', q:"The beaver is the largest rodent in the world.", a:"false"},
    {t:'tf', q:"A beaver's tail helps it steer when swimming.", a:"true"},
    {t:'tf', q:"Beaver ponds support many other species.", a:"true"},
    {t:'tf', q:"Beavers were never hunted for their fur.", a:"false"},
    {t:'tf', q:"Beavers live longer in the wild than in captivity.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"Beavers build ______ across rivers and streams.", a:"dams"},
    {t:'txt', q:"A beaver's home is called a ______.", a:"lodge"},
    {t:'txt', q:"Beavers have ______ back feet for swimming.", a:"webbed"},
    {t:'txt', q:"Beaver fur is naturally ______.", a:"waterproof"},
    {t:'txt', q:"Scientists call the beaver a ______ species.", a:"keystone"},
    {t:'txt', q:"A substance from beavers was once used in ______.", a:"perfume"},
    {t:'txt', q:"Beaver ponds can help reduce ______ downstream.", a:"flooding"}]},
  {title:"The History of Maps",
   text:`<p><b>A</b> People have drawn maps for far longer than they have written words. The oldest surviving maps, scratched onto clay tablets or cave walls, are thousands of years old. They show that early humans wanted to record and share knowledge about the world around them.</p>
<p><b>B</b> The ancient Greeks were the first to study geography as a science. Around 200 BC, a scholar named Eratosthenes not only drew a map of the known world but also calculated the size of the Earth with astonishing accuracy, using only shadows and simple mathematics.</p>
<p><b>C</b> During the Middle Ages in Europe, maps often mixed geography with religion and legend. Many placed the holy city of Jerusalem at the centre of the world and filled unknown regions with imaginary monsters, reflecting belief as much as knowledge.</p>
<p><b>D</b> The great age of exploration changed everything. As European ships sailed to distant continents, mapmakers rushed to record the new coastlines. Accuracy became vital, since a faulty map could send a ship to disaster.</p>
<p><b>E</b> A lasting problem was how to show the round Earth on flat paper. In 1569 Gerardus Mercator devised a clever projection that kept directions correct, making it ideal for navigation, though it badly distorted the size of the polar regions.</p>
<p><b>F</b> Today, satellites map the entire planet in extraordinary detail, and digital maps guide us through streets in real time. Yet the basic purpose of a map has never changed: to help us understand where we are and how to reach where we wish to go.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; The oldest maps of all<br>ii&nbsp; Greek geography and the size of the Earth<br>iii&nbsp; Maps shaped by belief<br>iv&nbsp; Mapping a newly explored world<br>v&nbsp; Flattening a round Earth<br>vi&nbsp; Maps in the digital age<br>vii&nbsp; The first road maps<br>viii&nbsp; Maps as works of art"),
     t:'txt', q:"Paragraph A", a:"i"},
    {t:'txt', q:"Paragraph B", a:"ii"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"The oldest surviving maps were made on:", o:["paper","clay tablets or cave walls","cloth","metal"], a:"B"},
    {t:'mc', q:"Eratosthenes is famous for calculating the size of:", o:["the Sun","the Moon","the Earth","Greece"], a:"C"},
    {t:'mc', q:"Medieval European maps often placed which city at the centre?", o:["Rome","Athens","Jerusalem","Cairo"], a:"C"},
    {t:'mc', q:"The Mercator projection distorted the size of:", o:["the equator","the polar regions","the oceans","Europe"], a:"B"},
    {head:H.comp(24,26), t:'txt', q:"Eratosthenes measured the Earth using shadows and simple ______.", a:"mathematics"},
    {t:'txt', q:"Medieval maps filled unknown areas with imaginary ______.", a:"monsters"},
    {t:'txt', q:"The Mercator projection kept ______ correct for navigation.", a:"directions"}]},
  {title:"The Science of Taste",
   text:`<p><b>A</b> Taste is one of the least understood of the senses, and much of what people believe about it is wrong. A popular idea, still printed in some textbooks, is that different parts of the tongue detect different tastes — sweet at the tip, bitter at the back. Scientists have shown this "tongue map" to be a myth: every part of the tongue can sense every taste.</p>
<p><b>B</b> Traditionally, humans were said to have four basic tastes: sweet, sour, salty and bitter. In recent decades a fifth has been widely accepted — umami, a savoury taste found in foods such as cheese and cooked meat. Some scientists argue there may be more still to discover.</p>
<p><b>C</b> Much of what we call "taste" is really smell. When we chew, aromas travel up into the nose from the back of the mouth, and it is these that give food most of its flavour. This is why food seems dull and lifeless when we have a heavy cold.</p>
<p><b>D</b> Our sense of taste is shaped by both biology and experience. A liking for sweetness appears to be inborn, since it signals energy-rich food, while a dislike of bitterness may once have protected our ancestors from poison. Yet many tastes are learned; foods disliked in childhood are often enjoyed later.</p>
<p><b>E</b> Taste can even be fooled. The colour of a drink, the weight of a spoon, or the description on a menu can all change how something seems to taste. In experiments, the very same wine is rated more highly when people are told it is expensive.</p>
<p><b>F</b> Understanding taste has practical value. Food companies use it to design products, while doctors study it to help patients who lose their sense of taste through illness or age, for whom eating can become a joyless chore.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"The idea that different areas of the tongue detect different tastes is correct.", a:"no"},
    {t:'yn', q:"Umami is now widely accepted as a basic taste.", a:"yes"},
    {t:'yn', q:"Smell contributes little to the flavour of food.", a:"no"},
    {t:'yn', q:"A liking for sweet things appears to be present from birth.", a:"yes"},
    {t:'yn', q:"Children who dislike a food will always dislike it as adults.", a:"no"},
    {t:'yn', q:"The price people are told affects how they rate a wine.", a:"yes"},
    {head:H.info(33,36), t:'txt', q:"the reason food tastes dull during a cold", a:"C"},
    {t:'txt', q:"the myth of the 'tongue map'", a:"A"},
    {t:'txt', q:"an example of taste being influenced by price", a:"E"},
    {t:'txt', q:"the medical value of understanding taste", a:"F"},
    {head:H.sa(37,40), t:'txt', q:"What is the name of the fifth basic taste?", a:"umami"},
    {t:'txt', q:"Much of what we call taste is really ______.", a:"smell"},
    {t:'txt', q:"A dislike of bitterness may have protected our ancestors from ______.", a:"poison"},
    {t:'txt', q:"Food companies use knowledge of taste to design ______.", a:"products"}]}
]},

/* ================= TEST 5 ================= */
{name:"Bioluminescence · Ice Cream · Sign Language", blurb:"Biology · History · Language",
 passages:[
  {title:"Living Light: Bioluminescence",
   text:`<p><b>A</b> In the darkness of the deep ocean, and on warm summer nights on land, some living things produce their own light. This ability is called bioluminescence, and it is one of nature's most beautiful tricks. The light is created by a chemical reaction inside the organism, and unlike a light bulb it produces almost no heat, which is why it is sometimes called "cold light".</p>
<p><b>B</b> Bioluminescence is surprisingly common. It is found in fireflies, in certain fungi, in many jellyfish, and above all in the creatures of the deep sea, where sunlight never reaches. Scientists estimate that the majority of deep-sea animals can produce light in some form.</p>
<p><b>C</b> Living things use their light for many different purposes. Fireflies flash to attract a mate, each species using its own pattern of signals. Some deep-sea fish dangle a glowing lure to draw prey towards their jaws, while others release clouds of light to confuse and escape a predator.</p>
<p><b>D</b> The chemistry behind the glow involves a substance called luciferin, which produces light when it reacts with oxygen. Different species use slightly different versions, which is why the colours of natural light range from green and blue to, more rarely, red.</p>
<p><b>E</b> Scientists have found many practical uses for bioluminescence. The light-producing genes can be inserted into other cells to make them glow, allowing researchers to track diseases or test new medicines. What began as a natural curiosity has become a valuable laboratory tool.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"Bioluminescent light produces almost no heat.", a:"true"},
    {t:'tf', q:"Bioluminescence is found only in the deep sea.", a:"false"},
    {t:'tf', q:"Most deep-sea animals can produce light.", a:"true"},
    {t:'tf', q:"All fireflies use exactly the same flashing pattern.", a:"false"},
    {t:'tf', q:"Natural light is most commonly red.", a:"false"},
    {t:'tf', q:"Bioluminescent jellyfish are more common than bioluminescent fungi.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"Bioluminescence is created by a ______ reaction.", a:"chemical"},
    {t:'txt', q:"Because it makes no heat, it is called '______ light'.", a:"cold"},
    {t:'txt', q:"Fireflies flash mainly to attract a ______.", a:"mate"},
    {t:'txt', q:"Some deep-sea fish use a glowing ______ to catch prey.", a:"lure"},
    {t:'txt', q:"The glow involves a substance called ______.", a:"luciferin"},
    {t:'txt', q:"Luciferin makes light when it reacts with ______.", a:"oxygen"},
    {t:'txt', q:"Glowing genes help researchers to track ______.", a:"diseases"}]},
  {title:"The History of Ice Cream",
   text:`<p><b>A</b> The origins of ice cream lie not in Europe but in the ancient East. More than two thousand years ago, people in China are believed to have mixed snow with fruit and honey to make a cold, sweet treat. The idea of chilling food for pleasure is therefore very old.</p>
<p><b>B</b> For centuries, such frozen desserts were a luxury only the rich could enjoy, because ice was extremely difficult to obtain and store. Wealthy households built special ice houses, and ice was sometimes carried great distances from mountains in insulated carts.</p>
<p><b>C</b> A crucial discovery made true ice cream possible: adding salt to ice lowers its temperature far below freezing point. This allowed cooks to freeze a creamy mixture rather than merely chill it, and by the seventeenth century iced creams were appearing at royal courts in Europe.</p>
<p><b>D</b> Ice cream remained a treat for the wealthy until the nineteenth century. Then the arrival of refrigeration and cheap, factory-made ice meant that ordinary people could enjoy it too. Ice cream shops and street sellers appeared in many cities.</p>
<p><b>E</b> The twentieth century brought further inventions that spread ice cream even wider. The ice cream cone gave a convenient, edible container, while motorised vans allowed sellers to bring their product directly into neighbourhoods, announced by a familiar tune.</p>
<p><b>F</b> Today ice cream is a global industry worth billions, made in an endless variety of flavours. Yet the basic pleasure it offers — sweet, cold and creamy — is the very same one enjoyed thousands of years ago.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; Ancient beginnings in the East<br>ii&nbsp; A luxury hard to keep cold<br>iii&nbsp; The salt discovery<br>iv&nbsp; Ice cream for everyone<br>v&nbsp; New ways to sell and serve<br>vi&nbsp; A global treat with ancient roots<br>vii&nbsp; The healthiest desserts<br>viii&nbsp; Ice cream in wartime"),
     t:'txt', q:"Paragraph A", a:"i"},
    {t:'txt', q:"Paragraph B", a:"ii"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"The earliest frozen treats are thought to come from:", o:["Italy","China","France","Egypt"], a:"B"},
    {t:'mc', q:"Early frozen desserts were expensive mainly because of the cost of:", o:["fruit","honey","ice","cream"], a:"C"},
    {t:'mc', q:"Adding salt to ice makes it:", o:["warmer","sweeter","colder","harder"], a:"C"},
    {t:'mc', q:"Ice cream reached ordinary people thanks to:", o:["ice houses","refrigeration","royal courts","the cone"], a:"B"},
    {head:H.comp(24,26), t:'txt', q:"Ancient Chinese mixed snow with fruit and ______.", a:"honey"},
    {t:'txt', q:"Wealthy households stored ice in special ice ______.", a:"houses"},
    {t:'txt', q:"The ice cream ______ gave an edible container.", a:"cone"}]},
  {title:"Sign Language",
   text:`<p><b>A</b> Many people wrongly assume that sign language is simply a way of spelling out spoken words with the hands. In fact, sign languages are full, natural languages in their own right, with their own vocabulary and grammar. They are not based on the spoken language of the surrounding country, and a signer often arranges ideas quite differently from a speaker.</p>
<p><b>B</b> Perhaps the most surprising fact is that there is no single, universal sign language. Just as spoken languages differ from country to country, so do signed ones. British Sign Language and American Sign Language, for example, are so different that their users cannot easily understand one another, even though both countries speak English.</p>
<p><b>C</b> Sign languages are not invented by teachers or committees; they arise naturally wherever deaf people come together. A remarkable example occurred in Nicaragua in the 1980s, when deaf children brought into new schools spontaneously created a rich sign language of their own within a few years.</p>
<p><b>D</b> Research on sign language has transformed our understanding of the human mind. It shows that the brain treats signed and spoken languages in very similar ways, using the same regions. Language, it seems, is not tied to sound but is a deeper capacity of the human brain.</p>
<p><b>E</b> For a long time, sign languages were discouraged, and deaf children were often forbidden to use them and forced to lip-read instead. Today attitudes have changed, and many countries officially recognise their sign languages as part of their national heritage.</p>
<p><b>F</b> Campaigners argue there is still far to go. They call for more sign-language interpreters, wider teaching of sign, and greater respect for deaf culture, so that deaf people can take a full part in society.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"Sign language is just a manual way of spelling spoken words.", a:"no"},
    {t:'yn', q:"There is one universal sign language used worldwide.", a:"no"},
    {t:'yn', q:"Users of British and American Sign Language can easily understand each other.", a:"no"},
    {t:'yn', q:"Sign languages can arise naturally among deaf people.", a:"yes"},
    {t:'yn', q:"The Nicaraguan sign language is now taught in other countries.", a:"not given"},
    {t:'yn', q:"The brain handles signed and spoken language in similar ways.", a:"yes"},
    {head:H.info(33,36), t:'txt', q:"an example of a sign language created by children", a:"C"},
    {t:'txt', q:"evidence about how the brain processes language", a:"D"},
    {t:'txt', q:"the point that sign languages have their own grammar", a:"A"},
    {t:'txt', q:"a call for more interpreters and teaching", a:"F"},
    {head:H.sa(37,40), t:'txt', q:"In which country did deaf children create a new sign language in the 1980s?", a:"Nicaragua"},
    {t:'txt', q:"British and American Sign Language differ despite both countries speaking ______.", a:"English"},
    {t:'txt', q:"Deaf children were once forced to ______ instead of signing.", a:"lip-read|lip read|lipread"},
    {t:'txt', q:"Campaigners want greater respect for deaf ______.", a:"culture"}]}
]},

/* ================= TEST 6 ================= */
{name:"Owls · Windmills · The Dog", blurb:"Nature · Technology · History",
 passages:[
  {title:"Owls",
   text:`<p><b>A</b> Owls are among the most successful hunters in the animal kingdom, and much of their success comes from being active at night. As nocturnal birds of prey, they have evolved a remarkable set of adaptations that allow them to find and catch food in near-total darkness.</p>
<p><b>B</b> An owl's eyes are enormous in relation to its head, gathering as much light as possible. However, the eyes are fixed in their sockets and cannot move. To compensate, an owl can turn its head an extraordinary distance — around three-quarters of a full circle — to look around without moving its body.</p>
<p><b>C</b> Even more impressive is the owl's hearing. Its ears are placed unevenly, one slightly higher than the other, which allows the bird to pinpoint the exact position of a sound in complete darkness. Some owls can catch a mouse hidden beneath snow purely by the sound it makes.</p>
<p><b>D</b> Owls are also famous for flying in near silence. The front edges of their wing feathers are fringed like a comb, which breaks up the flow of air and muffles the sound of flapping. Their prey never hears them coming.</p>
<p><b>E</b> Found on every continent except Antarctica, owls range from tiny species smaller than a sparrow to great birds with a wingspan of over one and a half metres. In many cultures the owl is a symbol of wisdom, though this reputation owes more to legend than to fact.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"Most owls hunt at night.", a:"true"},
    {t:'tf', q:"An owl can move its eyes freely within their sockets.", a:"false"},
    {t:'tf', q:"An owl's ears are placed at exactly the same height.", a:"false"},
    {t:'tf', q:"Some owls can catch prey hidden under snow.", a:"true"},
    {t:'tf', q:"The fringed wing feathers make an owl's flight noisy.", a:"false"},
    {t:'tf', q:"The largest owls are found mainly in cold regions.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"Owls are ______ birds of prey, active at night.", a:"nocturnal"},
    {t:'txt', q:"An owl's ______ are very large to gather light.", a:"eyes"},
    {t:'txt', q:"An owl can turn its ______ nearly three-quarters of a circle.", a:"head"},
    {t:'txt', q:"Uneven ears help the owl locate a ______ precisely.", a:"sound"},
    {t:'txt', q:"Fringed wing feathers muffle the sound of ______.", a:"flapping"},
    {t:'txt', q:"The owl is often seen as a symbol of ______.", a:"wisdom"},
    {t:'txt', q:"Owls are found on every continent except ______.", a:"Antarctica"}]},
  {title:"Windmills",
   text:`<p><b>A</b> For most of history, people relied on their own muscles or those of animals to grind grain and do heavy work. The windmill offered something revolutionary: a way to capture the free, endless power of the wind and put it to use.</p>
<p><b>B</b> The earliest known windmills appeared in Persia, in what is now Iran, more than a thousand years ago. These early machines had sails that turned around a vertical axis, rather like a revolving door, and were used mainly to grind grain into flour.</p>
<p><b>C</b> A different design developed later in Europe. Here the sails turned around a horizontal axis, facing into the wind, which proved far more efficient. The whole top of the mill, or sometimes the entire building, could be turned to follow the changing direction of the wind.</p>
<p><b>D</b> Windmills did far more than grind grain. In the Netherlands especially, they were used to pump water, draining lakes and marshes to create new farmland. Much of the low-lying Dutch countryside exists today only because windmills once kept it dry.</p>
<p><b>E</b> With the arrival of the steam engine in the nineteenth century, traditional windmills fell into decline. Steam offered power that did not depend on the weather, and one by one the old mills fell silent and began to crumble.</p>
<p><b>F</b> In the modern age, however, the wind has returned. Today's sleek wind turbines, descendants of the humble windmill, generate clean electricity on a vast scale, and are seen by many as a key answer to the world's energy needs.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; A new source of power<br>ii&nbsp; The first windmills in Persia<br>iii&nbsp; A better European design<br>iv&nbsp; Windmills that moved water<br>v&nbsp; Decline in the age of steam<br>vi&nbsp; The return of the wind<br>vii&nbsp; How a windmill is built<br>viii&nbsp; Windmills in art"),
     t:'txt', q:"Paragraph A", a:"i"},
    {t:'txt', q:"Paragraph B", a:"ii"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"The earliest windmills appeared in:", o:["the Netherlands","Persia","England","China"], a:"B"},
    {t:'mc', q:"Early Persian windmills turned around a:", o:["horizontal axis","vertical axis","wheel","chain"], a:"B"},
    {t:'mc', q:"In the Netherlands, windmills were often used to:", o:["grind stone","pump water","saw wood","make paper"], a:"B"},
    {t:'mc', q:"Traditional windmills declined because of the:", o:["wind","steam engine","water pump","electric motor"], a:"B"},
    {head:H.comp(24,26), t:'txt', q:"Windmills capture the power of the ______.", a:"wind"},
    {t:'txt', q:"European windmill sails turned around a ______ axis.", a:"horizontal"},
    {t:'txt', q:"Modern wind ______ generate clean electricity.", a:"turbines"}]},
  {title:"The Domestication of the Dog",
   text:`<p><b>A</b> The dog was the first animal that humans ever domesticated, long before sheep, cattle or crops. Exactly when this happened is still hotly debated, but most scientists agree it was at least fifteen thousand years ago, and possibly much earlier, when humans were still hunter-gatherers.</p>
<p><b>B</b> There is no doubt about the dog's wild ancestor: every breed, from the tiny chihuahua to the giant mastiff, is descended from the grey wolf. Genetic studies leave no room for doubt on this point, however unlikely it may seem when we look at a lapdog today.</p>
<p><b>C</b> How wolves became dogs is less certain. A popular theory holds that the process began not with humans taming wolves, but with wolves taming themselves. The boldest wolves, it is suggested, crept close to human camps to feed on scraps, and the tamest among them were tolerated and gradually changed.</p>
<p><b>D</b> Over thousands of years, humans bred dogs for particular tasks — hunting, herding, guarding and pulling loads. This is why breeds differ so enormously in size, shape and temperament, far more than in any other domestic species.</p>
<p><b>E</b> Dogs offer more than practical help. Studies show that stroking a dog can lower a person's blood pressure and reduce stress, and that dog owners tend to be more active. For many people, a dog is above all a companion and friend.</p>
<p><b>F</b> Some researchers make a bolder claim still: that dogs and humans shaped each other. As we relied on dogs for protection and hunting, and they relied on us for food, the two species may have evolved together in a partnership unlike any other.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"The dog was domesticated before farm animals such as cattle.", a:"yes"},
    {t:'yn', q:"Scientists are uncertain which wild animal dogs descend from.", a:"no"},
    {t:'yn', q:"One theory suggests wolves began the process themselves.", a:"yes"},
    {t:'yn', q:"Dog breeds vary less than other domestic animals.", a:"no"},
    {t:'yn', q:"Large dogs make better companions than small dogs.", a:"not given"},
    {t:'yn', q:"Some researchers believe dogs and humans influenced each other's evolution.", a:"yes"},
    {head:H.info(33,36), t:'txt', q:"the claim that dogs descend from the grey wolf", a:"B"},
    {t:'txt', q:"the idea that wolves may have tamed themselves", a:"C"},
    {t:'txt', q:"the health benefits of owning a dog", a:"E"},
    {t:'txt', q:"the suggestion that two species evolved together", a:"F"},
    {head:H.sa(37,40), t:'txt', q:"What was the first animal humans domesticated?", a:"dog|the dog"},
    {t:'txt', q:"Which wild animal is the ancestor of all dogs?", a:"grey wolf|gray wolf|wolf"},
    {t:'txt', q:"Stroking a dog can lower a person's blood ______.", a:"pressure"},
    {t:'txt', q:"Humans bred dogs for hunting, herding, guarding and pulling ______.", a:"loads"}]}
]},

/* ================= TEST 7 ================= */
{name:"Kangaroos · Glass · Salt", blurb:"Nature · History · Human history",
 passages:[
  {title:"Kangaroos",
   text:`<p><b>A</b> The kangaroo is the largest animal that moves by hopping, and one of the symbols of Australia. It belongs to a group of mammals called marsupials, whose young are born tiny and undeveloped and then continue to grow inside a pouch on the mother's body.</p>
<p><b>B</b> A newborn kangaroo, called a joey, is astonishingly small — no bigger than a jellybean. Blind and hairless, it must crawl unaided from the birth canal into the pouch, where it attaches to a teat and remains for several months before it is ready to look out at the world.</p>
<p><b>C</b> Hopping may look tiring, but it is in fact extremely efficient. The kangaroo's powerful back legs work like springs, storing and returning energy with each bound, so that at high speed a kangaroo uses less energy than a running animal of similar size. It can travel at over fifty kilometres an hour.</p>
<p><b>D</b> The kangaroo's thick tail is far more than a decoration. When moving fast, the tail acts as a counterbalance; when the animal is standing or moving slowly, it works almost like a third leg, supporting the body's weight.</p>
<p><b>E</b> Kangaroos are well suited to Australia's dry climate. They can go for long periods with little water and are most active in the cool of evening and early morning, resting in the shade during the heat of the day.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"Kangaroos are marsupials.", a:"true"},
    {t:'tf', q:"A newborn joey is fully developed at birth.", a:"false"},
    {t:'tf', q:"A newborn kangaroo climbs into the pouch by itself.", a:"true"},
    {t:'tf', q:"Hopping uses more energy than running for a similar-sized animal.", a:"false"},
    {t:'tf', q:"A kangaroo's tail can act as a third leg when it stands.", a:"true"},
    {t:'tf', q:"Kangaroos need to drink more often than most desert animals.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"A young kangaroo is called a ______.", a:"joey"},
    {t:'txt', q:"The joey grows inside the mother's ______.", a:"pouch"},
    {t:'txt', q:"The kangaroo's back legs work like ______.", a:"springs"},
    {t:'txt', q:"A kangaroo can travel at over fifty kilometres an ______.", a:"hour"},
    {t:'txt', q:"At speed, the tail acts as a ______.", a:"counterbalance"},
    {t:'txt', q:"Kangaroos are most active in the ______ of the day.", a:"cool"},
    {t:'txt', q:"During the heat, kangaroos rest in the ______.", a:"shade"}]},
  {title:"The History of Glass",
   text:`<p><b>A</b> Glass is such an ordinary material that we rarely stop to think about it, yet it has a long and fascinating history. It can occur naturally, formed when lightning strikes sand or when a volcano erupts, and it was these natural glasses that people first used, shaping the black volcanic glass called obsidian into sharp tools.</p>
<p><b>B</b> The making of glass by human hands began in the Middle East around four thousand years ago. Early glass was precious and used chiefly for beads and small decorative objects; it was coloured, cloudy and far too valuable for everyday use.</p>
<p><b>C</b> A great leap forward came with the invention of glass-blowing, around two thousand years ago. By blowing air through a tube into a blob of molten glass, a worker could quickly form hollow vessels of many shapes. This made glass containers far cheaper and more common.</p>
<p><b>D</b> The Romans spread glass across their empire and were the first to use it in windows, though their window glass was thick and not very clear. For centuries afterwards, clear window glass remained a rare luxury.</p>
<p><b>E</b> In the medieval period, the city of Venice became the centre of the finest glassmaking. Its craftsmen guarded their secrets so jealously that they were forbidden to leave the city, on pain of severe punishment, in case they revealed their methods to rivals.</p>
<p><b>F</b> Modern industry produces glass on an enormous scale and in astonishing variety, from the toughened glass of car windscreens to the ultra-pure glass fibres that carry the world's telephone and internet signals as pulses of light.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; Nature's own glass<br>ii&nbsp; The first human-made glass<br>iii&nbsp; The breakthrough of glass-blowing<br>iv&nbsp; Roman glass and windows<br>v&nbsp; The secrets of Venice<br>vi&nbsp; Glass in the modern world<br>vii&nbsp; Recycling glass<br>viii&nbsp; The colours of glass"),
     t:'txt', q:"Paragraph A", a:"i"},
    {t:'txt', q:"Paragraph B", a:"ii"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"The first glass that people used was:", o:["made in factories","natural volcanic glass","Venetian glass","window glass"], a:"B"},
    {t:'mc', q:"Human-made glass began around:", o:["2,000 years ago","4,000 years ago","500 years ago","10,000 years ago"], a:"B"},
    {t:'mc', q:"Glass-blowing made glass containers:", o:["more expensive","cheaper and more common","coloured","thicker"], a:"B"},
    {t:'mc', q:"Venetian glassmakers were forbidden to:", o:["sell glass","colour glass","leave the city","blow glass"], a:"C"},
    {head:H.comp(24,26), t:'txt', q:"People first shaped the volcanic glass called ______ into tools.", a:"obsidian"},
    {t:'txt', q:"The Romans were the first to use glass in ______.", a:"windows"},
    {t:'txt', q:"Pure glass ______ carry internet signals as light.", a:"fibres|fibers"}]},
  {title:"Salt and Human History",
   text:`<p><b>A</b> It is easy to overlook salt, which sits cheaply on every table, but for most of history it was one of the most valuable substances on Earth. The reason is simple: salt is essential to life. The human body cannot function without it, and before refrigeration it was also the main way of preserving food, allowing meat and fish to be kept for months.</p>
<p><b>B</b> Because it was both vital and, in many places, hard to obtain, salt became immensely valuable. Whole trade routes were built around it, and cities such as Venice and Timbuktu grew rich on the salt trade. In some societies salt was so precious it was used as money.</p>
<p><b>C</b> Salt has left its mark on our language. The English word "salary" comes from the Latin for salt, because Roman soldiers were sometimes paid, in part, with it. To say that someone is "worth their salt" still carries the memory of this ancient value.</p>
<p><b>D</b> Governments were quick to see that a substance everyone must buy could be heavily taxed. Salt taxes made rulers rich but were deeply resented, and at times they helped to spark rebellion. In India, a protest march against the salt tax became a famous milestone in the struggle for independence.</p>
<p><b>E</b> The value of salt collapsed only when technology made it cheap and abundant. New methods of mining and, above all, refrigeration removed both of the reasons it had been so prized. Today salt is so plentiful that we scatter it on icy roads.</p>
<p><b>F</b> Ironically, the modern problem is the opposite of the ancient one. Where people once struggled to get enough salt, many now eat far too much, and doctors warn that excessive salt raises blood pressure and harms health.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"Salt was once one of the most valuable substances on Earth.", a:"yes"},
    {t:'yn', q:"Salt has never been used as a form of money.", a:"no"},
    {t:'yn', q:"The word 'salary' is connected to salt.", a:"yes"},
    {t:'yn', q:"Salt taxes were generally popular with ordinary people.", a:"no"},
    {t:'yn', q:"The Indian salt-tax protest was led by students.", a:"not given"},
    {t:'yn', q:"People today generally eat too little salt.", a:"no"},
    {head:H.info(33,36), t:'txt', q:"the origin of the word 'salary'", a:"C"},
    {t:'txt', q:"the role of salt in preserving food", a:"A"},
    {t:'txt', q:"a protest connected to a salt tax", a:"D"},
    {t:'txt', q:"the modern health problem of too much salt", a:"F"},
    {head:H.sa(37,40), t:'txt', q:"Before refrigeration, what did salt mainly do to food?", a:"preserve|preserving|preserve food|preserved"},
    {t:'txt', q:"Name one city that grew rich on the salt trade.", a:"Venice|Timbuktu"},
    {t:'txt', q:"Roman soldiers were sometimes paid with ______.", a:"salt"},
    {t:'txt', q:"Doctors warn that too much salt raises blood ______.", a:"pressure"}]}
]},

/* ================= TEST 8 ================= */
{name:"The Dead Sea · The Great Wall · Fungi", blurb:"Geography · History · Biology",
 passages:[
  {title:"The Dead Sea",
   text:`<p><b>A</b> The Dead Sea, lying between Jordan and Israel, is one of the most extraordinary bodies of water on Earth. Despite its name, it is not a sea at all but a landlocked lake. Its shore, some four hundred metres below sea level, is the lowest point of dry land anywhere on the planet.</p>
<p><b>B</b> What makes the Dead Sea so unusual is its extreme saltiness. It is almost ten times saltier than the ocean, so salty that fish and plants cannot survive in it — which is how it came by its gloomy name. Only a few types of microscopic organism manage to live there.</p>
<p><b>C</b> The high salt content has a strange effect on swimmers. Because very salty water is much denser than ordinary water, people float in the Dead Sea with remarkable ease, bobbing on the surface as if lying on a cushion. It is famously almost impossible to sink.</p>
<p><b>D</b> For thousands of years, people have believed the Dead Sea has healing powers. Its mineral-rich mud and water are said to soothe skin conditions, and today health resorts along its shores attract visitors from around the world.</p>
<p><b>E</b> Worryingly, the Dead Sea is shrinking fast. So much water is taken from the River Jordan, its main source, that far less now reaches the lake. Its surface is dropping by more than a metre a year, and the shoreline retreats a little further each season.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"The Dead Sea is actually a lake, not a sea.", a:"true"},
    {t:'tf', q:"The shore of the Dead Sea is the lowest dry land on Earth.", a:"true"},
    {t:'tf', q:"Many kinds of fish live in the Dead Sea.", a:"false"},
    {t:'tf', q:"It is difficult to sink in the Dead Sea.", a:"true"},
    {t:'tf', q:"The Dead Sea is growing larger each year.", a:"false"},
    {t:'tf', q:"The healing mud of the Dead Sea works better than modern medicine.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"The Dead Sea is a ______ lake.", a:"landlocked"},
    {t:'txt', q:"Its shore is about four hundred metres below sea ______.", a:"level"},
    {t:'txt', q:"The Dead Sea is nearly ten times saltier than the ______.", a:"ocean"},
    {t:'txt', q:"Salty water is denser, so swimmers ______ easily.", a:"float"},
    {t:'txt', q:"Its mineral-rich ______ is said to soothe the skin.", a:"mud"},
    {t:'txt', q:"The Dead Sea's main source is the River ______.", a:"Jordan"},
    {t:'txt', q:"Its surface is dropping by over a ______ a year.", a:"metre|meter"}]},
  {title:"The Great Wall of China",
   text:`<p><b>A</b> The Great Wall of China is one of the most famous structures ever built. Stretching across northern China, it is not a single continuous wall but a vast network of walls, towers and fortresses, built and rebuilt over many centuries by different dynasties.</p>
<p><b>B</b> The purpose of the Wall was defence. Northern China was repeatedly raided by nomadic horsemen from the plains beyond, and the Wall was intended to keep them out, or at least to slow them down and give warning of an attack.</p>
<p><b>C</b> Building the Wall came at a terrible human cost. Hundreds of thousands of workers — soldiers, peasants and prisoners — laboured on it in harsh conditions, and vast numbers died. According to legend, some were even buried within the structure itself.</p>
<p><b>D</b> The Wall was more than a barrier. Along its length ran a signalling system: guards lit fires or raised smoke from the watchtowers to pass messages over great distances at remarkable speed, warning of approaching enemies far faster than any messenger could ride.</p>
<p><b>E</b> Most of the Wall that tourists see today was built during the Ming dynasty, from the fourteenth century onwards. Made of brick and stone, it was far stronger than the earlier walls of packed earth, which is why these sections have survived.</p>
<p><b>F</b> A stubborn myth claims the Wall is the only human-made object visible from the Moon. This is simply untrue: the Wall is long but narrow, and astronauts have confirmed it cannot be seen with the naked eye from space.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; A network, not a single wall<br>ii&nbsp; Keeping out the raiders<br>iii&nbsp; The great cost in lives<br>iv&nbsp; Sending messages along the Wall<br>v&nbsp; The surviving Ming sections<br>vi&nbsp; Correcting a famous myth<br>vii&nbsp; The Wall as a tourist site<br>viii&nbsp; The tools of the builders"),
     t:'txt', q:"Paragraph A", a:"i"},
    {t:'txt', q:"Paragraph B", a:"ii"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"The Great Wall is best described as:", o:["a single continuous wall","a network of walls and towers","a single fortress","a natural barrier"], a:"B"},
    {t:'mc', q:"The Wall was mainly built to:", o:["mark a trade border","defend against raiders","attract visitors","connect cities"], a:"B"},
    {t:'mc', q:"Messages were sent along the Wall using:", o:["flags","drums","fire and smoke","horses"], a:"C"},
    {t:'mc', q:"Most of the Wall seen by tourists dates from the:", o:["first dynasty","Ming dynasty","twentieth century","Roman period"], a:"B"},
    {head:H.comp(24,26), t:'txt', q:"Northern China was raided by nomadic ______.", a:"horsemen"},
    {t:'txt', q:"Guards lit fires in the ______ to warn of enemies.", a:"watchtowers"},
    {t:'txt', q:"The Ming Wall was built of brick and ______.", a:"stone"}]},
  {title:"The Hidden Kingdom of Fungi",
   text:`<p><b>A</b> Fungi are among the most misunderstood of living things. They are neither plants nor animals but form a kingdom of their own. Unlike plants, they cannot make their own food from sunlight; instead they absorb nutrients from their surroundings, often by breaking down dead material — a role that makes them essential to every ecosystem.</p>
<p><b>B</b> Most of a fungus is hidden from view. What we call a mushroom is merely the fruiting body, the part that produces spores; the main organism is a vast web of tiny threads spreading unseen through the soil. Some of these underground networks are among the largest living things on the planet.</p>
<p><b>C</b> Among the most prized fungi are truffles, which grow entirely underground in partnership with the roots of certain trees. Because they cannot be seen, they must be hunted with the help of trained dogs, or occasionally pigs, whose keen sense of smell can detect them beneath the earth.</p>
<p><b>D</b> The finest truffles fetch astonishing prices, sometimes thousands of dollars for a single kilogram. Their rarity, their short season and the difficulty of cultivating them deliberately all drive the price ever higher, and truffle hunters guard their favourite spots as closely held secrets.</p>
<p><b>E</b> Fungi are far more than a luxury food. They give us bread, cheese and beer, since yeast is a fungus, and they have provided some of medicine's greatest weapons — the antibiotic penicillin was discovered in a common mould.</p>
<p><b>F</b> Scientists are now exploring bold new uses for fungi. Some are testing them as a material to replace plastic or leather; others hope that the underground networks connecting forest trees may teach us how whole ecosystems share resources.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"Fungi make their own food from sunlight.", a:"no"},
    {t:'yn', q:"A mushroom is only part of the whole fungus.", a:"yes"},
    {t:'yn', q:"Truffles grow above ground on tree trunks.", a:"no"},
    {t:'yn', q:"The high price of truffles is partly due to their short season.", a:"yes"},
    {t:'yn', q:"Truffle hunting is now banned in most of Europe.", a:"not given"},
    {t:'yn', q:"Fungi have contributed to medicine.", a:"yes"},
    {head:H.info(33,36), t:'txt', q:"the role of fungi in breaking down dead material", a:"A"},
    {t:'txt', q:"how truffles are located underground", a:"C"},
    {t:'txt', q:"the discovery of penicillin", a:"E"},
    {t:'txt', q:"possible future uses of fungi", a:"F"},
    {head:H.sa(37,40), t:'txt', q:"The visible mushroom is known as the fruiting ______.", a:"body"},
    {t:'txt', q:"Which animals, besides dogs, are sometimes used to find truffles?", a:"pigs"},
    {t:'txt', q:"The antibiotic penicillin was discovered in a common ______.", a:"mould|mold"},
    {t:'txt', q:"Some scientists are testing fungi to replace plastic or ______.", a:"leather"}]}
]},

/* ================= TEST 9 ================= */
{name:"Spider Silk · Fireworks · Chess", blurb:"Science · History · Games",
 passages:[
  {title:"Spider Silk",
   text:`<p><b>A</b> Spider silk is one of the most remarkable materials found in nature. Weight for weight, it is stronger than steel and tougher than almost any man-made fibre, yet it is so fine that a single strand is nearly invisible. It is also extraordinarily elastic, able to stretch far without breaking.</p>
<p><b>B</b> A spider does not produce just one kind of silk. Most spiders can make several different types, each with its own properties — a strong, dry silk for the frame of a web, a stretchy, sticky silk for catching prey, and a soft silk for wrapping eggs. The spider chooses the right silk for each task.</p>
<p><b>C</b> The silk begins as a liquid protein inside the spider's body. As it is drawn out through tiny nozzles called spinnerets, the liquid is transformed into a solid thread. Exactly how the spider performs this rapid change, at ordinary temperature and using only water, still puzzles scientists.</p>
<p><b>D</b> Because of its amazing qualities, engineers dream of using spider silk in everything from bulletproof vests to medical stitches and artificial ligaments. The problem is quantity: spiders cannot be farmed like silkworms, because they are territorial and tend to eat one another.</p>
<p><b>E</b> To get around this, scientists have inserted spider-silk genes into other organisms, including bacteria and even goats, so that the silk protein can be produced in large amounts. Recreating the full strength of natural silk in the laboratory, however, has proved extremely difficult.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"Spider silk is stronger than steel of the same weight.", a:"true"},
    {t:'tf', q:"A spider can only make one type of silk.", a:"false"},
    {t:'tf', q:"Sticky silk is used to build the frame of the web.", a:"false"},
    {t:'tf', q:"Silk starts as a liquid inside the spider.", a:"true"},
    {t:'tf', q:"Spiders can easily be farmed like silkworms.", a:"false"},
    {t:'tf', q:"Goats produce better silk protein than bacteria.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"Spider silk is very ______, able to stretch without breaking.", a:"elastic"},
    {t:'txt', q:"Dry silk is used for the ______ of a web.", a:"frame"},
    {t:'txt', q:"Sticky silk is used for catching ______.", a:"prey"},
    {t:'txt', q:"Silk is drawn out through nozzles called ______.", a:"spinnerets"},
    {t:'txt', q:"The spider turns liquid protein into a solid ______.", a:"thread"},
    {t:'txt', q:"Engineers hope to use silk in bulletproof ______.", a:"vests"},
    {t:'txt', q:"Spider-silk genes have been put into bacteria and ______.", a:"goats"}]},
  {title:"Fireworks",
   text:`<p><b>A</b> Fireworks light up celebrations all over the world, but few of the people watching realise how old they are or how much chemistry lies behind them. Their story begins in ancient China, where they were invented well over a thousand years ago.</p>
<p><b>B</b> According to tradition, the first firecrackers were simply stalks of bamboo thrown onto a fire, which burst with a bang as the air inside heated and expanded. The loud noise was believed to frighten away evil spirits, and so fireworks became linked with festivals and good fortune.</p>
<p><b>C</b> The real breakthrough was the invention of gunpowder, a mixture of saltpetre, charcoal and sulphur. Packed into a tube, gunpowder could be made to explode or to shoot a projectile into the sky, and the modern firework, or rocket, was born.</p>
<p><b>D</b> The dazzling colours of fireworks come from metal salts added to the powder. Each metal burns with its own colour: copper gives blue, sodium yellow, and strontium a brilliant red. Creating a firework is therefore as much a matter of chemistry as of art.</p>
<p><b>E</b> Designing a large firework display is a skilled and dangerous profession. Experts must time each explosion precisely and calculate the height and spread of every burst, all while handling materials that can kill if mishandled.</p>
<p><b>F</b> Fireworks are not without their critics. They can be dangerous, they frighten animals, and they release smoke and tiny particles into the air. As a result, some cities have begun to replace traditional fireworks with silent displays of drones carrying coloured lights.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; Ancient Chinese origins<br>ii&nbsp; Bamboo bangs and evil spirits<br>iii&nbsp; The role of gunpowder<br>iv&nbsp; The chemistry of colour<br>v&nbsp; The skill of the display designer<br>vi&nbsp; Concerns and modern alternatives<br>vii&nbsp; Fireworks in warfare<br>viii&nbsp; The cost of a display"),
     t:'txt', q:"Paragraph A", a:"i"},
    {t:'txt', q:"Paragraph B", a:"ii"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"Fireworks were invented in:", o:["Europe","ancient China","India","Egypt"], a:"B"},
    {t:'mc', q:"The first firecrackers were made from:", o:["paper","metal","bamboo","clay"], a:"C"},
    {t:'mc', q:"The colours in fireworks come from:", o:["gunpowder","metal salts","bamboo","charcoal"], a:"B"},
    {t:'mc', q:"Some cities are replacing fireworks with:", o:["candles","lasers","drones","fountains"], a:"C"},
    {head:H.comp(24,26), t:'txt', q:"The bang of early firecrackers was thought to frighten away evil ______.", a:"spirits"},
    {t:'txt', q:"Gunpowder is a mixture of saltpetre, charcoal and ______.", a:"sulphur|sulfur"},
    {t:'txt', q:"The metal ______ gives fireworks a blue colour.", a:"copper"}]},
  {title:"The History of Chess",
   text:`<p><b>A</b> Chess is often called the greatest of all board games, and it has a history stretching back nearly one and a half thousand years. Its origins are not European, as many assume, but Indian: the game began in India around the sixth century as a game called chaturanga, which represented an army with its infantry, cavalry, elephants and chariots.</p>
<p><b>B</b> From India the game spread westward into Persia and the Arab world, and from there into Europe, changing as it travelled. Over the centuries the pieces took on new names and the rules were altered to make play faster and more exciting.</p>
<p><b>C</b> The most important change came in Europe around five hundred years ago, when the queen was transformed from a weak piece into the most powerful on the board. This single alteration completely changed the character of the game, making it far more aggressive.</p>
<p><b>D</b> Chess has long been admired as a test of pure intelligence, and for generations the ability to play well was regarded as a sign of a fine mind. Kings, scholars and generals prized the game, and some believed it could teach the strategy needed for real warfare.</p>
<p><b>E</b> A dramatic moment came in 1997, when a computer named Deep Blue defeated the reigning world champion. Many feared this would kill people's interest in the game. In fact the opposite happened: computers became tools for study, and the game grew more popular than ever.</p>
<p><b>F</b> Today chess is enjoyed by millions online, and its popularity has surged among young people. Far from being made obsolete by machines, this ancient game has adapted to the digital world and thrived.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"Chess originally came from India.", a:"yes"},
    {t:'yn', q:"The rules of chess have stayed the same since it began.", a:"no"},
    {t:'yn', q:"Making the queen powerful changed the character of the game.", a:"yes"},
    {t:'yn', q:"Skill at chess was long seen as a sign of intelligence.", a:"yes"},
    {t:'yn', q:"Deep Blue was built specifically to increase chess's popularity.", a:"not given"},
    {t:'yn', q:"Interest in chess declined after the computer's victory.", a:"no"},
    {head:H.info(33,36), t:'txt', q:"the Indian origin of the game", a:"A"},
    {t:'txt', q:"the change that made the queen powerful", a:"C"},
    {t:'txt', q:"a computer's victory over a world champion", a:"E"},
    {t:'txt', q:"the game's success in the digital age", a:"F"},
    {head:H.sa(37,40), t:'txt', q:"What was the original Indian game called?", a:"chaturanga"},
    {t:'txt', q:"In Europe, which piece became the most powerful?", a:"queen|the queen"},
    {t:'txt', q:"In which year did Deep Blue beat the world champion?", a:"1997"},
    {t:'txt', q:"Chess has become especially popular among young ______.", a:"people"}]}
]},

/* ================= TEST 10 ================= */
{name:"The Horse · Rubber · Tulip Mania", blurb:"History · Industry · Economics",
 passages:[
  {title:"The Domestication of the Horse",
   text:`<p><b>A</b> Few animals have changed human history as profoundly as the horse. Before engines, the horse was the fastest means of travel available on land, and for thousands of years it carried people, pulled loads, and transformed the way wars were fought.</p>
<p><b>B</b> Horses were first domesticated on the wide grasslands of Central Asia, probably around five and a half thousand years ago. At first they may have been kept mainly for their meat and milk, and only later were they ridden or harnessed to pull vehicles.</p>
<p><b>C</b> The invention of the wheel, combined with the horse, produced the chariot, a fast fighting platform that gave a huge advantage in battle. Later, once people learned to ride skilfully, mounted warriors became the most feared soldiers in the ancient world.</p>
<p><b>D</b> The horse also revolutionised farming and transport. A horse could pull a plough far faster than an ox, and networks of horse-drawn coaches and postal riders connected distant towns, carrying people, goods and news across whole continents.</p>
<p><b>E</b> The horse's dominance ended only with the arrival of the steam engine and, later, the motor car. Yet horses have not disappeared. They remain central to many sports, are still used for work in some regions, and are valued as companions by millions of people.</p>`,
   Q:[
    {head:H.tf(1,6), t:'tf', q:"Before engines, the horse was the fastest form of land travel.", a:"true"},
    {t:'tf', q:"Horses were first domesticated in Central Asia.", a:"true"},
    {t:'tf', q:"Horses were ridden before they were ever kept for meat.", a:"false"},
    {t:'tf', q:"The chariot combined the horse with the wheel.", a:"true"},
    {t:'tf', q:"A horse ploughs more slowly than an ox.", a:"false"},
    {t:'tf', q:"Horse racing is the most popular horse sport today.", a:"not given"},
    {head:H.comp(7,13), t:'txt', q:"For centuries the horse was the fastest means of ______ on land.", a:"travel"},
    {t:'txt', q:"Horses were first domesticated on the grasslands of Central ______.", a:"Asia"},
    {t:'txt', q:"Early horses may have been kept for meat and ______.", a:"milk"},
    {t:'txt', q:"The horse and the wheel together produced the ______.", a:"chariot"},
    {t:'txt', q:"A horse could pull a ______ faster than an ox.", a:"plough|plow"},
    {t:'txt', q:"Postal ______ carried news across continents.", a:"riders"},
    {t:'txt', q:"The horse's dominance ended with the ______ engine and the car.", a:"steam"}]},
  {title:"The History of Rubber",
   text:`<p><b>A</b> Rubber is a material we rely on every day, in tyres, shoes, gloves and countless other objects, yet for most of history the wider world knew nothing of it. It comes from a milky liquid called latex, which oozes from certain tropical trees when their bark is cut.</p>
<p><b>B</b> The peoples of Central and South America used rubber long before Europeans arrived. They waterproofed cloth with it and, astonishingly, made bouncing balls for games — objects that amazed the first European explorers, who had never seen anything bounce in that way.</p>
<p><b>C</b> Early rubber had a serious drawback: it turned hard and brittle in the cold and soft and sticky in the heat, which made it almost useless. For decades inventors struggled to overcome this fatal flaw.</p>
<p><b>D</b> The solution came in 1839, when the American Charles Goodyear discovered, partly by accident, that heating rubber with sulphur made it stable in all temperatures. This process, called vulcanisation, finally made rubber a practical material and transformed its fortunes.</p>
<p><b>E</b> Demand for rubber then exploded, above all after the invention of the inflatable tyre. Vast plantations were established in tropical colonies, and the rubber trade brought enormous wealth — but also great suffering, as workers were often cruelly exploited.</p>
<p><b>F</b> In the twentieth century, chemists learned to make synthetic rubber from oil, reducing dependence on the tropical tree. Even so, natural rubber remains irreplaceable for many uses, and millions of people still depend on growing it.</p>`,
   Q:[
    {head:H.head(14,19,"i&nbsp; An everyday material from a tree<br>ii&nbsp; Rubber in the ancient Americas<br>iii&nbsp; The flaw that made rubber useless<br>iv&nbsp; Goodyear's discovery<br>v&nbsp; A boom with a dark side<br>vi&nbsp; The rise of synthetic rubber<br>vii&nbsp; How tyres are made<br>viii&nbsp; The uses of rubber today"),
     t:'txt', q:"Paragraph A", a:"i"},
    {t:'txt', q:"Paragraph B", a:"ii"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.mc(20,23), t:'mc', q:"Rubber comes from a liquid called:", o:["sap","latex","resin","oil"], a:"B"},
    {t:'mc', q:"The peoples of the Americas used rubber to waterproof cloth and to make:", o:["shoes","tyres","bouncing balls","gloves"], a:"C"},
    {t:'mc', q:"Early rubber was useless because it changed with:", o:["water","temperature","light","age"], a:"B"},
    {t:'mc', q:"Vulcanisation involves heating rubber with:", o:["oil","water","sulphur","salt"], a:"C"},
    {head:H.comp(24,26), t:'txt', q:"Rubber comes from the ______ of tropical trees.", a:"latex"},
    {t:'txt', q:"Charles Goodyear made his discovery in the year ______.", a:"1839"},
    {t:'txt', q:"Modern ______ rubber is made from oil.", a:"synthetic"}]},
  {title:"Tulip Mania",
   text:`<p><b>A</b> In the seventeenth century, the wealthy Dutch Republic witnessed one of the strangest episodes in economic history. The object of the frenzy was not gold or land but a flower: the tulip. For a few extraordinary years, tulips became worth small fortunes, in what is often called the world's first speculative bubble.</p>
<p><b>B</b> The tulip had arrived in Europe from the Ottoman Empire and quickly became a fashionable luxury. The most prized bulbs produced striking, flame-like patterns on their petals — patterns that, unknown at the time, were actually caused by a virus infecting the plant.</p>
<p><b>C</b> As demand rose, prices climbed to dizzying heights. At the peak, a single rare bulb could reportedly cost more than a fine house in Amsterdam. People began buying bulbs not to plant but simply to sell them on at a profit, convinced that prices could only keep rising.</p>
<p><b>D</b> Then, early in 1637, confidence suddenly evaporated. At a routine auction, buyers failed to appear, and panic spread. Within days prices collapsed, and many who had paid huge sums were left with bulbs worth almost nothing.</p>
<p><b>E</b> Historians still debate how damaging the crash really was. Some old accounts describe widespread ruin, but recent research suggests the worst effects were exaggerated, and that relatively few people were financially destroyed.</p>
<p><b>F</b> Whatever the true scale, tulip mania has never been forgotten. It is still cited today as a warning whenever prices of an asset — whether shares, houses or digital currencies — seem to rise far beyond reason.</p>`,
   Q:[
    {head:H.yn(27,32), t:'yn', q:"Tulip mania is often described as the first speculative bubble.", a:"yes"},
    {t:'yn', q:"The flame-like patterns on prized tulips were caused by a virus.", a:"yes"},
    {t:'yn', q:"People bought tulip bulbs mainly to plant in their gardens.", a:"no"},
    {t:'yn', q:"Tulip prices fell gradually over many years.", a:"no"},
    {t:'yn', q:"The Dutch government tried to stop the tulip trade.", a:"not given"},
    {t:'yn', q:"Recent research suggests the damage from the crash was overstated.", a:"yes"},
    {head:H.info(33,36), t:'txt', q:"the real cause of the tulips' patterns", a:"B"},
    {t:'txt', q:"the sudden collapse of prices", a:"D"},
    {t:'txt', q:"modern debate about the crash's true impact", a:"E"},
    {t:'txt', q:"tulip mania as a warning for today", a:"F"},
    {head:H.sa(37,40), t:'txt', q:"From which empire did the tulip reach Europe?", a:"Ottoman|Ottoman Empire"},
    {t:'txt', q:"In what year did tulip prices collapse?", a:"1637"},
    {t:'txt', q:"At its peak, a rare bulb could cost more than a fine ______ in Amsterdam.", a:"house"},
    {t:'txt', q:"Tulip mania is still cited as a ______ about rising prices.", a:"warning"}]}
]},

/* ============ HARD TEST 1 (Band 8-9) ============ */
{name:"The Commons · Behavioural Economics · Extremophiles", blurb:"🔴 HARD · longer, denser passages with trickier questions", level:"hard",
 passages:[
  {title:"The Tragedy of the Commons",
   text:`<p><b>A</b> In 1968 the ecologist Garrett Hardin published an essay that would become one of the most cited in the social sciences. He asked his readers to imagine a pasture open to all, on which herders graze their cattle. Each herder, acting rationally, gains the full benefit of adding another animal, while the cost of the resulting overgrazing is shared among everyone. The individually sensible decision, multiplied across all herders, ends in collective ruin as the pasture is destroyed. Hardin called this outcome the "tragedy of the commons".</p>
<p><b>B</b> The idea proved enormously influential because it appeared to explain so much. Overfished seas, polluted rivers, deforested hillsides and even a warming atmosphere could all be understood as commons degraded by the pursuit of individual self-interest. Wherever a resource was shared and access unrestricted, Hardin's logic seemed to predict its exhaustion.</p>
<p><b>C</b> Hardin himself drew a stark conclusion: freedom in a commons brings ruin to all. To prevent catastrophe, he argued, societies must impose either strict government control or private ownership, since only external coercion or the self-interest of an owner could restrain the destructive logic of the commons. For decades this pessimistic prescription dominated environmental policy.</p>
<p><b>D</b> Yet the theory had a serious flaw, as the political scientist Elinor Ostrom demonstrated. Studying real communities around the world — Swiss alpine pastures, Japanese forests, Filipino irrigation systems — she found that people had, for centuries, managed shared resources sustainably without either privatisation or the state. Hardin, she pointed out, had described not a true commons but an open-access free-for-all with no rules at all.</p>
<p><b>E</b> Ostrom's research revealed that successful communities devised their own arrangements: clear boundaries defining who could use the resource, rules matched to local conditions, systems for monitoring behaviour, and graduated sanctions for those who broke the rules. Crucially, the users themselves, not distant authorities, made and enforced these agreements. In 2009 Ostrom became the first woman to win the Nobel Prize in economics, largely for this work.</p>
<p><b>F</b> The debate is far from academic. As humanity confronts global commons such as the oceans and the atmosphere — resources no single government controls — the question of how shared things can be governed has never mattered more. Ostrom's insight, that neither pure markets nor pure states hold the only answer, offers a more hopeful and more complicated lesson than Hardin's bleak parable.</p>`,
   Q:[
    {head:H.head(1,6,"i&nbsp; A flawed but powerful idea<br>ii&nbsp; Ostrom's alternative evidence<br>iii&nbsp; The herder's fatal logic<br>iv&nbsp; The rules that make sharing work<br>v&nbsp; Hardin's harsh solution<br>vi&nbsp; Why the argument still matters<br>vii&nbsp; Criticism of Ostrom's methods<br>viii&nbsp; The economics of modern fishing"),
     t:'txt', q:"Paragraph A", a:"iii"},
    {t:'txt', q:"Paragraph B", a:"i"},
    {t:'txt', q:"Paragraph C", a:"v"},
    {t:'txt', q:"Paragraph D", a:"ii"},
    {t:'txt', q:"Paragraph E", a:"iv"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.tf(7,10), t:'tf', q:"Hardin's essay was largely ignored by other academics.", a:"false"},
    {t:'tf', q:"Hardin believed shared resources could be protected only by state control or private ownership.", a:"true"},
    {t:'tf', q:"Ostrom found that community-managed resources always outperform privately owned ones.", a:"not given"},
    {t:'tf', q:"Ostrom argued that Hardin had actually described a situation with no rules.", a:"true"},
    {head:`<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class="bank">boundaries &middot; coercion &middot; monitoring &middot; sanctions &middot; owner &middot; authorities &middot; markets</div>`,
     t:'txt', q:"Hardin thought only government coercion or a private ______ could prevent ruin.", a:"owner"},
    {t:'txt', q:"Ostrom showed that communities set clear ______ around a resource.", a:"boundaries"},
    {t:'txt', q:"They also imposed graduated ______ on those who broke the rules.", a:"sanctions"}]},
  {title:"The Rise of Behavioural Economics",
   text:`<p><b>A</b> For most of the twentieth century, mainstream economics rested on a convenient assumption: that people are rational actors who weigh costs and benefits and choose whatever maximises their own advantage. This idealised figure, sometimes called "homo economicus", made economic models elegant and mathematically tractable. It also, as a growing body of evidence showed, bore little resemblance to how real humans behave.</p>
<p><b>B</b> The challenge came chiefly from psychology. In the 1970s Daniel Kahneman and Amos Tversky conducted a series of experiments demonstrating that people rely on mental shortcuts, or heuristics, that lead to systematic and predictable errors. Faced with uncertainty, we do not calculate probabilities like statisticians; we are swayed by how vividly we can imagine an outcome, or by whatever number happens to be mentioned first.</p>
<p><b>C</b> One of their most striking findings concerned loss. Kahneman and Tversky showed that the pain of losing a sum of money is felt roughly twice as intensely as the pleasure of gaining the same amount. This "loss aversion" means that people will often take irrational risks to avoid a loss, while refusing sensible gambles that would, on average, leave them better off.</p>
<p><b>D</b> The way a choice is presented, or "framed", also proved decisive. Told that a medical treatment has a ninety per cent survival rate, patients are far more willing to accept it than when told it has a ten per cent mortality rate — even though the two statements are identical. Such framing effects have no place in a world of perfectly rational actors.</p>
<p><b>E</b> These ideas gradually moved from the fringes to the centre of the discipline. The economist Richard Thaler argued that, because our errors are predictable, choices can be gently redesigned to help people without restricting their freedom — a philosophy he called "nudging". Automatically enrolling employees in a pension scheme, while letting them opt out, dramatically increases savings, since inertia now works in their favour rather than against them.</p>
<p><b>F</b> Critics warn that nudging can slide into manipulation, and that deciding what counts as a person's "own good" is far from straightforward. Nonetheless, behavioural insights are now used by governments worldwide, and in 2017 Thaler, like Kahneman before him, was awarded the Nobel Prize. The rational actor has not vanished from economics, but he now shares the stage with a messier, more human character.</p>`,
   Q:[
    {head:H.mc(14,17), t:'mc', q:"The assumption of 'homo economicus' appealed to economists because it:", o:["matched real behaviour","made models mathematically neat","was proven by experiments","came from psychology"], a:"B"},
    {t:'mc', q:"Kahneman and Tversky showed that, under uncertainty, people:", o:["calculate probabilities carefully","use shortcuts that cause predictable errors","always avoid all risk","ignore vivid outcomes"], a:"B"},
    {t:'mc', q:"'Loss aversion' means the pain of a loss feels about:", o:["the same as an equal gain","half as strong as a gain","twice as strong as a gain","ten times as strong"], a:"C"},
    {t:'mc', q:"Thaler's idea of 'nudging' aims to:", o:["ban bad choices","tax bad choices","redesign choices while keeping freedom","remove choice entirely"], a:"C"},
    {head:`<b>Questions 18–21</b> · Match each statement with the correct person or group. <div class="bank"><b>A</b> Kahneman &amp; Tversky &nbsp; <b>B</b> Thaler &nbsp; <b>C</b> Critics</div>`,
     t:'txt', q:"developed the concept of loss aversion", a:"A"},
    {t:'txt', q:"proposed automatically enrolling people in pension schemes", a:"B"},
    {t:'txt', q:"warned that gentle redesign could become manipulation", a:"C"},
    {t:'txt', q:"showed that mental shortcuts cause systematic errors", a:"A"},
    {head:H.comp(22,26), t:'txt', q:"The idealised rational human is sometimes called homo ______.", a:"economicus"},
    {t:'txt', q:"Mental shortcuts are also known as ______.", a:"heuristics"},
    {t:'txt', q:"The way a choice is presented is called its ______.", a:"framing|frame"},
    {t:'txt', q:"Thaler called his philosophy '______'.", a:"nudging"},
    {t:'txt', q:"Automatic pension enrolment works because ______ now helps savers.", a:"inertia"}]},
  {title:"Extremophiles: Life at the Limits",
   text:`<p><b>A</b> For a long time, biologists assumed that life required fairly gentle conditions: moderate temperatures, fresh water, neutral acidity. Then, in the 1960s, researchers began to find organisms thriving in places that ought to have been utterly lethal — in boiling hot springs, in water saltier than the sea, in acid that would dissolve metal. These hardy microbes were named extremophiles, "lovers of extremes".</p>
<p><b>B</b> The discovery forced a rethink of the very limits of life. In the scalding water of deep-sea vents, where temperatures exceed a hundred degrees Celsius, entire ecosystems flourish without any sunlight, powered instead by chemicals rising from beneath the sea floor. Some microbes endure pressures that would crush a submarine; others survive being frozen solid for thousands of years, only to revive when thawed.</p>
<p><b>C</b> Perhaps the most remarkable is a bacterium able to withstand radiation thousands of times stronger than a dose fatal to humans. It does so not by preventing damage to its DNA but by repairing the shattered genetic material with extraordinary speed. Such abilities suggest that life is far tougher, and far more inventive, than anyone had imagined.</p>
<p><b>D</b> The implications extend beyond biology. If organisms can flourish in Earth's most hostile corners, then the harsh environments of other worlds — the frozen oceans thought to lie beneath the ice of certain moons, or the salty soils of Mars — may not be as barren as they appear. Extremophiles have thus become central to the search for life beyond our planet.</p>
<p><b>E</b> They have practical uses too. An enzyme taken from a heat-loving microbe made possible the technique that allows scientists to copy DNA rapidly, a breakthrough underpinning much of modern medicine and forensic science. Other extremophiles are being studied for cleaning up toxic waste and for producing chemicals that function at temperatures where ordinary ones fail.</p>
<p><b>F</b> Yet many scientists caution against assuming that extreme conditions are where life began. It is one thing for organisms to have adapted to extremes over billions of years; it is another to claim, as some do, that life first arose in such places. On that question, which remains unresolved, the extremophiles themselves are silent.</p>`,
   Q:[
    {head:H.yn(27,31), t:'yn', q:"The discovery of extremophiles changed scientists' understanding of the limits of life.", a:"yes"},
    {t:'yn', q:"Deep-sea vent ecosystems depend on sunlight.", a:"no"},
    {t:'yn', q:"The radiation-resistant bacterium avoids damage to its DNA in the first place.", a:"no"},
    {t:'yn', q:"Extremophiles have made scientists more optimistic about finding life on other worlds.", a:"yes"},
    {t:'yn', q:"It is now proven that life on Earth began in extreme environments.", a:"no"},
    {head:`<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class="bank">A&nbsp; without any sunlight.<br>B&nbsp; by repairing its DNA quickly.<br>C&nbsp; the technique for copying DNA.<br>D&nbsp; may support life elsewhere.<br>E&nbsp; remains an open question.<br>F&nbsp; are being studied to clean toxic waste.</div>`,
     t:'txt', q:"Ecosystems around deep-sea vents survive ______", a:"A"},
    {t:'txt', q:"The radiation-resistant bacterium survives ______", a:"B"},
    {t:'txt', q:"An enzyme from a heat-loving microbe enabled ______", a:"C"},
    {t:'txt', q:"Harsh environments on other worlds ______", a:"D"},
    {t:'txt', q:"Whether life first began in extreme places ______", a:"E"},
    {head:H.sa(37,40), t:'txt', q:"What name is given to organisms that live in extreme conditions?", a:"extremophiles"},
    {t:'txt', q:"What powers deep-sea vent ecosystems instead of sunlight?", a:"chemicals"},
    {t:'txt', q:"Copying DNA rapidly was made possible by an ______ from a heat-loving microbe.", a:"enzyme"},
    {t:'txt', q:"Frozen oceans are thought to lie beneath the ice of certain ______.", a:"moons"}]}
]},

/* ============ HARD TEST 2 (Band 8-9) ============ */
{name:"Biomimicry · The History of Zero · Linguistic Relativity", blurb:"🔴 HARD · abstract topics, heavy paraphrase, subtle traps", level:"hard",
 passages:[
  {title:"Biomimicry",
   text:`<p><b>A</b> Nature has had some 3.8 billion years to test its designs. Over that vast span, evolution has produced solutions to problems of energy, materials and structure that human engineers are only beginning to appreciate. Biomimicry — the practice of imitating nature's models to solve human problems — treats the living world not as a warehouse of resources to be extracted but as a library of ideas to be studied.</p>
<p><b>B</b> The approach has produced some celebrated successes. A Japanese bullet train, whose blunt nose created a deafening boom when it burst from tunnels, was redesigned to resemble the streamlined beak of a kingfisher, a bird that dives into water with barely a splash. The result was a train that was quieter, faster and more efficient. The rough skin of sharks, which resists the build-up of bacteria, has inspired surfaces for hospitals that discourage infection without chemicals.</p>
<p><b>C</b> Materials science has been especially fruitful. Spider silk, tougher for its weight than steel, is made at body temperature from water and protein, whereas human high-performance fibres demand extreme heat and toxic solvents. Mother-of-pearl, formed by molluscs, is astonishingly resistant to cracking. Understanding how nature builds such materials so cheaply and cleanly could transform manufacturing.</p>
<p><b>D</b> Biomimicry also offers lessons in how systems, not just single objects, might be organised. In a mature forest or a coral reef, the waste of one organism becomes the food of another, so that nothing is truly discarded. Advocates argue that human economies, which generate mountains of waste, might be redesigned along the same closed-loop lines, an idea central to what is now called the circular economy.</p>
<p><b>E</b> Enthusiasts sometimes overstate the case. Not every natural design is worth copying; evolution produces solutions that are merely "good enough" to survive, not perfect, and a structure that suits a beetle may be useless at human scale. Nature optimises for the survival of genes, which is not always the same as optimising for human convenience or efficiency.</p>
<p><b>F</b> Even so, the deeper value of biomimicry may be less a set of specific inventions than a change of attitude. It invites engineers to ask not "how can we bend nature to our will?" but "how does nature already solve this?" In an age of environmental strain, that humbler question may prove the most useful design principle of all.</p>`,
   Q:[
    {head:H.head(1,6,"i&nbsp; Lessons from whole systems<br>ii&nbsp; Nature as a library of designs<br>iii&nbsp; Famous imitations<br>iv&nbsp; Copying nature's materials<br>v&nbsp; A word of caution<br>vi&nbsp; A change of attitude<br>vii&nbsp; The cost of research<br>viii&nbsp; Nature's greatest failures"),
     t:'txt', q:"Paragraph A", a:"ii"},
    {t:'txt', q:"Paragraph B", a:"iii"},
    {t:'txt', q:"Paragraph C", a:"iv"},
    {t:'txt', q:"Paragraph D", a:"i"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.tf(7,10), t:'tf', q:"The redesigned bullet train was modelled on a kingfisher's beak.", a:"true"},
    {t:'tf', q:"Spider silk requires very high temperatures to produce.", a:"false"},
    {t:'tf', q:"Biomimicry has already replaced most traditional manufacturing.", a:"not given"},
    {t:'tf', q:"Evolution always produces perfect solutions.", a:"false"},
    {head:`<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class="bank">waste &middot; forest &middot; genes &middot; chemicals &middot; protein &middot; splash &middot; convenience</div>`,
     t:'txt', q:"Shark skin has inspired surfaces that resist bacteria without ______.", a:"chemicals"},
    {t:'txt', q:"In a mature ______, the waste of one organism feeds another.", a:"forest"},
    {t:'txt', q:"Nature optimises for the survival of ______, not for human needs.", a:"genes"}]},
  {title:"The History of Zero",
   text:`<p><b>A</b> Of all the numbers, zero is the strangest and, historically, the most controversial. It is hard for us to imagine counting without it, yet for most of human history mathematics managed without a symbol for nothing. Counting, after all, begins with things that are present; the absence of things seems to need no number at all.</p>
<p><b>B</b> The ancient Babylonians, some four thousand years ago, took a first step. To avoid confusion in their place-value system — distinguishing, say, sixty from six hundred — they eventually used a mark to show an empty position. But this was merely a placeholder, a gap-filler; it was not yet a number that could itself be added or multiplied.</p>
<p><b>C</b> The decisive leap came in India. By around the seventh century, Indian mathematicians, above all Brahmagupta, treated zero as a number in its own right and set out rules for calculating with it. Zero, they saw, was what remained when a quantity was subtracted from itself. This was a profound conceptual shift: nothing had become something.</p>
<p><b>D</b> From India the concept travelled, carried by scholars of the medieval Islamic world, who developed it further and passed it, along with the numerals we still call "Arabic", towards Europe. There, however, it met resistance. Zero was viewed with suspicion, even fear; some authorities associated the void it represented with disorder, and a few cities banned its use.</p>
<p><b>E</b> The obstacle was not merely superstition. Zero genuinely misbehaves. Dividing by it produces nonsense, and its properties troubled mathematicians for centuries. Yet these very difficulties drove mathematics forward, forcing thinkers to define their terms with new rigour and eventually making possible the calculus on which modern science depends.</p>
<p><b>F</b> Today zero is so familiar that its strangeness is invisible. It sits, unremarked, at the heart of every computer, whose entire language is written in noughts and ones. A symbol once feared as the mark of nothingness turned out to be one of the most powerful ideas humanity has ever devised.</p>`,
   Q:[
    {head:H.mc(14,17), t:'mc', q:"For most of human history, mathematics:", o:["used several symbols for zero","functioned without a symbol for zero","forbade counting","treated zero as the first number"], a:"B"},
    {t:'mc', q:"The Babylonian mark for an empty position was:", o:["a full number","a placeholder only","invented in India","used for division"], a:"B"},
    {t:'mc', q:"Brahmagupta's key contribution was to:", o:["invent Arabic numerals","treat zero as a number with rules","ban zero","build the first computer"], a:"B"},
    {t:'mc', q:"In medieval Europe, zero was initially:", o:["welcomed at once","met with suspicion","kept secret by scholars","used only for calculus"], a:"B"},
    {head:`<b>Questions 18–21</b> · Match each achievement with the correct civilisation. <div class="bank"><b>A</b> Babylonians &nbsp; <b>B</b> Indians &nbsp; <b>C</b> medieval Islamic scholars</div>`,
     t:'txt', q:"first used a placeholder for an empty position", a:"A"},
    {t:'txt', q:"treated zero as a number in its own right", a:"B"},
    {t:'txt', q:"passed zero and the numerals towards Europe", a:"C"},
    {t:'txt', q:"wrote rules for calculating with zero", a:"B"},
    {head:H.comp(22,26), t:'txt', q:"For a long time zero was seen not as a number but as a ______.", a:"placeholder"},
    {t:'txt', q:"Indians realised zero was what remained when a quantity was subtracted from ______.", a:"itself"},
    {t:'txt', q:"The numerals spread by Islamic scholars are still called ______.", a:"Arabic"},
    {t:'txt', q:"A few European cities ______ the use of zero.", a:"banned"},
    {t:'txt', q:"A computer's language is written in noughts and ______.", a:"ones"}]},
  {title:"Does Language Shape Thought?",
   text:`<p><b>A</b> Does the language you speak shape the way you think? The question, known as linguistic relativity, has provoked one of the longest-running debates in the study of the mind. In its boldest form, associated with the linguist Benjamin Lee Whorf in the 1930s, the claim was dramatic: that the categories of our language determine, and even limit, the thoughts we are able to have.</p>
<p><b>B</b> This strong version fell out of favour. Critics pointed out that people can plainly think about things their language lacks a single word for, and that we are not the prisoners of our vocabulary. If language rigidly controlled thought, they argued, translation would be impossible and new ideas could never arise. The claim was dismissed, for a time, as an appealing but unfounded myth.</p>
<p><b>C</b> In recent decades, however, a subtler version has won cautious support. Careful experiments suggest that language does not imprison thought but does nudge it. Speakers of languages that use compass directions — "north", "south" — rather than "left" and "right" prove remarkably good at staying oriented, even in unfamiliar places, because their language obliges them to track direction constantly.</p>
<p><b>D</b> Colour offers another example. Languages divide the spectrum differently; some treat blue and green as shades of a single colour, while Russian, for instance, has separate basic words for lighter and darker blue. Experiments show that Russian speakers are slightly faster at telling these two blues apart, as though the linguistic boundary had sharpened their perception.</p>
<p><b>E</b> Grammar, too, may leave its mark. In some languages a speaker must, by the very structure of the verb, indicate whether an event was witnessed personally or merely reported. Speakers of such languages, some researchers suggest, may pay closer habitual attention to the sources of their information, though such claims remain difficult to test.</p>
<p><b>F</b> The modern consensus is a moderate one. Language is not a cage, but nor is it a neutral vehicle that leaves thought untouched. It is better pictured as a lens, subtly colouring the way its speakers attend to the world — a conclusion less sensational than Whorf's, but far better supported by evidence.</p>`,
   Q:[
    {head:H.yn(27,31), t:'yn', q:"The strong version of linguistic relativity claimed language limits which thoughts are possible.", a:"yes"},
    {t:'yn', q:"Critics accepted that translation between languages is impossible.", a:"no"},
    {t:'yn', q:"Speakers of compass-direction languages are unusually good at staying oriented.", a:"yes"},
    {t:'yn', q:"Russian speakers are slower than others at distinguishing two shades of blue.", a:"no"},
    {t:'yn', q:"Claims about grammar and attention to information sources are easy to test.", a:"no"},
    {head:`<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class="bank">A&nbsp; nudges it in subtle ways.<br>B&nbsp; track direction constantly.<br>C&nbsp; sharpened their perception of colour.<br>D&nbsp; whether an event was witnessed or reported.<br>E&nbsp; an appealing but unfounded myth.<br>F&nbsp; impossible to learn a second language.</div>`,
     t:'txt', q:"For a time, the strong version was dismissed as ______", a:"E"},
    {t:'txt', q:"Compass-direction languages oblige speakers to ______", a:"B"},
    {t:'txt', q:"A linguistic boundary seems to have ______", a:"C"},
    {t:'txt', q:"Some grammars force speakers to mark ______", a:"D"},
    {t:'txt', q:"The modern view is that language does not control thought but ______", a:"A"},
    {head:H.sa(37,40), t:'txt', q:"Which linguist is associated with the strong version of the theory?", a:"Whorf|Benjamin Lee Whorf"},
    {t:'txt', q:"Instead of 'left' and 'right', some languages use ______ directions.", a:"compass"},
    {t:'txt', q:"The passage compares language not to a cage but to a ______.", a:"lens"},
    {t:'txt', q:"Russian has separate basic words for lighter and darker ______.", a:"blue"}]}
]},

/* ============ HARD TEST 3 (Band 8-9) ============ */
{name:"Game Theory · The Microbiome · The Anthropocene", blurb:"🔴 HARD · dense argument, close distractors", level:"hard",
 passages:[
  {title:"Game Theory",
   text:`<p><b>A</b> Game theory is the mathematical study of strategic decisions — situations in which the outcome for each participant depends not only on their own choices but on the choices of others. Though its roots lie in the analysis of parlour games such as poker, it has grown into a powerful tool used in economics, biology, politics and computer science.</p>
<p><b>B</b> The field was largely founded in the 1940s by the mathematician John von Neumann and the economist Oskar Morgenstern. Their work was later extended by John Nash, who introduced the idea of an equilibrium: a set of choices from which no player can gain by changing their own strategy alone, given what everyone else is doing.</p>
<p><b>C</b> The most famous illustration is the "prisoner's dilemma". Two suspects are questioned separately and each is offered a deal to betray the other. If both stay silent, both receive a light sentence; if both betray, both suffer heavily; but if one betrays while the other stays silent, the betrayer goes free. Rationally, each is tempted to betray — yet if both do so, both end up worse off than if they had cooperated.</p>
<p><b>D</b> The dilemma captures a deep and uncomfortable truth: individually rational choices can produce collectively disastrous results. It helps explain why nations struggle to limit weapons, why businesses undercut each other on price, and why people overuse shared resources, even when everyone would benefit from restraint.</p>
<p><b>E</b> Yet cooperation does emerge in the real world, and game theory helps explain why. When the same players interact repeatedly, betrayal can be punished and trust rewarded. A famously successful strategy, "tit for tat", simply cooperates first and then mirrors whatever the other player did last, proving that a willingness to cooperate, combined with a readiness to retaliate, can flourish.</p>
<p><b>F</b> Biology, too, has embraced these ideas. Animal behaviours once thought merely instinctive — when to fight, when to share, when to signal honestly — can be modelled as strategies shaped by evolution. In this way a branch of mathematics born from card games now illuminates the behaviour of everything from corporations to cells.</p>`,
   Q:[
    {head:H.head(1,6,"i&nbsp; The founders of the field<br>ii&nbsp; A dilemma with wide relevance<br>iii&nbsp; What game theory studies<br>iv&nbsp; How cooperation can survive<br>v&nbsp; The classic thought experiment<br>vi&nbsp; From mathematics to biology<br>vii&nbsp; Games purely as entertainment<br>viii&nbsp; Criticism of Nash's equilibrium"),
     t:'txt', q:"Paragraph A", a:"iii"},
    {t:'txt', q:"Paragraph B", a:"i"},
    {t:'txt', q:"Paragraph C", a:"v"},
    {t:'txt', q:"Paragraph D", a:"ii"},
    {t:'txt', q:"Paragraph E", a:"iv"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.tf(7,10), t:'tf', q:"Game theory is used only in economics.", a:"false"},
    {t:'tf', q:"In the prisoner's dilemma, the two suspects are questioned together.", a:"false"},
    {t:'tf', q:"The 'tit for tat' strategy begins by betraying the other player.", a:"false"},
    {t:'tf', q:"John Nash won a Nobel Prize for his work.", a:"not given"},
    {head:`<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class="bank">equilibrium &middot; betray &middot; repeatedly &middot; instinct &middot; cooperate &middot; poker &middot; punish</div>`,
     t:'txt', q:"Nash described an ______ in which no player gains by changing strategy alone.", a:"equilibrium"},
    {t:'txt', q:"In the prisoner's dilemma each is tempted to ______ the other.", a:"betray"},
    {t:'txt', q:"When players meet ______, cooperation can survive.", a:"repeatedly"}]},
  {title:"The Human Microbiome",
   text:`<p><b>A</b> The human body is often described as a single organism, but in truth each of us is a walking ecosystem. Trillions of microbes — bacteria, viruses and fungi — live in and on our bodies, above all in the gut. Together they are known as the microbiome, and their genes vastly outnumber our own. In a real sense, we are more microbial than human.</p>
<p><b>B</b> For most of medical history these microbes were ignored or, when noticed, regarded as enemies to be destroyed. The discovery of antibiotics reinforced the idea that bacteria were simply agents of disease. Only in recent decades have scientists come to appreciate that the great majority are harmless or positively beneficial.</p>
<p><b>C</b> The gut microbiome performs functions our own bodies cannot. Its bacteria break down fibres we could not otherwise digest, synthesise certain vitamins, and train the immune system to distinguish friend from foe. A healthy, diverse microbiome, research increasingly suggests, is a foundation of good health.</p>
<p><b>D</b> When that community is disturbed, trouble may follow. Studies have linked an unbalanced microbiome to conditions ranging from obesity and diabetes to allergies, and even, more controversially, to mood and mental health, through what is sometimes called the "gut–brain axis". Much of this research, however, is still young, and cause and effect are hard to separate.</p>
<p><b>E</b> One striking treatment has already proven its worth. For patients with a dangerous gut infection resistant to antibiotics, transplanting stool — and with it a healthy microbiome — from a donor can restore balance with remarkable success. Once regarded as bizarre, the procedure is now an accepted therapy.</p>
<p><b>F</b> The field is advancing quickly but demands caution. Popular enthusiasm has raced ahead of the evidence, and the shelves are full of probiotic products making claims that science cannot yet support. What is clear is that the tiny passengers we carry are not mere hitchhikers but partners, shaped by our diet and shaping our health in return.</p>`,
   Q:[
    {head:H.mc(14,17), t:'mc', q:"The microbiome consists of:", o:["only bacteria","microbes living in and on the body","human genes only","antibiotics"], a:"B"},
    {t:'mc', q:"For most of medical history, microbes were regarded as:", o:["partners","harmless","enemies to be destroyed","vitamins"], a:"C"},
    {t:'mc', q:"Gut bacteria help the body by:", o:["producing antibiotics","digesting fibre and making vitamins","replacing the immune system","causing obesity"], a:"B"},
    {t:'mc', q:"The stool-transplant treatment is used for:", o:["all diseases","a gut infection resistant to antibiotics","mental illness","allergies"], a:"B"},
    {head:H.info(18,21), t:'txt', q:"a treatment involving a transplant from a donor", a:"E"},
    {t:'txt', q:"a warning that products overstate the evidence", a:"F"},
    {t:'txt', q:"the claim that our microbial genes outnumber our own", a:"A"},
    {t:'txt', q:"links between the microbiome and various diseases", a:"D"},
    {head:H.comp(22,26), t:'txt', q:"Most of our microbes live in the ______.", a:"gut"},
    {t:'txt', q:"Antibiotics reinforced the idea that bacteria cause ______.", a:"disease"},
    {t:'txt', q:"Gut bacteria help train the ______ system.", a:"immune"},
    {t:'txt', q:"The gut–brain ______ may link microbes to mood.", a:"axis"},
    {t:'txt', q:"Products claiming gut benefits are often called ______.", a:"probiotic|probiotics"}]},
  {title:"The Anthropocene",
   text:`<p><b>A</b> Geologists divide Earth's history into named intervals — eras, periods and epochs — each marked by distinctive layers in the rock. For the last 11,700 years we have officially lived in the Holocene, the warm, stable epoch in which all of human civilisation arose. Now a growing number of scientists argue that we have entered a new epoch, one defined not by natural forces but by ourselves: the Anthropocene, the "age of humans".</p>
<p><b>B</b> The case rests on the sheer scale of humanity's impact. We have transformed more than half the planet's land surface, dammed most of its major rivers, and altered the chemistry of its air and oceans. Human activity now moves more rock and soil than all the world's rivers combined. Future geologists, the argument runs, will read our presence unmistakably in the rock.</p>
<p><b>C</b> What that lasting signal will be is much debated. Candidates include the plastics that now litter every environment, the ash from burning fossil fuels, the bones of the billions of chickens we consume, and — most precisely datable of all — the radioactive particles scattered worldwide by nuclear tests in the mid-twentieth century.</p>
<p><b>D</b> That date, around 1950, is favoured by many, since it marks the "Great Acceleration", a sudden post-war surge in population, consumption and pollution. Others argue for an earlier start, with the rise of farming or the Industrial Revolution, while a few reject the whole idea, insisting the changes are too recent to count as a true geological epoch.</p>
<p><b>E</b> The dispute is not merely technical. To name an epoch after ourselves is to make a statement about responsibility. It declares that humanity has become a geological force, on a par with volcanoes and asteroids, and that the future of the planet's systems now lies, to a frightening degree, in our hands.</p>
<p><b>F</b> Whether or not the term is formally adopted, its popularity reflects a genuine shift in understanding. We can no longer think of nature as a vast backdrop, indifferent to our doings. The line between the human and the natural, once seemingly clear, has, in the space of a few generations, all but dissolved.</p>`,
   Q:[
    {head:H.yn(27,31), t:'yn', q:"Human civilisation developed during the Holocene epoch.", a:"yes"},
    {t:'yn', q:"Humans now move less rock and soil than the world's rivers.", a:"no"},
    {t:'yn', q:"There is complete agreement on when the Anthropocene began.", a:"no"},
    {t:'yn', q:"Radioactive particles from nuclear tests offer a precisely datable marker.", a:"yes"},
    {t:'yn', q:"The idea of the Anthropocene is purely technical, with no wider meaning.", a:"no"},
    {head:`<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class="bank">A&nbsp; arose during the Holocene.<br>B&nbsp; more rock than all the world's rivers.<br>C&nbsp; the radioactive fallout of nuclear tests.<br>D&nbsp; the post-war "Great Acceleration".<br>E&nbsp; that humans are now a geological force.<br>F&nbsp; the eruption of a single volcano.</div>`,
     t:'txt', q:"All of human civilisation ______", a:"A"},
    {t:'txt', q:"Human activity now moves ______", a:"B"},
    {t:'txt', q:"The most precisely datable marker is ______", a:"C"},
    {t:'txt', q:"The date of about 1950 marks ______", a:"D"},
    {t:'txt', q:"Naming the epoch declares ______", a:"E"},
    {head:H.sa(37,40), t:'txt', q:"What is the current official epoch called?", a:"Holocene"},
    {t:'txt', q:"What name means the 'age of humans'?", a:"Anthropocene"},
    {t:'txt', q:"The sudden post-war surge is called the Great ______.", a:"Acceleration"},
    {t:'txt', q:"Nuclear tests scattered radioactive ______ worldwide.", a:"particles"}]}
]},

/* ============ HARD TEST 4 (Band 8-9) ============ */
{name:"Dark Matter · Origins of Agriculture · Swarm Intelligence", blurb:"🔴 HARD · science & prehistory, heavy inference", level:"hard",
 passages:[
  {title:"Dark Matter",
   text:`<p><b>A</b> One of the great embarrassments of modern science is that we do not know what most of the universe is made of. The atoms that form stars, planets and people — everything we can see and touch — account for only about five per cent of the cosmos. The rest is invisible, detectable only by its effects. Roughly a quarter is thought to be "dark matter", and the remainder a still more mysterious "dark energy".</p>
<p><b>B</b> The first hint of dark matter came in the 1930s, when the astronomer Fritz Zwicky noticed that galaxies in a distant cluster were moving far too fast. The visible matter they contained could not possibly generate enough gravity to hold them together; something unseen, he proposed, must be supplying the extra pull. His idea was ignored for decades.</p>
<p><b>C</b> Stronger evidence arrived in the 1970s from the work of Vera Rubin, who studied how stars orbit within galaxies. According to the visible matter, stars at the edge should move slowly; instead they raced round just as fast as those near the centre. The simplest explanation was that each galaxy sits within a vast, invisible halo of dark matter, whose gravity keeps the outer stars moving quickly.</p>
<p><b>D</b> What dark matter actually is remains unknown. It emits no light, which is why we cannot see it, and it appears to pass straight through ordinary matter. Most physicists suspect it consists of some as-yet-undiscovered particle, and enormous, sensitive detectors have been built deep underground to catch one. So far, none has been found.</p>
<p><b>E</b> A minority of scientists take a bolder view: that dark matter does not exist at all, and that our theory of gravity is simply wrong on the largest scales. Modifying the laws of gravity can reproduce some observations, but this approach struggles to explain everything that dark matter accounts for, and most researchers remain unconvinced.</p>
<p><b>F</b> The stakes could hardly be higher. To resolve the puzzle would be to discover the substance that makes up most of the material universe and shapes the largest structures within it. Until then, we are in the curious position of understanding, in detail, only a tiny fraction of the cosmos we inhabit.</p>`,
   Q:[
    {head:H.head(1,6,"i&nbsp; The first overlooked clue<br>ii&nbsp; An unknown substance<br>iii&nbsp; How much we cannot see<br>iv&nbsp; Evidence from spinning galaxies<br>v&nbsp; A rival explanation<br>vi&nbsp; Why the answer matters<br>vii&nbsp; The birth of the universe<br>viii&nbsp; Building better telescopes"),
     t:'txt', q:"Paragraph A", a:"iii"},
    {t:'txt', q:"Paragraph B", a:"i"},
    {t:'txt', q:"Paragraph C", a:"iv"},
    {t:'txt', q:"Paragraph D", a:"ii"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.tf(7,10), t:'tf', q:"Ordinary atoms make up most of the universe.", a:"false"},
    {t:'tf', q:"Zwicky's early idea was quickly accepted by other scientists.", a:"false"},
    {t:'tf', q:"Detectors built to find dark-matter particles have so far succeeded.", a:"false"},
    {t:'tf', q:"Dark-matter detectors are placed deep underground.", a:"true"},
    {head:`<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class="bank">halo &middot; light &middot; gravity &middot; particle &middot; centre &middot; energy &middot; visible</div>`,
     t:'txt', q:"Dark matter emits no ______, so it cannot be seen directly.", a:"light"},
    {t:'txt', q:"Vera Rubin's work suggested each galaxy sits in an invisible ______ of dark matter.", a:"halo"},
    {t:'txt', q:"Most physicists think dark matter is an unknown ______.", a:"particle"}]},
  {title:"The Origins of Agriculture",
   text:`<p><b>A</b> For more than ninety per cent of our species' existence, humans lived as hunter-gatherers, moving in small bands to follow game and gather wild plants. Then, beginning around twelve thousand years ago, in several parts of the world independently, people began to plant crops and keep animals. This shift to farming, often called the Neolithic Revolution, was among the most consequential in human history.</p>
<p><b>B</b> Curiously, it may not have made individual lives better, at least at first. Studies of ancient skeletons suggest that early farmers were often shorter, less well nourished and more prone to disease than the hunter-gatherers who preceded them. Their diet, based on a few staple crops, was narrower, and living close to animals and to other people bred new illnesses.</p>
<p><b>C</b> Why, then, did farming spread? The likeliest answer is numbers. Although farming was harder work and less healthy, it produced far more food per unit of land, which allowed populations to grow. Farming communities, however unhealthy, simply out-bred and displaced their hunter-gatherer neighbours.</p>
<p><b>D</b> Farming also transformed society itself. A settled life allowed people to accumulate possessions and to store surplus grain — a store that had to be defended and could be seized. For the first time, some people could live off the labour of others, and durable differences in wealth and power began to appear.</p>
<p><b>E</b> The domesticated species themselves were changed in the process. Wild wheat scatters its seeds to reproduce; the plants farmers favoured were mutants whose seeds stayed on the stalk, easy to harvest but now dependent on humans to sow them. Animals, too, were bred to be smaller, tamer and more useful. Human and crop had entered a partnership from which neither could easily withdraw.</p>
<p><b>F</b> The consequences are still unfolding. Everything that we call civilisation — cities, writing, states, and the vast human population itself — ultimately rests on the surplus that agriculture first made possible, along with the inequalities that came with it.</p>`,
   Q:[
    {head:H.mc(14,17), t:'mc', q:"For most of human existence, people lived as:", o:["farmers","hunter-gatherers","city-dwellers","herders"], a:"B"},
    {t:'mc', q:"Compared with hunter-gatherers, early farmers were often:", o:["taller and healthier","shorter and less healthy","longer-lived","better fed"], a:"B"},
    {t:'mc', q:"Farming spread mainly because it:", o:["was easier work","was healthier","produced more food per unit of land","required no animals"], a:"C"},
    {t:'mc', q:"Stored surplus grain led to:", o:["equal societies","differences in wealth and power","the end of farming","smaller populations"], a:"B"},
    {head:H.info(18,21), t:'txt', q:"evidence taken from ancient skeletons", a:"B"},
    {t:'txt', q:"how the wheat farmers favoured differed from wild wheat", a:"E"},
    {t:'txt', q:"the independent origins of farming in several regions", a:"A"},
    {t:'txt', q:"the link between farming and modern civilisation", a:"F"},
    {head:H.comp(22,26), t:'txt', q:"The shift to farming is called the ______ Revolution.", a:"Neolithic"},
    {t:'txt', q:"Early farmers relied on a few ______ crops.", a:"staple"},
    {t:'txt', q:"Farming allowed people to store surplus ______.", a:"grain"},
    {t:'txt', q:"Wild wheat scatters its ______ to reproduce.", a:"seeds"},
    {t:'txt', q:"Domesticated animals were bred to be smaller and ______.", a:"tamer"}]},
  {title:"Swarm Intelligence",
   text:`<p><b>A</b> A single ant is not impressive. With a brain smaller than a pinhead, it can do little on its own and would quickly perish if left alone. Yet a colony of ants can build elaborate nests, wage wars, farm fungus and find the shortest route to food, solving problems that no individual ant could begin to comprehend. This is the paradox of what scientists call swarm intelligence.</p>
<p><b>B</b> The secret is that complex group behaviour can arise from simple individual rules, with no leader in charge. Ants find efficient paths not by planning but by laying down chemical trails; the shortest route is travelled fastest, so its trail grows strongest and attracts more ants, in a self-reinforcing loop. Order emerges from the bottom up, without anyone directing it.</p>
<p><b>C</b> Such "emergence" is found throughout nature. A flock of thousands of starlings wheels through the sky as one, yet each bird merely follows a few simple rules about its nearest neighbours. A colony of bees chooses a new home through a kind of collective vote, with no bee overseeing the decision. The group behaves as if it were a single intelligent creature.</p>
<p><b>D</b> These natural systems have inspired human technology. Engineers have written "ant-colony" algorithms that solve difficult routing problems — directing lorries, or data through a network — by mimicking the trail-laying of insects. Swarms of small, cheap robots, each following simple rules, are being developed to explore, to search collapsed buildings, or to monitor crops.</p>
<p><b>E</b> The appeal of the approach is its robustness. A swarm has no leader whose loss would cause collapse and no single point of failure; if some members are lost, the rest carry on. Such systems are flexible and resilient in ways that centrally controlled ones are not, though they can also be harder to predict and control.</p>
<p><b>F</b> There is a broader lesson here about intelligence itself. It need not reside in a single powerful brain. It can be distributed across a multitude of simple parts, emerging from their interactions — a possibility that challenges our very idea of what it means to be clever.</p>`,
   Q:[
    {head:H.yn(27,31), t:'yn', q:"A single ant can accomplish little on its own.", a:"yes"},
    {t:'yn', q:"Ant colonies find short routes because a leader plans them.", a:"no"},
    {t:'yn', q:"In a starling flock, each bird follows only a few simple rules.", a:"yes"},
    {t:'yn', q:"Ant-colony algorithms have been used to solve routing problems.", a:"yes"},
    {t:'yn', q:"Swarm systems collapse if any single member is lost.", a:"no"},
    {head:`<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class="bank">A&nbsp; follows simple rules about its neighbours.<br>B&nbsp; the shortest trail grows strongest.<br>C&nbsp; directing lorries or data through a network.<br>D&nbsp; has no single point of failure.<br>E&nbsp; reside in one powerful brain.<br>F&nbsp; are difficult to breed in captivity.</div>`,
     t:'txt', q:"Ants find efficient paths because ______", a:"B"},
    {t:'txt', q:"Each bird in a flock merely ______", a:"A"},
    {t:'txt', q:"Ant-colony algorithms solve problems such as ______", a:"C"},
    {t:'txt', q:"A swarm is robust because it ______", a:"D"},
    {t:'txt', q:"Intelligence need not ______", a:"E"},
    {head:H.sa(37,40), t:'txt', q:"What do scientists call the collective problem-solving of groups like ant colonies?", a:"swarm intelligence"},
    {t:'txt', q:"What do ants lay down to mark efficient routes?", a:"chemical trails|trails"},
    {t:'txt', q:"Order in a swarm arises from the ______ up.", a:"bottom"},
    {t:'txt', q:"Swarms of small ______ are being developed to search collapsed buildings.", a:"robots"}]}
]},

/* ============ HARD TEST 5 (Band 8-9) ============ */
{name:"Epigenetics · The Wisdom of Crowds · Convergent Evolution", blurb:"🔴 HARD · abstract science, opinion & nuance", level:"hard",
 passages:[
  {title:"Epigenetics: Beyond the Gene",
   text:`<p><b>A</b> For much of the twentieth century, the gene was regarded as destiny. The DNA sequence inherited from our parents, it was thought, was a fixed blueprint that determined our traits, and the environment could do nothing to alter the instructions written in it. The emerging field of epigenetics has complicated this tidy picture.</p>
<p><b>B</b> Epigenetics studies changes in how genes are used — switched on or off — without any change to the underlying DNA sequence itself. Chemical tags attached to the DNA, or to the proteins around which it is wound, can silence a gene or activate it. Every cell in your body carries the same DNA, yet a liver cell and a brain cell differ precisely because different genes are switched on in each.</p>
<p><b>C</b> What has caused excitement, and controversy, is evidence that these switches can respond to the environment. Diet, stress and exposure to toxins appear able to alter the pattern of tags, changing which genes are active. In this way experience may leave a lasting mark on the body, without touching the genetic code itself.</p>
<p><b>D</b> More startling still is the suggestion that some of these marks may be passed to offspring. Studies of populations that suffered famine have hinted that the effects of starvation in one generation can show up in the health of the next, and even the generation after that. If confirmed, this would mean that, to a limited degree, the experiences of parents could be biologically inherited.</p>
<p><b>E</b> Such claims must be treated with care. Much of the evidence for inherited epigenetic effects comes from animals or from small human studies that are hard to interpret, and the mechanisms remain poorly understood. Enthusiasts have sometimes drawn sweeping conclusions that the data cannot yet support.</p>
<p><b>F</b> Nevertheless, epigenetics has already reshaped biology. It has shown that the old opposition between "nature" and "nurture" is far too simple: the two are entwined, with the environment reaching in to influence the very expression of our genes. Heredity, it turns out, is more flexible, and more interesting, than we once believed.</p>`,
   Q:[
    {head:H.head(1,6,"i&nbsp; Switching genes on and off<br>ii&nbsp; The gene once seen as destiny<br>iii&nbsp; A response to the environment<br>iv&nbsp; Inheritance across generations<br>v&nbsp; Reasons for caution<br>vi&nbsp; Rethinking nature and nurture<br>vii&nbsp; The discovery of the DNA molecule<br>viii&nbsp; Treating inherited disease"),
     t:'txt', q:"Paragraph A", a:"ii"},
    {t:'txt', q:"Paragraph B", a:"i"},
    {t:'txt', q:"Paragraph C", a:"iii"},
    {t:'txt', q:"Paragraph D", a:"iv"},
    {t:'txt', q:"Paragraph E", a:"v"},
    {t:'txt', q:"Paragraph F", a:"vi"},
    {head:H.tf(7,10), t:'tf', q:"Epigenetic changes alter the underlying DNA sequence.", a:"false"},
    {t:'tf', q:"Liver cells and brain cells contain different DNA.", a:"false"},
    {t:'tf', q:"Some studies suggest the effects of famine can appear in later generations.", a:"true"},
    {t:'tf', q:"The mechanisms of inherited epigenetic effects are now fully understood.", a:"false"},
    {head:`<b>Questions 11–13</b> · Complete the summary. Choose <b>ONE word</b> from the box.<div class="bank">tags &middot; sequence &middot; famine &middot; environment &middot; blueprint &middot; offspring &middot; proteins</div>`,
     t:'txt', q:"Epigenetics studies how genes are switched on or off without changing the DNA ______.", a:"sequence"},
    {t:'txt', q:"Chemical ______ attached to DNA control this switching.", a:"tags"},
    {t:'txt', q:"The pattern can respond to the ______, such as diet and stress.", a:"environment"}]},
  {title:"The Wisdom of Crowds",
   text:`<p><b>A</b> In 1906 the scientist Francis Galton attended a country fair where visitors competed to guess the weight of an ox. Expecting to prove the foolishness of the crowd, he collected the hundreds of guesses and calculated their average. To his surprise, the crowd's average guess was almost exactly the ox's true weight, and closer than any single expert's estimate. Galton had stumbled upon what is now called the wisdom of crowds.</p>
<p><b>B</b> The principle is that, under the right conditions, the combined judgement of many ordinary people can be more accurate than that of any individual, however expert. Each person's guess carries some information and some error; when the guesses are averaged, the errors, being random, tend to cancel out, while the information adds up.</p>
<p><b>C</b> The effect is not magic, and it does not always work. It depends, researchers have found, on certain conditions. The members of the crowd must be diverse, bringing different information and viewpoints; they must judge independently, without simply copying one another; and there must be a way to combine their judgements fairly.</p>
<p><b>D</b> When these conditions fail, crowds can be foolish indeed. If people influence one another too much, independent errors are replaced by shared bias, and the crowd stampedes in the wrong direction — as in the financial bubbles where investors, watching each other, drive prices to absurd heights. The same crowd that is wise when independent becomes a mob when it merely imitates.</p>
<p><b>E</b> The idea has found many modern uses. "Prediction markets", in which people bet on future events, often forecast elections and product sales more accurately than polls or panels of experts. Businesses and governments increasingly gather dispersed judgements to make decisions, harnessing the knowledge scattered among many heads.</p>
<p><b>F</b> The lesson is a subtle one. Crowds are neither reliably wise nor reliably foolish; it depends entirely on how they are organised. Diversity and independence, it turns out, are not obstacles to good collective judgement but the very conditions that make it possible.</p>`,
   Q:[
    {head:H.mc(14,17), t:'mc', q:"Galton expected the crowd's guesses to be:", o:["accurate","foolish","identical","expert"], a:"B"},
    {t:'mc', q:"The crowd's average guess turned out to be:", o:["far too high","far too low","almost exactly right","impossible to calculate"], a:"C"},
    {t:'mc', q:"Averaging many guesses works because random errors:", o:["add up","tend to cancel out","disappear entirely","are ignored"], a:"B"},
    {t:'mc', q:"Crowds become unreliable when members:", o:["judge independently","are diverse","influence one another too much","stay silent"], a:"C"},
    {head:H.info(18,21), t:'txt', q:"an example from a country fair", a:"A"},
    {t:'txt', q:"the conditions that a wise crowd requires", a:"C"},
    {t:'txt', q:"an example of crowds behaving foolishly", a:"D"},
    {t:'txt', q:"a modern use of crowds in forecasting", a:"E"},
    {head:H.comp(22,26), t:'txt', q:"Galton averaged the crowd's guesses of an ox's ______.", a:"weight"},
    {t:'txt', q:"When guesses are averaged, random ______ tend to cancel out.", a:"errors"},
    {t:'txt', q:"A wise crowd must be ______, bringing different viewpoints.", a:"diverse"},
    {t:'txt', q:"Members must judge ______, without copying others.", a:"independently"},
    {t:'txt', q:"'Prediction ______' let people bet on future events.", a:"markets"}]},
  {title:"Convergent Evolution",
   text:`<p><b>A</b> Why do a shark, a dolphin and an extinct marine reptile all share the same sleek, torpedo-shaped body? They are only distantly related — one a fish, one a mammal, one a reptile — and each evolved from very different ancestors. Yet all three arrived, independently, at almost the same design. This phenomenon, in which unrelated organisms evolve similar features, is called convergent evolution.</p>
<p><b>B</b> The explanation is that similar problems tend to have similar solutions. Anything that moves fast through water faces the same physical challenge of drag, and a streamlined shape is simply the best answer. Evolution, working separately on each lineage, was pushed towards the same form by the same unyielding laws of physics.</p>
<p><b>C</b> Examples abound. The eye, one of nature's most complex organs, has evolved independently dozens of times. Wings for powered flight arose separately in insects, in the extinct pterosaurs, in birds and in bats. Even echolocation — navigating by sound — evolved twice over, in bats and in dolphins, using strikingly similar genetic changes.</p>
<p><b>D</b> Convergence carries a deeper message about the nature of evolution. It is sometimes imagined as pure chance, a series of random accidents that could have turned out entirely differently. Convergence suggests otherwise: that there are only so many good ways to solve a given problem, and that evolution will find them again and again.</p>
<p><b>E</b> This has fuelled a fascinating debate. If evolution repeatedly arrives at the same solutions, then life on other planets, should it exist, might not be as alien as science fiction imagines. Creatures shaped by the same physics — needing to see, to move, to capture energy — might converge on forms not wholly unlike those on Earth.</p>
<p><b>F</b> Convergence must not be overstated, however. For every case of striking similarity there are countless unique forms that arose only once, and much of life's diversity is genuinely unrepeatable. Evolution is neither wholly random nor wholly predictable, but a subtle interplay of chance and constraint — of history and of physical law.</p>`,
   Q:[
    {head:H.yn(27,31), t:'yn', q:"The shark, dolphin and marine reptile are closely related.", a:"no"},
    {t:'yn', q:"A streamlined shape is an efficient solution for moving through water.", a:"yes"},
    {t:'yn', q:"The eye has evolved only once in the history of life.", a:"no"},
    {t:'yn', q:"Convergence suggests evolution is purely a matter of chance.", a:"no"},
    {t:'yn', q:"The writer thinks convergence can explain all of life's diversity.", a:"no"},
    {head:`<b>Questions 32–36</b> · Complete each sentence with the correct ending, A–F.<div class="bank">A&nbsp; the same laws of physics.<br>B&nbsp; evolved independently many times.<br>C&nbsp; may not be wholly alien.<br>D&nbsp; arose only once and are unrepeatable.<br>E&nbsp; reside in one powerful brain.<br>F&nbsp; are always larger than their ancestors.</div>`,
     t:'txt', q:"Streamlined bodies were shaped by ______", a:"A"},
    {t:'txt', q:"The complex eye has ______", a:"B"},
    {t:'txt', q:"Life on other planets ______", a:"C"},
    {t:'txt', q:"Much of life's diversity consists of forms that ______", a:"D"},
    {t:'txt', q:"Similar problems, the passage says, tend to have similar ______.", a:"solutions"},
    {head:H.sa(37,40), t:'txt', q:"What is the term for unrelated organisms evolving similar features?", a:"convergent evolution"},
    {t:'txt', q:"What physical challenge does anything moving fast through water face?", a:"drag"},
    {t:'txt', q:"Besides bats, which animal evolved echolocation?", a:"dolphins"},
    {t:'txt', q:"Evolution is described as an interplay of chance and ______.", a:"constraint"}]}
]}
];
