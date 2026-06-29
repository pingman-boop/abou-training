window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script51 = function()
{
  // 1. שאיבת התאריך הנוכחי מהמחשב
var today = new Date();

// 2. חילוץ היום, החודש והשנה
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // חודשים מתחילים מ-0 ולכן מוסיפים 1
var yyyy = today.getFullYear();

// 3. חיבור התאריך לפורמט ישראלי (DD/MM/YYYY)
// אם תרצה פורמט הפוך, שנה ל- yyyy + '/' + mm + '/' + dd
var formattedDate = dd + '/' + mm + '/' + yyyy;

// 4. שליחת התאריך המעוצב לתוך המשתנה של סטוריליין
var player = GetPlayer();
player.SetVar("CompletionDate", formattedDate);
}

window.Script52 = function()
{
  // 1. יצירת סגנון הסתרה בזמן הדפסה
var style = document.createElement('style');
style.id = 'hide-buttons-print';
style.textContent = `
  @media print {
    /* מסתיר כל דבר שהוא כפתור, כולל כפתורי מערכת של הלומדה */
    button, .button, [role="button"], .acc-button, .prev, .next, #controls {
      display: none !important;
      visibility: hidden !important;
    }
  }
`;

// בדיקה אם הסגנון כבר קיים כדי לא לשכפל אותו
if (!document.getElementById('hide-buttons-print')) {
    document.head.appendChild(style);
}

// 2. פקודת ההדפסה
window.focus();
window.print();
}

window.Script53 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='1']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script54 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='2']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script55 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='3']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script56 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='4']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script57 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='5']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script58 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='6']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

};
