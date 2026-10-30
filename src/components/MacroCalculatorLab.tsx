import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

export const MacroCalculatorLab: React.FC = () => {
  // Calculator 1: GDP Deflator & Real GDP
  const [nominalGdp, setNominalGdp] = useState<number>(2040);
  const [realGdp, setRealGdp] = useState<number>(2040);

  // Calculator 2: Inflation Rate
  const [indexYear1, setIndexYear1] = useState<number>(100);
  const [indexYear2, setIndexYear2] = useState<number>(104);

  // Calculator 3: Present Value (PV)
  const [futureValue, setFutureValue] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(10); // percent
  const [years, setYears] = useState<number>(1);

  // Calculator 4: Fisher Effect / Real Interest Rate
  const [nominalRate, setNominalRate] = useState<number>(7);
  const [expectedInflation, setExpectedInflation] = useState<number>(3);

  // Results calculations
  const calcDeflator = realGdp > 0 ? ((nominalGdp / realGdp) * 100).toFixed(1) : '0';
  const calcInflation = indexYear1 > 0 ? (((indexYear2 - indexYear1) / indexYear1) * 100).toFixed(2) : '0';
  const rDecimal = interestRate / 100;
  const calcPv = (futureValue / Math.pow(1 + rDecimal, years)).toFixed(2);
  const calcRealInterest = (nominalRate - expectedInflation).toFixed(2);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-stone-200">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Macroeconomics Interactive Calculator Lab
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Test formulas and calculate GDP deflators, inflation rates, present values for loanable funds investments, and real interest rates instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calc 1: GDP Deflator */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-800" /> 1. GDP Deflator Calculator
            </h3>
            <span className="text-xs font-mono text-stone-600">Formula: (Nom / Real) × 100</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Nominal GDP ($ billions):
              </label>
              <input
                type="number"
                value={nominalGdp}
                onChange={(e) => setNominalGdp(Number(e.target.value))}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Real GDP ($ billions):
              </label>
              <input
                type="number"
                value={realGdp}
                onChange={(e) => setRealGdp(Number(e.target.value))}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
              />
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-950 uppercase">Calculated GDP Deflator:</span>
              <span className="font-mono text-xl font-bold text-stone-900">{calcDeflator}</span>
            </div>
          </div>
        </div>

        {/* Calc 2: Inflation Rate */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-800" /> 2. Inflation Rate Calculator
            </h3>
            <span className="text-xs font-mono text-stone-600">Formula: [(I₂ - I₁) / I₁] × 100</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Price Index Year 1 (Base/Earlier):
              </label>
              <input
                type="number"
                value={indexYear1}
                onChange={(e) => setIndexYear1(Number(e.target.value))}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Price Index Year 2 (Later):
              </label>
              <input
                type="number"
                value={indexYear2}
                onChange={(e) => setIndexYear2(Number(e.target.value))}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
              />
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-950 uppercase">Calculated Inflation Rate:</span>
              <span className="font-mono text-xl font-bold text-stone-900">{calcInflation}%</span>
            </div>
          </div>
        </div>

        {/* Calc 3: Present Value (Loanable Funds) */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-800" /> 3. Present Value (PV) Calculator
            </h3>
            <span className="text-xs font-mono text-stone-600">Formula: PV = FV / (1 + r)ᵗ</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Future Value Return ($):
              </label>
              <input
                type="number"
                value={futureValue}
                onChange={(e) => setFutureValue(Number(e.target.value))}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Interest Rate r (%):
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Years (t):
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-950 uppercase">Calculated Present Value:</span>
              <span className="font-mono text-xl font-bold text-stone-900">${calcPv}</span>
            </div>
          </div>
        </div>

        {/* Calc 4: Fisher Effect / Real Interest Rate */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-800" /> 4. Fisher Effect (Real Interest Rate)
            </h3>
            <span className="text-xs font-mono text-stone-600">Formula: r = i - π</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Nominal Interest Rate i (%):
              </label>
              <input
                type="number"
                step="0.1"
                value={nominalRate}
                onChange={(e) => setNominalRate(Number(e.target.value))}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Expected Inflation Rate π (%):
              </label>
              <input
                type="number"
                step="0.1"
                value={expectedInflation}
                onChange={(e) => setExpectedInflation(Number(e.target.value))}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm font-semibold"
              />
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-950 uppercase">Real Interest Rate (r):</span>
              <span className="font-mono text-xl font-bold text-stone-900">{calcRealInterest}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
