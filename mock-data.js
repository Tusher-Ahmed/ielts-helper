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
    "A   Before the twentieth century, a simple cut or a routine infection could kill. That changed with the discovery of antibiotics — drugs that kill bacteria or stop them multiplying. Penicillin, found by Alexander Fleming in 1928, was the first, and the medicines that followed transformed medicine, making once-deadly diseases easily curable and allowing surgery that would otherwise have been far too dangerous.",
    "B   Antibiotics work by attacking structures or processes that bacterial cells possess but human cells do not, such as the bacterial cell wall. This is why they harm bacteria while leaving our own cells largely unharmed. Crucially, however, antibiotics have no effect at all on viruses, which is why they are useless against illnesses such as the common cold or influenza.",
    "C   The trouble is that bacteria evolve. In any large population, a few individuals will, by chance, carry genes that allow them to survive a drug. When antibiotics kill the vulnerable bacteria, these resistant survivors are left to multiply, passing on their resistance. Worse still, bacteria can swap resistance genes directly with one another, so that resistance can spread even between different species.",
    "D   Human behaviour has dramatically accelerated this natural process. Patients who stop taking a course of antibiotics as soon as they feel better leave the hardiest bacteria alive. Doctors who prescribe the drugs for viral infections, against which they cannot work, expose bacteria needlessly. And in farming, antibiotics are often given to perfectly healthy animals to promote growth, creating vast reservoirs of resistant bacteria.",
    "E   The consequences are alarming. So-called 'superbugs', resistant to many drugs at once, now cause hundreds of thousands of deaths each year, and the figure is rising. Health authorities warn that, without action, we may enter a 'post-antibiotic era' in which common infections once again become untreatable and routine operations turn deadly.",
    "F   Finding new antibiotics is difficult and expensive, and few companies invest in drugs that will be used sparingly and soon lose their power. Researchers are therefore exploring alternatives, from viruses that prey on bacteria to far stricter rules on how existing drugs are used. Above all, they stress, the antibiotics we still have must be protected by using them only when truly necessary."
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
    "A   Anyone who has walked from a leafy park into a busy city centre on a summer's day has felt it: cities are noticeably hotter than the countryside around them. This phenomenon, in which an urban area is significantly warmer than its rural surroundings, is known as the urban heat island. The difference can be dramatic — a large city may be several degrees warmer than nearby fields, and the gap is greatest at night.",
    "B   Several factors combine to create the effect. The materials of the city — concrete, brick and especially dark asphalt — absorb heat from the sun during the day and release it only slowly after dark, keeping temperatures high into the night. The tall, closely packed buildings trap this heat and block the cooling breeze, while the near-total absence of vegetation removes nature's own air-conditioning.",
    "C   That natural cooling is easily overlooked. In the countryside, plants release water vapour from their leaves in a process called evapotranspiration, which cools the surrounding air much as sweating cools the body. A city of hard, dry surfaces enjoys almost none of this relief. To make matters worse, cars, factories and air-conditioning units all pump out additional 'waste heat' of their own.",
    "D   The consequences are more serious than mere discomfort. During heatwaves, the urban heat island can turn city nights into a health emergency, since the body relies on cooler nights to recover; the elderly and the ill are especially at risk. The extra heat also drives up demand for air conditioning, which consumes electricity and, in a vicious circle, expels yet more heat into the streets.",
    "E   Fortunately, the effect can be reduced. Planting trees and creating parks restores natural cooling and provides shade. Painting roofs white, or covering them with plants to create 'green roofs', reflects sunlight rather than absorbing it. Even the choice of paving materials can help, since lighter, more reflective surfaces stay cooler than dark ones.",
    "F   Such measures matter more than ever. As the world's population becomes increasingly urban and the global climate warms, the two trends threaten to reinforce one another. Designing cities that stay cool is therefore no longer a luxury but, many argue, an urgent necessity for the comfort and health of billions."
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
    "A   In the early 1990s, a team of Italian scientists studying the brains of macaque monkeys made an accidental discovery that would cause a sensation. They had placed electrodes in the region of the brain that controls movement, and found, as expected, that certain cells fired when a monkey reached for a peanut. To their astonishment, the very same cells also fired when the monkey merely watched a researcher reach for the peanut. The brain, it seemed, did not sharply distinguish between doing and seeing.",
    "B   These cells were named 'mirror neurons', because they appear to mirror the actions of others inside the observer's own brain. The finding was striking because it suggested a physical mechanism for something deeply human: our ability to understand what other people are doing, and perhaps why they are doing it, almost instantly and without conscious effort.",
    "C   Some scientists made bold claims for the discovery. Mirror neurons, they proposed, might be the biological basis of empathy — our capacity to feel what others feel — and even of language and culture. A few went so far as to call them 'the neurons that shaped civilisation', arguing that the ability to imitate and understand others underlies almost everything that makes us human.",
    "D   Not everyone was convinced. Critics pointed out that most of the direct evidence came from monkeys, since recording from single cells in healthy humans is rarely possible. Whether humans possess a genuine mirror-neuron system of the same kind, and whether it really explains empathy, remained, they argued, unproven. Grand claims, they warned, had outrun the cautious evidence.",
    "E   Research has since become more measured. Most neuroscientists now accept that humans probably do have mirror-like activity, but see it as one contributor to social understanding rather than its single cause. Empathy, they emphasise, is a complex phenomenon drawing on many brain systems and on learning, not the product of one type of cell.",
    "F   Even in this more sober light, the discovery remains important. It helped shift attention towards the deeply social nature of the human brain — the idea that our minds are built, from the start, to connect with other minds. Whatever mirror neurons turn out to be, they reminded science that understanding people cannot be separated from understanding how we understand each other."
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
    "A   Extinction is a natural part of life on Earth; species have always appeared and vanished. What alarms scientists today is the speed at which they are now disappearing. The current rate of extinction is estimated to be tens or even hundreds of times higher than the natural 'background' rate, and it is accelerating. Many biologists argue that we have entered a sixth mass extinction.",
    "B   The phrase is deliberate. Over the last half-billion years, the fossil record shows five earlier catastrophes in which a large proportion of all species were wiped out in a geologically short time. The most famous, 66 million years ago, ended the age of the dinosaurs, probably after an asteroid struck the Earth. Each of these previous five was caused by natural forces.",
    "C   This time, the cause is different. Unlike the earlier events, the present crisis is driven overwhelmingly by a single species: our own. Habitat destruction, as forests and wetlands are cleared for farming and cities, is the greatest threat. To this are added hunting, pollution, the spread of invasive species, and, increasingly, climate change.",
    "D   Why should the loss of, say, a beetle or a frog concern us? The answer lies in the interconnectedness of nature. Species depend on one another in complex webs; remove enough threads and the whole fabric can unravel. Ecosystems provide humans with 'services' we take for granted — clean water, fertile soil, the pollination of crops — and these depend on biodiversity.",
    "E   The picture is not entirely hopeless. Conservation can work: species brought to the very edge of extinction have sometimes recovered when given protection. Setting aside large areas of habitat, restoring damaged ecosystems and curbing emissions could still slow the losses dramatically.",
    "F   What is clear is that the window for action is narrow. Unlike the victims of past extinctions, we can see the crisis unfolding and understand its causes. Whether we choose to act on that knowledge, many scientists say, will determine the character of the living world for millions of years to come."
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
    "A   Nostalgia — a sentimental longing for the past — was for centuries regarded as an illness. The word was coined in the seventeenth century by a Swiss physician to describe the homesickness of soldiers far from home, and it was treated as a dangerous medical condition. Only recently has psychology reached a very different conclusion.",
    "B   Modern research suggests that nostalgia, far from being harmful, is generally good for us. When people recall cherished memories — a family celebration, an old friendship — they typically report feeling happier, more optimistic and more connected to others. Nostalgia, it seems, is a resource the mind uses to comfort itself.",
    "C   It appears to be triggered most often by negative feelings. Loneliness, boredom and sadness all tend to bring on nostalgic reflection, which then works to counteract them. In this sense nostalgia acts almost like a psychological immune response, restoring a sense of meaning when we feel low.",
    "D   The triggers are not only emotional. Sensory cues are especially powerful: a particular song, or a smell such as baking bread, can summon a vivid memory in an instant. This is why music from our teenage years often moves us so deeply, long after we have forgotten more recent songs.",
    "E   Nostalgia is also social. The memories people treasure are overwhelmingly about relationships — moments shared with family and friends rather than solitary achievements. By reminding us that we are loved and that we belong, nostalgia strengthens our bonds with others and reduces feelings of isolation.",
    "F   There is, of course, a risk. Dwelling too much on an idealised past can make the present seem disappointing by comparison, and can slide into an unhelpful refusal to move on. Used in moderation, however, psychologists now regard nostalgia not as a weakness but as a small and valuable tool for wellbeing."
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
    "A   For most of history, to call someone 'bird-brained' was to call them stupid. Birds, with their tiny heads, were assumed to be incapable of real thought. The crow family — which includes crows, ravens, rooks and jays — has forced scientists to abandon that assumption entirely. These birds, it turns out, are among the most intelligent animals on the planet.",
    "B   The evidence is striking. In laboratory experiments, crows have solved multi-step puzzles that would defeat many mammals, using one tool to obtain another before reaching a reward. Some wild crows in New Caledonia not only use sticks as tools but shape them, bending a piece of wire into a hook — a level of tool manufacture once thought unique to humans and great apes.",
    "C   Their abilities extend to memory and planning. Crows can remember the individual human faces of people who have threatened them, and will scold those particular individuals years later, even passing the grudge on to other crows. Some species hide thousands of food items and recall the locations months afterwards, and appear to plan for future needs rather than merely reacting to the present.",
    "D   Perhaps most surprisingly, crows seem to understand something about other minds. A crow that has hidden food while being watched by another bird will often return, alone, to move it — behaviour that suggests it grasps that the observer might steal the cache. Such awareness of what others can see was long believed to be beyond any animal but ourselves.",
    "E   How can so small a brain achieve so much? The answer lies not in size but in structure. Although a crow's brain is tiny, it is exceptionally dense, packed with far more neurons than a mammal brain of similar size. Intelligence, it appears, depends less on the sheer size of a brain than on how tightly it is wired.",
    "F   These discoveries carry a wider lesson. They show that advanced intelligence has evolved more than once, and by a very different route from our own. In studying the mind of a crow, scientists are learning that there is more than one way for nature to build a thinking creature."
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
    "A   For most of history, the continents were thought to be fixed in place. In 1912 a German scientist, Alfred Wegener, proposed a startling idea: that the continents had once been joined and had since drifted apart. He pointed to the way the coastlines of Africa and South America seem to fit together like the pieces of a jigsaw, and to matching fossils on either side of the ocean. Because he could suggest no mechanism to move whole continents, his theory was widely ridiculed.",
    "B   The explanation, when it came, lay in the structure of the Earth itself. Beneath the thin, rigid outer layer, or crust, lies the mantle, a vast region of hot, slowly flowing rock. The crust is not a single shell but is broken into about a dozen huge slabs, called tectonic plates, which effectively float on the mantle beneath.",
    "C   What moves them is heat. Deep within the Earth, heat rising from the core sets up slow circulating currents in the mantle, known as convection. Like a conveyor belt, these currents drag the plates above them, so that the continents ride slowly across the globe at roughly the speed our fingernails grow.",
    "D   Decisive proof arrived only in the 1960s, from the bottom of the sea. Surveys revealed long undersea mountain ranges where molten rock rises and pushes the sea floor apart on either side. As this new rock cools, it records the direction of the Earth's magnetic field, leaving a striped pattern that confirmed the sea floor was indeed spreading.",
    "E   Most of the Earth's drama occurs where plates meet. Where two plates pull apart, new crust forms; where they collide, one may plunge beneath the other or crumple upward into mountains; where they grind past one another, they lock and then slip. The Himalayas, the Andes and the deep ocean trenches all mark such boundaries.",
    "F   These boundaries are also where the greatest hazards lie. The world's earthquakes and most of its volcanoes are concentrated along plate edges, above all around the rim of the Pacific. Although scientists cannot yet predict exactly when an earthquake will strike, understanding plate tectonics allows them to identify the regions most at risk and to prepare."
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
    "A   Long before anyone understood why it worked, people were fermenting food. Fermentation is the process by which microbes — chiefly bacteria and yeasts — break down sugars in food, producing acids, gases or alcohol. It is one of the oldest of all food technologies, used for thousands of years to make bread, cheese, wine and countless other staples.",
    "B   Its first purpose was preservation. In the age before refrigeration, fermentation was a way of keeping food edible for months. The acids and alcohol that microbes produce create conditions in which harmful, spoilage-causing organisms cannot survive, so that milk becomes long-lasting cheese and cabbage becomes sauerkraut.",
    "C   The chemistry was a mystery until the nineteenth century, when the French scientist Louis Pasteur demonstrated that fermentation was the work of living microorganisms, not a purely chemical reaction as had been believed. His discovery laid the foundations of microbiology and transformed industries from brewing to medicine.",
    "D   Fermentation shapes flavour as much as it preserves. The tang of yoghurt, the complexity of aged cheese, the sourness of a good loaf of bread — all are the by-products of microbial activity. Different microbes, and different conditions, produce strikingly different results, which is why the fermented foods of each region taste so distinctive.",
    "E   Recently, fermented foods have attracted fresh attention for their possible health benefits. Foods such as yoghurt and kimchi contain live bacteria that may help to maintain a healthy population of microbes in the gut. Although the evidence is still developing, interest in such 'probiotic' foods has grown rapidly.",
    "F   Fermentation is also finding new industrial uses. The same basic process is now harnessed to produce fuels, medicines and even materials, as engineers programme microbes to manufacture substances that would otherwise be difficult or costly to make. An ancient craft, it turns out, still has a great deal to offer."
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
    "A   We are used to thinking of information as valuable, but the economist Herbert Simon pointed out a paradox: in a world flooded with information, the truly scarce resource is not information but attention. There is simply too much to read, watch and hear, and only so many hours in which to do so. Human attention, therefore, has become one of the most sought-after commodities of the modern age.",
    "B   Whole industries now compete for it. Much of what we use online appears to be free — search engines, social networks, video sites — but in reality we pay with our attention. These services make their money by capturing our time and selling it, in the form of advertising, to others. As the saying goes, if you are not paying for the product, you are the product.",
    "C   To win this competition, companies design their products to be as engaging as possible. Endless feeds that never reach a bottom, notifications that interrupt us, and rewards delivered at unpredictable intervals all exploit well-understood features of human psychology, keeping us scrolling long after we meant to stop.",
    "D   Critics argue that this comes at a cost. When our attention is constantly fragmented, they say, our capacity for deep, sustained thought suffers. Some researchers link heavy use of attention-grabbing technology to shortened concentration spans and greater difficulty in focusing, though such claims remain difficult to prove conclusively.",
    "E   Defenders respond that the same technologies bring enormous benefits, connecting people and putting the world's knowledge within reach. The problem, they argue, lies not in the tools themselves but in how they are designed and used, and better design could serve users rather than merely capturing them.",
    "F   Increasingly, people are seeking to reclaim their attention deliberately — switching off notifications, setting limits on their screen time, or taking breaks from social media altogether. Whether such individual efforts are enough, or whether the design of these systems must change, is now a live question."
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
    "A   The ocean is far from still. Through it flow vast currents, like rivers within the sea, carrying enormous quantities of water and heat around the planet. The currents at the surface are driven mainly by the wind. As steady winds blow across the water, they drag the surface along with them, creating great circular flows that sweep warm water away from the equator and cooler water back towards it.",
    "B   These surface currents have a profound effect on climate. The best-known example is the Gulf Stream, which carries warm water from the Gulf of Mexico across the Atlantic towards Europe. Without it, countries such as Britain and Norway would be far colder, more like regions at the same latitude in Canada. In this way, a current thousands of kilometres away keeps distant shores mild.",
    "C   Beneath the surface, a second, slower system is at work, driven not by wind but by density. Water that is colder and saltier is heavier, and sinks; warmer, fresher water rises. In the far North Atlantic, cold, salty water sinks to the ocean floor and begins a long journey through the deep sea.",
    "D   These deep and surface currents are linked into a single, planet-wide loop, often called the global conveyor belt. Water sinking in the North Atlantic travels along the sea floor to the Pacific and Indian Oceans, rises, and eventually returns to the Atlantic at the surface. A single circuit of this belt may take around a thousand years to complete.",
    "E   Scientists warn that this vast engine is vulnerable. As the climate warms, melting ice adds fresh water to the North Atlantic, making the surface water less salty and less dense, so that it sinks less readily. If the conveyor belt were to slow significantly, the effects on global climate could be severe and unpredictable.",
    "F   Currents matter for life as well as climate. In certain regions, currents draw cold, nutrient-rich water up from the deep to the sunlit surface, a process called upwelling. These upwelling zones are among the most productive in the ocean, teeming with fish and supporting some of the world's most important fisheries."
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
    "A   For most of human history, surgery was a horror. Without any effective means of dulling pain, operations were carried out on fully conscious patients, who had to be held down by force. Speed was the surgeon's only mercy: the best were judged by how quickly they could amputate a limb. Many patients died not of their injuries but of the shock and agony of the operation itself.",
    "B   Attempts to dull pain were ancient but crude. Alcohol, opium and even strangulation to the point of unconsciousness had all been tried, with limited and dangerous results. What was needed was a substance that could reliably render a patient insensible to pain, and then allow them to wake unharmed.",
    "C   The breakthrough came in the 1840s in the United States. Several gases and vapours were found to have the necessary effect. In 1846 a dentist named William Morton publicly demonstrated the use of ether, sending a patient to sleep so that a surgeon could remove a tumour painlessly. News of the demonstration spread around the world within months.",
    "D   Chloroform soon followed and was, for a time, preferred, not least because Queen Victoria accepted it during childbirth, lending the practice respectability. Yet anaesthetics were not without risk: too large a dose could kill, and administering them safely required judgement and skill. The new speciality of the anaesthetist was born of this need.",
    "E   The impact was revolutionary. Freed from the need for speed, surgeons could now operate slowly and carefully, attempting procedures deep inside the body that would once have been unthinkable. Anaesthesia, together with the later discovery of antiseptics to prevent infection, transformed surgery from a last, desperate resort into a routine and reliable treatment.",
    "F   Modern anaesthesia is far more sophisticated, using precise combinations of drugs to control consciousness, pain and movement independently. Yet exactly how these agents switch off consciousness remains, remarkably, not fully understood — a reminder that even a routine medical miracle can still hold deep mysteries."
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
    "A   Why is it so hard to resist a piece of cake, finish a boring task, or stick to a resolution? Psychologists group these struggles under the heading of self-control, or willpower — the capacity to override an immediate impulse in the service of a longer-term goal. For decades, researchers have tried to understand how it works, and why it so often fails.",
    "B   One famous set of experiments, begun in the 1960s, offered young children a marshmallow, telling them they could eat it at once or wait a few minutes and receive two. The ability to wait, it was later reported, predicted a range of positive outcomes in later life. The 'marshmallow test' became one of the best-known studies in psychology.",
    "C   An influential theory held that willpower behaves like a muscle. According to this view, self-control draws on a limited store of mental energy that becomes depleted with use, so that resisting one temptation leaves us weaker against the next. This idea, known as 'ego depletion', seemed to explain why we give in to temptation when tired or stressed.",
    "D   In recent years, however, this theory has come under serious challenge. When researchers attempted to repeat the original experiments on a large scale, many failed to find the effect. Some now argue that willpower feels limited only because we believe it to be; people who think their self-control is unlimited show no signs of depletion at all.",
    "E   Whatever the underlying mechanism, one finding is robust: the most successful self-controllers rarely rely on willpower at all. Instead, they arrange their lives to avoid temptation in the first place — keeping snacks out of the house, or removing distracting apps from their phones. Good habits and a well-designed environment achieve what raw willpower cannot.",
    "F   This is a hopeful conclusion. It suggests that self-control is less a fixed trait, possessed by some lucky individuals, than a skill that can be cultivated. By changing our surroundings rather than merely gritting our teeth, almost anyone can improve their ability to pursue their long-term goals."
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
   transcript:"Thank you for your interest in FitZone gym. We have three types of membership: the standard costs thirty pounds a month, the premium is forty-five, and the student membership is just twenty pounds with a valid student card. All memberships include access to the gym floor and changing rooms, but only premium members can use the swimming pool and sauna. The gym is open twenty-four hours a day, seven days a week. When you join, you'll receive a free fitness assessment with one of our trainers. To sign up, you'll need to bring a photo, proof of address, and your bank details. There's also a one-off joining fee of fifteen pounds.",
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
   transcript:"Welcome to Dunhill Castle, one of the oldest castles in the country, built in the twelfth century. We'll begin in the Great Hall, where banquets were once held. From there, we'll climb the tower, which offers wonderful views of the valley, though I should warn you there are ninety steps and they can be slippery. The castle is said to be home to a famous ghost, and many visitors come especially to hear the legend. The gift shop, where you can buy souvenirs, is located in the old stables. Photography is welcome throughout the castle, except in the chapel, where it is not allowed. The tour lasts approximately forty-five minutes, and afterwards you're welcome to explore the gardens.",
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
   transcript:"You wanted to talk about your dissertation topic? Yes, I'm interested in renewable energy, but I'm not sure it's focused enough. A topic that broad is hard to manage. Could you narrow it to one type of energy? Maybe I could focus on solar power in rural areas. That's much better. And what method will you use? I was thinking of interviews with local residents. Interviews are fine, but make sure you get at least fifteen participants. How long should the dissertation be? Around ten thousand words. When's the deadline? The final version is due in May, but I'd like a draft by the end of March.",
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
   transcript:"Today's lecture concerns volcanoes, one of the most powerful forces on Earth. A volcano forms where molten rock, called magma, rises from deep within the planet to the surface. When magma reaches the surface, it is known as lava. Volcanoes are often found along the boundaries of the tectonic plates that make up the Earth's crust. The most active region is the so-called Ring of Fire, which surrounds the Pacific Ocean. While eruptions can be devastating, volcanoes also bring benefits. The ash they release makes surrounding soil extremely fertile, which is why many people choose to farm near them despite the risks. Volcanic activity has also created some of the world's most beautiful islands. Scientists monitor volcanoes closely, using instruments to detect the small earthquakes that often signal an eruption is near.",
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
  {title:'The Great Barrier Reef',
   paras:[
    "Stretching over 2,300 kilometres along the coast of Australia, the Great Barrier Reef is the largest coral reef system on Earth and the only living structure visible from space. It is home to an astonishing diversity of life, including more than 1,500 species of fish, 400 types of coral, and numerous turtles, sharks, and dolphins.",
    "Coral reefs are built by tiny animals called polyps, which produce hard skeletons of calcium carbonate. Over thousands of years, the accumulated skeletons form the vast structures we see today. Remarkably, corals depend on a close partnership with microscopic algae that live inside them. The algae provide the coral with food through photosynthesis, and in return receive shelter. This relationship also gives coral its brilliant colours.",
    "Unfortunately, the reef is under serious threat. When ocean temperatures rise, corals expel their algae in a process known as 'bleaching', turning white and, if conditions do not improve, eventually dying. In recent years, rising sea temperatures caused by climate change have led to several mass bleaching events. Pollution and overfishing add to the pressure.",
    "Efforts to protect the reef are underway. Large sections are now designated as marine parks where fishing is restricted, and scientists are experimenting with ways to grow more resilient coral. Yet experts agree that the reef's long-term survival depends above all on tackling climate change."
   ],
   Q:[
    {t:'text',a:'2300|2,300',q:'The reef stretches over ______ kilometres.'},
    {t:'choice',a:'C',q:'The reef is home to more than how many species of fish?',opts:['A) 400','B) 1000','C) 1500','D) 2300']},
    {t:'text',a:'polyps|polyp',q:'Coral reefs are built by tiny animals called ______.'},
    {t:'text',a:'carbonate',q:'Coral skeletons are made of calcium ______.'},
    {t:'text',a:'algae',q:'Corals partner with microscopic ______.'},
    {t:'text',a:'photosynthesis',q:'The algae provide food through ______.'},
    {t:'text',a:'white',q:'When corals expel their algae, they turn ______.'},
    {t:'text',a:'bleaching',q:'This process is known as ______.'},
    {t:'choice',a:'B',q:'Bleaching is caused mainly by:',opts:['A) pollution','B) rising temperatures','C) overfishing','D) tourists']},
    {t:'choice',a:'TRUE',q:'The reef is visible from space.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'fishing',q:'Marine parks restrict ______.'},
    {t:'text',a:'resilient',q:'Scientists are trying to grow more ______ coral.'},
    {t:'text',a:'climate',q:"The reef's survival depends above all on tackling ______ change."}
   ]},
  {title:'The Secrets of Body Language',
   paras:[
    "Long before humans developed spoken language, we communicated through our bodies, and to this day, much of what we express is conveyed without words. Researchers estimate that a significant proportion of communication is non-verbal, transmitted through facial expressions, gestures, posture, and eye contact.",
    "Facial expressions are perhaps the most universal form of body language. Studies have shown that certain expressions, such as those for happiness, sadness, fear, and anger, are recognised across all cultures, suggesting they are innate rather than learned. A genuine smile, for instance, involves not just the mouth but also the muscles around the eyes.",
    "Gestures, on the other hand, often vary considerably between cultures. A hand signal that is friendly in one country may be offensive in another. This is why travellers are frequently advised to learn about local customs to avoid misunderstandings.",
    "Body language also reveals emotions we may be trying to hide. Crossed arms can signal defensiveness, while frequent touching of the face may indicate anxiety. Interestingly, research suggests that adopting confident postures can even influence how we feel, making us genuinely more self-assured."
   ],
   Q:[
    {t:'text',a:'spoken',q:'Humans communicated with their bodies before developing ______ language.'},
    {t:'text',a:'non-verbal|nonverbal|non verbal',q:'A large proportion of communication is ______.'},
    {t:'choice',a:'B',q:'Which are said to be recognised across all cultures?',opts:['A) gestures','B) facial expressions','C) postures','D) words']},
    {t:'text',a:'innate',q:'Expressions for basic emotions are thought to be ______ rather than learned.'},
    {t:'text',a:'eyes|eye',q:'A genuine smile also involves muscles around the ______.'},
    {t:'text',a:'vary',q:'Gestures often ______ between cultures.'},
    {t:'text',a:'customs|custom',q:'Travellers are advised to learn local ______.'},
    {t:'text',a:'defensiveness',q:'Crossed arms can signal ______.'},
    {t:'text',a:'anxiety',q:'Touching the face may indicate ______.'},
    {t:'choice',a:'B',q:'Adopting confident postures can:',opts:['A) tire us','B) influence how we feel','C) look rude','D) do nothing']},
    {t:'choice',a:'FALSE',q:'All gestures mean the same thing everywhere.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Facial expressions are the most universal form of body language.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Body language can reveal hidden emotions.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The Invention of the Telephone',
   paras:[
    "The telephone, a device now so ordinary that we scarcely notice it, was once a revolutionary invention that transformed human communication. Before its arrival, messages could travel over long distances only by letter or telegraph, the latter requiring skilled operators to send coded signals.",
    "The invention is most commonly credited to Alexander Graham Bell, who was granted a patent in 1876. Bell, a teacher of the deaf, had long been fascinated by sound and speech. However, Bell was not working alone; several inventors were pursuing similar ideas at the same time, and the question of who truly invented the telephone remains a subject of debate.",
    "The early telephone spread rapidly. Within a few decades, networks of wires connected homes and businesses across entire countries. Operators, often young women, manually connected calls at switchboards, a job that eventually disappeared as automatic exchanges were introduced.",
    "The telephone's impact was profound. It allowed families separated by distance to stay in touch and transformed the way businesses operated. The smartphones we now carry are the direct descendants of that first simple device."
   ],
   Q:[
    {t:'text',a:'telegraph',q:'Before the telephone, long-distance messages travelled by letter or ______.'},
    {t:'choice',a:'B',q:'The telegraph required operators to send:',opts:['A) letters','B) coded signals','C) voices','D) pictures']},
    {t:'text',a:'bell',q:'The telephone is most commonly credited to Alexander Graham ______.'},
    {t:'text',a:'1876',q:'Bell was granted a patent in ______.'},
    {t:'text',a:'deaf',q:'Bell worked as a teacher of the ______.'},
    {t:'choice',a:'FALSE',q:'Bell was the only person working on the idea.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Who invented the telephone is still debated.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'switchboards|switchboard',q:'Early calls were connected manually at ______.'},
    {t:'text',a:'women|woman',q:'Switchboard operators were often young ______.'},
    {t:'text',a:'exchanges|exchange',q:'Operators’ jobs disappeared with automatic ______.'},
    {t:'choice',a:'TRUE',q:'The telephone allowed families separated by distance to stay in touch.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The telephone spread slowly over many centuries.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Smartphones are descendants of the first telephone.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The telephone changed how businesses operated.',opts:['TRUE','FALSE','NOT GIVEN']}
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
   transcript:"Good afternoon, you've reached the Riverside Language School. The beginner Spanish course you asked about runs for twelve weeks, with classes every Monday and Wednesday evening from seven to nine. The course fee is two hundred and forty pounds, which includes the textbook. Classes are small, with a maximum of eight students, so places fill quickly. The course is taught by a native speaker, and there's a test at the end to assess your progress. If you complete the course, you'll receive a certificate. To enrol, please pay a deposit of fifty pounds. The next course begins on the fifth of February.",
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
   transcript:"Welcome to our historic city walking tour. We'll be on foot for about two hours, covering roughly three kilometres, so comfortable shoes are recommended. Our first stop is the cathedral, which dates back eight hundred years. From there, we'll walk to the old market square, the heart of the medieval city. We'll stop for a short break at a traditional tea room, though refreshments are not included in the tour price. Please stay together, especially when crossing the busy roads. At the end, we'll finish at the river, where those who wish can take an optional boat trip. Don't forget to bring a camera.",
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
   transcript:"So, for the biology trip, we're going to the wetlands to study migratory birds. When are we going? Next Saturday, and the minibus leaves at seven thirty. That's early! It is, but the birds are most active in the morning. What do we need to bring? Binoculars, of course, and a notebook to record what we see. Should we bring food? Yes, a packed lunch, as there's nowhere to buy any. What about the weather? It could be windy, so a warm jacket is a good idea. And how do we record our observations? We'll use a special app on our phones. Let's aim to be back by four.",
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
   transcript:"Today we will look at one of nature's most remarkable phenomena: bird migration. Each year, billions of birds travel enormous distances between their breeding and wintering grounds. Some species, such as the Arctic tern, travel from the Arctic to the Antarctic and back, covering tens of thousands of kilometres. Birds migrate mainly to find food and suitable breeding conditions as the seasons change. During the day, they rely on the position of the sun, while at night they use the stars. Remarkably, birds can also sense the Earth's magnetic field, which acts like a built-in compass. Migration is dangerous, however; many birds die from exhaustion, storms, or lack of food. Sadly, human activity, including the loss of wetlands where birds rest, is making these journeys even harder.",
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
  {title:'The Human Brain',
   paras:[
    "Weighing only about 1.4 kilograms, the human brain is one of the most complex structures in the known universe. It contains roughly 86 billion nerve cells, or neurons, each connected to thousands of others, forming a network of staggering complexity. Through this network, the brain controls everything we do, from breathing and moving to thinking and feeling.",
    "The brain is divided into several regions, each with specialised functions. The largest part, the cerebrum, is responsible for higher functions such as reasoning, memory, and language. Beneath it lies the cerebellum, which coordinates movement and balance, while the brainstem controls vital automatic processes like heartbeat and breathing.",
    "One of the brain's most remarkable qualities is its 'plasticity', the ability to change and reorganise itself throughout life. When we learn something new, connections between neurons are strengthened. Following an injury, healthy parts of the brain can sometimes take over the functions of damaged areas.",
    "Despite decades of research, much about the brain remains a mystery. Scientists still do not fully understand how it gives rise to consciousness. Modern imaging technology, which allows researchers to watch the brain in action, is gradually revealing its secrets."
   ],
   Q:[
    {t:'text',a:'1.4',q:'The brain weighs about ______ kilograms.'},
    {t:'choice',a:'B',q:'The brain contains roughly how many neurons?',opts:['A) 86 million','B) 86 billion','C) 1.4 billion','D) 400 billion']},
    {t:'text',a:'neurons|neuron',q:'Nerve cells are also called ______.'},
    {t:'text',a:'cerebrum',q:'The largest part of the brain is the ______.'},
    {t:'text',a:'language',q:'The cerebrum is responsible for reasoning, memory and ______.'},
    {t:'text',a:'cerebellum',q:'The ______ coordinates movement and balance.'},
    {t:'text',a:'breathing',q:'The brainstem controls heartbeat and ______.'},
    {t:'text',a:'plasticity',q:"The brain's ability to reorganise itself is called ______."},
    {t:'text',a:'neurons|neuron',q:'Learning strengthens connections between ______.'},
    {t:'choice',a:'B',q:'After an injury, healthy parts of the brain can:',opts:['A) shrink','B) take over lost functions','C) stop working','D) grow larger']},
    {t:'choice',a:'FALSE',q:'Scientists fully understand consciousness.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Imaging technology lets researchers watch the brain in action.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The brain controls both movement and thinking.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The Wonders of Ancient Egypt',
   paras:[
    "Few ancient civilisations continue to capture the imagination as powerfully as that of ancient Egypt. Flourishing for over three thousand years along the banks of the River Nile, it produced some of the most impressive achievements of the ancient world.",
    "The Nile was the lifeblood of Egyptian civilisation. Each year, it flooded, depositing rich, fertile soil along its banks that allowed farmers to grow abundant crops. This reliable food supply supported a large population and freed some people to become craftsmen, priests, and officials.",
    "The Egyptians are perhaps best known for their monumental architecture, above all the pyramids. The Great Pyramid of Giza, built as a tomb for the pharaoh Khufu, consists of over two million stone blocks, some weighing several tonnes. Exactly how such structures were built without modern machinery remains a source of debate.",
    "Religion played a central role in Egyptian life. The Egyptians believed in an afterlife and developed the elaborate process of mummification to preserve bodies. They also created a writing system known as hieroglyphics, using pictures to represent sounds and ideas. For centuries this script could not be read, until the discovery of the Rosetta Stone finally allowed scholars to decode it."
   ],
   Q:[
    {t:'text',a:'three|3',q:'Ancient Egypt flourished for over ______ thousand years.'},
    {t:'text',a:'nile',q:'Egyptian civilisation grew along the River ______.'},
    {t:'text',a:'flooded|flood',q:'Each year the Nile ______, depositing fertile soil.'},
    {t:'choice',a:'B',q:'The reliable food supply allowed some people to become:',opts:['A) soldiers only','B) craftsmen, priests and officials','C) farmers only','D) sailors']},
    {t:'text',a:'tomb',q:'The Great Pyramid was built as a ______ for Khufu.'},
    {t:'text',a:'two|2',q:'The Great Pyramid has over ______ million stone blocks.'},
    {t:'text',a:'tonnes|tons|tonne|ton',q:'Some blocks weigh several ______.'},
    {t:'text',a:'afterlife|after life',q:'The Egyptians believed in an ______.'},
    {t:'text',a:'mummification',q:'Bodies were preserved through ______.'},
    {t:'text',a:'hieroglyphics|hieroglyphs',q:'The Egyptian writing system is called ______.'},
    {t:'choice',a:'B',q:'Hieroglyphics used ______ to represent sounds and ideas:',opts:['A) numbers','B) pictures','C) letters','D) knots']},
    {t:'choice',a:'FALSE',q:'Hieroglyphics could always be easily read.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'rosetta',q:'The ______ Stone allowed scholars to decode the script.'},
    {t:'choice',a:'TRUE',q:'How the pyramids were built is still debated.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The Dawn of Space Tourism',
   paras:[
    "For most of history, travelling into space was the exclusive privilege of a small number of highly trained astronauts. In recent years, however, a new industry has emerged that promises to change this: space tourism. Several private companies are now developing spacecraft designed to carry ordinary paying customers beyond the Earth's atmosphere.",
    "The concept is not entirely new. As early as 2001, a wealthy businessman became the first 'space tourist', paying a reported twenty million dollars to visit the International Space Station. For years, such trips remained available only to the extremely rich. But as technology advances and competition grows, prices are expected to fall.",
    "Supporters argue that space tourism offers many benefits. It could generate funding for space research, inspire young people to study science, and give travellers a life-changing perspective on their home planet. Many astronauts describe a profound shift in outlook after seeing the Earth from space, an experience sometimes called the 'overview effect'.",
    "Critics, however, raise serious concerns. Rocket launches produce significant pollution, and some question whether it is right to spend vast sums on space travel while problems remain unsolved on Earth. There are also safety risks, as space remains a dangerous environment."
   ],
   Q:[
    {t:'text',a:'astronauts|astronaut',q:'Space travel was traditionally limited to trained ______.'},
    {t:'text',a:'2001',q:'The first space tourist travelled in ______.'},
    {t:'choice',a:'B',q:'The first space tourist reportedly paid:',opts:['A) 2 million','B) 20 million','C) 200 million','D) 2 billion']},
    {t:'text',a:'station',q:'The first tourist visited the International Space ______.'},
    {t:'text',a:'fall',q:'As competition grows, prices are expected to ______.'},
    {t:'text',a:'research',q:'Space tourism could generate funding for space ______.'},
    {t:'text',a:'science',q:'It could inspire young people to study ______.'},
    {t:'text',a:'overview',q:'Seeing Earth from space is called the ______ effect.'},
    {t:'choice',a:'B',q:'Critics point out that rocket launches produce:',opts:['A) noise only','B) pollution','C) profit','D) jobs']},
    {t:'choice',a:'FALSE',q:'Space tourism was completely new in recent years.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some question spending on space while Earth has problems.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'dangerous',q:'Space remains a ______ environment.'},
    {t:'choice',a:'TRUE',q:'Many astronauts describe a shift in outlook after seeing Earth.',opts:['TRUE','FALSE','NOT GIVEN']}
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
   transcript:"Good evening, Seaview Hotel, how can I help? I'd like to book a room. Certainly, for which dates? From the fourteenth of June for three nights. We have a double room available at ninety pounds per night, including breakfast. Does the room have a sea view? Yes, all our double rooms face the sea. Is there parking? Yes, free parking is available for guests. Could I take your name? It's Mr Roberts, R-O-B-E-R-T-S. Check-in is from two o'clock, and please note we require payment on arrival.",
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
   transcript:"Welcome to the Parkside Health and Fitness Centre. As well as a fully equipped gym, we have two swimming pools: a large one for lane swimming and a smaller, warmer pool for children. Our fitness classes, including yoga and spinning, run throughout the day, and the timetable is available at reception. A qualified instructor is always on hand in the gym to help you. New members are entitled to one free session with a personal trainer. Our healthy-eating cafe on the first floor serves freshly made smoothies and light meals. Finally, remember that the centre gets very busy after five o'clock, so if you prefer a quieter workout, mornings are best.",
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
   transcript:"Right, for our business project we need to create a plan for a new cafe. Have you thought about the location? I think near the university would be best, lots of students. What about the name? How about 'The Study Break'? I like that. Now, what will make us different? I think free, fast wifi and lots of power sockets, so students can work. And healthy food options, not just cakes. Definitely. What about opening hours? Students study late, so maybe open until midnight. And the budget? We were told to assume ten thousand pounds to start. When do we present? The presentation is on the twenty-first of April. Let's divide the work: I'll do the marketing, you do the finances.",
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
   transcript:"Today we will discuss the basics of good nutrition. A balanced diet contains the right proportions of several food groups. Carbohydrates, found in foods like rice and bread, provide our main source of energy. Proteins, from sources such as meat, fish, and beans, are essential for growth and repairing the body. Fats are also necessary in moderation, particularly the healthy fats found in nuts and olive oil. In addition, we need vitamins and minerals, which we get mainly from fruit and vegetables. Water, too, is vital, and experts recommend drinking around two litres a day. A common mistake in modern diets is consuming too much sugar, which is linked to obesity and tooth decay. The key message is balance.",
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
  {title:'The Benefits of Exercise',
   paras:[
    "It is widely known that regular physical exercise is good for us, yet the full extent of its benefits is often underestimated. Far from simply helping people lose weight, exercise has profound effects on almost every part of the body and mind.",
    "The most obvious benefits are physical. Regular exercise strengthens the heart, allowing it to pump blood more efficiently and reducing the risk of heart disease. It also strengthens muscles and bones, helping to prevent conditions such as osteoporosis. Exercise improves the body's ability to control blood sugar, lowering the risk of type 2 diabetes.",
    "Perhaps less well known are the benefits for mental health. Physical activity causes the brain to release chemicals called endorphins, which improve mood and reduce feelings of stress. Studies have consistently shown that people who exercise regularly are less likely to suffer from depression. Exercise can also improve sleep and boost concentration.",
    "Importantly, the benefits do not require intense training. Experts suggest that just thirty minutes of moderate activity, such as brisk walking, five times a week can make a significant difference. Despite this, a large proportion of adults worldwide do not get enough exercise, often citing a lack of time."
   ],
   Q:[
    {t:'choice',a:'FALSE',q:'Exercise only helps people lose weight.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'heart',q:'Regular exercise strengthens the ______.'},
    {t:'text',a:'osteoporosis',q:'Exercise helps prevent a bone condition called ______.'},
    {t:'text',a:'diabetes',q:'Exercise lowers the risk of type 2 ______.'},
    {t:'text',a:'endorphins|endorphin',q:'Exercise causes the brain to release ______.'},
    {t:'text',a:'stress',q:'Endorphins improve mood and reduce ______.'},
    {t:'text',a:'depression',q:'People who exercise are less likely to suffer from ______.'},
    {t:'choice',a:'B',q:'How much moderate activity do experts recommend?',opts:['A) 10 min daily','B) 30 min, 5 times a week','C) 2 hours daily','D) once a month']},
    {t:'text',a:'walking|walk',q:'An example of moderate activity is brisk ______.'},
    {t:'text',a:'concentration',q:'Exercise can improve sleep and boost ______.'},
    {t:'choice',a:'TRUE',q:'Many adults do not get enough exercise.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'time',q:'Many people say they lack ______ to exercise.'},
    {t:'choice',a:'C',q:'The main message is that exercise benefits:',opts:['A) only the body','B) only the mind','C) both body and mind','D) neither']}
   ]},
  {title:'The History of the Olympic Games',
   paras:[
    "The Olympic Games, watched today by billions around the world, have their roots in ancient Greece. The first recorded Games took place in 776 BC in Olympia, held in honour of the god Zeus. For over a thousand years, athletes competed in events such as running, wrestling, and chariot racing. During the Games, a truce was declared, allowing competitors and spectators to travel safely even between warring cities.",
    "The ancient Games eventually came to an end, but the idea was revived in the modern era. In 1896, largely thanks to the efforts of a Frenchman, Baron Pierre de Coubertin, the first modern Olympic Games were held in Athens. Just fourteen nations took part.",
    "Since then, the Games have grown enormously. Today, more than two hundred nations participate, and the number of sports has expanded to include everything from swimming to gymnastics. The Winter Olympics, introduced in 1924, added sports such as skiing and ice skating.",
    "The modern Games have not been without controversy, including concerns about their huge cost and, on occasion, political tensions. Nevertheless, the Olympics remain a powerful symbol of international cooperation, held every four years."
   ],
   Q:[
    {t:'text',a:'776',q:'The first recorded Games were held in ______ BC.'},
    {t:'text',a:'olympia',q:'The ancient Games were held in ______.'},
    {t:'text',a:'zeus',q:'They were held in honour of the god ______.'},
    {t:'text',a:'truce',q:'During the Games, a ______ was declared.'},
    {t:'text',a:'coubertin',q:'The modern Games were revived largely thanks to Baron Pierre de ______.'},
    {t:'text',a:'1896',q:'The first modern Games were held in ______ (year).'},
    {t:'text',a:'athens',q:'The first modern Games took place in ______.'},
    {t:'choice',a:'A',q:'How many nations took part in the first modern Games?',opts:['A) 14','B) 100','C) 200','D) 776']},
    {t:'text',a:'two hundred|200',q:'Today more than ______ nations participate.'},
    {t:'text',a:'1924',q:'The Winter Olympics were introduced in ______.'},
    {t:'text',a:'skating|skate',q:'Winter sports include skiing and ice ______.'},
    {t:'text',a:'cost',q:'The modern Games have faced concerns about their huge ______.'},
    {t:'text',a:'four|4',q:'The Olympics are held every ______ years.'}
   ]},
  {title:'The Age of Artificial Intelligence',
   paras:[
    "Artificial intelligence, or AI, has moved from the realm of science fiction into everyday life. In its simplest form, AI refers to computer systems that can perform tasks normally requiring human intelligence, such as recognising speech, translating languages, or making decisions. Though the idea dates back decades, recent advances in computing power and the availability of vast amounts of data have driven remarkable progress.",
    "AI is already all around us, often without our noticing. When a phone recognises a face, a website recommends a product, or a virtual assistant answers a question, AI is at work. In medicine, AI systems can help doctors detect diseases in scans, sometimes more accurately than humans. In transport, self-driving cars rely on AI to interpret their surroundings.",
    "These developments bring enormous potential benefits. However, they also raise serious concerns. Many fear that AI will replace human workers, leading to job losses. Others worry about privacy, as AI systems often depend on collecting large amounts of personal data. There are also questions about fairness, since an AI trained on biased data may make biased decisions.",
    "Experts disagree about the future. Some predict that AI will bring a new age of prosperity, while others warn of dangers if the technology is not carefully controlled. What is clear is that how we choose to develop and regulate AI will shape the world for generations to come."
   ],
   Q:[
    {t:'text',a:'intelligence',q:'AI performs tasks normally requiring human ______.'},
    {t:'text',a:'data',q:'Recent progress was driven by computing power and vast amounts of ______.'},
    {t:'choice',a:'B',q:'Which is given as an example of AI in medicine?',opts:['A) writing letters','B) detecting diseases in scans','C) cooking','D) cleaning']},
    {t:'text',a:'surroundings|surrounding',q:'Self-driving cars use AI to interpret their ______.'},
    {t:'text',a:'workers|worker',q:'Many fear AI will replace human ______.'},
    {t:'text',a:'privacy',q:'Some worry about ______, as AI collects personal data.'},
    {t:'text',a:'biased|bias',q:'An AI trained on biased data may make ______ decisions.'},
    {t:'text',a:'accurately|accurate',q:'AI can sometimes detect diseases more ______ than humans.'},
    {t:'text',a:'decades|decade',q:'The idea of AI dates back ______.'},
    {t:'choice',a:'B',q:'A virtual assistant answering a question is an example of:',opts:['A) science fiction','B) AI at work','C) human error','D) data loss']},
    {t:'choice',a:'FALSE',q:'Everyone agrees about the future of AI.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some experts predict AI will bring prosperity.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'AI has no role in transport.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'B',q:'The writer concludes that how we ______ AI will shape the future:',opts:['A) ignore','B) develop and regulate','C) sell','D) hide']}
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
   transcript:"Hello, I'm calling about the part-time job advertised at your supermarket. Great. The position is for a shop assistant, working three evenings a week, from five until nine. The pay is eleven pounds an hour, with a small increase after six months. No previous experience is necessary, as full training is provided. You would mainly be stocking shelves and helping customers. To apply, please send your CV and a cover letter to our email address. One thing to note: the role requires you to be at least eighteen years old. If you're offered the job, you'll need to provide two references.",
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
   transcript:"And now for local events. This weekend sees the return of the popular Riverford Food Festival, now in its tenth year. The festival takes place in the town park and runs from Friday to Sunday. Entry is free, though some cooking workshops must be booked in advance. This year features over sixty food stalls, as well as a competition for the best homemade cake. Live music will play on the main stage throughout the weekend. Visitors are advised to use public transport, as parking near the park is very limited. The organisers are also asking everyone to bring reusable cups to help cut down on waste. The festival opens at ten each morning and closes at eight in the evening.",
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
   transcript:"Come in. You wanted help with your chemistry lab report? Yes, I'm not sure how to structure it. A lab report has several standard sections. It starts with an introduction, explaining the aim of the experiment. Then comes the method, describing exactly what you did, so that someone else could repeat it. After that, the results, where you present your data, usually in tables or graphs. Then the discussion, where you explain what the results mean. Finally, a conclusion. One common mistake is writing the method in the wrong tense; it should be in the past tense. Also, remember to reference any sources you used. How long should it be? About two thousand words. It's due on the eighth of May.",
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
   transcript:"Today's lecture is about glaciers and why they matter. A glacier is a huge mass of ice that forms over many years as snow builds up and compresses. Glaciers are found in polar regions and high mountains, and they store about seventy per cent of the world's fresh water. Many rivers, which supply water to millions of people, begin as melting glacier ice. Unfortunately, as global temperatures rise, glaciers around the world are shrinking at an alarming rate. This has two major consequences. First, as glaciers melt, they add water to the oceans, contributing to rising sea levels that threaten coastal cities. Second, communities that depend on glacier-fed rivers may face serious water shortages. Scientists monitor glaciers closely, using satellites, as they are among the clearest indicators of climate change.",
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
  {title:'The Water Cycle',
   paras:[
    "Water is essential to all life on Earth, and the amount of it on our planet has remained more or less constant for billions of years. This is possible because water is continuously recycled through a natural process known as the water cycle.",
    "The cycle is driven by energy from the sun. When the sun heats bodies of water such as oceans, lakes, and rivers, some of the water evaporates, turning into an invisible gas called water vapour that rises into the atmosphere. As this vapour rises, it cools and condenses into tiny droplets, forming clouds. This process is known as condensation.",
    "When the droplets in clouds combine and become heavy enough, they fall back to the ground as precipitation, in the form of rain, snow, or hail. Some of this water flows across the surface into rivers and eventually returns to the sea. The rest soaks into the ground, where it may be taken up by plants or collect underground as groundwater.",
    "Understanding the water cycle is increasingly important. Human activities and climate change are altering rainfall patterns, causing droughts in some regions and floods in others. Managing our precious freshwater supplies wisely has become one of the great challenges of our time."
   ],
   Q:[
    {t:'text',a:'constant',q:'The amount of water on Earth has stayed roughly ______.'},
    {t:'text',a:'sun',q:'The water cycle is driven by energy from the ______.'},
    {t:'text',a:'vapour|vapor',q:'Heated water turns into an invisible gas called water ______.'},
    {t:'text',a:'condenses|condense',q:'When vapour cools it ______ into droplets.'},
    {t:'text',a:'clouds|cloud',q:'This process forms ______.'},
    {t:'choice',a:'C',q:'Rain, snow and hail are all forms of:',opts:['A) evaporation','B) condensation','C) precipitation','D) vapour']},
    {t:'text',a:'groundwater|ground water',q:'Water that soaks into the ground may collect as ______.'},
    {t:'text',a:'plants|plant',q:'Some water is taken up by ______.'},
    {t:'text',a:'condensation',q:'The process of vapour cooling into droplets is called ______.'},
    {t:'text',a:'rainfall|rain',q:'Human activities are altering ______ patterns.'},
    {t:'text',a:'floods|flood',q:'Climate change can cause droughts and ______.'},
    {t:'choice',a:'FALSE',q:'The amount of water on Earth constantly decreases.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Managing freshwater wisely is a major challenge.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The Rise of Social Media',
   paras:[
    "In less than two decades, social media has transformed the way billions of people communicate, share information, and view the world. Platforms that began as simple tools for keeping in touch with friends have grown into powerful forces that influence business, politics, and culture.",
    "The benefits of social media are considerable. It allows people to stay connected with friends and family across the globe, instantly and at no cost. It gives ordinary individuals a voice, enabling them to share ideas and raise awareness of important issues. For businesses, it offers a cheap and effective way to reach customers, while for many, it has become a source of news and entertainment.",
    "However, social media also has a darker side. Studies have linked heavy use, particularly among young people, to increased anxiety and depression, partly because users constantly compare themselves to others. The rapid spread of false information, or 'fake news', is another serious concern, as misleading stories can travel faster than the truth. There are also worries about privacy and personal data.",
    "Ultimately, social media is a tool, and like any tool, its effects depend on how it is used. Many experts argue that the solution lies not in avoiding it altogether, but in using it more mindfully."
   ],
   Q:[
    {t:'text',a:'two|2',q:'Social media has transformed communication in less than ______ decades.'},
    {t:'text',a:'cost',q:'Social media lets people stay connected at no ______.'},
    {t:'text',a:'voice',q:'It gives ordinary individuals a ______.'},
    {t:'text',a:'customers|customer',q:'For businesses it offers a cheap way to reach ______.'},
    {t:'text',a:'depression',q:'Heavy use is linked to increased anxiety and ______.'},
    {t:'text',a:'compare',q:'Users constantly ______ themselves to others.'},
    {t:'text',a:'fake',q:'The spread of false information is called ______ news.'},
    {t:'choice',a:'B',q:'Misleading stories can travel:',opts:['A) slowly','B) faster than the truth','C) only at night','D) not at all']},
    {t:'text',a:'data',q:'There are worries about privacy and personal ______.'},
    {t:'text',a:'tool',q:'Social media is described as a ______.'},
    {t:'choice',a:'B',q:'Experts suggest the solution is to use social media:',opts:['A) never','B) more mindfully','C) only for work','D) constantly']},
    {t:'choice',a:'FALSE',q:'Social media only has benefits.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'entertainment',q:'Social media can be a source of news and ______.'}
   ]},
  {title:'The History of Photography',
   paras:[
    "Today we take photographs effortlessly, capturing thousands of images on devices we carry in our pockets. Yet photography, now so ordinary, was once an astonishing new technology that changed how humans saw and recorded the world.",
    "The principle behind photography had been known for centuries. It was observed that light passing through a small hole into a dark room projects an image of the outside scene onto the opposite wall, a phenomenon used by artists as a drawing aid. The challenge was finding a way to capture and preserve such an image permanently.",
    "This was achieved in the early nineteenth century. Several inventors, working independently, developed chemical processes that could fix an image onto a treated surface. Early photographs required very long exposure times, sometimes several minutes, meaning subjects had to remain perfectly still, which is why people in old portraits rarely smile.",
    "Over the following decades, photography developed rapidly. Exposure times shortened, and cameras became smaller and cheaper. A major breakthrough came in 1888, when a company introduced a simple, affordable camera loaded with a roll of film, bringing photography to ordinary people for the first time. The invention of digital photography, much later, removed the need for film altogether and, combined with the smartphone, made almost everyone a photographer."
   ],
   Q:[
    {t:'text',a:'recorded|record',q:'Photography changed how humans saw and ______ the world.'},
    {t:'text',a:'image',q:'Light passing through a small hole projects an ______ onto a wall.'},
    {t:'text',a:'artists|artist',q:'This phenomenon was used by ______ as a drawing aid.'},
    {t:'text',a:'preserve',q:'The challenge was to capture and ______ the image permanently.'},
    {t:'text',a:'nineteenth|19th',q:'Chemical processes to fix images were developed in the early ______ century.'},
    {t:'text',a:'exposure',q:'Early photographs required long ______ times.'},
    {t:'choice',a:'B',q:'Why do people in old portraits rarely smile?',opts:['A) they were sad','B) they had to stay still for long exposures','C) it was rude','D) cameras were broken']},
    {t:'text',a:'shortened|shorten',q:'Over time, exposure times ______.'},
    {t:'text',a:'cheaper|cheap',q:'Cameras became smaller and ______.'},
    {t:'text',a:'film',q:'In 1888, a company introduced a camera loaded with a roll of ______.'},
    {t:'choice',a:'B',q:'The 1888 camera was significant because it was:',opts:['A) expensive','B) simple and affordable','C) very large','D) digital']},
    {t:'text',a:'film',q:'Digital photography removed the need for ______.'},
    {t:'text',a:'photographer',q:'The smartphone made almost everyone a ______.'},
    {t:'choice',a:'FALSE',q:'The principle behind photography was discovered only recently.',opts:['TRUE','FALSE','NOT GIVEN']}
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
   transcript:"Good morning, I'd like to book a train ticket to Manchester. Certainly, for which day? This Friday, please, travelling in the morning. There's a train at nine fifteen, arriving at eleven thirty. How much is a return ticket? A standard return is fifty-two pounds, but if you book today, there's a twenty per cent discount. Would you like a seat reservation? Yes, please, a window seat if possible. Will you need a railcard? Only if you have one, for further discounts. The ticket will be sent to your phone as an e-ticket. Please arrive at least fifteen minutes before departure. Platform numbers are shown on the screens in the station.",
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
   transcript:"I'd like to tell you about some new services at our community library. First, we have extended our opening hours; we are now open until eight in the evening on weekdays. Second, we have launched a free e-book service, allowing members to borrow digital books using an app. You can now borrow up to twelve books at a time. We have also created a new children's area on the ground floor, with a story-time session every Wednesday at four o'clock. For those interested in technology, we run free computer classes for beginners on Tuesday mornings. Finally, our meeting rooms can now be booked free of charge by local community groups. To use any of these services, you simply need a library card, which is free to obtain.",
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
   transcript:"So our marketing module presentation is on advertising. What product should we focus on? How about a new brand of trainers? Good, sport appeals to students. What's our main message? I think we should highlight that they're made from recycled materials, that's very popular now. Which platform would we advertise on? Definitely social media, especially short videos. And who's our target audience? Young people aged sixteen to twenty-five. How long is the presentation? Twelve minutes, with slides. Should we include a survey? Yes, let's survey fifty students to get some real data. When's it due? We present on the third of March. Let's meet on Monday to design the slides.",
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
   transcript:"Today we will trace the history of money. In the earliest societies, there was no money at all; people simply exchanged goods directly, a system known as barter. The problem with barter is that it requires both people to want what the other has. To solve this, societies began using objects of agreed value, such as shells or cattle, as an early form of money. The first metal coins appeared around 2,600 years ago, in what is now Turkey, made from a mixture of gold and silver. Coins were convenient because they were durable and easy to carry. Much later, paper money was introduced, first in China, as it was lighter than metal. In the modern era, money has become increasingly abstract: cheques, then plastic cards, and now digital payments made with a phone. Some economists predict that physical cash may eventually disappear altogether.",
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
  {title:'The Amazon Rainforest',
   paras:[
    "Covering an area of over five million square kilometres, the Amazon rainforest is the largest tropical rainforest on Earth. Often called the 'lungs of the planet', it plays a vital role in regulating the global climate and is home to an extraordinary wealth of life.",
    "The Amazon's biodiversity is staggering. It contains around ten per cent of all known species on Earth, including thousands of types of birds, fish, and mammals, as well as countless plants, many of which have not yet been studied by scientists. Some of these plants are already used to make important medicines, and researchers believe the forest may hold cures for diseases yet to be discovered.",
    "The rainforest also has a crucial effect on climate. Its billions of trees absorb enormous amounts of carbon dioxide, a gas that contributes to global warming, and release the oxygen on which life depends. In addition, the forest generates much of its own rainfall, helping to maintain weather patterns.",
    "Despite its importance, the Amazon is under severe threat. Vast areas are cleared each year for farming, cattle ranching, and logging, a process known as deforestation. This not only destroys habitats but also releases stored carbon, worsening climate change. Protecting the Amazon has become a matter of global concern, requiring cooperation between governments, businesses, and local communities."
   ],
   Q:[
    {t:'text',a:'five|5',q:'The Amazon covers over ______ million square kilometres.'},
    {t:'text',a:'lungs|lung',q:'It is often called the ______ of the planet.'},
    {t:'text',a:'ten|10',q:'It contains about ______ per cent of all known species.'},
    {t:'text',a:'medicines|medicine',q:'Some Amazon plants are used to make ______.'},
    {t:'text',a:'dioxide',q:'Trees absorb carbon ______.'},
    {t:'text',a:'oxygen',q:'Trees release the ______ on which life depends.'},
    {t:'text',a:'rainfall|rain',q:'The forest generates much of its own ______.'},
    {t:'text',a:'deforestation',q:'Clearing the forest is known as ______.'},
    {t:'choice',a:'B',q:'The Amazon is cleared for farming, logging and:',opts:['A) mining only','B) cattle ranching','C) tourism','D) fishing']},
    {t:'text',a:'carbon',q:'Deforestation releases stored ______.'},
    {t:'choice',a:'TRUE',q:'Many Amazon plants have not yet been studied.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The Amazon has no effect on climate.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'B',q:'Protecting the Amazon requires cooperation between governments, businesses and:',opts:['A) tourists','B) local communities','C) scientists only','D) farmers only']}
   ]},
  {title:'The Psychology of Colour',
   paras:[
    "Colours surround us every day, and though we may not realise it, they can have a powerful effect on our emotions and behaviour. The study of how colours influence us, known as colour psychology, is used widely in fields ranging from advertising to interior design.",
    "Different colours are often associated with particular feelings. Red, for example, is a bold, attention-grabbing colour linked to energy, excitement, and sometimes danger. This is why it is often used for warning signs and, interestingly, by fast-food chains, as it is thought to stimulate appetite. Blue, by contrast, tends to create a sense of calm and trust, which is why it is popular with banks and technology companies wishing to appear reliable.",
    "Colour can even affect us physically. Studies have suggested that people may feel warmer in a room painted in 'warm' colours such as orange, and cooler in one painted blue, regardless of the actual temperature. Some research indicates that colour can influence concentration and productivity, though findings are not always consistent.",
    "It is important to note that the meaning of colours is not universal. Associations can vary significantly between cultures; while white is linked to purity and weddings in many Western countries, it is traditionally associated with mourning in parts of Asia."
   ],
   Q:[
    {t:'text',a:'psychology',q:'The study of how colours influence us is called colour ______.'},
    {t:'choice',a:'B',q:'Red is linked to energy, excitement and sometimes:',opts:['A) calm','B) danger','C) trust','D) sadness']},
    {t:'text',a:'appetite',q:'Red is used by fast-food chains because it is thought to stimulate ______.'},
    {t:'text',a:'trust',q:'Blue creates a sense of calm and ______.'},
    {t:'text',a:'technology',q:'Blue is popular with banks and ______ companies.'},
    {t:'text',a:'warmer|warm',q:'People may feel ______ in a room painted orange.'},
    {t:'text',a:'productivity',q:'Colour may influence concentration and ______.'},
    {t:'text',a:'universal',q:'The meaning of colours is not ______.'},
    {t:'text',a:'weddings|wedding',q:'In many Western countries, white is linked to purity and ______.'},
    {t:'choice',a:'B',q:'In parts of Asia, white is associated with:',opts:['A) weddings','B) mourning','C) energy','D) trust']},
    {t:'text',a:'cultures|culture',q:'Colour associations can vary between ______.'},
    {t:'text',a:'design',q:'Colour psychology is used in advertising and interior ______.'},
    {t:'choice',a:'FALSE',q:'Research on colour and productivity is always consistent.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The Rise of Electric Vehicles',
   paras:[
    "For over a century, cars powered by petrol and diesel have dominated the world's roads. Now, however, a quiet revolution is under way, as electric vehicles, or EVs, rapidly grow in popularity. Powered by rechargeable batteries rather than burning fuel, EVs are widely seen as a key part of the solution to climate change and air pollution.",
    "The environmental advantages are significant. Because they have no exhaust emissions, EVs do not release the harmful gases that petrol cars produce, improving air quality in cities. If the electricity used to charge them comes from renewable sources, their overall contribution to climate change can be very low.",
    "Electric vehicles also offer practical benefits. They are cheaper to run, as electricity generally costs less than fuel, and they have fewer moving parts, meaning less maintenance. Many drivers also appreciate their quiet, smooth performance.",
    "There are, however, obstacles to overcome. EVs are still often more expensive to buy than conventional cars, though prices are falling. A common concern is the limited driving range on a single charge, along with a shortage of charging points in many areas. Producing the batteries also requires rare materials. Nevertheless, with governments encouraging the switch, and some planning to ban the sale of new petrol cars altogether, the future of transport increasingly appears to be electric."
   ],
   Q:[
    {t:'text',a:'batteries|battery',q:'Electric vehicles are powered by rechargeable ______.'},
    {t:'text',a:'pollution',q:'EVs are seen as part of the solution to climate change and air ______.'},
    {t:'text',a:'emissions|emission',q:'EVs have no exhaust ______.'},
    {t:'text',a:'quality',q:'EVs improve air ______ in cities.'},
    {t:'choice',a:'B',q:'EVs have a low climate impact if charged with:',opts:['A) coal','B) renewable sources','C) diesel','D) petrol']},
    {t:'text',a:'run',q:'EVs are cheaper to ______ than petrol cars.'},
    {t:'text',a:'parts|part',q:'EVs have fewer moving ______.'},
    {t:'text',a:'performance',q:'EVs offer quiet, smooth ______.'},
    {t:'text',a:'expensive',q:'EVs are often more ______ to buy than conventional cars.'},
    {t:'text',a:'range',q:'A common concern is the limited driving ______ on one charge.'},
    {t:'text',a:'charging|charge',q:'There is a shortage of ______ points.'},
    {t:'text',a:'rare',q:'Producing batteries requires ______ materials.'},
    {t:'choice',a:'B',q:'Some governments plan to ban the sale of new:',opts:['A) electric cars','B) petrol cars','C) bicycles','D) buses']},
    {t:'text',a:'century',q:'Petrol and diesel cars have dominated for over a ______.'}
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
   transcript:"Hello, I'm calling about arranging homestay accommodation for an international student. Of course. The standard package includes a private room and two meals a day, breakfast and dinner. The cost is one hundred and forty pounds per week. The student would have their own room, but the bathroom is usually shared. Most of our host families live within thirty minutes of the college by bus. We ask students to give two weeks' notice if they wish to leave. There is also a one-time placement fee of sixty pounds. Wifi is included in all our homes. The placement can begin from the second of September.",
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
   transcript:"And now, some news about changes to our local recycling scheme. From the first of March, households will be given three new bins. The green bin is for garden waste, the blue bin is for paper and cardboard, and the brown bin is for food waste. General rubbish will still go in the usual black bin. Recycling will be collected every Tuesday, and general rubbish every Friday. Residents are reminded to rinse containers before recycling them. Those who need extra bins can request them free of charge from the council website. The council hopes the new scheme will double the amount of waste that is recycled.",
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
   transcript:"So, our geography project is on the local river. What should we investigate? I think we should look at water quality along its length. How will we measure it? We can test the water at different points for pollution. How many points? Let's take samples at five locations, from the source to the sea. And what causes the pollution? Mainly farm chemicals and waste from the factory upstream. We should include a map showing the sample points. How will we present the data? Graphs would show the changes clearly. When do we hand it in? The report is due on the tenth of December. Let's do the fieldwork this Saturday.",
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
   transcript:"Today we will look at the history of the internet. The internet has its origins in the 1960s, when researchers in the United States developed a way to connect computers so they could share information, originally for military and academic purposes. A major breakthrough came in 1969, when the first message was sent between two computers. However, the internet as we know it only began to take shape in 1989, when a British scientist, Tim Berners-Lee, invented the World Wide Web, making information easy to access through web pages and links. Throughout the 1990s, the internet spread rapidly into homes and businesses. The arrival of smartphones then made it possible to be online anywhere, at any time.",
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
  {title:'The History of the English Language',
   paras:[
    "English, spoken by around 1.5 billion people worldwide, is often described as a global language. Yet its origins are surprisingly humble, and its history is one of constant change and borrowing from other tongues.",
    "English began as the language of Germanic tribes, the Angles, Saxons, and Jutes, who settled in Britain in the fifth century. Their language, now called Old English, would be almost unrecognisable to a modern speaker. It was heavily influenced by the languages of later invaders, including the Vikings, who added many everyday words.",
    "A turning point came in 1066, when the Normans, from what is now France, conquered England. For centuries afterwards, French was the language of the ruling class, while ordinary people continued to speak English. As a result, thousands of French words entered the language, which is why English often has two words with similar meanings.",
    "Over time, English continued to absorb words from Latin, Greek, and, as trade and empire expanded, from languages all around the world. This willingness to borrow is one reason English has such an enormous vocabulary. Today, English keeps changing, adding new words for new technologies and ideas."
   ],
   Q:[
    {t:'text',a:'1.5',q:'English is spoken by around ______ billion people.'},
    {t:'text',a:'germanic',q:'English began as the language of ______ tribes.'},
    {t:'text',a:'old',q:'The early form of English is called ______ English.'},
    {t:'text',a:'vikings|viking',q:'The ______ added many everyday words.'},
    {t:'text',a:'1066',q:'England was conquered by the Normans in ______.'},
    {t:'text',a:'france',q:'The Normans came from what is now ______.'},
    {t:'text',a:'french',q:'For centuries, ______ was the language of the ruling class.'},
    {t:'text',a:'english',q:'Ordinary people continued to speak ______.'},
    {t:'choice',a:'B',q:'English often has two words with similar meanings because of borrowing from:',opts:['A) Latin only','B) French','C) Chinese','D) Arabic']},
    {t:'text',a:'greek',q:'English also absorbed words from Latin and ______.'},
    {t:'text',a:'enormous|large|huge',q:'English has a very ______ vocabulary.'},
    {t:'choice',a:'FALSE',q:'English no longer changes today.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'global',q:'English is often described as a ______ language.'}
   ]},
  {title:'The Great Migration of Whales',
   paras:[
    "Each year, some of the largest animals ever to have lived undertake one of nature's most extraordinary journeys. Many species of whale migrate vast distances between cold feeding grounds and warm breeding grounds, in some cases travelling over ten thousand kilometres in a single year.",
    "The reason for these journeys lies in the whales' need for two different environments. In summer, whales feed in cold polar waters, which are rich in the tiny organisms they eat. Having built up thick layers of fat, they then travel towards the equator to give birth in warmer seas, where their newborn calves, which lack insulating fat, are more likely to survive.",
    "How whales navigate across thousands of kilometres of featureless ocean remains something of a mystery. Scientists believe they may use a combination of methods, including the Earth's magnetic field, the position of the sun, and even the shape of the coastline and the sea floor.",
    "Sadly, whales face many dangers on their long journeys. In the past, hunting brought several species close to extinction. Although commercial whaling is now largely banned, whales are still threatened by collisions with ships, entanglement in fishing nets, and increasing noise pollution in the oceans, which can interfere with the sounds they use to communicate."
   ],
   Q:[
    {t:'text',a:'ten thousand|10000|10,000',q:'Some whales travel over ______ kilometres a year.'},
    {t:'text',a:'polar',q:'Whales feed in cold ______ waters in summer.'},
    {t:'text',a:'organisms|organism',q:'Cold waters are rich in tiny ______ that whales eat.'},
    {t:'text',a:'equator',q:'Whales travel towards the ______ to give birth.'},
    {t:'text',a:'fat',q:'Newborn calves lack insulating ______.'},
    {t:'text',a:'survive',q:'Calves are more likely to ______ in warmer seas.'},
    {t:'text',a:'magnetic',q:"Whales may navigate using the Earth's ______ field."},
    {t:'choice',a:'C',q:'Which is NOT mentioned as a navigation method?',opts:['A) the sun','B) the coastline','C) the stars','D) the sea floor']},
    {t:'text',a:'hunting|whaling',q:'In the past, ______ brought several species close to extinction.'},
    {t:'text',a:'banned|ban',q:'Commercial whaling is now largely ______.'},
    {t:'text',a:'ships|ship',q:'Whales can be harmed by collisions with ______.'},
    {t:'text',a:'nets|net',q:'Whales can get entangled in fishing ______.'},
    {t:'text',a:'communicate',q:'Noise pollution can interfere with the sounds whales use to ______.'}
   ]},
  {title:'The True Cost of Fast Fashion',
   paras:[
    "In recent decades, the way we buy clothes has changed dramatically. 'Fast fashion', a business model based on producing cheap, trendy clothing very quickly, has made fashionable garments more affordable than ever. Major retailers now release new collections almost every week, encouraging shoppers to buy more and more.",
    "While cheap clothing may seem appealing, fast fashion carries a heavy hidden cost. The industry is one of the world's largest polluters. Producing clothes uses enormous amounts of water; a single cotton t-shirt can require around 2,700 litres. Textile factories also release chemicals into rivers, and the huge quantities of clothing thrown away each year end up in landfill, where synthetic fabrics can take decades to break down.",
    "There are human costs too. To keep prices low, many clothes are made in factories where workers, often in developing countries, endure long hours and poor conditions for very little pay.",
    "Growing awareness of these problems has led to calls for a more sustainable approach. Some consumers are choosing to buy fewer, higher-quality items, to repair clothes rather than replace them, or to buy second-hand. Meanwhile, some companies are experimenting with recycling old garments into new ones."
   ],
   Q:[
    {t:'text',a:'quickly|fast',q:'Fast fashion produces cheap, trendy clothing very ______.'},
    {t:'text',a:'week',q:'Retailers now release new collections almost every ______.'},
    {t:'text',a:'polluters|polluter',q:"The fashion industry is one of the world's largest ______."},
    {t:'text',a:'2700|2,700',q:'A single cotton t-shirt can require around ______ litres of water.'},
    {t:'text',a:'chemicals|chemical',q:'Textile factories release ______ into rivers.'},
    {t:'text',a:'landfill|landfills',q:'Discarded clothing ends up in ______.'},
    {t:'text',a:'decades|decade',q:'Synthetic fabrics can take ______ to break down.'},
    {t:'choice',a:'B',q:'Clothes are often made in factories with:',opts:['A) high pay','B) poor conditions','C) short hours','D) few workers']},
    {t:'text',a:'developing',q:'Factory workers are often in ______ countries.'},
    {t:'text',a:'quality',q:'Some consumers buy fewer, higher-______ items.'},
    {t:'text',a:'repair',q:'Some choose to ______ clothes rather than replace them.'},
    {t:'text',a:'recycling|recycle',q:'Some companies are ______ old garments into new ones.'},
    {t:'choice',a:'TRUE',q:'Fast fashion has made clothes cheaper.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'C',q:'The writer believes a shift away from throwaway fashion is:',opts:['A) impossible','B) unnecessary','C) necessary and under way','D) harmful']}
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
   transcript:"Thank you for your interest in our evening photography course. The beginners' course runs for six weeks, meeting every Thursday evening from six thirty to eight thirty. The fee is one hundred and ten pounds. You will need to bring your own camera, although a smartphone is acceptable for beginners. The classes are held in Studio 3 at the community arts centre. There is a practical photo walk in week four. At the end of the course, students' work is displayed in a small exhibition. Class sizes are limited to ten people. To secure your place, a deposit of thirty pounds is required, and the next course starts on the seventh of October.",
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
   transcript:"Welcome to the City Art Gallery and to our special exhibition on Impressionism. The exhibition brings together more than eighty paintings, many on loan from museums abroad. We'll begin in the first room, which introduces the movement and its origins in nineteenth-century France. Please do not use flash photography, as it can damage the artwork. Audio guides are available at the desk for three pounds. The exhibition shop, selling prints and postcards, is by the exit. The exhibition closes at five thirty, and the last entry is at half past four. There is also a cafe on the lower floor.",
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
   transcript:"You wanted to discuss your tourism dissertation? Yes, I want to study the impact of tourism on a small coastal town. What's your main question? Whether tourism has helped or harmed the local community. How will you gather information? I'll interview local business owners and residents. Try to get a balanced range of views. And any statistics? Yes, I'll use visitor numbers from the tourist office. How many people will you interview? I'm planning on twenty. Remember to get their consent. How long should it be? Around twelve thousand words. And the deadline? The final draft is due in June, but send me a plan by the end of April.",
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
   transcript:"Today's lecture is about how architecture reflects the societies that create it. Throughout history, the grandest buildings have often been those devoted to religion or power. The ancient Egyptians built enormous pyramids as tombs, while the Greeks constructed elegant temples supported by columns. The Romans were brilliant engineers, famous for inventing the arch, which allowed them to build strong bridges and vast structures like the Colosseum. In the Middle Ages, European builders created soaring cathedrals with pointed arches and huge stained-glass windows. Much later, the invention of steel and the lift made it possible to build upwards, giving rise to the modern skyscraper. Today, architects increasingly focus on sustainability, designing energy-efficient buildings.",
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
  {title:'The Engineering of Ancient Rome',
   paras:[
    "The ancient Romans were among the greatest engineers in history. While other civilisations produced impressive art and monuments, the Romans excelled at building practical structures on a massive scale, many of which still stand two thousand years later.",
    "Perhaps their most important contribution was the development of the arch. Although the arch had been used before, the Romans perfected it, using it to build bridges and aqueducts strong enough to bear enormous weight. Aqueducts, which carried fresh water into cities across great distances using only the force of gravity, supplied public baths, fountains, and homes.",
    "The Romans were also famous for their roads. Built to allow armies to move quickly across the empire, these roads were so well constructed, with layers of stone and a cambered surface to drain rainwater, that some are still in use today. It was said that 'all roads lead to Rome', reflecting how the network connected the entire empire to its capital.",
    "Another key innovation was concrete. Roman concrete was extraordinarily durable, and structures built with it, such as the vast dome of the Pantheon, have survived for centuries. Modern scientists are still studying why Roman concrete has lasted so much longer than many modern equivalents."
   ],
   Q:[
    {t:'text',a:'two thousand|2000|2,000',q:'Many Roman structures still stand after ______ years.'},
    {t:'text',a:'arch',q:'The Romans perfected the ______.'},
    {t:'text',a:'water',q:'Aqueducts carried fresh ______ into cities.'},
    {t:'text',a:'gravity',q:'Aqueducts moved water using only the force of ______.'},
    {t:'text',a:'homes|home',q:'Aqueducts supplied public baths, fountains and ______.'},
    {t:'text',a:'armies|army',q:'Roman roads were built to allow ______ to move quickly.'},
    {t:'text',a:'rainwater|water|rain',q:'Roads had a cambered surface to drain ______.'},
    {t:'choice',a:'B',q:"What does 'all roads lead to Rome' reflect?",opts:['A) roads were short','B) the network connected the empire to its capital','C) Rome had no roads','D) roads were straight']},
    {t:'text',a:'concrete',q:'Another key innovation was ______.'},
    {t:'text',a:'durable',q:'Roman concrete was extraordinarily ______.'},
    {t:'text',a:'pantheon',q:'The ______ has a vast dome built with Roman concrete.'},
    {t:'text',a:'long',q:'Scientists still study why Roman concrete has lasted so ______.'},
    {t:'choice',a:'TRUE',q:'Roman engineering influenced builders for thousands of years.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The Science of Happiness',
   paras:[
    "What makes people happy? For most of history, this was a question for philosophers, but in recent decades it has become a subject of serious scientific study. Researchers in the field of 'positive psychology' have used surveys and experiments to investigate the factors that contribute to a happy life.",
    "One of the clearest findings is that, beyond a certain point, money does not buy happiness. While having enough to meet basic needs is important, once people are comfortable, further increases in income make surprisingly little difference to their wellbeing. Far more important, research suggests, are strong personal relationships. People with close friends and supportive families tend to be significantly happier than those who are wealthy but isolated.",
    "Other factors also play a role. Regular physical exercise, spending time in nature, and helping others have all been shown to boost happiness. Interestingly, the simple act of expressing gratitude appears to have a measurable positive effect.",
    "Perhaps most encouraging is the discovery that happiness is not fixed. Although our genes and circumstances play a part, a significant portion of our happiness is within our control, influenced by our habits and attitudes. This suggests that people can learn to be happier."
   ],
   Q:[
    {t:'text',a:'positive',q:'The scientific study of happiness is part of ______ psychology.'},
    {t:'text',a:'money',q:'Beyond a certain point, ______ does not buy happiness.'},
    {t:'text',a:'needs|need',q:'Having enough to meet basic ______ is important.'},
    {t:'text',a:'relationships|relationship',q:'Far more important are strong personal ______.'},
    {t:'text',a:'isolated',q:'People who are wealthy but ______ tend to be less happy.'},
    {t:'text',a:'exercise',q:'Regular physical ______ boosts happiness.'},
    {t:'text',a:'nature',q:'Spending time in ______ boosts happiness.'},
    {t:'text',a:'others',q:'Helping ______ boosts happiness.'},
    {t:'text',a:'gratitude',q:'Expressing ______ has a positive effect.'},
    {t:'choice',a:'B',q:"Which has a 'measurable positive effect'?",opts:['A) earning more','B) expressing gratitude','C) being alone','D) working more']},
    {t:'choice',a:'FALSE',q:'Happiness is completely fixed.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'control',q:'A significant portion of happiness is within our ______.'},
    {t:'choice',a:'B',q:'The most encouraging finding is that people can:',opts:['A) become rich','B) learn to be happier','C) live longer','D) avoid stress']}
   ]},
  {title:'The Problem with Plastic',
   paras:[
    "Plastic is one of the most useful materials ever invented. Cheap, lightweight, strong, and waterproof, it is found in almost every part of modern life, from packaging and clothing to medical equipment. Yet the very qualities that make plastic so useful have also created one of the greatest environmental problems of our age.",
    "The core of the problem is that most plastic does not break down naturally. A plastic bottle discarded today may still exist in hundreds of years. Because so much plastic is used only once and then thrown away, enormous quantities accumulate in the environment. Much of it ends up in the oceans, where it harms marine life; animals may become entangled in it or mistake it for food.",
    "Even more worrying is the discovery of 'microplastics', tiny fragments formed as larger pieces break apart. These have now been found almost everywhere, from the deepest oceans to the food we eat and the water we drink, though the long-term effects on human health are still not fully understood.",
    "Solving the problem will require action on many fronts. Individuals can reduce their use of single-use plastics, while governments can ban unnecessary items and improve recycling. Scientists, meanwhile, are developing new materials that break down harmlessly."
   ],
   Q:[
    {t:'text',a:'waterproof',q:'Plastic is cheap, lightweight, strong and ______.'},
    {t:'text',a:'break down|breakdown|decompose|degrade',q:'Most plastic does not ______ naturally.'},
    {t:'text',a:'years|year',q:'A plastic bottle may still exist in hundreds of ______.'},
    {t:'text',a:'once',q:'Much plastic is used only ______ and thrown away.'},
    {t:'text',a:'oceans|ocean',q:'Much plastic ends up in the ______.'},
    {t:'text',a:'food',q:'Animals may mistake plastic for ______.'},
    {t:'text',a:'microplastics|microplastic',q:'Tiny fragments of plastic are called ______.'},
    {t:'text',a:'water',q:'Microplastics have been found in the food we eat and the ______ we drink.'},
    {t:'choice',a:'B',q:'The long-term effects of microplastics on human health are:',opts:['A) fully understood','B) not fully understood','C) harmless','D) beneficial']},
    {t:'text',a:'single-use|single use',q:'Individuals can reduce their use of ______ plastics.'},
    {t:'text',a:'recycling|recycle',q:'Governments can ban unnecessary items and improve ______.'},
    {t:'text',a:'materials|material',q:'Scientists are developing new ______ that break down harmlessly.'},
    {t:'text',a:'medical',q:'Plastic is found in packaging, clothing and ______ equipment.'},
    {t:'choice',a:'B',q:"The writer's overall tone about solving the problem is:",opts:['A) hopeless','B) hopeful','C) uninterested','D) angry']}
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
   transcript:"Good afternoon, City Car Hire. I'd like to rent a car for the weekend. What size of car would you like? A small economy car, please. That's forty pounds a day, so eighty pounds for two days. Does that include insurance? Basic insurance is included, but full cover is an extra ten pounds a day. You'll need a valid driving licence and a credit card. The car comes with a full tank of fuel, and we ask that you return it full; there's a charge if it's returned with less. Can I collect it tomorrow? Yes, our office opens at eight in the morning. Please note the car must be returned by six in the evening on Sunday, or a late fee applies.",
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
   transcript:"Welcome to the Riverside Botanical Gardens. Our guided walk today will last about ninety minutes. We'll start at the tropical glasshouse, home to plants from rainforests around the world, including some rare orchids. From there, we'll visit the rose garden, which is at its best in June. One of our most popular features is the giant redwood tree, planted over a hundred years ago. Please stay on the paths to protect the plants, and note that picnics are only allowed in the designated area near the lake. The gardens are entirely run by volunteers. Guidebooks are available in the shop for four pounds. The cafe closes at four thirty.",
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
   transcript:"For our project, we need a plan to reduce food waste in the college canteen. Where should we start? Let's find out how much food is currently wasted. How? We could weigh the leftover food for a week. What are the main causes? I think portions are too large, and students take more than they eat. So what's our solution? We could offer smaller and larger portion sizes. And use the leftover food? Yes, we could donate it to a local charity. We should also put up posters to raise awareness. When do we present? On the fifteenth of May. I'll contact the charity, you design the posters. And we'll present the weight data as a graph.",
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
   transcript:"Today we will look at the history of human flight. For centuries, people dreamed of flying, but early attempts to copy birds by flapping wings all failed. The first real success came with balloons: in 1783, two Frenchmen became the first people to fly, in a hot-air balloon. However, balloons could not be steered easily. The great breakthrough came in 1903, when the Wright brothers, in the United States, made the first controlled flight in a powered aircraft, lasting just twelve seconds. Progress after that was astonishingly rapid. Within a few decades, aircraft were crossing oceans, and by 1969, humans had landed on the Moon.",
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
  {title:'The History of Flight',
   paras:[
    "The dream of flight is as old as humanity itself. Ancient myths tell of people attaching wings to their arms, and for centuries inventors tried, and failed, to fly like birds. Real progress only began when people stopped imitating birds and started to understand the science of flight.",
    "The first breakthrough came with the hot-air balloon. In 1783, in France, a balloon carried the first human passengers into the sky. Balloons, however, could drift only where the wind took them. The next great challenge was achieving controlled, powered flight.",
    "This was accomplished in 1903 by two American brothers, Orville and Wilbur Wright, who built and flew the first aeroplane. Their first flight lasted only twelve seconds, but it changed the world. Over the following decades, aircraft became faster, larger, and more reliable. During the two World Wars, rapid advances were made in aviation technology.",
    "The arrival of the jet engine after the Second World War transformed air travel, making it faster and eventually affordable to ordinary people. Air travel shrank the world, allowing people and goods to move between continents in hours rather than weeks."
   ],
   Q:[
    {t:'text',a:'birds|bird',q:'For centuries, inventors tried to fly like ______.'},
    {t:'text',a:'science',q:'Progress began when people understood the ______ of flight.'},
    {t:'text',a:'balloon',q:'The first human passengers flew in a hot-air ______.'},
    {t:'text',a:'1783',q:'The first balloon flight was in ______ (year).'},
    {t:'text',a:'wind',q:'Balloons could only drift where the ______ took them.'},
    {t:'choice',a:'B',q:'The first aeroplane was built by:',opts:['A) the French','B) the Wright brothers','C) the British','D) balloonists']},
    {t:'text',a:'twelve|12',q:"The Wright brothers' first flight lasted ______ seconds."},
    {t:'text',a:'wars|war',q:'Rapid advances were made during the two World ______.'},
    {t:'text',a:'jet',q:'The ______ engine transformed air travel after WWII.'},
    {t:'text',a:'affordable',q:'Air travel eventually became ______ to ordinary people.'},
    {t:'text',a:'hours|hour',q:'Air travel allowed movement between continents in ______ rather than weeks.'},
    {t:'choice',a:'TRUE',q:'Early inventors failed because they imitated birds.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'B',q:'The story of flight is described as:',opts:['A) unimportant','B) one of the most remarkable in history','C) a failure','D) a myth']}
   ]},
  {title:'The Secret Life of Trees',
   paras:[
    "For a long time, trees were thought of as solitary organisms, each competing with its neighbours for light and water. In recent years, however, scientists have discovered that forests are far more complex and cooperative than anyone imagined, and that trees are, in a sense, connected to one another.",
    "The key to this hidden connection lies underground. The roots of trees are linked by a vast network of fungi, sometimes called the 'wood wide web'. Through this network, trees can actually share resources. A large, healthy tree may send sugars through the fungi to a younger or weaker tree nearby, helping it to survive in the shade.",
    "Even more remarkably, trees appear to communicate. When one tree is attacked by insects, it can release chemical signals into the air and through the fungal network, warning neighbouring trees, which then begin to produce substances to defend themselves. In this way, a forest behaves less like a collection of individuals and more like a single, cooperative community.",
    "These discoveries have important implications. They suggest that when we cut down forests, we may be destroying not just individual trees but complex communities and relationships built up over centuries."
   ],
   Q:[
    {t:'text',a:'solitary',q:'Trees were once thought to be ______ organisms.'},
    {t:'text',a:'fungi|fungus',q:'Tree roots are linked by a network of ______.'},
    {t:'text',a:'web',q:"This network is sometimes called the 'wood wide ______'."},
    {t:'text',a:'resources|resource',q:'Through the network, trees can share ______.'},
    {t:'text',a:'sugars|sugar',q:'A healthy tree may send ______ to a weaker tree.'},
    {t:'text',a:'shade',q:'This helps weaker trees survive in the ______.'},
    {t:'text',a:'signals|signal',q:'When attacked by insects, a tree releases chemical ______.'},
    {t:'text',a:'defend',q:'Warned trees produce substances to ______ themselves.'},
    {t:'choice',a:'B',q:'A forest behaves less like individuals and more like a:',opts:['A) machine','B) cooperative community','C) single tree','D) desert']},
    {t:'text',a:'communities|community',q:'Cutting down forests may destroy complex ______.'},
    {t:'text',a:'centuries|century',q:'These relationships were built up over ______.'},
    {t:'choice',a:'FALSE',q:'Trees are completely isolated from each other.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'protect',q:'Understanding forests may help us ______ them.'}
   ]},
  {title:'Why Reading Still Matters',
   paras:[
    "In an age of screens, videos, and endless digital distraction, some people wonder whether reading books still matters. Yet research continues to show that reading, particularly of longer texts such as books, offers benefits that other media struggle to match.",
    "One clear benefit is for the mind. Reading has been shown to improve vocabulary and general knowledge, and, unlike passively watching a screen, it actively engages the brain, strengthening concentration and the ability to follow complex ideas. Reading fiction, in particular, has a surprising benefit: by encouraging readers to imagine the thoughts and feelings of characters, it appears to improve empathy, our ability to understand others.",
    "Reading also has emotional benefits. Studies suggest that reading for pleasure can reduce stress, sometimes more effectively than other relaxing activities. For many, losing themselves in a good book provides a valuable escape from the pressures of daily life.",
    "Despite these benefits, reading for pleasure appears to be declining, especially among young people, who spend increasing amounts of time on digital devices. Many experts find this worrying, arguing that the deep, focused attention that reading develops is exactly the skill most under threat in a world of constant distraction."
   ],
   Q:[
    {t:'text',a:'matters|matter',q:'Some people wonder whether reading books still ______.'},
    {t:'text',a:'knowledge',q:'Reading improves vocabulary and general ______.'},
    {t:'text',a:'engages|engage',q:'Unlike watching a screen, reading actively ______ the brain.'},
    {t:'text',a:'ideas|idea',q:'Reading strengthens concentration and the ability to follow complex ______.'},
    {t:'text',a:'empathy',q:'Reading fiction appears to improve ______.'},
    {t:'text',a:'others',q:'Empathy is the ability to understand ______.'},
    {t:'text',a:'stress',q:'Reading for pleasure can reduce ______.'},
    {t:'text',a:'escape',q:'A good book provides an ______ from daily pressures.'},
    {t:'choice',a:'B',q:"Reading fiction improves empathy by encouraging readers to imagine characters' thoughts and:",opts:['A) actions','B) feelings','C) words','D) names']},
    {t:'text',a:'declining|decline',q:'Reading for pleasure appears to be ______.'},
    {t:'text',a:'young',q:'This decline is especially seen among ______ people.'},
    {t:'text',a:'devices|device',q:'Young people spend increasing time on digital ______.'},
    {t:'choice',a:'B',q:'Experts are worried because reading develops:',opts:['A) fast typing','B) deep, focused attention','C) social media skills','D) memory of facts']},
    {t:'choice',a:'TRUE',q:'Reading books offers benefits other media struggle to match.',opts:['TRUE','FALSE','NOT GIVEN']}
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
   transcript:"Good morning, I'd like to open a bank account. Certainly. We offer a current account with no monthly fee. To open one, you'll need two forms of identification: a passport and a recent utility bill showing your address. You'll also receive a debit card, which arrives within five working days. The account includes free online and mobile banking. There's no minimum balance required. The account pays a small amount of interest, currently one per cent a year. Our nearest branch is on King Street, open until four thirty on weekdays. You'll need to book an appointment to open the account.",
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
   transcript:"In local news, the town's brand-new shopping centre opens its doors next Saturday. The centre, which took two years to build, houses over one hundred shops, as well as a cinema and a food court with twenty restaurants. On opening day, the first two hundred visitors will receive a free gift. The centre is easily reached by public transport, and there is parking for two thousand cars. To celebrate, several shops will offer discounts of up to fifty per cent during the first week. The centre will be open from nine in the morning until eight in the evening, seven days a week. Organisers say the development has created around five hundred new jobs.",
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
   transcript:"Right, our business presentation is on a company's success. Which company should we choose? How about a coffee chain? Good, and easy to research. What's the secret of their success? I think it's mainly their strong brand and consistent quality. And their locations, always on busy streets. What about weaknesses? Their prices are quite high. And a lot of competition now. So what do we recommend? Maybe they should expand their online delivery. How long is the presentation? Ten minutes, plus questions. Should we include charts? Yes, let's show their sales growth in a graph. When's it due? The fourteenth of April. Let's meet Wednesday to practise.",
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
   transcript:"Today's lecture concerns advertising and how it influences what we buy. The main purpose of advertising is not simply to give information, but to persuade. Advertisers use a range of techniques. One common method is to associate a product with positive feelings, such as happiness or success. Another is the use of celebrities, whose fame and image are transferred to the product in the mind of the consumer. Advertisers also exploit our desire to fit in, or, conversely, our desire to feel unique. Repetition is powerful too: the more often we see a brand, the more familiar and trustworthy it seems. Understanding these techniques helps consumers make more rational decisions.",
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
  {title:'The Rise of Online Shopping',
   paras:[
    "Two decades ago, buying goods over the internet was a novelty. Today, online shopping, or 'e-commerce', is a part of everyday life for billions of people, and it has transformed the way we buy almost everything, from books and clothes to groceries.",
    "The reasons for its success are easy to understand. Online shopping offers unmatched convenience: customers can browse and buy at any time of day, from home, without travelling to a store. The choice available is enormous, and it is easy to compare prices between different sellers. For many products, home delivery, sometimes within hours, adds to the appeal.",
    "This growth has had significant effects. Traditional 'high street' shops, unable to compete on price or convenience, have struggled, and many have closed. At the same time, e-commerce has created new jobs in areas such as warehousing and delivery, and has allowed small businesses to reach customers across the world.",
    "There are drawbacks, however. Online shopping means customers cannot see or try products before buying, leading to high rates of returns. The huge rise in home deliveries has increased traffic and packaging waste. Some also worry about the loss of the social experience of shopping in person. Despite these concerns, the convenience of e-commerce means it is almost certain to keep growing."
   ],
   Q:[
    {t:'text',a:'e-commerce|ecommerce|e commerce',q:'Online shopping is also known as ______.'},
    {t:'text',a:'convenience',q:'Online shopping offers unmatched ______.'},
    {t:'text',a:'home',q:'Customers can buy at any time of day from ______.'},
    {t:'text',a:'compare',q:'It is easy to ______ prices between sellers.'},
    {t:'text',a:'home',q:'For many products, ______ delivery adds to the appeal.'},
    {t:'choice',a:'B',q:'High street shops have struggled because they cannot compete on price or:',opts:['A) quality','B) convenience','C) location','D) staff']},
    {t:'text',a:'delivery',q:'E-commerce has created new jobs in warehousing and ______.'},
    {t:'text',a:'world',q:'It allows small businesses to reach customers across the ______.'},
    {t:'text',a:'try|see',q:'A drawback is that customers cannot ______ products before buying.'},
    {t:'text',a:'returns|return',q:'This leads to high rates of ______.'},
    {t:'text',a:'waste',q:'Home deliveries have increased traffic and packaging ______.'},
    {t:'text',a:'social',q:'Some worry about the loss of the ______ experience of shopping.'},
    {t:'choice',a:'B',q:'The writer predicts that e-commerce will:',opts:['A) disappear','B) keep growing','C) stay the same','D) become illegal']}
   ]},
  {title:'The Power of Branding',
   paras:[
    "Why are some people willing to pay far more for a product simply because of the name on it? The answer lies in the power of branding, one of the most important concepts in modern business. A brand is much more than a logo or a name; it is the whole set of ideas, feelings, and expectations that a product brings to mind.",
    "A strong brand offers companies enormous advantages. It allows them to charge higher prices, as customers associate the brand with quality or status. It also creates loyalty: satisfied customers return again and again, and may recommend the brand to others. A well-known brand is also instantly recognisable, helping a product stand out in a crowded market.",
    "Building a brand takes time and consistency. Companies work hard to ensure that everything, from the design of their products to their advertising and even their customer service, sends the same message. Some of the world's most valuable brands have spent decades building trust with their customers.",
    "Branding is not without its critics, however. Some argue that it encourages people to pay for image rather than substance. Nevertheless, in a world full of choices, a trusted brand remains one of a company's most valuable assets."
   ],
   Q:[
    {t:'text',a:'name',q:'A brand is more than a logo or a ______.'},
    {t:'text',a:'expectations|expectation',q:'A brand is a set of ideas, feelings and ______.'},
    {t:'text',a:'prices|price',q:'A strong brand allows companies to charge higher ______.'},
    {t:'text',a:'status',q:'Customers associate strong brands with quality or ______.'},
    {t:'text',a:'loyalty',q:'A strong brand creates customer ______.'},
    {t:'text',a:'recommend',q:'Loyal customers may ______ the brand to others.'},
    {t:'text',a:'recognisable|recognizable',q:'A well-known brand is instantly ______.'},
    {t:'text',a:'consistency',q:'Building a brand takes time and ______.'},
    {t:'choice',a:'B',q:'Companies ensure everything sends the same:',opts:['A) price','B) message','C) logo','D) product']},
    {t:'text',a:'trust',q:"Valuable brands have spent decades building ______ with customers."},
    {t:'choice',a:'B',q:'Critics argue branding makes people pay for image rather than:',opts:['A) quality','B) substance','C) design','D) service']},
    {t:'text',a:'assets|asset',q:"A trusted brand is one of a company's most valuable ______."},
    {t:'choice',a:'FALSE',q:'Branding has no critics.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'Working in the Gig Economy',
   paras:[
    "The way many people work is changing. Instead of holding a traditional job with a single employer, a growing number of people now work in what is called the 'gig economy', taking on short-term tasks or 'gigs' for different clients, often arranged through websites or apps. This includes everything from driving passengers and delivering food to freelance writing and design.",
    "For many workers, the main attraction is flexibility. They can choose when and how much they work, fitting their jobs around family, study, or other commitments. For some, it offers a way to be their own boss. Businesses, too, benefit, as they can hire people only when needed, without the cost of permanent staff.",
    "However, this flexibility comes at a price. Gig workers are usually classed as self-employed, which means they miss out on the benefits enjoyed by traditional employees, such as paid holidays, sick pay, and pensions. Their income can also be unpredictable, varying from week to week. Because they are not guaranteed a minimum number of hours, they bear much of the risk themselves.",
    "These issues have sparked debate about how gig workers should be treated. Some argue that companies should provide more protections, while others fear that too many rules would remove the flexibility that makes the gig economy attractive in the first place."
   ],
   Q:[
    {t:'text',a:'gigs|gig',q:'Short-term tasks in the gig economy are called ______.'},
    {t:'text',a:'apps|app',q:'Gigs are often arranged through websites or ______.'},
    {t:'text',a:'flexibility',q:'The main attraction for workers is ______.'},
    {t:'text',a:'work',q:'Workers can choose when and how much they ______.'},
    {t:'text',a:'boss',q:'Some like being their own ______.'},
    {t:'text',a:'needed|need',q:'Businesses can hire people only when ______.'},
    {t:'text',a:'self-employed|selfemployed|self employed',q:'Gig workers are usually classed as ______.'},
    {t:'choice',a:'B',q:'Which benefit do gig workers usually miss out on?',opts:['A) flexibility','B) paid holidays','C) extra income','D) apps']},
    {t:'text',a:'pensions|pension',q:'Gig workers also miss out on sick pay and ______.'},
    {t:'text',a:'unpredictable',q:'Their income can be ______.'},
    {t:'text',a:'hours|hour',q:'Gig workers are not guaranteed a minimum number of ______.'},
    {t:'text',a:'protections|protection',q:'Some argue companies should provide more ______.'},
    {t:'text',a:'flexibility',q:'Others fear too many rules would remove the ______.'},
    {t:'choice',a:'C',q:'The writer says finding the right balance is:',opts:['A) easy','B) unnecessary','C) increasingly urgent','D) impossible']}
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
   transcript:"Hello, I'd like to register for the science conference next month. Certainly. The conference runs over two days, on the fifteenth and sixteenth of June. The standard registration fee is eighty pounds, but students pay a reduced rate of forty pounds with a valid ID. This includes access to all talks, lunch on both days, and a printed programme. There's an optional conference dinner on the first evening, which costs an extra twenty-five pounds. The conference is held at the Grand Hotel in the city centre. To register, please complete the online form by the first of June. You'll receive your name badge by email to print at home.",
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
   transcript:"Welcome to the Hilltop Observatory. First, we'll visit the planetarium, where a thirty-minute show will take you on a journey through the night sky. After that, weather permitting, we'll use the large telescope to observe the Moon and, tonight, the planet Saturn, whose rings should be clearly visible. Please note that the observatory can get quite cold, so warm clothing is recommended, as the telescope dome has no heating. Red torches are provided, as ordinary white light affects our night vision. The gift shop, which sells star charts and models, closes at nine. Finally, please avoid using bright screens, as they disturb other visitors' viewing.",
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
   transcript:"You wanted to discuss your astronomy project? Yes, I want to study how light pollution affects our view of the stars. How will you investigate it? I'll count how many stars are visible from different locations. How many locations? I'll compare three: the city centre, the suburbs, and the countryside. And when will you observe? On clear nights, away from a full moon, as moonlight interferes. How will you record the data? I'll use a chart and take photographs. How long should the report be? About three thousand words. When's it due? The end of May. Remember to include a map of your locations.",
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
   transcript:"Today we'll take a tour of our solar system. At its centre is the Sun, a star that contains almost all the mass of the solar system and provides the energy that makes life on Earth possible. Orbiting the Sun are eight planets. The four closest, including Earth, are small and rocky, while the four outer planets are giant balls of gas and ice. The largest planet, Jupiter, is so big that all the others could fit inside it. Beyond the planets lie countless smaller objects, including asteroids and comets. Since the first satellite was launched in 1957, we have sent probes to every planet and landed robots on Mars. The next great goal, many believe, is to send humans to Mars.",
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
  {title:'The Search for Life on Mars',
   paras:[
    "Of all the planets in our solar system, none has captured the human imagination quite like Mars. For over a century, people have wondered whether the 'Red Planet' might be home to life, and today the search for evidence is one of the main goals of space exploration.",
    "At first glance, Mars seems hostile to life. It is extremely cold, its thin atmosphere is mostly carbon dioxide, and its surface is bombarded with harmful radiation. Yet there are reasons for hope. Scientists have found strong evidence that, billions of years ago, Mars was warmer and wetter, with rivers, lakes, and possibly even oceans of liquid water. Since water is essential for life as we know it, this raises the possibility that life may once have existed there.",
    "To investigate, space agencies have sent a series of robotic explorers, or 'rovers', to the Martian surface. These vehicles drill into rocks and analyse the soil, searching for chemical signs of life. So far, no definite evidence of life has been found, but the rovers have confirmed that the ingredients for life were once present.",
    "The ultimate goal for many scientists is to bring samples of Martian rock back to Earth for detailed study, and eventually to send humans to explore the planet in person."
   ],
   Q:[
    {t:'text',a:'red',q:'Mars is often called the ______ Planet.'},
    {t:'text',a:'cold',q:'Mars is extremely ______.'},
    {t:'text',a:'dioxide',q:'Its thin atmosphere is mostly carbon ______.'},
    {t:'text',a:'radiation',q:'Its surface is bombarded with harmful ______.'},
    {t:'text',a:'wetter|wet',q:'Billions of years ago, Mars was warmer and ______.'},
    {t:'text',a:'water',q:'Mars may once have had rivers, lakes and oceans of liquid ______.'},
    {t:'text',a:'life',q:'Water is essential for ______ as we know it.'},
    {t:'text',a:'rovers|rover',q:'Robotic explorers are also called ______.'},
    {t:'text',a:'soil',q:'Rovers drill into rocks and analyse the ______.'},
    {t:'choice',a:'B',q:'So far, evidence of life on Mars is:',opts:['A) definite','B) not yet found','C) hidden','D) obvious']},
    {t:'text',a:'ingredients|ingredient',q:'The rovers confirmed the ______ for life were once present.'},
    {t:'text',a:'samples|sample',q:'Scientists hope to bring ______ of Martian rock back to Earth.'},
    {t:'text',a:'humans|human',q:'The ultimate goal includes sending ______ to Mars.'}
   ]},
  {title:'The Northern Lights',
   paras:[
    "Few natural sights are as breathtaking as the Northern Lights, or 'aurora borealis'. On clear, dark nights in the far north, the sky can suddenly come alive with shimmering curtains of green, pink, and purple light. For centuries, people explained this phenomenon through myths, but today its cause is well understood.",
    "The lights are created by activity on the Sun. The Sun constantly sends out a stream of tiny charged particles, known as the solar wind. When these particles reach Earth, most are deflected by the planet's magnetic field. However, near the North and South Poles, some particles are channelled into the atmosphere, where they collide with gases such as oxygen and nitrogen. These collisions release energy in the form of light.",
    "The colour of the aurora depends on which gas is involved and at what altitude. Oxygen typically produces green and red light, while nitrogen creates blue and purple. Because the lights depend on solar activity, they are more frequent and intense when the Sun is more active.",
    "The same phenomenon occurs near the South Pole, where it is called the 'aurora australis'. Although auroras are usually seen only in polar regions, particularly strong solar activity can occasionally make them visible much further away."
   ],
   Q:[
    {t:'text',a:'borealis',q:'The Northern Lights are also called the aurora ______.'},
    {t:'text',a:'sun',q:'The lights are created by activity on the ______.'},
    {t:'text',a:'wind',q:'The Sun sends out a stream of charged particles called the solar ______.'},
    {t:'text',a:'magnetic',q:"Most particles are deflected by Earth's ______ field."},
    {t:'text',a:'atmosphere',q:'Near the poles, particles collide with gases in the ______.'},
    {t:'text',a:'nitrogen',q:'Oxygen and ______ are the gases involved.'},
    {t:'text',a:'light',q:'The collisions release energy in the form of ______.'},
    {t:'text',a:'red',q:'Oxygen typically produces green and ______ light.'},
    {t:'text',a:'purple',q:'Nitrogen creates blue and ______.'},
    {t:'choice',a:'B',q:'The colour depends on the gas and the:',opts:['A) time','B) altitude','C) season','D) temperature']},
    {t:'text',a:'active',q:'The lights are more intense when the Sun is more ______.'},
    {t:'text',a:'australis',q:'Near the South Pole, the phenomenon is called the aurora ______.'},
    {t:'text',a:'further|farther',q:'Strong solar activity can make auroras visible ______ away.'}
   ]},
  {title:'The Story of Vaccines',
   paras:[
    "Vaccines are among the greatest achievements in the history of medicine, having saved countless millions of lives. Yet the basic idea behind them is surprisingly old and remarkably simple: to train the body's own defences to recognise and fight a disease before a person ever encounters it.",
    "The story begins in the late eighteenth century with an English doctor, Edward Jenner. He noticed that milkmaids who had caught a mild disease called cowpox seemed to be protected from the deadly disease smallpox. In 1796, he tested his idea, and it worked. This was the world's first vaccine.",
    "Vaccines work by using a harmless part or version of a germ. When this is introduced into the body, the immune system learns to recognise it and produces defences called antibodies. If the person later encounters the real disease, their body is ready to fight it off quickly, often before they even feel sick.",
    "Over the following centuries, vaccines were developed against many deadly diseases, including polio, measles, and tetanus. One disease, smallpox, has been completely wiped out through vaccination. Despite this success, vaccines face challenges, including the spread of false information. Scientists stress that widespread vaccination protects not only individuals but whole communities."
   ],
   Q:[
    {t:'text',a:'defences|defenses|defence|defense',q:"Vaccines train the body's own ______ to fight disease."},
    {t:'text',a:'jenner',q:'The first vaccine was developed by Edward ______.'},
    {t:'text',a:'cowpox',q:'Jenner noticed milkmaids who caught ______ were protected from smallpox.'},
    {t:'text',a:'1796',q:'Jenner tested his idea in ______ (year).'},
    {t:'text',a:'smallpox',q:'Cowpox protected people from the deadly disease ______.'},
    {t:'text',a:'germ',q:'Vaccines use a harmless part or version of a ______.'},
    {t:'text',a:'antibodies|antibody',q:'The immune system produces defences called ______.'},
    {t:'choice',a:'B',q:'If a vaccinated person meets the real disease, their body can:',opts:['A) not respond','B) fight it off quickly','C) catch it easily','D) ignore it']},
    {t:'text',a:'tetanus',q:'Vaccines were developed against polio, measles and ______.'},
    {t:'text',a:'smallpox',q:'The disease ______ has been completely wiped out.'},
    {t:'choice',a:'B',q:'A challenge vaccines face is the spread of:',opts:['A) new diseases','B) false information','C) high costs','D) old age']},
    {t:'text',a:'communities|community',q:'Widespread vaccination protects individuals and whole ______.'},
    {t:'text',a:'spreading|spread',q:'Vaccination stops diseases from ______.'},
    {t:'choice',a:'TRUE',q:'Vaccines have saved millions of lives.',opts:['TRUE','FALSE','NOT GIVEN']}
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
   transcript:"Hello, I'd like to join the local tennis club. Great. Adult membership is one hundred and twenty pounds a year, and junior membership, for under-eighteens, is sixty pounds. This gives you access to all six courts, four of which are floodlit for evening play. Coaching sessions are available for an extra charge, at fifteen pounds an hour. Members can book courts online up to a week in advance. There's a clubhouse with changing rooms and a small cafe. To join, you'll need to fill in a form and provide one passport photo. New members are also invited to a free introductory session with a coach. The club is closed on Mondays.",
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
   transcript:"Welcome to the Old Town Heritage Festival. The festival celebrates the town's history, which dates back nearly a thousand years. Throughout the day, you can watch traditional crafts such as pottery and weaving being demonstrated in the market square. At eleven o'clock, there's a costumed parade through the main street. For families, there are activities in the castle grounds, including archery. Traditional music will be performed on the bandstand every hour. Food stalls offer local specialities. Please note that the main street is closed to traffic all day. The festival ends with a firework display at nine in the evening. Programmes are available free at the information point.",
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
   transcript:"Our history presentation is on an ancient civilisation. Which one should we pick? How about the Maya? Good choice. What aspect should we focus on? I think their achievements in astronomy and their calendar. And their writing system, which was very advanced. What about their decline? That's still debated; possibly drought and war. We should show a map of where they lived, in Central America. How long is the presentation? Fifteen minutes. Should we use images? Definitely, lots of pictures of their temples. When's it due? The ninth of March. Let's meet on Friday to put the slides together.",
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
   transcript:"Today we will explore the relationship between language and culture. Language is far more than a tool for communication; it carries the history, values, and identity of the people who speak it. Every language has words and expressions that reflect what matters to a particular culture. When a language is lost, therefore, it is not just words that disappear, but a unique way of seeing the world. Linguists estimate that of the roughly seven thousand languages spoken today, nearly half may vanish by the end of this century. Many are spoken by only a few elderly people, with children no longer learning them. Efforts are now under way to record and revive endangered languages.",
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
  {title:'The Origins of Writing',
   paras:[
    "Writing is one of humanity's most important inventions, allowing knowledge to be stored and passed on across time and space. Yet for most of human history, people had no writing at all, relying entirely on memory and speech. The invention of writing, which happened independently in several parts of the world, marked a profound turning point.",
    "The earliest known writing developed in ancient Mesopotamia, in the Middle East, over five thousand years ago. It did not begin as a way of recording stories or ideas, but for a far more practical reason: keeping accounts. As cities grew and trade increased, people needed a reliable way to record how much grain was stored or who owed what. The first symbols were simple pictures representing objects.",
    "Over time, writing systems became more sophisticated. Rather than a picture for every word, some cultures developed symbols to represent sounds, eventually leading to the alphabet, in which a small number of letters can be combined to write any word. This was a hugely efficient system, and most writing today is based on it.",
    "The impact of writing has been immense. It made possible the keeping of records, the writing of laws, and the recording of history. Above all, it allowed knowledge to accumulate across generations. Without writing, the complex societies we live in today would simply not be possible."
   ],
   Q:[
    {t:'text',a:'speech',q:'For most of history, people relied on memory and ______.'},
    {t:'text',a:'independently',q:'Writing developed ______ in several parts of the world.'},
    {t:'text',a:'mesopotamia',q:'The earliest known writing developed in ancient ______.'},
    {t:'text',a:'five|5',q:'This happened over ______ thousand years ago.'},
    {t:'text',a:'accounts|account',q:'Writing did not begin for stories but for keeping ______.'},
    {t:'text',a:'grain',q:'People needed to record how much ______ was stored.'},
    {t:'text',a:'pictures|picture',q:'The first symbols were simple ______.'},
    {t:'text',a:'sounds|sound',q:'Some cultures developed symbols to represent ______.'},
    {t:'text',a:'alphabet',q:'This eventually led to the ______.'},
    {t:'choice',a:'B',q:'The alphabet is efficient because a small number of letters can:',opts:['A) be drawn','B) be combined to write any word','C) be memorised','D) be spoken']},
    {t:'text',a:'laws|law',q:'Writing made possible the writing of ______.'},
    {t:'text',a:'accumulate',q:'Writing allowed knowledge to ______ across generations.'},
    {t:'choice',a:'B',q:'The writer says that without writing, complex societies would:',opts:['A) be simpler','B) not be possible','C) be older','D) be faster']}
   ]},
  {title:"The World's Vanishing Languages",
   paras:[
    "There are around seven thousand languages spoken in the world today, but this remarkable diversity is under threat. Experts warn that a large proportion of these languages could disappear within the next hundred years, as more and more people abandon their traditional tongues in favour of a few dominant global languages.",
    "A language is generally considered endangered when children stop learning it. Many of the world's smaller languages are now spoken only by older generations; when they die, the language dies with them. This process is being accelerated by globalisation, migration to cities, and education systems that teach only in major national languages. For economic reasons, parents often encourage their children to learn a dominant language.",
    "The loss of a language is more serious than it might first appear. Each language represents a unique way of understanding the world, containing knowledge about local plants, animals, and traditions that may exist nowhere else. When a language disappears, this accumulated wisdom is often lost forever.",
    "Fortunately, efforts are being made to reverse this trend. Communities and linguists are working to document endangered languages, creating dictionaries and recordings before it is too late. In some places, languages once close to extinction are being revived, taught again to a new generation."
   ],
   Q:[
    {t:'text',a:'seven|7',q:'There are around ______ thousand languages spoken today.'},
    {t:'text',a:'children|child',q:'A language is endangered when ______ stop learning it.'},
    {t:'text',a:'older|old',q:'Many small languages are spoken only by ______ generations.'},
    {t:'text',a:'migration',q:'The process is accelerated by globalisation and ______ to cities.'},
    {t:'text',a:'national',q:'Education systems often teach only in major ______ languages.'},
    {t:'text',a:'dominant',q:'Parents often encourage children to learn a ______ language.'},
    {t:'text',a:'traditions|tradition',q:'Each language contains knowledge about local plants, animals and ______.'},
    {t:'choice',a:'B',q:'When a language disappears, its knowledge is often:',opts:['A) saved','B) lost forever','C) translated','D) written down']},
    {t:'text',a:'document',q:'Linguists are working to ______ endangered languages.'},
    {t:'text',a:'recordings|recording',q:'They are creating dictionaries and ______.'},
    {t:'text',a:'revived|revive',q:'In some places, languages are being ______.'},
    {t:'text',a:'generation',q:'These languages are taught again to a new ______.'},
    {t:'choice',a:'FALSE',q:'Language diversity is completely safe.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The Global Game: A History of Football',
   paras:[
    "Football, known as soccer in some countries, is the most popular sport in the world, played and watched by billions of people. Its appeal is easy to understand: the rules are simple, and all that is really needed to play is a ball and some open space. Yet the modern game has a surprisingly recent and specific history.",
    "While games involving kicking a ball have existed in many cultures for thousands of years, the sport we know today took shape in nineteenth-century England. Different schools and towns played by their own varied rules. In 1863, a group met in London to agree on a single set of rules, an event considered the birth of modern football. Crucially, they decided that handling the ball would not be allowed, which separated football from rugby.",
    "From England, the game spread rapidly around the world, carried by traders, sailors, and workers. It proved especially popular in South America and Europe, where it became deeply woven into local culture. The first international match was played in 1872, and the first World Cup was held in 1930.",
    "Today, football is far more than a game. It is a global industry worth billions, a source of intense local and national pride, and, for many, a passion that brings people together across boundaries of language and culture."
   ],
   Q:[
    {t:'text',a:'soccer',q:'Football is known as ______ in some countries.'},
    {t:'text',a:'space',q:'To play, all that is needed is a ball and some open ______.'},
    {t:'text',a:'england',q:'The modern game took shape in nineteenth-century ______.'},
    {t:'text',a:'london',q:'In 1863, a group met in ______ to agree on rules.'},
    {t:'text',a:'football',q:'This event is considered the birth of modern ______.'},
    {t:'text',a:'handling|handle',q:'They decided that ______ the ball would not be allowed.'},
    {t:'text',a:'rugby',q:'This separated football from ______.'},
    {t:'text',a:'workers|worker',q:'The game was spread by traders, sailors and ______.'},
    {t:'choice',a:'B',q:'Football became especially popular in Europe and:',opts:['A) Asia','B) South America','C) Africa','D) Australia']},
    {t:'text',a:'1872',q:'The first international match was played in ______.'},
    {t:'text',a:'1930',q:'The first World Cup was held in ______.'},
    {t:'text',a:'industry',q:'Football is now a global ______ worth billions.'},
    {t:'choice',a:'B',q:'The writer says football is a source of local and national:',opts:['A) conflict','B) pride','C) income','D) confusion']},
    {t:'text',a:'culture',q:'Football unites people across boundaries of language and ______.'}
   ]}
 ],
 writing:{
  img:"<table style='border-collapse:collapse;margin:8px auto;font-size:13px;background:#fff;color:#111'><caption style='font-weight:bold;margin-bottom:6px'>Speakers of five languages (millions)</caption><tr style='background:#eef2f8'><th style='border:1px solid #999;padding:5px 10px'>Language</th><th style='border:1px solid #999;padding:5px 10px'>First language</th><th style='border:1px solid #999;padding:5px 10px'>Second language</th></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Mandarin</td><td style='border:1px solid #999;padding:5px 10px'>920</td><td style='border:1px solid #999;padding:5px 10px'>200</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>English</td><td style='border:1px solid #999;padding:5px 10px'>380</td><td style='border:1px solid #999;padding:5px 10px'>750</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Spanish</td><td style='border:1px solid #999;padding:5px 10px'>480</td><td style='border:1px solid #999;padding:5px 10px'>75</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Hindi</td><td style='border:1px solid #999;padding:5px 10px'>340</td><td style='border:1px solid #999;padding:5px 10px'>270</td></tr><tr><td style='border:1px solid #999;padding:5px 10px'>Arabic</td><td style='border:1px solid #999;padding:5px 10px'>310</td><td style='border:1px solid #999;padding:5px 10px'>130</td></tr></table>",
  task1:"The table below shows the number of people (in millions) who speak five major languages as a first and as a second language. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that globalisation is a threat to local cultures, while others think it helps them to develop. Discuss both views and give your own opinion. Write at least 250 words."
 }
}

];
