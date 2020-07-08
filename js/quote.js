const quotes =
[  
    {  
       "text":"The only people who never fail are those who never try.",
       "from":"Ilka Chase"
    },
    {  
       "text":"Failure is just another way to learn how to do something right.",
       "from":"Marian Wright Edelman"
    },
    {  
       "text":"I failed my way to success.",
       "from":"Thomas Edison"
    },
    {  
       "text":"Every failure brings with it the seed of an equivalent success.",
       "from":"Napoleon Hill"
    },
    {  
       "text":"Only those who dare to fail greatly can ever achieve greatly.",
       "from":"John F. Kennedy"
    },
    {  
       "text":"It is hard to fail, but it is worse never to have tried to succeed.",
       "from":"Theodore Roosevelt"
    },
    {  
       "text":"Imagination is more important than knowledge.",
       "from":"Albert Einstein"
    },
    {  
       "text":"Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
       "from":"Langston Hughes"
    },
    {  
       "text":"The future belongs to those who believe in the beauty of their dreams.",
       "from":"Eleanor Roosevelt"
    },
    {  
       "text":"Go confidently in the direction of your dreams. Live the life you have imagined.",
       "from":"Henry David Thoreau"
    },
    {  
       "text":"You cannot depend on your eyes when your imagination is out of focus.",
       "from":"Mark Twain"
    },
    {  
       "text":"Commitment leads to action. Action brings your dream closer.",
       "from":"Marcia Wieder"
    },
    {  
       "text":"I never think of the future",
       "from":"it comes soon enough."
    },
    {  
       "text":"Don't waste your life in doubts and fears: Spend yourself on the work before you, well assured that the right performance of this hour's duties will be the best preparation for the hours or ages that follow it.",
       "from":"Ralph Waldo Emerson"
    },
    {  
       "text":"Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
       "from":"Benjamin Franklin"
    },
    {  
       "text":"Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
       "from":"Andrew Jackson"
    },
    {  
       "text":"The mind that is anxious about future events is miserable.",
       "from":"Seneca"
    },
    {  
       "text":"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influences of each.",
       "from":"Henry David Thoreau"
    },
    {  
       "text":"The art of leadership is saying no, not yes. It is very easy to say yes.",
       "from":"Tony Blair"
    },
    {  
       "text":"A leader is a dealer in hope.",
       "from":"Napoleon Bonaparte"
    },
    {  
       "text":"While a good leader sustains momentum, a great leader increases it.",
       "from":"John C. Maxwell"
    },
    {  
       "text":"A general is just as good or just as bad as the troops under his command make him.",
       "from":"General Douglas MacArthur"
    },
    {  
       "text":"To do great things is difficult; but to command great things is more difficult.",
       "from":"Friedrich Nietzsche"
    },
    {  
       "text":"Leadership does not always wear the harness of compromise.",
       "from":"Woodrow Wilson"
    },
    {  
       "text":"Business opportunities are like buses",
       "from":"there's always another one coming."
    },
    {  
       "text":"I avoid looking forward or backward, and try to keep looking upward.",
       "from":"Charlotte Bronte"
    },
    {  
       "text":"The more difficulties one has to encounter, within and without, the more significant and the higher in inspiration his life will be.",
       "from":"Horace Bushnell"
    },
    {  
       "text":"Every artist was first an amateur.",
       "from":"Ralph Waldo Emerson"
    },
    {  
       "text":"I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.",
       "from":"Anna Freud"
    },
    {  
       "text":"We can do anything we want to do if we stick to it long enough.",
       "from":"Helen Keller"
    },
    {  
       "text":"Our business in life is not to get ahead of others, but to get ahead of ourselves.",
       "from":"E. Joseph Cossman"
    },
    {  
       "text":"Insist on yourself. Never imitate.",
       "from":"Ralph Waldo Emerson"
    },
    {  
       "text":"Who looks outside, dreams. Who looks inside, awakes.",
       "from":"Carl Jung"
    },
    {  
       "text":"It is not easy to find happiness in ourselves, and it is not possible to find it elsewhere.",
       "from":"Agnes Repplier"
    },
    {  
       "text":"The only journey is the one within.",
       "from":"Rainer Maria Rilke"
    },
    {  
       "text":"Follow your honest convictions, and stay strong.",
       "from":"William Thackeray"
    },
    {  
       "text":"The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
       "from":"Marcus Aurelius"
    },
    {  
       "text":"Action may not always bring happiness; but there is no happiness without action.",
       "from":"Benjamin Disraeli"
    },
    {  
       "text":"Happiness depends more on the inward disposition of mind than on outward circumstances.",
       "from":"Benjamin Franklin"
    },
    {  
       "text":"There is no happiness except in the realization that we have accomplished something.",
       "from":"Henry Ford"
    },
    {  
       "text":"Happiness is not a goal, but a by-product.",
       "from":"Eleanor Roosevelt"
    },
    {  
       "text":"Happiness is not a state to arrive at, but a manner of traveling.",
       "from":"Margaret Lee Runbeck"
    },
    {  
       "text":"Purpose is what gives life a meaning.",
       "from":"C. H. Parkhurst"
    },
    {  
       "text":"The significance of a man is not in what he attains but in what he longs to attain.",
       "from":"Kahlil Gibran"
    },
    {  
       "text":"In all things that you do, consider the end.",
       "from":"Solon"
    },
    {  
       "text":"Life can be pulled by goals just as surely as it can be pushed by drives.",
       "from":"Viktor Frankl"
    },
    {  
       "text":"The virtue lies in the struggle, not in the prize.",
       "from":"Richard Monckton Milnes"
    },
    {  
       "text":"To reach a port, we must sail",
       "from":"sail, not tie at anchor"
    },
    {  
       "text":"Success is the child of audacity.",
       "from":"Benjamin Disraeli"
    },
    {  
       "text":"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
       "from":"Vince Lombardi"
    },
    {  
       "text":"The secret of success is to know something nobody else knows.",
       "from":"Aristotle Onassis"
    },
    {  
       "text":"The surest way not to fail is to determine to succeed.",
       "from":"Richard Brinsley Sheridan"
    },
    {  
       "text":"I cannot give you the formula for success, but I can give you the formula for failure",
       "from":"which is: Try to please everybody."
    }];

// [0 -> quote.length) -> {text:'', from: ''}
// reuturn a random quote from quotes data above.
function getRandomQuote() {
    let min = 0,
        max = quotes.length,
        quoteIndex = Math.floor(Math.random() * (max - min) ) + min;
    return quotes[quoteIndex];
}


