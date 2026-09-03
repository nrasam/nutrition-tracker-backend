import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const vitaminD = await prisma.micro.create({
    data: {
      name: "Vitamin D",
      unit: "IU",
      limit: 4000,
      goal: 800,
      category: "VITAMINS",
      benefits: [
        "Strong bones and teeth — Helps your body absorb calcium and phosphorus, which are essential for bone mineralization.",
        "Muscle function — Supports normal muscle function and strength; severe deficiency can contribute to muscle weakness.",
        "Immune system support — Plays an important role in regulating immune-system activity.",
      ],
      warnings: [
        "Taking too much — Vitamin D is fat-soluble, so excessive supplementation can build up in the body. Very high levels can cause calcium levels to rise dangerously.",
        "Drug interactions — Vitamin D can interact with some medications, particularly certain diuretics, steroids, and cholesterol-lowering medications.",
        "Not assuming more is better — If you're not deficient, taking very high doses generally doesn't provide extra benefit and can increase the risk of toxicity.",
      ],
    },
  });

  const cholesterol = await prisma.micro.create({
    data: {
      name: "Cholesterol",
      unit: "mg",
      goal: 0,
      category: "VITAMINS",
      benefits: [
        "Builds cell membranes — Cholesterol is an important structural component of your cells.",
        "Helps make hormones — Your body uses cholesterol to produce steroid hormones.",
        "Helps produce bile acids — These are needed to digest and absorb dietary fats.",
      ],
      warnings: [
        "High LDL can increase cardiovascular risk — Excess LDL can accumulate in artery walls and contribute to atherosclerosis, increasing the risk of heart attack and stroke.",
        "Some people respond more strongly to dietary cholesterol — Dietary cholesterol can raise LDL in some individuals, although the effect varies considerably between people.",
        "Don't focus only on dietary cholesterol — Foods high in cholesterol are often also high in saturated fat. Saturated fat can have a substantial effect on LDL, so replacing saturated fat with unsaturated fat is generally a more important dietary strategy.",
      ],
    },
  });

  const sodium = await prisma.micro.create({
    data: {
      name: "Sodium",
      unit: "mg",
      goal: 2300,
      limit: 2300,
      category: "MINERALS",
      benefits: [
        "Maintains fluid balance — Sodium helps regulate the amount of water inside and outside your cells.",
        "Supports nerve function — Sodium is essential for generating and transmitting nerve impulses.",
        "Helps muscles contract — Sodium plays an important role in normal muscle contractions, including the heartbeat.",
      ],
      warnings: [
        "Can raise blood pressure — Consistently consuming too much sodium can increase blood pressure, which raises cardiovascular risk.",
        "Can put additional strain on the kidneys — The kidneys regulate sodium and fluid levels, and excessive sodium intake can be particularly problematic for people with kidney disease.",
        "Easy to consume too much — Most dietary sodium comes from processed and restaurant foods rather than the salt shaker, so it can be surprisingly easy to exceed 2,300 mg/day.",
      ],
    },
  });

  const potassium = await prisma.micro.create({
    data: {
      name: "Potassium",
      unit: "mg",
      goal: 3400,
      category: "MINERALS",
      benefits: [
        "Supports heart function — Potassium is essential for maintaining the electrical activity of the heart and normal heartbeat.",
        "Helps muscles contract — Potassium is important for normal muscle contraction and function.",
        "Helps regulate blood pressure — Adequate potassium can help counteract some of sodium's effects on blood pressure.",
      ],
      warnings: [
        "Too much can be dangerous — Excessively high blood potassium (hyperkalemia) can cause abnormal heart rhythms and, in severe cases, cardiac arrest.",
        "Kidney problems increase the risk — Your kidneys remove excess potassium. People with impaired kidney function may need to restrict potassium.",
        "Some medications can raise potassium — Certain blood-pressure medications, such as ACE inhibitors, ARBs, and potassium-sparing diuretics, can increase potassium levels.",
      ],
    },
  });

  const calcium = await prisma.micro.create({
    data: {
      name: "Calcium",
      unit: "mg",
      limit: 2500,
      goal: 1000,
      benefits: [
        "Builds and maintains strong bones — Calcium is the main mineral in your bones and teeth and helps maintain bone strength.",
        "Supports muscle contraction — Calcium is required for your muscles to contract normally.",
        "Supports nerve function — Calcium helps nerves transmit signals throughout the body.",
      ],
      warnings: [
        "Too much can contribute to kidney stones — Particularly with excessive calcium supplementation.",
        "Excessive supplementation may cause problems — Very high calcium intake can lead to abnormally high blood calcium and potentially cardiovascular or other complications.",
        "Can interfere with some medications — Calcium supplements can reduce the absorption of medications such as certain antibiotics and thyroid medication, so timing can matter.",
      ],
      category: "MINERALS",
    },
  });

  const iron = await prisma.micro.create({
    data: {
      name: "Iron",
      unit: "mg",
      limit: 45,
      goal: 8,
      benefits: [
        "Makes hemoglobin — Iron is essential for hemoglobin, the protein in red blood cells that carries oxygen throughout your body.",
        "Supports energy production — Iron is involved in cellular energy production and helps your cells use oxygen efficiently.",
        "Supports brain function — Iron is important for normal cognitive function, neurotransmitter production, and brain development.",
      ],
      warnings: [
        "Too much can be toxic — Excessive iron, particularly from supplements, can cause nausea, vomiting, abdominal pain, and potentially serious organ damage.",
        "Iron overload can damage organs — Conditions such as hereditary hemochromatosis can cause iron to accumulate in the liver, heart, and other organs.",
        "Iron supplements can interfere with medications — Iron can reduce absorption of certain medications, including some thyroid medications and antibiotics, so they may need to be taken at different times.",
      ],
      category: "MINERALS",
    },
  });

  // const template = await prisma.micro.create({
  //   data: {
  //     name: "",
  //     unit: "",
  //     limit: 100,
  //     goal: 100,
  //     benefits: ["", "", ""],
  //     warnings: ["", "", ""],
  //     category: "FATS",
  //   },
  // });

  const magnesium = await prisma.micro.create({
    data: {
      name: "Magnesium",
      unit: "mg",
      goal: 400,
      benefits: [
        "Supports muscle function — Magnesium is essential for normal muscle contraction and relaxation.",
        "Supports nerve function — It helps regulate nerve signals and communication throughout the body.",
        "Supports strong bones — Magnesium contributes to bone formation and helps maintain healthy bone mineral density.",
      ],
      warnings: [
        "Too much from supplements can cause diarrhea — High supplemental doses can cause diarrhea, nausea, and abdominal cramping.",
        "Extremely high amounts can be dangerous — Very excessive magnesium intake can cause low blood pressure, abnormal heart rhythms, and, in severe cases, cardiac arrest.",
        "Kidney problems increase the risk — The kidneys normally remove excess magnesium, so people with impaired kidney function are at greater risk of magnesium toxicity.",
        "Upper limit of 350 mg/day from supplements and medications for adults. No established upper limit for magnesium from food.",
      ],
      category: "MINERALS",
    },
  });

  const phosphorus = await prisma.micro.create({
    data: {
      name: "Phosphorus",
      unit: "mg",
      goal: 700,
      limit: 4000,
      benefits: [
        "Supports bones and teeth — Phosphorus combines with calcium to build and maintain bones and teeth.",
        "Helps produce energy — Phosphorus is part of ATP, the molecule cells use to store and transfer energy.",
        "Supports cells and tissues — It is part of DNA, RNA, and cell membranes and helps regulate many cellular processes.",
      ],
      warnings: [
        "Too much can weaken bones — Excessive phosphorus can disrupt calcium balance and may affect bone health.",
        "Kidney disease increases the risk — Impaired kidneys may not remove excess phosphorus effectively, causing blood levels to rise.",
        "Processed foods can contain added phosphorus — Phosphate additives can make it easy to consume more than intended.",
      ],
      category: "MINERALS",
    },
  });

  const zinc = await prisma.micro.create({
    data: {
      name: "Zinc",
      unit: "mg",
      goal: 11,
      limit: 40,
      benefits: [
        "Supports immune function — Zinc is needed for normal immune-system development and activity.",
        "Helps heal wounds — Zinc supports skin integrity, tissue repair, and wound healing.",
        "Supports growth and development — Zinc is involved in protein and DNA synthesis and normal cell division.",
      ],
      warnings: [
        "Too much can cause nausea — Excessive zinc can cause nausea, vomiting, stomach upset, and headaches.",
        "Can reduce copper absorption — High zinc intake over time can lead to copper deficiency and related health problems.",
        "Some medications may interact — Zinc can reduce absorption of certain antibiotics, so dosing times may need to be separated.",
      ],
      category: "MINERALS",
    },
  });

  const copper = await prisma.micro.create({
    data: {
      name: "Copper",
      unit: "mcg",
      goal: 900,
      limit: 10000,
      benefits: [
        "Helps form red blood cells — Copper supports iron transport and the production of healthy blood cells.",
        "Supports the nervous system — Copper helps maintain nerves and supports normal brain function.",
        "Supports connective tissue — Copper is needed to produce collagen and other structural proteins.",
      ],
      warnings: [
        "Too much can be toxic — Excessive copper can cause nausea, vomiting, abdominal pain, and liver damage.",
        "Wilson disease increases the risk — People with this inherited condition can accumulate dangerous amounts of copper.",
        "High zinc intake can cause deficiency — Long-term excessive zinc can interfere with copper absorption.",
      ],
      category: "MINERALS",
    },
  });

  const manganese = await prisma.micro.create({
    data: {
      name: "Manganese",
      unit: "mg",
      goal: 2,
      limit: 11,
      benefits: [
        "Supports bone formation — Manganese contributes to the formation and maintenance of healthy bones.",
        "Helps protect cells — Manganese is part of an antioxidant enzyme that helps protect cells from oxidative stress.",
        "Supports metabolism — It helps the body process carbohydrates, amino acids, and cholesterol.",
      ],
      warnings: [
        "Too much can affect the nervous system — Excessive manganese, especially from inhaled sources, can cause neurological problems.",
        "Liver disease can increase risk — The liver helps remove manganese, so impaired function may allow it to accumulate.",
        "Supplements are usually unnecessary — Most people obtain enough manganese from a varied diet.",
      ],
      category: "MINERALS",
    },
  });

  const selenium = await prisma.micro.create({
    data: {
      name: "Selenium",
      unit: "mcg",
      goal: 55,
      limit: 400,
      benefits: [
        "Protects cells from damage — Selenium is part of antioxidant enzymes that help control oxidative stress.",
        "Supports thyroid function — Selenium helps the body metabolize thyroid hormones.",
        "Supports immune function — Adequate selenium contributes to normal immune-system activity.",
      ],
      warnings: [
        "Too much can cause selenosis — Excessive selenium may cause hair or nail changes, garlic breath, nausea, and fatigue.",
        "Very high amounts can be dangerous — Severe excess can cause nervous-system problems and other serious effects.",
        "Selenium content in foods varies — The amount in plant foods depends partly on the selenium content of the soil.",
      ],
      category: "MINERALS",
    },
  });

  const vitaminE = await prisma.micro.create({
    data: {
      name: "Vitamin E",
      unit: "mg",
      goal: 15,
      limit: 1000,
      benefits: [
        "Protects cells — Vitamin E acts as an antioxidant that helps protect cell membranes from oxidative damage.",
        "Supports immune function — Vitamin E contributes to normal immune-system activity.",
        "Supports cell communication — It helps maintain healthy cells and normal cellular signaling.",
      ],
      warnings: [
        "High-dose supplements can increase bleeding risk — Vitamin E may interfere with blood clotting, especially with blood thinners.",
        "More is not always better — Large supplemental doses have not consistently shown extra health benefits and may be harmful.",
        "Can interact with medications — Discuss high-dose supplementation with a healthcare professional if taking medicines that affect clotting.",
      ],
      category: "VITAMINS",
    },
  });

  const thiamin = await prisma.micro.create({
    data: {
      name: "Thiamin (B1)",
      unit: "mcg",
      goal: 1200,
      benefits: [
        "Helps produce energy — Thiamin helps convert carbohydrates into energy the body can use.",
        "Supports nerve function — It is needed for normal nerve signaling and nervous-system function.",
        "Supports heart and muscle function — Thiamin helps maintain normal muscle activity, including the heart.",
      ],
      warnings: [
        "Deficiency can affect the nervous system — Severe deficiency can cause weakness, confusion, and nerve problems.",
        "Alcohol use can increase deficiency risk — Heavy alcohol use can reduce thiamin intake, absorption, and storage.",
        "Food sources are preferable — A varied diet generally provides enough thiamin for most people.",
      ],
      category: "VITAMINS",
    },
  });

  const riboflavin = await prisma.micro.create({
    data: {
      name: "Riboflavin (B2)",
      unit: "mcg",
      goal: 1300,
      benefits: [
        "Supports energy metabolism — Riboflavin helps the body use carbohydrates, fats, and proteins for energy.",
        "Helps protect cells — It contributes to antioxidant defenses and normal cell maintenance.",
        "Supports red blood cells — Riboflavin helps maintain normal blood cells and supports iron metabolism.",
      ],
      warnings: [
        "Deficiency can affect the mouth and skin — Low intake may contribute to cracked lips, sore throat, and skin changes.",
        "Needs can increase in some conditions — Certain illnesses and long-term alcohol use can increase deficiency risk.",
        "High doses are usually unnecessary — The body excretes excess riboflavin, which can turn urine bright yellow.",
      ],
      category: "VITAMINS",
    },
  });

  const niacin = await prisma.micro.create({
    data: {
      name: "Niacin (B3)",
      unit: "mg",
      goal: 16,
      limit: 35,
      benefits: [
        "Supports energy metabolism — Niacin helps convert food into energy and supports normal cell metabolism.",
        "Supports DNA repair — Niacin is involved in cellular signaling and the maintenance of genetic material.",
        "Supports nervous-system function — It contributes to normal brain and nerve function.",
      ],
      warnings: [
        "High-dose supplements can cause flushing — Nicotinic acid may cause skin flushing, warmth, itching, or headache.",
        "Very high doses can damage the liver — Large supplemental amounts may also affect blood sugar and digestive health.",
        "Do not use therapeutic doses without guidance — Cholesterol-lowering doses should be supervised by a healthcare professional.",
      ],
      category: "VITAMINS",
    },
  });

  const vitaminB6 = await prisma.micro.create({
    data: {
      name: "Vitamin B6",
      unit: "mcg",
      goal: 1300,
      limit: 100000,
      benefits: [
        "Supports brain development — Vitamin B6 is involved in neurotransmitter production and normal brain function.",
        "Helps form hemoglobin — It contributes to the production of hemoglobin, the oxygen-carrying protein in red blood cells.",
        "Supports immune function — Vitamin B6 helps maintain normal immune-system activity.",
      ],
      warnings: [
        "Long-term high doses can damage nerves — Excessive supplemental B6 can cause numbness, tingling, and difficulty walking.",
        "Food sources are generally safe — The risk of toxicity is mainly associated with high-dose supplements.",
        "Some medications can affect B6 levels — Certain medicines may alter vitamin B6 metabolism or increase needs.",
      ],
      category: "VITAMINS",
    },
  });

  const folate = await prisma.micro.create({
    data: {
      name: "Folate",
      unit: "mcg",
      goal: 400,
      limit: 1000,
      benefits: [
        "Supports DNA production — Folate is essential for making and repairing DNA and for normal cell division.",
        "Helps form red blood cells — Adequate folate supports healthy blood-cell production.",
        "Supports fetal development — Folate is especially important before and during pregnancy for neural-tube development.",
      ],
      warnings: [
        "Can mask vitamin B12 deficiency — High supplemental folic acid can correct anemia while allowing nerve damage from B12 deficiency to continue.",
        "Needs increase during pregnancy — People who may become pregnant should discuss the recommended folic acid supplement with a healthcare professional.",
        "Some medications interfere with folate — Certain medicines, including some seizure treatments, can affect folate status.",
      ],
      category: "VITAMINS",
    },
  });

  const vitaminK = await prisma.micro.create({
    data: {
      name: "Vitamin K",
      unit: "mcg",
      goal: 120,
      benefits: [
        "Supports blood clotting — Vitamin K is required to produce proteins that help blood clot normally.",
        "Supports bone health — It helps activate proteins involved in maintaining healthy bones.",
        "Supports blood-vessel health — Vitamin K-dependent proteins help regulate calcium in tissues.",
      ],
      warnings: [
        "Can interfere with warfarin — Sudden changes in vitamin K intake can affect the action of this blood thinner.",
        "Keep intake consistent when prescribed anticoagulants — Do not make major dietary or supplement changes without medical guidance.",
        "Deficiency is uncommon in healthy adults — Most people obtain enough vitamin K from leafy green vegetables and other foods.",
      ],
      category: "VITAMINS",
    },
  });

  const caffeine = await prisma.micro.create({
    data: {
      name: "Caffeine",
      unit: "mg",
      goal: 0,
      limit: 400,
      benefits: [
        "Improves alertness — Caffeine is a central nervous system stimulant that can enhance focus and reduce fatigue.",
        "May enhance physical performance — Caffeine can increase adrenaline levels and improve endurance in some activities.",
        "May support metabolism — Caffeine can temporarily boost metabolic rate and increase fat burning.",
      ],
      warnings: [
        "Can cause insomnia or restlessness — Caffeine can interfere with sleep if consumed too late in the day.",
        "May increase heart rate and blood pressure — Some individuals may be more sensitive to caffeine's cardiovascular effects.",
        "Can lead to dependence — Regular consumption can lead to tolerance and withdrawal symptoms if intake is suddenly reduced.",
        "Watch your total caffeine intake — Health Canada recommends no more than 400 mg of caffeine per day for adults.",
      ],
      category: "OTHER",
    },
  });

  const pantothenicAcid = await prisma.micro.create({
    data: {
      name: "Pantothenic Acid (B5)",
      unit: "mg",
      goal: 5,
      benefits: [
        "Supports energy metabolism — Pantothenic acid is a component of coenzyme A, which is essential for the breakdown of carbohydrates, fats, and proteins.",
        "Supports adrenal function — It plays a role in the production of hormones by the adrenal glands.",
        "Supports skin health — Pantothenic acid may help maintain healthy skin and reduce inflammation.",
      ],
      warnings: [
        "Deficiency is rare — Most people obtain adequate amounts of pantothenic acid from their diet.",
        "High doses may cause digestive issues — Large amounts of pantothenic acid supplements can lead to gastrointestinal discomfort.",
      ],
      category: "VITAMINS",
    },
  });

  const pcOrganicsSmoothPeanutButter = await prisma.food.create({
    data: {
      name: "PC Organics Smooth Peanut Butter",
      category: "NUTS_SEEDS",
      serving: 1,
      unit: "tbsp (15g)",
      calories: 100,
      protein: 4,
      carbs: 3,
      fat: 8,
      fiber: 1,
      benefits: [
        "Good source of plant protein — Provides roughly 3–4 g of protein per tablespoon, useful for supporting muscle maintenance and making meals/snacks more filling.",
        "Provides mostly unsaturated fats — Peanut butter is rich in monounsaturated and polyunsaturated fats, which are generally preferable to saturated fats for cardiovascular health.",
        "Provides fibre and minerals — A tablespoon gives about 1 g of fibre along with potassium, iron, and small amounts of calcium.",
        "Good source of vitamin E — Vitamin E is an antioxidant that helps protect cells from oxidative damage. A tablespoon contains roughly 2.9 mg based on standard unsalted peanut-butter data.",
      ],
      warnings: [
        "Very calorie-dense — About 100 calories per tablespoon, so portions can add up quickly if you're trying to control your calorie intake.",
        "Peanut allergy risk — Obviously, this is a significant concern for anyone with a peanut allergy.",
        "Contains a fair amount of fat — Although much of it is unsaturated, 1 tablespoon has about 8 g of total fat, so large portions can substantially increase calorie and fat intake.",
      ],
      nutrients: {
        create: [
          { microId: potassium.id, amount: 100 },
          { microId: calcium.id, amount: 10 },
          { microId: iron.id, amount: 0.3 },
          { microId: magnesium.id, amount: 49 },
          { microId: phosphorus.id, amount: 115 },
          { microId: zinc.id, amount: 0.9 },
          { microId: copper.id, amount: 150 },
          { microId: manganese.id, amount: 0.47 },
          { microId: selenium.id, amount: 1.8 },
          { microId: vitaminE.id, amount: 2.9 },
          { microId: thiamin.id, amount: 20 },
          { microId: riboflavin.id, amount: 30 },
          { microId: niacin.id, amount: 4.3 },
          { microId: vitaminB6.id, amount: 170 },
          { microId: folate.id, amount: 24 },
          { microId: vitaminK.id, amount: 0.2 },
        ],
      },
    },
  });

  const coffee = await prisma.food.create({
    data: {
      name: "Coffee",
      category: "DRINKS",
      serving: 1,
      unit: "cup (240ml)",
      calories: 2,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      benefits: [
        "Contains antioxidants — Coffee is a source of antioxidants, which help protect cells from oxidative stress.",
        "May improve mental alertness — Caffeine in coffee can enhance focus and concentration.",
        "May support metabolism — Caffeine can temporarily boost metabolic rate and increase fat burning.",
        "May have cardiovascular benefits — Recent research reviewed by the American Heart Association suggests moderate caffeinated coffee consumption may be associated with lower risk of some cardiovascular conditions.",
      ],
      warnings: [
        "Can cause insomnia or restlessness — Caffeine can interfere with sleep if consumed too late in the day.",
        "May increase heart rate and blood pressure — Some individuals may be more sensitive to caffeine's cardiovascular effects.",
        "Can lead to dependence — Regular consumption can lead to tolerance and withdrawal symptoms if intake is suddenly reduced.",
        "Watch your total caffeine intake — Health Canada recommends no more than 400 mg of caffeine per day for adults.",
      ],
      nutrients: {
        create: [
          { microId: potassium.id, amount: 116 },
          { microId: magnesium.id, amount: 7 },
          { microId: sodium.id, amount: 5 },
          { microId: caffeine.id, amount: 95 },
          { microId: riboflavin.id, amount: 200 },
          { microId: niacin.id, amount: 0.5 },
          { microId: manganese.id, amount: 0.1 },
          { microId: pantothenicAcid.id, amount: 0.6 },
        ],
      },
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
