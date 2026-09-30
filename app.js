"use strict";

/* ===================== i18n ===================== */
const STRINGS = {
  he: {
    navDashboard: "לוח בקרה", navFriends: "חברים", navAdd: "הוספה", navPayments: "תשלומים", navSettings: "הגדרות", navProducts: "מוצרים",
    hello: "שלום 👋",
    statReceived: "התקבל החודש", statOwed: "חייבים לי", statOverdue: "באיחור", statFriends: "חברים",
    attentionTitle: "מה דורש תשומת לב?",
    attnOverdue: "תשלומים באיחור", attnUpcoming: "תשלומים השבוע", attnOwed: "חייבים לך",
    upcomingTitle: "תשלומים קרובים", noUpcoming: "אין תשלומים קרובים",
    quickAddSale: "מכירה חדשה", quickAddPayment: "תשלום חדש", quickAddFriend: "חבר חדש",
    today: "היום", tomorrow: "מחר", inDays: (n) => `בעוד ${n} ימים`, daysOverdue: (n) => `באיחור: ${n} ימים`,
    friendsTitle: "חברים", searchPlaceholder: "חיפוש לפי שם, מוצר או הערה",
    filterAll: "הכל", filterOwe: "חייבים", filterPaid: "שולם", filterOverdue: "באיחור", filterDueSoon: "תשלום קרוב",
    owes: "חייב", paidLabel: "שולם", totalLabel: "סה\"כ", nextPayment: "תשלום הבא",
    noFriendsTitle: "עדיין אין חברים", addFriendBtn: "הוסף חבר",
    totalPurchases: "סה\"כ רכישות", paidWord: "שולם", remainingWord: "נותר",
    salesSectionTitle: "מכירות", paymentHistoryTitle: "היסטוריית תשלומים", upcomingPaymentsTitle: "תשלומים עתידיים", notesTitle: "הערות",
    editFriend: "עריכה", deleteFriend: "מחיקת חבר", addPaymentBtn: "הוסף תשלום", addSaleBtn: "מכירה חדשה",
    noSales: "אין עדיין מכירות", noPayments: "אין עדיין תשלומים", noUpcomingInstallments: "אין תשלומים עתידיים",
    confirmDeleteFriend: "למחוק את החבר וכל המכירות והתשלומים שלו? הפעולה בלתי הפיכה.",
    notesPlaceholder: "הוסף הערה...", saveNote: "שמור הערה",
    newSaleTitle: "מכירה חדשה", whoQ: "מי קנה?", whatQ: "מה הוא קנה?", priceLabel: "מחיר",
    paidNowLabel: "כמה שולם עכשיו?", dateLabel: "תאריך", methodLabel: "אמצעי תשלום", notesLabel: "הערות", notesOptional: "אופציונלי",
    installmentsToggle: "תשלום בתשלומים", installmentCount: "מספר תשלומים", firstDueDate: "תאריך התשלום הראשון",
    frequency: "תדירות", freqWeekly: "שבועי", freqBiweekly: "דו-שבועי", freqMonthly: "חודשי", freqCustom: "מותאם אישית",
    customDays: "כל כמה ימים", remainingPreview: "נותר לחלוקה", perInstallmentPreview: "כל תשלום",
    saveSale: "שמור מכירה", newFriendOption: "+ חבר חדש",
    newPaymentTitle: "תשלום חדש", selectFriend: "בחר חבר", selectSale: "משויך למכירה", amountLabel: "סכום", savePayment: "שמור תשלום",
    newFriendTitle: "חבר חדש", nameLabel: "שם", phoneLabel: "טלפון", saveFriend: "שמור חבר",
    paymentsTitle: "תשלומים", noPaymentsYet: "אין עדיין תשלומים", relatedSale: "מכירה",
    productsTitle: "מוצרים", soldCount: "נמכרו", totalAmountLabel: "סה\"כ", noProducts: "אין עדיין מוצרים",
    paymentReceived: "התשלום נקלט", newBalanceLabel: "יתרה חדשה",
    settingsTitle: "הגדרות", language: "שפה", font: "גופן", theme: "ערכת נושא",
    themeLight: "בהיר", themeDark: "כהה", themeSystem: "מערכת",
    accountSection: "חשבון", backupRestore: "גיבוי ושחזור", notifications: "התראות", about: "אודות",
    exportJson: "ייצוא נתונים (JSON)", exportCsv: "ייצוא תשלומים (CSV)", importJson: "שחזור נתונים",
    aboutText: "FutureIL — אפליקציה פרטית למעקב מכירות ותשלומים אישיים.",
    welcomeTitle: "ברוך הבא 👋", welcomeSub: "נהל את המכירות, התשלומים והחובות שלך במקום אחד.", getStarted: "התחל",
    welcomeCreateNew: "צור קוד PIN חדש", welcomeHaveOne: "יש לי כבר קוד PIN", loginPinTitle: "הזן קוד PIN",
    choosePinTitle: "צור קוד PIN", confirmPinTitle: "אמת קוד PIN", pinMismatch: "הקודים אינם תואמים, נסה שוב",
    pinTooShort: "הקוד קצר מדי (4 ספרות לפחות)", serverError: "שגיאת תקשורת, נסה שוב", signOut: "התנתק",
    wrongPin: "קוד שגוי",
    save: "שמור", cancel: "ביטול", delete: "מחיקה", edit: "עריכה", back: "חזרה", done: "סיום", confirm: "אישור", required: "שדה חובה",
    cash: "מזומן", paybox: "PayBox", bit: "Bit", transfer: "העברה בנקאית", card: "כרטיס", other: "אחר",
    noneOpen: "אין מכירות פתוחות", chooseFont: "בחר גופן", chooseTheme: "בחר ערכת נושא", chooseLanguage: "בחר שפה",
    confirmDeletePayment: "למחוק את התשלום?", confirmDeleteSale: "למחוק את המכירה וכל התשלומים שלה?",
    confirmRestore: "השחזור יחליף את כל הנתונים הקיימים. להמשיך?", restoredOk: "השחזור הושלם בהצלחה",
    invalidFile: "קובץ לא תקין", somethingWrong: "משהו השתבש", tryAgain: "נסה שוב",
    celebrateNoDebt: "🎉 אף אחד לא חייב לך כרגע", noOverdue: "✓ אין תשלומים באיחור",
    createdAgo: "נוסף", markPaid: "סמן כשולם", installmentOf: (i, n) => `תשלום ${i} מתוך ${n}`,
    notificationsOn: "תזכורות תשלום פעילות", notificationsOff: "תזכורות תשלום כבויות", notifNote: "שליחת תזכורת יום לפני תשלום קרוב",
  },
  en: {
    navDashboard: "Dashboard", navFriends: "Friends", navAdd: "Add", navPayments: "Payments", navSettings: "Settings", navProducts: "Products",
    hello: "Hello 👋",
    statReceived: "Received this month", statOwed: "Owed to me", statOverdue: "Overdue", statFriends: "Friends",
    attentionTitle: "What needs attention?",
    attnOverdue: "Overdue payments", attnUpcoming: "Payments this week", attnOwed: "Owed to you",
    upcomingTitle: "Upcoming payments", noUpcoming: "No upcoming payments",
    quickAddSale: "New sale", quickAddPayment: "New payment", quickAddFriend: "New friend",
    today: "Today", tomorrow: "Tomorrow", inDays: (n) => `in ${n} days`, daysOverdue: (n) => `${n} days overdue`,
    friendsTitle: "Friends", searchPlaceholder: "Search by name, product or note",
    filterAll: "All", filterOwe: "Owing", filterPaid: "Paid", filterOverdue: "Overdue", filterDueSoon: "Due soon",
    owes: "Owes", paidLabel: "Paid", totalLabel: "Total", nextPayment: "Next payment",
    noFriendsTitle: "No friends yet", addFriendBtn: "Add friend",
    totalPurchases: "Total purchases", paidWord: "Paid", remainingWord: "Remaining",
    salesSectionTitle: "Sales", paymentHistoryTitle: "Payment history", upcomingPaymentsTitle: "Upcoming payments", notesTitle: "Notes",
    editFriend: "Edit", deleteFriend: "Delete friend", addPaymentBtn: "Add payment", addSaleBtn: "New sale",
    noSales: "No sales yet", noPayments: "No payments yet", noUpcomingInstallments: "No upcoming payments",
    confirmDeleteFriend: "Delete this friend and all their sales and payments? This cannot be undone.",
    notesPlaceholder: "Add a note...", saveNote: "Save note",
    newSaleTitle: "New sale", whoQ: "Who bought?", whatQ: "What did they buy?", priceLabel: "Price",
    paidNowLabel: "Paid now?", dateLabel: "Date", methodLabel: "Payment method", notesLabel: "Notes", notesOptional: "optional",
    installmentsToggle: "Pay in installments", installmentCount: "Number of installments", firstDueDate: "First due date",
    frequency: "Frequency", freqWeekly: "Weekly", freqBiweekly: "Bi-weekly", freqMonthly: "Monthly", freqCustom: "Custom",
    customDays: "Every N days", remainingPreview: "To split", perInstallmentPreview: "Per installment",
    saveSale: "Save sale", newFriendOption: "+ New friend",
    newPaymentTitle: "New payment", selectFriend: "Select friend", selectSale: "Linked sale", amountLabel: "Amount", savePayment: "Save payment",
    newFriendTitle: "New friend", nameLabel: "Name", phoneLabel: "Phone", saveFriend: "Save friend",
    paymentsTitle: "Payments", noPaymentsYet: "No payments yet", relatedSale: "Sale",
    productsTitle: "Products", soldCount: "Sold", totalAmountLabel: "Total", noProducts: "No products yet",
    paymentReceived: "Payment received", newBalanceLabel: "New balance",
    settingsTitle: "Settings", language: "Language", font: "Font", theme: "Theme",
    themeLight: "Light", themeDark: "Dark", themeSystem: "System",
    accountSection: "Account", backupRestore: "Backup & restore", notifications: "Notifications", about: "About",
    exportJson: "Export data (JSON)", exportCsv: "Export payments (CSV)", importJson: "Restore data",
    aboutText: "FutureIL — a private app to track personal sales and payments.",
    welcomeTitle: "Welcome 👋", welcomeSub: "Manage your sales, payments and debts in one place.", getStarted: "Get started",
    welcomeCreateNew: "Create new PIN", welcomeHaveOne: "I already have a PIN", loginPinTitle: "Enter your PIN",
    choosePinTitle: "Create a PIN", confirmPinTitle: "Confirm PIN", pinMismatch: "PINs don't match, try again",
    pinTooShort: "PIN too short (min 4 digits)", serverError: "Connection error, try again", signOut: "Sign out",
    wrongPin: "Wrong PIN",
    save: "Save", cancel: "Cancel", delete: "Delete", edit: "Edit", back: "Back", done: "Done", confirm: "Confirm", required: "Required",
    cash: "Cash", paybox: "PayBox", bit: "Bit", transfer: "Bank transfer", card: "Card", other: "Other",
    noneOpen: "No open sales", chooseFont: "Choose font", chooseTheme: "Choose theme", chooseLanguage: "Choose language",
    confirmDeletePayment: "Delete this payment?", confirmDeleteSale: "Delete this sale and all its payments?",
    confirmRestore: "Restoring will replace all existing data. Continue?", restoredOk: "Restore completed",
    invalidFile: "Invalid file", somethingWrong: "Something went wrong", tryAgain: "Try again",
    celebrateNoDebt: "🎉 No one owes you right now", noOverdue: "✓ No overdue payments",
    createdAgo: "Added", markPaid: "Mark paid", installmentOf: (i, n) => `Installment ${i} of ${n}`,
    notificationsOn: "Payment reminders on", notificationsOff: "Payment reminders off", notifNote: "Sends a reminder a day before a payment is due",
  },
};
function t(key, ...args) {
  const v = STRINGS[state.lang][key];
  return typeof v === "function" ? v(...args) : v ?? key;
}

/* ===================== Server API (PIN = account) ===================== */
async function apiRegister(pin) {
  try {
    const r = await fetch("/api/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ pin }) });
    if (r.ok) { const j = await r.json(); return { ok: true, token: j.token, data: j.data }; }
    return { ok: false, status: r.status };
  } catch (e) { return { ok: false, status: 0 }; }
}
async function apiLogin(pin) {
  try {
    const r = await fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ pin }) });
    if (r.ok) { const j = await r.json(); return { ok: true, token: j.token, data: j.data }; }
    return { ok: false, status: r.status };
  } catch (e) { return { ok: false, status: 0 }; }
}
async function apiSession(token) {
  try {
    const r = await fetch("/api/session/" + encodeURIComponent(token));
    if (r.ok) { const j = await r.json(); return { ok: true, data: j.data }; }
    return { ok: false, status: r.status };
  } catch (e) { return { ok: false, status: 0 }; }
}
async function apiSave() {
  const token = localStorage.getItem("fi_session");
  if (!token) return;
  const data = {
    friends: state.friends, sales: state.sales, payments: state.payments,
    settings: { lang: state.lang, theme: state.theme, font: state.font, notifsEnabled: state.notifsEnabled },
  };
  try {
    await fetch("/api/save", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token, data }) });
  } catch (e) { showToast(t("serverError")); }
}

/* ===================== Utils ===================== */
function uid() { return "id_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 9); }
function todayISO() { return new Date().toISOString().slice(0, 10); }
function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function round2(n) { return Math.round((n + Number.EPSILON) * 100) / 100; }
function fmtCurrency(n) {
  const v = round2(n || 0);
  const formatted = Math.abs(v) < 0.005 ? "0" : v.toLocaleString(state.lang === "he" ? "he-IL" : "en-US", { maximumFractionDigits: 2 });
  return "₪" + formatted;
}
function fmtDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
function daysBetween(a, b) { return Math.round((new Date(b) - new Date(a)) / 86400000); }
function relativeDay(iso) {
  const diff = daysBetween(todayISO(), iso);
  if (diff === 0) return t("today");
  if (diff === 1) return t("tomorrow");
  if (diff > 1) return t("inDays", diff);
  return fmtDate(iso);
}
function addMonthsISO(iso, n) {
  const d = new Date(iso + "T00:00:00Z");
  const day = d.getUTCDate();
  d.setUTCMonth(d.getUTCMonth() + n);
  if (d.getUTCDate() !== day) d.setUTCDate(0);
  return d.toISOString().slice(0, 10);
}
function addDaysISO(iso, n) {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
function initials(name) {
  return (name || "?").trim().slice(0, 2).toUpperCase();
}

/* ===================== State ===================== */
const state = {
  lang: localStorage.getItem("fi_lang_pref") || "he",
  theme: "system",
  font: "default",
  booted: false,
  notifsEnabled: false,
  friends: [], sales: [], payments: [],
  tab: "dashboard",
  stack: [],
  sheet: null,
  fabOpen: false,
  toast: null,
  search: "",
  filter: "all",
  authMode: "welcome", pinDraft: "", pinFirstEntry: "", authError: null, authBusy: false,
};
const TABS = ["dashboard", "friends", "payments", "settings"];

function isLoggedIn() { return !!localStorage.getItem("fi_session"); }
function applyServerData(data) {
  state.friends = data.friends || [];
  state.sales = data.sales || [];
  state.payments = data.payments || [];
  const s = data.settings || {};
  state.lang = s.lang || state.lang;
  state.theme = s.theme || "system";
  state.font = s.font || "default";
  state.notifsEnabled = !!s.notifsEnabled;
}

/* ===================== Derived data / calculations ===================== */
function friendById(id) { return state.friends.find((f) => f.id === id); }
function saleById(id) { return state.sales.find((s) => s.id === id); }
function salesForFriend(fid) { return state.sales.filter((s) => s.friendId === fid).sort((a, b) => a.saleDate < b.saleDate ? 1 : -1); }
function paymentsForSale(sid) { return state.payments.filter((p) => p.saleId === sid); }
function paymentsForFriend(fid) { return state.payments.filter((p) => p.friendId === fid).sort((a, b) => a.date < b.date ? 1 : -1); }
function saleTotals(sale) {
  const paid = round2(paymentsForSale(sale.id).reduce((s, p) => s + p.amount, 0));
  return { paid, remaining: round2(sale.totalAmount - paid) };
}
function friendTotals(fid) {
  let total = 0, paid = 0;
  salesForFriend(fid).forEach((s) => { total += s.totalAmount; paid += saleTotals(s).paid; });
  return { total: round2(total), paid: round2(paid), remaining: round2(total - paid) };
}
function saleInstallmentItems(sale) {
  if (!sale.installmentPlan) return [];
  const { paid } = saleTotals(sale);
  const extraPaid = round2(paid - (sale.initialPaid || 0));
  let cum = 0;
  return sale.installmentPlan.items.map((item, i) => {
    cum = round2(cum + item.amount);
    let status;
    if (extraPaid >= cum - 0.01) status = "paid";
    else if (item.dueDate < todayISO()) status = "overdue";
    else status = "upcoming";
    return { ...item, index: i, count: sale.installmentPlan.items.length, saleId: sale.id, friendId: sale.friendId, status };
  });
}
function allInstallmentItems() {
  const out = [];
  state.sales.forEach((s) => out.push(...saleInstallmentItems(s)));
  return out;
}
function friendNextPayment(fid) {
  const items = allInstallmentItems().filter((i) => i.friendId === fid && i.status !== "paid").sort((a, b) => a.dueDate < b.dueDate ? -1 : 1);
  return items[0] || null;
}
function dashboardStats() {
  const monthPrefix = todayISO().slice(0, 7);
  const receivedMonth = round2(state.payments.filter((p) => p.date.startsWith(monthPrefix)).reduce((s, p) => s + p.amount, 0));
  let owed = 0;
  state.friends.forEach((f) => { owed += Math.max(0, friendTotals(f.id).remaining); });
  const overdueItems = allInstallmentItems().filter((i) => i.status === "overdue");
  const overdue = round2(overdueItems.reduce((s, i) => s + i.amount, 0));
  return { receivedMonth, owed: round2(owed), overdue, friendsCount: state.friends.length, overdueCount: overdueItems.length };
}
function productStats() {
  const map = new Map();
  state.sales.forEach((s) => {
    const key = s.product.trim() || "-";
    if (!map.has(key)) map.set(key, { name: key, count: 0, total: 0 });
    const p = map.get(key);
    p.count++; p.total = round2(p.total + s.totalAmount);
  });
  return [...map.values()].sort((a, b) => b.total - a.total);
}

/* ===================== Rendering shell ===================== */
const appEl = document.getElementById("app");

function applyTheme() {
  const root = document.documentElement;
  if (state.theme === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", state.theme);
}
function applyLang() {
  const root = document.documentElement;
  root.lang = state.lang;
  root.dir = state.lang === "he" ? "rtl" : "ltr";
}
function applyFont() {
  document.body.className = document.body.className.replace(/font-\w+/g, "").trim();
  const map = { rubik: "font-rubik", assistant: "font-assistant", noto: "font-noto", manrope: "font-manrope", jakarta: "font-jakarta" };
  if (map[state.font]) document.body.classList.add(map[state.font]);
}

function render() {
  applyTheme(); applyLang(); applyFont();
  if (!state.booted) { appEl.innerHTML = renderSplash(); return; }
  if (!isLoggedIn()) { appEl.innerHTML = renderAuthScreen(); bindAuthScreen(); return; }

  let html = `<div class="sidebar">${renderSidebar()}</div>`;
  html += `<div class="tabs-wrap" id="tabsWrap">`;
  html += `<div class="screen" id="tabScreen">${renderTab(state.tab)}</div>`;
  html += `</div>`;
  html += `<div class="bottom-nav"><div class="bottom-nav-inner">${renderBottomNav()}</div></div>`;

  state.stack.forEach((desc, i) => {
    html += renderModal(desc, i === state.stack.length - 1);
  });
  if (state.fabOpen) html += renderFabMenu();
  if (state.sheet) html += renderSheet(state.sheet);
  if (state.toast) html += `<div class="toast"><div class="toast-inner">${esc(state.toast)}</div></div>`;

  appEl.innerHTML = html;
  bindGlobal();
  bindSwipe();
}

function showToast(msg) {
  state.toast = msg;
  render();
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { state.toast = null; render(); }, 2200);
}

function openModal(desc) { state.stack.push(desc); state.fabOpen = false; render(); }
function replaceTop(desc) { state.stack.pop(); state.stack.push(desc); render(); }
function closeModal() { state.stack.pop(); render(); }
function closeAllModals() { state.stack = []; render(); }
function goTab(tabName) { state.tab = tabName; state.stack = []; render(); }

/* ===================== Sidebar / Bottom nav ===================== */
function renderSidebar() {
  const items = [
    ["dashboard", "🏠", t("navDashboard")],
    ["friends", "👥", t("navFriends")],
    ["payments", "💳", t("navPayments")],
    ["products", "📦", t("navProducts")],
    ["settings", "⚙️", t("navSettings")],
  ];
  let html = `<div class="sidebar-brand"><img src="logo.png" alt=""/> FutureIL</div>`;
  items.forEach(([key, icon, label]) => {
    const active = (key === "products" ? state.stack[0]?.type === "products" : state.tab === key && state.stack.length === 0);
    html += `<button class="side-btn ${active ? "active" : ""}" data-side="${key}"><span class="icon">${icon}</span>${esc(label)}</button>`;
  });
  html += `<button class="side-btn side-btn-add" data-action="openFab"><span class="icon">➕</span>${esc(t("quickAddSale"))}</button>`;
  return html;
}
function renderBottomNav() {
  const items = [
    ["dashboard", "🏠", t("navDashboard")],
    ["friends", "👥", t("navFriends")],
    ["__fab__", "", ""],
    ["payments", "💳", t("navPayments")],
    ["settings", "⚙️", t("navSettings")],
  ];
  return items.map(([key, icon, label]) => {
    if (key === "__fab__") {
      return `<button class="nav-fab ${state.fabOpen ? "open" : ""}" data-action="toggleFab">➕</button>`;
    }
    const active = state.tab === key && state.stack.length === 0;
    return `<button class="nav-btn ${active ? "active" : ""}" data-tab="${key}"><span class="icon">${icon}</span><span class="label">${esc(label)}</span></button>`;
  }).join("");
}
function renderFabMenu() {
  return `<div class="fab-menu-backdrop" data-action="closeFab"></div>
  <div class="fab-menu">
    <button class="fab-menu-item" data-action="newSale">➕ ${esc(t("quickAddSale"))}</button>
    <button class="fab-menu-item" data-action="newPayment">💰 ${esc(t("quickAddPayment"))}</button>
    <button class="fab-menu-item" data-action="newFriend">👤 ${esc(t("quickAddFriend"))}</button>
  </div>`;
}

/* ===================== Tabs ===================== */
function renderTab(tab) {
  if (tab === "dashboard") return renderDashboard();
  if (tab === "friends") return renderFriends();
  if (tab === "payments") return renderPayments();
  if (tab === "settings") return renderSettings();
  return "";
}

function renderDashboard() {
  const s = dashboardStats();
  const upcoming = allInstallmentItems().filter((i) => i.status === "upcoming" || i.status === "overdue")
    .sort((a, b) => a.dueDate < b.dueDate ? -1 : 1).slice(0, 6);
  let attn = "";
  if (s.overdueCount > 0) attn += attnRow("🔴", t("attnOverdue"), `${s.overdueCount} • ${fmtCurrency(s.overdue)}`, "overdueFilter");
  const weekCount = upcoming.filter((i) => daysBetween(todayISO(), i.dueDate) <= 7 && i.status === "upcoming").length;
  if (weekCount > 0) attn += attnRow("🟡", t("attnUpcoming"), `${weekCount}`, "dueSoonFilter");
  if (s.owed > 0) attn += attnRow("💰", t("attnOwed"), fmtCurrency(s.owed), "oweFilter");
  if (!attn) attn = `<div class="empty-state"><div class="empty-emoji">✓</div><div class="empty-title">${esc(t("noOverdue"))}</div></div>`;

  return `<div class="page-pad">
    <h1 class="title">${esc(t("hello"))}</h1>
    <div class="stat-grid" style="margin-top:14px;">
      ${statCard("💰", t("statReceived"), fmtCurrency(s.receivedMonth), "green")}
      ${statCard("🧾", t("statOwed"), fmtCurrency(s.owed), "blue")}
      ${statCard("⏰", t("statOverdue"), fmtCurrency(s.overdue), "red")}
      ${statCard("👥", t("statFriends"), s.friendsCount, "")}
    </div>
    <h2 class="section-title">${esc(t("attentionTitle"))}</h2>
    <div class="card" style="padding:6px 14px;">${attn}</div>
    <h2 class="section-title">${esc(t("upcomingTitle"))}</h2>
    <div class="card" style="padding:6px 14px;">
      ${upcoming.length ? upcoming.map(upcomingRow).join("") : `<div class="empty-state" style="padding:30px 10px;"><div class="empty-title">${esc(t("noUpcoming"))}</div></div>`}
    </div>
  </div>`;
}
function statCard(icon, label, value, color) {
  return `<div class="stat-card"><div class="stat-icon">${icon}</div><div class="stat-label">${esc(label)}</div><div class="stat-value ${color}" data-count="${typeof value === "string" ? "" : value}">${typeof value === "number" ? value : value}</div></div>`;
}
function attnRow(icon, title, sub, filterKey) {
  return `<button class="attn-item" data-action="attn" data-filter="${filterKey}">
    <span class="attn-emoji">${icon}</span>
    <span class="attn-text"><div class="attn-title">${esc(title)}</div><div class="attn-sub">${esc(sub)}</div></span>
    <span class="chev">›</span>
  </button>`;
}
function upcomingRow(item) {
  const f = friendById(item.friendId);
  const badge = item.status === "overdue" ? `<span class="badge red">${esc(relativeDay(item.dueDate))}</span>` : `<span class="badge blue">${esc(relativeDay(item.dueDate))}</span>`;
  return `<button class="attn-item" data-action="openFriend" data-id="${item.friendId}">
    <span class="avatar" style="width:36px;height:36px;font-size:13px;">${esc(initials(f?.name))}</span>
    <span class="attn-text"><div class="attn-title">${esc(f?.name || "")}</div><div class="attn-sub">${esc(t("installmentOf", item.index + 1, item.count))}</div></span>
    <span style="text-align:end;"><div style="font-weight:800;">${fmtCurrency(item.amount)}</div>${badge}</span>
  </button>`;
}

function renderFriends() {
  const q = state.search.trim().toLowerCase();
  let list = state.friends.map((f) => ({ f, tot: friendTotals(f.id), next: friendNextPayment(f.id) }));
  if (q) {
    list = list.filter(({ f }) => {
      if (f.name.toLowerCase().includes(q) || (f.notes || "").toLowerCase().includes(q)) return true;
      return salesForFriend(f.id).some((s) => s.product.toLowerCase().includes(q));
    });
  }
  if (state.filter === "owe") list = list.filter(({ tot }) => tot.remaining > 0.01);
  if (state.filter === "paid") list = list.filter(({ tot }) => tot.remaining <= 0.01 && tot.total > 0);
  if (state.filter === "overdue") list = list.filter(({ next }) => next && next.status === "overdue");
  if (state.filter === "dueSoon") list = list.filter(({ next }) => next && next.status === "upcoming" && daysBetween(todayISO(), next.dueDate) <= 7);
  list.sort((a, b) => b.tot.remaining - a.tot.remaining);

  const filters = [["all", t("filterAll")], ["owe", t("filterOwe")], ["paid", t("filterPaid")], ["overdue", t("filterOverdue")], ["dueSoon", t("filterDueSoon")]];

  return `<div class="page-pad">
    <h1 class="title">${esc(t("friendsTitle"))}</h1>
    <div class="search-bar" style="margin-top:14px;">
      <span>🔍</span><input id="searchInput" placeholder="${esc(t("searchPlaceholder"))}" value="${esc(state.search)}" />
    </div>
    <div class="filter-chip-row">${filters.map(([k, l]) => `<button class="chip ${state.filter === k ? "active" : ""}" data-filter-set="${k}">${esc(l)}</button>`).join("")}</div>
    ${state.friends.length === 0 ? `<div class="empty-state"><div class="empty-emoji">👥</div><div class="empty-title">${esc(t("noFriendsTitle"))}</div><button class="btn-primary" style="width:auto;padding:12px 24px;" data-action="newFriend">${esc(t("addFriendBtn"))}</button></div>` :
      (list.length === 0 ? `<div class="empty-state"><div class="empty-emoji">🔍</div><div class="empty-title">—</div></div>` :
      `<div class="card" style="padding:2px 14px;margin-top:8px;">${list.map(({ f, tot, next }) => friendCard(f, tot, next)).join("")}</div>`)}
  </div>`;
}
function friendCard(f, tot, next) {
  const pct = tot.total > 0 ? Math.min(100, Math.round((tot.paid / tot.total) * 100)) : 0;
  return `<button class="friend-card list-row" data-action="openFriend" data-id="${f.id}">
    <span class="avatar">${esc(initials(f.name))}</span>
    <span class="friend-info">
      <div class="friend-name">${esc(f.name)}</div>
      <div class="friend-meta">
        <span>${esc(t("owes"))} <b>${fmtCurrency(Math.max(0, tot.remaining))}</b></span>
        <span>${esc(t("totalLabel"))} <b>${fmtCurrency(tot.total)}</b></span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      ${next ? `<div class="friend-next">${esc(t("nextPayment"))}: ${fmtCurrency(next.amount)} • ${esc(fmtDate(next.dueDate))}</div>` : ""}
    </span>
    <span class="chev">›</span>
  </button>`;
}

function renderPayments() {
  const list = [...state.payments].sort((a, b) => a.date < b.date ? 1 : -1);
  return `<div class="page-pad">
    <h1 class="title">${esc(t("paymentsTitle"))}</h1>
    ${list.length === 0 ? `<div class="empty-state"><div class="empty-emoji">💳</div><div class="empty-title">${esc(t("noPaymentsYet"))}</div></div>` :
    `<div class="card" style="padding:2px 14px;margin-top:14px;">${list.map(paymentRow).join("")}</div>`}
  </div>`;
}
function paymentRow(p) {
  const f = friendById(p.friendId);
  const s = saleById(p.saleId);
  return `<button class="list-row" data-action="viewPayment" data-id="${p.id}">
    <span class="avatar" style="width:38px;height:38px;font-size:13px;">${esc(initials(f?.name))}</span>
    <span class="friend-info">
      <div class="friend-name">${esc(f?.name || "")}</div>
      <div class="attn-sub">${esc(fmtDate(p.date))} • ${esc(t(methodKey(p.method)))}${s ? " • " + esc(s.product) : ""}</div>
    </span>
    <span style="font-weight:800;color:var(--green);">+${fmtCurrency(p.amount)}</span>
  </button>`;
}
function methodKey(m) { return ["cash", "paybox", "bit", "transfer", "card", "other"].includes(m) ? m : "other"; }

function renderSettings() {
  const fontOptions = { default: "Heebo / Inter", rubik: "Rubik", assistant: "Assistant", noto: "Noto Sans", manrope: "Manrope", jakarta: "Plus Jakarta Sans" };
  const themeLabel = { light: t("themeLight"), dark: t("themeDark"), system: t("themeSystem") }[state.theme];
  const langLabel = state.lang === "he" ? "עברית" : "English";
  return `<div class="page-pad">
    <h1 class="title">${esc(t("settingsTitle"))}</h1>
    <div class="card" style="margin-top:14px;padding:4px 16px;">
      ${settingsRow("🌐", t("language"), langLabel, "openLangSheet")}
      ${settingsRow("🔤", t("font"), fontOptions[state.font], "openFontSheet")}
      ${settingsRow("🎨", t("theme"), themeLabel, "openThemeSheet")}
    </div>
    <h2 class="section-title">${esc(t("accountSection"))}</h2>
    <div class="card" style="padding:4px 16px;">
      ${settingsRow("🚪", t("signOut"), "", "signOut")}
    </div>
    <h2 class="section-title">${esc(t("notifications"))}</h2>
    <div class="card" style="padding:4px 16px;">
      <div class="toggle-row"><span>${esc(state.notifsEnabled ? t("notificationsOn") : t("notificationsOff"))}</span><button class="switch ${state.notifsEnabled ? "on" : ""}" data-action="toggleNotifs"></button></div>
      <div class="attn-sub" style="padding:2px 2px 10px;">${esc(t("notifNote"))}</div>
    </div>
    <h2 class="section-title">${esc(t("backupRestore"))}</h2>
    <div class="card" style="padding:4px 16px;">
      ${settingsRow("📤", t("exportJson"), "", "exportJson")}
      ${settingsRow("📄", t("exportCsv"), "", "exportCsv")}
      ${settingsRow("📥", t("importJson"), "", "importJson")}
    </div>
    <h2 class="section-title">${esc(t("navProducts"))}</h2>
    <div class="card" style="padding:4px 16px;">${settingsRow("📦", t("navProducts"), "", "openProducts")}</div>
    <h2 class="section-title">${esc(t("about"))}</h2>
    <div class="card"><div class="attn-sub" style="padding:6px 2px;">${esc(t("aboutText"))}</div></div>
    <input type="file" id="importFile" accept="application/json" style="display:none;" />
  </div>`;
}
function settingsRow(icon, title, value, action) {
  return `<button class="attn-item" data-action="${action}">
    <span class="attn-emoji">${icon}</span>
    <span class="attn-text"><div class="attn-title">${esc(title)}</div></span>
    ${value ? `<span class="text-secondary" style="font-size:14px;">${esc(value)}</span>` : ""}
    <span class="chev">›</span>
  </button>`;
}

function renderProducts() {
  const items = productStats();
  return modalWrap("products", t("navProducts"), `
    ${items.length === 0 ? `<div class="empty-state"><div class="empty-emoji">📦</div><div class="empty-title">${esc(t("noProducts"))}</div></div>` :
    `<div class="card" style="padding:2px 14px;">${items.map((p) => `
      <div class="attn-item"><span class="attn-emoji">📦</span>
        <span class="attn-text"><div class="attn-title">${esc(p.name)}</div><div class="attn-sub">${esc(t("soldCount"))}: ${p.count}</div></span>
        <span style="font-weight:800;">${fmtCurrency(p.total)}</span>
      </div>`).join("")}</div>`}
  `);
}

/* ===================== Modal router ===================== */
function renderModal(desc, isTop) {
  if (desc.type === "friendProfile") return renderFriendProfile(desc);
  if (desc.type === "newFriend" || desc.type === "editFriend") return renderFriendForm(desc);
  if (desc.type === "newSale") return renderSaleForm(desc);
  if (desc.type === "newPayment" || desc.type === "editPayment") return renderPaymentForm(desc);
  if (desc.type === "success") return renderSuccess(desc);
  if (desc.type === "products") return renderProducts();
  return "";
}
function modalWrap(idAttr, title, body, headerRight) {
  return `<div class="modal-page" data-modal="${idAttr}">
    <div class="modal-header">
      <button class="modal-back" data-action="back">${state.lang === "he" ? "‹" : "‹"}</button>
      <div class="modal-title">${esc(title)}</div>
      ${headerRight || ""}
    </div>
    <div class="modal-body">${body}</div>
  </div>`;
}

function renderFriendProfile(desc) {
  const f = friendById(desc.id);
  if (!f) return modalWrap("friendProfile", "", `<div class="empty-state">—</div>`);
  const tot = friendTotals(f.id);
  const sales = salesForFriend(f.id);
  const payments = paymentsForFriend(f.id);
  const upcoming = allInstallmentItems().filter((i) => i.friendId === f.id && i.status !== "paid").sort((a, b) => a.dueDate < b.dueDate ? -1 : 1);

  const body = `
    <div class="card" style="text-align:center;">
      <div class="avatar" style="width:60px;height:60px;font-size:20px;margin:0 auto 10px;">${esc(initials(f.name))}</div>
      <div class="friend-name" style="font-size:20px;">${esc(f.name)}</div>
      ${f.phone ? `<div class="attn-sub">${esc(f.phone)}</div>` : ""}
      <div class="stat-grid" style="margin-top:16px;text-align:start;">
        ${statCard("", t("totalPurchases"), fmtCurrency(tot.total), "")}
        ${statCard("", t("paidWord"), fmtCurrency(tot.paid), "green")}
        ${statCard("", t("remainingWord"), fmtCurrency(Math.max(0, tot.remaining)), "red")}
      </div>
    </div>
    <h2 class="section-title">${esc(t("salesSectionTitle"))}</h2>
    <div class="card" style="padding:2px 14px;">
      ${sales.length ? sales.map((s) => saleRow(s)).join("") : `<div class="empty-state" style="padding:24px 10px;"><div class="attn-sub">${esc(t("noSales"))}</div></div>`}
    </div>
    <h2 class="section-title">${esc(t("paymentHistoryTitle"))}</h2>
    <div class="card" style="padding:2px 14px;">
      ${payments.length ? payments.map(paymentRow).join("") : `<div class="empty-state" style="padding:24px 10px;"><div class="attn-sub">${esc(t("noPayments"))}</div></div>`}
    </div>
    <h2 class="section-title">${esc(t("upcomingPaymentsTitle"))}</h2>
    <div class="card" style="padding:2px 14px;">
      ${upcoming.length ? upcoming.map((i) => `<div class="attn-item"><span class="attn-emoji">${i.status === "overdue" ? "🔴" : "🗓️"}</span><span class="attn-text"><div class="attn-title">${fmtCurrency(i.amount)}</div><div class="attn-sub">${esc(fmtDate(i.dueDate))}</div></span>${i.status === "overdue" ? `<span class="badge red">${esc(t("daysOverdue", daysBetween(i.dueDate, todayISO())))}</span>` : ""}</div>`).join("") : `<div class="empty-state" style="padding:24px 10px;"><div class="attn-sub">${esc(t("noUpcomingInstallments"))}</div></div>`}
    </div>
    <h2 class="section-title">${esc(t("notesTitle"))}</h2>
    <div class="card">
      <textarea id="friendNotes" rows="3" placeholder="${esc(t("notesPlaceholder"))}">${esc(f.notes || "")}</textarea>
      <button class="btn-primary gray" style="margin-top:10px;" data-action="saveFriendNotes" data-id="${f.id}">${esc(t("saveNote"))}</button>
    </div>
    <div style="display:flex;gap:10px;margin-top:22px;">
      <button class="btn-primary gray" data-action="editFriend" data-id="${f.id}">${esc(t("editFriend"))}</button>
      <button class="btn-primary danger" data-action="deleteFriend" data-id="${f.id}">${esc(t("deleteFriend"))}</button>
    </div>
    <div style="display:flex;gap:10px;margin-top:10px;">
      <button class="btn-primary" data-action="addSaleFor" data-id="${f.id}">${esc(t("addSaleBtn"))}</button>
      <button class="btn-primary" data-action="addPaymentFor" data-id="${f.id}">${esc(t("addPaymentBtn"))}</button>
    </div>
  `;
  return modalWrap("friendProfile", f.name, body);
}
function saleRow(s) {
  const { paid, remaining } = saleTotals(s);
  return `<div class="attn-item">
    <span class="attn-emoji">🛍️</span>
    <span class="attn-text"><div class="attn-title">${esc(s.product)}</div><div class="attn-sub">${esc(fmtDate(s.saleDate))}${s.installmentPlan ? " • " + esc(t("installmentsToggle")) : ""}</div></span>
    <span style="text-align:end;">
      <div style="font-weight:800;">${fmtCurrency(s.totalAmount)}</div>
      <div class="attn-sub">${remaining > 0.01 ? esc(t("remainingWord")) + " " + fmtCurrency(remaining) : "✓ " + esc(t("paidWord"))}</div>
    </span>
  </div>`;
}

function renderFriendForm(desc) {
  const editing = desc.type === "editFriend";
  const f = editing ? friendById(desc.id) : null;
  const body = `
    <div class="field"><label>${esc(t("nameLabel"))} *</label><input id="fName" value="${esc(f?.name || "")}" /></div>
    <div class="field"><label>${esc(t("phoneLabel"))}</label><input id="fPhone" type="tel" value="${esc(f?.phone || "")}" /></div>
    <div class="field"><label>${esc(t("notesTitle"))} (${esc(t("notesOptional"))})</label><textarea id="fNotes" rows="3">${esc(f?.notes || "")}</textarea></div>
    <button class="btn-primary" data-action="saveFriendForm" data-id="${f?.id || ""}">${esc(t("saveFriend"))}</button>
  `;
  return modalWrap(desc.type, editing ? t("editFriend") : t("newFriendTitle"), body);
}

function saleFormBody(d) {
  const friendOptions = state.friends.map((f) => `<option value="${f.id}" ${d.friendId === f.id ? "selected" : ""}>${esc(f.name)}</option>`).join("");
  const products = [...new Set(state.sales.map((s) => s.product))];
  const methods = [["cash", t("cash")], ["paybox", t("paybox")], ["bit", t("bit")], ["transfer", t("transfer")], ["card", t("card")], ["other", t("other")]];
  const remaining = round2((d.totalAmount || 0) - (d.paidNow || 0));
  const per = d.instCount > 0 ? round2(remaining / d.instCount) : 0;

  return `
    <div class="field"><label>${esc(t("whoQ"))} *</label>
      <select id="sFriend">
        <option value="">—</option>
        ${friendOptions}
        <option value="__new__">${esc(t("newFriendOption"))}</option>
      </select>
    </div>
    <div id="sNewFriendWrap" class="field" style="display:${d.friendId === "__new__" ? "block" : "none"};"><label>${esc(t("nameLabel"))}</label><input id="sNewFriendName" value="${esc(d.newFriendName || "")}" /></div>
    <div class="field"><label>${esc(t("whatQ"))} *</label><input id="sProduct" list="productList" value="${esc(d.product || "")}" />
      <datalist id="productList">${products.map((p) => `<option value="${esc(p)}">`).join("")}</datalist>
    </div>
    <div class="field"><label>${esc(t("priceLabel"))} *</label><div class="amount-input-wrap"><span class="amount-currency">₪</span><input id="sTotal" type="number" inputmode="decimal" min="0" step="0.01" value="${d.totalAmount || ""}" /></div></div>
    <div class="field"><label>${esc(t("paidNowLabel"))}</label><div class="amount-input-wrap"><span class="amount-currency">₪</span><input id="sPaidNow" type="number" inputmode="decimal" min="0" step="0.01" value="${d.paidNow || ""}" /></div></div>
    <div class="field"><label>${esc(t("dateLabel"))}</label><input id="sDate" type="date" value="${d.date}" /></div>
    <div class="field"><label>${esc(t("methodLabel"))}</label><div class="pill-select">${methods.map(([k, l]) => `<button class="pill-option ${d.method === k ? "active" : ""}" data-set-method="${k}">${esc(l)}</button>`).join("")}</div></div>
    <div class="field"><label>${esc(t("notesLabel"))} (${esc(t("notesOptional"))})</label><textarea id="sNotes" rows="2">${esc(d.notes || "")}</textarea></div>
    <div class="toggle-row"><span>${esc(t("installmentsToggle"))}</span><button class="switch ${d.installments ? "on" : ""}" id="sInstallmentsSwitch"></button></div>
    <div class="card" id="sInstallmentPanel" style="margin-top:12px;display:${d.installments ? "block" : "none"};">
      <div class="field"><label>${esc(t("installmentCount"))}</label><input id="sInstCount" type="number" min="2" max="24" value="${d.instCount}" /></div>
      <div class="field"><label>${esc(t("firstDueDate"))}</label><input id="sInstFirstDate" type="date" value="${d.instFirstDate}" /></div>
      <div class="field"><label>${esc(t("frequency"))}</label><div class="pill-select">
        <button class="pill-option ${d.frequency === "weekly" ? "active" : ""}" data-set-freq="weekly">${esc(t("freqWeekly"))}</button>
        <button class="pill-option ${d.frequency === "biweekly" ? "active" : ""}" data-set-freq="biweekly">${esc(t("freqBiweekly"))}</button>
        <button class="pill-option ${d.frequency === "monthly" ? "active" : ""}" data-set-freq="monthly">${esc(t("freqMonthly"))}</button>
        <button class="pill-option ${d.frequency === "custom" ? "active" : ""}" data-set-freq="custom">${esc(t("freqCustom"))}</button>
      </div></div>
      <div class="field" id="sCustomDaysWrap" style="display:${d.frequency === "custom" ? "block" : "none"};"><label>${esc(t("customDays"))}</label><input id="sCustomDays" type="number" min="1" value="${d.customDays}" /></div>
      <div class="flex-between"><span class="text-secondary">${esc(t("remainingPreview"))}</span><b id="sRemainingPreview">${fmtCurrency(remaining)}</b></div>
      <div class="flex-between" style="margin-top:4px;"><span class="text-secondary">${esc(t("perInstallmentPreview"))}</span><b id="sPerInstallmentPreview">${fmtCurrency(per)}</b></div>
    </div>
    <button class="btn-primary" style="margin-top:20px;" data-action="saveSaleForm">${esc(t("saveSale"))}</button>
  `;
}
function renderSaleForm(desc) {
  return modalWrap(desc.type, t("newSaleTitle"), saleFormBody(desc.draft));
}

function paymentFormBody(d, editing, descId) {
  const friendOptions = state.friends.map((f) => `<option value="${f.id}" ${d.friendId === f.id ? "selected" : ""}>${esc(f.name)}</option>`).join("");
  const openSales = d.friendId ? salesForFriend(d.friendId).filter((s) => editing || saleTotals(s).remaining > 0.01) : [];
  const methods = [["cash", t("cash")], ["paybox", t("paybox")], ["bit", t("bit")], ["transfer", t("transfer")], ["card", t("card")], ["other", t("other")]];
  return `
    <div class="field"><label>${esc(t("selectFriend"))} *</label>
      <select id="pFriend" ${editing ? "disabled" : ""}>
        <option value="">—</option>${friendOptions}
      </select>
    </div>
    ${d.friendId ? `<div class="field"><label>${esc(t("selectSale"))}</label>
      <select id="pSale">
        ${openSales.length ? openSales.map((s) => `<option value="${s.id}" ${d.saleId === s.id ? "selected" : ""}>${esc(s.product)} — ${fmtCurrency(saleTotals(s).remaining)}</option>`).join("") : `<option value="">${esc(t("noneOpen"))}</option>`}
      </select></div>` : ""}
    <div class="field"><label>${esc(t("amountLabel"))} *</label><div class="amount-input-wrap"><span class="amount-currency">₪</span><input id="pAmount" type="number" inputmode="decimal" min="0" step="0.01" value="${d.amount || ""}" /></div></div>
    <div class="field"><label>${esc(t("dateLabel"))}</label><input id="pDate" type="date" value="${d.date}" /></div>
    <div class="field"><label>${esc(t("methodLabel"))}</label><div class="pill-select">${methods.map(([k, l]) => `<button class="pill-option ${d.method === k ? "active" : ""}" data-set-pmethod="${k}">${esc(l)}</button>`).join("")}</div></div>
    <div class="field"><label>${esc(t("notesLabel"))} (${esc(t("notesOptional"))})</label><textarea id="pNotes" rows="2">${esc(d.notes || "")}</textarea></div>
    <button class="btn-primary" style="margin-top:10px;" data-action="savePaymentForm">${esc(t("savePayment"))}</button>
    ${editing ? `<button class="btn-primary danger" style="margin-top:10px;" data-action="deletePayment" data-id="${descId}">${esc(t("delete"))}</button>` : ""}
  `;
}
function renderPaymentForm(desc) {
  const editing = desc.type === "editPayment";
  return modalWrap(desc.type, editing ? t("addPaymentBtn") : t("newPaymentTitle"), paymentFormBody(desc.draft, editing, desc.id));
}

function renderSuccess(desc) {
  return `<div class="success-overlay">
    <div class="success-check">✓</div>
    <div class="success-amount">${fmtCurrency(desc.amount)}</div>
    <div class="success-sub">${esc(desc.friendName)} · ${esc(t("paymentReceived"))}</div>
    <div class="success-balance"><div class="attn-sub">${esc(t("newBalanceLabel"))}</div><div style="font-weight:800;font-size:20px;">${fmtCurrency(desc.newBalance)}</div></div>
    <button class="btn-primary" style="width:auto;padding:14px 40px;margin-top:26px;" data-action="closeSuccess">${esc(t("done"))}</button>
  </div>`;
}

/* ===================== Bottom sheets ===================== */
function renderSheet(sheet) {
  let title = "", options = [];
  if (sheet.type === "lang") {
    title = t("chooseLanguage");
    options = [["he", "עברית 🇮🇱"], ["en", "English 🇬🇧"]].map(([k, l]) => ({ k, l, active: state.lang === k }));
  } else if (sheet.type === "theme") {
    title = t("chooseTheme");
    options = [["system", t("themeSystem")], ["light", t("themeLight")], ["dark", t("themeDark")]].map(([k, l]) => ({ k, l, active: state.theme === k }));
  } else if (sheet.type === "font") {
    title = t("chooseFont");
    const opts = state.lang === "he"
      ? [["default", "Heebo"], ["rubik", "Rubik"], ["assistant", "Assistant"], ["noto", "Noto Sans Hebrew"]]
      : [["default", "Inter"], ["manrope", "Manrope"], ["jakarta", "Plus Jakarta Sans"], ["noto", "Noto Sans"]];
    options = opts.map(([k, l]) => ({ k, l, active: state.font === k }));
  }
  return `<div class="sheet-backdrop" data-action="closeSheet"></div>
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-title">${esc(title)}</div>
    ${options.map((o) => `<button class="sheet-option ${o.active ? "active" : ""}" data-sheet-pick="${o.k}" style="${sheet.type === "font" ? fontPreviewStyle(o.k) : ""}"><span>${esc(o.l)}</span><span class="sheet-check">✓</span></button>`).join("")}
  </div>`;
}
function fontPreviewStyle(key) {
  const map = { default: state.lang === "he" ? "Heebo" : "Inter", rubik: "Rubik", assistant: "Assistant", noto: state.lang === "he" ? "Noto Sans Hebrew" : "Noto Sans", manrope: "Manrope", jakarta: "Plus Jakarta Sans" };
  return `font-family:'${map[key]}';font-size:16px;`;
}

/* ===================== Splash / Auth (PIN = account) ===================== */
function renderSplash() {
  return `<div class="onb-screen"><div class="onb-center"><img src="logo.png" class="onb-logo" /></div></div>`;
}
function keypadHtml() {
  const rows = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["⌫", "0", "✓"]];
  return `<div class="keypad">${rows.flat().map((k) => `<button class="key" data-key="${k}">${k}</button>`).join("")}</div>`;
}
function renderAuthScreen() {
  const mode = state.authMode || "welcome";
  if (mode === "welcome") {
    return `<div class="onb-screen"><div class="onb-center">
      <img src="logo.png" class="onb-logo" />
      <div class="onb-title">${esc(t("welcomeTitle"))}</div>
      <div class="onb-sub">${esc(t("welcomeSub"))}</div>
    </div>
    <div style="display:flex;gap:10px;justify-content:center;margin-bottom:6px;">
      <button class="pill-option ${state.lang === "he" ? "active" : ""}" data-onb-lang="he">עברית</button>
      <button class="pill-option ${state.lang === "en" ? "active" : ""}" data-onb-lang="en">English</button>
    </div>
    <button class="btn-primary" data-action="goCreatePin">${esc(t("welcomeCreateNew"))}</button>
    <button class="btn-primary gray" style="margin-top:10px;" data-action="goLoginPin">${esc(t("welcomeHaveOne"))}</button>
    </div>`;
  }
  const title = mode === "login" ? t("loginPinTitle") : mode === "createConfirm" ? t("confirmPinTitle") : t("choosePinTitle");
  const digits = state.pinDraft.length;
  const dotCount = Math.max(digits, 4);
  let dots = "";
  for (let i = 0; i < dotCount; i++) dots += `<div class="lock-dot ${i < digits ? "filled" : ""} ${state.authError ? "err" : ""}"></div>`;
  return `<div class="onb-screen"><div class="onb-center">
    <div class="onb-title">${esc(title)}</div>
    <div class="lock-dots">${dots}</div>
    <div class="attn-sub" style="min-height:18px;color:${state.authError ? "var(--red)" : "inherit"};">${esc(state.authError || (state.authBusy ? "…" : ""))}</div>
    ${keypadHtml()}
  </div>
  <button class="btn-primary gray" data-action="authBack">${esc(t("back"))}</button>
  </div>`;
}
function bindAuthScreen() {
  appEl.querySelectorAll("[data-onb-lang]").forEach((b) => b.addEventListener("click", () => { state.lang = b.dataset.onbLang; localStorage.setItem("fi_lang_pref", state.lang); render(); }));
  const createBtn = appEl.querySelector('[data-action="goCreatePin"]');
  if (createBtn) createBtn.addEventListener("click", () => { state.authMode = "createEnter"; state.pinDraft = ""; state.authError = null; render(); });
  const loginBtn = appEl.querySelector('[data-action="goLoginPin"]');
  if (loginBtn) loginBtn.addEventListener("click", () => { state.authMode = "login"; state.pinDraft = ""; state.authError = null; render(); });
  const backBtn = appEl.querySelector('[data-action="authBack"]');
  if (backBtn) backBtn.addEventListener("click", () => { state.authMode = "welcome"; state.pinDraft = ""; state.pinFirstEntry = ""; state.authError = null; render(); });
  appEl.querySelectorAll("[data-key]").forEach((btn) => btn.addEventListener("click", () => handleAuthKey(btn.dataset.key)));
}
function handleAuthKey(k) {
  if (state.authBusy) return;
  if (k === "⌫") { state.pinDraft = state.pinDraft.slice(0, -1); state.authError = null; render(); return; }
  if (k === "✓") { submitAuthPin(); return; }
  if (state.pinDraft.length < 8) { state.pinDraft += k; state.authError = null; render(); }
}
async function submitAuthPin() {
  const pin = state.pinDraft;
  if (pin.length < 4) { state.authError = t("pinTooShort"); render(); return; }
  if (state.authMode === "createEnter") {
    state.pinFirstEntry = pin; state.pinDraft = ""; state.authMode = "createConfirm"; render(); return;
  }
  if (state.authMode === "createConfirm") {
    if (pin !== state.pinFirstEntry) {
      state.authError = t("pinMismatch"); state.pinDraft = ""; state.pinFirstEntry = ""; state.authMode = "createEnter"; render(); return;
    }
    state.authBusy = true; render();
    const res = await apiRegister(pin);
    state.authBusy = false;
    if (res.ok) { completeLogin(res.token, res.data); return; }
    if (res.status === 409) {
      const res2 = await apiLogin(pin);
      if (res2.ok) { completeLogin(res2.token, res2.data); return; }
    }
    state.authError = t("serverError"); render();
    return;
  }
  if (state.authMode === "login") {
    state.authBusy = true; render();
    const res = await apiLogin(pin);
    state.authBusy = false;
    if (res.ok) { completeLogin(res.token, res.data); return; }
    if (res.status === 404) { state.authError = t("wrongPin"); state.pinDraft = ""; render(); return; }
    state.authError = t("serverError"); render();
  }
}
function completeLogin(token, data) {
  localStorage.setItem("fi_session", token);
  applyServerData(data);
  state.authMode = "welcome"; state.pinDraft = ""; state.pinFirstEntry = ""; state.authError = null;
  render();
}
function signOut() {
  localStorage.removeItem("fi_session");
  state.friends = []; state.sales = []; state.payments = [];
  state.authMode = "welcome"; state.tab = "dashboard"; state.stack = [];
  render();
}

/* ===================== Event binding ===================== */
function bindGlobal() {
  appEl.querySelectorAll("[data-tab]").forEach((b) => b.addEventListener("click", () => goTab(b.dataset.tab)));
  appEl.querySelectorAll("[data-side]").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.side === "products") openModal({ type: "products" });
    else goTab(b.dataset.side);
  }));

  const searchInput = appEl.querySelector("#searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => { state.search = searchInput.value; renderFriendsListOnly(); });
    searchInput.focus();
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
  }
  appEl.querySelectorAll("[data-filter-set]").forEach((b) => b.addEventListener("click", () => { state.filter = b.dataset.filterSet; render(); }));

  bindAction("attn", (b) => {
    const fk = b.dataset.filter;
    state.tab = "friends"; state.stack = [];
    state.filter = fk === "overdueFilter" ? "overdue" : fk === "dueSoonFilter" ? "dueSoon" : "owe";
    render();
  });
  bindAction("openFriend", (b) => openModal({ type: "friendProfile", id: b.dataset.id }));
  bindAction("back", closeModal);
  bindAction("closeSheet", () => { state.sheet = null; render(); });
  bindAction("closeFab", () => { state.fabOpen = false; render(); });
  bindAction("toggleFab", () => { state.fabOpen = !state.fabOpen; render(); });
  bindAction("openFab", () => { state.fabOpen = true; render(); });
  bindAction("newFriend", () => openModal({ type: "newFriend" }));
  bindAction("editFriend", (b) => openModal({ type: "editFriend", id: b.dataset.id }));
  bindAction("addSaleFor", (b) => openModal({ type: "newSale", draft: freshSaleDraft(b.dataset.id) }));
  bindAction("addPaymentFor", (b) => openModal({ type: "newPayment", draft: freshPaymentDraft(b.dataset.id) }));
  bindAction("newSale", () => openModal({ type: "newSale", draft: freshSaleDraft() }));
  bindAction("newPayment", () => openModal({ type: "newPayment", draft: freshPaymentDraft() }));
  bindAction("viewPayment", (b) => {
    const p = state.payments.find((x) => x.id === b.dataset.id);
    if (p) openModal({ type: "editPayment", id: p.id, draft: { ...p } });
  });
  bindAction("openProducts", () => openModal({ type: "products" }));
  bindAction("deleteFriend", async (b) => {
    if (!confirm(t("confirmDeleteFriend"))) return;
    const fid = b.dataset.id;
    state.sales = state.sales.filter((s) => s.friendId !== fid);
    state.payments = state.payments.filter((p) => p.friendId !== fid);
    state.friends = state.friends.filter((f) => f.id !== fid);
    closeAllModals();
    await apiSave();
  });
  bindAction("saveFriendNotes", async (b) => {
    const f = friendById(b.dataset.id);
    f.notes = appEl.querySelector("#friendNotes").value;
    showToast(t("save") + " ✓");
    await apiSave();
  });
  bindAction("saveFriendForm", saveFriendForm);
  bindAction("closeSuccess", () => { closeModal(); });

  bindSaleFormEvents(appEl);
  bindPaymentFormEvents(appEl);

  bindAction("openLangSheet", () => { state.sheet = { type: "lang" }; render(); });
  bindAction("openThemeSheet", () => { state.sheet = { type: "theme" }; render(); });
  bindAction("openFontSheet", () => { state.sheet = { type: "font" }; render(); });
  appEl.querySelectorAll("[data-sheet-pick]").forEach((b) => b.addEventListener("click", async () => {
    const val = b.dataset.sheetPick;
    if (state.sheet.type === "lang") { state.lang = val; localStorage.setItem("fi_lang_pref", val); }
    if (state.sheet.type === "theme") state.theme = val;
    if (state.sheet.type === "font") state.font = val;
    state.sheet = null; render();
    await apiSave();
  }));

  bindAction("toggleNotifs", async () => {
    if (!state.notifsEnabled && "Notification" in window) {
      const perm = await Notification.requestPermission();
      if (perm !== "granted") return;
    }
    state.notifsEnabled = !state.notifsEnabled; render();
    await apiSave();
  });
  bindAction("signOut", signOut);
  bindAction("exportJson", exportJson);
  bindAction("exportCsv", exportCsv);
  bindAction("importJson", () => appEl.querySelector("#importFile").click());
  const importFile = appEl.querySelector("#importFile");
  if (importFile) importFile.addEventListener("change", handleImport);
}
function bindAction(name, fn) {
  appEl.querySelectorAll(`[data-action="${name}"]`).forEach((b) => b.addEventListener("click", () => fn(b)));
}
function renderFriendsListOnly() {
  const scr = document.getElementById("tabScreen");
  if (scr) { scr.innerHTML = renderFriends(); bindGlobal(); }
}

function freshSaleDraft(friendId) {
  return { friendId: friendId || "", product: "", totalAmount: "", paidNow: "", date: todayISO(), method: "cash", notes: "", installments: false, instCount: 3, instFirstDate: addMonthsISO(todayISO(), 1), frequency: "monthly", customDays: 14, newFriendName: "" };
}
function freshPaymentDraft(friendId) {
  let saleId = "";
  if (friendId) {
    const open = salesForFriend(friendId).filter((s) => saleTotals(s).remaining > 0.01);
    if (open.length === 1) saleId = open[0].id;
  }
  return { friendId: friendId || "", saleId, amount: "", date: todayISO(), method: "cash", notes: "" };
}
function currentDraft() { return state.stack[state.stack.length - 1]?.draft; }

function bindSaleFormEvents(container) {
  const sFriend = container.querySelector("#sFriend");
  if (sFriend) sFriend.addEventListener("change", () => {
    const d = currentDraft(); if (!d) return;
    d.friendId = sFriend.value;
    const wrap = container.querySelector("#sNewFriendWrap");
    if (wrap) wrap.style.display = sFriend.value === "__new__" ? "block" : "none";
  });

  const textMap = { sProduct: "product", sNotes: "notes", sDate: "date", sNewFriendName: "newFriendName", sInstFirstDate: "instFirstDate" };
  Object.keys(textMap).forEach((id) => {
    const el = container.querySelector("#" + id);
    if (!el) return;
    el.addEventListener("input", () => { const d = currentDraft(); if (d) d[textMap[id]] = el.value; });
  });

  const cd = container.querySelector("#sCustomDays");
  if (cd) cd.addEventListener("input", () => { const d = currentDraft(); if (d) d.customDays = parseFloat(cd.value) || 0; });

  const numMap = { sTotal: "totalAmount", sPaidNow: "paidNow", sInstCount: "instCount" };
  Object.keys(numMap).forEach((id) => {
    const el = container.querySelector("#" + id);
    if (!el) return;
    el.addEventListener("input", () => {
      const d = currentDraft(); if (!d) return;
      d[numMap[id]] = parseFloat(el.value) || 0;
      updateSalePreview(container);
    });
  });

  container.querySelectorAll("[data-set-method]").forEach((b) => b.addEventListener("click", () => {
    const d = currentDraft(); if (!d) return;
    d.method = b.dataset.setMethod;
    b.parentElement.querySelectorAll(".pill-option").forEach((p) => p.classList.toggle("active", p === b));
  }));
  container.querySelectorAll("[data-set-freq]").forEach((b) => b.addEventListener("click", () => {
    const d = currentDraft(); if (!d) return;
    d.frequency = b.dataset.setFreq;
    b.parentElement.querySelectorAll(".pill-option").forEach((p) => p.classList.toggle("active", p === b));
    const customWrap = container.querySelector("#sCustomDaysWrap");
    if (customWrap) customWrap.style.display = b.dataset.setFreq === "custom" ? "block" : "none";
  }));

  const instSwitch = container.querySelector("#sInstallmentsSwitch");
  if (instSwitch) instSwitch.addEventListener("click", () => {
    const d = currentDraft(); if (!d) return;
    d.installments = !d.installments;
    instSwitch.classList.toggle("on", d.installments);
    const panel = container.querySelector("#sInstallmentPanel");
    if (panel) panel.style.display = d.installments ? "block" : "none";
    updateSalePreview(container);
  });

  const saveBtn = container.querySelector('[data-action="saveSaleForm"]');
  if (saveBtn) saveBtn.addEventListener("click", saveSaleForm);
}
function updateSalePreview(container) {
  const d = currentDraft();
  if (!d) return;
  const remaining = round2((d.totalAmount || 0) - (d.paidNow || 0));
  const per = d.instCount > 0 ? round2(remaining / d.instCount) : 0;
  const remEl = container.querySelector("#sRemainingPreview");
  const perEl = container.querySelector("#sPerInstallmentPreview");
  if (remEl) remEl.textContent = fmtCurrency(remaining);
  if (perEl) perEl.textContent = fmtCurrency(per);
}

function bindPaymentFormEvents(container) {
  const pFriend = container.querySelector("#pFriend");
  if (pFriend) pFriend.addEventListener("change", () => {
    const d = currentDraft(); if (!d) return;
    d.friendId = pFriend.value; d.saleId = "";
    updateModalBody();
  });
  const pSale = container.querySelector("#pSale");
  if (pSale) pSale.addEventListener("change", () => { const d = currentDraft(); if (d) d.saleId = pSale.value; });

  const textMap = { pAmount: "amount", pDate: "date", pNotes: "notes" };
  Object.keys(textMap).forEach((id) => {
    const el = container.querySelector("#" + id);
    if (!el) return;
    el.addEventListener("input", () => { const d = currentDraft(); if (d) d[textMap[id]] = el.value; });
  });

  container.querySelectorAll("[data-set-pmethod]").forEach((b) => b.addEventListener("click", () => {
    const d = currentDraft(); if (!d) return;
    d.method = b.dataset.setPmethod;
    b.parentElement.querySelectorAll(".pill-option").forEach((p) => p.classList.toggle("active", p === b));
  }));

  const saveBtn = container.querySelector('[data-action="savePaymentForm"]');
  if (saveBtn) saveBtn.addEventListener("click", savePaymentForm);
  const delBtn = container.querySelector('[data-action="deletePayment"]');
  if (delBtn) delBtn.addEventListener("click", () => deletePaymentHandler(delBtn.dataset.id));
}
async function deletePaymentHandler(id) {
  if (!confirm(t("confirmDeletePayment"))) return;
  state.payments = state.payments.filter((p) => p.id !== id);
  closeModal();
  await apiSave();
}

function updateModalBody() {
  const desc = state.stack[state.stack.length - 1];
  const pages = appEl.querySelectorAll(".modal-page");
  const topPage = pages[pages.length - 1];
  if (!desc || !topPage) return;
  const scrollTop = topPage.scrollTop;
  const bodyEl = topPage.querySelector(".modal-body");
  if (!bodyEl) return;
  if (desc.type === "newPayment" || desc.type === "editPayment") {
    bodyEl.innerHTML = paymentFormBody(desc.draft, desc.type === "editPayment", desc.id);
    bindPaymentFormEvents(topPage);
  }
  topPage.scrollTop = scrollTop;
}

async function saveFriendForm() {
  const name = appEl.querySelector("#fName").value.trim();
  if (!name) { showToast(t("required")); return; }
  const phone = appEl.querySelector("#fPhone").value.trim();
  const notes = appEl.querySelector("#fNotes").value.trim();
  const top = state.stack[state.stack.length - 1];
  if (top.type === "editFriend") {
    const f = friendById(top.id);
    Object.assign(f, { name, phone, notes });
  } else {
    const f = { id: uid(), name, phone, notes, createdAt: todayISO() };
    state.friends.push(f);
  }
  closeModal();
  await apiSave();
}

async function saveSaleForm() {
  const top = state.stack[state.stack.length - 1];
  const d = top.draft;
  let friendId = d.friendId;
  if (friendId === "__new__") {
    const name = (d.newFriendName || "").trim();
    if (!name) { showToast(t("required")); return; }
    const f = { id: uid(), name, phone: "", notes: "", createdAt: todayISO() };
    state.friends.push(f);
    friendId = f.id;
  }
  if (!friendId || !d.product || !d.totalAmount) { showToast(t("required")); return; }

  const sale = {
    id: uid(), friendId, product: d.product.trim(), totalAmount: round2(d.totalAmount),
    initialPaid: round2(d.paidNow || 0), saleDate: d.date, notes: d.notes || "",
    installmentPlan: null,
  };
  if (d.installments && d.instCount > 1) {
    const remaining = round2(sale.totalAmount - sale.initialPaid);
    const count = Math.round(d.instCount);
    const base = Math.floor((remaining / count) * 100) / 100;
    const items = [];
    let allocated = 0;
    for (let i = 0; i < count; i++) {
      const amount = i === count - 1 ? round2(remaining - allocated) : base;
      allocated = round2(allocated + amount);
      const dueDate = d.frequency === "monthly" ? addMonthsISO(d.instFirstDate, i)
        : d.frequency === "weekly" ? addDaysISO(d.instFirstDate, i * 7)
        : d.frequency === "biweekly" ? addDaysISO(d.instFirstDate, i * 14)
        : addDaysISO(d.instFirstDate, i * (d.customDays || 1));
      items.push({ amount, dueDate });
    }
    sale.installmentPlan = { frequency: d.frequency, customDays: d.customDays, items };
  }
  state.sales.push(sale);

  if (sale.initialPaid > 0) {
    const payment = { id: uid(), friendId, saleId: sale.id, amount: sale.initialPaid, method: d.method, date: d.date, notes: "" };
    state.payments.push(payment);
  }
  closeAllModals();
  showToast(t("saveSale") + " ✓");
  await apiSave();
}

async function savePaymentForm() {
  const top = state.stack[state.stack.length - 1];
  const editing = top.type === "editPayment";
  const d = top.draft;
  const friendId = d.friendId;
  const amount = parseFloat(d.amount) || 0;
  if (!friendId || amount <= 0) { showToast(t("required")); return; }
  let saleId = d.saleId;
  if (!saleId) {
    const open = salesForFriend(friendId).filter((s) => saleTotals(s).remaining > 0.01);
    if (open.length) saleId = open[0].id;
  }
  if (editing) {
    const p = state.payments.find((x) => x.id === top.id);
    Object.assign(p, { amount, date: d.date, method: d.method, notes: d.notes, saleId: saleId || p.saleId });
  } else {
    if (!saleId) { showToast(t("noneOpen")); return; }
    const payment = { id: uid(), friendId, saleId, amount, method: d.method, date: d.date, notes: d.notes || "" };
    state.payments.push(payment);
  }
  const f = friendById(friendId);
  const newBalance = Math.max(0, friendTotals(friendId).remaining);
  state.stack.pop();
  state.stack.push({ type: "success", amount, friendName: f?.name || "", newBalance });
  render();
  await apiSave();
}

/* ===================== Backup / restore ===================== */
function download(filename, text, mime) {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function exportJson() {
  const data = { exportedAt: new Date().toISOString(), friends: state.friends, sales: state.sales, payments: state.payments };
  download(`futureil-backup-${todayISO()}.json`, JSON.stringify(data, null, 2), "application/json");
}
function exportCsv() {
  const rows = [["friend", "product", "amount", "date", "method", "notes"]];
  state.payments.forEach((p) => {
    const f = friendById(p.friendId); const s = saleById(p.saleId);
    rows.push([f?.name || "", s?.product || "", p.amount, p.date, p.method, (p.notes || "").replace(/\n/g, " ")]);
  });
  const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  download(`futureil-payments-${todayISO()}.csv`, "﻿" + csv, "text/csv");
}
async function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!Array.isArray(data.friends) || !Array.isArray(data.sales) || !Array.isArray(data.payments)) throw new Error("bad shape");
    if (!confirm(t("confirmRestore"))) return;
    state.friends = data.friends; state.sales = data.sales; state.payments = data.payments;
    await apiSave();
    render();
    showToast(t("restoredOk"));
  } catch (err) {
    showToast(t("invalidFile"));
  } finally {
    e.target.value = "";
  }
}

/* ===================== Swipe navigation ===================== */
function bindSwipe() {
  const wrap = document.getElementById("tabsWrap");
  if (!wrap) return;
  let startX = 0, startY = 0, tracking = false, horizontal = false;
  wrap.addEventListener("touchstart", (e) => {
    if (state.stack.length || state.sheet || state.fabOpen) return;
    startX = e.touches[0].clientX; startY = e.touches[0].clientY; tracking = true; horizontal = false;
  }, { passive: true });
  wrap.addEventListener("touchmove", (e) => {
    if (!tracking) return;
    const dx = e.touches[0].clientX - startX, dy = e.touches[0].clientY - startY;
    if (!horizontal && Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy) * 1.5) horizontal = true;
  }, { passive: true });
  wrap.addEventListener("touchend", (e) => {
    if (!tracking || !horizontal) { tracking = false; return; }
    tracking = false;
    const dx = e.changedTouches[0].clientX - startX;
    const idx = TABS.indexOf(state.tab);
    if (dx < -50 && idx < TABS.length - 1) goTab(TABS[idx + 1]);
    else if (dx > 50 && idx > 0) goTab(TABS[idx - 1]);
  });
}

/* ===================== Init ===================== */
async function init() {
  applyTheme(); applyLang(); applyFont();
  const token = localStorage.getItem("fi_session");
  if (token) {
    render();
    const res = await apiSession(token);
    if (res.ok) {
      applyServerData(res.data);
      state.booted = true;
      render();
      if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
      return;
    }
    localStorage.removeItem("fi_session");
  }
  state.booted = true;
  render();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
}
init();
