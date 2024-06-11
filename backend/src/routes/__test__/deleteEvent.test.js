import request from "supertest";
import { app } from "../../app";

//*******DELETE EVENT TEST WITHOUT AUTHENTICAION************* */
it("returns a 200 if the created event is deleted successfully", async () => {
    const createResponse = await request(app)
      .post(`/api/events/create/`)
      .send({
        title: "Testing Event1",
        description: "We are testing the event creation and deletion.",
        startDate: "2024-08-01",
        endDate: "2024-08-03",
        total_no_of_participants: 12
      })
      .expect(201); 
  
    const createdEventId = createResponse.body.id;
    expect(createdEventId).toBeDefined(); 
  
  
    await request(app)
      .delete(`/api/events/delete/${createdEventId}`)
      .expect(200); 
    
  });