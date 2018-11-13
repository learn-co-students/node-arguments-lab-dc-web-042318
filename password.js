// code solution here

const numberOfChar = parseInt(process.argv[2])
const numberOfPasswords = parseInt(process.argv[3])

for (let i = 0; i < numberOfPasswords; i++) {
	let str = ""
	 for (let j = 0; j < numberOfChar; j++) {
	 	str += Math.random().toString().slice(2)[0]
	 }
	 console.log(str)
}