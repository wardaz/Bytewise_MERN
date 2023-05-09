let btn = document.querySelector("#new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The way to get started is to quit talking and begin doing." `,
    person: `Walt Disney`
},{
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma" `,
    person: `Steve Jobs`
},{
    quote: `"If life were predictable it would cease to be life, and be without flavor." `,
    person: `Eleanor Roosevelt`
},{
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." `,
    person: `Oprah Winfrey`
},{
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." `,
    person: `James Cameron`
}, {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})