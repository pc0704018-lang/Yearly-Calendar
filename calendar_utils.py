import calendar
from datetime import datetime

# Hindi festivals
FESTIVALS = {
    "01-26": "Republic Day",
    "08-15": "Independence Day",
    "10-02": "Gandhi Jayanti",
    "12-25": "Christmas",
    "01-14": "Makar Sankranti",
    "03-08": "Mahashivratri",
    "03-25": "Holi",
    "11-12": "Diwali",
}

def generate_year_calendar(year):
    html_months = ""
    today = datetime.today()

    for month in range(1, 12 + 1):
        cal = calendar.monthcalendar(year, month)

        # Month Title
        block = f"<div class='month-box'><div class='month-title'>{calendar.month_name[month]} {year}</div><pre>"

        # Week header
        block += "Mo Tu We Th Fr Sa Su\n"

        # Dates
        for week in cal:
            for i, day in enumerate(week):
                if day == 0:
                    block += "   "
                else:
                    date_str = f"{month:02d}-{day:02d}"

                    # Today highlight
                    if (year == today.year and month == today.month and day == today.day):
                        block += f"<span class='today'>{day:2d}</span> "

                    # Weekend color
                    elif i >= 5:
                        block += f"<span class='weekend'>{day:2d}</span> "

                    # Festival highlight
                    elif date_str in FESTIVALS:
                        block += f"<span class='festival'>{day:2d}</span> "

                    else:
                        block += f"{day:2d} "

            block += "\n"

        block += "</pre></div>"
        html_months += block

    return html_months
