console.log('naive aproach')

const sentence = 'znaj a zna znaj znaj';
const phrase = 'znaj';

const searching = (sentance, phrase) => {
    let count = 0;
    for(let i = 0; i<sentence.length; i++){
        
        for(let j = 0; j<phrase.length; j++){
            console.log( sentance[i+j], ' - ',phrase[j], )
            if(phrase[j] !== sentence[i+j]){
                console.log('break')
                break
            }
            if(j === phrase.length -1){
                console.log('found one')
                count++;
            }
        }
        
    }
    return count
}

console.log(searching(sentence, phrase))