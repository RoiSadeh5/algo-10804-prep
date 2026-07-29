/* פתרונות מונפשים שלב-אחר-שלב — קטגוריות "סיבוכיות" ו"רקורסיה".
 * המפתח = id של השאלה ב-bank-questions.js.
 */
window.BANK_WALKTHROUGHS = window.BANK_WALKTHROUGHS || {};
Object.assign(window.BANK_WALKTHROUGHS, {

  /* ===================== סיבוכיות ===================== */

  "BK-1.1": {
    title: "לולאה פנימית שתלויה בחיצונית — סכום ריבועים",
    steps: [
      {
        title: "קודם כול — מזהים את המבנה",
        text: "לפנינו שתי לולאות מקוננות. השאלה היחידה שקובעת את התשובה היא: <b>האם הגבול של הלולאה הפנימית תלוי במשתנה של החיצונית?</b> כאן הגבול הוא <span dir=\"ltr\">i*i</span> — והוא תלוי ב-<span dir=\"ltr\">i</span>. זה אומר שאסור לכפול, צריך לסכום.",
        visual: {type:"code", lines:[
          "for (i = 1; i <= n; i++)",
          "    for (j = 1; j <= i * i; j++)",
          "        cnt++;"
        ], mark:[2]}
      },
      {
        title: "הלולאה החיצונית",
        text: "המשתנה <span dir=\"ltr\">i</span> מתחיל ב-1, גדל ב-1 בכל צעד, ונעצר כאשר הוא עובר את <span dir=\"ltr\">n</span>. לכן החיצונית מבצעת בדיוק <span dir=\"ltr\">n</span> איטרציות — לא פחות ולא יותר.",
        formula: "i = 1, 2, 3, …, n   →   n איטרציות",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "for (i = 1; i <= n; i++)",
            "    for (j = 1; j <= i * i; j++)",
            "        cnt++;"
          ], mark:[1]},
          {type:"vars", items:[{k:"i",v:"1 … n",c:"hot"},{k:"מספר איטרציות",v:"n"}]}
        ]}
      },
      {
        title: "הלולאה הפנימית — לא מספר קבוע",
        text: "בכל סיבוב של החיצונית, <span dir=\"ltr\">j</span> רץ מ-1 עד <span dir=\"ltr\">i*i</span>. כלומר מספר הצעדים הפנימיים הוא <span dir=\"ltr\">i²</span> — <b>משתנה מסיבוב לסיבוב</b>. זה בדיוק ההבדל מלולאה שרצה תמיד <span dir=\"ltr\">n</span> פעמים.",
        formula: "inner(i) = i²",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "for (i = 1; i <= n; i++)",
            "    for (j = 1; j <= i * i; j++)",
            "        cnt++;"
          ], mark:[2,3]},
          {type:"vars", items:[{k:"i",v:"3",c:"info"},{k:"גבול j",v:"9",c:"hot"},{k:"צעדים בסיבוב",v:"9"}]}
        ]}
      },
      {
        title: "טבלת איטרציות — סופרים בפועל",
        text: "נרשום כמה פעמים מתבצע <span dir=\"ltr\">cnt++</span> בכל סיבוב של החיצונית, ונצבור. שימו לב איך המספרים בעמודה האמצעית הם בדיוק הריבועים.",
        visual: {type:"table",
          head:["i","צעדים פנימיים = i²","cnt מצטבר"],
          rows:[
            [1,{v:1,c:"hot"},1],
            [2,{v:4,c:"hot"},5],
            [3,{v:9,c:"hot"},14],
            [4,{v:16,c:"hot"},30],
            [5,{v:25,c:"hot"},55],
            ["…","…","…"],
            ["n",{v:"n²",c:"hot"},{v:"Σ i²",c:"good"}]
          ]}
      },
      {
        title: "למה סוכמים ולא כופלים",
        text: "אם היינו כופלים, היינו אומרים \"n סיבובים כפול n² צעדים\". אבל רק הסיבוב <b>האחרון</b> עולה <span dir=\"ltr\">n²</span>; הסיבוב הראשון עלה 1 בלבד. הכפל סופר את כל הסיבובים כאילו הם הכי יקרים — ולכן הוא רק חסם עליון גס, ולא החישוב הנכון.",
        visual: {type:"note", text:"הכלל: כשגבול הפנימית תלוי במשתנה החיצוני — <b>סוכמים</b> את מספר הצעדים על פני i. כשהוא לא תלוי — כופלים."}
      },
      {
        title: "מחשבים את הסכום",
        text: "הסכום שקיבלנו הוא סכום הריבועים הראשונים, ולו יש נוסחה סגורה מוכרת. אנחנו מציבים אותה ומקבלים ביטוי מדויק במספר הפעולות.",
        formula: "1² + 2² + … + n² = n(n+1)(2n+1) / 6"
      },
      {
        title: "מהנוסחה המדויקת לסימון האסימפטוטי",
        text: "נפתח את המכפלה במונה: <span dir=\"ltr\">n·(n+1)·(2n+1) ≈ 2n³</span>, ולכן הסכום כולו הוא בערך <span dir=\"ltr\">2n³/6 = n³/3</span>. בסימון O מתעלמים מהקבוע ⅓ ומהמחוברים מסדר נמוך יותר.",
        formula: "n(n+1)(2n+1)/6  ≈  n³/3  =  O(n³)",
        visual: {type:"vars", items:[
          {k:"סכום מדויק",v:"n(n+1)(2n+1)/6"},
          {k:"אסימפטוטית",v:"O(n³)",c:"good"}
        ]}
      },
      {
        title: "התשובה, והלקח שנשאר",
        text: "<b>התשובה: <span dir=\"ltr\">O(n³)</span>.</b> כאן במקרה גם הכפל <span dir=\"ltr\">n · n²</span> היה נותן <span dir=\"ltr\">n³</span> — אבל זו יד המקרה. בגרסה שבה הפנימית רצה עד <span dir=\"ltr\">i</span> (ולא <span dir=\"ltr\">i²</span>), הכפל היה נותן <span dir=\"ltr\">O(n²)</span> וגם הסכום נותן <span dir=\"ltr\">O(n²)</span> — אבל בגרסאות אחרות ההבדל אמיתי. תמיד סכמו.",
        visual: {type:"note", text:"הצג במבחן את הסכום עצמו, לא רק את התוצאה. הניקוד ניתן על הנימוק."}
      }
    ]
  },

  "BK-1.2": {
    title: "חלוקה בחוץ, ליניארי בפנים — מכפלה פשוטה",
    steps: [
      {
        title: "מזהים: יש כאן תלות?",
        text: "שוב שתי לולאות מקוננות, אבל הפעם הגבול של הפנימית הוא <span dir=\"ltr\">n</span> — קבוע, <b>בלי שום קשר ל-<span dir=\"ltr\">i</span></b>. זה הסימן שמותר לכפול.",
        visual: {type:"code", lines:[
          "for (i = n; i > 1; i /= 2)",
          "    for (j = 0; j < n; j++)",
          "        cnt++;"
        ], mark:[2]}
      },
      {
        title: "הלולאה החיצונית — חצי בכל צעד",
        text: "<span dir=\"ltr\">i</span> מתחיל ב-<span dir=\"ltr\">n</span> ומתחלק ב-2 בכל איטרציה. המסלול הוא <span dir=\"ltr\">n → n/2 → n/4 → … → 1</span>. כמה חציות צריך כדי להגיע מ-<span dir=\"ltr\">n</span> ל-1? בדיוק <span dir=\"ltr\">log₂ n</span>.",
        formula: "n / 2^k = 1  ⟹  k = log₂ n"
      },
      {
        title: "עוקבים אחרי i בפועל, עבור n = 32",
        text: "נציב <span dir=\"ltr\">n = 32</span> ונספור. שימו לב שמספר השורות בטבלה — 5 — הוא בדיוק <span dir=\"ltr\">log₂ 32 = 5</span>.",
        visual: {type:"table",
          head:["איטרציה","i בתחילת הסיבוב","צעדים פנימיים"],
          rows:[
            [1,{v:32,c:"hot"},32],
            [2,{v:16,c:"hot"},32],
            [3,{v:8,c:"hot"},32],
            [4,{v:4,c:"hot"},32],
            [5,{v:2,c:"hot"},32],
            [{v:"עצירה",c:"dim"},{v:"1",c:"dim"},{v:"—",c:"dim"}]
          ]}
      },
      {
        title: "הלולאה הפנימית — קבועה לחלוטין",
        text: "בכל אחת מ-5 השורות בטבלה, העמודה הימנית מציגה את אותו מספר: 32. הפנימית לא יודעת בכלל ש-<span dir=\"ltr\">i</span> קיים. לכן העלות שלה זהה בכל סיבוב.",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "for (i = n; i > 1; i /= 2)",
            "    for (j = 0; j < n; j++)",
            "        cnt++;"
          ], mark:[2,3]},
          {type:"vars", items:[{k:"i",v:"8"},{k:"גבול j",v:"n",c:"good"},{k:"תלוי ב-i?",v:"לא",c:"good"}]}
        ]}
      },
      {
        title: "כופלים",
        text: "כשהעלות הפנימית קבועה, סכום של <span dir=\"ltr\">log n</span> מחוברים שווים הוא פשוט מכפלה. אין צורך בנוסחת סכום.",
        formula: "n + n + … + n   (log n פעמים)   =   n · log n"
      },
      {
        title: "בדיקת שפיות מספרית",
        text: "עבור <span dir=\"ltr\">n = 32</span> קיבלנו <span dir=\"ltr\">5 · 32 = 160</span> ביצועים של <span dir=\"ltr\">cnt++</span>. זה תואם בדיוק את הטבלה: חמש שורות של 32.",
        visual: {type:"vars", items:[
          {k:"n",v:32},
          {k:"log₂ n",v:5,c:"info"},
          {k:"סה\"כ",v:160,c:"good"}
        ]}
      },
      {
        title: "התשובה, ומול מי היא מתבלבלת",
        text: "<b>התשובה: <span dir=\"ltr\">O(n·log n)</span>.</b> חשוב מאוד להשוות את השאלה הזו לשאלה 1.6: שם הפנימית <b>מצטמקת</b> יחד עם המשתנה של החיצונית, ולכן הסכום מתכנס ל-<span dir=\"ltr\">O(n)</span> ולא ל-<span dir=\"ltr\">O(n·log n)</span>. ההבדל בין השתיים הוא שורה אחת בקוד.",
        visual: {type:"note", text:"שאלת המפתח לפני שכופלים: <b>האם הפנימית משתנה בין הסיבובים?</b>"}
      }
    ]
  },

  "BK-1.3": {
    title: "נוסחת נסיגה ומשפט המאסטר — 4T(n/2)+O(n)",
    steps: [
      {
        title: "מפרקים את הפונקציה לשלושה חלקים",
        text: "כדי לבנות נוסחת נסיגה צריך לזהות שלושה דברים בלבד: <b>(1)</b> תנאי העצירה, <b>(2)</b> העבודה שנעשית בפונקציה עצמה מחוץ לרקורסיה, <b>(3)</b> כמה קריאות רקורסיביות יש ועל איזה גודל קלט.",
        visual: {type:"code", lines:[
          "int f(int n)",
          "{",
          "    if (n <= 1) return 1;",
          "    for (int i = 0; i < n; i++)",
          "        cnt++;",
          "    return f(n/2) + f(n/2) + f(n/2) + f(n/2);",
          "}"
        ], mark:[3]}
      },
      {
        title: "העבודה המקומית — הלולאה",
        text: "הלולאה רצה מ-0 עד <span dir=\"ltr\">n</span> בצעדים של 1, כלומר <span dir=\"ltr\">n</span> איטרציות. זו כל העבודה שהפונקציה עושה בעצמה, ולכן החלק ה\"לא-רקורסיבי\" הוא <span dir=\"ltr\">O(n)</span>.",
        formula: "עבודה מקומית  =  O(n)   ⟹   k = 1",
        visual: {type:"code", lines:[
          "int f(int n)",
          "{",
          "    if (n <= 1) return 1;",
          "    for (int i = 0; i < n; i++)",
          "        cnt++;",
          "    return f(n/2) + f(n/2) + f(n/2) + f(n/2);",
          "}"
        ], mark:[4,5]}
      },
      {
        title: "הקריאות הרקורסיביות — סופרים אותן אחת-אחת",
        text: "בשורת ה-<span dir=\"ltr\">return</span> מופיעה <span dir=\"ltr\">f(n/2)</span> <b>ארבע פעמים</b>. טעות נפוצה היא לראות \"אותה קריאה\" ולספור אחת. הן ארבע קריאות נפרדות, כל אחת מבצעת את כל העבודה מחדש.",
        formula: "a = 4  (מספר הקריאות)  ,  b = 2  (הקלט קטן פי 2)",
        visual: {type:"code", lines:[
          "int f(int n)",
          "{",
          "    if (n <= 1) return 1;",
          "    for (int i = 0; i < n; i++)",
          "        cnt++;",
          "    return f(n/2) + f(n/2) + f(n/2) + f(n/2);",
          "}"
        ], mark:[6]}
      },
      {
        title: "כותבים את נוסחת הנסיגה",
        text: "מחברים את שני הרכיבים: ארבע קריאות על קלט <span dir=\"ltr\">n/2</span>, ועוד <span dir=\"ltr\">O(n)</span> עבודה מקומית. תנאי הבסיס הוא <span dir=\"ltr\">T(1) = O(1)</span>.",
        formula: "T(n) = 4·T(n/2) + O(n)   ,   T(1) = O(1)"
      },
      {
        title: "מזהים את שלושת הפרמטרים של משפט המאסטר",
        text: "התבנית הכללית היא <span dir=\"ltr\">T(n) = a·T(n/b) + O(n^k)</span>. כאן <span dir=\"ltr\">a = 4</span> (מספר הקריאות), <span dir=\"ltr\">b = 2</span> (מקדם ההקטנה), ו-<span dir=\"ltr\">k = 1</span> (החזקה בעבודה המקומית).",
        visual: {type:"table",
          head:["פרמטר","משמעות","ערך"],
          rows:[
            ["a","כמה קריאות רקורסיביות",{v:4,c:"hot"}],
            ["b","פי כמה הקלט קטן",{v:2,c:"hot"}],
            ["k","החזקה בעבודה המקומית O(n^k)",{v:1,c:"hot"}]
          ]}
      },
      {
        title: "משווים b^k מול a — זה כל הסיפור",
        text: "משפט המאסטר מכריע בהשוואה אחת: מי גדול יותר, <span dir=\"ltr\">b^k</span> (מה שהעבודה המקומית \"מרוויחה\" בכל רמה) או <span dir=\"ltr\">a</span> (בכמה מתרבות הקריאות). כאן <span dir=\"ltr\">b^k = 2¹ = 2</span> ואילו <span dir=\"ltr\">a = 4</span>.",
        formula: "b^k = 2  <  4 = a   ⟹   הרקורסיה מנצחת",
        visual: {type:"table",
          head:["מקרה","תנאי","תוצאה"],
          rows:[
            ["1",{v:"b^k < a",c:"good"},{v:"O(n^log_b a)",c:"good"}],
            ["2","b^k = a","O(n^k · log n)"],
            ["3","b^k > a","O(n^k)"]
          ]}
      },
      {
        title: "מדוע \"הרקורסיה מנצחת\" — מסתכלים על עץ הקריאות",
        text: "ברמה 0 יש קריאה אחת בעלות <span dir=\"ltr\">n</span>. ברמה 1 יש 4 קריאות בעלות <span dir=\"ltr\">n/2</span> כל אחת — סה\"כ <span dir=\"ltr\">2n</span>. ברמה 2 יש 16 קריאות בעלות <span dir=\"ltr\">n/4</span> — סה\"כ <span dir=\"ltr\">4n</span>. העלות <b>מוכפלת</b> בכל רמה, ולכן העלה התחתון של העץ הוא זה ששולט.",
        visual: {type:"table",
          head:["רמה","מספר קריאות","עלות כל אחת","עלות הרמה"],
          rows:[
            [0,1,"n",{v:"n",c:"info"}],
            [1,4,"n/2",{v:"2n",c:"info"}],
            [2,16,"n/4",{v:"4n",c:"hot"}],
            [3,64,"n/8",{v:"8n",c:"hot"}],
            ["…","…","…","…"],
            ["log n","4^log n = n²","1",{v:"n²",c:"good"}]
          ]}
      },
      {
        title: "התשובה הסופית",
        text: "לפי המקרה הראשון של משפט המאסטר, הסיבוכיות היא <span dir=\"ltr\">O(n^log_b a)</span>. נציב: <span dir=\"ltr\">log₂ 4 = 2</span>.",
        formula: "T(n) = O( n^log₂4 ) = O(n²)",
        visual: {type:"note", text:"<b>התשובה: O(n²).</b> במבחן חובה להציג גם את נוסחת הנסיגה וגם את ההשוואה b^k מול a — שם נמצא הניקוד."}
      }
    ]
  },

  "BK-1.4": {
    title: "שני משתני קלט — n ו-m אינם אותו דבר",
    steps: [
      {
        title: "לפני הכול: זיהוי המשתנים",
        text: "בקוד מופיעים <b>שני</b> משתני קלט שונים: <span dir=\"ltr\">n</span> שולט על הלולאה החיצונית ו-<span dir=\"ltr\">m</span> על הפנימית. אין שום מידע שקושר ביניהם — <span dir=\"ltr\">m</span> יכול להיות 5 ו-<span dir=\"ltr\">n</span> יכול להיות מיליון, או להפך.",
        visual: {type:"code", lines:[
          "for (i = 0; i < n; i++)",
          "    for (j = 1; j < m; j *= 2)",
          "        cnt++;"
        ], mark:[1,2]}
      },
      {
        title: "הלולאה החיצונית — ליניארית ב-n",
        text: "<span dir=\"ltr\">i</span> עולה ב-1 מ-0 עד <span dir=\"ltr\">n-1</span>. זו לולאה ליניארית פשוטה: <span dir=\"ltr\">n</span> איטרציות.",
        formula: "מספר איטרציות של #חיצונית = n",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "for (i = 0; i < n; i++)",
            "    for (j = 1; j < m; j *= 2)",
            "        cnt++;"
          ], mark:[1]},
          {type:"vars", items:[{k:"i",v:"0 … n−1",c:"hot"},{k:"סה\"כ",v:"n"}]}
        ]}
      },
      {
        title: "הלולאה הפנימית — הכפלה, לא חיבור",
        text: "<span dir=\"ltr\">j</span> מתחיל ב-1 ו<b>מוכפל</b> ב-2 בכל צעד. אחרי <span dir=\"ltr\">t</span> צעדים ערכו הוא <span dir=\"ltr\">2^t</span>, והלולאה נעצרת כאשר <span dir=\"ltr\">2^t ≥ m</span>.",
        formula: "2^t ≥ m  ⟹  t ≥ log₂ m",
        visual: {type:"table",
          head:["צעד t","j = 2^t","האם j < m ?  (m = 16)"],
          rows:[
            [0,{v:1,c:"hot"},{v:"כן",c:"good"}],
            [1,{v:2,c:"hot"},{v:"כן",c:"good"}],
            [2,{v:4,c:"hot"},{v:"כן",c:"good"}],
            [3,{v:8,c:"hot"},{v:"כן",c:"good"}],
            [4,{v:16,c:"bad"},{v:"לא — עצירה",c:"bad"}]
          ]}
      },
      {
        title: "אימות: log₂16 = 4",
        text: "בטבלה למעלה בוצעו בדיוק 4 איטרציות עבור <span dir=\"ltr\">m = 16</span>, ואכן <span dir=\"ltr\">log₂ 16 = 4</span>. הפנימית היא <span dir=\"ltr\">O(log m)</span> — <b>ולא</b> <span dir=\"ltr\">O(log n)</span>.",
        visual: {type:"vars", items:[
          {k:"m",v:16},
          {k:"איטרציות בפועל",v:4,c:"good"},
          {k:"log₂ m",v:4,c:"good"}
        ]}
      },
      {
        title: "יש כאן תלות? אין",
        text: "הגבול של הפנימית הוא <span dir=\"ltr\">m</span> — הוא לא מזכיר את <span dir=\"ltr\">i</span> בכלל. לכן הפנימית עולה אותו דבר בכל אחד מ-<span dir=\"ltr\">n</span> הסיבובים, וזו מכפלה ולא סכום.",
        visual: {type:"note", text:"תלות ב-i ⟵ סוכמים. אין תלות ⟵ כופלים. כאן אין תלות."}
      },
      {
        title: "כופלים ומקבלים",
        text: "<span dir=\"ltr\">n</span> סיבובים חיצוניים, וכל אחד עולה <span dir=\"ltr\">log m</span>.",
        formula: "T(n, m) = n · log m   ⟹   O(n · log m)"
      },
      {
        title: "המלכודת שעולה נקודות",
        text: "<b>התשובה: <span dir=\"ltr\">O(n·log m)</span>.</b> מי שכותב <span dir=\"ltr\">O(n·log n)</span> מניח בשקט ש-<span dir=\"ltr\">m</span> ו-<span dir=\"ltr\">n</span> מאותו סדר גודל — הנחה שלא ניתנה. זה בדיוק הדפוס שנבדק במבחן 2025 שאלה 1ב'. כשיש שני משתני קלט, <b>שניהם חייבים להופיע בתשובה</b> (אלא אם אחד באמת לא משפיע).",
        visual: {type:"table",
          head:["ניסוח","נכון?","הערה"],
          rows:[
            [{v:"O(n·log m)",c:"good"},{v:"✔",c:"good"},"תלוי בשני המשתנים"],
            [{v:"O(n·log n)",c:"bad"},{v:"✘",c:"bad"},"מניח m ≈ n"],
            [{v:"O(n·m)",c:"bad"},{v:"✘",c:"bad"},"חסם נכון אך לא הדוק"]
          ]}
      }
    ]
  },

  "BK-1.5": {
    title: "i = i*i — הטריק של log log n",
    steps: [
      {
        title: "לולאה אחת, אבל צעד לא רגיל",
        text: "יש כאן רק לולאה אחת, ולכן כל הקושי הוא בשורת הצעד: <span dir=\"ltr\">i = i * i</span>. זה לא חיבור ולא הכפלה בקבוע — זה <b>ריבוע</b>. הריבוע מייצר גידול מהיר בהרבה מהכפלה.",
        visual: {type:"code", lines:[
          "for (i = 2; i < n; i = i * i)",
          "    cnt++;"
        ], mark:[1]}
      },
      {
        title: "רושמים את הערכים בפועל",
        text: "נתחיל מ-2 ונרבע שוב ושוב. כבר אחרי חמישה צעדים אנחנו מעל 4 מיליארד — לכן ברור שמספר האיטרציות יהיה זעיר.",
        visual: {type:"table",
          head:["צעד k","i","i בכתיב חזקות"],
          rows:[
            [0,{v:2,c:"hot"},"2^1 = 2^(2^0)"],
            [1,{v:4,c:"hot"},"2^2 = 2^(2^1)"],
            [2,{v:16,c:"hot"},"2^4 = 2^(2^2)"],
            [3,{v:256,c:"hot"},"2^8 = 2^(2^3)"],
            [4,{v:65536,c:"hot"},"2^16 = 2^(2^4)"],
            [5,{v:"4294967296",c:"good"},"2^32 = 2^(2^5)"]
          ]}
      },
      {
        title: "מזהים את הדפוס",
        text: "העמודה הימנית חושפת את החוק: אחרי <span dir=\"ltr\">k</span> צעדים ערכו של <span dir=\"ltr\">i</span> הוא <span dir=\"ltr\">2</span> בחזקת <span dir=\"ltr\">2^k</span>. כלומר <b>המעריך</b> הוא זה שמוכפל ב-2 בכל צעד, לא הבסיס.",
        formula: "i_k = 2^(2^k)"
      },
      {
        title: "כותבים את תנאי העצירה כמשוואה",
        text: "הלולאה נעצרת ברגע ש-<span dir=\"ltr\">i</span> מגיע ל-<span dir=\"ltr\">n</span> או עובר אותו. נציב את הביטוי שמצאנו.",
        formula: "2^(2^k)  ≥  n"
      },
      {
        title: "לוג ראשון — מורידים את הבסיס",
        text: "ניקח <span dir=\"ltr\">log₂</span> משני האגפים. באגף שמאל <span dir=\"ltr\">log₂</span> של <span dir=\"ltr\">2</span> בחזקת משהו הוא פשוט אותו \"משהו\", ולכן נשאר <span dir=\"ltr\">2^k</span>.",
        formula: "log₂( 2^(2^k) ) ≥ log₂ n   ⟹   2^k ≥ log₂ n"
      },
      {
        title: "לוג שני — וזו התשובה",
        text: "עכשיו לוקחים <span dir=\"ltr\">log₂</span> פעם נוספת, ומקבלים ישירות ביטוי ל-<span dir=\"ltr\">k</span> — מספר האיטרציות. <b>שני</b> הלוגים הרצופים הם המקור ל-<span dir=\"ltr\">log log n</span>.",
        formula: "k ≥ log₂( log₂ n )   ⟹   O(log log n)"
      },
      {
        title: "בדיקה מספרית",
        text: "עבור <span dir=\"ltr\">n = 65537</span> נקבל <span dir=\"ltr\">log₂ n ≈ 16</span> ואז <span dir=\"ltr\">log₂ 16 = 4</span>. ואכן בטבלה: <span dir=\"ltr\">i</span> עובר את 65537 בצעד החמישי — כלומר בערך 4 עד 5 איטרציות. החשבון עומד.",
        visual: {type:"vars", items:[
          {k:"n",v:65537},
          {k:"log₂ n",v:"≈16",c:"info"},
          {k:"log₂log₂ n",v:4,c:"good"},
          {k:"איטרציות בפועל",v:"4–5",c:"good"}
        ]}
      },
      {
        title: "התשובה, ולמה כדאי לזכור אותה בעל פה",
        text: "<b>התשובה: <span dir=\"ltr\">O(log log n)</span>.</b> התבנית <span dir=\"ltr\">i = i*i</span> (או <span dir=\"ltr\">j *= j</span>) חזרה במבחן 2021 ובמבחן 2018 שאלון B. ברגע שאתם רואים ריבוע בשורת הצעד — התשובה היא <span dir=\"ltr\">log log</span>, ותוכלו לגשת ישר להצדקה.",
        visual: {type:"table",
          head:["שורת צעד","מספר איטרציות"],
          rows:[
            ["i++",{v:"O(n)",c:"info"}],
            ["i += c",{v:"O(n)",c:"info"}],
            ["i *= 2  /  i /= 2",{v:"O(log n)",c:"info"}],
            ["i = i * i",{v:"O(log log n)",c:"good"}]
          ]}
      }
    ]
  },

  "BK-1.6": {
    title: "הסכום ההנדסי — למה זה O(n) ולא O(n·log n)",
    steps: [
      {
        title: "המלכודת: זה נראה בדיוק כמו 1.2",
        text: "יש כאן לולאה חיצונית שמחצה את <span dir=\"ltr\">n</span>, ולולאה פנימית שרצה עד <span dir=\"ltr\">n</span>. האינטואיציה הראשונה צועקת <span dir=\"ltr\">O(n·log n)</span> — והיא <b>שגויה</b>. שימו לב לשורה 5.",
        visual: {type:"code", lines:[
          "while (n > 0)",
          "{",
          "    for (j = 0; j < n; j++)",
          "        cnt++;",
          "    n /= 2;",
          "}"
        ], mark:[5]}
      },
      {
        title: "ההבדל הקריטי — הפנימית מצטמקת",
        text: "בשאלה 1.2 המשתנה שנחצה היה <span dir=\"ltr\">i</span>, ואילו הפנימית רצה עד <span dir=\"ltr\">n</span> הקבוע. כאן מי שנחצה הוא <span dir=\"ltr\">n</span> <b>עצמו</b> — אותו <span dir=\"ltr\">n</span> שהפנימית משתמשת בו כגבול. לכן הפנימית נעשית קצרה יותר בכל סיבוב.",
        visual: {type:"note", text:"1.2: הפנימית רצה n בכל סיבוב ⟵ <b>מכפלה</b>. 1.6: הפנימית רצה n, אחר כך n/2, אחר כך n/4 ⟵ <b>סכום</b>."}
      },
      {
        title: "עוקבים בפועל עבור n = 16",
        text: "נריץ את הקוד עם <span dir=\"ltr\">n = 16</span> ונספור כמה פעמים באמת מתבצע <span dir=\"ltr\">cnt++</span>.",
        visual: {type:"table",
          head:["סיבוב","n בכניסה","צעדים פנימיים","cnt מצטבר"],
          rows:[
            [1,{v:16,c:"hot"},16,16],
            [2,{v:8,c:"hot"},8,24],
            [3,{v:4,c:"hot"},4,28],
            [4,{v:2,c:"hot"},2,30],
            [5,{v:1,c:"hot"},1,{v:31,c:"good"}],
            [{v:"עצירה",c:"dim"},{v:0,c:"dim"},{v:"—",c:"dim"},{v:31,c:"good"}]
          ]}
      },
      {
        title: "מה המספר 31 אומר לנו",
        text: "עבור <span dir=\"ltr\">n = 16</span> קיבלנו 31 פעולות. אילו התשובה הייתה <span dir=\"ltr\">n·log n</span> היינו מצפים ל-<span dir=\"ltr\">16 · 4 = 64</span> — כפול מזה. לעומת זאת <span dir=\"ltr\">2n = 32</span> קרוב מאוד ל-31. זהו רמז חזק ש-<span dir=\"ltr\">O(n)</span> היא התשובה.",
        visual: {type:"vars", items:[
          {k:"בפועל",v:31,c:"good"},
          {k:"2n",v:32,c:"good"},
          {k:"n·log n",v:64,c:"bad"}
        ]}
      },
      {
        title: "כותבים את הסכום",
        text: "העמודה השלישית בטבלה היא בדיוק סדרה הנדסית יורדת עם מנה ½. נכתוב אותה באופן כללי.",
        formula: "T(n) = n + n/2 + n/4 + n/8 + … + 2 + 1"
      },
      {
        title: "מדוע סכום הנדסי מתכנס",
        text: "נוציא <span dir=\"ltr\">n</span> כגורם משותף: <span dir=\"ltr\">n·(1 + ½ + ¼ + ⅛ + …)</span>. הסכום בסוגריים הוא הטור ההנדסי האינסופי עם מנה ½, וערכו <b>2 בדיוק</b> — לא משנה כמה מחוברים יש. זו התכונה שהופכת את הכול ל-<span dir=\"ltr\">O(n)</span>.",
        formula: "1 + ½ + ¼ + ⅛ + … = 1/(1−½) = 2"
      },
      {
        title: "מציבים ומקבלים",
        text: "הסכום כולו חסום ב-<span dir=\"ltr\">2n</span>, וזה בדיוק מה שהמדידה נתנה: 31 עבור <span dir=\"ltr\">n = 16</span>, כלומר <span dir=\"ltr\">2n − 1</span>.",
        formula: "T(n) = n · 2 = 2n  =  O(n)"
      },
      {
        title: "המסקנה — ולמה זה שווה 4 נקודות",
        text: "<b>התשובה: <span dir=\"ltr\">O(n)</span>.</b> הכלל הכללי שראוי לזכור: כשהעלות של האיטרציות מהווה סדרה הנדסית <b>יורדת</b>, הסכום הוא מסדר גודל של האיבר <b>הראשון</b> בלבד. וכשהיא סדרה הנדסית <b>עולה</b> — הסכום הוא מסדר גודל של האיבר <b>האחרון</b>.",
        visual: {type:"note", text:"שאלו את עצמכם תמיד: הגבול של הפנימית הוא משתנה קבוע, או משתנה שמשתנה בעצמו? זה ההבדל בין 1.2 ל-1.6."}
      }
    ]
  },

  "BK-1.7": {
    title: "מבחן 2018 שאלון A — שלוש מסגרות בלתי תלויות",
    steps: [
      {
        title: "אסטרטגיה: לפרק, לא לפתור הכול בבת אחת",
        text: "בשאלות \"קבע סיבוכיות לכל מסגרת\" הטעות הנפוצה היא לנסות להבין את הפונקציה כולה. הדרך הנכונה: לנתח כל מסגרת <b>בנפרד</b> ורק בסוף לשאול האם מדובר במכפלה או בחיבור. כאן שלוש המסגרות רצות בזו אחר זו, ולכן בסוף ניקח את המקסימום.",
        visual: {type:"code", lines:[
          "int f1(int arr[], int n, int x)",
          "{",
          "    int idx, i, counter = 0;",
          "    idx = binarySearch(arr, n / 2, x);      // #1",
          "    if (idx >= 0)",
          "    {",
          "        for (i = 1; i < log10(n); i *= 10)  // #2",
          "            counter++;",
          "        for (i = n; i > 0; i -= 10)         // #3",
          "            counter++;",
          "    }",
          "    return counter;",
          "}"
        ], mark:[4,7,9]}
      },
      {
        title: "מסגרת #1 — חיפוש בינארי",
        text: "חיפוש בינארי על מערך ממוין בגודל <span dir=\"ltr\">k</span> עולה <span dir=\"ltr\">O(log k)</span>. כאן הגודל הוא <span dir=\"ltr\">n/2</span>, ולכן העלות היא <span dir=\"ltr\">O(log(n/2))</span>.",
        formula: "log(n/2) = log n − log 2 = log n − 1",
        visual: {type:"code", lines:[
          "idx = binarySearch(arr, n / 2, x);      // #1"
        ], mark:[1]}
      },
      {
        title: "למה הקבוע ½ נעלם",
        text: "לפי חוקי לוגריתמים, <span dir=\"ltr\">log(n/2)</span> שווה ל-<span dir=\"ltr\">log n</span> פחות 1 — הפרש <b>קבוע</b>, לא יחס. הפרש קבוע נבלע לחלוטין בסימון האסימפטוטי, ולכן <b>#1 היא <span dir=\"ltr\">O(log n)</span></b>. חלוקת הקלט בקבוע לא משנה כלל את הסיבוכיות של חיפוש בינארי.",
        visual: {type:"vars", items:[
          {k:"#1",v:"O(log n)",c:"good"}
        ]}
      },
      {
        title: "מסגרת #2 — הגבול הוא כבר לוגריתם",
        text: "כאן חייבים לקרוא בעיון: הגבול העליון של הלולאה הוא <span dir=\"ltr\">log₁₀(n)</span> — כלומר \"ה-<span dir=\"ltr\">n</span> החדש\" שלנו הוא <span dir=\"ltr\">log n</span>. הצעד הוא <span dir=\"ltr\">i *= 10</span>, כלומר הכפלה בקבוע.",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "for (i = 1; i < log10(n); i *= 10)  // #2",
            "    counter++;"
          ], mark:[1]},
          {type:"vars", items:[
            {k:"גבול",v:"log₁₀ n",c:"hot"},
            {k:"צעד",v:"× 10",c:"hot"}
          ]}
        ]}
      },
      {
        title: "כמה איטרציות זה נותן",
        text: "לולאה עם צעד כפלי שרצה עד <span dir=\"ltr\">M</span> עושה <span dir=\"ltr\">log M</span> איטרציות. כאן <span dir=\"ltr\">M = log n</span>, ולכן מספר האיטרציות הוא <span dir=\"ltr\">log(log n)</span>. <b>#2 היא <span dir=\"ltr\">O(log log n)</span>.</b>",
        formula: "10^t ≥ log₁₀ n  ⟹  t ≥ log₁₀( log₁₀ n )",
        visual: {type:"table",
          head:["n","log₁₀ n","ערכי i","איטרציות"],
          rows:[
            ["10⁶",{v:6,c:"info"},"1, 10","2"],
            ["10¹⁰⁰",{v:100,c:"info"},"1, 10, 100 ✗","2"],
            ["10¹⁰⁰⁰",{v:1000,c:"info"},"1, 10, 100","3"]
          ]}
      },
      {
        title: "מסגרת #3 — מרחק חלקי גודל צעד",
        text: "<span dir=\"ltr\">i</span> יורד מ-<span dir=\"ltr\">n</span> עד 0, ובכל צעד יורד ב-10. המרחק שיש לעבור הוא <span dir=\"ltr\">n</span> וגודל הצעד הוא 10, ולכן מספר האיטרציות הוא <span dir=\"ltr\">n/10</span>. הקבוע 1/10 נבלע, ו-<b>#3 היא <span dir=\"ltr\">O(n)</span></b>.",
        formula: "מספר איטרציות = מרחק / צעד = n / 10 = O(n)",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "for (i = n; i > 0; i -= 10)         // #3",
            "    counter++;"
          ], mark:[1]},
          {type:"vars", items:[{k:"n",v:1000},{k:"איטרציות",v:100,c:"hot"},{k:"סדר גודל",v:"O(n)",c:"good"}]}
        ]}
      },
      {
        title: "מה עושה תנאי ה-if",
        text: "שתי הלולאות עטופות ב-<span dir=\"ltr\">if (idx >= 0)</span>. במקרה הגרוע התנאי מתקיים והן רצות — ולכן לצורך חסם עליון מתעלמים ממנו. הוא לא מוסיף ולא מוריד מהסיבוכיות.",
        visual: {type:"note", text:"בניתוח סיבוכיות מניחים תמיד את המקרה הגרוע, אלא אם התבקשתם במפורש למקרה ממוצע או טוב."}
      },
      {
        title: "מחברים — סדרתי, לא מקונן",
        text: "שלוש המסגרות מופיעות זו אחרי זו ואף אחת לא בתוך השנייה. לכן העלות הכוללת היא <b>סכום</b>, וסכום של ביטויים בסימון O שווה למקסימום שביניהם.",
        formula: "O(log n) + O(log log n) + O(n) = O(n)",
        visual: {type:"table",
          head:["מסגרת","סיבוכיות","דירוג"],
          rows:[
            ["#1","O(log n)",{v:"בינוני",c:"info"}],
            ["#2","O(log log n)",{v:"הקטן ביותר",c:"dim"}],
            ["#3",{v:"O(n)",c:"good"},{v:"הגדול ביותר",c:"good"}],
            [{v:"סה\"כ",c:"good"},{v:"O(n)",c:"good"},""]
          ]}
      },
      {
        title: "התשובות הסופיות",
        text: "<b>#1: <span dir=\"ltr\">O(log n)</span> · #2: <span dir=\"ltr\">O(log log n)</span> · #3: <span dir=\"ltr\">O(n)</span> · הפונקציה כולה: <span dir=\"ltr\">O(n)</span>.</b> שימו לב שגם <span dir=\"ltr\">log log n</span> וגם היעלמות הקבועים הופיעו בשאלה אחת — שתי התבניות הנפוצות ביותר בקורס.",
        visual: {type:"note", text:"במבחן: נמקו כל מסגרת בשורה אחת (\"מרחק/צעד\", \"חיפוש בינארי\", \"צעד כפלי על גבול log n\") — זה מספיק לניקוד מלא."}
      }
    ]
  },

  "BK-1.8": {
    title: "מבחן 2018 שאלון B — הלולאה שרצה פעם אחת",
    steps: [
      {
        title: "מפה של הקוד",
        text: "שלוש מסגרות: קריאה למיון, לולאת <span dir=\"ltr\">while</span> חיצונית, ולולאת <span dir=\"ltr\">for</span> פנימית. כאן, בניגוד לשאלה 1.7, המסגרות <b>כן</b> מקוננות — #3 יושבת בתוך #2. לכן חייבים לדעת כמה פעמים #2 באמת רצה.",
        visual: {type:"code", lines:[
          "int f1(int arr[], int n)",
          "{",
          "    int i = 0, j, counter = 0;",
          "    MergeSort(arr, n / 3);              // #1",
          "    while (i < n / 3)                   // #2",
          "    {",
          "        for (j = 3; j < n / 3; j *= j)  // #3",
          "            counter++;",
          "        i = j * 3;",
          "    }",
          "    return counter;",
          "}"
        ], mark:[4,5,7]}
      },
      {
        title: "מסגרת #1 — מיון על שליש מהמערך",
        text: "נתון ש-<span dir=\"ltr\">MergeSort</span> על <span dir=\"ltr\">k</span> איברים עולה <span dir=\"ltr\">O(k·log k)</span>. נציב <span dir=\"ltr\">k = n/3</span>. הקבוע ⅓ מוכפל בביטוי כולו, ולוגריתם של <span dir=\"ltr\">n/3</span> הוא <span dir=\"ltr\">log n</span> פחות קבוע — שניהם נבלעים.",
        formula: "(n/3)·log(n/3) = ⅓·n·(log n − log 3) = O(n·log n)",
        visual: {type:"vars", items:[{k:"#1",v:"O(n·log n)",c:"good"}]}
      },
      {
        title: "מסגרת #3 — שוב הריבוע",
        text: "נטפל קודם בפנימית, כי היא זו שתקבע מה קורה עם #2. הצעד הוא <span dir=\"ltr\">j *= j</span> — כלומר ריבוע, בדיוק התבנית של שאלה 1.5. מ-3, ערכי <span dir=\"ltr\">j</span> הם 3, 9, 81, 6561 — כלומר <span dir=\"ltr\">3^(2^k)</span>.",
        visual: {type:"table",
          head:["צעד k","j","j כחזקה"],
          rows:[
            [0,{v:3,c:"hot"},"3^(2^0)"],
            [1,{v:9,c:"hot"},"3^(2^1)"],
            [2,{v:81,c:"hot"},"3^(2^2)"],
            [3,{v:6561,c:"hot"},"3^(2^3)"],
            [4,{v:"43,046,721",c:"good"},"3^(2^4)"]
          ]}
      },
      {
        title: "פותרים את #3",
        text: "תנאי העצירה הוא <span dir=\"ltr\">3^(2^k) ≥ n/3</span>. לוקחים <span dir=\"ltr\">log₃</span> ומקבלים <span dir=\"ltr\">2^k ≥ log₃(n/3)</span>, ולוג נוסף נותן את מספר האיטרציות. <b>#3 היא <span dir=\"ltr\">O(log log n)</span>.</b>",
        formula: "2^k ≥ log₃(n/3)  ⟹  k ≥ log( log n )"
      },
      {
        title: "המלכודת — מה ערכו של j כשהפנימית מסתיימת",
        text: "זו הנקודה שמפילה את רוב הנבחנים. הלולאה #3 מסתיימת <b>בדיוק כאשר התנאי שלה נשבר</b>, כלומר כאשר <span dir=\"ltr\">j ≥ n/3</span>. הערך הזה של <span dir=\"ltr\">j</span> נשאר בזיכרון וממשיך לשורה הבאה.",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "for (j = 3; j < n / 3; j *= j)  // #3",
            "    counter++;",
            "i = j * 3;"
          ], mark:[3]},
          {type:"vars", items:[
            {k:"j בסיום #3",v:"≥ n/3",c:"hot"},
            {k:"i = j*3",v:"≥ n",c:"bad"}
          ]}
        ]}
      },
      {
        title: "מסגרת #2 — סופרים את האיטרציות שלה",
        text: "בכניסה <span dir=\"ltr\">i = 0</span>, ולכן התנאי <span dir=\"ltr\">i < n/3</span> מתקיים והלולאה נכנסת פעם אחת. בסוף הסיבוב <span dir=\"ltr\">i</span> מקבל ערך <span dir=\"ltr\">≥ n</span>. עכשיו בודקים שוב: האם <span dir=\"ltr\">n < n/3</span>? כמובן שלא. <b>הלולאה יצאה אחרי סיבוב אחד.</b>",
        visual: {type:"table",
          head:["בדיקת התנאי","i","i < n/3 ?","פעולה"],
          rows:[
            ["ראשונה",{v:0,c:"good"},{v:"כן",c:"good"},"נכנסים לגוף"],
            ["שנייה",{v:"≥ n",c:"bad"},{v:"לא",c:"bad"},{v:"יוצאים",c:"bad"}]
          ]}
      },
      {
        title: "אז מהי הסיבוכיות של #2",
        text: "מספר האיטרציות של #2 הוא 1 — קבוע, ללא תלות ב-<span dir=\"ltr\">n</span>. לכן <b>#2 היא <span dir=\"ltr\">O(1)</span></b> מבחינת מספר החזרות. אין כאן שום מכפלה: #3 מתבצעת פעם אחת בסך הכול.",
        visual: {type:"note", text:"אל תניחו שלולאת while רצה \"הרבה\". תמיד עקבו אחרי המשתנה המבקר — לפעמים הוא קופץ מעבר לגבול כבר בסיבוב הראשון."}
      },
      {
        title: "מחברים הכול",
        text: "העלות הכוללת: המיון, ועוד סיבוב אחד של #2 שבתוכו <span dir=\"ltr\">log log n</span> צעדים.",
        formula: "O(n·log n) + 1 · O(log log n) = O(n·log n)",
        visual: {type:"table",
          head:["מסגרת","סיבוכיות"],
          rows:[
            ["#1",{v:"O(n·log n)",c:"good"}],
            ["#2",{v:"O(1) — סיבוב אחד",c:"info"}],
            ["#3",{v:"O(log log n)",c:"info"}],
            [{v:"סה\"כ",c:"good"},{v:"O(n·log n)",c:"good"}]
          ]}
      },
      {
        title: "התשובות, והתבניות שחוזרות",
        text: "<b>#1: <span dir=\"ltr\">O(n·log n)</span> · #2: <span dir=\"ltr\">O(1)</span> · #3: <span dir=\"ltr\">O(log log n)</span> · סה\"כ: <span dir=\"ltr\">O(n·log n)</span>.</b> שתי המלכודות בשאלה הזו — <span dir=\"ltr\">j *= j</span> ו\"לולאה שרצה פעם אחת\" — הופיעו שוב במבחן 2021 שאלה 1. שווה להכיר אותן היטב.",
        visual: {type:"note", text:"כלל אצבע: אם אחרי לולאה פנימית מציבים את משתנה הלולאה הפנימית לתוך משתנה הבקרה החיצוני — כמעט תמיד מדובר במלכודת \"סיבוב אחד\"."}
      }
    ]
  },

  "BK-1.9": {
    title: "מבחן 2022 — הדרך ל-O(n⁴)",
    steps: [
      {
        title: "סקירה: מה יושב בתוך מה",
        text: "מסגרת #1 היא לולאת <span dir=\"ltr\">for</span> חיצונית, ובתוכה שתי לולאות <span dir=\"ltr\">while</span> רצופות: #2 ואז #3. שתיהן מתבצעות מחדש בכל סיבוב של #1 — עובדה שתהיה מכרעת בחישוב הסופי.",
        visual: {type:"code", lines:[
          "int f1(int n)",
          "{",
          "    int counter = 0;",
          "    double i, j;",
          "    for (i = n*n*n; i > n; i -= n / 3.0)   // #1",
          "    {",
          "        j = n * n * n;",
          "        while (j > n)                      // #2",
          "        { counter++;  j -= 3 * n; }",
          "        while (j > 0)                      // #3",
          "        { counter++;  j -= 3 * counter; }",
          "    }",
          "    return counter;",
          "}"
        ], mark:[5,8,10]}
      },
      {
        title: "מסגרת #1 — הכלל \"מרחק חלקי צעד\"",
        text: "בכל לולאה עם צעד <b>חיבורי</b> (חיסור או חיבור של גודל קבוע), מספר האיטרציות הוא פשוט המרחק שיש לעבור חלקי גודל הצעד. כאן המרחק הוא מ-<span dir=\"ltr\">n³</span> עד <span dir=\"ltr\">n</span>, וגודל הצעד הוא <span dir=\"ltr\">n/3</span>.",
        formula: "(n³ − n) / (n/3)  =  3·(n³ − n)/n  ≈  3n²",
        visual: {type:"vars", items:[
          {k:"מרחק",v:"n³ − n",c:"info"},
          {k:"צעד",v:"n/3",c:"info"},
          {k:"#1",v:"O(n²)",c:"good"}
        ]}
      },
      {
        title: "בדיקה מספרית ל-#1",
        text: "נציב <span dir=\"ltr\">n = 30</span>: המרחק הוא <span dir=\"ltr\">27000 − 30 = 26970</span>, הצעד הוא 10, ולכן כ-2697 איטרציות. ואכן <span dir=\"ltr\">3n² = 3·900 = 2700</span>. החישוב מדויק.",
        visual: {type:"table",
          head:["n","מרחק n³−n","צעד n/3","איטרציות","3n²"],
          rows:[
            [30,26970,10,{v:2697,c:"hot"},{v:2700,c:"good"}],
            [60,215940,20,{v:10797,c:"hot"},{v:10800,c:"good"}]
          ]}
      },
      {
        title: "מסגרת #2 — אותו כלל בדיוק",
        text: "<span dir=\"ltr\">j</span> מאותחל ל-<span dir=\"ltr\">n³</span> ויורד עד שהוא כבר לא גדול מ-<span dir=\"ltr\">n</span>, בצעדים של <span dir=\"ltr\">3n</span>. שוב מרחק חלקי צעד.",
        formula: "(n³ − n) / (3n)  ≈  n²/3   ⟹   O(n²)",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "j = n * n * n;",
            "while (j > n)",
            "{ counter++;  j -= 3 * n; }"
          ], mark:[2,3]},
          {type:"vars", items:[
            {k:"j מתחיל ב-",v:"n³",c:"info"},
            {k:"צעד",v:"3n",c:"info"},
            {k:"#2",v:"O(n²)",c:"good"}
          ]}
        ]}
      },
      {
        title: "מה קורה בין #2 ל-#3",
        text: "כאן העניין המעניין: <span dir=\"ltr\">j</span> <b>לא מאותחל מחדש</b> לפני #3. הוא ממשיך מהערך שבו #2 עצרה. #2 עצרה ברגע שהתנאי <span dir=\"ltr\">j > n</span> נשבר, כלומר <span dir=\"ltr\">j ≤ n</span> — ערך קטן יחסית.",
        visual: {type:"vars", items:[
          {k:"j בכניסה ל-#3",v:"≤ n",c:"hot"},
          {k:"counter בשלב זה",v:"≈ n²/3",c:"bad"}
        ]}
      },
      {
        title: "מסגרת #3 — הצעד עצמו ענק",
        text: "הצעד ב-#3 הוא <span dir=\"ltr\">j -= 3 * counter</span>. אבל <span dir=\"ltr\">counter</span> כבר צבר בערך <span dir=\"ltr\">n²/3</span> ספירות מ-#2, ולכן גודל הצעד הוא בערך <span dir=\"ltr\">n²</span>. הערך שנותר ב-<span dir=\"ltr\">j</span> הוא לכל היותר <span dir=\"ltr\">n</span>. צעד אחד בגודל <span dir=\"ltr\">n²</span> מוריד את <span dir=\"ltr\">j</span> מתחת לאפס מיד.",
        formula: "j ≤ n   ,   צעד ≈ 3·(n²/3) = n²   ⟹   מספר קבוע של צעדים",
        visual: {type:"vars", items:[{k:"#3",v:"O(1)",c:"good"}]}
      },
      {
        title: "סכום או מכפלה? — כאן ההכרעה",
        text: "מסגרות #2 ו-#3 יושבות <b>בתוך</b> #1 ומאותחלות מחדש בכל סיבוב (השורה <span dir=\"ltr\">j = n*n*n</span> נמצאת בתוך הלולאה). לכן העלות שלהן מוכפלת במספר הסיבובים של #1 — זו <b>מכפלה</b>.",
        visual: {type:"note", text:"כדי לדעת אם זו מכפלה, שאלו: האם המשתנה של הלולאה הפנימית מאותחל מחדש בכל סיבוב חיצוני? אם כן — מכפלה. אם הוא ממשיך מהמקום שבו עצר — לרוב סכום."}
      },
      {
        title: "מכפילים",
        text: "מספר הסיבובים של #1 הוא <span dir=\"ltr\">O(n²)</span>, ובכל סיבוב מבוצעות <span dir=\"ltr\">O(n²)</span> פעולות ב-#2 ועוד <span dir=\"ltr\">O(1)</span> ב-#3.",
        formula: "T(n) = O(n²) · ( O(n²) + O(1) ) = O(n⁴)"
      },
      {
        title: "התשובות הסופיות",
        text: "<b>#1: <span dir=\"ltr\">O(n²)</span> · #2: <span dir=\"ltr\">O(n²)</span> · #3: <span dir=\"ltr\">O(1)</span> · סה\"כ: <span dir=\"ltr\">O(n⁴)</span>.</b> זו התשובה הגבוהה ביותר שהופיעה במבחני הקורס. אם החשבון מוביל לשם — אל תפחדו לכתוב אותה, ותציגו את המכפלה במפורש.",
        visual: {type:"table",
          head:["מסגרת","סיבוכיות","הסבר בשורה"],
          rows:[
            ["#1",{v:"O(n²)",c:"good"},"n³ / (n/3)"],
            ["#2",{v:"O(n²)",c:"good"},"n³ / 3n"],
            ["#3",{v:"O(1)",c:"info"},"counter ענק ⟵ צעד ענק"],
            [{v:"סה\"כ",c:"good"},{v:"O(n⁴)",c:"good"},"מכפלה — j מאותחל מחדש"]
          ]}
      }
    ]
  },

  "BK-1.10": {
    title: "טווח ריבועי כפול חלוקה — n²·log n",
    steps: [
      {
        title: "בודקים תלות",
        text: "כרגיל, השאלה הראשונה: האם הגבול או הצעד של הפנימית מזכירים את <span dir=\"ltr\">i</span>? הפנימית היא <span dir=\"ltr\">for (j = n; j &gt; 1; j /= 2)</span> — רק <span dir=\"ltr\">n</span>. אין תלות, ולכן מכפלה.",
        visual: {type:"code", lines:[
          "for (i = 0; i <= n*n; i++)",
          "    for (j = n; j > 1; j /= 2)",
          "        printf(\"hi!\\n\");"
        ], mark:[2]}
      },
      {
        title: "החיצונית — למה n² ולא n",
        text: "הגבול העליון הוא <span dir=\"ltr\">n*n</span>, והצעד הוא 1. לכן מספר האיטרציות הוא <span dir=\"ltr\">n² + 1</span>. העובדה שהתנאי הוא <span dir=\"ltr\">&lt;=</span> ולא <span dir=\"ltr\">&lt;</span> מוסיפה איטרציה אחת בלבד — חסרת משמעות אסימפטוטית.",
        formula: "i = 0, 1, 2, …, n²   ⟹   n² + 1 = O(n²)",
        visual: {type:"vars", items:[
          {k:"n",v:10},
          {k:"איטרציות חיצוניות",v:101,c:"hot"},
          {k:"סדר גודל",v:"O(n²)",c:"good"}
        ]}
      },
      {
        title: "הפנימית — חלוקה ב-2",
        text: "<span dir=\"ltr\">j</span> מתחיל ב-<span dir=\"ltr\">n</span> ומתחלק ב-2 עד שהוא מגיע ל-1. זו התבנית הסטנדרטית של <span dir=\"ltr\">O(log n)</span>.",
        visual: {type:"table",
          head:["צעד","j  (n = 32)","ממשיכים?"],
          rows:[
            [1,{v:32,c:"hot"},{v:"כן",c:"good"}],
            [2,{v:16,c:"hot"},{v:"כן",c:"good"}],
            [3,{v:8,c:"hot"},{v:"כן",c:"good"}],
            [4,{v:4,c:"hot"},{v:"כן",c:"good"}],
            [5,{v:2,c:"hot"},{v:"כן",c:"good"}],
            ["—",{v:1,c:"bad"},{v:"לא — עצירה",c:"bad"}]
          ]}
      },
      {
        title: "אימות: 5 = log₂ 32",
        text: "הטבלה מראה 5 איטרציות עבור <span dir=\"ltr\">n = 32</span>, ואכן <span dir=\"ltr\">log₂ 32 = 5</span>. הפנימית היא <span dir=\"ltr\">O(log n)</span>.",
        formula: "n / 2^t ≤ 1  ⟹  t ≥ log₂ n"
      },
      {
        title: "כופלים",
        text: "מכיוון שאין תלות, כל אחד מ-<span dir=\"ltr\">n²</span> הסיבובים החיצוניים עולה בדיוק <span dir=\"ltr\">log n</span>. זו מכפלה נקייה.",
        formula: "T(n) = (n² + 1) · log₂ n  =  O(n² · log n)"
      },
      {
        title: "בדיקה מספרית",
        text: "עבור <span dir=\"ltr\">n = 32</span> נקבל <span dir=\"ltr\">1025 · 5 = 5125</span> הדפסות. אם היינו טועים וכותבים <span dir=\"ltr\">O(n²)</span> היינו מפספסים פקטור 5, ואם היינו כותבים <span dir=\"ltr\">O(n³)</span> היינו מנפחים ל-32768.",
        visual: {type:"vars", items:[
          {k:"בפועל",v:5125,c:"good"},
          {k:"n²",v:1024,c:"bad"},
          {k:"n³",v:32768,c:"bad"}
        ]}
      },
      {
        title: "התשובה",
        text: "<b>התשובה: <span dir=\"ltr\">O(n² · log n)</span>.</b> זו הדוגמה הרשמית מהמצגת לשילוב \"טווח ריבועי × לולאת חלוקה\". שימו לב כמה החישוב פשוט ברגע שאתם מפרידים את שתי הלולאות ורק בסוף מחליטים בין כפל לסכום.",
        visual: {type:"table",
          head:["לולאה","מספר איטרציות"],
          rows:[
            ["חיצונית i ≤ n²",{v:"O(n²)",c:"info"}],
            ["פנימית j /= 2",{v:"O(log n)",c:"info"}],
            [{v:"מכפלה",c:"good"},{v:"O(n²·log n)",c:"good"}]
          ]}
      }
    ]
  },

  "BK-1.11": {
    title: "מבחן 2021 — ריבוע, ואז לולאה חד-פעמית",
    steps: [
      {
        title: "מבנה הקוד",
        text: "יש כאן שני חלקים <b>עוקבים</b>: קודם לולאת #1 שמסתיימת לגמרי, ואחר כך לולאת #2 שבתוכה #3. הערך של <span dir=\"ltr\">i</span> שנשאר מ-#1 הוא זה שנכנס לתנאי של #2 — קשר סמוי שקל לפספס.",
        visual: {type:"code", lines:[
          "for (i = 2; i <= n*n; i = i*i)   // #1",
          "    counter++;",
          "while (i > 0)                    // #2",
          "{",
          "    for (j = n/2; j >= 1; j /= 2)  // #3",
          "        counter++;",
          "    i = j - 1;",
          "}"
        ], mark:[1,3,5]}
      },
      {
        title: "מסגרת #1 — הריבוע המוכר",
        text: "הצעד הוא <span dir=\"ltr\">i = i*i</span>, כלומר <span dir=\"ltr\">i</span> אחרי <span dir=\"ltr\">k</span> צעדים שווה <span dir=\"ltr\">2^(2^k)</span> — בדיוק כמו בשאלה 1.5. הגבול הפעם הוא <span dir=\"ltr\">n²</span> ולא <span dir=\"ltr\">n</span>, אבל זה כמעט לא משנה.",
        visual: {type:"table",
          head:["k","i","i ≤ n²?  (n = 100)"],
          rows:[
            [0,{v:2,c:"hot"},{v:"כן",c:"good"}],
            [1,{v:4,c:"hot"},{v:"כן",c:"good"}],
            [2,{v:16,c:"hot"},{v:"כן",c:"good"}],
            [3,{v:256,c:"hot"},{v:"כן",c:"good"}],
            [4,{v:65536,c:"bad"},{v:"לא (>10000)",c:"bad"}]
          ]}
      },
      {
        title: "פותרים את #1",
        text: "תנאי העצירה: <span dir=\"ltr\">2^(2^k) &gt; n²</span>. שני לוגים נותנים <span dir=\"ltr\">k &gt; log(2·log n)</span>, והקבוע 2 בפנים נבלע. <b>#1 היא <span dir=\"ltr\">O(log log n)</span>.</b>",
        formula: "2^k > 2·log₂ n  ⟹  k > log₂(2·log₂ n) = O(log log n)"
      },
      {
        title: "מסגרת #3 — לולאת חלוקה רגילה",
        text: "נטפל בפנימית לפני החיצונית, כי הערך שהיא משאירה ב-<span dir=\"ltr\">j</span> קובע מה קורה ל-#2. <span dir=\"ltr\">j</span> מתחיל ב-<span dir=\"ltr\">n/2</span> ומתחלק ב-2 כל עוד הוא לפחות 1. <b>#3 היא <span dir=\"ltr\">O(log n)</span>.</b>",
        visual: {type:"table",
          head:["צעד","j  (n = 16)"],
          rows:[
            [1,{v:8,c:"hot"}],
            [2,{v:4,c:"hot"}],
            [3,{v:2,c:"hot"}],
            [4,{v:1,c:"hot"}],
            [{v:"יציאה",c:"bad"},{v:0,c:"bad"}]
          ]}
      },
      {
        title: "הפרט המכריע — j מסיים באפס",
        text: "בחלוקת שלמים, אחרי <span dir=\"ltr\">j = 1</span> מתבצע <span dir=\"ltr\">j /= 2</span> ומתקבל <b>0</b>. עכשיו התנאי <span dir=\"ltr\">j &gt;= 1</span> נשבר והלולאה יוצאת — <b>עם <span dir=\"ltr\">j = 0</span></b>. הערך הזה חשוב יותר מכל מה שקרה בלולאה.",
        visual: {type:"vars", items:[{k:"j בסיום #3",v:0,c:"hot"}]}
      },
      {
        title: "מסגרת #2 — כמה פעמים היא באמת רצה",
        text: "בכניסה הראשונה <span dir=\"ltr\">i</span> ענק (נשאר מ-#1) ולכן נכנסים. בסוף הגוף מתבצע <span dir=\"ltr\">i = j - 1 = 0 - 1 = -1</span>. הבדיקה הבאה, <span dir=\"ltr\">i &gt; 0</span>, נכשלת. <b>#2 רצה בדיוק פעם אחת.</b>",
        visual: {type:"table",
          head:["בדיקה","i","i > 0 ?","פעולה"],
          rows:[
            ["ראשונה",{v:"> n²",c:"good"},{v:"כן",c:"good"},"מריצים את #3, ואז i = −1"],
            ["שנייה",{v:"−1",c:"bad"},{v:"לא",c:"bad"},{v:"יוצאים",c:"bad"}]
          ]}
      },
      {
        title: "מרכיבים את התשובה",
        text: "העלות היא #1 (שרצה עד הסוף) ועוד סיבוב יחיד של #2 שבתוכו #3. אין כאן שום מכפלה, כי #2 רצה פעם אחת בלבד.",
        formula: "O(log log n) + 1 · O(log n) = O(log n)"
      },
      {
        title: "התשובות הסופיות",
        text: "<b>#1: <span dir=\"ltr\">O(log log n)</span> · #2: רצה פעם אחת · #3: <span dir=\"ltr\">O(log n)</span> · סה\"כ: <span dir=\"ltr\">O(log n)</span>.</b> <span dir=\"ltr\">log n</span> גדול מ-<span dir=\"ltr\">log log n</span>, ולכן הוא שולט בסכום.",
        visual: {type:"note", text:"סדר הגדילה שכדאי לזכור בעל פה: <span dir=\"ltr\">O(1) &lt; O(log log n) &lt; O(log n) &lt; O(√n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ)</span>"}
      }
    ]
  },

  "BK-1.12": {
    title: "מבחן 2023 — כשה-n החדש הוא log n",
    steps: [
      {
        title: "הנחת היסוד של השאלה",
        text: "נתון במפורש ש-<span dir=\"ltr\">i = log(n)</span>. זהו המפתח לכל השאלה: מרגע שמשתנה מאותחל ל-<span dir=\"ltr\">log n</span>, יש להתייחס אל <span dir=\"ltr\">log n</span> כאילו הוא \"ה-<span dir=\"ltr\">n</span> החדש\", ולהפעיל עליו את אותם כללים.",
        visual: {type:"code", lines:[
          "for (j = log(n); j > 2; j /= 4)      // #1",
          "while (i > 1) {                      // #2   (i = log n)",
          "    for (j = 100; j < n*n; j *= 100) // #3",
          "        counter++;",
          "    i--;",
          "}"
        ], mark:[1,2,3]}
      },
      {
        title: "מסגרת #1 — חלוקה ב-4 על גבול log n",
        text: "לולאת חלוקה שמתחילה ב-<span dir=\"ltr\">M</span> ומחלקת בקבוע עושה <span dir=\"ltr\">log M</span> איטרציות. כאן <span dir=\"ltr\">M = log n</span>, ולכן מספר האיטרציות הוא <span dir=\"ltr\">log₄(log n)</span>. הבסיס 4 נבלע.",
        formula: "log₄( log n ) = O(log log n)",
        visual: {type:"table",
          head:["n","log₂ n","ערכי j","איטרציות"],
          rows:[
            ["2¹⁶",{v:16,c:"info"},"16, 4","2"],
            ["2²⁵⁶",{v:256,c:"info"},"256, 64, 16, 4","4"]
          ]}
      },
      {
        title: "מסגרת #2 — ספירה לאחור מ-log n",
        text: "<span dir=\"ltr\">i</span> מתחיל ב-<span dir=\"ltr\">log n</span> ויורד ב-1 בכל סיבוב עד שהוא מגיע ל-1. זו לולאה \"ליניארית\" — אבל ליניארית ב<b>גודל החדש</b>, כלומר <span dir=\"ltr\">log n</span>.",
        formula: "מספר איטרציות = log n − 1 = O(log n)",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "while (i > 1) {",
            "    ...",
            "    i--;",
            "}"
          ], mark:[1,3]},
          {type:"vars", items:[
            {k:"i מתחיל",v:"log n",c:"hot"},
            {k:"צעד",v:"−1"},
            {k:"#2",v:"O(log n)",c:"good"}
          ]}
        ]}
      },
      {
        title: "מסגרת #3 — הכפלה ב-100",
        text: "<span dir=\"ltr\">j</span> מתחיל ב-100 ומוכפל ב-100 בכל צעד. אחרי <span dir=\"ltr\">t</span> צעדים ערכו <span dir=\"ltr\">100^(t+1)</span>, והלולאה נעצרת כאשר הוא מגיע ל-<span dir=\"ltr\">n²</span>.",
        visual: {type:"table",
          head:["צעד t","j","j < n² ?  (n = 10⁶)"],
          rows:[
            [0,{v:"100",c:"hot"},{v:"כן",c:"good"}],
            [1,{v:"10,000",c:"hot"},{v:"כן",c:"good"}],
            [2,{v:"10⁶",c:"hot"},{v:"כן",c:"good"}],
            [3,{v:"10⁸",c:"hot"},{v:"כן",c:"good"}],
            [4,{v:"10¹⁰",c:"hot"},{v:"כן",c:"good"}],
            [5,{v:"10¹²",c:"bad"},{v:"לא — עצירה",c:"bad"}]
          ]}
      },
      {
        title: "פותרים את #3",
        text: "מספר האיטרציות הוא <span dir=\"ltr\">log₁₀₀(n²)</span>. החזקה 2 יוצאת כמקדם והבסיס 100 הופך לקבוע — שניהם נעלמים. <b>#3 היא <span dir=\"ltr\">O(log n)</span></b>, למרות שהגבול הוא <span dir=\"ltr\">n²</span>.",
        formula: "log₁₀₀(n²) = 2·log n / log 100 = O(log n)",
        visual: {type:"note", text:"חזקה בתוך לוגריתם היא <b>מקדם כפלי</b>, ולכן היא לא משנה את סדר הגודל. <span dir=\"ltr\">log(n²) = 2·log n = O(log n)</span>."}
      },
      {
        title: "מכפלה או סכום?",
        text: "#1 עומדת בפני עצמה ומסתיימת לפני שמתחילה #2 — ולכן היא <b>מתחברת</b>. לעומת זאת #3 יושבת <b>בתוך</b> הגוף של #2 ומאותחלת מחדש (<span dir=\"ltr\">j = 100</span>) בכל סיבוב — ולכן היא <b>מוכפלת</b>.",
        visual: {type:"note", text:"מסגרת עוקבת ⟵ חיבור (מקסימום). מסגרת מקוננת ⟵ מכפלה."}
      },
      {
        title: "מרכיבים",
        text: "<span dir=\"ltr\">log n</span> סיבובים של #2, ובכל אחד <span dir=\"ltr\">log n</span> פעולות של #3.",
        formula: "O(log log n) + O(log n)·O(log n) = O(log² n)"
      },
      {
        title: "התשובות הסופיות",
        text: "<b>#1: <span dir=\"ltr\">O(log log n)</span> · #2: <span dir=\"ltr\">O(log n)</span> · #3: <span dir=\"ltr\">O(log n)</span> · סה\"כ: <span dir=\"ltr\">O(log² n)</span>.</b> שימו לב לכתיב: <span dir=\"ltr\">log²n</span> פירושו <span dir=\"ltr\">(log n)²</span> ולא <span dir=\"ltr\">log(n²)</span> — השני שווה סתם <span dir=\"ltr\">O(log n)</span>.",
        visual: {type:"table",
          head:["ביטוי","משמעות","סדר גודל"],
          rows:[
            ["log²n","(log n)·(log n)",{v:"O(log²n)",c:"good"}],
            ["log(n²)","2·log n",{v:"O(log n)",c:"info"}],
            ["log log n","log של log n",{v:"קטן מאוד",c:"dim"}]
          ]}
      }
    ]
  },

  "BK-1.13": {
    title: "מבחן 2024 — שלושה סעיפים, שלוש טכניקות",
    steps: [
      {
        title: "מה השאלה בעצם בודקת",
        text: "שלושת הסעיפים אינם קשורים זה לזה, וכל אחד מהם בודק טכניקה אחרת: <b>(א)</b> ניתוח אמורטייזד — ספירת סך הצעדים במקום כפל לולאות; <b>(ב)</b> חיבור מסגרות עוקבות; <b>(ג)</b> משפט המאסטר. כדאי לפתור אותם בסדר עולה של קושי.",
        visual: {type:"table",
          head:["סעיף","נושא","הכלי"],
          rows:[
            ["א","שתי while על אותו i",{v:"סך הצעדים",c:"info"}],
            ["ב","שתי לולאות עוקבות",{v:"מקסימום",c:"info"}],
            ["ג","T(n)=2T(n/2)+O(1)",{v:"נוסחת האב",c:"info"}]
          ]}
      },
      {
        title: "סעיף א' — למה כפל הוא טעות כאן",
        text: "שתי לולאות <span dir=\"ltr\">while</span> מקוננות מפתות אותנו לכפול <span dir=\"ltr\">n · n</span>. אבל שתיהן מקדמות את <b>אותו</b> משתנה <span dir=\"ltr\">i</span>, ואף אחת מהן לא מאפסת אותו. <span dir=\"ltr\">i</span> רק עולה, אף פעם לא חוזר אחורה.",
        visual: {type:"code", lines:[
          "i = 0;",
          "while (i < n) {",
          "    while (i < n && <תנאי רצף>)",
          "        i++;            // i רק עולה",
          "    i++;                // גם כאן",
          "}"
        ], mark:[3,4,5]}
      },
      {
        title: "סעיף א' — סופרים את סך הצעדים",
        text: "הטכניקה הנכונה: במקום לשאול \"כמה פעמים כל לולאה רצה\", שואלים <b>\"כמה פעולות <span dir=\"ltr\">i++</span> מתבצעות בסך הכול לאורך כל הריצה?\"</b>. מכיוון ש-<span dir=\"ltr\">i</span> מתחיל ב-0, עולה תמיד ב-1, ולא עובר את <span dir=\"ltr\">n</span> — התשובה חסומה ב-<span dir=\"ltr\">n</span>.",
        formula: "סך צעדי i לאורך כל הריצה  ≤  n   ⟹   O(n)",
        visual: {type:"array",
          cells:[{v:0,c:"good"},{v:1,c:"good"},{v:2,c:"good"},{v:3,c:"hot"},4,5,6,7],
          base:0,
          brace:{from:0,to:3,text:"i עבר עד כה"},
          caption:"i מתקדם רק קדימה — סך הצעדים לכל אורך התוכנית חסום ב-n"}
      },
      {
        title: "סעיף ב' — הלולאה הראשונה",
        text: "<span dir=\"ltr\">for (i = 1; i &lt; log(n); i *= 2)</span>: צעד כפלי, וגבול <span dir=\"ltr\">log n</span>. שוב התבנית \"<span dir=\"ltr\">log n</span> הוא ה-<span dir=\"ltr\">n</span> החדש\" — מספר האיטרציות הוא <span dir=\"ltr\">log(log n)</span>.",
        formula: "2^t ≥ log n  ⟹  t ≥ log log n   ⟹   O(log log n)",
        visual: {type:"rows", items:[
          {type:"code", lines:["for (i = 1; i < log(n); i *= 2)"], mark:[1]},
          {type:"vars", items:[{k:"גבול",v:"log n",c:"hot"},{k:"צעד",v:"×2",c:"hot"},{k:"תוצאה",v:"O(log log n)",c:"good"}]}
        ]}
      },
      {
        title: "סעיף ב' — הלולאה השנייה, והחיבור",
        text: "<span dir=\"ltr\">for (i = n; i &gt; 0; i -= 2)</span>: מרחק <span dir=\"ltr\">n</span> בצעדים של 2 — כלומר <span dir=\"ltr\">n/2</span> איטרציות, שהן <span dir=\"ltr\">O(n)</span>. שתי הלולאות עוקבות ולא מקוננות, ולכן מחברים ולוקחים את המקסימום.",
        formula: "O(log log n) + O(n) = O(n)",
        visual: {type:"table",
          head:["לולאה","סיבוכיות"],
          rows:[
            ["הראשונה",{v:"O(log log n)",c:"dim"}],
            ["השנייה",{v:"O(n)",c:"good"}],
            [{v:"סה\"כ",c:"good"},{v:"O(n)",c:"good"}]
          ]}
      },
      {
        title: "סעיף ג' — מזהים את הפרמטרים",
        text: "הנוסחה היא <span dir=\"ltr\">T(n) = 2T(n/2) + O(1)</span>. נשווה לתבנית הכללית <span dir=\"ltr\">T(n) = a·T(n/b) + O(n^k)</span>: יש שתי קריאות (<span dir=\"ltr\">a = 2</span>), הקלט נחצה (<span dir=\"ltr\">b = 2</span>), והעבודה המקומית קבועה — כלומר <span dir=\"ltr\">O(n⁰)</span>, ולכן <span dir=\"ltr\">k = 0</span>.",
        visual: {type:"vars", items:[
          {k:"a",v:2,c:"hot"},
          {k:"b",v:2,c:"hot"},
          {k:"k",v:0,c:"hot"}
        ]}
      },
      {
        title: "סעיף ג' — מפעילים את משפט המאסטר",
        text: "משווים <span dir=\"ltr\">b^k = 2⁰ = 1</span> מול <span dir=\"ltr\">a = 2</span>. מכיוון ש-<span dir=\"ltr\">1 &lt; 2</span>, אנחנו במקרה הראשון — הרקורסיה שולטת, והתשובה היא <span dir=\"ltr\">O(n^log_b a)</span>.",
        formula: "b^k = 1 < 2 = a  ⟹  O( n^log₂2 ) = O(n)"
      },
      {
        title: "אינטואיציה לסעיף ג'",
        text: "אפשר לראות זאת גם ישירות: עץ הקריאות מכפיל את מספר הקריאות בכל רמה (1, 2, 4, 8…) עד עומק <span dir=\"ltr\">log n</span>. סך העלים הוא <span dir=\"ltr\">2^log n = n</span>, וכל אחד עולה <span dir=\"ltr\">O(1)</span>. זו בדיוק הסיבוכיות של מעבר על עץ בינארי מלא.",
        visual: {type:"tree", root:{v:"n",c:"hot",
          l:{v:"n/2",l:{v:"n/4",c:"good"},r:{v:"n/4",c:"good"}},
          r:{v:"n/2",l:{v:"n/4",c:"good"},r:{v:"n/4",c:"good"}}},
          caption:"מספר הקריאות מוכפל בכל רמה — n עלים בעלות O(1) כל אחד"}
      },
      {
        title: "שלוש התשובות",
        text: "<b>א: <span dir=\"ltr\">O(n)</span> · ב: המסגרת הראשונה <span dir=\"ltr\">O(log log n)</span>, הכול <span dir=\"ltr\">O(n)</span> · ג: <span dir=\"ltr\">O(n)</span>.</b> שלושתם יצאו <span dir=\"ltr\">O(n)</span> — במקרה, אך מסיבות שונות לגמרי. הנימוק הוא מה שנבדק.",
        visual: {type:"note", text:"בסעיף א' הקפידו לכתוב במפורש \"סך הצעדים של i חסום ב-n, ולכן אין כאן מכפלה\" — זה המשפט שמזכה בניקוד."}
      }
    ]
  },

  "BK-1.14": {
    title: "מבחן 2025 ש'1א — הרקורסיה המשולשת והסתירה",
    steps: [
      {
        title: "שני חלקים לנתח",
        text: "הפונקציה מורכבת ממסגרת לא-רקורסיבית (לולאת <span dir=\"ltr\">while</span>) ומשלוש קריאות רקורסיביות. נטפל בהם בנפרד, ורק בסוף נחבר לנוסחת נסיגה.",
        visual: {type:"code", lines:[
          "if (n < 3) return;",
          "int i = n*n;",
          "while (i > 1){ printf(\"*\"); i /= n; }  // מסגרת 1",
          "f1(n/3); f1(n/3); f1(n/3);"
        ], mark:[3,4]}
      },
      {
        title: "עוקבים אחרי המסגרת — בפועל",
        text: "<span dir=\"ltr\">i</span> מאותחל ל-<span dir=\"ltr\">n²</span>, ובכל צעד מתחלק ב-<span dir=\"ltr\">n</span> — <b>לא ב-2</b>. נציב <span dir=\"ltr\">n = 9</span> ונעקוב.",
        visual: {type:"table",
          head:["איטרציה","i בכניסה","i אחרי i /= n","i > 1 ?"],
          rows:[
            [1,{v:81,c:"hot"},{v:9,c:"hot"},{v:"כן",c:"good"}],
            [2,{v:9,c:"hot"},{v:1,c:"hot"},{v:"לא",c:"bad"}],
            [{v:"סה\"כ",c:"good"},{v:"2 איטרציות",c:"good"},"",""]
          ]}
      },
      {
        title: "המסקנה מהמעקב — המסגרת היא O(1)",
        text: "המסלול הוא תמיד <span dir=\"ltr\">n² → n → 1</span>, בלי קשר לגודל <span dir=\"ltr\">n</span>. שתי איטרציות בלבד. בלשון פורמלית: מספר האיטרציות הוא <span dir=\"ltr\">log_n(n²) = 2</span> — קבוע.",
        formula: "log_n( n² ) = 2   ⟹   O(1)",
        visual: {type:"note", text:"טעות נפוצה: לראות \"חלוקה בלולאה\" ולזעוק log n. אבל כאן מחלקים ב-<b>n</b> ולא בקבוע — ולוגריתם בבסיס n של n² הוא פשוט 2."}
      },
      {
        title: "החלק הרקורסיבי",
        text: "בשורה האחרונה יש <b>שלוש</b> קריאות ל-<span dir=\"ltr\">f1(n/3)</span>. לכן <span dir=\"ltr\">a = 3</span> ו-<span dir=\"ltr\">b = 3</span>. תנאי העצירה הוא <span dir=\"ltr\">n &lt; 3</span>.",
        visual: {type:"call", frames:[
          {label:"f1(27)"},
          {label:"f1(9)"},
          {label:"f1(3)"},
          {label:"f1(1) → return", c:"good"}
        ]}
      },
      {
        title: "נוסחת הנסיגה לפי הקוד המודפס",
        text: "אם המסגרת היא <span dir=\"ltr\">O(1)</span>, מקבלים נוסחה עם <span dir=\"ltr\">k = 0</span>. נפעיל את משפט המאסטר: <span dir=\"ltr\">b^k = 3⁰ = 1</span> מול <span dir=\"ltr\">a = 3</span> — הרקורסיה מנצחת.",
        formula: "T(n) = 3T(n/3) + O(1)  ⟹  O( n^log₃3 ) = O(n)"
      },
      {
        title: "התשובה הרשמית — ומה היא מניחה",
        text: "פתרון הבוחן טוען שהמסגרת היא <span dir=\"ltr\">O(n)</span>, ומכאן <span dir=\"ltr\">T(n) = 3T(n/3) + O(n)</span>. במקרה זה <span dir=\"ltr\">b^k = 3¹ = 3 = a</span> — <b>המקרה השני</b> של משפט המאסטר, שנותן <span dir=\"ltr\">O(n·log n)</span>.",
        formula: "T(n) = 3T(n/3) + O(n)  ⟹  b^k = a  ⟹  O(n·log n)"
      },
      {
        title: "שתי הגרסאות זו מול זו",
        text: "ההבדל היחיד הוא הערכת המסגרת. אם בקוד היה כתוב <span dir=\"ltr\">i--</span> או <span dir=\"ltr\">i -= n</span> במקום <span dir=\"ltr\">i /= n</span>, המסגרת אכן הייתה <span dir=\"ltr\">O(n)</span> והתשובה הרשמית נכונה. לפי הקוד <b>כפי שהוא מודפס</b> — המסגרת היא <span dir=\"ltr\">O(1)</span>.",
        visual: {type:"table",
          head:["הנחה על המסגרת","נוסחת נסיגה","b^k מול a","תוצאה"],
          rows:[
            [{v:"O(1) — לפי הקוד",c:"info"},"3T(n/3)+O(1)","1 < 3",{v:"O(n)",c:"info"}],
            [{v:"O(n) — רשמית",c:"good"},"3T(n/3)+O(n)","3 = 3",{v:"O(n·log n)",c:"good"}]
          ]}
      },
      {
        title: "מה לכתוב במבחן",
        text: "כתבו את המעקב במפורש: \"<span dir=\"ltr\">i: n² → n → 1</span>, כלומר 2 איטרציות, ולכן המסגרת <span dir=\"ltr\">O(1)</span>\", ואז את נוסחת הנסיגה ואת הפתרון <span dir=\"ltr\">O(n)</span>. הוסיפו שורה: \"אם הכוונה הייתה ל-<span dir=\"ltr\">i /= 2</span> או לצעד חיבורי, המסגרת <span dir=\"ltr\">O(log n)</span>/<span dir=\"ltr\">O(n)</span> והתוצאה <span dir=\"ltr\">O(n·log n)</span>\". תשובה שמראה מעקב מפורש מקבלת ניקוד בכל מקרה.",
        visual: {type:"note", text:"כלל זהב לשאלות עם סתירה: <b>הראו את המעקב</b>. בוחן לא יוריד נקודות על חשבון מפורש ונכון."}
      }
    ]
  },

  "BK-1.15": {
    title: "מבחן 2025 ש'1ב — חיפוש בינארי שמזין לולאה ליניארית",
    steps: [
      {
        title: "מזהים את שני משתני הקלט",
        text: "יש שני מערכים בגדלים שונים: <span dir=\"ltr\">nArr</span> בגודל <span dir=\"ltr\">n</span> ו-<span dir=\"ltr\">mArr</span> הממוין בגודל <span dir=\"ltr\">m</span>. כמו בשאלה 1.4, התשובה חייבת להיכתב כפונקציה של שניהם.",
        visual: {type:"code", lines:[
          "for (i = 0; i < n; i++){",
          "    cnt = binarySearch(mArr, m, nArr[i]);  // מסגרת 1",
          "    int t = cnt;",
          "    while (t > 0){ print(\"*\"); t--; }      // מסגרת 2",
          "}"
        ], mark:[2,4]}
      },
      {
        title: "הלולאה החיצונית",
        text: "עוברים על כל אחד מ-<span dir=\"ltr\">n</span> האיברים של <span dir=\"ltr\">nArr</span>, ולכל אחד מבצעים את שתי המסגרות. זו לולאה ליניארית פשוטה — <span dir=\"ltr\">n</span> איטרציות.",
        visual: {type:"rows", items:[
          {type:"array", cells:[{v:"nArr[0]",c:"hot"},"nArr[1]","nArr[2]","…","nArr[n−1]"], base:0,
            caption:"החיצונית עוברת על כל n האיברים"},
          {type:"vars", items:[{k:"איטרציות חיצוניות",v:"n",c:"good"}]}
        ]}
      },
      {
        title: "מסגרת 1 — חיפוש בינארי",
        text: "<span dir=\"ltr\">binarySearch</span> על מערך ממוין בגודל <span dir=\"ltr\">m</span> עולה <span dir=\"ltr\">O(log m)</span>. שימו לב: <b>log m</b>, לא <span dir=\"ltr\">log n</span> — הגודל שנחפש בו הוא של <span dir=\"ltr\">mArr</span>.",
        formula: "מסגרת 1 = O(log m)",
        visual: {type:"vars", items:[{k:"מסגרת 1",v:"O(log m)",c:"good"}]}
      },
      {
        title: "מה בעצם מוחזר ל-cnt",
        text: "זו הנקודה הקריטית. <span dir=\"ltr\">binarySearch</span> לא מחזיר את <b>הערך</b> אלא את <b>האינדקס</b> שבו נמצא האיבר בתוך <span dir=\"ltr\">mArr</span>. אינדקס במערך בגודל <span dir=\"ltr\">m</span> יכול להגיע עד <span dir=\"ltr\">m−1</span>.",
        visual: {type:"array",
          cells:[3,7,11,{v:19,c:"hot"},23,31,44,{v:97,c:"good"}],
          base:0,
          brace:{from:7,to:7,text:"אינדקס m−1"},
          caption:"במקרה הגרוע האיבר נמצא בסוף — ואז cnt = m−1"}
      },
      {
        title: "מסגרת 2 — ספירה לאחור מ-cnt",
        text: "הלולאה מורידה את <span dir=\"ltr\">t</span> ב-1 מ-<span dir=\"ltr\">cnt</span> עד 0. לכן מספר האיטרציות שווה בדיוק ל-<span dir=\"ltr\">cnt</span>. במקרה הגרוע <span dir=\"ltr\">cnt = m−1</span>, ולכן <b>מסגרת 2 היא <span dir=\"ltr\">O(m)</span></b>.",
        formula: "מספר האיטרציות = cnt ≤ m − 1  ⟹  O(m)",
        visual: {type:"table",
          head:["מיקום האיבר ב-mArr","cnt","איטרציות של מסגרת 2"],
          rows:[
            ["הראשון",{v:0,c:"good"},{v:0,c:"good"}],
            ["האמצעי",{v:"m/2",c:"info"},{v:"m/2",c:"info"}],
            ["האחרון",{v:"m−1",c:"bad"},{v:"m−1 — המקרה הגרוע",c:"bad"}]
          ]}
      },
      {
        title: "מרכיבים את הסיבוכיות של סיבוב אחד",
        text: "בכל סיבוב של החיצונית מבצעים חיפוש בינארי ואז ספירה לאחור. שתי הפעולות עוקבות, ולכן מחברים ולוקחים מקסימום. מכיוון ש-<span dir=\"ltr\">m</span> גדול מ-<span dir=\"ltr\">log m</span>, המסגרת השנייה שולטת.",
        formula: "O(log m) + O(m) = O(m)"
      },
      {
        title: "כופלים בחיצונית",
        text: "<span dir=\"ltr\">n</span> סיבובים, כל אחד בעלות <span dir=\"ltr\">O(m)</span>. שימו לב שזו מכפלה מוצדקת: <span dir=\"ltr\">cnt</span> מחושב מחדש בכל סיבוב ואינו מצטבר או משתמר.",
        formula: "T(n, m) = n · O(m) = O(n · m)"
      },
      {
        title: "התשובות הסופיות",
        text: "<b>מסגרת 1: <span dir=\"ltr\">O(log m)</span> · מסגרת 2: <span dir=\"ltr\">O(m)</span> · סה\"כ: <span dir=\"ltr\">O(n·m)</span>.</b> שתי הטעויות הצפויות: לכתוב <span dir=\"ltr\">O(n·log m)</span> (התעלמות ממסגרת 2), או לכתוב <span dir=\"ltr\">O(n·m)</span> תוך החלפה בין <span dir=\"ltr\">n</span> ל-<span dir=\"ltr\">m</span> בשלבי הביניים.",
        visual: {type:"table",
          head:["תשובה","נכון?","הסיבה"],
          rows:[
            [{v:"O(n·m)",c:"good"},{v:"✔",c:"good"},"מסגרת 2 שולטת"],
            [{v:"O(n·log m)",c:"bad"},{v:"✘",c:"bad"},"שכחו את לולאת ה-while"],
            [{v:"O(n·log n)",c:"bad"},{v:"✘",c:"bad"},"בלבול בין m ל-n"]
          ]}
      }
    ]
  },

  /* ===================== רקורסיה ===================== */

  "BK-2.1": {
    title: "mys(1234) — ההדפסה אחרי הקריאה",
    steps: [
      {
        title: "הפרט שקובע הכול: מיקום ה-printf",
        text: "בגוף הפונקציה יש שתי פעולות: קריאה רקורסיבית והדפסה. שימו לב לסדר — <b>ההדפסה מופיעה אחרי הקריאה</b>. פירוש הדבר שכל ההדפסות מתבצעות רק ב<b>דרך חזרה</b>, אחרי שהרקורסיה ירדה עד הסוף.",
        visual: {type:"code", lines:[
          "void mys(int n)",
          "{",
          "    if (n == 0) return;",
          "    mys(n / 10);        // קודם יורדים",
          "    printf(\"%d\", n % 10);  // ורק אז מדפיסים",
          "}"
        ], mark:[4,5]}
      },
      {
        title: "הירידה — שלב 1",
        text: "מתחילים ב-<span dir=\"ltr\">mys(1234)</span>. הפונקציה בודקת שהקלט אינו 0, ומיד קוראת ל-<span dir=\"ltr\">mys(123)</span>. ה-<span dir=\"ltr\">printf</span> שלה <b>ממתין</b> — הוא לא יתבצע עד שהקריאה הפנימית תסתיים לגמרי.",
        visual: {type:"rows", items:[
          {type:"call", frames:[{label:"mys(1234)", c:"hot"}]},
          {type:"vars", items:[{k:"n",v:1234},{k:"n/10",v:123,c:"hot"},{k:"הודפס עד כה",v:"(כלום)"}]}
        ]}
      },
      {
        title: "הירידה — מחסנית הקריאות גדלה",
        text: "כל קריאה חוזרת על אותו דבר: מורידה ספרה אחת מהימין וקוראת שוב. אף אחת מהן לא מדפיסה כלום בשלב הזה. המחסנית מתמלאת מלמטה למעלה.",
        visual: {type:"rows", items:[
          {type:"call", frames:[
            {label:"mys(1234)"},
            {label:"mys(123)"},
            {label:"mys(12)"},
            {label:"mys(1)", c:"hot"}
          ]},
          {type:"vars", items:[{k:"עומק",v:4,c:"info"},{k:"הודפס עד כה",v:"(כלום)"}]}
        ]}
      },
      {
        title: "מגיעים לתנאי העצירה",
        text: "<span dir=\"ltr\">mys(1)</span> קוראת ל-<span dir=\"ltr\">mys(1/10) = mys(0)</span>. שם התנאי <span dir=\"ltr\">n == 0</span> מתקיים, והפונקציה חוזרת מיד בלי לעשות דבר. זהו הקצה התחתון של הרקורסיה — ומכאן מתחילה הדרך חזרה.",
        visual: {type:"call", frames:[
          {label:"mys(1234)"},
          {label:"mys(123)"},
          {label:"mys(12)"},
          {label:"mys(1)"},
          {label:"mys(0) → return", c:"good"}
        ]}
      },
      {
        title: "הדרך חזרה — ההדפסה הראשונה",
        text: "המסגרת של <span dir=\"ltr\">mys(0)</span> נעלמת, והשליטה חוזרת ל-<span dir=\"ltr\">mys(1)</span> — בדיוק לשורה שאחרי הקריאה. עכשיו סוף סוף מתבצע ה-<span dir=\"ltr\">printf</span> שלה: <span dir=\"ltr\">1 % 10 = 1</span>. <b>הספרה העמוקה ביותר מודפסת ראשונה.</b>",
        formula: "1 % 10 = 1",
        visual: {type:"rows", items:[
          {type:"call", frames:[
            {label:"mys(1234)"},
            {label:"mys(123)"},
            {label:"mys(12)"},
            {label:"mys(1) → מדפיסה 1", c:"good"}
          ]},
          {type:"vars", items:[{k:"פלט עד כה",v:"1",c:"good"}]}
        ]}
      },
      {
        title: "הדרך חזרה — ממשיכים למעלה",
        text: "אחרי ש-<span dir=\"ltr\">mys(1)</span> סיימה, חוזרים ל-<span dir=\"ltr\">mys(12)</span> שמדפיסה <span dir=\"ltr\">12 % 10 = 2</span>, ואז ל-<span dir=\"ltr\">mys(123)</span> שמדפיסה 3.",
        visual: {type:"rows", items:[
          {type:"call", frames:[
            {label:"mys(1234)"},
            {label:"mys(123) → מדפיסה 3", c:"good"}
          ]},
          {type:"vars", items:[{k:"פלט עד כה",v:"123",c:"good"}]}
        ]}
      },
      {
        title: "ההדפסה האחרונה — המסגרת החיצונית",
        text: "לבסוף חוזרים למסגרת המקורית <span dir=\"ltr\">mys(1234)</span>, שמדפיסה <span dir=\"ltr\">1234 % 10 = 4</span>. <b>הספרה של האחדות — שהייתה זמינה כבר בהתחלה — מודפסת אחרונה.</b>",
        visual: {type:"table",
          head:["מסגרת","n","n % 10","סדר ההדפסה"],
          rows:[
            ["הרביעית",1,{v:1,c:"good"},{v:"1 — ראשונה",c:"good"}],
            ["השלישית",12,{v:2,c:"good"},"2"],
            ["השנייה",123,{v:3,c:"good"},"3"],
            ["הראשונה",1234,{v:4,c:"good"},{v:"4 — אחרונה",c:"good"}]
          ]}
      },
      {
        title: "הפלט",
        text: "מחברים את ההדפסות לפי הסדר שבו התבצעו: <b><span dir=\"ltr\">1234</span></b> — בדיוק המספר המקורי. הרקורסיה \"היפכה את ההיפוך\": חילצנו את הספרות מימין לשמאל, אבל הדפסנו אותן בסדר הפוך לחילוץ.",
        formula: "פלט:  1 2 3 4"
      },
      {
        title: "הסיבוכיות",
        text: "בכל קריאה <span dir=\"ltr\">n</span> מתחלק ב-10, ולכן עומק הרקורסיה הוא מספר הספרות של <span dir=\"ltr\">n</span>. כל מסגרת עושה עבודה קבועה.",
        formula: "עומק = log₁₀ n   ⟹   O(log n)",
        visual: {type:"vars", items:[
          {k:"n",v:1234},
          {k:"ספרות",v:4,c:"info"},
          {k:"סיבוכיות",v:"O(log n)",c:"good"}
        ]}
      },
      {
        title: "התשובות, והווריאציה שחייבים לדעת",
        text: "<b>פלט: <span dir=\"ltr\">1234</span> · סיבוכיות: <span dir=\"ltr\">O(log n)</span> · ב-8 מילים: \"מדפיסה את ספרות המספר משמאל לימין\".</b> אם מזיזים את ה-<span dir=\"ltr\">printf</span> ל<b>לפני</b> הקריאה הרקורסיבית, כל ההדפסות מתבצעות בדרך הירידה והפלט מתהפך ל-<span dir=\"ltr\">4321</span>.",
        visual: {type:"table",
          head:["מיקום ה-printf","מתי מודפס","הפלט"],
          rows:[
            [{v:"אחרי הקריאה",c:"good"},"בדרך חזרה",{v:"1234",c:"good"}],
            [{v:"לפני הקריאה",c:"info"},"בדרך הירידה",{v:"4321",c:"info"}]
          ]}
      }
    ]
  },

  "BK-2.2": {
    title: "f(arr, 5) — ספירת זוגיים ברקורסיה",
    steps: [
      {
        title: "מפרקים את שורת ה-return",
        text: "שורת ההחזרה מורכבת משני מחוברים: קריאה רקורסיבית על <span dir=\"ltr\">n-1</span>, ועוד ביטוי לוגי בסוגריים. כדי לפתור את השאלה צריך קודם להבין מה <b>הערך המספרי</b> של הביטוי הלוגי.",
        visual: {type:"code", lines:[
          "int f(int arr[], int n)",
          "{",
          "    if (n == 0) return 0;",
          "    return f(arr, n - 1) + (arr[n-1] % 2 == 0);",
          "}"
        ], mark:[4]}
      },
      {
        title: "בשפת C — ביטוי לוגי הוא מספר",
        text: "בשפת C אין טיפוס בוליאני נפרד: ביטוי השוואה מחזיר <b>1</b> אם הוא נכון ו-<b>0</b> אם הוא שקרי. לכן <span dir=\"ltr\">(arr[n-1] % 2 == 0)</span> מוסיף 1 לסכום כשהאיבר זוגי, ו-0 כשהוא אי-זוגי. זה הטריק המרכזי בשאלה.",
        visual: {type:"table",
          head:["arr[n−1]","arr[n−1] % 2","== 0 ?","ערך מספרי"],
          rows:[
            [8,0,{v:"נכון",c:"good"},{v:1,c:"good"}],
            [3,1,{v:"שקר",c:"bad"},{v:0,c:"bad"}]
          ]}
      },
      {
        title: "המערך והאינדקסים",
        text: "המערך הוא <span dir=\"ltr\">{3, 8, 5, 6, 2}</span>. שימו לב ש-<span dir=\"ltr\">arr[n-1]</span> מתייחס לאיבר ה<b>אחרון</b> בתת-המערך הנוכחי. הרקורסיה מקצרת את המערך מהסוף.",
        visual: {type:"array",
          cells:[{v:3,t:"אי-זוגי"},{v:8,t:"זוגי"},{v:5,t:"אי-זוגי"},{v:6,t:"זוגי"},{v:2,t:"זוגי"}],
          base:0,
          caption:"arr — שלושה איברים זוגיים: 8, 6, 2"}
      },
      {
        title: "הירידה — המחסנית מתמלאת",
        text: "<span dir=\"ltr\">f(arr,5)</span> לא יכולה להחזיר כלום עד ש-<span dir=\"ltr\">f(arr,4)</span> תחזיר, וכן הלאה. לכן קודם יורדים עד לתחתית, ורק אז מתחילים לחשב סכומים.",
        visual: {type:"call", frames:[
          {label:"f(arr,5)"},
          {label:"f(arr,4)"},
          {label:"f(arr,3)"},
          {label:"f(arr,2)"},
          {label:"f(arr,1)"},
          {label:"f(arr,0)", c:"hot"}
        ]}
      },
      {
        title: "תנאי העצירה",
        text: "<span dir=\"ltr\">f(arr, 0)</span> — מערך ריק. אין בו אף איבר זוגי, ולכן מחזירים 0. זהו הערך הראשון שמתחיל לזרום חזרה למעלה.",
        formula: "f(arr, 0) = 0",
        visual: {type:"call", frames:[
          {label:"f(arr,1)"},
          {label:"f(arr,0) → 0", c:"good"}
        ]}
      },
      {
        title: "חזרה ראשונה — n = 1",
        text: "<span dir=\"ltr\">f(arr,1)</span> מקבלת 0 מלמטה, ומוסיפה את ההערכה של <span dir=\"ltr\">arr[0] = 3</span>. שלוש הוא אי-זוגי, ולכן התוספת היא 0.",
        formula: "f(arr,1) = 0 + (3 % 2 == 0) = 0 + 0 = 0",
        visual: {type:"rows", items:[
          {type:"array", cells:[{v:3,c:"hot"},{v:8,c:"dim"},{v:5,c:"dim"},{v:6,c:"dim"},{v:2,c:"dim"}], base:0},
          {type:"vars", items:[{k:"arr[0]",v:3,c:"hot"},{k:"תוספת",v:0,c:"bad"},{k:"f(arr,1)",v:0,c:"good"}]}
        ]}
      },
      {
        title: "חזרה — n = 2 ו-n = 3",
        text: "<span dir=\"ltr\">f(arr,2)</span> מוסיפה את <span dir=\"ltr\">arr[1] = 8</span> שהוא זוגי — תוספת 1, סך הכול 1. אחר כך <span dir=\"ltr\">f(arr,3)</span> מוסיפה את <span dir=\"ltr\">arr[2] = 5</span> שהוא אי-זוגי — תוספת 0, ולכן הסכום נשאר 1.",
        visual: {type:"table",
          head:["קריאה","האיבר הנבדק","זוגי?","תוספת","הערך המוחזר"],
          rows:[
            ["f(arr,2)",{v:"arr[1] = 8",c:"hot"},{v:"כן",c:"good"},{v:1,c:"good"},{v:1,c:"good"}],
            ["f(arr,3)",{v:"arr[2] = 5",c:"hot"},{v:"לא",c:"bad"},{v:0,c:"bad"},{v:1,c:"good"}]
          ]}
      },
      {
        title: "חזרה — n = 4 ו-n = 5",
        text: "<span dir=\"ltr\">f(arr,4)</span> מוסיפה את <span dir=\"ltr\">arr[3] = 6</span> — זוגי, ולכן 1 + 1 = 2. לבסוף <span dir=\"ltr\">f(arr,5)</span> מוסיפה את <span dir=\"ltr\">arr[4] = 2</span> — גם הוא זוגי, ולכן 2 + 1 = <b>3</b>.",
        visual: {type:"table",
          head:["קריאה","האיבר","זוגי?","הערך המוחזר"],
          rows:[
            ["f(arr,0)","—","—",{v:0,c:"info"}],
            ["f(arr,1)","3",{v:"לא",c:"bad"},{v:0,c:"info"}],
            ["f(arr,2)","8",{v:"כן",c:"good"},{v:1,c:"info"}],
            ["f(arr,3)","5",{v:"לא",c:"bad"},{v:1,c:"info"}],
            ["f(arr,4)","6",{v:"כן",c:"good"},{v:2,c:"info"}],
            ["f(arr,5)","2",{v:"כן",c:"good"},{v:3,c:"good"}]
          ]}
      },
      {
        title: "התשובה",
        text: "<b>הקריאה מחזירה 3.</b> ואכן במערך <span dir=\"ltr\">{3, 8, 5, 6, 2}</span> יש שלושה איברים זוגיים: 8, 6 ו-2. הסיבוכיות היא <span dir=\"ltr\">O(n)</span> — קריאה אחת לכל איבר, עבודה קבועה בכל אחת.",
        visual: {type:"array",
          cells:[{v:3,c:"bad"},{v:8,c:"good"},{v:5,c:"bad"},{v:6,c:"good"},{v:2,c:"good"}],
          base:0,
          caption:"שלושה זוגיים ⟵ התשובה 3"}
      },
      {
        title: "ב-8 מילים",
        text: "<b>\"סופרת כמה מספרים זוגיים יש במערך\".</b> התבנית הכללית שכדאי לזהות: <span dir=\"ltr\">f(n) = f(n-1) + (תנאי על האיבר האחרון)</span> — זו ספירה רקורסיבית, ואפשר להחליף את התנאי בכל תכונה אחרת.",
        visual: {type:"note", text:"אותה תבנית משמשת גם לסכימה: החליפו את הביטוי הלוגי בערך עצמו וקיבלתם סכום איברים."}
      }
    ]
  },

  "BK-2.3": {
    title: "countDigit — בונים פונקציה רקורסיבית מאפס",
    steps: [
      {
        title: "מה בעצם מבקשים",
        text: "צריך לספור כמה פעמים מופיעה הספרה <span dir=\"ltr\">d</span> במספר <span dir=\"ltr\">n</span>, <b>בלי לולאות</b>. הכלל הראשון בכתיבת רקורסיה על מספרים: כל מספר מתפרק לשני חלקים — ספרת האחדות שלו, וכל השאר.",
        formula: "n = 1234  →  ספרת אחדות = 4  ,  השאר = 123",
        visual: {type:"vars", items:[
          {k:"n",v:1234},
          {k:"n % 10",v:4,c:"hot"},
          {k:"n / 10",v:123,c:"info"}
        ]}
      },
      {
        title: "שלב א' — תנאי העצירה",
        text: "מתי אין יותר מה לספור? כאשר לא נשארו ספרות, כלומר כאשר <span dir=\"ltr\">n</span> הגיע ל-0. אז המספר הזוכה הוא 0. בלי תנאי עצירה הרקורסיה לא תסתיים לעולם — תמיד כותבים אותו ראשון.",
        visual: {type:"code", lines:[
          "int countDigit(int n, int d)",
          "{",
          "    if (n == 0) return 0;",
          "    ???",
          "}"
        ], mark:[3]}
      },
      {
        title: "שלב ב' — מה עושים עם הספרה הנוכחית",
        text: "מחלצים את ספרת האחדות באמצעות <span dir=\"ltr\">n % 10</span> ובודקים אם היא שווה ל-<span dir=\"ltr\">d</span>. כמו בשאלה 2.2, בשפת C הביטוי <span dir=\"ltr\">(n % 10 == d)</span> הוא כבר מספר: 1 או 0. אין צורך ב-<span dir=\"ltr\">if</span>.",
        visual: {type:"code", lines:[
          "int countDigit(int n, int d)",
          "{",
          "    if (n == 0) return 0;",
          "    int here = (n % 10 == d);   /* 1 או 0 */",
          "    ???",
          "}"
        ], mark:[4]}
      },
      {
        title: "שלב ג' — הקריאה הרקורסיבית",
        text: "אחרי שטיפלנו בספרה האחרונה, נשאר לטפל בכל השאר — כלומר ב-<span dir=\"ltr\">n / 10</span>. אנחנו סומכים על הפונקציה שתחזיר את התשובה הנכונה עבור הקלט הקטן יותר. זו \"קפיצת האמון\" של הרקורסיה.",
        visual: {type:"code", lines:[
          "int countDigit(int n, int d)",
          "{",
          "    if (n == 0) return 0;",
          "    int here = (n % 10 == d);",
          "    int rest = countDigit(n / 10, d);",
          "    ???",
          "}"
        ], mark:[5]}
      },
      {
        title: "שלב ד' — השילוב",
        text: "התשובה השלמה היא פשוט הסכום: כמה פעמים הספרה הופיעה כאן, ועוד כמה פעמים היא הופיעה בשאר. אפשר לכווץ את שלושת השלבים לשורה אחת.",
        visual: {type:"code", lines:[
          "int countDigit(int n, int d)",
          "{",
          "    if (n == 0) return 0;",
          "    return (n % 10 == d) + countDigit(n / 10, d);",
          "}"
        ], mark:[4]}
      },
      {
        title: "בודקים — הירידה",
        text: "נריץ על <span dir=\"ltr\">countDigit(1213, 1)</span>. בדרך הירידה המחסנית מתמלאת, וכל מסגרת \"תולה\" את הבדיקה שלה עד שהקריאה הפנימית תחזיר.",
        visual: {type:"rows", items:[
          {type:"call", frames:[
            {label:"countDigit(1213,1)"},
            {label:"countDigit(121,1)"},
            {label:"countDigit(12,1)"},
            {label:"countDigit(1,1)"},
            {label:"countDigit(0,1) → 0", c:"good"}
          ]},
          {type:"vars", items:[{k:"נצבר עד כה",v:0,c:"dim"}]}
        ]}
      },
      {
        title: "בודקים — הדרך חזרה",
        text: "עכשיו כל מסגרת מקבלת ערך מלמטה, מוסיפה את הבדיקה שלה, ומעבירה למעלה. שימו לב שהספרות נבדקות מימין לשמאל — אבל לספירה אין חשיבות לסדר.",
        visual: {type:"table",
          head:["מסגרת","n % 10","== 1 ?","מלמטה","מוחזר"],
          rows:[
            ["countDigit(1,1)",{v:1,c:"hot"},{v:"כן (+1)",c:"good"},0,{v:1,c:"good"}],
            ["countDigit(12,1)",{v:2,c:"hot"},{v:"לא (+0)",c:"bad"},1,{v:1,c:"good"}],
            ["countDigit(121,1)",{v:1,c:"hot"},{v:"כן (+1)",c:"good"},1,{v:2,c:"good"}],
            ["countDigit(1213,1)",{v:3,c:"hot"},{v:"לא (+0)",c:"bad"},2,{v:2,c:"good"}]
          ]}
      },
      {
        title: "בודקים מקרי קצה",
        text: "עבור <span dir=\"ltr\">n = 0</span> הפונקציה מחזירה 0 מיד. אם מבקשים לספור את הספרה 0 בתוך המספר 0, התשובה 0 היא מעט שנויה במחלוקת — אבל השאלה מבטיחה ש-<span dir=\"ltr\">n</span> חיובי, ולכן זה תקין. הסיבוכיות היא <span dir=\"ltr\">O(log n)</span>: קריאה אחת לכל ספרה.",
        visual: {type:"table",
          head:["קלט","פלט","הסבר"],
          rows:[
            ["countDigit(1213, 1)",{v:2,c:"good"},"שתי הופעות של 1"],
            ["countDigit(555, 5)",{v:3,c:"good"},"שלוש הופעות"],
            ["countDigit(999, 1)",{v:0,c:"good"},"אין הופעות"]
          ]}
      },
      {
        title: "הפתרון המלא והשלד שחוזר",
        text: "<b>זהו השלד הקבוע לכל רקורסיה על ספרות מספר:</b> תנאי עצירה על <span dir=\"ltr\">n == 0</span>, פעולה על <span dir=\"ltr\">n % 10</span>, רקורסיה על <span dir=\"ltr\">n / 10</span>. אותו שלד בדיוק משמש ב-<span dir=\"ltr\">checkDigits</span> (2024) וב-<span dir=\"ltr\">changeEvenToZero</span>.",
        visual: {type:"code", lines:[
          "int countDigit(int n, int d)",
          "{",
          "    if (n == 0) return 0;",
          "    return (n % 10 == d) + countDigit(n / 10, d);",
          "}"
        ], mark:[3,4]}
      }
    ]
  },

  "BK-2.4": {
    title: "מבחן 2022 — מה בדיוק הפונקציה בודקת בשני העצים",
    steps: [
      {
        title: "השאלה האמיתית: במה הקוד נוגע",
        text: "בשאלות \"מה עושה הפונקציה\" הטכניקה החזקה ביותר היא לשאול <b>באילו שדות של הצומת הקוד משתמש</b>. סרקו את הקוד: מופיעים <span dir=\"ltr\">left</span>, <span dir=\"ltr\">right</span>, ובדיקות NULL. <b>המילה <span dir=\"ltr\">key</span> לא מופיעה בכלל.</b>",
        visual: {type:"code", lines:[
          "int func(NODE2* root1, NODE2* root2)",
          "{",
          "    if (!root1 && !root2)",
          "        return 1;",
          "    if (!root1 || !root2)",
          "        return 0;",
          "    return func(root1->left,  root2->left) &&",
          "           func(root1->right, root2->right);",
          "}"
        ], mark:[3,5,7,8]}
      },
      {
        title: "המסקנה המיידית",
        text: "אם הקוד לא נוגע בערכים השמורים בצמתים, הוא <b>לא יכול</b> להשוות אותם. לכן כל תשובה שכוללת \"בודקת שהערכים שווים\" שגויה מיסודה. מה שנשאר להשוואה הוא רק המבנה — כלומר הצורה.",
        visual: {type:"note", text:"טכניקה כללית: קודם רשמו רשימה של השדות שהקוד קורא. היא כמעט תמיד חושפת את התשובה."}
      },
      {
        title: "תנאי העצירה הראשון — שני NULL",
        text: "אם שני המצביעים ריקים, שני העצים \"נגמרו\" באותה נקודה בדיוק. זה מצב של <b>הסכמה</b>, ולכן מחזירים 1.",
        formula: "!root1 && !root2  →  return 1",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "if (!root1 && !root2)",
            "    return 1;"
          ], mark:[1,2]},
          {type:"vars", items:[{k:"root1",v:"NULL",c:"good"},{k:"root2",v:"NULL",c:"good"},{k:"תוצאה",v:1,c:"good"}]}
        ]}
      },
      {
        title: "תנאי העצירה השני — רק אחד NULL",
        text: "כאן אחד העצים המשיך והשני נגמר. זו <b>אי-התאמה מבנית</b> — בעץ אחד יש צומת ובשני אין. מחזירים 0, וה-<span dir=\"ltr\">&&</span> שלמעלה יפיץ את ה-0 עד לשורש.",
        formula: "!root1 || !root2  →  return 0",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "if (!root1 || !root2)",
            "    return 0;"
          ], mark:[1,2]},
          {type:"vars", items:[{k:"root1",v:"צומת",c:"hot"},{k:"root2",v:"NULL",c:"bad"},{k:"תוצאה",v:0,c:"bad"}]}
        ]}
      },
      {
        title: "הצעד הרקורסיבי",
        text: "אם הגענו לכאן, שני הצמתים קיימים — והקוד לא בודק עליהם דבר נוסף. הוא פשוט ממשיך במקביל: השמאלי מול השמאלי, הימני מול הימני. השימוש ב-<span dir=\"ltr\">&&</span> אומר ששני התתי-עצים חייבים להתאים.",
        visual: {type:"call", frames:[
          {label:"func(root1, root2)"},
          {label:"func(L1, L2)"},
          {label:"func(L1->left, L2->left)", c:"hot"}
        ]}
      },
      {
        title: "דוגמה שמחזירה 1 — מפתחות שונים לגמרי",
        text: "שני העצים למטה מכילים ערכים שונים לחלוטין, אבל לכל צומת בעץ הראשון יש בדיוק אותו \"שכן\" בעץ השני. הפונקציה תחזיר <b>1</b>.",
        visual: {type:"rows", items:[
          {type:"tree", root:{v:8,c:"info",l:{v:3,c:"info"},r:{v:10,c:"info",r:{v:14,c:"info"}}}, caption:"עץ 1"},
          {type:"tree", root:{v:"א",c:"good",l:{v:"ב",c:"good"},r:{v:"ג",c:"good",r:{v:"ד",c:"good"}}}, caption:"עץ 2 — אותה צורה, מפתחות אחרים ⟵ מוחזר 1"}
        ]}
      },
      {
        title: "דוגמה שמחזירה 0 — אותם מפתחות, צורה שונה",
        text: "כאן שני העצים מכילים בדיוק את אותם ערכים, אבל הצורה שונה: בעץ הראשון ה-3 הוא בן שמאלי, ובשני הוא בן ימני. הרקורסיה תגיע למצב שבו צד אחד NULL והשני לא — ותחזיר <b>0</b>.",
        visual: {type:"rows", items:[
          {type:"tree", root:{v:8,c:"info",l:{v:3,c:"hot"}}, caption:"עץ 1 — 3 בן שמאלי"},
          {type:"tree", root:{v:8,c:"info",r:{v:3,c:"bad"}}, caption:"עץ 2 — 3 בן ימני ⟵ מוחזר 0"}
        ]}
      },
      {
        title: "הסיבוכיות",
        text: "כל צומת בשני העצים נבדק בדיוק פעם אחת, ובכל בדיקה נעשית עבודה קבועה. במקרה הגרוע עוברים על כל הצמתים.",
        formula: "O( min(n₁, n₂) )   —   בפועל O(n)"
      },
      {
        title: "התשובה שיש לכתוב במבחן",
        text: "<b>\"הפונקציה בודקת אם מבנה שני העצים זהה — כלומר אם הם זהים בצורתם, כאשר המפתחות של צמתים במיקום זהה יכולים להיות שונים\".</b> התשובה \"בודקת אם העצים זהים\", בלי הסייג על המפתחות, מאבדת נקודות — במבחן 2022 זה היה ההבדל בין תשובה מלאה לחלקית.",
        visual: {type:"table",
          head:["ניסוח","ניקוד"],
          rows:[
            [{v:"בודקת אם מבנה העצים זהה, בלי תלות במפתחות",c:"good"},{v:"מלא ✔",c:"good"}],
            [{v:"בודקת אם העצים זהים",c:"bad"},{v:"חלקי",c:"bad"}],
            [{v:"בודקת אם לעצים אותם ערכים",c:"bad"},{v:"שגוי ✘",c:"bad"}]
          ]}
      }
    ]
  },

  "BK-2.5": {
    title: "mys(13) — אותו שלד, בסיס 2",
    steps: [
      {
        title: "מזהים את השלד המוכר",
        text: "הקוד זהה כמעט לחלוטין לזה של שאלה 2.1 — רק שבמקום 10 מופיע 2. אותה מסקנה תקפה: ההדפסה נמצאת <b>אחרי</b> הקריאה, ולכן כל ההדפסות קורות בדרך חזרה.",
        visual: {type:"code", lines:[
          "void mys(int n)",
          "{",
          "    if (n == 0) return;",
          "    mys(n / 2);",
          "    printf(\"%d\", n % 2);",
          "}"
        ], mark:[4,5]}
      },
      {
        title: "מה עושות שתי הפעולות",
        text: "<span dir=\"ltr\">n % 2</span> נותן את השארית בחלוקה ב-2 — כלומר את הביט הימני ביותר. <span dir=\"ltr\">n / 2</span> \"מזיז\" את המספר ביט אחד ימינה. יחד, זהו בדיוק האלגוריתם הידני להמרה לבסיס 2.",
        visual: {type:"vars", items:[
          {k:"n",v:13},
          {k:"n % 2",v:1,c:"hot"},
          {k:"n / 2",v:6,c:"info"}
        ]}
      },
      {
        title: "הירידה — n מתחלק ב-2",
        text: "המסלול הוא <span dir=\"ltr\">13 → 6 → 3 → 1 → 0</span>. אף אחת מהקריאות לא מדפיסה כלום בשלב הזה — כולן ממתינות.",
        visual: {type:"call", frames:[
          {label:"mys(13)"},
          {label:"mys(6)"},
          {label:"mys(3)"},
          {label:"mys(1)"},
          {label:"mys(0) → return", c:"good"}
        ]}
      },
      {
        title: "טבלת השאריות",
        text: "נרשום לכל מסגרת מה יהיה הערך שהיא תדפיס כשתגיע לתורה. שימו לב שהעמודה הימנית היא בדיוק הייצוג הבינארי — אבל <b>מלמטה למעלה</b>.",
        visual: {type:"table",
          head:["מסגרת","n","n / 2","n % 2 (מה שיודפס)"],
          rows:[
            ["החיצונית",13,6,{v:1,c:"hot"}],
            ["השנייה",6,3,{v:0,c:"hot"}],
            ["השלישית",3,1,{v:1,c:"hot"}],
            ["הרביעית",1,0,{v:1,c:"hot"}],
            [{v:"תנאי עצירה",c:"dim"},{v:0,c:"dim"},"—",{v:"—",c:"dim"}]
          ]}
      },
      {
        title: "הדפסה ראשונה — העמוקה ביותר",
        text: "אחרי ש-<span dir=\"ltr\">mys(0)</span> חוזרת, המסגרת של <span dir=\"ltr\">mys(1)</span> מדפיסה <span dir=\"ltr\">1 % 2 = 1</span>. זהו הביט <b>המשמעותי ביותר</b> — הוא נמצא הכי עמוק ולכן יוצא ראשון.",
        visual: {type:"rows", items:[
          {type:"call", frames:[
            {label:"mys(13)"},
            {label:"mys(6)"},
            {label:"mys(3)"},
            {label:"mys(1) → מדפיסה 1", c:"good"}
          ]},
          {type:"vars", items:[{k:"פלט",v:"1",c:"good"}]}
        ]}
      },
      {
        title: "ממשיכים למעלה",
        text: "<span dir=\"ltr\">mys(3)</span> מדפיסה <span dir=\"ltr\">3 % 2 = 1</span>, ואז <span dir=\"ltr\">mys(6)</span> מדפיסה <span dir=\"ltr\">6 % 2 = 0</span>.",
        visual: {type:"rows", items:[
          {type:"call", frames:[
            {label:"mys(13)"},
            {label:"mys(6) → מדפיסה 0", c:"good"}
          ]},
          {type:"vars", items:[{k:"פלט עד כה",v:"110",c:"good"}]}
        ]}
      },
      {
        title: "ההדפסה האחרונה והפלט",
        text: "המסגרת החיצונית <span dir=\"ltr\">mys(13)</span> מדפיסה <span dir=\"ltr\">13 % 2 = 1</span>. הפלט המלא הוא <b><span dir=\"ltr\">1101</span></b>.",
        formula: "1101₂ = 8 + 4 + 0 + 1 = 13 ✓",
        visual: {type:"array",
          cells:[{v:1,c:"good",t:"8"},{v:1,c:"good",t:"4"},{v:0,c:"good",t:"2"},{v:1,c:"good",t:"1"}],
          base:0,
          caption:"1101 בבסיס 2 — ובדיקה: 8+4+1 = 13"}
      },
      {
        title: "הסיבוכיות",
        text: "בכל קריאה <span dir=\"ltr\">n</span> נחצה, ולכן עומק הרקורסיה הוא <span dir=\"ltr\">log₂ n</span> — מספר הביטים בייצוג הבינארי. כאן: 4 ביטים עבור 13.",
        formula: "O(log n)"
      },
      {
        title: "התשובות",
        text: "<b>פלט: <span dir=\"ltr\">1101</span> · סיבוכיות: <span dir=\"ltr\">O(log n)</span> · ב-8 מילים: \"מדפיסה את הייצוג הבינארי של המספר\".</b> אותו שלד עובד לכל בסיס: החליפו את 2 ב-<span dir=\"ltr\">b</span> וקיבלתם המרה לבסיס <span dir=\"ltr\">b</span>.",
        visual: {type:"table",
          head:["הקוד","מה מתקבל"],
          rows:[
            ["mys(n/2), print n%2",{v:"בסיס 2",c:"good"}],
            ["mys(n/10), print n%10",{v:"ספרות עשרוניות",c:"good"}],
            ["mys(n/8), print n%8",{v:"בסיס 8",c:"good"}]
          ]}
      }
    ]
  },

  "BK-2.6": {
    title: "isRollingArray — שתי רקורסיות בשאלה אחת",
    steps: [
      {
        title: "מפרקים את ההגדרה",
        text: "מערך הוא \"מתגלגל\" אם עבור כל זוג שכנים, <b>ספרת האחדות</b> של האיבר השמאלי שווה ל<b>ספרה השמאלית ביותר</b> של האיבר הבא. נבדוק את הדוגמה ידנית לפני שכותבים קוד.",
        visual: {type:"array",
          cells:[{v:123,t:"אחדות 3"},{v:38,t:"שמאלית 3"},{v:82,t:"שמאלית 8"},{v:29,t:"שמאלית 2"},{v:91,t:"שמאלית 9"}],
          base:0,
          caption:"123→38: 3=3 ✔ · 38→82: 8=8 ✔ · 82→29: 2=2 ✔ · 29→91: 9=9 ✔"}
      },
      {
        title: "שתי בעיות נפרדות",
        text: "יש כאן <b>שתי</b> משימות שדורשות רקורסיה: <b>(1)</b> לחלץ את הספרה השמאלית ביותר של מספר — בלי לולאה; <b>(2)</b> לעבור על כל זוגות השכנים במערך — בלי לולאה. נפתור אותן בנפרד.",
        visual: {type:"note", text:"כשאסור להשתמש בלולאות ובמבני עזר, כל \"מעבר\" בקוד חייב להפוך לרקורסיה משלו. מותר להיעזר בפונקציית עזר."}
      },
      {
        title: "בעיה 1 — הספרה השמאלית ביותר",
        text: "כיצד מגיעים לספרה השמאלית של 385? מחלקים ב-10 שוב ושוב: <span dir=\"ltr\">385 → 38 → 3</span>. תנאי העצירה: כאשר המספר קטן מ-10, הוא <b>עצמו</b> הספרה השמאלית.",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "int leftDigit(int x)",
            "{",
            "    return x < 10 ? x : leftDigit(x / 10);",
            "}"
          ], mark:[3]},
          {type:"call", frames:[
            {label:"leftDigit(385)"},
            {label:"leftDigit(38)"},
            {label:"leftDigit(3) → 3", c:"good"}
          ]}
        ]}
      },
      {
        title: "leftDigit — הדרך חזרה",
        text: "כאן הדרך חזרה משעממת בכוונה: כל מסגרת פשוט מעבירה למעלה את מה שקיבלה מלמטה, בלי לשנות. זו רקורסיית \"זנב\" — כל העבודה נעשית בירידה.",
        visual: {type:"table",
          head:["מסגרת","x","x < 10 ?","מוחזר"],
          rows:[
            ["leftDigit(385)",385,{v:"לא",c:"bad"},{v:3,c:"good"}],
            ["leftDigit(38)",38,{v:"לא",c:"bad"},{v:3,c:"good"}],
            ["leftDigit(3)",3,{v:"כן",c:"good"},{v:3,c:"good"}]
          ]}
      },
      {
        title: "בעיה 2 — איך \"מקצרים\" מערך בלי מבנה עזר",
        text: "הטריק החשוב: בשפת C, שם מערך הוא מצביע. הביטוי <span dir=\"ltr\">a + 1</span> הוא מערך שמתחיל מהאיבר השני, ואם נעביר גם <span dir=\"ltr\">n - 1</span> — קיבלנו תת-מערך אמיתי בלי להעתיק דבר.",
        visual: {type:"rows", items:[
          {type:"array", cells:[{v:123,c:"dim"},{v:38,c:"hot"},{v:82,c:"hot"},{v:29,c:"hot"},{v:91,c:"hot"}], base:0,
            brace:{from:1,to:4,text:"a + 1  ,  n − 1"},
            caption:"מזיזים את ההתחלה במקום להעתיק"},
          {type:"vars", items:[{k:"a",v:"[123,38,82,29,91]"},{k:"a+1",v:"[38,82,29,91]",c:"hot"}]}
        ]}
      },
      {
        title: "תנאי העצירה של הפונקציה הראשית",
        text: "מתי מערך הוא בהכרח מתגלגל? כשאין בו אף זוג שכנים לבדוק — כלומר כשיש בו איבר אחד או פחות. אז מחזירים 1 (אמת).",
        visual: {type:"code", lines:[
          "int isRollingArray(int a[], int n)",
          "{",
          "    if (n <= 1) return 1;",
          "    ???",
          "}"
        ], mark:[3]}
      },
      {
        title: "הבדיקה המקומית",
        text: "בודקים <b>זוג אחד</b> בלבד: את <span dir=\"ltr\">a[0]</span> מול <span dir=\"ltr\">a[1]</span>. אם הם לא מתאימים — אין טעם להמשיך, מחזירים 0 מיד. זהו \"יציאה מוקדמת\", והיא חוסכת עבודה.",
        visual: {type:"code", lines:[
          "int isRollingArray(int a[], int n)",
          "{",
          "    if (n <= 1) return 1;",
          "    if (a[0] % 10 != leftDigit(a[1])) return 0;",
          "    ???",
          "}"
        ], mark:[4]}
      },
      {
        title: "הצעד הרקורסיבי והקוד המלא",
        text: "אם הזוג הראשון תקין, כל מה שנשאר הוא לבדוק את שאר המערך — ובדיוק כאן נכנס הטריק <span dir=\"ltr\">a + 1</span>. שימו לב שהבדיקה נעשית <b>בירידה</b>, ולכן אין צורך בעבודה כלשהי בדרך חזרה.",
        visual: {type:"code", lines:[
          "int leftDigit(int x)",
          "{",
          "    return x < 10 ? x : leftDigit(x / 10);",
          "}",
          "",
          "int isRollingArray(int a[], int n)",
          "{",
          "    if (n <= 1) return 1;",
          "    if (a[0] % 10 != leftDigit(a[1])) return 0;",
          "    return isRollingArray(a + 1, n - 1);",
          "}"
        ], mark:[8,9,10]}
      },
      {
        title: "מעקב על הדוגמה",
        text: "נריץ על <span dir=\"ltr\">[123, 38, 82, 29, 91]</span>. כל ארבע הבדיקות עוברות, ולבסוף מגיעים למערך באורך 1 שמחזיר 1 — והערך הזה עולה כמו שהוא עד לראש.",
        visual: {type:"table",
          head:["קריאה","a[0] % 10","leftDigit(a[1])","שווים?"],
          rows:[
            ["n = 5",{v:3,c:"hot"},{v:3,c:"hot"},{v:"✔",c:"good"}],
            ["n = 4",{v:8,c:"hot"},{v:8,c:"hot"},{v:"✔",c:"good"}],
            ["n = 3",{v:2,c:"hot"},{v:2,c:"hot"},{v:"✔",c:"good"}],
            ["n = 2",{v:9,c:"hot"},{v:9,c:"hot"},{v:"✔",c:"good"}],
            ["n = 1","—","—",{v:"return 1",c:"good"}]
          ]}
      },
      {
        title: "סיבוכיות ומקרי קצה",
        text: "יש <span dir=\"ltr\">n</span> קריאות לפונקציה הראשית, ובכל אחת קריאה ל-<span dir=\"ltr\">leftDigit</span> שעולה <span dir=\"ltr\">O(log M)</span> כאשר <span dir=\"ltr\">M</span> הוא הערך המקסימלי. אם מניחים שהמספרים חסומים, זהו <span dir=\"ltr\">O(n)</span>. מקרי קצה: מערך ריק ומערך בן איבר אחד — שניהם מחזירים 1 נכונה.",
        visual: {type:"table",
          head:["קלט","פלט","הסבר"],
          rows:[
            ["[123,38,82,29,91]",{v:1,c:"good"},"כל הזוגות מתאימים"],
            ["[123,48]",{v:0,c:"bad"},"3 ≠ 4"],
            ["[7]",{v:1,c:"good"},"אין זוגות לבדוק"],
            ["[] (n=0)",{v:1,c:"good"},"n ≤ 1"]
          ]}
      }
    ]
  },

  "BK-2.7": {
    title: "changeEvenToZero — בנייה מחדש בדרך חזרה",
    steps: [
      {
        title: "מה בעצם צריך לקרות",
        text: "צריך לעבור על כל ספרה, להחליף אותה ב-0 אם היא זוגית, ולהרכיב מחדש את המספר. הקושי אינו בזיהוי הספרה הזוגית — אלא ב<b>הרכבה מחדש</b>: איך מחברים ספרות למספר בלי לולאה?",
        visual: {type:"table",
          head:["קלט","פלט","מה השתנה"],
          rows:[
            [1254,{v:1050,c:"good"},"4→0, 2→0"],
            [332,{v:330,c:"good"},"2→0"],
            [24,{v:0,c:"good"},"שתיהן זוגיות"],
            [13,{v:13,c:"good"},"שתיהן אי-זוגיות"]
          ]}
      },
      {
        title: "שלב א' — תנאי העצירה",
        text: "כשמגיעים ל-<span dir=\"ltr\">n == 0</span> לא נשארו ספרות. מחזירים 0 — וזהו גם \"המספר הריק\" שממנו נתחיל לבנות בדרך חזרה.",
        visual: {type:"code", lines:[
          "int changeEvenToZero(int n)",
          "{",
          "    if (n == 0) return 0;",
          "    ???",
          "}"
        ], mark:[3]}
      },
      {
        title: "שלב ב' — מטפלים בספרת האחדות",
        text: "מחלצים את הספרה הימנית ב-<span dir=\"ltr\">n % 10</span>, ואם היא זוגית מאפסים אותה. זו כל \"העבודה המקומית\" של המסגרת.",
        visual: {type:"rows", items:[
          {type:"code", lines:[
            "int d = n % 10;",
            "if (d % 2 == 0) d = 0;"
          ], mark:[1,2]},
          {type:"vars", items:[{k:"n",v:1254},{k:"d לפני",v:4,c:"hot"},{k:"d אחרי",v:0,c:"good"}]}
        ]}
      },
      {
        title: "שלב ג' — ההרכבה מחדש",
        text: "כאן הרעיון המרכזי. נניח שהרקורסיה על <span dir=\"ltr\">n / 10</span> כבר החזירה את התוצאה הנכונה עבור כל הספרות השמאליות. כדי להצמיד לה את הספרה שלנו מימין, <b>מכפילים ב-10 ומוסיפים</b>. זו הפעולה ההפוכה בדיוק ל-<span dir=\"ltr\">n % 10</span> ו-<span dir=\"ltr\">n / 10</span>.",
        formula: "תוצאה = changeEvenToZero(n / 10) · 10 + d",
        visual: {type:"code", lines:[
          "int changeEvenToZero(int n)",
          "{",
          "    if (n == 0) return 0;",
          "    int d = n % 10;",
          "    if (d % 2 == 0) d = 0;",
          "    return changeEvenToZero(n / 10) * 10 + d;",
          "}"
        ], mark:[6]}
      },
      {
        title: "הירידה — כלום עוד לא נבנה",
        text: "נריץ על 1254. בדרך למטה כל מסגרת מחשבת את ה-<span dir=\"ltr\">d</span> שלה ושומרת אותו בצד, אבל <b>לא יכולה עדיין לבנות כלום</b> — היא ממתינה לערך מלמטה.",
        visual: {type:"rows", items:[
          {type:"call", frames:[
            {label:"cez(1254)  d=4→0"},
            {label:"cez(125)   d=5"},
            {label:"cez(12)    d=2→0"},
            {label:"cez(1)     d=1"},
            {label:"cez(0) → 0", c:"good"}
          ]},
          {type:"vars", items:[{k:"נבנה עד כה",v:"—",c:"dim"}]}
        ]}
      },
      {
        title: "הדרך חזרה — הבנייה מתחילה",
        text: "<span dir=\"ltr\">cez(0)</span> מחזירה 0. עכשיו <span dir=\"ltr\">cez(1)</span> מבצעת <span dir=\"ltr\">0 * 10 + 1 = 1</span>. הספרה השמאלית ביותר של התוצאה נבנית ראשונה — בדיוק כמו שכותבים מספר משמאל לימין.",
        formula: "cez(1) = 0 · 10 + 1 = 1",
        visual: {type:"vars", items:[
          {k:"מלמטה",v:0},
          {k:"d",v:1,c:"hot"},
          {k:"תוצאה",v:1,c:"good"}
        ]}
      },
      {
        title: "הדרך חזרה — מוסיפים ספרה ספרה",
        text: "כל מסגרת מכפילה את מה שקיבלה ב-10 (\"מפנה מקום מימין\") ומצמידה את הספרה שלה. עקבו אחרי העמודה הימנית — המספר גדל ספרה בכל שלב.",
        visual: {type:"table",
          head:["מסגרת","מלמטה","× 10","d","תוצאה"],
          rows:[
            ["cez(0)","—","—","—",{v:0,c:"info"}],
            ["cez(1)",0,0,{v:1,c:"hot"},{v:1,c:"info"}],
            ["cez(12)",1,10,{v:"2→0",c:"hot"},{v:10,c:"info"}],
            ["cez(125)",10,100,{v:5,c:"hot"},{v:105,c:"info"}],
            ["cez(1254)",105,1050,{v:"4→0",c:"hot"},{v:1050,c:"good"}]
          ]}
      },
      {
        title: "למה 24 מחזיר 0 ולא 00",
        text: "שתי הספרות של 24 זוגיות, ולכן שתיהן מתאפסות: <span dir=\"ltr\">cez(2) = 0·10 + 0 = 0</span>, ואז <span dir=\"ltr\">cez(24) = 0·10 + 0 = 0</span>. אין דבר כזה \"00\" במספר שלם — האפסים המובילים פשוט נעלמים, וזה בדיוק מה שהשאלה מבקשת.",
        visual: {type:"table",
          head:["מסגרת","d","חישוב","תוצאה"],
          rows:[
            ["cez(0)","—","—",{v:0,c:"info"}],
            ["cez(2)",{v:"2→0",c:"hot"},"0·10+0",{v:0,c:"info"}],
            ["cez(24)",{v:"4→0",c:"hot"},"0·10+0",{v:0,c:"good"}]
          ]}
      },
      {
        title: "בדיקת שאר הדוגמאות",
        text: "<span dir=\"ltr\">332</span>: הספרות 3 ו-3 נשמרות ו-2 מתאפסת, לכן <span dir=\"ltr\">33·10 + 0 = 330</span>. <span dir=\"ltr\">13</span>: שתי הספרות אי-זוגיות ולכן המספר לא משתנה.",
        visual: {type:"table",
          head:["קלט","המסלול","פלט"],
          rows:[
            [332,"3 → 33 → 330",{v:330,c:"good"}],
            [13,"1 → 13",{v:13,c:"good"}],
            [1254,"1 → 10 → 105 → 1050",{v:1050,c:"good"}]
          ]}
      },
      {
        title: "הקוד המלא והלקח",
        text: "<b>הלקח הכללי:</b> כשמבקשים <b>לבנות</b> מספר או מבנה בעזרת רקורסיה, העבודה נעשית ב<b>דרך חזרה</b> ומשלבים את הערך שהוחזר מלמטה. כשרק <b>בודקים</b> תכונה (כמו ב-<span dir=\"ltr\">isRollingArray</span>), העבודה נעשית בדרך הירידה. סיבוכיות: <span dir=\"ltr\">O(log n)</span> — ספרה אחת בכל קריאה.",
        visual: {type:"code", lines:[
          "int changeEvenToZero(int n)",
          "{",
          "    if (n == 0) return 0;",
          "    int d = n % 10;",
          "    if (d % 2 == 0) d = 0;",
          "    return changeEvenToZero(n / 10) * 10 + d;",
          "}"
        ], mark:[3,6]}
      }
    ]
  },

  "BK-2.8": {
    title: "countOptions — רקורסיה קומבינטורית משולשת",
    steps: [
      {
        title: "מנסחים את הבעיה מחדש",
        text: "יש <span dir=\"ltr\">balls</span> כדורים זהים ו-<span dir=\"ltr\">cells</span> תאים, ובכל תא מותר 0, 1 או 2 כדורים. השאלה: בכמה דרכים אפשר לפזר את <b>כל</b> הכדורים? הרעיון הרקורסיבי: מתמקדים ב<b>תא אחד</b> — כמה כדורים נשים בו?",
        visual: {type:"array",
          cells:[{v:"?",c:"hot",t:"תא 1"},{v:"?",t:"תא 2"},{v:"?",t:"תא 3"}],
          base:1,
          caption:"מחליטים על תא אחד בכל פעם — 0, 1 או 2 כדורים"}
      },
      {
        title: "שלוש האפשרויות של התא הנוכחי",
        text: "לכל תא יש בדיוק שלוש בחירות, וכל בחירה מובילה לתת-בעיה קטנה יותר: תא אחד פחות, ומספר הכדורים מצטמצם בהתאם. סוכמים את שלושת המספרים — כי אלה מקרים <b>נפרדים ולא חופפים</b>.",
        visual: {type:"table",
          head:["הבחירה","כדורים שנותרו","תאים שנותרו","הקריאה"],
          rows:[
            [{v:"0 כדורים",c:"info"},"balls","cells − 1","countOptions(balls, cells−1)"],
            [{v:"כדור אחד",c:"info"},"balls − 1","cells − 1","countOptions(balls−1, cells−1)"],
            [{v:"שני כדורים",c:"info"},"balls − 2","cells − 1","countOptions(balls−2, cells−1)"]
          ]}
      },
      {
        title: "תנאי עצירה ראשון — נגמרו הכדורים",
        text: "אם <span dir=\"ltr\">balls == 0</span>, פיזרנו את הכול בהצלחה. שאר התאים פשוט יישארו ריקים, ואין בכך שום בחירה נוספת — זו בדיוק <b>דרך אחת</b>. מחזירים 1.",
        formula: "balls == 0  →  return 1",
        visual: {type:"note", text:"שימו לב: מחזירים <b>1</b> ולא 0. הערך המוחזר סופר <b>דרכים</b>, ופיזור מוצלח הוא דרך אחת תקפה."}
      },
      {
        title: "תנאי עצירה שני — נגמרו התאים",
        text: "אם הגענו לכאן, <span dir=\"ltr\">balls</span> עדיין גדול מ-0 (אחרת התנאי הקודם היה תופס), אבל אין יותר תאים. נשארו כדורים בלי מקום — הפיזור נכשל, ולכן <b>0 דרכים</b>.",
        formula: "cells == 0  (ו-balls > 0)  →  return 0",
        visual: {type:"note", text:"<b>הסדר קריטי:</b> בודקים קודם balls==0 ורק אז cells==0. במצב balls=0, cells=0 פיזרנו הכול בהצלחה — ולכן התשובה 1, לא 0."}
      },
      {
        title: "מרכיבים את הקוד",
        text: "מסכמים את שלוש הקריאות. השלישית מוגנת בתנאי <span dir=\"ltr\">balls >= 2</span>, כדי לא לשלוח מספר כדורים שלילי לרקורסיה.",
        visual: {type:"code", lines:[
          "int countOptions(int balls, int cells)",
          "{",
          "    if (balls == 0) return 1;",
          "    if (cells == 0) return 0;",
          "",
          "    int ways = countOptions(balls, cells - 1)",
          "             + countOptions(balls - 1, cells - 1);",
          "    if (balls >= 2)",
          "        ways += countOptions(balls - 2, cells - 1);",
          "    return ways;",
          "}"
        ], mark:[3,4,6,7,9]}
      },
      {
        title: "מעקב מלא — countOptions(2, 2)",
        text: "נבדוק ידנית: 2 כדורים, 2 תאים. הפיזורים האפשריים הם <span dir=\"ltr\">(0,2)</span>, <span dir=\"ltr\">(1,1)</span> ו-<span dir=\"ltr\">(2,0)</span> — כלומר <b>3</b>. נראה שהרקורסיה אכן נותנת 3. הענף העליון: התא הראשון ריק.",
        visual: {type:"call", frames:[
          {label:"countOptions(2,2)"},
          {label:"countOptions(2,1)  — תא ריק", c:"hot"},
          {label:"countOptions(2,0) → 0", c:"bad"}
        ]}
      },
      {
        title: "ממשיכים במעקב",
        text: "<span dir=\"ltr\">countOptions(2,1)</span> מסכמת שלושה ענפים: <span dir=\"ltr\">(2,0) = 0</span>, <span dir=\"ltr\">(1,0) = 0</span>, ו-<span dir=\"ltr\">(0,0) = 1</span> — סה\"כ 1. זה הגיוני: עם תא אחד ושני כדורים יש בדיוק דרך אחת (לשים את שניהם בתא).",
        visual: {type:"table",
          head:["קריאה","ענף 0","ענף 1","ענף 2","סכום"],
          rows:[
            ["countOptions(2,1)",{v:"(2,0)=0",c:"bad"},{v:"(1,0)=0",c:"bad"},{v:"(0,0)=1",c:"good"},{v:1,c:"good"}],
            ["countOptions(1,1)",{v:"(1,0)=0",c:"bad"},{v:"(0,0)=1",c:"good"},{v:"—",c:"dim"},{v:1,c:"good"}],
            ["countOptions(0,1)",{v:"balls=0",c:"good"},"—","—",{v:1,c:"good"}]
          ]}
      },
      {
        title: "מסכמים בשורש",
        text: "<span dir=\"ltr\">countOptions(2,2) = 1 + 1 + 1 = 3</span> — בדיוק כמו הספירה הידנית. אימות נוסף: <span dir=\"ltr\">countOptions(4,3) = 6</span>, ואכן הפיזורים הם <span dir=\"ltr\">(0,2,2), (2,0,2), (2,2,0), (1,1,2), (1,2,1), (2,1,1)</span>.",
        visual: {type:"tree",
          root:{v:"(2,2)=3", c:"good",
            l:{v:"(2,1)=1", c:"info"},
            r:{v:"(1,1)=1", c:"info", r:{v:"(0,1)=1", c:"info"}}},
          caption:"שלושת הענפים מחזירים 1 כל אחד — סה\"כ 3"}
      },
      {
        title: "הסיבוכיות",
        text: "כל קריאה מולידה עד <b>שלוש</b> קריאות, ובכל אחת מהן <span dir=\"ltr\">cells</span> יורד ב-1 בדיוק. לכן עומק העץ הוא <span dir=\"ltr\">cells</span>, ומספר הצמתים גדל פי 3 בכל רמה.",
        formula: "T(cells) = 3·T(cells − 1) + O(1)  ⟹  O(3^cells)",
        visual: {type:"table",
          head:["רמה","מספר קריאות"],
          rows:[
            [0,{v:1,c:"info"}],
            [1,{v:3,c:"info"}],
            [2,{v:9,c:"info"}],
            [3,{v:27,c:"hot"}],
            ["cells",{v:"3^cells",c:"good"}]
          ]}
      },
      {
        title: "סיכום והכללה",
        text: "<b>הסיבוכיות: <span dir=\"ltr\">O(3^cells)</span>.</b> זו התבנית הכללית של שאלות \"ספירת אפשרויות\": מזהים החלטה בודדת, סופרים כמה אפשרויות יש לה, מסכמים את הרקורסיות, ומגדירים <b>שני</b> תנאי עצירה — אחד להצלחה (מחזיר 1) ואחד לכישלון (מחזיר 0).",
        visual: {type:"note", text:"אם מותר היה להשתמש בטבלת עזר (תכנון דינמי), הסיבוכיות הייתה יורדת ל-<span dir=\"ltr\">O(balls · cells)</span> — אבל השאלה אוסרת מבני עזר."}
      }
    ]
  },

  "BK-2.9": {
    title: "power(n, k) — מחסנית הקריאות שלב אחר שלב",
    steps: [
      {
        title: "הרעיון הרקורסיבי",
        text: "כדי לחשב <span dir=\"ltr\">n^k</span> בלי לולאה, משתמשים בזהות הבסיסית: <span dir=\"ltr\">n^k = n^(k−1) · n</span>. כלומר אם ידוע לנו החזקה הקודמת, נותר רק להכפיל פעם אחת ב-<span dir=\"ltr\">n</span>.",
        formula: "n^k  =  n^(k−1) · n"
      },
      {
        title: "תנאי העצירה",
        text: "המעריך <span dir=\"ltr\">k</span> יורד ב-1 בכל צעד, ולכן הוא יגיע בסופו של דבר ל-0. לפי הגדרה מתמטית <span dir=\"ltr\">n⁰ = 1</span>, וזה גם הערך הנייטרלי לכפל — בדיוק מה שצריך כדי שהכפלים למעלה יעבדו.",
        visual: {type:"code", lines:[
          "int power(int n, int k)",
          "{",
          "    if (k == 0) return 1;",
          "    ???",
          "}"
        ], mark:[3]}
      },
      {
        title: "הצעד הרקורסיבי והקוד המלא",
        text: "מבקשים מהרקורסיה את <span dir=\"ltr\">n^(k−1)</span>, ומכפילים ב-<span dir=\"ltr\">n</span>. שימו לב: <b>המשתנה <span dir=\"ltr\">n</span> אינו משתנה</b> בין הקריאות — רק <span dir=\"ltr\">k</span> קטן. זה מה שמבטיח שהרקורסיה תסתיים.",
        visual: {type:"code", lines:[
          "int power(int n, int k)",
          "{",
          "    if (k == 0) return 1;",
          "    return power(n, k - 1) * n;",
          "}"
        ], mark:[4]}
      },
      {
        title: "הירידה — קריאה 1",
        text: "נחשב <span dir=\"ltr\">power(2, 4)</span>. המסגרת הראשונה לא יכולה לבצע את הכפל שלה, כי היא עדיין לא יודעת מהו <span dir=\"ltr\">power(2,3)</span>. היא <b>נעצרת באמצע</b> ומחכה.",
        visual: {type:"rows", items:[
          {type:"call", frames:[{label:"power(2,4)  ⟵ ממתינה ל-power(2,3)", c:"hot"}]},
          {type:"vars", items:[{k:"n",v:2},{k:"k",v:4,c:"hot"},{k:"תוצאה",v:"?",c:"dim"}]}
        ]}
      },
      {
        title: "הירידה — המחסנית מתמלאת",
        text: "כל קריאה מוסיפה מסגרת חדשה למחסנית, וכולן ממתינות לאותו דבר: לערך שיגיע מלמטה. זהו הרגע שבו הזיכרון תפוס במקסימום — <span dir=\"ltr\">k + 1</span> מסגרות.",
        visual: {type:"call", frames:[
          {label:"power(2,4)  ממתינה"},
          {label:"power(2,3)  ממתינה"},
          {label:"power(2,2)  ממתינה"},
          {label:"power(2,1)  ממתינה"},
          {label:"power(2,0)", c:"hot"}
        ]}
      },
      {
        title: "פגיעה בתנאי העצירה",
        text: "<span dir=\"ltr\">power(2, 0)</span> מחזירה 1 מיד, בלי קריאה נוספת. זהו הערך היחיד בכל הרקורסיה שנקבע ישירות; כל השאר נגזרים ממנו. מכאן מתחילה הדרך חזרה.",
        visual: {type:"call", frames:[
          {label:"power(2,1)  ממתינה"},
          {label:"power(2,0) → 1", c:"good"}
        ]}
      },
      {
        title: "הדרך חזרה — הכפלים מתבצעים",
        text: "עכשיו, ורק עכשיו, מתבצעים הכפלים. כל מסגרת מקבלת ערך מלמטה, מכפילה ב-2, ומעבירה למעלה. שימו לב שהמחסנית <b>מתרוקנת</b> — כל מסגרת נעלמת אחרי שהחזירה.",
        visual: {type:"table",
          head:["מסגרת","מקבלת מלמטה","× n","מחזירה"],
          rows:[
            ["power(2,0)","—","—",{v:1,c:"info"}],
            ["power(2,1)",1,2,{v:2,c:"info"}],
            ["power(2,2)",2,2,{v:4,c:"info"}],
            ["power(2,3)",4,2,{v:8,c:"info"}],
            ["power(2,4)",8,2,{v:16,c:"good"}]
          ]}
      },
      {
        title: "המחסנית מתרוקנת",
        text: "אחרי שכל מסגרת מחזירה, היא נמחקת מהמחסנית. התוצאה הסופית <span dir=\"ltr\">16</span> חוזרת מהמסגרת החיצונית — והמחסנית ריקה שוב. ואכן <span dir=\"ltr\">2⁴ = 16</span>.",
        visual: {type:"rows", items:[
          {type:"call", frames:[{label:"power(2,4) → 16", c:"good"}]},
          {type:"vars", items:[{k:"תוצאה",v:16,c:"good"},{k:"בדיקה",v:"2·2·2·2 = 16",c:"good"}]}
        ]}
      },
      {
        title: "הסיבוכיות",
        text: "יש בדיוק <span dir=\"ltr\">k + 1</span> קריאות (מ-<span dir=\"ltr\">k</span> עד 0), וכל אחת מבצעת השוואה אחת וכפל אחד — עבודה קבועה. שימו לב שהסיבוכיות תלויה ב-<b><span dir=\"ltr\">k</span></b> ולא ב-<span dir=\"ltr\">n</span>.",
        formula: "T(k) = T(k−1) + O(1)  ⟹  O(k)",
        visual: {type:"vars", items:[
          {k:"מספר קריאות",v:"k + 1",c:"info"},
          {k:"עומק מחסנית",v:"k + 1",c:"info"},
          {k:"סיבוכיות זמן",v:"O(k)",c:"good"},
          {k:"סיבוכיות מקום",v:"O(k)",c:"good"}
        ]}
      },
      {
        title: "סיכום — ושיפור אפשרי",
        text: "<b>הפתרון הוא <span dir=\"ltr\">O(k)</span> בזמן ובמקום.</b> אם היו מבקשים יעילות, אפשר לחצות את המעריך במקום להוריד ב-1: <span dir=\"ltr\">n^k = (n^(k/2))²</span> עבור <span dir=\"ltr\">k</span> זוגי — וזה נותן <span dir=\"ltr\">O(log k)</span>. אבל השאלה כאן מבקשת רק את הגרסה הפשוטה.",
        visual: {type:"code", lines:[
          "/* גרסה מהירה — O(log k), לידיעה בלבד */",
          "int fastPower(int n, int k)",
          "{",
          "    if (k == 0) return 1;",
          "    int half = fastPower(n, k / 2);",
          "    if (k % 2 == 0) return half * half;",
          "    return half * half * n;",
          "}"
        ], mark:[5]}
      }
    ]
  },

  "BK-2.10": {
    title: "sumPositiveInArray — סכימה מותנית ברקורסיה",
    steps: [
      {
        title: "מגדירים את התת-בעיה",
        text: "השאלה הראשונה בכל רקורסיה על מערך: <b>איך מקטינים את הבעיה?</b> הדרך הנוחה כאן היא לצמצם את <b>אורך</b> המערך: אם נדע את סכום החיוביים ב-<span dir=\"ltr\">n−1</span> האיברים הראשונים, נותר רק להחליט מה לעשות עם האחרון.",
        formula: "sum(a, n) = sum(a, n−1) + (a[n−1] אם הוא חיובי)",
        visual: {type:"array",
          cells:[{v:3,c:"dim"},{v:-2,c:"dim"},{v:4,c:"dim"},{v:-5,c:"dim"},{v:1,c:"dim"},{v:-23,c:"hot"}],
          base:0,
          brace:{from:0,to:4,text:"תת-הבעיה: n−1 איברים"},
          caption:"מטפלים באיבר האחרון, ומעבירים את השאר לרקורסיה"}
      },
      {
        title: "תנאי העצירה",
        text: "כאשר <span dir=\"ltr\">n == 0</span> המערך ריק. סכום של אוסף ריק הוא 0 — וזהו גם האיבר הנייטרלי של החיבור, כך שהחישובים למעלה יעבדו נכון.",
        visual: {type:"code", lines:[
          "int sumPositiveInArray(int a[], int n)",
          "{",
          "    if (n == 0) return 0;",
          "    ???",
          "}"
        ], mark:[3]}
      },
      {
        title: "הקריאה הרקורסיבית",
        text: "מבקשים מהפונקציה את הסכום של <span dir=\"ltr\">n−1</span> האיברים הראשונים. שימו לב שמעבירים את <b>אותו מערך</b> <span dir=\"ltr\">a</span> ומקטינים רק את <span dir=\"ltr\">n</span> — אין צורך ב-<span dir=\"ltr\">a+1</span> כאן, כי אנחנו חותכים מהסוף ולא מההתחלה.",
        visual: {type:"code", lines:[
          "int sumPositiveInArray(int a[], int n)",
          "{",
          "    if (n == 0) return 0;",
          "    int rest = sumPositiveInArray(a, n - 1);",
          "    ???",
          "}"
        ], mark:[4]}
      },
      {
        title: "השילוב — התנאי על האיבר האחרון",
        text: "האיבר האחרון בתת-המערך הנוכחי הוא <span dir=\"ltr\">a[n−1]</span>. אם הוא חיובי — מוסיפים אותו לסכום; אחרת מחזירים את הסכום כמות שהוא. אפשר לכתוב זאת בעזרת אופרטור התנאי.",
        visual: {type:"code", lines:[
          "int sumPositiveInArray(int a[], int n)",
          "{",
          "    if (n == 0) return 0;",
          "    int rest = sumPositiveInArray(a, n - 1);",
          "    return a[n-1] > 0 ? a[n-1] + rest : rest;",
          "}"
        ], mark:[5]}
      },
      {
        title: "הירידה — עד המערך הריק",
        text: "נריץ על <span dir=\"ltr\">[3, −2, 4, −5, 1, −23]</span>. כל המסגרות יורדות עד <span dir=\"ltr\">n = 0</span> לפני שמישהי מהן מחשבת סכום — כי הן קוראות לרקורסיה <b>לפני</b> שהן בודקות את האיבר שלהן.",
        visual: {type:"call", frames:[
          {label:"sum(a,6)"},
          {label:"sum(a,5)"},
          {label:"sum(a,4)"},
          {label:"sum(a,3)"},
          {label:"sum(a,2)"},
          {label:"sum(a,1)"},
          {label:"sum(a,0) → 0", c:"good"}
        ]}
      },
      {
        title: "הדרך חזרה — האיברים החיוביים",
        text: "<span dir=\"ltr\">sum(a,1)</span> מקבלת 0 ובודקת את <span dir=\"ltr\">a[0] = 3</span> — חיובי, ולכן מחזירה 3. אחר כך <span dir=\"ltr\">sum(a,2)</span> בודקת את <span dir=\"ltr\">a[1] = −2</span> — שלילי, ולכן הסכום נשאר 3.",
        visual: {type:"rows", items:[
          {type:"array", cells:[{v:3,c:"good"},{v:-2,c:"bad"},4,-5,1,-23], base:0},
          {type:"vars", items:[{k:"sum(a,1)",v:3,c:"good"},{k:"sum(a,2)",v:3,c:"good"}]}
        ]}
      },
      {
        title: "טבלת המעקב המלאה",
        text: "כל שורה מראה איזה איבר נבדק ומה הוחזר. הסכום מצטבר רק כשהאיבר חיובי — ונשאר ללא שינוי אחרת.",
        visual: {type:"table",
          head:["קריאה","a[n−1]","חיובי?","מלמטה","מוחזר"],
          rows:[
            ["sum(a,0)","—","—","—",{v:0,c:"info"}],
            ["sum(a,1)",{v:3,c:"hot"},{v:"כן",c:"good"},0,{v:3,c:"info"}],
            ["sum(a,2)",{v:"−2",c:"hot"},{v:"לא",c:"bad"},3,{v:3,c:"info"}],
            ["sum(a,3)",{v:4,c:"hot"},{v:"כן",c:"good"},3,{v:7,c:"info"}],
            ["sum(a,4)",{v:"−5",c:"hot"},{v:"לא",c:"bad"},7,{v:7,c:"info"}],
            ["sum(a,5)",{v:1,c:"hot"},{v:"כן",c:"good"},7,{v:8,c:"info"}],
            ["sum(a,6)",{v:"−23",c:"hot"},{v:"לא",c:"bad"},8,{v:8,c:"good"}]
          ]}
      },
      {
        title: "אימות התוצאה",
        text: "<b>מוחזר 8</b> — ואכן האיברים החיוביים הם 3, 4 ו-1, וסכומם <span dir=\"ltr\">3 + 4 + 1 = 8</span>. תואם בדיוק לדוגמה שבשאלה.",
        visual: {type:"array",
          cells:[{v:3,c:"good"},{v:-2,c:"bad"},{v:4,c:"good"},{v:-5,c:"bad"},{v:1,c:"good"},{v:-23,c:"bad"}],
          base:0,
          caption:"3 + 4 + 1 = 8"}
      },
      {
        title: "סיבוכיות, מקרי קצה, והכללה",
        text: "יש <span dir=\"ltr\">n+1</span> קריאות בעבודה קבועה כל אחת — <span dir=\"ltr\">O(n)</span> בזמן ובמקום (עומק המחסנית). מקרי קצה: מערך ריק מחזיר 0; מערך שכולו שלילי מחזיר 0. שימו לב שהתנאי הוא <span dir=\"ltr\">&gt; 0</span> ולכן אפס אינו נספר — וזה נכון, כי אפס אינו חיובי.",
        visual: {type:"table",
          head:["קלט","פלט"],
          rows:[
            ["[3,−2,4,−5,1,−23]",{v:8,c:"good"}],
            ["[] (n = 0)",{v:0,c:"good"}],
            ["[−1,−2,−3]",{v:0,c:"good"}],
            ["[0, 0, 5]",{v:5,c:"good"}]
          ]}
      }
    ]
  },

  "BK-2.11": {
    title: "checkDigits — השוואת זוגיות בין שכנות",
    steps: [
      {
        title: "מה הקושי האמיתי",
        text: "צריך לוודא שכל הספרות זוגיות <b>או</b> שכולן אי-זוגיות. הפתרון האינטואיטיבי הוא לזכור את הזוגיות של הספרה הראשונה ולהשוות אליה — אבל אז צריך להעביר פרמטר נוסף. יש דרך אלגנטית יותר.",
        visual: {type:"table",
          head:["קלט","הזוגיות של הספרות","פלט"],
          rows:[
            [2468,"ז ז ז ז",{v:1,c:"good"}],
            [1357,"א א א א",{v:1,c:"good"}],
            [1245,"א ז ז א",{v:0,c:"bad"}]
          ]}
      },
      {
        title: "הרעיון — טרנזיטיביות",
        text: "אם ספרה 1 וספרה 2 בעלות אותה זוגיות, וגם ספרה 2 וספרה 3, וגם ספרה 3 וספרה 4 — אז בהכרח <b>כולן</b> בעלות אותה זוגיות. לכן די להשוות כל ספרה ל<b>שכנתה</b> בלבד, ואין צורך לזכור דבר.",
        visual: {type:"array",
          cells:[{v:2,c:"good"},{v:4,c:"good"},{v:6,c:"good"},{v:8,c:"good"}],
          base:0,
          brace:{from:0,to:1,text:"משווים זוג"},
          caption:"מספיק לבדוק כל זוג שכנות — הטרנזיטיביות עושה את השאר"}
      },
      {
        title: "תנאי העצירה",
        text: "מתי אין יותר זוגות לבדוק? כאשר נשארה <b>ספרה אחת</b>, כלומר <span dir=\"ltr\">n &lt; 10</span>. מספר בן ספרה אחת מקיים את התנאי באופן טריוויאלי, ולכן מחזירים 1.",
        visual: {type:"code", lines:[
          "int checkDigits(int n)",
          "{",
          "    if (n < 10) return 1;   /* ספרה אחת */",
          "    ???",
          "}"
        ], mark:[3]}
      },
      {
        title: "מחלצים שתי ספרות שכנות",
        text: "ספרת האחדות היא <span dir=\"ltr\">n % 10</span>. השכנה שלה משמאל היא ספרת האחדות של <span dir=\"ltr\">n / 10</span>, כלומר <span dir=\"ltr\">(n / 10) % 10</span>. עבור 1245: הראשונה היא 5 והשנייה היא 4.",
        formula: "n = 1245  →  n % 10 = 5  ,  (n/10) % 10 = 4",
        visual: {type:"vars", items:[
          {k:"n",v:1245},
          {k:"n % 10",v:5,c:"hot"},
          {k:"n / 10",v:124,c:"dim"},
          {k:"(n/10) % 10",v:4,c:"hot"}
        ]}
      },
      {
        title: "משווים זוגיות ולא ערכים",
        text: "לא משווים את הספרות עצמן, אלא את <b>השארית שלהן בחלוקה ב-2</b>. אם השאריות שונות — הזוגיות שונה, וכל התנאי נכשל. מחזירים 0 מיד.",
        visual: {type:"code", lines:[
          "int checkDigits(int n)",
          "{",
          "    if (n < 10) return 1;",
          "    if ((n % 10) % 2 != ((n/10) % 10) % 2)",
          "        return 0;           /* שכנות שונות */",
          "    ???",
          "}"
        ], mark:[4,5]}
      },
      {
        title: "הצעד הרקורסיבי והקוד המלא",
        text: "אם הזוג הנוכחי מסכים, ממשיכים לזוג הבא — כלומר קוראים על <span dir=\"ltr\">n / 10</span>. כמו ב-<span dir=\"ltr\">isRollingArray</span>, כל הבדיקות נעשות ב<b>ירידה</b>, והדרך חזרה רק מעבירה את התוצאה למעלה.",
        visual: {type:"code", lines:[
          "int checkDigits(int n)",
          "{",
          "    if (n < 10) return 1;",
          "    if ((n % 10) % 2 != ((n/10) % 10) % 2)",
          "        return 0;",
          "    return checkDigits(n / 10);",
          "}"
        ], mark:[3,4,6]}
      },
      {
        title: "מעקב — 2468 מחזיר 1",
        text: "כל זוג שכנות מסכים בזוגיות, ולכן הרקורסיה מגיעה עד לספרה בודדת ומחזירה 1. הערך 1 עולה ללא שינוי עד למסגרת החיצונית.",
        visual: {type:"table",
          head:["קריאה","n % 10","(n/10) % 10","אותה זוגיות?","פעולה"],
          rows:[
            ["checkDigits(2468)",{v:8,c:"hot"},{v:6,c:"hot"},{v:"כן",c:"good"},"ממשיכים ל-246"],
            ["checkDigits(246)",{v:6,c:"hot"},{v:4,c:"hot"},{v:"כן",c:"good"},"ממשיכים ל-24"],
            ["checkDigits(24)",{v:4,c:"hot"},{v:2,c:"hot"},{v:"כן",c:"good"},"ממשיכים ל-2"],
            ["checkDigits(2)","—","—","—",{v:"n < 10 → 1",c:"good"}]
          ]}
      },
      {
        title: "מעקב — 1245 מחזיר 0 כבר בצעד הראשון",
        text: "ספרת האחדות היא 5 (אי-זוגית) והשכנה היא 4 (זוגית). הזוגיות שונה, ולכן מוחזר 0 <b>מיד</b> — בלי בכלל להיכנס לרקורסיה. זהו יתרון של יציאה מוקדמת.",
        visual: {type:"rows", items:[
          {type:"array", cells:[1,2,{v:4,c:"bad"},{v:5,c:"bad"}], base:0, caption:"4 זוגית מול 5 אי-זוגית ⟵ סתירה"},
          {type:"call", frames:[{label:"checkDigits(1245) → 0", c:"bad"}]}
        ]}
      },
      {
        title: "סיבוכיות ומקרי קצה",
        text: "במקרה הגרוע יש קריאה לכל ספרה, כלומר <span dir=\"ltr\">O(log n)</span>. מקרה קצה חשוב: מספר בן ספרה אחת (למשל 7) מחזיר 1 — נכון, כי \"כל הספרות\" שלו אכן באותה זוגיות. שימו לב שהתנאי הוא <span dir=\"ltr\">n &lt; 10</span> ולא <span dir=\"ltr\">n == 0</span>, כי צריך להשאיר ספרה אחת כדי שיהיה מה לבדוק.",
        visual: {type:"table",
          head:["קלט","פלט","הסבר"],
          rows:[
            [2468,{v:1,c:"good"},"כולן זוגיות"],
            [1357,{v:1,c:"good"},"כולן אי-זוגיות"],
            [1245,{v:0,c:"bad"},"4 מול 5"],
            [7,{v:1,c:"good"},"ספרה אחת"],
            [21,{v:0,c:"bad"},"1 אי-זוגית, 2 זוגית"]
          ]}
      }
    ]
  },

  "BK-2.12": {
    title: "מבחן 2025 — מיון בועות מוסווה על \"omgicu\"",
    steps: [
      {
        title: "מה הפונקציה עושה בכל קריאה",
        text: "בכל קריאה מתבצע <b>מעבר אחד</b> על <span dir=\"ltr\">n</span> התווים הראשונים: משווים כל זוג שכנים ומחליפים אם הם לא בסדר עולה. אחר כך קוראים לעצמנו עם <span dir=\"ltr\">n−1</span> — כלומר על מחרוזת קצרה יותר באחד.",
        visual: {type:"code", lines:[
          "void rec(char s[], int n)",
          "{",
          "    if (n <= 1) return;",
          "    for (j = 0; j < n - 1; j++)",
          "        if (s[j] > s[j+1])",
          "            swap(&s[j], &s[j+1]);",
          "    rec(s, n - 1);",
          "}"
        ], mark:[4,5,6,7]}
      },
      {
        title: "מעבר 1 — צעד אחר צעד",
        text: "נתחיל מ-<span dir=\"ltr\">omgicu</span>. שימו לב איך התו <span dir=\"ltr\">o</span> \"נסחב\" ימינה בכל השוואה, עד שהוא נתקל ב-<span dir=\"ltr\">u</span> שגדול ממנו ונעצר.",
        visual: {type:"table",
          head:["j","משווים","מחליפים?","המחרוזת אחרי"],
          rows:[
            [0,"o vs m",{v:"כן",c:"good"},"m o g i c u"],
            [1,"o vs g",{v:"כן",c:"good"},"m g o i c u"],
            [2,"o vs i",{v:"כן",c:"good"},"m g i o c u"],
            [3,"o vs c",{v:"כן",c:"good"},"m g i c o u"],
            [4,"o vs u",{v:"לא",c:"bad"},{v:"m g i c o u",c:"good"}]
          ]}
      },
      {
        title: "מה השגנו במעבר הראשון",
        text: "התו הגדול ביותר, <span dir=\"ltr\">u</span>, הגיע למקומו הסופי בקצה הימני. זו התכונה המגדירה של <b>מיון בועות</b>: כל מעבר \"מבעבע\" את המקסימום לסוף. לכן המעבר הבא יכול להתעלם מהתו האחרון — וזה בדיוק מה שעושה <span dir=\"ltr\">n−1</span>.",
        visual: {type:"array",
          cells:[{v:"m"},{v:"g"},{v:"i"},{v:"c"},{v:"o"},{v:"u",c:"good"}],
          base:0,
          brace:{from:5,to:5,text:"במקום הסופי"},
          caption:"אחרי מעבר 1: mgicou"}
      },
      {
        title: "מעבר 2 — n = 5",
        text: "עכשיו סורקים רק את חמשת התווים הראשונים <span dir=\"ltr\">m g i c o</span>. התו <span dir=\"ltr\">m</span> נסחב ימינה עד שהוא נתקל ב-<span dir=\"ltr\">o</span>.",
        visual: {type:"table",
          head:["j","משווים","מחליפים?","המחרוזת אחרי"],
          rows:[
            [0,"m vs g",{v:"כן",c:"good"},"g m i c o u"],
            [1,"m vs i",{v:"כן",c:"good"},"g i m c o u"],
            [2,"m vs c",{v:"כן",c:"good"},"g i c m o u"],
            [3,"m vs o",{v:"לא",c:"bad"},{v:"g i c m o u",c:"good"}]
          ]}
      },
      {
        title: "מעבר 3 — n = 4",
        text: "סורקים את <span dir=\"ltr\">g i c m</span>. הפעם רק החלפה אחת נדרשת: <span dir=\"ltr\">i</span> מול <span dir=\"ltr\">c</span>.",
        visual: {type:"table",
          head:["j","משווים","מחליפים?","המחרוזת אחרי"],
          rows:[
            [0,"g vs i",{v:"לא",c:"bad"},"g i c m o u"],
            [1,"i vs c",{v:"כן",c:"good"},"g c i m o u"],
            [2,"i vs m",{v:"לא",c:"bad"},{v:"g c i m o u",c:"good"}]
          ]}
      },
      {
        title: "מעבר 4 — n = 3",
        text: "סורקים את <span dir=\"ltr\">g c i</span>. החלפה אחת בין <span dir=\"ltr\">g</span> ל-<span dir=\"ltr\">c</span>, והמחרוזת מגיעה למצבה הסופי.",
        visual: {type:"table",
          head:["j","משווים","מחליפים?","המחרוזת אחרי"],
          rows:[
            [0,"g vs c",{v:"כן",c:"good"},"c g i m o u"],
            [1,"g vs i",{v:"לא",c:"bad"},{v:"c g i m o u",c:"good"}]
          ]}
      },
      {
        title: "מעברים 5 ו-6 — כבר ממוין",
        text: "במעבר 5 (<span dir=\"ltr\">n = 2</span>) משווים רק <span dir=\"ltr\">c</span> מול <span dir=\"ltr\">g</span> — הם בסדר, אין החלפה. במעבר 6 מתקיים <span dir=\"ltr\">n &lt;= 1</span> והרקורסיה נעצרת. שימו לב שהאלגוריתם <b>לא מזהה</b> שהוא כבר סיים — הוא מבצע את כל המעברים בכל מקרה.",
        visual: {type:"call", frames:[
          {label:"rec(s,6)"},
          {label:"rec(s,5)"},
          {label:"rec(s,4)"},
          {label:"rec(s,3)"},
          {label:"rec(s,2)"},
          {label:"rec(s,1) → return", c:"good"}
        ]}
      },
      {
        title: "הפלט",
        text: "המחרוזת הסופית היא <b><span dir=\"ltr\">cgimou</span></b>. אפשר לאמת בקלות: אלה בדיוק אותיות המילה <span dir=\"ltr\">omgicu</span> מסודרות בסדר אלפביתי עולה.",
        visual: {type:"rows", items:[
          {type:"array", cells:[{v:"c",c:"good"},{v:"g",c:"good"},{v:"i",c:"good"},{v:"m",c:"good"},{v:"o",c:"good"},{v:"u",c:"good"}], base:0,
            caption:"cgimou — ממוין"},
          {type:"table", head:["מעבר","המחרוזת"], rows:[
            [{v:"התחלה",c:"dim"},"omgicu"],
            [1,"mgicou"],
            [2,"gicmou"],
            [3,"gcimou"],
            [4,{v:"cgimou",c:"good"}],
            [5,{v:"cgimou",c:"good"}]
          ]}
        ]}
      },
      {
        title: "הסיבוכיות — בונים נוסחת נסיגה",
        text: "כל קריאה מבצעת לולאה באורך <span dir=\"ltr\">n−1</span> — כלומר <span dir=\"ltr\">O(n)</span> עבודה מקומית — ואז קוראת לעצמה עם <span dir=\"ltr\">n−1</span>. שימו לב שזו <b>לא</b> תבנית של משפט המאסטר, כי הקלט קטן ב-1 ולא נחלק בקבוע.",
        formula: "T(n) = T(n−1) + O(n)   ,   T(1) = O(1)"
      },
      {
        title: "פותרים את הנסיגה על ידי פרישה",
        text: "פורשים את הנוסחה: <span dir=\"ltr\">T(n) = n + (n−1) + (n−2) + … + 1</span>. זהו סכום חשבוני, ולפי הנוסחה המוכרת ערכו <span dir=\"ltr\">n(n+1)/2</span> — כלומר <span dir=\"ltr\">O(n²)</span>.",
        formula: "n + (n−1) + … + 1 = n(n+1)/2 = O(n²)",
        visual: {type:"table",
          head:["קריאה","אורך הלולאה"],
          rows:[
            ["rec(s,6)",{v:5,c:"hot"}],
            ["rec(s,5)",{v:4,c:"hot"}],
            ["rec(s,4)",{v:3,c:"hot"}],
            ["rec(s,3)",{v:2,c:"hot"}],
            ["rec(s,2)",{v:1,c:"hot"}],
            [{v:"סה\"כ",c:"good"},{v:"15 = 6·5/2",c:"good"}]
          ]}
      },
      {
        title: "שלוש התשובות",
        text: "<b>(א) פלט: <span dir=\"ltr\">cgimou</span> · (ב) סיבוכיות: <span dir=\"ltr\">O(n²)</span> · (ג) ב-8 מילים: \"מיון בועות רקורסיבי של המחרוזת\".</b> הקושי בשאלה הוא לזהות את המיון המוסווה — כשרואים \"מחליפים שכנים לא ממוינים\" ואז \"קוראים שוב עם n−1\", זה תמיד מיון בועות.",
        visual: {type:"note", text:"סימני ההיכר של מיון בועות: השוואת <b>שכנים</b>, החלפה, ומעבר חוזר על טווח שמצטמצם באחד. סיבוכיות תמיד <span dir=\"ltr\">O(n²)</span>."}
      }
    ]
  }

});
