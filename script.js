let currentYear = new Date().getFullYear();

const indianFestivals = {
    "01-14": "Makar Sankranti",
    "01-26": "Republic Day",
    "03-08": "Mahashivratri",
    "03-14": "Holi",
    "04-14": "Ambedkar Jayanti",
    "08-15": "Independence Day",
    "10-02": "Gandhi Jayanti",
    "10-20": "Dussehra",
    "10-31": "Diwali",
    "11-01": "Govardhan Puja",
    "11-03": "Bhai Dooj",
    "12-25": "Christmas"
};

function generateCalendar(year) {
    document.getElementById("yearTitle").textContent = "Year " + year;
    document.getElementById("calendar").innerHTML = "";
    document.getElementById("festivalList").innerHTML = "";

    const calendarContainer = document.getElementById("calendar");

    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 1);
        let monthName = date.toLocaleString("default", { month: "long" });

        // Create month card
        let card = document.createElement("div");
        card.className = "month-card";
        card.innerHTML = `<h2>${monthName} ${year}</h2>`;

        let table = document.createElement("table");
        table.innerHTML = `
            <tr>
                <th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th>
                <th>Sa</th><th>Su</th>
            </tr>
        `;

        let row = document.createElement("tr");

        // Fill empty cells before month start
        for (let i = 1; i < (date.getDay() || 7); i++) {
            row.innerHTML += "<td></td>";
        }

        let today = new Date();

        while (date.getMonth() === month) {
            let td = document.createElement("td");
            td.textContent = date.getDate();

            // Sunday red
            if (date.getDay() === 0) td.classList.add("sunday");

            // Highlight today
            if (
                date.getFullYear() === today.getFullYear() &&
                date.getMonth() === today.getMonth() &&
                date.getDate() === today.getDate()
            ) {
                td.classList.add("today");
            }

            // Add festival
            let key = `${String(month + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
            if (indianFestivals[key]) {
                let li = document.createElement("li");
                li.textContent = `${indianFestivals[key]} — ${date.getDate()} ${monthName}`;
                document.getElementById("festivalList").appendChild(li);
                td.style.color = "#00b7ff";
                td.style.fontWeight = "bold";
            }

            row.appendChild(td);

            // New row after Sunday
            if (date.getDay() === 0) {
                table.appendChild(row);
                row = document.createElement("tr");
            }

            date.setDate(date.getDate() + 1);
        }

        table.appendChild(row);
        card.appendChild(table);
        calendarContainer.appendChild(card);
    }
}

function changeYear(step) {
    currentYear += step;
    generateCalendar(currentYear);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

generateCalendar(currentYear);
