events = {}

def save_event(date, event):
    events[date] = event
    print("Event saved successfully!")

def show_events():
    print("\n=== All Events ===")

    if not events:
        print("No events found.")
        return

    for date, event in events.items():
        print(f"{date} → {event}")
