// Paste this into Extensions → Apps Script of your Google Sheet, then Deploy → New deployment → Web app
// (Execute as: Me · Who has access: Anyone). Copy the Web app URL into SCRIPT_URL in questions.js.

const HEADERS = ["Thời gian nộp", "Họ và tên", "Lớp", "Chế độ", "Điểm (/10)",
                 "Phần I (TN)", "Phần II (Đ/S)", "Phần III (TLN)", "Thời gian làm", "Bắt đầu lúc", "Chi tiết bài làm"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName("Kết quả") || ss.insertSheet("Kết quả");
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#cfe8f7");
      sh.setFrozenRows(1);
    }
    sh.appendRow([new Date(), d.name, d.cls, d.mode, d.score, d.mc, d.tf, d.sa, d.time, d.started, d.answers]);
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput("Đề thi lần 2 – results endpoint is running.");
}
