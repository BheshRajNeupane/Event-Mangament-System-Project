 export class FilterEventsClass {
    constructor(events, queryString) {
      this.events = events;
      this.queryString = queryString;
    }
  // Method to filter events based on query parameters
  filter() {
    const { title, startDate, endDate } = this.queryString;
    let filteredEvents = this.events;

    if (title) {
      filteredEvents = filteredEvents.filter(event =>
        event.title.includes(title)
      );
    }


    if (startDate) {
      filteredEvents = filteredEvents.filter(event =>
        event.startDate == startDate
      );
    }

    if (endDate) {
      filteredEvents = filteredEvents.filter(event =>
        event.endDate == endDate
      );
    }

    this.events = filteredEvents;
    return this;
  }
  
    getFilteredEvents() {
      return this.events;
    }
  }
  
 
  

  

 