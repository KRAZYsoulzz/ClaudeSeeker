
function displayServiceName(name){
  if(!name) return '';

  return String(name);
}

const services = [{"name": "Accuserve Windows", "price": 100.0}, {"name": "Engineer Assist", "price": 100.0}, {"name": "Ladder Assist", "price": 90.0}, {"name": "Ladder Lean", "price": 55.0}, {"name": "Marketing", "price": 125.0}, {"name": "Move Out Essential", "price": 125.0}, {"name": "Move Out Premium", "price": 175.0}, {"name": "Non-Weather Water", "price": 80.0}, {"name": "Shortstop", "price": 30.0}, {"name": "Solo - Exterior", "price": 80.0}, {"name": "Solo - Exterior & Roof", "price": 125.0}, {"name": "Solo - Interior", "price": 80.0}, {"name": "Solo - Interior & Exterior", "price": 125.0}, {"name": "Solo - Interior & Roof", "price": 125.0}, {"name": "Solo - Interior, Exterior, & Roof", "price": 150.0}, {"name": "Solo - Roof", "price": 115.0}, {"name": "Solo Post Construction - Exterior", "price": 25.0}, {"name": "Solo Post Construction - Exterior & Roof", "price": 75.0}, {"name": "Solo Post Construction - Roof", "price": 50.0}, {"name": "Solo Pre-Loss - Exterior", "price": 130.0}, {"name": "Solo Pre-Loss - Exterior & Roof", "price": 130.0}, {"name": "Solo Pre-Loss - Roof", "price": 130.0}, {"name": "Solo Virtual Assist - Exterior", "price": 80.0}, {"name": "Solo Virtual Assist - Exterior & Roof", "price": 125.0}, {"name": "Solo Virtual Assist - Roof", "price": 115.0}, {"name": "Surge vs Wind Evaluation", "price": 150.0}, {"name": "Trip Charge", "price": 50.0}];
let addons = [{"name": "40' Ladder", "price": 15.0}, {"name": "Accuserve Windows Add'l Time", "price": 25.0}, {"name": "Additional Building/Structure", "price": 50.0}, {"name": "Detach & Install New Tarp", "price": 100.0}, {"name": "Detach & Reset Original Tarp", "price": 50.0}, {"name": "Engineer Assist Add'l Time", "price": 25.0}, {"name": "Fence Inspection", "price": 15.0}, {"name": "Interior Add'l Room (>3 Rooms)", "price": 15.0}, {"name": "Interior Add-On (1-3 Rooms)", "price": 25.0}, {"name": "ITEL Sample", "price": 95.0}, {"name": "Steep Assist", "price": 25.0}, {"name": "Tarp New Install", "price": 100.0}, {"name": "Tarp Referral", "price": 35.0}, {"name": "Trip/Cancelation Fee", "price": 50.0}];
const carriers = [
  {
    "id": "aaa",
    "name": "AAA"
  },
  {
    "id": "aaa-new-mexico",
    "name": "AAA - New Mexico"
  },
  {
    "id": "aaa-calif",
    "name": "AAA Calif"
  },
  {
    "id": "aaa-carolina",
    "name": "AAA Carolina"
  },
  {
    "id": "aaa-chicago",
    "name": "AAA Chicago"
  },
  {
    "id": "aaa-texas",
    "name": "AAA Texas"
  },
  {
    "id": "aaa-florida",
    "name": "AAA-Florida"
  },
  {
    "id": "aaa-michigan",
    "name": "AAA-Michigan"
  },
  {
    "id": "aaa-missouri",
    "name": "AAA-Missouri"
  },
  {
    "id": "aaa-pa",
    "name": "AAA-PA"
  },
  {
    "id": "acuity",
    "name": "Acuity"
  },
  {
    "id": "aig",
    "name": "AIG"
  },
  {
    "id": "alacrity",
    "name": "Alacrity"
  },
  {
    "id": "alfa-insurance",
    "name": "Alfa Insurance"
  },
  {
    "id": "allcat-claims",
    "name": "Allcat Claims"
  },
  {
    "id": "allstate-allstate-ghrn",
    "name": "Allstate/ AllState GHRN"
  },
  {
    "id": "american-integrity",
    "name": "American Integrity"
  },
  {
    "id": "american-modern-insurance",
    "name": "American Modern Insurance"
  },
  {
    "id": "american-national",
    "name": "American National"
  },
  {
    "id": "american-strategic",
    "name": "American Strategic"
  },
  {
    "id": "american-structurepoint",
    "name": "American Structurepoint"
  },
  {
    "id": "americas-insurance-company",
    "name": "Americas Insurance Company"
  },
  {
    "id": "ameriprise-auto-home",
    "name": "Ameriprise Auto & Home"
  },
  {
    "id": "amfam",
    "name": "AMFAM"
  },
  {
    "id": "amica",
    "name": "Amica"
  },
  {
    "id": "anpac",
    "name": "ANPAC"
  },
  {
    "id": "applied-engineering-and-technology",
    "name": "Applied Engineering and Technology"
  },
  {
    "id": "asi",
    "name": "ASI"
  },
  {
    "id": "asi-progressive",
    "name": "ASI - Progressive"
  },
  {
    "id": "assurant-insurance",
    "name": "Assurant Insurance"
  },
  {
    "id": "auto-owners",
    "name": "Auto Owners"
  },
  {
    "id": "barton-mutual-insurance-company",
    "name": "Barton Mutual Insurance Company"
  },
  {
    "id": "bcc-insurance",
    "name": "BCC Insurance"
  },
  {
    "id": "brotherhood-mutual",
    "name": "Brotherhood Mutual"
  },
  {
    "id": "capstone-isg",
    "name": "Capstone ISG"
  },
  {
    "id": "carolina-restoration",
    "name": "Carolina Restoration"
  },
  {
    "id": "catalytic-claims-services",
    "name": "Catalytic Claims Services"
  },
  {
    "id": "ced-technologies-inc",
    "name": "CED Technologies INC"
  },
  {
    "id": "celina-insurance",
    "name": "Celina Insurance"
  },
  {
    "id": "central-insurance",
    "name": "Central Insurance"
  },
  {
    "id": "choice-solution-services-inc",
    "name": "Choice Solution Services, INC."
  },
  {
    "id": "chubb",
    "name": "Chubb"
  },
  {
    "id": "citizens",
    "name": "Citizens"
  },
  {
    "id": "cna",
    "name": "CNA"
  },
  {
    "id": "colorado-farm-bureau",
    "name": "Colorado Farm Bureau"
  },
  {
    "id": "columbia-insurance-group",
    "name": "Columbia Insurance Group"
  },
  {
    "id": "connect-by-amfam",
    "name": "Connect by AmFam"
  },
  {
    "id": "copper-claims-services",
    "name": "Copper Claims Services"
  },
  {
    "id": "country-financial",
    "name": "Country Financial"
  },
  {
    "id": "countryway-insurance",
    "name": "Countryway Insurance"
  },
  {
    "id": "crawford",
    "name": "Crawford"
  },
  {
    "id": "csaa-insurance-group",
    "name": "CSAA Insurance Group"
  },
  {
    "id": "cunningham-lindsey",
    "name": "Cunningham & Lindsey"
  },
  {
    "id": "donan",
    "name": "Donan"
  },
  {
    "id": "donegal-insurance-group",
    "name": "Donegal Insurance Group"
  },
  {
    "id": "eberls",
    "name": "Eberls"
  },
  {
    "id": "ebi-consulting",
    "name": "EBI Consulting"
  },
  {
    "id": "efi-global",
    "name": "EFI Global"
  },
  {
    "id": "element-analytical-pllc",
    "name": "Element Analytical PLLC"
  },
  {
    "id": "emc-insurance-company",
    "name": "EMC Insurance Company"
  },
  {
    "id": "encompass-insurance",
    "name": "Encompass Insurance"
  },
  {
    "id": "encova",
    "name": "Encova"
  },
  {
    "id": "engineering-design-testing-corp",
    "name": "Engineering Design & testing Corp."
  },
  {
    "id": "envista-forensics",
    "name": "Envista Forensics"
  },
  {
    "id": "erie",
    "name": "Erie"
  },
  {
    "id": "farm-bureau-financial-services",
    "name": "Farm Bureau Financial Services"
  },
  {
    "id": "farmers",
    "name": "Farmers"
  },
  {
    "id": "farmer-s-mutual-of-nebraska",
    "name": "Farmer's Mutual of Nebraska"
  },
  {
    "id": "fcci-insurance-group",
    "name": "FCCI Insurance Group"
  },
  {
    "id": "federated-mutual-insurance",
    "name": "Federated Mutual Insurance"
  },
  {
    "id": "fednat",
    "name": "FedNat"
  },
  {
    "id": "field-claims-company",
    "name": "Field Claims Company"
  },
  {
    "id": "first-american-property-casualty-insurance-company",
    "name": "First American Property & Casualty Insurance Company"
  },
  {
    "id": "florida-peninsula-ins",
    "name": "Florida Peninsula Ins."
  },
  {
    "id": "forcon",
    "name": "FORCON"
  },
  {
    "id": "forensic-consulting-group-llc",
    "name": "Forensic Consulting Group, LLC"
  },
  {
    "id": "frankenmuth-insurance",
    "name": "Frankenmuth Insurance"
  },
  {
    "id": "fremont-ins",
    "name": "Fremont Ins"
  },
  {
    "id": "georgia-farm-bureau",
    "name": "Georgia Farm Bureau"
  },
  {
    "id": "geovera-insurance",
    "name": "GeoVera Insurance"
  },
  {
    "id": "germania-insurance",
    "name": "Germania Insurance"
  },
  {
    "id": "germantown-mutual-insurance",
    "name": "Germantown Mutual Insurance"
  },
  {
    "id": "goodville-mutual-casualty-co",
    "name": "Goodville Mutual Casualty Co."
  },
  {
    "id": "grange-insurance",
    "name": "Grange Insurance"
  },
  {
    "id": "great-american-insurance-group",
    "name": "Great American Insurance Group"
  },
  {
    "id": "guard-insurance",
    "name": "Guard Insurance"
  },
  {
    "id": "guardian-group",
    "name": "Guardian Group"
  },
  {
    "id": "guideone-insurance",
    "name": "GuideOne Insurance"
  },
  {
    "id": "haag-global-engineering",
    "name": "Haag Global Engineering"
  },
  {
    "id": "hall-engineering-group",
    "name": "Hall Engineering Group"
  },
  {
    "id": "hanover-insurance",
    "name": "Hanover Insurance"
  },
  {
    "id": "hastings-mutual",
    "name": "Hastings Mutual"
  },
  {
    "id": "heritage-insurance",
    "name": "Heritage Insurance"
  },
  {
    "id": "hmi-horticultural-asset-management",
    "name": "HMI:  Horticultural Asset Management"
  },
  {
    "id": "homeowners-of-america-insurance-co",
    "name": "Homeowners of America Insurance Co."
  },
  {
    "id": "homesite-insurance",
    "name": "Homesite Insurance"
  },
  {
    "id": "horace-mann-companies",
    "name": "Horace Mann Companies"
  },
  {
    "id": "hvaci",
    "name": "HVACi"
  },
  {
    "id": "ica-claims",
    "name": "ICA Claims"
  },
  {
    "id": "icc-group",
    "name": "ICC Group"
  },
  {
    "id": "imt-insurance",
    "name": "IMT Insurance"
  },
  {
    "id": "indiana-farmers",
    "name": "Indiana Farmers"
  },
  {
    "id": "johns-eastern-company",
    "name": "Johns Eastern Company"
  },
  {
    "id": "kemper",
    "name": "Kemper"
  },
  {
    "id": "kentucky-farm-bureau",
    "name": "Kentucky Farm Bureau"
  },
  {
    "id": "liberty-mutual-safeco",
    "name": "Liberty Mutual/Safeco"
  },
  {
    "id": "loudoun-mutual-insurance-company",
    "name": "Loudoun Mutual Insurance Company"
  },
  {
    "id": "louisiana-citizens",
    "name": "Louisiana Citizens"
  },
  {
    "id": "madison-mutual-insurance",
    "name": "Madison Mutual Insurance"
  },
  {
    "id": "main-street-america-group",
    "name": "Main Street America Group"
  },
  {
    "id": "maison-insurance",
    "name": "Maison Insurance"
  },
  {
    "id": "mapfre-insurance",
    "name": "MAPFRE Insurance"
  },
  {
    "id": "mercury-insurance",
    "name": "MERCURY INSURANCE"
  },
  {
    "id": "michigan-millers-insurance",
    "name": "MICHIGAN MILLERS INSURANCE"
  },
  {
    "id": "mrpprogram",
    "name": "MRPProgram"
  },
  {
    "id": "narragansett-bay-insurance-company",
    "name": "Narragansett Bay Insurance Company"
  },
  {
    "id": "national-general",
    "name": "National General"
  },
  {
    "id": "national-lloyds-insurance-co",
    "name": "National Lloyds Insurance Co"
  },
  {
    "id": "nationwide",
    "name": "Nationwide"
  },
  {
    "id": "nationwide-commercial",
    "name": "Nationwide Commercial"
  },
  {
    "id": "nixon-and-company",
    "name": "Nixon And Company"
  },
  {
    "id": "north-carolina-farm-bureau",
    "name": "North Carolina Farm Bureau"
  },
  {
    "id": "north-star-mutual-insurance-company",
    "name": "North Star Mutual Insurance Company"
  },
  {
    "id": "oklahoma-farm-bureau",
    "name": "Oklahoma Farm Bureau"
  },
  {
    "id": "olympus-insurance-group",
    "name": "Olympus Insurance Group"
  },
  {
    "id": "people-s-trust",
    "name": "People's Trust"
  },
  {
    "id": "pie-consulting-and-engineering",
    "name": "PIE CONSULTING AND ENGINEERING"
  },
  {
    "id": "pioneer-state-mutual",
    "name": "Pioneer State Mutual"
  },
  {
    "id": "polaris-forensics-inc",
    "name": "Polaris Forensics Inc."
  },
  {
    "id": "pond-robinson-associates",
    "name": "Pond, Robinson & Associates"
  },
  {
    "id": "preferred-repair-network",
    "name": "Preferred Repair Network"
  },
  {
    "id": "pronet-group",
    "name": "Pronet Group"
  },
  {
    "id": "pure-insurance",
    "name": "Pure Insurance"
  },
  {
    "id": "remarc-engineering",
    "name": "REMARC Engineering"
  },
  {
    "id": "restoration-specialists",
    "name": "Restoration Specialists"
  },
  {
    "id": "rimkus",
    "name": "Rimkus"
  },
  {
    "id": "rudick-forensic-engineering",
    "name": "Rudick Forensic Engineering"
  },
  {
    "id": "rvos",
    "name": "RVOS"
  },
  {
    "id": "ryze-claims",
    "name": "Ryze Claims"
  },
  {
    "id": "safepoint-insurance",
    "name": "SafePoint Insurance"
  },
  {
    "id": "sdii-global",
    "name": "sdii GLOBAL"
  },
  {
    "id": "sealimited",
    "name": "SEALIMITED"
  },
  {
    "id": "secura",
    "name": "Secura"
  },
  {
    "id": "sedgwick",
    "name": "Sedgwick"
  },
  {
    "id": "selective-insurance",
    "name": "Selective Insurance"
  },
  {
    "id": "service-master",
    "name": "Service Master"
  },
  {
    "id": "shelter",
    "name": "Shelter"
  },
  {
    "id": "south-carolina-farm-bureau",
    "name": "South Carolina Farm Bureau"
  },
  {
    "id": "southern-trust-insurance",
    "name": "Southern Trust Insurance"
  },
  {
    "id": "spangler-restoration",
    "name": "SPANGLER RESTORATION"
  },
  {
    "id": "state-auto",
    "name": "State Auto"
  },
  {
    "id": "state-farm",
    "name": "State Farm"
  },
  {
    "id": "stephens-engineering-company",
    "name": "Stephens Engineering Company"
  },
  {
    "id": "stillwater",
    "name": "Stillwater"
  },
  {
    "id": "syndicate-claims-services",
    "name": "Syndicate Claims Services"
  },
  {
    "id": "texas-farm-bureau",
    "name": "Texas Farm Bureau"
  },
  {
    "id": "the-cincinnati-insurance",
    "name": "The Cincinnati Insurance"
  },
  {
    "id": "thehartford",
    "name": "TheHartford"
  },
  {
    "id": "tower-hill",
    "name": "Tower Hill"
  },
  {
    "id": "travelers",
    "name": "Travelers"
  },
  {
    "id": "trident-engineering",
    "name": "Trident Engineering"
  },
  {
    "id": "truclaim-swyfft",
    "name": "Truclaim-Swyfft"
  },
  {
    "id": "united-fire-group",
    "name": "United Fire Group"
  },
  {
    "id": "universal-p-c",
    "name": "Universal P & C"
  },
  {
    "id": "us-forensic",
    "name": "US Forensic"
  },
  {
    "id": "usaa",
    "name": "USAA"
  },
  {
    "id": "uuu",
    "name": "UUU"
  },
  {
    "id": "vault",
    "name": "Vault"
  },
  {
    "id": "velocity-claims",
    "name": "Velocity Claims"
  },
  {
    "id": "vertex",
    "name": "Vertex"
  },
  {
    "id": "virginia-farm-bureau",
    "name": "Virginia Farm Bureau"
  },
  {
    "id": "wallrab-capenigro-inc",
    "name": "WALLRAB CAPENIGRO INC"
  },
  {
    "id": "wayne-mutual-insurance-association",
    "name": "Wayne Mutual Insurance Association"
  },
  {
    "id": "wellington-insurance-group",
    "name": "Wellington Insurance Group"
  },
  {
    "id": "west-bend",
    "name": "West Bend"
  },
  {
    "id": "westfield-insurance",
    "name": "Westfield Insurance"
  },
  {
    "id": "worley-company",
    "name": "Worley Company"
  }
];
const carrierBillables = {
  "aaa": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-new-mexico": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-calif": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-carolina": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-chicago": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-texas": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-florida": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-michigan": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-missouri": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aaa-pa": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "acuity": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "aig": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "alacrity": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "alfa-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "allcat-claims": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "allstate-allstate-ghrn": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": false,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": false,
    "Add On - Interior Room (> 3 Rooms)": false,
    "Add On - Steep Assist - Steep Safety Device": false,
    "Add On - Trip / Cancelation Fee": true
  },
  "american-integrity": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "american-modern-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": false,
    "Add On - Interior Room (> 3 Rooms)": false,
    "Add On - Steep Assist - Steep Safety Device": false,
    "Add On - Trip / Cancelation Fee": true
  },
  "american-national": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "american-strategic": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "american-structurepoint": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "americas-insurance-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "ameriprise-auto-home": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "amfam": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": false,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": false,
    "Add On - Interior Room (> 3 Rooms)": false,
    "Add On - Steep Assist - Steep Safety Device": false,
    "Add On - Trip / Cancelation Fee": true
  },
  "amica": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "anpac": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "applied-engineering-and-technology": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "asi": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "asi-progressive": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "assurant-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "auto-owners": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "barton-mutual-insurance-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "bcc-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "brotherhood-mutual": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "capstone-isg": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "carolina-restoration": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "catalytic-claims-services": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "ced-technologies-inc": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "celina-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "central-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "choice-solution-services-inc": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "chubb": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": false,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "citizens": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "cna": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": false,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "colorado-farm-bureau": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "columbia-insurance-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "connect-by-amfam": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": false,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": false,
    "Add On - Interior Room (> 3 Rooms)": false,
    "Add On - Steep Assist - Steep Safety Device": false,
    "Add On - Trip / Cancelation Fee": true
  },
  "copper-claims-services": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "country-financial": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "countryway-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "crawford": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "csaa-insurance-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "cunningham-lindsey": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "donan": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "donegal-insurance-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "eberls": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "ebi-consulting": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "efi-global": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "element-analytical-pllc": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "emc-insurance-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "encompass-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "encova": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "engineering-design-testing-corp": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "envista-forensics": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "erie": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "farm-bureau-financial-services": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "farmers": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "farmer-s-mutual-of-nebraska": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "fcci-insurance-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "federated-mutual-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "fednat": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "field-claims-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "first-american-property-casualty-insurance-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "florida-peninsula-ins": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "forcon": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "forensic-consulting-group-llc": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "frankenmuth-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "fremont-ins": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "georgia-farm-bureau": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "geovera-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "germania-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": false,
    "Add On - Trip / Cancelation Fee": false
  },
  "germantown-mutual-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "goodville-mutual-casualty-co": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "grange-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "great-american-insurance-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "guard-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "guardian-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "guideone-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "haag-global-engineering": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "hall-engineering-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "hanover-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "hastings-mutual": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "heritage-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "hmi-horticultural-asset-management": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "homeowners-of-america-insurance-co": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "homesite-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": false,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": false,
    "Add On - Interior Room (> 3 Rooms)": false,
    "Add On - Steep Assist - Steep Safety Device": false,
    "Add On - Trip / Cancelation Fee": true
  },
  "horace-mann-companies": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "hvaci": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "ica-claims": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "icc-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "imt-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "indiana-farmers": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "johns-eastern-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "kemper": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "kentucky-farm-bureau": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "liberty-mutual-safeco": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": false,
    "Add On - Trip / Cancelation Fee": true
  },
  "loudoun-mutual-insurance-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "louisiana-citizens": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "madison-mutual-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "main-street-america-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": false,
    "Add On - Interior Room (> 3 Rooms)": false,
    "Add On - Steep Assist - Steep Safety Device": false,
    "Add On - Trip / Cancelation Fee": true
  },
  "maison-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "mapfre-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "mercury-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "michigan-millers-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "mrpprogram": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "narragansett-bay-insurance-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "national-general": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "national-lloyds-insurance-co": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "nationwide": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "nationwide-commercial": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "nixon-and-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "north-carolina-farm-bureau": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "north-star-mutual-insurance-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "oklahoma-farm-bureau": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "olympus-insurance-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "people-s-trust": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "pie-consulting-and-engineering": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "pioneer-state-mutual": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "polaris-forensics-inc": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "pond-robinson-associates": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "preferred-repair-network": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "pronet-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "pure-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "remarc-engineering": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "restoration-specialists": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "rimkus": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "rudick-forensic-engineering": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "rvos": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "ryze-claims": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "safepoint-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "sdii-global": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "sealimited": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "secura": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "sedgwick": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "selective-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "service-master": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "shelter": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "south-carolina-farm-bureau": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "southern-trust-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "spangler-restoration": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "state-auto": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "state-farm": {
    "Ladder Assist": false,
    "Ladder Lean": false,
    "Shortstop": false,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": false,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": false,
    "Add On - Interior Room (> 3 Rooms)": false,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": false
  },
  "stephens-engineering-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "stillwater": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "syndicate-claims-services": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "texas-farm-bureau": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "the-cincinnati-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "thehartford": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "tower-hill": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "travelers": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": false,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": false,
    "Add On - Interior Room (1 - 3 Rooms)": false,
    "Add On - Interior Room (> 3 Rooms)": false,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "trident-engineering": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "truclaim-swyfft": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "united-fire-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "universal-p-c": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "us-forensic": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "usaa": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "uuu": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "vault": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "velocity-claims": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "vertex": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "virginia-farm-bureau": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "wallrab-capenigro-inc": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "wayne-mutual-insurance-association": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "wellington-insurance-group": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "west-bend": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "westfield-insurance": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": false,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  },
  "worley-company": {
    "Ladder Assist": true,
    "Ladder Lean": false,
    "Shortstop": true,
    "Solo Inspection - Roof Only": true,
    "Solo Inspection - Exterior Only": true,
    "Solo Inspection - Interior Only": true,
    "Solo Inspection - Roof + Exterior": true,
    "Solo Inspection - Roof + Exterior + Interior": true,
    "Pre-Loss Inspection": true,
    "Post Construction - Quality Inspection": true,
    "Add On - Additional Building": true,
    "Add On - ITEL Sample - Physical Sample Taken": true,
    "Add On - Fence": true,
    "Add On - Interior Room (1 - 3 Rooms)": true,
    "Add On - Interior Room (> 3 Rooms)": true,
    "Add On - Steep Assist - Steep Safety Device": true,
    "Add On - Trip / Cancelation Fee": true
  }
};
const TARP_LIST_A = [[0, 150, 200], [151, 250, 350], [251, 400, 475], [401, 600, 600], [601, 800, 750], [801, 1000, 900], [1001, 1500, 1200], [1501, 2000, 1500], [2001, 2500, 1800], [2501, 3000, 2100], [3001, 3500, 2400], [3501, 4000, 2700], [4001, 4500, 3000], [4501, 5000, 3300]];
const TARP_LIST_B = [[0, 100, 200], [101, 300, 400], [301, 600, 650], [601, 900, 900], [901, 1200, 1100], [1201, 1500, 1250], [1501, 2000, 1650], [2001, 2500, 2050], [2501, 3000, 2450], [3001, 3500, 2850], [3501, 4000, 3250], [4001, 4500, 3650], [4501, 5000, 4050]];

addons = (addons || []).filter(a => a.name.toLowerCase() !== "engineer assist add'l time");

addons = (addons || []).filter(a => {
  const nm = a.name.toLowerCase();
  return nm !== "engineer assist add'l time".toLowerCase() && nm != "accuserve windows add'l time".toLowerCase();
});

const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
const KEY='et_ticket_v14', HISTORY_KEY='et_history_v14';
function getOdo(){ try{ const s=JSON.parse(localStorage.getItem(KEY)||'{}'); return {start: Number(s.odoStart||0), end: Number(s.odoEnd||0)} }catch(e){ return {start:0,end:0} } }
function setOdo(start,end){ try{ const s=JSON.parse(localStorage.getItem(KEY)||'{}'); s.odoStart=Number(start)||0; s.odoEnd=Number(end)||0; localStorage.setItem(KEY, JSON.stringify(s)); }catch(e){} }

function getExpenses(){
  try{
    const s = JSON.parse(localStorage.getItem(KEY) || '{}');
    return Array.isArray(s.expenses) ? s.expenses : [];
  }catch(e){ return []; }
}
function setExpenses(arr){
  try{
    const s = JSON.parse(localStorage.getItem(KEY) || '{}');
    s.expenses = Array.isArray(arr) ? arr : [];
    localStorage.setItem(KEY, JSON.stringify(s));
  }catch(e){}
}

const FAVORITES_KEY='et_favorites_v14', CUSTOM_SVCS_KEY='et_custom_svcs_v14';
function getFavorites(){ try{ return new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY)||'[]')); }catch(e){ return new Set(); } }
function saveFavorites(set){ try{ localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(set))); }catch(e){} }
function getCustomServices(){ try{ return JSON.parse(localStorage.getItem(CUSTOM_SVCS_KEY)||'[]'); }catch(e){ return []; } }
function saveCustomServices(list){ try{ localStorage.setItem(CUSTOM_SVCS_KEY, JSON.stringify(list)); }catch(e){} }
let favs = getFavorites();

const CARRIER_FAV_KEY='et_carrier_favs_v14';
function getCarrierFavs(){ try{ return new Set(JSON.parse(localStorage.getItem(CARRIER_FAV_KEY)||'[]')); }catch(e){ return new Set(); } }
function saveCarrierFavs(set){ try{ localStorage.setItem(CARRIER_FAV_KEY, JSON.stringify(Array.from(set))); }catch(e){} }
let customServices = getCustomServices();

const state = { date: new Date().toISOString().slice(0,10), items: [] };

function currency(v){ return `$${(v||0).toFixed(2)}`; }
function isTarpLine(name){ return (name||'').toLowerCase().startsWith('tarp —'); }
function persist(){ try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){} }

async function getHistory(){ const r=localStorage.getItem(HISTORY_KEY); return r? JSON.parse(r):[]; }
async function setHistory(h){ localStorage.setItem(HISTORY_KEY, JSON.stringify(h)); }
async function syncTodayToHistory(){
  const todayISO = state.date || new Date().toISOString().slice(0,10);
  const history = await getHistory();
  const items = JSON.parse(JSON.stringify(state.items||[]));
  const servicesCount = items.length;
  const addonsCount = items.reduce((a,i)=>a+(i.addons?.length||0),0);
  const grandTotal = items.reduce((sum, it)=>{ const addonSum=(it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0); return sum + it.price*(it.qty||1) + addonSum; },0);
  let entry = history.find(h=>h.date===todayISO);
  if(!entry){ entry={ id:crypto.randomUUID(), date:todayISO, jobs:servicesCount?1:0, miles:0, servicesCount, addonsCount, grandTotal, items }; history.unshift(entry); }
  else{ entry.items=items; entry.servicesCount=servicesCount; entry.addonsCount=addonsCount; entry.jobs=servicesCount?1:0; entry.grandTotal=grandTotal; }

  try{ entry.expenses = (typeof getExpenses==='function') ? (getExpenses()||[]) : []; }catch(e){ entry.expenses = []; }
  await
  try{
    if(entry){
      const _o = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};
      entry.odoStart = Number(_o.start||0);
      entry.odoEnd = Number(_o.end||0);
    }
  }catch(e){}
  setHistory(history);
  try{ await renderHistory(); }catch(_){ }
}

function addServiceLine(name, price){
  state.items.push({ id: crypto.randomUUID(), name, price, qty: 1, addons: [] });
  renderTicket(); persist(); syncTodayToHistory();
  if (isTimeBilled(name)) { openEngineerModal(state.items.length - 1); }
}
function addTarpLine(carrier, sqft, invoice, pay){
  const name = `Tarp — ${carrier} — ${sqft} sqft`;
  addServiceLine(name, pay);
}
function totals(){

  let servicesSubtotal=0, addonsTotal=0;
  state.items.forEach(it=>{
    servicesSubtotal += it.price*(it.qty||1);
    addonsTotal += (it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0);
  });
  const expenses = getExpenses();
  const expensesTotal = (expenses||[]).reduce((s,e)=> s + (Number(e.amount)||0), 0);
  const grand = servicesSubtotal + addonsTotal;
  const jobs = state.items.reduce((sum, it)=> sum + (Number(it.qty)||1), 0);
  const avg = jobs ? (grand / jobs) : 0;

  const odo = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};
  const odoMiles = Math.max(0, (Number(odo.end)||0) - (Number(odo.start)||0));
  return {servicesSubtotal, addonsTotal, expensesTotal, grand, jobs, avg};
}

function openServicePicker(){
  try{ renderPickerCatalog(); }catch(e){ console.error(e); }
  $("#servicePickerModal").classList.remove("hidden");
  const search = $("#pickerSearch"); if(search){ search.value=''; search.focus(); }
}
function closeServicePicker(){ $("#servicePickerModal").classList.add("hidden"); }

function renderPickerCatalog(){
  const listEl = $("#pickerList"); if(!listEl) return;
  const favs = getFavorites ? getFavorites() : new Set();
  const searchVal = ($("#pickerSearch")?.value||'').toLowerCase().trim();
  const merged = (typeof getCustomServices==='function' ? (getCustomServices()||[]) : []).concat(services||[]);
  let display = merged;
  if(searchVal){ display = merged.filter(s=> (s.name||'').toLowerCase().includes(searchVal)); }
  display.sort((a,b)=>{
    const af = favs.has(a.name), bf = favs.has(b.name);
    if (af !== bf) return af ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  listEl.innerHTML='';
  display.forEach(s=>{
    const div=document.createElement('div');
    div.className='cardItem';
    const starActive = favs.has(s.name) ? 'active' : '';
    div.innerHTML = `
      <div class="svcRow top"><span class="name">${s.name}</span></div>
      <div class="svcRow bottom">
        <span class="price">${currency(s.price)}</span>
        <div class="svcActions">
          <span class="star ${starActive}" title="Favorite">★</span>
          <button class="btnAddSvc" aria-label="Add service">➕</button>
        </div>
      </div>`;

    div.querySelector('.btnAddSvc').onclick = ()=>{ addServiceLine(s.name, s.price); closeServicePicker(); };
    const star = div.querySelector('.star');
    star.onclick = ()=>{
      const f = getFavorites();
      if(f.has(s.name)) f.delete(s.name); else f.add(s.name);
      saveFavorites(f); renderPickerCatalog();
    };
    listEl.appendChild(div);
  });
}

function openServiceModal(){
  const modal = $("#serviceModal"); if(!modal) return;
  const listEl = $("#svcList");
  const search = $("#svcSearch");
  listEl.innerHTML='';
  function getFavs(){ try{ return new Set(JSON.parse(localStorage.getItem('et_favorites_v14')||'[]')); }catch(e){ return new Set(); } }
  function saveFavs(set){ try{ localStorage.setItem('et_favorites_v14', JSON.stringify(Array.from(set))); }catch(e){} }
  const favs = getFavs();
  function build(filter=''){
    listEl.innerHTML='';
    const merged = (window.customServices||[]).concat(services);
    let display = merged.filter(s=> !filter || (s.name||'').toLowerCase().includes(filter.toLowerCase()));
    display.sort((a,b)=>{
      const af=favs.has(a.name), bf=favs.has(b.name);
      if(af!==bf) return af? -1: 1;
      return a.name.localeCompare(b.name);
    });
    display.forEach(s=>{
      const div=document.createElement('div');
      div.className='svcItem';
      const active = favs.has(s.name)? 'active':'';
      div.innerHTML = `
        <div class="svcRow top"><span class="name">${s.name}</span></div>
        <div class="svcRow bottom"><span class="price">${currency(s.price)}</span>
          <div class="svcActions">
            <span class="star ${active}" title="Favorite">★</span>
            <button class="btnPick">➕</button>
          </div>
        </div>`;

      const star = div.querySelector('.star');
      const pick = div.querySelector('.btnPick');
      star.onclick = ()=>{
        if(favs.has(s.name)) favs.delete(s.name); else favs.add(s.name);
        saveFavs(favs); build(search.value||'');
      };
      pick.onclick = ()=>{ addServiceLine(s.name, s.price); closeServiceModal(); };
      listEl.appendChild(div);
    });
  }
  if(search){ search.value=''; search.oninput = ()=> build(search.value||''); }
  build('');
  modal.classList.remove('hidden');
}
function closeServiceModal(){ const modal = $("#serviceModal"); if(modal) modal.classList.add('hidden'); }
function renderCatalog(list=services){

  const merged = [...(customServices||[]), ...services];

  const searchVal = ($("#searchInput")?.value||'').toLowerCase().trim();
  let display = merged;
  if (searchVal){
    display = merged.filter(s=> s.name.toLowerCase().includes(searchVal));
  }

  display.sort((a,b)=>{
    const af = favs.has(a.name), bf = favs.has(b.name);
    if (af !== bf) return af ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  const cont=$("#serviceList"); cont.innerHTML='';
  display.forEach(s=>{ const div=document.createElement('div'); div.className='cardItem'; div.innerHTML=`<div class="meta"><span class="name">${s.name}</span><span class="price">${currency(s.price)}</span></div><div><span class="star ${favs.has(s.name)?'active':''}">⭐</span> <button>Add</button></div>`;
    div.querySelector('button').onclick=()=>addServiceLine(s.name,s.price);
    const star = div.querySelector('.star');
    star.onclick = ()=>{ if (favs.has(s.name)) favs.delete(s.name); else favs.add(s.name); saveFavorites(favs); renderCatalog(); };
    cont.appendChild(div); });
}
function renderTicket(){
  const tbody=$("#ticketTable tbody"); tbody.innerHTML='';
  const mwrap=$("#ticketMobile"); if(mwrap) mwrap.innerHTML='';
  state.items.forEach((it, idx)=>{
    const addonSum=(it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0);
    const line = it.price*(it.qty||1) + addonSum;
    const tr=document.createElement('tr');
    const addonsChips = (it.addons && it.addons.length)
  ? `<div class='chips'>${it.addons.map(a=>`<span class='chip'><span class='dot'></span><span>${a.name}</span><span>${currency(a.price)}</span></span>`).join('')}</div>`
  : "";
    tr.innerHTML=`
      <td>${it.name}</td>
      <td class='colQty'><div class='qtyWrap'><button class='qtyMinus' aria-label='Decrease'>–</button><span class='qtyVal'>${it.qty||1}</span><button class='qtyPlus' aria-label='Increase'>+</button></div></td>
      <td>${currency(it.price)}</td>
      <td>${addonsChips}</td>
      <td>${currency(line)}</td>
      <td class="rowActions">
        ${isTarpLine(it.name) ? '' : '<button data-act="addons">Add-ons</button>'} ${ ( (it.name||'').toLowerCase()==='engineer assist' ) ? '<button data-act=\"time\">🕒 Time</button>' : '' }
        <button data-act="del">🗑</button>
      </td>`;

    const mcard=document.createElement('div');
    mcard.className='mcard';
    mcard.setAttribute('data-idx', String(idx));
    mcard.innerHTML = `
      <div class="mrow top">
        <div class="mname">${displayServiceName(it.name)}</div>
        <div class="mtotal">${currency(line)}</div>
      </div>
      <div class="mrow mid">
        <div class="mqty"><div class='qtyWrap'><button class='qtyMinus' aria-label='Decrease'>–</button><span class='qtyVal'>${it.qty||1}</span><button class='qtyPlus' aria-label='Increase'>+</button></div></div>
        <div class="munit">${currency(it.price)} ea</div>
      </div>
      <div class="mrow addons">${addonsChips}</div>
      <div class="mrow actions">
        ${isTarpLine(it.name) ? '' : '<button class="btnIcon" data-act="addons" title="Add-ons">➕</button>'}
        ${isTimeBilled(it.name) ? '<button class="btnIcon" data-act="time" title="Edit time">🕒</button>' : ''}
        <button class="btnIcon" data-act="del" title="Remove">🗑</button>
      </div>`;
    if(mwrap) mwrap.appendChild(mcard);
    const minus = tr.querySelector('.qtyMinus');
const plus = tr.querySelector('.qtyPlus');
if(minus) minus.onclick = ()=>{ it.qty=Math.max(1,(Number(it.qty)||1)-1); renderTicket(); persist(); syncTodayToHistory(); };
if(plus) plus.onclick = ()=>{ it.qty=(Number(it.qty)||1)+1; renderTicket(); persist(); syncTodayToHistory(); };
tr.querySelector('[data-act=del]').onclick=()=>{ state.items.splice(idx,1); renderTicket(); persist(); syncTodayToHistory(); };
    const btn=tr.querySelector('[data-act=addons]'); if(btn){ btn.onclick=()=>openAddonsModal(idx); }
    const tbtn=tr.querySelector('[data-act=time]'); if(tbtn){ tbtn.onclick=()=>openEngineerModal(idx); }
    tbody.appendChild(tr);

    if(mwrap){
      const mc = mwrap.lastElementChild;
      if(mc){
        const mMinus = mc.querySelector('.qtyMinus');
        const mPlus = mc.querySelector('.qtyPlus');
        if(mMinus) mMinus.onclick = ()=>{ it.qty=Math.max(1,(Number(it.qty)||1)-1); renderTicket(); persist(); syncTodayToHistory(); };
        if(mPlus) mPlus.onclick = ()=>{ it.qty=(Number(it.qty)||1)+1; renderTicket(); persist(); syncTodayToHistory(); };
        const mDel = mc.querySelector('[data-act=del]');
        if(mDel) mDel.onclick = ()=>{ state.items.splice(idx,1); renderTicket(); persist(); syncTodayToHistory(); };
        const mAdd = mc.querySelector('[data-act=addons]');
        if(mAdd) mAdd.onclick = ()=> openAddonsModal(idx);
        const mTime = mc.querySelector('[data-act=time]');
        if(mTime) mTime.onclick = ()=> openEngineerModal(idx);
      }
    }
    });
  const t=totals();
  $("#grandTotal").textContent = currency(t.grand);
  $("#netTotal").textContent = currency(t.grand - (t.expensesTotal||0));
  $("#jobsCount").textContent = t.jobs;
  (function(){
  const set = new Set((state.items||[]).map(it => (it.name||'').trim().toLowerCase()));
  $("#servicesCount").textContent = set.size;
})();
  $("#addonsCount").textContent = state.items.reduce((a,i)=>a+(i.addons?.length||0),0);
  $("#milesDriven").textContent = t.odoMiles ?? 0;
  const expEl = document.getElementById('totalExpenses'); if(expEl){ expEl.textContent = currency(t.expensesTotal||0); }
  $("#avgEarning").textContent = currency(t.avg);
  try{ renderExpensesRows(); }catch(e){}
}

let addonsIndex = null;
function openAddonsModal(index){
  addonsIndex = index; const it = state.items[index]; $("#addonsTitle").textContent = `Add-ons for ${it.name}`; const selected = new Set((it.addons||[]).map(a=>a.name)); const body = $("#addonsBody"); body.innerHTML='';
  addons.forEach(a => { const row = document.createElement('div'); row.className='addonRow'; const id = `addon_${a.name.replace(/[^a-z0-9]+/gi,'_')}`; row.innerHTML = `
      <input type="checkbox" id="${id}" ${selected.has(a.name)?'checked':''}/>
      <label for="${id}"><span class="addonName">${a.name}</span><span class="addonPrice">${currency(a.price)}</span></label>
      <div>${currency(a.price)}</div>`; body.appendChild(row); });
  showAddons(true);
}
function showAddons(show){ const m=$("#addonsModal"); m.classList.toggle('hidden', !show); m.setAttribute('aria-hidden', show?'false':'true'); }
function saveAddons(){
  if(addonsIndex==null) return;
  const it = state.items[addonsIndex]; const picks=[];
  $$('#addonsBody input[type=checkbox]').forEach((cb, i)=>{ if(cb.checked){ const a = addons[i]; picks.push({name:a.name, price:a.price, qty:1}); } });
  it.addons = picks; addonsIndex = null; showAddons(false); renderTicket(); persist(); syncTodayToHistory();
}

function renderCarrierList(){
  const host=$("#carrierList"); if(!host) return; host.innerHTML=''; const q=($("#carrierSearch")?.value||'').toLowerCase().trim(); const list = carriers.filter(c => !q || c.name.toLowerCase().includes(q));
  list.forEach(c => { const flags = carrierBillables[c.id] || {}; const card=document.createElement('div'); card.className='carrierCard'; const header=document.createElement('div'); header.className='carrierHeader'; header.innerHTML = `<strong>${c.name}</strong> <span class="badge">Services: ${Object.keys(flags).length}</span>`; const body=document.createElement('div'); body.style.display='none'; const table=document.createElement('table'); table.innerHTML='<thead><tr><th>Service</th><th>Available</th></tr></thead>'; const tb=document.createElement('tbody');
    Object.entries(flags).forEach(([svc,val])=>{ const tr=document.createElement('tr'); const display = (val===true)?'✅':(val===false?'❌':String(val)); tr.innerHTML = `<td>${svc}</td><td>${display}</td>`; tb.appendChild(tr); });
    table.appendChild(tb); body.appendChild(table);
    header.onclick=()=>{ body.style.display = (body.style.display==='none'?'block':'none'); };
    card.appendChild(header); card.appendChild(body);
    host.appendChild(card);
  });
}

function isTimeBilled(name){
  const n = (name||'').toLowerCase();
  return n === 'engineer assist' || n.startsWith('accuserve windows');
}

function priceEngineerAssist(hours, minutes){
  let totalMin = Math.max(0, (Number(hours)||0)*60 + (Number(minutes)||0));
  if (totalMin <= 60) return 100;
  const over = totalMin - 60;
  const increments = Math.ceil(over / 15);
  return 100 + increments * 25;
}
let engIdx = null;
function openEngineerModal(index){
  engIdx = index;
  try{
    const it = state.items[index] || {};
    const titleEl = document.querySelector('#engModal .modalHead h3');
    if(titleEl){
      const n = (it.name||'').toLowerCase();
      titleEl.textContent = n.startsWith('accuserve windows') ? 'Accuserve Windows — Time' : 'Engineer Assist — Time';
    }
  }catch(e){}

  const it = state.items[index];
  const meta = it._engTime || {h:1, m:0};
  $("#engHours").value = meta.h ?? 1;
  $("#engMinutes").value = meta.m ?? 0;
  updateEngineerPreview();
  showEngineer(true);
}
function showEngineer(show){
  const m=$("#engModal"); m.classList.toggle('hidden', !show); m.setAttribute('aria-hidden', show?'false':'true');
}
function updateEngineerPreview(){
  const h = Number($("#engHours").value||0);
  const m = Number($("#engMinutes").value||0);
  const price = priceEngineerAssist(h, m);
  $("#engPreview").textContent = `Calculated: $${price.toFixed(2)} (first 60 min = $100, then $25/15min rounded up)`;
}
function saveEngineerTime(){
  if(engIdx==null) return;
  const h = Number($("#engHours").value||0);
  const m = Number($("#engMinutes").value||0);
  const price = priceEngineerAssist(h, m);
  const it = state.items[engIdx];
  it.price = price;
  it._engTime = {h, m};
  engIdx = null;
  showEngineer(false);
  renderTicket(); persist(); syncTodayToHistory();
}

function chooseTarpList(carrierName, sqft){ const name=(carrierName||'').toLowerCase(); const isStateFarm = name.includes('state') && name.includes('farm'); const listAcarriers=['liberty','safeco','homesite','amfam','american family','nationwide']; const inListA=listAcarriers.some(k=>name.includes(k)); if(isStateFarm) return sqft<=600?'A':'B'; return inListA?'A':'B'; }
function invoiceForSqft(listId, sqft){ const table=listId==='A'?TARP_LIST_A:TARP_LIST_B; for(const [min,max,amt] of table){ if(sqft>=min && sqft<=max) return amt; } return table.length?table[table.length-1][2]:0; }
function computeTarp(carrierName, sqft){ const listId=chooseTarpList(carrierName,sqft); const invoice=invoiceForSqft(listId,sqft); return { listId, invoice, pay: invoice/2 }; }
function openTarpModal(){
  const sel=$("#tarpCarrier");
  const search=$("#tarpSearch");
  const favBtn=$("#tarpFavBtn");
  const favs=getCarrierFavs();
  function populate(filter=''){
    sel.innerHTML='';
    const list = carriers
      .filter(c=> !filter || c.name.toLowerCase().includes(filter.toLowerCase()))
      .slice()
      .sort((a,b)=>{
        const af=favs.has(a.name), bf=favs.has(b.name);
        if(af!==bf) return af? -1: 1;
        return a.name.localeCompare(b.name);
      });
    list.forEach(c=>{ const opt=document.createElement('option'); opt.value=c.name; opt.textContent=c.name; sel.appendChild(opt); });
    updateFavBtn();
  }
  function updateFavBtn(){
    if(!favBtn) return;
    const name = sel.value||'';
    favBtn.classList.toggle('active', favs.has(name));
  }
  if(search){ search.value=''; search.oninput = ()=> populate(search.value||''); }
  if(favBtn){
    favBtn.onclick = ()=>{
      const name = sel.value||''; if(!name) return;
      if(favs.has(name)) favs.delete(name); else favs.add(name);
      saveCarrierFavs(favs);
      populate(search?.value||'');
    };
  }
  populate('');
  sel.onchange = updateFavBtn;
  $("#tarpResult").textContent='Enter values to calculate…';
  showTarp(true);
}

function showTarp(show){ const m=$("#tarpModal"); m.classList.toggle('hidden', !show); m.setAttribute('aria-hidden', show?'false':'true'); }
function sqftFromInputs(){ const s=Number($("#tarpSqft").value||0); const L=Number($("#tarpLen").value||0); const W=Number($("#tarpWid").value||0); if(s>0) return Math.floor(s); if(L>0&&W>0) return Math.floor(L*W); return 0; }
function previewTarp(){ const carrier=$("#tarpCarrier").value; const sqft=sqftFromInputs(); if(sqft<=0){ $("#tarpResult").textContent='Enter sqft or L×W'; return null; } const res=computeTarp(carrier,sqft); $("#tarpResult").textContent = `${carrier} — ${sqft} sqft → Invoice $${res.invoice.toFixed(2)} • Pay $${res.pay.toFixed(2)}`; return {carrier, sqft, ...res}; }
function addTarp(){ const p=previewTarp(); if(!p) return; addTarpLine(p.carrier,p.sqft,p.invoice,p.pay); showTarp(false); }

function dateOnlyISO(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()).toISOString().slice(0,10); }
function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); return x; }
function startOfFriWeek(d){ const day=d.getDay(); const diff=(day-5+7)%7; const start=addDays(d,-diff); return new Date(start.getFullYear(),start.getMonth(),start.getDate()); }
function endOfFriWeek(d){ const s=startOfFriWeek(d); return addDays(s,6); }
function fmtMDY(d){ const mm=String(d.getMonth()+1).padStart(2,'0'); const dd=String(d.getDate()).padStart(2,'0'); const yyyy=d.getFullYear(); return `${mm}/${dd}/${yyyy}`; }

let currentRange={kind:'thisweek', start:null, end:null};
function setRange(kind){
  const now=new Date();
  if(kind==='thisweek'){ currentRange={kind, start:startOfFriWeek(now), end:endOfFriWeek(now)}; }
  else if(kind==='lastweek'){ const start=addDays(startOfFriWeek(now),-7); currentRange={kind, start, end:addDays(start,6)}; }
  else { currentRange={kind, start:new Date(now.getFullYear(),0,1), end:now}; }
  document.querySelectorAll('.chipBtn').forEach(ch=>ch.classList.remove('active'));
  if(kind==='thisweek') document.querySelector('#chipThisWeek')?.classList.add('active');
  if(kind==='lastweek') document.querySelector('#chipLastWeek')?.classList.add('active');
  if(kind==='ytd') document.querySelector('#chipYTD')?.classList.add('active');
  document.querySelector('#rangeText').textContent = `Selected Range: ${fmtMDY(currentRange.start)} to ${fmtMDY(currentRange.end)}`;
  renderHistory();
}

async function renderHistory(){
  const host=$("#historyGrouped"); if(!host) return;
  const q=($("#historySearch")?.value||'').toLowerCase().trim();
  const history=await getHistory();
  const sISO=dateOnlyISO(currentRange.start); const eISO=dateOnlyISO(currentRange.end);
  const rows = history.filter(h=>(!q || (h.date+' '+(h.items||[]).map(i=>i.name).join(' ')).toLowerCase().includes(q)) && h.date>=sISO && h.date<=eISO).sort((a,b)=> a.date<b.date?1:-1);
  host.innerHTML='';
  const totalInRange = rows.reduce((sum,r)=> sum + (r.grandTotal||0), 0);
  const head = document.createElement('div');
  head.className='summary card inner';
  head.innerHTML = `<h3>Totals in Range</h3><div class="summaryRows"><div><span>Total Earnings</span><span>${currency(totalInRange)}</span></div><div><span>Total Expenses</span><span>$0.00</span></div></div>`;
  host.appendChild(head);
  rows.forEach(r=>{

    const ex = (r.expenses||[]);
    const day = document.createElement('div');
    day.className='groupDay';
    const d = new Date(r.date);

    const dayTotal = (r.items||[]).reduce((sum, it)=>{
      const addonSum = (it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0);
      return sum + it.price*(it.qty||1) + addonSum;
    }, 0);
    day.innerHTML = `<span class="dayLabel">${d.toLocaleDateString()}</span><span class="dayTotal">${currency(dayTotal)}</span>`;
    host.appendChild(day);

    try{
      const hasMiles = (r.odoEnd||0) > (r.odoStart||0);
      if(hasMiles){
        const chip = document.createElement('div');
        chip.className = 'histMiles';
        chip.textContent = `Miles: ${Number(r.odoEnd||0) - Number(r.odoStart||0)}`;
        day.appendChild(chip);
      }
    }catch(e){}

    try{
      const ex = Array.isArray(r.expenses) ? r.expenses : [];
      if(ex.length){
        const wrap = document.createElement('div');
        wrap.className = 'histExpenses';
        ex.forEach(eObj=>{
          const row = document.createElement('div');
          row.className = 'histExpenseRow';
          row.innerHTML = `<span class="name">${(eObj.name||'Expense')}</span><span class="amt">${currency(Number(eObj.amount||0))}</span>`;
          wrap.appendChild(row);
        });
        day.appendChild(wrap);
      }
    }catch(e){}
    (r.items||[]).forEach
    (it=>{
      const line = document.createElement('div'); line.className='histItem';
      const addonSum = (it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0);
      const lineTotal = it.price*(it.qty||1) + addonSum;
      line.innerHTML = `<div>${it.name} ${it.qty>1?`(x${it.qty})`:''}</div><div>${currency(lineTotal)}</div>`;
      host.appendChild(line);
      (it.addons||[]).forEach(ad=>{
        const sub = document.createElement('div'); sub.className='histSub';
        sub.textContent = `↳ ${ad.name} ($${(ad.price*(ad.qty||1)).toFixed(2)})`;
        host.appendChild(sub);
      });
    });
  });
}

function exportCsvRange(){
  const sISO=dateOnlyISO(currentRange.start); const eISO=dateOnlyISO(currentRange.end);
  getHistory().then(rows=>{
    rows=(rows||[]).filter(r=>r.date>=sISO && r.date<=eISO);
    const header=['Date','Jobs','Miles','Services','Add-ons','Total']; const lines=[header.join(',')];
    rows.forEach(r=>lines.push([r.date,r.jobs,r.miles,r.servicesCount,r.addonsCount,(r.grandTotal||0).toFixed(2)].join(',')));
    const blob=new Blob([lines.join('\\n')],{type:'text/csv'}); const url=URL.createObjectURL(blob);
    const a=document.createElement('a'); a.href=url; a.download='history_range.csv'; a.click(); URL.revokeObjectURL(url);
  });
}

function showQuick(show){ const m=$("#quickAddModal"); m.classList.toggle('hidden', !show); m.setAttribute('aria-hidden', show?'false':'true'); }
function populateQuickServices(list){ $("#quickService").innerHTML = list.map(s=>`<option value="${s.name}::${s.price}">${s.name} — $${(s.price||0).toFixed(2)}`).join(''); }
function renderQuickAddons(){ const host=$("#quickAddons"); host.innerHTML=''; addons.forEach((a,i)=>{ const id=`qaddon_${i}`; const row=document.createElement('div'); row.className='addonRow'; row.innerHTML=`<input type="checkbox" id="${id}"/><label for="${id}"><span class="addonName">${a.name}</span><span class="addonPrice">$${(a.price||0).toFixed(2)} </span></label><div>$${(a.price||0).toFixed(2)}</div>`; host.appendChild(row); }); }
function openQuickAdd(){ $("#quickDate").value = new Date().toISOString().slice(0,10); populateQuickServices(services); renderQuickAddons(); showQuick(true); }

function setDateRow(){ const d=new Date(state.date); const mm=String(d.getMonth()+1).padStart(2,'0'), dd=String(d.getDate()).padStart(2,'0'), yyyy=d.getFullYear(); $("#dateRowText").textContent = `Entries for: ${mm}/${dd}/${yyyy}`; }

window.addEventListener('DOMContentLoaded', ()=>{
  try{ const fab=document.getElementById('addServiceFab'); if(fab) fab.addEventListener('click', openServiceModal);}catch(_){ }
  try{ const b=document.getElementById('addServiceBtn'); if(b) b.addEventListener('click', openServiceModal);
       const c=document.getElementById('svcClose'); if(c) c.addEventListener('click', closeServiceModal);
       const d=document.getElementById('svcDone'); if(d) d.addEventListener('click', closeServiceModal);
       const cust=document.getElementById('svcCustom'); if(cust) cust.addEventListener('click', ()=>{ closeServiceModal(); showCustom(); }); }catch(e){}

  (async ()=>{
    const hist=await getHistory();
    if((hist||[]).length===0){
      const seeded=[]; const svc=[...services]; const today=new Date();
      for(let i=1;i<=45;i++){
        const d=new Date(today); d.setDate(d.getDate()-i); const dateISO=d.toISOString().slice(0,10);
        const count=Math.floor(Math.random()*8)+1; const items=[];
        for(let j=0;j<count;j++){
          const pick=svc[(i*j+j)%svc.length];
          const adCount=Math.random()<0.5?0:(Math.random()<0.5?1:2);
          const picked=[];
          for(let k=0;k<adCount;k++){ const a=addons[(i*j+k)%addons.length]; picked.push({name:a.name, price:a.price, qty:1}); }
          items.push({ id: crypto.randomUUID(), name: pick.name, price: pick.price, qty:1, addons: picked });
        }
        const servicesCount = items.length;
        const addonsCount = items.reduce((a,n)=>a+(n.addons?.length||0),0);
        const grandTotal = items.reduce((sum, it)=>{ const addonSum=(it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0); return sum + it.price + addonSum; }, 0);
        seeded.push({ id: crypto.randomUUID(), date: dateISO, jobs: servicesCount?1:0, miles: 0, servicesCount, addonsCount, grandTotal, items });
      }
      await setHistory(seeded);
    }
  })();

  try{ const saved = JSON.parse(localStorage.getItem(KEY)||'null'); if(saved) Object.assign(state, saved); }catch(e){}
  setDateRow();

  renderCatalog(); renderTicket(); renderCarrierList(); setRange('thisweek');

  $$(".tab").forEach(b=> b.onclick=()=>{ const id=b.dataset.tab; $$(".tab").forEach(t=>t.classList.toggle('active', t.dataset.tab===id)); $$(".tabpanel").forEach(p=>p.classList.toggle('hidden', p.dataset.panel!==id)); });

  $("#searchInput").oninput = (e)=>{ const q=e.target.value.toLowerCase().trim(); if(!q) renderCatalog(); else renderCatalog(services.filter(s=>s.name.toLowerCase().includes(q))); };

  $("#historySearch").addEventListener('input', renderHistory);
  $("#chipThisWeek").addEventListener('click', ()=>setRange('thisweek'));
  $("#chipLastWeek").addEventListener('click', ()=>setRange('lastweek'));
  $("#chipYTD").addEventListener('click', ()=>setRange('ytd'));
  $("#exportCsvBtn").addEventListener('click', exportCsvRange);
  $("#clearHistoryBtn").addEventListener('click', async()=>{ await setHistory([]); renderHistory(); });
  $("#addNewBtn").addEventListener('click', openQuickAdd);
  $("#quickClose").addEventListener('click', ()=>showQuick(false));
  $("#quickCancel").addEventListener('click', ()=>showQuick(false));
  $("#quickSearch").addEventListener('input', (e)=>{ const q=(e.target.value||'').toLowerCase().trim(); const list=!q?services:services.filter(s=>s.name.toLowerCase().includes(q)); populateQuickServices(list); });
  $("#quickAddBtn").addEventListener('click', async ()=>{
    const svcRaw=$("#quickService").value||''; if(!svcRaw) return;
    const [name, priceStr]=svcRaw.split('::'); const price=Number(priceStr||0);
    const picks=[]; $$('#quickAddons input[type=checkbox]').forEach((cb,i)=>{ if(cb.checked){ const a=addons[i]; picks.push({name:a.name, price:a.price, qty:1}); } });
    const date = $("#quickDate").value || new Date().toISOString().slice(0,10);
    const history = await getHistory(); let entry = history.find(h=>h.date===date);
    if(!entry){ entry={ id:crypto.randomUUID(), date, jobs:0, miles:0, servicesCount:0, addonsCount:0, grandTotal:0, items:[] }; history.unshift(entry); }
    entry.items.push({ id:crypto.randomUUID(), name, price, qty:1, addons:picks });
    entry.servicesCount = entry.items.length;
    entry.addonsCount = entry.items.reduce((a,i)=>a+(i.addons?.length||0),0);
    entry.jobs = entry.items.length?1:0;
    entry.grandTotal = entry.items.reduce((sum, it)=>{ const addonSum=(it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0); return sum + it.price*(it.qty||1) + addonSum; }, 0);

  try{ entry.expenses = (typeof getExpenses==='function') ? (getExpenses()||[]) : []; }catch(e){ entry.expenses = []; }
  await
  try{
    if(entry){
      const _o = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};
      entry.odoStart = Number(_o.start||0);
      entry.odoEnd = Number(_o.end||0);
    }
  }catch(e){}
  setHistory(history); renderHistory(); showQuick(false);
  });

  $("#engClose").addEventListener('click', ()=>showEngineer(false));
  $("#engCancel").addEventListener('click', ()=>showEngineer(false));
  $("#engHours").addEventListener('input', updateEngineerPreview);
  $("#engMinutes").addEventListener('input', updateEngineerPreview);
  $("#engSave").addEventListener('click', saveEngineerTime);

  window.showCustom = function(show){ const m=$("#customModal"); m.classList.toggle('hidden', !show); m.setAttribute('aria-hidden', show?'false':'true'); }
  $("#addCustomBtn").addEventListener('click', ()=>{ $("#customName").value=''; $("#customPrice").value=''; $("#customSave").checked=true; openCustomModal(); });
  $("#customClose").addEventListener('click', ()=>showCustom(false));
  $("#customCancel").addEventListener('click', ()=>showCustom(false));
  $("#customSaveBtn").addEventListener('click', ()=>{
    const name = ($("#customName").value||'').trim();
    const price = Number($("#customPrice").value||0);
    const saveIt = $("#customSave").checked;
    if(!name || !(price>=0)) return;
    addServiceLine(name, price);
    if(saveIt){
      customServices = getCustomServices();

      if(!customServices.find(s=>s.name===name)){
        customServices.push({name, price});
        saveCustomServices(customServices);
      }
    }
    renderCatalog();
    showCustom(false);
  });

  $("#addTarpBtn").addEventListener('click', openTarpModal);
  $("#tarpClose").addEventListener('click', ()=>showTarp(false));
  $("#tarpCalcBtn").addEventListener('click', previewTarp);
  $("#tarpAddBtn").addEventListener('click', addTarp);

  $("#addonsClose").addEventListener('click', ()=>showAddons(false));
  $("#addonsCancel").addEventListener('click', ()=>showAddons(false));
  $("#addonsSave").addEventListener('click', saveAddons);
});

(function(){
  const fab = document.getElementById('addServiceFab');
  const topBtn = document.getElementById('addServiceBtn');

  if (!fab) return;

  function isVisible(el){
    if(!el) return false;
    const style = window.getComputedStyle(el);
    if(style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
    const rect = el.getBoundingClientRect();
    const inViewport = rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
    return inViewport;
  }

  function onFabClick(){
    try{
      if (typeof openServiceModal === 'function') { openServiceModal(); return; }
      const btn = document.getElementById('addServiceBtn');
      if(btn){ btn.click(); }
    }catch(e){ console.error(e); }
  }
  fab.onclick = onFabClick;

  function isOnTicketTab(){
    const active = document.querySelector('.tab.active');
    return active && active.getAttribute('data-tab') === 'ticket';
  }

  function refreshFab(){

    if(!isOnTicketTab()){ fab.classList.remove('show'); return; }

    const scrolled = (window.scrollY || window.pageYOffset || 0) > 80;
    const shouldShow = (!topBtn || !isVisible(topBtn) || scrolled);
    if(shouldShow){ fab.classList.add('show'); } else { fab.classList.remove('show'); }
  }

  try{
    if(topBtn && 'IntersectionObserver' in window){
      const io = new IntersectionObserver(()=>refreshFab(), {root:null, threshold:[0, 0.01, 1]});
      io.observe(topBtn);
    }
  }catch(e){}

  ['scroll','resize','orientationchange'].forEach(evt=>window.addEventListener(evt, refreshFab, {passive:true}));
  document.addEventListener('click', (e)=>{
    const t = e.target.closest('.tab');
    if(t){ setTimeout(refreshFab, 0); }
  });
  document.addEventListener('DOMContentLoaded', refreshFab);
  setTimeout(refreshFab, 300);
})();

  try{
    const cs = document.getElementById('customServiceBtn');
    if(cs){
      cs.addEventListener('click', ()=>{
        const n = document.getElementById('customName');
        const p = document.getElementById('customPrice');
        const s = document.getElementById('customSave');
        if(n) n.value='';
        if(p) p.value='';
        if(s) s.checked=true;
        openCustomModal();
      });
    }
  }catch(e){}

window.openExpenseModal = function(){
  const m = document.getElementById('expenseModal');
  if(!m) return;
  const n = document.getElementById('expenseName');
  const a = document.getElementById('expenseAmount');
  if(n) n.value='';
  if(a) a.value='';
  m.classList.remove('hidden');
  m.setAttribute('aria-hidden', 'false');
  (n||a)?.focus?.();
}
window.closeExpenseModal = function(){
  const m = document.getElementById('expenseModal');
  if(!m) return;
  m.classList.add('hidden');
  m.setAttribute('aria-hidden', 'true');
}
window.saveExpense = function(){
  const n = (document.getElementById('expenseName')?.value||'').trim();
  const amt = Number(document.getElementById('expenseAmount')?.value||0);
  if(!n || !(amt>=0)) return;
  const ex = getExpenses();
  ex.push({name:n, amount:amt});
  setExpenses(ex);
  renderTicket();
  closeExpenseModal();
}

function openCustomModal(){
  try{
    if (typeof showCustom === 'function'){ openCustomModal(); return; }
  }catch(e){}

  const m = document.getElementById('customModal');
  if(m){
    const n = document.getElementById('customName');
    const p = document.getElementById('customPrice');
    const s = document.getElementById('customSave');
    if(n) n.value='';
    if(p) p.value='';
    if(s) s.checked=true;
    m.classList.remove('hidden');
    m.setAttribute('aria-hidden','false');
  }
}

(function(){

  window.showCustom = function(show){
    var m = document.getElementById('customModal');
    if(!m) return;
    if(show){ m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); }
    else { m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); }
  };

  window.openExpenseModal = function(){
    var m = document.getElementById('expenseModal');
    if(!m) return;
    var n = document.getElementById('expenseName');
    var a = document.getElementById('expenseAmount');
    if(n) n.value='';
    if(a) a.value='';
    m.classList.remove('hidden'); m.setAttribute('aria-hidden','false');
    (n||a)?.focus?.();
  };

  window.closeExpenseModal = function(){
    var m = document.getElementById('expenseModal');
    if(!m) return;
    m.classList.add('hidden'); m.setAttribute('aria-hidden','true');
  };

  window.saveExpense = function(){
    var n = (document.getElementById('expenseName')||{}).value || '';
    var a = Number((document.getElementById('expenseAmount')||{}).value || 0);
    n = (n||'').trim();
    if(!n || !(a>=0)) return;
    try{
      var s = JSON.parse(localStorage.getItem(KEY) || '{}');
      var ex = Array.isArray(s.expenses)? s.expenses : [];
      ex.push({name:n, amount:a});
      s.expenses = ex;
      localStorage.setItem(KEY, JSON.stringify(s));
    }catch(e){}
    try{ if(typeof renderTicket==='function') renderTicket(); }catch(e){}
    closeExpenseModal();
  };

  document.addEventListener('DOMContentLoaded', function(){

    try{
      document.getElementById('customClose')?.addEventListener('click', function(){ showCustom(false); });
      document.getElementById('customCancel')?.addEventListener('click', function(){ showCustom(false); });
      document.getElementById('customSaveBtn')?.addEventListener('click', function(){
        var name = (document.getElementById('customName')||{}).value || '';
        var price = Number((document.getElementById('customPrice')||{}).value || 0);
        var saveIt = !!(document.getElementById('customSave')||{}).checked;
        name = (name||'').trim();
        if(!name || !(price>=0)) return;
        try{ if(typeof addServiceLine==='function') addServiceLine(name, price); }catch(e){}
        if(saveIt){
          try{
            var custom = JSON.parse(localStorage.getItem('et_custom_svcs_v14')||'[]');
            if(!custom.find(function(s){return (s.name||'')===name;})){ custom.push({name:name, price:price}); }
            localStorage.setItem('et_custom_svcs_v14', JSON.stringify(custom));
            if(typeof renderCatalog==='function') renderCatalog();
          }catch(e){}
        }
        showCustom(false);
      });
    }catch(e){}

    try{
      document.getElementById('customServiceBtn')?.addEventListener('click', function(){ showCustom(true); });
      document.getElementById('addExpenseBtn')?.addEventListener('click', function(){ openExpenseModal(); });
    }catch(e){}

    try{
      document.getElementById('expenseClose')?.addEventListener('click', function(){ closeExpenseModal(); });
      document.getElementById('expenseCancel')?.addEventListener('click', function(){ closeExpenseModal(); });
      document.getElementById('expenseSave')?.addEventListener('click', function(){ saveExpense(); });
    }catch(e){}
  });
})();

function renderExpensesRows(){

  document.querySelectorAll('.expenseRow').forEach(el=>el.remove());
  const expenses = (typeof getExpenses==='function') ? (getExpenses()||[]) : [];
  const tb = document.querySelector('#ticketTable tbody');
  const mlist = document.getElementById('ticketMobile');
  if(!tb && !mlist) return;

  expenses.forEach((ex, idx)=>{
    const name = ex.name || 'Expense';
    const amt = Number(ex.amount||0);

    if(tb){
      const tr = document.createElement('tr');
      tr.className = 'expenseRow';
      tr.innerHTML = `
        <td>${name} <span class="expenseBadge">Expense</span></td>
        <td class='colQty'>—</td>
        <td class='colPrice expensePrice'>${currency(amt)}</td>
        <td>—</td>
        <td class='expensePrice'>${currency(amt)}</td>
        <td class="rowActions"><button data-act="delete-expense" data-index="${idx}" title="Delete">🗑️</button></td>
      `;
      tb.appendChild(tr);
    }

    if(mlist){
      const div = document.createElement('div');
      div.className = 'mcard expenseRow';
      div.innerHTML = `
        <div class="mrow title"><strong>${name}</strong> <span class="expenseBadge">Expense</span></div>
        <div class="mrow price expensePrice">${currency(amt)}</div>
        <div class="mrow actions"><button class="btnIcon" data-act="delete-expense" data-index="${idx}" title="Delete">🗑️</button></div>
      `;
      mlist.appendChild(div);
    }
  });

  document.querySelectorAll('[data-act="delete-expense"]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const i = Number(btn.getAttribute('data-index')||-1);
      if(i>=0){
        const ex = getExpenses();
        ex.splice(i,1);
        setExpenses(ex);
        renderTicket();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{

  try{
    document.getElementById('editMilesBtn')?.addEventListener('click', ()=>{
      const cur = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};
      const s = document.getElementById('mileStart'); const e = document.getElementById('mileEnd');
      if(s) s.value = cur.start||''; if(e) e.value = cur.end||'';
      if(typeof openModal==='function'){ openModal('milesModal'); } else { document.getElementById('milesModal')?.classList.remove('hidden'); }
    });
    document.getElementById('milesSave')?.addEventListener('click', ()=>{
      const s = Number(document.getElementById('mileStart')?.value||0);
      const e = Number(document.getElementById('mileEnd')?.value||0);
      if(typeof setOdo==='function') setOdo(s,e);
      if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); }
      try{ renderTicket(); renderHistory(); }catch(_){}
    });
    document.getElementById('milesClose')?.addEventListener('click', ()=>{ if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); } });
    document.getElementById('milesCancel')?.addEventListener('click', ()=>{ if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); } });
  }catch(e){}
  try{
    const host = document.querySelector('section.history');
    const map = {chipThisWeek:'thisweek', chipLastWeek:'lastweek', chipYTD:'ytd'};
    function handle(evt){
      const t = evt.target.closest('#chipThisWeek, #chipLastWeek, #chipYTD');
      if(!t) return;
      const val = map[t.id];
      if(val && typeof setRange==='function'){ setRange(val); }
    }
    host?.addEventListener('click', handle);
    host?.addEventListener('touchend', handle);
  }catch(e){}
});

document.addEventListener('DOMContentLoaded', ()=>{

  try{
    document.getElementById('editMilesBtn')?.addEventListener('click', ()=>{
      const cur = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};
      const s = document.getElementById('mileStart'); const e = document.getElementById('mileEnd');
      if(s) s.value = cur.start||''; if(e) e.value = cur.end||'';
      if(typeof openModal==='function'){ openModal('milesModal'); } else { document.getElementById('milesModal')?.classList.remove('hidden'); }
    });
    document.getElementById('milesSave')?.addEventListener('click', ()=>{
      const s = Number(document.getElementById('mileStart')?.value||0);
      const e = Number(document.getElementById('mileEnd')?.value||0);
      if(typeof setOdo==='function') setOdo(s,e);
      if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); }
      try{ renderTicket(); renderHistory(); }catch(_){}
    });
    document.getElementById('milesClose')?.addEventListener('click', ()=>{ if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); } });
    document.getElementById('milesCancel')?.addEventListener('click', ()=>{ if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); } });
  }catch(e){}
  try{
    const host = document.querySelector('section.history');
    function onAdd(evt){
      const btn = evt.target.closest('#addNewBtn');
      if(!btn) return;
      if (typeof openQuickAdd === 'function') { openQuickAdd(); }
    }
    host?.addEventListener('click', onAdd);
    host?.addEventListener('touchend', onAdd);
  }catch(e){}
});

(function(){
  function isOpen(el){ return el && !el.classList.contains('hidden'); }
  window.openModal = function(id){
    const m = document.getElementById(id);
    if(!m) return;
    m.classList.remove('hidden');
    m.setAttribute('aria-hidden','false');
  };
  window.closeModal = function(id){
    const m = id ? document.getElementById(id) : document.querySelector('.modal:not(.hidden)');
    if(!m) return;
    m.classList.add('hidden');
    m.setAttribute('aria-hidden','true');
  };
  document.addEventListener('click', (e)=>{

    const closeBtn = e.target.closest('[data-close-modal], #customClose, #customCancel, #expenseClose, #expenseCancel, #milesClose, #milesCancel');
    if(closeBtn){
      const tid = closeBtn.getAttribute('data-close-modal') || closeBtn.getAttribute('data-target');
      const modal = tid ? document.getElementById(tid) : closeBtn.closest('.modal');
      if(modal) closeModal(modal.id);
      return;
    }

    const openBtn = e.target.closest('[data-open-modal]');
    if(openBtn){
      const id = openBtn.getAttribute('data-open-modal');
      if(id) openModal(id);
      return;
    }

    const overlay = e.target.classList && e.target.classList.contains('modal');
    if(overlay){
      const card = e.target.querySelector('.modalCard');
      if(card && !card.contains(e.target)) {

      }
      closeModal(e.target.id);
      return;
    }
  }, {passive:true});

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      const open = document.querySelector('.modal:not(.hidden)');
      if(open) closeModal(open.id);
    }
  });
})();
