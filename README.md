# Đề thi lần 2 – Địa lí (online)

Students enter their name, choose **Luyện tập** (practice, no timer, instant feedback) or **Kiểm tra** (45-minute test, auto-submit), and results are sent to a Google Sheet.

- `index.html` – the test page
- `questions.js` – questions, answer key, timer length, Google Sheet URL (edit answers here)
- `apps-script/Code.gs` – script that writes results into the Google Sheet

## Connect the Google Sheet (one time)

1. Create a new Google Sheet (e.g. "Kết quả – Đề thi lần 2").
2. **Extensions → Apps Script**. Delete the sample code, paste in everything from `apps-script/Code.gs`, click **Save**.
3. **Deploy → New deployment** → gear icon → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, authorise with your Google account (Advanced → Go to project → Allow).
5. Copy the **Web app URL** (ends in `/exec`) and put it in `SCRIPT_URL` at the top of `questions.js`.

Results appear in a tab called **Kết quả**.

## Scoring (THPT 2025 style, scaled to 10)

Part I 0.25/question · Part II per question 0.1 / 0.25 / 0.5 / 1 for 1 / 2 / 3 / 4 correct statements · Part III 0.25/question. Raw total out of 16, scaled to 10.
