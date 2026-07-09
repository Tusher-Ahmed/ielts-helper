/* ================= IELTS FULL MOCK DATA (3 tests) =================
   Each mock: Listening (4 sections x10 = 40), Reading (3 passages = 40), Writing (Task1 + Task2)
   Question item: {t:'text'|'choice', a:'answer|alt', q:'text', opts:[...] (choice only)}
   Numbering is added automatically by the engine. */
const MOCKS=[

/* ===================== MOCK 1 ===================== */
{
 name:'Mock 1',
 blurb:'Sports · Museum · Sleep + Farming · Coffee · Printing',
 listen:[
  {title:'Community Sports Centre (enquiry)',
   transcript:"Hello everyone, and welcome to the Greenfield Community Sports Centre. My name is Sarah. The centre is open from six in the morning until nine at night on weekdays — sorry, until ten — and from eight until eight at weekends. Our most popular facility is the swimming pool, which has six lanes... actually eight, and it is heated all year round. Membership costs fifty pounds a month for adults — no, forty; fifty is the family rate — while students pay only twenty-five. The gym is on the first floor, next to the cafe, not the reception. Please bring a towel and a padlock for the lockers. For group classes such as yoga, you need to book at least two days in advance, not one. Computers for members are in the lounge, and parking is free for members, but visitors must pay three pounds per hour.",
   Q:[
    {t:'text',a:'10pm|10 pm|ten|10',q:'Weekday closing time: ______'},
    {t:'text',a:'eight|8',q:'Swimming pool lanes: ______'},
    {t:'text',a:'40|forty',q:'Adult membership per month: £______'},
    {t:'text',a:'25|twenty-five|twenty five',q:'Student membership per month: £______'},
    {t:'text',a:'cafe|café',q:'The gym is next to the ______.'},
    {t:'text',a:'towel',q:'Members must bring a ______ and a padlock.'},
    {t:'text',a:'two|2',q:'Group classes: book ______ days in advance.'},
    {t:'text',a:'lounge',q:'Computers are available in the ______.'},
    {t:'choice',a:'B',q:'Visitors must pay for parking:',opts:['A) it is free','B) £3 per hour','C) £40 a month','D) only weekends']},
    {t:'choice',a:'A',q:'The swimming pool is:',opts:['A) heated all year','B) closed in winter','C) outdoors','D) staff only']}
   ]},
  {title:'City Science Museum (tour information)',
   transcript:"Welcome to the City Science Museum. The museum has two floors — sorry, three. On the ground floor you will find the interactive exhibits, which are especially popular with children. The first floor is dedicated to space, including a model of the International Space Station. The top floor houses our newest gallery, on climate change, which opened last month, not last year. Guided tours leave from the main desk every hour and last about thirty minutes... actually forty. If you would like an audio guide, they are available in five languages — let me correct that, six — for a small fee of two pounds. The cafe is next to the gift shop, and it closes at four o'clock; sorry, half past four. Finally, please remember that photography is allowed, but the flash must be turned off.",
   Q:[
    {t:'text',a:'three|3',q:'Number of floors: ______'},
    {t:'text',a:'exhibits|exhibit',q:'The ground floor has interactive ______.'},
    {t:'text',a:'space',q:'The first floor is dedicated to ______.'},
    {t:'text',a:'climate',q:'The newest gallery is about ______ change.'},
    {t:'text',a:'hour',q:'Guided tours leave every ______.'},
    {t:'text',a:'forty|40',q:'Tours last about ______ minutes.'},
    {t:'text',a:'two|2',q:'Audio guides cost £______.'},
    {t:'text',a:'six|6',q:'Audio guides are available in ______ languages.'},
    {t:'text',a:'4:30|4.30|half past four|four thirty',q:'The cafe closes at ______.'},
    {t:'choice',a:'B',q:'Photography is:',opts:['A) not allowed','B) allowed without flash','C) allowed with flash','D) only on the top floor']}
   ]},
  {title:'Two students planning a presentation',
   transcript:"So, Maya, have you decided what our geography presentation will focus on? Yes, I think we should look at renewable energy — solar power, maybe... no, wind power in particular. Good idea, but shouldn't we include solar as well? We could, but I think wind is more relevant to our region, so let's keep the focus narrow. Fair enough. How long does it need to be? The tutor said ten minutes — sorry, fifteen — plus five minutes for questions. Okay, and who is making the slides? I'll do the slides if you handle the research. Deal. When is the deadline? We present on the second of March... let me check, the twelfth. So we should meet next week to practise — Monday? No, Tuesday afternoon, in the library.",
   Q:[
    {t:'text',a:'wind',q:'The presentation will focus on ______ power.'},
    {t:'text',a:'solar',q:'They decide not to cover ______ in detail.'},
    {t:'text',a:'fifteen|15',q:'The presentation must last ______ minutes.'},
    {t:'text',a:'five|5',q:'There are ______ minutes for questions.'},
    {t:'text',a:'slides',q:'Maya will make the ______.'},
    {t:'text',a:'research',q:'The other student will handle the ______.'},
    {t:'text',a:'twelfth|12th|12',q:'They present on the ______ of March.'},
    {t:'text',a:'tuesday',q:'They will practise next ______.'},
    {t:'text',a:'library',q:'They will meet in the ______.'},
    {t:'choice',a:'B',q:'Maya wants to keep the focus:',opts:['A) broad','B) narrow','C) on solar','D) on costs']}
   ]},
  {title:'Lecture: The science of sleep',
   transcript:"Today's lecture is about the science of sleep. For years, sleep was seen as a passive state, but we now know it is highly active. During deep sleep, the body repairs tissues and strengthens the immune system. Later in the night we enter what is called REM sleep, when most dreaming occurs and memories are consolidated — not forgotten, consolidated. Research shows that adults need between six and nine hours a night — sorry, seven to nine — for optimal function. A lack of sleep has been linked to weight gain, poor concentration, and a higher risk of heart disease. Interestingly, staying awake for twenty-four hours can impair performance as much as alcohol. To improve sleep, experts recommend avoiding screens before bed and keeping the bedroom cool and dark.",
   Q:[
    {t:'text',a:'passive',q:'Sleep was once seen as a ______ state.'},
    {t:'text',a:'tissues|tissue',q:'During deep sleep the body repairs ______.'},
    {t:'text',a:'memories|memory',q:'REM sleep consolidates ______.'},
    {t:'text',a:'nine|9',q:'Adults need seven to ______ hours.'},
    {t:'text',a:'weight',q:'Lack of sleep is linked to ______ gain.'},
    {t:'text',a:'alcohol',q:'Being awake 24 hours is compared to ______.'},
    {t:'text',a:'screens|screen',q:'Avoid ______ before bed.'},
    {t:'text',a:'dark',q:'Keep the bedroom cool and ______.'},
    {t:'choice',a:'B',q:'REM sleep is when:',opts:['A) tissues repair','B) most dreaming occurs','C) immunity builds','D) we wake up']},
    {t:'choice',a:'B',q:'Optimal sleep for adults is:',opts:['A) 5–6 hours','B) 7–9 hours','C) 9–10 hours','D) any amount']}
   ]}
 ],
 read:[
  {title:'The Threat of Antibiotic Resistance',
   paras:[
    "List of Headings —  i) A warning from the discoverer   ii) How resistance spreads   iii) The scale of the threat   iv) Everyday habits that make it worse   v) The search for new weapons   vi) How antibiotics work   vii) The high cost of new drugs   viii) Antibiotics in history",
    "A   Before the twentieth century, a simple cut or a routine infection could kill. Diseases that we now regard as minor were among the leading causes of death, and a scratch from a thorn or a wound received in childbirth could turn fatal within days. That changed with the discovery of antibiotics — drugs that kill bacteria or stop them multiplying. Penicillin, found by Alexander Fleming in 1928, was the first. Fleming noticed that a mould which had accidentally contaminated one of his laboratory dishes was killing the bacteria around it, although it was more than a decade before the substance could be purified and produced in useful quantities. Mass-produced during the Second World War, penicillin saved countless soldiers who would otherwise have died of infected wounds. The medicines that followed transformed medicine, making once-deadly diseases easily curable and allowing complex surgery, cancer treatment and organ transplants that would otherwise have been far too dangerous to attempt.",
    "B   Antibiotics work by attacking structures or processes that bacterial cells possess but human cells do not, such as the bacterial cell wall. Some antibiotics burst this wall so that the cell swells and collapses; others jam the machinery a bacterium uses to build proteins or to copy its genetic material. Because human cells are constructed quite differently and have no such wall, the drugs can harm bacteria while leaving our own cells largely unharmed. Some, known as 'broad-spectrum' antibiotics, act against a wide range of bacteria at once, while 'narrow-spectrum' ones are designed to strike only a few particular types. Crucially, however, antibiotics have no effect at all on viruses, which are far simpler than bacteria and reproduce in a completely different way, hijacking our own cells to copy themselves. This is why they are useless against illnesses such as the common cold or influenza, and why taking them for such infections does no good whatever.",
    "C   The trouble is that bacteria evolve. In any large population, a few individuals will, by chance, carry genes that allow them to survive a drug — perhaps a tiny change that alters the very target the antibiotic attacks, or a molecular pump that ejects the drug before it can do harm. When antibiotics kill the vulnerable bacteria, these resistant survivors are left with far less competition and are free to multiply, passing on their resistance to all their descendants. Because bacteria reproduce extremely quickly, sometimes dividing every twenty minutes, a resistant strain can come to dominate a population within days. Worse still, bacteria do not rely on inheritance alone: they can swap resistance genes directly with one another, even handing them to unrelated neighbours. In this way resistance can spread not only through a single species but even between different species, turning a previously harmless microbe into a carrier of dangerous resistance genes.",
    "D   Human behaviour has dramatically accelerated this natural process. Patients who stop taking a course of antibiotics as soon as they feel better, rather than finishing it, leave the hardiest bacteria alive to recover and spread. Others demand antibiotics from their doctors for ordinary coughs and colds, and doctors who prescribe the drugs for such viral infections, against which they cannot possibly work, expose bacteria to the medicine needlessly. In many countries antibiotics can be bought over the counter with no prescription at all, and are swallowed carelessly for every minor complaint. Perhaps most damaging of all is their use in farming, where antibiotics are often given not to sick animals but to perfectly healthy ones, to make them grow faster and to prevent disease in crowded conditions. This creates vast reservoirs of resistant bacteria, which can then pass from animals to people through food, water and the wider environment.",
    "E   The consequences are alarming. So-called 'superbugs', resistant to many drugs at once, now cause hundreds of thousands of deaths each year, and the figure is rising steadily. One notorious example, a resistant strain often picked up in hospitals, can turn a minor wound into a life-threatening infection that only a handful of remaining drugs can treat. Some experts warn that, if current trends continue, drug-resistant infections could kill millions of people a year by the middle of this century and cost the world economy trillions of dollars. Health authorities warn that, without action, we may enter a 'post-antibiotic era' in which common infections once again become untreatable. In such a world, much of modern medicine would become dangerous: routine operations, childbirth, chemotherapy and organ transplants all depend on being able to control infection, and all of them would once more turn deadly.",
    "F   The search for a solution is under way, but it is far from easy. Finding new antibiotics is difficult and expensive, and few companies invest heavily in drugs that will be used sparingly and, sooner or later, lose their power to resistance. As a result, very few genuinely new antibiotics have reached patients in recent decades. Researchers are therefore exploring fresh weapons and alternatives: viruses that prey on bacteria and destroy them from within, vaccines that prevent infection in the first place, and rapid tests that can tell a doctor within minutes whether an illness is bacterial at all and therefore worth treating. Others are searching soil and the deep ocean for undiscovered organisms that produce new bacteria-killing chemicals. Above all, they stress, the antibiotics we still have must be protected — used only when truly necessary, in the correct dose and for the full course — so that these precious drugs keep working for as long as possible."
   ],
   Q:[
    {t:'text',a:'viii|8',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'FALSE',q:'Antibiotics can be used to treat the common cold.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Bacteria can pass resistance genes to different species.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Stopping a course of antibiotics early kills the most resistant bacteria.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Most pharmaceutical companies are eager to develop new antibiotics.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'Fleming',q:'Penicillin was discovered by Alexander ______.'},
    {t:'text',a:'wall',q:'Antibiotics attack the bacterial cell ______.'},
    {t:'text',a:'superbugs|superbug',q:'Bacteria resistant to many drugs are called ______.'}
   ]},
  {title:'The Urban Heat Island',
   paras:[
    "A   Anyone who has walked from a leafy park into a busy city centre on a summer's day has felt it: cities are noticeably hotter than the countryside around them. This phenomenon, in which an urban area is significantly warmer than its rural surroundings, is known as the urban heat island. The difference can be dramatic — a large city may be several degrees warmer than nearby fields, and on a still, clear night the gap can widen to as much as ten degrees. Curiously, the effect is greatest not in the heat of the afternoon but at night: while open countryside cools quickly once the sun has set, the city stays stubbornly warm for hour after hour. Scientists first described the phenomenon almost two centuries ago in London, but as cities have grown ever larger and more densely built, it has become far more pronounced, and far more important to the people who live with it.",
    "B   Several factors combine to create the effect. The materials of the city — concrete, brick and especially dark asphalt — absorb a great deal of heat from the sun during the day and then release it only slowly after dark, keeping temperatures high long into the night. Dark surfaces are particularly troublesome because they reflect very little sunlight and instead soak up almost all of it as heat. The tall, closely packed buildings make matters worse: they trap this heat between them like the walls of an oven and block the cooling breezes that would otherwise carry it away. Their many hard surfaces also bounce sunlight down into the streets rather than letting it escape to the sky. Meanwhile the near-total absence of vegetation removes nature's own air-conditioning, leaving nothing to soften or absorb the heat.",
    "C   That natural cooling is easily overlooked. In the countryside, plants draw water up from the soil and release it as vapour from their leaves, in a process called evapotranspiration. As this water evaporates it carries heat away with it and cools the surrounding air, much as sweating cools the human body. A city of hard, dry, sealed surfaces, where rain runs straight off roofs and roads into drains rather than soaking into soil and plants, enjoys almost none of this relief. To make matters worse, the city constantly generates heat of its own: cars, buses, factories, and the very air-conditioning units that people switch on to keep cool all pump additional 'waste heat' out into the streets, adding still more warmth to that already trapped by the buildings.",
    "D   The consequences are more serious than mere discomfort. During heatwaves, the urban heat island can turn city nights into a genuine health emergency, since the human body relies on cooler night-time temperatures to rest and recover from the heat of the day. When the nights stay hot, that recovery never comes, and the elderly, the very young and those already ill are especially at risk; severe heatwaves in crowded cities have claimed many thousands of lives. The extra heat also drives up demand for air conditioning, which consumes large amounts of electricity — often generated by burning fossil fuels — and, in a vicious circle, expels yet more heat into the streets outside, making the surrounding city hotter still and pushing demand higher again.",
    "E   Fortunately, the effect can be reduced, and cities around the world are beginning to act. Planting trees and creating parks restores natural cooling through evapotranspiration and casts welcome shade over streets and buildings, so that a well-planted avenue can feel far cooler than a bare one nearby. Painting roofs white, or covering them with growing plants to create so-called 'green roofs', reflects or absorbs sunlight rather than letting bare dark surfaces bake in the sun; a white roof can be many degrees cooler than a black one on the same afternoon. Even the choice of paving materials can help, since lighter, more reflective surfaces stay noticeably cooler than dark ones. None of these measures is especially expensive or difficult, and together they can make a real difference to the temperature of a whole neighbourhood.",
    "F   Such measures matter more than ever. As the world's population becomes increasingly urban, with ever more people crowding into ever larger cities, and as the global climate steadily warms, the two trends threaten to reinforce one another and drive city temperatures to dangerous levels. A hotter climate makes the heat island more deadly, while sprawling, energy-hungry cities add in turn to the warming of the planet. Designing cities that stay cool — with green spaces, reflective surfaces and buildings that are planned to let heat escape — is therefore no longer a luxury but, many argue, an urgent necessity for the comfort, health and safety of the billions of people who will spend their lives in them."
   ],
   Q:[
    {t:'choice',a:'B',q:'The urban heat island effect is strongest:',opts:['A) at noon','B) at night','C) in winter','D) in the countryside']},
    {t:'choice',a:'B',q:'Dark asphalt worsens the effect because it:',opts:['A) reflects sunlight','B) absorbs heat and releases it slowly','C) cools very quickly','D) holds water']},
    {t:'choice',a:'B',q:'Evapotranspiration is compared in the passage to:',opts:['A) air conditioning','B) sweating','C) burning fuel','D) central heating']},
    {t:'choice',a:'C',q:'According to the passage, air conditioning:',opts:['A) solves the problem','B) has no real effect','C) worsens the effect by expelling heat','D) cools entire cities']},
    {t:'text',a:'E',q:'Which paragraph (A–F) gives examples of ways to cool cities?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the health dangers of hot city nights?'},
    {t:'text',a:'A',q:'Which paragraph (A–F) defines the urban heat island?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) explains how plant water vapour cools the air?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains how city materials and layout trap heat?'},
    {t:'text',a:'countryside',q:'Cities are hotter than the surrounding ______.'},
    {t:'text',a:'evapotranspiration',q:'Plants cool the air through a process called ______.'},
    {t:'text',a:'white',q:'Roofs can be painted ______ to reflect sunlight.'},
    {t:'text',a:'green',q:'Roofs covered with plants are called ______ roofs.'}
   ]},
  {title:'Mirror Neurons',
   paras:[
    "A   In the early 1990s, a team of Italian scientists studying the brains of macaque monkeys made an accidental discovery that would cause a sensation. They had placed tiny electrodes in the region of the brain that controls movement, and found, exactly as expected, that certain cells fired each time a monkey reached out for a peanut. Then something strange happened. According to a well-known account, one of the researchers happened to reach for a peanut himself while the electrodes were still recording — and to the scientists' astonishment, the very same cells in the watching monkey's brain fired, just as though the monkey had reached out itself. The cells responded not only to doing but also to seeing. The brain, it seemed, did not sharply distinguish between performing an action and merely observing someone else perform it.",
    "B   These cells were named 'mirror neurons', because they appear to mirror the actions of others inside the observer's own brain, as though the watcher were quietly rehearsing the very movement he sees. The finding was striking because it seemed to reveal a physical mechanism for something deeply human, yet usually taken completely for granted: our ability to grasp what other people are doing, and perhaps even why they are doing it, almost instantly and without any conscious effort. When we watch someone pick up a cup, or wince in pain, we seem to understand at once, as if we had briefly stepped inside their experience. Here, it appeared, was the very brain machinery that might make such immediate understanding of others possible.",
    "C   Some scientists made bold claims for the discovery. Mirror neurons, they proposed, might be the biological basis of empathy — our capacity to feel what others feel — and even the foundation of language and culture. If we understand others by inwardly copying them, they reasoned, then the same mechanism might explain how children learn by imitation, how we read one another's intentions, and how ideas and skills pass from mind to mind. A few researchers went so far as to call mirror neurons 'the neurons that shaped civilisation', arguing that the ability to imitate and understand others underlies almost everything that makes us human, from the making of tools to the telling of stories.",
    "D   Not everyone was convinced. Critics pointed out that most of the direct evidence came from monkeys, since recording from single cells in healthy humans is rarely possible — it requires opening the skull, which is done only for pressing medical reasons. Whether human beings possess a genuine mirror-neuron system of the very same kind as the monkeys, and whether such a system really explains something as rich and complicated as empathy, remained, they argued, entirely unproven. The grandest claims, they warned, had raced far ahead of the cautious evidence, and popular writers had eagerly seized on mirror neurons to account for everything from autism to human kindness on the flimsiest of grounds.",
    "E   Research has since become more measured. Most neuroscientists now accept that humans probably do have mirror-like activity in the brain, revealed by scanning studies in which similar regions light up whether a person performs an action or merely watches someone else perform it. But they see this as just one contributor to social understanding rather than its single cause. Empathy, they emphasise, is a complex phenomenon that draws on many different brain systems, on memory, on reasoning and on a lifetime of learning, and cannot sensibly be reduced to the firing of one special type of cell. The truth, as so often in science, turned out to be more complicated, and rather less tidy, than the first excited headlines had suggested.",
    "F   Even in this more sober light, the discovery remains important. It helped shift the attention of scientists towards the deeply social nature of the human brain — the idea that our minds are built, from the very start, to connect with other minds rather than to work in isolation. For much of its history, brain science had studied the individual brain almost as though it were alone in the world; mirror neurons were part of what pushed researchers to take seriously the question of how one brain responds to another. Whatever mirror neurons ultimately turn out to be, they reminded science of a simple truth: that understanding people can never be wholly separated from understanding how we understand each other."
   ],
   Q:[
    {t:'choice',a:'YES',q:'The discovery of mirror neurons was accidental.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'The cells fired only when the monkey moved, not when it watched.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some scientists linked mirror neurons to empathy and language.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Direct evidence for mirror neurons in humans is easy to obtain.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most neuroscientists now believe mirror neurons alone explain empathy.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'The discovery drew attention to the social nature of the brain.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains how the cells got their name?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the most ambitious claims about the cells?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) reports the criticism that evidence came mainly from monkeys?'},
    {t:'text',a:'A',q:'Which paragraph (A–F) describes the accidental observation with the peanut?'},
    {t:'text',a:'macaque monkeys|monkeys|macaques',q:'Which animal was being studied when mirror neurons were found?'},
    {t:'text',a:'empathy',q:'What human capacity did some scientists link to mirror neurons?'},
    {t:'text',a:'social',q:'Mirror neurons highlighted that the human brain is deeply ______.'},
    {t:'text',a:'imitate',q:'The ability to understand and ______ others was said to underlie what makes us human.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 330' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>International students enrolled (in thousands), 2010–2020</text><line x1='60' y1='30' x2='60' y2='250' stroke='#333'/><line x1='60' y1='250' x2='510' y2='250' stroke='#333'/><g font-size='10' fill='#555'><line x1='60' y1='250' x2='500' y2='250' stroke='#eee'/><text x='52' y='253' text-anchor='end'>0</text><line x1='60' y1='206' x2='500' y2='206' stroke='#eee'/><text x='52' y='209' text-anchor='end'>1</text><line x1='60' y1='162' x2='500' y2='162' stroke='#eee'/><text x='52' y='165' text-anchor='end'>2</text><line x1='60' y1='118' x2='500' y2='118' stroke='#eee'/><text x='52' y='121' text-anchor='end'>3</text><line x1='60' y1='74' x2='500' y2='74' stroke='#eee'/><text x='52' y='77' text-anchor='end'>4</text><line x1='60' y1='30' x2='500' y2='30' stroke='#eee'/><text x='52' y='33' text-anchor='end'>5</text><text x='60' y='265' text-anchor='middle'>2010</text><text x='148' y='265' text-anchor='middle'>2012</text><text x='236' y='265' text-anchor='middle'>2014</text><text x='324' y='265' text-anchor='middle'>2016</text><text x='412' y='265' text-anchor='middle'>2018</text><text x='500' y='265' text-anchor='middle'>2020</text></g><polyline fill='none' stroke='#1a73e8' stroke-width='2.5' points='60,206 148,171 236,144 324,114 412,83 500,48'/><polyline fill='none' stroke='#1a9c5a' stroke-width='2.5' points='60,215 148,202 236,184 324,166 412,153 500,136'/><polyline fill='none' stroke='#e0a800' stroke-width='2.5' points='60,237 148,228 236,219 324,206 412,188 500,166'/><g font-size='11'><rect x='120' y='288' width='16' height='4' fill='#1a73e8'/><text x='142' y='293'>Asia</text><rect x='200' y='288' width='16' height='4' fill='#1a9c5a'/><text x='222' y='293'>Europe</text><rect x='290' y='288' width='16' height='4' fill='#e0a800'/><text x='312' y='293'>Africa</text></g></svg>",
  task1:"The line graph below shows the number of international students enrolled at a university between 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that technology has made our lives more complicated, while others think it has made life easier. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 2 ===================== */
{
 name:'Mock 2',
 blurb:'Library · Marathon · Ocean + Bilingualism · Bees · Remote work',
 listen:[
  {title:'University Library Induction',
   transcript:"Good morning, and welcome to the university library. I'm David, the head librarian. The library is open from eight in the morning until ten at night on weekdays — sorry, until eleven; we extended it last term. On Saturdays we close earlier, at five o'clock... no, at six. Undergraduate students can borrow up to eight books at a time — let me correct that, ten for undergraduates — while postgraduates can take out fifteen. Books are loaned for two weeks; sorry, three weeks is the standard. If you return a book late, there is a fine of twenty pence per day. The ground floor is a social study area where talking is allowed, but the first and second floors are strictly silent zones. Computers are available on the first floor, right next to the printing room. If you need help, the help desk is by the main entrance, not upstairs.",
   Q:[
    {t:'text',a:'11pm|11 pm|eleven|11',q:'Weekday closing time: ______'},
    {t:'text',a:'6pm|6 pm|six|6',q:'Saturday closing time: ______'},
    {t:'text',a:'ten|10',q:'Undergraduates can borrow up to ______ books.'},
    {t:'text',a:'fifteen|15',q:'Postgraduates can borrow up to ______ books.'},
    {t:'text',a:'three|3',q:'Books are loaned for ______ weeks.'},
    {t:'text',a:'20|twenty',q:'Late return fine: ______ pence per day.'},
    {t:'text',a:'second',q:'Silent zones are the first and ______ floors.'},
    {t:'text',a:'printing',q:'Computers are next to the ______ room.'},
    {t:'text',a:'entrance|main entrance',q:'The help desk is near the main ______.'},
    {t:'choice',a:'B',q:'Talking is allowed on:',opts:['A) the first floor','B) the ground floor','C) the second floor','D) nowhere']}
   ]},
  {title:'City Marathon — volunteer briefing',
   transcript:"Thank you all for signing up to volunteer at this year's city marathon. Volunteers should arrive by seven o'clock in the morning — not eight; eight is when the race itself begins. You will be given a bright orange T-shirt... sorry, a yellow one, which you must wear so runners can identify you. Most of you will be working at the water stations, handing out bottles — a few people will be at the finish line, but the majority at the water points. It is important to stand behind the table and never step onto the course. Lunch will be provided free of charge, and there is a rest area near the finish line, not the start. If there is a medical emergency, do not try to help yourself; call the medical team using the number on your badge, not the one on your T-shirt. The event should finish at around two in the afternoon.",
   Q:[
    {t:'text',a:'seven|7am|7',q:'Volunteers should arrive by ______.'},
    {t:'text',a:'eight|8am|8',q:'The race begins at ______.'},
    {t:'text',a:'t-shirt|tshirt|t shirt|shirt',q:'Volunteers wear a yellow ______.'},
    {t:'text',a:'water',q:'Most volunteers work at the ______ stations.'},
    {t:'text',a:'table',q:'Volunteers must stand behind the ______.'},
    {t:'text',a:'lunch',q:'______ is provided free of charge.'},
    {t:'text',a:'finish',q:'The rest area is near the ______ line.'},
    {t:'text',a:'medical',q:'For emergencies, call the ______ team.'},
    {t:'text',a:'badge',q:'The emergency number is on your ______.'},
    {t:'choice',a:'B',q:'The event finishes at about:',opts:['A) noon','B) 2 pm','C) 4 pm','D) 7 pm']}
   ]},
  {title:'Tutorial: feedback on an essay',
   transcript:"Come in, Sam. So, you wanted to discuss your essay on migration — sorry, on globalisation? Yes, I got a lower mark than I expected. Well, your ideas are good, but the main problem is structure, not grammar this time. Your introduction doesn't clearly state your position. Should I add a thesis statement? Exactly. And each paragraph should focus on just one main idea, not several. What about my examples? Your examples are strong, but you need to explain them more; don't just list them. And the word count? You were slightly under; aim for at least two hundred and fifty words, not two hundred. Also, try to use more linking words to connect your ideas. When should I resubmit? Let's say by next Thursday... actually, make it Friday.",
   Q:[
    {t:'text',a:'globalisation|globalization',q:'The essay is about ______.'},
    {t:'text',a:'structure',q:'The main problem is ______.'},
    {t:'text',a:'position',q:"The introduction should state the writer's ______."},
    {t:'text',a:'idea',q:'Each paragraph should focus on one main ______.'},
    {t:'text',a:'explained|explain',q:'The examples need to be ______ more.'},
    {t:'text',a:'250|two hundred and fifty',q:'Aim for at least ______ words.'},
    {t:'text',a:'linking',q:'Use more ______ words to connect ideas.'},
    {t:'text',a:'friday',q:'Resubmit by next ______.'},
    {t:'choice',a:'B',q:"Sam's ideas are described as:",opts:['A) weak','B) good','C) irrelevant','D) copied']},
    {t:'choice',a:'B',q:'The tutor says the examples are:',opts:['A) missing','B) strong but under-explained','C) wrong','D) too many']}
   ]},
  {title:'Lecture: plastic in the oceans',
   transcript:"Today we will look at the problem of plastic in our oceans. Every year, millions of tonnes of plastic waste enter the sea, much of it carried not by wind but by rivers from inland cities. Once in the ocean, plastic does not disappear; instead, it slowly breaks into tiny fragments known as microplastics. These fragments are eaten by fish and other marine animals, and can eventually end up in the food we consume. One of the largest accumulations of ocean plastic is found in the Pacific — not the Atlantic, as people sometimes assume — in an area often called the Great Pacific Garbage Patch, which covers a region several times the size of France. Solutions include reducing single-use plastics and improving waste collection. However, experts agree that prevention is far more effective than cleaning up plastic once it has entered the sea.",
   Q:[
    {t:'text',a:'rivers|river',q:'Plastic waste is often carried to the sea by ______.'},
    {t:'text',a:'microplastics|microplastic',q:'Plastic breaks into tiny fragments called ______.'},
    {t:'text',a:'fish',q:'Microplastics are eaten by ______ and other animals.'},
    {t:'text',a:'pacific',q:'The largest accumulation is found in the ______.'},
    {t:'text',a:'patch',q:'It is called the Great Pacific Garbage ______.'},
    {t:'text',a:'france',q:'It covers a region several times the size of ______.'},
    {t:'text',a:'single-use|single use',q:'One solution is reducing ______ plastics.'},
    {t:'text',a:'collection',q:'Another is improving waste ______.'},
    {t:'choice',a:'B',q:'Experts say the most effective approach is:',opts:['A) cleaning up','B) prevention','C) recycling only','D) ignoring it']},
    {t:'choice',a:'B',q:'Microplastics can end up in:',opts:['A) the air only','B) our food','C) fuel','D) nowhere']}
   ]}
 ],
 read:[
  {title:'The Sixth Mass Extinction',
   paras:[
    "List of Headings —  i) A rate far above normal   ii) Five catastrophes of the past   iii) A crisis caused by humans   iv) Why biodiversity matters to us   v) Grounds for hope   vi) A narrow window for action   vii) The death of the dinosaurs   viii) Protecting one species at a time",
    "A   Extinction is a natural part of life on Earth; species have always appeared and, in time, vanished. What alarms scientists today is not extinction itself but the extraordinary speed at which species are now disappearing. By studying the fossil record, biologists can estimate the natural 'background' rate at which species died out before humans became dominant. Measured against that yardstick, the current rate of extinction is reckoned to be tens or even hundreds of times higher than normal, and, more worrying still, it appears to be accelerating rather than levelling off. Some groups of animals — amphibians, for instance — are vanishing especially fast. On this evidence, many biologists argue that we have entered a sixth mass extinction, an episode of biological loss on a scale the planet has witnessed only a handful of times in its long history.",
    "B   The phrase is chosen deliberately. Over the last half-billion years, the fossil record reveals five earlier catastrophes in which a large proportion of all the species then alive were wiped out in a geologically short space of time. Geologists know these as the 'big five' mass extinctions. The most famous of them, around 66 million years ago, brought the long age of the dinosaurs to an abrupt end, probably after a giant asteroid struck the Earth and threw up enough dust to darken the skies across the world for years. Others were caused by immense volcanic eruptions, or by sudden shifts in climate and sea level. What every one of these previous five had in common, however, is that it was caused entirely by natural forces, with no living thing to blame.",
    "C   This time, the cause is entirely different. Unlike all the earlier events, the present crisis is being driven overwhelmingly by a single species: our own. As the human population has soared and our appetite for land and resources has grown, we have transformed much of the planet's surface. Habitat destruction — the clearing of forests, the draining of wetlands and the ploughing of grasslands for farming, roads and cities — is by far the greatest threat, robbing countless species of the places they need in order to live. To this are added the pressures of hunting and over-fishing, the poisoning of land and water by pollution, the spread of invasive species carried around the globe by human trade, and, increasingly, the warming and disruption of the climate. Together, these forces are squeezing wild populations from every side at once.",
    "D   Why should the loss of, say, an obscure beetle or a frog concern us? The answer lies in the interconnectedness of nature. Species do not exist in isolation but depend on one another in complex webs of feeding and cooperation; remove enough threads and the whole fabric can begin to unravel, sometimes in ways that are impossible to predict in advance. Beyond this, the natural world quietly provides humans with a host of 'services' that we take almost entirely for granted — clean water filtered by wetlands and forests, fertile soil created and renewed by countless tiny organisms, the pollination of a great many of our food crops by insects, and protection from floods and storms. All of these depend on healthy, varied ecosystems, and all of them ultimately depend on biodiversity. To lose species on a grand scale is therefore not merely a tragedy for nature but a direct threat to our own wellbeing.",
    "E   The picture is not entirely hopeless. Conservation, where it is properly funded and enforced, can and does work: a number of species brought to the very edge of extinction have made remarkable recoveries once they were given protection. Setting aside large areas of habitat as national parks and reserves, restoring damaged ecosystems such as drained marshes and felled forests, controlling invasive species and curbing the emissions that drive climate change could still, taken together, slow the current losses dramatically. Nature, given half a chance, has an impressive capacity to heal itself. The tools needed to prevent the very worst of the crisis, in other words, already exist; what has too often been lacking is the will, and the money, to use them at the scale the situation demands.",
    "F   What is clear is that the window for action is narrow, and closing. Unlike the helpless victims of the past five extinctions, we occupy a unique position: we can see the crisis unfolding around us, we understand its causes, and we possess the means to change course. That knowledge brings responsibility. The decisions taken in the next few decades — about how much wild land to protect, how quickly to cut emissions, and how to feed a growing population without destroying nature — will, many scientists say, determine the character of the living world not only for our own lifetimes but for millions of years to come. Few generations have ever held such power over the future of life on Earth, and none has understood so clearly what is at stake."
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'FALSE',q:'All five previous mass extinctions were caused by human activity.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Habitat destruction is described as the greatest current threat.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some endangered species have recovered after being protected.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'NOT GIVEN',q:'The current extinction rate is higher in tropical regions than elsewhere.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'extinction',q:'The current crisis is often called the sixth mass ______.'},
    {t:'text',a:'asteroid',q:'The dinosaurs were probably wiped out by an ______.'},
    {t:'text',a:'pollination',q:'Ecosystems provide clean water, fertile soil and crop ______.'}
   ]},
  {title:'The Psychology of Nostalgia',
   paras:[
    "A   Nostalgia — a sentimental longing for the past — was for centuries regarded as an illness. The word was coined in the seventeenth century by a Swiss physician, who joined two Greek words meaning 'return home' and 'pain' to describe the desperate homesickness of soldiers serving far from their native land. For hundreds of years afterwards it was treated as a genuine and even dangerous medical condition, a disease of the mind thought capable of wasting the body and, in extreme cases, of proving fatal. Physicians prescribed everything from leeches to threats of punishment in the hope of curing it. Only recently, and rather surprisingly, has psychology reached a very different conclusion about this most familiar of human feelings.",
    "B   Modern research suggests that nostalgia, far from being harmful, is in most circumstances actually good for us. In a series of experiments, psychologists have asked people to bring to mind a cherished memory — a family celebration, a childhood holiday, an old friendship — and then measured how they felt afterwards. Again and again, those who dwell for a while on such memories report feeling happier, more optimistic about the future, and more closely connected to the people around them. Nostalgia, it seems, is not an idle self-indulgence but a resource that the mind draws upon to comfort and steady itself, a way of reaching back into the past to find reassurance in the present.",
    "C   Curiously, this comforting feeling appears to be triggered most often by negative emotions. Loneliness, boredom and sadness all tend to bring on nostalgic reflection, which then quietly works to counteract them. Someone who feels isolated, for example, is more likely to slip into fond memories of times spent with others — and those memories, in turn, ease the very sense of isolation that summoned them. In this sense nostalgia behaves almost like a psychological immune response: just as the body fights infection when it is threatened, the mind seems to call up warm memories precisely when it most needs them, restoring a sense of meaning and comfort at the very moments when we feel low or adrift.",
    "D   The triggers of nostalgia are not only emotional but physical. Sensory cues are especially powerful: a particular song on the radio, or a smell such as baking bread or the salt air of a childhood coast, can summon a vivid memory in an instant, bringing back with it all the emotions of the original moment. Smell seems to be the most potent trigger of all, perhaps because the parts of the brain that process smells lie close to those that store memory and feeling. Music runs it a close second. This is why the songs of our teenage years often move us so deeply, and are remembered so perfectly, long after we have forgotten more recent tunes that we heard only last week.",
    "E   Above all, nostalgia is social. When researchers examine the memories that people treasure most, they find them to be overwhelmingly about relationships — moments shared with family and friends, rather than solitary personal achievements such as passing an examination or winning a prize. The past we long for is peopled with those we love. By reminding us that we are loved, that we matter to others and that we belong to something larger than ourselves, nostalgia strengthens our bonds with other people and reduces the painful feeling of being alone. It may even prompt us to reach out and renew the very relationships it calls to mind, turning a private memory into a reason to reconnect.",
    "F   There is, of course, a risk. Dwelling too much on an idealised past can make the present seem drab and disappointing by comparison, and can harden into an unhelpful refusal to move on — a nagging sense that the best days are always behind us. A person who lives entirely in memory may neglect the life in front of them. Used in moderation, however, and especially as a source of comfort in difficult times, psychologists now regard nostalgia not as a weakness or a sickness at all, but as a small, subtle and genuinely valuable tool for emotional wellbeing — one that almost everyone, without ever being taught, already knows instinctively how to use."
   ],
   Q:[
    {t:'choice',a:'B',q:'When the word "nostalgia" was first coined, it was seen as:',opts:['A) a virtue','B) a medical illness','C) a memory skill','D) a social bond']},
    {t:'choice',a:'B',q:'Modern research suggests nostalgia usually makes people feel:',opts:['A) worse','B) happier and more connected','C) nothing at all','D) confused']},
    {t:'choice',a:'B',q:'Nostalgia is most often triggered by:',opts:['A) success','B) negative feelings','C) exercise','D) hunger']},
    {t:'choice',a:'C',q:'The memories people treasure are mostly about:',opts:['A) achievements','B) possessions','C) relationships','D) places']},
    {t:'text',a:'A',q:'Which paragraph (A–F) explains the medical origin of the word?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the power of smells and songs to trigger memory?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) mentions a possible danger of too much nostalgia?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) compares nostalgia to an immune response?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) explains how nostalgia strengthens social bonds?'},
    {t:'text',a:'homesickness',q:'Nostalgia was first described as the ______ of soldiers.'},
    {t:'text',a:'immune',q:'Nostalgia acts like a psychological ______ response.'},
    {t:'text',a:'sensory',q:'______ cues such as a song can summon a memory instantly.'},
    {t:'text',a:'present',q:'Too much nostalgia can make the ______ seem disappointing.'}
   ]},
  {title:'Crows: Feathered Problem-Solvers',
   paras:[
    "A   For most of history, to call someone 'bird-brained' was to call them stupid. Birds, with their tiny heads and tiny brains, were assumed to be creatures of pure instinct, incapable of anything resembling real thought. Over the past few decades, however, the crow family — which includes crows, ravens, rooks, magpies and jays, and is known to scientists as the corvids — has forced researchers to abandon that comfortable assumption entirely. These birds, it turns out, are among the most intelligent animals on the entire planet, rivalling and in some tests even outperforming the great apes. The old insult, it seems, was based on nothing more than prejudice against a small skull.",
    "B   The evidence is striking. In carefully designed laboratory experiments, crows have solved complex, multi-step puzzles that would defeat many mammals, working out that they must use one tool to obtain a second tool before they can finally reach a piece of food. They plainly grasp the whole sequence in advance, rather than stumbling upon the answer by chance. In the wild, some crows on the Pacific island of New Caledonia not only use twigs and sticks as tools to winkle grubs out of holes, but actually shape them, trimming and bending them to suit the job in hand. In one celebrated experiment a captive crow bent a straight piece of wire into a hook in order to lift a small bucket of food from the bottom of a tube — a feat of tool manufacture once believed to be unique to humans and a few great apes.",
    "C   Their talents extend well beyond tools, into memory and planning. Crows can remember the individual human faces of people who have once threatened or mistreated them, and will scold and mob those particular individuals years afterwards, while ignoring other people standing nearby — and, remarkably, they seem able to pass the grudge on to other crows that were never harmed at all, so that a whole neighbourhood of birds may come to recognise a single unfriendly face. Some corvids hide thousands of separate food items during times of plenty and recall the locations of these hiding places months later, when food is scarce. There is evidence, too, that they plan for future needs, storing particular foods in anticipation of where and when they will want them, rather than merely reacting to the hunger of the moment.",
    "D   Perhaps most surprisingly of all, crows appear to understand something about the minds of others. A crow that has hidden a piece of food while another bird was watching will often come back later, alone, and quietly move the food to a fresh hiding place — behaviour that strongly suggests it grasps that the onlooker might have seen the cache and could return to steal it. Tellingly, if no other bird was watching when the food was hidden, it does not bother to move it. Such awareness of what another individual can and cannot see was, until recently, believed to lie far beyond the reach of any animal except human beings, and its discovery in a bird has forced scientists to rethink just how special our own mental powers really are.",
    "E   How can so small a brain achieve so much? For a long time scientists assumed that intelligence must depend on sheer brain size, which made the cleverness of crows seem almost impossible. The answer, it now appears, lies not in size but in structure. Although a crow's brain is tiny — no bigger than a walnut — it is exceptionally dense, packed with far more nerve cells, or neurons, than a mammal's brain of the same size, and those neurons are wired together with extraordinary efficiency. Intelligence, it turns out, depends far less on the overall bulk of a brain than on how many neurons it contains and on how tightly and cleverly they are connected to one another.",
    "F   These discoveries carry a wider lesson that reaches far beyond birds. The brains of crows and of humans are built on quite different plans, and their owners last shared a common ancestor hundreds of millions of years ago, yet both have arrived at genuine, flexible intelligence. This shows that advanced intelligence has evolved on Earth more than once, and by a very different route from our own — a striking case of nature finding the same solution twice over. In studying the mind of a crow, therefore, scientists are learning a humbling truth: that human-like cleverness is not a lonely peak reached only by our own kind, and that there is more than one way for nature to build a thinking creature."
   ],
   Q:[
    {t:'choice',a:'YES',q:'Birds were once assumed to be incapable of real thought.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'No animal other than humans and apes can make tools.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Crows can remember the faces of people who threatened them.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'A crow may move hidden food if it was watched hiding it.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:"A crow's intelligence is explained by the large size of its brain.",opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NOT GIVEN',q:'Crows are now known to be more intelligent than all mammals.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives an example of a crow shaping a tool?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) gives evidence that crows understand what others can see?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) explains the role of brain structure?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) states the wider lesson about how intelligence evolves?'},
    {t:'text',a:'New Caledonia',q:'Where do the tool-shaping wild crows live?'},
    {t:'text',a:'dense',q:"A crow's brain is small but exceptionally ______."},
    {t:'text',a:'locations|location',q:'Crows can recall the ______ of hidden food months later.'},
    {t:'text',a:'neurons|neuron',q:'A crow\'s brain is packed with more ______ than a mammal brain of the same size.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 330' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>Transport modes used in a city (%), 2000 vs 2020</text><line x1='60' y1='30' x2='60' y2='250' stroke='#333'/><line x1='60' y1='250' x2='510' y2='250' stroke='#333'/><g font-size='10' fill='#555'><line x1='60' y1='250' x2='500' y2='250' stroke='#eee'/><text x='52' y='253' text-anchor='end'>0</text><line x1='60' y1='206' x2='500' y2='206' stroke='#eee'/><text x='52' y='209' text-anchor='end'>10</text><line x1='60' y1='162' x2='500' y2='162' stroke='#eee'/><text x='52' y='165' text-anchor='end'>20</text><line x1='60' y1='118' x2='500' y2='118' stroke='#eee'/><text x='52' y='121' text-anchor='end'>30</text><line x1='60' y1='74' x2='500' y2='74' stroke='#eee'/><text x='52' y='77' text-anchor='end'>40</text><line x1='60' y1='30' x2='500' y2='30' stroke='#eee'/><text x='52' y='33' text-anchor='end'>50</text></g><g><rect x='85' y='52' width='30' height='198' fill='#1a73e8'/><rect x='119' y='118' width='30' height='132' fill='#e0a800'/><rect x='195' y='140' width='30' height='110' fill='#1a73e8'/><rect x='229' y='162' width='30' height='88' fill='#e0a800'/><rect x='305' y='162' width='30' height='88' fill='#1a73e8'/><rect x='339' y='96' width='30' height='154' fill='#e0a800'/><rect x='415' y='206' width='30' height='44' fill='#1a73e8'/><rect x='449' y='184' width='30' height='66' fill='#e0a800'/></g><g font-size='11' fill='#333' text-anchor='middle'><text x='117' y='265'>Car</text><text x='227' y='265'>Bus</text><text x='337' y='265'>Metro</text><text x='447' y='265'>Bicycle</text></g><g font-size='11'><rect x='180' y='288' width='16' height='10' fill='#1a73e8'/><text x='202' y='297'>2000</text><text x='240' y='297'></text><rect x='300' y='288' width='16' height='10' fill='#e0a800'/><text x='322' y='297'>2020</text></g></svg>",
  task1:"The bar chart below shows the percentage of people who used four different modes of transport in a city in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"More people are now working from home rather than in an office. Do the advantages of this development outweigh the disadvantages? Write at least 250 words."
 }
},

/* ===================== MOCK 3 ===================== */
{
 name:'Mock 3',
 blurb:'Cookery · Reserve · Cities + Octopus · Tea · Energy',
 listen:[
  {title:'Evening Cookery Course (enrolment)',
   transcript:"Thanks for calling Riverside Community College. Let me tell you about our evening cookery course. The course runs for six weeks — sorry, eight — every Tuesday, starting on the thirteenth of September... no, the third. Classes begin at half past six and finish at half past eight; sorry, at nine. The full course costs ninety pounds, though members of the college pay a reduced rate of seventy. You will need to bring an apron and a set of containers to take your food home; all other ingredients are provided. The classes are held in the kitchen on the first floor — correction, the second floor — of the main building. Please note that places are limited to twelve students, so early booking is advised. To reserve a place, you can pay online or by phone, but not by cheque.",
   Q:[
    {t:'text',a:'eight|8',q:'Course length: ______ weeks.'},
    {t:'text',a:'tuesday',q:'Classes are held every ______.'},
    {t:'text',a:'third|3rd|3',q:'Start date: ______ September.'},
    {t:'text',a:'9pm|9 pm|nine|9',q:'Classes finish at ______.'},
    {t:'text',a:'90|ninety',q:'Full course cost: £______.'},
    {t:'text',a:'70|seventy',q:'Members pay: £______.'},
    {t:'text',a:'containers|container',q:'Students must bring an apron and ______.'},
    {t:'text',a:'second',q:'Classes are on the ______ floor.'},
    {t:'text',a:'twelve|12',q:'Places are limited to ______ students.'},
    {t:'choice',a:'B',q:'You can pay:',opts:['A) by cheque','B) online or by phone','C) only online','D) cash only']}
   ]},
  {title:'Blackwood Nature Reserve (visitor tour)',
   transcript:"Welcome to Blackwood Nature Reserve. Before we begin, a few points. The reserve is home to more than a hundred species of birds — actually more than two hundred — as well as deer and foxes. Please keep to the marked paths, as wandering off can damage the fragile habitat. The main trail is about three kilometres long... sorry, five, and takes roughly two hours to complete. Halfway along, you will find a wooden hide where you can watch birds without disturbing them. Remember to bring binoculars if you have them. Dogs are welcome but must be kept on a lead at all times. There are no bins in the reserve, so please take all your litter home. Finally, the visitor centre, where you can buy hot drinks and maps, closes at four... no, five o'clock.",
   Q:[
    {t:'text',a:'two hundred|200',q:'The reserve has more than ______ species of birds.'},
    {t:'text',a:'paths|path',q:'Visitors must keep to the marked ______.'},
    {t:'text',a:'five|5',q:'The main trail is about ______ kilometres.'},
    {t:'text',a:'two|2',q:'The trail takes about ______ hours.'},
    {t:'text',a:'hide',q:'Halfway along there is a wooden ______.'},
    {t:'text',a:'binoculars',q:'Visitors should bring ______.'},
    {t:'text',a:'lead',q:'Dogs must be kept on a ______.'},
    {t:'text',a:'bins|bin',q:'There are no ______ in the reserve.'},
    {t:'text',a:'litter',q:'Visitors must take their ______ home.'},
    {t:'choice',a:'B',q:'The visitor centre closes at:',opts:['A) 2 pm','B) 5 pm','C) 7 pm','D) noon']}
   ]},
  {title:'Students planning a biology field trip',
   transcript:"Have you finished planning the biology field trip, Tom? Almost. We are going to the coast to study rock pools. Sounds great. When are we leaving? The coach departs at seven sharp — sorry, eight — so don't be late. How long is the journey? About two hours each way, so we will arrive around ten. What should we bring? Waterproof boots are essential, and a packed lunch, since there is no cafe nearby. Do we need to collect any samples? No, we are not allowed to remove anything; just take photographs and notes. And the weather? It might rain, so bring a waterproof jacket too. We will be back by four... actually five.",
   Q:[
    {t:'text',a:'pools|pool',q:'The trip is to study rock ______.'},
    {t:'text',a:'eight|8|8am',q:'The coach departs at ______.'},
    {t:'text',a:'two|2',q:'The journey takes about ______ hours each way.'},
    {t:'text',a:'ten|10|10am',q:'They will arrive around ______.'},
    {t:'text',a:'waterproof',q:'______ boots are essential.'},
    {t:'text',a:'lunch',q:'Bring a packed ______.'},
    {t:'text',a:'remove',q:'Students may not ______ anything.'},
    {t:'text',a:'notes|note',q:'They take photographs and ______.'},
    {t:'choice',a:'B',q:'Why should students bring lunch?',opts:['A) the cafe is expensive','B) there is no cafe nearby','C) eating out is banned','D) it is free']},
    {t:'choice',a:'B',q:'They will return by:',opts:['A) 3 pm','B) 5 pm','C) 7 pm','D) 8 pm']}
   ]},
  {title:'Lecture: urbanisation',
   transcript:"Today's topic is urbanisation, the process by which more and more people move from the countryside to cities. For the first time in history, over half the world's population now lives in urban areas — only a third did a century ago, but over half do today — and this figure is expected to rise further. Cities offer clear advantages, including better job opportunities, education, and healthcare. However, rapid urbanisation also creates serious problems. As populations swell, cities struggle to provide enough housing, leading to overcrowding and informal settlements. Traffic congestion and air pollution worsen, while pressure on water and electricity increases. Planners argue that the solution lies in designing sustainable cities with efficient public transport, green spaces, and energy-efficient buildings.",
   Q:[
    {t:'text',a:'cities|city',q:'Urbanisation is people moving from the countryside to ______.'},
    {t:'text',a:'half',q:"Over ______ the world's population now lives in cities."},
    {t:'text',a:'opportunities|opportunity',q:'Cities offer better job ______.'},
    {t:'text',a:'housing',q:'Rapid urbanisation causes a shortage of ______.'},
    {t:'text',a:'settlements|settlement',q:'Overcrowding leads to informal ______.'},
    {t:'text',a:'pollution',q:'Traffic congestion and air ______ worsen.'},
    {t:'text',a:'cities|city',q:'The solution is designing sustainable ______.'},
    {t:'text',a:'transport|transportation',q:'Sustainable cities need efficient public ______.'},
    {t:'choice',a:'B',q:'Over half the world now lives in:',opts:['A) rural areas','B) urban areas','C) coastal areas','D) deserts']},
    {t:'choice',a:'B',q:'A feature of sustainable cities is:',opts:['A) more cars','B) green spaces','C) fewer homes','D) no transport']}
   ]}
 ],
 read:[
  {title:'The Theory of Plate Tectonics',
   paras:[
    "List of Headings —  i) A theory once ridiculed   ii) The engine beneath the plates   iii) Evidence from the sea floor   iv) Where the plates meet   v) Living with the hazards   vi) A single unifying idea   vii) The structure of the Earth   viii) Continents that seem to fit",
    "A   For most of history, the continents were thought to be fixed for ever in their places. In 1912 a German scientist, Alfred Wegener, proposed a startling idea: that the continents had once been joined together in a single great landmass and had since slowly drifted apart. He supported his claim with several kinds of evidence: the way the coastlines of Africa and South America seem to fit together like the pieces of a jigsaw, matching fossils of the same extinct creatures found on either side of the Atlantic, and identical rock formations on continents now separated by whole oceans. Yet because he could suggest no convincing mechanism — no force powerful enough to shift entire continents across the globe — his theory was met with scorn. For decades most geologists dismissed it, and Wegener himself died long before his central idea was accepted, widely ridiculed to the end of his life.",
    "B   The explanation, when it finally came, lay in the structure of the Earth itself. Beneath the thin, rigid outer layer, or crust, on which we live, lies the mantle — a vast, deep region of hot, slowly flowing rock that makes up the greater part of the planet's bulk. The crust, it emerged, is not a single unbroken shell at all but is fractured into about a dozen huge rigid slabs, called tectonic plates, along with a number of smaller ones. These plates carry both the continents and the ocean floors upon their backs, and they effectively float on the denser, yielding mantle beneath them, able to move, however slowly, over the course of millions of years.",
    "C   What actually moves them is heat. Deep within the Earth, enormous heat — left over from the planet's fiery formation and continually generated by the decay of radioactive elements — rises from the core and sets up slow, circulating currents in the mantle, in a process known as convection. Hot rock rises, spreads sideways, gradually cools and then sinks again, turning over and over like water heating in a pan. Like the surface of a gigantic conveyor belt, these currents drag the plates lying above them, so that the continents ride slowly across the face of the globe at roughly the speed at which our fingernails grow — only a few centimetres a year, but more than enough, over millions of years, to rearrange the map of the world entirely.",
    "D   Decisive proof arrived only in the 1960s, and it came from the bottom of the sea. Detailed surveys of the ocean floor, made possible by new technology developed during and after the Second World War, revealed long undersea mountain ranges running for thousands of kilometres, at the very centre of which molten rock wells up from below and pushes the sea floor apart on either side. As this fresh rock cools and hardens, it records the direction of the Earth's magnetic field, which is known to reverse from time to time. The result is a symmetrical, striped pattern of magnetism frozen into the sea floor, identical on both sides of each ridge — striking confirmation that the sea floor really was spreading, and carrying the continents along with it.",
    "E   Most of the Earth's geological drama occurs where two plates meet. Where plates pull apart, as they do along the mid-ocean ridges, molten rock rises to fill the gap and fresh new crust is created. Where plates collide head-on, one may plunge beneath the other and be swallowed back into the mantle, or the two may crumple upward into great mountain ranges. And where plates grind past one another sideways, they may lock together for years under enormous strain before slipping suddenly and violently. The towering Himalayas, thrown up where India is driving into Asia, the Andes running the length of South America, and the deep ocean trenches where one plate dives beneath another all mark such boundaries between the restless plates.",
    "F   These boundaries are also where the greatest hazards to human life are found. The world's earthquakes, and the great majority of its volcanoes, are concentrated along the edges of the plates, above all around the rim of the Pacific Ocean — a zone so active that it is often called the 'Ring of Fire'. It is no accident that cities such as Tokyo, San Francisco and Santiago live under constant threat. Although scientists still cannot predict exactly when an earthquake will strike a given fault, their understanding of plate tectonics allows them to identify the regions most at risk, to design buildings that can better withstand shaking, and to prepare their populations in advance — turning what was once a mocked and mysterious theory into a practical tool for saving lives."
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'vii|7',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'FALSE',q:"Wegener's theory was accepted immediately.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The tectonic plates float on the mantle.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Plates move at roughly the speed fingernails grow.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Scientists can now predict exactly when earthquakes will occur.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'jigsaw|puzzle',q:'Wegener noted that Africa and South America fit together like a ______.'},
    {t:'text',a:'convection',q:'Heat from the core sets up ______ currents in the mantle.'},
    {t:'text',a:'Pacific',q:'Most of the world\'s volcanoes lie around the rim of the ______.'}
   ]},
  {title:'The Science of Fermentation',
   paras:[
    "A   Long before anyone understood why it worked, people all over the world were fermenting their food. Fermentation is the process by which microbes — chiefly bacteria and yeasts — break down sugars in food, producing in the process acids, gases or alcohol. It is one of the very oldest of all food technologies, used for thousands of years, and quite by accident at first, to make bread rise, to turn milk into cheese, to change grape juice into wine, and to produce countless other staples of the human diet. Almost every culture on Earth has developed its own traditional fermented foods and drinks, discovered and perfected long before the microbes responsible for them were even known to exist.",
    "B   Its first and greatest purpose was preservation. In the long age before refrigeration, fermentation was one of the few reliable ways of keeping food edible for months, and even through the winter. The acids and the alcohol that the helpful microbes produce create harsh conditions in which harmful, spoilage-causing and disease-causing organisms cannot survive, so that perishable foods are protected from rotting. In this way fresh milk, which sours within days, becomes long-lasting cheese, and a glut of cabbage becomes sauerkraut that will keep for a whole season. For much of human history, the ability to preserve the harvest in this way could mean the difference between comfort and starvation when the cold months came.",
    "C   The underlying chemistry remained a complete mystery until the nineteenth century, when the French scientist Louis Pasteur carried out a series of now-famous experiments. Pasteur demonstrated that fermentation was the work of living microorganisms feeding and multiplying, and not, as had long been believed, a purely chemical reaction that happened of its own accord in dead matter. This was a revolutionary conclusion. His discovery not only explained an ancient craft but laid the very foundations of the science of microbiology, and it transformed industries ranging from brewing and winemaking to medicine, where the realisation that tiny living organisms could cause change led on, in time, to the understanding that they could also cause disease.",
    "D   Fermentation shapes the flavour of food as much as it preserves it. The refreshing tang of yoghurt, the deep complexity of a well-aged cheese, the pleasant sourness of a good loaf of bread — all of these are the by-products of microbial activity, the chemical traces left behind as microbes feed and grow. Different microbes, working in different conditions of temperature, salt and time, produce strikingly different results from very similar starting materials. This is precisely why the fermented foods of each region of the world taste so distinctive, and why a cheese made in one valley can differ so completely from one made in the next. Flavour, in other words, is created by fermentation quite as much as preservation is.",
    "E   More recently, fermented foods have attracted fresh attention for their possible health benefits. Foods such as live yoghurt and the spicy Korean dish kimchi contain large numbers of live bacteria, which, when eaten, may help to maintain a healthy and balanced population of microbes in the human gut — a community now thought to play a surprisingly important role in digestion, in the working of the immune system, and even in mood. Although the scientific evidence is still developing, and many popular claims run well ahead of it, interest in such 'probiotic' foods has grown enormously, and once-obscure fermented products have become fashionable items on supermarket shelves around the world.",
    "F   Fermentation is also finding entirely new industrial uses. The same basic biological process — microbes patiently converting one substance into another — is now harnessed in great steel tanks to produce fuels, medicines such as insulin, and even novel materials. Using the tools of modern genetics, engineers can now programme microbes to manufacture particular substances that would otherwise be difficult, expensive or altogether impossible to make by ordinary chemistry. The living cell becomes, in effect, a tiny, self-reproducing factory. An ancient craft, first stumbled upon by cooks who had no idea what they were really doing, thus turns out to still have a very great deal to offer to the science and industry of the future."
   ],
   Q:[
    {t:'choice',a:'B',q:'Fermentation is carried out mainly by:',opts:['A) enzymes alone','B) bacteria and yeasts','C) heat','D) salt']},
    {t:'choice',a:'B',q:'Before refrigeration, the main purpose of fermentation was:',opts:['A) flavour','B) preservation','C) colour','D) profit']},
    {t:'choice',a:'B',q:'Louis Pasteur showed that fermentation was caused by:',opts:['A) a chemical reaction','B) living microorganisms','C) heat','D) acids']},
    {t:'choice',a:'C',q:'"Probiotic" foods are thought to benefit the:',opts:['A) skin','B) eyes','C) gut','D) teeth']},
    {t:'text',a:'A',q:'Which paragraph (A–F) gives a definition of fermentation?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the contribution of Louis Pasteur?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) explains how fermentation affects taste?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) mentions modern industrial applications?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains how fermentation keeps food safe?'},
    {t:'text',a:'sugars|sugar',q:'Microbes break down ______ in food.'},
    {t:'text',a:'sauerkraut',q:'Fermented cabbage becomes ______.'},
    {t:'text',a:'microbiology',q:"Pasteur's work founded the science of ______."},
    {t:'text',a:'bacteria',q:'Yoghurt and kimchi contain live ______.'}
   ]},
  {title:'The Economics of Attention',
   paras:[
    "A   We are used to thinking of information as something valuable, and for most of history it was scarce and hard to come by. But the economist Herbert Simon pointed out a striking paradox: in a world suddenly flooded with information, the truly scarce resource is no longer information itself but attention. There is simply far too much to read, to watch and to hear, and only so many hours in the day in which to do any of it. What a wealth of information consumes, Simon observed, is the attention of those who receive it — and so an abundance of information creates a corresponding poverty of attention. Human attention, on this view, has become one of the most sought-after and valuable commodities of the entire modern age.",
    "B   Whole industries now compete fiercely for that attention. Much of what we use online appears, at first glance, to be entirely free — search engines, social networks, email, video sites — but in reality we pay for all of it with our attention. These services make their money not by charging us directly but by capturing our time and our interest and then selling it on, in the form of advertising, to companies who wish to reach us. The more of our attention they can capture and hold, the more advertising they are able to sell. As the well-known saying puts it, if you are not paying for the product, then you are the product being sold.",
    "C   To win this fierce competition, companies deliberately design their products to be as engaging — and as habit-forming — as they can possibly make them. Endless feeds that scroll on for ever and never reach a bottom, notifications that buzz and flash to interrupt whatever we are doing, and rewards such as 'likes' delivered at unpredictable intervals all exploit well-understood features of human psychology. The unpredictable reward in particular is known to be powerfully compelling, working on the same principle that keeps a gambler at a slot machine. Together these techniques are carefully engineered to keep us tapping and scrolling long after we had meant to stop, and to draw us back to the screen again and again throughout the day.",
    "D   Critics argue that all of this comes at a real cost. When our attention is constantly fragmented — snatched away every few minutes by a new alert or a fresh temptation to check our phones — our capacity for deep, sustained, concentrated thought is said to suffer. Some researchers link heavy use of attention-grabbing technology to shortened concentration spans, poorer memory, and a growing difficulty in focusing on any single demanding task for long. Such claims are worrying, but they remain genuinely difficult to prove conclusively, since it is hard to separate the effects of the technology itself from the many other things that are changing in people's busy lives at the same time.",
    "E   Defenders of the technology respond that the very same tools bring enormous benefits, connecting distant friends and family, giving ordinary people a public voice, and putting almost the whole of the world's knowledge within instant reach of anyone with a phone. The problem, they argue, lies not in the tools themselves but in the particular way they are currently designed and used — designed, above all, to capture attention rather than to respect it. Better design, guided by the genuine interests of users rather than of advertisers, could just as easily serve people, helping them to find what they truly want and then to set the device aside, rather than trapping them in an endless competition for their time.",
    "F   Increasingly, people are trying to reclaim their attention for themselves, and quite deliberately. They switch off unnecessary notifications, set firm limits on their daily screen time, delete the most distracting apps from their phones, or take breaks from social media altogether, sometimes for weeks at a stretch. A whole minor industry of books, courses and apps has sprung up to help them do so. Whether such individual efforts of willpower are really enough to resist systems designed by thousands of clever engineers precisely in order to be hard to resist, or whether it is the very design of these systems that must change, is now one of the liveliest questions of the digital age."
   ],
   Q:[
    {t:'choice',a:'YES',q:'Herbert Simon argued that attention, not information, is now scarce.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Free online services make no money from their users.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some product features are designed to keep users engaged.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'It has been conclusively proved that technology shortens attention spans.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Defenders believe the technologies themselves are the main problem.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some people now try to limit their own screen time.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'A',q:'Which paragraph (A–F) describes the paradox identified by an economist?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes design features that exploit psychology?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) argues the problem lies in design, not the tools?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes ways individuals reclaim their attention?'},
    {t:'text',a:'attention',q:'According to Simon, the truly scarce resource today is ______.'},
    {t:'text',a:'advertising',q:'Online services sell our attention in the form of ______.'},
    {t:'text',a:'thought',q:'Critics say fragmented attention harms our capacity for deep ______.'},
    {t:'text',a:'social',q:'Some people take breaks from ______ media altogether.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 340' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>Household spending by category (%): 1990 vs 2020</text><text x='140' y='40' text-anchor='middle' font-size='12' font-weight='bold'>1990</text><text x='400' y='40' text-anchor='middle' font-size='12' font-weight='bold'>2020</text><g transform='translate(0,20)'><path d='M140 150 L140 60 A90 90 0 0 1 192.9 222.8 Z' fill='#1a73e8'/><path d='M140 150 L192.9 222.8 A90 90 0 0 1 54.4 177.8 Z' fill='#1a9c5a'/><path d='M140 150 L54.4 177.8 A90 90 0 0 1 50 150 Z' fill='#e0a800'/><path d='M140 150 L50 150 A90 90 0 0 1 87.1 77.2 Z' fill='#c0392b'/><path d='M140 150 L87.1 77.2 A90 90 0 0 1 140 60 Z' fill='#8e44ad'/><path d='M380 150 L380 60 A90 90 0 0 1 452.8 202.9 Z' fill='#1a73e8'/><path d='M380 150 L452.8 202.9 A90 90 0 0 1 363.1 238.4 Z' fill='#1a9c5a'/><path d='M380 150 L363.1 238.4 A90 90 0 0 1 290.7 161.5 Z' fill='#e0a800'/><path d='M380 150 L290.7 161.5 A90 90 0 0 1 327.1 77.2 Z' fill='#c0392b'/><path d='M380 150 L327.1 77.2 A90 90 0 0 1 380 60 Z' fill='#8e44ad'/></g><g font-size='11' fill='#333'><rect x='70' y='300' width='13' height='11' fill='#1a73e8'/><text x='88' y='309'>Housing</text><rect x='170' y='300' width='13' height='11' fill='#1a9c5a'/><text x='188' y='309'>Food</text><rect x='250' y='300' width='13' height='11' fill='#e0a800'/><text x='268' y='309'>Technology</text><rect x='355' y='300' width='13' height='11' fill='#c0392b'/><text x='373' y='309'>Transport</text><rect x='450' y='300' width='13' height='11' fill='#8e44ad'/><text x='468' y='309'>Other</text></g></svg>",
  task1:"The pie charts below show the proportion of household spending across five categories in a country in 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people think that governments should spend money on public services rather than on the arts. To what extent do you agree or disagree? Write at least 250 words."
 }
},

/* ===================== MOCK 4 ===================== */
{
 name:'Mock 4',
 blurb:'Flat rental · Farmers market · Memory + Chocolate · Deserts · Personality',
 listen:[
  {title:'Flat rental enquiry',
   transcript:"Hello, I'm calling about the two-bedroom flat you advertised. Certainly. The flat is on Maple Street, number twenty-four... sorry, forty-two. The monthly rent is seven hundred and fifteen pounds — no, seven hundred and fifty — and that includes water but not electricity. There is a deposit of one month's rent required before moving in. The flat is available from the first of November... sorry, the first of October. It comes furnished, with a washing machine and a fridge, though you would need to provide your own microwave. The nearest bus stop is just a two-minute walk away. If you would like to view it, we hold viewings on Saturday mornings, not Sundays. Please bring some form of identification, such as a passport.",
   Q:[
    {t:'text',a:'forty-two|42|forty two',q:'Flat address: ______ Maple Street.'},
    {t:'text',a:'750|seven hundred and fifty',q:'Monthly rent: £______'},
    {t:'text',a:'water',q:'The rent includes ______ but not electricity.'},
    {t:'text',a:'one|1',q:"Deposit: ______ month's rent."},
    {t:'text',a:'first|1st|1',q:'Available from ______ October.'},
    {t:'text',a:'furnished',q:'The flat comes ______.'},
    {t:'text',a:'microwave',q:'The tenant must provide their own ______.'},
    {t:'text',a:'two-minute|two minute|2-minute|two',q:'Nearest bus stop: a ______ walk.'},
    {t:'text',a:'saturday',q:'Viewings are on ______ mornings.'},
    {t:'choice',a:'B',q:'Visitors to the viewing must bring:',opts:['A) a deposit','B) some identification','C) a reference','D) a bank card']}
   ]},
  {title:'Saturday farmers market',
   transcript:"Welcome to the Saturday farmers market. The market runs every Saturday from eight in the morning until noon — sorry, until one in the afternoon. You'll find more than fourteen stalls here... more than forty, in fact, selling everything from fresh vegetables to homemade bread. Our most popular stall is the cheese stall, located near the main entrance, not the exit. If you're looking for something to eat, the hot food area is at the back, next to the car park. Please note that most stalls only accept cash, so there is a cash machine by the information desk. We also run free cookery demonstrations every hour in the marquee. Finally, we encourage visitors to bring their own bags, as we are trying to reduce plastic waste.",
   Q:[
    {t:'text',a:'one|1pm|1',q:'The market runs until ______.'},
    {t:'text',a:'forty|40',q:'Number of stalls: more than ______.'},
    {t:'text',a:'cheese',q:'The most popular is the ______ stall.'},
    {t:'text',a:'car park|carpark',q:'The hot food area is next to the ______.'},
    {t:'text',a:'cash',q:'Most stalls accept only ______.'},
    {t:'text',a:'information',q:'The cash machine is by the ______ desk.'},
    {t:'text',a:'cookery|cooking',q:'Free ______ demonstrations run every hour.'},
    {t:'text',a:'marquee',q:'Demonstrations are held in the ______.'},
    {t:'text',a:'bags|bag',q:'Visitors should bring their own ______.'},
    {t:'choice',a:'B',q:'The market is trying to reduce:',opts:['A) noise','B) plastic waste','C) prices','D) crowds']}
   ]},
  {title:'Students planning a psychology experiment',
   transcript:"Have you started the psychology assignment on memory, Priya? A little. We have to design a simple experiment, testing how well people remember a list of words. I was thinking we could compare young and older participants. Good idea. How many words should we use? Let's use ten... no, twenty words; that should be enough. And how many participants? I think twenty would do — actually, let's say thirty for reliable results. Okay. Where will we run it? The library study rooms should be quiet enough. When is it due? We have to submit the report by the thirteenth of November... sorry, the thirtieth. Let's meet on Wednesday — no, Thursday — to start writing.",
   Q:[
    {t:'text',a:'memory',q:'The assignment is about ______.'},
    {t:'text',a:'words|word',q:'They test how well people remember a list of ______.'},
    {t:'text',a:'older|old',q:'They will compare young and ______ participants.'},
    {t:'text',a:'twenty|20',q:'Number of words: ______.'},
    {t:'text',a:'thirty|30',q:'Number of participants: ______.'},
    {t:'text',a:'rooms|room',q:'They will run it in the library study ______.'},
    {t:'text',a:'thirtieth|30th|30',q:'Report due: ______ of November.'},
    {t:'text',a:'thursday',q:'They will meet on ______.'},
    {t:'choice',a:'B',q:'Thirty participants will give results that are:',opts:['A) quick','B) reliable','C) cheap','D) fun']},
    {t:'choice',a:'B',q:'The study rooms are chosen because they are:',opts:['A) large','B) quiet','C) free','D) new']}
   ]},
  {title:'Lecture: how memory works',
   transcript:"Today we will explore how human memory works. Memory is often divided into three stages: encoding, storage, and retrieval. Encoding is the process of taking in information; storage is keeping it over time; and retrieval is bringing it back when needed. Psychologists also distinguish between short-term memory, which holds a small amount of information for a few seconds, and long-term memory, which can store vast amounts for years. One famous finding is that short-term memory can hold only about five items... actually about seven, at once. To move information into long-term memory, repetition and meaning are key; we remember things better when we connect them to what we already know. Interestingly, sleep also plays an important role, as the brain consolidates memories while we rest. Stress, on the other hand, can seriously impair our ability to recall information.",
   Q:[
    {t:'text',a:'retrieval',q:'Memory has three stages: encoding, storage and ______.'},
    {t:'text',a:'information',q:'Encoding is the process of taking in ______.'},
    {t:'text',a:'seconds|second',q:'Short-term memory lasts a few ______.'},
    {t:'text',a:'seven|7',q:'Short-term memory holds about ______ items.'},
    {t:'text',a:'meaning',q:'To reach long-term memory, repetition and ______ are key.'},
    {t:'text',a:'connect',q:'We remember better when we ______ information to what we know.'},
    {t:'text',a:'sleep',q:'______ helps the brain consolidate memories.'},
    {t:'text',a:'stress',q:'______ can impair recall.'},
    {t:'choice',a:'C',q:'Long-term memory can store information for:',opts:['A) seconds','B) minutes','C) years','D) hours']},
    {t:'choice',a:'C',q:'Retrieval means:',opts:['A) taking in info','B) storing info','C) bringing info back','D) forgetting']}
   ]}
 ],
 read:[
  {title:'Ocean Currents and the Global Climate',
   paras:[
    "List of Headings —  i) A global conveyor belt   ii) Warming distant shores   iii) Winds that drive the surface   iv) The deep, salty engine   v) A threat from melting ice   vi) Currents and marine life   vii) Mapping the ocean floor   viii) How the tides are formed",
    "A   The ocean is far from still. Through it flow vast currents, like great rivers within the sea, carrying enormous quantities of water and heat around the planet and shaping the climate of whole continents. The currents at the surface are driven mainly by the wind. As the world's steady, prevailing winds blow across the water, hour after hour and year after year, they drag the surface layer of the sea along with them through friction. The turning of the Earth then bends these flows into great circular systems, thousands of kilometres across, which sweep warm water away from the hot equator towards the poles, and carry cooler water back towards the equator to take its place. In this way the winds keep the upper ocean endlessly in motion.",
    "B   These surface currents have a profound effect on climate, often far from where they begin. The best-known example is the Gulf Stream, a powerful current of warm water that flows out of the Gulf of Mexico, up the eastern coast of North America and then across the Atlantic towards Europe. The heat it carries is gradually released into the air above it, warming the winds that go on to blow onto the European coast. Without this steady supply of warmth, countries such as Britain and Norway would be far colder than they actually are — more like regions at the same latitude in Canada or Siberia, where the winters are bitter and long. In this way, a current that first rose thousands of kilometres away keeps distant northern shores surprisingly mild and comfortably habitable.",
    "C   Beneath the surface, a second, slower current system is at work, driven not by the wind at all but by differences in density. Sea water becomes denser, and therefore heavier, when it is colder and when it is saltier; such water tends to sink, while warmer, fresher and lighter water rises above it. In the far North Atlantic, off Greenland and Norway, the surface water is chilled by the polar air and made saltier still as sea ice forms and leaves its salt behind, and this cold, dense, salty water sinks all the way to the ocean floor. There it begins a slow, silent journey through the deep sea, a journey that will carry it half-way around the world before it ever rises to the surface again.",
    "D   These deep currents and the surface currents are linked together into a single, continuous, planet-wide loop, which scientists often call the global conveyor belt. Water that sinks in the North Atlantic travels slowly along the sea floor, southward and then eastward, into the Pacific and Indian Oceans, where over centuries it gradually warms and rises back towards the surface. From there it flows, now as a warm surface current, all the long way back to the Atlantic, where it cools and sinks once more, completing the great circuit. So sluggish is this deep circulation that a single complete journey around the belt may take around a thousand years to finish. It is one of the grandest and slowest movements anywhere on the whole planet, and it quietly redistributes heat across the entire globe.",
    "E   Scientists warn that this vast and vital engine is more vulnerable than it looks. As the global climate warms, ice on Greenland and across the Arctic is melting and adding great quantities of fresh water to the North Atlantic. This extra fresh water makes the surface water less salty, and therefore less dense, so that it no longer sinks as readily as it once did. Because it is precisely the sinking of that cold, salty water that drives the whole conveyor belt onward, a weakening of the sinking could slow the entire global system down. If the conveyor belt were to slow significantly, or even come to a halt, the effects on the world's climate could be severe, far-reaching and very difficult to predict — paradoxically, parts of Europe might actually grow colder even as the planet as a whole warms.",
    "F   Currents matter for life in the sea just as much as they matter for climate. In certain regions, especially along the western coasts of continents, winds and currents combine to draw cold, nutrient-rich water up from the dark depths to the sunlit surface, in a process known as upwelling. Sunlight and nutrients together are exactly what the tiny floating plants at the base of the food chain need in order to grow, and so these upwelling zones bloom with life. They are among the most productive waters anywhere in the ocean, teeming with fish that feed on the abundant plankton, and they support some of the world's largest and most important fisheries — off the coasts of Peru, West Africa and California among other places — on which millions of people depend for food and work."
   ],
   Q:[
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'Surface ocean currents are driven mainly by the wind.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Without the Gulf Stream, Britain would be warmer.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Cold, salty water rises to the surface.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'A full circuit of the global conveyor belt takes about a thousand years.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'Europe',q:'The Gulf Stream carries warm water towards ______.'},
    {t:'text',a:'density',q:'Deep currents are driven by differences in ______.'},
    {t:'text',a:'nutrient',q:'Upwelling brings ______-rich water to the surface.'}
   ]},
  {title:'The Discovery of Anaesthesia',
   paras:[
    "A   For most of human history, surgery was a horror to be avoided at almost any cost. Without any effective means of dulling pain, operations were carried out on fully conscious patients, who felt every stroke of the knife and had to be held down by force, or strapped to the operating table, to stop them struggling. Speed was the surgeon's only mercy: the best operators were judged above all by how quickly they could work, and a skilled surgeon might amputate a limb in well under a minute, to the cheers of the watching students. Even so, the ordeal was terrible, and many patients died not of their original injuries or disease but of the sheer shock, blood loss and agony of the operation itself. Small wonder that people submitted to the knife only when death was the certain alternative.",
    "B   Attempts to dull the pain of surgery were as old as surgery itself, but they were crude and unreliable. Down the centuries, alcohol in large quantities, opium and other plant drugs, and even strangulation to the very point of unconsciousness had all been tried, with limited success and considerable danger; too little had no effect, while too much might kill the patient outright. Some cultures used extreme cold or pressure to numb a limb before cutting. None of these methods, however, could ever be depended upon. What was truly needed was a substance that could reliably render a patient completely insensible to pain for as long as an operation lasted, and then, just as reliably, allow them to wake again afterwards unharmed. For a very long time, such a thing seemed an impossible dream.",
    "C   The breakthrough finally came in the 1840s, in the United States. It was discovered that several gases and vapours, some of which had until then been treated as mere scientific curiosities or party amusements, had the power to send a person into a deep, painless sleep. In October 1846, a Boston dentist named William Morton gave a now-famous public demonstration in the operating theatre of a large city hospital. Administering the vapour of ether to a patient through a specially made glass apparatus, he sent the man into a sleep so deep that a surgeon was able to cut into his neck and remove a tumour while the patient felt nothing whatever. When the patient woke and confirmed that he had felt no pain at all, the watching doctors were astonished, and news of the demonstration spread around the world within a matter of months.",
    "D   Chloroform, another anaesthetic vapour, soon followed, and for a time it was actually preferred to ether, being pleasanter to breathe and easier to carry from place to place. Its reputation was greatly helped when Queen Victoria accepted chloroform to ease the pain of childbirth, an event that lent the new practice a powerful stamp of respectability and silenced many who had objected to it on religious or moral grounds. Yet these early anaesthetics were by no means without risk: too large a dose could stop the heart and kill, while too small a dose left the patient in agony half-way through the operation, and giving exactly the right amount at the right moment demanded fine judgement and steady skill. Out of this pressing need for a specialist who did nothing but manage the patient's sleep, the entirely new medical speciality of the anaesthetist was born.",
    "E   The impact on surgery was nothing short of revolutionary. Freed at last from the desperate need for speed, surgeons could now afford to operate slowly, carefully and precisely, taking the time to do delicate work properly. Procedures deep inside the chest, the abdomen and eventually the brain — operations that would once have been utterly unthinkable on a screaming, struggling, conscious patient — gradually became possible. Anaesthesia, together with the slightly later discovery of antiseptics to keep wounds free of the infections that had killed so many surgical patients, between them transformed surgery from a last, desperate resort, attempted only to save a life already as good as lost, into a routine, reliable and increasingly safe treatment that could be planned calmly in advance and offered to millions of ordinary people.",
    "F   Modern anaesthesia is far more sophisticated than anything Morton could ever have imagined. Instead of a single vapour, anaesthetists today use carefully balanced combinations of several different drugs, which allow them to control consciousness, pain and movement quite independently of one another, and to monitor the patient's body closely throughout the whole operation. Millions of operations are now carried out every year in near-perfect safety. And yet, remarkably, exactly how these agents switch off human consciousness — how they gently take away, and then hours later return, our very awareness of the world — remains to this day not fully understood by science. It is a striking reminder that even a routine, everyday medical miracle can still conceal a deep and genuine mystery at its very heart."
   ],
   Q:[
    {t:'choice',a:'B',q:'Before anaesthetics, the best surgeons were judged by their:',opts:['A) cleanliness','B) speed','C) kindness','D) training']},
    {t:'choice',a:'C',q:'Ether was publicly demonstrated in 1846 by:',opts:['A) Queen Victoria','B) a surgeon','C) William Morton, a dentist','D) a chemist']},
    {t:'choice',a:'B',q:'Chloroform gained respectability partly because it was used by:',opts:['A) soldiers','B) Queen Victoria','C) dentists','D) explorers']},
    {t:'choice',a:'B',q:'How anaesthetics switch off consciousness is, according to the passage:',opts:['A) fully understood','B) not fully understood','C) a simple chemical reaction','D) caused by alcohol']},
    {t:'text',a:'A',q:'Which paragraph (A–F) describes what surgery was like before anaesthesia?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the first public demonstration of ether?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) mentions the birth of a new medical speciality?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) explains how anaesthesia changed what surgeons could attempt?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes early, crude attempts to dull pain?'},
    {t:'text',a:'conscious',q:'Before anaesthesia, patients were operated on while fully ______.'},
    {t:'text',a:'tumour|tumor',q:'In 1846, ether was used to remove a ______ painlessly.'},
    {t:'text',a:'antiseptics|antiseptic',q:'Anaesthesia together with ______ transformed surgery.'},
    {t:'text',a:'movement',q:'Modern anaesthesia controls consciousness, pain and ______.'}
   ]},
  {title:'The Science of Willpower',
   paras:[
    "A   Why is it so hard to resist a tempting piece of cake, to finish a boring but necessary task, or to stick to a New Year's resolution for more than a few weeks? Psychologists group all of these everyday struggles under the single heading of self-control, or willpower — the capacity to override an immediate impulse or desire in the service of a longer-term goal. It is one of the most useful of all human abilities, and has been linked to success in school, in work, in health and in relationships alike. For decades, therefore, researchers have tried hard to understand exactly how willpower works, why some people appear to have so much more of it than others, and, above all, why it so frequently and so frustratingly fails us at the crucial moment.",
    "B   One famous set of experiments, begun at an American university in the 1960s, tested self-control in the very young in a strikingly simple way. Each child was seated alone at a table and offered a single marshmallow, and told that they could either eat it at once, or, if they managed to wait a few minutes until the researcher returned to the room, receive two marshmallows instead. Some children gobbled the treat down immediately; others covered their eyes, sang to themselves, or turned away in a heroic effort to resist. Years later, it was reported that the children who had been able to wait the longest went on to enjoy a whole range of more positive outcomes in later life, from better examination results to better health. The 'marshmallow test' duly became one of the best-known and most widely repeated studies in all of psychology.",
    "C   For many years an influential theory held that willpower behaves rather like a muscle. According to this view, self-control draws on a single, limited store of mental energy, which becomes depleted, or used up, with effort — so that resisting one temptation leaves us measurably weaker in the face of the very next one that comes along, much as a muscle tires and weakens after hard exercise. This idea, which psychologists called 'ego depletion', seemed to fit everyday experience rather neatly. It appeared to explain why we are so much more likely to give in to temptation, snap at our families or abandon our diets precisely when we are already tired, hungry or stressed, and our supposed reserves of mental energy are running low.",
    "D   In recent years, however, this comfortable theory has come under serious challenge. When teams of researchers attempted to repeat the original ego-depletion experiments on a much larger scale, and with stricter methods, a great many of them simply failed to find the effect at all, casting real doubt on whether it had ever been genuine. Out of this failure, some psychologists have advanced a fascinating alternative explanation: that willpower feels limited only because we believe that it is limited. In careful studies, people who have been led to think of their self-control as an essentially unlimited resource show no signs whatever of depletion, carrying on as strongly as before, while those who believe it is easily used up do indeed seem to tire. Our very beliefs about willpower, on this view, may partly create the limits we go on to experience.",
    "E   Whatever the true underlying mechanism turns out to be, one practical finding stands up robustly: the people who are most successful at self-control rarely rely on raw willpower at all. Instead of heroically resisting temptation moment by moment, they quietly arrange their lives so as to avoid ever facing the temptation in the first place. They keep sweets and snacks out of the house rather than in a tempting cupboard, remove distracting apps and games from their phones, and go to study in a library where there is little to do but work. Good habits, sensible routines and a carefully designed environment achieve, effortlessly and almost automatically, what a constant, exhausting struggle of raw willpower usually cannot. The real trick, it seems, is not to win the fight against temptation, but to avoid having the fight at all.",
    "F   This is, in the end, a genuinely hopeful conclusion. It suggests that self-control is far less a fixed, inborn trait, possessed in abundance by a few lucky individuals and denied to everyone else, than it is a practical skill that almost anyone can learn and cultivate with a little thought. By changing our surroundings, building better habits and removing temptations from our path in advance, rather than merely gritting our teeth and hoping to be strong in the decisive moment, almost all of us can measurably improve our ability to pursue and achieve our long-term goals. Willpower, it seems, is less about strength of character than about cleverness of arrangement."
   ],
   Q:[
    {t:'choice',a:'YES',q:'Willpower involves resisting an immediate impulse for a longer-term goal.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'In the marshmallow test, children could get two marshmallows by eating one immediately.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:"The 'ego depletion' theory claims self-control is a limitless resource.",opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Recent attempts to repeat the original experiments always confirmed the effect.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'People who believe their willpower is unlimited show less depletion.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'The best self-controllers depend heavily on raw willpower.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the marshmallow experiment?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) explains the theory that willpower works like a muscle?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the challenge to the ego-depletion theory?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) explains how successful people avoid temptation?'},
    {t:'text',a:'willpower',q:'What is another word for self-control used in the passage?'},
    {t:'text',a:'marshmallow',q:'What food was used in the famous 1960s experiment?'},
    {t:'text',a:'depletion',q:'The theory that self-control uses a limited store of energy is called ego ______.'},
    {t:'text',a:'environment|surroundings',q:'Successful self-controllers change their ______ rather than relying on willpower.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Electricity generated by source (%), 2020</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Country</th><th style='border:1px solid #999;padding:5px 10px'>Coal</th><th style='border:1px solid #999;padding:5px 10px'>Gas</th><th style='border:1px solid #999;padding:5px 10px'>Nuclear</th><th style='border:1px solid #999;padding:5px 10px'>Renewables</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>A</td><td style='border:1px solid #999;padding:5px 10px'>40</td><td style='border:1px solid #999;padding:5px 10px'>30</td><td style='border:1px solid #999;padding:5px 10px'>10</td><td style='border:1px solid #999;padding:5px 10px'>20</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>B</td><td style='border:1px solid #999;padding:5px 10px'>25</td><td style='border:1px solid #999;padding:5px 10px'>20</td><td style='border:1px solid #999;padding:5px 10px'>30</td><td style='border:1px solid #999;padding:5px 10px'>25</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>C</td><td style='border:1px solid #999;padding:5px 10px'>10</td><td style='border:1px solid #999;padding:5px 10px'>15</td><td style='border:1px solid #999;padding:5px 10px'>5</td><td style='border:1px solid #999;padding:5px 10px'>70</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>D</td><td style='border:1px solid #999;padding:5px 10px'>55</td><td style='border:1px solid #999;padding:5px 10px'>25</td><td style='border:1px solid #999;padding:5px 10px'>0</td><td style='border:1px solid #999;padding:5px 10px'>20</td></tr></table>",
  task1:"The table below shows the percentage of electricity generated from different sources in four countries (A, B, C, D) in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that university education should be free for everyone, while others think students should pay for it. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 5 ===================== */
{
 name:'Mock 5',
 blurb:'Gym · Castle tour · Volcanoes + Barrier Reef · Body language · Telephone',
 listen:[
  {title:'FitZone gym membership',
   transcript:"Thank you for your interest in FitZone gym. We have three types of membership: the standard costs thirty-five pounds a month — sorry, thirty — the premium is forty-five, and the student membership is just twenty pounds with a valid student card. All memberships include access to the gym floor and changing rooms, but only premium members can use the swimming pool and sauna. The gym is open twenty-four hours a day, seven days a week. When you join, you'll receive a free fitness assessment with one of our trainers. To sign up, you'll need to bring a photo, proof of address, and your bank details. There's also a one-off joining fee of fifty pounds... sorry, fifteen.",
   Q:[
    {t:'text',a:'thirty|30',q:'Standard membership: £______ a month.'},
    {t:'text',a:'forty-five|45|forty five',q:'Premium membership: £______.'},
    {t:'text',a:'twenty|20',q:'Student membership: £______.'},
    {t:'text',a:'card',q:'Students need a valid student ______.'},
    {t:'text',a:'sauna',q:'Only premium members can use the pool and ______.'},
    {t:'text',a:'twenty-four|24',q:'The gym is open ______ hours a day.'},
    {t:'text',a:'assessment',q:'New members get a free fitness ______.'},
    {t:'text',a:'details|detail',q:'Bring a photo, proof of address and bank ______.'},
    {t:'text',a:'fifteen|15',q:'Joining fee: £______.'},
    {t:'choice',a:'B',q:'The gym is open:',opts:['A) weekdays only','B) 7 days a week','C) mornings only','D) weekends only']}
   ]},
  {title:'Dunhill Castle tour',
   transcript:"Welcome to Dunhill Castle, one of the oldest castles in the country, built in the eleventh century — sorry, the twelfth. We'll begin in the Great Hall, where banquets were once held. From there, we'll climb the tower, which offers wonderful views of the valley, though I should warn you there are nineteen steps... no, ninety, and they can be slippery. The castle is said to be home to a famous ghost, and many visitors come especially to hear the legend. The gift shop, where you can buy souvenirs, is located in the old stables, not the tower. Photography is welcome throughout the castle, except in the chapel, where it is not allowed. The tour lasts approximately forty-five minutes, and afterwards you're welcome to explore the gardens.",
   Q:[
    {t:'text',a:'twelfth|12th',q:'The castle was built in the ______ century.'},
    {t:'text',a:'hall',q:'Banquets were held in the Great ______.'},
    {t:'text',a:'ninety|90',q:'The tower has ______ steps.'},
    {t:'text',a:'slippery',q:'The steps can be ______.'},
    {t:'text',a:'legend',q:'Many visitors come to hear the ______.'},
    {t:'text',a:'stables|stable',q:'The gift shop is in the old ______.'},
    {t:'text',a:'chapel',q:'Photography is not allowed in the ______.'},
    {t:'text',a:'forty-five|45|forty five',q:'The tour lasts about ______ minutes.'},
    {t:'text',a:'gardens|garden',q:'Afterwards, visitors can explore the ______.'},
    {t:'choice',a:'B',q:'The castle is famous for its:',opts:['A) library','B) ghost','C) river','D) market']}
   ]},
  {title:'Tutorial: choosing a dissertation topic',
   transcript:"You wanted to talk about your dissertation topic? Yes, I'm interested in renewable energy, but I'm not sure it's focused enough. A topic that broad is hard to manage. Could you narrow it to one type of energy? Maybe I could focus on wind power... actually, solar power in rural areas. That's much better. And what method will you use? I was thinking of a questionnaire — no, interviews with local residents. Interviews are fine, but make sure you get at least fifteen participants, not five. How long should the dissertation be? Around ten thousand words. When's the deadline? The final version is due in June... sorry, May, but I'd like a draft by the end of March.",
   Q:[
    {t:'text',a:'energy',q:"The student's broad topic is renewable ______."},
    {t:'text',a:'narrow',q:'The tutor advises the student to ______ the topic.'},
    {t:'text',a:'rural',q:'The student will focus on solar power in ______ areas.'},
    {t:'text',a:'interviews|interview',q:'The research method will be ______.'},
    {t:'text',a:'fifteen|15',q:'Minimum number of participants: ______.'},
    {t:'text',a:'ten|10',q:'Length: around ______ thousand words.'},
    {t:'text',a:'may',q:'The final version is due in ______.'},
    {t:'text',a:'march',q:'A draft is wanted by the end of ______.'},
    {t:'choice',a:'B',q:'The tutor thinks the original topic is:',opts:['A) perfect','B) too broad','C) too narrow','D) boring']},
    {t:'choice',a:'B',q:'The student will interview:',opts:['A) experts','B) local residents','C) students','D) tourists']}
   ]},
  {title:'Lecture: volcanoes',
   transcript:"Today's lecture concerns volcanoes, one of the most powerful forces on Earth. A volcano forms where molten rock, called magma, rises from deep within the planet to the surface. When magma reaches the surface, it is known as lava. Volcanoes are often found along the boundaries of the tectonic plates that make up the Earth's crust. The most active region is the so-called Ring of Fire, which surrounds the Atlantic — sorry, the Pacific Ocean. While eruptions can be devastating, volcanoes also bring benefits. The ash they release makes surrounding soil extremely fertile, which is why many people choose to farm near them despite the risks. Volcanic activity has also created some of the world's most beautiful islands. Scientists monitor volcanoes closely, using instruments to detect the small earthquakes that often signal an eruption is near.",
   Q:[
    {t:'text',a:'magma',q:'Molten rock below the surface is called ______.'},
    {t:'text',a:'lava',q:'When magma reaches the surface it is called ______.'},
    {t:'text',a:'plates|plate',q:'Volcanoes are found along the boundaries of tectonic ______.'},
    {t:'text',a:'fire',q:'The most active region is the Ring of ______.'},
    {t:'text',a:'pacific',q:'The Ring of Fire surrounds the ______ Ocean.'},
    {t:'text',a:'fertile',q:'Volcanic ash makes soil very ______.'},
    {t:'text',a:'islands|island',q:'Volcanoes have created beautiful ______.'},
    {t:'text',a:'earthquakes|earthquake',q:'Scientists detect small ______ that signal an eruption.'},
    {t:'choice',a:'B',q:'People farm near volcanoes because the soil is:',opts:['A) dry','B) fertile','C) rocky','D) cold']},
    {t:'choice',a:'B',q:'Lava is magma that has:',opts:['A) cooled underground','B) reached the surface','C) turned to ash','D) frozen']}
   ]}
 ],
 read:[
  {title:'How the Immune System Works',
   paras:[
    "List of Headings —  i) The body's outer defences   ii) The general first response   iii) Targeted defenders   iv) Remembering the enemy   v) When defence goes wrong   vi) Training the system   vii) The discovery of germs   viii) The cells of the blood",
    "A   Every single day the human body is under attack from countless bacteria, viruses, fungi and other microbes, all seeking a way in, and yet most of the time we remain perfectly healthy. The reason is that the body is defended by a remarkable, many-layered immune system. The first line of defence is simply to keep the invaders out altogether. The skin forms a tough, continuous physical barrier that few microbes can cross while it remains unbroken; sticky mucus in the nose and airways traps inhaled particles and germs, which are then swept away or coughed out; tears and saliva contain substances that kill bacteria; and the powerful acid in the stomach destroys many of the microbes that are swallowed with our food. Most would-be invaders, in fact, never get past these outer defences at all, and are dealt with long before they can do any harm.",
    "B   When microbes do manage to break through the outer barriers — through a cut in the skin, perhaps, or a graze — the body mounts a rapid, general response known as innate immunity. Specialised white blood cells rush to the site of the invasion and engulf and digest the invaders one by one, while chemical signals cause the surrounding area to become red, warm, painful and swollen — the familiar signs of inflammation that we notice around any infected wound. This first response is impressively fast, but it is not aimed at any one particular kind of microbe; instead, it attacks anything at all that it recognises as foreign to the body. It buys valuable time, holding the invaders in check while the body's slower but more precise defences are made ready.",
    "C   If the threat persists and the general response is not enough on its own, a second, far more precise system gradually takes over. Known as adaptive immunity, it relies on cells called lymphocytes, each of which is tuned to recognise one specific invader and to respond only to that one. Some lymphocytes produce antibodies — proteins that lock tightly onto a particular microbe, disabling it and marking it clearly for destruction by other cells. Others hunt down and kill the body's own cells once they have been hijacked and infected. Building this highly targeted response, however, takes several days the very first time a new microbe is encountered, which is precisely why a fresh infection is usually able to make us feel thoroughly ill for a while before we finally manage to recover.",
    "D   The adaptive system has one further, truly remarkable feature: memory. After an infection has finally been defeated, the body does not simply forget it. Instead, a population of long-lived 'memory cells' remains in the blood for years, or even for a whole lifetime, primed to recognise that same particular invader instantly should it ever dare to return. And if it does return, the response the second time is now so swift and so overwhelming that the microbe is destroyed almost at once, and we may never feel the slightest bit ill at all. This is exactly why, having suffered certain diseases such as measles or chickenpox once in childhood, a person very rarely catches the same disease ever again, being protected by an immunity that can last for the rest of their life.",
    "E   This natural memory is exactly what vaccination so cleverly exploits. A vaccine works by deliberately exposing the immune system to a harmless version or fragment of a dangerous microbe — a weakened or dead form of it, or merely a piece of its outer coat — prompting the body to build up its protective memory cells without our ever having to suffer the actual disease and its dangers. The immune system is, in effect, given a training exercise against a harmless dummy enemy. Then, when the real and deadly microbe later appears, the body is already fully prepared and armed to recognise and destroy it before it can ever take hold. In this quiet way vaccines have saved many millions of lives, and have wiped some once-terrible diseases from the face of the Earth altogether.",
    "F   Powerful as it is, the immune system can also, on occasion, cause real harm to the very body it is meant to protect. Sometimes it overreacts wildly to substances that are in fact completely harmless, such as pollen, house dust or certain foods, producing the sneezing, itching and general misery of allergies, and in the most extreme cases a sudden, life-threatening reaction. More seriously still, the system can sometimes make a catastrophic mistake and take the body's own healthy tissues for the enemy, attacking them relentlessly as though they were invading microbes and causing what are called autoimmune diseases, such as type 1 diabetes and rheumatoid arthritis. A defence system this powerful, this vigilant and this aggressive, it seems, is simply not without its own real dangers.",
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'The skin acts as a physical barrier against microbes.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Innate immunity targets one specific type of microbe.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The adaptive immune response is immediate.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Vaccines contain a harmless version or fragment of a microbe.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'swollen',q:'Inflammation makes an area red, warm and ______.'},
    {t:'text',a:'proteins|protein',q:'Antibodies are ______ that mark microbes for destruction.'},
    {t:'text',a:'autoimmune',q:"When the immune system attacks the body's own tissues, the result is an ______ disease."}
   ]},
  {title:'The History of Cryptography',
   paras:[
    "A   For as long as people have had secrets, they have sought ways to hide them from prying eyes. Cryptography — the art of writing in code — is almost as old as writing itself, and coded messages have been found among the relics of the earliest civilisations. Its purpose is simple to state: to turn an ordinary, readable message into a scrambled form that only the intended recipient, who alone holds the secret key, is able to understand and turn back into plain sense. Anyone else who intercepts the message along the way — a spy, an enemy, a thief — should see nothing but meaningless nonsense. Kings, generals, merchants and lovers alike have all relied upon it down the ages, for a secret that cannot be kept safe on its journey is really no secret at all.",
    "B   The earliest methods were simple substitutions, in which each letter of the message is replaced by another according to a fixed rule. The Roman general Julius Caesar, for example, is said to have shifted each letter of his secret military messages a fixed number of places along the alphabet — so that, with a shift of three, A would become D, B would become E, and so on to the end. Anyone who intercepted the message but did not know the secret shift saw only a jumble of nonsense. Such 'ciphers' were quick and easy to use in the field, and served well enough against a casual reader, but to a patient and determined codebreaker they were, as it turned out, not very hard to crack at all.",
    "C   The great weakness of all simple substitution codes is that human language is full of patterns, and those patterns survive the scrambling. In English, some letters appear far more often than others; the letter 'e' is by a wide margin the most common, followed by letters such as 't' and 'a', while letters like 'z' and 'q' are genuinely rare. By carefully counting how often each symbol appears in a long coded message, a patient codebreaker can begin to guess which real letter each one must stand for — the most frequent symbol is very probably standing in for 'e', and so on down the list. This powerful technique, known as frequency analysis, was understood by scholars over a thousand years ago and went on to defeat simple ciphers for centuries, forcing codemakers to invent ever more cunning and elaborate methods.",
    "D   The long struggle between codemakers and codebreakers reached a dramatic and decisive peak during the Second World War. Germany used a sophisticated electro-mechanical machine called Enigma to encode all of its military orders, producing a cipher of such enormous complexity, and changed so often, that the Germans confidently believed it to be completely unbreakable. At a secret establishment at Bletchley Park in England, a remarkable team of mathematicians and codebreakers, most famously Alan Turing, laboured in secret to defeat it, building early code-breaking machines that could test many thousands of possibilities at speed. Their eventual success in reading Germany's most secret messages gave the Allies an immense advantage in battle after battle, and historians widely believe that it significantly shortened the war and so saved a great many lives.",
    "E   Modern cryptography rests on advanced mathematics rather than on mechanical tricks or simple letter-shifting. Today's codes rely on numbers so vast — typically the product of two enormous prime numbers — that even the fastest computers on Earth, working together for a lifetime, would take billions of years to break them by the brute-force method of trying every possible key in turn. The security depends, cleverly, not on keeping the method itself secret, but on the sheer practical impossibility of the calculation. It is this kind of powerful mathematical encryption, running silently in the background of our devices, that keeps our online banking, our private messages, our passwords and much of the world's commerce secure, allowing us to send sensitive information safely across a public and thoroughly untrusted internet.",
    "F   Yet the ancient contest is far from over. Researchers are now developing an entirely new kind of machine, the 'quantum' computer, which harnesses the strange rules of quantum physics and which could, in theory, break much of today's most trusted encryption with alarming ease, solving in a matter of hours the very calculations that would defeat an ordinary computer for billions of years. If such machines are ever built on a large scale, many of the codes that quietly protect the modern world could suddenly become worthless overnight. In anticipation of that day, cryptographers are already hard at work designing a new generation of codes specifically intended to resist even a quantum computer. The ancient race between those who make secrets and those who would steal them, it seems, will continue for a very long time yet."
   ],
   Q:[
    {t:'choice',a:'B',q:'The purpose of cryptography is to:',opts:['A) speed up messages','B) hide the meaning of a message','C) translate languages','D) store data']},
    {t:'choice',a:'B',q:'The Caesar cipher worked by:',opts:['A) swapping whole words','B) shifting each letter along the alphabet','C) using pictures','D) using a machine']},
    {t:'choice',a:'B',q:'Frequency analysis breaks codes by:',opts:['A) guessing randomly','B) counting how often symbols appear','C) using a machine','D) asking the sender']},
    {t:'choice',a:'B',q:'The Enigma machine was used by:',opts:['A) Britain','B) Germany','C) Turing','D) banks']},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the codebreaking effort in the Second World War?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) explains how modern codes rely on very large numbers?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the weakness caused by patterns in language?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) mentions a possible future threat from quantum computers?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the earliest, simple method of coding?'},
    {t:'text',a:'recipient',q:'Cryptography turns a message into a form only the intended ______ understands.'},
    {t:'text',a:'e',q:'In English, the most common letter is ______.'},
    {t:'text',a:'Enigma',q:'The German cipher machine was called ______.'},
    {t:'text',a:'shortened',q:'Breaking Enigma is believed to have ______ the war.'}
   ]},
  {title:'The Nuclear Power Debate',
   paras:[
    "A   Few technologies divide opinion as sharply as nuclear power. To its supporters, it is a clean, immensely powerful and reliable source of energy that could help to save the planet from the growing catastrophe of climate change. To its opponents, it is a uniquely dangerous and ruinously expensive technology whose risks clearly outweigh its benefits, and which we would be far wiser to abandon altogether. What makes the argument so difficult to settle is that both sides can point to a great deal of genuine evidence in support of their case, and both include serious, thoughtful and well-informed people. It is precisely for this reason that the debate over nuclear power has continued, fiercely and without any real resolution, for well over half a century.",
    "B   The case in favour rests largely on the question of carbon. Unlike a coal or gas power station, a nuclear power station produces almost no greenhouse gases at all while it is operating, and so does nothing to add to the warming of the atmosphere. Just as importantly, a single nuclear plant can generate vast amounts of electricity steadily and reliably, day and night, in summer and in winter, and regardless of the weather — something that wind and solar power, for all their promise and their tumbling cost, simply cannot yet guarantee, since the wind does not always blow nor the sun always shine. For its supporters, this combination of very low carbon and dependable, round-the-clock output makes nuclear power an essential and perhaps irreplaceable tool in the urgent fight against global warming.",
    "C   Opponents counter that the dangers are simply too great to ignore. Although serious accidents are, admittedly, rare, when they do occur — as they did at Chernobyl in 1986 and at Fukushima in 2011 — the consequences can be catastrophic and terribly long-lasting, spreading invisible radiation over a wide area, forcing many thousands of people from their homes for decades, and leaving whole districts uninhabitable. The fear and disruption can last a generation or more. Such disasters, the critics argue, prove that however careful the engineering and however small the everyday risk, a technology of this kind can never be made completely and reliably safe, because human error and natural disaster can never be entirely ruled out.",
    "D   There is also the stubborn, unsolved problem of waste. Nuclear reactors produce highly radioactive material as a by-product, some of which remains intensely dangerous to all living things for many thousands of years — far longer than any human civilisation has yet existed. Astonishingly, despite decades of costly effort, no country in the world has yet built and opened a permanent, guaranteed solution for storing this waste safely for such vast stretches of time; most of it still sits in temporary storage, closely guarded, waiting for an answer. To many people, deliberately creating such a hazardous and long-lived legacy, and leaving the burden of guarding it to countless future generations who will gain none of the benefit, is simply unacceptable, whatever advantages the electricity may bring us today.",
    "E   Cost is a further and growing obstacle. Nuclear power stations are enormously expensive to build, bristling with complex safety systems, and they take many years — often a decade or more — to complete, during which time they frequently run spectacularly over budget and far behind schedule. Meanwhile, as the price of wind turbines and especially of solar panels has tumbled year after year, renewable electricity has become dramatically cheaper. As a result, some economists now argue that nuclear power, whatever its other merits, no longer makes much financial sense, and that the same money spent instead on wind, solar and batteries would deliver far more clean electricity, and deliver it far sooner. Money, they insist, is itself a limited resource that ought to be spent where it does the greatest good for the climate.",
    "F   Supporters, however, are not persuaded to give up. They respond that a new generation of reactor designs, including smaller, simpler and factory-built models, promises to be markedly safer, cheaper to build and quicker to complete, while producing considerably less long-lived waste than the plants of the past. Above all, they argue, the sheer urgency of the climate crisis leaves the world with little choice but to use every low-carbon tool available, nuclear power among them, rather than ruling any promising option out. Whether nuclear power is ultimately part of the solution to climate change or part of the problem remains, for now, one of the most contested and consequential questions in the whole of energy policy — and one on which reasonable, well-meaning people continue to disagree profoundly.",
   ],
   Q:[
    {t:'choice',a:'YES',q:'Nuclear power stations produce almost no greenhouse gases while operating.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Wind and solar power can currently guarantee electricity at all times.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Nuclear accidents are common.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'A permanent solution for storing nuclear waste has already been built.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Nuclear power stations are cheap and quick to build.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Supporters believe newer reactor designs could be safer.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives the argument based on avoiding greenhouse gases?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) raises concern about accidents such as Fukushima?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the problem of long-lasting radioactive waste?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) argues that nuclear power is too expensive?'},
    {t:'text',a:'wind and solar|wind and solar power|solar and wind',q:'Which two power sources cannot yet guarantee constant electricity?'},
    {t:'text',a:'Chernobyl|Fukushima',q:'Name one site of a nuclear accident mentioned in the passage.'},
    {t:'text',a:'years|year',q:'Radioactive waste stays dangerous for thousands of ______.'},
    {t:'text',a:'policy',q:'The debate remains one of the most contested questions in energy ______.'}
   ]}
 ],
 writing:{
  img:"<div style='max-width:540px;margin:8px auto;color:#111'><div style='font-weight:bold;text-align:center;margin-bottom:8px'>How paper is recycled</div><div style='display:flex;flex-wrap:wrap;gap:5px;justify-content:center;align-items:center;font-size:11.5px'><span style='border:1px solid #1a73e8;border-radius:6px;padding:5px 8px;background:#eef4ff'>Used paper collected</span><span>&#8594;</span><span style='border:1px solid #1a73e8;border-radius:6px;padding:5px 8px;background:#eef4ff'>Sorted by type</span><span>&#8594;</span><span style='border:1px solid #1a73e8;border-radius:6px;padding:5px 8px;background:#eef4ff'>Shredded</span><span>&#8594;</span><span style='border:1px solid #1a73e8;border-radius:6px;padding:5px 8px;background:#eef4ff'>Mixed with water (pulp)</span><span>&#8594;</span><span style='border:1px solid #1a73e8;border-radius:6px;padding:5px 8px;background:#eef4ff'>Cleaned &amp; de-inked</span><span>&#8594;</span><span style='border:1px solid #1a73e8;border-radius:6px;padding:5px 8px;background:#eef4ff'>Pressed &amp; dried</span><span>&#8594;</span><span style='border:1px solid #1a9c5a;border-radius:6px;padding:5px 8px;background:#e9fbf1'>New paper</span></div></div>",
  task1:"The diagram below shows how paper is recycled. Summarise the information by describing the main stages of the process. Write at least 150 words.",
  task2:"Some people think the best way to reduce crime is to give longer prison sentences, while others believe there are more effective alternatives. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 6 ===================== */
{
 name:'Mock 6',
 blurb:'Language course · City tour · Bird migration + Brain · Ancient Egypt · Space tourism',
 listen:[
  {title:'Riverside Language School enrolment',
   transcript:"Good afternoon, you've reached the Riverside Language School. The beginner Spanish course you asked about runs for ten weeks — sorry, twelve — with classes every Monday and Wednesday evening from seven to nine. The course fee is two hundred and fourteen pounds... sorry, two hundred and forty, which includes the textbook. Classes are small, with a maximum of eight students, so places fill quickly. The course is taught by a native speaker, and there's a test at the end to assess your progress. If you complete the course, you'll receive a certificate. To enrol, please pay a deposit of fifteen pounds — no, fifty. The next course begins on the fifth of February.",
   Q:[
    {t:'text',a:'spanish',q:'The course is beginner ______.'},
    {t:'text',a:'twelve|12',q:'Course length: ______ weeks.'},
    {t:'text',a:'wednesday',q:'Classes are on Monday and ______ evenings.'},
    {t:'text',a:'nine|9',q:'Classes run from seven to ______.'},
    {t:'text',a:'240|two hundred and forty',q:'Course fee: £______.'},
    {t:'text',a:'textbook|text book',q:'The fee includes the ______.'},
    {t:'text',a:'eight|8',q:'Maximum ______ students per class.'},
    {t:'text',a:'native',q:'The course is taught by a ______ speaker.'},
    {t:'text',a:'certificate',q:'Completers receive a ______.'},
    {t:'text',a:'fifty|50',q:'Deposit required: £______.'}
   ]},
  {title:'Historic city walking tour',
   transcript:"Welcome to our historic city walking tour. We'll be on foot for about two hours, covering roughly two kilometres... actually three, so comfortable shoes are recommended. Our first stop is the cathedral, which dates back six hundred years — sorry, eight hundred. From there, we'll walk to the old market square, the heart of the medieval city. We'll stop for a short break at a traditional tea room, though refreshments are not included in the tour price. Please stay together, especially when crossing the busy roads. At the end, we'll finish at the river, where those who wish can take an optional boat trip. Don't forget to bring a camera.",
   Q:[
    {t:'text',a:'two|2',q:'The tour lasts about ______ hours.'},
    {t:'text',a:'three|3',q:'The tour covers roughly ______ kilometres.'},
    {t:'text',a:'shoes|shoe',q:'Comfortable ______ are recommended.'},
    {t:'text',a:'eight hundred|800',q:'The cathedral dates back ______ years.'},
    {t:'text',a:'square',q:'The old market ______ was the heart of the city.'},
    {t:'text',a:'tea',q:"There's a break at a traditional ______ room."},
    {t:'text',a:'price',q:'Refreshments are not included in the ______.'},
    {t:'text',a:'roads|road',q:'Take care when crossing busy ______.'},
    {t:'text',a:'river',q:'The tour finishes at the ______.'},
    {t:'choice',a:'B',q:'At the end, visitors can optionally take a:',opts:['A) bus','B) boat trip','C) train','D) taxi']}
   ]},
  {title:'Students planning a birdwatching trip',
   transcript:"So, for the biology trip, we're going to the wetlands to study migratory birds. When are we going? Next Friday — no, Saturday — and the minibus leaves at seven fifteen... sorry, seven thirty. That's early! It is, but the birds are most active in the morning. What do we need to bring? Binoculars, of course, and a notebook to record what we see. Should we bring food? Yes, a packed lunch, as there's nowhere to buy any. What about the weather? It could be windy, so a warm jacket is a good idea. And how do we record our observations? We'll use a special app on our phones. Let's aim to be back by four.",
   Q:[
    {t:'text',a:'migratory',q:'The trip is to the wetlands to study ______ birds.'},
    {t:'text',a:'saturday',q:'The trip is next ______.'},
    {t:'text',a:'seven thirty|7:30|7.30|730',q:'The minibus leaves at ______.'},
    {t:'text',a:'morning',q:'Birds are most active in the ______.'},
    {t:'text',a:'notebook|note book',q:'Bring binoculars and a ______.'},
    {t:'text',a:'lunch',q:'Bring a packed ______.'},
    {t:'text',a:'jacket',q:'It could be windy, so bring a warm ______.'},
    {t:'text',a:'app',q:'Observations are recorded using an ______.'},
    {t:'choice',a:'B',q:'Why leave so early?',opts:['A) traffic','B) birds are most active in the morning','C) it is cheaper','D) the bus is busy']},
    {t:'choice',a:'B',q:'They will return by:',opts:['A) 2','B) 4','C) 6','D) 7']}
   ]},
  {title:'Lecture: bird migration',
   transcript:"Today we will look at one of nature's most remarkable phenomena: bird migration. Each year, billions of birds travel enormous distances between their breeding and wintering grounds. Some species, such as the Arctic tern, travel from the Arctic to the Antarctic and back, covering tens of thousands of kilometres. Birds migrate mainly to find food and suitable breeding conditions as the seasons change. During the day, they rely on the position of the sun, while at night they use the stars — not the moon, the stars. Remarkably, birds can also sense the Earth's magnetic field, which acts like a built-in compass. Migration is dangerous, however; many birds die from exhaustion, storms, or lack of food. Sadly, human activity, including the loss of wetlands where birds rest, is making these journeys even harder.",
   Q:[
    {t:'text',a:'wintering|winter',q:'Birds travel between their breeding and ______ grounds.'},
    {t:'text',a:'tern',q:'The Arctic ______ travels from the Arctic to the Antarctic.'},
    {t:'text',a:'conditions|condition',q:'Birds migrate mainly to find food and breeding ______.'},
    {t:'text',a:'sun',q:'During the day, birds navigate using the ______.'},
    {t:'text',a:'stars|star',q:'At night, birds use the ______.'},
    {t:'text',a:'magnetic',q:"Birds can sense the Earth's ______ field."},
    {t:'text',a:'compass',q:'The magnetic field acts like a built-in ______.'},
    {t:'text',a:'food',q:'Many birds die from exhaustion, storms or lack of ______.'},
    {t:'choice',a:'B',q:'The Arctic tern is remarkable for the ______ it travels:',opts:['A) speed','B) distance','C) height','D) noise']},
    {t:'choice',a:'B',q:'Loss of ______ makes migration harder:',opts:['A) forests','B) wetlands','C) deserts','D) mountains']}
   ]}
 ],
 read:[
  {title:'Photosynthesis: How Plants Feed',
   paras:[
    "List of Headings —  i) The great chemical equation   ii) Capturing the light   iii) The base of the food chain   iv) Why it matters for all life   v) A link to the climate   vi) The oxygen we breathe   vii) The parts of a flower   viii) How water travels up",
    "A   Almost all life on Earth depends, directly or indirectly, on a single chemical process carried out by plants: photosynthesis. Using energy captured from sunlight, plants combine water and carbon dioxide to manufacture sugar, the basic food they need in order to grow, build their tissues and reproduce. In doing so, they perform a kind of quiet daily miracle: they capture the boundless energy of the sun and lock it away in a chemical form that other living things — animals, fungi and the countless microbes that cannot use sunlight themselves — can later eat and use. Without this one process, the green world would collapse, and with it almost every animal, ourselves included. It is no exaggeration to say that photosynthesis is the engine that quietly powers nearly all of the life on our planet.",
    "B   The process takes place mainly in the leaves of a plant, which are superbly designed for the task of gathering light. A typical leaf is broad and flat, presenting the largest possible surface to the sky so as to catch as much sunlight as it can, and leaves are held out on stalks and branches carefully arranged so as to avoid shading one another. Inside, the leaf is packed with a remarkable green pigment called chlorophyll, which has the special ability to absorb the energy of sunlight, particularly its red and blue wavelengths. It is this chlorophyll, reflecting back the green light that it cannot use, that gives leaves — and most plants — their familiar green colour, and its presence is the visible outward sign that photosynthesis is going on within.",
    "C   Photosynthesis can be summed up as a single, elegant chemical exchange. The plant takes in carbon dioxide gas from the air through countless tiny pores, called stomata, on the underside of its leaves, and at the same time it draws up water from the soil through its roots and up through its stem. Then, powered entirely by the energy of sunlight trapped by the chlorophyll, it converts these two simple, abundant ingredients — carbon dioxide and water — into energy-rich sugar, which feeds the plant, and oxygen, which is simply given off. The whole of this vital transformation, upon which the living world depends, can be written out by chemists as one short and beautifully balanced equation, the most important chemical reaction on Earth.",
    "D   The oxygen produced by photosynthesis is simply released into the air, for it is of no further use to the plant that makes it — to the plant, it is nothing but a waste product to be got rid of. Yet for animals, including ourselves, that very same waste gas is absolutely essential to life, for we cannot survive more than a few minutes without it. Virtually all of the oxygen in the air we breathe, every single breath of it, was produced by photosynthesis, either by green plants on land or, in even greater quantities, by tiny floating plants adrift in the oceans. The process, then, does something doubly wonderful: it not only feeds the entire living world but also, over billions of years, filled the atmosphere with oxygen and so made the very air breathable in the first place.",
    "E   Photosynthesis lies at the very base of almost every food chain on Earth. Plants, the great capturers of sunlight, are eaten by plant-eating animals; those animals are in turn eaten by meat-eaters; and so the energy that was first captured from the sun by a green leaf passes steadily from one living creature to the next, all the way up the chain. At every single step, the ultimate source of the energy is exactly the same: sunlight, captured by photosynthesis. Even the coal, the oil and the natural gas that we now burn in such vast quantities to power our modern civilisation are nothing more than the ancient, buried and transformed remains of plants and other organisms that photosynthesised, and so captured the light of the sun, many millions of years ago.",
    "F   Because it draws its very raw material from carbon dioxide, photosynthesis is intimately tied to the climate of the whole planet. As they grow, plants remove carbon dioxide — the chief greenhouse gas that is driving global warming — from the air, and lock its carbon safely away in their wood, their leaves and their roots, thereby helping, quietly and entirely for free, to slow the warming of the Earth. The world's great forests are, in this sense, a vast and precious store of captured carbon. The destruction of those forests is therefore doubly harmful: not only does it remove the living plants that would otherwise have gone on absorbing the gas year after year, but the burning and the rotting of the felled trees also releases all the carbon they had so patiently stored straight back into the atmosphere.",
   ],
   Q:[
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'Photosynthesis uses energy from sunlight.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Chlorophyll gives leaves their green colour.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Oxygen is useful to the plant that produces it.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Coal and oil come from plants that photosynthesised long ago.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'sugar',q:'Plants combine water and carbon dioxide to make ______.'},
    {t:'text',a:'broad',q:'Leaves are ______ and flat to catch light.'},
    {t:'text',a:'dioxide',q:'As plants grow, they remove carbon ______ from the air.'}
   ]},
  {title:'The Lost City of Pompeii',
   paras:[
    "A   On an August day in AD 79, the prosperous Roman city of Pompeii, near modern Naples in southern Italy, was going peacefully about its ordinary business — its shops open, its streets busy, its people entirely unaware of the catastrophe that was about to fall upon them. Then the nearby mountain, Vesuvius, which the townspeople had not even realised was a volcano, erupted with tremendous and terrifying violence, blasting a towering column of ash and rock high into the sky. Within hours, the whole city was buried under several metres of volcanic ash and stone, and many thousands of its inhabitants, trapped in their homes or overcome by poisonous fumes, perished where they stood. Pompeii was blotted out completely, and vanished from the map for nearly seventeen centuries.",
    "B   Terrible as it was, the very disaster that destroyed Pompeii also preserved it in the most extraordinary detail. The thick, deep blanket of ash that fell over the city sealed it completely from the air and the moisture that would normally, over the centuries, cause wood, cloth, paint and other materials to rot and crumble away. Cut off in this way from decay, the buildings, the colourful wall paintings, the wooden furniture and even the smallest everyday objects all survived almost perfectly intact, frozen exactly as they had been at the very moment of the catastrophe. It was as though a single ordinary day in the ancient world had been captured whole and held, unchanging, for nearly two thousand years beneath the ground.",
    "C   When systematic excavation of the site finally began in the eighteenth century, archaeologists uncovered not the mere broken ruins they had expected but something far more astonishing: a whole living city, caught in the middle of an ordinary day. Loaves of bread still sat, blackened, in the bakers' ovens where they had been left to bake; notices advertising forthcoming elections were still painted brightly on the walls; graffiti scratched by idle hands could still be read; and the deep ruts worn by countless cart wheels still scored the paved streets. Nowhere else on Earth has the ordinary daily life of the ancient world — its food, its politics, its jokes and its trade alike — been captured and preserved so completely and so vividly as it was, quite by accident, at Pompeii.",
    "D   Among the most haunting of all the discoveries were the victims themselves. Over the long centuries their bodies had entirely decayed away, but as they did so they left behind them empty cavities — perfect hollow moulds of their own forms — in the ash that had set hard around them. In the nineteenth century an ingenious archaeologist realised that by carefully pouring liquid plaster into these hollows and allowing it to set, excavators could recreate the exact shapes of the people in their final moments, right down to the folds of their clothing and the expressions of terror on their faces. The results are unbearably moving: a whole family huddled together sheltering from the falling ash, a chained guard dog straining desperately to escape its leash.",
    "E   Beyond its power to move us, Pompeii has taught historians a very great deal. Its ordinary houses, shops, workshops, public baths and temples, all preserved in place, have revealed in intimate detail exactly how ordinary Romans — not emperors or generals, but bakers, shopkeepers, slaves and their families — actually lived, worked, shopped, bathed and worshipped from one day to the next. It has filled in a thousand small, human details of everyday life that the surviving written histories of Rome, concerned almost entirely with the deeds of emperors, the intrigues of politics and the outcomes of great battles, ignored completely as being far too trivial to record. In this way the buried city has given back a voice to the ordinary, forgotten people of the ancient world.",
    "F   Today, ironically, Pompeii faces a new set of dangers, this time arising from the very act of uncovering it. Once dug out and exposed again to the sun, the rain and the winter frost, and trampled daily by the feet of the millions of tourists who come each year to marvel at it, the fragile remains that the ash had faithfully protected for so long have begun to crumble and decay all over again, and some buildings have simply collapsed. Meanwhile, a great deal of the sprawling site has still not been excavated at all, and lies waiting beneath the surrounding fields. Preserving and protecting what the eruption of Vesuvius so strangely saved has thus become a serious and costly challenge in its own right — a slow race against time and weather."
   ],
   Q:[
    {t:'choice',a:'B',q:'Pompeii was destroyed by the eruption of:',opts:['A) Mount Etna','B) Mount Vesuvius','C) Krakatoa','D) an unknown volcano']},
    {t:'choice',a:'C',q:'The volcanic ash preserved the city by sealing out:',opts:['A) light','B) tourists','C) air and moisture','D) heat']},
    {t:'choice',a:'B',q:"Excavators recreated the victims' shapes by pouring ______ into cavities:",opts:['A) wax','B) plaster','C) water','D) fresh ash']},
    {t:'choice',a:'C',q:'Compared with written histories, Pompeii reveals more about:',opts:['A) emperors','B) battles','C) ordinary daily life','D) religion only']},
    {t:'text',a:'D',q:'Which paragraph (A–F) explains how the shapes of victims were recreated?'},
    {t:'text',a:'A',q:'Which paragraph (A–F) describes the eruption that buried the city?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the new threats the site faces today?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes everyday details found during excavation?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains why the ash preserved the city so well?'},
    {t:'text',a:'seventeen|17',q:'Pompeii lay buried for nearly ______ centuries.'},
    {t:'text',a:'Naples',q:'The city is near the modern city of ______.'},
    {t:'text',a:'eighteenth|18th',q:'Systematic excavation began in the ______ century.'},
    {t:'text',a:'excavated',q:'Much of the site has still not been ______.'}
   ]},
  {title:'The Ethics of Genetic Engineering',
   paras:[
    "A   Few scientific advances raise as many difficult moral questions as genetic engineering — the ability to alter the DNA, the very blueprint of life, of living things directly and deliberately. Once purely the stuff of science fiction, it is now a practical, everyday reality in laboratories around the world, and a series of recent techniques has made the reading and changing of an organism's genes dramatically cheaper, faster and easier than ever before. With this remarkable and rapidly growing power, however, comes an urgent and often heated debate about how, by whom, and indeed whether, it ought to be used — a debate that now ranges across farming, across medicine, and across the future of the human species itself.",
    "B   In agriculture, the technology is already widespread, and has been for many years. Crops have been genetically engineered to resist insect pests, to survive drought or poor soils, to tolerate weedkillers, or to contain extra vitamins, and their supporters argue with some force that such improved crops could help to feed a rapidly growing world population on a warming and crowded planet. Critics, however, worry about possible unforeseen effects on human health and on the wider environment, effects that they fear might not become fully apparent for many years to come. They worry, too, about a mere handful of powerful companies coming to own the patents on the world's most important seeds, and so gaining a dangerous degree of control over the entire global food supply. The arguments on both sides are strongly and sincerely held.",
    "C   In medicine, the promise of genetic engineering is simply enormous, and here most of the ethical objections largely fall away. Scientists hope, and increasingly expect, to be able to cure once-untreatable inherited diseases by finding and correcting the single faulty genes that cause them, offering real relief and lasting hope to families who have suffered from the same cruel condition for generations. Early treatments of exactly this kind, for certain blood disorders and for some forms of inherited blindness, are already showing genuine and durable success in real patients. Because such treatments simply heal a sick individual, without affecting anyone else or any future child, very few people indeed object to using the technology in this way; it is widely and warmly welcomed as one of the great medical advances of the age.",
    "D   Far more controversial, and far more troubling to many people, is the prospect of altering the genes not of a living patient but of a human embryo — for such changes would be permanent, and would be passed on, unchanged, to that person's children, and to all of their future generations in turn. Supporters see in this an extraordinary chance to wipe out terrible hereditary diseases from a family, and eventually from humanity, for good and for ever. Opponents, however, fear that it would be a first fateful step onto a slippery slope leading towards so-called 'designer babies' — children deliberately selected or engineered before birth for their intelligence, their appearance, their height or their athletic ability, according to the wishes, and above all the wealth, of their parents.",
    "E   Such possibilities raise deep and disturbing questions of fairness and justice. If genetic enhancement were ever to become possible, it would almost certainly be expensive, at least at first, and so might be available only to the rich. The children of wealthy families could then be made not merely richer and better educated than everyone else, as they often are today, but genetically superior — taller, healthier, stronger or cleverer by design — widening the already yawning gap between the rich and the poor into a gap in biology itself, written permanently into the very genes of the two groups. A human society divided in this permanent and inheritable way, critics warn, could become profoundly and perhaps irreversibly unjust, split almost into two separate kinds of people.",
    "F   Most experts agree that the technology of genetic engineering itself is, in the end, neither good nor evil; like fire, or electricity, or any other great power, everything depends entirely on how, and by whom, it comes to be used. What is needed, they argue, is not to ban or to abandon it, which is in any case now practically impossible, but to govern it wisely — through careful, thoughtful regulation, clear and agreed international rules, and open, honest public debate. In this way society as a whole, rather than a few scientists, companies or governments acting alone and in secret, can decide together where the proper limits should lie, and so enjoy the immense benefits of the technology while guarding steadily against its very real dangers."
   ],
   Q:[
    {t:'choice',a:'YES',q:'Genetic engineering has become cheaper and easier in recent years.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Everyone objects to using genetic engineering to cure the sick.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Altering the genes of human embryos is uncontroversial.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Genetic enhancement, if expensive, could widen the gap between rich and poor.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NOT GIVEN',q:'Genetically engineered crops have already caused a major health disaster.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most experts believe the technology is inherently evil.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the use of genetic engineering in farming?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the hope of curing inherited diseases?'},
    {t:'text',a:'D',q:"Which paragraph (A–F) describes the fear of 'designer babies'?"},
    {t:'text',a:'F',q:'Which paragraph (A–F) calls for regulation and public debate?'},
    {t:'text',a:'DNA|genes|gene',q:'What does genetic engineering directly alter?'},
    {t:'text',a:'generations|generation',q:'Changes to embryos would be passed to all future ______.'},
    {t:'text',a:'babies|baby',q:'Critics fear a slippery slope towards designer ______.'},
    {t:'text',a:'regulation',q:'Experts call for careful ______ of the technology.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 320' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>Average internet use (hours/week) by age group, 2010 vs 2020</text><line x1='60' y1='30' x2='60' y2='250' stroke='#333'/><line x1='60' y1='250' x2='510' y2='250' stroke='#333'/><g font-size='10' fill='#555'><text x='52' y='253' text-anchor='end'>0</text><text x='52' y='198' text-anchor='end'>10</text><text x='52' y='143' text-anchor='end'>20</text><text x='52' y='88' text-anchor='end'>30</text><text x='52' y='33' text-anchor='end'>40</text><line x1='60' y1='195' x2='500' y2='195' stroke='#eee'/><line x1='60' y1='140' x2='500' y2='140' stroke='#eee'/><line x1='60' y1='85' x2='500' y2='85' stroke='#eee'/></g><g><rect x='85' y='140' width='30' height='110' fill='#1a73e8'/><rect x='119' y='57' width='30' height='193' fill='#e0a800'/><rect x='195' y='167' width='30' height='83' fill='#1a73e8'/><rect x='229' y='96' width='30' height='154' fill='#e0a800'/><rect x='305' y='195' width='30' height='55' fill='#1a73e8'/><rect x='339' y='140' width='30' height='110' fill='#e0a800'/><rect x='415' y='222' width='30' height='28' fill='#1a73e8'/><rect x='449' y='184' width='30' height='66' fill='#e0a800'/></g><g font-size='10.5' fill='#333' text-anchor='middle'><text x='117' y='264'>15–24</text><text x='227' y='264'>25–34</text><text x='337' y='264'>35–49</text><text x='447' y='264'>50+</text></g><g font-size='11'><rect x='190' y='288' width='16' height='10' fill='#1a73e8'/><text x='212' y='297'>2010</text><rect x='300' y='288' width='16' height='10' fill='#e0a800'/><text x='322' y='297'>2020</text></g></svg>",
  task1:"The bar chart below shows the average number of hours per week spent on the internet by four age groups in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that money spent on space exploration would be better spent solving problems on Earth. To what extent do you agree or disagree? Write at least 250 words."
 }
},

/* ===================== MOCK 7 ===================== */
{
 name:'Mock 7',
 blurb:'Hotel · Fitness centre · Nutrition + Exercise · Olympics · AI',
 listen:[
  {title:'Seaview Hotel booking',
   transcript:"Good evening, Seaview Hotel, how can I help? I'd like to book a room. Certainly, for which dates? From the fourth of June... sorry, the fourteenth, for three nights. We have a double room available at nineteen pounds — I mean ninety pounds per night, including breakfast. Does the room have a sea view? Yes, all our double rooms face the sea. Is there parking? Yes, free parking is available for guests. Could I take your name? It's Mr Roberts, R-O-B-E-R-T-S. Check-in is from two o'clock, and please note we require payment on arrival, not in advance.",
   Q:[
    {t:'text',a:'fourteenth|14th|14',q:'Booking from the ______ of June.'},
    {t:'text',a:'three|3',q:'Number of nights: ______.'},
    {t:'text',a:'double',q:'Room type: ______ room.'},
    {t:'text',a:'ninety|90',q:'Price per night: £______.'},
    {t:'text',a:'breakfast',q:'The price includes ______.'},
    {t:'text',a:'sea',q:'All double rooms face the ______.'},
    {t:'text',a:'free',q:'______ parking is available for guests.'},
    {t:'text',a:'roberts',q:'Guest surname: ______.'},
    {t:'text',a:'two|2',q:"Check-in is from ______ o'clock."},
    {t:'choice',a:'B',q:'Payment is required:',opts:['A) in advance','B) on arrival','C) monthly','D) online']}
   ]},
  {title:'Parkside Health & Fitness Centre',
   transcript:"Welcome to the Parkside Health and Fitness Centre. As well as a fully equipped gym, we have two swimming pools: a large one for lane swimming and a smaller, warmer pool for children. Our fitness classes, including yoga and spinning, run throughout the day, and the timetable is available at reception, not online. A qualified instructor is always on hand in the gym to help you. New members are entitled to one free session with a personal trainer. Our healthy-eating cafe on the ground floor — sorry, the first floor — serves freshly made smoothies and light meals. Finally, remember that the centre gets very busy after five o'clock, so if you prefer a quieter workout, mornings are best, not evenings.",
   Q:[
    {t:'text',a:'pools|pool',q:'The centre has two swimming ______.'},
    {t:'text',a:'children|child',q:'The smaller, warmer pool is for ______.'},
    {t:'text',a:'spinning',q:'Fitness classes include yoga and ______.'},
    {t:'text',a:'reception',q:'The class timetable is available at ______.'},
    {t:'text',a:'instructor',q:'A qualified ______ is always in the gym.'},
    {t:'text',a:'trainer',q:'New members get one free session with a personal ______.'},
    {t:'text',a:'first',q:'The cafe is on the ______ floor.'},
    {t:'text',a:'meals|meal',q:'The cafe serves smoothies and light ______.'},
    {t:'text',a:'five|5',q:"The centre is busiest after ______ o'clock."},
    {t:'choice',a:'B',q:'The best time for a quiet workout is:',opts:['A) evenings','B) mornings','C) weekends','D) lunchtime']}
   ]},
  {title:'Business project: planning a new cafe',
   transcript:"Right, for our business project we need to create a plan for a new cafe. Have you thought about the location? I think near the station... no, near the university would be best, lots of students. What about the name? How about 'The Study Break'? I like that. Now, what will make us different? Free, fast wifi and lots of power sockets, so students can work. And healthy food options, not just cakes. Definitely. What about opening hours? Students study late, so maybe open until eleven... actually until midnight. And the budget? We were told to assume five thousand pounds — sorry, ten thousand — to start. When do we present? The presentation is on the twelfth of April... no, the twenty-first. Let's divide the work: I'll do the marketing, you do the finances.",
   Q:[
    {t:'text',a:'cafe|café',q:'The project is a plan for a new ______.'},
    {t:'text',a:'university',q:'Best location: near the ______.'},
    {t:'text',a:'break',q:"Proposed name: 'The Study ______'."},
    {t:'text',a:'wifi|wi-fi',q:'They will offer free, fast ______.'},
    {t:'text',a:'sockets|socket',q:'They will provide lots of power ______.'},
    {t:'text',a:'healthy',q:'Food will be ______ options, not just cakes.'},
    {t:'text',a:'midnight',q:'The cafe will open until ______.'},
    {t:'text',a:'ten|10',q:'Starting budget: £______ thousand.'},
    {t:'text',a:'twenty-first|21st|21',q:'Presentation date: ______ of April.'},
    {t:'choice',a:'B',q:'The speaker will handle the:',opts:['A) finances','B) marketing','C) food','D) design']}
   ]},
  {title:'Lecture: the basics of nutrition',
   transcript:"Today we will discuss the basics of good nutrition. A balanced diet contains the right proportions of several food groups. Carbohydrates, found in foods like rice and bread, provide our main source of energy. Proteins, from sources such as meat, fish, and beans, are essential for growth and repairing the body — not for energy, that's the carbohydrates. Fats are also necessary in moderation, particularly the healthy fats found in nuts and olive oil. In addition, we need vitamins and minerals, which we get mainly from fruit and vegetables. Water, too, is vital, and experts recommend drinking around three litres... actually about two litres a day. A common mistake in modern diets is consuming too much sugar, which is linked to obesity and tooth decay. The key message is balance.",
   Q:[
    {t:'text',a:'energy',q:'Carbohydrates provide our main source of ______.'},
    {t:'text',a:'bread',q:'Carbohydrates are found in rice and ______.'},
    {t:'text',a:'repairing|repair',q:'Proteins are essential for growth and ______ the body.'},
    {t:'text',a:'beans|bean',q:'Proteins come from meat, fish and ______.'},
    {t:'text',a:'olive',q:'Healthy fats are found in nuts and ______ oil.'},
    {t:'text',a:'vegetables|vegetable',q:'Vitamins and minerals come mainly from fruit and ______.'},
    {t:'text',a:'two|2',q:'Experts recommend about ______ litres of water a day.'},
    {t:'text',a:'sugar',q:'Too much ______ is linked to obesity.'},
    {t:'choice',a:'B',q:'Proteins are needed mainly for:',opts:['A) energy','B) growth and repair','C) hydration','D) taste']},
    {t:'choice',a:'B',q:'The key message of the lecture is:',opts:['A) avoid fat','B) balance','C) eat more sugar','D) drink less']}
   ]}
 ],
 read:[
  {title:"The Body's Internal Clock",
   paras:[
    "List of Headings —  i) A clock set by light   ii) The master timekeeper   iii) When the rhythm is disturbed   iv) A rhythm in every living thing   v) The daily cycle of the body   vi) Putting the clock to use   vii) The stages of sleep   viii) The chemistry of hunger",
    "A   Almost every living thing, from the simplest bacteria to human beings, keeps time. Deep within us, and within plants, animals and even single-celled organisms, runs an internal biological clock that drives a daily rhythm of roughly twenty-four hours, known to scientists as the circadian rhythm, from the Latin words meaning 'about a day'. In humans it governs, among a great many other things, when we feel sleepy and when we feel wide awake and alert. Remarkably, this clock is not simply a passive response to day and night: experiments in which volunteers have lived for weeks in caves or sealed rooms, with no clue at all about the real time of day, have shown that the rhythm continues to tick steadily away, close to its twenty-four-hour beat, even in the complete absence of any clue from the outside world.",
    "B   In human beings, this master clock is controlled by a tiny cluster of a few thousand nerve cells buried deep within the brain, just above the point where the nerves coming from the eyes cross over. Small as it is, this cluster of cells acts as the body's central master timekeeper. It keeps the rest of the body marching in step, sending out a steady stream of chemical and nerve signals that coordinate the many smaller 'clocks' now known to exist in almost all of our organs and tissues — in the liver, the heart, the skin and elsewhere. In this way the master clock in the brain ensures that the whole body, right down to its individual cells, follows a single, unified daily schedule rather than drifting into confusion.",
    "C   The rhythm shapes far more of our lives than merely sleep. Over the course of each twenty-four-hour cycle, our body temperature quietly rises and falls by around a single degree, reaching its lowest point in the dark hours before dawn; our blood pressure changes; our digestion speeds up and slows down; and the release of a whole range of hormones into the blood is carefully timed to the hour. Even our alertness and our mood follow a regular daily pattern: for most people, alertness typically dips noticeably in the early afternoon — the familiar sleepy lull after lunch — and then again, far more deeply, in the small hours of the morning, which is one reason why so many accidents happen to those who are awake at that time.",
    "D   Although the clock runs by itself, ticking on regardless, it does not keep perfect time entirely on its own, and it must be kept accurate by cues from the environment — above all, by light. Bright light in the morning, striking special receptors in the eye, tells the brain firmly that the day has begun, and resets the master clock, keeping it precisely synchronised with the real world outside and with the natural cycle of day and night. This is exactly why darkness in the evening and bright natural light in the morning are so important for healthy, well-timed sleep, and why the glow of bright screens late at night, which the brain can easily mistake for daylight, can so readily push the whole clock out of its proper rhythm.",
    "E   Problems arise, and sometimes serious ones, when the body's rhythm is thrown badly out of step with the world around it. Flying rapidly across several time zones causes the familiar misery of jet lag, as the internal clock, unable to adjust so quickly, lags stubbornly behind local time for several days, leaving the traveller wide awake in the middle of the night and exhausted by day. Working night shifts is harder still: it forces people to be active and alert during the very hours when their internal clock is insistently telling them to sleep, and then to try to sleep when it is telling them to wake. Perhaps unsurprisingly, long-term shift work has been linked by researchers to a whole range of health problems, from poor sleep and weight gain to more serious conditions of the heart.",
    "F   Understanding the body clock has a growing number of genuinely practical uses. Doctors have found, for instance, that some medicines work distinctly better, or cause noticeably fewer side effects, when they are given at particular times of day rather than others, a promising young field of medicine known as 'chronotherapy'. Certain blood-pressure drugs and cancer treatments, for example, may be more effective when carefully timed to the body's own rhythms. And for the rest of us, a few simple habits — keeping fairly regular hours for sleeping and eating, seeking out bright daylight early in the morning, and avoiding bright screens and harsh light in the hours before bed — can go a long way towards keeping our ancient internal clock running smoothly and our sleep deep and sound.",
   ],
   Q:[
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'The circadian rhythm continues even without external clues.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The master clock is located in the heart.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Body temperature stays constant throughout the day.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Light in the morning helps reset the body clock.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'circadian',q:'The daily rhythm is known as the ______ rhythm.'},
    {t:'text',a:'light',q:'The clock is kept accurate above all by ______.'},
    {t:'text',a:'chronotherapy',q:'Timing medicines to the body clock is called ______.'}
   ]},
  {title:'The History of the Compass',
   paras:[
    "A   Before the invention of the compass, sailors who ventured far from land had very few reliable ways to find their direction across the featureless open sea. By day they could follow the position of the sun as it moved across the sky, and by night they could steer by the fixed pattern of the stars, but whenever thick clouds rolled in and hid the sun and stars from view — as they so often do at sea — the sailors could quickly become hopelessly and dangerously lost, with no sure way of telling which way lay home. The compass, a beautifully simple device whose magnetised needle always points to the north, transformed the entire art of navigation and, more than almost any other single invention, helped to open up the great age of exploration.",
    "B   The compass works because the whole Earth behaves like a single, gigantic magnet, with an invisible magnetic field running through it from one pole to the other. A small magnetised needle, if it is balanced so that it can turn freely, will slowly swing round and line itself up with this field, so that one end of it always points roughly towards the magnetic North Pole. The principle is wonderfully robust and dependable. Wherever a sailor happened to be on the world's vast oceans, and whatever the weather raging above — fog, storm or heavy cloud — the trembling needle would always settle and quietly show the way to the north, and from north all the other directions could readily be worked out.",
    "C   The compass was invented not in Europe but in China, where magnetic needles were certainly in use by around the eleventh century, and possibly a good deal earlier still. Curiously, the Chinese at first used the mysterious direction-finding property of the magnet not for navigation at all, but for telling fortunes and for arranging buildings and furniture in harmony with the natural forces of the Earth. Only later was the device turned to the practical business of finding one's way across land and sea. From China, knowledge of the magnetic compass gradually spread westward, carried along the great overland and maritime trade routes to the Arab world, whose sailors and scholars adopted it eagerly, and then onward, in time, to medieval Europe.",
    "D   In Europe, the compass arrived at a crucial moment in history. Combined with steadily improving ships, better charts and other new navigational instruments, it gave sailors, for the first time, the confidence to venture far out into the open ocean, deliberately sailing for weeks on end out of all sight of land, sure that they could still find their way home again. The great voyages of exploration that followed in the fifteenth and sixteenth centuries — the voyages that reached the Americas, that rounded the southern tip of Africa to open a sea route to Asia, and that eventually circled the entire globe for the first time — would have been almost unthinkable, and very nearly impossible, without the steady, silent guidance of the compass needle.",
    "E   The compass has, however, one curious and important complication that early sailors had to learn to live with. The magnetic North Pole, which the compass needle actually follows, is not in exactly the same place as the true, geographic North Pole — the fixed point about which the whole Earth spins — and, stranger still, it slowly wanders and shifts its position over the years and the centuries. As a result, a compass does not point precisely to true north but a little to one side of it, by an amount that differs from one place on the globe to another. Skilled navigators therefore had to learn to measure and correct for this difference, which is known as magnetic variation, in order to avoid gradually drifting off course and making serious, and sometimes fatal, errors in their reckoning.",
    "F   Today, sophisticated satellite navigation systems have largely taken over the everyday task of finding the way, guiding everything from great container ships and aircraft to the smartphones in our pockets, and doing so with astonishing accuracy. Yet the humble magnetic compass has by no means disappeared, and is still carried aboard ships and aircraft and built into many of our phones. Its great and enduring virtue is its sheer simplicity and independence: it needs no power supply of any kind, no batteries and no signal, and it cannot be switched off, run flat, or deliberately jammed by an enemy, as delicate electronic systems can. This is precisely why the ancient compass remains a trusted and vital backup, always ready to show the way north when all the clever modern electronics fail."
   ],
   Q:[
    {t:'choice',a:'B',q:'Before the compass, sailors could become lost when:',opts:['A) the sea was rough','B) clouds hid the sky','C) they had no map','D) the wind changed']},
    {t:'choice',a:'C',q:'A compass needle points north because it aligns with:',opts:['A) the stars','B) the sun',"C) the Earth's magnetic field",'D) the wind']},
    {t:'choice',a:'C',q:'The compass was first invented in:',opts:['A) Europe','B) the Arab world','C) China','D) the Americas']},
    {t:'choice',a:'B',q:'Magnetic variation is the difference between magnetic north and:',opts:['A) south','B) true (geographic) north','C) the equator','D) the nearest coast']},
    {t:'text',a:'C',q:'Which paragraph (A–F) explains how the compass reached Europe?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) explains why the compass still has a use today?'},
    {t:'text',a:'D',q:"Which paragraph (A–F) describes the compass's role in the age of exploration?"},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the difference between magnetic and true north?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains how the compass physically works?'},
    {t:'text',a:'north',q:'A compass always points ______.'},
    {t:'text',a:'fortunes|fortune',q:'In China, magnetic needles were first used for telling ______.'},
    {t:'text',a:'Africa',q:'The great voyages reached the Americas and rounded ______.'},
    {t:'text',a:'power',q:'The compass needs no ______ and cannot be jammed.'}
   ]},
  {title:'Should Zoos Exist?',
   paras:[
    "A   Few institutions provoke such deeply mixed feelings as the zoo. To some people, zoos are places of genuine wonder and learning, where ordinary families can come face to face with extraordinary animals from distant lands that they would otherwise never in their lives get to see. To others, however, they are little more than prisons, where wild creatures are locked up in captivity, robbed of their freedom, purely for the amusement and idle curiosity of human beings. The long-running debate over whether zoos should exist at all has grown noticeably sharper in recent years, as public attitudes towards animals, and towards our right to keep them at all, have steadily and profoundly changed.",
    "B   Defenders of zoos point, above all, to their role in conservation. Modern zoos, they argue, are no longer the mere menageries for entertainment that they once were, but play a genuinely vital part in protecting endangered species from extinction, carefully breeding animals whose numbers in the wild have collapsed to a dangerous few. In several celebrated cases — such as a particular wild horse, a rare deer, and certain birds and amphibians — species that had all but vanished from the natural world, or had disappeared from it entirely, have been kept alive and bred in captivity in zoos over many patient years, and their descendants have later been returned to the wild, a rescue from the very brink of extinction that would otherwise have been utterly impossible.",
    "C   Education is a second powerful argument advanced in the zoos' favour. Seeing, hearing and even smelling a real, living animal at close quarters, supporters say, creates a vivid emotional connection that no film, photograph or television documentary, however beautifully made, can ever quite match. This direct encounter, they argue, inspires visitors — and especially wide-eyed children — to care deeply about wildlife and to understand the very real threats that it now faces in the wild. And a public that genuinely knows and cares about animals, they add, is in turn far more likely to support, to fund and to vote for the conservation efforts that are working to protect wild places and wild creatures right around the world.",
    "D   Critics, however, remain thoroughly unconvinced by these arguments. Many animals, they insist, plainly suffer in captivity, confined to enclosures a tiny fraction of the size of their natural range and quite unable to roam, to hunt, to migrate or to behave as they naturally would in the wild. Large, wide-ranging and highly intelligent animals such as elephants, and big cats such as lions and tigers, seem to fare especially badly behind bars, and telltale signs of boredom, frustration and deep distress — such as pacing endlessly back and forth for hour after hour — are distressingly common among them. Whatever the wider benefits to conservation or education may be, the critics argue, they simply cannot justify inflicting this kind of prolonged suffering on individual living creatures.",
    "E   There is also a deeper, more philosophical objection, which goes beyond the question of physical suffering altogether. Some people argue that keeping any wild animal locked in a cage or an enclosure for human purposes — whether for entertainment, for education, or even for conservation — is simply and fundamentally wrong, however large, comfortable and well-designed that enclosure may happen to be, because animals, like people, have a basic right to their freedom and to live out their own lives in their own way. From this uncompromising point of view, no quantity of conservation success and no amount of educational benefit can ever really make the captivity of a free wild creature morally acceptable.",
    "F   Many people now believe that the real answer lies not in abolishing zoos altogether but in transforming them from within. The best modern zoos are already moving steadily away from the cramped, bare cages of the past towards spacious, natural enclosures that imitate the animals' wild homes and allow them to behave far more naturally. They are increasingly focusing their limited efforts and resources on the species that genuinely benefit from a captive breeding programme, and on individual animals that have been injured or raised in captivity and so could not survive in the wild in any case. Whether such reforms go far enough to satisfy the zoos' fiercest critics, however, or whether nothing short of complete abolition will ever do, remains very much an open question.",
   ],
   Q:[
    {t:'choice',a:'YES',q:'Attitudes towards keeping animals in zoos have changed over time.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Zoos have never successfully returned any species to the wild.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Supporters believe seeing a real animal has a stronger effect than a film.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Critics believe large animals such as elephants cope especially well in captivity.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some critics object to captivity on principle, regardless of conditions.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Everyone now agrees that zoos should be abolished.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives the conservation argument for zoos?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) gives the objection that animals have a right to freedom?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) gives evidence that some animals suffer in captivity?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes how the best modern zoos are changing?'},
    {t:'text',a:'conservation',q:'What role do defenders say zoos play in protecting endangered species?'},
    {t:'text',a:'elephants|elephant',q:'Which large animal, along with big cats, is said to suffer most in captivity?'},
    {t:'text',a:'freedom',q:'Some critics believe animals have a right to their ______.'},
    {t:'text',a:'enclosures|enclosure',q:'The best modern zoos are replacing cages with natural ______.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 320' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>Adults doing regular exercise (%), 2000–2020</text><line x1='60' y1='30' x2='60' y2='250' stroke='#333'/><line x1='60' y1='250' x2='510' y2='250' stroke='#333'/><g font-size='10' fill='#555'><text x='52' y='253' text-anchor='end'>0</text><text x='52' y='180' text-anchor='end'>20</text><text x='52' y='106' text-anchor='end'>40</text><text x='52' y='33' text-anchor='end'>60</text><line x1='60' y1='177' x2='500' y2='177' stroke='#eee'/><line x1='60' y1='103' x2='500' y2='103' stroke='#eee'/><line x1='60' y1='30' x2='500' y2='30' stroke='#eee'/><text x='60' y='265' text-anchor='middle'>2000</text><text x='170' y='265' text-anchor='middle'>2005</text><text x='280' y='265' text-anchor='middle'>2010</text><text x='390' y='265' text-anchor='middle'>2015</text><text x='500' y='265' text-anchor='middle'>2020</text></g><polyline fill='none' stroke='#1a73e8' stroke-width='2.5' points='60,140 170,125 280,111 390,96 500,85'/><polyline fill='none' stroke='#e0a800' stroke-width='2.5' points='60,158 170,151 280,133 390,111 500,96'/><g font-size='11'><rect x='190' y='288' width='16' height='4' fill='#1a73e8'/><text x='212' y='293'>Men</text><rect x='290' y='288' width='16' height='4' fill='#e0a800'/><text x='312' y='293'>Women</text></g></svg>",
  task1:"The line graph below shows the percentage of adult men and women who did regular exercise in a country between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that governments should be responsible for making people healthier, while others think it is the responsibility of individuals. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 8 ===================== */
{
 name:'Mock 8',
 blurb:'Job enquiry · Food festival · Glaciers + Water cycle · Social media · Photography',
 listen:[
  {title:'Part-time job enquiry',
   transcript:"Hello, I'm calling about the part-time job advertised at your supermarket. Great. The position is for a shop assistant, working two evenings a week — sorry, three — from five until nine. The pay is ten pounds an hour... actually eleven, with a small increase after six months. No previous experience is necessary, as full training is provided. You would mainly be stocking shelves and helping customers. To apply, please send your CV and a cover letter to our email address, not by post. One thing to note: the role requires you to be at least sixteen... no, eighteen years old. If you're offered the job, you'll need to provide two references.",
   Q:[
    {t:'text',a:'assistant',q:'The job is for a shop ______.'},
    {t:'text',a:'three|3',q:'Working ______ evenings a week.'},
    {t:'text',a:'nine|9',q:'Hours: from five until ______.'},
    {t:'text',a:'eleven|11',q:'Pay: £______ an hour.'},
    {t:'text',a:'six|6',q:'Pay increases after ______ months.'},
    {t:'text',a:'experience',q:'No previous ______ is necessary.'},
    {t:'text',a:'customers|customer',q:'Main duties: stocking shelves and helping ______.'},
    {t:'text',a:'letter',q:'Apply by sending a CV and a cover ______.'},
    {t:'text',a:'eighteen|18',q:'Minimum age: ______.'},
    {t:'choice',a:'B',q:'If offered the job, you must provide:',opts:['A) a photo','B) two references','C) a deposit','D) a uniform']}
   ]},
  {title:'Radio: Riverford Food Festival',
   transcript:"And now for local events. This weekend sees the return of the popular Riverford Food Festival, now in its ninth year — sorry, its tenth. The festival takes place in the town park, not the town square, and runs from Friday to Sunday. Entry is free, though some cooking workshops must be booked in advance. This year features over sixteen food stalls... over sixty, in fact, as well as a competition for the best homemade cake. Live music will play on the main stage throughout the weekend. Visitors are advised to use public transport, as parking near the park is very limited. The organisers are also asking everyone to bring reusable cups to help cut down on waste. The festival opens at ten each morning and closes at eight in the evening.",
   Q:[
    {t:'text',a:'tenth|10th',q:'The festival is in its ______ year.'},
    {t:'text',a:'park',q:'It takes place in the town ______.'},
    {t:'text',a:'sunday',q:'It runs from Friday to ______.'},
    {t:'text',a:'free',q:'Entry is ______.'},
    {t:'text',a:'workshops|workshop',q:'Cooking ______ must be booked in advance.'},
    {t:'text',a:'sixty|60',q:'Number of food stalls: over ______.'},
    {t:'text',a:'cake',q:"There's a competition for the best homemade ______."},
    {t:'text',a:'stage',q:'Live music plays on the main ______.'},
    {t:'text',a:'cups|cup',q:'Visitors should bring reusable ______.'},
    {t:'choice',a:'B',q:'Visitors are advised to use public transport because:',opts:["A) it's free",'B) parking is limited',"C) it's faster",'D) roads are closed']}
   ]},
  {title:'Tutorial: writing a lab report',
   transcript:"Come in. You wanted help with your chemistry lab report? Yes, I'm not sure how to structure it. A lab report has several standard sections. It starts with an introduction, explaining the aim of the experiment. Then comes the method, describing exactly what you did, so that someone else could repeat it. After that, the results, where you present your data, usually in tables or graphs. Then the discussion, where you explain what the results mean. Finally, a conclusion. One common mistake is writing the method in the wrong tense; it should be in the present tense — no, the past tense. Also, remember to reference any sources you used. How long should it be? About one thousand... sorry, two thousand words. It's due on the eighteenth... no, the eighth of May.",
   Q:[
    {t:'text',a:'chemistry',q:'The report is for a ______ experiment.'},
    {t:'text',a:'aim',q:'The introduction explains the ______ of the experiment.'},
    {t:'text',a:'repeat',q:'The method should let someone else ______ it.'},
    {t:'text',a:'graphs|graph',q:'Results are usually shown in tables or ______.'},
    {t:'text',a:'discussion',q:'The ______ explains what the results mean.'},
    {t:'text',a:'past',q:'The method should be written in the ______ tense.'},
    {t:'text',a:'reference',q:'Remember to ______ any sources used.'},
    {t:'text',a:'two|2',q:'Length: about ______ thousand words.'},
    {t:'text',a:'eighth|8th|8',q:'Due date: ______ of May.'},
    {t:'choice',a:'B',q:'A common mistake is:',opts:['A) no title','B) wrong tense in the method','C) too many graphs','D) no name']}
   ]},
  {title:'Lecture: glaciers and climate',
   transcript:"Today's lecture is about glaciers and why they matter. A glacier is a huge mass of ice that forms over many years as snow builds up and compresses. Glaciers are found in polar regions and high mountains, and they store about seventeen per cent... actually about seventy per cent of the world's fresh water. Many rivers, which supply water to millions of people, begin as melting glacier ice. Unfortunately, as global temperatures rise, glaciers around the world are shrinking at an alarming rate. This has two major consequences. First, as glaciers melt, they add water to the oceans, contributing to rising sea levels that threaten coastal cities. Second, communities that depend on glacier-fed rivers may face serious water shortages. Scientists monitor glaciers closely, using satellites, as they are among the clearest indicators of climate change.",
   Q:[
    {t:'text',a:'compresses|compress',q:'A glacier forms as snow builds up and ______.'},
    {t:'text',a:'mountains|mountain',q:'Glaciers are found in polar regions and high ______.'},
    {t:'text',a:'seventy|70',q:"Glaciers store about ______ per cent of the world's fresh water."},
    {t:'text',a:'rivers|river',q:'Many ______ begin as melting glacier ice.'},
    {t:'text',a:'shrinking|shrink',q:'As temperatures rise, glaciers are ______.'},
    {t:'text',a:'levels|level',q:'Melting glaciers contribute to rising sea ______.'},
    {t:'text',a:'coastal',q:'Rising seas threaten ______ cities.'},
    {t:'text',a:'shortages|shortage',q:'Communities relying on glacier-fed rivers may face water ______.'},
    {t:'text',a:'satellites|satellite',q:'Scientists monitor glaciers using ______.'},
    {t:'choice',a:'B',q:'Glaciers are described as clear indicators of:',opts:['A) pollution','B) climate change','C) earthquakes','D) population']}
   ]}
 ],
 read:[
  {title:'The Carbon Cycle',
   paras:[
    "List of Headings —  i) Carbon locked away for ages   ii) The gas that warms the planet   iii) A constant exchange   iv) Returning carbon to the soil   v) Upsetting the balance   vi) Carbon, the element of life   vii) The oceans as a store   viii) How plants grow",
    "A   Carbon is the element on which all life is built. Every living thing — every plant, every animal and every microbe — is made largely of carbon-based molecules, from the sugars that fuel our cells to the proteins that build our bodies. The unique ability of carbon atoms to join together into long chains and rings is exactly what makes the vast variety of life's chemistry possible in the first place. But the carbon in living things does not stay in one place, nor in one form. It moves constantly and endlessly between living things, the air, the oceans and the rocks of the Earth, passing from one to another in a great natural process, driven by the sun and by life itself, that is known as the carbon cycle.",
    "B   At the very heart of the cycle is a continual, two-way exchange between living things and the atmosphere. Plants take carbon dioxide from the air and, through the process of photosynthesis, use its carbon to build their leaves, stems, roots and every other part of their tissues. Animals then eat the plants, or eat other animals that have themselves eaten plants, taking that same carbon into their own bodies; and whenever living things breathe out, whether plant or animal, they release carbon dioxide back into the air once more. In this way the very same carbon atoms flow round and round, again and again, between the living world and the atmosphere above it, in a cycle that never once stops turning.",
    "C   Some carbon, however, is removed from this rapid, everyday cycle and locked away, out of circulation, for very long periods of time. When plants and animals die, most of the carbon in their bodies returns fairly quickly to the air as they rot and decay, breathed out by the microbes that consume them. But a small fraction of it escapes decay altogether — buried, perhaps, beneath mud or water where there is no oxygen to break it down — and, over the course of many millions of years, under great heat and pressure, this buried carbon may slowly be transformed into coal, oil and gas: the substances we call the fossil fuels. In these fuels, the carbon captured by living things in the distant past lies locked safely away underground.",
    "D   The world's oceans, too, play a huge and often overlooked role in the carbon cycle. They hold vast amounts of dissolved carbon dioxide, far more of it than the entire atmosphere above them, and so act as an enormous reservoir, or store, of carbon. Carbon dioxide moves freely both ways between the air and the surface of the sea, dissolving into the water in some places and bubbling out of it in others, according to conditions. Meanwhile, countless tiny marine creatures use the dissolved carbon to build their shells and skeletons of chalk; when these creatures die, their shells drift slowly down and settle on the sea floor, where, over the ages, they may be pressed into limestone rock, locking their carbon away for longer still.",
    "E   For most of the Earth's long history, this whole vast cycle stayed roughly in balance, with about as much carbon dioxide entering the air each year as was removed from it, so that the total amount of the gas in the atmosphere changed only very slowly, over thousands or even millions of years. Human activity, however, has now seriously upset that ancient balance. By digging up and burning coal, oil and gas on a colossal scale, we release, in the course of just a few short centuries, the very carbon that natural processes took many millions of years to bury underground, adding it back to the atmosphere far, far faster than the slow natural processes of the cycle can ever hope to remove it again.",
    "F   The inevitable consequence is a steady build-up of carbon dioxide in the atmosphere, which is now higher than it has been for hundreds of thousands of years, and still climbing year by year. Because carbon dioxide is a 'greenhouse gas' — one that traps heat radiating from the Earth's surface and keeps the whole planet warm enough for life — adding ever more of it to the air is causing global temperatures to rise, which is the central fact of climate change. Understanding the carbon cycle, and in particular understanding how human actions have disturbed it so profoundly, is therefore absolutely essential to understanding, and to tackling, the warming of our world and the many disruptions it threatens to bring."
   ],
   Q:[
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'vii|7',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'All living things are made largely of carbon.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Plants release carbon dioxide when they photosynthesise.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The oceans hold less carbon dioxide than the atmosphere.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Burning fossil fuels releases carbon much faster than nature can remove it.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'carbon',q:'All life is built on the element ______.'},
    {t:'text',a:'gas',q:'Buried carbon may become coal, oil and ______.'},
    {t:'text',a:'heat',q:'Carbon dioxide traps ______, keeping the planet warm.'}
   ]},
  {title:'The Discovery of Electricity',
   paras:[
    "A   Electricity is so utterly central to modern life that a single power cut can bring an entire city grinding to a halt, plunging homes into darkness, stopping the trains and silencing the computers. Yet for almost all of human history, the true nature of electricity remained a complete and baffling mystery. People had certainly seen its dramatic effects — the blinding flash of lightning splitting the sky, the sharp shock delivered by certain fish, the crackle of a spark on a dry day — but no one had the faintest idea of what it actually was. And, crucially, it could be neither produced at will nor controlled nor put to any use whatever; it remained a wild and mysterious force, to be wondered at and feared but never harnessed.",
    "B   The very first steps towards understanding came, many centuries ago, through simple curiosity about what we now call static electricity. The ancient Greeks noticed that a piece of amber — the hard, honey-coloured fossilised resin of ancient trees — when briskly rubbed with fur or cloth, would mysteriously attract small, light objects such as feathers or bits of straw towards it. Indeed, our very word 'electricity' comes directly from the Greek word for amber. But for many long centuries this strange attraction remained no more than an amusing curiosity, a kind of parlour trick, with no practical use whatsoever and no explanation at all of what might be causing it.",
    "C   Real progress finally came in the eighteenth century. In a famous, and genuinely highly dangerous, experiment, the American statesman and scientist Benjamin Franklin is said to have flown a kite up into a thunderstorm, and in doing so showed that the lightning crackling in the clouds was itself a form of electricity — the very same force, on a colossal scale, that could be produced in miniature simply by rubbing a piece of amber. It was a revelation. Electricity, it now turned out, was not several unrelated things but a single phenomenon, exactly the same whether it flashed across the sky in a great storm or jumped as a tiny spark in the laboratory. The experiment could easily have killed Franklin, and several others who rashly copied it were indeed electrocuted.",
    "D   The crucial next breakthrough was learning how to produce a steady, continuous flow of electricity, rather than merely a single, fleeting spark or shock. Around the year 1800, the Italian scientist Alessandro Volta invented the first true battery — a stack of metal discs separated by moist card — which could, for the first time, deliver a continuous and controllable electric current for hours on end. This was a turning point of the very greatest importance. For the first time in history, scientists had a reliable, steady and convenient source of electricity to experiment with, instead of a few unpredictable sparks, and as a direct result the pace of discovery immediately quickened.",
    "E   With a reliable source of current now to hand, the discoveries then came thick and fast. Above all, the English scientist Michael Faraday showed that a moving magnet could generate, or 'induce', an electric current in a nearby coil of wire — the fundamental principle that lies behind virtually every power station operating anywhere in the world today. This profound discovery of the deep link between electricity and magnetism was what finally made it possible to generate electricity in large quantities and on an industrial scale, by using some other source of energy to spin magnets past coils of wire. At a single stroke, it transformed electricity from a fascinating scientific curiosity into a genuinely practical source of power for the whole world.",
    "F   By the late nineteenth century, the practical results were spreading rapidly across the world. Electricity was lighting the streets of great cities and the rooms of ordinary homes with clean, bright electric lamps, replacing the dim and dangerous flame of gas and candle, and it was driving the machines in countless factories, freeing them at last from steam. What had, only a lifetime or two earlier, been a completely baffling mystery — a mere flash in the sky and a curiosity of rubbed amber — had become the invisible, indispensable force that powers the whole of the modern world, and one so utterly reliable that most of us now notice it only on the rare occasions when it suddenly fails."
   ],
   Q:[
    {t:'choice',a:'B',q:'For most of history, the nature of electricity was:',opts:['A) well understood','B) a complete mystery','C) deliberately ignored','D) fully controlled']},
    {t:'choice',a:'C',q:"The word 'electricity' comes from the Greek word for:",opts:['A) lightning','B) fish','C) amber','D) fire']},
    {t:'choice',a:'B',q:"Franklin's kite experiment showed that lightning was:",opts:['A) harmless','B) a form of electricity','C) caused by amber','D) purely magnetic']},
    {t:'choice',a:'C',q:'The first device to deliver a continuous current was invented by:',opts:['A) Franklin','B) Faraday','C) Volta','D) the Greeks']},
    {t:'text',a:'B',q:"Which paragraph (A–F) explains the origin of the word 'electricity'?"},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the invention of the first battery?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the link between magnetism and electricity?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes a dangerous experiment with a kite?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) mentions electricity lighting streets and homes?'},
    {t:'text',a:'cut',q:'A single power ______ can bring a city to a halt.'},
    {t:'text',a:'amber',q:'Rubbed ______ attracts small objects.'},
    {t:'text',a:'current',q:"Volta's invention delivered a continuous electric ______."},
    {t:'text',a:'magnet',q:'Faraday showed that a moving ______ could generate electricity.'}
   ]},
  {title:'The Debate over Eating Meat',
   paras:[
    "A   Whether or not people should eat meat has become one of the most hotly debated questions of our time. For most of human history there was no debate at all: meat was a prized and valued food, rich in energy and nourishment, and it was eaten eagerly whenever it could be hunted, raised or afforded. Today, however, in the wealthy countries of the world, where meat has become remarkably cheap and abundant and is available at every corner shop, a steadily growing number of people are deliberately choosing to eat less of it, or to give it up altogether, and the various reasons that they give for doing so are well worth examining in some detail.",
    "B   The first and perhaps most powerful argument concerns the environment. Producing meat, and especially beef, uses up enormous quantities of land, water and energy: vast areas of forest have been cleared to graze cattle and to grow the crops that feed them, and it can take many kilograms of grain and thousands of litres of water to produce a single kilogram of meat. Worse still, farmed livestock, and cattle in particular, are a significant source of the greenhouse gases that are driving climate change. Growing plants for people to eat directly, rather than feeding those plants to animals and then eating the animals, campaigners argue, would feed far more people from the same area of land while doing very much less harm to the planet.",
    "C   A second, quite different argument concerns animal welfare. A great deal of the meat we eat today comes not from the green fields of the imagination but from intensive 'factory' farms, where very large numbers of animals are kept indoors in cramped, crowded and often unnatural conditions in order to produce meat as cheaply as possible. To many people, deliberately causing such suffering to intelligent, feeling creatures, simply for the pleasure of eating their meat, when perfectly nourishing plant-based alternatives now readily exist, is increasingly difficult to justify on moral grounds. The way we treat our farm animals, they argue, is something that future generations may well come to look back on with shame.",
    "D   Health is a third important consideration. A large body of research has now linked the heavy consumption of red meat, and especially of processed meat such as bacon, sausages and ham, to a higher risk of certain serious diseases, including heart disease and some cancers, although the increase in risk for any one individual is fairly modest. A well-balanced plant-based diet, many careful studies suggest, can be perfectly healthy and complete, and may in some respects even be healthier than a diet heavy in meat. It is important to add, however, that a poorly planned plant-based diet, like any poorly planned diet of any kind, can lack certain important nutrients, and so needs to be put together with a little knowledge and care.",
    "E   Those who defend the eating of meat, of course, make their own strong case in reply. Meat, they rightly point out, is a rich and concentrated source of protein, of iron, and of certain vitamins — in particular vitamin B12 — that are difficult to obtain from plants alone, and it has been an important part of the human diet for millions of years, quite probably helping our distant ancestors' brains to grow large. In many parts of the world, moreover, farm animals also provide a vital livelihood, and a valuable store of wealth, for poor rural communities who have few other options, and livestock can often graze productively on rough, hilly or dry land that is entirely unsuitable for growing crops of any kind.",
    "F   Between the two extremes of eating meat freely and giving it up altogether, many people are now quietly choosing a middle path. Rather than becoming strict vegetarians or vegans overnight, they are simply eating noticeably less meat than they used to — perhaps keeping it for weekends or for special occasions — and, when they do buy it, choosing meat that has been produced to higher standards of animal welfare and environmental care, even where it costs a good deal more. Whether this gradual, moderate shift in the eating habits of millions will in the end prove enough to address the serious concerns that have been raised, or whether a far more radical change in the way the whole world eats will ultimately be needed, remains very much a matter of heated and unresolved debate."
   ],
   Q:[
    {t:'choice',a:'YES',q:'For most of human history, meat was a valued food.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Producing beef uses relatively little land and water.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'All meat comes from animals kept in good conditions.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'A well-planned plant-based diet can be healthy.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Meat has only recently become part of the human diet.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Everyone agrees that people should stop eating meat entirely.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives the environmental argument against meat?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) argues that meat provides a livelihood for poor communities?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) raises the concern about animal welfare?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the middle path many people are choosing?'},
    {t:'text',a:'beef',q:'Which meat is singled out as especially damaging to the environment?'},
    {t:'text',a:'greenhouse|greenhouse gases',q:'What kind of gases from livestock drive climate change?'},
    {t:'text',a:'cancers|cancer',q:'Heavy meat consumption is linked to heart disease and some ______.'},
    {t:'text',a:'vitamins|vitamin',q:'Meat is a rich source of protein and certain ______.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 420 320' width='100%' style='max-width:420px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='210' y='20' text-anchor='middle' font-size='13' font-weight='bold'>Composition of household waste (%), 2020</text><path d='M200 160 L200 65 A95 95 0 0 1 290.4 130.6 Z' fill='#1a73e8'/><path d='M200 160 L290.4 130.6 A95 95 0 0 1 200 255 Z' fill='#1a9c5a'/><path d='M200 160 L200 255 A95 95 0 0 1 105 160 Z' fill='#e0a800'/><path d='M200 160 L105 160 A95 95 0 0 1 123.1 104.2 Z' fill='#c0392b'/><path d='M200 160 L123.1 104.2 A95 95 0 0 1 200 65 Z' fill='#8e44ad'/><g font-size='11' fill='#333'><rect x='30' y='285' width='12' height='11' fill='#1a73e8'/><text x='46' y='294'>Paper 20</text><rect x='130' y='285' width='12' height='11' fill='#1a9c5a'/><text x='146' y='294'>Food 30</text><rect x='230' y='285' width='12' height='11' fill='#e0a800'/><text x='246' y='294'>Plastic 25</text><rect x='30' y='302' width='12' height='11' fill='#c0392b'/><text x='46' y='311'>Glass 10</text><rect x='130' y='302' width='12' height='11' fill='#8e44ad'/><text x='146' y='311'>Other 15</text></g></svg>",
  task1:"The pie chart below shows the composition of household waste in a country in 2020, by percentage. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that social media has a negative effect on society. To what extent do you agree or disagree? Write at least 250 words."
 }
},

/* ===================== MOCK 9 ===================== */
{
 name:'Mock 9',
 blurb:'Train booking · Community library · History of money + Amazon · Colour · Electric cars',
 listen:[
  {title:'Train ticket booking',
   transcript:"Good morning, I'd like to book a train ticket to Manchester. Certainly, for which day? This Friday, please, travelling in the morning. There's a train at nine fifty... sorry, nine fifteen, arriving at eleven thirty. How much is a return ticket? A standard return is forty-two pounds — no, fifty-two, but if you book today, there's a twenty per cent discount. Would you like a seat reservation? Yes, please, an aisle seat... actually a window seat if possible. Will you need a railcard? Only if you have one, for further discounts. The ticket will be sent to your phone as an e-ticket. Please arrive at least fifteen minutes before departure. Platform numbers are shown on the screens in the station.",
   Q:[
    {t:'text',a:'manchester',q:'Destination: ______.'},
    {t:'text',a:'friday',q:'Day of travel: ______.'},
    {t:'text',a:'nine fifteen|9:15|9.15|915',q:'Departure time: ______.'},
    {t:'text',a:'eleven thirty|11:30|11.30|1130',q:'Arrival time: ______.'},
    {t:'text',a:'fifty-two|52|fifty two',q:'Standard return price: £______.'},
    {t:'text',a:'twenty|20',q:'Discount for booking today: ______ per cent.'},
    {t:'text',a:'window',q:'Seat preference: a ______ seat.'},
    {t:'text',a:'e-ticket|eticket|e ticket',q:'The ticket is sent as an ______.'},
    {t:'text',a:'fifteen|15',q:'Arrive at least ______ minutes before departure.'},
    {t:'choice',a:'B',q:'Platform numbers are shown:',opts:['A) on the ticket','B) on the screens','C) by staff','D) online']}
   ]},
  {title:'New community library services',
   transcript:"I'd like to tell you about some new services at our community library. First, we have extended our opening hours; we are now open until seven in the evening — sorry, until eight — on weekdays. Second, we have launched a free e-book service, allowing members to borrow digital books using an app. You can now borrow up to ten books at a time... actually twelve. We have also created a new children's area on the first floor — no, the ground floor — with a story-time session every Wednesday at four o'clock. For those interested in technology, we run free computer classes for beginners on Tuesday mornings, not afternoons. Finally, our meeting rooms can now be booked free of charge by local community groups. To use any of these services, you simply need a library card, which is free to obtain.",
   Q:[
    {t:'text',a:'eight|8pm|8',q:'The library is now open until ______ on weekdays.'},
    {t:'text',a:'e-book|ebook|e book',q:'There is a new free ______ service.'},
    {t:'text',a:'app',q:'E-books are borrowed using an ______.'},
    {t:'text',a:'twelve|12',q:'Members can now borrow up to ______ books.'},
    {t:'text',a:'ground',q:"The new children's area is on the ______ floor."},
    {t:'text',a:'wednesday',q:'Story-time is every ______.'},
    {t:'text',a:'four|4',q:"Story-time is at ______ o'clock."},
    {t:'text',a:'tuesday',q:'Free computer classes are on ______ mornings.'},
    {t:'text',a:'groups|group',q:'Meeting rooms can be booked by community ______.'},
    {t:'choice',a:'B',q:'To use the services you need a:',opts:['A) passport','B) library card','C) fee','D) password']}
   ]},
  {title:'Planning a marketing presentation',
   transcript:"So our marketing module presentation is on advertising. What product should we focus on? How about a new brand of watches... no, trainers? Good, sport appeals to students. What's our main message? I think we should highlight that they're made from recycled materials, that's very popular now. Which platform would we advertise on? Definitely social media, especially short videos. And who's our target audience? Young people aged sixteen to twenty-five. How long is the presentation? Ten minutes — sorry, twelve, with slides. Should we include a survey? Yes, let's survey fifteen students... actually fifty, to get some real data. When's it due? We present on the thirteenth of March... no, the third. Let's meet on Monday to design the slides.",
   Q:[
    {t:'text',a:'advertising',q:'The presentation is about ______.'},
    {t:'text',a:'trainers|trainer',q:'The product is a new brand of ______.'},
    {t:'text',a:'recycled',q:'Main message: made from ______ materials.'},
    {t:'text',a:'social',q:'They will advertise on ______ media.'},
    {t:'text',a:'videos|video',q:'Especially using short ______.'},
    {t:'text',a:'twenty-five|25|twenty five',q:'Target audience: aged sixteen to ______.'},
    {t:'text',a:'twelve|12',q:'Presentation length: ______ minutes.'},
    {t:'text',a:'fifty|50',q:'They will survey ______ students.'},
    {t:'text',a:'third|3rd|3',q:'Presentation date: ______ of March.'},
    {t:'choice',a:'B',q:'The recycled-materials angle is chosen because it is:',opts:['A) cheap','B) popular now','C) required','D) easy']}
   ]},
  {title:'Lecture: the history of money',
   transcript:"Today we will trace the history of money. In the earliest societies, there was no money at all; people simply exchanged goods directly, a system known as barter. The problem with barter is that it requires both people to want what the other has. To solve this, societies began using objects of agreed value, such as shells or cattle, as an early form of money. The first metal coins appeared around two thousand six hundred years ago, in what is now Greece — sorry, Turkey, made from a mixture of gold and silver. Coins were convenient because they were durable and easy to carry. Much later, paper money was introduced, first in China, as it was lighter than metal. In the modern era, money has become increasingly abstract: cheques, then plastic cards, and now digital payments made with a phone. Some economists predict that physical cash may eventually disappear altogether.",
   Q:[
    {t:'text',a:'barter',q:'The direct exchange of goods is called ______.'},
    {t:'text',a:'want',q:'Barter requires both people to ______ what the other has.'},
    {t:'text',a:'cattle',q:'Early money included shells and ______.'},
    {t:'text',a:'2600|2,600',q:'The first metal coins appeared around ______ years ago.'},
    {t:'text',a:'turkey',q:'The first coins were made in what is now ______.'},
    {t:'text',a:'silver',q:'Coins were made from gold and ______.'},
    {t:'text',a:'carry',q:'Coins were durable and easy to ______.'},
    {t:'text',a:'china',q:'Paper money was first introduced in ______.'},
    {t:'choice',a:'B',q:'Paper money was introduced because it was:',opts:['A) stronger','B) lighter than metal','C) prettier','D) rarer']},
    {t:'choice',a:'B',q:'Some economists predict that ______ may disappear:',opts:['A) coins only','B) physical cash','C) banks','D) phones']}
   ]}
 ],
 read:[
  {title:"Wetlands: Nature's Kidneys",
   paras:[
    "List of Headings —  i) Cleaning the water   ii) A guard against floods   iii) Teeming with life   iv) Vanishing fast   v) Storing carbon   vi) A change in attitude   vii) The formation of soil   viii) Fishing and farming",
    "A   Wetlands — areas of land flooded with water, either permanently or only for part of the year — include marshes, swamps, peat bogs, and the muddy margins of lakes and rivers. For many centuries they were widely dismissed as useless, disease-ridden wastelands, good for nothing, fit only to be drained, filled in and built upon, or else turned into farmland. Countless wetlands were destroyed on exactly this reasoning. Only quite recently have we come to recognise them, on the contrary, as among the most valuable and productive ecosystems anywhere on Earth, quietly performing a whole range of services on which we all depend. As a direct result, attitudes towards these once-scorned landscapes have changed quite dramatically over the past few decades.",
    "B   One important reason for their great value is the sheer abundance and variety of life that they support. Wetlands are among the most biologically productive environments to be found anywhere on the planet, rivalling even the rainforests, and they provide food and shelter for a vast array of living things — fish, insects, amphibians such as frogs and newts, and birds in great numbers. They are especially vital for birds. Many species of migrating birds depend utterly on wetlands as places to rest, to shelter and to feed and build up their strength during their long and exhausting seasonal journeys across the globe, so that the loss of a single important wetland can affect bird populations on another continent entirely.",
    "C   Wetlands also act as remarkably effective natural filters, which is precisely why they are sometimes affectionately called 'nature's kidneys'. As water moves slowly through the thick vegetation and the still, shallow pools of a wetland, the sediment it carries settles gently to the bottom, and many pollutants are either broken down by microbes or absorbed and taken up by the wetland plants. As a result, the water that finally flows out of a wetland is very often far cleaner than the water that first entered it. This free natural purification can save the communities downstream the enormous cost of building and running plants to treat their drinking water artificially.",
    "D   Wetlands provide valuable protection from flooding as well. Acting rather like a giant natural sponge, a healthy wetland soaks up heavy rainfall and the swollen water of rivers in flood, storing the excess and then releasing it only slowly, over days and weeks, instead of allowing it to rush straight downstream all at once in a single destructive surge. In this quiet way, wetlands smooth out the flow of water through a whole landscape and shield the towns and farms that lie below them. It is no coincidence that in many places where wetlands have been drained and built over, damaging flooding has since become noticeably more frequent, more sudden and more severe than it ever was before.",
    "E   Some wetlands perform a further, less visible but hugely important service for the whole planet. Peat bogs, which are formed very slowly over thousands of years from the partly decayed remains of plants that cannot fully rot away in the waterlogged ground, store immense quantities of carbon — more, in total, than is held in all the world's forests put together. Left undisturbed and wet, these bogs keep their vast store of carbon safely locked away underground, out of harm's way. But when they are drained for farming, or dry out and catch fire, they release that ancient stored carbon back into the air as carbon dioxide, adding significantly to global warming.",
    "F   Despite everything they do for us, wetlands are today disappearing faster than almost any other type of natural habitat on Earth. Vast areas have already been drained for farming and for building, or dammed and diverted, and pollution flowing in from farms and cities, together with steadily rising sea levels, now threatens many of those wetlands that still remain. Conservationists warn, with growing urgency, that protecting the wetlands we still have is far cheaper, far quicker and far easier than attempting to recreate them once they have been lost — for a wetland, built up delicately over many centuries, simply cannot be rebuilt in a single season once it is gone."
   ],
   Q:[
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'Wetlands were once regarded as worthless.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Water leaving a wetland is dirtier than the water entering it.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:"Peat bogs store more carbon than all the world's forests.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Wetlands are disappearing more slowly than most other habitats.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'kidneys|kidney',q:"Wetlands are sometimes called nature's ______."},
    {t:'text',a:'sponge',q:'A wetland acts like a giant ______, soaking up floodwater.'},
    {t:'text',a:'plants|plant',q:'Peat bogs are formed from partly decayed ______.'}
   ]},
  {title:'The Steam Engine and the Industrial Revolution',
   paras:[
    "A   Of all the machines that have shaped the modern world, few can rival the sheer importance of the steam engine. Before it, almost all of the world's work depended on the muscles of human beings and animals — labourers, horses and oxen — or else on the uncertain and unreliable power of wind and flowing water, which failed whenever the wind dropped or the river ran low or froze. The steam engine, for the very first time in history, gave humanity a source of power that was reliable, movable and, given enough coal to burn, very nearly limitless, available almost anywhere and at any time of year. In doing so, it transformed human society utterly and beyond all recognition.",
    "B   The basic principle of the steam engine is simple enough: heat is used to boil water and turn it into steam, and that steam, as it expands, can push against a piston and so drive machinery of almost any kind. Crude early versions were built in the early eighteenth century, mainly to pump water out of flooded coal mines, but they were clumsy, feeble and hopelessly wasteful of fuel. The great improvement came from the Scottish engineer James Watt, whose far more efficient design, developed and patented in the 1760s and 1770s, dramatically reduced the amount of coal needed and at last made the steam engine truly practical and economical for widespread use in every kind of industry.",
    "C   The first great use of the new steam power was in industry. Factories, which had until then needed to be built beside fast-flowing rivers so that their machines could be driven by water wheels, could now be built almost anywhere at all, powered instead by coal-fired steam engines that would run steadily day and night in any season. This single change freed industry from the tyranny of geography, and allowed the rapid growth of great manufacturing towns and cities, often clustered on the coalfields, which drew in workers by the hundred thousand from the surrounding countryside in search of steady wages. The modern industrial city was, in large part, a direct creation of the steam engine.",
    "D   Steam power then went on to transform transport just as completely as it had transformed industry. Fitted to a locomotive running on iron rails, the steam engine gave birth to the railway, which could carry goods and passengers across the land at speeds no horse could ever hope to match, and did so cheaply and in great bulk. Fitted instead into a ship, the steam engine freed sea travel at last from its ancient dependence on the fickle wind, so that steamships could keep to a reliable timetable and sail straight into the teeth of a gale. Distances that had once taken weeks or even months to cover could now be crossed in a matter of a few days, and the whole world began to feel a far smaller and more connected place.",
    "E   The social consequences of all this were immense, and by no means all of them were welcome. The new factories and the swelling cities certainly offered work and wages to many people who had none, but they also brought with them punishingly long working hours, dangerous and unhealthy conditions, widespread child labour, and vast, overcrowded and filthily polluted slums in which disease spread easily. The steam age created enormous new wealth, but that wealth was distributed extremely unevenly, flowing to the factory owners and merchants while many of the workers who produced it lived in grinding poverty. The hardships and the glaring injustices it caused in time fuelled powerful and lasting demands for social and political reform.",
    "F   The steam engine's direct reign eventually came to an end, as it was gradually replaced during the twentieth century by the cleaner electric motor and the more compact internal combustion engine. Yet its legacy endures all around us, more than two centuries later. It launched the Industrial Revolution, the greatest transformation in the way people lived and worked since the distant invention of farming; it set in irreversible motion the great shift from a rural, agricultural world to the urban, industrial one in which most of humanity now lives; and it firmly established the modern pattern of continual, accelerating technological change that so completely defines our own restless age.",
   ],
   Q:[
    {t:'choice',a:'B',q:'Before the steam engine, most work relied on:',opts:['A) coal','B) muscles, wind and water','C) electricity','D) steam']},
    {t:'choice',a:'B',q:'The steam engine was made truly practical by:',opts:['A) a factory owner','B) James Watt','C) a railway company','D) the ancient Greeks']},
    {t:'choice',a:'C',q:'Steam power freed factories from having to be built beside:',opts:['A) coal mines','B) cities','C) rivers','D) railways']},
    {t:'choice',a:'B',q:'According to the passage, the wealth created by the steam age was:',opts:['A) shared equally','B) distributed very unevenly','C) very small','D) given to the workers']},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the effect of steam power on transport?'},
    {t:'text',a:'B',q:"Which paragraph (A–F) describes James Watt's improved design?"},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the negative social effects of the steam age?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) explains how steam power changed where factories could be built?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the lasting legacy of the steam engine?'},
    {t:'text',a:'piston',q:'In a steam engine, expanding steam pushes a ______.'},
    {t:'text',a:'anywhere',q:'Factories powered by coal could now be built ______.'},
    {t:'text',a:'railway|railways',q:'Fitted to a locomotive, the steam engine gave birth to the ______.'},
    {t:'text',a:'Revolution',q:'The steam engine launched the Industrial ______.'}
   ]},
  {title:'The Ethics of Animal Testing',
   paras:[
    "A   For well over a century, animals have been used in scientific research of many kinds, from testing the safety of new medicines and chemicals to studying the fundamental ways in which the living body works. The practice has always been controversial, and the long-running debate over whether it can really be justified has grown noticeably fiercer in recent decades as public concern for the welfare of animals has steadily increased. Few issues in all of science so directly and so painfully pit the interests and the health of human beings against the suffering and the very lives of other creatures, and it is exactly this that makes the question so genuinely hard to answer.",
    "B   Those who defend animal testing point, first and foremost, to its results. A great many of the medical advances that we now take completely for granted — vaccines against once-deadly diseases, antibiotics, insulin, and treatments for cancer and heart disease among a host of others — were developed with the essential help of experiments on animals, and could not, its supporters insist, have been developed in any other way at the time. Because animals, and mammals in particular, share so much of their basic biology with human beings, supporters argue, carefully testing a new treatment on them first is often the only way to be reasonably sure that it is both safe and effective before it is ever given to a human patient.",
    "C   Critics respond, with equal conviction, that the suffering deliberately inflicted on the animals is a serious moral wrong that no benefit can simply wash away. Many millions of animals — mice, rats, rabbits, dogs, monkeys and others — are used in research each and every year around the world, and a great many of them endure real pain, fear, distress and lifelong confinement in cages, before ultimately being killed. To knowingly cause such a vast amount of suffering to sentient creatures, opponents argue, is extremely difficult to justify on moral grounds, however genuinely useful the results of the experiments may turn out to be to us human beings. The animals, after all, never consented and gain nothing whatever in return.",
    "D   There are serious scientific objections to animal testing as well, quite apart from the moral ones. Animals, however similar to us, are simply not identical to human beings, and a drug or a chemical that appears perfectly safe in one species may turn out to be useless, or even harmful, in another; a substance harmless to a rat is not guaranteed to be harmless to a person, and the reverse is equally true. Some critics argue, on exactly these grounds, that results obtained from animals can therefore be positively misleading, occasionally with tragic consequences for the patients who follow, and that the huge resources currently poured into animal research would be far better spent on developing modern alternative methods that do not rely on animals at all.",
    "E   Such alternatives are, in fact, advancing very quickly, and are already changing the way that research is done. Scientists can now grow real human cells, and even small pieces of human tissue, in the laboratory, on which substances can be tested directly, and can build so-called 'organs-on-a-chip' that mimic the working of a living organ. At the same time, increasingly sophisticated computer models can predict, from a substance's chemistry alone, how it is likely to behave inside the human body. These newer methods, their advocates argue with growing confidence, are frequently cheaper, faster and — because they use human material rather than that of another species — often far more directly relevant to human beings than the traditional tests on animals ever were.",
    "F   Most countries now attempt to strike a careful balance on this difficult issue through regulation. Their laws typically require that animal testing be reduced to the minimum number of animals genuinely necessary, refined so as to cause the animals as little pain and distress as possible, and replaced altogether with non-animal alternatives wherever this can be done — a guiding principle widely known as the 'three Rs' (reduction, refinement and replacement). Whether this cautious compromise is a morally acceptable one, allowing valuable research to continue while limiting the suffering, or whether animal testing ought instead to be phased out and ended altogether, remains to this day one of the most genuinely difficult and divisive questions in the whole of modern science."
   ],
   Q:[
    {t:'choice',a:'YES',q:'Concern for animal welfare has increased over time.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Supporters claim animal testing has played no part in medical advances.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'A drug that is safe in one species is always safe in another.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Laboratory-grown human cells are one alternative to animal testing.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'All countries have now banned animal testing.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'The debate over animal testing has been fully resolved.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives the argument that animals share biology with humans?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) gives the moral objection based on animal suffering?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) gives examples of alternative methods to animal testing?'},
    {t:'text',a:'F',q:"Which paragraph (A–F) describes the 'three Rs' approach?"},
    {t:'text',a:'vaccines|antibiotics|vaccine',q:'Name one medical advance developed with the help of animal experiments.'},
    {t:'text',a:'millions|million',q:'Roughly how many animals are used in research each year?'},
    {t:'text',a:'human cells|cells|cells and tissues',q:'What can scientists now grow in the laboratory as an alternative?'},
    {t:'text',a:'Rs|R',q:'Reducing, refining and replacing is known as the three ______.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 320' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>New cars sold that were electric (%), 2015 vs 2020</text><line x1='60' y1='30' x2='60' y2='250' stroke='#333'/><line x1='60' y1='250' x2='510' y2='250' stroke='#333'/><g font-size='10' fill='#555'><text x='52' y='253' text-anchor='end'>0</text><text x='52' y='180' text-anchor='end'>10</text><text x='52' y='106' text-anchor='end'>20</text><text x='52' y='33' text-anchor='end'>30</text><line x1='60' y1='177' x2='500' y2='177' stroke='#eee'/><line x1='60' y1='103' x2='500' y2='103' stroke='#eee'/></g><g><rect x='85' y='235' width='30' height='15' fill='#1a73e8'/><rect x='119' y='140' width='30' height='110' fill='#e0a800'/><rect x='195' y='213' width='30' height='37' fill='#1a73e8'/><rect x='229' y='67' width='30' height='183' fill='#e0a800'/><rect x='305' y='243' width='30' height='7' fill='#1a73e8'/><rect x='339' y='191' width='30' height='59' fill='#e0a800'/><rect x='415' y='228' width='30' height='22' fill='#1a73e8'/><rect x='449' y='103' width='30' height='147' fill='#e0a800'/></g><g font-size='11' fill='#333' text-anchor='middle'><text x='117' y='264'>Country A</text><text x='227' y='264'>Country B</text><text x='337' y='264'>Country C</text><text x='447' y='264'>Country D</text></g><g font-size='11'><rect x='190' y='288' width='16' height='10' fill='#1a73e8'/><text x='212' y='297'>2015</text><rect x='300' y='288' width='16' height='10' fill='#e0a800'/><text x='322' y='297'>2020</text></g></svg>",
  task1:"The bar chart below shows the percentage of newly sold cars that were electric in four countries in 2015 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people think that advertising encourages people to buy things they do not really need. To what extent do you agree or disagree? Write at least 250 words."
 }
},

/* ===================== MOCK 10 ===================== */
{
 name:'Mock 10',
 blurb:'Homestay · Recycling scheme · Internet history + English language · Whales · Fast fashion',
 listen:[
  {title:'Student homestay accommodation',
   transcript:"Hello, I'm calling about arranging homestay accommodation for an international student. Of course. The standard package includes a private room and two meals a day, breakfast and dinner. The cost is one hundred and fourteen pounds... sorry, one hundred and forty per week. The student would have their own room, but the bathroom is usually shared. Most of our host families live within thirty minutes of the college by bus, not train. We ask students to give two weeks' notice — not one — if they wish to leave. There is also a one-time placement fee of sixteen pounds... sorry, sixty. Wifi is included in all our homes. The placement can begin from the second of September.",
   Q:[
    {t:'text',a:'two|2',q:'The package includes a private room and ______ meals a day.'},
    {t:'text',a:'dinner',q:'Meals provided: breakfast and ______.'},
    {t:'text',a:'140|one hundred and forty',q:'Cost: £______ per week.'},
    {t:'text',a:'bathroom',q:'The ______ is usually shared.'},
    {t:'text',a:'thirty|30',q:'Families live within ______ minutes of the college.'},
    {t:'text',a:'bus',q:'Travel to college is by ______.'},
    {t:'text',a:'two|2',q:"Students must give ______ weeks' notice to leave."},
    {t:'text',a:'sixty|60',q:'One-time placement fee: £______.'},
    {t:'text',a:'wifi|wi-fi|internet',q:'______ is included in all homes.'},
    {t:'choice',a:'B',q:'The placement can begin from:',opts:['A) 2 August','B) 2 September','C) 2 October','D) today']}
   ]},
  {title:'Radio: new recycling scheme',
   transcript:"And now, some news about changes to our local recycling scheme. From the first of March, households will be given three new bins. The green bin is for garden waste, the blue bin is for paper and cardboard, and the brown bin is for food waste. General rubbish will still go in the usual black bin. Recycling will be collected every Thursday — sorry, every Tuesday — and general rubbish every Friday. Residents are reminded to rinse containers before recycling them. Those who need extra bins can request them free of charge from the council website, not the town hall. The council hopes the new scheme will double the amount of waste that is recycled.",
   Q:[
    {t:'text',a:'first|1st|1',q:'The new scheme begins on the ______ of March.'},
    {t:'text',a:'three|3',q:'Households will get ______ new bins.'},
    {t:'text',a:'garden',q:'The green bin is for ______ waste.'},
    {t:'text',a:'cardboard',q:'The blue bin is for paper and ______.'},
    {t:'text',a:'food',q:'The brown bin is for ______ waste.'},
    {t:'text',a:'bin',q:'General rubbish goes in the black ______.'},
    {t:'text',a:'tuesday',q:'Recycling is collected every ______.'},
    {t:'text',a:'rinse',q:'Residents should ______ containers before recycling.'},
    {t:'text',a:'website',q:'Extra bins can be requested from the council ______.'},
    {t:'choice',a:'B',q:'The council hopes the scheme will:',opts:['A) reduce costs','B) double recycling','C) cut collections','D) ban plastic']}
   ]},
  {title:'Geography project on a river',
   transcript:"So, our geography project is on the local river. What should we investigate? I think we should look at water quality along its length. How will we measure it? We can test the water at different points for pollution. How many points? Let's take samples at three locations... actually five, from the source to the sea. And what causes the pollution? Mainly farm chemicals and waste from the factory upstream. We should include a map showing the sample points. How will we present the data? Graphs would show the changes clearly. When do we hand it in? The report is due on the twelfth of December... no, the tenth. Let's do the fieldwork this Sunday — sorry, Saturday.",
   Q:[
    {t:'text',a:'river',q:'The project is on the local ______.'},
    {t:'text',a:'quality',q:'They will investigate water ______.'},
    {t:'text',a:'pollution',q:'They will test the water for ______.'},
    {t:'text',a:'five|5',q:'They will take samples at ______ locations.'},
    {t:'text',a:'waste',q:'Pollution comes from farm chemicals and factory ______.'},
    {t:'text',a:'map',q:'They will include a ______ showing the sample points.'},
    {t:'text',a:'graphs|graph',q:'They will present the data using ______.'},
    {t:'text',a:'tenth|10th|10',q:'The report is due on the ______ of December.'},
    {t:'text',a:'saturday',q:'They will do the fieldwork this ______.'},
    {t:'choice',a:'A',q:'Samples will be taken from:',opts:['A) the source to the sea','B) one point','C) the factory only','D) the farm']}
   ]},
  {title:'Lecture: the history of the internet',
   transcript:"Today we will look at the history of the internet. The internet has its origins in the 1960s, when researchers in the United States developed a way to connect computers so they could share information, originally for military and academic purposes. A major breakthrough came in 1969, when the first message was sent between two computers. However, the internet as we know it only began to take shape in 1979 — sorry, 1989 — when a British scientist, Tim Berners-Lee, invented the World Wide Web, making information easy to access through web pages and links. Throughout the 1990s, the internet spread rapidly into homes and businesses. The arrival of smartphones then made it possible to be online anywhere, at any time.",
   Q:[
    {t:'text',a:'1960s|sixties',q:'The internet has its origins in the ______.'},
    {t:'text',a:'academic',q:'It was originally developed for military and ______ purposes.'},
    {t:'text',a:'message',q:'In 1969, the first ______ was sent between two computers.'},
    {t:'text',a:'1989',q:'The World Wide Web was invented in ______.'},
    {t:'text',a:'lee',q:'The Web was invented by Tim Berners-______.'},
    {t:'text',a:'pages|page',q:'The Web made information easy to access through web ______.'},
    {t:'text',a:'businesses|business',q:'In the 1990s, the internet spread into homes and ______.'},
    {t:'text',a:'smartphones|smartphone',q:'______ made it possible to be online anywhere.'},
    {t:'choice',a:'B',q:'The World Wide Web was invented by a scientist from:',opts:['A) the US','B) Britain','C) Japan','D) Germany']},
    {t:'choice',a:'B',q:'The first message between computers was sent in:',opts:['A) 1960','B) 1969','C) 1989','D) 1990']}
   ]}
 ],
 read:[
  {title:'The Origins of Music',
   paras:[
    "List of Headings —  i) Older than language?   ii) Music in every culture   iii) The oldest instruments   iv) Why did music evolve?   v) Music and the brain   vi) A kind of social glue   vii) Writing music down and recording it   viii) The rise of the professional musician",
    "A   Music is found in every human society that has ever been studied, from the largest and most modern cities to the smallest and most remote villages. No culture, however isolated it may be, and however different from our own, has ever been discovered that does not make music of some kind. This striking universality strongly suggests that music is not a mere invention, an accident of history, or an idle luxury that some peoples happen to enjoy, but rather something very deeply rooted in human nature itself — a genuine puzzle that has long fascinated scientists, who continue to ask why our species should be quite so thoroughly musical.",
    "B   Just how old music is, no one knows for certain, and perhaps no one ever will. Musical instruments do not survive the passing of the ages nearly as well as durable stone tools do, and the very oldest music, sung or clapped, would have left no trace at all. Nonetheless, flutes carefully carved from hollow bird bone and from mammoth ivory, discovered in caves in Europe, have been found to be at least forty thousand years old. Since these ancient flutes are already surprisingly sophisticated, with finger-holes carefully placed to play a scale, the art of music itself must be very much older still — quite possibly far older than any physical trace of it that happens to have survived.",
    "C   Some researchers make an even bolder and more startling claim: that music actually came before language in the history of our species. They point out that human babies respond to melody and rhythm long before they can understand any words at all, calming and swaying to a tune, and that mothers in every culture on Earth instinctively soothe their infants with soft, wordless song. Perhaps, these researchers suggest, our distant ancestors first communicated through a kind of musical 'proto-language' of expressive, emotional sounds — rises and falls of pitch, rhythms and tones — and this musical way of communicating slowly paved the way for the development of true speech and language itself.",
    "D   But why should music have evolved at all, if it does not obviously help us to find food or to escape danger? One leading idea is that music evolved above all because it strengthened the bonds that hold a group of people together. Singing, dancing, drumming and playing music together all require a number of people to coordinate their actions closely and to cooperate in time with one another, and doing so has been shown to release chemicals in the brain that create powerful feelings of trust, unity and closeness between them. A group whose members regularly made music together, on this view, would have become a more united, more cooperative and therefore a more successful group, more likely to survive hard times and to raise its young than a group that did not.",
    "E   Music also has a powerful and immediate effect on the individual human mind and body. It can lift or calm our mood in an instant, and brain scans show that simply listening to music we love activates the very same reward centres deep in the brain that are involved in other great pleasures such as good food, releasing the same feel-good chemicals. This is precisely why a single piece of music can move a listener to tears one moment and fill them with soaring joy the next, seemingly without any words at all. It is also why music is now increasingly and successfully used in therapy — to comfort the sick, to calm the anxious, and even to help patients recovering from strokes to move and to speak once more.",
    "F   For almost all of human history, music existed only in the fleeting moment of its performance; once a song was sung or a tune was played, it was gone for ever, surviving only in the memories of those who had happened to hear it. The invention, first, of ways to write music down in notation, and then, very much later, of ways to record actual sound, changed all of this for ever, allowing a single performance to be captured, preserved and shared across great stretches of time and distance, so that we can today hear the voices of singers long since dead. As a result, almost all of the music ever recorded is now available to almost anyone, instantly, at the mere touch of a button — an astonishing abundance that would have amazed every previous generation of humanity."
   ],
   Q:[
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vii|7',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'Music has been found in every human society studied.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The oldest known instruments are simple and crude.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Babies respond to words before they respond to melody.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Making music together can create feelings of trust.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'ivory',q:'The oldest known flutes were carved from bird bone and mammoth ______.'},
    {t:'text',a:'language',q:'Some researchers claim that music came before ______.'},
    {t:'text',a:'performance',q:'For most of history, music existed only during a ______.'}
   ]},
  {title:'The History of the Skyscraper',
   paras:[
    "A   The skyscraper is one of the defining images of the modern city, its glittering towers a symbol of ambition and wealth. Yet for almost all of human history, buildings simply could not rise more than a few storeys high, and the tallest structures were cathedrals and monuments rather than places to live and work. Two great problems stood squarely in the way of building tall. First, the thick stone or brick walls of a tall building had to bear all the weight of everything above them, which meant that they had to be made impossibly, uselessly thick at the base — the walls of one famous tall office building of the period were nearly two metres thick at the bottom. And second, there was no practical way for people to reach the upper floors at all, except by climbing flight after weary flight of stairs.",
    "B   The first of these problems was solved by an entirely new way of building. Instead of relying on thick, heavy load-bearing walls to hold a building up, engineers began to construct a strong internal frame, or skeleton, made first of iron and then, more strongly still, of steel. This rigid internal frame carried all the weight of the building — the floors, the roof and even the walls themselves — so that the outer walls no longer had to support anything at all. Freed from their old job, the outer walls could become merely a light covering, or 'curtain', of stone, brick or glass hung upon the frame, rather than a massive stone support, and this at last allowed buildings to soar upward to heights never before imagined.",
    "C   The second problem — how to reach the top — was solved by the elevator, or lift. A very tall building is quite useless if no one is willing to climb dozens of flights of stairs to reach the upper floors, and hardly anyone would. Simple hoists already existed, but people were, quite reasonably, terrified of them, for if the cable broke the platform would plunge straight to the bottom. The key breakthrough came from a safety device, invented by the American Elisha Otis in the 1850s, that automatically gripped the guide rails and stopped a lift from falling if its cable should ever break. Otis demonstrated it dramatically in public, standing on a lift and ordering its cable to be cut. Only once people could genuinely trust that lifts were safe could truly tall buildings at last become practical and desirable places in which to live and work.",
    "D   With both of these key inventions at last in place, the first true skyscrapers rose in the booming American cities of Chicago and New York in the late nineteenth century. There was a powerful economic reason why they appeared there and then. Land in the crowded centres of these rapidly growing cities had become extraordinarily expensive, and building tall allowed a developer to fit far more valuable floor space — more offices, more shops and more apartments — onto a single small and costly plot of ground than a low, sprawling building ever could. Height, in short, meant money. And so the great race between rival cities and companies to build ever higher and more spectacular towers had begun, and it has scarcely paused since.",
    "E   Building very tall brings its own formidable engineering challenges, quite apart from the problem of holding the great structure up. A skyscraper must resist not only the crushing force of its own enormous weight pressing down, but also the powerful sideways force of the wind, which grows noticeably stronger the higher one goes, and which can, in a gale, make even a massive tower sway visibly back and forth at the top, alarming those inside. To cope with all this, modern engineers use cleverly shaped designs that let the wind slip smoothly past, immensely deep and strong foundations anchored far down into solid bedrock, and sometimes huge weights near the top that swing to cancel out the sway, all in order to keep tall buildings stable, safe and their occupants comfortable.",
    "F   Today, skyscrapers over eight hundred metres tall — more than half a mile high — already exist, and cities all around the world compete fiercely with one another for the sheer prestige of building the tallest of all. Critics question whether such extreme buildings are really worth their vast cost and the enormous amounts of energy and material they consume, seeing them as monuments to little more than pride. But their supporters argue that, as the world's population continues to grow and usable land in the great cities runs ever shorter and dearer, building upwards is ultimately the only sustainable way for crowded cities to expand and to house their people, and that the skyscraper is therefore here to stay for good."
   ],
   Q:[
    {t:'choice',a:'B',q:'For most of history, tall buildings were limited by wall thickness and:',opts:['A) cost','B) the lack of a way to reach upper floors','C) poor materials','D) the weather']},
    {t:'choice',a:'B',q:'Skyscrapers became possible when walls were replaced as supports by:',opts:['A) glass','B) a steel frame','C) thicker stone','D) wood']},
    {t:'choice',a:'B',q:"Elisha Otis's key invention was:",opts:['A) the steel frame','B) a lift safety device','C) the electric motor','D) reinforced concrete']},
    {t:'choice',a:'B',q:'The first true skyscrapers were built in:',opts:['A) London and Paris','B) Chicago and New York','C) Tokyo','D) Dubai']},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the challenge posed by the wind?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) explains why cities built upwards?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the invention that made upper floors accessible?'},
    {t:'text',a:'A',q:'Which paragraph (A–F) describes the two obstacles to building tall?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the use of a steel skeleton?'},
    {t:'text',a:'frame|skeleton',q:'In a skyscraper, a strong internal ______ carries the weight.'},
    {t:'text',a:'falling|fall',q:"Otis's device stopped a lift from ______ if the cable broke."},
    {t:'text',a:'wind',q:'Tall buildings must resist their weight and the force of the ______.'},
    {t:'text',a:'expand|grow',q:'Supporters say building upwards is the only sustainable way for cities to ______.'}
   ]},
  {title:'Children and Screens',
   paras:[
    "A   Few questions worry parents today more than the question of how much time their children should be allowed to spend looking at screens. Smartphones, tablets, computers and televisions are now a constant and almost inescapable presence in the lives of children, even very young ones, and strong opinions about their effects range all the way from deep alarm at one extreme to bright enthusiasm at the other. Some fear that screens are quietly harming a whole generation; others celebrate the remarkable opportunities they bring. The truth, as is so often the case with such things, turns out to be considerably more complicated, and a good deal more interesting, than either of these confident extremes would suggest.",
    "B   Those who worry about screens point to a number of real and serious concerns. Excessive screen time, they argue, can crowd out and steal time from the other activities that a growing child badly needs: sleep, physical exercise, and unstructured, face-to-face play with other children, all of which are genuinely vital for healthy physical, social and emotional development. Some studies have also linked very heavy screen use to poorer concentration and, in older children and teenagers, to higher levels of anxiety and low mood — although, crucially, whether the screens are actually the cause of these problems, or merely a symptom of some deeper unhappiness, is extremely hard to prove one way or the other.",
    "C   Others prefer to stress the very real benefits that screens can bring. Used well and wisely, they argue, screens can be extraordinarily powerful tools for learning, giving children instant access to a wealth of information, to clever educational games, and to creative software for drawing, making music and writing that simply were not available to any earlier generation of children. During the long periods when schools have been forced to close, most recently during the pandemic, it was screens that allowed millions of children to keep learning from home, and to stay cheerfully in touch with their friends, their teachers and their more distant relatives when they could not possibly meet them in person.",
    "D   Increasingly, experts on child development argue that what really matters is not simply the sheer quantity of screen time, measured out in minutes and hours, but its quality — what the child is actually doing on the screen. An hour spent slumped passively watching a stream of low-quality, mindless videos, they suggest, is a completely different thing from an hour spent actively creating a picture, learning a language, solving puzzles, or video-calling and talking to a distant grandparent. The content of what is on the screen, and in particular whether a caring adult is involved and talking with the child about it, may in the end matter a very great deal more than the exact number of minutes showing on the clock.",
    "E   The context in which screens are used is important too, and can change everything. The very same device can be either harmful or genuinely helpful, depending entirely on how, when and with whom it is used. Screens used at mealtimes, when families might otherwise be talking together, or in the hour just before bed, when their bright light disturbs the sleep that follows, tend to cause the most problems of all. By contrast, a screen used together with a parent — one who can sit alongside the child, talk about what they are both seeing, answer their questions and turn it into a shared activity — can be not merely harmless but positively beneficial, both to the child's learning and to the bond between parent and child.",
    "F   Most specialists, therefore, now advise parents to take a balanced, sensible approach, rather than either a rigid total ban on one hand or a complete free-for-all on the other. They typically recommend setting reasonable and consistent limits on screen time, keeping children's bedrooms and family mealtimes deliberately screen-free, choosing good-quality and age-appropriate content rather than simply whatever happens to be on, and, above all else, making quite sure that screens never come to replace the sleep, the physical exercise and the real-world, face-to-face play that all children truly need. The goal, they stress, is not to eliminate screens altogether, which is neither possible nor even desirable in the modern world, but simply to keep them firmly in their proper place.",
   ],
   Q:[
    {t:'choice',a:'YES',q:"Opinions about children's screen use vary widely.",opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'It has been clearly proved that screens cause anxiety in older children.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Screens can be useful tools for learning.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Experts believe the quantity of screen time is all that matters.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Using a screen together with a parent can be beneficial.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most specialists recommend banning screens completely.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) raises concerns about sleep and play being crowded out?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) argues that quality matters more than quantity?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the benefits of screens for learning?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) gives practical advice for a balanced approach?'},
    {t:'text',a:'sleep|exercise|play',q:'Name one activity that too much screen time can crowd out.'},
    {t:'text',a:'quality',q:'According to experts, what matters more than the quantity of screen time?'},
    {t:'text',a:'bed|bedtime',q:'Screens used just before ______ tend to cause the most problems.'},
    {t:'text',a:'free',q:'Specialists advise keeping bedrooms and mealtimes screen-______.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 320' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>Mobile vs landline subscriptions (millions), 2000–2020</text><line x1='60' y1='30' x2='60' y2='250' stroke='#333'/><line x1='60' y1='250' x2='510' y2='250' stroke='#333'/><g font-size='10' fill='#555'><text x='52' y='253' text-anchor='end'>0</text><text x='52' y='198' text-anchor='end'>20</text><text x='52' y='143' text-anchor='end'>40</text><text x='52' y='88' text-anchor='end'>60</text><text x='52' y='33' text-anchor='end'>80</text><line x1='60' y1='195' x2='500' y2='195' stroke='#eee'/><line x1='60' y1='140' x2='500' y2='140' stroke='#eee'/><line x1='60' y1='85' x2='500' y2='85' stroke='#eee'/><text x='60' y='265' text-anchor='middle'>2000</text><text x='170' y='265' text-anchor='middle'>2005</text><text x='280' y='265' text-anchor='middle'>2010</text><text x='390' y='265' text-anchor='middle'>2015</text><text x='500' y='265' text-anchor='middle'>2020</text></g><polyline fill='none' stroke='#1a73e8' stroke-width='2.5' points='60,223 170,168 280,99 390,58 500,36'/><polyline fill='none' stroke='#e0a800' stroke-width='2.5' points='60,140 170,135 280,154 390,181 500,209'/><g font-size='11'><rect x='185' y='288' width='16' height='4' fill='#1a73e8'/><text x='207' y='293'>Mobile</text><rect x='285' y='288' width='16' height='4' fill='#e0a800'/><text x='307' y='293'>Landline</text></g></svg>",
  task1:"The line graph below shows the number of mobile phone and landline telephone subscriptions (in millions) in a country between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"In many countries, the amount of waste people produce is increasing. Why is this happening, and what measures can be taken to reduce it? Write at least 250 words."
 }
},

/* ===================== MOCK 11 ===================== */
{
 name:'Mock 11',
 blurb:'Photography class · Art gallery · Architecture + Roman engineering · Happiness · Plastic',
 listen:[
  {title:'Evening photography course',
   transcript:"Thank you for your interest in our evening photography course. The beginners' course runs for four weeks — sorry, six — meeting every Thursday evening from six thirty to eight thirty. The fee is one hundred and thirteen pounds... sorry, one hundred and ten. You will need to bring your own camera, although a smartphone is acceptable for beginners. The classes are held in Studio 3 at the community arts centre, not Studio 2. There is a practical photo walk in week four. At the end of the course, students' work is displayed in a small exhibition. Class sizes are limited to twelve... no, ten people. To secure your place, a deposit of thirty pounds is required, and the next course starts on the seventh of October.",
   Q:[
    {t:'text',a:'six|6',q:'The course runs for ______ weeks.'},
    {t:'text',a:'thursday',q:'Classes meet every ______ evening.'},
    {t:'text',a:'eight thirty|8:30|8.30|830',q:'Classes run from six thirty to ______.'},
    {t:'text',a:'110|one hundred and ten',q:'The fee is £______.'},
    {t:'text',a:'camera',q:'Students must bring their own ______.'},
    {t:'text',a:'three|3',q:'Classes are held in Studio ______.'},
    {t:'text',a:'walk',q:'There is a practical photo ______ in week four.'},
    {t:'text',a:'exhibition',q:"Students' work is displayed in an ______."},
    {t:'text',a:'ten|10',q:'Class size is limited to ______ people.'},
    {t:'choice',a:'B',q:'To secure a place you must pay:',opts:['A) the full fee','B) a deposit','C) nothing','D) for a camera']}
   ]},
  {title:'Art gallery exhibition tour',
   transcript:"Welcome to the City Art Gallery and to our special exhibition on Impressionism. The exhibition brings together more than eighteen paintings... more than eighty, in fact, many on loan from museums abroad. We'll begin in the first room, which introduces the movement and its origins in nineteenth-century France. Please do not use flash photography, as it can damage the artwork. Audio guides are available at the desk for two pounds — sorry, three. The exhibition shop, selling prints and postcards, is by the exit, not the entrance. The exhibition closes at five thirty, and the last entry is at half past four. There is also a cafe on the lower floor.",
   Q:[
    {t:'text',a:'impressionism',q:'The exhibition is about ______.'},
    {t:'text',a:'eighty|80',q:'It brings together more than ______ paintings.'},
    {t:'text',a:'loan',q:'Many paintings are on ______ from museums abroad.'},
    {t:'text',a:'france',q:'The movement began in nineteenth-century ______.'},
    {t:'text',a:'flash',q:'Visitors must not use ______ photography.'},
    {t:'text',a:'three|3',q:'Audio guides cost £______.'},
    {t:'text',a:'postcards|postcard',q:'The shop sells prints and ______.'},
    {t:'text',a:'five thirty|5:30|5.30|530',q:'The exhibition closes at ______.'},
    {t:'text',a:'half past four|4:30|4.30|430',q:'Last entry is at ______.'},
    {t:'choice',a:'B',q:'The cafe is located:',opts:['A) by the entrance','B) on the lower floor','C) next to the shop','D) outside']}
   ]},
  {title:'Tutorial: a tourism dissertation',
   transcript:"You wanted to discuss your tourism dissertation? Yes, I want to study the impact of tourism on a small coastal town. What's your main question? Whether tourism has helped or harmed the local community. How will you gather information? I'll interview local business owners and residents. Try to get a balanced range of views. And any statistics? Yes, I'll use visitor numbers from the tourist office, not the town council. How many people will you interview? I'm planning on thirty... actually twenty. Remember to get their consent. How long should it be? Around ten thousand... sorry, twelve thousand words. And the deadline? The final draft is due in June, but send me a plan by the end of March — no, April.",
   Q:[
    {t:'text',a:'tourism',q:'The dissertation is about the impact of ______.'},
    {t:'text',a:'coastal',q:'The study focuses on a small ______ town.'},
    {t:'text',a:'harmed|harm',q:'The main question is whether tourism has helped or ______ the community.'},
    {t:'text',a:'residents|resident',q:'She will interview local business owners and ______.'},
    {t:'text',a:'office',q:'She will use visitor numbers from the tourist ______.'},
    {t:'text',a:'twenty|20',q:'She plans to interview ______ people.'},
    {t:'text',a:'consent',q:"She must get the participants' ______."},
    {t:'text',a:'twelve|12',q:'Length: around ______ thousand words.'},
    {t:'text',a:'april',q:'A plan is due by the end of ______.'},
    {t:'choice',a:'B',q:'The tutor advises her to get:',opts:['A) more statistics','B) a balanced range of views','C) fewer interviews','D) a shorter topic']}
   ]},
  {title:'Lecture: architecture through history',
   transcript:"Today's lecture is about how architecture reflects the societies that create it. Throughout history, the grandest buildings have often been those devoted to religion or power. The ancient Egyptians built enormous pyramids as tombs, while the Greeks constructed elegant temples supported by columns. The Romans were brilliant engineers, famous for inventing the arch — not the dome, the arch — which allowed them to build strong bridges and vast structures like the Colosseum. In the Middle Ages, European builders created soaring cathedrals with pointed arches and huge stained-glass windows. Much later, the invention of steel and the lift made it possible to build upwards, giving rise to the modern skyscraper. Today, architects increasingly focus on sustainability, designing energy-efficient buildings.",
   Q:[
    {t:'text',a:'power',q:'The grandest buildings were often devoted to religion or ______.'},
    {t:'text',a:'tombs|tomb',q:'The Egyptians built pyramids as ______.'},
    {t:'text',a:'columns|column',q:'The Greeks built temples supported by ______.'},
    {t:'text',a:'arch',q:'The Romans are famous for inventing the ______.'},
    {t:'text',a:'colosseum',q:'The Romans built vast structures like the ______.'},
    {t:'text',a:'glass',q:'Medieval cathedrals had pointed arches and stained-______ windows.'},
    {t:'text',a:'lift|elevator',q:'Steel and the ______ made it possible to build upwards.'},
    {t:'text',a:'sustainability',q:'Modern architects increasingly focus on ______.'},
    {t:'choice',a:'B',q:'The arch allowed the Romans to build strong:',opts:['A) tombs','B) bridges','C) columns','D) windows']},
    {t:'choice',a:'B',q:'Sustainable buildings are designed to use:',opts:['A) more power','B) less power','C) more steel','D) no windows']}
   ]}
 ],
 read:[
  {title:'The Life Cycle of Stars',
   paras:[
    "List of Headings —  i) Born in a cloud   ii) A long, stable middle age   iii) The gentle death of a small star   iv) The violent death of a giant   v) Recycled into new stars   vi) What a star is and how it shines   vii) The colours of the stars   viii) Measuring the distance to a star",
    "A   A star is an enormous ball of extremely hot gas, made mostly of hydrogen, the simplest and most abundant element in the universe, and held together in a great sphere by the crushing force of its own gravity. A star shines because, deep down in its core, where the pressure and temperature are almost unimaginably high, that gravity squeezes hydrogen atoms so hard that they fuse together to form the heavier element helium, in a process that releases colossal amounts of energy. It is this nuclear fusion, going on ceaselessly in the heart of every star, that produces the light and heat by which the stars, including our own Sun, pour their energy out across the emptiness of space.",
    "B   Stars are born in vast, cold clouds of gas and dust, drifting in space, that astronomers call nebulae. Where such a cloud happens to be dense enough, the force of gravity slowly begins to pull the scattered material together into a spinning clump, and as this clump shrinks under its own weight it grows hotter and hotter, and denser and denser, at its centre. Finally, when the very centre becomes hot and dense enough for nuclear fusion to begin, the process ignites, a brilliant new star 'switches on', and it starts to shine steadily out into the darkness — a slow birth that may take many millions of years from beginning to end.",
    "C   A star then spends the overwhelming majority of its long life in a single, stable phase, quietly and steadily fusing hydrogen into helium in its core and shining with a remarkably constant brightness all the while. Our own Sun is in exactly this comfortable middle phase now, and has been for some four and a half billion years, and it will remain so for billions of years yet to come. Throughout this long, stable middle age, the star holds itself in a delicate and beautifully self-correcting balance: the relentless inward pull of its own gravity, forever trying to crush it smaller, is exactly matched, moment by moment, by the outward push of the energy pouring out from the fusion in its core.",
    "D   Eventually, after billions of years, the hydrogen fuel in the core begins to run out, and when it does, the star's ultimate fate depends above all on its size. A relatively small and ordinary star, like our own Sun, first swells up enormously into a huge, cool, reddish star known as a 'red giant', large enough to swallow the innermost planets. Then, more gently, it sheds its bloated outer layers of gas into space, casting them off like great smoke rings, and leaves behind only its small, incredibly dense, slowly cooling core — a dying ember known as a white dwarf, which will quietly fade away over countless ages.",
    "E   A truly massive star, many times heavier than the Sun, dies in a far more sudden and dramatic fashion. When its nuclear fuel is finally spent, there is nothing left to hold it up against gravity, and its enormous core collapses in upon itself in a fraction of a second. This triggers a titanic explosion, called a supernova, in which the outer parts of the star are blasted apart with such violence that, for a few weeks, the single dying star can briefly outshine an entire galaxy of a hundred billion ordinary stars. What remains behind at the very centre may be an unbelievably dense neutron star or, if the original star was massive enough, a black hole, from which not even light itself can escape.",
    "F   These stellar deaths, however, are not merely endings; they are also beginnings. The explosion of a massive star scatters far out into space the heavier chemical elements that were forged deep inside it during its long life and its violent death — the carbon, the oxygen, the iron and all the other elements from which planets, and rocks, and living things like ourselves are ultimately made. Almost every atom in your body heavier than hydrogen was once made inside a star. In a very real and literal sense, then, we are all made of the ashes of long-dead stars, and this scattered material drifts on through space until, one distant day, it gathers into a new cloud and forms new stars and new worlds, in an endless cosmic cycle of death and rebirth."
   ],
   Q:[
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'Stars shine because of nuclear fusion in their cores.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Stars are born in dense clouds of gas and dust.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The Sun will end its life as a supernova.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The heavier chemical elements were formed inside stars.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'helium',q:"In a star's core, hydrogen is fused into ______."},
    {t:'text',a:'nebulae|nebula|nebulas',q:'Stars are born in clouds of gas and dust called ______.'},
    {t:'text',a:'black hole|blackhole',q:'A massive star may end as a neutron star or a ______.'}
   ]},
  {title:'How Refrigeration Changed the World',
   paras:[
    "A   It is easy, today, to take the humble refrigerator entirely for granted. Yet before it existed, keeping food cold — and therefore keeping it safe to eat — was a constant and often losing struggle. For most of human history, fresh food spoiled quickly, especially in warm weather, and the only ways of preserving it were to salt it, dry it, smoke it or pickle it in vinegar. These ancient methods all worked after a fashion, but they drastically changed the taste and texture of the food, and even then they only partly slowed its decay rather than stopping it altogether. The simple ability to keep food reliably cold has, quietly and without much fuss, transformed human life more profoundly than we usually realise.",
    "B   For a long time, the only cold available to people was whatever nature happened to provide. In cold climates, people would cut great blocks of ice from frozen lakes and rivers in the depths of winter, and store them, carefully packed in sawdust to slow their melting, in specially built 'ice houses' so that they would last right through into the following summer. A whole and surprisingly large industry grew up around the harvesting, storing and shipping of this natural ice, which was carried great distances in insulated ships. But it depended entirely on the winter weather, and, however far the ice was carried, it could never reliably reach the hot countries that needed cooling most of all.",
    "C   The great breakthrough was mechanical refrigeration, developed and gradually perfected during the nineteenth century. It works on a simple and rather beautiful physical principle: whenever a liquid evaporates and turns into a gas, it absorbs heat from its immediate surroundings, making them colder — which is the very same reason that sweat cools the skin as it dries. By pumping a special fluid, called a refrigerant, round and round a closed loop of pipes, and forcing it to evaporate in one place and then condense back into a liquid in another, a machine can continuously move heat out of an enclosed space, such as the inside of a cabinet, and dump it outside, keeping that space cold indefinitely for as long as it has power.",
    "D   The first refrigerators were not the small white boxes of the kitchen but huge industrial machines, used to cool warehouses and breweries and, above all, to preserve meat. This last use had enormous consequences for the whole world. For the very first time, meat could be frozen solid and shipped in refrigerated holds right across the oceans without rotting on the way, allowing distant countries such as Australia, New Zealand and Argentina, with their vast grasslands, to sell their plentiful beef and lamb to the crowded, hungry cities of far-off Europe. Whole national economies were built up and reshaped by this new long-distance trade in refrigerated meat, and the map of world food was quietly redrawn by the cold.",
    "E   The smaller domestic refrigerator arrived in ordinary homes during the twentieth century, and it changed everyday life profoundly, even though we now scarcely think about it. Families could at last store fresh food — milk, meat, vegetables and leftovers — safely for days on end, rather than having to buy and cook it all on the same day; they could shop far less often; and they could enjoy a far more varied and interesting diet, including fresh foods brought from the other side of the world in refrigerated ships and lorries. Just as importantly, keeping food reliably cold made it far safer to eat, and the many diseases once caused by spoiled or contaminated food declined sharply wherever the refrigerator arrived.",
    "F   Refrigeration remains absolutely vital today in a great many ways that we rarely stop to notice. It keeps life-saving medicines and vaccines safe and effective on their long journey from factory to patient; it freezes food for months of long-term storage, feeding cities through every season; and it quietly cools the vast banks of computer servers, which would otherwise overheat and fail, that run the entire internet. Yet all of this comes at a real cost: refrigeration consumes huge amounts of electrical energy across the world, and some of the particular gases once widely used as refrigerants turned out to be seriously harmful to the environment, damaging the protective ozone layer high above us — a sharp reminder that even the most useful and benevolent of inventions can bring unexpected new problems of their own.",
   ],
   Q:[
    {t:'choice',a:'B',q:'Before refrigeration, food was preserved by methods such as:',opts:['A) freezing','B) salting and drying','C) canning','D) vacuum-packing']},
    {t:'choice',a:'B',q:'Natural ice was stored through the summer in:',opts:['A) cellars','B) ice houses','C) caves','D) barns']},
    {t:'choice',a:'B',q:'Mechanical refrigeration works because an evaporating liquid:',opts:['A) releases heat','B) absorbs heat','C) freezes instantly','D) expands']},
    {t:'choice',a:'C',q:'The first refrigerators were used above all to preserve:',opts:['A) vegetables','B) milk','C) meat','D) fruit']},
    {t:'text',a:'C',q:'Which paragraph (A–F) explains how mechanical refrigeration works?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the effect on home life and diet?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the trade in natural ice?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes modern and hidden uses of refrigeration?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) explains how refrigeration reshaped national economies?'},
    {t:'text',a:'taste',q:'Before refrigeration, preserving food often changed its ______.'},
    {t:'text',a:'sawdust',q:'Natural ice was packed in ______ to keep it from melting.'},
    {t:'text',a:'beef|meat',q:'Refrigerated ships let countries like Australia sell their ______.'},
    {t:'text',a:'environment',q:'Some gases once used in refrigeration harmed the ______.'}
   ]},
  {title:'Is Multitasking a Myth?',
   paras:[
    "A   In our busy, connected, endlessly demanding modern world, the ability to multitask — to do several different things at once — is very often prized and admired as a genuinely valuable skill. People proudly boast of answering their emails during meetings, or of checking their phones and messages while studying or working, as though this were a clear mark of efficiency and competence. Yet a large and steadily growing body of scientific research now strongly suggests that, at least for genuinely demanding mental tasks, multitasking may be largely an illusion — that we are not really doing two things at once at all, and that we pay a surprisingly heavy price for pretending that we can.",
    "B   The fundamental problem, scientists say, is that the human brain simply cannot truly focus on two genuinely demanding tasks at exactly the same moment. What actually happens when we believe we are 'multitasking' is that the brain is really switching rapidly back and forth between the two tasks, attending fully to first one and then the other, over and over again. And each of these tiny switches takes a small but real amount of time and mental effort to complete — the brain has to stop, disengage from the one, and re-engage with the other. These small costs quickly add up, so that trying to do two demanding things at once usually takes noticeably longer, and produces distinctly more errors, than simply doing them one after the other would have done.",
    "C   Studies have measured this hidden cost, over and over again, in many different ways. In carefully controlled experiments, people who are asked to switch back and forth between tasks reliably perform noticeably worse — more slowly and less accurately — than people who are allowed to concentrate on just one task at a time. Perhaps more surprising still, the people who confidently consider themselves to be excellent multitaskers, and who multitask the most in their daily lives, very often turn out, when they are actually tested in the laboratory, to be worse at it than everyone else, not better. Their confidence, it seems, is badly misplaced, and heavy multitasking may itself gradually weaken the very skills it depends upon.",
    "D   There is a deeper cost too, beyond mere slowness and error. Constantly switching our attention from one thing to another appears to make it much harder to think deeply, carefully or creatively about anything at all, since genuinely good and original ideas usually require a long, sustained, undistracted focus, in which the mind can settle down and explore freely. Some researchers now seriously worry that a whole modern culture of constant interruption — one in which we are forever half-attending to several different things at once, glancing endlessly between screens and notifications — may be quietly and gradually eroding our very capacity for the deep, unbroken concentration on which our best thinking has always depended.",
    "E   Not all multitasking, however, is harmful or impossible — and this is an important qualification. We can quite easily do a simple, automatic, well-practised task, such as walking along a familiar street or folding the laundry, while at the same time doing something else that demands our real attention, such as holding a conversation, precisely because the automatic task requires almost no conscious thought at all and can be handled by the body on autopilot. The trouble, and the real cost, comes only when two tasks both genuinely compete for the very same limited pool of conscious attention — such as trying to write an email while also following what someone is saying to us.",
    "F   The practical lesson of all this research is really quite clear and simple. For anything that genuinely matters and demands real thought — studying, writing, planning, or solving a difficult problem — we are almost always far better off doing just one thing at a time, giving it our full and undivided attention until it is done, and only then moving on to the next thing. Far from being old-fashioned, slow or inefficient, as it is sometimes made to seem, patient 'single-tasking' turns out, according to the research, to be the more efficient, the more accurate and the more genuinely productive way to work after all. Doing less at any one moment, it seems, actually lets us achieve more."
   ],
   Q:[
    {t:'choice',a:'YES',q:'Multitasking is widely regarded as a valuable skill.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'The brain can fully focus on two demanding tasks at the same time.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'People who think they are good multitaskers are usually better than others at it.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Constant task-switching may harm deep and creative thinking.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Doing an automatic task while doing something demanding is always harmful.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'The research suggests we should do one important thing at a time.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'E',q:'Which paragraph (A–F) gives an example of harmless multitasking?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) reports that self-declared multitaskers perform worse?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains that the brain switches back and forth?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) gives the practical advice to single-task?'},
    {t:'text',a:'switches|switch|switching',q:"What does the brain actually do when we 'multitask'?"},
    {t:'text',a:'errors|error|mistakes',q:'Multitasking on demanding tasks usually produces more ______.'},
    {t:'text',a:'focus',q:'Deep thinking often requires a sustained, undistracted ______.'},
    {t:'text',a:'attention',q:'The passage recommends giving an important task our full ______.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Visitors to three attractions (thousands)</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Year</th><th style='border:1px solid #999;padding:5px 10px'>Castle</th><th style='border:1px solid #999;padding:5px 10px'>Museum</th><th style='border:1px solid #999;padding:5px 10px'>Zoo</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>2017</td><td style='border:1px solid #999;padding:5px 10px'>120</td><td style='border:1px solid #999;padding:5px 10px'>200</td><td style='border:1px solid #999;padding:5px 10px'>90</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>2018</td><td style='border:1px solid #999;padding:5px 10px'>135</td><td style='border:1px solid #999;padding:5px 10px'>210</td><td style='border:1px solid #999;padding:5px 10px'>100</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>2019</td><td style='border:1px solid #999;padding:5px 10px'>150</td><td style='border:1px solid #999;padding:5px 10px'>205</td><td style='border:1px solid #999;padding:5px 10px'>115</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>2020</td><td style='border:1px solid #999;padding:5px 10px'>90</td><td style='border:1px solid #999;padding:5px 10px'>110</td><td style='border:1px solid #999;padding:5px 10px'>70</td></tr></table>",
  task1:"The table below shows the number of visitors (in thousands) to three tourist attractions in a city between 2017 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that tourism brings great benefits to a country, while others think it can cause harm to local communities and the environment. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 12 ===================== */
{
 name:'Mock 12',
 blurb:'Car hire · Botanical garden · Flight history + Flight · Trees · Reading',
 listen:[
  {title:'City Car Hire booking',
   transcript:"Good afternoon, City Car Hire. I'd like to rent a car for the weekend. What size of car would you like? A small economy car, please. That's forty pounds a day, so eighty pounds for two days. Does that include insurance? Basic insurance is included, but full cover is an extra fifteen... sorry, ten pounds a day. You'll need a valid driving licence and a credit card, not a debit card. The car comes with a full tank of fuel, and we ask that you return it full; there's a charge if it's returned with less. Can I collect it tomorrow? Yes, our office opens at nine — sorry, eight in the morning. Please note the car must be returned by six in the evening on Sunday, or a late fee applies.",
   Q:[
    {t:'text',a:'economy',q:'The customer wants a small ______ car.'},
    {t:'text',a:'forty|40',q:'Cost: £______ a day.'},
    {t:'text',a:'eighty|80',q:'Total for two days: £______.'},
    {t:'text',a:'insurance',q:'Basic ______ is included.'},
    {t:'text',a:'ten|10',q:'Full cover costs an extra £______ a day.'},
    {t:'text',a:'credit',q:'You need a valid driving licence and a ______ card.'},
    {t:'text',a:'fuel|petrol',q:'The car comes with a full tank of ______.'},
    {t:'text',a:'eight|8',q:'The office opens at ______ in the morning.'},
    {t:'text',a:'six|6|6pm',q:'The car must be returned by ______ on Sunday.'},
    {t:'choice',a:'B',q:'If the car is returned with less fuel, there is a:',opts:['A) discount','B) charge','C) free refill','D) warning']}
   ]},
  {title:'Botanical garden guided walk',
   transcript:"Welcome to the Riverside Botanical Gardens. Our guided walk today will last about sixty minutes... sorry, ninety. We'll start at the tropical glasshouse, home to plants from rainforests around the world, including some rare orchids. From there, we'll visit the rose garden, which is at its best in July — no, June. One of our most popular features is the giant redwood tree, planted over a hundred years ago. Please stay on the paths to protect the plants, and note that picnics are only allowed in the designated area near the lake, not by the glasshouse. The gardens are entirely run by volunteers. Guidebooks are available in the shop for four pounds. The cafe closes at four thirty.",
   Q:[
    {t:'text',a:'ninety|90',q:'The guided walk lasts about ______ minutes.'},
    {t:'text',a:'glasshouse|glass house',q:'The walk starts at the tropical ______.'},
    {t:'text',a:'orchids|orchid',q:'The glasshouse has some rare ______.'},
    {t:'text',a:'june',q:'The rose garden is at its best in ______.'},
    {t:'text',a:'redwood',q:'The giant ______ tree was planted over a hundred years ago.'},
    {t:'text',a:'paths|path',q:'Visitors must stay on the ______.'},
    {t:'text',a:'lake',q:'Picnics are only allowed near the ______.'},
    {t:'text',a:'volunteers|volunteer',q:'The gardens are run entirely by ______.'},
    {t:'text',a:'four|4',q:'Guidebooks cost £______.'},
    {t:'choice',a:'B',q:'The cafe closes at:',opts:['A) 4:00','B) 4:30','C) 5:00','D) 6:00']}
   ]},
  {title:'Group project: reducing food waste',
   transcript:"For our project, we need a plan to reduce food waste in the college canteen. Where should we start? Let's find out how much food is currently wasted. How? We could weigh the leftover food for a week. What are the main causes? I think portions are too large, and students take more than they eat. So what's our solution? We could offer smaller and larger portion sizes. And use the leftover food? Yes, we could donate it to a local charity, not throw it away. We should also put up posters to raise awareness. When do we present? On the fifth... no, the fifteenth of May. I'll contact the charity, you design the posters. And we'll present the weight data as a graph.",
   Q:[
    {t:'text',a:'waste',q:'The project aims to reduce food ______ in the canteen.'},
    {t:'text',a:'weigh',q:'They will ______ the leftover food for a week.'},
    {t:'text',a:'portions|portion',q:'A main cause is that ______ are too large.'},
    {t:'text',a:'sizes|size',q:'Their solution is to offer smaller and larger portion ______.'},
    {t:'text',a:'charity',q:'Leftover food could be donated to a local ______.'},
    {t:'text',a:'posters|poster',q:'They will put up ______ to raise awareness.'},
    {t:'text',a:'fifteenth|15th|15',q:'They present on the ______ of May.'},
    {t:'text',a:'charity',q:'The speaker will contact the ______.'},
    {t:'text',a:'graph',q:'The weight data will be presented as a ______.'},
    {t:'choice',a:'B',q:'Students currently take:',opts:['A) less than they eat','B) more than they eat','C) the right amount','D) nothing']}
   ]},
  {title:'Lecture: the history of flight',
   transcript:"Today we will look at the history of human flight. For centuries, people dreamed of flying, but early attempts to copy birds by flapping wings all failed. The first real success came with balloons: in 1873 — sorry, 1783 — two Frenchmen became the first people to fly, in a hot-air balloon. However, balloons could not be steered easily. The great breakthrough came in 1903, when the Wright brothers, in the United States, made the first controlled flight in a powered aircraft, lasting just twenty... no, twelve seconds. Progress after that was astonishingly rapid. Within a few decades, aircraft were crossing oceans, and by 1969, humans had landed on the Moon.",
   Q:[
    {t:'text',a:'flapping|flap',q:'Early attempts to fly by ______ wings all failed.'},
    {t:'text',a:'balloon',q:'The first people to fly used a hot-air ______.'},
    {t:'text',a:'1783',q:'The first balloon flight was in ______.'},
    {t:'text',a:'steered|steer',q:'Balloons could not be ______ easily.'},
    {t:'text',a:'1903',q:'The first controlled powered flight was in ______.'},
    {t:'text',a:'wright',q:'The first flight was made by the ______ brothers.'},
    {t:'text',a:'twelve|12',q:'The first flight lasted just ______ seconds.'},
    {t:'text',a:'moon',q:'By 1969, humans had landed on the ______.'},
    {t:'choice',a:'B',q:'The first people to fly were from:',opts:['A) the US','B) France','C) Britain','D) Germany']},
    {t:'choice',a:'A',q:'The first controlled powered flight lasted:',opts:['A) 12 seconds','B) 12 minutes','C) 12 hours','D) a day']}
   ]}
 ],
 read:[
  {title:'The Science of Sound',
   paras:[
    "List of Headings —  i) Waves through the air   ii) What makes a sound high or low   iii) The speed of sound   iv) How we hear   v) Sounds we cannot hear   vi) Using sound to see   vii) Measuring loudness   viii) Silencing unwanted noise",
    "A   Sound is all around us, from morning until night, yet it is surprisingly easy to forget what it actually is. Sound is not a substance or a thing at all, but a movement — a travelling wave of vibration that passes through a material such as the air. When an object vibrates, whether it is a plucked guitar string, a loudspeaker or a person's vocal cords, it pushes on the air right next to it, squeezing it together; that squeezed air then pushes on the air just beyond it, and so on and on, so that a wave of alternating high and low pressure spreads rapidly outward in all directions from the source, exactly like the ripples that spread out across a still pond from a stone dropped into the water.",
    "B   Because sound is a movement of a material, and not a thing in itself, it cannot travel through empty space, where there is simply no material at all to carry the vibration along. This is exactly why outer space, despite all the roaring explosions of science-fiction films, is in reality completely and utterly silent. Sound also travels at very different speeds through different materials. Although we usually think of it as moving through air, sound actually travels considerably faster through water than through air, and faster still through solids such as steel or rock, because in a denser material the vibrating particles are packed more closely together and can pass the movement on to their neighbours more quickly.",
    "C   The particular character of a sound depends entirely on the shape of its wave. How quickly the vibrations repeat themselves — a quantity that scientists call the 'frequency' of the wave — determines the pitch of the sound, that is, how high or how low it seems to us: fast, rapid vibrations produce a high note, like a whistle, while slow vibrations produce a low, deep note, like a drum or a distant foghorn. The size, or height, of the vibration, meanwhile, determines something quite separate — the loudness of the sound: a bigger wave carries more energy and so sounds louder to our ears, while a small wave sounds soft and faint.",
    "D   We detect all these travelling waves of pressure with our ears. Sound waves entering the ear are funnelled inward and cause the delicate eardrum, a thin stretched membrane, to vibrate back and forth in perfect time with the wave. These vibrations are then passed on and amplified by a chain of three tiny bones, and are finally converted, in a fluid-filled organ shaped like a snail's shell, into electrical signals which travel along a nerve to the brain, where they are at last interpreted as sound. The human ear is remarkably sensitive, able to detect astonishingly faint sounds, but it can only detect a certain limited range of frequencies, from the very low to the very high.",
    "E   Beyond that limited range, both above it and below it, lie whole worlds of sound that humans cannot hear at all. Frequencies too high for the human ear to detect, called ultrasound, are perfectly audible to many animals, such as dogs — which is exactly how a 'silent' dog whistle works — and bats. At the other end of the scale, frequencies too low for us to hear, called infrasound, are used by great animals such as elephants and whales to communicate with one another over enormous distances, across many miles of land or open ocean. What seems to us a silent world is, to a great many other creatures, quietly full of sounds and signals of which we remain entirely unaware.",
    "F   Humans, meanwhile, have learned to put sound to some remarkably ingenious uses, even to 'see' with it. By sending out a short pulse of sound and then carefully timing how long its echo takes to bounce back off a distant object, ships can measure the exact depth of the sea beneath them, and doctors can form detailed images of the inside of the living body, such as an unborn baby in the womb, entirely without the use of harmful radiation. Interestingly, bats and dolphins discovered this very same clever trick many millions of years before we did, and use it constantly to navigate in total darkness and to hunt their prey, building up a picture of their surroundings simply by listening closely to the returning echoes of their own high-pitched calls."
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'Sound is a wave of vibration that needs a material to travel through.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Sound travels faster through air than through water.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Fast vibrations produce a low note.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some animals can hear sounds that humans cannot.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'frequency',q:'How quickly the vibrations repeat is called the ______.'},
    {t:'text',a:'space',q:'Sound cannot travel through empty ______.'},
    {t:'text',a:'ultrasound',q:'Sound too high for humans to hear is called ______.'}
   ]},
  {title:'The History of the Newspaper',
   paras:[
    "A   The desire to know what is happening in the world is nothing new; it is as old as human society itself. In ancient Rome, for example, official announcements, news of distant battles and the decisions of the government were carved onto tablets of stone or metal and put on public display in busy places for the citizens to gather round and read. But the newspaper as we know it today — a printed sheet of news, produced regularly and frequently, and sold cheaply to the general public — simply could not exist until one crucial invention had been made: the printing press, which alone allowed many identical copies of a text to be produced quickly and cheaply enough to sell.",
    "B   The first true newspapers appeared in Europe in the early seventeenth century, printed once a week and carrying news of wars, of trade, and of the doings of foreign kings and their courts. These early papers, however, were relatively expensive to buy, and, since the great majority of ordinary people at the time could not read at all, their audience remained quite small, limited mostly to the wealthy and the educated. Governments, moreover, were deeply wary of the power of the printed word to spread dangerous ideas and stir up trouble, and so they frequently tried to control what the newspapers were permitted to print. Official censorship of the press was common, and printers who displeased the authorities could be heavily fined or thrown into prison.",
    "C   Two great developments in the nineteenth century together transformed the newspaper from a luxury for the few into a daily habit for the many. First, faster printing presses, now driven by the power of steam, could produce many thousands of copies an hour, instead of a few hundred a day, which brought the cost of each individual copy tumbling down. Second, and at the same time, rising literacy, as more and more people learned to read, created a vast new readership hungry for news. Together, these two changes meant that newspapers at last became cheap enough for ordinary working people to buy every single day, and their circulation soared from a mere few thousand into the millions.",
    "D   The invention of the electric telegraph then revolutionised the way in which news itself was gathered and moved around the world. For the very first time in history, a report could travel faster than any messenger, horse or train — faster, in short, than a person could travel — arriving from a distant city, or even from a foreign country on the far side of the world, within minutes rather than the days or weeks it had always taken before. Great news agencies grew up to gather such reports by telegraph and to sell them on to many different newspapers at once, so that the very same story could appear, almost simultaneously, in papers all around the world on the very same morning.",
    "E   For well over a century, the printed newspaper reigned supreme as the main source of information for most people, powerfully shaping public opinion and, at its very best, holding the rich and the powerful to account for their actions. Great and courageous newspapers uncovered hidden scandals, exposed corruption in high places, and reported uncomfortable truths that governments and businesses would very much rather have kept quiet. Out of all this, a free and independent press came to be seen, in many countries around the world, not as a mere business but as an essential guardian of democracy itself — a watchdog acting on behalf of ordinary citizens, and one of the great pillars of any free society.",
    "F   Today, however, the printed newspaper is in steep and apparently unstoppable decline, its readers and, even more damagingly, its advertising steadily drawn away by the internet, where news can be read instantly and very often entirely for free. Many famous old papers have shrunk drastically or closed down altogether. Yet the deep human need that the newspaper served for so long has certainly not vanished along with it. A great deal of the news that we now read online is in fact still produced by the very same newspaper organisations, and the difficult questions first raised by the long history of the newspaper — above all, who controls the news, and how honest, independent journalism is to be paid for — remain today as pressing, and as unresolved, as they have ever been."
   ],
   Q:[
    {t:'choice',a:'B',q:'The newspaper could not exist until the invention of the:',opts:['A) telegraph','B) printing press','C) steam engine','D) internet']},
    {t:'choice',a:'B',q:'Early newspapers had a small audience mainly because:',opts:['A) they were boring','B) most people could not read','C) they were banned','D) they were slow']},
    {t:'choice',a:'B',q:'In the nineteenth century, newspapers became cheap partly because of:',opts:['A) the telegraph','B) steam-driven printing presses','C) censorship','D) news agencies']},
    {t:'choice',a:'C',q:'The telegraph changed newspapers by making news:',opts:['A) cheaper','B) longer','C) travel faster than a person','D) more accurate']},
    {t:'text',a:'D',q:'Which paragraph (A–F) explains how news agencies spread the same story worldwide?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the role of the free press in democracy?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the current decline of printed newspapers?'},
    {t:'text',a:'A',q:'Which paragraph (A–F) explains how public news was shared in ancient Rome?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the two changes that transformed newspapers in the 1800s?'},
    {t:'text',a:'metal',q:'In ancient Rome, announcements were carved on stone or ______.'},
    {t:'text',a:'censorship',q:'Early newspapers were often subject to government ______.'},
    {t:'text',a:'hour',q:'Steam-driven presses could produce thousands of copies an ______.'},
    {t:'text',a:'democracy',q:'A free press is seen as a guardian of ______.'}
   ]},
  {title:'Is a University Degree Still Worth It?',
   paras:[
    "A   For decades, a university degree was widely seen as a more or less guaranteed path to a better job, a higher income and a comfortable, secure life. Young people were told, again and again, by parents and teachers alike, that a good education was quite simply the best investment they could ever make in their own future. Recently, however, that comfortable old assumption has come seriously under question, as the cost of obtaining a degree has risen steeply in many countries and the world of work itself has changed almost beyond recognition. The pressing question of whether a degree is really still worth it now troubles students and their parents alike, often very deeply.",
    "B   Those who defend the enduring value of a university degree point firmly to the evidence. On average, the figures still show, graduates earn considerably more money over the course of their working lifetimes than people without a degree do, and they are also, on the whole, rather less likely to find themselves unemployed. But the benefits are by no means only financial, supporters are quick to argue. Beyond the money, they say, a good university education broadens the mind, exposes young people to new ideas and to different kinds of people, teaches them to think critically and to weigh evidence for themselves, and offers experiences and lasting friendships that can enrich the whole of the rest of their lives.",
    "C   Critics of the traditional view, however, raise a number of serious and troubling doubts. In many countries, and especially those where students must pay their own tuition fees, the cost of obtaining a degree has soared in recent years, leaving many graduates saddled with large debts that can take them a decade or more of working life to pay off in full. At the same time, as more and more young people go to university and gain degrees, a degree simply no longer guarantees the clear advantage in the job market that it once did, back when graduates were comparatively rare. As a result, some graduates now find themselves stuck in jobs that do not actually require a degree at all, working alongside people who never went to university.",
    "D   The particular choice of subject, critics add, matters enormously, far more than the simple averages ever suggest. A degree in a demanding and directly vocational field such as medicine, law or engineering still leads reliably and quite predictably to secure, well-paid professional work, and remains an excellent investment by almost any measure. The financial return on some other subjects, however, is far less certain, and graduates in those fields may struggle for years to find work that pays enough to justify the cost and the time spent studying. The reassuring averages so often quoted, critics point out, actually hide huge and important differences between one graduate and another, and between one subject and the next.",
    "E   There are also alternatives to university, once looked down upon or overlooked entirely, that are now attracting fresh and serious interest. Apprenticeships, in which a young person learns a skilled trade or profession on the job while at the same time earning a wage, allow people to gain valuable qualifications and real workplace experience without taking on any debt at all, and are once again growing rapidly in popularity and prestige. Meanwhile, some of the world's largest and most successful technology companies have announced that they no longer require job applicants to hold a university degree at all, preferring instead to test candidates' actual skills and abilities directly, whatever their educational background.",
    "F   Most careers advisers today, therefore, give a far more careful and nuanced answer to the question than they would have done in the past. A university degree, they suggest, remains genuinely valuable for very many people and for very many careers, and for some professions it is quite simply essential. But it is no longer the only route to a successful and rewarding career, nor is it automatically the right choice for absolutely everyone. The wise course, they now argue, is for each young person to weigh up the real costs and the likely benefits carefully, honestly and individually — thinking hard about the subject, the intended career and the true cost — rather than simply assuming, as an earlier generation could, that a degree is always and obviously worth it."
   ],
   Q:[
    {t:'choice',a:'YES',q:'A university degree was once seen as a sure path to a better job.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Graduates, on average, earn less over their lifetimes than non-graduates.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'The cost of a degree has fallen in recent years.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'The financial value of a degree is the same regardless of subject.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some technology companies no longer require a degree.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Careers advisers now say a degree is the only route to success.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives the argument that graduates earn more?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the problem of graduate debt?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes apprenticeships as an alternative?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) gives the balanced advice of careers advisers?'},
    {t:'text',a:'think critically|critically|critical thinking',q:'Besides earning more, what does university teach people to do?'},
    {t:'text',a:'debts|debt|large debts',q:'What have many graduates been left with because of rising costs?'},
    {t:'text',a:'engineering',q:'A degree in medicine or ______ still leads reliably to well-paid work.'},
    {t:'text',a:'trade',q:'In an apprenticeship, young people learn a skilled ______ while earning.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 420 330' width='100%' style='max-width:420px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='210' y='20' text-anchor='middle' font-size='13' font-weight='bold'>How people travel to work (%)</text><path d='M200 160 L200 65 A95 95 0 0 1 229.4 250.3 Z' fill='#1a73e8'/><path d='M200 160 L229.4 250.3 A95 95 0 0 1 123.1 215.8 Z' fill='#1a9c5a'/><path d='M200 160 L123.1 215.8 A95 95 0 0 1 109.7 130.6 Z' fill='#e0a800'/><path d='M200 160 L109.7 130.6 A95 95 0 0 1 144.2 83.1 Z' fill='#c0392b'/><path d='M200 160 L144.2 83.1 A95 95 0 0 1 200 65 Z' fill='#8e44ad'/><g font-size='11' fill='#333'><rect x='30' y='285' width='12' height='11' fill='#1a73e8'/><text x='46' y='294'>Car 45</text><rect x='130' y='285' width='12' height='11' fill='#1a9c5a'/><text x='146' y='294'>Bus 20</text><rect x='230' y='285' width='12' height='11' fill='#e0a800'/><text x='246' y='294'>Train 15</text><rect x='30' y='302' width='12' height='11' fill='#c0392b'/><text x='46' y='311'>Cycling 10</text><rect x='150' y='302' width='12' height='11' fill='#8e44ad'/><text x='166' y='311'>Walking 10</text></g></svg>",
  task1:"The pie chart below shows how people in a city travel to work. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that reading books is a waste of time in the digital age. To what extent do you agree or disagree? Write at least 250 words."
 }
},

/* ===================== MOCK 13 ===================== */
{
 name:'Mock 13',
 blurb:'Bank account · New shopping centre · Advertising + Online shopping · Branding · Gig economy',
 listen:[
  {title:'Opening a bank account',
   transcript:"Good morning, I'd like to open a bank account. Certainly. We offer a current account with no monthly fee. To open one, you'll need two forms of identification: a passport and a recent utility bill showing your address. You'll also receive a debit card, which arrives within three... sorry, five working days. The account includes free online and mobile banking. There's no minimum balance required. The account pays a small amount of interest, currently two per cent... sorry, one per cent a year. Our nearest branch is on Queen Street — no, King Street, open until four thirty on weekdays. You'll need to book an appointment to open the account.",
   Q:[
    {t:'text',a:'fee',q:'The current account has no monthly ______.'},
    {t:'text',a:'identification|id',q:'You need two forms of ______.'},
    {t:'text',a:'bill',q:'Documents needed: a passport and a utility ______.'},
    {t:'text',a:'five|5',q:'The debit card arrives within ______ working days.'},
    {t:'text',a:'mobile',q:'The account includes free online and ______ banking.'},
    {t:'text',a:'balance',q:'There is no minimum ______ required.'},
    {t:'text',a:'one|1',q:'Interest rate: ______ per cent a year.'},
    {t:'text',a:'king',q:'The nearest branch is on ______ Street.'},
    {t:'text',a:'four thirty|4:30|4.30|430',q:'The branch is open until ______ on weekdays.'},
    {t:'choice',a:'B',q:'To open the account you must:',opts:['A) pay a fee','B) book an appointment','C) deposit money','D) be over 21']}
   ]},
  {title:'Radio: new shopping centre opening',
   transcript:"In local news, the town's brand-new shopping centre opens its doors next Friday — sorry, next Saturday. The centre, which took three years to build... actually two, houses over one hundred shops, as well as a cinema and a food court with twelve restaurants... no, twenty. On opening day, the first two hundred visitors will receive a free gift. The centre is easily reached by public transport, and there is parking for two thousand cars. To celebrate, several shops will offer discounts of up to fifteen... sorry, fifty per cent during the first week. The centre will be open from nine in the morning until eight in the evening, seven days a week. Organisers say the development has created around five hundred new jobs.",
   Q:[
    {t:'text',a:'saturday',q:'The shopping centre opens next ______.'},
    {t:'text',a:'two|2',q:'It took ______ years to build.'},
    {t:'text',a:'one hundred|100',q:'It houses over ______ shops.'},
    {t:'text',a:'twenty|20',q:'The food court has ______ restaurants.'},
    {t:'text',a:'gift',q:'The first two hundred visitors get a free ______.'},
    {t:'text',a:'two thousand|2000|2,000',q:'There is parking for ______ cars.'},
    {t:'text',a:'fifty|50',q:'Some shops offer discounts of up to ______ per cent.'},
    {t:'text',a:'nine|9',q:'The centre opens at ______ in the morning.'},
    {t:'text',a:'seven|7',q:'It is open ______ days a week.'},
    {t:'choice',a:'B',q:'The development has created about:',opts:['A) 200 jobs','B) 500 jobs','C) 1000 jobs','D) 2000 jobs']}
   ]},
  {title:'Business presentation planning',
   transcript:"Right, our business presentation is on a company's success. Which company should we choose? How about a tech firm... no, a coffee chain? Good, and easy to research. What's the secret of their success? I think it's mainly their strong brand and consistent quality. And their locations, always on busy streets. What about weaknesses? Their prices are quite high. And a lot of competition now. So what do we recommend? Maybe they should expand their online delivery. How long is the presentation? Fifteen minutes... sorry, ten, plus questions. Should we include charts? Yes, let's show their sales growth in a graph. When's it due? The fourth... no, the fourteenth of April. Let's meet Wednesday to practise.",
   Q:[
    {t:'text',a:'success',q:"The presentation is about a company's ______."},
    {t:'text',a:'coffee',q:'They choose a ______ chain.'},
    {t:'text',a:'quality',q:'The secret of success is a strong brand and consistent ______.'},
    {t:'text',a:'streets|street',q:'Their locations are always on busy ______.'},
    {t:'text',a:'prices|price',q:'A weakness is their high ______.'},
    {t:'text',a:'delivery',q:'They recommend expanding online ______.'},
    {t:'text',a:'ten|10',q:'Presentation length: ______ minutes.'},
    {t:'text',a:'graph',q:'They will show sales growth in a ______.'},
    {t:'text',a:'fourteenth|14th|14',q:'Due date: ______ of April.'},
    {t:'choice',a:'B',q:'A weakness mentioned, besides high prices, is:',opts:['A) poor quality','B) a lot of competition','C) bad locations','D) weak brand']}
   ]},
  {title:'Lecture: advertising and persuasion',
   transcript:"Today's lecture concerns advertising and how it influences what we buy. The main purpose of advertising is not simply to give information, but to persuade. Advertisers use a range of techniques. One common method is to associate a product with positive feelings, such as happiness or success. Another is the use of celebrities, whose fame and image are transferred to the product in the mind of the consumer. Advertisers also exploit our desire to fit in, or, conversely, our desire to feel unique — not ordinary, unique. Repetition is powerful too: the more often we see a brand, the more familiar and trustworthy it seems. Understanding these techniques helps consumers make more rational decisions.",
   Q:[
    {t:'text',a:'persuade',q:'The main purpose of advertising is to ______.'},
    {t:'text',a:'feelings|feeling',q:'Advertisers associate products with positive ______.'},
    {t:'text',a:'success',q:'One technique is describing feelings such as happiness or ______.'},
    {t:'text',a:'celebrities|celebrity',q:'Advertisers use ______ whose fame is transferred to the product.'},
    {t:'text',a:'fit',q:'Advertisers exploit our desire to ______ in.'},
    {t:'text',a:'unique',q:'They may also appeal to our desire to feel ______.'},
    {t:'text',a:'repetition',q:'______ makes a brand seem familiar and trustworthy.'},
    {t:'text',a:'rational',q:'Understanding these techniques helps consumers make more ______ decisions.'},
    {t:'choice',a:'B',q:'The main purpose of advertising is to:',opts:['A) inform','B) persuade','C) entertain','D) educate']},
    {t:'choice',a:'B',q:'Seeing a brand often makes it seem more:',opts:['A) expensive','B) trustworthy','C) unusual','D) boring']}
   ]}
 ],
 read:[
  {title:'The Science of Weather Forecasting',
   paras:[
    "List of Headings —  i) Reading the atmosphere   ii) From folklore to science   iii) The power of computers   iv) Why forecasts go wrong   v) Eyes in the sky   vi) Warning of disaster   vii) The changing seasons   viii) How rainfall is measured",
    "A   For most of human history, predicting the weather was a matter of folklore, tradition and sheer guesswork. People watched the sky closely, observed the behaviour of animals and birds, noted the ache of old injuries in damp air, and passed down countless weather sayings from one generation to the next, such as the well-known 'red sky at night, shepherd's delight; red sky in the morning, shepherd's warning'. Some of these old sayings did in fact contain a real grain of scientific truth, since the colour of the sky is genuinely affected by the state of the atmosphere. But they could not look more than a few hours ahead at the very best, and they were, as often as not, simply and completely wrong.",
    "B   Modern, scientific weather forecasting only truly began when scientists came to realise that the weather is not random or capricious but obeys fixed physical laws, and that it can therefore, at least in principle, be calculated in advance. To do so, however, they first of all needed accurate data about the current state of the air. And so, from the nineteenth century onward, great networks of weather stations were set up across the land, each one measuring the local temperature, the air pressure, the humidity and the speed and direction of the wind, and reporting them regularly by telegraph. Together, these many thousands of readings built up a detailed picture of the state of the entire atmosphere at a single given moment in time.",
    "C   The single greatest advance in the whole history of forecasting came from the invention of the weather satellite. Orbiting high above the Earth, out in space, these satellites can photograph entire cloud systems from above, track the movement and the growth of great storms as they develop, and measure conditions right across the whole surface of the planet — crucially including the vast, empty oceans, which cover most of the Earth and where there are almost no weather stations at all. For the very first time in history, forecasters could actually see the weather coming towards them from far away, days before it arrived, rather than simply waiting for it to appear overhead.",
    "D   All of this vast quantity of data, gathered from thousands of weather stations, ships, balloons and satellites, is then fed into extremely powerful computers running enormously complex mathematical models of the atmosphere. These computer models apply the known laws of physics — the same laws that govern how air, heat and water actually behave — to calculate, step by tiny step, exactly how the weather is likely to change, hour by hour, over the coming hours and days. And the rule is a simple one: the more powerful the computer, and the more data it is given to work with, the more detailed, and the more accurate, the resulting forecast can be. This is precisely why national weather services rely on some of the very fastest supercomputers ever built.",
    "E   Yet weather forecasts are never quite perfect, and they become rapidly less reliable beyond a few days ahead. The reason lies deep in the very nature of the atmosphere itself, which is what scientists call a 'chaotic' system. In such a system, a tiny, almost immeasurable difference in the starting conditions can grow and grow until it leads to a completely different outcome — this is the famous and much-quoted idea that the mere flap of a distant butterfly's wings might, in theory, set off a long chain of events that alters the weather on the other side of the world some weeks later. This fundamental chaos sets a strict and quite unavoidable limit on how far ahead into the future the weather can ever, even in principle, be accurately predicted.",
    "F   Despite these fundamental limits, weather forecasting today saves countless lives every single year all around the world. Accurate and timely warnings of approaching storms, floods, hurricanes and heatwaves allow the people living in their path to prepare their homes, to move to safety or to flee the area altogether well before disaster finally strikes, and they give farmers, sailors, pilots and airlines the vital information they need to protect their crops, their ships and their passengers. What was once, only a couple of centuries ago, a matter of pure superstition and folklore has quietly become one of the most genuinely useful and life-saving of all the modern sciences."
   ],
   Q:[
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'FALSE',q:'Old weather sayings were always completely wrong.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Weather stations measure conditions such as temperature and air pressure.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Satellites can observe the weather over the oceans.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The weather can be predicted accurately as far ahead as we like.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'models|model',q:'Modern forecasting uses mathematical ______ of the atmosphere.'},
    {t:'text',a:'chaotic',q:'The atmosphere is described as a ______ system.'},
    {t:'text',a:'heatwaves|heatwave|heat waves',q:'Forecasting saves lives by warning of storms, floods and ______.'}
   ]},
  {title:'The Navigators of the Pacific',
   paras:[
    "A   The Pacific is by far the largest ocean on the whole of the Earth, covering nearly a third of the entire surface of the planet, and its islands are scattered across its vast immensity like tiny grains of sand thrown onto a floor, many of them separated from their nearest neighbours by many thousands of kilometres of empty, open water. Yet, astonishingly, long before any European sailor possessed either the magnetic compass or an accurate map, these tiny, remote islands had already been discovered, one by one, and settled by a single remarkable seafaring people, the Polynesians, in what must count as one of the very greatest feats of pure exploration in all of human history.",
    "B   Beginning around three thousand years ago, and using nothing more than large, sturdy double-hulled sailing canoes that they built entirely by hand, the Polynesians gradually spread out across a vast triangle of the central and southern Pacific, an area larger than any land empire in history. Over many centuries of patient voyaging, they eventually reached and settled islands as far apart as Hawaii in the north, New Zealand in the south-west, and lonely Easter Island in the far east. That they did all of this deliberately, setting out on purpose to find and colonise new lands, and not merely by lucky accident as was once commonly believed, is now very widely accepted by scholars.",
    "C   How the Polynesians managed to navigate so accurately across such enormous distances of featureless ocean, entirely without instruments of any kind, long puzzled and baffled European outsiders. The answer is that they had learned to read the natural world around them with truly extraordinary skill and precision. By night, they steered by the rising and the setting of particular, carefully memorised stars along the horizon, each of which rises at a fixed point. And by day, when the stars were hidden, they steered instead by the direction of the great swells rolling steadily across the open ocean — swells which an experienced navigator could feel and interpret through the very motion of the canoe beneath him, even while lying down with his eyes tightly closed.",
    "D   They also learned to read a host of subtler signs of the nearness of land. The presence of certain kinds of seabird, for instance, which are known to fly far out to sea to feed by day but always return to their island nests to roost at dusk, could reveal to a watchful navigator the exact direction of an island that was still hidden far below the horizon and quite out of sight. Even the particular patterns and shapes of the clouds, which often gather and hang motionless over an island, together with subtle changes in the colour of the sky or of the sea itself, could give a skilled navigator a strong hint of land lying far away in a certain direction, long before it could actually be seen.",
    "E   All of this immense body of navigational knowledge was not written down in any book — for the Polynesians had no system of writing — but was instead held entirely in the memory, and passed down with great care from a master navigator to his chosen apprentice over many long years of training, often in the form of memorised chants covering the stars, the swells and the islands. When European explorers finally arrived in the Pacific, they largely dismissed and looked down upon these traditional skills as primitive, quite failing to understand them, and, as the old way of life was disrupted and lost, much of this priceless ancient knowledge was, quite tragically, forgotten and lost for ever.",
    "F   In recent decades, however, there has been a remarkable and heartening revival of this all-but-lost art. Working closely with the last few surviving master navigators, enthusiasts have painstakingly relearned the ancient techniques of reading the stars, the swells and the birds, and long ocean voyages have since been made across many thousands of kilometres of open Pacific — including from Hawaii all the way to Tahiti and beyond — using no modern instruments whatever, not even a single compass. These epic modern voyages have proved beyond any possible doubt that the astonishing achievements of the ancient Polynesian navigators were entirely real, and were in no way merely exaggerated legends."
   ],
   Q:[
    {t:'choice',a:'B',q:'The Polynesians settled the Pacific islands:',opts:['A) purely by accident','B) deliberately, without instruments','C) using the compass','D) after Europeans arrived']},
    {t:'choice',a:'B',q:'The Polynesians travelled in:',opts:['A) small rafts','B) large double-hulled canoes','C) European ships','D) steamships']},
    {t:'choice',a:'C',q:'By day, the navigators steered by the direction of the:',opts:['A) stars','B) wind','C) ocean swells','D) sun']},
    {t:'choice',a:'B',q:'The presence of certain seabirds could reveal the direction of:',opts:['A) a storm','B) an island','C) another canoe','D) the wind']},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes how the navigators steered at night?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the modern revival of traditional navigation?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the vast area the Polynesians settled?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) explains how navigational knowledge was passed on?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the use of seabirds and clouds to find land?'},
    {t:'text',a:'compass',q:'The Polynesians settled the Pacific before Europeans had the ______.'},
    {t:'text',a:'three|3',q:'They began spreading across the Pacific around ______ thousand years ago.'},
    {t:'text',a:'stars|star',q:'At night, they steered by the rising and setting of certain ______.'},
    {t:'text',a:'chants|chant',q:'Navigational knowledge was memorised in the form of ______.'}
   ]},
  {title:'The Four-Day Week Debate',
   paras:[
    "A   The idea that everyone should work five days a week is so utterly familiar to us that it can seem entirely natural and permanent, as though it had simply always been so. Yet in fact the five-day week is only about a century old, and, when it was first introduced, even that was regarded by many as a dangerously radical reform. Now a new and even bolder idea is rapidly gaining ground: that the standard working week should be shortened once again, this time to just four days, and crucially with no loss of pay whatsoever. Formal trials of the four-day week are currently under way in many countries around the world, and their early results are provoking a fierce and fascinating debate about the very future of work.",
    "B   Supporters of the four-day week make a striking and, to many people, a surprising claim: that workers can actually produce just as much valuable work in four days as they previously did in five. Freed from pointless, time-wasting meetings, from needless interruptions, and from the sheer grinding exhaustion of a long five-day week, they argue, workers become noticeably more focused, more motivated and more efficient with the hours they do work, so that the total output of a business need not fall at all. And, tellingly, several of the formal trials carried out so far have indeed reported that overall productivity stayed exactly the same, or in a number of cases even rose, when the working hours were cut.",
    "C   The benefits of a four-day week for the workers themselves are, of course, obvious and considerable. An extra day off every single week means far more time for family and children, for proper rest and recovery from the demands of work, and for personal interests and hobbies that a long working week leaves no room for. The trials have duly reported happier, healthier and markedly less stressed employees, who also take fewer sick days. Supporters add, moreover, that shorter working hours could also bring real benefits to the natural environment, by cutting out the daily commuting and the office heating, lighting and energy use of one full working day in every five.",
    "D   Critics of the idea, however, urge considerable caution before rushing to embrace it. What works well in a modern office, they argue, where much of the work is flexible and its output hard to measure, may not work at all in a hospital, a shop, a restaurant or a factory, where the output depends far more directly on the sheer number of hours actually worked, and where a service simply must be provided to the public every single day of the week. Squeezing five full days' worth of such essential, hands-on work into only four days, they warn, could in practice simply pile even more pressure and stress onto staff who are already busy and stretched to their very limits.",
    "E   There are also a number of awkward practical difficulties to overcome. Businesses that must stay open to serve the public all week long — shops, hospitals, transport services and the like — would have either to hire additional staff to cover the extra day, or else to stagger their existing employees' days off across the week, both of which add real cost and considerable complexity to the running of the business. And not every job, critics rightly point out, can easily be measured by its 'output' at all, in the neat way that a factory's can, which makes it genuinely hard to know whether the very same amount of useful work is really still being done in the shorter week, or whether standards are quietly slipping.",
    "F   The debate over the four-day week is, as yet, very far from settled. Enthusiasts firmly believe that it is simply the future of work, and that it will one day come to seem as natural, as normal and as inevitable as the two-day weekend — itself once a radical and much-resisted novelty — now does to us. Sceptics, on the other hand, strongly suspect that while the four-day week may suit some office-based industries very well, it will never become truly universal across the whole of the economy. What is clear, however, is that, for the first time in several generations, the basic shape and length of the working week — something most people had simply taken for granted all their lives — is once again genuinely open to question, and open to change."
   ],
   Q:[
    {t:'choice',a:'YES',q:'The five-day working week has existed for only about a century.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Supporters claim output must fall if hours are cut.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some trials found that productivity stayed the same or rose.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Critics believe the four-day week suits every kind of workplace equally.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Businesses open all week might need to hire more staff.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Everyone now agrees the four-day week will become universal.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) makes the claim that output need not fall?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the benefits of an extra day off for workers?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) argues that some jobs depend directly on hours?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the difficulty of staying open all week?'},
    {t:'text',a:'one|1',q:'How many days would a four-day week remove from the standard week?'},
    {t:'text',a:'efficient',q:'Freed from long weeks, workers become more focused and ______.'},
    {t:'text',a:'commuting|commute',q:'Shorter hours could help the environment by cutting ______ and office energy use.'},
    {t:'text',a:'weekend',q:'The two-day ______ is given as an example of a change that once seemed radical.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 320' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>Products bought online rather than in stores (%), 2010 vs 2020</text><line x1='60' y1='30' x2='60' y2='250' stroke='#333'/><line x1='60' y1='250' x2='510' y2='250' stroke='#333'/><g font-size='10' fill='#555'><text x='52' y='253' text-anchor='end'>0</text><text x='52' y='190' text-anchor='end'>20</text><text x='52' y='127' text-anchor='end'>40</text><text x='52' y='64' text-anchor='end'>60</text><line x1='60' y1='187' x2='500' y2='187' stroke='#eee'/><line x1='60' y1='124' x2='500' y2='124' stroke='#eee'/><line x1='60' y1='61' x2='500' y2='61' stroke='#eee'/></g><g><rect x='85' y='156' width='30' height='94' fill='#1a73e8'/><rect x='119' y='77' width='30' height='173' fill='#e0a800'/><rect x='195' y='203' width='30' height='47' fill='#1a73e8'/><rect x='229' y='109' width='30' height='141' fill='#e0a800'/><rect x='305' y='234' width='30' height='16' fill='#1a73e8'/><rect x='339' y='187' width='30' height='63' fill='#e0a800'/><rect x='415' y='171' width='30' height='79' fill='#1a73e8'/><rect x='449' y='61' width='30' height='189' fill='#e0a800'/></g><g font-size='10.5' fill='#333' text-anchor='middle'><text x='117' y='264'>Books</text><text x='227' y='264'>Clothes</text><text x='337' y='264'>Groceries</text><text x='447' y='264'>Electronics</text></g><g font-size='11'><rect x='190' y='288' width='16' height='10' fill='#1a73e8'/><text x='212' y='297'>2010</text><rect x='300' y='288' width='16' height='10' fill='#e0a800'/><text x='322' y='297'>2020</text></g></svg>",
  task1:"The bar chart below shows the percentage of people who bought four types of product online rather than in stores in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Online shopping is becoming increasingly popular. Do the advantages of this development outweigh the disadvantages? Write at least 250 words."
 }
},

/* ===================== MOCK 14 ===================== */
{
 name:'Mock 14',
 blurb:'Conference · Observatory · Solar system + Mars · Northern Lights · Vaccines',
 listen:[
  {title:'Science conference registration',
   transcript:"Hello, I'd like to register for the science conference next month. Certainly. The conference runs over three days... sorry, two, on the fifteenth and sixteenth of June. The standard registration fee is eighteen pounds... sorry, eighty, but students pay a reduced rate of forty pounds with a valid ID. This includes access to all talks, lunch on both days, and a printed programme. There's an optional conference dinner on the first evening, which costs an extra twenty-five pounds. The conference is held at the Grand Hotel in the city centre, not the Grand Theatre. To register, please complete the online form by the first of June. You'll receive your name badge by email to print at home.",
   Q:[
    {t:'text',a:'two|2',q:'The conference runs over ______ days.'},
    {t:'text',a:'sixteenth|16th|16',q:'Dates: the fifteenth and ______ of June.'},
    {t:'text',a:'eighty|80',q:'Standard fee: £______.'},
    {t:'text',a:'forty|40',q:'Students pay £______.'},
    {t:'text',a:'id|identification',q:'Students need a valid ______.'},
    {t:'text',a:'programme|program',q:'The fee includes all talks, lunch and a printed ______.'},
    {t:'text',a:'twenty-five|25|twenty five',q:'The optional dinner costs an extra £______.'},
    {t:'text',a:'hotel',q:'The conference is held at the Grand ______.'},
    {t:'text',a:'first|1st|1',q:'Register by the ______ of June.'},
    {t:'choice',a:'B',q:'The name badge will be sent by:',opts:['A) post','B) email','C) text','D) collected']}
   ]},
  {title:'Hilltop Observatory tour',
   transcript:"Welcome to the Hilltop Observatory. First, we'll visit the planetarium, where a twenty-minute show... sorry, thirty minutes, will take you on a journey through the night sky. After that, weather permitting, we'll use the large telescope to observe the Moon and, tonight, the planet Jupiter — no, Saturn, whose rings should be clearly visible. Please note that the observatory can get quite cold, so warm clothing is recommended, as the telescope dome has no heating. Red torches are provided, as ordinary white light affects our night vision. The gift shop, which sells star charts and models, closes at nine. Finally, please avoid using bright screens, as they disturb other visitors' viewing.",
   Q:[
    {t:'text',a:'planetarium',q:'First they visit the ______.'},
    {t:'text',a:'thirty|30',q:'The show lasts ______ minutes.'},
    {t:'text',a:'telescope',q:'They will use the large ______ to observe the sky.'},
    {t:'text',a:'saturn',q:'Tonight they will observe the Moon and the planet ______.'},
    {t:'text',a:'rings|ring',q:"Saturn's ______ should be clearly visible."},
    {t:'text',a:'clothing|clothes',q:'Warm ______ is recommended.'},
    {t:'text',a:'red',q:'______ torches are provided.'},
    {t:'text',a:'vision',q:'White light affects our night ______.'},
    {t:'text',a:'nine|9',q:'The gift shop closes at ______.'},
    {t:'choice',a:'B',q:'Visitors are asked to avoid:',opts:['A) warm clothes','B) bright screens','C) red torches','D) the telescope']}
   ]},
  {title:'Tutorial: an astronomy project',
   transcript:"You wanted to discuss your astronomy project? Yes, I want to study how light pollution affects our view of the stars. How will you investigate it? I'll count how many stars are visible from different locations. How many locations? I'll compare two... actually three: the city centre, the suburbs, and the countryside. And when will you observe? On clear nights, away from a full moon, as moonlight interferes. How will you record the data? I'll use a chart and take photographs. How long should the report be? About two thousand... sorry, three thousand words. When's it due? The end of April — no, May. Remember to include a map of your locations.",
   Q:[
    {t:'text',a:'light',q:'The project is about how ______ pollution affects the view of stars.'},
    {t:'text',a:'stars|star',q:'She will count how many ______ are visible.'},
    {t:'text',a:'three|3',q:'She will compare ______ locations.'},
    {t:'text',a:'countryside',q:'The locations are the city centre, suburbs and the ______.'},
    {t:'text',a:'moon',q:"She'll observe on clear nights away from a full ______."},
    {t:'text',a:'photographs|photos|photgraph',q:'She will record data using a chart and ______.'},
    {t:'text',a:'three|3',q:'Report length: about ______ thousand words.'},
    {t:'text',a:'may',q:'Due date: the end of ______.'},
    {t:'text',a:'map',q:'She should include a ______ of her locations.'},
    {t:'choice',a:'B',q:'She avoids a full moon because moonlight:',opts:['A) is too dim','B) interferes','C) is colourful','D) is cold']}
   ]},
  {title:'Lecture: the solar system',
   transcript:"Today we'll take a tour of our solar system. At its centre is the Sun, a star that contains almost all the mass of the solar system and provides the energy that makes life on Earth possible. Orbiting the Sun are nine... sorry, eight planets. The four closest, including Earth, are small and rocky, while the four outer planets are giant balls of gas and ice. The largest planet, Jupiter, is so big that all the others could fit inside it. Beyond the planets lie countless smaller objects, including asteroids and comets. Since the first satellite was launched in 1967 — sorry, 1957 — we have sent probes to every planet and landed robots on Mars. The next great goal, many believe, is to send humans to Mars.",
   Q:[
    {t:'text',a:'sun',q:'At the centre of the solar system is the ______.'},
    {t:'text',a:'eight|8',q:'There are ______ planets orbiting the Sun.'},
    {t:'text',a:'rocky',q:'The four closest planets are small and ______.'},
    {t:'text',a:'ice',q:'The four outer planets are giant balls of gas and ______.'},
    {t:'text',a:'jupiter',q:'The largest planet is ______.'},
    {t:'text',a:'comets|comet',q:'Beyond the planets lie asteroids and ______.'},
    {t:'text',a:'1957',q:'The first satellite was launched in ______.'},
    {t:'text',a:'mars',q:'Robots have been landed on ______.'},
    {t:'choice',a:'B',q:'The four outer planets are made of:',opts:['A) rock','B) gas and ice','C) metal','D) water']},
    {t:'choice',a:'B',q:'Many believe the next great goal is to send humans to:',opts:['A) the Moon','B) Mars','C) Jupiter','D) the Sun']}
   ]}
 ],
 read:[
  {title:'The Hunt for Exoplanets',
   paras:[
    "List of Headings —  i) A question as old as humanity   ii) The problem of the glare   iii) Watching for a dimming   iv) Feeling the star wobble   v) Worlds beyond counting   vi) The search for another Earth   vii) The birth of a star   viii) Measuring a star's age",
    "A   Are there other worlds like our own, rocky planets circling distant stars, perhaps even harbouring life of their own? For thousands of years, this was a question that could only be asked by philosophers, dreamers and poets, since no one could seriously hope to answer it. A planet orbiting another star — what astronomers today call an 'exoplanet' — would be so impossibly faint, and so unimaginably far away, that finding one seemed for ever beyond human reach. Only within the last thirty years or so has this ancient question at last become a question for hard science rather than for idle speculation, and the results of the search have been nothing short of astonishing.",
    "B   The first great difficulty is that planets, unlike stars, do not shine with any light of their own; they merely reflect, dimly, the light of the star that they orbit. Seen from many light years away, such a faint reflected glimmer is completely and hopelessly lost in the overwhelming glare of the nearby star it circles — rather like trying to spot a single firefly hovering right next to a blazing searchlight, from a distance of many miles. For this reason, astronomers simply could not look for planets directly, and instead had to invent a series of ingenious indirect ways to detect the presence of planets that they could not actually see at all.",
    "C   One clever and early method detects the tiny 'wobble' of a star. Although we usually think of a planet as simply orbiting a fixed, motionless star, in truth the planet's own gravity tugs back on the star in return, causing the star itself to move very slightly back and forth, tracing a tiny circle, as the planet swings around it. This motion is far too small ever to be seen directly through any telescope, but it can nonetheless be precisely measured through subtle, regular changes in the colour of the star's light as the star moves first towards us and then away from us. Detecting this tell-tale wobble reveals the presence of an unseen planet, and can even hint at how heavy that planet is.",
    "D   An even more powerful and productive method watches instead for a regular dimming of the star's light. If a planet's orbit happens to be lined up so that it carries the planet directly between us and its star, then, once every orbit, the planet passes across the bright face of the star and blocks out a tiny fraction of its light, causing a small but perfectly regular dip in the star's apparent brightness. By staring steadily at many tens of thousands of stars all at once, for months or even years on end, and watching patiently for these characteristic dips to repeat at regular intervals, space telescopes have discovered exoplanets in truly enormous numbers, thousands upon thousands of them.",
    "E   The results of all this patient searching have utterly transformed astronomy in the space of a single generation. Far from being the rare and precious things they were once assumed to be, planets now appear to be genuinely commonplace throughout the universe. Most stars, it now seems clear, have at least one planet, and very many of them have whole families of planets, so that our own galaxy alone — just one of many billions of galaxies — must contain many billions upon billions of planets in total. What earlier generations could only wonder at and guess about is now firmly established and known: the universe, it turns out, is quite simply full of worlds.",
    "F   The ultimate prize in the whole search, however, is to find a planet that is truly like our own Earth: a rocky world, neither too large nor too small, orbiting at just the right distance from its star — neither too hot nor too cold — for liquid water, and therefore perhaps for life itself, to be able to exist on its surface. Several genuinely promising candidate planets of this kind have already been found and carefully studied, and astronomers are now busy designing and building a new generation of giant instruments that may, one day before very long, actually be able to detect the faint chemical signs of life itself in the atmospheres of these distant and tantalising worlds."
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'FALSE',q:'Exoplanets are easy to see directly with telescopes.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:"A planet's gravity causes its star to wobble slightly.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The dimming method detects planets that pass in front of their star.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Planets are now thought to be rare in the galaxy.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'exoplanet',q:'A planet around another star is called an ______.'},
    {t:'text',a:'brightness',q:"A planet blocks a tiny fraction of its star's light, causing a dip in ______."},
    {t:'text',a:'Earth',q:'The ultimate prize is to find a planet like ______.'}
   ]},
  {title:'The History of the Telescope',
   paras:[
    "A   For all of human history, until only about four hundred years ago, people could see no further out into space than their own unaided eyes would allow them. The stars were simply points of light in the night sky, and nothing more could ever be known of them; the planets were merely brighter, slowly wandering points. The invention of the telescope changed all of this for ever, and did so within a single generation, revealing a vast universe of previously undreamed-of wonders and, in the process, launching the entire science of modern astronomy. Few instruments in all of history have ever so completely transformed the way in which human beings understand their own place in the cosmos.",
    "B   The telescope was invented in the Netherlands around the year 1608, apparently by a humble spectacle-maker, as a simple device that used two glass lenses, one at each end of a tube, to make distant objects appear much closer and larger than they really were. Its first makers, however, thought of it chiefly as a handy practical instrument for sailors at sea and for soldiers on land, useful for spotting distant ships or approaching enemies before they arrived, and they had very little idea indeed of the profound scientific revolution that their modest little invention was about to bring about in the understanding of the heavens.",
    "C   The true revolution came the very following year, in 1609, when the Italian scientist Galileo Galilei built his own, much improved telescope and, crucially and famously, pointed it upward at the night sky, which almost no one before him had thought to do. What he saw through it astonished him and, in time, changed the world: mountains and deep craters on the surface of the Moon, four tiny moons of its own circling the distant planet Jupiter, and countless faint stars that were completely invisible to the naked eye. The heavens, it was suddenly and undeniably clear, were not the perfect, smooth and unchanging realm that people had always believed them to be, but were instead complex, varied and utterly full of surprises.",
    "D   Galileo's telescope, like all the very earliest ones, used glass lenses to gather and bend the light, but such 'refracting' telescopes suffered from a serious and annoying flaw: the lenses split the incoming white light into false, rainbow-like colours, which surrounded and blurred the image and badly spoiled the view. The elegant solution to this problem was devised later in the same century by the great English scientist Isaac Newton, who realised that light could be gathered and focused just as well, and with no false colours at all, by using a carefully curved mirror instead of a lens. Almost all of the large telescopes in use today are of this 'reflecting' design that Newton first pioneered.",
    "E   Over the following centuries, telescopes grew ever larger and larger, for one simple reason: a bigger mirror gathers more light, and more light reveals ever fainter and more distant objects, allowing astronomers to see further and further out into the depths of space and time. Yet all telescopes built on the ground, however large and however finely made, share one stubborn and inescapable problem: they must peer upward through the Earth's thick, restless and constantly shimmering atmosphere, which bends and blurs the incoming starlight. It is this very same shimmering of the air, in fact, that makes the stars appear to twinkle so prettily to the naked eye — a charming sight, but the sworn enemy of the serious astronomer.",
    "F   The obvious, if difficult and expensive, answer was to escape the blurring atmosphere altogether. Telescopes placed high up in orbit, out in space above all of the air, can see the universe with astonishing, perfect clarity, quite unspoilt by any shimmer, and such orbiting observatories have sent back breathtaking images of galaxies lying billions of light years away, near the very edge of the observable universe and close to the beginning of time itself. From its humble origins as two small lenses in a Dutch spectacle-maker's workshop, to today's giant, complex eyes floating silently in space, the telescope has continued, for four hundred years, to extend the reach of human sight ever further out into the cosmos."
   ],
   Q:[
    {t:'choice',a:'B',q:'The telescope was invented around 1608 in:',opts:['A) Italy','B) the Netherlands','C) England','D) Germany']},
    {t:'choice',a:'B',q:"Galileo's crucial step was to:",opts:['A) invent the telescope','B) point a telescope at the sky','C) make spectacles','D) sail with a telescope']},
    {t:'choice',a:'B',q:'Refracting telescopes had the flaw of:',opts:['A) being too small','B) splitting light into false colours','C) using mirrors','D) needing electricity']},
    {t:'choice',a:'B',q:"Isaac Newton's telescope gathered light using a:",opts:['A) lens','B) curved mirror','C) prism','D) second lens']},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes what Galileo saw through his telescope?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) explains why telescopes were placed in orbit?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the original inventor and intended uses?'},
    {t:'text',a:'D',q:"Which paragraph (A–F) describes Newton's solution to a problem with lenses?"},
    {t:'text',a:'E',q:"Which paragraph (A–F) describes the problem caused by the Earth's atmosphere?"},
    {t:'text',a:'spectacle',q:'The telescope was apparently invented by a ______-maker.'},
    {t:'text',a:'Moon|moon',q:'Galileo saw mountains and craters on the ______.'},
    {t:'text',a:'light',q:'A bigger mirror gathers more ______.'},
    {t:'text',a:'twinkle',q:'The atmosphere blurs the view and makes stars appear to ______.'}
   ]},
  {title:'The End of Privacy?',
   paras:[
    "A   Not so very long ago, privacy could be more or less taken for granted by almost everyone. What we did, what we said, and what we bought largely vanished from the record as soon as it was done, remembered only, if at all, by the few people who happened to be present at the time. Today, by stark contrast, we live in a world of near-constant recording and observation. Our phones quietly track wherever we go, our internet searches and our every purchase are silently logged and stored away, and cameras watch over a great many of our public spaces. Some people have begun to ask, quite seriously, whether privacy, as previous generations comfortably understood it, still meaningfully exists at all any more.",
    "B   A great deal of this data is gathered, quietly and continuously, by private companies. Every single website we visit, every video we watch and every product we buy or even merely pause to look at adds another small piece to a remarkably detailed profile of who we are, a profile which can then be used both to predict our future behaviour and to target us precisely with advertising designed just for us. In return for 'free' services such as search engines, maps and social networks, we hand over information about ourselves, our tastes, our friends and our movements on a scale that would once have seemed utterly unimaginable — and, very often, we do so without ever fully realising just how much of ourselves we are quietly giving away.",
    "C   Governments, as well as companies, collect vast amounts of data on their own citizens, and here the concerns raised are of a rather different and more serious kind. Surveillance by the state can undoubtedly help to catch dangerous criminals and to prevent terrorist attacks before they happen, and few people object to that in principle, at least where it is properly and lawfully controlled. But the very same powerful surveillance tools, critics gravely warn, can all too easily be turned against perfectly ordinary, law-abiding citizens, and used to monitor, intimidate and suppress political dissent, protest and free speech — especially in those countries where there are few effective legal limits on the power of the state over the individual.",
    "D   Defenders of these sweeping developments argue that the benefits are very real and immediate, while the fears are greatly exaggerated. Personalised digital services, carefully tailored to our own tastes, are genuinely more convenient and useful; medical data, when it is shared and analysed on a large scale, can reveal hidden patterns of disease that save many thousands of lives; and, as the old saying rather glibly goes, those who have done nothing wrong have nothing at all to hide, and so nothing to fear from being watched. Privacy, on this comfortable and reassuring view, is simply a small and fair price to pay for the many undeniable conveniences and benefits of modern digital life.",
    "E   Critics, however, firmly reject this comfortable line of reasoning. Privacy, they argue, has never really been about hiding wrongdoing at all, but is about something far more fundamental: the basic human freedom to think, to speak, to explore ideas and to live one's own life without being constantly watched, recorded and silently judged by others. People, it is well known, behave quite differently, and far more cautiously, when they know that they are being observed, and a whole society living under constant, unblinking surveillance, the critics warn, may slowly become a fearful, cautious and deeply conformist one, in which no one quite dares to be different or to challenge those in authority.",
    "F   Most experts on the subject now believe that the real answer lies not in rejecting or trying to ban the new technology, which is in any case practically impossible, but rather in carefully controlling and governing it. Clear and strong laws setting out exactly what data may and may not be collected, and precisely how it may and may not be used, they argue, together with a firm legal right for every individual to see, to correct and to delete the data that is held about them, could go a very long way towards preserving all the very real benefits of the technology while at the same time protecting the precious personal freedom that privacy alone makes possible. The goal, they insist, should be balance and control, not helpless surrender."
   ],
   Q:[
    {t:'choice',a:'YES',q:'In the past, most of what people did soon disappeared without record.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:"Companies collect data only with people's full understanding.",opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Few people object to governments using surveillance to catch criminals.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Defenders argue that privacy fears are exaggerated.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Critics believe privacy is only about hiding wrongdoing.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most experts think technology should be rejected to protect privacy.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes how companies build profiles of us?'},
    {t:'text',a:'D',q:"Which paragraph (A–F) gives the 'nothing to hide' argument?"},
    {t:'text',a:'C',q:'Which paragraph (A–F) raises the concern that surveillance could suppress dissent?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) proposes the solution of clear laws?'},
    {t:'text',a:'where we go|location|our location|movements',q:'What do our phones track about us?'},
    {t:'text',a:'data|information',q:'Companies give us free services in return for our ______.'},
    {t:'text',a:'live',q:'Critics say privacy is about the freedom to think, speak and ______ without being watched.'},
    {t:'text',a:'delete',q:'Experts want individuals to have the right to see and ______ their own data.'}
   ]}
 ],
 writing:{
  img:"<svg viewBox='0 0 560 320' width='100%' style='max-width:560px;background:#fff;border:1px solid #ccc;border-radius:6px'><text x='280' y='18' text-anchor='middle' font-size='13' font-weight='bold'>Successful space launches by two countries, 2000–2020</text><line x1='60' y1='30' x2='60' y2='250' stroke='#333'/><line x1='60' y1='250' x2='510' y2='250' stroke='#333'/><g font-size='10' fill='#555'><text x='52' y='253' text-anchor='end'>0</text><text x='52' y='198' text-anchor='end'>10</text><text x='52' y='143' text-anchor='end'>20</text><text x='52' y='88' text-anchor='end'>30</text><text x='52' y='33' text-anchor='end'>40</text><line x1='60' y1='195' x2='500' y2='195' stroke='#eee'/><line x1='60' y1='140' x2='500' y2='140' stroke='#eee'/><line x1='60' y1='85' x2='500' y2='85' stroke='#eee'/><text x='60' y='265' text-anchor='middle'>2000</text><text x='170' y='265' text-anchor='middle'>2005</text><text x='280' y='265' text-anchor='middle'>2010</text><text x='390' y='265' text-anchor='middle'>2015</text><text x='500' y='265' text-anchor='middle'>2020</text></g><polyline fill='none' stroke='#1a73e8' stroke-width='2.5' points='60,223 170,195 280,168 390,140 500,85'/><polyline fill='none' stroke='#e0a800' stroke-width='2.5' points='60,206 170,184 280,195 390,151 500,58'/><g font-size='11'><rect x='180' y='288' width='16' height='4' fill='#1a73e8'/><text x='202' y='293'>Country A</text><rect x='300' y='288' width='16' height='4' fill='#e0a800'/><text x='322' y='293'>Country B</text></g></svg>",
  task1:"The line graph below shows the number of successful space launches carried out by two countries between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Governments should spend money on scientific research even if it has no immediate practical benefits. To what extent do you agree or disagree? Write at least 250 words."
 }
},

/* ===================== MOCK 15 ===================== */
{
 name:'Mock 15',
 blurb:'Sports club · Heritage festival · Language & culture + Writing origins · Endangered languages · Football',
 listen:[
  {title:'Tennis club membership',
   transcript:"Hello, I'd like to join the local tennis club. Great. Adult membership is one hundred and twelve pounds... sorry, one hundred and twenty a year, and junior membership, for under-eighteens, is sixty pounds. This gives you access to all six courts, four of which are floodlit for evening play. Coaching sessions are available for an extra charge, at fifty... sorry, fifteen pounds an hour. Members can book courts online up to a week in advance, not a month. There's a clubhouse with changing rooms and a small cafe. To join, you'll need to fill in a form and provide one passport photo. New members are also invited to a free introductory session with a coach. The club is closed on Mondays, not Sundays.",
   Q:[
    {t:'text',a:'120|one hundred and twenty',q:'Adult membership: £______ a year.'},
    {t:'text',a:'eighteens|18|eighteen',q:'Junior membership is for under-______.'},
    {t:'text',a:'sixty|60',q:'Junior membership costs £______.'},
    {t:'text',a:'six|6',q:'There are ______ courts.'},
    {t:'text',a:'floodlit',q:'Four courts are ______ for evening play.'},
    {t:'text',a:'fifteen|15',q:'Coaching costs £______ an hour.'},
    {t:'text',a:'week',q:'Members can book courts online up to a ______ in advance.'},
    {t:'text',a:'cafe|café',q:'The clubhouse has changing rooms and a small ______.'},
    {t:'text',a:'photo',q:'To join, provide a form and one passport ______.'},
    {t:'choice',a:'B',q:'The club is closed on:',opts:['A) Sundays','B) Mondays','C) weekends','D) never']}
   ]},
  {title:'Old Town Heritage Festival',
   transcript:"Welcome to the Old Town Heritage Festival. The festival celebrates the town's history, which dates back nearly a thousand years. Throughout the day, you can watch traditional crafts such as pottery and weaving being demonstrated in the market square. At ten o'clock — sorry, eleven — there's a costumed parade through the main street. For families, there are activities in the castle grounds, including archery. Traditional music will be performed on the bandstand every hour. Food stalls offer local specialities. Please note that the main street is closed to traffic all day. The festival ends with a firework display at eight... no, nine in the evening. Programmes are available free at the information point, not the ticket office.",
   Q:[
    {t:'text',a:'a thousand|1000|one thousand|thousand',q:"The town's history dates back nearly ______ years."},
    {t:'text',a:'weaving',q:'Traditional crafts include pottery and ______.'},
    {t:'text',a:'square',q:'Crafts are demonstrated in the market ______.'},
    {t:'text',a:'eleven|11',q:"The costumed parade is at ______ o'clock."},
    {t:'text',a:'archery',q:'Family activities in the castle grounds include ______.'},
    {t:'text',a:'bandstand',q:'Music is performed on the ______ every hour.'},
    {t:'text',a:'specialities|specialties|speciality',q:'Food stalls offer local ______.'},
    {t:'text',a:'traffic',q:'The main street is closed to ______ all day.'},
    {t:'text',a:'firework|fireworks',q:'The festival ends with a ______ display at nine.'},
    {t:'choice',a:'B',q:'Free programmes are available at the:',opts:['A) beer tent','B) information point','C) castle','D) bandstand']}
   ]},
  {title:'Students planning a history presentation',
   transcript:"Our history presentation is on an ancient civilisation. Which one should we pick? How about the Aztecs... no, the Maya? Good choice. What aspect should we focus on? I think their achievements in astronomy and their calendar. And their writing system, which was very advanced. What about their decline? That's still debated; possibly drought and war. We should show a map of where they lived, in Central America, not South America. How long is the presentation? Ten minutes... sorry, fifteen. Should we use images? Definitely, lots of pictures of their temples. When's it due? The nineteenth... no, the ninth of March. Let's meet on Friday to put the slides together.",
   Q:[
    {t:'text',a:'civilisation|civilization',q:'The presentation is on an ancient ______.'},
    {t:'text',a:'maya',q:'They choose the ______.'},
    {t:'text',a:'calendar',q:'They focus on achievements in astronomy and their ______.'},
    {t:'text',a:'writing',q:'The Maya had an advanced ______ system.'},
    {t:'text',a:'war',q:'Their decline was possibly caused by drought and ______.'},
    {t:'text',a:'map',q:'They will show a ______ of where the Maya lived.'},
    {t:'text',a:'central',q:'The Maya lived in ______ America.'},
    {t:'text',a:'fifteen|15',q:'Presentation length: ______ minutes.'},
    {t:'text',a:'temples|temple',q:'They will include pictures of their ______.'},
    {t:'choice',a:'B',q:"The cause of the Maya's decline is described as:",opts:['A) certain','B) still debated','C) unknown to all','D) recent']}
   ]},
  {title:'Lecture: language and culture',
   transcript:"Today we will explore the relationship between language and culture. Language is far more than a tool for communication; it carries the history, values, and identity of the people who speak it. Every language has words and expressions that reflect what matters to a particular culture. When a language is lost, therefore, it is not just words that disappear, but a unique way of seeing the world. Linguists estimate that of the roughly six thousand... actually about seven thousand languages spoken today, nearly half may vanish by the end of this century. Many are spoken by only a few elderly people, with children no longer learning them. Efforts are now under way to record and revive endangered languages.",
   Q:[
    {t:'text',a:'identity',q:'Language carries the history, values and ______ of its speakers.'},
    {t:'text',a:'communication',q:'Language is more than a tool for ______.'},
    {t:'text',a:'culture',q:'Every language reflects what matters to a particular ______.'},
    {t:'text',a:'world',q:'When a language is lost, a unique way of seeing the ______ disappears.'},
    {t:'text',a:'seven|7',q:'There are roughly ______ thousand languages spoken today.'},
    {t:'text',a:'half',q:'Nearly ______ may vanish by the end of the century.'},
    {t:'text',a:'elderly|old',q:'Many endangered languages are spoken by only a few ______ people.'},
    {t:'text',a:'revive',q:'Efforts are under way to record and ______ endangered languages.'},
    {t:'choice',a:'B',q:'By 2100, nearly half of languages may:',opts:['A) grow','B) vanish','C) merge','D) change']},
    {t:'choice',a:'B',q:'Each language is described as an irreplaceable part of human:',opts:['A) history','B) heritage','C) science','D) economy']}
   ]}
 ],
 read:[
  {title:'How Metals Shaped History',
   paras:[
    "List of Headings —  i) The first metals used   ii) A stronger alloy   iii) The age of iron   iv) Metals from the sky and the ground   v) The precious metals   vi) Metals in the modern world   vii) How metals are recycled   viii) The many colours of metals",
    "A   Human history is so deeply bound up with metals that whole ages of it are named after them. Before people learned to use metals at all, they made their tools and their weapons entirely from stone, bone, antler and wood. The very first metals to be used were those, such as gold and copper, that can occasionally be found in a more or less pure form lying in nature, or that can be extracted from certain rocks with relatively little heat. Being soft and easily hammered and shaped into useful forms, copper in particular was a great improvement on brittle stone for making many kinds of tool, and its use gradually spread far and wide.",
    "B   The next great step forward was the discovery that mixing copper with a small amount of another metal, tin, produced an entirely new substance, bronze, that was very much harder and more durable than soft copper alone. A deliberate mixture of two or more metals like this is called an alloy. Bronze proved so useful and so important to the peoples who learned to make it that an entire era of prehistory, the Bronze Age, is named after it — a long period during which the new alloy was used for making everything from sharp swords and shields to strong ploughs and axes.",
    "C   Iron is far more common and abundant in the rocks of the Earth than the metals needed to make bronze, but it is also very much harder to work with, requiring far higher temperatures to extract from its ore and then to shape into tools. Once people had at last mastered this difficult and demanding craft, however, iron, being both cheaper and stronger than bronze, gradually and largely replaced it, ushering in a new era known as the Iron Age. Later still, people discovered that adding just a little carbon to iron produced steel, an even better material which is harder and tougher still, and which remains absolutely vital to us today.",
    "D   Some metals, by contrast, were valued far less for their practical usefulness than for their beauty, their shine and their rarity. Gold and silver, which do not rust or tarnish easily and which can be worked by skilled hands into fine and lasting ornaments and jewellery, have been treasured and prized by human beings for many thousands of years. And precisely because they were at once rare, durable and universally desired by almost everyone, gold and silver naturally became the basis for money and coinage in a great many different societies right across the world, quite independently of one another.",
    "E   All of these metals, with the exception of the small amounts of gold and copper found lying pure in nature, must be extracted by human effort from rocks called ores, in which the metal is chemically combined and locked together with other, unwanted substances. This process of extraction, called smelting, requires great heat and skill. Curiously, however, some of the very earliest pieces of iron ever worked by human hands did not come out of the ground at all, but had fallen from the sky, in the form of rare iron-rich meteorites — 'iron from heaven', as some ancient peoples rather fittingly called it.",
    "F   In the modern world, metals are more important to us than ever before, even though we now rarely stop to notice them at all. Steel forms the hidden skeletons of our tallest buildings, our bridges and our vehicles; copper carries electricity silently through the countless hidden wires that power our homes and cities; and light, strong aluminium is what makes affordable air travel possible in the first place. From the first soft lump of hammered copper to the advanced alloys of a modern jet engine, the long story of human civilisation is, to a truly remarkable degree, the story of our steadily growing mastery over the metals of the Earth."
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'The first metals used were those found pure in nature or easily extracted.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Bronze is softer than copper.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Iron is rarer in the Earth than the metals needed for bronze.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some of the earliest worked iron came from meteorites.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'alloy',q:'A mixture of metals such as bronze is called an ______.'},
    {t:'text',a:'tin',q:'Bronze is made by mixing copper with ______.'},
    {t:'text',a:'steel',q:'Adding a little carbon to iron produces ______.'}
   ]},
  {title:'Decoding the Past: The Rosetta Stone',
   paras:[
    "A   For many centuries, the ancient Egyptian script known as hieroglyphics — the beautiful and intricate pictures carved onto temple walls and painted inside tombs — was a complete and total mystery to everyone. The ancient Egyptians had carefully written down a great deal about their long history, their complex religion and their everyday lives, but the knowledge of how actually to read their picture-writing had, over the centuries, been utterly and completely lost, forgotten even by their own distant descendants. Their great civilisation seemed to be speaking directly to all later ages, but in a strange and silent language that no living person on Earth could any longer understand at all.",
    "B   The key to finally unlocking this ancient mystery was found entirely by accident. In 1799, a group of French soldiers who were stationed in Egypt, and who were digging near the town of Rosetta, happened to uncover a large, heavy slab of dark stone that was covered all over in carved writing. What made this particular stone so utterly priceless to scholars was that exactly the same text had been carved onto it three separate times, in three completely different scripts: in hieroglyphics at the top, in a later, simpler Egyptian script in the middle, and, crucially, in ancient Greek at the bottom — and ancient Greek was a language that European scholars could still read perfectly well.",
    "C   The Greek text at the bottom, therefore, provided scholars with an exact translation of the unknown Egyptian writing carved above it, since all three versions said the very same thing. In principle, then, the puzzle looked simple enough: by patiently comparing the known and readable Greek words with the unknown hieroglyphic symbols, scholars ought to be able to work out, symbol by symbol, what each of the mysterious Egyptian signs actually meant. In practice, however, it proved to be fiendishly and maddeningly difficult, and, despite the vital clue that the stone provided, it took more than twenty years of slow, painstaking and often frustrating work before the script was finally cracked at all.",
    "D   The final breakthrough was made by a brilliant young Frenchman named Jean-François Champollion, who had a remarkable gift for languages and had taught himself a great many of them. He realised, against the firm assumption of almost everyone before him, that hieroglyphics were not, in fact, simply pictures each standing for a whole word or idea, as had so long been believed. Instead, he grasped that many of the individual symbols actually represented sounds, much like the letters of our own alphabet, and were used to spell words out phonetically. This single crucial insight was the true key that at last unlocked the entire ancient script and allowed it to be read once more, after so many centuries of silence.",
    "E   The consequences of Champollion's achievement were absolutely profound and far-reaching. Suddenly, and for the first time in well over a thousand years, the vast written record of one of the world's very greatest and oldest civilisations could be read and understood once again. Historians could now learn about ancient Egypt not merely from the distant guesses and second-hand reports of foreign outsiders, but directly from the actual words of the ancient Egyptians themselves, written in their own hand. It was as though a great window had been thrown wide open onto three thousand years of previously silent human history, revealing it in extraordinary and vivid detail.",
    "F   The Rosetta Stone has, ever since, become a powerful symbol of the very idea of a key that unlocks a mystery — so much so, indeed, that its famous name has now been given to popular language-learning software, and is used more widely to mean any crucial clue that suddenly makes sense of something baffling. The stone itself, now one of the most visited objects in the entire British Museum, stands as a lasting reminder that a single, entirely chance discovery can sometimes, when it falls into the right and patient hands, reopen a door to the distant past that had seemed to be firmly closed and locked for ever."
   ],
   Q:[
    {t:'choice',a:'B',q:'Before the Rosetta Stone, hieroglyphics were:',opts:['A) easy to read','B) a complete mystery','C) a modern invention','D) written in Greek']},
    {t:'choice',a:'C',q:'The Rosetta Stone was valuable because it carried the same text in:',opts:['A) one script','B) two languages','C) three scripts','D) pictures only']},
    {t:'choice',a:'B',q:'The script that scholars could already read was:',opts:['A) hieroglyphics','B) ancient Greek','C) Latin','D) later Egyptian']},
    {t:'choice',a:'B',q:'Champollion realised that many hieroglyphic symbols represented:',opts:['A) whole ideas','B) sounds','C) numbers','D) gods']},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the accidental discovery of the stone?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the key insight that unlocked the script?'},
    {t:'text',a:'F',q:"Which paragraph (A–F) explains how the stone's name is used today?"},
    {t:'text',a:'A',q:'Which paragraph (A–F) explains why hieroglyphics had been a mystery?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the effect of being able to read Egyptian records?'},
    {t:'text',a:'Rosetta',q:'The stone was found near the town of ______.'},
    {t:'text',a:'twenty|20',q:'Decoding the script took more than ______ years.'},
    {t:'text',a:'languages|language',q:'Champollion had a gift for ______.'},
    {t:'text',a:'themselves',q:'The stone let historians read the words of the Egyptians ______.'}
   ]},
  {title:'Is Handwriting Worth Saving?',
   paras:[
    "A   As keyboards and touchscreens quietly take over more and more of the writing that we do, an interesting question is increasingly being asked in schools and homes all around the world: does handwriting still really matter at all? Some people argue firmly that it is now a dying skill, no more genuinely worth teaching to modern children than how to use an old-fashioned quill pen or how to churn butter. Others insist, just as firmly, that abandoning handwriting altogether would be a serious and lasting mistake that we would soon come to regret. The debate, it turns out, is a good deal more interesting and complicated than it first appears to be.",
    "B   Those who would happily let handwriting quietly fade away point to what seems obvious. Almost all of the writing that anyone does today, they observe, is already done on electronic devices; and typing is faster, neater and far more easily corrected, copied, searched and shared than any handwriting could ever be. The many hours currently spent in schools teaching young children to form their letters neatly by hand, they therefore argue, could surely be much better spent instead on teaching skills that are far more useful in a modern digital world, such as fast, accurate typing, or even the basic principles of computer coding.",
    "C   Defenders of handwriting reply that it is, in truth, far more than merely an old and outdated way of putting words down on paper. A growing body of scientific research now strongly suggests that the physical, muscular act of actually forming each letter by hand helps young children to learn to read, and to recognise their letters, distinctly more effectively than typing the very same letters on a keyboard does. The slow, deliberate and effortful movement of the hand and the pen, it seems, somehow helps the developing brain to notice, to learn and then firmly to remember the precise shape of each individual letter.",
    "D   There may well be real benefits for older students too, right up to university level. Several studies have found that students who take their lecture notes by hand often go on to understand and to remember the material of a lecture noticeably better than those who type their notes rapidly on a laptop. The likely reason is revealing: because writing by hand is necessarily slower than typing, it quietly forces the note-taker to listen carefully and then to select and summarise the key points in their own words, rather than simply and mindlessly copying down every single word that is said — and it is precisely this extra mental effort that genuinely aids learning and lasting understanding.",
    "E   Handwriting also has a value that is rather harder to measure precisely, but which is very real all the same. A handwritten letter or card carries a warm, personal touch that a cold typed or printed message simply cannot match, showing that someone took real time and care over it; a person's handwritten signature remains, even now, a legal mark of their unique identity; and for a great many people, the simple physical act of writing by hand, with a good pen on good paper, is a quiet pleasure in itself. To lose handwriting from the world entirely, its defenders argue with real feeling, would be to lose something genuinely and irreplaceably human.",
    "F   Most educators today, having carefully weighed both sides of the argument, now suggest a sensible middle way through it. Children should most certainly learn to type, and to type well, they readily agree, since fast and accurate typing is now an essential skill for study and for work in the modern world, and there is no going back on that. But children should not, at the same time, entirely abandon handwriting, which, as the research increasingly suggests, brings its own real cognitive and personal benefits that typing simply cannot replace. The two skills, in short, are not really rivals at all, competing for the same scarce hours, but are far better thought of as useful companions, each with its own proper and valuable place.",
   ],
   Q:[
    {t:'choice',a:'YES',q:'Some people argue that handwriting is a dying skill.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Typing is slower than writing by hand.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Forming letters by hand may help young children learn to read.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Students who type notes always remember lectures better than those who write by hand.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Writing by hand forces note-takers to select and summarise.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most educators believe children should stop learning to type.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) argues that typing time could be better spent?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the benefit of handwriting for young children learning to read?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the personal and human value of handwriting?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) gives the balanced conclusion of most educators?'},
    {t:'text',a:'faster|neater|speed',q:'Name one advantage of typing mentioned in the passage.'},
    {t:'text',a:'summarise|summarize',q:'Taking notes by hand forces the writer to select and ______.'},
    {t:'text',a:'touch',q:'A handwritten letter carries a personal ______ that a typed message cannot.'},
    {t:'text',a:'companions|companion',q:'Most educators say typing and handwriting are not rivals but ______.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Speakers of five languages (millions)</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Language</th><th style='border:1px solid #999;padding:5px 10px'>First language</th><th style='border:1px solid #999;padding:5px 10px'>Second language</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Mandarin</td><td style='border:1px solid #999;padding:5px 10px'>920</td><td style='border:1px solid #999;padding:5px 10px'>200</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>English</td><td style='border:1px solid #999;padding:5px 10px'>380</td><td style='border:1px solid #999;padding:5px 10px'>750</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Spanish</td><td style='border:1px solid #999;padding:5px 10px'>480</td><td style='border:1px solid #999;padding:5px 10px'>75</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Hindi</td><td style='border:1px solid #999;padding:5px 10px'>340</td><td style='border:1px solid #999;padding:5px 10px'>270</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Arabic</td><td style='border:1px solid #999;padding:5px 10px'>310</td><td style='border:1px solid #999;padding:5px 10px'>130</td></tr></table>",
  task1:"The table below shows the number of people (in millions) who speak five major languages as a first and as a second language. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that globalisation is a threat to local cultures, while others think it helps them to develop. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 16 (Exam Level) ===================== */
{
 name:'Mock 16 — Exam Level',
 blurb:'🔴 Holiday cottage · Leisure centre · Chemistry experiment + Monarch butterflies · The wheel · Exotic pets',
 listen:[
  {title:'Booking a holiday cottage',
   transcript:"Good morning, Coastal Cottages, how can I help? I'd like to book a holiday cottage. Certainly, your surname? Hargreaves, H-A-R-G-R-E-A-V-E-S. Which cottage would you like? The Sea View cottage, please. For how many nights? Seven... actually, let's make it five. And your arrival date? The second of August — sorry, the twelfth. How many guests? Six... no, four of us. The price is ninety pounds a night — sorry, ninety-five in August. Ninety-five, that's fine. We ask for a deposit of one hundred pounds, and the price includes parking and wifi. Are pets allowed? We have a dog. Normally not, but for the Sea View cottage, yes, pets are allowed. And the key? You collect the key from our office in the village, not from the cottage itself.",
   Q:[
    {t:'text',a:'hargreaves',q:'Surname: ______'},
    {t:'text',a:'sea view|seaview|sea-view',q:'Cottage name: ______ cottage'},
    {t:'text',a:'five|5',q:'Number of nights: ______'},
    {t:'text',a:'twelfth|12th|12',q:'Arrival date: ______ of August'},
    {t:'text',a:'four|4',q:'Number of guests: ______'},
    {t:'text',a:'95|ninety-five',q:'Price per night: £______'},
    {t:'text',a:'100|one hundred',q:'Deposit: £______'},
    {t:'text',a:'wifi|wi-fi|internet',q:'The price includes parking and ______.'},
    {t:'text',a:'allowed',q:'Pets are ______.'},
    {t:'choice',a:'B',q:'The key is collected from:',opts:['A) the cottage','B) the office in the village','C) reception','D) by post']}
   ]},
  {title:'New leisure centre facilities',
   transcript:"Welcome to the new Parkview Leisure Centre. Let me tell you what we offer. Our swimming pool is twenty-five metres long, with a separate learner pool for children. The gym is on the first floor — sorry, the second floor — and is open all day. Fitness classes such as yoga and spinning must be booked online, not at reception. Please note the sauna is closed on Mondays for cleaning. The café on the ground floor serves hot drinks and snacks. The lockers require a one-pound coin, which is returned when you finish. Entry is free for under-sixteens... sorry, under-fives; older children pay half price. The centre is busiest after six in the evening, so mornings are quieter. Parking is free for members but costs two pounds for visitors. And to join, you'll need to bring photo ID.",
   Q:[
    {t:'text',a:'25|twenty-five',q:'The pool is ______ metres long.'},
    {t:'text',a:'second|2nd',q:'The gym is on the ______ floor.'},
    {t:'text',a:'online',q:'Fitness classes must be booked ______.'},
    {t:'text',a:'mondays|monday',q:'The sauna is closed on ______.'},
    {t:'text',a:'snacks',q:'The café serves hot drinks and ______.'},
    {t:'text',a:'coin',q:'Lockers require a one-pound ______.'},
    {t:'text',a:'under-fives|under fives|under-5s',q:'Entry is free for ______.'},
    {t:'text',a:'six|6|6pm',q:'The centre is busiest after ______.'},
    {t:'choice',a:'B',q:'Parking is:',opts:['A) always free','B) free for members','C) always paid','D) not available']},
    {t:'choice',a:'C',q:'To join, you need:',opts:['A) a passport','B) a photo','C) photo ID','D) a fee']}
   ]},
  {title:'Two students plan a chemistry experiment',
   transcript:"Ben, what's our chemistry experiment going to test? How temperature affects the rate of a reaction. Good. So what do we change? The temperature of the acid, obviously. And which metal do we use? Zinc... actually, magnesium reacts more clearly. What do we measure? The volume of gas produced, and how long it takes. How many trials? Three... let's do five, to be reliable. What about safety? We must wear goggles the whole time. How do we record the results? In a table, then we'll turn it into a graph. When's it due? Week five... sorry, week six. Who writes up the method? I'll do the method if you do the results. Deal, so you, Ben, write the method. Right.",
   Q:[
    {t:'text',a:'rate',q:'The experiment tests how temperature affects the ______ of a reaction.'},
    {t:'text',a:'temperature',q:'The variable they change is the ______.'},
    {t:'text',a:'magnesium',q:'The metal used is ______.'},
    {t:'text',a:'gas',q:'They measure the volume of ______ produced.'},
    {t:'choice',a:'B',q:'Number of trials:',opts:['A) 3','B) 5','C) 10','D) 20']},
    {t:'text',a:'goggles',q:'For safety they must wear ______.'},
    {t:'text',a:'table',q:'Results are recorded in a ______.'},
    {t:'text',a:'graph',q:'The results are presented as a ______.'},
    {t:'choice',a:'C',q:'Deadline:',opts:['A) week 4','B) week 5','C) week 6','D) week 8']},
    {t:'choice',a:'A',q:'The method is written by:',opts:['A) Ben','B) the other student','C) both','D) the teacher']}
   ]},
  {title:'Lecture: the science of dreams',
   transcript:"Today's lecture concerns the science of dreams. Dreams occur mainly during a stage of sleep called REM sleep, which stands for rapid eye movement, because the eyes dart about beneath the closed lids. For years dreams were a mystery, first studied scientifically only in the 1940s — sorry, the 1950s. One leading theory is that dreaming helps to process and store memory, sorting through the day's experiences. Unpleasant dreams, or nightmares, are often linked to stress and anxiety. Interestingly, most dreams are quickly forgotten within minutes of waking. Some people can even become aware that they are dreaming and control the dream, an experience called lucid dreaming. During dreams, the emotional centres of the brain are especially active, which may be why dreams feel so vivid. Animals, too, appear to dream, showing similar brain activity. Yet despite decades of research, the true purpose of dreaming remains debated.",
   Q:[
    {t:'text',a:'rem',q:'Dreams occur mainly during ______ sleep.'},
    {t:'text',a:'movement',q:'REM stands for rapid eye ______.'},
    {t:'text',a:'memory|memories',q:'Dreaming may help to process and store ______.'},
    {t:'text',a:'stress',q:'Nightmares are often linked to ______.'},
    {t:'text',a:'forgotten|forgot',q:'Most dreams are quickly ______.'},
    {t:'text',a:'lucid',q:'Being aware you are dreaming is called ______ dreaming.'},
    {t:'text',a:'emotional|emotion',q:'During dreams, the ______ centres of the brain are active.'},
    {t:'text',a:'1950s',q:'Dreams were first studied scientifically in the ______.'},
    {t:'text',a:'animals|animal',q:'______, too, appear to dream.'},
    {t:'choice',a:'B',q:'The true purpose of dreaming is:',opts:['A) fully known','B) still debated','C) unimportant','D) to rest the eyes']}
   ]}
 ],
 read:[
  {title:"The Monarch Butterfly's Great Migration",
   paras:[
    "List of Headings —  i) A journey across generations   ii) Finding the way   iii) The winter gathering   iv) A dangerous decline   v) What triggers the journey   vi) Why they migrate   vii) The life of a caterpillar   viii) The colours of the wings",
    "A   Each and every autumn, one of the most astonishing journeys in the whole of the natural world takes place right across North America. Monarch butterflies, delicate as they are, simply cannot survive the long, freezing winters of the north, where the bitter cold would very quickly kill them. To escape this certain death, many millions of them set off together on an enormous migration southward — a journey of up to four thousand kilometres — travelling all the way from the fields of Canada and the northern United States down to the mild warmth of the mountain forests of central Mexico, a place that most of them have never been before.",
    "B   Their winter destination is remarkably precise, and this is part of the great mystery. Rather than spreading out, the butterflies gather in just a handful of small, high mountain forests, always the very same ones year after year, where they cluster together on the fir trees in their tens of millions, so extraordinarily densely that the very branches bend and sometimes even break under their combined weight, and the whole grey-green forest seems to turn a glowing orange. Here, in the cool but crucially frost-free air of the mountains, sheltered by the trees, they wait quietly out the long winter, barely moving, until the spring at last returns and warms them once again.",
    "C   The most astonishing fact of all, however, is that no single butterfly ever completes the entire round trip by itself. The particular monarchs that fly south in the autumn are not at all the same individuals that return north the following year; the long journey back north in the spring is instead completed in a kind of relay, over several successive generations of butterflies, each one of which lives for only a few short weeks, breeding and then dying along the way. The butterflies that finally arrive back in the fields of Canada in the summer may in fact be the great-grandchildren of those that first set out the previous autumn — and yet, somehow, they carry the very same map.",
    "D   Somehow, these tiny, fragile insects, with brains smaller than a pinhead, find their way unerringly across an entire continent to a place that none of them has ever been to before. Scientists believe that the monarchs use the position of the sun in the sky as a kind of compass to keep themselves flying in the right direction, cleverly correcting for the changing time of day by means of an internal biological clock, and there is growing evidence that they may also be able to sense the Earth's magnetic field to help guide them. Yet exactly how they manage to locate the very same few small forests, generation after generation, remains to this day only partly understood by science.",
    "E   The great journey is triggered each year by the changing of the season rather than by hunger or cold alone. As the days grow noticeably shorter and the nights cooler in the late summer, the butterflies that hatch at just this time enter a special physiological state quite different from that of their parents: they delay reproducing, and instead spend their energy building up rich stores of fat to fuel the enormously long flight that lies ahead of them. This special 'migratory generation' of butterflies, as scientists call it, lives far, far longer than the ordinary summer generations do, surviving not merely a few weeks but the entire winter and the long journey in both directions.",
    "F   In recent decades, however, monarch numbers have fallen alarmingly and steeply, and the great migration itself is now considered to be genuinely in danger of disappearing. The main cause of this decline is the widespread loss of milkweed, which is the only kind of plant on which the monarchs will lay their eggs, and the only plant that their hungry caterpillars are able to eat. As farmland has spread and powerful weedkillers have been used ever more widely across the countryside, this once-common wild plant has vanished from vast areas. The ongoing destruction of the butterflies' small Mexican winter forests adds still further to the threat, and conservationists now actively urge ordinary people to plant milkweed in their gardens to help the beleaguered species to survive."
   ],
   Q:[
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'FALSE',q:'Monarch butterflies can survive the northern winter.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The same butterflies that fly south return north in spring.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:"Monarchs may use the Earth's magnetic field to navigate.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The main cause of the decline is the loss of milkweed.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'four|4',q:'Monarchs travel up to ______ thousand kilometres.'},
    {t:'text',a:'Mexico',q:'They spend the winter in forests in central ______.'},
    {t:'text',a:'milkweed',q:'Monarch caterpillars eat only ______.'}
   ]},
  {title:'The History of the Wheel',
   paras:[
    "A   The wheel is so utterly basic to modern life that we naturally imagine it must be one of humanity's very oldest inventions, older than almost anything else we possess. In fact, and quite surprisingly, it is a comparatively recent one. Human beings had already been farming the land, weaving cloth, making pottery, and building houses and even whole towns for many thousands of years before anyone, anywhere, first thought to make a wheel at all. The wheel, as far as we can tell from the archaeological evidence that survives, appeared only about five and a half thousand years ago — long, long after many other, seemingly far more advanced, human achievements.",
    "B   The reason for this long delay is that the wheel is really not nearly as simple a thing as it first looks. A wheel is quite useless entirely on its own; to be of any real use, it needs an axle — a fixed rod or bar around which it can turn freely and smoothly. And there lay the real difficulty. The crucial join between the turning wheel and its fixed axle had to be at once smooth and loose enough to allow the wheel to spin round easily, with as little friction as possible, and yet at the very same time snug and strong enough to bear a heavy weight without wobbling loose or breaking apart. Getting this delicate balance exactly right was a genuine, and far from obvious, feat of early engineering that took a very long time to solve.",
    "C   Curiously, the wheel was not, in fact, first used for transport at all, as we might naturally assume it would have been. The earliest known wheels were potter's wheels — flat, spinning discs used to shape wet clay into round pots — and it was quite some considerable time before anyone thought to mount a pair of wheels onto a cart in order to carry things. Even once the wheeled cart had been invented, moreover, wheels turned out to be of surprisingly little use in a great many places: in mountainous, marshy or heavily forested lands where there were no smooth roads at all, or in regions where there were no strong animals such as oxen to pull a cart along, the wheel offered little or no real advantage over simply carrying goods on the back.",
    "D   Where the conditions were right, however — on flat, open land, with roads to travel on and animals to do the pulling — the wheel utterly transformed human society. Wheeled carts, pulled by patient oxen, allowed farmers to move heavy loads of grain, stone and firewood far more easily than ever before, and allowed traders to carry their goods over far greater distances to sell them, greatly encouraging trade and the growth of larger towns. Later still, the invention of much lighter wheels with spokes, rather than heavy solid discs, made possible the fast and highly manoeuvrable war chariot — a terrifying new weapon that, for a time, completely changed the very nature of battle in the ancient world.",
    "E   For thousands of years after its first invention, the basic design of the wheel itself changed remarkably little; a wheel remained, essentially, a wooden circle turning on an axle. The next truly great leap forward came only in the nineteenth century, with the invention of the rubber tyre, and especially of the air-filled, or 'pneumatic', tyre. This clever cushion of air gave a far smoother, more comfortable and faster ride over rough and bumpy ground than a solid wheel ever could, and in doing so it made possible first the modern bicycle and then, a little later, the motor car — vehicles that would go on to reshape the entire modern world in their turn.",
    "F   Today, the wheel is quite literally everywhere around us, though very often it is hidden from view and entirely forgotten. It turns, in some form, inside every engine and inside almost every machine ever built; it spun the discs and reels that once stored all our music and our films; it moves on conveyor belts and inside clocks; and, of course, it still carries our countless vehicles across the surface of the whole world. That simple circle of wood, first shaped by some forgotten genius five and a half thousand years ago, turned out in the end to be one of the most powerful and far-reaching ideas that human beings have ever had."
   ],
   Q:[
    {t:'choice',a:'B',q:'According to the passage, the wheel was invented:',opts:['A) before farming','B) about 5,500 years ago','C) 10,000 years ago','D) in the 19th century']},
    {t:'choice',a:'B',q:'The real engineering difficulty was:',opts:['A) making a round shape','B) the join between wheel and axle','C) finding wood','D) pulling the cart']},
    {t:'choice',a:'C',q:'The earliest known wheels were used for:',opts:['A) transport','B) war','C) shaping clay','D) grinding grain']},
    {t:'choice',a:'C',q:'The great leap in the 19th century was the invention of:',opts:['A) the spoke','B) the axle','C) the rubber tyre','D) the chariot']},
    {t:'text',a:'C',q:'Which paragraph (A–F) explains why the wheel was of little use in some places?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the invention of the air-filled tyre?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) explains how wheeled carts transformed trade and farming?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains why the wheel took so long to be invented?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the many hidden uses of the wheel today?'},
    {t:'text',a:'axle',q:'A wheel needs an ______ on which to turn.'},
    {t:'text',a:'wheels|wheel',q:"The earliest wheels were potter's ______."},
    {t:'text',a:'spokes|spoke',q:'Lighter wheels with ______ made the war chariot possible.'},
    {t:'text',a:'car',q:'The air-filled tyre made possible the bicycle and the motor ______.'}
   ]},
  {title:'Should Wild Animals Be Kept as Pets?',
   paras:[
    "A   From colourful parrots and snakes to monkeys and even big cats, a surprising number of people all around the world keep wild animals as pets in their own homes. To some owners, these exotic creatures are beloved and endlessly fascinating companions, no different in principle, they feel, from an ordinary dog or a cat. To others, however, the very idea of keeping a wild animal shut up in a house is both deeply cruel to the animal itself and genuinely dangerous to the people around it. And as the international trade in exotic pets has grown rapidly in recent years, so too has the heated debate about whether it should be allowed to continue at all, or ought instead to be banned outright.",
    "B   Those who defend the keeping of exotic pets argue, first of all, that people ought to have the basic right to keep whatever animals they choose, provided always that they care for them properly and well. A genuinely responsible and knowledgeable owner, they insist, can perfectly well meet even an exotic animal's particular needs, and some careful breeding of rare species in private hands, they add, may even help to conserve those species and provide a valuable safety net against their extinction in the wild. And for a great many owners, the close daily companionship of an unusual and beautiful animal is quite simply a source of enormous and lasting joy in their lives.",
    "C   Critics of the practice disagree strongly and passionately. Wild animals, they point out, have highly complex physical and social needs that are extremely difficult, and very often quite impossible, to meet properly within an ordinary home, however loving and well-meaning the owner may be. A big cat, for instance, needs a huge territory and endless space in which to roam and to hunt; a parrot is a highly intelligent, deeply social creature that needs the constant company of others of its own kind. Deprived of these fundamental things, such animals very often suffer greatly, showing the tell-tale signs of boredom, frustration and deep distress — such as pacing endlessly or pulling out their own feathers — that a well-cared-for dog or cat simply never would.",
    "D   There are also very real dangers to people, and to other animals. Wild animals always remain wild at heart, however tame and affectionate they may appear to be after years of living in a home, and even a gentle, much-loved one can suddenly, and without any warning at all, injure or even kill its owner or a visitor. Exotic pets can also carry dangerous diseases that are able to pass to humans, sometimes with deadly results. And animals that escape from captivity, or that are carelessly released by owners who can no longer cope with them, can become a serious threat to local wildlife, competing with, or actively preying upon, the native species that have no defences against these strange newcomers.",
    "E   Perhaps the gravest concern of all, however, is the wider effect of the whole pet trade on wild animal populations. Many exotic pets, despite what buyers are often reassuringly told, are in fact still captured directly from the wild rather than being bred in captivity, and the huge and growing demand of the trade has already driven some rare species to the very edge of extinction in their natural homes. Worse still, for every single wild animal that eventually reaches a home alive and healthy, several others may well have died horribly during their capture, their caging and their long transport across the world — a hidden and terrible cost that very few of the buyers who pay for these animals ever see, or even pause to think about.",
    "F   Most experts, having carefully weighed all of these competing arguments, therefore tend to favour strict and careful regulation of the exotic pet trade, rather than a single, complete and total ban on it. Some animals, they argue, such as certain birds and reptiles, can indeed be kept responsibly and humanely by knowledgeable and dedicated owners, while others — the big cats and the great apes, for example — should quite simply never be kept as private pets by anybody at all, under any circumstances. The real challenge, they say, is to find and enforce laws that protect both the welfare of the animals themselves and the safety of the wider public, without needlessly denying the genuine and valuable bond that really can form between a person and an animal."
   ],
   Q:[
    {t:'choice',a:'YES',q:'The trade in exotic pets has grown in recent years.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:"Supporters claim that responsible owners cannot meet an exotic animal's needs.",opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Critics argue that wild animals have complex needs hard to meet in a home.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Tame wild animals are completely safe to keep.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most exotic pets are bred rather than captured from the wild.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most experts favour a complete ban on keeping any wild animal.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives the argument that people have a right to choose their pets?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the danger of diseases passing to humans?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the effect of the pet trade on wild populations?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) calls for strict regulation rather than a ban?'},
    {t:'text',a:'parrot|snake|monkey|big cat|parrots|snakes|monkeys',q:'Name one wild animal kept as a pet mentioned in the passage.'},
    {t:'text',a:'roam',q:'A big cat kept as a pet needs space to ______.'},
    {t:'text',a:'wildlife',q:'Escaped exotic pets can become a threat to local ______.'},
    {t:'text',a:'regulation',q:'Most experts favour strict ______ rather than a complete ban.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Households owning a pet, by type (%), two countries, 2020</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Pet</th><th style='border:1px solid #999;padding:5px 10px'>Country A</th><th style='border:1px solid #999;padding:5px 10px'>Country B</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Dog</td><td style='border:1px solid #999;padding:5px 10px'>38</td><td style='border:1px solid #999;padding:5px 10px'>22</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Cat</td><td style='border:1px solid #999;padding:5px 10px'>25</td><td style='border:1px solid #999;padding:5px 10px'>30</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Fish</td><td style='border:1px solid #999;padding:5px 10px'>12</td><td style='border:1px solid #999;padding:5px 10px'>9</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Bird</td><td style='border:1px solid #999;padding:5px 10px'>6</td><td style='border:1px solid #999;padding:5px 10px'>14</td></tr></table>",
  task1:"The table below shows the percentage of households owning four types of pet in two countries in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people think that keeping wild or exotic animals as pets should be banned, while others disagree. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 17 (Exam Level) ===================== */
{
 name:'Mock 17 — Exam Level',
 blurb:'🔴 First-aid course · Community garden · Eating-habits survey + How caves form · The cat · Junk-food ads',
 listen:[
  {title:'Registering for a first-aid course',
   transcript:"Hello, I'd like to sign up for the first-aid course. Certainly. Which level, basic or advanced? The basic course. That runs over one day... sorry, two days. When? The nineteenth of March — no, the ninth. The cost is sixty-five pounds... sorry, sixty. Does that include anything? Yes, a certificate on completion. Should I bring anything? Just a packed lunch; tea and coffee are provided. Who teaches it? An experienced nurse. And where is it held? In room five, in the main building. How do I book? You can book online or by phone, but for this course, by phone only.",
   Q:[
    {t:'text',a:'first',q:'Course: ______ aid'},
    {t:'text',a:'basic',q:'Level: ______'},
    {t:'text',a:'2|two',q:'Duration: ______ days'},
    {t:'text',a:'9th|ninth|9',q:'Date: ______ of March'},
    {t:'text',a:'60|sixty',q:'Cost: £______'},
    {t:'text',a:'certificate',q:'Includes a ______ on completion.'},
    {t:'text',a:'lunch',q:'Bring a packed ______.'},
    {t:'text',a:'nurse',q:'Taught by an experienced ______.'},
    {t:'text',a:'5|five',q:'Held in room ______.'},
    {t:'choice',a:'B',q:'For this course, you can book by:',opts:['A) online','B) phone','C) email','D) post']}
   ]},
  {title:'Community garden open day',
   transcript:"Welcome to the Riverside Community Garden open day, which takes place this Sunday. There'll be plenty of free activities, including a planting workshop for beginners. Our plant sale opens at ten in the morning, and everything is grown here by our members. The café, run entirely by volunteers, will serve homemade cake. If you'd like to help with the planting, please bring your own gloves. There's a guided tour of the garden at noon... sorry, at two o'clock. Children's activities are in the area near the pond. A few notes: dogs are welcome but must be kept on a lead, and parking nearby is very limited, so please come by bus if you can.",
   Q:[
    {t:'text',a:'open',q:'The event is an ______ day.'},
    {t:'text',a:'sunday',q:'It takes place this ______.'},
    {t:'text',a:'planting|plant',q:'Free activities include a ______ workshop.'},
    {t:'text',a:'10am|10|ten',q:'The plant sale opens at ______.'},
    {t:'text',a:'volunteers|volunteer',q:'The café is run by ______.'},
    {t:'text',a:'gloves|glove',q:'Helpers should bring their own ______.'},
    {t:'text',a:'2pm|2|two|two oclock',q:'The guided tour is at ______.'},
    {t:'text',a:'pond',q:"Children's activities are near the ______."},
    {t:'choice',a:'B',q:'Dogs must be:',opts:['A) left at home','B) kept on a lead','C) free to run','D) carried']},
    {t:'choice',a:'C',q:'Parking nearby is:',opts:['A) free','B) plentiful','C) limited','D) underground']}
   ]},
  {title:'Two students plan a survey on eating habits',
   transcript:"So, our project is a survey on students' eating habits. How will we collect the data? A questionnaire is easiest. How many participants? Fifty... let's aim for sixty. Which age group? University students, like us. How many questions? Let's keep it short, ten questions. How do we distribute it? Online, through a link. And how will we analyse the results? I was thinking SPSS... actually, Excel is simpler for this. How should we present it? A bar chart would be clearest. When's it due? Week eight... sorry, week nine. One thing — we must keep responses anonymous, for ethical reasons.",
   Q:[
    {t:'text',a:'habits|habit',q:"The survey is on students' eating ______."},
    {t:'text',a:'questionnaire',q:'Method: a ______.'},
    {t:'choice',a:'C',q:'Number of participants:',opts:['A) 40','B) 50','C) 60','D) 100']},
    {t:'text',a:'students|student',q:'Age group: university ______.'},
    {t:'text',a:'10|ten',q:'Number of questions: ______.'},
    {t:'text',a:'online',q:'The questionnaire is distributed ______.'},
    {t:'choice',a:'B',q:'They will analyse the data with:',opts:['A) SPSS','B) Excel','C) R','D) paper']},
    {t:'text',a:'bar',q:'They will present the results as a ______ chart.'},
    {t:'choice',a:'C',q:'Deadline:',opts:['A) week 7','B) week 8','C) week 9','D) week 10']},
    {t:'text',a:'anonymous',q:'Responses must be kept ______.'}
   ]},
  {title:'Lecture: the science of hearing',
   transcript:"Today's lecture is about how we hear. Sound waves travel down the ear canal until they reach the eardrum, a thin membrane that vibrates when sound hits it. These vibrations pass to three tiny bones, the smallest in the body, which amplify the sound and pass it on. The vibrations then enter a spiral-shaped organ called the cochlea, which is filled with fluid. Inside are thousands of tiny hairs that move with the fluid and convert the vibrations into electrical signals. These signals travel along the auditory nerve to the brain, which interprets them as sound. Loud noise can permanently damage these delicate hairs, causing hearing loss, and unlike some animals, humans cannot grow them back. This is why protecting our ears from very loud sounds is so important.",
   Q:[
    {t:'text',a:'canal',q:'Sound waves travel down the ear ______.'},
    {t:'text',a:'vibrates|vibrate',q:'The eardrum ______ when sound hits it.'},
    {t:'text',a:'bones|bone',q:'Three tiny ______ amplify the sound.'},
    {t:'text',a:'cochlea',q:'The vibrations enter a spiral organ called the ______.'},
    {t:'text',a:'fluid',q:'The cochlea is filled with ______.'},
    {t:'text',a:'signals|signal',q:'Tiny hairs convert vibrations into electrical ______.'},
    {t:'text',a:'nerve',q:'Signals travel along the auditory ______ to the brain.'},
    {t:'text',a:'hairs|hair',q:'Loud noise can damage the tiny ______.'},
    {t:'choice',a:'B',q:'Unlike some animals, humans cannot:',opts:['A) hear high sounds','B) regrow the hairs','C) feel vibrations','D) sleep']},
    {t:'choice',a:'B',q:'The three bones are described as the ______ in the body:',opts:['A) largest','B) smallest','C) hardest','D) softest']}
   ]}
 ],
 read:[
  {title:'How Caves Are Formed',
   paras:[
    "List of Headings —  i) Water that dissolves rock   ii) The slow carving of a cave   iii) Decorating the cave   iv) Life in the dark   v) Other kinds of cave   vi) Exploring the underworld   vii) Working out a cave's age   viii) How mountains are made",
    "A   Most of the world's great caves are found in a type of rock called limestone, and they are created by water. Rainwater, as it falls and seeps through the soil, absorbs carbon dioxide and becomes a weak acid. This acid is far too gentle to harm us, but over vast spans of time it can dissolve limestone, slowly eating away the rock.",
    "B   This process is astonishingly slow. Over thousands, even millions, of years, the trickling acid widens tiny cracks in the rock into channels, then passages, and finally into great underground chambers. A cave that a person can walk through may have taken longer to form than the whole of human history.",
    "C   As water continues to drip through a finished cave, it creates the beautiful decorations for which caves are famous. Each drop leaves behind a tiny amount of dissolved mineral. Over centuries, these deposits build up into icicle-like stalactites, hanging from the ceiling, and stalagmites, rising from the floor, which may eventually meet to form a column.",
    "D   Caves are also home to strange and specialised life. In the total darkness of the deep cave, where no plant can grow, live creatures found nowhere else. Many have lost their eyes and their colour entirely, since sight and camouflage are useless where there is no light, relying instead on other senses to survive.",
    "E   Not all caves are carved by acid. Along coastlines, the pounding of waves can hollow out sea caves in solid cliffs. Flowing lava from a volcano can leave behind long tunnels as its surface cools and hardens while the molten rock inside drains away. And in glaciers, meltwater can carve caves of shimmering blue ice.",
    "F   For scientists and adventurers, caves are a frontier still only partly explored. Their still air preserves things that would vanish above ground: the paintings of Ice Age artists, the bones of long-extinct animals, and layers of mineral that record the climate of the distant past. To enter a cave is, in a sense, to travel back in time."
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'Most great caves are formed in limestone by water.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Caves form very quickly, within a few years.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Stalactites rise from the floor of a cave.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some cave animals have lost their eyes.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'acid',q:'Rainwater absorbs carbon dioxide and becomes a weak ______.'},
    {t:'text',a:'stalactites|stalactite',q:'Deposits that hang from the ceiling are called ______.'},
    {t:'text',a:'lava',q:'Flowing ______ from a volcano can leave behind long tunnels.'}
   ]},
  {title:'The Domestication of the Cat',
   paras:[
    "A   The cat is one of the most popular pets in the world, yet it is also one of the most mysterious. Unlike the dog, which was actively bred by humans over thousands of years for particular tasks, the cat, it seems, largely domesticated itself. In many ways, the cat that curls up on the sofa is barely different from its wild ancestors.",
    "B   Cats and humans first came together, most scientists believe, when people began to farm. Stored grain attracted mice and rats, and the mice and rats attracted wild cats, which found in the new farming villages an easy and reliable supply of prey. The cats kept the pests down; the farmers, in return, tolerated and welcomed them. It was a partnership that suited both.",
    "C   This origin explains much about the cat's character. Because cats were never bred to obey or to work alongside people, as dogs were, they have remained far more independent. A cat regards its human less as a master than as a companion, and keeps much of the self-reliant behaviour of a wild hunter.",
    "D   Genetic studies have traced almost all domestic cats back to a single wild species, the African wildcat, which still lives across parts of Africa and the Middle East. Tame and wild cats can still interbreed easily, and a domestic cat left to fend for itself quickly reverts to a wild way of life, unlike most other domestic animals.",
    "E   Cats have long held a special, and sometimes troubled, place in human culture. In ancient Egypt they were revered, even worshipped, and killing one was a crime. In medieval Europe, by contrast, they were sometimes feared and associated with witchcraft. Attitudes to the cat, it seems, have always been strong, whether of love or of suspicion.",
    "F   Today the cat is more popular than ever, kept as a pet by hundreds of millions of people. Yet it retains an air of independence that many owners find part of its charm. The cat, one writer observed, is the only domestic animal that has never entirely accepted being owned."
   ],
   Q:[
    {t:'choice',a:'C',q:'Compared with the dog, the cat was:',opts:['A) bred for many tasks','B) domesticated much earlier','C) largely self-domesticated','D) never tamed at all']},
    {t:'choice',a:'B',q:'Cats and humans first came together because of:',opts:['A) hunting together','B) stored grain attracting rodents','C) companionship','D) religion']},
    {t:'choice',a:'B',q:'Almost all domestic cats descend from the:',opts:['A) European wildcat','B) African wildcat','C) lion','D) lynx']},
    {t:'choice',a:'B',q:'In ancient Egypt, cats were:',opts:['A) feared','B) revered','C) eaten','D) ignored']},
    {t:'text',a:'C',q:'Which paragraph (A–F) explains how cats behave differently from dogs?'},
    {t:'text',a:'E',q:"Which paragraph (A–F) describes the cat's changing image in different cultures?"},
    {t:'text',a:'D',q:'Which paragraph (A–F) names the single wild species cats descend from?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains how farming brought cats and humans together?'},
    {t:'text',a:'F',q:"Which paragraph (A–F) describes the cat's continuing popularity and independence?"},
    {t:'text',a:'grain',q:'Stored ______ attracted mice and rats to farming villages.'},
    {t:'text',a:'independent',q:'Cats have remained more ______ than dogs.'},
    {t:'text',a:'reverts|revert',q:'A domestic cat left alone quickly ______ to a wild life.'},
    {t:'text',a:'witchcraft',q:'In medieval Europe, cats were associated with ______.'}
   ]},
  {title:'Should Junk Food Advertising Be Banned?',
   paras:[
    "A   As rates of obesity rise in many countries, especially among children, governments are looking for ways to encourage healthier eating. One measure that is increasingly discussed, and in some places already introduced, is a ban on the advertising of unhealthy food, particularly to children. Like most such proposals, it has both passionate supporters and determined opponents.",
    "B   Those in favour argue that advertising works, and that this is precisely the problem. Food companies spend vast sums promoting products high in sugar, salt and fat, and much of this is aimed at children, who are easily influenced and cannot judge the claims critically. If advertising can persuade children to want junk food, supporters argue, then restricting it could help protect their health.",
    "C   There is some evidence to support this. Studies have found that children exposed to more food advertising tend to eat more of the products advertised, and that advertising can shape food preferences from a very young age. In several countries, limits on junk-food advertising have been followed by modest falls in the consumption of the targeted products.",
    "D   Opponents, however, raise serious objections. Some argue that a ban interferes with the freedom of companies to promote legal products and of consumers to make their own choices. Others question whether it would really work, pointing out that children see advertising in many forms, including online and through social media, that would be hard to control.",
    "E   There is also the question of responsibility. Critics argue that what children eat is chiefly a matter for parents, not governments, and that education about healthy eating would be more effective, and less heavy-handed, than a ban. Treating advertising as the main cause of obesity, they suggest, is far too simple.",
    "F   Most experts take a middle position. Advertising, they accept, is only one of many causes of poor diet, alongside price, availability and habit, so a ban alone will not solve the problem. But as one part of a wider strategy, they argue, sensible limits on marketing unhealthy food to children may still be worthwhile."
   ],
   Q:[
    {t:'choice',a:'YES',q:'Obesity is rising in many countries, especially among children.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Supporters believe advertising has little effect on children.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some studies link more food advertising to eating more of the products.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Opponents believe a ban would be easy to enforce online.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some critics argue education would be more effective than a ban.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most experts think a ban alone would solve the obesity problem.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'C',q:"Which paragraph (A–F) gives evidence that advertising shapes children's food preferences?"},
    {t:'text',a:'D',q:'Which paragraph (A–F) argues that a ban limits freedom of choice?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) says healthy eating is mainly the parents responsibility?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) gives the balanced position of most experts?'},
    {t:'text',a:'fat',q:'Junk food is often high in sugar, salt and ______.'},
    {t:'text',a:'age',q:'Advertising can shape food preferences from a very young ______.'},
    {t:'text',a:'price|availability|habit',q:'Besides advertising, name one other cause of poor diet mentioned.'},
    {t:'text',a:'strategy',q:'Experts see limits on advertising as part of a wider ______.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Fast-food meals eaten per person per week, three countries</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Country</th><th style='border:1px solid #999;padding:5px 10px'>2000</th><th style='border:1px solid #999;padding:5px 10px'>2010</th><th style='border:1px solid #999;padding:5px 10px'>2020</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Country A</td><td style='border:1px solid #999;padding:5px 10px'>1.5</td><td style='border:1px solid #999;padding:5px 10px'>2.4</td><td style='border:1px solid #999;padding:5px 10px'>3.2</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Country B</td><td style='border:1px solid #999;padding:5px 10px'>2.0</td><td style='border:1px solid #999;padding:5px 10px'>2.2</td><td style='border:1px solid #999;padding:5px 10px'>2.1</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Country C</td><td style='border:1px solid #999;padding:5px 10px'>0.8</td><td style='border:1px solid #999;padding:5px 10px'>1.6</td><td style='border:1px solid #999;padding:5px 10px'>2.8</td></tr></table>",
  task1:"The table below shows the average number of fast-food meals eaten per person per week in three countries in 2000, 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that advertising unhealthy food to children should be banned. To what extent do you agree or disagree? Write at least 250 words."
 }
},

/* ===================== MOCK 18 (Exam Level) ===================== */
{
 name:'Mock 18 — Exam Level',
 blurb:'🔴 Cake order · New bus service · Tourism debate + The eel · The history of soap · Free public transport',
 listen:[
  {title:'Ordering a birthday cake',
   transcript:"Good morning, Sweet Treats bakery. I'd like to order a cake. Certainly, your name? Middleton, M-I-D-D-L-E-T-O-N. What's the occasion? A birthday. How many people is it for? Thirty... actually, twenty. Which flavour? Vanilla... no, chocolate, please. Would you like a message on it? Yes, 'Happy 30th'. When would you like to collect it? The fourth of June — sorry, the fourteenth. At what time? Three in the afternoon. That will be forty pounds... sorry, forty-five. We take a ten-pound deposit. And any allergies? Yes, please, no nuts.",
   Q:[
    {t:'text',a:'middleton',q:'Surname: ______'},
    {t:'text',a:'birthday',q:'Occasion: ______'},
    {t:'text',a:'20|twenty',q:'For ______ people'},
    {t:'text',a:'chocolate',q:'Flavour: ______'},
    {t:'text',a:'30th|thirtieth|30',q:"Message: 'Happy ______'"},
    {t:'text',a:'14th|fourteenth|14',q:'Collect on the ______ of June'},
    {t:'text',a:'3pm|3|three',q:'Collection time: ______'},
    {t:'text',a:'45|forty-five',q:'Price: £______'},
    {t:'text',a:'10|ten',q:'Deposit: £______'},
    {t:'choice',a:'B',q:'The customer has an allergy to:',opts:['A) dairy','B) nuts','C) eggs','D) wheat']}
   ]},
  {title:'Announcement: new bus service',
   transcript:"Here's some news about local transport. From next Monday, a new bus service, the number seven, will begin. Buses will run every fifteen minutes... sorry, every twenty minutes throughout the day. The first bus leaves at six in the morning. The route runs from the town centre to the hospital, stopping at the railway station on the way. A single fare is two pounds, and you can pay by cash or, more conveniently, contactless card. Travel is free for over-sixty-fives with a valid pass. Buses run until eleven at night on weekdays. Please note that on Sundays the service is reduced, with buses every hour.",
   Q:[
    {t:'text',a:'7|seven',q:'New bus: the number ______'},
    {t:'text',a:'monday',q:'Starts next ______'},
    {t:'text',a:'20|twenty',q:'Buses run every ______ minutes'},
    {t:'text',a:'6am|6|six',q:'First bus: ______'},
    {t:'text',a:'hospital',q:'The route runs to the ______'},
    {t:'text',a:'2|two',q:'Single fare: £______'},
    {t:'text',a:'contactless',q:'You can pay by cash or ______ card'},
    {t:'text',a:'over-65s|over-sixty-fives|over 65s',q:'Free for ______'},
    {t:'choice',a:'B',q:'Buses run until:',opts:['A) 9 pm','B) 11 pm','C) midnight','D) 8 pm']},
    {t:'choice',a:'B',q:'On Sundays the service is:',opts:['A) the same','B) reduced','C) cancelled','D) free']}
   ]},
  {title:'Two students prepare a debate on tourism',
   transcript:"Right, our debate is on tourism. Are we for or against? We're arguing for it... no, we've been assigned against. Okay. What's our strongest argument? I think the damage tourism does to the environment. Good, and an example? Venice, which is overwhelmed by visitors. How long do we each speak? Five minutes... actually, four. Where will we get our facts? From official reports and studies. Who prepares the rebuttal? Sara will handle the rebuttal. Should we use a visual aid? Yes, a few slides. When shall we practise? On Tuesday. And the debate itself? It's on Friday.",
   Q:[
    {t:'text',a:'tourism',q:'The debate is on ______'},
    {t:'choice',a:'B',q:'Their side is:',opts:['A) for','B) against','C) neutral','D) undecided']},
    {t:'text',a:'environment',q:'Their main argument is the damage to the ______'},
    {t:'text',a:'venice',q:'Their example is ______'},
    {t:'text',a:'4|four',q:'Each person speaks for ______ minutes'},
    {t:'text',a:'reports|report',q:'Facts come from official ______ and studies'},
    {t:'text',a:'sara',q:'The rebuttal is prepared by ______'},
    {t:'text',a:'slides|slide',q:'They will use a few ______'},
    {t:'text',a:'tuesday',q:'They will practise on ______'},
    {t:'text',a:'friday',q:'The debate is on ______'}
   ]},
  {title:'Lecture: the science of rainbows',
   transcript:"Today we'll look at the science of rainbows. A rainbow appears when sunlight shines through falling rain. As a ray of sunlight enters a raindrop, it bends, or refracts, and because different colours bend by slightly different amounts, the white light is split into its separate colours, forming a spectrum. We usually describe a rainbow as having seven colours, with red on the outside and violet on the inside. To see a rainbow, the Sun must be behind you and the rain in front. Sometimes a fainter, second rainbow appears above the first, with its colours reversed. A rainbow is not a physical object in a fixed place; it is an effect of light, which is why you can never reach the end of one. In fact, because it depends on the position of the observer, every person sees a slightly different rainbow.",
   Q:[
    {t:'text',a:'rain',q:'A rainbow appears when sunlight shines through falling ______.'},
    {t:'text',a:'raindrop',q:'Light enters a ______.'},
    {t:'text',a:'refracts|refract',q:'The light bends, or ______.'},
    {t:'text',a:'spectrum',q:'The white light is split into a ______.'},
    {t:'text',a:'seven|7',q:'A rainbow is usually said to have ______ colours.'},
    {t:'text',a:'red',q:'______ is on the outside of the rainbow.'},
    {t:'text',a:'behind',q:'To see a rainbow, the Sun must be ______ you.'},
    {t:'text',a:'reversed|reverse',q:'A second, fainter rainbow has its colours ______.'},
    {t:'choice',a:'B',q:'A rainbow is:',opts:['A) a physical object','B) an effect of light','C) a type of cloud','D) a kind of rain']},
    {t:'choice',a:'B',q:'Each person sees a rainbow that is:',opts:['A) identical','B) slightly different','C) invisible','D) upside down']}
   ]}
 ],
 read:[
  {title:'The Mysterious Journey of the Eel',
   paras:[
    "List of Headings —  i) A single, distant birthplace   ii) A journey of transformations   iii) A long life in fresh water   iv) The final voyage   v) A creature of mystery   vi) A species in danger   vii) How eels are caught   viii) The diet of the eel",
    "A   Few animals have puzzled scientists as much as the humble eel. For thousands of years, no one knew where eels came from. They seemed simply to appear in rivers and ponds, and since no one ever found eel eggs, ancient thinkers came up with strange explanations, suggesting that eels were born from mud. The truth, when it was finally uncovered, proved stranger than any of these guesses.",
    "B   The European eel, it turns out, is born in one place only: the Sargasso Sea, a remote region of the Atlantic Ocean near the Caribbean, thousands of kilometres from the rivers where adult eels live. Every European eel begins life there, as a tiny, transparent, leaf-shaped larva, drifting in the open ocean.",
    "C   From the Sargasso, the young eels are carried by ocean currents on an extraordinary journey towards Europe, which may take two or three years. As they travel and grow, they change their shape and colour dramatically, transforming first into slender 'glass eels' and then into the darker young eels that finally reach the coast.",
    "D   Reaching land, the eels swim up rivers and settle in fresh water, sometimes even wriggling over wet ground to reach isolated ponds. Here they spend most of their lives — often ten or twenty years, and sometimes far longer — growing slowly into the adults we know.",
    "E   Then, at the end of their lives, the adult eels undertake the greatest journey of all. Ceasing to feed, their bodies change once more, and they set off back across the Atlantic to the Sargasso Sea, the place of their birth, to breed and then die. No adult eel has ever been observed completing this final voyage, which remains partly mysterious.",
    "F   Sadly, the European eel is now in serious danger. Its numbers have collapsed dramatically in recent decades, the victims of overfishing, pollution, and dams and other barriers that block their path up rivers. A creature that survived for millions of years is now, remarkably, considered critically endangered."
   ],
   Q:[
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'In the past, no one knew where eels came from.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'European eels are born in rivers.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Eels change their shape and colour as they grow.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The European eel is now critically endangered.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'sargasso',q:'European eels are born in the ______ Sea.'},
    {t:'text',a:'currents|current',q:'The young are carried towards Europe by ocean ______.'},
    {t:'text',a:'feeding|feed|eating',q:'At the end of their lives, adult eels stop ______.'}
   ]},
  {title:'The History of Soap',
   paras:[
    "A   Soap is such an everyday thing that we rarely give it a thought, yet it is one of the most important substances ever made, having saved more lives, perhaps, than any medicine. The simple act of washing with soap has done more to protect human health than almost anything else, by removing the germs that cause disease.",
    "B   Soap has a very long history. Recipes for a soap-like substance, made by boiling animal fat with ashes, have been found on clay tablets from ancient Mesopotamia over four thousand years ago. At first, however, soap was used mainly for cleaning cloth and treating wounds, rather than for washing the body.",
    "C   The chemistry of soap is elegant. A soap molecule has two ends: one is attracted to water, while the other is attracted to grease and oil. When we wash, the greasy ends cling to the dirt and oil on our skin, while the water-loving ends allow the whole lot to be rinsed away with water. In this way, soap lifts away dirt that water alone cannot remove.",
    "D   For most of history, soap was an expensive luxury, and washing was rare. The link between dirt and disease was not understood, and even doctors did not wash their hands. It was only in the nineteenth century that scientists proved that invisible germs cause illness, and that washing with soap could kill them.",
    "E   This discovery transformed public health. Governments and reformers began to promote cleanliness, soap was taxed less and produced more cheaply, and hand-washing gradually became a normal habit. The result was a dramatic fall in deaths from infectious disease.",
    "F   Even today, in a world of advanced medicine, soap remains one of our most powerful defences against illness. Simple hand-washing with soap and water prevents the spread of many diseases, and public-health experts still regard it as one of the cheapest and most effective ways to save lives."
   ],
   Q:[
    {t:'choice',a:'B',q:'According to the passage, soap has:',opts:['A) done little for health','B) saved many lives','C) caused disease','D) replaced all medicine']},
    {t:'choice',a:'B',q:'The earliest soap was used mainly for:',opts:['A) washing the body','B) cleaning cloth and treating wounds','C) cooking','D) religion']},
    {t:'choice',a:'B',q:'A soap molecule is attracted at one end to water and at the other to:',opts:['A) air','B) grease and oil','C) skin','D) germs']},
    {t:'choice',a:'C',q:'Hand-washing with soap became a normal habit mainly in the:',opts:['A) ancient world','B) Middle Ages','C) nineteenth century','D) present day']},
    {t:'text',a:'C',q:'Which paragraph (A–F) explains how soap molecules remove dirt?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the discovery that germs cause illness?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) mentions the earliest known recipes for soap?'},
    {t:'text',a:'F',q:"Which paragraph (A–F) describes soap's continuing importance today?"},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the effect of promoting cleanliness on public health?'},
    {t:'text',a:'ashes|ash',q:'Ancient soap was made by boiling animal fat with ______.'},
    {t:'text',a:'water',q:'One end of a soap molecule is attracted to ______.'},
    {t:'text',a:'germs|germ',q:'In the nineteenth century, scientists proved that ______ cause illness.'},
    {t:'text',a:'lives|life',q:'Soap remains one of the cheapest ways to save ______.'}
   ]},
  {title:'Should Public Transport Be Free?',
   paras:[
    "A   In a growing number of cities around the world, an idea once dismissed as impossible is being seriously discussed, and in a few places already tried: making public transport free for everyone. Instead of paying a fare, passengers would simply get on the bus or train, with the cost met by the city. Supporters see it as a bold solution to several problems at once; critics fear it would create more.",
    "B   The case in favour begins with the environment and congestion. If buses and trains were free, supporters argue, many people would leave their cars at home, easing the traffic jams that choke modern cities and cutting the pollution that cars produce. Fewer cars would mean cleaner air, quieter streets and lower emissions.",
    "C   There is also an argument about fairness. Public transport, supporters point out, is a lifeline for those on low incomes, who may struggle to afford the fares. Making it free would help the poorest most, giving everyone equal access to jobs, education and services, regardless of what they can pay.",
    "D   Critics, however, ask a simple question: who pays? Running a transport system is expensive, and if passengers do not pay fares, the money must come from somewhere else, usually from taxes. This, opponents argue, is unfair to those who never use public transport but would have to help fund it.",
    "E   There are practical worries too. Some fear that free transport would become so crowded that the service would suffer, and that, without the income from fares, there would be less money to maintain and improve it. A free but overcrowded and unreliable system, they warn, might help no one.",
    "F   The evidence from the cities that have tried it is mixed. In some, the number of passengers has risen sharply, though not always at the expense of car use, since some new passengers previously walked or cycled. Whether free public transport is a wise investment or a costly mistake, it seems, may depend a great deal on the particular city."
   ],
   Q:[
    {t:'choice',a:'YES',q:'The idea of free public transport was once thought impossible.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Supporters believe free transport would increase the number of cars on the road.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Supporters say free transport would help those on low incomes the most.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Critics argue that free transport would cost nothing to provide.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Some fear free transport could become overcrowded.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'The results from cities that tried it have been entirely positive.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'C',q:'Which paragraph (A–F) gives the argument about fairness to poorer people?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) raises the question of who would pay?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the environmental and congestion benefits?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the mixed evidence from cities that have tried it?'},
    {t:'text',a:'pollution',q:'Free public transport could reduce traffic jams and cut ______ from cars.'},
    {t:'text',a:'incomes|income',q:'Public transport is described as a lifeline for those on low ______.'},
    {t:'text',a:'taxes|tax',q:'If passengers pay no fares, the money must usually come from ______.'},
    {t:'text',a:'crowded|overcrowded',q:'Some critics fear a free system would become ______.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>How commuters travel to work in a city (%), 2010 vs 2020</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Mode</th><th style='border:1px solid #999;padding:5px 10px'>2010</th><th style='border:1px solid #999;padding:5px 10px'>2020</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Car</td><td style='border:1px solid #999;padding:5px 10px'>55</td><td style='border:1px solid #999;padding:5px 10px'>40</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Bus</td><td style='border:1px solid #999;padding:5px 10px'>20</td><td style='border:1px solid #999;padding:5px 10px'>25</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Train</td><td style='border:1px solid #999;padding:5px 10px'>15</td><td style='border:1px solid #999;padding:5px 10px'>20</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Cycling/walking</td><td style='border:1px solid #999;padding:5px 10px'>10</td><td style='border:1px solid #999;padding:5px 10px'>15</td></tr></table>",
  task1:"The table below shows how commuters in a city travelled to work in 2010 and 2020, by percentage. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people think that public transport should be made free for everyone. Do the advantages of this outweigh the disadvantages? Write at least 250 words."
 }
},

/* ===================== MOCK 19 (Exam Level) ===================== */
{
 name:'Mock 19 — Exam Level',
 blurb:'🔴 Swimming course · Theatre visit · Science-fair poster + The chameleon · History of perfume · Homework',
 listen:[
  {title:'Enquiring about a swimming course',
   transcript:"Hello, I'd like to enrol my daughter in a swimming course. Of course. How old is she? Eight... sorry, six. And has she swum before? No, so the beginner level. We run beginner classes on Saturdays. At what time? Eleven o'clock... actually, ten. The course runs for eight weeks. The cost is fifty pounds... sorry, fifty-five. Does she need anything? Just a swimming cap; goggles are optional. Who's the instructor? Her name is Emma. Is it the indoor or outdoor pool? The indoor pool, which is heated. How do we register? You can register online, but for children's courses, please come to reception.",
   Q:[
    {t:'text',a:'6|six',q:"Child's age: ______"},
    {t:'text',a:'beginner',q:'Level: ______'},
    {t:'text',a:'saturday|saturdays',q:'Day: ______'},
    {t:'text',a:'10am|10|ten',q:'Time: ______'},
    {t:'text',a:'8|eight',q:'Course length: ______ weeks'},
    {t:'text',a:'55|fifty-five',q:'Cost: £______'},
    {t:'text',a:'cap',q:'Bring a swimming ______.'},
    {t:'text',a:'emma',q:"Instructor's name: ______"},
    {t:'text',a:'indoor',q:'The ______ pool is used.'},
    {t:'choice',a:'B',q:'To register for children’s courses:',opts:['A) online','B) at reception','C) by phone','D) by post']}
   ]},
  {title:'Theatre visit information',
   transcript:"Welcome to the Royal Theatre. This evening's performance is a comedy. The show begins at half past seven, so please take your seats a few minutes before. There will be one interval of twenty minutes, halfway through. If you arrive late, you will be asked to wait until a suitable break, to avoid disturbing others. The cloakroom, where you may leave coats, is free of charge. Please note that photography is not permitted during the performance. The bar is open before the show and during the interval, and closes at ten. Programmes are available for three pounds. The whole show lasts about two hours, including the interval. Tickets booked online should be collected at the box office.",
   Q:[
    {t:'text',a:'comedy',q:"This evening's performance is a ______."},
    {t:'text',a:'7.30|7:30|half past seven',q:'The show begins at ______.'},
    {t:'text',a:'20|twenty',q:'There is one interval of ______ minutes.'},
    {t:'text',a:'wait',q:'Latecomers will be asked to ______.'},
    {t:'text',a:'free',q:'The cloakroom is ______ of charge.'},
    {t:'text',a:'photography|photos|photo',q:'______ is not permitted during the show.'},
    {t:'text',a:'10|ten',q:'The bar closes at ______.'},
    {t:'text',a:'3|three',q:'Programmes cost £______.'},
    {t:'choice',a:'B',q:'The show lasts about:',opts:['A) one hour','B) two hours','C) three hours','D) four hours']},
    {t:'choice',a:'B',q:'Online tickets are collected:',opts:['A) by post','B) at the box office','C) by email','D) at the door']}
   ]},
  {title:'Two students plan a science-fair poster',
   transcript:"For the science fair, we need to design a poster. What topic? Let's do recycling. Good. What should we focus on? Plastic, specifically, since it's such a big problem. Where do we get our data? We ran a survey in our class, remember. What size poster? A1, so it's big enough to read. What colours? Blue and green... let's mainly use green, for the eco theme. Should we include images? Definitely, some photos of local recycling. And the main message? 'Reduce waste'. Where do we print it? At the library; they have a large printer. When's it due? The tenth... sorry, the twentieth of April. And we present it to the judges on the day.",
   Q:[
    {t:'text',a:'recycling|recycle',q:'The poster topic is ______.'},
    {t:'text',a:'plastic',q:'They focus specifically on ______.'},
    {t:'text',a:'survey',q:'Their data comes from a ______.'},
    {t:'text',a:'a1',q:'Poster size: ______.'},
    {t:'text',a:'green',q:'The main colour is ______.'},
    {t:'text',a:'photos|photo|photographs',q:'They will include some ______.'},
    {t:'text',a:'waste',q:"The main message is 'Reduce ______'."},
    {t:'text',a:'library',q:'They will print it at the ______.'},
    {t:'text',a:'20th|twentieth|20',q:'Deadline: ______ of April'},
    {t:'choice',a:'B',q:'They present the poster to:',opts:['A) their teacher','B) the judges','C) other students','D) parents']}
   ]},
  {title:'Lecture: how a seed grows',
   transcript:"Today's lecture is about how a seed grows into a plant, a process called germination. A seed is far from lifeless; inside it lies a tiny, dormant plant, together with a store of food to nourish it until it can feed itself. To begin growing, a seed needs the right conditions: water, warmth and oxygen. Interestingly, most seeds do not need light to germinate. When these conditions are met, the seed swells and bursts open. The first part to emerge is the root, which grows downward in search of water. Next, a shoot grows upward towards the surface. Once the shoot reaches the light and its first leaves open, the young plant can begin to make its own food by photosynthesis, and no longer depends on the food store in the seed. Some seeds can remain dormant for many years, waiting for the right moment. Seeds are spread far and wide by wind, by water, and by animals, which helps plants colonise new ground.",
   Q:[
    {t:'text',a:'plant',q:'Inside a seed lies a tiny, dormant ______.'},
    {t:'text',a:'food',q:'A seed also contains a store of ______.'},
    {t:'text',a:'oxygen',q:'To germinate, a seed needs water, warmth and ______.'},
    {t:'text',a:'root',q:'The first part to emerge is the ______.'},
    {t:'text',a:'shoot',q:'Next, a ______ grows upward.'},
    {t:'text',a:'photosynthesis',q:'The young plant makes food by ______.'},
    {t:'text',a:'dormant',q:'Some seeds remain ______ for many years.'},
    {t:'text',a:'animals|animal',q:'Seeds are spread by wind, water and ______.'},
    {t:'choice',a:'B',q:'To germinate, most seeds:',opts:['A) need light','B) do not need light','C) need cold','D) need soil only']},
    {t:'choice',a:'B',q:'The root grows:',opts:['A) upward','B) downward','C) sideways','D) in a circle']}
   ]}
 ],
 read:[
  {title:'How the Chameleon Changes Colour',
   paras:[
    "List of Headings —  i) More than camouflage   ii) A surprising mechanism   iii) Not for hiding, but for talking   iv) A tongue like a weapon   v) Eyes that move alone   vi) A shrinking habitat   vii) The colours of the rainbow   viii) A cold-blooded life",
    "A   The chameleon is famous for one remarkable ability: it can change the colour of its skin. Popular belief holds that it does this to blend in with its surroundings, becoming green on a leaf or brown on a branch. The reality, as scientists have discovered, is more surprising — and colour change is only one of several extraordinary features of this strange lizard.",
    "B   For a long time it was thought that chameleons changed colour by moving pigment around in their skin. Recent research has revealed something far stranger. Their skin contains layers of tiny crystals, and by relaxing or tightening the skin, the chameleon changes the spacing between these crystals. Because the spacing determines which colours of light are reflected, the animal's colour shifts — not with pigment, but with structure.",
    "C   More surprising still is why they do it. Chameleons change colour far less to hide than to communicate. A bright display may warn off a rival or attract a mate, while darker colours can signal fear or submission. Colour also helps control temperature: a cold chameleon may turn dark to absorb more heat from the sun. Camouflage, it turns out, is a minor use at best.",
    "D   The chameleon's other tools are just as remarkable. To catch its prey, it fires out a tongue that can be longer than its entire body, striking an insect in a fraction of a second and drawing it back to the mouth. The tip is sticky and forms a suction cup, so that few victims escape.",
    "E   Then there are the eyes. Each of a chameleon's bulging eyes can swivel completely independently of the other, so that the animal can look forward with one and backward with the other at the same time. This gives it a full view of its surroundings without moving its body, ideal for spotting both prey and danger.",
    "F   Sadly, many of the world's chameleons are now under threat. Most live in the forests of Madagascar and Africa, and as these forests are cut down for farming and timber, the lizards lose their homes. Several species are now endangered, and some may vanish before science has even fully understood them."
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'FALSE',q:'Chameleons change colour by moving pigment around their skin.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Chameleons change colour mainly to hide.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:"A chameleon's tongue can be longer than its body.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:"Each of a chameleon's eyes can move independently.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'crystals|crystal',q:"A chameleon's skin contains tiny ______ that reflect light."},
    {t:'text',a:'dark|darker',q:'A cold chameleon may turn ______ to absorb heat.'},
    {t:'text',a:'Madagascar',q:'Most chameleons live in the forests of ______ and Africa.'}
   ]},
  {title:'The History of Perfume',
   paras:[
    "A   The desire to smell sweet is very ancient. Long before recorded history, people burned fragrant woods and resins, and the word 'perfume' itself comes from the Latin meaning 'through smoke', a reminder of these origins. At first, pleasant scents were used less for personal vanity than in religious ceremonies, as offerings to the gods.",
    "B   The ancient Egyptians took perfume to new heights. They used fragrant oils in their temples, in medicine, and in the elaborate process of preparing the dead. Wealthy Egyptians scented their bodies and their homes, and perfume became a mark of status and luxury throughout the ancient world.",
    "C   A crucial advance was the art of extracting scent from flowers. Early methods soaked petals in oil or fat to capture their fragrance, but these were slow and produced weak results. The great breakthrough came with distillation, perfected by scholars of the medieval Islamic world, which allowed the pure essence of a flower to be captured in a concentrated form.",
    "D   Perfume-making later flourished in Europe, above all in France, which remains the centre of the industry to this day. The town of Grasse, with its fields of flowers, became famous for producing the raw materials, while skilled perfumers, sometimes called 'noses', learned to blend hundreds of ingredients into a single, harmonious scent.",
    "E   A modern perfume is a work of remarkable complexity. It is built in 'notes' that unfold over time: the light 'top notes' smelt first, the 'heart notes' that follow, and the deep 'base notes' that linger for hours. Creating a successful perfume can take a skilled maker years of patient work.",
    "F   The twentieth century transformed the industry. The invention of synthetic scents, made in the laboratory rather than extracted from nature, made perfume far cheaper and available to everyone, not just the rich. Today, perfume is a global business worth billions, though the finest scents are still crafted with the same care as centuries ago."
   ],
   Q:[
    {t:'choice',a:'B',q:"The word 'perfume' comes from the Latin meaning:",opts:['A) sweet flower','B) through smoke','C) from France','D) pure oil']},
    {t:'choice',a:'B',q:'At first, pleasant scents were used mainly in:',opts:['A) personal vanity','B) religious ceremonies','C) cooking','D) medicine only']},
    {t:'choice',a:'C',q:"Distillation, which captured a flower's pure essence, was perfected by:",opts:['A) the Egyptians','B) the French','C) medieval Islamic scholars','D) the Romans']},
    {t:'choice',a:'B',q:'The town of Grasse became famous for:',opts:['A) selling perfume','B) producing the raw materials','C) inventing synthetics','D) religious rituals']},
    {t:'text',a:'E',q:'Which paragraph (A–F) explains how a modern perfume unfolds over time?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the effect of synthetic scents?'},
    {t:'text',a:'A',q:"Which paragraph (A–F) explains the origin of the word 'perfume'?"},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the breakthrough of distillation?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the role of the Egyptians?'},
    {t:'text',a:'dead',q:'The Egyptians used fragrant oils in temples, medicine and preparing the ______.'},
    {t:'text',a:'grasse',q:'France, especially the town of ______, became a centre of perfume.'},
    {t:'text',a:'top',q:"A perfume's light first notes are called ______ notes."},
    {t:'text',a:'cheaper|cheap',q:'Synthetic scents made perfume far ______.'}
   ]},
  {title:'Is Homework Worthwhile?',
   paras:[
    "A   Homework is such a familiar part of school life that few stop to ask whether it actually works. Yet the value of homework is far from settled. Some argue it is essential for learning; others believe it does more harm than good, robbing children of rest and play. As schools rethink how they teach, the debate over homework has become surprisingly heated.",
    "B   Supporters make several arguments in its favour. Homework, they say, gives students a chance to practise and reinforce what they have learned in class, which helps it stick. It also teaches valuable habits — planning, self-discipline and independent study — that will serve young people well in later life, at university and at work.",
    "C   The evidence, however, is more complicated than either side admits. Research suggests that homework does help older students, in secondary school, to learn more, particularly in modest amounts. For younger children, though, the benefits are much less clear, and large amounts of homework seem to bring little gain at any age.",
    "D   Critics point to real costs. Too much homework, they argue, leaves children stressed and exhausted, with no time for exercise, hobbies or family. It can also turn a subject into a chore, killing the very love of learning that school should foster. In extreme cases, the pressure of endless homework has been linked to anxiety.",
    "E   There is also a question of fairness. Not all children have the same conditions at home. A child with a quiet room, books and educated parents to help has a great advantage over one in a crowded home with no such support. Homework, critics warn, can therefore widen the gap between richer and poorer students.",
    "F   Most researchers now favour a balanced approach. Homework, they suggest, can be useful when it is limited in amount, well designed, and appropriate to the child's age. The goal, they argue, should be quality rather than quantity — a little meaningful work, rather than hours of busy tasks that exhaust without teaching."
   ],
   Q:[
    {t:'choice',a:'NO',q:'The value of homework is widely agreed upon.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Supporters believe homework can teach useful habits like self-discipline.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Research clearly shows homework greatly benefits young children.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Too much homework has been linked to anxiety.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'All children have equal conditions for doing homework at home.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most researchers favour large amounts of homework.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives the argument that homework builds good habits?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) raises the concern that homework widens the gap between rich and poor?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) reports the finding that homework helps older students more?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) calls for quality rather than quantity?'},
    {t:'text',a:'reinforce',q:'Homework gives students a chance to practise and ______ what they learned.'},
    {t:'text',a:'modest|small',q:'Research suggests homework helps older students most in ______ amounts.'},
    {t:'text',a:'chore',q:'Too much homework can turn a subject into a ______.'},
    {t:'text',a:'quantity',q:'Most researchers favour quality rather than ______.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Average hours of homework per week, by age group, two countries</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Age group</th><th style='border:1px solid #999;padding:5px 10px'>Country A</th><th style='border:1px solid #999;padding:5px 10px'>Country B</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>6–11</td><td style='border:1px solid #999;padding:5px 10px'>3</td><td style='border:1px solid #999;padding:5px 10px'>5</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>12–15</td><td style='border:1px solid #999;padding:5px 10px'>7</td><td style='border:1px solid #999;padding:5px 10px'>11</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>16–18</td><td style='border:1px solid #999;padding:5px 10px'>12</td><td style='border:1px solid #999;padding:5px 10px'>16</td></tr></table>",
  task1:"The table below shows the average number of hours of homework done per week by three age groups in two countries. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that homework is an essential part of education, while others think it should be abolished. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 20 (Exam Level) ===================== */
{
 name:'Mock 20 — Exam Level',
 blurb:'🔴 Airport transfer · Museum late night · Video project + Bats · The story of concrete · Reliance on technology',
 listen:[
  {title:'Booking an airport transfer',
   transcript:"Good afternoon, City Cabs. I'd like to book an airport transfer. Certainly, your name? O'Brien, O-apostrophe-B-R-I-E-N. What time do you need collecting? Half past five... sorry, quarter past five in the morning. And where from? The Hillside Hotel. Which terminal? Terminal one — no, Terminal two. How many passengers? Three of us. And luggage? Two large suitcases. The fare is thirty-five pounds... sorry, forty. How will you pay? In cash, please. Would you like a saloon or an estate car? An estate, for the luggage. We'll send confirmation by text.",
   Q:[
    {t:'text',a:"o'brien|obrien|o brien",q:'Name: ______'},
    {t:'text',a:'5.15|5:15|quarter past five',q:'Pick-up time: ______'},
    {t:'text',a:'hillside',q:'Pick-up from: the ______ Hotel'},
    {t:'text',a:'2|two',q:'Destination: Terminal ______'},
    {t:'text',a:'3|three',q:'Number of passengers: ______'},
    {t:'text',a:'suitcases|suitcase|cases|case',q:'Luggage: two large ______'},
    {t:'text',a:'40|forty',q:'Fare: £______'},
    {t:'text',a:'cash',q:'Payment: ______'},
    {t:'text',a:'estate',q:'Car type: ______'},
    {t:'choice',a:'B',q:'Confirmation is sent by:',opts:['A) email','B) text','C) phone call','D) post']}
   ]},
  {title:'Museum late-night opening event',
   transcript:"We're excited to announce our new late-night opening event at the City Museum. It takes place this Friday, when the museum will stay open until ten in the evening, three hours later than usual. Entry is free after six o'clock. The highlight is our special exhibition on dinosaurs, including a life-sized model. There will be talks by our curators in the lecture hall, and live music in the main hall. Outside, a food truck will serve hot food and drinks. A few notes: children are welcome but must be accompanied by an adult, and to attend the curators' talks you'll need to pick up a free ticket from the desk, as space is limited.",
   Q:[
    {t:'text',a:'late-night|late night',q:'The event is a ______ opening.'},
    {t:'text',a:'friday',q:'It takes place this ______.'},
    {t:'text',a:'10pm|10|ten',q:'The museum stays open until ______.'},
    {t:'text',a:'6pm|6|six',q:'Entry is free after ______.'},
    {t:'text',a:'dinosaurs|dinosaur',q:'The special exhibition is on ______.'},
    {t:'text',a:'lecture',q:'Talks are held in the ______ hall.'},
    {t:'text',a:'main',q:'Live music is in the ______ hall.'},
    {t:'text',a:'truck',q:'Hot food is served from a food ______.'},
    {t:'choice',a:'B',q:'Children must be:',opts:['A) over 10','B) accompanied by an adult','C) left at home','D) members']},
    {t:'choice',a:'B',q:'To attend a talk you need:',opts:['A) to pay','B) a free ticket','C) nothing','D) a passport']}
   ]},
  {title:'Two students plan a video project',
   transcript:"For media class we need to make a short documentary. What about? Let's cover local history. Good idea. How long should it be? Ten minutes... actually, five is enough. Should we interview anyone? Yes, let's interview a local historian, an expert. Where do we film? At the town museum, if they allow it. What equipment do we need? A camera, obviously, and a tripod to keep it steady. How do we edit it? On my laptop, using editing software. What about music? We must use royalty-free music, to avoid copyright problems. When's it due? By the end of term. And where do we submit it? We upload it to the class website.",
   Q:[
    {t:'text',a:'documentary',q:'They will make a short ______.'},
    {t:'text',a:'history',q:'The topic is local ______.'},
    {t:'choice',a:'A',q:'Length:',opts:['A) 5 minutes','B) 10 minutes','C) 15 minutes','D) 20 minutes']},
    {t:'text',a:'historian',q:'They will interview a local ______.'},
    {t:'text',a:'museum',q:'They will film at the town ______.'},
    {t:'text',a:'tripod',q:'To keep the camera steady, they need a ______.'},
    {t:'text',a:'software',q:'They will edit using editing ______.'},
    {t:'text',a:'royalty',q:'They must use ______-free music.'},
    {t:'text',a:'term',q:'Deadline: the end of ______.'},
    {t:'text',a:'website|site',q:'They upload it to the class ______.'}
   ]},
  {title:'Lecture: how rivers shape the land',
   transcript:"Today's lecture is about how rivers shape the land. Every river begins at its source, usually high in the hills or mountains, where rain and springs gather into a small stream. In its upper course, the water flows fast and steeply, and this fast-moving water erodes, or wears away, the rock, cutting deep, narrow valleys. As it flows, the river picks up and carries sediment — mud, sand and stones. In its lower course, near the end of its journey, the river slows down as the land flattens. Here it winds in great loops called meanders, and, as it slows, it drops the sediment it was carrying. Where a river finally meets the sea, at its mouth, it often deposits so much sediment that it builds up a fan-shaped area of new land called a delta. Over thousands of years, rivers can carve entire landscapes, from deep gorges to broad, fertile plains.",
   Q:[
    {t:'text',a:'source',q:'A river begins at its ______.'},
    {t:'text',a:'mountains|mountain',q:'The source is usually in the hills or ______.'},
    {t:'text',a:'fast',q:'In the upper course, the water flows ______.'},
    {t:'text',a:'valleys|valley',q:'Fast water cuts deep, narrow ______.'},
    {t:'text',a:'sediment',q:'The river picks up and carries ______.'},
    {t:'text',a:'slows|slow',q:'In its lower course, the river ______ down.'},
    {t:'text',a:'delta',q:'Where a river meets the sea, it may build a ______.'},
    {t:'text',a:'meander',q:'A great loop in a river is called a ______.'},
    {t:'choice',a:'B',q:'Erosion means the river:',opts:['A) drops sediment','B) wears away rock','C) flows uphill','D) freezes']},
    {t:'choice',a:'B',q:'A river ends at its:',opts:['A) source','B) mouth','C) meander','D) delta']}
   ]}
 ],
 read:[
  {title:'The Extraordinary World of Bats',
   paras:[
    "List of Headings —  i) The only flying mammal   ii) Seeing with sound   iii) A vital role in nature   iv) Unfairly feared   v) Sleeping through the winter   vi) A creature under threat   vii) The largest and smallest bats   viii) How bats raise their young",
    "A   Bats are among the most misunderstood animals in the world. To many people they are creatures of horror, associated with darkness and even with vampires. In reality, bats are gentle, fascinating animals that play a vital part in the health of the natural world, and the fear they inspire is almost entirely undeserved.",
    "B   Bats are extraordinary for a simple reason: they are the only mammals capable of true, flapping flight. While a few other mammals, such as flying squirrels, can glide, only bats can truly fly, their wings formed from skin stretched between long, thin finger bones. There are over a thousand species, making up a quarter of all mammal species.",
    "C   Most famously, many bats find their way in the dark using echolocation. They emit high-pitched sounds, far too high for humans to hear, and listen for the echoes that bounce back off objects around them. From these echoes, a bat can build a detailed picture of its surroundings and locate tiny insects in complete darkness.",
    "D   Bats are enormously valuable to humans and to nature. Insect-eating bats consume vast numbers of pests, including mosquitoes and insects that damage crops, saving farmers huge sums. Fruit-eating bats, meanwhile, spread the seeds of many plants and pollinate flowers, including those of some important crops.",
    "E   In colder regions, bats face a special challenge: in winter, the insects they eat disappear. To survive, many species hibernate, entering a deep sleep in caves or hollow trees, during which their body temperature drops and their heartbeat slows almost to a stop, so that they use very little energy until spring.",
    "F   Sadly, bats around the world are in decline. They are threatened by the loss of the caves and old trees in which they roost, by pesticides that poison their insect food, and, in some regions, by a deadly disease. Because bats breed slowly, raising only one pup a year, their populations recover very slowly once they fall."
   ],
   Q:[
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'TRUE',q:'Bats are the only mammals capable of true flight.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Humans can easily hear the sounds bats use for echolocation.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some bats help farmers by eating pests.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Bats breed quickly, having many young each year.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'finger',q:"A bat's wings are formed from skin stretched between long ______ bones."},
    {t:'text',a:'echolocation',q:'Finding the way using sound echoes is called ______.'},
    {t:'text',a:'hibernate',q:'In winter, many bats ______ in caves or hollow trees.'}
   ]},
  {title:'The Story of Concrete',
   paras:[
    "A   Concrete is the most widely used building material on Earth. After water, it is the substance humanity consumes more of than any other. From roads and bridges to houses and dams, the modern world is, quite literally, built of concrete, yet most people know almost nothing about this grey, unremarkable-looking material.",
    "B   Concrete is, at heart, a simple mixture. It is made by combining cement — a fine powder — with sand, small stones and water. A chemical reaction between the cement and the water causes the whole mixture to set hard, binding the stones together into an artificial rock. Poured as a liquid into a mould, it can be shaped into almost any form before it hardens.",
    "C   The material is far older than many realise. The ancient Romans were master builders in concrete, using it for structures that still stand today, including the great dome of the Pantheon in Rome. Remarkably, the secret of their durable concrete was lost when their empire fell, and was not rediscovered for over a thousand years.",
    "D   Modern concrete has one great weakness: while it is very strong when squeezed, it is weak when stretched or bent, and tends to crack. The solution, developed in the nineteenth century, was to pour the concrete around bars of steel. The resulting 'reinforced concrete', combining the strengths of both materials, made possible the skyscraper and the long-span bridge.",
    "E   Concrete's great advantages are its strength, its low cost, and the fact that its main ingredients are found almost everywhere. These qualities explain why it has been used on such a colossal scale, especially as the world's cities have grown ever larger and taller.",
    "F   Yet concrete comes at an environmental cost. Making cement releases large amounts of carbon dioxide, and the concrete industry is a significant contributor to climate change. Scientists are now working on greener kinds of concrete, and even on 'self-healing' concrete that can repair its own cracks, in the hope of keeping the benefits while reducing the harm."
   ],
   Q:[
    {t:'choice',a:'B',q:'After water, concrete is:',opts:['A) a rare material','B) the substance humans use most','C) made only of cement','D) a modern invention']},
    {t:'choice',a:'C',q:'Concrete sets hard because of a reaction between water and:',opts:['A) sand','B) stones','C) cement','D) steel']},
    {t:'choice',a:'B',q:"The Romans' secret of durable concrete was:",opts:['A) never discovered','B) lost for over a thousand years','C) written down','D) stolen']},
    {t:'choice',a:'C',q:'Reinforced concrete combines concrete with:',opts:['A) wood','B) stone','C) steel','D) glass']},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the weakness of concrete and how it was solved?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the environmental cost of concrete?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains what concrete is made from?'},
    {t:'text',a:'C',q:"Which paragraph (A–F) describes the Romans' use of concrete?"},
    {t:'text',a:'E',q:'Which paragraph (A–F) explains why concrete has been used so widely?'},
    {t:'text',a:'water',q:'Concrete is made by mixing cement with sand, stones and ______.'},
    {t:'text',a:'pantheon',q:'The Roman ______ in Rome has a famous concrete dome.'},
    {t:'text',a:'stretched|bent',q:'Concrete is strong when squeezed but weak when ______.'},
    {t:'text',a:'dioxide',q:'Making cement releases large amounts of carbon ______.'}
   ]},
  {title:'Do We Rely Too Much on Technology?',
   paras:[
    "A   Modern life is unimaginable without technology. We wake to phone alarms, navigate by satellite, and store our memories, our money and our friendships on electronic devices. Technology has brought enormous benefits, yet a growing number of people wonder whether we have come to depend on it too heavily, and what we might be losing as a result.",
    "B   The advantages of our reliance are undeniable. Technology gives us instant access to almost all of human knowledge, connects us with people across the world, and does in seconds tasks that once took hours. For work, for learning and for daily convenience, few would seriously wish to return to the way things were.",
    "C   Critics, however, point to hidden costs. When a device does something for us, we may lose the ability to do it ourselves. Many people can no longer read a map, do mental arithmetic, or remember a phone number, because their devices do these things for them. Skills that are not practised, they warn, quietly fade away.",
    "D   There are concerns about the mind as well. Some studies suggest that constant use of screens and the flood of instant information may be shortening attention spans and making deep, sustained thought harder. Others worry about the effect on children, who now grow up with devices from their earliest years.",
    "E   A further worry is what happens when the technology fails. A society that depends utterly on computers and networks is vulnerable: a power cut, a system crash or a cyber-attack can bring daily life to a halt. The more we rely on a system, critics note, the more serious it is when that system breaks down.",
    "F   Most thoughtful observers, though, reject the idea of turning back. Technology itself, they argue, is neither good nor bad; what matters is how wisely we use it. The sensible course is not to abandon our devices but to use them deliberately — as tools that serve us, rather than masters that we serve."
   ],
   Q:[
    {t:'choice',a:'YES',q:'Technology has brought enormous benefits to modern life.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Few people would want to return to life before modern technology.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Relying on devices can cause certain human skills to fade.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Studies prove beyond doubt that screens improve attention spans.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'A society that depends heavily on technology is more vulnerable when it fails.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most thoughtful observers believe we should abandon our devices.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the risk when technology fails?'},
    {t:'text',a:'C',q:'Which paragraph (A–F) describes the loss of skills we no longer practise?'},
    {t:'text',a:'B',q:'Which paragraph (A–F) describes the benefits of our reliance on technology?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) gives the view that technology is a tool to be used wisely?'},
    {t:'text',a:'map|reading a map|arithmetic|mental arithmetic',q:'Name one skill people may lose because devices do it for them.'},
    {t:'text',a:'spans|span',q:'Some studies suggest screens may be shortening our attention ______.'},
    {t:'text',a:'halt',q:'A power cut or cyber-attack can bring daily life to a ______.'},
    {t:'text',a:'master|masters',q:'Observers say technology should serve us, not be a ______.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Average hours per day using digital devices, by age group</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Age group</th><th style='border:1px solid #999;padding:5px 10px'>2010</th><th style='border:1px solid #999;padding:5px 10px'>2020</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Under 18</td><td style='border:1px solid #999;padding:5px 10px'>3.5</td><td style='border:1px solid #999;padding:5px 10px'>7.0</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>18–40</td><td style='border:1px solid #999;padding:5px 10px'>4.0</td><td style='border:1px solid #999;padding:5px 10px'>6.5</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Over 40</td><td style='border:1px solid #999;padding:5px 10px'>1.5</td><td style='border:1px solid #999;padding:5px 10px'>4.0</td></tr></table>",
  task1:"The table below shows the average number of hours per day spent using digital devices by three age groups in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that we have become too dependent on technology. To what extent do you agree or disagree? Write at least 250 words."
 }
},

/* ===================== MOCK 21 (Exam Level) ===================== */
{
 name:'Mock 21 — Exam Level',
 blurb:'🔴 Plumber call · Charity-shop induction · Fundraiser + The tardigrade · History of the piano · Are exams best?',
 listen:[
  {title:'Booking a plumber',
   transcript:"Hello, Rapid Plumbers, how can I help? I've got a problem at home. Your surname? Ferguson, F-E-R-G-U-S-O-N. What's the problem? A blockage... no, actually a leak. Where is it? In the bathroom — sorry, the kitchen. And your address? Forty Oak Road... sorry, fourteen Oak Road. When would suit you? Tuesday... actually Thursday is better. Morning or afternoon? The morning, please. There's a call-out fee of forty-five pounds. And how will you pay? By card. Will you be home? No, but I'll leave a key with a neighbour. And a contact number? It ends in three-oh-seven.",
   Q:[
    {t:'text',a:'ferguson',q:'Surname: ______'},
    {t:'text',a:'leak',q:'Problem: a ______'},
    {t:'text',a:'kitchen',q:'Location: the ______'},
    {t:'text',a:'14|fourteen',q:'Address: ______ Oak Road'},
    {t:'text',a:'thursday',q:'Preferred day: ______'},
    {t:'text',a:'morning',q:'Preferred time: ______'},
    {t:'text',a:'45|forty-five',q:'Call-out fee: £______'},
    {t:'text',a:'card',q:'Payment: ______'},
    {t:'text',a:'neighbour|neighbor',q:'A key will be left with a ______.'},
    {t:'choice',a:'B',q:'The contact number ends in:',opts:['A) 703','B) 307','C) 370','D) 730']}
   ]},
  {title:'Charity-shop volunteer induction',
   transcript:"Welcome, and thank you for volunteering at our charity shop. Let me explain how it works. A typical shift is four hours long, and we mainly need help on weekdays, when we're busiest. Your main task will be sorting the donations that people bring in, deciding what can be sold. You'll also help by serving customers at the counter. Don't worry if you've never used a till — full training is provided. On a four-hour shift you're entitled to a fifteen-minute break. Please wear the badge we give you so customers know you work here. There are lockers where you can leave your bags. A couple of rules: volunteers must be at least sixteen years old, and before you can start, we'll need one reference, which we'll check.",
   Q:[
    {t:'text',a:'4|four',q:'A typical shift is ______ hours.'},
    {t:'text',a:'weekdays|weekday',q:'Help is mainly needed on ______.'},
    {t:'text',a:'sorting|sort',q:'The main task is ______ donations.'},
    {t:'text',a:'serving|serve',q:'Volunteers also help by ______ customers.'},
    {t:'text',a:'training',q:'Full ______ is provided for the till.'},
    {t:'text',a:'15|fifteen',q:'A four-hour shift includes a ______-minute break.'},
    {t:'text',a:'badge',q:'Volunteers must wear a ______.'},
    {t:'text',a:'bags|bag',q:'There are lockers for ______.'},
    {t:'choice',a:'B',q:'The minimum age is:',opts:['A) 14','B) 16','C) 18','D) 21']},
    {t:'choice',a:'B',q:'Before starting you need:',opts:['A) a fee','B) a reference','C) a uniform','D) an exam']}
   ]},
  {title:'Two students plan a charity fundraiser',
   transcript:"For the charity project, what event should we hold? A car wash? Hmm, a bake sale is easier. Good, a bake sale. Which charity? The local animal shelter. Where do we hold it? In the sports hall, at break time. What day? Saturday, when there's a match on and lots of people around. What's our target? Two hundred pounds... let's aim higher, three hundred. How do we advertise? Posters around school, and on social media too. What price per cake? Two pounds each. How many helpers do we need? About six. And who looks after the money? Our class treasurer will handle that.",
   Q:[
    {t:'choice',a:'B',q:'The event is a:',opts:['A) car wash','B) bake sale','C) concert','D) raffle']},
    {t:'text',a:'shelter',q:'The money goes to the local animal ______.'},
    {t:'text',a:'hall',q:'It is held in the sports ______.'},
    {t:'text',a:'saturday',q:'The event is on ______.'},
    {t:'choice',a:'B',q:'Their target is:',opts:['A) £200','B) £300','C) £500','D) £1000']},
    {t:'text',a:'posters|poster',q:'They advertise with ______ around school.'},
    {t:'text',a:'social',q:'They also use ______ media.'},
    {t:'text',a:'2|two',q:'Each cake costs £______.'},
    {t:'text',a:'6|six',q:'They need about ______ helpers.'},
    {t:'text',a:'treasurer',q:'The money is handled by the class ______.'}
   ]},
  {title:'Lecture: why we have seasons',
   transcript:"Today's lecture explains why we have seasons. A common misunderstanding is that seasons are caused by the Earth's distance from the Sun — that summer comes when we are closer. This is wrong. Seasons are caused by the tilt of the Earth. Our planet does not spin upright but is tilted at an angle of about twenty-three degrees, and this tilt stays the same as the Earth orbits the Sun. As a result, for part of the year one hemisphere leans towards the Sun. When a hemisphere tilts towards the Sun, it is summer there: the days are longer, and the Sun climbs higher in the sky, so its rays are stronger. Half a year later, the same hemisphere leans away, and it is winter. This is also why the two hemispheres always have opposite seasons — when it is summer in the north, it is winter in the south. Near the equator, where the tilt has little effect, there is little seasonal change at all.",
   Q:[
    {t:'text',a:'tilt',q:'Seasons are caused by the ______ of the Earth.'},
    {t:'text',a:'23|twenty-three',q:'The Earth is tilted at about ______ degrees.'},
    {t:'text',a:'distance',q:"Seasons are NOT caused by the Earth's ______ from the Sun."},
    {t:'text',a:'towards|toward',q:'In summer, a hemisphere tilts ______ the Sun.'},
    {t:'text',a:'longer|long',q:'In summer, the days are ______.'},
    {t:'text',a:'higher|high',q:'In summer, the Sun climbs ______ in the sky.'},
    {t:'text',a:'opposite',q:'The two hemispheres always have ______ seasons.'},
    {t:'text',a:'equator',q:'Near the ______, there is little seasonal change.'},
    {t:'choice',a:'B',q:'As the Earth orbits, its tilt:',opts:['A) increases','B) stays the same','C) disappears','D) reverses']},
    {t:'choice',a:'B',q:'It is summer in a hemisphere when it tilts:',opts:['A) away from the Sun','B) towards the Sun','C) upright','D) sideways']}
   ]}
 ],
 read:[
  {title:'The Toughest Animal on Earth: The Tardigrade',
   paras:[
    "List of Headings —  i) A tiny, common creature   ii) Surviving the impossible   iii) The secret of survival   iv) A journey into space   v) Not truly indestructible   vi) Why scientists are interested   vii) What tardigrades eat   viii) How tardigrades reproduce",
    "A   It is one of the toughest animals ever discovered, yet almost no one has seen one, for it is smaller than a grain of sand. The tardigrade, also known as the 'water bear' because of its plump body and lumbering walk, is a tiny creature that lives almost everywhere on Earth — in oceans, in soil, and in the film of water on a patch of moss in any garden.",
    "B   What has made the tardigrade famous is its almost unbelievable toughness. It can survive conditions that would kill virtually any other living thing. It can endure temperatures near absolute zero and above the boiling point of water; pressures far greater than those at the bottom of the deepest ocean; and doses of radiation hundreds of times higher than would kill a human.",
    "C   The secret of this endurance is a remarkable trick. When conditions become too harsh, a tardigrade can expel almost all the water from its body and curl into a dried-out, lifeless-looking ball called a 'tun'. In this state, its life processes all but stop, and it can survive, apparently dead, for years or even decades. Add a drop of water, and it slowly revives.",
    "D   The tardigrade's toughness has even been tested in the most extreme place of all: outer space. In one experiment, tardigrades were taken into orbit and exposed directly to the vacuum and radiation of space. Astonishingly, many survived, making them one of the only animals known to endure the conditions of space unprotected.",
    "E   It is important not to exaggerate, however. The tardigrade is not immortal, and in its normal, active state it is quite fragile, easily killed. Its incredible survival powers work only in the dried-out 'tun' state, and even then it cannot survive forever. It is not indestructible, but simply astonishingly resilient.",
    "F   Scientists study tardigrades for good reasons. Understanding how they protect their cells from drying out and from radiation could help in preserving medicines and even human tissue, and may one day be useful for protecting astronauts or crops. In this tiny, humble creature, researchers hope, may lie lessons of real value to humankind."
   ],
   Q:[
    {t:'text',a:'i|1',q:'Choose the best heading (i–viii) for Paragraph A.'},
    {t:'text',a:'ii|2',q:'Choose the best heading (i–viii) for Paragraph B.'},
    {t:'text',a:'iii|3',q:'Choose the best heading (i–viii) for Paragraph C.'},
    {t:'text',a:'iv|4',q:'Choose the best heading (i–viii) for Paragraph D.'},
    {t:'text',a:'v|5',q:'Choose the best heading (i–viii) for Paragraph E.'},
    {t:'text',a:'vi|6',q:'Choose the best heading (i–viii) for Paragraph F.'},
    {t:'choice',a:'FALSE',q:'The tardigrade is larger than a grain of sand.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Tardigrades can survive very high doses of radiation.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:"In its dried-out state, a tardigrade's life processes almost stop.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Tardigrades are indestructible and cannot be killed.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'bear',q:'The tardigrade is also known as the water ______.'},
    {t:'text',a:'tun',q:'In harsh conditions, a tardigrade curls into a dried ball called a ______.'},
    {t:'text',a:'medicines|medicine|tissue',q:'Studying tardigrades may help in preserving ______.'}
   ]},
  {title:'The History of the Piano',
   paras:[
    "A   The piano is one of the best-loved of all musical instruments, found in concert halls, schools and homes around the world. Yet it is a relatively recent invention, and its creation solved a problem that had troubled musicians for centuries: how to play both loudly and softly on a keyboard instrument.",
    "B   Before the piano, the main keyboard instrument was the harpsichord. In a harpsichord, pressing a key causes a small quill to pluck a string. This produces a bright sound, but always at the same volume, however hard or gently the key is struck. Musicians could not play louder or softer to add feeling to their music.",
    "C   The solution came around 1700, from an Italian instrument-maker named Bartolomeo Cristofori. Instead of plucking the string, his new instrument used a small hammer to strike it. Crucially, the harder the key was pressed, the harder the hammer hit, and the louder the note. This allowed the player, for the first time, to control the volume with their fingers.",
    "D   This was so important that the new instrument was named after it. Its full original name meant 'soft-loud', reflecting its ability to play both. Over time this was shortened to 'piano', the name we still use, from the Italian word for 'soft'.",
    "E   The early piano was quieter and weaker than the modern one. Over the following century, makers steadily improved it, adding a stronger iron frame to hold the strings under greater tension, which produced a far bigger, richer sound. By the nineteenth century, the piano had become the powerful instrument we know today.",
    "F   The piano's popularity soared. It became the centre of music-making in middle-class homes, a symbol of culture and education, and the instrument for which many of the greatest composers wrote. Even today, in an age of electronic music, the piano remains one of the first instruments many people learn to play."
   ],
   Q:[
    {t:'choice',a:'B',q:'The piano solved the problem of how to play both loudly and:',opts:['A) quickly','B) softly','C) high','D) low']},
    {t:'choice',a:'B',q:'In a harpsichord, the string is:',opts:['A) struck by a hammer','B) plucked by a quill','C) bowed','D) blown']},
    {t:'choice',a:'A',q:'The piano was invented around 1700 by:',opts:['A) an Italian instrument-maker','B) a German composer','C) a French king','D) an English maker']},
    {t:'choice',a:'B',q:"The word 'piano' comes from the Italian for:",opts:['A) loud','B) soft','C) hammer','D) string']},
    {t:'text',a:'B',q:'Which paragraph (A–F) explains how the harpsichord produced its sound?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the addition of an iron frame?'},
    {t:'text',a:'D',q:"Which paragraph (A–F) explains the meaning of the name 'piano'?"},
    {t:'text',a:'C',q:"Which paragraph (A–F) describes Cristofori's key innovation?"},
    {t:'text',a:'F',q:"Which paragraph (A–F) describes the piano's place in the home?"},
    {t:'text',a:'volume',q:'The harpsichord always played at the same ______.'},
    {t:'text',a:'hammer',q:'In a piano, a small ______ strikes the string.'},
    {t:'text',a:'iron',q:'A stronger ______ frame let the strings be held under greater tension.'},
    {t:'text',a:'education',q:'The piano became a symbol of culture and ______.'}
   ]},
  {title:'Are Exams the Best Way to Assess Students?',
   paras:[
    "A   For generations, the formal written examination has been the main way of judging what students have learned. At the end of a course, pupils sit in silence and answer questions under strict time limits, and their whole performance may rest on a few hours' work. As education changes, however, many are asking whether exams are really the best way to measure a student's ability.",
    "B   Supporters of examinations defend them strongly. Exams, they argue, are fair, since every student answers the same questions under the same conditions. They are hard to cheat in, they test knowledge across a whole subject, and they prepare young people for the pressure they will face in later life. For all their faults, exams remain a clear and objective measure.",
    "C   Critics, however, see serious flaws. An exam, they point out, tests performance on a single day, and a student who is unwell or anxious may do far worse than their ability deserves. Exams tend to reward memory and quick recall rather than deep understanding or creativity, and they say little about skills such as teamwork or problem-solving that matter greatly in real life.",
    "D   There is also concern about the effect on learning itself. When everything depends on an exam, students may simply memorise facts to pass, forgetting them soon afterwards, rather than truly understanding the subject. Teachers, under pressure to produce good results, may end up 'teaching to the test' rather than inspiring a genuine love of learning.",
    "E   For these reasons, many educators favour a broader approach. Continuous assessment, in which a student's coursework, projects and presentations count towards their final mark, can give a fuller picture of their abilities and reduce the pressure of a single exam. Such methods also reward the steady effort of the whole year, not just performance on one day.",
    "F   Yet coursework has weaknesses of its own. It is harder to make fair, since some students may receive more help at home, and it can be easier to cheat. Most experts therefore conclude that a mixture is best: exams and coursework together, each balancing the weaknesses of the other, to give the fairest and fullest measure of what a student can do."
   ],
   Q:[
    {t:'choice',a:'YES',q:'The written exam has long been the main way of judging students.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Supporters believe exams are easy to cheat in.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Critics argue exams reward memory more than deep understanding.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:"'Teaching to the test' means inspiring a love of learning.",opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'YES',q:'Continuous assessment can reduce the pressure of a single exam.',opts:['YES','NO','NOT GIVEN']},
    {t:'choice',a:'NO',q:'Most experts believe coursework alone is the fairest method.',opts:['YES','NO','NOT GIVEN']},
    {t:'text',a:'B',q:'Which paragraph (A–F) gives the argument that exams are fair and objective?'},
    {t:'text',a:'D',q:'Which paragraph (A–F) describes the effect of exams on how students learn?'},
    {t:'text',a:'F',q:'Which paragraph (A–F) describes the weaknesses of coursework?'},
    {t:'text',a:'E',q:'Which paragraph (A–F) describes the benefits of continuous assessment?'},
    {t:'text',a:'conditions|condition',q:'Supporters say exams are fair because every student answers under the same ______.'},
    {t:'text',a:'day',q:'Critics say exams test performance on a single ______.'},
    {t:'text',a:'presentations|presentation',q:'Continuous assessment counts coursework, projects and ______.'},
    {t:'text',a:'mixture|mix|combination',q:'Most experts conclude that a ______ of exams and coursework is best.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Share of final grade from exams vs coursework (%), four subjects</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Subject</th><th style='border:1px solid #999;padding:5px 10px'>Exam</th><th style='border:1px solid #999;padding:5px 10px'>Coursework</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Mathematics</td><td style='border:1px solid #999;padding:5px 10px'>90</td><td style='border:1px solid #999;padding:5px 10px'>10</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>History</td><td style='border:1px solid #999;padding:5px 10px'>60</td><td style='border:1px solid #999;padding:5px 10px'>40</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Art</td><td style='border:1px solid #999;padding:5px 10px'>20</td><td style='border:1px solid #999;padding:5px 10px'>80</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Science</td><td style='border:1px solid #999;padding:5px 10px'>70</td><td style='border:1px solid #999;padding:5px 10px'>30</td></tr></table>",
  task1:"The table below shows the percentage of the final grade that comes from exams and from coursework in four school subjects. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that students should be assessed mainly through exams, while others think continuous assessment is better. Discuss both views and give your own opinion. Write at least 250 words."
 }
}

];
