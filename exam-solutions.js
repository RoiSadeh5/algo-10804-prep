/* Detailed, tap-through solutions for every exam-sourced quiz question. */
var CODEX_EXAM_SOLUTIONS = {
  A10: {
    title: "ספירת איטרציות כשהצעד תלוי ב-n",
    formulas: [
      { label: "מספר חזרות", value: "iterations = distance / step" },
      { label: "הצבה", value: "(n/2) / (n/1000) = 500" },
      { label: "סיבוכיות", value: "T(n) = Θ(500) = Θ(1)" }
    ],
    steps: [
      {
        title: "זהה התחלה, סוף וצעד",
        text: "הלולאה מתחילה ב-n/2, נעצרת ב-0 ומחסירה בכל פעם n/1000. גם המרחק וגם הצעד גדלים ביחס ישר ל-n.",
        formula: "start = n/2, end = 0, step = n/1000"
      },
      {
        title: "חלק מרחק בגודל הצעד",
        text: "מספר החזרות אינו n/2, כי בכל חזרה לא מחסירים 1. מחלקים את המרחק הכולל בגודל הקפיצה.",
        formula: "k = (n/2 − 0) / (n/1000)"
      },
      {
        title: "צמצם את n",
        text: "הגורם n מופיע גם במונה וגם במכנה ולכן מצטמצם. נשאר מספר קבוע של כ-500 חזרות.",
        formula: "k = (n/2) · (1000/n) = 500"
      },
      {
        title: "תרגם לסיבוכיות",
        text: "500 אינו תלוי בגודל הקלט. בהנחה ש-n חיובי ושאין בעיית דיוק נקודה צפה שמשנה את הספירה המדויקת, הסיבוכיות קבועה.",
        formula: "T(n) = Θ(1)"
      }
    ]
  },

  R01: {
    title: "מעקב רקורסיבי והמרה לבינארי",
    formulas: [
      { label: "פירוק מספר", value: "n = 2⌊n/2⌋ + (n mod 2)" },
      { label: "הביט הנוכחי", value: "bit = n mod 2" },
      { label: "עומק", value: "depth = ⌊log₂n⌋ + 1" }
    ],
    steps: [
      {
        title: "מצא מתי מתבצעת ההדפסה",
        text: "הקריאה הרקורסיבית מופיעה לפני הפקודה שמדפיסה. לכן קודם יורדים עד המקרה הקטן ביותר ורק אחר כך מדפיסים בדרך חזרה.",
        formula: "rec(n/2) → print(n mod 2)"
      },
      {
        title: "בנה את שרשרת הקריאות",
        text: "בחלוקה של מספרים שלמים משמיטים את השבר. ממשיכים כל עוד הערך גדול מ-1.",
        formula: "13 → 6 → 3 → 1"
      },
      {
        title: "חשב שאריות בדרך חזרה",
        text: "מתחילים מהקריאה העמוקה ביותר. לכל ערך מחשבים שארית בחלוקה ל-2.",
        formula: "1 mod 2 = 1, 3 mod 2 = 1, 6 mod 2 = 0, 13 mod 2 = 1"
      },
      {
        title: "חבר לפי סדר ההדפסה",
        text: "השאריות מודפסות מהקריאה של 1 ועד הקריאה של 13. זהו בדיוק הייצוג הבינארי מהביט המשמעותי לפחות משמעותי.",
        formula: "(13)₁₀ = (1101)₂"
      }
    ]
  },

  R02: {
    title: "זיהוי Bubble Sort רקורסיבי",
    formulas: [
      { label: "נוסחת זמן", value: "T(n) = T(n−1) + Θ(n)" },
      { label: "סכום עבודה", value: "Σ(k=1…n−1) k = n(n−1)/2" },
      { label: "תוצאה", value: "T(n) = Θ(n²)" }
    ],
    steps: [
      {
        title: "נתח מעבר יחיד",
        text: "הלולאה משווה כל זוג שכנים ומחליפה כאשר הם בסדר שגוי. בתום מעבר, האיבר הגדול בתחום מגיע לקצה הימני.",
        formula: "comparisons in first pass = n−1"
      },
      {
        title: "זהה את האלגוריתם",
        text: "השוואת שכנים והצפת הגדול ימינה היא החתימה של מיון בועות. זו אינה הכנסה, כי אין שמירת מפתח והזזה של תחום ממוין.",
        formula: "adjacent swap: s[i] > s[i+1]"
      },
      {
        title: "עקוב אחרי הרקורסיה",
        text: "לאחר שהאיבר הגדול התמקם, הקריאה הבאה מטפלת רק ב-n−1 האיברים הראשונים.",
        formula: "T(n) = (n−1) + T(n−1)"
      },
      {
        title: "פתח את הסכום",
        text: "מספר ההשוואות הוא סכום סדרה חשבונית. האיבר המוביל הוא n²/2 ולכן הסיבוכיות ריבועית.",
        formula: "(n−1)+(n−2)+…+1 = n(n−1)/2 = Θ(n²)"
      }
    ]
  },

  R03: {
    title: "היפוך מחרוזת בדרך חזרה מרקורסיה",
    formulas: [
      { label: "אינדקס יעד", value: "destination = length_at_call − 1" },
      { label: "זמן", value: "T(n) = T(n−1) + Θ(1) = Θ(n)" },
      { label: "מחסנית קריאות", value: "S(n) = Θ(n)" }
    ],
    steps: [
      {
        title: "שמור את התו לפני הירידה",
        text: "בכל קריאה נשמר התו הנוכחי במשתנה מקומי. אחר כך עוברים לתו הבא ומקטינים את length.",
        formula: "(c,length): (a,7),(b,6),…,(g,1)"
      },
      {
        title: "הגע לתנאי העצירה",
        text: "כאשר str1 מצביע על תו הסיום, הפונקציה חוזרת בלי לכתוב דבר. עכשיו מתחילה העלייה ברקורסיה.",
        formula: "str1[0] = '\\0' ⇒ return"
      },
      {
        title: "כתוב לפי ה-length המקומי",
        text: "הקריאה של g חוזרת ראשונה עם length=1 ולכן כותבת לאינדקס 0. אחריה f לאינדקס 1 וכן הלאה.",
        formula: "g→str2[0], f→str2[1], …, a→str2[6]"
      },
      {
        title: "קרא את התוצאה",
        text: "התו האחרון של המקור נמצא בתחילת היעד והתו הראשון בסופו. לכן המחרוזת התהפכה.",
        formula: "str2 = \"gfedcba\""
      }
    ]
  },

  R06: {
    title: "סכום חיוביים במערך",
    formulas: [
      { label: "תרומה של איבר", value: "contribution(x) = x if x>0, otherwise 0" },
      { label: "נוסחה רקורסיבית", value: "S(k) = contribution(A[k]) + S(k+1)" },
      { label: "תנאי עצירה", value: "S(n) = 0" }
    ],
    steps: [
      {
        title: "סמן את תנאי הסינון",
        text: "הפונקציה אינה מחברת ערכים מוחלטים. מספר שלילי תורם אפס לסכום.",
        formula: "x>0 ? x : 0"
      },
      {
        title: "בדוק כל איבר",
        text: "עוברים על המערך לפי הסדר ומסמנים את התרומות.",
        formula: "3→3, −2→0, 4→4, −5→0, 1→1"
      },
      {
        title: "חבר רק את התרומות",
        text: "האיברים השליליים נשארים מחוץ לסכום; הם אינם הופכים לחיוביים.",
        formula: "3 + 0 + 4 + 0 + 1 = 8"
      },
      {
        title: "בדוק את המקרה הריק",
        text: "כאשר לא נשארו איברים, הערך הנייטרלי של חיבור הוא אפס. כך הרקורסיה מסתיימת באופן תקין.",
        formula: "size = 0 ⇒ return 0"
      }
    ]
  },

  L01: {
    title: "העברה מעגלית ברשימה דו-כיוונית",
    formulas: [
      { label: "נקודת חיתוך", value: "cut position = length − k" },
      { label: "סדר חדש", value: "new list = suffix(k) ⧺ prefix(n−k)" },
      { label: "עלות", value: "T(n) = Θ(n) without a direct cut pointer" }
    ],
    steps: [
      {
        title: "זהה את הקבוצה שמועברת",
        text: "עבור k=2 לוקחים את שני הצמתים האחרונים כיחידה אחת. אסור להפוך את סדרם הפנימי.",
        formula: "suffix = [−3,22]"
      },
      {
        title: "חתוך לפני הקבוצה",
        text: "מנתקים את הקישור בין 8 לבין ‎-3. הקידומת שנשארת היא 5,2,1,8.",
        formula: "prefix = [5,2,1,8]"
      },
      {
        title: "חבר את הזנב הישן לראש הישן",
        text: "הצומת 22 מתחבר ל-5. ברשימה דו-כיוונית מעדכנים גם next וגם prev בכל גבול.",
        formula: "22.next=5, 5.prev=22"
      },
      {
        title: "עדכן ראש וזנב",
        text: "הראש החדש הוא ‎-3 והזנב החדש הוא 8. קריאת הרשימה מהראש נותנת את התוצאה.",
        formula: "−3 ↔ 22 ↔ 5 ↔ 2 ↔ 1 ↔ 8"
      }
    ]
  },

  L02: {
    title: "בדיקת איברי קסם",
    formulas: [
      { label: "תנאי קסם", value: "aᵢ = aᵢ₋₁ + aᵢ₊₁" },
      { label: "תחום בדיקה", value: "2 ≤ i ≤ n−1" },
      { label: "עלות סריקה", value: "T(n) = Θ(n)" }
    ],
    steps: [
      {
        title: "פסול קצוות",
        text: "הראש והזנב אינם יכולים להיות איברי קסם כי לכל אחד מהם חסר שכן אחד.",
        formula: "candidates = positions 2…5"
      },
      {
        title: "בדוק מיקום 2",
        text: "ערך הצומת הוא 6 והשכנים הם 5 ו-1. השוויון מתקיים.",
        formula: "6 = 5 + 1"
      },
      {
        title: "בדוק את האמצע",
        text: "במיקום 3 מתקבל 1≠6+8 ובמיקום 4 מתקבל 8≠1+30. שניהם נפסלים.",
        formula: "1 ≠ 14, 8 ≠ 31"
      },
      {
        title: "בדוק מיקום 5",
        text: "ערך הצומת הוא 30 והשכנים הם 8 ו-22. גם כאן השוויון מתקיים.",
        formula: "30 = 8 + 22 ⇒ positions {2,5}"
      }
    ]
  },

  L05: {
    title: "מחיקה בטוחה של רצף צמתים",
    formulas: [
      { label: "עקיפת צומת", value: "previous.next = current.next" },
      { label: "המשך אחרי מחיקה", value: "current = previous.next" },
      { label: "עלות", value: "T(n)=Θ(n), extra space=Θ(1)" }
    ],
    steps: [
      {
        title: "שמור שני תפקידים נפרדים",
        text: "previous מצביע לצומת האחרון שנשאר ברשימה; current הוא הצומת שנבדק כרגע.",
        formula: "previous.next = current"
      },
      {
        title: "מחק בלי לאבד את ההמשך",
        text: "שומרים את הבא, עוקפים את current ומשחררים אותו. אסור לקרוא דרך current אחרי free.",
        formula: "next=current.next; previous.next=next; free(current)"
      },
      {
        title: "אל תקדם את previous",
        text: "אחרי מחיקה ייתכן שגם הצומת החדש שב-current שלילי. לכן previous נשאר באותו מקום.",
        formula: "current = previous.next"
      },
      {
        title: "טפל גם בראש",
        text: "ראש דמה מאפשר להפעיל אותו כלל כאשר הצומת הראשון נמחק, בלי לכתוב מקרה מיוחד.",
        formula: "dummy.next = head ⇒ head = dummy.next"
      }
    ]
  },

  L06: {
    title: "מעקב זוגות סמוכים ברשימה",
    formulas: [
      { label: "תנאי הדפסה", value: "print current iff current.key > current.next.key" },
      { label: "מספר השוואות", value: "comparisons = n−1" },
      { label: "עלות", value: "T(n)=Θ(n)" }
    ],
    steps: [
      {
        title: "שים לב לתנאי הלולאה",
        text: "הלולאה רצה רק כאשר קיים צומת הבא. לכן כל איטרציה בודקת זוג סמוך.",
        formula: "while (p.next ≠ NULL)"
      },
      {
        title: "בדוק את הזוג הראשון",
        text: "5 גדול מ-2 ולכן 5 מודפס. לאחר מכן p מתקדם לצומת 2.",
        formula: "5 > 2 ⇒ print 5"
      },
      {
        title: "המשך בזוגות",
        text: "2 אינו גדול מ-4 ולכן לא מודפס; 4 גדול מ-1 ולכן 4 מודפס.",
        formula: "2 < 4, 4 > 1 ⇒ print 4"
      },
      {
        title: "עצור לפני גישה לא חוקית",
        text: "כאשר p נמצא על 1 אין p.next, ולכן הלולאה מסתיימת. 1 אינו נבדק לבדו.",
        formula: "output = 5 4"
      }
    ]
  },

  T01: {
    title: "שחזור BST מתוך PreOrder",
    formulas: [
      { label: "סדר PreOrder", value: "root → left subtree → right subtree" },
      { label: "חוק BST", value: "left < root < right" },
      { label: "מסלול 140", value: "140>100, 140>120, 140>130" }
    ],
    steps: [
      {
        title: "קבע את השורש",
        text: "האיבר הראשון ב-PreOrder הוא תמיד השורש. לכן 100 הוא שורש העץ.",
        formula: "root = 100"
      },
      {
        title: "חלק לשמאל ולימין",
        text: "הערכים 70,60,50,80 קטנים מ-100 ושייכים לתת-העץ השמאלי. 120 מתחיל את תת-העץ הימני.",
        formula: "left: [70,60,50,80], right: [120,110,130,140]"
      },
      {
        title: "בנה את הצד הימני",
        text: "120 הוא שורש תת-העץ; 110 משמאלו. 130 גדול מ-120 ולכן מימינו.",
        formula: "100 →right 120 →right 130"
      },
      {
        title: "מקם את 140",
        text: "140 גדול מכל הגבולות במסלול ולכן הוא הבן הימני של 130. האב המבוקש הוא 130.",
        formula: "parent(140) = 130"
      }
    ]
  },

  T02: {
    title: "בדיקת עץ גורמים",
    formulas: [
      { label: "עלה חוקי", value: "left=NULL ∧ right=NULL" },
      { label: "צומת פנימי חוקי", value: "left≠NULL ∧ right≠NULL ∧ key=left.key·right.key" },
      { label: "עלות", value: "T(n)=Θ(n)" }
    ],
    steps: [
      {
        title: "הפרד מבנה מערכים",
        text: "לפני שבודקים את המכפלה צריך לבדוק את צורת הצומת. ההגדרה מתירה אפס ילדים או שני ילדים.",
        formula: "children count ∈ {0,2}"
      },
      {
        title: "זהה בן יחיד",
        text: "אם בדיוק אחד מהמצביעים left ו-right הוא NULL, מספר הילדים הוא 1.",
        formula: "(left=NULL) XOR (right=NULL)"
      },
      {
        title: "פסול מיד",
        text: "בן יחיד מפר את ההגדרה בלי קשר לערך שלו. אין צורך לבדוק אם הוא מחלק את האב.",
        formula: "one child ⇒ False"
      },
      {
        title: "המשך רק במקרה החוקי",
        text: "רק בצומת עם שני בנים בודקים מכפלה ואז קוראים רקורסיבית לשני תתי-העצים.",
        formula: "valid = product_ok ∧ valid(left) ∧ valid(right)"
      }
    ]
  },

  T03: {
    title: "הדפסה יורדת מתוך BST",
    formulas: [
      { label: "InOrder עולה", value: "left → root → right" },
      { label: "InOrder יורד", value: "right → root → left" },
      { label: "סינון זוגי", value: "key mod 2 = 0" }
    ],
    steps: [
      {
        title: "השתמש בתכונת ה-BST",
        text: "כל הערכים בתת-העץ הימני גדולים מהשורש וכל הערכים בשמאלי קטנים ממנו.",
        formula: "left keys < root < right keys"
      },
      {
        title: "הפוך את InOrder",
        text: "כדי לקבל מהגדול לקטן מתחילים בצד הימני, מבקרים בשורש ורק אז עוברים לשמאל.",
        formula: "reverse inorder = R,N,L"
      },
      {
        title: "הוסף את תנאי ההדפסה",
        text: "מבקרים בכל הצמתים באותו סדר, אבל מדפיסים את השורש רק אם הוא זוגי.",
        formula: "if (key % 2 == 0) print(key)"
      },
      {
        title: "חשב עלות",
        text: "הסינון אינו מאפשר לדלג על תת-עץ, ולכן מבקרים בכל n הצמתים. עומק המחסנית הוא גובה העץ.",
        formula: "time=Θ(n), recursion space=Θ(h)"
      }
    ]
  },

  T04: {
    title: "ספירת צמתים שהם בן יחיד",
    formulas: [
      { label: "אב עם ילד יחיד", value: "(left=NULL) XOR (right=NULL)" },
      { label: "תרומת אב", value: "1 if exactly one child, otherwise 0" },
      { label: "סכום רקורסיבי", value: "count(T)=local+count(L)+count(R)" }
    ],
    steps: [
      {
        title: "הבן מי נספר",
        text: "סופרים את הילד שאין לו אח, לא את ההורה שלו. לכן מחפשים הורה עם ילד אחד בדיוק.",
        formula: "single child ⇔ parent has exactly one non-NULL child"
      },
      {
        title: "בדוק את השורש 10",
        text: "ל-10 יש שני ילדים, 5 ו-20. לכן אף אחד מהם אינו בן יחיד.",
        formula: "children(10)=2 ⇒ contribution 0"
      },
      {
        title: "בדוק את הצומת 5",
        text: "ל-5 אין בן שמאלי ויש לו בן ימני 7. לכן 7 הוא בן יחיד.",
        formula: "children(5)=1 ⇒ count child 7"
      },
      {
        title: "סכם",
        text: "20 ו-7 הם עלים ואינם הורים לילד נוסף. נמצא בן יחיד אחד בלבד.",
        formula: "total = 1"
      }
    ]
  },

  P01: {
    title: "DeleteMax בערמת מקסימום",
    formulas: [
      { label: "ילדים ב-0-based", value: "left=2i+1, right=2i+2" },
      { label: "בחירת החלפה", value: "swap with max(left child, right child)" },
      { label: "עלות", value: "T(n)=Θ(log n)" }
    ],
    steps: [
      {
        title: "הסר את המקסימום",
        text: "בערמת מקסימום השורש 100 הוא המקסימום. מסירים אותו ומקטינים את גודל הערימה.",
        formula: "removed = 100"
      },
      {
        title: "העלה את האיבר האחרון",
        text: "מעבירים את 20 למקום השורש כדי לשמור על צורת עץ שלם.",
        formula: "[20,98,60,58,70]"
      },
      {
        title: "החלף עם הבן הגדול",
        text: "בין 98 ל-60 הבן הגדול הוא 98, לכן מחליפים. אחר כך משווים את 20 לבנים 58 ו-70.",
        formula: "[98,20,60,58,70] → choose 70"
      },
      {
        title: "סיים את ההחלקה",
        text: "20 מתחלף עם 70 ומגיע לעלה. תכונת הערמה מתקיימת בכל קשת.",
        formula: "[98,70,60,58,20]"
      }
    ]
  },

  P02: {
    title: "נוסחאות אינדקסים בערימה",
    formulas: [
      { label: "0-based", value: "left(i)=2i+1, right(i)=2i+2" },
      { label: "אב ב-0-based", value: "parent(i)=⌊(i−1)/2⌋" },
      { label: "1-based להשוואה", value: "left(i)=2i, right(i)=2i+1" }
    ],
    steps: [
      {
        title: "זהה את בסיס האינדקס",
        text: "השאלה אומרת שהשורש נמצא באינדקס 0. לכן חייבים להשתמש בנוסחאות של 0-based.",
        formula: "root index = 0"
      },
      {
        title: "בדוק את השורש",
        text: "לשורש באינדקס 0 הילדים צריכים להיות באינדקסים 1 ו-2.",
        formula: "2·0+1=1, 2·0+2=2"
      },
      {
        title: "הכלל עבור i",
        text: "כל רמה במערך מכפילה את המיקום פי 2, וההיסט של 1 או 2 בוחר ילד שמאלי או ימני.",
        formula: "left=2i+1, right=2i+2"
      },
      {
        title: "מנע את המלכודת",
        text: "הנוסחאות 2i ו-2i+1 נכונות רק כאשר תא 0 אינו בשימוש והשורש באינדקס 1.",
        formula: "answer = (2i+1, 2i+2)"
      }
    ]
  },

  P03: {
    title: "Insert לערמת מקסימום",
    formulas: [
      { label: "אב ב-1-based", value: "parent(i)=⌊i/2⌋" },
      { label: "תנאי עלייה", value: "while H[i] > H[parent(i)]" },
      { label: "עלות", value: "T(n)=Θ(log n)" }
    ],
    steps: [
      {
        title: "הכנס בסוף",
        text: "כדי לשמור על עץ שלם מוסיפים את 99 אחרי האיבר האחרון. הוא נכנס לאינדקס 11 בייצוג 1-based.",
        formula: "i=11, H[11]=99"
      },
      {
        title: "השווה לאב הראשון",
        text: "האב של אינדקס 11 הוא אינדקס 5, שבו נמצא 70. מאחר ש-99 גדול יותר, מחליפים.",
        formula: "parent(11)=5, 99>70"
      },
      {
        title: "המשך לעלות",
        text: "99 נמצא עכשיו באינדקס 5. אביו באינדקס 2 הוא 85, ולכן מבצעים החלפה נוספת.",
        formula: "parent(5)=2, 99>85"
      },
      {
        title: "עצור מתחת ל-120",
        text: "אביו החדש הוא השורש 120. כיוון ש-99 קטן מ-120, תכונת הערמה מתקיימת. הערך 90 שבפתרון הרשמי הוא שגיאת דפוס.",
        formula: "[120,99,89,35,85,0,13,12,22,1,70]"
      }
    ]
  },

  HS01: {
    title: "בחירת צעד חוקי ב-Double Hashing",
    formulas: [
      { label: "רצף בדיקות", value: "probeᵢ(x) = (h(x)+i·d(x)) mod m" },
      { label: "תנאי כיסוי", value: "gcd(d(x),m)=1" },
      { label: "תנאי בסיסי", value: "1 ≤ d(x) ≤ m−1" }
    ],
    steps: [
      {
        title: "נסח את דרישת השאלה",
        text: "כדי להגיע לכל תאי הטבלה, הצעד חייב להיות שונה מאפס וזר לגודל הטבלה 12 עבור כל מפתח אפשרי.",
        formula: "d(x)≠0 ∧ gcd(d(x),12)=1"
      },
      {
        title: "בדוק x mod 13",
        text: "עבור כפולה של 13 מתקבל צעד 0. בנוסף יכולים להתקבל צעדים כמו 2, שאינם זרים ל-12.",
        formula: "x=13 ⇒ d=0"
      },
      {
        title: "בדוק את שתי האפשרויות האחרות",
        text: "x mod 5 + 1 יכול להחזיר 2,3 או 4; x mod 7 יכול להחזיר 0,2,3,4 או 6. כל אחד מאלה נכשל עבור חלק מהמפתחות.",
        formula: "gcd(2,12)=2, gcd(3,12)=3, gcd(4,12)=4"
      },
      {
        title: "הסק מסקנה לכל x",
        text: "השאלה דורשת הבטחה לכל מפתח, לא דוגמה שבה הצעד במקרה חוקי. אף פונקציה אינה עומדת בדרישה.",
        formula: "answer = none of them"
      }
    ]
  },

  HS02: {
    title: "מעקב הכנסה במיעון פתוח",
    formulas: [
      { label: "פונקציית בית", value: "h(47)=47 mod 11=3" },
      { label: "גודל צעד", value: "d(47)=(47 mod 3)+1=3" },
      { label: "בדיקה i", value: "pᵢ=(3+3i) mod 11" }
    ],
    steps: [
      {
        title: "חשב את שני הערכים פעם אחת",
        text: "פונקציית הבית קובעת מאיפה מתחילים ופונקציית הצעד קובעת את המרחק בין בדיקות.",
        formula: "h=3, d=3"
      },
      {
        title: "בנה את רצף הבדיקות",
        text: "מציבים i=0,1,2 וכן הלאה ולוקחים שארית 11 בכל צעד.",
        formula: "3,6,9,1,4,7,10,…"
      },
      {
        title: "השווה לטבלה",
        text: "התאים 3,6,9,1,4 ו-7 תפוסים. כל תא תפוס שנפגשים בו הוא התנגשות.",
        formula: "collisions = 6"
      },
      {
        title: "עצור בתא הפנוי",
        text: "תא 10 פנוי ולכן שם מכניסים את 47. התא הפנוי הוא בדיקה שביעית אבל אינו התנגשות.",
        formula: "insert index=10, probes=7, collisions=6"
      }
    ]
  },

  HS03: {
    title: "הבדל בין Empty ל-Deleted",
    formulas: [
      { label: "רצף בדיקות", value: "pᵢ=(h(x)+i·d(x)) mod m" },
      { label: "כלל עצירה", value: "stop only at NEVER_USED" },
      { label: "מחיקה לוגית", value: "DELETED ≠ NEVER_USED" }
    ],
    steps: [
      {
        title: "זכור כיצד נוצר רצף",
        text: "בהכנסה, מפתח יכול לדלג מעל תאים תפוסים ולהישמר בתא מאוחר יותר באותו רצף.",
        formula: "occupied → continue probing"
      },
      {
        title: "מה אומר תא שנמחק",
        text: "Deleted אומר שהתא היה פעם תפוס. ייתכן שמפתחות אחרים נדחקו מעבר אליו לפני המחיקה.",
        formula: "DELETED ⇒ chain may continue"
      },
      {
        title: "המשך את החיפוש",
        text: "לא מחזירים 'לא נמצא' ולא מתחילים מחדש. ממשיכים לצעד הבא באותו רצף.",
        formula: "i ← i+1"
      },
      {
        title: "דע מתי מותר לעצור",
        text: "רק תא שמעולם לא היה בשימוש מוכיח שאף הכנסה קודמת לא עברה דרכו אל המשך הרצף.",
        formula: "NEVER_USED ⇒ not found"
      }
    ]
  },

  HS04: {
    title: "מקדם עומס והסתברות להתנגשות",
    formulas: [
      { label: "מקדם עומס", value: "α = occupied / table_size" },
      { label: "בהנחת פיזור אחיד", value: "P(collision on first probe)=α" },
      { label: "דרישת השאלה", value: "α ≥ 0.5" }
    ],
    steps: [
      {
        title: "הגדר את הנעלם",
        text: "נסמן ב-k את מספר התאים התפוסים. גודל הטבלה הוא 20.",
        formula: "α = k/20"
      },
      {
        title: "תרגם 'לפחות חצי'",
        text: "המילה 'לפחות' כוללת שוויון. לכן פותרים אי-שוויון גדול או שווה.",
        formula: "k/20 ≥ 0.5"
      },
      {
        title: "פתור את אי-השוויון",
        text: "כופלים ב-20, שהוא חיובי ולכן כיוון אי-השוויון אינו משתנה.",
        formula: "k ≥ 10"
      },
      {
        title: "בחר את המספר המינימלי",
        text: "כבר ב-10 תאים תפוסים ההסתברות שווה בדיוק 0.5. רק אילו נכתב 'גדולה מ-0.5' היה צורך ב-11.",
        formula: "minimum k = 10"
      }
    ]
  },

  SQ01: {
    title: "תופעת לוואי של רקורסיה על תור",
    formulas: [
      { label: "מינימום רקורסיבי", value: "min(Q)=min(front, min(rest))" },
      { label: "זמן", value: "T(n)=T(n−1)+Θ(1)=Θ(n)" },
      { label: "זיכרון קריאות", value: "S(n)=Θ(n)" }
    ],
    steps: [
      {
        title: "עקוב בדרך הירידה",
        text: "כל קריאה מוציאה את האיבר הקדמי ושומרת אותו במשתנה מקומי. אחרי n קריאות התור ריק.",
        formula: "[a,b,c] → [b,c] → [c] → []"
      },
      {
        title: "חשב את המינימום",
        text: "בדרך חזרה כל קריאה משווה את האיבר ששמרה למינימום שהתקבל מהמשך התור.",
        formula: "result = min(a,min(b,c))"
      },
      {
        title: "בדוק את סדר ההכנסה בחזרה",
        text: "הקריאה העמוקה של c חוזרת ראשונה ומכניסה c; אחריה b; לבסוף a.",
        formula: "enqueue order = c,b,a"
      },
      {
        title: "הפרד ערך מוחזר ממצב המבנה",
        text: "הפונקציה מחזירה מינימום נכון, אך התור עצמו נשאר בסדר הפוך.",
        formula: "return min, Q_final=[c,b,a]"
      }
    ]
  },

  SQ02: {
    title: "הכנסה לתחתית מחסנית ברקורסיה",
    formulas: [
      { label: "מקרה בסיס", value: "empty(S) ⇒ push(S,val)" },
      { label: "צעד רקורסיבי", value: "x=pop(S); insertBottom(S,val); push(S,x)" },
      { label: "עלות", value: "T(n)=Θ(n), call space=Θ(n)" }
    ],
    steps: [
      {
        title: "פנה את הדרך לתחתית",
        text: "מוציאים את האיבר העליון ושומרים אותו במשתנה מקומי של הקריאה. חוזרים על כך עד שהמחסנית ריקה.",
        formula: "[a,b,c]top → [b,c] → [c] → []"
      },
      {
        title: "דחוף את הערך החדש",
        text: "מחסנית ריקה חושפת את התחתית. זהו המקום היחיד שבו דוחפים את val.",
        formula: "[] → [val]"
      },
      {
        title: "שחזר בדרך חזרה",
        text: "כל קריאה דוחפת בחזרה את האיבר ששמרה. הסדר המקורי מעל val נשמר.",
        formula: "[val] → [c,val] → [b,c,val] → [a,b,c,val]"
      },
      {
        title: "בדוק את האינווריאנט",
        text: "כל האיברים המקוריים נשארו באותו סדר יחסי ורק val נוסף מתחת לכולם.",
        formula: "bottom(S_final)=val"
      }
    ]
  },

  SQ03: {
    title: "בחירת Sentinel חוקי",
    formulas: [
      { label: "תנאי בטיחות", value: "sentinel ∉ legal_data_domain" },
      { label: "תחום הנתונים", value: "D = {x | x>0}" },
      { label: "בחירה", value: "−1 ∉ D" }
    ],
    steps: [
      {
        title: "הבן מה עושה Sentinel",
        text: "מכניסים סמן לתור כדי לזהות מתי הושלם סיבוב מלא, בלי להשתמש במונה נפרד.",
        formula: "enqueue(sentinel)"
      },
      {
        title: "דרוש ערך שאינו נתון אמיתי",
        text: "אם הסמן יכול להופיע כערך חוקי, אי-אפשר לדעת אם פגשנו נתון או את סוף הסיבוב.",
        formula: "sentinel ∉ D"
      },
      {
        title: "השתמש בהבטחת השאלה",
        text: "כל האיברים בתור חיוביים. לכן ‎-1 אינו יכול להיות איבר מקורי.",
        formula: "∀x∈D: x>0 ⇒ −1∉D"
      },
      {
        title: "סייג את הפתרון",
        text: "ללא ההבטחה על חיוביות, ‎-1 אינו בטוח וצריך סמן מסוג אחר או מונה בגודל התור.",
        formula: "given positive data ⇒ sentinel −1 is valid"
      }
    ]
  },

  SQ06: {
    title: "רקורסיה הרסנית על מחסנית",
    formulas: [
      { label: "מקסימום רקורסיבי", value: "M(n)=max(pop(S),M(n−1))" },
      { label: "זמן", value: "T(n)=Θ(n)" },
      { label: "שינוי גודל", value: "|S_final|=|S_initial|−n=0" }
    ],
    steps: [
      {
        title: "עקוב אחרי כל pop",
        text: "כל קריאה מוציאה איבר אחד מהמחסנית לפני הקריאה הבאה. הפעולה משנה את המבנה בפועל.",
        formula: "size ← size−1"
      },
      {
        title: "הגע למחסנית ריקה",
        text: "אחרי n קריאות הוצאו כל n האיברים. המקרה הבסיסי מופעל כאשר המחסנית ריקה.",
        formula: "after n pops: size=0"
      },
      {
        title: "בדוק את הדרך חזרה",
        text: "הקריאות משוות ערכים כדי להחזיר את המקסימום, אבל אין אף פעולת push.",
        formula: "return max values; push count=0"
      },
      {
        title: "קבע את מצב הסיום",
        text: "הערך המוחזר הוא המקסימום, אך כל האיברים הוסרו לצמיתות. השאלה המקורית מתירה שינוי כזה.",
        formula: "S_final=[]"
      }
    ]
  },

  S01: {
    title: "השוואת מיונים על מערך ממוין",
    formulas: [
      { label: "Insertion", value: "C_best(n)=n−1=Θ(n)" },
      { label: "Selection", value: "C(n)=n(n−1)/2=Θ(n²)" },
      { label: "Merge", value: "C(n)=Θ(n log n)" }
    ],
    steps: [
      {
        title: "נתח Insertion Sort",
        text: "כל איבר מושווה פעם אחת לקודמו. מאחר שהמערך כבר מסודר, לולאת ההזזה נעצרת מיד.",
        formula: "C_insertion=n−1"
      },
      {
        title: "השווה ל-Selection Sort",
        text: "Selection מחפש מינימום בכל יתרת המערך גם כשהקלט כבר מסודר.",
        formula: "(n−1)+(n−2)+…+1=n(n−1)/2"
      },
      {
        title: "בדוק Quick ו-Merge",
        text: "Quick עם pivot אחרון מקבל חלוקה 0 מול n−1 בכל פעם; Merge ממשיך לחלק ולמזג כרגיל.",
        formula: "Quick=Θ(n²), Merge=Θ(n log n)"
      },
      {
        title: "בחר את הקטן ביותר",
        text: "ליניארי גדל לאט יותר מ-n log n ומריבועי. לכן Insertion מבצע הכי מעט השוואות.",
        formula: "n−1 < Θ(n log n) < Θ(n²)"
      }
    ]
  },

  S02: {
    title: "בדיקת יציבות של אלגוריתם מיון",
    formulas: [
      { label: "הגדרת יציבות", value: "key(a)=key(b) ∧ a before b ⇒ a remains before b" },
      { label: "Bubble יציב", value: "swap only if left > right" },
      { label: "Insertion יציב", value: "shift only while previous > key" }
    ],
    steps: [
      {
        title: "הפרד יציבות מסיבוכיות",
        text: "יציבות אינה אומרת שהמיון מהיר. היא בודקת רק אם פריטים בעלי מפתח שווה שומרים על סדרם היחסי.",
        formula: "(5,A),(5,B) ⇒ A before B after sorting"
      },
      {
        title: "בדוק Bubble Sort",
        text: "במימוש הסטנדרטי מחליפים רק כאשר השמאלי גדול ממש. שווים אינם מתחלפים ולכן הסדר נשמר.",
        formula: "swap iff a>b, not a≥b"
      },
      {
        title: "בדוק Insertion Sort",
        text: "מזיזים ימינה רק ערכים שגדולים ממש מהמפתח. ערך שווה נשאר לפניו.",
        formula: "while A[j]>key"
      },
      {
        title: "פסול את האחרים",
        text: "Selection, Quick ו-Heap עלולים לבצע החלפות ארוכות שמדלגות מעל פריטים שווים. לכן הזוג היציב הוא Bubble ו-Insertion.",
        formula: "stable set = {Bubble, Insertion}"
      }
    ]
  },

  S03: {
    title: "זיהוי מיקום Pivot אחרי Partition",
    formulas: [
      { label: "אינווריאנט", value: "left side ≤ pivot, right side ≥ pivot" },
      { label: "מיקום", value: "pivot_index = number of items placed on left" },
      { label: "בסיס אינדקס", value: "first index = 0" }
    ],
    steps: [
      {
        title: "זהה את ערך ה-pivot",
        text: "השאלה מציינת partition עם האיבר האחרון כפיבוט; במעקב המקורי ערך הפיבוט הוא 4.",
        formula: "pivot=4"
      },
      {
        title: "ספור מה הוצב משמאל",
        text: "לפני ה-4 שבמקומו מופיעים ארבעה איברים: 2, ‎-9, 2 ו-3. כולם אינם גדולים מהפיבוט.",
        formula: "left_count=4"
      },
      {
        title: "המר לאינדקס 0-based",
        text: "כאשר יש ארבעה תאים לפני איבר, האינדקס שלו הוא 4.",
        formula: "pivot_index=4"
      },
      {
        title: "טפל בכפילות",
        text: "קיים 4 נוסף מימין. ערך זהה אינו מוכיח איזה עותק היה הפיבוט; משתמשים בגבול שיצרה פעולת partition.",
        formula: "answer index=4"
      }
    ]
  },

  S04: {
    title: "Radix Sort ספרה אחר ספרה",
    formulas: [
      { label: "ספרה k", value: "digitₖ(x)=⌊x/10ᵏ⌋ mod 10" },
      { label: "מספר מעברים", value: "d = number of digits of max value = 4" },
      { label: "עלות", value: "T(n)=Θ(d(n+10))" }
    ],
    steps: [
      {
        title: "מיין לפי ספרת האחדות",
        text: "משתמשים במיון יציב ושומרים על הסדר המקורי בתוך כל דלי.",
        formula: "[501,1501,1,103,1103,93,189,509]"
      },
      {
        title: "מיין לפי ספרת העשרות",
        text: "מספרים בלי ספרה במקום מסוים מקבלים 0. הסדר מהמעבר הקודם נשמר בין שווי-ספרה.",
        formula: "[501,1501,1,103,1103,509,189,93]"
      },
      {
        title: "מיין לפי מאות",
        text: "מפעילים שוב מיון יציב על ספרת המאות.",
        formula: "[1,93,103,1103,189,501,1501,509]"
      },
      {
        title: "מיין לפי אלפים",
        text: "זהו המעבר האחרון כי המספר הגדול ביותר בעל ארבע ספרות. התוצאה היא סדר מספרי מלא.",
        formula: "[1,93,103,189,501,509,1103,1501]"
      }
    ]
  },

  S05: {
    title: "יציבות ב-Counting Sort עם אינדקסי התחלה",
    formulas: [
      { label: "אינדקס התחלה", value: "start[v]=Σ(u<v) count[u]" },
      { label: "כתיבה", value: "output[start[key]]=item; start[key]++" },
      { label: "עלות", value: "T(n,k)=Θ(n+k)" }
    ],
    steps: [
      {
        title: "ספור שכיחויות",
        text: "count[v] אומר כמה פריטים בעלי מפתח v קיימים. מהסכומים המצטברים מחשבים את התא הראשון של כל ערך.",
        formula: "start[v]=count[0]+…+count[v−1]"
      },
      {
        title: "הגדר מהי יציבות",
        text: "אם שני פריטים בעלי אותו מפתח הופיעו בסדר A ואז B, גם בפלט A חייב להופיע לפני B.",
        formula: "(v,A) before (v,B) ⇒ same order in output"
      },
      {
        title: "סרוק משמאל לימין",
        text: "הפריט הראשון של ערך v נכתב ב-start[v], ואז מקדמים את האינדקס. הפריט הבא מאותו ערך נכתב אחריו.",
        formula: "scan i=0…n−1"
      },
      {
        title: "הבחן בין גרסאות",
        text: "כאשר המערך המצטבר מחזיק אינדקסי סוף, מקובל לסרוק מימין לשמאל. כאן הוא מחזיק אינדקסי התחלה ולכן הכיוון הנכון הוא משמאל לימין.",
        formula: "start indices ⇒ left-to-right"
      }
    ]
  }
};

globalThis.CODEX_EXAM_SOLUTIONS = CODEX_EXAM_SOLUTIONS;
