import request from "supertest";
import { app } from "../../app.js";

//*******CREATE EVENT TEST WITHOUT AUTHENTICAION************* */

it("returns an error if  user try to create empty event", async () => {
  await request(app)
  .post('/api/events/create/')
  .send({})
   .expect(400)
});




it("returns an error any  required field is not  provided  ", async () => {
  await request(app)
    .post('/api/events/create/')
    .send({
        description: "Whether you are having a meeting, planning an event, setting up a conference, or need help promoting and marketing your convention, IT EVENTS can provide all necessary services.",
        startDate: "2021-05-3",
        endDate: "2021-5-9",
        total_no_of_participants: 12
      
    })
    .expect(400);


});
it("returns 201 if all good  ", async () => {
  await request(app)
    .post('/api/events/create/')
    .send({
        title:"Event testing",
        description: "Whether you are having a meeting, planning an event, setting up a conference, or need help promoting and marketing your convention, IT EVENTS can provide all necessary services.",
        startDate: "2021-05-3",
        endDate: "2021-5-9",
        total_no_of_participants: 12
      
    })
    .expect(201);


});
