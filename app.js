// We select the elements that our domain name is going to contain
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let tail = ['.com', '.net', '.us', '.io']

// createString function can fill a new Array with each of the final domain name and/or it can print it on the console
function createString(pron, adjec, name, extension){
    let newArray = []
    for (let i=0; i<pron.length; i++){
        for (let j=0; j<adjec.length; j++){
            for (let k=0; k<name.length; k++){
                for (let l=0; l<extension.length; l++){
                    // newArray.push(`${pron[i]}${adjec[j]}${name[k]}${extension[l]}`)
                    console.log(`${pron[i]}${adjec[j]}${name[k]}${extension[l]}`);
                
                
                }
            }
        }
    }

    // return newArray
}


// Calling the function to see all the domain names
createString(pronoun, adj, noun, tail);
