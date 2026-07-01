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
   transcript:"Hello everyone, and welcome to the Greenfield Community Sports Centre. My name is Sarah. The centre is open from six in the morning until ten at night on weekdays, and from eight until eight at weekends. Our most popular facility is the swimming pool, which has eight lanes and is heated all year round. Membership costs forty pounds per month for adults, but students pay only twenty-five pounds. The gym is located on the first floor, next to the cafe. Please bring a towel and a padlock for the lockers. For group classes such as yoga, you need to book at least two days in advance. Computers for members are available in the lounge, and parking is free for members, but visitors must pay three pounds per hour.",
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
   transcript:"Welcome to the City Science Museum. Let me give you a quick overview. The museum has three floors. On the ground floor, you will find the interactive exhibits, which are especially popular with children. The first floor is dedicated to space, including a model of the International Space Station. The top floor houses our newest gallery on climate change, which opened last month. Guided tours leave from the main desk every hour and last about forty minutes. If you would like an audio guide, they are available in six languages for a small fee of two pounds. The cafe is located next to the gift shop, and it closes at half past four. Finally, please remember that photography is allowed, but flash must be turned off.",
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
   transcript:"So, Maya, have you decided what our geography presentation will focus on? Yes, I think we should look at renewable energy, particularly wind power. Good idea, but shouldn't we include solar as well? We could, but I think wind is more relevant to our region, so let's keep the focus narrow. Fair enough. How long does it need to be? The tutor said fifteen minutes, plus five minutes for questions. Okay, and who is making the slides? I'll do the slides if you handle the research. Deal. When is the deadline? We present on the twelfth of March, so we should meet next week to practise. Perfect, let's aim for Tuesday afternoon in the library.",
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
   transcript:"Today's lecture is about the science of sleep. For years, sleep was seen as a passive state, but we now know it is highly active. During deep sleep, the body repairs tissues and strengthens the immune system. Later in the night, we enter what is called REM sleep, when most dreaming occurs and memories are consolidated. Research shows that adults need between seven and nine hours per night for optimal function. A lack of sleep has been linked to weight gain, poor concentration, and a higher risk of heart disease. Interestingly, staying awake for twenty-four hours can impair performance as much as alcohol. To improve sleep, experts recommend avoiding screens before bed and keeping the bedroom cool and dark.",
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
  {title:'Vertical Farming: Growing Up, Not Out',
   paras:[
    "Vertical farming is an innovative approach to agriculture in which crops are grown in stacked layers, often inside controlled indoor environments such as warehouses or shipping containers. Unlike conventional farming, which spreads outwards across vast fields, vertical farming grows upwards, dramatically reducing the amount of land required.",
    "The idea is not entirely new. Although small-scale experiments existed earlier, the modern concept was popularised in 1999 by Dickson Despommier, a professor at Columbia University, who challenged his students to feed a city using only rooftop gardens. When the rooftops proved insufficient, the class began imagining farms that climbed skyward instead.",
    "One of the greatest advantages of vertical farming is its independence from weather. Because crops are grown indoors under artificial conditions, production continues regardless of droughts, floods, or seasonal changes. Furthermore, since these farms can be built within cities, food travels a far shorter distance to reach consumers, cutting transport costs and reducing carbon emissions.",
    "Water efficiency is another notable benefit. Many vertical farms use hydroponic systems, in which plants grow in nutrient-rich water rather than soil. These systems recycle water continuously, using up to 95 per cent less than traditional irrigation. Pesticides are also largely unnecessary, as the enclosed environment keeps most pests out.",
    "However, vertical farming is not without its critics. The most significant drawback is energy consumption. Replacing natural sunlight with artificial LED lighting requires enormous amounts of electricity. The high initial cost of construction also remains a barrier.",
    "Despite these challenges, interest continues to grow. Several countries with limited farmland, such as Singapore and the United Arab Emirates, have invested heavily in vertical farms to strengthen their food security."
   ],
   Q:[
    {t:'choice',a:'TRUE',q:'Vertical farms need less land than traditional farms.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The modern concept was first introduced in the 21st century.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:"Despommier's students fed a city using rooftop gardens.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Vertical farms can produce crops in every season.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'NOT GIVEN',q:'LED lighting is more expensive than sunlight for farmers.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Singapore invested because it has plenty of farmland.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'water',q:'In hydroponics, plants grow in nutrient-rich ______.'},
    {t:'text',a:'pesticides|pesticide',q:'The enclosed environment means ______ are largely unnecessary.'},
    {t:'text',a:'energy',q:'The most significant drawback is high ______ consumption.'},
    {t:'choice',a:'B',q:'Carbon emissions fall mainly because:',opts:['A) hydroponics','B) food travels shorter distances','C) no pesticides','D) LED lights']},
    {t:'text',a:'weather',q:'Vertical farms are independent of the ______.'},
    {t:'text',a:'security',q:'Some countries invested to strengthen their food ______.'},
    {t:'text',a:'water',q:'Hydroponic systems recycle ______ continuously.'}
   ]},
  {title:'The Remarkable Journey of Coffee',
   paras:[
    "Coffee is one of the most widely consumed beverages in the world, yet few people know the remarkable journey it has taken. According to legend, coffee was discovered in Ethiopia by a goat herder named Kaldi, who noticed that his goats became unusually energetic after eating the red berries of a certain shrub. Curious, he tried the berries himself and experienced a similar burst of energy.",
    "From Ethiopia, coffee spread to the Arabian Peninsula, where it was first cultivated on a large scale in the fifteenth century. By the sixteenth century, coffee houses had appeared in cities such as Cairo and Istanbul. These establishments became important centres of conversation and debate, earning the nickname 'schools of the wise'.",
    "Coffee reached Europe in the seventeenth century, initially meeting resistance from those who viewed it with suspicion. However, its popularity grew rapidly. In London, coffee houses became known as 'penny universities', because for the price of a cup, customers could join stimulating discussions.",
    "Today, coffee is grown in more than seventy countries, mostly in a region known as the 'coffee belt' near the equator. The two main species cultivated are Arabica, prized for its smooth flavour, and Robusta, which is stronger and contains more caffeine. Brazil is by far the largest producer, accounting for roughly a third of global supply.",
    "Despite its popularity, coffee farming faces serious challenges. Climate change threatens the delicate conditions that coffee plants require, and many small farmers struggle with unstable prices. As a result, movements promoting fair trade and sustainable farming have gained momentum."
   ],
   Q:[
    {t:'choice',a:'FALSE',q:'Coffee was first discovered in the Arabian Peninsula.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Kaldi noticed his goats became energetic after eating the berries.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:"Coffee houses in Cairo were called 'schools of the wise'.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Coffee was immediately welcomed in Europe.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:"London coffee houses were known as 'penny universities'.",opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'belt',q:'Coffee is grown in a region called the coffee ______.'},
    {t:'text',a:'flavour|flavor',q:'Arabica is prized for its smooth ______.'},
    {t:'text',a:'caffeine',q:'Robusta contains more ______.'},
    {t:'text',a:'brazil',q:'______ is the largest coffee producer.'},
    {t:'choice',a:'B',q:'Brazil accounts for about:',opts:['A) a half','B) a third','C) a quarter','D) all']},
    {t:'choice',a:'C',q:'Coffee reached Europe in the:',opts:['A) 15th century','B) 16th century','C) 17th century','D) 18th century']},
    {t:'choice',a:'TRUE',q:'Climate change threatens coffee farming.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Fair trade movements aim to make coffee farming sustainable.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'How the Printing Press Changed the World',
   paras:[
    "Few inventions have shaped the modern world as profoundly as the printing press. Before its invention, books were copied by hand, a slow and expensive process carried out mainly by monks. A single book could take months or even years to produce, meaning that written knowledge remained the privilege of a wealthy few.",
    "This changed dramatically in the middle of the fifteenth century, when a German goldsmith named Johannes Gutenberg developed a printing press using movable metal type. Although printing with carved blocks already existed in Asia, Gutenberg's system allowed individual letters to be arranged, reused, and rearranged, making the mass production of texts possible for the first time in Europe.",
    "The effects were revolutionary. Books could now be produced quickly and cheaply, and their prices fell sharply. As a result, literacy spread beyond the clergy and nobility to merchants and ordinary citizens. Ideas that had once circulated slowly could now travel across the continent within weeks.",
    "One of the most significant consequences was the spread of new religious and scientific ideas. The Protestant Reformation owed much of its success to printed pamphlets, which allowed reformers to reach a wide audience. Similarly, scientists could share discoveries and build on one another's work far more efficiently than before.",
    "The printing press also helped standardise languages. As texts were printed in regional languages rather than Latin, particular spellings and grammar gradually became fixed, contributing to the emergence of national identities across Europe.",
    "Today, in an age of digital communication, it is easy to overlook the importance of this early technology. Yet the printing press laid the foundations for mass education and the free exchange of ideas, remaining one of the clearest examples of how a single invention can transform history."
   ],
   Q:[
    {t:'choice',a:'B',q:'Before printing, books were mainly copied by:',opts:['A) merchants','B) monks','C) kings','D) students']},
    {t:'choice',a:'B',q:'Gutenberg was originally a:',opts:['A) monk','B) goldsmith','C) teacher','D) merchant']},
    {t:'choice',a:'TRUE',q:'Printing with blocks existed in Asia before Gutenberg.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Gutenberg invented printing entirely on his own with no prior methods.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'After the press, book prices rose.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Literacy spread to ordinary citizens.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'hand',q:'Before printing, books were copied by ______.'},
    {t:'text',a:'type',q:'Gutenberg used movable metal ______.'},
    {t:'text',a:'reformation',q:'The Protestant ______ owed much to printed pamphlets.'},
    {t:'text',a:'standardise|standardize',q:'The press helped ______ languages.'},
    {t:'choice',a:'B',q:'Texts began to be printed in ______ rather than Latin:',opts:['A) Greek','B) regional languages','C) English only','D) code']},
    {t:'choice',a:'TRUE',q:'The press contributed to national identities.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Scientists could share discoveries more efficiently.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'The printing press had little long-term impact.',opts:['TRUE','FALSE','NOT GIVEN']}
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
   transcript:"Good morning, and welcome to the university library. I'm David, the head librarian. The library is open from eight in the morning until eleven at night on weekdays. On Saturdays, we close a little earlier, at six. Undergraduate students can borrow up to ten books at a time, while postgraduates can take out fifteen. Books are normally loaned for three weeks. Please note that if you return a book late, there is a fine of twenty pence per day. The ground floor is a social study area where talking is allowed, but the first and second floors are strictly silent zones. Computers are available on the first floor, next to the printing room. If you need help, visit the help desk near the main entrance.",
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
   transcript:"Thank you all for signing up to volunteer at this year's city marathon. Volunteers should arrive by seven o'clock in the morning, one hour before the race begins at eight. You will be given a bright yellow T-shirt, which you must wear at all times so runners can identify you. Most of you will be working at the water stations, handing out bottles to runners. It is important to stand behind the table and not step onto the course. Lunch will be provided free of charge, and there is a rest area near the finish line. If there is a medical emergency, do not try to help yourself; instead, call the medical team using the number on your badge. The event finishes at around two in the afternoon.",
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
   transcript:"Come in, Sam. So, you wanted to discuss your essay on globalisation? Yes, I got a lower mark than I expected. Well, your ideas are good, but the main problem is structure. Your introduction doesn't clearly state your position. Should I add a thesis statement? Exactly. And each paragraph should focus on just one main idea. What about my examples? Your examples are strong, but you need to explain them more; don't just mention them. And the word count? You were slightly under; aim for at least two hundred and fifty words. Also, try to use more linking words to connect your ideas. When should I resubmit? Let's say by next Friday.",
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
   transcript:"Today we will look at the problem of plastic in our oceans. Every year, millions of tonnes of plastic waste enter the sea, much of it carried by rivers from inland cities. Once in the ocean, plastic does not disappear; instead, it slowly breaks into tiny fragments known as microplastics. These fragments are eaten by fish and other marine animals, and can eventually end up in the food we consume. One of the largest accumulations of ocean plastic is found in the Pacific, in an area often called the Great Pacific Garbage Patch, which covers a region several times the size of France. Solutions include reducing single-use plastics and improving waste collection. However, experts agree that prevention is far more effective than cleaning up plastic once it has entered the sea.",
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
  {title:'Two Languages, One Sharper Mind',
   paras:[
    "For a long time, raising a child with two languages was viewed with suspicion. Many parents and even educators believed that bilingualism would confuse young children and slow their development. Today, however, a growing body of research suggests the opposite: learning two languages from an early age offers considerable cognitive and social advantages.",
    "One of the most significant benefits concerns the brain itself. Studies using brain imaging have shown that bilingual individuals tend to have denser grey matter in regions associated with attention and memory. Constantly switching between two languages appears to act as a kind of mental exercise, strengthening what psychologists call the 'executive control system', which helps people focus on relevant information while ignoring distractions.",
    "The advantages are not limited to childhood. Remarkably, research indicates that bilingualism may delay the onset of dementia by several years. Although it does not prevent the disease, the mental flexibility built up over a lifetime of using two languages seems to make the brain more resilient.",
    "Bilingual children also tend to develop stronger social skills. Because they must constantly judge which language to use with whom, they become more sensitive to the perspectives of others. This ability, known as 'perspective-taking', is increasingly valuable in an interconnected world.",
    "Of course, bilingualism is not without its challenges. Bilingual children sometimes have a slightly smaller vocabulary in each individual language during their early years, though their combined vocabulary usually equals or exceeds that of monolingual children. Moreover, maintaining two languages requires consistent exposure and effort.",
    "Despite these challenges, experts increasingly agree that the benefits far outweigh the drawbacks."
   ],
   Q:[
    {t:'choice',a:'TRUE',q:'In the past, some people believed bilingualism was harmful to children.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Bilingual people always have a larger vocabulary in each language.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Bilingualism can completely prevent dementia.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Switching between languages strengthens attention and memory.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'NOT GIVEN',q:'Bilingual children are usually better at sports.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'matter',q:'Bilingual people tend to have denser grey ______.'},
    {t:'text',a:'perspective',q:"The ability to understand others' views is called ______-taking."},
    {t:'text',a:'exposure',q:'Maintaining two languages requires consistent ______ and effort.'},
    {t:'choice',a:'B',q:"The 'executive control system' helps people to:",opts:['A) learn faster','B) focus and ignore distractions','C) speak more languages','D) sleep better']},
    {t:'choice',a:'C',q:"The writer's overall view of bilingualism is that it is:",opts:['A) risky','B) confusing','C) beneficial','D) unclear']},
    {t:'text',a:'social',q:'Bilingual children may develop stronger ______ skills.'},
    {t:'text',a:'dementia',q:'Bilingualism may delay the onset of ______.'},
    {t:'choice',a:'B',q:"Bilingual children's combined vocabulary is usually:",opts:['A) smaller','B) equal or greater','C) irrelevant','D) unknown']}
   ]},
  {title:'The Language of Bees',
   paras:[
    "Among the many wonders of the natural world, few are as fascinating as the way honeybees communicate. Despite having a brain smaller than a grain of rice, bees are able to share remarkably precise information with one another, guiding their hive-mates to distant sources of food.",
    "The key to this communication is a behaviour known as the 'waggle dance'. When a forager bee discovers a rich patch of flowers, it returns to the hive and performs a series of movements on the honeycomb. By waggling its body and moving in a figure-of-eight pattern, the bee conveys both the direction and the distance of the food source. The angle of the dance indicates the direction relative to the sun, while the duration of the waggle signals how far away the food lies.",
    "This discovery, made by the Austrian scientist Karl von Frisch in the twentieth century, was initially met with scepticism. Many found it hard to believe that an insect could communicate such detailed information. However, decades of careful experiments have confirmed that other bees do indeed use the dance to locate food.",
    "Interestingly, the waggle dance is not the only signal bees use. They also rely heavily on chemical messages called pheromones. For example, when a hive is threatened, guard bees release an alarm pheromone that alerts the colony to danger.",
    "Scientists believe that studying bee communication may have practical benefits beyond biology. Some researchers are exploring how the efficient way bees share information could inspire better designs for computer networks and even swarms of small robots.",
    "Sadly, bee populations around the world are declining, threatened by pesticides, disease and habitat loss. Since bees pollinate a large proportion of the crops humans depend on, protecting them safeguards our own food supply."
   ],
   Q:[
    {t:'choice',a:'B',q:'The waggle dance tells other bees:',opts:['A) the colour of flowers','B) the direction and distance of food','C) the time of day','D) the number of bees']},
    {t:'choice',a:'C',q:'The angle of the dance is measured relative to:',opts:['A) the hive','B) the queen','C) the sun','D) the wind']},
    {t:'choice',a:'C',q:"Karl von Frisch's discovery was at first:",opts:['A) widely accepted','B) ignored','C) met with scepticism','D) kept secret']},
    {t:'choice',a:'TRUE',q:'Bees can communicate the distance of a food source.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Bees only use dancing to communicate.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Alarm pheromones warn the colony of danger.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'NOT GIVEN',q:'Bee communication has already been used to build working robots.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'pheromone|pheromones',q:'When threatened, guard bees release an alarm ______.'},
    {t:'text',a:'habitat',q:'Bee populations decline due to pesticides, disease and ______ loss.'},
    {t:'text',a:'pollinate',q:'Bees ______ many of the crops humans rely on.'},
    {t:'text',a:'pheromones|pheromone',q:'Bees also rely on chemical messages called ______.'},
    {t:'choice',a:'B',q:'Studying bees may inspire designs for:',opts:['A) new pesticides','B) computer networks and robots','C) larger hives','D) faster cars']},
    {t:'text',a:'food',q:'Protecting bees safeguards our own ______ supply.'}
   ]},
  {title:'The Rise of Remote Work',
   paras:[
    "Over the past decade, and especially since the global pandemic, working from home has shifted from a rare privilege to a common arrangement. Millions of employees who once commuted daily to an office now carry out their duties from a spare room or kitchen table. This transformation has brought both opportunities and challenges.",
    "For many workers, the benefits are considerable. Without a daily commute, employees save time and money, and often report a better work-life balance. Employers, too, can benefit, as remote work allows them to reduce office costs and recruit talent from anywhere in the world, rather than being limited to a single city.",
    "However, remote work is not without drawbacks. Some employees find it difficult to separate their professional and personal lives, leading to longer hours and, in some cases, burnout. Others miss the social interaction of an office, feeling isolated and disconnected from colleagues.",
    "Collaboration can also suffer, as spontaneous conversations that spark ideas are harder to replicate over video calls. The impact varies from person to person. Studies suggest that experienced employees who value independence tend to thrive when working remotely, whereas younger workers, who benefit from learning by observing others, may struggle.",
    "For this reason, many companies have adopted a 'hybrid' model, combining days in the office with days at home. As technology continues to improve, remote work is likely to remain a permanent feature of the modern workplace. The challenge for organisations is to capture its benefits while minimising its disadvantages."
   ],
   Q:[
    {t:'choice',a:'TRUE',q:'Working from home became more common after the pandemic.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Remote work always increases costs for employers.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Remote workers can be recruited from anywhere.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'All employees prefer working from home.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'money',q:'Without commuting, employees save time and ______.'},
    {t:'text',a:'burnout',q:'Some workers experience ______ from longer hours.'},
    {t:'text',a:'observing|observe',q:'Younger workers benefit from learning by ______ others.'},
    {t:'text',a:'hybrid',q:'Many companies have adopted a ______ model.'},
    {t:'choice',a:'B',q:'A drawback of remote work is:',opts:['A) shorter hours','B) isolation','C) lower costs','D) more commuting']},
    {t:'choice',a:'B',q:'Employees who tend to thrive value:',opts:['A) money','B) independence','C) supervision','D) commuting']},
    {t:'choice',a:'TRUE',q:'Collaboration can suffer with remote work.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Spontaneous conversations are easier over video calls.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Remote work is likely to disappear soon.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The hybrid model combines office and home working.',opts:['TRUE','FALSE','NOT GIVEN']}
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
   transcript:"Thanks for calling Riverside Community College. Let me tell you about our evening cookery course. The course runs for eight weeks, every Tuesday, starting on the third of September. Classes begin at half past six and finish at nine. The full course costs ninety pounds, though members of the college pay a reduced rate of seventy pounds. You will need to bring an apron and a set of containers to take your food home; all other ingredients are provided. The classes are held in the kitchen on the second floor of the main building. Please note that places are limited to twelve students, so early booking is advised. To reserve a place, you can pay online or by phone, but not by cheque.",
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
   transcript:"Welcome to Blackwood Nature Reserve. Before we begin, a few points. The reserve is home to more than two hundred species of birds, as well as deer and foxes. Please keep to the marked paths, as wandering off can damage the fragile habitat. The main trail is about five kilometres long and takes roughly two hours to complete. Halfway along, you will find a wooden hide where you can watch birds without disturbing them. Remember to bring binoculars if you have them. Dogs are welcome but must be kept on a lead at all times. There are no bins in the reserve, so please take all your litter home. Finally, the visitor centre, where you can buy hot drinks and maps, closes at five o'clock.",
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
   transcript:"Have you finished planning the biology field trip, Tom? Almost. We are going to the coast to study rock pools. Sounds great. When are we leaving? The coach departs at eight sharp, so don't be late. How long is the journey? About two hours each way, so we will arrive around ten. What should we bring? Waterproof boots are essential, and a packed lunch, since there is no cafe nearby. Do we need to collect any samples? No, we are not allowed to remove anything; just take photographs and notes. And the weather? It might rain, so bring a waterproof jacket too. We will be back by five.",
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
   transcript:"Today's topic is urbanisation, the process by which more and more people move from the countryside to cities. For the first time in history, over half the world's population now lives in urban areas, and this figure is expected to rise further. Cities offer clear advantages, including better job opportunities, education, and healthcare. However, rapid urbanisation also creates serious problems. As populations swell, cities struggle to provide enough housing, leading to overcrowding and informal settlements. Traffic congestion and air pollution worsen, while pressure on water and electricity increases. Planners argue that the solution lies in designing sustainable cities with efficient public transport, green spaces, and energy-efficient buildings.",
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
  {title:'The Extraordinary Octopus',
   paras:[
    "The octopus is among the most extraordinary creatures in the ocean. Belonging to a group of animals known as cephalopods, which also includes squid and cuttlefish, the octopus has fascinated scientists for centuries with its intelligence and remarkable abilities.",
    "Perhaps the most striking feature of the octopus is its capacity for camouflage. Using special cells in its skin, an octopus can change colour and even texture within seconds, blending seamlessly into its surroundings. This ability serves both to hide from predators and to ambush prey. Some species can also mimic other animals, such as venomous fish, to deter attackers.",
    "The octopus is also surprisingly intelligent. In laboratory experiments, octopuses have learned to open jars, navigate mazes, and even recognise individual human faces. Unusually, much of their nervous system is located not in the brain but in their arms, each of which can act with a degree of independence.",
    "Reproduction, however, marks the end of an octopus's life. After laying eggs, the female guards them without eating, and dies soon after they hatch. Males, too, live only a short time after mating. As a result, most octopuses survive for just one or two years.",
    "Despite their short lives, octopuses continue to intrigue researchers, who believe that studying them may reveal new insights into intelligence itself."
   ],
   Q:[
    {t:'choice',a:'B',q:'The octopus belongs to a group called:',opts:['A) fish','B) cephalopods','C) mammals','D) reptiles']},
    {t:'choice',a:'TRUE',q:'An octopus can change colour within seconds.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Camouflage is used only to hide from predators.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some octopuses can mimic other animals.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Octopuses have failed to recognise human faces.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'cuttlefish',q:'The group also includes squid and ______.'},
    {t:'text',a:'arms|arm',q:"Much of the octopus's nervous system is in its ______."},
    {t:'text',a:'eating|eat',q:'After laying eggs, the female guards them without ______.'},
    {t:'choice',a:'A',q:'Most octopuses live for:',opts:['A) 1–2 years','B) 5 years','C) 10 years','D) 20 years']},
    {t:'choice',a:'B',q:'In labs, octopuses have learned to:',opts:['A) sing','B) open jars','C) fly','D) swim faster']},
    {t:'choice',a:'FALSE',q:'Males live a long time after mating.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Each octopus arm can act with some independence.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Scientists think octopuses may reveal insights into intelligence.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The History of Tea',
   paras:[
    "Tea is the most widely consumed drink in the world after water, enjoyed by billions of people every day. Its origins lie in ancient China, where, according to legend, it was discovered by the emperor Shen Nong around 2737 BC when leaves from a wild tree drifted into his boiling water.",
    "For centuries, tea remained largely a Chinese product, valued both as a medicine and as a refreshing drink. It gradually spread to neighbouring countries such as Japan, where elaborate tea ceremonies developed, reflecting values of harmony and respect.",
    "Tea reached Europe in the seventeenth century through trade, and quickly became fashionable, particularly in Britain. There, it was initially an expensive luxury enjoyed only by the wealthy. Over time, however, prices fell and tea became a national drink. The British custom of afternoon tea remains popular to this day.",
    "The global demand for tea had significant historical consequences. To satisfy this demand, Britain established vast tea plantations in its colonies, particularly in India and Sri Lanka, transforming the economies of those regions. Today, these countries remain among the world's largest tea producers.",
    "Modern research suggests that tea may offer genuine health benefits, as it contains antioxidants believed to support the body. Whether consumed for its taste or as part of a daily ritual, tea continues to bring people together across cultures."
   ],
   Q:[
    {t:'choice',a:'FALSE',q:'Tea is the most consumed drink in the world.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Tea originated in China.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Tea was valued as a medicine in China.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Tea was cheap when it first reached Britain.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'shen',q:'Tea was discovered by the emperor ______ Nong.'},
    {t:'text',a:'ceremonies|ceremony',q:'In Japan, elaborate tea ______ developed.'},
    {t:'text',a:'sri lanka|srilanka',q:'Britain set up tea plantations in India and ______.'},
    {t:'text',a:'antioxidants|antioxidant',q:'Tea contains ______ believed to support the body.'},
    {t:'choice',a:'C',q:'Tea reached Europe in the:',opts:['A) 15th century','B) 16th century','C) 17th century','D) 18th century']},
    {t:'choice',a:'C',q:'Afternoon tea is a custom associated with:',opts:['A) Japan','B) China','C) Britain','D) India']},
    {t:'choice',a:'TRUE',q:'India and Sri Lanka are among the largest tea producers.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Tea ceremonies reflect harmony and respect.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Tea is only enjoyed for its taste.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'The Promise of Renewable Energy',
   paras:[
    "As concerns about climate change intensify, the world is increasingly turning to renewable sources of energy. Unlike fossil fuels such as coal and oil, which release harmful gases and will eventually run out, renewable sources are naturally replenished and produce little or no pollution.",
    "The most established form of renewable energy is hydropower, which generates electricity from flowing water, usually by building dams across rivers. Although efficient, large dams can disrupt ecosystems and displace communities. Wind power, by contrast, has grown rapidly. Turbines placed on land or out at sea convert the wind into electricity, though some people object to their appearance and the noise they produce.",
    "Solar power is perhaps the most promising source of all. The amount of energy the sun delivers to the earth in a single hour exceeds the entire world's annual consumption. As the cost of solar panels has fallen, solar power has become affordable for households. Its main limitation is that it cannot generate electricity at night, though improvements in battery storage are gradually overcoming this problem.",
    "Despite rapid progress, renewable energy still faces obstacles. It often requires significant initial investment, and some sources are intermittent, depending on weather conditions. For this reason, many experts argue that a mix of different renewable sources, supported by better storage, offers the best path forward.",
    "Governments around the world are setting ambitious targets to reduce their reliance on fossil fuels. If these goals are met, renewable energy could not only slow climate change but also create millions of new jobs."
   ],
   Q:[
    {t:'choice',a:'TRUE',q:'Fossil fuels will eventually run out.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Renewable sources produce large amounts of pollution.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Large dams can displace communities.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Everyone likes the appearance of wind turbines.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'water',q:'Hydropower generates electricity from flowing ______.'},
    {t:'text',a:'sea',q:'Wind turbines can be placed on land or out at ______.'},
    {t:'text',a:'night',q:'Solar power cannot generate electricity at ______.'},
    {t:'text',a:'storage',q:'Improvements in battery ______ are helping.'},
    {t:'choice',a:'B',q:'The sun delivers to earth in one hour more than the world uses in a:',opts:['A) day','B) year','C) month','D) hour']},
    {t:'choice',a:'C',q:'A limitation of solar power is that it:',opts:['A) is expensive now','B) works only at night','C) cannot work at night','D) causes pollution']},
    {t:'choice',a:'C',q:'Many experts recommend:',opts:['A) one single source','B) only coal','C) a mix of renewable sources','D) no change']},
    {t:'choice',a:'TRUE',q:'Renewable energy often needs significant initial investment.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some renewable sources depend on the weather.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Renewable energy could create new jobs.',opts:['TRUE','FALSE','NOT GIVEN']}
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
   transcript:"Hello, I'm calling about the two-bedroom flat you advertised. Certainly. The flat is on Maple Street, number forty-two. The monthly rent is seven hundred and fifty pounds, and that includes water but not electricity. There is a deposit of one month's rent required before moving in. The flat is available from the first of October. It comes furnished, with a washing machine and a fridge, though you would need to provide your own microwave. The nearest bus stop is just a two-minute walk away. If you would like to view it, we hold viewings on Saturday mornings. Please bring some form of identification, such as a passport.",
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
   transcript:"Welcome to the Saturday farmers market. The market runs every Saturday from eight in the morning until one in the afternoon. You'll find more than forty stalls here, selling everything from fresh vegetables to homemade bread. Our most popular stall is the cheese stall, located near the main entrance. If you're looking for something to eat, the hot food area is at the back, next to the car park. Please note that most stalls only accept cash, so there is a cash machine by the information desk. We also run free cookery demonstrations every hour in the marquee. Finally, we encourage visitors to bring their own bags, as we are trying to reduce plastic waste.",
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
   transcript:"Have you started the psychology assignment on memory, Priya? A little. We have to design a simple experiment, testing how well people remember a list of words. I was thinking we could compare young and older participants. Good idea. How many words should we use? Let's use twenty words; that should be enough. And how many participants? I think thirty would give us reliable results. Okay. Where will we run it? The library study rooms should be quiet enough. When is it due? We have to submit the report by the thirtieth of November. Let's meet on Thursday to start writing.",
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
   transcript:"Today we will explore how human memory works. Memory is often divided into three stages: encoding, storage, and retrieval. Encoding is the process of taking in information; storage is keeping it over time; and retrieval is bringing it back when needed. Psychologists also distinguish between short-term memory, which holds a small amount of information for a few seconds, and long-term memory, which can store vast amounts for years. One famous finding is that short-term memory can hold only about seven items at once. To move information into long-term memory, repetition and meaning are key; we remember things better when we connect them to what we already know. Interestingly, sleep also plays an important role, as the brain consolidates memories while we rest. Stress, on the other hand, can seriously impair our ability to recall information.",
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
  {title:'The History of Chocolate',
   paras:[
    "Chocolate, one of the world's most beloved treats, has a history stretching back thousands of years. It originates from the cacao tree, native to the tropical regions of Central and South America. The ancient Maya and later the Aztecs prized cacao so highly that they used the beans as a form of currency. Rather than the sweet bars we know today, they consumed chocolate as a bitter, frothy drink, often flavoured with spices such as chilli.",
    "When Spanish explorers brought cacao back to Europe in the sixteenth century, it was initially reserved for the wealthy. Europeans began adding sugar and honey to counter its bitterness, transforming it into a fashionable luxury drink enjoyed at royal courts. For a long time, chocolate remained expensive and difficult to produce.",
    "This changed during the Industrial Revolution. New machinery made it possible to process cacao on a large scale, dramatically lowering prices. In 1847, a British company produced the first solid chocolate bar, and soon afterwards, Swiss inventors developed a method for making smooth milk chocolate.",
    "Today, chocolate is a global industry worth billions. However, it faces challenges, including concerns about the working conditions of cacao farmers, many of whom earn very little. As a result, movements promoting fair trade have grown, encouraging consumers to buy chocolate that supports farmers more fairly."
   ],
   Q:[
    {t:'choice',a:'TRUE',q:'Chocolate comes from the cacao tree, native to Central and South America.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'The Aztecs used cacao beans as money.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Ancient peoples ate chocolate mainly as sweet bars.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Chocolate was cheap when it first arrived in Europe.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'sugar',q:'Europeans added ______ and honey to chocolate.'},
    {t:'text',a:'chilli|chili',q:'The ancient drink was often flavoured with ______.'},
    {t:'text',a:'1847',q:'The first solid chocolate bar was made in ______.'},
    {t:'text',a:'milk',q:'Swiss inventors developed smooth ______ chocolate.'},
    {t:'choice',a:'B',q:'Chocolate prices fell because of:',opts:['A) royal courts','B) new machinery','C) fair trade','D) spices']},
    {t:'choice',a:'B',q:'The Aztecs used cacao beans as:',opts:['A) medicine','B) currency','C) decoration','D) fuel']},
    {t:'choice',a:'TRUE',q:'Chocolate is now a global industry worth billions.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'All cacao farmers earn high wages.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Fair trade encourages support for farmers.',opts:['TRUE','FALSE','NOT GIVEN']}
   ]},
  {title:'Life in the Desert',
   paras:[
    "Deserts, defined as regions receiving less than 250 millimetres of rain per year, cover about one-fifth of the Earth's land surface. Although often imagined as lifeless seas of sand, deserts are in fact home to a surprising variety of plants and animals, each remarkably adapted to survive in one of the planet's harshest environments.",
    "The greatest challenge in the desert is the lack of water. Many desert plants, such as the cactus, have developed thick, fleshy stems that store water for long periods, along with spines instead of leaves to reduce water loss. Animals, too, have evolved clever strategies. The camel can survive for days without drinking, storing fat in its hump which it converts to energy. Smaller creatures often avoid the fierce daytime heat by burrowing underground and emerging only at night.",
    "Temperature is another extreme feature of desert life. While days can be scorching, nights are often surprisingly cold, because the dry air and lack of cloud cover allow heat to escape rapidly once the sun sets.",
    "Despite their harshness, deserts are increasingly under threat. Human activities, including farming, are damaging fragile desert ecosystems. Meanwhile, some regions once fertile are turning into desert, a process known as desertification, driven partly by climate change and poor land management."
   ],
   Q:[
    {t:'choice',a:'B',q:'A desert receives less than how much rain per year?',opts:['A) 100mm','B) 250mm','C) 500mm','D) 1000mm']},
    {t:'choice',a:'TRUE',q:'Deserts cover about one-fifth of the Earth’s land.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Deserts contain no living things.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'stems|stem',q:'Cacti store water in their ______.'},
    {t:'text',a:'spines|spine',q:'Cacti have ______ instead of leaves.'},
    {t:'text',a:'fat',q:'Camels store ______ in their hump.'},
    {t:'text',a:'burrowing|burrow',q:'Small animals often avoid the heat by ______ underground.'},
    {t:'text',a:'cold',q:'Desert nights are often ______.'},
    {t:'choice',a:'B',q:'Desert nights are cold because:',opts:['A) it rains','B) heat escapes rapidly','C) animals hide','D) winds blow']},
    {t:'choice',a:'TRUE',q:'The camel can survive days without drinking.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Human farming can damage desert ecosystems.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'desertification',q:'The spread of desert is called ______.'},
    {t:'text',a:'climate',q:'Desertification is partly driven by ______ change.'}
   ]},
  {title:'Introverts and Extroverts',
   paras:[
    "Few ideas in psychology are as widely discussed as the distinction between introverts and extroverts. The terms, first popularised by the psychologist Carl Jung, describe two different ways in which people gain and lose energy. Extroverts tend to feel energised by social interaction, thriving in busy, stimulating environments. Introverts, by contrast, recharge through solitude and can find too much social activity draining.",
    "It is a common misconception that introverts are simply shy or antisocial. In reality, many introverts enjoy socialising but need time alone afterwards to recover. Similarly, extroverts are not necessarily more confident; they simply seek out stimulation more actively. Most people, in fact, fall somewhere between the two extremes, a position sometimes called 'ambivert'.",
    "Research suggests these tendencies have a biological basis. Studies indicate that introverts' brains may be more sensitive to stimulation, which is why they can feel overwhelmed in noisy settings. Extroverts, needing more stimulation to feel satisfied, are drawn to excitement and novelty.",
    "Understanding these differences has practical value, particularly in the workplace. Traditional open-plan offices may actually reduce the productivity of introverted employees, who often work best in quiet spaces. Forward-thinking companies now try to provide a mix of environments, recognising that a diverse team often produces the best results."
   ],
   Q:[
    {t:'text',a:'carl',q:'The terms were popularised by ______ Jung.'},
    {t:'choice',a:'B',q:'Extroverts gain energy from:',opts:['A) solitude','B) social interaction','C) sleep','D) reading']},
    {t:'text',a:'solitude',q:'Introverts recharge through ______.'},
    {t:'choice',a:'FALSE',q:'Introverts are always shy and antisocial.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Extroverts are necessarily more confident.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'text',a:'ambivert',q:'A person between the two types is called an ______.'},
    {t:'text',a:'stimulation',q:"Introverts' brains may be more sensitive to ______."},
    {t:'choice',a:'B',q:'Extroverts are drawn to:',opts:['A) quiet','B) excitement and novelty','C) solitude','D) routine']},
    {t:'text',a:'productivity',q:'Open-plan offices may reduce introverts’ ______.'},
    {t:'text',a:'quiet',q:'Introverts often work best in ______ spaces.'},
    {t:'choice',a:'TRUE',q:'Introverts can feel overwhelmed in noisy settings.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'TRUE',q:'Some introverts enjoy socialising.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'FALSE',q:'Most people are pure introverts or pure extroverts.',opts:['TRUE','FALSE','NOT GIVEN']},
    {t:'choice',a:'B',q:'The passage suggests companies should provide:',opts:['A) only open offices','B) a mix of environments','C) no offices','D) louder spaces']}
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
}

];
