/* תצוגת פתרונות מבחן מונפשים — צורכת את window.EXAM_WALKTHROUGHS */
(function () {
  "use strict";

  var root = document.getElementById("walkthroughs");
  var btn = document.getElementById("modeWalk");
  if (!root || !btn) return;

  var DATA = window.EXAM_WALKTHROUGHS || {};
  var examKeys = Object.keys(DATA).sort().reverse();
  var current = examKeys[0] || null;
  var openQ = 0;
  var stepAt = {};
  var timer = null;

  function esc(v) {
    return String(v === null || v === undefined ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function highlight(codeText) {
    var kw = /\b(int|char|void|return|if|else|while|for|struct|typedef|sizeof|NULL|do|long|double|float|unsigned|BOOL|TRUE|FALSE)\b/g;
    return esc(codeText).replace(kw, '<span class="kw">$1</span>');
  }

  function questions() {
    return (DATA[current] && DATA[current].questions) || [];
  }

  function stepIndex(q) {
    var total = (q.steps || []).length;
    var at = Number(stepAt[q.id]) || 0;
    return Math.max(0, Math.min(Math.max(0, total - 1), at));
  }

  function stopAuto() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  function stepHtml(q) {
    var steps = q.steps || [];
    if (!steps.length) return "";
    var i = stepIndex(q);
    var s = steps[i];
    var visual = (window.renderViz && s.visual) ? window.renderViz(s.visual) : "";
    var dots = steps.map(function (_, k) {
      return '<button class="solution-dot' + (k === i ? " on" : "") +
        '" data-wt-jump="' + k + '" aria-label="שלב ' + (k + 1) + '"></button>';
    }).join("");

    return '<div class="wt-stage">' +
      '<div class="solution-step"><span class="solution-step-number">שלב ' +
      (i + 1) + " מתוך " + steps.length + "</span>" +
      "<h4>" + s.title + "</h4><p>" + s.text + "</p>" +
      (s.formula ? '<div class="solution-equation" dir="ltr">' +
        esc(s.formula) + "</div>" : "") +
      (visual ? '<div class="wt-visual">' + visual + "</div>" : "") +
      "</div></div>" +
      '<div class="solution-controls">' +
      '<button class="quiz-btn" data-wt-act="prev"' + (i === 0 ? " disabled" : "") +
      ">← השלב הקודם</button>" +
      '<div class="solution-dots">' + dots + "</div>" +
      '<button class="quiz-btn" data-wt-act="auto">' +
      (timer ? "⏸ עצור" : "▶ הרץ אוטומטית") + "</button>" +
      '<button class="quiz-btn primary" data-wt-act="next"' +
      (i === steps.length - 1 ? " disabled" : "") + ">השלב הבא →</button></div>";
  }

  function questionHtml(q, index) {
    var open = index === openQ;
    if (!open) {
      return '<div class="wt-card"><button class="wt-head" data-wt-open="' + index + '">' +
        '<span class="wt-num">' + q.num + "</span>" +
        '<span class="wt-topic">' + q.topic + "</span>" +
        (q.points ? '<span class="tag">' + q.points + " נק'</span>" : "") +
        '<span class="wt-steps">' + (q.steps || []).length + " שלבים</span></button></div>";
    }
    return '<div class="wt-card open"><button class="wt-head" data-wt-open="-1">' +
      '<span class="wt-num">' + q.num + "</span>" +
      '<span class="wt-topic">' + q.topic + "</span>" +
      (q.points ? '<span class="tag">' + q.points + " נק'</span>" : "") +
      '<span class="wt-steps">▲ סגור</span></button>' +
      '<div class="wt-body">' +
      '<div class="quiz-prompt">' + q.prompt + "</div>" +
      (q.code ? '<div class="q-given"><b>נתון:</b></div><pre class="c" dir="ltr">' +
        highlight(q.code) + "</pre>" : "") +
      (q.idea ? '<div class="wt-idea"><b>💡 רעיון הפתרון:</b> ' + q.idea + "</div>" : "") +
      ((q.formulas || []).length
        ? '<div class="formula-title">הנוסחאות שצריך לשאלה</div><div class="formula-strip">' +
          q.formulas.map(function (f) {
            return '<div class="formula-card"><small>' + f.label +
              '</small><div dir="ltr">' + esc(f.value) + "</div></div>";
          }).join("") + "</div>"
        : "") +
      stepHtml(q) +
      (q.answer ? '<div class="wt-answer"><b>✅ התשובה הסופית:</b> ' + q.answer + "</div>" : "") +
      ((q.traps || []).length
        ? '<div class="wt-traps"><b>⚠️ מלכודות:</b><ul>' +
          q.traps.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></div>"
        : "") +
      (window.topicLinkFor
        ? '<div class="source-proof">' +
          window.topicLinkFor({ cat: q.topic }) + "</div>"
        : "") +
      "</div></div>";
  }

  function render() {
    if (!examKeys.length) {
      root.innerHTML = '<div class="quiz-empty"><b>הפתרונות המונפשים בהכנה.</b><br>' +
        "ברגע שיהיו מוכנים הם יופיעו כאן.</div>";
      return;
    }
    var tabs = examKeys.map(function (k) {
      return '<button class="quiz-btn' + (k === current ? " primary on" : "") +
        '" data-wt-exam="' + k + '">' + DATA[k].label + "</button>";
    }).join("");
    var qs = questions();
    root.innerHTML =
      '<div class="wt-intro"><h2>📚 פתרונות מבחן מונפשים</h2>' +
      "<p>כל שאלה במבחני 2022–2025, מפורקת לשלבים קטנים עם הנפשה של מה שקורה " +
      "בקוד ובמבנה הנתונים. התקדם שלב-שלב או הרץ אוטומטית.</p>" +
      '<div class="wt-tabs">' + tabs + "</div></div>" +
      '<div class="wt-list">' +
      (qs.length
        ? qs.map(questionHtml).join("")
        : '<div class="quiz-empty">אין עדיין שאלות למבחן הזה.</div>') +
      "</div>";
  }

  function move(delta) {
    var q = questions()[openQ];
    if (!q) return;
    var steps = (q.steps || []).length;
    stepAt[q.id] = Math.max(0, Math.min(steps - 1, stepIndex(q) + delta));
    render();
  }

  root.addEventListener("click", function (event) {
    var tab = event.target.closest("[data-wt-exam]");
    if (tab) {
      stopAuto();
      current = tab.getAttribute("data-wt-exam");
      openQ = 0;
      render();
      return;
    }
    var head = event.target.closest("[data-wt-open]");
    if (head) {
      stopAuto();
      openQ = Number(head.getAttribute("data-wt-open"));
      render();
      return;
    }
    var jump = event.target.closest("[data-wt-jump]");
    if (jump) {
      stopAuto();
      var qj = questions()[openQ];
      if (qj) stepAt[qj.id] = Number(jump.getAttribute("data-wt-jump"));
      render();
      return;
    }
    var act = event.target.closest("[data-wt-act]");
    if (!act) return;
    var name = act.getAttribute("data-wt-act");
    if (name === "prev") { stopAuto(); move(-1); return; }
    if (name === "next") { stopAuto(); move(1); return; }
    if (name === "auto") {
      if (timer) { stopAuto(); render(); return; }
      var q = questions()[openQ];
      if (!q) return;
      if (stepIndex(q) === (q.steps || []).length - 1) stepAt[q.id] = 0;
      timer = window.setInterval(function () {
        var cur = questions()[openQ];
        if (!cur || stepIndex(cur) >= (cur.steps || []).length - 1) {
          stopAuto(); render(); return;
        }
        move(1);
      }, 2600);
      render();
    }
  });

  window.showWalkthroughs = function (on) {
    root.style.display = on ? "" : "none";
    if (on) render(); else stopAuto();
  };

  render();
})();
