// Solid (GET https://metahari.solid.community/profile/card)
var obj = {};
jQuery.ajax({
    url: "https://metahari.solid.community/profile/card",
    type: "GET",
    data: {
        "GET": "null",
    },
    headers: {
        "Accept": "application/ld+json",
    }, 
})

.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    // console.log(data);
  console.log(Object.keys(data[1]));
  var name = Object.values(data[1]["http://xmlns.com/foaf/0.1/name"][0]);
  var tagline = Object.values(data[1]["http://www.w3.org/2006/vcard/ns#note"][0]);
  var picurl = Object.values(data[1]["http://www.w3.org/2006/vcard/ns#hasPhoto"][0]);
  var company = Object.values(data[1]["http://www.w3.org/2006/vcard/ns#organization-name"][0]);
  var websites = [];
  var numbersites =  Object.values(data[1]["http://www.w3.org/2006/vcard/ns#url"]).length;
  for (id = 0; id < numbersites; id++) { 
      websites.push(Object.values(data[1]["http://www.w3.org/2006/vcard/ns#url"][id]));
      document.getElementById("sites").innerHTML += ("<li><a href="+ websites[id] +"> "+websites[id]+"</a></li>");
      }
 // console.log(Object.values(data[1]["http://www.w3.org/2006/vcard/ns#url"]));
  

  console.log("Name:" +tagline);
 
  document.getElementById("name").innerHTML += (name);
  document.getElementById("tagline").innerHTML += (tagline);
  document.getElementById("photo").innerHTML += ("<img src="+ picurl +" alt=me/>");
  var dset = 1;

//   for (x in data[dset]) {
//     if (data[dset][x] !="[object Object]"){ 

//     document.getElementById("response").innerHTML += ("<li>"+ x +": " + data[dset][x] + "</li>") ; 
//     } else 

//       for (y in data[dset][x]){
//         var stringx = x;
//         var stripX = stringx.split('#', 2)[1];
//        document.getElementById("response").innerHTML += ("<li class=nestedData>"+ stripX +": " + data[dset][x][y] + "</li>") ; 
   
//       }
    
// }
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
;