export interface LectureSummary {
  lectureNum: number;
  dateStr: string;
  title: string;
  coreThemes: string[];
  keyFiguresNations: string[];
  crucialFacts: string[];
  examSignificance: string;
}

export const lectureSummaries: LectureSummary[] = [
  {
    lectureNum: 1,
    dateStr: 'September 8',
    title: 'Theoretical Framework & Historiography',
    coreThemes: [
      'System Justification Theory and the defense of colonial hierarchies',
      'Historical myths vs. historical reality',
      'The power of enabling narratives in education'
    ],
    keyFiguresNations: ['Academic historiography', 'Settler colonial theorists'],
    crucialFacts: [
      'Humans rationalize systems that work against their self-interest.',
      'Departures from dominant expectations are punished; conformities are rewarded.',
      'Enabling narratives sanitize land dispossession (e.g. pristine wilderness myth).'
    ],
    examSignificance: 'Mandatory definition on Quiz 1 and In-Class Writing 1.'
  },
  {
    lectureNum: 2,
    dateStr: 'September 10',
    title: 'Epistemology, Ontology & Oral Histories',
    coreThemes: [
      'Epistemological bias favoring written alphabetic records over oral traditions',
      'Indigenous relational ontology vs. European human-nature hierarchy',
      'The multi-disciplinary methodology: history, ethnography, archaeology, oral history'
    ],
    keyFiguresNations: ['Haida (Raven’s Song)', 'Anishinaabe', 'Inuit'],
    crucialFacts: [
      'Oral history uses rigorous community mnemonics and material anchors (wampum, scrolls).',
      'Ethnohistory acknowledges that culture determines what gets recorded in written documents.',
      'Ontology governs relations with non-human kin possessing spirit (Manido).'
    ],
    examSignificance: 'Quiz 1 Question 1, 3, and 4; foundational to midterm essay synthesis.'
  },
  {
    lectureNum: 3,
    dateStr: 'September 15',
    title: 'Indigenous Creation Stories & Worldviews',
    coreThemes: [
      'The Anishinaabe Flood Story and Turtle Island re-creation',
      'Seven Grandfather Teachings (Sacred Teachings)',
      'Living Mino-Bimaadiziwin ("The Good Life")'
    ],
    keyFiguresNations: ['Anishinaabeg', 'Nanabozho', 'Wazhashk (Muskrat)', 'Turtle'],
    crucialFacts: [
      'Muskrat sacrifices its life to bring up mud after larger animals fail.',
      'Teachings of humility, mutual sacrifice, and animals as elder teachers.',
      'Indigenous belief systems seek balance in the present world rather than afterlife salvation.'
    ],
    examSignificance: 'In-Class Writing 1 Prompt 1 and Master Terms list.'
  },
  {
    lectureNum: 4,
    dateStr: 'September 17',
    title: 'Indigenous Kinship & Social Order',
    coreThemes: [
      'Kinship as the governing political, legal, and economic architecture',
      'Matrilineal vs. Patrilineal vs. Bi-lateral systems',
      'Clan structures preventing tyranny and organizing society'
    ],
    keyFiguresNations: ['Haudenosaunee', 'Huron/Wendat', 'Anishinaabe (Doodem)', 'Cree', 'Inuit'],
    crucialFacts: [
      'Kinship governs council representation, territorial distribution, marriage, and justice.',
      'Clan members assume distant blood relationship even if lineage is unclear.',
      'Matrilineal: descent and property through mother’s blood (father’s side not close kin).'
    ],
    examSignificance: 'Quiz 1 Question 7 & 8; Review Slides 26-27, 34-35.'
  },
  {
    lectureNum: 5,
    dateStr: 'September 22',
    title: 'Indigenous Technologies & Ecological Economies',
    coreThemes: [
      'Pre-contact agricultural engineering and companion planting',
      'Seasonal food processing, preservation, and metallurgy',
      'Gift Exchange Economy vs. Market/Commodity Economy'
    ],
    keyFiguresNations: ['Andean civilizations', 'Haudenosaunee', 'Anishinaabeg', 'Plains bison hunters'],
    crucialFacts: [
      'Three Sisters (corn, beans, squash) polyculture provides complete protein and protects soil.',
      'Andean farmers developed over 3,000 potato varietals growing at various elevations.',
      'Birch bark canoes, wild rice (manoomin), maple sugar, pemmican, and fishing weirs.',
      'Gift exchange builds enduring social obligations, whereas market exchange severs them.'
    ],
    examSignificance: 'In-Class Writing 1 Prompts 3 & 4; Review Slide 37.'
  },
  {
    lectureNum: 6,
    dateStr: 'September 24',
    title: 'European Expansion: Theology, Just War & Papal Bulls',
    coreThemes: [
      'Augustinian Just War theory adapted to justify global crusades',
      'Reconquista of Spain (1492) and the legal exclusion of non-Christian property rights',
      'Papal Bulls Dum Diversas (1452), Romanus Pontifex (1455), and Inter Caetera (1493)'
    ],
    keyFiguresNations: ['Pope Nicholas V', 'Pope Alexander VI', 'Isabella & Ferdinand', 'Thomas Aquinas'],
    crucialFacts: [
      'Papal bulls explicitly authorized invading non-Christian lands and perpetual enslavement.',
      'T-O Map depicted Jerusalem at the center of the world, leaving no theological space for Americas.',
      'Requirimiento (1513) read in Latin demanding immediate Indigenous submission.'
    ],
    examSignificance: 'Quiz 1 Question 9, In-Class Writing 2 Prompt 1, Review Slides 28-29.'
  },
  {
    lectureNum: 7,
    dateStr: 'September 29',
    title: 'The Valladolid Debate & British Ideology',
    coreThemes: [
      'The 1550 Valladolid Debate: Human rights vs. Aristotelian natural slavery',
      'Bartolomé de las Casas (Cicero, rational humans) vs. Sepúlveda (homunculi/slaves)',
      'Richard Hakluyt, Thomas More, and English Protestant justifications'
    ],
    keyFiguresNations: ['Charles V', 'Las Casas', 'Sepúlveda', 'Richard Hakluyt'],
    crucialFacts: [
      'First international human rights debate; recognized Indigenous souls but retained stolen lands.',
      'Hakluyt justified British colonization to counter Catholic Spain and export surplus poor.',
      'English Protestant argument: not bound by papal bulls, relied on Vacuum Domicilium.'
    ],
    examSignificance: 'Quiz 1 Question 5 & 6, In-Class Writing 2 Prompt 3, Review Slide 22.'
  },
  {
    lectureNum: 8,
    dateStr: 'October 1',
    title: 'Norse Contacts & Early Exploration (1000–1500s)',
    coreThemes: [
      'Norse settlements at L’Anse aux Meadows (ca. 1000–1145 AD)',
      'Dorset, Thule, and Inuit cultures; Skraelings in Norse sagas',
      'John Cabot (1497) and Oupeeshepow oral history using fire to deter landings'
    ],
    keyFiguresNations: ['Vikings / Norse', 'Dorset', 'Thule', 'Inuit', 'John Cabot', 'Beothuk'],
    crucialFacts: [
      'Inuit term Qallunaat ("people who can’t control their emotions like children").',
      'Beothuk early positive trade collapsed after Gaspar Corte-Real captured 57 slaves in 1500.',
      'Uncodified unofficial trade via Basque/English whalers and cod fishermen.'
    ],
    examSignificance: 'Oct 6 Slide 9-14; bonus questions on Qallunaat & Shanawdithit.'
  },
  {
    lectureNum: 9,
    dateStr: 'October 6',
    title: 'Columbian Exchange, Epidemics & St. Lawrence Encounters',
    coreThemes: [
      'The biological Columbian Exchange: crops, animals, and virgin soil epidemics',
      'Demographic collapse: Hispaniola Taino (500k to 500), Peru Inca Empire (9M to 600k)',
      'Jacques Cartier, Donnakoh-noh, and Hochelaga (Kanata)'
    ],
    keyFiguresNations: ['Jacques Cartier', 'Donnakoh-noh', 'Domagaya & Taignoagny', 'Stadakohna', 'Hochelaga'],
    crucialFacts: [
      'Potatoes alone increased European population by 20% (1700–1900), aiding urban growth.',
      'Cartier abducted Donnakoh-noh’s sons; Stadakohna saved French from scurvy with annedda.',
      'Cartier attempted colony in 1541 without permission; repelled by Stadakohna in 10 months.'
    ],
    examSignificance: 'In-Class Writing 2 Prompts 4 & 6; Review Slide 37.'
  },
  {
    lectureNum: 10,
    dateStr: 'October 8',
    title: 'Powhatan Diplomacy, Matrilineal Adoption & 17th C. Wars',
    coreThemes: [
      'Pocahontas (Matoaka) and the matrilineal adoption of John Smith (1607)',
      'The Great Dying (1616–1619): 90% mortality clearing New England coast',
      'Pequot War (1637) and control of coastal wampum beds'
    ],
    keyFiguresNations: ['Powhatan', 'Pocahontas', 'John Smith', 'Pequots', 'Narragansetts'],
    crucialFacts: [
      'Pocahontas was 11; adoption was matrilineal statecraft, not romance.',
      'Mystic River massacre (1637); captive Pequots sold into Caribbean slavery.',
      'Settler livestock destroyed unfenced Indigenous cornfields and beaver habitats.'
    ],
    examSignificance: 'Quiz 2 Questions 3, 5, 7; In-Class Writing 2 Prompt 5.'
  },
  {
    lectureNum: 11,
    dateStr: 'October 13',
    title: 'Wabanaki Sovereignty, Wendake & King Philip’s War',
    coreThemes: [
      'Wabanaki Confederacy repelling six British invasions of Acadia',
      'Huron/Wendat agricultural alliance with France and destruction in 1649 Mourning Wars',
      '1670 Hudson’s Bay Company charter and 1671 Pageant of Sault Ste. Marie',
      'King Philip’s War (1675–1676) and Bacon’s Rebellion'
    ],
    keyFiguresNations: ['Wabanaki', 'Huron/Wendat', 'Haudenosaunee', 'Metacomet', 'Sainte-Lusson'],
    crucialFacts: [
      'Haudenosaunee mourning wars sought captives to replace deaths from European smallpox.',
      '1671 Sainte-Lusson claimed Great Lakes for Louis XIV: French saw annexation, Native saw alliance.',
      'Thousands of captured New England natives sold into Caribbean slavery after 1676.'
    ],
    examSignificance: 'Quiz 2 Questions 1, 5, 6; Oct 13 Lecture slides.'
  },
  {
    lectureNum: 12,
    dateStr: 'October 15',
    title: 'The Great Peace of Montreal (1701) & Nanfan Treaty',
    coreThemes: [
      'The "Middle Ground" and French governor as "Onontio"',
      '1701 Great Peace of Montreal: 39 nations, Dish with One Spoon, neutrality',
      '1701 Nanfan Treaty and Haudenosaunee balance-of-power diplomacy',
      'Medal Chiefs and manipulation of Indigenous councils'
    ],
    keyFiguresNations: ['39 Indigenous Nations', 'Comte de Frontenac', 'Haudenosaunee', 'Gov. John Nanfan'],
    crucialFacts: [
      'Dish with One Spoon wampum: equal share of resources, no knives, collective preservation.',
      'Haudenosaunee deeded beaver hunting grounds to NY Gov. Nanfan without informing French.',
      'Indigenous warfare vs European total war: small stealth parties vs mass army devastation.'
    ],
    examSignificance: 'Quiz 2 Question 4; Oct 20 Lecture slides.'
  },
  {
    lectureNum: 13,
    dateStr: 'October 20',
    title: 'Mesquakie Wars & Origins of Seven Years’ War',
    coreThemes: [
      'The Mesquakie (Fox) Wars (1710–1738): strategic Fox-Wisconsin corridor',
      'French genocidal extermination campaigns and captive slave trading',
      'Chief Kiala’s pan-Indigenous alliance attempt; Sauk protection',
      'Outbreak of Seven Years’ War in 1754 (Washington at Fort Duquesne / Jumonville)'
    ],
    keyFiguresNations: ['Chief Kiala', 'Mesquakie (Fox)', 'Sauk (Osaakiiwaki)', 'George Washington', 'Tanacharison'],
    crucialFacts: [
      'French reduced Mesquakie from 10,000 to <250; French officers profited from selling slaves.',
      'Sauk adopted surviving Mesquakie, forcing French to halt total war.',
      'Seven Years’ War in North America began 2 years before Europe (1754 vs 1756).'
    ],
    examSignificance: 'Oct 20 Slide 15-24; central context for Midterm Long Essay.'
  },
  {
    lectureNum: 14,
    dateStr: 'October 22',
    title: 'Pontiac’s War, Royal Proclamation & Sullivan-Clinton (1763–1783)',
    coreThemes: [
      'General Jeffrey Amherst’s disastrous New British Order and smallpox blanket proposal',
      'Pontiac’s Resistance (1763) and Delaware Prophet Neolin’s nativist movement',
      'Royal Proclamation of 1763 and 1764 Treaty of Niagara (Sir William Johnson)',
      '1774 Quebec Act, colonial land speculation, and Declaration of Independence',
      '1779 Sullivan-Clinton Campaign ("Town Destroyer") and 1783 Treaty of Paris betrayal'
    ],
    keyFiguresNations: ['Pontiac (Obwaandi’eyaag)', 'Neolin', 'Amherst', 'William Johnson', 'Joseph Brant', 'George Washington'],
    crucialFacts: [
      'Amherst eliminated gift diplomacy, provoking pan-tribal war that took 9 forts.',
      'Proclamation reserved western lands as Indian hunting grounds, infuriating colonial speculators.',
      '1764 Treaty of Niagara ratified Proclamation via 84 wampum belts.',
      'Sullivan-Clinton burned 40 Haudenosaunee towns, causing intergenerational poverty.',
      '1783 Treaty of Paris ceded Great Lakes south without consulting Indigenous allies.'
    ],
    examSignificance: 'Oct 22 A & B; core foundation for the 1 Long Essay and Bonus questions.'
  }
];
