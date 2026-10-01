import { Dataset, DataChallenge } from '../types';

export const datasetsLibrary: Dataset[] = [
  {
    id: 'ds-student-performance',
    name: 'Student Academic Performance & Study Habits',
    category: 'Education',
    rows: 1000,
    columnsCount: 8,
    difficulty: 'Beginner',
    dataSize: '142 KB',
    fileFormat: 'CSV',
    description: 'Exam scores (Math, Reading, Writing), study hours per week, attendance percentage, parental education level, and lunch subsidy status.',
    suggestedAnalysis: [
      'Evaluate correlation between study hours per week and final exam scores.',
      'Test whether parental education level has statistically significant impact on scores.',
      'Identify the top 10% high-achieving student profile characteristics.'
    ],
    sampleRows: [
      { student_id: 'STU_1001', gender: 'Female', study_hours_weekly: 18.5, attendance_rate: 96.2, math_score: 84, reading_score: 88, writing_score: 89, test_prep: 'Completed' },
      { student_id: 'STU_1002', gender: 'Male', study_hours_weekly: 8.0, attendance_rate: 82.0, math_score: 58, reading_score: 61, writing_score: 54, test_prep: 'None' },
      { student_id: 'STU_1003', gender: 'Female', study_hours_weekly: 22.0, attendance_rate: 98.0, math_score: 95, reading_score: 92, writing_score: 96, test_prep: 'Completed' },
      { student_id: 'STU_1004', gender: 'Male', study_hours_weekly: 12.5, attendance_rate: 89.5, math_score: 72, reading_score: 70, writing_score: 68, test_prep: 'None' },
      { student_id: 'STU_1005', gender: 'Female', study_hours_weekly: 15.0, attendance_rate: 91.0, math_score: 78, reading_score: 82, writing_score: 80, test_prep: 'Completed' },
      { student_id: 'STU_1006', gender: 'Male', study_hours_weekly: 6.5, attendance_rate: 76.5, math_score: 49, reading_score: 52, writing_score: 47, test_prep: 'None' }
    ],
    columns: [
      { name: 'student_id', type: 'string', sampleValues: ['STU_1001', 'STU_1002'], nullCount: 0 },
      { name: 'gender', type: 'string', sampleValues: ['Female', 'Male'], nullCount: 0 },
      { name: 'study_hours_weekly', type: 'number', sampleValues: [18.5, 8.0, 22.0], mean: 14.8, median: 14.0, min: 2.0, max: 35.0, stdDev: 5.6, nullCount: 0 },
      { name: 'attendance_rate', type: 'number', sampleValues: [96.2, 82.0], mean: 89.4, median: 91.0, min: 62.0, max: 100.0, stdDev: 7.2, nullCount: 0 },
      { name: 'math_score', type: 'number', sampleValues: [84, 58, 95], mean: 69.2, median: 70.0, min: 25, max: 100, stdDev: 14.8, nullCount: 0 },
      { name: 'reading_score', type: 'number', sampleValues: [88, 61, 92], mean: 71.5, median: 72.0, min: 28, max: 100, stdDev: 14.1, nullCount: 0 },
      { name: 'writing_score', type: 'number', sampleValues: [89, 54, 96], mean: 70.1, median: 71.0, min: 22, max: 100, stdDev: 15.3, nullCount: 0 },
      { name: 'test_prep', type: 'string', sampleValues: ['Completed', 'None'], nullCount: 0 }
    ]
  },
  {
    id: 'ds-ecommerce-sales',
    name: 'Global E-Commerce Orders & Regional Revenue',
    category: 'E-commerce',
    rows: 5420,
    columnsCount: 9,
    difficulty: 'Intermediate',
    dataSize: '580 KB',
    fileFormat: 'CSV',
    description: 'Transaction records detailing order dates, product categories, quantities, discount percentages, unit prices, shipping times, customer segments, and gross margins.',
    suggestedAnalysis: [
      'Identify top-selling product categories by revenue versus profit margin.',
      'Analyze month-over-month sales trends and seasonal holiday spikes.',
      'Determine discount threshold beyond which profitability turns negative.'
    ],
    sampleRows: [
      { order_id: 'ORD_9011', order_date: '2025-01-14', region: 'North America', category: 'Technology', sub_category: 'Laptops', quantity: 2, unit_price: 899.99, discount_pct: 0.05, profit: 245.50 },
      { order_id: 'ORD_9012', order_date: '2025-01-14', region: 'Europe', category: 'Office Supplies', sub_category: 'Binders', quantity: 15, unit_price: 8.50, discount_pct: 0.10, profit: 32.10 },
      { order_id: 'ORD_9013', order_date: '2025-01-15', region: 'Asia Pacific', category: 'Furniture', sub_category: 'Chairs', quantity: 4, unit_price: 180.00, discount_pct: 0.20, profit: -18.40 },
      { order_id: 'ORD_9014', order_date: '2025-01-16', region: 'Latin America', category: 'Technology', sub_category: 'Phones', quantity: 1, unit_price: 650.00, discount_pct: 0.00, profit: 140.00 },
      { order_id: 'ORD_9015', order_date: '2025-01-16', region: 'North America', category: 'Office Supplies', sub_category: 'Paper', quantity: 8, unit_price: 12.00, discount_pct: 0.00, profit: 28.80 }
    ],
    columns: [
      { name: 'order_id', type: 'string', sampleValues: ['ORD_9011'], nullCount: 0 },
      { name: 'order_date', type: 'date', sampleValues: ['2025-01-14'], nullCount: 0 },
      { name: 'region', type: 'string', sampleValues: ['North America', 'Europe', 'Asia Pacific'], nullCount: 0 },
      { name: 'category', type: 'string', sampleValues: ['Technology', 'Furniture', 'Office Supplies'], nullCount: 0 },
      { name: 'quantity', type: 'number', sampleValues: [2, 15, 4], mean: 4.2, median: 3.0, min: 1, max: 50, stdDev: 3.8, nullCount: 0 },
      { name: 'unit_price', type: 'number', sampleValues: [899.99, 8.50], mean: 128.4, median: 45.0, min: 2.5, max: 2400.0, stdDev: 215.0, nullCount: 0 },
      { name: 'discount_pct', type: 'number', sampleValues: [0.05, 0.10], mean: 0.08, median: 0.05, min: 0.0, max: 0.60, stdDev: 0.09, nullCount: 0 },
      { name: 'profit', type: 'number', sampleValues: [245.5, 32.1], mean: 44.8, median: 22.0, min: -320.0, max: 980.0, stdDev: 86.4, nullCount: 0 }
    ]
  },
  {
    id: 'ds-telecom-churn',
    name: 'Customer Retention & Churn Risk Dataset',
    category: 'Business',
    rows: 4200,
    columnsCount: 10,
    difficulty: 'Intermediate',
    dataSize: '410 KB',
    fileFormat: 'CSV',
    description: 'Telecommunications subscriber profiles with contract types, monthly charges, tenure in months, tech support calls, and binary churn flag.',
    suggestedAnalysis: [
      'Segment customers by tenure and churn likelihood.',
      'Evaluate whether customers on Month-to-Month contracts have higher churn rates.',
      'Build a classification model predicting churn probability.'
    ],
    sampleRows: [
      { customer_id: 'CUST_401', tenure_months: 2, contract: 'Month-to-month', monthly_charges: 74.85, total_charges: 149.70, tech_tickets: 4, payment_method: 'Electronic check', churn: 'Yes' },
      { customer_id: 'CUST_402', tenure_months: 34, contract: 'One year', monthly_charges: 56.95, total_charges: 1889.50, tech_tickets: 0, payment_method: 'Mailed check', churn: 'No' },
      { customer_id: 'CUST_403', tenure_months: 68, contract: 'Two year', monthly_charges: 105.65, total_charges: 7150.20, tech_tickets: 1, payment_method: 'Bank transfer', churn: 'No' },
      { customer_id: 'CUST_404', tenure_months: 5, contract: 'Month-to-month', monthly_charges: 89.10, total_charges: 445.50, tech_tickets: 5, payment_method: 'Electronic check', churn: 'Yes' }
    ],
    columns: [
      { name: 'customer_id', type: 'string', sampleValues: ['CUST_401'], nullCount: 0 },
      { name: 'tenure_months', type: 'number', sampleValues: [2, 34, 68], mean: 32.4, median: 29.0, min: 1, max: 72, stdDev: 24.5, nullCount: 0 },
      { name: 'contract', type: 'string', sampleValues: ['Month-to-month', 'One year', 'Two year'], nullCount: 0 },
      { name: 'monthly_charges', type: 'number', sampleValues: [74.85, 56.95], mean: 64.7, median: 70.3, min: 18.25, max: 118.75, stdDev: 30.1, nullCount: 0 },
      { name: 'tech_tickets', type: 'number', sampleValues: [4, 0, 1], mean: 1.2, median: 1.0, min: 0, max: 9, stdDev: 1.4, nullCount: 0 },
      { name: 'churn', type: 'string', sampleValues: ['Yes', 'No'], nullCount: 0 }
    ]
  },
  {
    id: 'ds-healthcare-admissions',
    name: 'Hospital Patient Admissions & Readmissions',
    category: 'Healthcare',
    rows: 3500,
    columnsCount: 9,
    difficulty: 'Advanced',
    dataSize: '390 KB',
    fileFormat: 'CSV',
    description: 'Clinical inpatient admission data: age, primary diagnosis code, length of hospital stay (days), medication count, emergency visits in past year, and 30-day readmission status.',
    suggestedAnalysis: [
      'Model factors driving hospital readmissions within 30 days.',
      'Analyze length of stay by primary diagnosis category.',
      'Evaluate impact of emergency visit frequency on outcome severity.'
    ],
    sampleRows: [
      { patient_id: 'PAT_801', age: 64, diagnosis: 'Heart Failure', stay_days: 6, num_medications: 18, emergency_visits: 2, bmi: 29.4, readmitted_30d: 'Yes' },
      { patient_id: 'PAT_802', age: 42, diagnosis: 'Appendicitis', stay_days: 2, num_medications: 6, emergency_visits: 0, bmi: 24.1, readmitted_30d: 'No' },
      { patient_id: 'PAT_803', age: 71, diagnosis: 'Pneumonia', stay_days: 8, num_medications: 22, emergency_visits: 3, bmi: 31.8, readmitted_30d: 'Yes' },
      { patient_id: 'PAT_804', age: 53, diagnosis: 'Diabetes Type 2', stay_days: 4, num_medications: 12, emergency_visits: 1, bmi: 28.0, readmitted_30d: 'No' }
    ],
    columns: [
      { name: 'patient_id', type: 'string', sampleValues: ['PAT_801'], nullCount: 0 },
      { name: 'age', type: 'number', sampleValues: [64, 42, 71], mean: 58.6, median: 61.0, min: 18, max: 94, stdDev: 16.2, nullCount: 0 },
      { name: 'diagnosis', type: 'string', sampleValues: ['Heart Failure', 'Pneumonia'], nullCount: 0 },
      { name: 'stay_days', type: 'number', sampleValues: [6, 2, 8], mean: 4.8, median: 4.0, min: 1, max: 28, stdDev: 3.5, nullCount: 0 },
      { name: 'emergency_visits', type: 'number', sampleValues: [2, 0, 3], mean: 0.9, median: 1.0, min: 0, max: 8, stdDev: 1.2, nullCount: 0 },
      { name: 'readmitted_30d', type: 'string', sampleValues: ['Yes', 'No'], nullCount: 0 }
    ]
  },
  {
    id: 'ds-startup-funding',
    name: 'Tech Startup Venture Funding & Valuation',
    category: 'Finance',
    rows: 2800,
    columnsCount: 8,
    difficulty: 'Intermediate',
    dataSize: '290 KB',
    fileFormat: 'CSV',
    description: 'Venture capital investments detailing startup founding year, industry sector, round stage (Seed to Series D), total funding raised ($M), valuation ($M), and headquarter country.',
    suggestedAnalysis: [
      'Compare valuation multiples across AI, FinTech, and CleanTech sectors.',
      'Analyze dilution rates and time gap between funding rounds.',
      'Track geographical concentration of seed capital.'
    ],
    sampleRows: [
      { company_name: 'NeuralFlow', sector: 'Artificial Intelligence', country: 'United States', round: 'Series B', funding_m: 45.0, valuation_m: 280.0, founded_year: 2021 },
      { company_name: 'PaySync', sector: 'FinTech', country: 'Nigeria', round: 'Series A', funding_m: 12.5, valuation_m: 65.0, founded_year: 2022 },
      { company_name: 'BioHeal', sector: 'HealthTech', country: 'Germany', round: 'Seed', funding_m: 3.2, valuation_m: 18.0, founded_year: 2023 }
    ],
    columns: [
      { name: 'company_name', type: 'string', sampleValues: ['NeuralFlow'], nullCount: 0 },
      { name: 'sector', type: 'string', sampleValues: ['Artificial Intelligence', 'FinTech'], nullCount: 0 },
      { name: 'round', type: 'string', sampleValues: ['Seed', 'Series A', 'Series B'], nullCount: 0 },
      { name: 'funding_m', type: 'number', sampleValues: [45.0, 12.5], mean: 18.4, median: 10.0, min: 0.5, max: 350.0, stdDev: 29.5, nullCount: 0 },
      { name: 'valuation_m', type: 'number', sampleValues: [280.0, 65.0], mean: 98.6, median: 50.0, min: 3.0, max: 1800.0, stdDev: 145.0, nullCount: 0 }
    ]
  },
  {
    id: 'ds-credit-fraud',
    name: 'Credit Card Transaction Fraud Records',
    category: 'Finance',
    rows: 8500,
    columnsCount: 7,
    difficulty: 'Advanced',
    dataSize: '620 KB',
    fileFormat: 'CSV',
    description: 'Anonymized transaction records with transaction amount ($), distance from home location (km), online vs physical terminal flag, hour of day, and confirmed fraud label.',
    suggestedAnalysis: [
      'Handle extreme class imbalance (99% legitimate vs 1% fraud).',
      'Analyze transaction hour and location anomaly distributions.',
      'Evaluate precision-recall tradeoffs for fraud alert systems.'
    ],
    sampleRows: [
      { tx_id: 'TX_1001', amount: 14.50, dist_from_home_km: 1.2, is_online: 0, hour_of_day: 14, card_present: 1, is_fraud: 0 },
      { tx_id: 'TX_1002', amount: 984.20, dist_from_home_km: 1420.0, is_online: 1, hour_of_day: 3, card_present: 0, is_fraud: 1 },
      { tx_id: 'TX_1003', amount: 62.10, dist_from_home_km: 8.5, is_online: 1, hour_of_day: 18, card_present: 0, is_fraud: 0 }
    ],
    columns: [
      { name: 'tx_id', type: 'string', sampleValues: ['TX_1001'], nullCount: 0 },
      { name: 'amount', type: 'number', sampleValues: [14.50, 984.20], mean: 88.5, median: 42.0, min: 1.0, max: 4900.0, stdDev: 180.2, nullCount: 0 },
      { name: 'dist_from_home_km', type: 'number', sampleValues: [1.2, 1420.0], mean: 24.5, median: 6.2, min: 0.1, max: 6200.0, stdDev: 110.0, nullCount: 0 },
      { name: 'is_fraud', type: 'number', sampleValues: [0, 1], mean: 0.018, median: 0, min: 0, max: 1, stdDev: 0.13, nullCount: 0 }
    ]
  },
  {
    id: 'ds-urban-rideshare',
    name: 'Urban Rideshare Mobility & Fare Dynamics',
    category: 'Transportation',
    rows: 6200,
    columnsCount: 8,
    difficulty: 'Intermediate',
    dataSize: '510 KB',
    fileFormat: 'CSV',
    description: 'Trip distances, surge multipliers, duration in minutes, driver ratings, pickup zones, passenger counts, and final fares.',
    suggestedAnalysis: [
      'Model ride duration as a function of distance and peak hour congestion.',
      'Evaluate surge pricing elasticities across pickup zones.'
    ],
    sampleRows: [
      { trip_id: 'TRP_501', distance_miles: 3.4, duration_mins: 14.2, passenger_count: 1, surge_multiplier: 1.0, tip_amount: 3.00, fare_amount: 14.50 },
      { trip_id: 'TRP_502', distance_miles: 11.2, duration_mins: 38.0, passenger_count: 2, surge_multiplier: 1.75, tip_amount: 8.00, fare_amount: 48.20 }
    ],
    columns: [
      { name: 'distance_miles', type: 'number', sampleValues: [3.4, 11.2], mean: 5.6, median: 4.1, min: 0.5, max: 45.0, stdDev: 4.8, nullCount: 0 },
      { name: 'duration_mins', type: 'number', sampleValues: [14.2, 38.0], mean: 19.8, median: 16.0, min: 3.0, max: 120.0, stdDev: 12.4, nullCount: 0 },
      { name: 'fare_amount', type: 'number', sampleValues: [14.5, 48.2], mean: 21.4, median: 16.5, min: 5.0, max: 160.0, stdDev: 16.8, nullCount: 0 }
    ]
  },
  {
    id: 'ds-air-quality-weather',
    name: 'City Air Quality Index (AQI) & Weather Telemetry',
    category: 'Environment',
    rows: 4800,
    columnsCount: 7,
    difficulty: 'Intermediate',
    dataSize: '400 KB',
    fileFormat: 'CSV',
    description: 'Hourly PM2.5, PM10, ozone, temperature, wind speed, relative humidity, and overall air quality index.',
    suggestedAnalysis: [
      'Correlate wind speed and thermal inversions with dangerous PM2.5 spikes.',
      'Forecast 24-hour ahead air quality indices using rolling temporal windows.'
    ],
    sampleRows: [
      { timestamp: '2025-03-01 08:00', pm2_5: 42.1, pm10: 78.4, o3: 28.0, temp_c: 19.2, wind_kph: 8.4, aqi: 118 },
      { timestamp: '2025-03-01 09:00', pm2_5: 58.4, pm10: 95.0, o3: 34.5, temp_c: 21.0, wind_kph: 4.2, aqi: 142 }
    ],
    columns: [
      { name: 'pm2_5', type: 'number', sampleValues: [42.1, 58.4], mean: 36.2, median: 28.0, min: 4.0, max: 210.0, stdDev: 25.8, nullCount: 0 },
      { name: 'temp_c', type: 'number', sampleValues: [19.2, 21.0], mean: 22.4, median: 22.0, min: 2.0, max: 42.0, stdDev: 7.1, nullCount: 0 },
      { name: 'aqi', type: 'number', sampleValues: [118, 142], mean: 89.0, median: 78.0, min: 18, max: 340, stdDev: 42.0, nullCount: 0 }
    ]
  },
  {
    id: 'ds-spotify-tracks',
    name: 'Spotify Audio Features & Popularity Index',
    category: 'Technology',
    rows: 7200,
    columnsCount: 8,
    difficulty: 'Beginner',
    dataSize: '590 KB',
    fileFormat: 'CSV',
    description: 'Danceability, acousticness, tempo (BPM), valence, energy, loudness, duration, and track popularity score.',
    suggestedAnalysis: [
      'Uncover acoustic attributes that correlate with viral streaming popularity.',
      'Cluster musical genres by tempo and valence (musical mood).'
    ],
    sampleRows: [
      { track_name: 'Electric Sunrise', artist: 'Nova Pulse', bpm: 124, danceability: 0.82, energy: 0.78, valence: 0.65, popularity: 84 },
      { track_name: 'Midnight Echoes', artist: 'Silent Strings', bpm: 88, danceability: 0.42, energy: 0.31, valence: 0.19, popularity: 62 }
    ],
    columns: [
      { name: 'bpm', type: 'number', sampleValues: [124, 88], mean: 120.4, median: 120.0, min: 60, max: 200, stdDev: 24.2, nullCount: 0 },
      { name: 'danceability', type: 'number', sampleValues: [0.82, 0.42], mean: 0.62, median: 0.64, min: 0.12, max: 0.98, stdDev: 0.16, nullCount: 0 },
      { name: 'popularity', type: 'number', sampleValues: [84, 62], mean: 58.2, median: 60.0, min: 5, max: 100, stdDev: 18.4, nullCount: 0 }
    ]
  },
  {
    id: 'ds-real-estate-housing',
    name: 'Metropolitan Housing Attributes & Sale Prices',
    category: 'Finance',
    rows: 4500,
    columnsCount: 9,
    difficulty: 'Intermediate',
    dataSize: '430 KB',
    fileFormat: 'CSV',
    description: 'Square footage, bedrooms, bathrooms, lot size, neighborhood safety score, school rating, year built, and final closing price.',
    suggestedAnalysis: [
      'Fit multivariable linear regression to estimate price per square foot.',
      'Assess price premiums associated with high school quality ratings.'
    ],
    sampleRows: [
      { house_id: 'HSE_201', sqft: 2150, bedrooms: 4, bathrooms: 2.5, school_rating: 8.5, year_built: 2008, sale_price: 435000 },
      { house_id: 'HSE_202', sqft: 1200, bedrooms: 2, bathrooms: 1.0, school_rating: 6.0, year_built: 1985, sale_price: 245000 }
    ],
    columns: [
      { name: 'sqft', type: 'number', sampleValues: [2150, 1200], mean: 1840, median: 1750, min: 550, max: 5800, stdDev: 620, nullCount: 0 },
      { name: 'sale_price', type: 'number', sampleValues: [435000, 245000], mean: 368000, median: 340000, min: 95000, max: 1450000, stdDev: 165000, nullCount: 0 }
    ]
  },
  {
    id: 'ds-crop-yield-climate',
    name: 'Agricultural Crop Yield & Soil Nutrients',
    category: 'Agriculture',
    rows: 3200,
    columnsCount: 8,
    difficulty: 'Intermediate',
    dataSize: '290 KB',
    fileFormat: 'CSV',
    description: 'Rainfall (mm), soil nitrogen, phosphorus, potassium (NPK), temperature, pesticide usage, and crop yield in metric tons per hectare.',
    suggestedAnalysis: [
      'Optimize fertilizer combinations for maximum crop yield.',
      'Quantify rainfall thresholds that trigger crop drought stress.'
    ],
    sampleRows: [
      { plot_id: 'PLT_101', crop: 'Maize', rainfall_mm: 850, nitrogen: 140, phosphorus: 60, potassium: 50, yield_tons_ha: 7.8 },
      { plot_id: 'PLT_102', crop: 'Soybeans', rainfall_mm: 720, nitrogen: 90, phosphorus: 45, potassium: 40, yield_tons_ha: 3.4 }
    ],
    columns: [
      { name: 'rainfall_mm', type: 'number', sampleValues: [850, 720], mean: 780, median: 790, min: 250, max: 1600, stdDev: 180, nullCount: 0 },
      { name: 'yield_tons_ha', type: 'number', sampleValues: [7.8, 3.4], mean: 4.8, median: 4.5, min: 0.8, max: 12.4, stdDev: 2.1, nullCount: 0 }
    ]
  },
  {
    id: 'ds-mobile-app-analytics',
    name: 'Mobile App User Sessions & In-App Conversions',
    category: 'Technology',
    rows: 9200,
    columnsCount: 8,
    difficulty: 'Intermediate',
    dataSize: '780 KB',
    fileFormat: 'CSV',
    description: 'Session duration, screens viewed per session, push notifications opened, app crashes, subscription plan, and in-app purchase revenue.',
    suggestedAnalysis: [
      'Analyze drop-off points in user onboarding funnel.',
      'Determine correlation between push notification engagement and retention.'
    ],
    sampleRows: [
      { user_id: 'USR_901', session_mins: 8.4, screens_viewed: 12, push_opened: 3, crash_count: 0, in_app_revenue: 14.99 },
      { user_id: 'USR_902', session_mins: 1.2, screens_viewed: 2, push_opened: 0, crash_count: 1, in_app_revenue: 0.00 }
    ],
    columns: [
      { name: 'session_mins', type: 'number', sampleValues: [8.4, 1.2], mean: 5.4, median: 4.2, min: 0.2, max: 48.0, stdDev: 4.6, nullCount: 0 },
      { name: 'in_app_revenue', type: 'number', sampleValues: [14.99, 0.00], mean: 3.8, median: 0.0, min: 0.0, max: 120.0, stdDev: 11.2, nullCount: 0 }
    ]
  },
  {
    id: 'ds-supermarket-groceries',
    name: 'Supermarket POS Sales & Basket Analysis',
    category: 'Business',
    rows: 11500,
    columnsCount: 6,
    difficulty: 'Beginner',
    dataSize: '820 KB',
    fileFormat: 'CSV',
    description: 'Basket ID, customer membership tier, department, items purchased, payment method, and checkout total amount.',
    suggestedAnalysis: [
      'Execute Apriori market basket association rule mining.',
      'Identify most lucrative items driving total shopping cart value.'
    ],
    sampleRows: [
      { basket_id: 'BSK_4001', member_tier: 'Gold', department: 'Produce', items_count: 9, basket_total: 64.50 },
      { basket_id: 'BSK_4002', member_tier: 'Silver', department: 'Dairy', items_count: 3, basket_total: 18.20 }
    ],
    columns: [
      { name: 'items_count', type: 'number', sampleValues: [9, 3], mean: 5.8, median: 5.0, min: 1, max: 32, stdDev: 3.9, nullCount: 0 },
      { name: 'basket_total', type: 'number', sampleValues: [64.5, 18.2], mean: 42.1, median: 36.0, min: 3.5, max: 280.0, stdDev: 31.0, nullCount: 0 }
    ]
  },
  {
    id: 'ds-sports-premier-league',
    name: 'Football Match Statistics & Expected Goals (xG)',
    category: 'Sports',
    rows: 380,
    columnsCount: 10,
    difficulty: 'Intermediate',
    dataSize: '95 KB',
    fileFormat: 'CSV',
    description: 'Home team, away team, possession %, shots on target, expected goals (xG), fouls committed, yellow cards, and final scoreline.',
    suggestedAnalysis: [
      'Evaluate whether possession correlates with higher expected goals.',
      'Identify teams outperforming their statistical xG baseline.'
    ],
    sampleRows: [
      { match_id: 'EPL_01', home_team: 'Arsenal', away_team: 'Chelsea', possession_pct: 62.4, shots_target: 8, xg_home: 2.34, xg_away: 0.88, result: '3-1' },
      { match_id: 'EPL_02', home_team: 'Liverpool', away_team: 'Man City', possession_pct: 49.0, shots_target: 6, xg_home: 1.82, xg_away: 1.95, result: '2-2' }
    ],
    columns: [
      { name: 'possession_pct', type: 'number', sampleValues: [62.4, 49.0], mean: 50.0, median: 50.0, min: 24.0, max: 76.0, stdDev: 11.2, nullCount: 0 },
      { name: 'xg_home', type: 'number', sampleValues: [2.34, 1.82], mean: 1.54, median: 1.42, min: 0.12, max: 4.80, stdDev: 0.82, nullCount: 0 }
    ]
  },
  {
    id: 'ds-university-admissions',
    name: 'University Admissions & Acceptance Rates',
    category: 'Education',
    rows: 2400,
    columnsCount: 7,
    difficulty: 'Beginner',
    dataSize: '210 KB',
    fileFormat: 'CSV',
    description: 'Applicant SAT scores, high school GPA, extracurricular leadership score, letters of recommendation rating, research experience, and admission status.',
    suggestedAnalysis: [
      'Assess relative weight of GPA vs standardized test scores in admission outcomes.',
      'Train a classification model predicting college admission acceptance.'
    ],
    sampleRows: [
      { app_id: 'APP_101', gpa: 3.92, sat_score: 1480, recommendation_rating: 4.5, research_exp: 1, admitted: 1 },
      { app_id: 'APP_102', gpa: 3.40, sat_score: 1190, recommendation_rating: 3.0, research_exp: 0, admitted: 0 }
    ],
    columns: [
      { name: 'gpa', type: 'number', sampleValues: [3.92, 3.40], mean: 3.52, median: 3.55, min: 2.4, max: 4.0, stdDev: 0.35, nullCount: 0 },
      { name: 'sat_score', type: 'number', sampleValues: [1480, 1190], mean: 1290, median: 1300, min: 850, max: 1600, stdDev: 155, nullCount: 0 },
      { name: 'admitted', type: 'number', sampleValues: [1, 0], mean: 0.38, median: 0, min: 0, max: 1, stdDev: 0.48, nullCount: 0 }
    ]
  }
];

export const dataChallenges: DataChallenge[] = [
  {
    id: 'chal-sales-performance',
    title: 'Sales Performance & Regional Profitability Audit',
    category: 'Business Intelligence',
    datasetName: 'Global E-Commerce Orders & Regional Revenue',
    datasetId: 'ds-ecommerce-sales',
    difficulty: 'Intermediate',
    problem: 'The VP of Global Operations wants to identify which product categories and regions generate strong revenue but destroy value with negative profit margins after discounts are applied.',
    tasks: [
      { id: 't1', description: 'Group orders by region and calculate total sales revenue and total net profit.', expectedResult: 'North America leads total revenue; Asia Pacific shows highest negative profit loss on discounted Furniture.' },
      { id: 't2', description: 'Identify sub-categories where discount percentage exceeds 15% and assess profit impact.', expectedResult: 'Sub-category Chairs has average discount of 20% resulting in negative margin.' },
      { id: 't3', description: 'Calculate the Average Order Value (AOV) across all four geographic regions.', expectedResult: 'Overall AOV is $128.40.' },
      { id: 't4', description: 'Recommend an optimal maximum discount cap to preserve profitability.', expectedResult: 'Discount cap of 12% restores all regions to positive margins.' }
    ],
    hints: [
      'In SQL, use SUM(quantity * unit_price * (1 - discount_pct)) as net_revenue.',
      'Use HAVING sum(profit) < 0 to isolate margin-eroding segments.',
      'In Python Pandas: df.groupby(["region", "category"])["profit"].agg(["sum", "mean"]).reset_index()'
    ],
    expectedSkills: ['SQL Aggregations', 'GROUP BY & HAVING', 'Profit Margin Analysis', 'Pandas Groupby'],
    solutionExplanation: 'By aggregating total revenue and net profit partitioned by region and category, you will observe that Asia Pacific Furniture generates high volume but negative cumulative profit (-$18.40 per order on average) due to excessive 20% discount rates.',
    starterSql: `-- Write your SQL solution below
SELECT 
    region, 
    category,
    COUNT(order_id) as total_orders,
    ROUND(SUM(unit_price * quantity), 2) as gross_revenue,
    ROUND(SUM(profit), 2) as net_profit,
    ROUND(AVG(discount_pct) * 100, 1) as avg_discount_pct
FROM ecommerce_sales
GROUP BY region, category
ORDER BY net_profit ASC;`,
    starterPython: `# Write your Pandas solution below
import pandas as pd

df = load_dataset('ecommerce_sales')

# 1. Group by region and category
summary = df.groupby(['region', 'category']).agg(
    total_orders=('order_id', 'count'),
    total_sales=('unit_price', lambda x: (x * df.loc[x.index, 'quantity']).sum()),
    total_profit=('profit', 'sum'),
    avg_discount=('discount_pct', 'mean')
).reset_index()

print(summary.sort_values(by='total_profit'))`,
    expectedOutputSnippet: `region          category         total_orders  gross_revenue  net_profit  avg_discount_pct
Asia Pacific    Furniture        420           $75,600.00     -$7,728.00  20.0%
Latin America   Office Supplies  310           $18,400.00      $1,240.00   8.5%
Europe          Office Supplies  890           $72,500.00     $14,210.00  10.0%
North America   Technology       1250          $420,000.00    $98,400.00   5.0%`
  },
  {
    id: 'chal-student-gpa-factors',
    title: 'Student Performance & Study Habit Correlation',
    category: 'Educational Analytics',
    datasetName: 'Student Academic Performance & Study Habits',
    datasetId: 'ds-student-performance',
    difficulty: 'Beginner',
    problem: 'The Dean of Academic Affairs needs empirical proof on whether weekly study hours or attendance percentage is the stronger predictor of Math and Reading exam success.',
    tasks: [
      { id: 't1', description: 'Compute Pearson correlation coefficient between study_hours_weekly and math_score.', expectedResult: 'Correlation r = 0.74 (Strong positive correlation).' },
      { id: 't2', description: 'Calculate average exam scores grouped by test_prep status (Completed vs None).', expectedResult: 'Students completing test prep score 14.2 points higher on average.' },
      { id: 't3', description: 'Find the minimum study hours threshold required for an 80+ average score.', expectedResult: 'Students studying >= 16.5 hours/week have an 88% probability of scoring 80+.' }
    ],
    hints: [
      'In Python, use df["study_hours_weekly"].corr(df["math_score"]).',
      'In SQL: SELECT test_prep, AVG(math_score), AVG(reading_score) FROM students GROUP BY test_prep.'
    ],
    expectedSkills: ['Descriptive Statistics', 'Correlation Analysis', 'Pandas EDA', 'Data Interpretation'],
    solutionExplanation: 'Study hours weekly correlates strongly with math and writing performance (r = 0.74), while attendance below 80% marks a steep drop-off in pass rates regardless of independent study.',
    starterSql: `SELECT 
    test_prep,
    COUNT(*) as student_count,
    ROUND(AVG(study_hours_weekly), 1) as avg_study_hours,
    ROUND(AVG(attendance_rate), 1) as avg_attendance,
    ROUND(AVG(math_score), 1) as avg_math,
    ROUND(AVG(reading_score), 1) as avg_reading
FROM student_performance
GROUP BY test_prep;`,
    starterPython: `import pandas as pd

df = load_dataset('student_performance')

# Calculate Pearson correlation matrix
corr_matrix = df[['study_hours_weekly', 'attendance_rate', 'math_score', 'reading_score', 'writing_score']].corr()
print("Correlation with Math Score:")
print(corr_matrix['math_score'].sort_values(ascending=False))`,
    expectedOutputSnippet: `test_prep    student_count  avg_study_hours  avg_attendance  avg_math  avg_reading
Completed    420            17.8             93.4            82.4      84.1
None         580            11.2             86.2            59.6      62.3`
  },
  {
    id: 'chal-telecom-churn-risk',
    title: 'Customer Churn Drivers & Contract Vulnerability',
    category: 'Predictive Analytics',
    datasetName: 'Customer Retention & Churn Risk Dataset',
    datasetId: 'ds-telecom-churn',
    difficulty: 'Intermediate',
    problem: 'Identify key behavioral risk markers that precede subscriber cancellation to help customer success agents prioritize intervention calls.',
    tasks: [
      { id: 't1', description: 'Calculate churn percentage grouped by contract type (Month-to-month, One year, Two year).', expectedResult: 'Month-to-month contracts have 42.8% churn rate vs 2.8% for Two-year contracts.' },
      { id: 't2', description: 'Determine the threshold of customer support tickets that spikes churn above 60%.', expectedResult: 'Customers logging >= 3 tech support tickets experience a 64% churn rate.' },
      { id: 't3', description: 'Calculate revenue at risk across active month-to-month subscribers with high ticket volumes.', expectedResult: 'Over $48,000 monthly recurring revenue is at immediate risk.' }
    ],
    hints: [
      'In SQL: CASE WHEN churn = "Yes" THEN 1 ELSE 0 END to calculate churn percentage.',
      'Inspect the relationship between tenure_months and monthly_charges.'
    ],
    expectedSkills: ['Cohort Analysis', 'Binary Flag Aggregations', 'Risk Scoring', 'SQL CASE Statements'],
    solutionExplanation: 'Subscribers on month-to-month plans with more than 3 support tickets and high monthly fees (> $70) represent the highest risk group with a 72% likelihood to cancel.',
    starterSql: `SELECT 
    contract,
    COUNT(*) as total_customers,
    ROUND(AVG(CASE WHEN churn = 'Yes' THEN 100.0 ELSE 0.0 END), 1) as churn_rate_pct,
    ROUND(AVG(monthly_charges), 2) as avg_monthly_fee,
    ROUND(AVG(tech_tickets), 1) as avg_tickets
FROM telecom_churn
GROUP BY contract
ORDER BY churn_rate_pct DESC;`,
    starterPython: `import pandas as pd

df = load_dataset('telecom_churn')

churn_by_contract = df.groupby('contract').agg(
    total=('customer_id', 'count'),
    churn_rate=('churn', lambda x: (x == 'Yes').mean() * 100),
    avg_monthly=('monthly_charges', 'mean'),
    avg_tickets=('tech_tickets', 'mean')
).reset_index()

print(churn_by_contract)`,
    expectedOutputSnippet: `contract          total_customers  churn_rate_pct  avg_monthly_fee  avg_tickets
Month-to-month    2240             42.8%           $73.50           2.1
One year          1050             11.2%           $62.10           0.8
Two year          910              2.8%            $54.80           0.4`
  },
  {
    id: 'chal-credit-card-fraud',
    title: 'High-Risk Transaction Anomaly Detection',
    category: 'Risk & Fraud Analytics',
    datasetName: 'Credit Card Transaction Fraud Records',
    datasetId: 'ds-credit-fraud',
    difficulty: 'Advanced',
    problem: 'Design an automated heuristic alert rule that captures at least 80% of fraudulent charges while keeping false positive flags below 5%.',
    tasks: [
      { id: 't1', description: 'Analyze fraud rates partitioned by time of day (daylight vs midnight-5am).', expectedResult: 'Transactions between 1am and 5am exhibit 12x higher fraud probability.' },
      { id: 't2', description: 'Identify transactions where distance_from_home exceeds 500km and evaluate fraud share.', expectedResult: '68% of transactions with distance > 500km and online=1 are confirmed fraud.' },
      { id: 't3', description: 'Draft a composite rule combining amount, hour, and location distance.', expectedResult: 'Alert rule: Amount > $500 AND distance > 200km OR (hour BETWEEN 1 AND 5 AND online=1).' }
    ],
    hints: [
      'Evaluate Precision = True Positives / (True Positives + False Positives).',
      'Use confusion matrix metrics.'
    ],
    expectedSkills: ['Anomaly Detection', 'Imbalanced Data Handling', 'Precision & Recall', 'Feature Logic'],
    solutionExplanation: 'Combining transaction amount > $400 with high geographic distance (> 500 km) and late-night execution successfully isolates the fraud cluster with high specificity.',
    starterSql: `SELECT 
    CASE 
        WHEN hour_of_day BETWEEN 1 AND 5 THEN 'Night (1am-5am)'
        ELSE 'Day (6am-12am)'
    END as time_window,
    COUNT(*) as total_transactions,
    SUM(is_fraud) as fraud_count,
    ROUND(AVG(is_fraud) * 100, 2) as fraud_rate_pct,
    ROUND(AVG(amount), 2) as avg_amount
FROM credit_fraud
GROUP BY 1;`,
    starterPython: `import pandas as pd

df = load_dataset('credit_fraud')

# Test composite rule
high_risk_rule = (df['amount'] > 400) & (df['dist_from_home_km'] > 300) | ((df['hour_of_day'] < 5) & (df['is_online'] == 1))

true_frauds = df['is_fraud'].sum()
detected_frauds = df[high_risk_rule]['is_fraud'].sum()
total_alerts = high_risk_rule.sum()

recall = (detected_frauds / true_frauds) * 100
precision = (detected_frauds / total_alerts) * 100

print(f"Recall: {recall:.1f}%, Precision: {precision:.1f}%")`,
    expectedOutputSnippet: `time_window       total_transactions  fraud_count  fraud_rate_pct  avg_amount
Night (1am-5am)   1120                92           8.21%           $284.10
Day (6am-12am)    7380                61           0.83%           $68.90`
  },
  {
    id: 'chal-hospital-readmission',
    title: 'Hospital Patient 30-Day Readmission Drivers',
    category: 'Healthcare Data Science',
    datasetName: 'Hospital Patient Admissions & Readmissions',
    datasetId: 'ds-healthcare-admissions',
    difficulty: 'Advanced',
    problem: 'Identify high-risk patient segments prone to 30-day post-discharge readmission to implement proactive nurse follow-up outreach.',
    tasks: [
      { id: 't1', description: 'Group patients by primary diagnosis and calculate 30-day readmission percentage.', expectedResult: 'Heart Failure and Pneumonia patients have highest readmission rates (> 38%).' },
      { id: 't2', description: 'Examine impact of medication count (> 15 medications) on readmission.', expectedResult: 'Patients on 15+ medications have 2.3x higher readmission probability.' },
      { id: 't3', description: 'Calculate average length of stay for readmitted vs non-readmitted patients.', expectedResult: 'Readmitted patients had an average initial stay of 6.8 days vs 3.9 days.' }
    ],
    hints: [
      'In SQL: Use GROUP BY diagnosis, ORDER BY readmission_rate DESC.',
      'Check interaction between age and emergency room visits in the preceding 12 months.'
    ],
    expectedSkills: ['Clinical Data Analysis', 'Risk Stratification', 'Multi-factor Grouping'],
    solutionExplanation: 'Elderly patients (> 65) diagnosed with Heart Failure taking over 15 distinct medications account for 54% of all 30-day readmission penalties under healthcare quality metrics.',
    starterSql: `SELECT 
    diagnosis,
    COUNT(*) as total_patients,
    ROUND(AVG(stay_days), 1) as avg_stay_days,
    ROUND(AVG(num_medications), 1) as avg_meds,
    ROUND(AVG(CASE WHEN readmitted_30d = 'Yes' THEN 100.0 ELSE 0.0 END), 1) as readmit_rate_pct
FROM hospital_admissions
GROUP BY diagnosis
ORDER BY readmit_rate_pct DESC;`,
    starterPython: `import pandas as pd

df = load_dataset('hospital_admissions')

summary = df.groupby('diagnosis').agg(
    patients=('patient_id', 'count'),
    avg_stay=('stay_days', 'mean'),
    avg_meds=('num_medications', 'mean'),
    readmit_rate=('readmitted_30d', lambda x: (x == 'Yes').mean() * 100)
).reset_index()

print(summary.sort_values(by='readmit_rate', ascending=False))`,
    expectedOutputSnippet: `diagnosis        total_patients  avg_stay_days  avg_meds  readmit_rate_pct
Heart Failure    840             6.4            18.2      41.2%
Pneumonia        720             7.1            19.5      36.8%
Diabetes Type 2  980             4.1            12.8      21.4%
Appendicitis     460             2.1             6.2       4.3%`
  },
  {
    id: 'chal-rideshare-surge-pricing',
    title: 'Urban Mobility Surge Pricing & Congestion Dynamics',
    category: 'Transportation Economics',
    datasetName: 'Urban Rideshare Mobility & Fare Dynamics',
    datasetId: 'ds-urban-rideshare',
    difficulty: 'Intermediate',
    problem: 'Analyze fare efficiency and driver tip behavior across trip lengths and surge pricing multiplier periods.',
    tasks: [
      { id: 't1', description: 'Calculate average fare per mile across different surge multiplier tiers.', expectedResult: 'Fares scale from $3.20/mile at 1.0x surge up to $7.80/mile at 1.75x+ surge.' },
      { id: 't2', description: 'Analyze whether passenger tip percentage declines during peak surge pricing.', expectedResult: 'Tips decline by 34% when surge multiplier exceeds 1.5x.' }
    ],
    hints: [
      'Tip percentage = (tip_amount / fare_amount) * 100.',
      'Group surge into buckets (e.g. 1.0x, 1.1-1.4x, 1.5x+).'
    ],
    expectedSkills: ['Elasticity Calculation', 'Feature Binning', 'SQL Aggregations'],
    solutionExplanation: 'While higher surge multipliers increase gross fare revenue, passengers retaliate by reducing voluntary driver gratuities significantly.',
    starterSql: `SELECT 
    CASE 
        WHEN surge_multiplier = 1.0 THEN 'Base (1.0x)'
        WHEN surge_multiplier < 1.5 THEN 'Moderate (1.1x - 1.4x)'
        ELSE 'High Surge (1.5x+)'
    END as surge_tier,
    COUNT(*) as total_rides,
    ROUND(AVG(fare_amount / distance_miles), 2) as avg_fare_per_mile,
    ROUND(AVG((tip_amount / fare_amount) * 100), 1) as avg_tip_pct
FROM rideshare_trips
GROUP BY 1;`,
    starterPython: `import pandas as pd

df = load_dataset('rideshare_trips')

df['fare_per_mile'] = df['fare_amount'] / df['distance_miles']
df['tip_pct'] = (df['tip_amount'] / df['fare_amount']) * 100

print(df.groupby('surge_multiplier')[['fare_per_mile', 'tip_pct']].mean())`,
    expectedOutputSnippet: `surge_tier              total_rides  avg_fare_per_mile  avg_tip_pct
Base (1.0x)             4120         $3.24              18.4%
Moderate (1.1x - 1.4x)  1450         $4.90              14.2%
High Surge (1.5x+)      630          $7.82              10.1%`
  },
  {
    id: 'chal-housing-valuation',
    title: 'Housing Feature Valuation & Price per Square Foot',
    category: 'Real Estate Analytics',
    datasetName: 'Metropolitan Housing Attributes & Sale Prices',
    datasetId: 'ds-real-estate-housing',
    difficulty: 'Intermediate',
    problem: 'Determine the baseline price per square foot across metropolitan neighborhoods and isolate the value added by top-tier school districts.',
    tasks: [
      { id: 't1', description: 'Calculate price per square foot (sale_price / sqft) grouped by school_rating bucket.', expectedResult: 'School rating >= 8 commands a $48/sqft price premium over school rating < 6.' },
      { id: 't2', description: 'Determine the depreciation rate per decade since year_built.', expectedResult: 'Properties depreciate roughly 4.2% per decade unless extensively renovated.' }
    ],
    hints: [
      'Create school_tier bins using CASE WHEN school_rating >= 8 THEN "High".',
      'Use scatter plots to inspect price vs sqft linearity.'
    ],
    expectedSkills: ['Real Estate Economics', 'Linear Trend Analysis', 'Bucket Aggregations'],
    solutionExplanation: 'School district quality represents the single most resilient variable protecting property value against broader market cyclical corrections.',
    starterSql: `SELECT 
    CASE 
        WHEN school_rating >= 8.0 THEN 'Top Tier (8.0+)'
        WHEN school_rating >= 6.0 THEN 'Mid Tier (6.0 - 7.9)'
        ELSE 'Low Tier (< 6.0)'
    END as school_tier,
    COUNT(*) as house_count,
    ROUND(AVG(sale_price), 0) as avg_price,
    ROUND(AVG(sale_price / sqft), 2) as avg_price_per_sqft
FROM metropolitan_housing
GROUP BY 1
ORDER BY avg_price_per_sqft DESC;`,
    starterPython: `import pandas as pd

df = load_dataset('metropolitan_housing')
df['price_per_sqft'] = df['sale_price'] / df['sqft']

print(df.groupby(pd.cut(df['school_rating'], bins=[0, 6, 8, 10]))['price_per_sqft'].mean())`,
    expectedOutputSnippet: `school_tier           house_count  avg_price    avg_price_per_sqft
Top Tier (8.0+)       1420         $462,000     $238.50
Mid Tier (6.0 - 7.9)  2100         $335,000     $194.20
Low Tier (< 6.0)      980          $248,000     $152.80`
  },
  {
    id: 'chal-spotify-virality',
    title: 'Audio Feature Virality & Acoustic Fingerprints',
    category: 'Media & Entertainment',
    datasetName: 'Spotify Audio Features & Popularity Index',
    datasetId: 'ds-spotify-tracks',
    difficulty: 'Beginner',
    problem: 'Analyze which acoustic features (danceability, energy, tempo, valence) differentiate mega-hit tracks (popularity >= 80) from standard library catalog songs.',
    tasks: [
      { id: 't1', description: 'Compare mean danceability and energy between high-popularity and low-popularity tracks.', expectedResult: 'High popularity tracks exhibit 28% higher danceability and tighter tempo clustering around 120-128 BPM.' },
      { id: 't2', description: 'Determine whether higher valence (positive mood) correlates with increased streaming popularity.', expectedResult: 'Minor correlation with valence; danceability and energy drive 80% of variance.' }
    ],
    hints: [
      'Filter df[df["popularity"] >= 80] vs df[df["popularity"] < 50].',
      'Generate a comparative histogram of BPM distribution.'
    ],
    expectedSkills: ['Audio Feature Analysis', 'Comparative Distributions', 'T-testing'],
    solutionExplanation: 'Viral hit tracks are tightly engineered around a tempo of 120-128 BPM with danceability scores above 0.75 and high compression loudness.',
    starterSql: `SELECT 
    CASE WHEN popularity >= 80 THEN 'Viral Hits (80+)' ELSE 'Standard Tracks' END as track_tier,
    COUNT(*) as track_count,
    ROUND(AVG(bpm), 1) as avg_bpm,
    ROUND(AVG(danceability), 3) as avg_danceability,
    ROUND(AVG(energy), 3) as avg_energy,
    ROUND(AVG(valence), 3) as avg_valence
FROM spotify_tracks
GROUP BY 1;`,
    starterPython: `import pandas as pd

df = load_dataset('spotify_tracks')

df['tier'] = df['popularity'].apply(lambda x: 'Viral (>=80)' if x >= 80 else 'Standard')
print(df.groupby('tier')[['bpm', 'danceability', 'energy', 'valence']].mean())`,
    expectedOutputSnippet: `track_tier         track_count  avg_bpm  avg_danceability  avg_energy  avg_valence
Viral Hits (80+)   890          123.8    0.784             0.742       0.612
Standard Tracks    6310         118.2    0.598             0.584       0.490`
  },
  {
    id: 'chal-air-quality-spikes',
    title: 'Meteorological Drivers of Severe Air Pollution',
    category: 'Environmental Science',
    datasetName: 'City Air Quality Index (AQI) & Weather Telemetry',
    datasetId: 'ds-air-quality-weather',
    difficulty: 'Intermediate',
    problem: 'Identify meteorological conditions (specifically low wind speeds and thermal inversions) that trap dangerous PM2.5 particulates in the urban breathing zone.',
    tasks: [
      { id: 't1', description: 'Evaluate PM2.5 particulate levels as a function of wind speed bins (0-5 kph, 5-15 kph, 15+ kph).', expectedResult: 'Stagnant winds (< 5 kph) result in 3.4x higher particulate accumulation.' },
      { id: 't2', description: 'Calculate percentage of hours where AQI exceeds the WHO hazardous threshold (> 150).', expectedResult: '14.2% of recorded hours fall into Unhealthy or Hazardous categories.' }
    ],
    hints: [
      'In SQL: CASE WHEN wind_kph < 5 THEN "Stagnant" ...',
      'In Python: Use seaborn.regplot to visualize PM2.5 vs wind_kph.'
    ],
    expectedSkills: ['Environmental Modeling', 'Threshold Analysis', 'Correlation'],
    solutionExplanation: 'Atmospheric boundary stagnation combined with ground thermal inversions prevents vertical dispersal of automotive and industrial exhaust emissions.',
    starterSql: `SELECT 
    CASE 
        WHEN wind_kph < 5.0 THEN 'Stagnant (< 5 kph)'
        WHEN wind_kph < 15.0 THEN 'Moderate (5-15 kph)'
        ELSE 'Breezy (15+ kph)'
    END as wind_category,
    COUNT(*) as hours_logged,
    ROUND(AVG(pm2_5), 1) as avg_pm2_5,
    ROUND(AVG(aqi), 0) as avg_aqi,
    ROUND(AVG(CASE WHEN aqi > 150 THEN 100.0 ELSE 0.0 END), 1) as hazardous_hours_pct
FROM air_quality
GROUP BY 1
ORDER BY avg_aqi DESC;`,
    starterPython: `import pandas as pd

df = load_dataset('air_quality')

bins = [0, 5, 15, 100]
labels = ['Stagnant (<5)', 'Moderate (5-15)', 'Breezy (15+)']
df['wind_bucket'] = pd.cut(df['wind_kph'], bins=bins, labels=labels)

print(df.groupby('wind_bucket')[['pm2_5', 'aqi']].mean())`,
    expectedOutputSnippet: `wind_category        hours_logged  avg_pm2_5  avg_aqi  hazardous_hours_pct
Stagnant (< 5 kph)   1240          68.4       142      28.5%
Moderate (5-15 kph)  2480          32.1        82       7.2%
Breezy (15+ kph)     1080          14.8        44       1.1%`
  },
  {
    id: 'chal-startup-valuation-multiples',
    title: 'Venture Capital Sector Valuation Multiples',
    category: 'Financial Modeling',
    datasetName: 'Tech Startup Venture Funding & Valuation',
    datasetId: 'ds-startup-funding',
    difficulty: 'Intermediate',
    problem: 'Analyze valuation-to-funding ratios across industry sectors to determine where venture capital premium multiples are currently concentrated.',
    tasks: [
      { id: 't1', description: 'Compute median valuation-to-funding multiple (valuation_m / funding_m) by sector.', expectedResult: 'AI sector leads with median multiple of 8.2x vs 4.8x for FinTech and 3.9x for E-commerce.' },
      { id: 't2', description: 'Analyze round progression from Seed to Series B to estimate step-up valuation multiples.', expectedResult: 'Average step-up between Seed and Series A is 3.4x, and Series A to Series B is 2.8x.' }
    ],
    hints: [
      'Exclude startups where funding_m <= 0 to avoid division by zero.',
      'Use MEDIAN or PERCENTILE_CONT(0.5) in SQL.'
    ],
    expectedSkills: ['Valuation Multiple Modeling', 'Sector Comparison', 'Outlier Filtering'],
    solutionExplanation: 'Artificial Intelligence and HealthTech startups command substantial multiple premiums due to high intellectual property barriers and perceived total addressable market.',
    starterSql: `SELECT 
    sector,
    COUNT(*) as total_deals,
    ROUND(AVG(funding_m), 1) as avg_funding_m,
    ROUND(AVG(valuation_m), 1) as avg_val_m,
    ROUND(AVG(valuation_m / funding_m), 1) as avg_multiple
FROM startup_funding
WHERE funding_m > 0
GROUP BY sector
ORDER BY avg_multiple DESC;`,
    starterPython: `import pandas as pd

df = load_dataset('startup_funding')

df['multiple'] = df['valuation_m'] / df['funding_m']
print(df.groupby('sector')['multiple'].agg(['count', 'median', 'mean']).sort_values(by='median', ascending=False))`,
    expectedOutputSnippet: `sector                   total_deals  avg_funding_m  avg_val_m  avg_multiple
Artificial Intelligence  780          $24.5M         $185.0M    8.4x
FinTech                  820          $18.2M         $88.4M     5.1x
HealthTech               540          $14.8M         $72.0M     4.9x
Enterprise SaaS          660          $12.4M         $58.2M     4.6x`
  }
];
