import { Accordion, AccordionHeader } from "react-bootstrap"

export default function JapWebResources() {
    return (
        <section className="web-resources">

            <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey="0">
                    <AccordionHeader>Dictionaries</AccordionHeader>
                    <Accordion.Body>
                        <dl>
                            <dt><a target="_blank" href="https://www.japandict.com/">JapanDict</a></dt>
                            <dd>A very useful online dictionary that supports searches in english
                                and japanese (also romanized); it shows how to write each word with
                                animated stroke order graphs; it allows you to look for kanji (also by radicals and by drawing them!).
                                It's basically perfect.
                            </dd>

                            <dt><a target="_blank" href="https://www.tanoshiijapanese.com/home/">Tanoshii Japanese</a></dt>
                            <dd>I mostly use this as a dictionary, both for words and kanji, but it also offers games and lessons.
                            </dd>

                            <dt><a target="_blank" href="https://jisho.org/">Jisho</a></dt>
                            <dd>This one too allows you to search english and japanese words (in japanese characters or romaji);
                                it also supports kanji search by character, radicals, or handwriting. 
                            </dd>
                        </dl>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Grammar Analyzer</Accordion.Header>
                    <Accordion.Body>
                        <dl>
                            <dt><a target="_blank" href="https://hanabira.org/sentence-analysis?sentence=%EC%A0%80%EB%8A%94%20%EB%B9%84%20%EC%98%A4%EB%8A%94%20%EC%9D%BC%EC%9A%94%EC%9D%BC%20%EC%98%A4%ED%9B%84%EC%97%90%20%EB%91%A0%20%EB%A9%94%ED%83%88%20%EB%93%A3%EB%8A%94%20%EA%B2%83%EC%9D%84%20%EC%A2%8B%EC%95%84%ED%95%A9%EB%8B%88%EB%8B%A4.&language=Japanese">Hanabira sentence analyzer</a></dt>
                            <dd>Enter any sentence and see the analysis and breakdown. You can also ask the incorporated AI to generate
                                a grammar explanation</dd>
                        </dl>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="audio">
                    <Accordion.Header>Text to speech tools</Accordion.Header>
                    <Accordion.Body>
                        <p>Text to speech tools are useful for when you want to listen
                            how something is pronounced, and also if you want to practice listening.
                            I select short sentences or passages I like, download the mp3 audio, and listen to it 
                            on repeat. You can also do the same with conversations: ask ChatGPT to write you a simple conversation 
                            for beginners, copy it into the text to speech, download it and listen to it as many times as you want.
                        </p>

                        <dl>
                            <dt><a target="_blank" href="https://www.narakeet.com/app/text-to-audio/?projectId=ea848a2e-d3ba-4906-8221-e04710707c52">Narakeet</a></dt>
                            <dd>The free version has some limits of length and number of downloads allowed, but for the 
                                simple, short sentences a beginner needs it's more than enough. You can also choose from different voices.</dd>
                            
                            <dt><a target="_blank" href="https://micmonster.com/#:~:text=Use%20MicMonster%27s%20revolutionary%20text%20to%20speech%20technology%20for,powered%20by%20most%20realistic%20text%20to%20speech%20engine.">Micmonster</a></dt>
                            <dd>This too makes you choose the voice you prefer, and the free version has a limit of 300 characters (more than enough).</dd>
                        </dl>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Grammar, courses, and exercises</Accordion.Header>
                    <Accordion.Body>
                         <dl>
                            <dt><a target="_blank" href="https://www.japanesepod101.com/">JapanesePod101</a></dt>
                            <dd>Just like KoreanClass101, it offers some free lessons and some paid ones. 
                            </dd>

                            <dt><a target="_blank" href="https://www.clozemaster.com/languages">Clozemaster</a></dt>
                            <dd>The point of this is to learn by playing a game
                                of fill-in-the-blank sentences. Each sentence also has a grammar explanation,
                                so you'll learn grammar and vocabulary at the same time. As usual, enjoy the free 
                                features, and don't worry about the paid version if you can't or don't
                                want to buy it.
                            </dd>

                            <dt><a target="_blank" href="https://elon.io/learn-japanese-hepburn/lessons">Elon</a></dt>
                            <dd>This course is very useful for beginners. It starts from the very basics,
                                and the lessons are short and sweet. It covers grammar, kanji, and vocabulary, 
                                and the spaced repetition helps you remember what you learned.  
                            </dd>
                             
                             <dt><a target="_blank" href="https://www.kanshudo.com/">Kanshudo</a></dt>
                             <dd>Kanshudo offers some useful resources, like kanji and grammar exercises, and reading practice.
                                The free version has some limitations, but it's useful nonetheless.
                             </dd>

                             <dt><a target="_blank" href="https://www3.nhk.or.jp/nhkworld/lesson/en/">NHK World</a></dt>
                             <dd>This sites offers lessons, videos, and resources to learn from absolute beginner level.</dd>

                             <dt><a target="_blank" href="https://hanabira.org/japanese/grammarlist?tab=JLPT_N5">Hanabira Grammar</a></dt>
                             <dd>Hanabira also offers a useful list of grammar points, divided by level (N5 being the most beginner)</dd>
                         </dl>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    )
}