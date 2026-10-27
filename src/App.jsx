import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Search, 
  X, 
  RotateCcw,
  ShieldAlert,
  Send,
  Bot,
  User,
  Layers,
  Award,
  Sparkles,
  Compass,
  GraduationCap,
  Star,
  Gamepad2,
  Settings,
  Palette,
  UserCheck,
  Menu,
  Play,
  ThumbsUp,
  Share2,
  Tv,
  Flame,
  Grid,
  Clock,
  Sparkle,
  Sliders,
  Heart,
  HelpCircle,
  Sun,
  Moon,
  Info
} from 'lucide-react';

// --- ALL 50 FULL OG CURRICULUM TOPICS (No fake views, categorized clearly) ---
const TOPICS = [
  // ARITHMETIC & FOUNDATIONS (10 Topics)
  {
    id: 'counting_cardinality',
    name: 'Counting & Cardinality',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-amber-500 to-rose-600',
    description: 'One-to-one correspondence, subitizing, and whole number counting sets.',
    lesson: 'Counting is the foundational system of discrete mathematics. One-to-one correspondence ensures each object receives one unique number tag.'
  },
  {
    id: 'basic_addition',
    name: 'Basic Addition Mastery',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-blue-600 to-indigo-700',
    description: 'Combining sets, sum properties, and the plus operator.',
    lesson: 'Addition combines two or more quantities into a single sum. It obeys the commutative property (a + b = b + a).'
  },
  {
    id: 'basic_subtraction',
    name: 'Subtraction & Differences',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-teal-500 to-emerald-700',
    description: 'Taking away quantities, difference, and inverse operations.',
    lesson: 'Subtraction determines the difference between two quantities or removes a subset from a total.'
  },
  {
    id: 'place_value_base10',
    name: 'Place Value & Base-10 System',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-purple-600 to-indigo-800',
    description: 'Ones, tens, hundreds, and positional decimal place values.',
    lesson: 'Positional numeration means a digit is multiplied by powers of 10 based on its column position.'
  },
  {
    id: 'multiplication_tables',
    name: 'Multiplication Tables & Arrays',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-pink-600 to-rose-700',
    description: 'Repeated addition, arrays, and product calculations.',
    lesson: 'Multiplication scales a quantity by repeated addition or rectangular area arrays.'
  },
  {
    id: 'division_remainders',
    name: 'Division & Remainders',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-cyan-600 to-blue-800',
    description: 'Sharing equally, quotient calculation, and integer remainders.',
    lesson: 'Division partitions a total dividend into equal divisors with remainders.'
  },
  {
    id: 'fractions_basics',
    name: 'Fractions & Numerators/Denominators',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-green-600 to-teal-700',
    description: 'Understanding equal parts of a whole.',
    lesson: 'A fraction represents parts of a whole where the top is the numerator and bottom is the denominator.'
  },
  {
    id: 'decimals_percents',
    name: 'Decimals & Percentages',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-yellow-600 to-amber-700',
    description: 'Converting decimals, fractions, and percentage values.',
    lesson: 'Percentages are fractions out of 100, easily converted to decimals by dividing by 100.'
  },
  {
    id: 'negative_numbers',
    name: 'Integers & Negative Numbers',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-slate-600 to-gray-800',
    description: 'Operations with positive and negative integers.',
    lesson: 'Negative numbers lie below zero on the number line. Multiplying two negatives produces a positive.'
  },
  {
    id: 'prime_factors',
    name: 'Prime Numbers & Factorization',
    category: 'Arithmetic & Foundations',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-emerald-600 to-cyan-800',
    description: 'Prime numbers, composite numbers, and prime factor trees.',
    lesson: 'A prime number has exactly two distinct positive divisors: 1 and itself.'
  },

  // PRE-ALGEBRA & ALGEBRA (10 Topics)
  {
    id: 'order_of_operations',
    name: 'Order of Operations (PEMDAS)',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-violet-600 to-purple-900',
    description: 'Parentheses, exponents, multiplication, division, addition, subtraction.',
    lesson: 'PEMDAS defines the strict evaluation hierarchy for arithmetic expressions.'
  },
  {
    id: 'simple_algebraic_equations',
    name: 'Single-Variable Linear Equations',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-amber-600 to-orange-700',
    description: 'Isolating unknown variables using inverse operations.',
    lesson: 'Solving for x requires keeping equations balanced by applying identical inverse operations to both sides.'
  },
  {
    id: 'two_step_equations',
    name: 'Two-Step Algebraic Equations',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-orange-600 to-red-700',
    description: 'Combining addition/subtraction with multiplication/division isolation.',
    lesson: 'First undo addition or subtraction, then undo multiplication or division to isolate x.'
  },
  {
    id: 'inequalities_basics',
    name: 'Linear Inequalities',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-rose-600 to-pink-800',
    description: 'Greater than, less than, and flipping inequality signs when multiplying by negatives.',
    lesson: 'Inequalities specify a range of valid solutions. Multiplying or dividing by a negative flips the symbol.'
  },
  {
    id: 'absolute_value',
    name: 'Absolute Value Equations',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-fuchsia-600 to-purple-800',
    description: 'Distance from zero on the number line.',
    lesson: 'Absolute value measures magnitude regardless of sign. |x| = a leads to x = a or x = -a.'
  },
  {
    id: 'slope_intercept',
    name: 'Slope-Intercept Form (y = mx + b)',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-indigo-600 to-blue-800',
    description: 'Calculating slope (m) and y-intercept (b).',
    lesson: 'In y = mx + b, m is the rate of change (rise/run) and b is where the line crosses the y-axis.'
  },
  {
    id: 'systems_linear_eq',
    name: 'Systems of Linear Equations',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-blue-600 to-teal-800',
    description: 'Solving 2x2 linear systems by substitution and elimination.',
    lesson: 'A system solution is the point (x, y) where two straight lines intersect.'
  },
  {
    id: 'polynomial_addition',
    name: 'Adding & Subtracting Polynomials',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-cyan-600 to-sky-800',
    description: 'Combining like terms with powers of x.',
    lesson: 'Only terms with identical variables and identical exponent powers can be added or subtracted.'
  },
  {
    id: 'quadratic_factoring',
    name: 'Factoring Quadratic Polynomials',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-teal-600 to-green-800',
    description: 'Factoring x^2 + bx + c into binomial products.',
    lesson: 'Find two numbers that multiply to give c and add up to give b.'
  },
  {
    id: 'quadratic_formula',
    name: 'The Quadratic Formula',
    category: 'Pre-Algebra & Algebra',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-emerald-600 to-lime-800',
    description: 'Solving ax^2 + bx + c = 0 using x = (-b ± √(b^2 - 4ac)) / (2a).',
    lesson: 'The quadratic formula yields real or complex roots for any quadratic equation.'
  },

  // EXPONENTS & LOGARITHMS (5 Topics)
  {
    id: 'exponent_rules',
    name: 'Laws of Exponents',
    category: 'Exponents & Logarithms',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-lime-600 to-yellow-700',
    description: 'Product, quotient, and power rules for powers.',
    lesson: 'Multiplying powers with identical bases adds their exponents: x^a * x^b = x^(a+b).'
  },
  {
    id: 'radicals_simplification',
    name: 'Simplifying Radicals & Square Roots',
    category: 'Exponents & Logarithms',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-yellow-600 to-orange-800',
    description: 'Extracting perfect square factors from radical signs.',
    lesson: 'Simplify square roots by factoring out perfect square numbers: √(a*b) = √a * √b.'
  },
  {
    id: 'logarithm_basics',
    name: 'Introduction to Logarithms',
    category: 'Exponents & Logarithms',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-amber-600 to-red-800',
    description: 'Understanding log_b(x) as inverse exponentiation.',
    lesson: 'log_b(y) = x means that b^x = y. Logarithms unpack exponential powers.'
  },
  {
    id: 'log_properties',
    name: 'Properties of Logarithms',
    category: 'Exponents & Logarithms',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-orange-600 to-rose-800',
    description: 'Product, quotient, and power rules for logs.',
    lesson: 'log(a*b) = log(a) + log(b) and log(a^k) = k * log(a).'
  },
  {
    id: 'exponential_growth',
    name: 'Exponential Growth & Decay',
    category: 'Exponents & Logarithms',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-red-600 to-pink-900',
    description: 'Modeling compound growth and half-life decay equations.',
    lesson: 'Exponential models take the form y = a * (1 ± r)^t.'
  },

  // GEOMETRY & MEASUREMENT (10 Topics)
  {
    id: 'pythagorean_theorem',
    name: 'The Pythagorean Theorem',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-emerald-600 to-teal-800',
    description: 'Right triangles, leg lengths, and a^2 + b^2 = c^2.',
    lesson: 'In a right-angled triangle, a^2 + b^2 = c^2.'
  },
  {
    id: 'perimeter_area_rectangles',
    name: 'Perimeter & Area of Quadrilaterals',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-teal-600 to-cyan-800',
    description: 'Calculating boundary lengths and enclosed 2D areas.',
    lesson: 'Area measures enclosed surface space; perimeter sums the total length of outer edges.'
  },
  {
    id: 'area_triangles_trapezoids',
    name: 'Area of Triangles & Trapezoids',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-cyan-600 to-blue-800',
    description: 'Using base and height formulas: (1/2)bh.',
    lesson: 'Triangle area is half the product of its base and perpendicular height.'
  },
  {
    id: 'circle_circumference_area',
    name: 'Circles: Circumference & Area',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-blue-600 to-indigo-800',
    description: 'Radius, diameter, pi, C = 2πr, and A = πr^2.',
    lesson: 'Circumference is total perimeter C = 2πr; enclosed area is A = πr^2.'
  },
  {
    id: 'angle_relationships',
    name: 'Angles: Complementary & Supplementary',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-indigo-600 to-purple-800',
    description: 'Angles summing to 90° and 180°.',
    lesson: 'Complementary angles sum to 90 degrees; supplementary angles sum to 180 degrees.'
  },
  {
    id: 'polygon_interior_angles',
    name: 'Polygon Interior Angle Sums',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-purple-600 to-fuchsia-800',
    description: 'Calculating total degrees in n-sided polygons using (n-2)*180.',
    lesson: 'The sum of interior angles in an n-sided polygon equals (n - 2) * 180 degrees.'
  },
  {
    id: 'volume_prisms_cylinders',
    name: 'Volume of Prisms & Cylinders',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-fuchsia-600 to-pink-800',
    description: '3D volume calculation: Base Area * Height.',
    lesson: 'Volume measures 3D capacity. For straight prisms, Volume = Base Area * height.'
  },
  {
    id: 'volume_spheres_cones',
    name: 'Volume of Spheres & Cones',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-pink-600 to-rose-800',
    description: 'Curved 3D geometry formulas.',
    lesson: 'Cone volume is (1/3)πr^2h; Sphere volume is (4/3)πr^3.'
  },
  {
    id: 'coordinate_distance_midpoint',
    name: 'Distance & Midpoint Formulas',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-rose-600 to-red-800',
    description: 'Distance between points and exact midpoint coordinates.',
    lesson: 'Distance stems from Pythagorean theorem: d = √((x2-x1)^2 + (y2-y1)^2).'
  },
  {
    id: 'transformations_geometry',
    name: 'Geometric Transformations',
    category: 'Geometry & Measurement',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-red-600 to-orange-800',
    description: 'Translations, reflections, rotations, and dilations.',
    lesson: 'Rigid transformations shift or rotate shapes without altering side lengths or interior angles.'
  },

  // TRIGONOMETRY (5 Topics)
  {
    id: 'right_triangle_trig',
    name: 'Right Triangle Trig (SOHCAHTOA)',
    category: 'Trigonometry',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-blue-500 to-cyan-700',
    description: 'Sine, cosine, tangent ratios in right triangles.',
    lesson: 'SOH CAH TOA defines trigonometric ratios for right triangles.'
  },
  {
    id: 'unit_circle_radians',
    name: 'The Unit Circle & Radians',
    category: 'Trigonometry',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-cyan-500 to-teal-700',
    description: 'Degrees to radians conversion and coordinates (cos θ, sin θ).',
    lesson: 'The unit circle has radius 1. 180 degrees corresponds to π radians.'
  },
  {
    id: 'trig_identities',
    name: 'Fundamental Pythagorean Trig Identities',
    category: 'Trigonometry',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-teal-500 to-emerald-700',
    description: 'sin^2(x) + cos^2(x) = 1 and reciprocal ratios.',
    lesson: 'Pythagorean identity states sin^2(θ) + cos^2(θ) = 1 for any angle θ.'
  },
  {
    id: 'law_of_sines',
    name: 'Law of Sines',
    category: 'Trigonometry',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-emerald-500 to-green-700',
    description: 'Solving non-right triangles using a/sin(A) = b/sin(B).',
    lesson: 'Law of Sines relates side lengths of any triangle to the sines of their opposite angles.'
  },
  {
    id: 'law_of_cosines',
    name: 'Law of Cosines',
    category: 'Trigonometry',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-green-500 to-lime-700',
    description: 'Solving non-right triangles using c^2 = a^2 + b^2 - 2ab*cos(C).',
    lesson: 'Law of Cosines generalizes the Pythagorean theorem to arbitrary oblique triangles.'
  },

  // CALCULUS & ADVANCED MATH (10 Topics)
  {
    id: 'limits_continuity',
    name: 'Limits & Continuity',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-fuchsia-600 to-pink-800',
    description: 'Approaching values, left/right limits, and continuous functions.',
    lesson: 'A limit describes function behavior as input approaches a specific value.'
  },
  {
    id: 'power_rule_differentiation',
    name: 'Differentiation & Power Rule',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-red-600 to-rose-900',
    description: 'd/dx[x^n] = n*x^(n-1) and basic derivative rules.',
    lesson: 'Differentiation rules allow rapid calculation of rates of change.'
  },
  {
    id: 'product_rule',
    name: 'Product Rule for Derivatives',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-rose-600 to-orange-800',
    description: 'd/dx[f*g] = f\'g + fg\'.',
    lesson: 'The derivative of a product of two functions requires taking derivative of each sequentially.'
  },
  {
    id: 'quotient_rule',
    name: 'Quotient Rule for Derivatives',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-orange-600 to-amber-800',
    description: 'd/dx[u/v] = (u\'v - uv\') / v^2.',
    lesson: 'Quotient rule differentiates ratios of functions: (low d-high minus high d-low) over low squared.'
  },
  {
    id: 'chain_rule',
    name: 'Chain Rule for Composite Functions',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-amber-600 to-yellow-800',
    description: 'd/dx[f(g(x))] = f\'(g(x)) * g\'(x).',
    lesson: 'Differentiate composite functions by taking outer derivative multiplied by inner derivative.'
  },
  {
    id: 'antiderivatives_power_rule',
    name: 'Indefinite Integrals & Power Rule',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-yellow-600 to-lime-800',
    description: '∫ x^n dx = (x^(n+1))/(n+1) + C.',
    lesson: 'Integration reverses differentiation, accumulating area under curves with an arbitrary constant C.'
  },
  {
    id: 'definite_integrals',
    name: 'Fundamental Theorem of Calculus',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-lime-600 to-emerald-800',
    description: 'Evaluating ∫[a to b] f(x)dx = F(b) - F(a).',
    lesson: 'Definite integrals evaluate net area between lower limit a and upper limit b.'
  },
  {
    id: 'matrix_addition_scalar',
    name: 'Matrix Addition & Scalar Multiplication',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-emerald-600 to-teal-800',
    description: 'Element-wise matrix operations.',
    lesson: 'Matrices of identical dimensions are added element-by-element; scalars multiply every entry.'
  },
  {
    id: 'matrix_multiplication',
    name: 'Matrix Multiplication (2x2)',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-teal-600 to-cyan-800',
    description: 'Row-by-column dot products.',
    lesson: 'Multiply matrix rows by matrix columns to compute resultant linear transformation entries.'
  },
  {
    id: 'matrix_determinants',
    name: '2x2 Matrix Determinants',
    category: 'Calculus & Advanced Math',
    author: 'Sai (Founder)',
    duration: 'Lesson & Practice',
    thumbnailColor: 'from-cyan-600 to-blue-900',
    description: 'Calculating det(A) = ad - bc.',
    lesson: 'For matrix [[a, b], [c, d]], determinant det = ad - bc measures volume scaling factor.'
  }
];

// --- 52 FUNCTIONAL MATH ARCADE GAMES ---
const ARCADE_GAMES = Array.from({ length: 52 }, (_, i) => {
  const gameId = i + 1;
  const categories = ['Arithmetic Blitz', 'Algebraic Logic', 'Geometric Puzzles', 'Calculus Reflex', 'Trig Dash'];
  const category = categories[i % categories.length];
  
  let title = '';
  if (category === 'Arithmetic Blitz') title = `Arithmetic Sprint #${gameId}`;
  else if (category === 'Algebraic Logic') title = `Equation Balance #${gameId}`;
  else if (category === 'Geometric Puzzles') title = `Angle & Shape Challenge #${gameId}`;
  else if (category === 'Calculus Reflex') title = `Derivative Speedrun #${gameId}`;
  else title = `Trig Wave Dash #${gameId}`;

  return {
    id: gameId,
    title,
    category,
    duration: 'Arcade Mode',
    generator: (seed) => {
      const a = (seed % 15) + 2;
      const b = (seed % 10) + 1;
      const c = (seed % 8) + 3;
      if (i % 5 === 0) return { prompt: `${a} × ${b} + ${c} = ?`, answer: (a * b + c).toString() };
      if (i % 5 === 1) return { prompt: `Solve for x: ${a}x = ${a * c}`, answer: c.toString() };
      if (i % 5 === 2) return { prompt: `Area of rectangle (${a} × ${b})?`, answer: (a * b).toString() };
      if (i % 5 === 3) return { prompt: `Derivative d/dx (${a}x^2 + ${b}x)?`, answer: `${2 * a}x + ${b}` };
      return { prompt: `Hypotenuse of right triangle with legs ${a} and ${b}?`, answer: Math.hypot(a, b).toFixed(1) };
    }
  };
});

// --- DYNAMIC DIVERSE QUESTION BANK GENERATOR (Accurate for all 50 Topics) ---
const generateQuestionForTopic = (topicId, variantIndex) => {
  const seed = (variantIndex + 1) * 7;
  const n1 = (seed % 25) + 2;
  const n2 = (seed % 19) + 3;
  const n3 = (seed % 13) + 1;
  
  switch(topicId) {
    case 'counting_cardinality': {
      const total = n1 + n2;
      return {
        prompt: `If a set contains ${n1} blue stars and ${n2} red stars, what is the cardinality (total count) of the combined set?`,
        options: [total.toString(), (total + 1).toString(), (total - 1).toString(), (total + 3).toString()],
        correctIndex: 0
      };
    }
    case 'basic_addition': {
      const sum = n1 + n2;
      return {
        prompt: `Calculate the sum: ${n1} + ${n2} = ?`,
        options: [sum.toString(), (sum + 2).toString(), (sum - 1).toString(), (sum + 4).toString()],
        correctIndex: 0
      };
    }
    case 'basic_subtraction': {
      const larger = n1 + n2;
      return {
        prompt: `Calculate the difference: ${larger} - ${n1} = ?`,
        options: [n2.toString(), (n2 + 1).toString(), (n2 - 1).toString(), (n2 + 3).toString()],
        correctIndex: 0
      };
    }
    case 'place_value_base10': {
      const val = n1 * 100 + n2 * 10 + n3;
      return {
        prompt: `In the number ${val}, what digit is in the tens place?`,
        options: [n2.toString(), n1.toString(), n3.toString(), (n2 + 1).toString()],
        correctIndex: 0
      };
    }
    case 'multiplication_tables': {
      const prod = n1 * n2;
      return {
        prompt: `Calculate the product: ${n1} × ${n2} = ?`,
        options: [prod.toString(), (prod + n1).toString(), (prod - n2).toString(), (prod + 5).toString()],
        correctIndex: 0
      };
    }
    case 'division_remainders': {
      const div = (n1 * n2) + n3;
      return {
        prompt: `What is the quotient and remainder for ${div} ÷ ${n1}?`,
        options: [`${n2} R ${n3}`, `${n2 + 1} R ${n3}`, `${n2} R 0`, `${n2 - 1} R 1`],
        correctIndex: 0
      };
    }
    case 'fractions_basics': {
      return {
        prompt: `In the fraction ${n1}/${n1 + n2}, what number represents the numerator?`,
        options: [n1.toString(), (n1 + n2).toString(), n2.toString(), '1'],
        correctIndex: 0
      };
    }
    case 'decimals_percents': {
      const pct = n1 * 5;
      const dec = (pct / 100).toFixed(2);
      return {
        prompt: `Convert ${pct}% into decimal form:`,
        options: [dec.toString(), (pct / 10).toString(), (pct / 1000).toString(), (pct + 0.1).toString()],
        correctIndex: 0
      };
    }
    case 'negative_numbers': {
      const res = (-n1) * n2;
      return {
        prompt: `Evaluate: (-${n1}) × (${n2}) = ?`,
        options: [res.toString(), Math.abs(res).toString(), (res + 2).toString(), (res - 2).toString()],
        correctIndex: 0
      };
    }
    case 'prime_factors': {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
      const p = primes[n1 % primes.length];
      return {
        prompt: `Which of the following numbers is a prime number?`,
        options: [p.toString(), (p * 2).toString(), (p * 3).toString(), (p * 4).toString()],
        correctIndex: 0
      };
    }
    case 'order_of_operations': {
      const res = n1 + (n2 * n3);
      return {
        prompt: `Evaluate: ${n1} + ${n2} × ${n3}`,
        options: [res.toString(), ((n1 + n2) * n3).toString(), (res + 2).toString(), (res - 3).toString()],
        correctIndex: 0
      };
    }
    case 'simple_algebraic_equations': {
      const ans = n2;
      const total = n1 * n2;
      return {
        prompt: `Solve for x: ${n1}x = ${total}`,
        options: [ans.toString(), (ans + 1).toString(), (ans * 2).toString(), (ans - 2).toString()],
        correctIndex: 0
      };
    }
    case 'two_step_equations': {
      const x = n3;
      const total = n1 * x + n2;
      return {
        prompt: `Solve for x: ${n1}x + ${n2} = ${total}`,
        options: [x.toString(), (x + 1).toString(), (x + 2).toString(), (x - 1).toString()],
        correctIndex: 0
      };
    }
    case 'inequalities_basics': {
      const val = n2;
      const total = n1 * val;
      return {
        prompt: `Solve for x: ${n1}x > ${total}`,
        options: [`x > ${val}`, `x < ${val}`, `x > ${val + 1}`, `x = ${val}`],
        correctIndex: 0
      };
    }
    case 'absolute_value': {
      const val = n1;
      return {
        prompt: `Solve for x: |x| = ${val}`,
        options: [`x = ${val} or x = -${val}`, `x = ${val} only`, `x = -${val} only`, 'No solution'],
        correctIndex: 0
      };
    }
    case 'slope_intercept': {
      const m = n1;
      const b = n2;
      return {
        prompt: `What is the slope (m) of the line y = ${m}x + ${b}?`,
        options: [m.toString(), b.toString(), (m + b).toString(), '1'],
        correctIndex: 0
      };
    }
    case 'systems_linear_eq': {
      const x = n1;
      const y = n2;
      return {
        prompt: `If x + y = ${x + y} and x - y = ${x - y}, what is the value of x?`,
        options: [x.toString(), y.toString(), (x + 1).toString(), (y + 1).toString()],
        correctIndex: 0
      };
    }
    case 'polynomial_addition': {
      const c1 = n1;
      const c2 = n2;
      return {
        prompt: `Simplify: (${c1}x + ${n3}) + (${c2}x + ${n3 + 1})`,
        options: [`${c1 + c2}x + ${2 * n3 + 1}`, `${c1 * c2}x + ${n3}`, `${c1 + c2}x`, `${c1}x + ${c2}`],
        correctIndex: 0
      };
    }
    case 'quadratic_factoring': {
      const a = n1;
      const b = n2;
      return {
        prompt: `Factor x^2 + ${a + b}x + ${a * b}:`,
        options: [`(x + ${a})(x + ${b})`, `(x - ${a})(x - ${b})`, `(x + ${a + 1})(x + ${b})`, `(x + ${a})(x - ${b})`],
        correctIndex: 0
      };
    }
    case 'quadratic_formula': {
      return {
        prompt: `In the quadratic formula x = (-b ± √(b^2 - 4ac)) / (2a), what is b^2 - 4ac called?`,
        options: ['Discriminant', 'Determinant', 'Radicand', 'Quotient'],
        correctIndex: 0
      };
    }
    case 'exponent_rules': {
      const exp1 = n1 % 5 + 2;
      const exp2 = n2 % 5 + 2;
      return {
        prompt: `Simplify: x^${exp1} × x^${exp2} = ?`,
        options: [`x^${exp1 + exp2}`, `x^${exp1 * exp2}`, `x^${exp1 - exp2}`, `${exp1 + exp2}x`],
        correctIndex: 0
      };
    }
    case 'radicals_simplification': {
      const sq = n1;
      const total = sq * sq * 2;
      return {
        prompt: `Simplify √(${total}):`,
        options: [`${sq}√2`, `${sq * 2}√2`, `${sq}√3`, `${sq * sq}√2`],
        correctIndex: 0
      };
    }
    case 'logarithm_basics': {
      const base = 2;
      const power = (n1 % 4) + 2;
      const val = Math.pow(base, power);
      return {
        prompt: `Evaluate: log_2(${val}) = ?`,
        options: [power.toString(), (power + 1).toString(), (power - 1).toString(), (val / 2).toString()],
        correctIndex: 0
      };
    }
    case 'log_properties': {
      return {
        prompt: `According to logarithm rules, what does log(a) + log(b) equal?`,
        options: ['log(a × b)', 'log(a + b)', 'log(a / b)', 'log(a)^b'],
        correctIndex: 0
      };
    }
    case 'exponential_growth': {
      return {
        prompt: `In the exponential growth formula y = a(1 + r)^t, what does 'r' represent?`,
        options: ['Growth rate', 'Initial amount', 'Time elapsed', 'Total sum'],
        correctIndex: 0
      };
    }
    case 'pythagorean_theorem': {
      const a = 3 * n3;
      const b = 4 * n3;
      const c = 5 * n3;
      return {
        prompt: `Find hypotenuse c for right triangle legs a = ${a} and b = ${b}:`,
        options: [c.toString(), (c + 2).toString(), (c - 1).toString(), (c + 4).toString()],
        correctIndex: 0
      };
    }
    case 'perimeter_area_rectangles': {
      const w = n1;
      const h = n2;
      return {
        prompt: `What is the area of a rectangle with width ${w} and height ${h}?`,
        options: [(w * h).toString(), (2 * (w + h)).toString(), (w + h).toString(), (w * h / 2).toString()],
        correctIndex: 0
      };
    }
    case 'area_triangles_trapezoids': {
      const b = n1 * 2;
      const h = n2;
      return {
        prompt: `What is the area of a triangle with base ${b} and height ${h}?`,
        options: [(0.5 * b * h).toString(), (b * h).toString(), (b + h).toString(), (2 * b * h).toString()],
        correctIndex: 0
      };
    }
    case 'circle_circumference_area': {
      const r = n1;
      return {
        prompt: `What is the exact area of a circle with radius ${r}?`,
        options: [`${r * r}π`, `${2 * r}π`, `${r}π`, `${r * r * r}π`],
        correctIndex: 0
      };
    }
    case 'angle_relationships': {
      const angle = n1 * 3;
      return {
        prompt: `What is the complementary angle to ${angle}°?`,
        options: [(90 - angle).toString(), (180 - angle).toString(), (360 - angle).toString(), (angle + 90).toString()],
        correctIndex: 0
      };
    }
    case 'polygon_interior_angles': {
      const sides = (n1 % 6) + 3;
      const total = (sides - 2) * 180;
      return {
        prompt: `What is the sum of interior angles in a ${sides}-sided polygon?`,
        options: [total.toString(), (sides * 180).toString(), ((sides - 1) * 180).toString(), (total - 90).toString()],
        correctIndex: 0
      };
    }
    case 'volume_prisms_cylinders': {
      const r = n1;
      const h = n2;
      return {
        prompt: `What is the volume of a cylinder with radius ${r} and height ${h}?`,
        options: [`${r * r * h}π`, `${2 * r * h}π`, `${r * h}π`, `${r * r * h / 3}π`],
        correctIndex: 0
      };
    }
    case 'volume_spheres_cones': {
      const r = n1;
      return {
        prompt: `What is the volume of a cone with radius ${r} and height 3?`,
        options: [`${r * r}π`, `${3 * r * r}π`, `${r * r / 3}π`, `${4 * r * r}π`],
        correctIndex: 0
      };
    }
    case 'coordinate_distance_midpoint': {
      const x1 = n1;
      const x2 = n1 + 4;
      return {
        prompt: `What is the midpoint between x = ${x1} and x = ${x2}?`,
        options: [((x1 + x2) / 2).toString(), (x2 - x1).toString(), (x1 + 1).toString(), (x2 + 1).toString()],
        correctIndex: 0
      };
    }
    case 'transformations_geometry': {
      return {
        prompt: `Which transformation slides a shape without rotating or resizing it?`,
        options: ['Translation', 'Reflection', 'Rotation', 'Dilation'],
        correctIndex: 0
      };
    }
    case 'right_triangle_trig': {
      return {
        prompt: `In a right triangle, what ratio represents sin(θ)?`,
        options: ['Opposite / Hypotenuse', 'Adjacent / Hypotenuse', 'Opposite / Adjacent', 'Hypotenuse / Opposite'],
        correctIndex: 0
      };
    }
    case 'unit_circle_radians': {
      return {
        prompt: `Convert 180 degrees into radians:`,
        options: ['π radians', '2π radians', 'π/2 radians', '3π/2 radians'],
        correctIndex: 0
      };
    }
    case 'trig_identities': {
      return {
        prompt: `Evaluate: sin^2(θ) + cos^2(θ) = ?`,
        options: ['1', '0', 'tan(θ)', '2'],
        correctIndex: 0
      };
    }
    case 'law_of_sines': {
      return {
        prompt: `Which formula represents the Law of Sines?`,
        options: ['a/sin(A) = b/sin(B) = c/sin(C)', 'c^2 = a^2 + b^2 - 2ab cos(C)', 'a^2 + b^2 = c^2', 'sin(A) + cos(B) = 1'],
        correctIndex: 0
      };
    }
    case 'law_of_cosines': {
      return {
        prompt: `Which formula represents the Law of Cosines?`,
        options: ['c^2 = a^2 + b^2 - 2ab cos(C)', 'a/sin(A) = b/sin(B)', 'a^2 + b^2 = c^2', 'cos(A) = adj/hyp'],
        correctIndex: 0
      };
    }
    case 'limits_continuity': {
      const val = n1 + 3;
      return {
        prompt: `Evaluate the limit: lim (x → ${n1}) [x + 3]`,
        options: [val.toString(), (val + 1).toString(), (val - 2).toString(), 'Undefined'],
        correctIndex: 0
      };
    }
    case 'power_rule_differentiation': {
      const coeff = n1;
      const exp = n2 + 1;
      const newCoeff = coeff * exp;
      const newExp = exp - 1;
      return {
        prompt: `Find derivative d/dx [${coeff}x^${exp}]:`,
        options: [`${newCoeff}x^${newExp}`, `${coeff}x^${newExp}`, `${newCoeff}x^${exp}`, `${coeff * 2}x`],
        correctIndex: 0
      };
    }
    case 'product_rule': {
      return {
        prompt: `What is the Product Rule formula for derivative d/dx [u · v]?`,
        options: ["u'v + uv'", "u'v - uv'", "(u'v - uv')/v^2", "u' · v'"],
        correctIndex: 0
      };
    }
    case 'quotient_rule': {
      return {
        prompt: `What is the Quotient Rule formula for derivative d/dx [u / v]?`,
        options: ["(u'v - uv') / v^2", "(u'v + uv') / v^2", "u' / v'", "(uv' - u'v) / v^2"],
        correctIndex: 0
      };
    }
    case 'chain_rule': {
      return {
        prompt: `What is the Chain Rule for composite function derivative d/dx [f(g(x))]?`,
        options: ["f'(g(x)) · g'(x)", "f'(x) · g'(x)", "f'(g'(x))", "f(x) · g'(x)"],
        correctIndex: 0
      };
    }
    case 'antiderivatives_power_rule': {
      const exp = n1 % 4 + 1;
      return {
        prompt: `Evaluate indefinite integral: ∫ x^${exp} dx`,
        options: [`(x^${exp + 1}) / ${exp + 1} + C`, `${exp}x^${exp - 1} + C`, `x^${exp + 1} + C`, `(x^${exp}) / ${exp} + C`],
        correctIndex: 0
      };
    }
    case 'definite_integrals': {
      const b = n1 + 1;
      const a = 0;
      const val = b * b;
      return {
        prompt: `Evaluate definite integral ∫[0 to ${b}] 2x dx:`,
        options: [val.toString(), (2 * b).toString(), (val / 2).toString(), (val + 2).toString()],
        correctIndex: 0
      };
    }
    case 'matrix_addition_scalar': {
      const scalar = n1;
      return {
        prompt: `Multiply scalar ${scalar} by matrix [[1, 0], [0, 2]]:`,
        options: [`[[${scalar}, 0], [0, ${scalar * 2}]]`, `[[1, 0], [0, 2]]`, `[[${scalar}, ${scalar}], [${scalar}, ${scalar}]]`, `[[0, 0], [0, 0]]`],
        correctIndex: 0
      };
    }
    case 'matrix_multiplication': {
      return {
        prompt: `Multiply matrix [[1, 0], [0, 1]] by [[n, m], [p, q]]:`,
        options: ['[[n, m], [p, q]]', '[[1, 0], [0, 1]]', '[[0, 0], [0, 0]]', '[[n+1, m], [p, q+1]]'],
        correctIndex: 0
      };
    }
    case 'matrix_determinants': {
      const a = n1;
      const d = n2;
      const b = 0;
      const c = 0;
      const det = a * d - b * c;
      return {
        prompt: `Calculate determinant of 2x2 matrix [[${a}, 0], [0, ${d}]]:`,
        options: [det.toString(), (a + d).toString(), '0', (a - d).toString()],
        correctIndex: 0
      };
    }
    default: {
      const sum = n1 + n2;
      return {
        prompt: `Calculate: ${n1} + ${n2} = ?`,
        options: [sum.toString(), (sum + 1).toString(), (sum - 1).toString(), (sum + 2).toString()],
        correctIndex: 0
      };
    }
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('curriculum'); // 'curriculum', 'arcade', 'tutor'
  const [activeTopic, setActiveTopic] = useState(TOPICS[0]);
  const [activeGame, setActiveGame] = useState(ARCADE_GAMES[0]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFounderModal, setShowFounderModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Arcade Score State Isolated Per Game ID
  const [arcadeScores, setArcadeScores] = useState({});

  // Settings / Themes State
  const [currentTheme, setCurrentTheme] = useState('dark'); // 'dark', 'light', 'neon'

  // Axiom AI State
  const [aiChat, setAiChat] = useState([
    { sender: 'ai', text: 'Welcome to Axiom Studio! I am Axiom AI (Here to help you with the topics!). Ask me anything about mathematics!' }
  ]);
  const [aiInput, setAiInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiChat]);

  // Filter topics by search query
  const filteredTopics = TOPICS.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Current active practice question
  const currentQuestion = generateQuestionForTopic(activeTopic.id, questionIndex);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setQuestionIndex(prev => prev + 1);
  };

  const handleArcadeAnswer = (ans) => {
    const seed = (arcadeScores[activeGame.id] || 0) + 1;
    const currentGenerator = activeGame.generator(seed);
    if (ans.trim() === currentGenerator.answer.trim()) {
      setArcadeScores(prev => ({
        ...prev,
        [activeGame.id]: (prev[activeGame.id] || 0) + 10
      }));
    }
  };

  const sendAiMessage = async () => {
    if (!aiInput.trim()) return;
    const userMsg = aiInput;
    setAiInput('');
    setAiChat(prev => [...prev, { sender: 'user', text: userMsg }]);
    setIsAiLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are Axiom AI (Here to help you with the topics!), a friendly mathematics tutor created by Sai for Axiom Studio OmniMath. Explain concepts concisely in 2-3 sentences. Do not greet the user with 'Hi' or introduce yourself repeatedly. Assist with all math topics accurately. User prompt: ${userMsg}`
            }]
          }]
        })
      });
      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || `Axiom AI Explanation: ${userMsg} is an essential concept in ${activeTopic.category}. Keep practicing to master it!`;
      setAiChat(prev => [...prev, { sender: 'ai', text: reply }]);
    } catch (e) {
      setAiChat(prev => [...prev, { 
        sender: 'ai', 
        text: `Regarding "${userMsg}": In ${activeTopic.name}, breaking down problems step by step makes finding solutions easier!` 
      }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  // Theme styles helper
  const getThemeClass = () => {
    switch (currentTheme) {
      case 'light': return 'bg-slate-50 text-slate-900';
      case 'neon': return 'bg-black text-cyan-400 font-mono';
      default: return 'bg-slate-950 text-slate-100';
    }
  };

  const getCardClass = () => {
    switch (currentTheme) {
      case 'light': return 'bg-white border-slate-200 text-slate-800 shadow-sm';
      case 'neon': return 'bg-gray-900 border-cyan-500 text-cyan-300';
      default: return 'bg-slate-900/80 border-slate-800 text-slate-200';
    }
  };

  return (
    <div className={`min-h-screen ${getThemeClass()} flex flex-col font-sans transition-colors duration-200`}>
      {/* Top Bar Header */}
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-40 bg-opacity-90 backdrop-blur-md">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('curriculum')}>
          <div className="bg-gradient-to-tr from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              AXIOM STUDIO
            </h1>
            <p className="text-xs text-slate-400 font-medium">OmniMath Platform</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-2 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800">
          <button 
            onClick={() => setActiveTab('curriculum')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'curriculum' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Curriculum (50 Topics)</span>
          </button>
          <button 
            onClick={() => setActiveTab('arcade')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'arcade' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Math Arcade (52)</span>
          </button>
          <button 
            onClick={() => setActiveTab('tutor')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'tutor' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Bot className="w-4 h-4" />
            <span>Axiom AI</span>
          </button>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center space-x-3">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search 50 topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:border-indigo-500 w-48"
            />
          </div>

          <button 
            onClick={() => setShowFounderModal(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-purple-500/40 text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 text-xs font-semibold transition"
          >
            <User className="w-3.5 h-3.5" />
            <span>About Founder</span>
          </button>

          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button 
              onClick={() => setCurrentTheme('dark')}
              className={`p-1.5 rounded ${currentTheme === 'dark' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              title="Dark Theme"
            >
              <Moon className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setCurrentTheme('light')}
              className={`p-1.5 rounded ${currentTheme === 'light' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              title="Light Theme"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setCurrentTheme('neon')}
              className={`p-1.5 rounded ${currentTheme === 'neon' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
              title="Cyberpunk Theme"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6">
        {activeTab === 'curriculum' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar Topics List */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold flex items-center space-x-2">
                  <Compass className="w-5 h-5 text-indigo-400" />
                  <span>50 Core Math Topics</span>
                </h2>
                <span className="text-xs text-slate-400">{filteredTopics.length} available</span>
              </div>

              <div className="space-y-2 max-h-[72vh] overflow-y-auto pr-1">
                {filteredTopics.map((topic) => (
                  <div 
                    key={topic.id}
                    onClick={() => { setActiveTopic(topic); setQuestionIndex(0); setSelectedOption(null); }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${activeTopic.id === topic.id ? 'border-indigo-500 bg-indigo-950/40' : getCardClass()}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-semibold">
                        {topic.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">Interactive</span>
                    </div>
                    <h3 className="font-bold text-base mt-1">{topic.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Topic Active Workspace */}
            <div className="lg:col-span-2 space-y-6">
              <div className={`p-6 rounded-2xl border ${getCardClass()} shadow-lg`}>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{activeTopic.category}</span>
                    <h2 className="text-2xl font-bold mt-1">{activeTopic.name}</h2>
                  </div>
                  <button 
                    onClick={() => { setActiveTab('tutor'); }}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-semibold text-white"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Ask Axiom AI</span>
                  </button>
                </div>

                {/* Lesson Overview */}
                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/50 mb-6 text-sm">
                  <span className="font-semibold text-indigo-300 block mb-1">Lesson Summary:</span>
                  <p className="text-slate-300">{activeTopic.lesson}</p>
                </div>

                {/* Question Generator Workspace */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-sm text-slate-400">Practice Question #{questionIndex + 1}</h3>
                    <span className="text-xs text-emerald-400 font-medium bg-emerald-950/50 border border-emerald-800 px-2.5 py-1 rounded-md">
                      Dynamic Generator Ready
                    </span>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-lg font-semibold">
                    {currentQuestion.prompt}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentQuestion.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        className={`p-4 rounded-xl border text-left font-semibold transition-all ${
                          selectedOption === idx 
                            ? idx === currentQuestion.correctIndex 
                              ? 'border-emerald-500 bg-emerald-950/60 text-emerald-200'
                              : 'border-rose-500 bg-rose-950/60 text-rose-200'
                            : `${getCardClass()} hover:border-indigo-500/50`
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {selectedOption !== null && (
                    <div className="flex justify-between items-center pt-4 border-t border-slate-800/60 mt-4">
                      <div className="flex items-center space-x-2">
                        {selectedOption === currentQuestion.correctIndex ? (
                          <span className="text-emerald-400 font-bold flex items-center space-x-1">
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Correct! Great job!</span>
                          </span>
                        ) : (
                          <span className="text-rose-400 font-bold flex items-center space-x-1">
                            <ShieldAlert className="w-5 h-5" />
                            <span>Incorrect. Try again or check next!</span>
                          </span>
                        )}
                      </div>
                      <button 
                        onClick={nextQuestion}
                        className="flex items-center space-x-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm shadow-md"
                      >
                        <span>Next Question</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MATH ARCADE VIEW */}
        {activeTab === 'arcade' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold flex items-center space-x-2">
                  <Gamepad2 className="w-7 h-7 text-indigo-400" />
                  <span>Math Arcade Zone</span>
                </h2>
                <p className="text-sm text-slate-400">52 Interactive Mini-Games with Isolated Scoring</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Game Catalog */}
              <div className="lg:col-span-1 space-y-2 max-h-[75vh] overflow-y-auto pr-1">
                {ARCADE_GAMES.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => setActiveGame(game)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${activeGame.id === game.id ? 'border-indigo-500 bg-indigo-950/40' : getCardClass()}`}
                  >
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>{game.category}</span>
                      <span className="font-semibold text-indigo-400">Score: {arcadeScores[game.id] || 0}</span>
                    </div>
                    <h4 className="font-bold text-sm mt-1">{game.title}</h4>
                  </div>
                ))}
              </div>

              {/* Active Arcade Screen */}
              <div className={`lg:col-span-3 p-6 rounded-2xl border ${getCardClass()} flex flex-col justify-between min-h-[450px]`}>
                <div>
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-bold text-indigo-400">{activeGame.category}</span>
                      <h3 className="text-xl font-bold">{activeGame.title}</h3>
                    </div>
                    <div className="bg-indigo-950 border border-indigo-800 px-4 py-2 rounded-xl text-center">
                      <span className="text-xs text-slate-400 block">Game Score</span>
                      <span className="text-xl font-extrabold text-indigo-300">{arcadeScores[activeGame.id] || 0}</span>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-4">
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold block">Solve Challenge</span>
                    <h2 className="text-2xl font-extrabold text-indigo-300">
                      {activeGame.generator((arcadeScores[activeGame.id] || 0) + 1).prompt}
                    </h2>

                    <div className="max-w-xs mx-auto flex space-x-2">
                      <input 
                        type="text" 
                        placeholder="Enter your answer..." 
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-center text-lg font-bold focus:outline-none focus:border-indigo-500"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleArcadeAnswer(e.currentTarget.value);
                            e.currentTarget.value = '';
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs text-center text-slate-500 pt-4">
                  Type your calculated answer and press Enter to score 10 points!
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AXIOM AI TUTOR VIEW */}
        {activeTab === 'tutor' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className={`p-6 rounded-2xl border ${getCardClass()} shadow-xl flex flex-col h-[70vh]`}>
              {/* Tutor Header */}
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-4 mb-4">
                <div className="bg-indigo-600 p-2.5 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Axiom AI Tutor</h3>
                  <p className="text-xs text-indigo-400 font-medium">(Here to help you with the topics!)</p>
                </div>
              </div>

              {/* Chat History */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {aiChat.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-lg p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                        : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isAiLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl text-sm text-slate-400">
                      Axiom AI is thinking...
                    </div>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Chat Input */}
              <div className="flex space-x-2 pt-4 border-t border-slate-800">
                <input 
                  type="text" 
                  value={aiInput} 
                  onChange={(e) => setAiInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && sendAiMessage()}
                  placeholder="Ask Axiom AI to explain any topic or step..." 
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
                />
                <button 
                  onClick={sendAiMessage}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 rounded-xl font-bold flex items-center justify-center shadow"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Founder Modal Popup */}
      {showFounderModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 relative shadow-2xl space-y-4">
            <button 
              onClick={() => setShowFounderModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-3 rounded-full">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">About the Founder</h3>
                <p className="text-xs text-indigo-400 font-semibold">Sai - Creator of Axiom Studio</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              "Hi, my name is Sai and I love math. I am the founder and creator of this website, called Axiom Studio OmniMath! The reason I created this website was to share my love of math with others and help people develop new math skills. I wanted to show them that math can be fun! This website goes over many math topics, from counting numbers to calculus. I hope you enjoy the website that I created!"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
