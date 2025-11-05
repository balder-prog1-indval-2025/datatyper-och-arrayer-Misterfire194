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


write ("Deluppgift 5: ")
let x = +await read ("Minuter: ")
let y= x/60
let z = y.toString().indexOf(".")  
if (y.toString().includes(".")) {write ("Timmar = " + y.toString().slice(0,z))}
else {write ("Timmar: " + y)}
write ("Restminuter: " + x%60 )


write("Deluppgift 6: ")
let x= +await read ("Radie: ")
let area = x**2 * Math.PI
let omkrets = (2*x) * Math.PI
write("Area = " + Math.round(area))
write("Omkrets = " + Math.round(omkrets))


write ("Deluppgift 7: ")
let a = +await read ("Första sidlängden: ")
let b = +await read ("Andra sidlängden: ")
let c = +await read ("Sista sidlängden: ")
let x = Math.sqrt(a**2 + b**2 + c**2)    
write ("Längsta diagonal = " + x)


write ("Deluppgift 8:")
let a = [2,3,5,7,11,13,17,19]
write (a)
write (a[0])
write (a[7])
write (a.length)
a.push(23)
write (a)
write (a.length)


write ("Deluppgift 9:")
let städer = ["Rom", "Paris", "Berlin", "Moskva"]
let länder = ["Italien", "Frankrike", "Tyskland", "Ryssland"]

städer.push ("Stockholm")
länder.push ("Sverige")
for (let i = 0; i < städer.length; i++) {
    write (städer[i] + " är huvudstaden till " + länder[i])
} 


write ("Deluppgift 10:")
let x = +await read ("Tal 1: ")
let y = +await read ("Tal 2: ")
let z = +await read ("Tal 3: ")
let v = +await read ("Tal 4: ")
let g = +await read ("Tal 5: ")

let a = [g,v,z,y,x] 

for(let i = 0; i < a.length; i++) {
    write(a[i])
}

*/
write ("Deluppgift 11:")
let a = []
let x = +await read("Antal: ")

for (let i = 0; i < x; i++) {
   let Tal = +await read("Tal " + (i+1) + ":" )
   a.push(Tal)
}

for (let i = (a.length-1); i>=0; i-=1) {
    write (a[i])
}
/*

write("Extrauppgift 1:")
let x = await read("Telefonnummer (med bindestreck)? ")
if (x.includes("-") && x.length == 10 && x.includes ("1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0") && x.slice(4,5) == "-") {

let y = x.indexOf("-")
write ("Riktnummer = " + x.slice(0, y))
write ("Abonnentnummer = " + x.slice(y+1,10))
} else {
    write ("Inget telefonnummer!")
}



write ("Extrauppgift 2:")
let p = +await read ("p = ?:")
let q = +await read ("q = ?:")
let x1 = -(p/2) + Math.sqrt((p/2)**2 - q)
let x2 = -(p/2) - Math.sqrt((p/2)**2 - q)

let a = x1.toString().indexOf(".")
let b = x2.toString().indexOf(".")
if ((x1 || x2).toString().includes(".")){   
write ("X1 = " + x1.toString().slice(0,a+2) + " och X2 = " + x2.toString().slice(0,b+2))
}
else if (x1.toString().includes(".") && !x2.toString().includes(".")) {
    write("X1 = " + x1.toString().slice(0,a+2) + " och X2 = " + x2)
}
else if (!x1.toString().includes(".") && x2.toString().includes(".")) {
    write("X1 = " + x1 + " och X2 = " + x2.toString().slice(0,b+2))
}
else if (!x1.toString().includes(".") && !x2.toString().includes(".")) {
    write("X1 = " + x1 + " och X2 = " + x2)
}



write ("Extrauppgift 3:")
// Skapa en 4x6-matris 
// med noll (0) på alla platser
let m = array2D(4, 6, 0);


function show() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            write(m[i][j], "\t")
        }

        write()
    }
}



show()

while (true) {
    let radindex = +await read("Radindex (0-3): ")
    let kolumnindex = +await read("Kolumnindex (0-5): ")
    let värde = +await read("Värde (ett heltal): ")
    write (m[radindex][kolumnindex] = värde)
    show()
}
*/