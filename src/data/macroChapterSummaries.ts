import { MacroChapterSummary } from '../types/macro';

export const macroChapterSummaries: MacroChapterSummary[] = [
  {
    chapter: 7,
    title: 'Chapter 7: GDP and the CPI: Tracking the Macroeconomy',
    subtitle: 'Measuring Aggregate Output, Economic Growth, and the Price Level',
    keyTopics: [
      {
        title: '1. National Economic Accounts & Circular Flow',
        points: [
          'Tracks spending flows between households, firms, government, and the rest of the world.',
          'Four main spending categories: Consumer spending (C), Government purchases (G), Investment spending (I), and Net Exports (X - IM).'
        ],
        formula: 'GDP = C + I + G + X - IM'
      },
      {
        title: '2. Gross Domestic Product (GDP)',
        points: [
          'Definition: The market value of all final goods and services produced within a country in a given year.',
          'Avoiding Double Counting: Only final goods are counted; intermediate goods and used goods are excluded.',
          'Value-Added Approach: Sum of (Value of sales - Cost of intermediate goods) for each producer.'
        ],
        formula: 'GDP per capita = GDP / Population'
      },
      {
        title: '3. Real vs. Nominal GDP',
        points: [
          'Nominal GDP is calculated using current market prices.',
          'Real GDP is calculated using constant prices of a base year, removing inflation distortion to measure true physical output changes.'
        ],
        formula: 'Real GDP = Σ (Base Year Price × Current Quantity)'
      },
      {
        title: '4. Price Indexes & Inflation',
        points: [
          'Market Basket: Hypothetical set of consumer goods representing typical urban family consumption.',
          'Consumer Price Index (CPI): Measures cost of market basket relative to base year.',
          'GDP Deflator: Ratio of Nominal GDP to Real GDP multiplied by 100.'
        ],
        formula: 'Inflation Rate = [(Index_2 - Index_1) / Index_1] × 100'
      }
    ]
  },
  {
    chapter: 8,
    title: 'Chapter 8: Unemployment and Inflation',
    subtitle: 'Measuring Joblessness and the Costs of Price Instability',
    keyTopics: [
      {
        title: '1. The Unemployment Rate & Types of Unemployment',
        points: [
          'Frictional Unemployment: Job search time for workers moving between jobs or entering the labor force.',
          'Structural Unemployment: Persistent mismatch between worker skills and available jobs (e.g., automation).',
          'Cyclical Unemployment: Deviations from the natural rate driven by business cycle recessions and economic downturns.'
        ],
        formula: 'Natural Rate of Unemployment = Frictional + Structural Unemployment'
      },
      {
        title: '2. The Costs of Inflation',
        points: [
          'Shoe-Leather Costs: Increased transaction costs and wasted time managing cash holdings during high inflation.',
          'Menu Costs: Real costs of changing listed prices and updating catalogs/software.',
          'Unit-of-Account Costs: Distortions in taxes, contracts, and financial accounting caused by a less reliable monetary yardstick.'
        ],
        formula: 'Real Income = (Nominal Income / CPI) × 100'
      },
      {
        title: '3. Nominal vs. Real Interest Rates',
        points: [
          'The real interest rate is the true economic cost of borrowing and payoff to lending.',
          'Fisher Effect: Expected future inflation drives up nominal interest rates one-for-one while leaving real interest rates unaffected.'
        ],
        formula: 'Real Interest Rate (r) = Nominal Interest Rate (i) - Inflation Rate (π)'
      }
    ]
  },
  {
    chapter: 10,
    title: 'Chapter 10: Savings, Investment Spending, and the Financial System',
    subtitle: 'The Loanable Funds Market, National Savings, and Crowding Out',
    keyTopics: [
      {
        title: '1. The Savings-Investment Spending Identity',
        points: [
          'In every economy, savings and investment spending are identically equal.',
          'Closed Economy Identity: Private savings + Public savings = Total Investment (S = I).',
          'Open Economy Identity: National savings = Investment + Net Foreign Investment (S = I + NFI).'
        ],
        formula: 'S_public = T - TR - G'
      },
      {
        title: '2. The Market for Loanable Funds',
        points: [
          'Channels household savings to firms desiring funds for physical capital investment.',
          'Demand for Loanable Funds: Slopes downward because lower interest rates make more investment projects profitable.',
          'Present Value (PV): Evaluates whether future returns exceed investment costs.'
        ],
        formula: 'PV = FV / (1 + r)^t'
      },
      {
        title: '3. Government Deficits & Crowding Out',
        points: [
          'Government budget deficits require public borrowing, shifting the demand for loanable funds to the right.',
          'Crowding Out: Government borrowing drives up the equilibrium interest rate, reducing private investment spending.'
        ]
      }
    ]
  }
];
