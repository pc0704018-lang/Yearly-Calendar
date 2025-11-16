import webbrowser
from calendar_utils import generate_year_calendar

def start_app():
    print("Enter Year:")
    year = int(input("> "))

    html_body = generate_year_calendar(year)

    # Read template
    with open("template.html", "r", encoding="utf-8") as file:
        template = file.read()

    # Replace placeholder
    final_html = template.replace("{{calendar_body}}", html_body)

    # Save final output
    with open("calendar.html", "w", encoding="utf-8") as file:
        file.write(final_html)

    print("Calendar created successfully!")

    # Auto-open browser
    webbrowser.open("calendar.html")
