import { MacroTerm } from '../types/macro';

export const macroTerms: MacroTerm[] = [
  // Chapter 7
  {
    id: 'gdp',
    term: 'Gross Domestic Product (GDP)',
    chapter: 7,
    definition: 'The market value of all final goods and services produced within a country in a given time period (usually a year).',
    formula: 'GDP = C + I + G + X - IM'
  },
  {
    id: 'gdp-per-capita',
    term: 'GDP per capita',
    chapter: 7,
    definition: 'GDP divided by the total population, used as a broad measure of average economic output per person.',
    formula: 'GDP per capita = GDP / population'
  },
  {
    id: 'final-vs-intermediate',
    term: 'Final vs. Intermediate Goods',
    chapter: 7,
    definition: 'Final goods are goods and services purchased for final use by the ultimate consumer. Intermediate goods are goods and services bought from one firm by another to be used as inputs for resale or further manufacture (excluded from GDP to avoid double counting).',
    keyNote: 'Only final goods are counted in GDP.'
  },
  {
    id: 'value-added',
    term: 'Value-Added Approach',
    chapter: 7,
    definition: 'A method of calculating GDP by summing the value added by each producer, calculated as the value of sales minus the cost of intermediate goods.',
    formula: 'Value Added = Value of Sales - Cost of Intermediate Goods'
  },
  {
    id: 'expenditure-approach',
    term: 'Expenditure Approach',
    chapter: 7,
    definition: 'Calculating GDP by adding up total spending on domestically produced final goods and services across four sectors.',
    formula: 'GDP = C + I + G + (X - IM)'
  },
  {
    id: 'income-approach',
    term: 'Income Approach',
    chapter: 7,
    definition: 'Calculating GDP by summing all factor income earned from firms by factors of production (wages, interest, rent, profit) plus non-factor payments (net taxes and capital depreciation).',
    formula: 'GDP = Wages + Interest + Rent + Profit + Net Taxes + Depreciation'
  },
  {
    id: 'real-vs-nominal-gdp',
    term: 'Real vs. Nominal GDP',
    chapter: 7,
    definition: 'Nominal GDP is calculated using current prices. Real GDP is calculated using the constant prices of a specified base year, adjusting for inflation to measure physical output over time.',
    keyNote: 'Real GDP measures true physical output changes; Nominal GDP reflects both quantity and price changes.'
  },
  {
    id: 'market-basket',
    term: 'Market Basket',
    chapter: 7,
    definition: 'A hypothetical set of consumer goods and services purchased by a typical urban family, used to calculate price indexes like the CPI.'
  },
  {
    id: 'cpi',
    term: 'Consumer Price Index (CPI)',
    chapter: 7,
    definition: 'A measure of the cost of purchasing a given market basket in a given year relative to the cost of that same basket in a base year.',
    formula: 'CPI = (Cost of Market Basket in Given Year / Cost of Market Basket in Base Year) * 100'
  },
  {
    id: 'inflation-rate',
    term: 'Inflation Rate',
    chapter: 7,
    definition: 'The yearly percentage change in a price index (such as the CPI or GDP deflator).',
    formula: 'Inflation Rate = [(Price Index in Year 2 - Price Index in Year 1) / Price Index in Year 1] * 100'
  },
  {
    id: 'gdp-deflator',
    term: 'GDP Deflator',
    chapter: 7,
    definition: 'A price measure calculated as the ratio of nominal GDP to real GDP multiplied by 100.',
    formula: 'GDP Deflator = (Nominal GDP / Real GDP) * 100'
  },
  {
    id: 'ppi',
    term: 'Producer Price Index (PPI)',
    chapter: 7,
    definition: 'An index that measures changes in the prices of goods and services purchased by producers (wholesalers and manufacturers), often acting as an early indicator of inflation.'
  },

  // Chapter 8
  {
    id: 'frictional-unemployment',
    term: 'Frictional Unemployment',
    chapter: 8,
    definition: 'Unemployment due to the time workers spend searching for jobs (e.g., graduating students, people moving to a new city like Vancouver).'
  },
  {
    id: 'structural-unemployment',
    term: 'Structural Unemployment',
    chapter: 8,
    definition: 'Unemployment that occurs when there are more people seeking jobs in a labour market than there are jobs available at the current wage rate, often caused by automation, skill mismatches, or minimum wage laws.'
  },
  {
    id: 'cyclical-unemployment',
    term: 'Cyclical Unemployment',
    chapter: 8,
    definition: 'Unemployment that depends on the business cycle; deviations of the actual unemployment rate from the natural rate arising from economic downturns and recessions.'
  },
  {
    id: 'natural-rate-unemployment',
    term: 'Natural Rate of Unemployment',
    chapter: 8,
    definition: 'The normal rate of unemployment around which the actual unemployment rate fluctuates, equal to the sum of frictional and structural unemployment.'
  },
  {
    id: 'shoe-leather-costs',
    term: 'Shoe-Leather Costs',
    chapter: 8,
    definition: 'The increased transaction costs caused by inflation, such as the extra time and energy spent running to the bank to move money and avoid holding devalued cash.'
  },
  {
    id: 'menu-costs',
    term: 'Menu Costs',
    chapter: 8,
    definition: 'The real cost of changing listed prices during high inflation, such as updating online catalogs, in-store scanner prices, and printing new menus.'
  },
  {
    id: 'unit-of-account-costs',
    term: 'Unit-of-Account Costs',
    chapter: 8,
    definition: 'The costs arising from inflation making money a less reliable unit of measurement, distorting financial calculations, taxes, and contracts.'
  },
  {
    id: 'real-income',
    term: 'Real Income',
    chapter: 8,
    definition: 'Nominal income adjusted for inflation, measuring purchasing power.',
    formula: 'Real Income = (Nominal Income / CPI) * 100'
  },

  // Chapter 10
  {
    id: 'savings-investment-identity',
    term: 'Savings-Investment Spending Identity',
    chapter: 10,
    definition: 'An accounting identity stating that savings and investment spending are always equal for the economy as a whole.',
    formula: 'In a closed economy: S = I'
  },
  {
    id: 'budget-surplus-deficit',
    term: 'Budget Surplus and Deficit',
    chapter: 10,
    definition: 'A budget surplus occurs when tax revenue exceeds government spending (T > G + TR). A budget deficit occurs when government spending exceeds tax revenue (G + TR > T), resulting in public dissaving.',
    formula: 'S_public = T - TR - G'
  },
  {
    id: 'national-savings',
    term: 'National Savings',
    chapter: 10,
    definition: 'The total sum of private savings (by households and firms) plus public (government) savings.',
    formula: 'S_national = S_private + S_public'
  },
  {
    id: 'net-foreign-investment',
    term: 'Net Foreign Investment (NFI)',
    chapter: 10,
    definition: 'The difference between the total outflow of funds to foreign countries (capital outflows) and the total inflow of foreign funds (capital inflows).',
    formula: 'NFI = X - IM (in an open economy, S_national = I + NFI)'
  },
  {
    id: 'loanable-funds-market',
    term: 'Market for Loanable Funds',
    chapter: 10,
    definition: 'A hypothetical financial market that illustrates how savers (supply) and borrowers/firms (demand) interact, with the price of loans being the nominal interest rate.'
  },
  {
    id: 'present-value',
    term: 'Present Value (PV)',
    chapter: 10,
    definition: 'The amount of money needed today to realize a given future value, given the prevailing interest rate. Firms invest if PV of future return exceeds the cost of investment.',
    formula: 'PV = FV / (1 + r)^t'
  },
  {
    id: 'crowding-out',
    term: 'Crowding Out',
    chapter: 10,
    definition: 'Occurs when a government budget deficit drives up the interest rate in the loanable funds market, leading to reduced private investment spending.'
  },
  {
    id: 'fisher-effect',
    term: 'The Fisher Effect',
    chapter: 10,
    definition: 'States that the expected real interest rate is unaffected by changes in expected future inflation, so an increase in expected future inflation drives up the nominal interest rate on a one-for-one basis.',
    formula: 'Real Interest Rate (r) = Nominal Interest Rate (i) - Inflation Rate (π)'
  }
];
