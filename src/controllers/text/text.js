
export const flip = (req, res) => {
    const text = req.query.text || undefined
    //check if text is a valid string
    if(!text) {
        return (res.status(400).send({error: 'No text'}))
     }
    //remove spaces from text
    const origin = text.split(' ').join('')
    //flip text
    const fliped = origin.split('').reverse().join('')
    //compares if text is a palindrome
    if(origin !== fliped) {
        return res.status(200).send({text: text.split('').reverse().join(''), palindrome: false})
     }
    return res.status(200).send({text: text, palindrome: true})
 } 
