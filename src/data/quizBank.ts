import { MCQQuestion, ShortAnswerQuestion, EssayPrompt } from '../types';

export const quiz1Questions: ShortAnswerQuestion[] = [
  {
    id: 'q1-1',
    source: 'Quiz 1',
    question: 'Why is it useful to use historical, ethnographic, archaeological and oral sources when studying history?',
    modelAnswer:
      'Combining historical written texts, ethnographic accounts, archaeological physical evidence, and Indigenous oral histories allows historians to triangulate multiple perspectives and overcome the inherent Eurocentric biases and omissions of written colonial archives. It provides a complete, culturally grounded understanding of Indigenous societies on their own epistemological terms.',
    keyPoints: [
      'Triangulates evidence across diverse methodologies',
      'Counterbalances Eurocentric biases and deliberate omissions in colonial written records',
      'Validates Indigenous oral traditions as rigorous historical archives',
      'Provides physical/material context via archaeology'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Do not just say "it gives more information". Explain how it counters European written bias and respects Indigenous oral epistemology.'
  },
  {
    id: 'q1-2',
    source: 'Quiz 1',
    question: 'Define System Justification Theory.',
    modelAnswer:
      'System Justification Theory posits that humans are personally, socially, and systemically motivated to defend and rationalize existing social, economic, and political arrangements, justifying these systems even when they operate directly against their own individual and collective self-interest.',
    keyPoints: [
      'Motivated to defend/rationalize existing social, economic, and political arrangements',
      'Operates even against individual/collective self-interest',
      'Protects perceived or real privilege and rewards conformity while punishing departures'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Do not use a generic definition. Dr. Miller requires emphasizing that people justify the system even when it works AGAINST their own interests.'
  },
  {
    id: 'q1-3',
    source: 'Quiz 1',
    question: 'Define Epistemology and state why it is important to the study of history.',
    modelAnswer:
      'Epistemology is the philosophical study of the nature, origins, and limits of knowledge—how we know what we know. It is crucial to history because it determines whose knowledge systems, evidence standards, and archives (such as oral traditions versus written alphabetic documents) are deemed legitimate and authoritative.',
    keyPoints: [
      'Definition: philosophical study of knowledge (how we know what we know)',
      'Importance to history: dictates what counts as valid historical evidence',
      'Challenges the colonial hierarchy that privileges written text over oral/embodied knowledge'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Students often forget the second half of the question! You must explicitly state why it matters for studying history.'
  },
  {
    id: 'q1-4',
    source: 'Quiz 1',
    question: 'Identify two lessons from the Haida story Yaahi Sglaalaanga (A Raven’s Song).',
    modelAnswer:
      'Two key lessons are: (1) the interconnectedness and mutual accountability between humans, animals, and supernatural beings where arrogance brings catastrophe; and (2) that transformation, cleverness, and adaptability must be guided by respect and communal balance rather than selfish greed.',
    keyPoints: [
      'Relational accountability between human and non-human realms',
      'Consequences of arrogance, over-harvesting, or greed',
      'Trickster/transformer role teaching ethical conduct through consequence'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Be specific about the ethical teachings regarding reciprocity and consequences of greed.'
  },
  {
    id: 'q1-5',
    source: 'Quiz 1',
    question: 'How did Richard Hakluyt justify British settlement in North America?',
    modelAnswer:
      'In his 1584 "Discourse on Western Planting," Hakluyt argued British colonization was necessary to counter Spanish Catholic global dominance, spread Protestantism, generate trade wealth for the Crown, and export England’s unemployed "surplus" vagrant population.',
    keyPoints: [
      'Geopolitical rivalry against Catholic Spain (curbing Spanish empire)',
      'Spreading Protestant Christianity',
      'Merchant capitalism and accessing naval resources',
      'Exporting excess domestic unemployed poor'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Avoid vague answers like "he wanted money". Mention the geopolitical/religious rivalry with Spain and the domestic social problem of surplus poor.'
  },
  {
    id: 'q1-6',
    source: 'Quiz 1',
    question: 'Why did the Valladolid debates take place?',
    modelAnswer:
      'The Valladolid debates took place in 1550 because King Charles V and the Spanish Crown faced an acute moral and theological crisis regarding the horrific atrocities, mass deaths, and enslavement of Indigenous peoples under the encomienda system in the Americas, prompting debate over whether Indigenous peoples possessed full human rights or were natural slaves.',
    keyPoints: [
      'Moral crisis over Spanish atrocities and catastrophic Indigenous demographic collapse',
      'Re-evaluating the legality/morality of the encomienda system and forced conversion',
      'Debate between Bartolomé de las Casas (rational humans) and Juan Ginés de Sepúlveda (natural slaves)'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Focus on WHY it was convened: Spanish conscience/Crown crisis over reports of cruelty and genocide.'
  },
  {
    id: 'q1-7',
    source: 'Quiz 1',
    question: 'What is the difference between matrilineal and patrilineal kinship?',
    modelAnswer:
      'In a matrilineal kinship system, descent, clan membership, and leadership rights are traced exclusively through the mother’s bloodline (where the father’s relatives are not considered close kin), whereas in a patrilineal system, lineage, clan identity, and hereditary duties are passed down through the father’s line.',
    keyPoints: [
      'Matrilineal: descent, clan, and inheritance through the mother',
      'Patrilineal: descent, clan, and inheritance through the father',
      'Directly governs who is considered kin versus non-kin'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Ensure you clearly define both sides of the comparison.'
  },
  {
    id: 'q1-8',
    source: 'Quiz 1',
    question: 'Identify two things that kinship governs/determines in Indigenous societies.',
    modelAnswer:
      'Kinship governs political leadership appointments and clan representation within tribal councils, as well as the equitable allocation and access rights to traditional hunting, gathering, and agricultural territories.',
    keyPoints: [
      'Any two of: Political representation/council roles',
      'Territorial resource distribution (hunting/planting lands)',
      'Marriage exogamy and lineage rules',
      'Legal justice, dispute resolution, and diplomatic treaties'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Name two clear, concrete institutional functions (politics, land allocation, marriage, diplomacy).'
  },
  {
    id: 'q1-9',
    source: 'Quiz 1',
    question: 'What role did papal bulls play in the colonization of the Americas?',
    modelAnswer:
      'Papal bulls provided formal ecclesiastical and legal justification for European Christian monarchs to invade, dispossess, and claim sovereignty over non-Christian Indigenous lands in the Americas, explicitly authorizing the subjugation and reduction of non-Christians to perpetual servitude.',
    keyPoints: [
      'Provided divine/theological justification for territorial theft',
      'Stripped non-Christian Indigenous peoples of sovereign land title',
      'Authorized enslavement and conquest (e.g., Dum Diversas, Romanus Pontifex, Inter Caetera)'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Remember slide 29: Dr. Miller specifies that Papal Bulls were explicitly used to justify the theft of Indigenous lands in the Americas.'
  }
];

export const quiz2Questions: ShortAnswerQuestion[] = [
  {
    id: 'q2-1',
    source: 'Quiz 2',
    question: 'What were the 1649 “mourning wars” of the Haudenosaunee and what problem were they attempting to address?',
    modelAnswer:
      'The 1649 mourning wars were raiding expeditions undertaken by the Haudenosaunee to capture prisoners who were ritually adopted into clans to replace family members lost to catastrophic European smallpox epidemics, thereby appeasing the grief of clan mothers and replenishing their depleted population.',
    keyPoints: [
      'Raids to capture prisoners for ritual adoption into clans',
      'Addressed massive population loss caused by European smallpox epidemics',
      'Sought to console grieving clan mothers and maintain spiritual and demographic balance',
      'Resulted in the destruction and dispersal of the Huron/Wendat Confederacy'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Make sure to address both parts: WHAT they were (adoption raids) and WHAT problem they addressed (replacing dead from smallpox epidemics).'
  },
  {
    id: 'q2-2',
    source: 'Quiz 2',
    question: 'How do the English justify colonialism differently from the Spanish?',
    modelAnswer:
      'While the Spanish justified conquest through Catholic Papal Bulls, divine mandate, and Christian conversion, the post-Reformation English rejected papal authority and instead justified colonization through legal theories of vacuum domicilium (claiming uncultivated land was legally empty) and secular social contract theories ("State of Nature").',
    keyPoints: [
      'Spanish: Papal Bulls, conversion mandate, Reconquista ideology',
      'English: Vacuum domicilium (agricultural land use / enclosure)',
      'English: State of Nature (Hobbes/Locke) and Protestant rivalry/Black Legend'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Contrast Catholic papal authority with English agricultural enclosure / vacuum domicilium.'
  },
  {
    id: 'q2-3',
    source: 'Quiz 2',
    question: 'What was the Great Dying?',
    modelAnswer:
      'The Great Dying was a catastrophic epidemic between 1616 and 1619 that killed roughly 90% of the Indigenous population on the New England east coast, fundamentally shifting inter-tribal power balances and leaving empty cleared lands that cleared the way for English settlement.',
    keyPoints: [
      'Time period: 1616–1619',
      'Scope: roughly 90% mortality among East Coast Indigenous nations',
      'Cause: European infectious diseases (likely plague/black death)',
      'Impact: destabilized power relationships and paved the way for English settlement'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Quote Dr. Miller’s key stats: 1616–1619, 90% mortality, and its role in enabling Plymouth/Mass Bay colonies.'
  },
  {
    id: 'q2-4',
    source: 'Quiz 2',
    question: 'Define middle ground diplomacy between the French and Indigenous Peoples – what was the irony of this system?',
    modelAnswer:
      'Middle ground diplomacy was a system of mutual accommodation in the Great Lakes where neither side could militarily dominate, forcing the French to adopt Indigenous diplomatic customs including gift exchange and mediation. The irony was that French officials believed they were sovereign fathers ruling over subjects, while Indigenous nations actually held practical power and forced the French to conform to Indigenous protocols.',
    keyPoints: [
      'Definition: mutual accommodation born of military balance in Pays d’en Haut',
      'Required French to adopt Indigenous gift giving and alliance protocols',
      'Irony: French imagined themselves imperial rulers, but Indigenous nations dictated terms and held leverage'
    ],
    lengthGuide: '2 full sentences',
    commonPitfalls: 'Do not forget the IRONY! The irony is the disparity between French imperial delusions and Indigenous practical dominance.'
  },
  {
    id: 'q2-5',
    source: 'Quiz 2',
    question: 'Identify two causes of King Philip’s (Metacom’s) War.',
    modelAnswer:
      'Two primary causes were the relentless English land encroachment destroying Indigenous hunting grounds and cornfields with free-roaming livestock, and Plymouth Colony’s aggressive political subjugation of the Wampanoag, culminating in the trial and execution of three of Metacom’s men.',
    keyPoints: [
      'Rapid English settler expansion and destruction of habitat/cornfields by livestock',
      'Plymouth Colony violating sovereignty and executing Wampanoag men',
      'Metacom rejecting the subordinate alliance made by his predecessor Massasoit'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'State two clear structural causes (livestock/land encroachment and political subjugation/trial).'
  },
  {
    id: 'q2-6',
    source: 'Quiz 2',
    question: 'Identify two English Joint Stock companies that operated colonies in North America.',
    modelAnswer:
      'Two English Joint Stock companies were the Virginia Company (chartered in 1606 to establish Jamestown) and the Hudson’s Bay Company (incorporated in 1670 with monopoly rights over Rupert’s Land).',
    keyPoints: [
      'Virginia Company',
      'Hudson’s Bay Company (HBC)',
      '(Alternative acceptable: Massachusetts Bay Company)'
    ],
    lengthGuide: '1 full sentence',
    commonPitfalls: 'Ensure you name ENGLISH companies (not Dutch East India Company or French Cent-Associés).'
  },
  {
    id: 'q2-7',
    source: 'Quiz 2',
    question: 'Identify two reasons settler livestock created conflicts with Indigenous people in North America.',
    modelAnswer:
      'First, free-ranging European cattle and pigs routinely invaded and devastated unfenced Indigenous agricultural fields and clam beds; second, livestock trampled ecosystems, destroying natural beaver and deer habitats essential for Indigenous subsistence.',
    keyPoints: [
      'Devastated unfenced corn, squash, and bean crops and clam beds',
      'Destroyed beaver and deer habitats and introduced animal pathogens',
      'Settlers blamed Indigenous peoples when they killed trespassing animals'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Highlight that Indigenous fields were unfenced, and livestock destroyed wild hunting habitats.'
  },
  {
    id: 'q2-8',
    source: 'Quiz 2',
    question: 'Why did Indigenous peoples in New England see value in being “Subjects under the Same King”?',
    modelAnswer:
      'Indigenous leaders calculated that formal subject status under the British King created a legal direct covenant with the Crown, which they intended to use as legal protection to block local colonial governments and aggressive settlers from seizing their lands without royal permission.',
    keyPoints: [
      'Sought direct protection from the Crown against aggressive local colonial assemblies',
      'Used royal sovereignty as a diplomatic buffer to restrain settler encroachment',
      'Reflected Indigenous strategy of playing imperial authorities against local settlers'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Avoid assuming they wanted assimilation; it was a deliberate legal shield against predatory colonial settlers.'
  },
  {
    id: 'q2-9',
    source: 'Quiz 2',
    question: 'Define the Doctrine of Discovery.',
    modelAnswer:
      'The Doctrine of Discovery is a legal and religious principle asserted by European monarchs holding that the European "discovery" of non-Christian lands granted that European power ultimate sovereign ownership and title to the territory, demoting Indigenous nations to mere occupants lacking full property ownership.',
    keyPoints: [
      'Asserts European Christian discovery confers ultimate sovereignty/title',
      'Strips Indigenous peoples of full land ownership rights',
      'Treats Indigenous nations as mere temporary occupants on their ancestral lands'
    ],
    lengthGuide: '1-2 full sentences',
    commonPitfalls: 'Emphasize the distinction between European ultimate legal title and Indigenous demotion to mere occupancy.'
  }
];

export const inClassWritingPrompts: EssayPrompt[] = [
  // --- In-Class Writing 1 (Sep 24) ---
  {
    id: 'icw1-1',
    source: 'In-Class Writing 1',
    type: 'short',
    title: 'Lessons & Teachings of the Anishinaabe Flood Story',
    prompt: 'Discuss at least three lessons and teachings included in the Anishinaabe Flood Story.',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'The Anishinaabe Flood Story is not merely a tale of survival, but a foundational legal and ethical constitution that imparts essential teachings on humility, collective sacrifice, and human interdependence with the natural world.',
    outline: [
      {
        section: '1. Introduction & Setting',
        points: [
          'Introduce the flood story: Nanabozho and animals floating on a raft after the earth is flooded.',
          'State thesis: provides enduring lessons on humility, sacrifice, and non-human teachers.'
        ]
      },
      {
        section: '2. Teaching 1: Humility and Worth of the Smallest Beings',
        points: [
          'Large, powerful animals (Loon, Beaver, Otter) dive deep but fail to reach bottom.',
          'Wazhashk (the humble Muskrat) volunteers despite mockery.',
          'Lesson: physical strength and status do not equal spiritual power; humility succeeds where pride fails.'
        ]
      },
      {
        section: '3. Teaching 2: Sacrifice for the Collective Good',
        points: [
          'Muskrat returns floating to the surface, dead, with a tiny clump of mud clutched in its paw.',
          'Nanabozho breathes life into the soil on Turtle’s back to re-create Turtle Island.',
          'Lesson: creation and renewal require personal sacrifice for future generations.'
        ]
      },
      {
        section: '4. Teaching 3: Human Interdependence & Non-Human Teachers',
        points: [
          'Humans are the most pitiful and dependent creatures in creation; without animals and plants, humans cannot survive.',
          'Animals are elder brothers and teachers in ontology, not resources to exploit.',
          'Conclusion: serves as an environmental and social blueprint for living Mino-Bimaadiziwin (the good life).'
        ]
      }
    ],
    modelResponse:
      'The Anishinaabe Flood Story is a foundational philosophical and constitutional text that encodes essential legal, ecological, and ethical principles for living in proper relationship with creation. Far from being a simple myth, it articulates three profound teachings: the power of humility, the necessity of personal sacrifice for collective survival, and the ontological reality that humans are the most dependent of all beings.\n\nFirst, the narrative establishes that true strength lies in humility and persistence rather than size or outward power. When Nanabozho and the animals seek to re-create the world from their raft, the largest and most skilled swimmers—the loon, the beaver, and the otter—all plunge into the depths but surface exhausted and unsuccessful. It is only Wazhashk, the humble muskrat, often overlooked and underestimated, who volunteers to make the perilous journey. This teaches that every living creature possesses gifts necessary for the collective good, and that hubris is a fatal obstacle to spiritual accomplishment.\n\nSecond, the muskrat’s success demonstrates that renewal demands sacrifice. Wazhashk stays beneath the waters long past physical endurance and floats to the surface lifeless, yet with a tiny paw clenched around a speck of earth. By sacrificing its life, the muskrat enables Nanabozho and the turtle to expand the mud into Turtle Island. This sacrifice establishes a moral economy: life is reciprocal, and sustaining community across generations requires individuals to place the survival of the whole above personal self-interest.\n\nFinally, the story reorients human arrogance by showing that humans were utterly incapable of recreating the earth alone. Nanabozho, representing humanity, is dependent upon the knowledge, courage, and bodies of non-human relations. Animals are recognized as sovereign beings, teachers, and elder relations. In sum, the Anishinaabe Flood Story offers a blueprint for balance, establishing that humans must conduct themselves with profound respect, reciprocity, and reverence toward the living world.',
    gradingCriteria: [
      'Identifies and explains at least 3 distinct teachings (humility, sacrifice, animal teachers/interdependence).',
      'Provides specific narrative details (Muskrat/Wazhashk, Turtle Island, Nanabozho, Loon/Beaver).',
      'Connects teachings to broader Indigenous worldview and ethical behavior.'
    ]
  },
  {
    id: 'icw1-2',
    source: 'In-Class Writing 1',
    type: 'short',
    title: 'System Justification Theory & Three Enabling Narratives',
    prompt: 'Explain system justification theory and identify the problems related to at least three enabling narratives that support the way Indigenous history has been taught.',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'System Justification Theory explains how societies rationalize unjust colonial orders, relying on persistent enabling narratives—such as the pristine wilderness, the dying Indian, and the benevolent fur trade—to sanitize land dispossession and protect perceived settler legitimacy.',
    outline: [
      {
        section: '1. Theoretical Framework',
        points: [
          'Define System Justification Theory: psychological and systemic motivation to defend status quo arrangements even against self-interest.',
          'Explain how it operates to protect privilege and reward conformity.'
        ]
      },
      {
        section: '2. Enabling Narrative 1: The "Pristine Wilderness / Terra Nullius"',
        points: [
          'Myth that North America was untouched, empty wilderness before Europeans arrived.',
          'Problem: erases sophisticated Indigenous agriculture, forestry, engineering, and permanent urban centers like Cahokia and Hochelaga.'
        ]
      },
      {
        section: '3. Enabling Narrative 2: The "Vanishing / Dying Indian"',
        points: [
          'Myth that Indigenous demographic collapse was an inevitable natural tragedy due to disease or biological inferiority.',
          'Problem: obscures active biological warfare, genocidal policies, forced removals, and ongoing Indigenous resistance and survival.'
        ]
      },
      {
        section: '4. Enabling Narrative 3: The "Benevolent European Savior / Peaceful Fur Trade"',
        points: [
          'Myth that Canadian colonization was peaceful, polite, and based on fair barter without violence.',
          'Problem: conceals military blockades, hostage taking (Cartier), child kidnapping, and legal land theft under the Crown.'
        ]
      }
    ],
    modelResponse:
      'System Justification Theory posits that human beings are psychologically and socially motivated to defend, bolster, and rationalize existing political, economic, and social arrangements, even when those arrangements directly contradict their own moral standards or collective self-interest. In colonial settler societies like Canada, system justification operates through "enabling narratives"—deeply embedded cultural myths designed to legitimize historical land theft, exonerate the colonial state, and preserve settler innocence.\n\nThe first pervasive enabling narrative is the myth of the "Pristine Wilderness" or *terra nullius*. Standard historical textbooks have long portrayed North America prior to 1492 as an untamed, virgin wilderness populated only by sparse, nomadic hunter-gatherers. The profound problem with this narrative is that it erases thousands of years of sophisticated Indigenous land management, including controlled burns, fishing weirs, terraced gardens, and massive agricultural settlements such as Hochelaga and Wendake. By framing the continent as "empty," settler society rationalizes its appropriation of land as bringing order to nature rather than dispossessing sovereign nations.\n\nA second enabling narrative is the trope of the "Vanishing Indian." This narrative portrays the catastrophic demographic collapse of Indigenous populations as an inevitable biological tragedy driven passively by European diseases, conveniently casting Indigenous peoples as relics of the past destined to disappear before modern civilization. This obscures how colonial violence, forced starvation, warfare, and deliberate displacement created the conditions under which diseases ran rampant, while ignoring vibrant contemporary Indigenous survival and sovereignty.\n\nA third enabling narrative is the myth of the "Benevolent Canadian Fur Trade." Often contrasted with violent American expansion, Canadian historiography frequently depicts the fur trade as a peaceful, mutually beneficial partnership. This sanitized view ignores how Europeans abducted Indigenous leaders (such as Cartier’s kidnapping of Donnakoh-noh’s sons), exploited inter-tribal rivalries, spread catastrophic epidemics, and weaponized trade to force dependency. Unmasking these three enabling narratives reveals how educational systems defend colonial hegemony at the expense of historical truth.',
    gradingCriteria: [
      'Accurate definition of System Justification Theory matching Dr. Miller’s slide.',
      'Identifies three clear enabling narratives (Pristine Wilderness, Vanishing Indian, Benevolent Colonizer/Fur Trade).',
      'Critiques the specific harms and historical distortions caused by each narrative.'
    ]
  },
  {
    id: 'icw1-3',
    source: 'In-Class Writing 1',
    type: 'short',
    title: 'Gift Exchange vs. Market Economy & Gifts in Diplomacy',
    prompt: 'Explain the difference between a gift exchange and a market/commodity exchange economy. In a gift exchange economy, what role do gifts play in diplomacy?',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'While market economies prioritize transactional profit and severed obligations, Indigenous gift economies establish enduring social bonds, where diplomatic gifts serve as sacred covenants to renew alliances, "cover the dead," and validate sovereign promises.',
    outline: [
      {
        section: '1. Theoretical Comparison',
        points: [
          'Market economy: commodification, immediate pricing, impersonal, ends relationship upon trade.',
          'Gift exchange: relational, ongoing reciprocal obligation, builds social prestige through generosity.'
        ]
      },
      {
        section: '2. The Diplomatic Role of Gifts in Indigenous Governance',
        points: [
          'Gifts represent the physical embodiment of words and goodwill.',
          'Essential ceremony: "Covering the dead" (condolence ceremonies to heal grief and stop revenge cycles).',
          'Establishing fictive kinship: transform strangers into kin ("brothers" or "children").'
        ]
      },
      {
        section: '3. Colonial Friction & Historical Consequences',
        points: [
          'French understood gift diplomacy (acting as Onontio in the Middle Ground).',
          'British failure under Amherst: viewed gifts as expensive "bribes", canceled them in 1761, causing Pontiac’s Resistance.',
          'Treaty of Niagara 1764 restored annual gift giving under William Johnson.'
        ]
      }
    ],
    modelResponse:
      'The distinction between a gift exchange economy and a market or commodity exchange economy reflects fundamentally opposed worldviews regarding human relationships, wealth, and authority. A market economy is characterized by impersonal, transactional exchanges where goods are assigned a monetary price determined by supply and demand. In this system, wealth is measured by private accumulation, and once the transaction is completed, all social obligations between buyer and seller are severed. Conversely, in an Indigenous gift exchange economy, items are distributed rather than hoarded. Prestige and status are derived not from accumulation, but from generosity. Crucially, a gift exchange is never a single transaction; it establishes an ongoing, reciprocal social debt that binds the giver and receiver in a continuous web of mutual responsibility.\n\nWithin Indigenous diplomatic systems, gifts played a profound, non-monetary role that was essential to peace and alliance. Words spoken in diplomatic councils carried no legal or moral weight unless accompanied by material gifts, such as wampum belts, beaver robes, or calumet pipes, which served as physical witnesses to the truth of the speaker’s promises. Gifts functioned as the vehicle for establishing "fictive kinship," symbolically transforming potential adversaries into brothers or fathers who owed one another military protection and economic sustenance.\n\nFurthermore, diplomatic gifts were indispensable for "covering the dead" in condolence ceremonies. When a member of an allied nation was killed, gifts were presented to the bereaved family and clan to dry their tears, soothe grief, and restore spiritual balance, thereby averting devastating cycles of revenge warfare. The catastrophic failure of British General Jeffrey Amherst following the Seven Years’ War—who dismissed annual gift distributions as corrupt "bribes" and abolished them—demonstrates the centrality of gift diplomacy. By cutting off gifts, Amherst signaled that Britain regarded Indigenous nations as conquered subjects rather than sovereign allies, directly sparking Pontiac’s Resistance of 1763.',
    gradingCriteria: [
      'Contrasts transactional market principles with relational, ongoing reciprocal gift obligations.',
      'Explains specific diplomatic roles: validating words/wampum, establishing fictive kinship, and covering the dead.',
      'Illustrates with historical examples (French alliance/Middle Ground, Amherst’s refusal, Pontiac).'
    ]
  },
  {
    id: 'icw1-4',
    source: 'In-Class Writing 1',
    type: 'short',
    title: 'Indigenous Technologies for Survival and Prosperity',
    prompt: 'Identify and explain at least three Indigenous technologies that allowed Indigenous people to survive and thrive in the Americas.',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'Indigenous technologies were sophisticated, sustainable scientific systems—exemplified by the birch bark canoe, companion planting (Three Sisters), and seasonal food processing like maple sugaring and pemmican—that enabled complex civilizations to flourish in diverse ecological landscapes.',
    outline: [
      {
        section: '1. Introduction',
        points: [
          'Define Indigenous technology beyond Western mechanical preconceptions.',
          'Thesis: ecological integration, high material efficiency, and sustainable harvesting.'
        ]
      },
      {
        section: '2. Technology 1: The Birch Bark Canoe (Wiigwaasi-jiimaan)',
        points: [
          'Engineered using birch bark, cedar ribs, spruce root (wadab), and pine pitch.',
          'Lightweight, buoyant, capable of navigating rapids yet easily portaged between watersheds.',
          'Facilitated vast continental trade networks spanning thousands of miles.'
        ]
      },
      {
        section: '3. Technology 2: Agricultural Systems & The Three Sisters',
        points: [
          'Corn, beans, and squash grown in polycultural mounds.',
          'Agronomic synergy: corn provides trellis, beans fix nitrogen, squash leaves shade soil and deter pests.',
          'Nutritional completeness: balanced amino acids and complex carbohydrates.'
        ]
      },
      {
        section: '4. Technology 3: Food Preservation & Processing (Maple Sugar & Pemmican)',
        points: [
          'Maple sap collection and evaporation using birchbark vessels and hot stones.',
          'Pemmican (dried bison meat, tallow, berries): shelf-stable calorie-dense superfood supporting travel and harsh winters.',
          'Conclusion: European explorers and fur traders could not have survived North America without adopting these technologies.'
        ]
      }
    ],
    modelResponse:
      'Long before European arrival, Indigenous nations developed intricate, scientifically sophisticated technologies tailored to the varied biomes of North America. These technologies were characterized by deep ecological knowledge, sustainable harvesting, and brilliant material engineering. Three technologies in particular—the birch bark canoe, the agricultural system of the Three Sisters, and food preservation methods like pemmican and maple sugaring—allowed Indigenous populations to thrive and sustain complex societies across millennia.\n\nThe birch bark canoe (*wiigwaasi-jiimaan*) was an engineering masterpiece that dominated the waterways of the Eastern Woodlands and Subarctic. Constructed from lightweight white birch bark lashed to white cedar ribs using split spruce roots (*wadab*) and sealed with boiled pine pitch and animal fat, the canoe was exceptionally durable, flexible in rapids, and lightweight enough to be carried over long portages by a single person. This technology opened up vast continental river networks, allowing nations to trade over thousands of kilometers—from the Gulf of Mexico to the Arctic—and became the indispensable vehicle that later enabled the North American fur trade.\n\nIn agriculture, the polycultural system of the "Three Sisters" (corn, beans, and squash) represents a pinnacle of agronomic science. Rather than European monoculture which exhausts topsoil, Indigenous farmers planted all three crops together in mounds. The tall corn stalks provided a natural trellis for the climbing bean vines; the beans, through symbiotic bacteria, fixed atmospheric nitrogen into the soil to nourish the corn; and the broad, prickly leaves of the sprawling squash shaded the ground to retain soil moisture and prevent weed growth. Nutritionally, these three crops provided a complete protein balance of essential amino acids and vitamins, supporting dense urban populations such as the 1,500–2,000 residents of Hochelaga.\n\nFinally, Indigenous food processing technologies like pemmican and maple sugar production solved the existential challenge of surviving harsh northern winters. Pemmican—a concentrated mixture of dried, pounded bison meat, rendered fat (tallow), and antioxidant-rich berries—could remain edible for years without spoiling. It served as a lightweight, calorie-dense superfood for long-distance military and hunting expeditions, and later became the fuel of the fur brigades. Together, these technologies demonstrate that Indigenous societies possessed advanced engineering and botanical sciences that ensured flourishing civilizations.',
    gradingCriteria: [
      'Identifies and explains at least 3 distinct technologies.',
      'Explains scientific/practical mechanics of how each technology works.',
      'Connects technologies to survival, trade, and long-term societal thriving.'
    ]
  },

  // --- In-Class Writing 2 (Oct 8) ---
  {
    id: 'icw2-1',
    source: 'In-Class Writing 2',
    type: 'short',
    title: 'Just Warfare Theories & The Right of Discovery',
    prompt: 'How did theories of Just Warfare influence the development of the Right of Discovery?',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'Theories of Just Warfare, originally formulated by St. Augustine and Thomas Aquinas, provided the theological framework that legitimized holy wars against non-Christians, directly evolving into the 15th-century Papal Bulls and the Right of Discovery.',
    outline: [
      {
        section: '1. Origins of Just War Theory',
        points: [
          'St. Augustine & Aquinas: legitimate authority, just cause, right intention.',
          'Crusades and papal expansion: framing non-Christians as unlawfully occupying lands of God.'
        ]
      },
      {
        section: '2. Evolution into Papal Bulls (1452–1493)',
        points: [
          'Bull Dum Diversas (1452) and Romanus Pontifex (1455): authorized conquest of infidels.',
          'Inter Caetera (1493): awarded "discovered" lands to Spain.',
          'Just cause redefined: mere non-Christian status justified military conquest.'
        ]
      },
      {
        section: '3. Codification into the Right of Discovery',
        points: [
          'European monarchs claimed sovereignty simply by discovering lands.',
          'Indigenous peoples treated as unlawful occupants lacking sovereignty.',
          'Conclusion: Just war transformed from defensive ethics into an offensive legal weapon for global imperialism.'
        ]
      }
    ],
    modelResponse:
      'The legal fiction of the Right of Discovery was not invented in a vacuum in 1492; rather, it was the direct legal and philosophical descendant of medieval Christian theories of Just Warfare. Formulated originally by St. Augustine in the fifth century and codified by Thomas Aquinas in the thirteenth century, Just War theory established that warfare was morally permissible if it fulfilled three criteria: declared by legitimate authority, waged for a just cause (such as rectifying a severe wrong), and pursued with right intention (seeking peace rather than vengeance).\n\nDuring the medieval Crusades and the Spanish Reconquista, Catholic popes radically expanded this doctrine to argue that non-Christians, by virtue of denying Christ, unlawfully held territory and resources that rightfully belonged to the Christian God. Refusing Christian preaching or resisting Catholic dominion was interpreted by ecclesiastical jurists as a continuous "unjust attack" on the universal Church, thereby providing Christian monarchs with perpetual "just cause" to wage offensive holy war. This ideological leap was formalized in the mid-fifteenth century through Papal Bulls such as *Dum Diversas* (1452) and *Romanus Pontifex* (1455), which granted Portuguese and Spanish monarchs apostolic authority to invade, conquer, and reduce all pagan and non-Christian peoples to perpetual slavery.\n\nWhen Christopher Columbus arrived in the Americas, this Just War theology crystallized directly into the Right of Discovery. Papal Bull *Inter Caetera* (1493) asserted that European Christian sovereigns acquired legal title and sovereignty over any lands "discovered" that were not already possessed by another Christian prince. Under this framework, Indigenous nations possessed no recognized sovereign rights; their failure to be Christian meant they held only a temporary right of occupancy that could be extinguished by European conquest. Through this progression, a doctrine originally meant to limit military aggression was weaponized into a totalizing framework justifying continental dispossession.',
    gradingCriteria: [
      'Traces roots to St. Augustine and Thomas Aquinas (legitimate authority, just cause, right intention).',
      'Explains how medieval Crusades/Reconquista expanded just cause to include non-Christian faith.',
      'Connects directly to 15th-century Papal Bulls (Dum Diversas, Inter Caetera) and the Doctrine of Discovery.'
    ]
  },
  {
    id: 'icw2-2',
    source: 'In-Class Writing 2',
    type: 'short',
    title: 'Social Contract Theorists & Indigenous Removal Policies',
    prompt: 'How did the social contract theorists influence removal policies?',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'Social contract theorists—chiefly Thomas Hobbes and John Locke—conceptualized Indigenous peoples as living in a pre-political "State of Nature," establishing philosophical arguments that uncultivated land belonged to those who enclosed it, directly justifying nineteenth-century Indian Removal policies.',
    outline: [
      {
        section: '1. Hobbes, Locke, and the "State of Nature"',
        points: [
          'Hobbes: life in state of nature is "nasty, brutish, and short" lacking laws or sovereign.',
          'Locke: property originates only when human labor mixes with land (agriculture/fencing).'
        ]
      },
      {
        section: '2. Denigration of Indigenous Land Use',
        points: [
          'Settlers argued Indigenous peoples were mere nomadic occupants who did not "improve" the earth.',
          'Vacuum Domicilium: uncultivated wilderness legally vacant.'
        ]
      },
      {
        section: '3. Direct Impact on Indian Removal Policies',
        points: [
          'Thomas Jefferson and Andrew Jackson weaponized Locke: Indigenous people must either adopt European agriculture or be removed west.',
          'Justified seizing millions of fertile acres for European settlers.',
          'Conclusion: philosophical theory served as the direct intellectual architecture of ethnic cleansing.'
        ]
      }
    ],
    modelResponse:
      'The intellectual architecture of nineteenth-century Indian Removal policies was deeply rooted in the political philosophies of seventeenth-century social contract theorists, most notably Thomas Hobbes and John Locke. By constructing hypothetical models of human society transitioning from a "State of Nature" into civil government, these European thinkers established ideological criteria that framed Indigenous nations as fundamentally pre-political, legally deficient, and devoid of legitimate property rights.\n\nThomas Hobbes posited that in the "state of nature," prior to the establishment of an absolute sovereign, human life was characterized by perpetual warfare—"solitary, poor, nasty, brutish, and short." European colonists mapped this concept directly onto Indigenous peoples, arguing that Native nations lacked formal laws, courts, and civil institutions, and therefore possessed no legal standing that European powers were required to respect. John Locke expanded this in his *Second Treatise of Government*, asserting that private property only comes into existence when an individual "mixes his labor" with the soil through European-style enclosure and cultivation. Locke explicitly pointed to America as the epitome of waste, arguing that an uncultivated acre of fertile American land was worth almost nothing compared to an improved acre in England.\n\nThese philosophical doctrines provided the legal and moral justification for forced removal policies in the nineteenth century. American leaders like Thomas Jefferson and Andrew Jackson argued that because Indigenous peoples allegedly subsisted through hunting across vast "waste" lands rather than intensive farming, they had no valid title to the continent. Settler expansion was framed as fulfilling a moral imperative to "improve" God’s earth. Removal policies—such as the Indian Removal Act of 1830—forced tens of thousands of Indigenous peoples west of the Mississippi on the pretext that they must either assimilate into Locke’s private-property framework or make way for white agriculturalists.',
    gradingCriteria: [
      'Identifies Thomas Hobbes (state of nature, lack of civil law) and John Locke (labor theory of property/improvement).',
      'Explains how Indigenous land tenure was delegitimized as "waste" or "vacuum domicilium".',
      'Demonstrates direct link to 19th-century Indian Removal policies.'
    ]
  },
  {
    id: 'icw2-3',
    source: 'In-Class Writing 2',
    type: 'short',
    title: 'The Valladolid Debate: The First International Human Rights Discussion',
    prompt: 'What was the first International discussion of human rights? What was the outcome of this discussion?',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'The 1550 Valladolid Debate between Las Casas and Sepúlveda represented the first international inquiry into human rights, resulting in formal papal and royal recognition of Indigenous humanity, yet maintaining the imperial theft of land and sovereignty.',
    outline: [
      {
        section: '1. Context of the Valladolid Debate (1550)',
        points: [
          'Convened by King Charles V in Valladolid, Spain.',
          'Spurred by Las Casas’s reports of horrifying atrocities and demographic collapse in New Spain.'
        ]
      },
      {
        section: '2. The Opposing Arguments',
        points: [
          'Juan Ginés de Sepúlveda: used Aristotle to claim Indigenous were "homunculi" / natural slaves lacking reason, requiring subjugation.',
          'Bartolomé de las Casas: cited Cicero and Christian theology; Indigenous were rational human beings capable of self-governance and faith.'
        ]
      },
      {
        section: '3. The Outcome & Historical Paradox',
        points: [
          'Jury reached mixed conclusions: Indigenous peoples had souls, were humans, and could become Spanish subjects.',
          'New Laws sought to reform the encomienda and forbid direct enslavement of peaceful natives.',
          'Paradox: Spain did NOT return stolen lands, renounce papal bulls, or recognize Indigenous political independence; simply transitioned to mission-based assimilation.'
        ]
      }
    ],
    modelResponse:
      'The first formal international discussion of human rights occurred in 1550 at the Council of Valladolid in Spain. Convened by Holy Roman Emperor and Spanish King Charles V, the debates were organized to resolve a profound moral crisis: could Spain lawfully wage war against Indigenous peoples of the Americas and force them into servitude solely on the grounds of their non-Christian faith and cultural practices?\n\nThe debate featured two opposing philosophical and theological titans. On one side stood Juan Ginés de Sepúlveda, an eminent humanist scholar who championed Aristotle’s theory of "natural slavery." Sepúlveda argued that Indigenous peoples were "homunculi" (sub-human beings) who lacked rational faculties, indulged in idolatry and human sacrifice, and were by nature born to serve civilized masters; thus, Spanish conquest and forced labor under the encomienda system were acts of mercy that civilized them. On the other side stood Dominican friar Bartolomé de las Casas, who had witnessed decades of Spanish cruelty firsthand. Drawing on Cicero’s universal definition of human rationality and Christ’s teachings, Las Casas argued that all people are human, possessing inherent reason, natural rights to liberty and property, and that conversion could only be achieved through peaceful persuasion.\n\nThe outcome of the debate was a complex historical compromise. While no definitive winner was officially proclaimed, the royal court and papal theologians concluded that Indigenous peoples were indeed human beings endowed with souls who could not be enslaved arbitrarily and were capable of becoming Christian subjects of the Crown. This led to reforms in the New Laws and curtailed the direct chattel enslavement of Indigenous peoples in Spanish domains. However, the outcome was fundamentally hypocritical: Spain refused to return an inch of stolen land, did not revoke papal bulls of donation, and maintained imperial dominion over the continent. While Indigenous humanity was conceded on paper, their political sovereignty and ancestral territories remained thoroughly dispossessed.',
    gradingCriteria: [
      'Names Valladolid Debate (1550) convened by Charles V.',
      'Clearly contrasts arguments of Sepúlveda (natural slavery/homunculi) and Las Casas (rational humans with natural rights).',
      'Accurately explains the outcome: recognition of humanity/souls, but NO restoration of land or renunciation of empire.'
    ]
  },
  {
    id: 'icw2-4',
    source: 'In-Class Writing 2',
    type: 'short',
    title: 'Columbian Exchange: Gains for Europeans vs. Indigenous Peoples',
    prompt: 'Identify three things (foods, technologies, etc) that Europeans gained through the Columbian Exchange. What did Indigenous People gain?',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'The Columbian Exchange radically reshaped global societies, transferring transformative caloric staples like potatoes, corn, and tomatoes to Europe, while bringing metal tools, horses, and European livestock to Indigenous nations alongside catastrophic epidemic diseases.',
    outline: [
      {
        section: '1. What Europeans Gained (Three Specific Items)',
        points: [
          'Potatoes: over 3,000 Andean varietals; grew underground, insulated from armies/weather; boosted European population by 20% between 1700-1900 and supported urbanization.',
          'Corn (Maize): high caloric yield per acre, fed European livestock and working classes.',
          'Tomatoes, cocoa, rubber, and tobacco: transformed European cuisines, pharmacology, and global commercial trade.'
        ]
      },
      {
        section: '2. What Indigenous Peoples Gained',
        points: [
          'Metal tools (iron axes, copper kettles, steel knives): revolutionized woodworking, cooking, and daily labor.',
          'Horses (Mustangs): revolutionized Plains hunting, mobility, and warfare.',
          'Woven wool and textiles, firearms (initially restricted).'
        ]
      },
      {
        section: '3. The Asymmetry: Ecological & Demographic Destruction',
        points: [
          'Europeans gained immense caloric wealth and population expansion.',
          'Indigenous gains were overshadowed by virgin soil diseases (smallpox, plague, measles) and invasive free-ranging livestock that destroyed ecosystems.',
          'Conclusion: an exchange that fueled European global hegemony while causing Indigenous demographic devastation.'
        ]
      }
    ],
    modelResponse:
      'The Columbian Exchange—the unprecedented transfer of plants, animals, technologies, and human populations between the Eastern and Western Hemispheres after 1492—permanently transformed global civilization. While the exchange introduced new materials to both sides of the Atlantic, the demographic and geopolitical consequences were profoundly asymmetrical.\n\nEuropeans gained immense biological and agricultural wealth from the Americas. First, the introduction of the potato, cultivated in over 3,000 varietals by Indigenous Andean farmers, revolutionized European agriculture. Because potatoes grew beneath the soil, they were protected from freezing weather, flooding, and armies that routinely burned grain fields; between 1700 and 1900, the potato alone increased Europe’s population by approximately 20%, fueling the rise of industrial city populations. Second, corn (maize) provided a high-yield caloric food source that thrived in climates unsuitable for wheat, transforming peasant diets and livestock feed across Europe. Third, the Americas provided commodities like tobacco, cocoa, tomatoes, and rubber, creating massive global industries and revolutionizing European cuisine and pharmacology.\n\nIn return, Indigenous peoples gained selective European materials and animals that they integrated into their cultures. Foremost among these was the horse, which had been extinct in North America since the Pleistocene. Indigenous nations on the Great Plains quickly mastered equestrian horsemanship, transforming bison hunting, trade routes, and tactical mobility. Indigenous peoples also eagerly sought European metallurgy, particularly iron axes, steel knives, copper kettles, and metal needles. These goods dramatically reduced the daily labor of woodworking, hide scraping, and food preparation; copper kettles were even cut up into projectile points and decorative ornaments.\n\nHowever, this exchange was deeply destructive for Indigenous nations. Accompanying European goods were virgin soil pathogens—smallpox, measles, swine flu, and typhus—that wiped out 75% to 90% of Indigenous populations across the Americas. Moreover, free-ranging European livestock (pigs and cattle) tore through unfenced cornfields and ruined local habitats. Thus, while Europe experienced a caloric boom that powered global empire, the Americas suffered an unimaginable demographic and ecological shock.',
    gradingCriteria: [
      'Identifies at least 3 specific items gained by Europeans (potato with 20% pop boost stat, corn, tomato/cocoa).',
      'Identifies items gained by Indigenous peoples (horses, metal axes/kettles, firearms).',
      'Highlights the profound asymmetry caused by virgin soil epidemics and invasive species.'
    ]
  },
  {
    id: 'icw2-5',
    source: 'In-Class Writing 2',
    type: 'short',
    title: 'Pocahontas & Early Indigenous-European Diplomatic Relations',
    prompt: 'What does the story of Pocahontas tell us about early Indigenous-European diplomatic relations?',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'Stripped of romanticized colonial myth, the life of Pocahontas (Matoaka) reveals that early Indigenous diplomacy was rooted in matrilineal kinship, fictive adoption, and political hostage exchange, exposing how Europeans consistently violated Indigenous diplomatic protocols.',
    outline: [
      {
        section: '1. Deconstructing the Colonial Myth',
        points: [
          'Pocahontas was approximately 11 years old when John Smith arrived in 1607.',
          'Not a romantic affair; society was strictly matrilineal.'
        ]
      },
      {
        section: '2. Matrilineal Adoption as Diplomatic Incorporation',
        points: [
          'Paramount Chief Powhatan captured Smith after English tried to steal food.',
          'Pocahontas symbolically adopted Smith: ceremony incorporating the English as subordinate allies and kin.',
          'Smith spent 9 months learning Algonquian language and culture, bound by reciprocal duties.'
        ]
      },
      {
        section: '3. European Betrayal & The Realities of Colonial Diplomacy',
        points: [
          'Smith returned to England in 1609; First Anglo-Powhatan War broke out (1610-1613).',
          'English kidnapped 17-year-old Pocahontas for political leverage.',
          'Marriage to John Rolfe framed by English as "marrying a princess" for political legitimacy.',
          'London court meeting (1616): Pocahontas confronted Smith for failing his kinship obligation to protect her family’s town.'
        ]
      }
    ],
    modelResponse:
      'The historical life of Pocahontas (Matoaka / Rebecca Rolfe) provides a vital case study into the mechanics and misunderstandings of early seventeenth-century Indigenous-European diplomacy. Stripped of the romanticized myths fabricated by John Smith and popular culture, her story illuminates how Indigenous nations utilized matrilineal kinship and fictive adoption to manage foreign arrivals, and how Europeans routinely exploited and betrayed these diplomatic protocols.\n\nWhen Captain John Smith arrived in Virginia in 1607, Pocahontas was a child of roughly eleven years old. After English settlers, starving and desperate, attempted to steal food from Powhatan villages, Smith was captured by Paramount Chief Powhatan. The famous event where Pocahontas allegedly "saved" Smith was in reality a sacred matrilineal adoption ritual. In Powhatan society, women and clan mothers held ultimate authority over captive lives and family lineage. By intervening, Pocahontas was performing a calculated political ceremony that adopted Smith into her clan, symbolically dying as an English foreigner and being reborn as a Powhatan subject and kin. Smith spent the next nine months learning the language and cultural laws of the Powhatan, bound by mutual obligations of trade and peace.\n\nHowever, the English consistently failed to honor the responsibilities of kinship. When Smith returned to England in 1609, the colony immediately resumed violent land expansion, triggering the First Anglo-Powhatan War (1610–1613). European diplomacy was coercive: in 1613, the English kidnapped seventeen-year-old Pocahontas, holding her hostage to force Powhatan into peace. Her subsequent marriage to tobacco planter John Rolfe was leveraged by the Virginia Company for financial propaganda, presenting her to the English Crown as a converted "Christian princess." When Pocahontas met John Smith at the English court in 1616, she directly rebuked him, asking why he had broken his sacred vows and failed to do his duty in protecting her family’s town. Her tragic death in England in 1617 underscores that while Indigenous nations pursued alliance through enduring kinship, European colonizers viewed diplomacy as a transactional instrument of conquest.',
    gradingCriteria: [
      'Debunks the romantic narrative (age 11, matrilineal adoption ceremony).',
      'Explains adoption as a diplomatic method to incorporate English into kinship obligations.',
      'Details European violation (kidnapping in 1613, court confrontation with Smith in 1616 over neglected kinship duties).'
    ]
  },
  {
    id: 'icw2-6',
    source: 'In-Class Writing 2',
    type: 'short',
    title: 'Donnakoh-Noh & The French: Lessons and Responses',
    prompt: 'What did Donnakoh-noh and his people learn from their encounters with the French? How did they respond?',
    recommendedLength: '1 full page (3-4 paragraphs)',
    thesisFormula:
      'Encounters with Jacques Cartier taught Stadakohna leader Donnakoh-noh that French intentions threatened Indigenous territorial sovereignty, prompting his people to assert jurisdictional control, reject symbolic annexation, and militarily repel Cartier’s attempted colony.',
    outline: [
      {
        section: '1. First Encounter at Stadakohna (1534–1535)',
        points: [
          'Donnakoh-noh led Stadakohna (Quebec City) on the St. Lawrence.',
          'Protested Cartier erecting a 30-foot French cross claiming the territory without consent.'
        ]
      },
      {
        section: '2. Lessons Learned from Abductions & French Ambitions',
        points: [
          'Cartier abducted Donnakoh-noh’s two sons (Domagaya and Taignoagny) and 7 others to France.',
          'Though none returned, the sons learned French and informed King François I of Indigenous sovereignty.',
          'Indigenous learned French were treacherous, disease-ridden, and sought unilateral domination.'
        ]
      },
      {
        section: '3. Indigenous Responses: Resistance & Repulsion of Cartier’s Colony',
        points: [
          'Stadakohnans saved Cartier’s crew from scurvy using cedar/annedda bark.',
          'Cartier sailed upriver to Hochelaga against Donnakoh-noh’s orders; Indigenous blocked river traffic.',
          '1541: Cartier brought settlers to colonize near Stadakohna without permission; Stadakohnans harassed and killed his men.',
          'French abandoned colony after 10 months and did not return for over 60 years.'
        ]
      }
    ],
    modelResponse:
      'The encounters between Jacques Cartier and Donnakoh-noh, the paramount leader of the St. Lawrence Iroquoian town of Stadakohna (modern Quebec City) between 1534 and 1542, established the template for early French-Indigenous relations. From these initial meetings, Donnakoh-noh and his people learned that the French were deceitful, presumptuous regarding territorial ownership, and utterly dependent on Indigenous hospitality for survival, leading the Stadakohnans to mount an active, successful defense of their sovereignty.\n\nFrom the outset in 1534, Donnakoh-noh recognized that European presence posed an existential threat to Indigenous jurisdiction. When Cartier erected a thirty-foot wooden cross at Gaspé bearing the royal arms of France, Donnakoh-noh immediately paddled out with his family to confront him, pointing to the land and asserting that the entire territory belonged to his people. Cartier responded with deceit, luring Donnakoh-noh aboard and abducting his two sons, Domagaya and Taignoagny, to France. Although taken as captives, the sons learned French and successfully impressed upon King François I that their people were a sovereign nation who would not submit to subjugation. When Cartier returned in 1535, Stadakohna welcomed the sons back and even saved Cartier’s scurvy-stricken crew with a medicine made from boiled cedar boughs (*annedda*). Yet when Cartier defied Donnakoh-noh’s warnings and navigated past Stadakohna to inspect Hochelaga (Montreal), the Stadakohnans recognized that Cartier sought to bypass their trading monopoly and control river traffic.\n\nIn response to this growing treachery—culminating in Cartier abducting Donnakoh-noh himself and nine other community members in 1536 (all of whom died in France)—the Stadakohna people completely revoked French privileges. When Cartier returned in 1541 with hundreds of settlers attempting to plant a permanent colony without permission, the Indigenous population refused to trade, blocked river routes, and launched coordinated guerrilla attacks that killed thirty-five Frenchmen. Harassed and starved out, Cartier abandoned the colony after just ten months. Donnakoh-noh’s people demonstrated that Indigenous nations were not passive victims, successfully halting French colonization of the St. Lawrence for more than sixty years until Champlain adapted to Indigenous alliance protocols.',
    gradingCriteria: [
      'Details 1534 encounter at Gaspé (erecting cross, Donnakoh-noh’s territorial protest).',
      'Explains Cartier’s abductions (sons Domagaya & Taignoagny, and later Donnakoh-noh).',
      'Describes Indigenous response: saving French from scurvy, blocking river, and militarily expelling Cartier’s 1541 colony in 10 months.'
    ]
  }
];

export const longEssayPrompts: EssayPrompt[] = [
  {
    id: 'long-essay-1',
    source: 'Long Essay Synthesis',
    type: 'long',
    title: 'The Shift in British-Indigenous Relations: From Alliances to Subjugation (1754–1783)',
    prompt:
      'Analyze the transformation of the relationship between the British Crown and Indigenous nations from the outbreak of the Seven Years’ War (1754) through the American Revolution (1783). Focus on the "why, not just the what"—how did imperial victories, land speculation, and ideological shifts undermine Indigenous sovereignty, and how did Indigenous confederacies resist?',
    recommendedLength: 'Multiple paragraphs (1.5–2 pages)',
    thesisFormula:
      'Between 1754 and 1783, British-Indigenous relations deteriorated from indispensable military alliances into hostile subjugation because British imperial victory removed the French counterweight, leading military leaders like Amherst to abandon gift diplomacy and treat Indigenous nations as conquered subjects—prompting coordinated resistance from Pontiac to the Six Nations.',
    outline: [
      {
        section: '1. Introduction & Context',
        points: [
          'The Middle Ground and imperial balance: prior to 1760, Britain and France competed for Indigenous allies.',
          'Thesis: Total British victory in 1760 altered British attitudes, triggering Amherst’s disastrous policies, Pontiac’s War, the contradictory Royal Proclamation, and the betrayal of 1783.'
        ]
      },
      {
        section: '2. The 1760 Turning Point & Jeffrey Amherst’s "New Order"',
        points: [
          'Fall of Montreal 1760: France withdrew; British believed they won by "Right of Conquest".',
          'Amherst ceased gift distribution (labeled them "bribes"), cut off gunpowder/ammunition, eliminated price controls.',
          'Refused condolence ceremonies to "cover the dead"; viewed Indigenous people as "infesting vermin".'
        ]
      },
      {
        section: '3. Indigenous Resistance & Pontiac’s War (1763)',
        points: [
          'Ottawa, Ojibwe, Potawatomi, Seneca, Shawnee, Delaware unite under Obwaandi’eyaag and Neolin.',
          'Captured 9 British forts, killed/captured 2,000 British troops/settlers.',
          'Proved Indigenous military autonomy and forced the British to recall Amherst and restore Sir William Johnson.'
        ]
      },
      {
        section: '4. The Royal Proclamation (1763) & Treaty of Niagara (1764)',
        points: [
          'Crown sought to prevent further expensive wars: reserved western lands as Indian hunting grounds.',
          'Banned private purchases; created Crown treaty monopoly.',
          '1764 Treaty of Niagara: 2,000 chiefs, 24 nations, 84 wampum belts ratified this as a nation-to-nation alliance.',
          'Colonial backlash: outraged 13 colonies and land speculators (Washington, Franklin, Walpole Co).'
        ]
      },
      {
        section: '5. The American Revolution & The 1783 Betrayal',
        points: [
          'Declaration of Independence grievances against the Proclamation and "merciless Indian savages".',
          'Civil war within Haudenosaunee: Sullivan-Clinton campaign 1779 ("Town Destroyer") burns 40 towns.',
          '1783 Treaty of Paris: Britain cedes the entire Ohio Valley without mentioning or consulting Indigenous allies.'
        ]
      },
      {
        section: '6. Conclusion',
        points: [
          'Synthesize the "why": European powers treated North America as negotiable real estate in European treaties, whereas Indigenous nations fought continuously for ancestral land and sovereign freedom.'
        ]
      }
    ],
    modelResponse:
      'Between 1754 and 1783, the geopolitical landscape of North America underwent a profound structural transformation that permanently altered the relationship between Indigenous nations and the British Crown. During the Seven Years’ War (1754–1763), Britain was forced to court Indigenous nations as sovereign military equals whose support was vital to expelling France. However, the elimination of French imperial competition in 1760 precipitated a dramatic shift in British attitude—from mutual diplomatic accommodation to authoritarian subjugation. Indigenous nations vigorously rejected this subjugation, demonstrating through Pontiac’s Resistance, treaty negotiations at Niagara, and complex diplomacy during the American Revolution that they remained autonomous sovereigns who refused to be treated as conquered subjects.\n\nThe root cause of this deterioration lay in British misinterpretations of imperial victory. When Montreal surrendered in 1760, British authorities arrogantly assumed they had inherited absolute dominion over North America by "Right of Conquest." Commander-in-Chief General Jeffrey Amherst introduced a rigid "New British Order." Amherst despised Indigenous peoples—calling them "the Vilest Race of Beings that Ever Infested the Earth"—and unilaterally abolished the centuries-old diplomatic protocol of annual gift distribution, denouncing gifts as corrupt "bribes." He eliminated price regulations in the fur trade, allowed unchecked alcohol trafficking, refused to conduct condolence ceremonies to cover the dead, and severely restricted sales of gunpowder and lead, leaving Indigenous hunters without the means to feed their families. When unrest grew, Amherst infamously proposed infecting Indigenous communities with smallpox blankets and hunting them with dogs.\n\nAmherst’s refusal of kinship protocols backfired catastrophically. Indigenous nations had never considered themselves defeated by the French withdrawal; they had allowed French posts on their lands only in exchange for annual rents and diplomatic respect. In 1763, an unprecedented pan-Indigenous confederacy led by Ottawa Chief Pontiac (Obwaandi’eyaag) and inspired by the spiritual revival teachings of the Delaware Prophet Neolin launched a coordinated offensive. Indigenous forces seized nine British forts across the Great Lakes and Ohio Valley, besieged Detroit and Fort Pitt, and inflicted over 2,000 casualties. Pontiac’s War demonstrated undeniable Indigenous military superiority in forest warfare and shattered Amherst’s authoritarian illusions, compelling the Crown to recall him in disgrace.\n\nTo restore stability and prevent further financially ruinous frontier wars, King George III issued the Royal Proclamation of October 1763. This landmark decree drew a line along the Appalachian crest, reserving all lands to the west as Indigenous "hunting grounds" and strictly forbidding private settler purchases or colonial charters from encroaching westward. Only the Crown could negotiate land cessions through public treaties. In 1764, British Indian Superintendent Sir William Johnson gathered over 2,000 leaders from twenty-four nations at the Treaty of Niagara, exchanging eighty-four wampum belts to formalize the Proclamation as an enduring covenant of peace, gift distribution, and mutual sovereignty.\n\nYet the Royal Proclamation contained fatal contradictions that ignited the American Revolution. While Johnson treated the Proclamation as a partnership, British settlers and elite land speculators—including George Washington and Benjamin Franklin, through ventures like the Walpole and Transylvania Companies—viewed Crown restrictions as intolerable tyranny. The 1774 Quebec Act, which restored French civil law and extended Quebec’s borders down to the Ohio River, further incensed the Thirteen Colonies. When the Americans issued their Declaration of Independence in 1776, they explicitly condemned the King for restricting western settlement and for enlisting "merciless Indian savages."\n\nThe resulting Revolutionary War split Indigenous confederacies into devastating civil conflict. While the Oneida and Tuscarora sided with the American rebels, the majority of the Haudenosaunee, led by Mohawk war leader Joseph Brant (Thayendanegea) and Clan Mother Molly Brant, allied with the British Crown. In retaliation, General Washington ordered the 1779 Sullivan-Clinton Campaign, directing his army to act as a "Town Destroyer" by burning forty Seneca and Cayuga towns, destroying centuries-old orchards, and driving thousands into starving exile at Fort Niagara. The final betrayal occurred in the 1783 Treaty of Paris: Great Britain ceded the entire Ohio Valley and Great Lakes basin to the new United States without consulting, mentioning, or seeking consent from its Indigenous allies. Indigenous nations vehemently rejected the American claim that Britain had the authority to give away lands it never owned, setting the stage for decades of renewed border warfare. Ultimately, this thirty-year crucible reveals that European empires consistently subordinated Indigenous treaties to imperial expediency, while Indigenous nations persistently leveraged warfare and diplomacy to defend their sacred sovereignty.',
    gradingCriteria: [
      'Comprehensive chronological scope (1754 Seven Years War, 1760 French defeat, Amherst, 1763 Pontiac, 1763 Proclamation, 1764 Niagara, 1774 Quebec Act, 1776 Revolution, 1779 Sullivan-Clinton, 1783 Treaty of Paris).',
      'Focuses on "the WHY, not just the what" (why Amherst failed, why Proclamation alienated colonists, why 1783 was a betrayal).',
      'Highlights Indigenous agency, warfare tactics, and confederacy diplomacy.'
    ]
  },
  {
    id: 'long-essay-2',
    source: 'Long Essay Synthesis',
    type: 'long',
    title: 'European Colonial Justifications vs. Indigenous Sovereignty (1492–1763)',
    prompt:
      'Compare and contrast Spanish, English, and French colonial justifications and approaches to Indigenous nations. How did Indigenous peoples challenge these ideological claims through diplomacy, warfare, and cultural adaptation?',
    recommendedLength: 'Multiple paragraphs (1.5–2 pages)',
    thesisFormula:
      'While Spain relied on Catholic papal authority to justify subjugation, England invoked secular agrarian property theories (vacuum domicilium) to seize land, and France deployed mercantilist diplomacy and the "Middle Ground" to control trade, Indigenous nations consistently resisted all three frameworks by asserting inherent sovereignty through kinship, warfare, and wampum diplomacy.',
    outline: [
      {
        section: '1. Introduction',
        points: [
          'Introduce the three distinct European imperial ideologies in North America.',
          'Thesis statement: Each European power devised self-serving legal frameworks to justify land theft, which Indigenous nations actively contested through diplomacy and warfare.'
        ]
      },
      {
        section: '2. The Spanish Framework: Papal Bulls, Just War, & Encomienda',
        points: [
          'Papal Bulls (Dum Diversas 1452, Inter Caetera 1493) and Requirimiento.',
          'Theological mandate to convert or enslave; Valladolid Debate (1550) between Las Casas and Sepúlveda.',
          'Indigenous response: Pueblo Revolt 1680, armed resistance, cultural preservation.'
        ]
      },
      {
        section: '3. The English Approach: Vacuum Domicilium & State of Nature',
        points: [
          'Post-Reformation rejection of Papal Bulls; relied on Hakluyt, Hobbes, and Locke.',
          'Vacuum Domicilium: uncultivated land is legally vacant; agricultural enclosure confers property.',
          'Permanent displacement of Indigenous people; refusal of intermarriage; livestock destruction.',
          'Indigenous response: Pequot War (1637), King Philip’s War (1675), seeking direct Crown protection.'
        ]
      },
      {
        section: '4. The French Approach: Mercantilism & The "Middle Ground"',
        points: [
          'Mercantilist trade monopolies (Cent-Associés); dependent on Indigenous fur harvesting.',
          'Adopted Indigenous protocols: gift exchange, fictive kinship ("Onontio"), coureurs de bois.',
          'Illusion of benevolence: French also engaged in slavery, fought brutal Mesquakie Wars (1710–1738), and ceded land without consent.',
          'Indigenous response: Donnakoh-noh in 1534, Huron-French alliance, Great Peace of Montreal 1701.'
        ]
      },
      {
        section: '5. Conclusion',
        points: [
          'Summarize the ideological differences and Indigenous counter-strategies.',
          'Show how the Royal Proclamation of 1763 attempted to merge these approaches under British rule.'
        ]
      }
    ],
    modelResponse:
      'The colonization of the Americas by Spain, England, and France was underpinned by distinct legal, religious, and economic ideologies designed to justify the subjugation of Indigenous peoples and the expropriation of their territories. While Spain relied upon divine papal mandate and Just War theology, England justified territorial dispossession through agrarian property theories of *vacuum domicilium*, and France established commercial alliances rooted in mercantilism and the "Middle Ground." Yet beneath these diverse European strategies lay a shared imperial objective: the erasure of Indigenous sovereignty. Across three centuries, Indigenous nations systematically challenged, negotiated, and resisted each European framework through armed defense, sophisticated treaty-making, and deliberate diplomatic manipulation.\n\nThe Spanish colonial framework was explicitly theocentric, born out of the medieval Crusades and the 1492 Reconquista of Iberia. Spanish jurists argued that non-Christians lacked legitimate property rights against the universal authority of the Catholic Church. Through fifteenth-century Papal Bulls—including *Dum Diversas* (1452) and *Inter Caetera* (1493)—popes granted the Spanish Crown divine sanction to invade non-Christian lands, seize their wealth, and reduce pagan populations to servitude. In practice, the Spanish implemented the *Requirimiento*, a legal document read aloud in Latin demanding immediate submission to the Church and Crown upon penalty of extermination and enslavement under the *encomienda* system. Although the 1550 Valladolid Debate between Bartolomé de las Casas and Juan Ginés de Sepúlveda resulted in formal recognition of Indigenous humanity, Spain never revoked its claims to imperial ownership. Indigenous nations resisted Spanish domination through continuous armed rebellion—most successfully in the 1680 Pueblo Revolt, which drove the Spanish out of New Mexico for twelve years—and by covertly maintaining traditional ceremonies beneath outward Catholic conversion.\n\nFollowing the Protestant Reformation, the English rejected papal authority and devised an alternative, secular-philosophical justification centered on land use and social contract theory. Promoted by geographers like Richard Hakluyt and formalized through John Locke’s labor theory of property, the English doctrine of *vacuum domicilium* asserted that any land not actively enclosed, cultivated with European-style crops, and built upon with permanent structures was legally "empty" and open for seizure. Unlike the Spanish who sought to subjugate Indigenous labor, the English sought the land itself. English settlers cleared forests, introduced thousands of free-ranging livestock that devoured unfenced Indigenous cornfields, and refused intermarriage. When Indigenous nations defended their territories, the English engaged in total war, as seen in the 1637 Mystic River massacre during the Pequot War and the brutal suppression of King Philip’s War (1675–1676), in which captured Wampanoags and Narragansetts were sold into Caribbean slavery. In response, Indigenous leaders adapted: some joined Christian "praying towns" to preserve land titles, others negotiated written treaties asserting sovereign hunting rights, and leaders like Metacom formed multi-tribal coalitions that nearly drove the English into the Atlantic.\n\nFrance adopted a third approach dictated by northern geography and mercantilist economics. Lacking the population to establish massive agrarian colonies, New France depended on Indigenous nations to supply beaver pelts for European fashion. Consequently, the French cultivated the "Middle Ground" in the Great Lakes, adapting to Indigenous diplomatic norms by engaging in gift exchange, honoring condolence ceremonies to cover the dead, and allowing *coureurs de bois* to intermarry into Indigenous clans. French governors presented themselves as "Onontio"—a generous father who mediated inter-tribal disputes and distributed trade goods. However, this did not make the French benevolent: they enslaved hundreds of Indigenous captives (particularly Mesquakie and Pawnee), launched genocidal extermination campaigns during the Mesquakie Wars (1710–1738) to control Mississippi trade routes, and traded away North American territories in European treaties without consulting their allies. Indigenous nations effectively managed the French by dictating trade terms, demanding gifts as prerequisite for passage, and playing European powers against each other—as demonstrated by the Haudenosaunee in 1701 when they signed the Great Peace of Montreal with France while simultaneously deeding beaver hunting grounds to the English in the Nanfan Treaty.\n\nIn conclusion, the colonial ventures of Spain, England, and France were shaped by distinct imperial rationales—theological conversion, agricultural enclosure, and mercantilist trade. Yet in every theater, Indigenous nations refused to be passive objects of European law. Through military resistance, economic leverage, and the assertion of sacred kinship covenants, Indigenous peoples repeatedly exposed the fragility of European legal fictions and preserved their inherent sovereignty.',
    gradingCriteria: [
      'Accurate contrast between Spanish (Papal Bulls/conversion), English (vacuum domicilium/Lockean property), and French (mercantilism/Middle Ground).',
      'Identifies specific historical episodes (Valladolid 1550, King Philip’s War 1675, Mesquakie Wars 1710-1738, Peace of Montreal 1701).',
      'Demonstrates Indigenous agency, diplomatic maneuvering, and military resistance against each power.'
    ]
  }
];

export const mcqBank: MCQQuestion[] = [
  {
    id: 'mcq-1',
    lecture: 'Theoretical Framework & Midterm Review',
    question: 'According to System Justification Theory as presented in Dr. Miller’s lectures, why do individuals defend existing social, economic, and political systems?',
    options: [
      'Because the systems always deliver optimal economic efficiency for all citizens',
      'Because humans are psychologically, socially, and systemically motivated to rationalize existing arrangements, even when those systems operate against their own self-interest',
      'Because legal constitutions legally mandate complete agreement with government policy',
      'Because human biology is inherently pre-programmed to submit to monarchical rule'
    ],
    correctIndex: 1,
    explanation:
      'Dr. Miller emphasizes that humans are motivated to defend and rationalize existing arrangements even if these systems work against their individual and collective self-interest; departures from dominant expectations never go unpunished, and conformities are rewarded.',
    slideRef: 'Midterm Review Slide 13 & 33'
  },
  {
    id: 'mcq-2',
    lecture: 'Theoretical Framework & Historiography',
    question: 'What is the course definition of Ethnohistory?',
    options: [
      'The study of ancient human bones and stone tools exclusively through carbon dating',
      'The recognition that culture influences history because culture provides the framework within which people categorize information and decide what is or is not important to record in written sources',
      'The chronological timeline of monarchical successions in Western Europe',
      'The genetic mapping of ancestral human populations across continents'
    ],
    correctIndex: 1,
    explanation:
      'Slide 25 states: "Culture influences history because culture provides the framework within which people categorize information and make decisions. While history is technically the study of the past using written sources... a people’s culture helps them to decide what is or is not important to record."',
    slideRef: 'Midterm Review Slide 25'
  },
  {
    id: 'mcq-3',
    lecture: 'Indigenous Governance & Kinship',
    question: 'In Dr. Miller’s lectures, what is the specific definition of a Clan?',
    options: [
      'A temporary military alliance formed exclusively during wartime',
      'Individuals who are considered relatives and are assumed to have a distant blood relationship even if the exact lineage relationship is unclear',
      'A commercial guild responsible for setting market prices on trade goods',
      'A religious council of Catholic priests who lived inside Indigenous villages'
    ],
    correctIndex: 1,
    explanation:
      'Slide 27 defines Clan as: "Individuals who are considered relatives and are assumed to have a distant blood relationship even if lineage relationship is unclear. Clans play an important role in keeping order within societies."',
    slideRef: 'Midterm Review Slide 27'
  },
  {
    id: 'mcq-4',
    lecture: 'Colonial Justifications & Papal Bulls',
    question: 'What did the 1452 Papal Bull Dum Diversas explicitly authorize Christian monarchs to do?',
    options: [
      'To build universities and libraries throughout the Americas',
      'To invade, search out, capture, and conquer all non-Christian Saracens and pagans, and reduce their persons into perpetual servitude (slavery)',
      'To establish democratic parliaments in all foreign lands',
      'To outlaw all religious wars and establish global universal tolerance'
    ],
    correctIndex: 1,
    explanation:
      'Issued by Pope Nicholas V, Dum Diversas granted King Alfonso V of Portugal apostolic authority to invade and subjugate non-Christians and reduce them to perpetual slavery, forming the religious precedent for racialized chattel slavery and land theft.',
    slideRef: 'Review Slide 22, 29'
  },
  {
    id: 'mcq-5',
    lecture: 'Early Contacts & Norse Settlements',
    question: 'What Inuit word was used to describe Europeans, and what did it literally mean?',
    options: [
      'Qallunaat, meaning "people who can’t control their emotions like children"',
      'Anishinaabeg, meaning "the original good humans of the earth"',
      'Wendt, meaning "dwellers on the great island"',
      'Saqamaw, meaning "great generous diplomatic leaders"'
    ],
    correctIndex: 0,
    explanation:
      'Oct 6 Slide 10: "Inuit word for Europeans is Qallunaat which means \'people who can’t control their emotions like children\'."',
    slideRef: 'Oct 6 Slide 10'
  },
  {
    id: 'mcq-6',
    lecture: 'Columbian Exchange & Disease',
    question: 'What was "The Great Dying" between 1616 and 1619 on the East Coast of North America?',
    options: [
      'A great famine caused by a severe five-year drought across the Great Plains',
      'A devastating epidemic (likely European plague) that killed roughly 90% of Indigenous peoples on the East Coast, causing massive shifts in tribal power and clearing the path for European settlement',
      'The extinction of the woolly mammoth and mastodon following climate change',
      'The destruction of French fishing fleets during the Thirty Years’ War'
    ],
    correctIndex: 1,
    explanation:
      'Slide 39: "From 1616 – 1619, roughly 90% of Indigenous people on the East Coast fell ill and died, presumably from the plague... caused a massive shift in power relationships... and made way for European settlement."',
    slideRef: 'Midterm Review Slide 39'
  },
  {
    id: 'mcq-7',
    lecture: 'Early Exploration: Cartier & Stadakohna',
    question: 'What occurred when Jacques Cartier attempted to establish a colony near Stadakohna in 1541?',
    options: [
      'The colony flourished and became the capital of New France for over a century',
      'Cartier did not ask Donnakoh-noh for permission, and the people of Stadakohna harassed and killed his men, forcing Cartier to abandon the colony after just 10 months',
      'The King of Spain sent an armada to arrest Cartier and burn down the settlement',
      'Cartier successfully purchased the entire territory in exchange for wampum belts'
    ],
    correctIndex: 1,
    explanation:
      'Oct 6 Slide 19 notes: Cartier brought settlers near Stadakohna without permission; the people of Stadakohna harassed and killed his men, causing Cartier to give up after 10 months and sail home.',
    slideRef: 'Oct 6 Slide 19'
  },
  {
    id: 'mcq-8',
    lecture: 'Kinship & Pocahontas',
    question: 'In Powhatan society, why did eleven-year-old Pocahontas "save" Captain John Smith in 1607?',
    options: [
      'She had fallen romantically in love with him, as depicted in later English fiction',
      'She was conducting a ritual matrilineal adoption to incorporate Smith and the English into Powhatan’s kinship and alliance network',
      'She wanted to learn English so she could travel to Europe as a diplomat',
      'Smith bribed her with English brass jewelry and mirrors'
    ],
    correctIndex: 1,
    explanation:
      'Oct 6 Slide 23: Powhatan society was matrilineal; Pocahontas adopted John Smith through formal cultural protocol, where he spent 9 months learning the language and culture as an adopted kin member.',
    slideRef: 'Oct 6 Slide 23'
  },
  {
    id: 'mcq-9',
    lecture: '17th Century Wars & Pequot War',
    question: 'What was a primary economic cause of the 1637 Pequot War in New England?',
    options: [
      'Competition for gold and silver mines in the Connecticut River Valley',
      'Conflict over control of coastal wampum beds, which had become the primary currency of English, Dutch, and Swedish colonies',
      'Disputes over the fur trade monopoly granted by the King of France to the Jesuits',
      'A dispute over tobacco shipping tariffs in the Chesapeake Bay'
    ],
    correctIndex: 1,
    explanation:
      'Oct 13 Slide 1-2: Dutch cornered wampum trade, wampum beds were controlled by Pequots and served as currency; contest for control of these beds was a chief contributor to the Pequot War of the 1630s.',
    slideRef: 'Oct 13 Slide 1'
  },
  {
    id: 'mcq-10',
    lecture: '17th Century Wars: King Philip’s War',
    question: 'During King Philip’s War (1675–1676), what happened to the thousands of Indigenous people captured by the English?',
    options: [
      'They were granted full British citizenship and given farms in Connecticut',
      'They were adopted into the British Royal Navy as sailors',
      'They were seized by the English and sold into slavery in the Caribbean and Virginia',
      'They were resettled onto permanent reservations in Upper Canada'
    ],
    correctIndex: 2,
    explanation:
      'Oct 13 Slide 13: "Thousands of Indigenous people seized by the English are sold into slavery in the Caribbean and Virginia; estimated only about 4,000 Indigenous people remained in this region after the war."',
    slideRef: 'Oct 13 Slide 13'
  },
  {
    id: 'mcq-11',
    lecture: 'Huron/Wendat & Mourning Wars',
    question: 'Why did the Haudenosaunee invade and destroy the Huron/Wendat Confederacy in 1649?',
    options: [
      'The French government ordered the Haudenosaunee to destroy the Wendat',
      'To capture prisoners in "mourning wars" to replace massive population losses caused by European smallpox epidemics and control beaver supply routes',
      'The Wendat had converted entirely to Protestantism and rejected Catholic peace treaties',
      'To build a naval fleet to sail across Lake Huron to attack New Orleans'
    ],
    correctIndex: 1,
    explanation:
      'Oct 13 Slide 7 & Quiz 2: Haudenosaunee mourning wars were launched to capture prisoners to replace kin who died in waves of European disease, while intercepting fur trade brigades to Montreal.',
    slideRef: 'Oct 13 Slide 7'
  },
  {
    id: 'mcq-12',
    lecture: 'Characteristics of Warfare',
    question: 'Which of the following was a defining characteristic of traditional Indigenous warfare prior to European distortion?',
    options: [
      'Huge standing armies numbering in the tens of thousands marching in open fields',
      'Systematic burning of enemy orchards, crops, and winter food stores to force famine',
      'Short-term, small war parties relying on speed and stealth, where leaders were judged by minimal casualties rather than high body counts',
      'The goal of absolute, total annihilation of the enemy nation and complete erasure of their language'
    ],
    correctIndex: 2,
    explanation:
      'Oct 20 Slide 4: Indigenous warfare featured small, temporary war parties, stealth, food supplies were NOT targeted, leaders were honored for lack of losses, and warfare aimed at forcing parties back to diplomacy, not total destruction.',
    slideRef: 'Oct 20 Slide 4'
  },
  {
    id: 'mcq-13',
    lecture: 'Treaties & Diplomacy: 1701 Treaties',
    question: 'What diplomatic strategy did the Haudenosaunee execute in the summer of 1701 regarding the Great Peace of Montreal and the Nanfan Treaty?',
    options: [
      'They surrendered all their weapons to both powers and converted entirely to Quakerism',
      'They signed the Great Peace of Montreal pledging neutrality with France and joint hunting rights, while simultaneously deeding those same western beaver hunting grounds to the British in the Nanfan Treaty, playing both empires against each other',
      'They united militarily with the Spanish to march on Boston',
      'They ceded their New York homeland to Pennsylvania and relocated to the Ohio Valley'
    ],
    correctIndex: 1,
    explanation:
      'Oct 20 Slide 10-12: In August 1701 they signed the Great Peace of Montreal, but on July 19, 1701, had deeded the same lands to NY Gov. Nanfan under "Right of Conquest" without telling the British about the Montreal agreement, masterfully exploiting imperial tensions.',
    slideRef: 'Oct 20 Slide 11-12'
  },
  {
    id: 'mcq-14',
    lecture: '18th Century Conflicts: Mesquakie Wars',
    question: 'What triggered the bloody Mesquakie (Fox) Wars (1710–1738) with New France?',
    options: [
      'The Mesquakie controlled the strategic Fox-Wisconsin River route connecting the Great Lakes to the Mississippi, which the French wanted to open to trade with the Dakota',
      'The Mesquakie allied with the Spanish to attack Quebec',
      'The French refused to purchase beaver pelts from any Algonquian nations',
      'The British Crown granted the Mesquakie a charter to govern Louisiana'
    ],
    correctIndex: 0,
    explanation:
      'Oct 20 Slide 16: The Mesquakie controlled the Fox-Wisconsin River route connecting Great Lakes to Mississippi; the French viewed waters as international and wanted trade with the Dakota, while the Mesquakie objected to Three Fires settlements at Detroit.',
    slideRef: 'Oct 20 Slide 16'
  },
  {
    id: 'mcq-15',
    lecture: 'Seven Years’ War & Amherst',
    question: 'How did British General Jeffrey Amherst provoke Pontiac’s Resistance of 1763 following the defeat of France?',
    options: [
      'He lowered taxes on rum and increased gift subsidies to all chiefs',
      'He treated Indigenous nations as conquered subjects, abolished diplomatic gift distributions as "bribes," restricted gunpowder/ammunition, and proposed distributing smallpox blankets',
      'He returned all captured French forts to the Haudenosaunee Confederacy',
      'He signed a perpetual alliance with Pontiac and built schools at Fort Detroit'
    ],
    correctIndex: 1,
    explanation:
      'Oct 22A Slide 7, 9, 13: Amherst eliminated gift diplomacy, called gifts "bribes," restricted gunpowder, refused condolence ceremonies to cover the dead, and discussed infecting Indigenous people with smallpox blankets.',
    slideRef: 'Oct 22A Slide 7, 9'
  },
  {
    id: 'mcq-16',
    lecture: 'Nativist Movements: Neolin & Pontiac',
    question: 'What core message was preached by the Delaware Prophet Neolin that inspired Pontiac’s Resistance?',
    options: [
      'Indigenous peoples should convert to Anglicanism to gain parliamentary seats in London',
      'Indigenous peoples must spiritually cleanse themselves of European trade goods, alcohol, and European clothing, return to traditional ways, and unite across ethnic divisions to reclaim their land',
      'Indigenous nations should build factories to mass-produce European-style cannons',
      'The French and British should merge their empires into a single global kingdom'
    ],
    correctIndex: 1,
    explanation:
      'Oct 22B Slide 4: Neolin’s nativist movement preached prophetic religious ceremony uniting across ethnic differences, return to Indigenous technologies, and complete rejection of European trade goods and alcohol.',
    slideRef: 'Oct 22B Slide 4'
  },
  {
    id: 'mcq-17',
    lecture: 'Royal Proclamation of 1763',
    question: 'What was a primary provision of King George III’s Royal Proclamation of 1763?',
    options: [
      'It declared all Indigenous nations to be conquered subjects with no land rights whatsoever',
      'It reserved all western land beyond the Appalachian watershed for Indigenous nations as "hunting grounds" under Crown protection, and prohibited private individuals or colonies from buying Native land',
      'It granted Pennsylvania and Virginia the right to seize all lands up to the Pacific Ocean',
      'It abolished the Catholic Church throughout Canada'
    ],
    correctIndex: 1,
    explanation:
      'Oct 22A Slide 15 & Oct 22B Slide 9: The Proclamation reserved western lands for tribes as hunting grounds, claimed Crown dominion with exclusive right of purchase, and barred individual colonists from buying Native title.',
    slideRef: 'Oct 22A Slide 15'
  },
  {
    id: 'mcq-18',
    lecture: 'Treaty of Niagara 1764',
    question: 'Why was the 1764 Treaty of Niagara significant in Canadian constitutional history?',
    options: [
      'It dissolved all Indigenous confederacies in Ontario and transferred them to New York',
      'Over 2,000 leaders from 24 nations ratified the Royal Proclamation from an Indigenous perspective, exchanging 84 wampum belts to affirm a nation-to-nation alliance and annual gift protocols',
      'It marked the formal surrender of the United States to Great Britain',
      'It established the Hudson’s Bay Company as the governing body of Quebec'
    ],
    correctIndex: 1,
    explanation:
      'Oct 22A Slide 18-19: Sir William Johnson convened 1,700–2,000 attendees from 24 nations, exchanging 84 wampum belts to conclude the Treaty of Niagara, ratifying the Proclamation as a covenant of peace and mutual sovereignty.',
    slideRef: 'Oct 22A Slide 18-19'
  },
  {
    id: 'mcq-19',
    lecture: 'Quebec Act & American Revolution',
    question: 'Why did American colonists view the British Quebec Act of 1774 as one of the "Intolerable Acts"?',
    options: [
      'It banned American colonists from drinking tea and coffee',
      'It expanded Quebec’s boundaries south to the Ohio River, established French civil law, protected Roman Catholicism, and blocked colonial land speculation in the West',
      'It forced all American colonists to relocate to Halifax, Nova Scotia',
      'It gave the Haudenosaunee Confederacy seats in the British House of Commons'
    ],
    correctIndex: 1,
    explanation:
      'Oct 22A Slide 21-22 & Oct 22B Slide 15: The Quebec Act expanded Quebec to include former New France territories down to the Ohio River, used French civil law, and blocked wealthy colonial land speculators.',
    slideRef: 'Oct 22A Slide 21-22'
  },
  {
    id: 'mcq-20',
    lecture: 'American Revolution: Sullivan-Clinton Campaign',
    question: 'What was the result of the 1779 Sullivan-Clinton Campaign ordered by George Washington?',
    options: [
      'A peaceful treaty of friendship signed between the Continental Congress and all Six Nations',
      'A scorched-earth campaign that burned 40 Haudenosaunee towns, destroyed their crops and winter food supplies, and created thousands of refugees, earning Washington the name "Town Destroyer"',
      'The total capture and destruction of British forces at Fort Detroit',
      'The relocation of the entire Cherokee nation to Florida'
    ],
    correctIndex: 1,
    explanation:
      'Oct 22B Slide 22-23: Washington ordered 4,000 troops under Sullivan and Clinton to burn crops and cut down orchards, destroying 40 towns and earning Washington the name "Town Destroyer" (Conotocaurius).',
    slideRef: 'Oct 22B Slide 22'
  },
  {
    id: 'mcq-21',
    lecture: 'Treaty of Paris 1783',
    question: 'What was the major betrayal experienced by Britain’s Indigenous allies in the 1783 Treaty of Paris?',
    options: [
      'The British Crown forced them to convert to Catholicism',
      'Great Britain ceded all territories south of the Great Lakes to the new United States without consulting or obtaining consent from their Indigenous allies who lived there',
      'The British king demanded repayment for all wampum belts exchanged at Niagara',
      'The Americans immediately returned all land to the Six Nations'
    ],
    correctIndex: 1,
    explanation:
      'Oct 22B Slide 25: European powers gathered in Europe and redrew borders; England gave up territories south of the Great Lakes without Indigenous consultation, and Indigenous nations refused to recognize American Right of Conquest.',
    slideRef: 'Oct 22B Slide 25'
  },
  {
    id: 'mcq-22',
    lecture: 'Indigenous Agriculture & Food Systems',
    question: 'What agricultural impact did the introduction of Andean potato varietals have on Europe between 1700 and 1900?',
    options: [
      'It caused immediate soil erosion that decimated European agriculture',
      'It increased the European population by approximately 20% by providing an underground caloric food source protected from frost and military burning, fostering larger city populations',
      'It was rejected by Europeans as poisonous until the 20th century',
      'It completely replaced wheat and oats as the only crop grown in France'
    ],
    correctIndex: 1,
    explanation:
      'Oct 6 Slide 7: "Potatoes alone increased the European population between 1700 and 1900 by about 20% - especially impactful in Northern Europe where high caloric food that grew below ground increased agricultural yields and contributed to larger city populations."',
    slideRef: 'Oct 6 Slide 7'
  }
];

export const bonusQuestions = [
  {
    id: 'bonus-1',
    question: 'What was the name of the last known full-blooded member of the Beothuk nation of Newfoundland, who died in 1829?',
    answer: 'Shanawdithit',
    context: 'Shanawdithit passed away in St. John’s, Newfoundland, in 1829. Her detailed pencil sketches and oral accounts provide the primary Indigenous record of Beothuk culture and their tragic decline due to settler violence and displacement.'
  },
  {
    id: 'bonus-2',
    question: 'What Haudenosaunee name was given to George Washington by the Six Nations following the 1779 Sullivan-Clinton scorched-earth campaign?',
    answer: 'Conotocaurius (or "Town Destroyer")',
    context: 'The name originated from a Seneca name previously applied to Washington’s great-grandfather, but was re-applied to George Washington after he ordered the systematic destruction of 40 Haudenosaunee towns and thousands of acres of orchards in 1779.'
  },
  {
    id: 'bonus-3',
    question: 'What is the literal translation of the Inuit word "Qallunaat", used to describe Europeans during early contacts?',
    answer: '"People who can’t control their emotions like children"',
    context: 'Recorded in Oct 6 Slide 10: reflected Inuit cultural values of emotional self-regulation, stoicism, and community harmony, contrasting with the volatile, shouting, and impatient behavior of European explorers.'
  },
  {
    id: 'bonus-4',
    question: 'What was the Huron-Iroquois town visited by Jacques Cartier in 1535 containing 50 longhouses and 1,500–2,000 people, where the word "Kanata" originated?',
    answer: 'Hochelaga (modern Montreal)',
    context: 'Oct 6 Slide 20: Hochelaga was surrounded by extensive cornfields and triple-palisaded fortifications. Their word for settlement or town was "Kanata," which Cartier mistook for the name of the entire country.'
  }
];
