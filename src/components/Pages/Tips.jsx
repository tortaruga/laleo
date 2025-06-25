import { Accordion } from 'react-bootstrap';

export default function Tips() {
    return (
        <section className="tips">
            <h1>Some tips and advice</h1>

            <Accordion className='main-accordion' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>📒 The Method</Accordion.Header>
                    <Accordion.Body>
                       <p>Here is the "method" I use to learn languages, if we can call it a method. 
                            It is mostly jumping right into it and basking in chaos (which is the only way
                            I know to do anything). I do believe it makes sense though. 
                            Just trust the flow; I think it will work out fine — and if it doesn't, you can always
                            insult me and switch to some other method!
                        </p>
                       
                       <Accordion> 
                        <Accordion.Item eventKey='a'>
                            <Accordion.Header>🌸​ Step 1</Accordion.Header>
                            <Accordion.Body>
                                The first step of the method is to learn the writing system, 
                                in case it is different from the ones you already know. 
                                Even if it is tempting especially in the beginning, don't rely on 
                                transliterations. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='b'>
                            <Accordion.Header>🌸​ Step 2</Accordion.Header>
                            <Accordion.Body>
                                <p>The second step (but it can actually be done at the same time as the first, 
                                    or even before) is to get used to the way the language sounds. 
                                    Once you're used to the sound of the language, you'll read a word and 
                                    have no idea what is means, but you'll probably guess the right 
                                    pronunciation and intonation for it.
                                </p>

                                <p>
                                    So how do you do that? You listen to it as much as you can.
                                    You won't understand a single thing, and that's fine, 
                                    we don't care about that. What we're trying to do is having the 
                                    brain do the work for us, because it's the way it works anyway.
                                </p>

                                <p>
                                    You see, languages don't grow on trees. Somebody invented them. 
                                    That somebody had a brain exactly like yours. They might have been
                                     smarter or dumber, left or right handed, more or less predisposed to 
                                     depression or alzheimer, but in essence they had a human brain, and so 
                                     they invented a language that worked in a way a human brain could understand. 
                                     So your human brain, in whatever condition it is, is perfectly capable of 
                                     analyzing and cataloguing the sounds and patterns of whatever human 
                                     language on its own.
                                </p>

                                <p>
                                    When you feel like you have internalized how it sounds, move to 
                                    step three. This step doesn't have to last too long or be 
                                    anything too fancy, just until you're familiar with it.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='c'>
                            <Accordion.Header>🌸​ Step 3</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                   For step three you can either go straight to comprehensible input,
                                    or learn a bit of the basics of grammar first. It's mostly about 
                                    preference. If your target language is close enough to one you 
                                    already speak, say French and Spanish, just jumping into it and 
                                    relying on input is good enough. 
                                </p>

                                <p>
                                    If your target language has a completely different structure, though, 
                                    I suggest you get a bit familiar with the way sentences work first, 
                                    so the comprehensible input will make more sense faster.
                                    You only need the basics: the order of the words in a sentence, how to 
                                    say simple phrases using common vocabulary, how to conjugate present tense. 
                                    At this point you can start with some comprehensible input content without 
                                    feeling too overwhelmed.  
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='d'>
                            <Accordion.Header>🌸​ Step 4</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Step four is following your heart's desire so that the language basically 
                                    gets learned by itself because I'm too lazy for anything else. 
                                    You surround yourself with your target language: you do grammar exercises, 
                                    listening practice, writing exercises, kanji quizzes, proficiency test mock 
                                    exams; but you do this when you feel like it and without making it the most 
                                    part of your learning journey, because this is the "boring" part. 
                                </p>

                                <p>
                                    The "light" part is consuming content you like. Songs, movies, books.
                                </p>

                                <p>
                                    At first you'll only be able to understand little or nothing. 
                                    Don't get discouraged. <br /> Soon you will pick up on words that come up 
                                    often, and you'll look up the meaning. <br />Then you'll pick up on some 
                                    grammar structure that you keep encountering, and you'll google what 
                                    is means. <br />Then you'll learn the chorus of a song you really like, or 
                                    commit to memory a simple sentence your favourite character says in the 
                                    last series you're watching.
                                </p>

                                <p>
                                    Before you know it you'll be learning the 
                                    language without intending to, just going where your interests take you. 
                                    <br />And the "boring" part will feel a bit easier: it will feel like it is 
                                    supporting your learning, instead of being some heavy studying that's leading you nowhere. Congrats, you found your rhythm: keep going!
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                       </Accordion>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>✒️​ Tips</Accordion.Header>
                    <Accordion.Body>
                        <p>Some tips and strategies that I find useful, hoping they
                            might help you too! 
                        </p>

                        <Accordion>
                            <Accordion.Item eventKey='tip-1'>
                                <Accordion.Header>🎼​ Music</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Songs are particularly useful: they are easy to remember thanks 
                                        to the music, they use simple words (no one sings about 
                                        astrophysics, they all sing about love and heartbreak and wanting 
                                        to die), and the same words appear often in different songs, 
                                        making them easier to learn.
                                    </p>

                                    <p>
                                        Especially in the beginning, just listen without minding too
                                        much about words and meanings; when you find a song you
                                        particularly like, try analyzing the lyrics, learning the words 
                                        and grammar points. These are the grammar rules you'll remember 
                                        best: the one you looked up when trying to learn a song.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='tip-2'>
                                <Accordion.Header>🍿​ Movies and Series</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        If you like watching series and movies try finding something 
                                        you might like in your target language. You can watch with  
                                        subtitles in your target language, or english (or whatever 
                                        language you speak), it's up to you. At first, especially if 
                                        the writing system is different, it'll probably be useless to 
                                        try reading the subtitles in your target language, while
                                        english might help you with words or expressions you 
                                        hear often.
                                    </p>

                                    <p>
                                        Don't worry too much if you don't understand. Eventually you'll understand 
                                        more and more. Try repeating and writing down the bits that you do understand. 
                                        Try re-enacting your favourite scenes! Try reacting in your target language: 
                                        when a character does something stupid, say "No! Why?!", or "Yes! Finally" when 
                                        something good happens, or "God, who wrote this damned script?!" when the story 
                                        doesn't go as you'd like... 
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='tip-3'>
                                <Accordion.Header>🎞️ Youtube</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        If you have a passion, interest or hobby, try incorporating it in your 
                                        language learning. If you like cooking, for example, look up cooking videos 
                                        in your target language; remember that you don't need to understand the words 
                                        for this to be useful: even if the video is too advanced, it still counts as 
                                        listening practice. You might not understand anything, but your brain is still 
                                        working behind the scenes. Don't force it, don't sweat it, just enjoy some 
                                        content you like and relax. If it gets boring, you can always close the video 
                                        and look for one more engaging.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='tip-4'>
                                <Accordion.Header>​🕵️ Google Searches</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        When you're familiar enough with your target language but want to 
                                        expand your vocabulary and be better at expressing yourself, try 
                                        using it when looking things up! For example, if you suddenly get 
                                        curious why polar bears are white (spoiler: they're not actually 
                                        white, their skin is black and their fur transparent) try googling 
                                        it in your target language instead!
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='tip-5'>
                                <Accordion.Header>📖 Reading</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Reading is a pain in the ribs. Reading in a foreign language makes you feel 
                                        as tired as if you had carried tree trunks on your shoulders after only 
                                        two sentences. I feel you.  
                                    </p>
                                     
                                    <p>
                                        You look at the word, especially if it is a bit long, and you <em>know</em> you can 
                                        read it. You know all the letters, all the syllables, you <em>can</em> read it. 
                                        But you just won't. Your brain refuses. You just stare at the word and your 
                                        brain goes <em>Nope, I don't want to.</em>
                                    </p>

                                    <p>
                                        It's exhausting. But it will get better, I 
                                        promise. Just read whatever you find, bit by bit, and if a few words if all you
                                        can manage at first it's alright.
                                    </p>

                                    <p>
                                        This bit is mostly for languages with a different alphabet: 
                                        start reading even when your level is so low you don't 
                                        understand the words you're reading. It doesn't matter, keep going! The goal
                                        here is just to get used to the symbols and convince your brain it won't die
                                        if it tries to read that damned word.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='tip-6'>
                                <Accordion.Header>📝​ Grammar</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        All beginner courses cover the basics of grammar, so whatever online course or app you pick, 
                                        you'll have that covered. 
                                    </p>

                                    <p>As you go deeper into the course, obviously, more advancede grammar rules will be covered too, 
                                        but I rarely get to that point. 
                                    </p>

                                    <p>
                                        When you are familiar with the basics, you can just wander off wherever you want, 
                                        and learn grammar rules as you encounter them. 
                                        For example, let's say you hear a sentence in a series, and you recognize 
                                        the words but not the grammar. You look it up, use some analyzer, or ask 
                                        ChatGPT: you learn a new grammar point. Now try using it in different sentences 
                                        using the words you already know, get familiar with it, and next time you encounter it
                                        you'll be like <em>Ah! Gotcha!</em>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='tip-7'>
                                <Accordion.Header>🔍​ Sentence Analyzers and AI</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Sentence analyzers are extremely useful to break down the grammar of sentences. 
                                        You can also just ask ChatGPT to analyze the sentence for you, break it word 
                                        by word, explain the grammar, and so on. It's usually accurate enough. 
                                    </p>

                                    <p>
                                        You can ask it to break down entire song verses, write you a simple conversation 
                                        for practice, create exercises suitable for beginners, quiz you, 
                                        give you prompts for writing exercises, correct your grammar…
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='tip-8'>
                                <Accordion.Header>🗣️​ Speaking</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Well, for this you just need to speak. 
                                        Even if it is uncomfortable, if you sound awful, if it makes your skin crawl… 
                                        Speak, record yourself, listen to your recordings, and eventually 
                                        you'll get better!
                                    </p>

                                    <p>
                                        Also, don't try too hard to get the accent and pronunciation right. Obviously
                                        I don't mean to just put zero effort in it; I mean those tricky sounds you can't seem to 
                                        manage to replicate, or those that sound absolutely the same to your ears but 
                                        native speakers insist are totally different. Don't sweat it. Say it as you can,
                                        say it as you hear it, it will come natural to you eventually, as you get more and more familiar
                                        with hearing native speakers and trying speaking yourself.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    )
}