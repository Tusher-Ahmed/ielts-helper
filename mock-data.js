/* ================= IELTS FULL MOCK DATA (3 tests) =================
   Each mock: Listening (4 sections x10 = 40), Reading (3 passages = 40), Writing (Task1 + Task2)
   Question item: {t:'text'|'choice', a:'answer|alt', q:'text', opts:[...] (choice only)}
   Numbering is added automatically by the engine. */
const MOCKS=[

/* ===================== MOCK 1 ===================== */
{
 name:'Mock 1',
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
  task1:"The line graph below shows the number of international students enrolled at a university between 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people believe that technology has made our lives more complicated, while others think it has made life easier. Discuss both views and give your own opinion. Write at least 250 words."
 }
},

/* ===================== MOCK 2 ===================== */
{
 name:'Mock 2',
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
  task1:"The bar chart below shows the percentage of people who used four different modes of transport in a city in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"More people are now working from home rather than in an office. Do the advantages of this development outweigh the disadvantages? Write at least 250 words."
 }
},

/* ===================== MOCK 3 ===================== */
{
 name:'Mock 3',
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
  task1:"The pie charts below show the proportion of household spending across five categories in a country in 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
  task2:"Some people think that governments should spend money on public services rather than on the arts. To what extent do you agree or disagree? Write at least 250 words."
 }
}

];
