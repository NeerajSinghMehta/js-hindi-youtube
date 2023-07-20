const accountId = 12345

let accountEmail = "neeraj2001@gmail.com"

var accountPassword = "123456"

accountCity = "Jaipur"

/* 
dont use var besuse block scope issue
*/

accountEmail = "neeraj@mehat.com"
accountPassword = "222222"
accountCity = "uttrakhand"

console.table([accountEmail,accountPassword,accountCity])