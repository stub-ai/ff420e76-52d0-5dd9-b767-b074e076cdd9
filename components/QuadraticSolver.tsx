import React, { useState } from 'react';

const QuadraticSolver = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [solution, setSolution] = useState<{x1: number | string, x2: number | string}>({x1: '', x2: ''});

  const solveQuadratic = () => {
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
      setSolution({x1: 'No real solution', x2: 'No real solution'});
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setSolution({x1, x2});
    }
  };

  return (
    <div>
      <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} placeholder="Enter a" />
      <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} placeholder="Enter b" />
      <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} placeholder="Enter c" />
      <button onClick={solveQuadratic}>Solve</button>
      <p>Solution: x1 = {solution.x1}, x2 = {solution.x2}</p>
    </div>
  );
};

export default QuadraticSolver;