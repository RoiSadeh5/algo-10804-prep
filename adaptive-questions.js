/* 48 exam-level questions derived from the 2023-2025 exams and HW1-HW4. */
var CODEX_ADAPTIVE_QUESTIONS = [
  {
    id: "R01",
    cat: "רקורסיה",
    difficulty: 3,
    skills: ["מעקב רקורסיה", "סדר ביצוע"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 Y - שאלה 2",
    sourceHref: "/assets/exams/2025-y-questionnaire.pdf",
    prompt: "מה יודפס עבור הקריאה <code>rec(13)</code>?",
    code: "void rec(unsigned int n) {\n    if (n > 1) rec(n / 2);\n    printf(\"%d\", n % 2);\n}",
    kind: "code",
    opts: [{h: "1011", ltr: true}, {h: "1101", ltr: true}, {h: "1310", ltr: true}, {h: "1110", ltr: true}],
    ans: 1,
    rule: "ההדפסה מתבצעת בדרך חזרה מהרקורסיה, מהביט המשמעותי לפחות משמעותי.",
    why: "הקריאות הן 13, 6, 3, 1. בדרך חזרה מודפסים השאריות 1, 1, 0, 1 - הייצוג הבינארי של 13.",
    trap: "אם קיבלת 1011, עקבת בזמן הירידה במקום בזמן החזרה."
  },
  {
    id: "R02",
    cat: "רקורסיה",
    difficulty: 3,
    skills: ["זיהוי אלגוריתם", "סיבוכיות רקורסיה"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 2",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "מה עושה הפונקציה ומה סיבוכיות הזמן שלה?",
    code: "void rec(char *s, int n) {\n    if (n <= 1) return;\n    for (int i = 0; i < n - 1; i++)\n        if (s[i] > s[i + 1]) {\n            char t = s[i]; s[i] = s[i + 1]; s[i + 1] = t;\n        }\n    rec(s, n - 1);\n}",
    kind: "code",
    opts: [
      {h: "מיון בועות, Θ(n²)"},
      {h: "מיון הכנסה, Θ(n²)"},
      {h: "מיון מהיר, Θ(n log n)"},
      {h: "היפוך מחרוזת, Θ(n)"}
    ],
    ans: 0,
    rule: "כל קריאה מבצעת מעבר בועות אחד ומקטינה את התחום באחד.",
    why: "סכום אורכי המעברים הוא (n-1)+(n-2)+...+1, ולכן Θ(n²).",
    trap: "אל תתאר רק את הלולאה; חפש את התוצאה הכוללת של כל הקריאות."
  },
  {
    id: "R03",
    cat: "רקורסיה",
    difficulty: 3,
    skills: ["מחרוזות", "חזרה מרקורסיה"],
    origin: "recent",
    sourceLabel: "מבוסס 2024 Y - שאלה 2",
    sourceHref: "/assets/exams/2024-y-questionnaire.pdf",
    prompt: "אם <code>str1=\"abcdefg\"</code> ו-<code>str2</code> מאותחלת לאפס, מה יהיה ב-<code>str2</code>?",
    code: "void strMystery(char *str1, char *str2, int length) {\n    if (str1[0] == '\\0') return;\n    char c = str1[0];\n    strMystery(str1 + 1, str2, length - 1);\n    str2[length - 1] = c;\n}",
    kind: "code",
    opts: [{h: "abcdefg", ltr: true}, {h: "gfedcba", ltr: true}, {h: "abcdef", ltr: true}, {h: "ggggggg", ltr: true}],
    ans: 1,
    rule: "ההשמה מתבצעת בחזרה מהרקורסיה לאינדקסים עולים.",
    why: "התו האחרון נכתב ראשון ל-str2[0], והתו הראשון נכתב אחרון.",
    trap: "עקוב גם אחרי length: הוא קטן בירידה וחוזר לגדול בעלייה."
  },
  {
    id: "R04",
    cat: "רקורסיה",
    difficulty: 2,
    skills: ["רקורסיה על ספרות", "בניית מספר"],
    origin: "homework",
    sourceLabel: "מבוסס HW1 - שאלה 3",
    sourceHref: "/assets/homework/hw1.pdf",
    prompt: "הפונקציה <code>changeEvenToZero</code> מחליפה כל ספרה זוגית ב-0. מה מוחזר עבור 1254?",
    opts: [{h: "1050", ltr: true}, {h: "1204", ltr: true}, {h: "150", ltr: true}, {h: "1054", ltr: true}],
    ans: 0,
    rule: "מעבדים ספרה אחרונה ומצרפים אותה לתוצאה הרקורסיבית כפול 10.",
    why: "1 נשארת, 2 הופכת ל-0, 5 נשארת ו-4 הופכת ל-0: 1050.",
    trap: "אפס באמצע המספר נשמר; רק אפסים מובילים נעלמים בייצוג מספרי."
  },
  {
    id: "R05",
    cat: "רקורסיה",
    difficulty: 4,
    skills: ["בניית נוסחת רקורסיה", "קומבינטוריקה"],
    origin: "homework",
    sourceLabel: "מבוסס HW1 - שאלה 4",
    sourceHref: "/assets/homework/hw1.pdf",
    prompt: "כמה דרכים יש לפזר 3 כדורים זהים ב-3 תאים, כאשר בכל תא מותר 0, 1 או 2 כדורים?",
    opts: [{h: "6", ltr: true}, {h: "7", ltr: true}, {h: "8", ltr: true}, {h: "10", ltr: true}],
    ans: 1,
    rule: "האפשרויות הן (1,1,1) ושש התמורות של (2,1,0).",
    why: "יש דרך אחת עם כדור בכל תא ועוד 3! דרכים למקם 2, 1 ו-0 - בסך הכול 7.",
    trap: "הכדורים זהים אבל התאים שונים; לכן סופרים התפלגויות בין תאים."
  },
  {
    id: "R06",
    cat: "רקורסיה",
    difficulty: 2,
    skills: ["תנאי עצירה", "צבירה רקורסיבית"],
    origin: "recent",
    sourceLabel: "מבוסס 2023 X - שאלה 4",
    sourceHref: "/assets/exams/2023-x-questionnaire.pdf",
    prompt: "מה צריכה להחזיר <code>sumPositiveInArray</code> עבור המערך הבא?",
    code: "int arr[] = {3, -2, 4, -5, 1};",
    kind: "code",
    opts: [{h: "1", ltr: true}, {h: "3", ltr: true}, {h: "8", ltr: true}, {h: "13", ltr: true}],
    ans: 2,
    rule: "כל קריאה מוסיפה את האיבר הנוכחי רק אם הוא חיובי.",
    why: "3 + 4 + 1 = 8. תנאי עצירה טבעי הוא size==0.",
    trap: "אל תוסיף ערך מוחלט של מספר שלילי; פשוט דלג עליו."
  },

  {
    id: "L01",
    cat: "רשימות מקושרות",
    difficulty: 3,
    skills: ["רשימה דו-כיוונית", "חיבור מצביעים"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 3",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "מעבירים מעגלית את שני האיברים האחרונים לתחילת הרשימה. מה מתקבל?",
    code: "5 <-> 2 <-> 1 <-> 8 <-> -3 <-> 22",
    kind: "code",
    opts: [
      {h: "-3, 22, 5, 2, 1, 8", ltr: true},
      {h: "22, -3, 5, 2, 1, 8", ltr: true},
      {h: "1, 8, -3, 22, 5, 2", ltr: true},
      {h: "8, -3, 22, 5, 2, 1", ltr: true}
    ],
    ans: 0,
    rule: "חותכים לפני הקבוצה האחרונה ומחברים אותה לפני הראש, בלי להפוך את סדרה.",
    why: "שני האיברים האחרונים הם -3 ו-22, והסדר הפנימי שלהם חייב להישמר.",
    trap: "העברה אינה היפוך; אל תחליף בין -3 ל-22."
  },
  {
    id: "L02",
    cat: "רשימות מקושרות",
    difficulty: 2,
    skills: ["סריקת רשימה", "מקרי קצה"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 Y - שאלה 3",
    sourceHref: "/assets/exams/2025-y-questionnaire.pdf",
    prompt: "איבר קסם שווה לסכום שכניו. אילו מיקומים הם איברי קסם? המיקום הראשון הוא 1.",
    code: "5 -> 6 -> 1 -> 8 -> 30 -> 22",
    kind: "code",
    opts: [{h: "2 ו-5", ltr: true}, {h: "1 ו-6", ltr: true}, {h: "3 ו-4", ltr: true}, {h: "רק 5", ltr: true}],
    ans: 0,
    rule: "בודקים רק איברים פנימיים: current == previous + next.",
    why: "6=5+1 וגם 30=8+22. הראשון והאחרון אינם מועמדים.",
    trap: "אל תבדוק את הראש או הזנב - חסר להם שכן אחד."
  },
  {
    id: "L03",
    cat: "רשימות מקושרות",
    difficulty: 2,
    skills: ["ספירת רצפים", "מצב קודם"],
    origin: "homework",
    sourceLabel: "מבוסס HW2 - שאלה 6",
    sourceHref: "/assets/homework/hw2.pdf",
    prompt: "כמה רצפים נפרדים של המספר 4 קיימים ברשימה?",
    code: "4 -> 22 -> 3 -> 4 -> 5 -> 6 -> 6 -> 3 -> 4 -> 4 -> 4",
    kind: "code",
    opts: [{h: "2", ltr: true}, {h: "3", ltr: true}, {h: "4", ltr: true}, {h: "5", ltr: true}],
    ans: 1,
    rule: "מגדילים מונה רק בתחילת רצף: key==4 והקודם אינו 4.",
    why: "הרצפים הם האיבר הראשון, ה-4 היחיד באמצע ושלושת ה-4 בסוף.",
    trap: "סופרים רצפים, לא את מספר האיברים שערכם 4."
  },
  {
    id: "L04",
    cat: "רשימות מקושרות",
    difficulty: 3,
    skills: ["רשימה דו-כיוונית", "מיזוג רשימות"],
    origin: "homework",
    sourceLabel: "מבוסס HW2 - שאלה 7",
    sourceHref: "/assets/homework/hw2.pdf",
    prompt: "מכניסים את list2 למרכז list1. מה הסדר הסופי?",
    code: "list1: 3, 6, 4, 88\nlist2: 10, 40, 30",
    kind: "code",
    opts: [
      {h: "3, 6, 10, 40, 30, 4, 88", ltr: true},
      {h: "3, 10, 40, 30, 6, 4, 88", ltr: true},
      {h: "10, 40, 30, 3, 6, 4, 88", ltr: true},
      {h: "3, 6, 30, 40, 10, 4, 88", ltr: true}
    ],
    ans: 0,
    rule: "ברשימה באורך זוגי חותכים אחרי n/2 איברים ושומרים את סדר list2.",
    why: "ל-list1 ארבעה איברים, ולכן נקודת החיבור היא אחרי 6.",
    trap: "אין למיין או להפוך את list2 בזמן החיבור."
  },
  {
    id: "L05",
    cat: "רשימות מקושרות",
    difficulty: 4,
    skills: ["מחיקה תוך כדי סריקה", "head דמה"],
    origin: "recent",
    sourceLabel: "מבוסס 2023 Y - שאלה 6",
    sourceHref: "/assets/exams/2023-y-questionnaire.pdf",
    prompt: "כאשר מוחקים כמה צמתים שליליים עוקבים מרשימה חד-כיוונית, מהו הכלל הבטוח ביותר?",
    opts: [
      {h: "להתקדם תמיד אחרי כל מחיקה"},
      {h: "לשמור מצביע לקודם, ואחרי מחיקה לבדוק שוב את next שלו"},
      {h: "למחוק רק את השלילי הראשון"},
      {h: "להחליף את כל הערכים השליליים באפס"}
    ],
    ans: 1,
    rule: "אחרי מחיקה current משתנה; previous נשאר במקום כדי לא לדלג על רצף.",
    why: "אם מתקדמים גם את previous אחרי מחיקה, הצומת הבא לא נבדק ועלולים לדלג על שליליים רצופים.",
    trap: "טעות נפוצה היא להזיז שני מצביעים אף שהרשימה התקצרה."
  },
  {
    id: "L06",
    cat: "רשימות מקושרות",
    difficulty: 3,
    skills: ["מעקב קוד", "גישה לצומת הבא"],
    origin: "recent",
    sourceLabel: "מבוסס 2024 Y - שאלה 3",
    sourceHref: "/assets/exams/2024-y-questionnaire.pdf",
    prompt: "מה יודפס עבור הרשימה הנתונה?",
    code: "void printGreater(NODE *p) {\n    while (p->next) {\n        if (p->key > p->next->key) printf(\"%d \", p->key);\n        p = p->next;\n    }\n}\n// 5 -> 2 -> 4 -> 1",
    kind: "code",
    opts: [{h: "5 4", ltr: true}, {h: "5 2 4", ltr: true}, {h: "2 1", ltr: true}, {h: "5 4 1", ltr: true}],
    ans: 0,
    rule: "מודפס צומת רק אם ערכו גדול מערך הצומת שאחריו.",
    why: "5>2 ולכן 5 מודפס; 2<4; 4>1 ולכן 4 מודפס. האחרון אינו נבדק כ-current מול צומת אחריו.",
    trap: "הקוד אינו מדפיס מקסימום כללי ואינו בודק את הצומת האחרון לבדו."
  },

  {
    id: "T01",
    cat: "עצים ו-BST",
    difficulty: 3,
    skills: ["שחזור BST", "PreOrder"],
    origin: "recent",
    sourceLabel: "מבוסס 2023 X - שאלה 5",
    sourceHref: "/assets/exams/2023-x-questionnaire.pdf",
    prompt: "BST שוחזר מסיור PreOrder הבא. מי האב של 140?",
    code: "100, 70, 60, 50, 80, 120, 110, 130, 140",
    kind: "code",
    opts: [{h: "100", ltr: true}, {h: "120", ltr: true}, {h: "130", ltr: true}, {h: "110", ltr: true}],
    ans: 2,
    rule: "ב-PreOrder של BST כל ערך מוכנס לפי גבולות תת-העץ.",
    why: "140 גדול מ-100, מ-120 ומ-130, ולכן הוא הבן הימני של 130.",
    trap: "אל תחבר לפי שכנות ברשימה בלבד; שמור את חוקי ה-BST."
  },
  {
    id: "T02",
    cat: "עצים ו-BST",
    difficulty: 3,
    skills: ["רקורסיה על עץ", "מקרי מבנה"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 4",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "בעץ גורמים, לכל צומת שאינו עלה יש שני בנים ומכפלתם שווה לאב. מה מחזירים לצומת בעל בן יחיד?",
    opts: [{h: "True אם הבן מחלק את האב"}, {h: "False תמיד"}, {h: "True תמיד"}, {h: "תלוי בגובה העץ"}],
    ans: 1,
    rule: "בן יחיד מפר את התנאי המבני עוד לפני בדיקת המכפלה.",
    why: "הגדרת העץ מחייבת 0 או 2 בנים; צומת עם בן יחיד פוסל את כל העץ.",
    trap: "אל תבדוק רק ערכים - יש גם אינווריאנט מבני."
  },
  {
    id: "T03",
    cat: "עצים ו-BST",
    difficulty: 3,
    skills: ["סיורי עץ", "סדר יורד ב-BST"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 Y - שאלה 4",
    sourceHref: "/assets/exams/2025-y-questionnaire.pdf",
    prompt: "איזה סדר סיור מדפיס את הערכים הזוגיים ב-BST בסדר יורד?",
    opts: [
      {h: "left, root, right", ltr: true},
      {h: "right, root, left", ltr: true},
      {h: "root, left, right", ltr: true},
      {h: "right, left, root", ltr: true}
    ],
    ans: 1,
    rule: "InOrder הפוך ב-BST מחזיר ערכים מהגדול לקטן.",
    why: "עוברים קודם בתת-העץ הימני, אחר כך בשורש ולבסוף בשמאלי; את ההדפסה מבצעים רק אם הערך זוגי.",
    trap: "סינון זוגיים אינו משנה את סדר הסיור."
  },
  {
    id: "T04",
    cat: "עצים ו-BST",
    difficulty: 3,
    skills: ["ספירת בן יחיד", "רקורסיה על עץ"],
    origin: "recent",
    sourceLabel: "מבוסס 2023 Y - שאלה 5",
    sourceHref: "/assets/exams/2023-y-questionnaire.pdf",
    prompt: "בעץ הבא, כמה צמתים הם 'בן יחיד' - כלומר לאביהם אין ילד נוסף?",
    code: "       10\n      /  \\\n     5    20\n      \\\n       7",
    kind: "code",
    opts: [{h: "0", ltr: true}, {h: "1", ltr: true}, {h: "2", ltr: true}, {h: "3", ltr: true}],
    ans: 1,
    rule: "סופרים ילד כאשר קיים בדיוק אחד מבין left ו-right של האב.",
    why: "רק 7 הוא בן יחיד, מפני של-5 אין בן שמאלי. 5 ו-20 הם שני ילדיו של 10.",
    trap: "סופרים את הילד, לא את ההורה שיש לו ילד יחיד."
  },
  {
    id: "T05",
    cat: "עצים ו-BST",
    difficulty: 2,
    skills: ["איבר k ב-BST", "InOrder"],
    origin: "homework",
    sourceLabel: "מבוסס HW4 - printKthElement",
    sourceHref: "/assets/homework/hw4.zip",
    prompt: "באיזה סיור נמצא את האיבר ה-k הקטן ביותר ב-BST?",
    opts: [{h: "PreOrder"}, {h: "InOrder"}, {h: "PostOrder"}, {h: "BFS בלבד"}],
    ans: 1,
    rule: "InOrder של BST מבקר במפתחות בסדר עולה.",
    why: "מקטינים מונה בכל ביקור InOrder; כאשר הוא מגיע לאפס נמצא האיבר ה-k.",
    trap: "PreOrder שומר מבנה, לא סדר מפתחות."
  },
  {
    id: "T06",
    cat: "עצים ו-BST",
    difficulty: 4,
    skills: ["PostOrder", "חישוב גודל תת-עץ"],
    origin: "homework",
    sourceLabel: "מבוסס HW4 - isSizeBalance",
    sourceHref: "/assets/homework/hw4.zip",
    prompt: "כיצד בודקים ב-Θ(n) שבכל צומת הפרש גדלי תתי-העצים הוא לכל היותר 1?",
    opts: [
      {h: "מחשבים גודל מחדש לכל צומת"},
      {h: "מחזירים ב-PostOrder את הגודל, או ‎-1 אם כבר נמצא חוסר איזון"},
      {h: "מסדרים את המפתחות ואז בודקים"},
      {h: "מבצעים BFS פעמיים"}
    ],
    ans: 1,
    rule: "כל קריאה מחזירה גם מידע להורה וגם מצב כשל, ולכן כל צומת מעובד פעם אחת.",
    why: "הערך ‎-1 משמש sentinel לחוסר איזון; אחרת מחזירים leftSize+rightSize+1.",
    trap: "קריאה נפרדת ל-size בכל צומת עלולה להפוך עץ שרשרת ל-Θ(n²)."
  },

  {
    id: "P01",
    cat: "ערימה",
    difficulty: 3,
    skills: ["DeleteMax", "SiftDown"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 6",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "מה המערך לאחר <code>DeleteMax</code> מהערימה?",
    code: "100, 98, 60, 58, 70, 20",
    kind: "code",
    opts: [
      {h: "98, 70, 60, 58, 20", ltr: true},
      {h: "98, 58, 60, 20, 70", ltr: true},
      {h: "70, 98, 60, 58, 20", ltr: true},
      {h: "98, 70, 20, 58, 60", ltr: true}
    ],
    ans: 0,
    rule: "מעלים את האחרון לשורש ומחליפים בכל שלב עם הבן הגדול.",
    why: "20 עולה לשורש, מתחלף עם 98 ואז עם 70; התוצאה היא 98,70,60,58,20.",
    trap: "ב-SiftDown בוחרים את הבן הגדול, לא בהכרח את השמאלי."
  },
  {
    id: "P02",
    cat: "ערימה",
    difficulty: 2,
    skills: ["ייצוג ערימה במערך", "אינדקסים"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 Y - שאלה 6",
    sourceHref: "/assets/exams/2025-y-questionnaire.pdf",
    prompt: "במערך ערימה שמתחיל באינדקס 0, מהם אינדקסי הילדים של צומת באינדקס i?",
    opts: [
      {h: "2i ו-2i+1", ltr: true},
      {h: "2i+1 ו-2i+2", ltr: true},
      {h: "i/2 ו-i/2+1", ltr: true},
      {h: "i+1 ו-i+2", ltr: true}
    ],
    ans: 1,
    rule: "בייצוג 0-based: left=2i+1, right=2i+2.",
    why: "הנוסחאות 2i ו-2i+1 שייכות לייצוג שמתחיל באינדקס 1.",
    trap: "זהה תחילה אם המערך מתחיל ב-0 או ב-1."
  },
  {
    id: "P03",
    cat: "ערימה",
    difficulty: 4,
    skills: ["Insert לערימה", "ביקורת פתרון"],
    origin: "recent",
    sourceLabel: "מבוסס 2024 X - שאלה 6",
    sourceHref: "/assets/exams/2024-x-questionnaire.pdf",
    prompt: "מוסיפים 99 לערימה הבאה. מה המערך הנכון?",
    code: "120, 85, 89, 35, 70, 0, 13, 12, 22, 1",
    kind: "code",
    opts: [
      {h: "120, 99, 89, 35, 85, 0, 13, 12, 22, 1, 70", ltr: true},
      {h: "120, 90, 89, 35, 85, 0, 13, 12, 22, 1, 70", ltr: true},
      {h: "120, 85, 99, 35, 70, 0, 13, 12, 22, 1, 89", ltr: true},
      {h: "99, 120, 89, 35, 85, 0, 13, 12, 22, 1, 70", ltr: true}
    ],
    ans: 0,
    rule: "99 נכנס בסוף, מתחלף עם 70 ואז עם 85, ונעצר מתחת ל-120.",
    why: "הפתרון הרשמי מציג במקום אחד 90 - זו שגיאת דפוס. סימולציה מלאה נותנת 99 באינדקס 2 בייצוג 1-based.",
    trap: "אל תעתיק תשובה רשמית בלי לבדוק את אינווריאנט הערימה."
  },
  {
    id: "P04",
    cat: "ערימה",
    difficulty: 3,
    skills: ["Insert לערימה", "SiftUp"],
    origin: "homework",
    sourceLabel: "מבוסס HW4 - שאלה 7",
    sourceHref: "/assets/homework/hw4.zip",
    prompt: "מה מתקבל לאחר הכנסת 18 לערימה הנתונה?",
    code: "23,20,15,19,17,5,14,16,10,16,15,1,4",
    kind: "code",
    opts: [
      {h: "23,20,18,19,17,5,15,16,10,16,15,1,4,14", ltr: true},
      {h: "23,20,15,19,18,5,14,16,10,16,15,1,4,17", ltr: true},
      {h: "18,23,20,19,17,15,14,16,10,16,15,1,4,5", ltr: true},
      {h: "23,20,18,19,17,5,14,16,10,16,15,1,4,15", ltr: true}
    ],
    ans: 0,
    rule: "18 נכנס בתא 14, עולה מעל 14 ומעל 15, ונעצר מתחת ל-23.",
    why: "מסלול העלייה הוא אינדקסים 14→7→3 בייצוג 1-based.",
    trap: "רק הצמתים במסלול אל השורש יכולים להשתנות."
  },
  {
    id: "P05",
    cat: "ערימה",
    difficulty: 4,
    skills: ["DeleteMax", "מעקב מערך"],
    origin: "homework",
    sourceLabel: "מבוסס HW4 - שאלה 7",
    sourceHref: "/assets/homework/hw4.zip",
    prompt: "מה מתקבל לאחר DeleteMax מהערימה המקורית?",
    code: "23,20,15,19,17,5,14,16,10,16,15,1,4",
    kind: "code",
    opts: [
      {h: "20,19,15,16,17,5,14,4,10,16,15,1", ltr: true},
      {h: "20,17,15,19,16,5,14,16,10,4,15,1", ltr: true},
      {h: "20,19,15,17,16,5,14,16,10,4,15,1", ltr: true},
      {h: "19,20,15,16,17,5,14,4,10,16,15,1", ltr: true}
    ],
    ans: 0,
    rule: "4 עולה לשורש ושוקע דרך 20, 19 ו-16.",
    why: "בכל שלב נבחר הבן הגדול יותר עד ש-4 מגיע לעלה.",
    trap: "השווה בין שני הילדים לפני כל החלפה."
  },
  {
    id: "P06",
    cat: "ערימה",
    difficulty: 3,
    skills: ["תכונת ערימה", "סריקת עלים"],
    origin: "generated",
    sourceLabel: "תרגול רמת מבחן - ערימה",
    prompt: "היכן יכול להימצא המינימום בערמת מקסימום בת n איברים?",
    opts: [
      {h: "רק בשורש"},
      {h: "רק בילד השמאלי של השורש"},
      {h: "בכל אחד מהעלים"},
      {h: "רק באינדקס n/2"}
    ],
    ans: 2,
    rule: "ערמת מקסימום מסדרת רק אב מול ילד; המינימום חייב להיות עלה אך אין עליו סדר נוסף.",
    why: "כדי למצוא אותו צריך לסרוק את כל העלים, ולכן הזמן הוא Θ(n).",
    trap: "הסימטריה ל-FindMax מטעה: המקסימום בשורש, אך המינימום אינו במיקום יחיד."
  },

  {
    id: "HS01",
    cat: "ערבול",
    difficulty: 4,
    skills: ["ערבול כפול", "זרות"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 7",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "לטבלה בגודל 12 הוצעו פונקציות הצעד הבאות. איזו מבטיחה צעד חוקי לכל x?",
    opts: [
      {h: "x % 13", ltr: true},
      {h: "x % 5 + 1", ltr: true},
      {h: "x % 7", ltr: true},
      {h: "אף אחת מהן"}
    ],
    ans: 3,
    rule: "הצעד חייב להיות שונה מאפס וזר ל-12 לכל מפתח.",
    why: "בכל אחת מהפונקציות קיימים ערכי x שמייצרים 0 או צעד עם gcd גדול מ-1 מול 12.",
    trap: "בדיקה על דוגמה אחת אינה מספיקה; הדרישה היא לכל x."
  },
  {
    id: "HS02",
    cat: "ערבול",
    difficulty: 4,
    skills: ["מעקב התנגשויות", "ערבול כפול"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 7",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "בטבלה שבשאלה הרשמית, כמה התנגשויות יש בהכנסת 47 ולאיזה אינדקס הוא נכנס?",
    code: "N=11, h(x)=x%11, step(x)=(x%3)+1\noccupied: 1:12, 2:35, 3:14, 4:15, 6:17, 7:23, 9:64",
    kind: "code",
    opts: [
      {h: "6 התנגשויות, אינדקס 10"},
      {h: "5 התנגשויות, אינדקס 8"},
      {h: "3 התנגשויות, אינדקס 0"},
      {h: "7 התנגשויות, אינדקס 5"}
    ],
    ans: 0,
    rule: "ל-47 מתקבלים h=3 ו-step=3; ממשיכים 3,6,9,1,4,7,10.",
    why: "ששת התאים הראשונים במסלול תפוסים והתא 10 פנוי.",
    trap: "ספור התנגשויות בלבד, לא את מספר הבדיקות הכולל כולל התא הפנוי."
  },
  {
    id: "HS03",
    cat: "ערבול",
    difficulty: 3,
    skills: ["מחיקה במיעון פתוח", "חיפוש"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 7",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "בחיפוש במיעון פתוח, מה עושים כשפוגשים תא שסומן 'נמחק'?",
    opts: [
      {h: "עוצרים ומחזירים לא נמצא"},
      {h: "ממשיכים לפי רצף הבדיקות"},
      {h: "מכניסים מיד את המפתח המבוקש"},
      {h: "מתחילים מחדש מאינדקס 0"}
    ],
    ans: 1,
    rule: "תא מחוק אינו קוטע שרשרת בדיקות; רק תא שמעולם לא היה תפוס מאפשר לעצור.",
    why: "מפתח שנוסף לפני המחיקה עשוי להימצא בהמשך אותו רצף.",
    trap: "empty ו-deleted הם שני מצבים לוגיים שונים."
  },
  {
    id: "HS04",
    cat: "ערבול",
    difficulty: 2,
    skills: ["מקדם עומס", "הסתברות התנגשות"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 Y - שאלה 7",
    sourceHref: "/assets/exams/2025-y-questionnaire.pdf",
    prompt: "בטבלה בגודל 20 עם פיזור אחיד, אחרי כמה תאים תפוסים ההסתברות שמפתח חדש יתנגש היא לפחות 0.5?",
    opts: [{h: "5", ltr: true}, {h: "10", ltr: true}, {h: "11", ltr: true}, {h: "20", ltr: true}],
    ans: 1,
    rule: "הסתברות ההתנגשות היא מקדם העומס α = occupied/20.",
    why: "כאשר 10 תאים תפוסים, α=10/20=0.5. כדי להיות גדולה ממש מ-0.5 צריך 11.",
    trap: "שים לב להבדל בין 'לפחות' לבין 'גדולה מ-'."
  },
  {
    id: "HS05",
    cat: "ערבול",
    difficulty: 3,
    skills: ["ערבול כפול", "רצף בדיקות"],
    origin: "homework",
    sourceLabel: "מבוסס HW4 - שאלה 8",
    sourceHref: "/assets/homework/hw4.zip",
    prompt: "לאיזה אינדקס נכנס 100 בשיטת הערבול הכפול המתוארת?",
    code: "N=11, h(k)=k%11, step(k)=k%5+1\nלפני 100: אינדקסים 1 ו-2 תפוסים, אינדקס 3 פנוי",
    kind: "code",
    opts: [{h: "1", ltr: true}, {h: "2", ltr: true}, {h: "3", ltr: true}, {h: "10", ltr: true}],
    ans: 2,
    rule: "ל-100: h=1 ו-step=1, ולכן בודקים 1, 2, 3.",
    why: "1 ו-2 תפוסים; 3 הוא התא הפנוי הראשון במסלול.",
    trap: "הצעד מחושב פעם אחת מהמפתח ואינו גדל בכל התנגשות."
  },
  {
    id: "HS06",
    cat: "ערבול",
    difficulty: 3,
    skills: ["שרשור", "מיעון פתוח"],
    origin: "homework",
    sourceLabel: "מבוסס HW4 - שאלה 8",
    sourceHref: "/assets/homework/hw4.zip",
    prompt: "איזו קביעה נכונה לגבי מחיקה בטבלת ערבול?",
    opts: [
      {h: "בשרשור ובמיעון פתוח פשוט מוחקים את התא"},
      {h: "בשרשור מוחקים מהרשימה; במיעון פתוח שומרים סימון deleted"},
      {h: "אי אפשר למחוק בשרשור"},
      {h: "במיעון פתוח תמיד מבצעים rehash מלא"}
    ],
    ans: 1,
    rule: "מיעון פתוח חייב לשמר את רצף החיפוש; שרשור הוא רשימה רגילה.",
    why: "מחיקה לתא empty במיעון פתוח עלולה לגרום לחיפוש לעצור מוקדם.",
    trap: "אל תיישם את אותו מנגנון מחיקה בשתי שיטות ההתנגשות."
  },

  {
    id: "SQ01",
    cat: "מחסנית ותור",
    difficulty: 3,
    skills: ["מעקב תור", "חזרה מרקורסיה"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 5",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "הפונקציה מוציאה כל איבר, קוראת רקורסיבית, מכניסה אותו בחזרה ומחזירה מינימום. מה קורה לתור?",
    opts: [
      {h: "הוא נשאר ללא שינוי"},
      {h: "הוא מתרוקן"},
      {h: "סדרו מתהפך"},
      {h: "רק המינימום נמחק"}
    ],
    ans: 2,
    rule: "ההכנסה בחזרה מתבצעת בדרך חזרה, ולכן האיבר הראשון שהוצא מוכנס אחרון.",
    why: "הפונקציה מחזירה את המינימום וגם הופכת את סדר התור.",
    trap: "תשובה נכונה על הערך המוחזר אינה מספיקה - בדוק גם תופעת לוואי."
  },
  {
    id: "SQ02",
    cat: "מחסנית ותור",
    difficulty: 3,
    skills: ["רקורסיה על מחסנית", "שחזור מבנה"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 Y - שאלה 5",
    sourceHref: "/assets/exams/2025-y-questionnaire.pdf",
    prompt: "כיצד מכניסים val לתחתית מחסנית בלי מבנה עזר?",
    opts: [
      {h: "דוחפים val מיד"},
      {h: "מוציאים רקורסיבית עד ריק, דוחפים val ואז מחזירים את האיברים"},
      {h: "ממיינים את המחסנית"},
      {h: "משתמשים בכתובת של top כמערך"}
    ],
    ans: 1,
    rule: "הירידה מפנה את המחסנית; החזרה משחזרת מעל הערך החדש.",
    why: "כאשר המחסנית ריקה דוחפים את val, ואז כל קריאה דוחפת בחזרה את האיבר ששמרה.",
    trap: "אם לא דוחפים את האיברים בחזרה, המחסנית נהרסת."
  },
  {
    id: "SQ03",
    cat: "מחסנית ותור",
    difficulty: 3,
    skills: ["Sentinel", "שמירת תור"],
    origin: "recent",
    sourceLabel: "מבוסס 2023 X - שאלה 2",
    sourceHref: "/assets/exams/2023-x-questionnaire.pdf",
    prompt: "מדוע מותר להשתמש ב-‎-1 כ-sentinel בפתרון הרשמי של הדפסת הזוגיים בתור?",
    opts: [
      {h: "כי ‎-1 הוא זוגי"},
      {h: "כי נתון שכל האיברים בתור חיוביים"},
      {h: "כי תור מתעלם ממספרים שליליים"},
      {h: "כי ‎-1 תמיד נמצא בראש"}
    ],
    ans: 1,
    rule: "Sentinel חייב להיות ערך שאינו יכול להופיע בנתונים החוקיים.",
    why: "השאלה מבטיחה מספרים חיוביים בלבד, ולכן ‎-1 מסמן בבטחה סיבוב מלא.",
    trap: "ללא ההבטחה על תחום הערכים, sentinel כזה אינו פתרון כללי."
  },
  {
    id: "SQ04",
    cat: "מחסנית ותור",
    difficulty: 4,
    skills: ["תיקון רקורסיה", "שימור סדר"],
    origin: "homework",
    sourceLabel: "מבוסס HW3 - even",
    sourceHref: "/assets/homework/hw3-exe.c",
    prompt: "במימוש שמבצע <code>dequeue</code>, קורא רקורסיבית ורק אז <code>enqueue</code>, מהי הבעיה?",
    opts: [
      {h: "הוא מדפיס מספרים אי-זוגיים"},
      {h: "הוא הופך את סדר התור"},
      {h: "הוא תמיד נכנס ללולאה אינסופית"},
      {h: "הוא משתמש בזיכרון O(1)"}
    ],
    ans: 1,
    rule: "החזרה מהרקורסיה מכניסה את האיברים בסדר הפוך לסדר ההוצאה.",
    why: "כדי לשמר תור צריך לבצע סיבוב קדימה עם dequeue+enqueue, או מעבר תיקון נוסף.",
    trap: "פלט נכון אינו הוכחה שהמבנה נשאר ללא שינוי."
  },
  {
    id: "SQ05",
    cat: "מחסנית ותור",
    difficulty: 3,
    skills: ["תור משתי מחסניות", "ניתוח משוערך"],
    origin: "homework",
    sourceLabel: "מבוסס HW3 - תור משתי מחסניות",
    sourceHref: "/assets/homework/hw3.pdf",
    prompt: "בתור הממומש בעזרת שתי מחסניות, מה נכון לגבי Dequeue?",
    opts: [
      {h: "מקרה גרוע O(1), משוערך O(n)"},
      {h: "מקרה גרוע O(n), משוערך O(1)"},
      {h: "תמיד O(log n)"},
      {h: "תמיד O(n)"}
    ],
    ans: 1,
    rule: "העברה מלאה עשויה לעלות O(n), אך כל איבר עובר בין המחסניות פעם אחת.",
    why: "לכן פעולה בודדת יכולה להיות יקרה, בעוד שסדרת פעולות היא O(1) משוערך לפעולה.",
    trap: "אל תבלבל בין worst-case של פעולה אחת לבין amortized."
  },
  {
    id: "SQ06",
    cat: "מחסנית ותור",
    difficulty: 2,
    skills: ["מעקב מחסנית", "תופעת לוואי"],
    origin: "recent",
    sourceLabel: "מבוסס 2023 Y - שאלה 2",
    sourceHref: "/assets/exams/2023-y-questionnaire.pdf",
    prompt: "פונקציה רקורסיבית מוציאה את כל איברי המחסנית כדי למצוא מקסימום, ואינה דוחפת אותם בחזרה. מה מצב המחסנית בסיום?",
    opts: [{h: "ללא שינוי"}, {h: "ממוינת"}, {h: "ריקה"}, {h: "מכילה רק את המקסימום"}],
    ans: 2,
    rule: "כל S_pop משנה את המחסנית; בלי S_push בדרך חזרה אין שחזור.",
    why: "השאלה המקורית מתירה לשנות את המחסנית, ולכן פתרון הרסני הוא חוקי.",
    trap: "בדוק תמיד אם השאלה דורשת לשמר את המבנה."
  },

  {
    id: "S01",
    cat: "מיונים",
    difficulty: 3,
    skills: ["בחירת מיון", "מקרה מיטבי"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 X - שאלה 8",
    sourceHref: "/assets/exams/2025-x-questionnaire.pdf",
    prompt: "במערך שכבר ממוין, מי מבצע הכי מעט השוואות מבין המימושים הסטנדרטיים בקורס?",
    opts: [{h: "Insertion Sort"}, {h: "Selection Sort"}, {h: "Quick Sort עם pivot אחרון"}, {h: "Merge Sort"}],
    ans: 0,
    rule: "Insertion נעצר אחרי השוואה אחת לכל איבר במערך ממוין.",
    why: "Insertion מבצע n-1 השוואות; Selection תמיד ריבועי, Quick עם pivot אחרון מגיע למקרה הגרוע, ו-Merge נשאר Θ(n log n).",
    trap: "מערך שנראה 'קל' הוא דווקא מקרה גרוע ל-Quick Sort עם pivot אחרון."
  },
  {
    id: "S02",
    cat: "מיונים",
    difficulty: 2,
    skills: ["יציבות מיון", "השוואת אלגוריתמים"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 Y - שאלה 8",
    sourceHref: "/assets/exams/2025-y-questionnaire.pdf",
    prompt: "אילו מיונים יציבים במימושים הסטנדרטיים?",
    opts: [
      {h: "Bubble ו-Insertion"},
      {h: "Selection ו-Quick"},
      {h: "Quick ו-Heap"},
      {h: "Selection בלבד"}
    ],
    ans: 0,
    rule: "מיון יציב אינו מחליף את הסדר היחסי של איברים שווים.",
    why: "Bubble ו-Insertion מחליפים רק כאשר הסדר שגוי ממש; Selection ו-Quick עלולים להעביר שווים זה מעל זה.",
    trap: "סיבוכיות ויציבות הן תכונות שונות."
  },
  {
    id: "S03",
    cat: "מיונים",
    difficulty: 4,
    skills: ["Partition", "מעקב Quick Sort"],
    origin: "recent",
    sourceLabel: "מבוסס 2025 Y - שאלה 8",
    sourceHref: "/assets/exams/2025-y-questionnaire.pdf",
    prompt: "לאחר partition אחד עם pivot אחרון, המערך הוא הבא. באיזה אינדקס 0-based נמצא ה-pivot שהגיע למקומו?",
    code: "2, -9, 2, 3, 4, 13, 4, 8, 7",
    kind: "code",
    opts: [{h: "3", ltr: true}, {h: "4", ltr: true}, {h: "5", ltr: true}, {h: "8", ltr: true}],
    ans: 1,
    rule: "ה-pivot המקורי הוא 4; משמאלו ארבעה איברים שאינם גדולים ממנו.",
    why: "ה-4 באינדקס 4 הוא ה-pivot שנקבע. ה-4 הנוסף מימינו אינו מפר את חלוקת המימוש שנלמד.",
    trap: "כשיש ערכים כפולים, זהה את מיקום ה-pivot לפי פעולת partition ולא רק לפי הערך."
  },
  {
    id: "S04",
    cat: "מיונים",
    difficulty: 3,
    skills: ["Radix Sort", "יציבות"],
    origin: "recent",
    sourceLabel: "מבוסס 2023 Y - שאלה 3",
    sourceHref: "/assets/exams/2023-y-questionnaire.pdf",
    prompt: "מהו הסדר הסופי לאחר Radix Sort על המספרים?",
    code: "501, 103, 1103, 1501, 189, 93, 1, 509",
    kind: "code",
    opts: [
      {h: "1, 93, 103, 189, 501, 509, 1103, 1501", ltr: true},
      {h: "1, 103, 93, 189, 501, 509, 1103, 1501", ltr: true},
      {h: "93, 1, 103, 189, 501, 509, 1103, 1501", ltr: true},
      {h: "1, 93, 103, 189, 1103, 1501, 501, 509", ltr: true}
    ],
    ans: 0,
    rule: "ממיינים ספרה-ספרה מהפחות משמעותית בעזרת מיון יציב.",
    why: "לאחר אלפים מתקבל הסדר המספרי העולה המלא.",
    trap: "אם מיון הספרה אינו יציב, השלבים הקודמים נהרסים."
  },
  {
    id: "S05",
    cat: "מיונים",
    difficulty: 3,
    skills: ["Counting Sort", "יציבות"],
    origin: "recent",
    sourceLabel: "מבוסס 2024 X - שאלה 8",
    sourceHref: "/assets/exams/2024-x-questionnaire.pdf",
    prompt: "כדי לשמור על יציבות ב-Counting Sort בעזרת אינדקסי התחלה, באיזה סדר עוברים על מערך המקור?",
    opts: [{h: "משמאל לימין"}, {h: "מימין לשמאל בלבד"}, {h: "בסדר אקראי"}, {h: "מהאמצע החוצה"}],
    ans: 0,
    rule: "עם מוני התחלה, האיבר הראשון מכל ערך נכתב ראשון ומקדמים את המונה.",
    why: "כך איברים בעלי מפתח זהה נשמרים באותו סדר יחסי. בגרסה עם מוני סוף מקובל לעבור מימין לשמאל.",
    trap: "כיוון המעבר תלוי אם המונים מצביעים להתחלה או לסוף."
  },
  {
    id: "S06",
    cat: "מיונים",
    difficulty: 3,
    skills: ["חיפוש בינארי", "Lower Bound"],
    origin: "homework",
    sourceLabel: "מבוסס HW2 - שאלה 3",
    sourceHref: "/assets/homework/hw2.pdf",
    prompt: "מערך ממוין ונתון x. מה הדרך היעילה ביותר לספור כמה איברים קטנים מ-x?",
    opts: [
      {h: "סריקה מלאה O(n)"},
      {h: "Lower Bound בינארי ב-O(log n)"},
      {h: "מיון מחדש ב-O(n log n)"},
      {h: "טבלת ערבול ב-O(1) תמיד"}
    ],
    ans: 1,
    rule: "האינדקס הראשון שערכו לפחות x שווה למספר האיברים הקטנים מ-x.",
    why: "מחפשים בינארית את גבול המעבר מ-<x ל-≥x.",
    trap: "חיפוש של x עצמו אינו מספיק כשיש כפילויות או כש-x אינו קיים."
  },

  {
    id: "C01",
    cat: "C ומצביעים",
    difficulty: 3,
    skills: ["הקצאת זיכרון", "sizeof"],
    origin: "generated",
    sourceLabel: "תרגול רמת מבחן - קוד C",
    prompt: "איזו הקצאה נכונה עבור מצביע <code>NODE *p</code> לצומת חדש?",
    opts: [
      {h: "p = malloc(sizeof(NODE*));", ltr: true},
      {h: "p = malloc(sizeof(*p));", ltr: true},
      {h: "p = malloc(sizeof(p->next));", ltr: true},
      {h: "p = malloc(1);", ltr: true}
    ],
    ans: 1,
    rule: "מקצים את גודל האובייקט שאליו המצביע מצביע, לא את גודל המצביע.",
    why: "sizeof(*p) נשאר נכון גם אם שם הטיפוס משתנה ומונע under-allocation.",
    trap: "sizeof(pointer) הוא בדרך כלל 8 בתים ואינו גודל ה-struct."
  },
  {
    id: "C02",
    cat: "C ומצביעים",
    difficulty: 2,
    skills: ["main תקני", "ערך חזרה"],
    origin: "homework",
    sourceLabel: "מבוסס ביקורת HW4",
    sourceHref: "/assets/homework/hw4.zip",
    prompt: "מהי חתימת main התקנית ב-C ללא ארגומנטים?",
    opts: [
      {h: "void main()", ltr: true},
      {h: "int main(void)", ltr: true},
      {h: "main()", ltr: true},
      {h: "char main(NULL)", ltr: true}
    ],
    ans: 1,
    rule: "main מחזירה int; void מציין במפורש שאין פרמטרים.",
    why: "בסיום אפשר לכתוב return 0; כדי לדווח הצלחה לסביבה.",
    trap: "void main נפוץ בדוגמאות ישנות אך אינו C תקני."
  },
  {
    id: "C03",
    cat: "C ומצביעים",
    difficulty: 3,
    skills: ["מחרוזות", "תו סיום"],
    origin: "homework",
    sourceLabel: "מבוסס HW1 - swapString",
    sourceHref: "/assets/homework/hw1.pdf",
    prompt: "לאחר כתיבת מחרוזת הפוכה לתוך str2, מה חייב להיות אחרי התו האחרון?",
    opts: [{h: "'\\0'", ltr: true}, {h: "'0'", ltr: true}, {h: "NULL pointer", ltr: true}, {h: "'\\n'", ltr: true}],
    ans: 0,
    rule: "מחרוזת C חייבת להסתיים בתו NUL שערכו 0.",
    why: "בלי '\\0', פונקציות כמו printf(\"%s\") ימשיכו לקרוא מעבר למערך.",
    trap: "התו '0' הוא ספרה שערכה ASCII 48 ואינו מסיים מחרוזת."
  },
  {
    id: "C04",
    cat: "C ומצביעים",
    difficulty: 3,
    skills: ["מצביע כפול", "עדכון head"],
    origin: "generated",
    sourceLabel: "תרגול רמת מבחן - רשימות C",
    prompt: "פונקציה צריכה לשנות אצל הקורא את המצביע <code>head</code>. איזו חתימה מתאימה?",
    opts: [
      {h: "void change(NODE *head)", ltr: true},
      {h: "void change(NODE **head)", ltr: true},
      {h: "void change(NODE head)", ltr: true},
      {h: "void change(int *head)", ltr: true}
    ],
    ans: 1,
    rule: "כדי לשנות משתנה מצביע אצל הקורא מעבירים את כתובתו - מצביע למצביע.",
    why: "NODE * מועבר בערך; שינוי העותק המקומי לא משנה את head של הקורא.",
    trap: "שינוי head->next אפשרי עם NODE*, אך החלפת head עצמו דורשת NODE**."
  },
  {
    id: "C05",
    cat: "C ומצביעים",
    difficulty: 4,
    skills: ["malloc", "בדיקות NULL"],
    origin: "generated",
    sourceLabel: "תרגול רמת מבחן - ביקורת קוד",
    prompt: "מהו הסדר הבטוח ביותר בפונקציה שמשכפלת צומת שהתקבל ב-p?",
    opts: [
      {h: "malloc, כתיבה, ורק אז בדיקת p"},
      {h: "בדיקת p, הקצאה, בדיקת תוצאת ההקצאה, אתחול כל השדות"},
      {h: "free(p), ואז malloc"},
      {h: "בדיקת next בלבד"}
    ],
    ans: 1,
    rule: "בודקים קלט לפני הקצאה ובודקים הקצאה לפני dereference.",
    why: "כך נמנעים מדליפה ב-p==NULL ומקריסה כש-malloc נכשל.",
    trap: "גם אם key הועתק, next לא מאותחל הוא מצביע זבל."
  },
  {
    id: "C06",
    cat: "C ומצביעים",
    difficulty: 3,
    skills: ["free", "Use After Free"],
    origin: "generated",
    sourceLabel: "תרגול רמת מבחן - בטיחות זיכרון",
    prompt: "מה הבעיה בקוד הבא?",
    code: "free(p);\np = p->next;",
    kind: "code",
    opts: [
      {h: "אין בעיה"},
      {h: "קריאה מ-p אחרי free היא התנהגות לא מוגדרת"},
      {h: "צריך לבצע free פעמיים"},
      {h: "p->next תמיד NULL"}
    ],
    ans: 1,
    rule: "שומרים את next במשתנה זמני לפני free.",
    why: "אחרי free אסור לקרוא שום שדה דרך p. הסדר הנכון: next=p->next; free(p); p=next.",
    trap: "השמה חדשה ל-p אינה מתקנת את הקריאה שכבר נעשתה מזיכרון משוחרר."
  }
];

/* Make the provenance unambiguous before the bank is rendered.
 * X/Y are the archive names; the familiar Hebrew sitting is shown as well.
 */
CODEX_ADAPTIVE_QUESTIONS.forEach(function (question) {
  var recentMatch;
  var homeworkMatch;
  if (question.origin === "recent") {
    recentMatch = String(question.sourceLabel || "").match(
      /^מבוסס (\d{4}) ([XY]) - שאלה (.+)$/
    );
    if (recentMatch) {
      question.sourceLabel =
        "מבחן " + recentMatch[1] + " " + recentMatch[2] +
        " (מועד " + (recentMatch[2] === "X" ? "א׳" : "ב׳") + ")" +
        " · שאלה " + recentMatch[3] + " · נוסח מותאם";
    } else {
      question.sourceLabel = "מבחן 2023–2025 · נוסח מותאם";
    }
  } else if (question.origin === "homework") {
    homeworkMatch = String(question.sourceLabel || "").match(/^מבוסס (HW\d)(?: - )?(.*)$/);
    if (homeworkMatch) {
      question.sourceLabel = "מטלה " + homeworkMatch[1] +
        (homeworkMatch[2] ? " · " + homeworkMatch[2] : "") + " · לא ממבחן";
    } else {
      homeworkMatch = String(question.sourceLabel || "").match(/(HW\d)/);
      question.sourceLabel = homeworkMatch
        ? "מטלה " + homeworkMatch[1] + " · ביקורת קוד · לא ממבחן"
        : "מטלת קורס · לא ממבחן";
    }
  } else {
    question.sourceLabel = "שאלת Codex · לא ממבחן · " +
      String(question.sourceLabel || "תרגול ברמת מבחן")
        .replace(/^תרגול רמת מבחן - /, "")
        .replace(/^מבוסס /, "");
  }
});
