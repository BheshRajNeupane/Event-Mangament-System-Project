import request from "supertest";
import { app } from "../../app";

//*******UPDATE EVENT TEST WITHOUT AUTHENTICAION************* */
it("returns a 404 if the provided id does not exist", async () => {
  const id = Math.floor((Math.random() *100)+101)
  await request(app)
    .patch(`/api/events/update/${id}`)
    .send({
        title: "Testing Event1",
        description: "We ......nt.",
        startDate: "2024-08-1",
        endDate: "2021-08-3",
        total_no_of_participants: 12
    })
    .expect(404);
});


it("returns a 400 if the try to update  events without any fileds", async () => {

  const response = await request(app)
    .patch(`/api/events/create/`)
    .send({
        title: "Testing Event1",
        description: "We ......nt.",
        startDate: "2024-08-1",
        endDate: "2021-08-3",
        total_no_of_participants: 12
    })
    .expect(200)

  await request(app)
    .put(`/api/events/update/${response.id}`)
    .send({})
    .expect(400);


});

// it("updates the events with valid inputs", async () => {


//   const response = await request(app)
//     .post("/api/events/create/")
//     .send({
//       title: "Testing Event1",
//       description: "We ......nt.",
//       startDate: "2024-08-1",
//       endDate: "2021-08-3",
//       total_no_of_participants: 12
//     })
//     .expect(200)

//   await request(app)
//     .patch(`/api/events/update/${response.id}`)
//     .send({
//       title: "Testing Event updated",
//     })
//     .expect(200)
  
// });