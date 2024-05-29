const { test, expect } = require('@playwright/test');
const { request } = require('http');
const confPostBody=require('../../configs/configs.json');


test("Post Call by using hard coded value", async ({ request }) => {

    const postBody = {
        "userId": 11,
        "id": 120,
        "title": "Testing Post Call",
        "body": "The new user is created"
    }

    // getting data manually from above code
    const response = await request.post("/posts", {data:postBody});

    expect(response.status()).toBe(201);
    
    console.log("testing post call by inserting data in method")
   
})

test("Post Call by configsJson ", async ({ request }) => {

    

    const response = await request.post("/posts", {data:confPostBody});

    expect(response.status()).toBe(201);
    console.log("testing post call by getting data from configs json file")
    

    
   
})