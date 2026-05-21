/**
 * Seed script: populates the Parameter collection with historical dataset.
 * Run once: node seedParameters.js
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');

const parameterSchema = new mongoose.Schema({
  s_no: { type: Number, unique: true },
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ['Micro', 'Chemical'], required: true },
  unit: { type: String, required: true }
}, { timestamps: true });

const Parameter = mongoose.model('Parameter', parameterSchema);

const parameters = [
  // ── MICROBIOLOGY ──
  { name: 'Total Bacterial Count (TBC)', type: 'Micro', unit: 'CFU/g' },
  { name: 'Total Fungal Count (TFC)', type: 'Micro', unit: 'CFU/g' },
  { name: 'E. coli', type: 'Micro', unit: 'CFU/g' },
  { name: 'Coliform', type: 'Micro', unit: 'CFU/g' },
  { name: 'Salmonella', type: 'Micro', unit: 'Absent per 25 g' },
  { name: 'Staphylococcus aureus', type: 'Micro', unit: 'CFU/g' },
  { name: 'Pseudomonas', type: 'Micro', unit: 'CFU/g' },
  { name: 'Total Plate Count (TPC)', type: 'Micro', unit: 'CFU/g' },
  { name: 'Yeast & Mould Count', type: 'Micro', unit: 'CFU/g' },
  { name: 'Vibrio Cholerae', type: 'Micro', unit: 'Absent per 25 g' },
  { name: 'Vibrio Parahaemolyticus', type: 'Micro', unit: 'Absent per 25 g' },
  { name: 'Shigella', type: 'Micro', unit: 'Absent per 25 g' },
  { name: 'Enterobacteriaceae', type: 'Micro', unit: 'CFU/g' },
  { name: 'Faecal Streptococci', type: 'Micro', unit: 'CFU/g' },

  // ── CHEMICAL ──
  { name: 'Lead (Pb)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Cadmium (Cd)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Arsenic (As)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Mercury (Hg)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Copper (Cu)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Zinc (Zn)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Iron (Fe)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Nickel (Ni)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Chromium (Cr)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Manganese (Mn)', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Calcium', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Magnesium', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Sodium', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Potassium', type: 'Chemical', unit: 'mg/kg' },
  { name: 'pH', type: 'Chemical', unit: 'pH units' },
  { name: 'Total Dissolved Solids (TDS)', type: 'Chemical', unit: 'mg/L' },
  { name: 'Total Suspended Solids (TSS)', type: 'Chemical', unit: 'mg/L' },
  { name: 'Total Hardness', type: 'Chemical', unit: 'mg/L' },
  { name: 'Total Alkalinity', type: 'Chemical', unit: 'mg/L' },
  { name: 'Chloride', type: 'Chemical', unit: 'mg/L' },
  { name: 'Biochemical Oxygen Demand (BOD)', type: 'Chemical', unit: 'mg/L' },
  { name: 'Chemical Oxygen Demand (COD)', type: 'Chemical', unit: 'mg/L' },
  { name: 'Turbidity', type: 'Chemical', unit: 'NTU' },
  { name: 'Conductivity', type: 'Chemical', unit: 'µS/cm' },
  { name: 'Residual Chlorine', type: 'Chemical', unit: 'mg/L' },
  { name: 'Oil & Grease', type: 'Chemical', unit: 'mg/L' },
  { name: 'Moisture', type: 'Chemical', unit: '%' },
  { name: 'Total Ash', type: 'Chemical', unit: '%' },
  { name: 'Acid Insoluble Ash', type: 'Chemical', unit: '%' },
  { name: 'Protein', type: 'Chemical', unit: '%' },
  { name: 'Fat Content', type: 'Chemical', unit: '%' },
  { name: 'Carbohydrates', type: 'Chemical', unit: '%' },
  { name: 'Energy Value', type: 'Chemical', unit: 'kcal/100g' },
  { name: 'Dietary Fibre', type: 'Chemical', unit: '%' },
  { name: 'Crude Fibre', type: 'Chemical', unit: '%' },
  { name: 'Added Sugar', type: 'Chemical', unit: '%' },
  { name: 'Total Sugar', type: 'Chemical', unit: '%' },
  { name: 'Gluten', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Saponification Value', type: 'Chemical', unit: 'mg KOH/g' },
  { name: 'Iodine Value', type: 'Chemical', unit: 'g I₂/100g' },
  { name: 'Acid Value', type: 'Chemical', unit: 'mg KOH/g' },
  { name: 'Peroxide Value', type: 'Chemical', unit: 'mEq O₂/kg' },
  { name: 'Refractive Index', type: 'Chemical', unit: 'nd' },
  { name: 'Free Fatty Acid (FFA)', type: 'Chemical', unit: '%' },
  { name: 'Trans Fat', type: 'Chemical', unit: '%' },
  { name: 'Saturated Fatty Acid (SFA)', type: 'Chemical', unit: '%' },
  { name: 'Monounsaturated Fatty Acid (MUFA)', type: 'Chemical', unit: '%' },
  { name: 'Polyunsaturated Fatty Acid (PUFA)', type: 'Chemical', unit: '%' },
  { name: 'Unsaponifiable Matter', type: 'Chemical', unit: '%' },
  { name: 'Aflatoxin (B1, B2, G1, G2)', type: 'Chemical', unit: 'µg/kg' },
  { name: 'Ochratoxin A', type: 'Chemical', unit: 'µg/kg' },
  { name: 'Melamine', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Pesticide Residues', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Malathion', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Chlorpyrifos', type: 'Chemical', unit: 'mg/kg' },
  { name: 'Curcumin Content', type: 'Chemical', unit: '%' },
  { name: 'Capsaicin', type: 'Chemical', unit: '%' },
  { name: 'Piperine', type: 'Chemical', unit: '%' },
  { name: 'Aloin', type: 'Chemical', unit: '%' },
  { name: 'Caffeine', type: 'Chemical', unit: '%' },
  { name: 'Volatile Oil Content', type: 'Chemical', unit: '%' },
  { name: 'Menthol Content', type: 'Chemical', unit: '%' },
];

async function seed() {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/foodlab';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
    await Parameter.syncIndexes();
    console.log('Indexes synced');

    let added = 0, skipped = 0;
    for (let i = 0; i < parameters.length; i++) {
      const p = parameters[i];
      const exists = await Parameter.findOne({ name: p.name });
      if (exists) {
        skipped++;
        continue;
      }
      const last = await Parameter.findOne({}, {}, { sort: { s_no: -1 } });
      const s_no = last && last.s_no ? last.s_no + 1 : 1;
      try {
        await Parameter.create({ ...p, s_no });
        added++;
        process.stdout.write(`\r  Added ${added} parameters...`);
      } catch (e) {
        if (e.code === 11000) { skipped++; continue; }
        throw e;
      }
    }

    console.log(`\n\nDone! Added: ${added}, Already existed (skipped): ${skipped}`);
    process.exit(0);
  } catch (err) {
    console.error('\nSeed error:', err.message);
    process.exit(1);
  }
}

seed();

