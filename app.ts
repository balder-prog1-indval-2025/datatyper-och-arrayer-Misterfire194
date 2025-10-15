/*
write("Deluppgift 1")
let x = await read("Förnamn?: ")
let y = await read("Efternamn?: ")
write ("Dina initialer är " +x[0]+y[0])


write ("Deluppgift 2 ")
let x = await read("Förnamn?: ")
let y = await read("Efternamn?: ")

write ("Användarnamn är: " +x.slice(0,3).toLowerCase()+y.slice(0,3).toLowerCase())






write("Deluppgift 3: ")
let x = await read ("Telefonnummer (bara siffror)? ")
 if (x.length == 10) {
    write ("Telefonnummer med bindestreck = " + x.replace(x[4],"-"+ x[4]))

    write ("Telefonnummer utan bindestreck = " + x.replace(x[4]," "+ x[4]))
 }
else {
    write("Inget telefonnumer!")
}



write ("Deluppgift 4:")
let x = await read("Telefonnummer (med bindestreck)? ")
if (x.includes("-") && x.length == 10) {

let y = x.indexOf("-")
write ("Riktnummer = " + x.slice(0, y))
write ("Abonnentnummer = " + x.slice(y+1,10))
} else {
    write ("Inget telefonnummer!")
}
*/

write ("Deluppgift 5: ")
let x = +await read ("Minuter: ")
let y= x/60
write ("Timmar = " + y[1])