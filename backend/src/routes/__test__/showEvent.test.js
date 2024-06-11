import request from "supertest";
import { app } from "../../app";

//*******SHOW EVENT TEST WITHOUT AUTHENTICAION************* */
it("returns the event if the event is found", async () => {
  const event = {
    title: "Testing Event1",
    description: "We are testing the event retrieval.",
    startDate: "2024-08-01",
    endDate: "2024-08-03",
    total_no_of_participants: 12
  };


  const createResponse = await request(app)
    .post('/api/events/create/')
    .send(event)
    .expect(201); 
  
  const createdEventId = createResponse.body.id;
  expect(createdEventId).toBeDefined(); 

  //************To get  paticular event --current in this app i dont set-up api to get single event************** .
  const getResponse = await request(app)
    .get(`/api/events/${createdEventId}`)  // 
    .send()
    .expect(200); 
    
  


  const retrievedEvent = getResponse.body

  expect(retrievedEvent.body.title).toEqual(event.title);
  expect(retrievedEvent.description).toEqual(event.description);
  expect(retrievedEvent.startDate).toEqual(event.startDate);
  expect(retrievedEvent.endDate).toEqual(event.endDate);
  expect(retrievedEvent.total_no_of_participants).toEqual(event.total_no_of_participants);
});