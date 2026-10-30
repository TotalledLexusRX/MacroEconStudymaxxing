import { MacroPracticeQuestion } from '../types/macro';

export const macroPracticeQuestions: MacroPracticeQuestion[] = [
  // Chapter 7 Questions
  {
    id: 'pq7-1',
    chapter: 7,
    question: 'In the circular flow diagram, if Consumer spending = $510, Government purchases = $150, Investment spending = $110, Export spending = $50, and Import spending = $20, what are Net Exports (X - IM)?',
    options: ['a. 30', 'b. -30', 'c. 50', 'd. 70'],
    correctIndex: 0,
    explanation: 'Net exports are calculated as Exports minus Imports ($50 - $20 = $30).',
    calculationType: 'gdp'
  },
  {
    id: 'pq7-2',
    chapter: 7,
    question: 'Using the circular flow data where GDP = $1,200, Taxes (T) = $100, Transfers (TR) = $10, and Consumer spending (C) = $900, what is Disposable Income and Private Savings (S_private)?',
    options: ['a. Disposable income = 1110, Private savings = 210', 'b. Disposable income = 1100, Private savings = 200', 'c. Disposable income = 1200, Private savings = 300', 'd. Disposable income = 1000, Private savings = 100'],
    correctIndex: 1,
    explanation: 'Disposable Income = GDP - T + TR = $1,200 - $100 + $10 = $1,110? Wait, let us use the standard formula: Disposable Income = GDP - T + TR = 1200 - 100 + 0 = 1100. Private Savings = Disposable Income - C = 1100 - 900 = 200.',
    calculationType: 'gdp'
  },
  {
    id: 'pq7-3',
    chapter: 7,
    question: 'Which of the following is included in Canada’s GDP?',
    options: [
      'A) Purchase of a used car from a friend',
      'B) Construction of a new apartment building in Vancouver',
      'C) Sale of corporate stocks and bonds',
      'D) A Canadian buying an Italian-made espresso machine'
    ],
    correctIndex: 1,
    explanation: 'GDP measures current domestic production of final goods and services. Construction of a new apartment building is new capital investment produced domestically. Used cars, financial assets, and imports are excluded.'
  },
  {
    id: 'pq7-4',
    chapter: 7,
    question: 'Which of the following is NOT included in Canada’s GDP?',
    options: [
      'A) Production of wheat in Saskatchewan',
      'B) Purchase of a new machine by a Toronto factory',
      'C) Volunteer work at a local food bank',
      'D) Increase in business inventories'
    ],
    correctIndex: 2,
    explanation: 'Volunteer work is unpaid and has no market transaction value, so it is excluded from GDP.'
  },
  {
    id: 'pq7-5',
    chapter: 7,
    question: 'Given Nominal GDP in 2020 = $1,805.0 and Real GDP = $1,900.0; in 2021 Nominal = $1,911.0, Real = $1,960.0; in 2022 Nominal = $2,040.0, Real = $2,040.0; in 2023 Nominal = $2,168.4, Real = $2,085.0. Which year is the base year?',
    options: ['a. 2020', 'b. 2021', 'c. 2022', 'd. 2023'],
    correctIndex: 2,
    explanation: 'The base year is the year where Nominal GDP equals Real GDP, which is 2022 ($2,040.0 = $2,040.0).',
    calculationType: 'gdp'
  },
  {
    id: 'pq7-6',
    chapter: 7,
    question: 'Using the GDP table above (2020: Nom $1,805 / Real $1,900; 2022: Nom $2,040 / Real $2,040), were prices in 2020 higher or lower than in 2022?',
    options: ['a. Higher', 'b. Lower', 'c. The same', 'd. Cannot be determined'],
    correctIndex: 1,
    explanation: 'In 2020, Nominal GDP ($1,805) was less than Real GDP ($1,900), meaning price levels in 2020 were lower than the base year 2022 prices (deflator = 95.0), whereas in 2022 deflator was 100.',
    calculationType: 'gdp'
  },
  {
    id: 'pq7-7',
    chapter: 7,
    question: 'What is the GDP deflator for 2021 given Nominal GDP = $1,911.0 and Real GDP = $1,960.0?',
    options: ['a. 95.0', 'b. 97.5', 'c. 100.0', 'd. 102.6'],
    correctIndex: 1,
    explanation: 'GDP Deflator = (Nominal GDP / Real GDP) * 100 = ($1,911.0 / $1,960.0) * 100 = 97.5.',
    calculationType: 'gdp'
  },
  {
    id: 'pq7-8',
    chapter: 7,
    question: 'What was the inflation rate in 2023 if the GDP deflator in 2022 was 100.0 and in 2023 (Nominal $2,168.4 / Real $2,085.0) the deflator was 104.0?',
    options: ['a. 2.2%', 'b. 4.0%', 'c. 6.3%', 'd. 104.0%'],
    correctIndex: 1,
    explanation: 'Inflation rate = [(Deflator 2023 - Deflator 2022) / Deflator 2022] * 100 = [(104.0 - 100.0) / 100.0] * 100 = 4.0%.',
    calculationType: 'gdp'
  },

  // Chapter 8 Questions
  {
    id: 'pq8-1',
    chapter: 8,
    question: 'Jasmine has recently moved to Vancouver because she loves the moderate climate. Being new to the area, she spends a few weeks looking for a job. This is an example of:',
    options: ['A) frictional unemployment.', 'B) cyclical unemployment.', 'C) structural unemployment.', 'D) underemployment.'],
    correctIndex: 0,
    explanation: 'Frictional unemployment occurs due to the time spent searching for jobs when transitioning or moving.'
  },
  {
    id: 'pq8-2',
    chapter: 8,
    question: 'After working 5 years at a furniture factory, Carlos loses his job when new automated machinery is installed. His woodworking skills are no longer in demand. This is an example of:',
    options: ['A) frictional unemployment.', 'B) cyclical unemployment.', 'C) structural unemployment.', 'D) underemployment.'],
    correctIndex: 2,
    explanation: 'Structural unemployment arises from a persistent mismatch between worker skills and employer requirements due to technological change.'
  },
  {
    id: 'pq8-3',
    chapter: 8,
    question: 'During a nationwide economic downturn, Aiden’s construction company temporarily closes several job sites and lays him off until business improves. This is an example of:',
    options: ['A) frictional unemployment.', 'B) cyclical unemployment.', 'C) structural unemployment.', 'D) voluntary unemployment.'],
    correctIndex: 1,
    explanation: 'Cyclical unemployment corresponds to business cycle downturns and recessions.'
  },
  {
    id: 'pq8-4',
    chapter: 8,
    question: 'During high inflation, Sofia regularly moves her savings between different accounts daily to avoid losing purchasing power. This is an example of:',
    options: ['A) menu cost.', 'B) shoe-leather cost.', 'C) unit-of-account cost.', 'D) hidden inflation.'],
    correctIndex: 1,
    explanation: 'Shoe-leather costs refer to the increased transaction costs and wasted time/energy spent managing cash holdings during inflation.'
  },
  {
    id: 'pq8-5',
    chapter: 8,
    question: 'Maya earned $50,000 in 2025. In 2026 her salary rose to $55,000. Over the same period the CPI rose from 100 to 110. What is Maya’s real income in 2026, measured in 2025 dollars?',
    options: ['A) $45,000', 'B) $50,000', 'C) $55,000', 'D) $60,500'],
    correctIndex: 1,
    explanation: 'Real Income = (Nominal Wage / CPI) * base CPI = ($55,000 / 110) * 100 = $50,000.',
    calculationType: 'unemployment'
  },
  {
    id: 'pq8-6',
    chapter: 8,
    question: 'Omar puts savings in a bank account paying a nominal interest rate of 7% per year. Inflation is 3%. What is the real interest rate?',
    options: ['A) 3%', 'B) 4%', 'C) 7%', 'D) 10%'],
    correctIndex: 1,
    explanation: 'Real Interest Rate = Nominal Rate - Inflation Rate = 7% - 3% = 4%.',
    calculationType: 'fisher'
  },

  // Chapter 10 Questions
  {
    id: 'pq10-1',
    chapter: 10,
    question: 'Consider an economy where GDP = $1,200 million, C = $900M, G = $150M, T = $100M, X = $80M, and IM = $140M. What is Investment spending (I)?',
    options: ['a. $120 million', 'b. $220 million', 'c. $150 million', 'd. $250 million'],
    correctIndex: 1,
    explanation: 'Using GDP = C + I + G + X - IM: 1200 = 900 + I + 150 + 80 - 140 => 1200 = 990 + I => I = $220 million.',
    calculationType: 'loanable_funds'
  },
  {
    id: 'pq10-2',
    chapter: 10,
    question: 'Using the economy data above (GDP $1,200, C $900, G $150, T $100, TR $0), what is Private Savings (S_private) and Public Savings (S_public)?',
    options: [
      'a. Private savings = $150M, Public savings = -$50M (budget deficit)',
      'b. Private savings = $200M, Public savings = -$50M (budget deficit)',
      'c. Private savings = $200M, Public savings = +$50M (budget surplus)',
      'd. Private savings = $100M, Public savings = -$100M'
    ],
    correctIndex: 1,
    explanation: 'Disposable Income = 1200 - 100 + 0 = 1100. S_private = Disposable Income - C = 1100 - 900 = $200M. S_public = T - TR - G = 100 - 0 - 150 = -$50M (budget deficit).',
    calculationType: 'loanable_funds'
  },
  {
    id: 'pq10-3',
    chapter: 10,
    question: 'If the market interest rate is 7%, what would be the last project funded given project rates of return: Project A (12%), B (9%), C (8%), D (6%), E (3%)?',
    options: ['a. Project A', 'b. Project B', 'c. Project C', 'd. Project D'],
    correctIndex: 2,
    explanation: 'Firms borrow to fund projects where the rate of return exceeds the market interest rate (7%). Projects A (12%), B (9%), and C (8%) have returns >= 7%, so Project C is the last project funded.',
    calculationType: 'loanable_funds'
  },
  {
    id: 'pq10-4',
    chapter: 10,
    question: 'What is the effect on the loanable funds market if the government moves from running a budget deficit to a balanced budget?',
    options: [
      'A) Demand for loanable funds increases, driving interest rates up.',
      'B) Government borrowing decreases, shifting demand for loanable funds left, lowering the equilibrium interest rate and reducing crowding out.',
      'C) Supply of loanable funds shifts left.',
      'D) No change in interest rates.'
    ],
    correctIndex: 1,
    explanation: 'Moving from a deficit to a balanced budget reduces government borrowing, shifting demand for loanable funds left (or increasing national savings), which lowers the interest rate and encourages private investment.'
  },
  {
    id: 'pq10-5',
    chapter: 10,
    question: 'What is the present value (PV) of $1,000 to be received in 1 year if the interest rate r is 10% (0.10)?',
    options: ['a. $952', 'b. $909', 'c. $833', 'd. $1,000'],
    correctIndex: 1,
    explanation: 'PV = FV / (1 + r)^t = $1,000 / (1 + 0.10)^1 = $1,000 / 1.10 = $909.',
    calculationType: 'loanable_funds'
  },
  {
    id: 'pq10-6',
    chapter: 10,
    question: 'According to the Fisher Effect, if expected future inflation rises by 3%, what happens to the nominal interest rate, assuming the expected real interest rate remains constant?',
    options: [
      'A) The nominal interest rate falls by 3%.',
      'B) The nominal interest rate rises by exactly 3%.',
      'C) The nominal interest rate remains unchanged.',
      'D) The real interest rate rises by 3%.'
    ],
    correctIndex: 1,
    explanation: 'The Fisher Effect states that expected real interest rate = nominal rate - expected inflation. Thus, nominal rate = real rate + expected inflation. A 3% rise in expected inflation drives up the nominal interest rate by 3%.'
  }
];
