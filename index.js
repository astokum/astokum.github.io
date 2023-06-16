const https = require('https');
//const process = require('process');
const fs = require('fs')
const { readFile } = require('fs/promises');
const { resolve } = require('path');


async function logFile() {
  try {
    const filePath = resolve('./gitreposlist.json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);

    const obj = JSON.parse(contents);

    // obj.forEach( ( value , index, array ) => {
    // 	console.log(` ${value.name} \n ${value.description} \n ${value.language} \n ${value.html_url} \n\n `);
    // });

    var myArray = obj.map( ( value , index , array ) => {

    	return {
    		name : value.name,
    		description: value.description,
    		language: value.language,
    		html_url: value.html_url
    	}
    })

    console.log(JSON.stringify(myArray));


  } catch (err) {
    console.error(err.message);
  }
}
logFile();


// https.get ( 'https://api.github.com/users/astokum/repos', {
// "User-Agent": "curl/7.79.1",
// "X-GitHub-Api-Version": "2022-11-28"
// }, (res ) => {

// 	res.on('data', (d) => {
//    	 	process.stdout.write(d);
//   	});

// })