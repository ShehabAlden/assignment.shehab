
var groupOfQuote=[]
var quote1={
    qoute:'Be yourself; everyone else is already taken.',
    author:'Oscar Wilde'
}
var quote2={
    qoute:'So many books, so little time.',
    author:' Frank Zappa'
}
var quote3={
    qoute:'A room without books is like a body without a soul.',
    author:'Marcus Tullius Cicero'
}
var quote4={
    qoute:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author:'Albert Einstein'
}
var quote5={
    qoute:'You only live once, but if you do it right, once is enough.',
    author:'Mae West'
}
var quote6={
    qoute:'Be the change that you wish to see in the world',
    author:'Mahatma Gandhi'
}
var quote7={
    qoute:'A room without books is like a body without a soul.',
    author:'Marcus Tullius Cicero'
}
var quote8={
    qoute:"In three words I can sum up everything I've learned about life: it goes on.",
    author:'Robert Frost'
}
var quote9={
    qoute:"If you tell the truth, you don't have to remember anything.",
    author:'Mark Twain'
}
var quote10={
    qoute:'A friend is someone who knows all about you and still loves you.',
    author:'Elbert Hubbard'
}
var quote11={
    qoute:'To live is the rarest thing in the world. Most people exist, that is all.',
    author:'Oscar Wilde'
}
var quote12={
    qoute:'Always forgive your enemies; nothing annoys them so much.',
    author:'Oscar Wilde'
}
var quote13={
    qoute:'We accept the love we think we deserve.',
    author:'Stephen Chbosky'
}
var quote14={
    qoute:'Without music, life would be a mistake.',
    author:'Friedrich Nietzsche'
}
var quote15={
    qoute:"I am so clever that sometimes I don't understand a single word of what I am saying.",
    author:'Oscar Wilde'
}
var quote16={
    qoute:'It is better to be hated for what you are than to be loved for what you are not.',
    author:'Andre Gide'
}
var quote17={
    qoute:'It does not do to dwell on dreams and forget to live.',
    author:'J.K. Rowling'
}
var quote18={
    qoute:'Life is what happens to us while we are making other plans.',
    author:'Allen Saunders'
}
var quote19={
    qoute:"I have not failed. I've just found 10,000 ways that won't work.",
    author:'Thomas A. Edison'
}
var quote20={
    qoute:"If you don't stand for something you will fall for anything.",
    author:'Gordon A. Eadie'
}
groupOfQuote.push(quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9,quote10,quote11,quote12,quote13,quote14,quote15,quote16,quote17,quote18,quote19,quote20);
console.log(groupOfQuote);
var go=Math.floor(Math.random()*groupOfQuote.length);
console.log(go);



function getQoute(){
    var go=Math.floor(Math.random()*groupOfQuote.length);
    document.getElementById('quoteContent').innerHTML=groupOfQuote[go].qoute;
    document.getElementById('autherContent').innerHTML=groupOfQuote[go].author;
}