const {test, expect}=require('@playwright/test'); // test== kinda annotation where we are running our methods
const exp = require('constants');


// in UI testing we are using page for automating
// in API testing we are using request
// we are generating pageFixtures. which helps us to call some methods

test("Get one user", async({request}) =>{

// we are generating response which is not changble. 
const response= await request.get("https://jsonplaceholder.typicode.com/users/2"); 

// // after getting response we can assert in two ways
// //1. asserting directly from respons: the status code, the response is OK (btw 202-299)
// // timing (duration) for performance testing, getting the headers
// expect(response.status()).toBe(200);
// expect(response.ok()).toBeTruthy();
// expect(response.timing().duration).toBeLessThan(33);
// expect(response.headers()["content-type"]).toBe("application/json; charset=utf-8");

// //2. asserting from responseBody >> the length of responseBody, firstname, has a proporty like fname, 
// expect(responseBody.lenghth).toBeGreaterThan(0);
// expect(responseBody.name).toBe("Leanne Graham");
// expect(responseBody).toHaveProperty("username");
// expect(responseBody.id).toBeDefined();
// expect(newPost).toMatchObject(newPostData);



//testing the api is working right by asserting expected and not expected value
expect(response.status()).toBe(200);
expect(response.status()).not.toBe(400);
console.log("the status code is: "+await response.status());
console.log(await response.text());



// getting responseBody
const responseBody=await response.json();
/*Json path
name path=responseBody.name
lat path=responseBody.address.geo.lat
*/
console.log("name from response body: "+await responseBody.name);
expect(responseBody.name).toBe("Ervin Howell");
expect(responseBody.address.geo.lat).toBe("-43.9509");
 











});