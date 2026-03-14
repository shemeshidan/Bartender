// ╔══════════════════════════════════════════════════════════╗
// ║       קובץ תכנים — עורכים רק כאן, ללא HTML              ║
// ║                                                          ║
// ║  הוראות:                                                 ║
// ║  • לשנות טקסט — פשוט לערוך את הערך בין הגרשיים          ║
// ║  • להסתיר פריט — שנה ל: hidden: true                    ║
// ║  • להציג פריט — שנה ל: hidden: false                    ║
// ║  • להוסיף פריט — העתק שורה קיימת ושנה את הערכים         ║
// ╚══════════════════════════════════════════════════════════╝


// ════════════════════════════════════════════════════════════
//   ספיישל היום — הכרטיס הגדול בראש מסך הספיישל
// ════════════════════════════════════════════════════════════
const SPECIAL_HERO = {
  name:    'שוקו חם',
  nameEn:  'Hot Cocoa',
  desc:    'שוקולד חם<br>המשקה החדש שכולם מדברים עליו 🔥',
  descEn:  "Hot chocolate<br>The new drink everyone's talking about 🔥",
  punches: 1,
};


// ════════════════════════════════════════════════════════════
//   ספיישלס נוספים — מופיעים מתחת לכרטיס הגדול
// ════════════════════════════════════════════════════════════
const SPECIALS = [
  {
    id: 'ssp1',
    name:    'יין לבן',
    nameEn:  'White Wine',
    desc:    'סוביניון בלאן פרייבט בין (וילה מריה)',
    punches: 4,
    isNew:   true,
    hidden:  false,
  },
  {
    id: 'ssp2',
    name:    'מוחיטו ספיישל',
    nameEn:  'Special Mojito',
    desc:    'רום לבן, נענע טרייה, ליים וסוכר חום',
    punches: 5,
    isNew:   false,
    hidden:  true,
  },
  {
    id: 'ssp3',
    name:    'שוקו חם',
    nameEn:  'Hot Cocoa',
    desc:    'שוקולד חם — חדש!',
    punches: 1,
    isNew:   false,
    hidden:  true,
  },
];


// ════════════════════════════════════════════════════════════
//   אירועי החודש
//   להוסיף אירוע: העתק בלוק קיים ושנה את הפרטים
//   להסתיר אירוע: שנה hidden: false — ל: hidden: true
// ════════════════════════════════════════════════════════════
const EVENTS = [
  {
    id:      'ev1',
    emoji:   '🎸',
    date:    'שישי, 14 מרץ 2026',
    dateEn:  'Friday, March 14, 2026',
    title:   'ערב מוזיקה חיה',
    titleEn: 'Live Music Night',
    desc:    'להקה מקומית מככבת הלילה! בואו תהנו ממוזיקה חיה, שתייה טובה וחברים עוד יותר טובים.',
    descEn:  'Local band playing live tonight! Come enjoy great music, good drinks and even better friends.',
    tag:     '🎸 מוזיקה חיה',
    tagEn:   '🎸 Live Music',
    isNew:   false,
    hidden:  false,
  },
  {
    id:      'ev2',
    emoji:   '🧠',
    date:    'שבת, 22 מרץ 2026',
    dateEn:  'Saturday, March 22, 2026',
    title:   'ערב טריוויה',
    titleEn: 'Trivia Night',
    desc:    'קבצו צוות, חדדו את השכל ותתחרו על פרסים מיוחדים. הכניסה חופשית לבעלי כרטיסיה!',
    descEn:  'Gather your team and compete for special prizes. Free entry for card holders!',
    tag:     '🧠 משחקים',
    tagEn:   '🧠 Games',
    isNew:   true,
    hidden:  false,
  },
  {
    id:      'ev3',
    emoji:   '🥂',
    date:    'שישי, 28 מרץ 2026',
    dateEn:  'Friday, March 28, 2026',
    title:   'Happy Hour מורחב',
    titleEn: 'Extended Happy Hour',
    desc:    'Happy Hour כל הלילה! 20% הנחה על כל הכרטיסיות.',
    descEn:  'Happy Hour all night long! 20% off all cards.',
    tag:     '🥂 מבצע מיוחד',
    tagEn:   '🥂 Special Offer',
    isNew:   true,
    hidden:  false,
  },
];


// ════════════════════════════════════════════════════════════
//   שתייה קלה
// ════════════════════════════════════════════════════════════
const SOFT = [
  { id: 'sd1', name: 'קולה',        nameEn: 'Cola',        desc: 'Coca-Cola קלאסי',      punches: 1, isNew: false, hidden: false },
  { id: 'sd2', name: 'קולה זירו',   nameEn: 'Cola Zero',   desc: 'Diet Coke — ללא סוכר', punches: 1, isNew: false, hidden: false },
  { id: 'sd3', name: 'ספרייט',      nameEn: 'Sprite',      desc: 'Sprite — רענן וקריר',  punches: 1, isNew: false, hidden: false },
  { id: 'sd4', name: 'ספרייט זירו', nameEn: 'Sprite Zero', desc: 'ללא סוכר',             punches: 1, isNew: false, hidden: false },
  { id: 'sd5', name: 'סודה',        nameEn: 'Soda',        desc: 'מים מוגזים',           punches: 1, isNew: false, hidden: false },
  { id: 'sd6', name: 'טוניק',       nameEn: 'Tonic Water', desc: 'Tonic Water',          punches: 1, isNew: false, hidden: false },
  { id: 'sd7', name: 'מים',         nameEn: 'Water',       desc: 'מים שתייה',            punches: 1, isNew: false, hidden: false },
];


// ════════════════════════════════════════════════════════════
//   תרגום כותרות קטגוריות שתייה חריפה לאנגלית
// ════════════════════════════════════════════════════════════
const SPIRITS_EN = {
  'תדלוק פרמיום':                        'Premium Shots',
  "צ'ייסרים — שתה וסע (עם נהג תורן)":   'Chasers',
  'מיקס & דרינק — מנה + שתייה קלה':     'Mix & Drink',
  'קוקטיילים מיוחדים':                   'Special Cocktails',
  'בירות — עצירת דיינון':                'Beers',
  'יינות — נכנסים להילוך גבוה':          'Wines',
};


// ════════════════════════════════════════════════════════════
//   שתייה חריפה — מחולקת לקטגוריות
// ════════════════════════════════════════════════════════════
const SPIRITS = {
  'תדלוק פרמיום': [
    { id: 'sp1', name: "ג'ין",              nameEn: 'Gin',                 desc: 'Gin',                     punches: 3, isNew: false, hidden: false },
    { id: 'sp2', name: 'טקילה',             nameEn: 'Tequila',             desc: 'Tequila',                 punches: 3, isNew: false, hidden: false },
    { id: 'sp3', name: 'וודקה',             nameEn: 'Vodka',               desc: 'Vodka',                   punches: 3, isNew: false, hidden: false },
    { id: 'sp4', name: 'ערק',               nameEn: 'Arak',                desc: 'Arak',                    punches: 3, isNew: false, hidden: false },
    { id: 'sp5', name: 'רום',               nameEn: 'Rum',                 desc: 'Rum',                     punches: 3, isNew: false, hidden: false },
    { id: 'sp6', name: 'בייליש איירש קרים', nameEn: 'Baileys Irish Cream', desc: 'Baileys Irish Cream',     punches: 3, isNew: false, hidden: false },
    { id: 'sp7', name: 'ויסקי רגיל',        nameEn: 'Whiskey',             desc: 'Regular Whiskey',         punches: 3, isNew: false, hidden: false },
    { id: 'sp8', name: 'ויסקי פרמיום',      nameEn: 'Premium Whiskey',     desc: '+3 ניקובים — סה"כ 6',    punches: 6, isNew: false, hidden: false },
    { id: 'sp9', name: 'קוניאק',            nameEn: 'Cognac',              desc: '+1 ניקוב נוסף — סה"כ 4', punches: 4, isNew: false, hidden: false },
  ],
  "צ'ייסרים — שתה וסע (עם נהג תורן)": [
    { id: 'ch1', name: "ג'ין",       nameEn: 'Gin',          desc: 'Gin shot',          punches: 2, isNew: false, hidden: false },
    { id: 'ch2', name: 'טקילה',      nameEn: 'Tequila',      desc: 'Tequila shot',      punches: 2, isNew: false, hidden: false },
    { id: 'ch3', name: 'וודקה',      nameEn: 'Vodka',        desc: 'Vodka shot',        punches: 2, isNew: false, hidden: false },
    { id: 'ch4', name: 'ערק',        nameEn: 'Arak',         desc: 'Arak shot',         punches: 2, isNew: false, hidden: false },
    { id: 'ch5', name: 'רום',        nameEn: 'Rum',          desc: 'Rum shot',          punches: 2, isNew: false, hidden: false },
    { id: 'ch6', name: 'ויסקי רגיל', nameEn: 'Whiskey',      desc: 'Whiskey shot',      punches: 2, isNew: false, hidden: false },
    { id: 'ch7', name: 'שוקו חם 🔥', nameEn: 'Hot Cocoa 🔥', desc: 'שוקולד חם — חדש!', punches: 1, isNew: true,  hidden: false },
  ],
  'מיקס & דרינק — מנה + שתייה קלה': [
    { id: 'mx1', name: "ג'ין + טוניק",      nameEn: 'Gin & Tonic',         desc: '', punches: 4, isNew: false, hidden: false },
    { id: 'mx2', name: 'וודקה + נענע עלים', nameEn: 'Vodka & Mint Leaves', desc: '', punches: 4, isNew: false, hidden: false },
    { id: 'mx3', name: 'טקילה + ספרייט',    nameEn: 'Tequila & Sprite',    desc: '', punches: 4, isNew: false, hidden: false },
    { id: 'mx4', name: 'ערק + נענע ליים',   nameEn: 'Arak & Lime Mint',    desc: '', punches: 4, isNew: false, hidden: false },
    { id: 'mx5', name: 'ויסקי פרמיום מיקס', nameEn: 'Premium Whiskey Mix', desc: '+3 ניקובים נוספים', punches: 7, isNew: false, hidden: false },
  ],
  'קוקטיילים מיוחדים': [
    { id: 'co1', name: 'קוקטייל הבית', nameEn: 'House Cocktail', desc: 'שאלו את הברטנדרים — מה הספיישל של היום?', punches: 6, isNew: false, hidden: false },
  ],
  'בירות — עצירת דיינון': [
    { id: 'be1', name: 'בקבוק בירה',    nameEn: 'Beer Bottle', desc: 'Beer Bottle',        punches: 2, isNew: false, hidden: false },
    { id: 'be2', name: 'מלכה/וודט 1/3', nameEn: 'Malca 1/3',  desc: 'Malca/Vedett — 1/3', punches: 2, isNew: false, hidden: false },
    { id: 'be3', name: 'מלכה/וודט 1/2', nameEn: 'Malca 1/2',  desc: 'Malca/Vedett — 1/2', punches: 3, isNew: false, hidden: false },
  ],
  'יינות — נכנסים להילוך גבוה': [
    { id: 'wi1', name: 'כוס יין',       nameEn: 'Wine Glass',        desc: 'אדום / לבן / רוזה', punches: 4,  isNew: false, hidden: false },
    { id: 'wi2', name: 'בקבוק יין',     nameEn: 'Wine Bottle',       desc: 'אדום / רוזה',       punches: 12, isNew: false, hidden: false },
    { id: 'wi3', name: 'בקבוק יין לבן', nameEn: 'White Wine Bottle', desc: 'לבן',               punches: 14, isNew: false, hidden: false },
  ],
};


// ════════════════════════════════════════════════════════════
//   אוכל
// ════════════════════════════════════════════════════════════
const FOOD = [
  { id: 'fo0', name: 'בייגלה', nameEn: 'Pretzels', desc: 'pretzels — על חשבון הבית',          punches: 0, isNew: false, hidden: false },
  { id: 'fo1', name: 'זיתים',  nameEn: 'Olives',   desc: 'Olives — נשנוש מושלם עם כל שתייה', punches: 1, isNew: false, hidden: false },
  { id: 'fo2', name: "נאצ'וס", nameEn: 'Nachos',   desc: 'Nachos — קריספי, קריספי וקריספי',  punches: 2, isNew: false, hidden: false },
];
