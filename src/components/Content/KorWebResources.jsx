import { Accordion, AccordionHeader } from "react-bootstrap"

export default function KorWebResources() {
    return (
        <section className="web-resources">

            <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey="0">
                    <AccordionHeader>Dictionaries</AccordionHeader>
                    <Accordion.Body>
                        <dl>
                            <dt><a target="_blank" href="https://krdict.korean.go.kr/eng/mainAction">krdict</a></dt>
                            <dd>An online dictionary that lets you look up words either in english or korean.
                                Korean searches must be done in hangeul.
                            </dd>

                            <dt><a target="_blank" href="https://www.sajeon.org/">Sajeon</a></dt>
                            <dd>Online dictionary that supports both english and korean searches; korean searches can
                                be done in romanization too (you must use the official romanization system).
                            </dd>

                            <dt><a target="_blank" href="https://glosbe.com/">Glosbe</a></dt>
                            <dd>This dictionary is useful because for verbs it also includes the different conjugations,
                                and it has a translator so you can translate entire sentences in addition to looking up single words. 
                            </dd>
                        </dl>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Grammar Analyzer</Accordion.Header>
                    <Accordion.Body>
                        <dl>
                            <dt><a target="_blank" href="mirinae">mirinae</a></dt>
                            <dd>Mirinae translates and analyzes the grammar of any sentence word by word.
                                This is the feature I use it for, and it is free (it requires that you signup though);
                                there's also a paid version that offers more features and lessons, if you're interested,
                                but I only use the grammar analyzer.
                            </dd>

                            <dt><a target="_blank" href="https://hanabira.org/sentence-analysis?sentence=%EC%A0%80%EB%8A%94%20%EB%B9%84%20%EC%98%A4%EB%8A%94%20%EC%9D%BC%EC%9A%94%EC%9D%BC%20%EC%98%A4%ED%9B%84%EC%97%90%20%EB%91%A0%20%EB%A9%94%ED%83%88%20%EB%93%A3%EB%8A%94%20%EA%B2%83%EC%9D%84%20%EC%A2%8B%EC%95%84%ED%95%A9%EB%8B%88%EB%8B%A4.&language=Korean">Hanabira sentence analyzer</a></dt>
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
                            <dt><a target="_blank" href="https://www.koreanclass101.com/">KoreanClass101</a></dt>
                            <dd>It offers some very useful lessons, complete with listening practice, grammar, 
                              vocabulary and explanations about the culture. For access to all lessons you have to
                              buy the full version, but I think the free content is good enough. 
                            </dd>

                            <dt><a target="_blank" href="https://www.clozemaster.com/languages">Clozemaster</a></dt>
                            <dd>The point of this is to learn by playing a game
                                of fill-in-the-blank sentences. Each sentence also has a grammar explanation,
                                so you'll learn grammar and vocabulary at the same time. As usual, enjoy the free 
                                features, and don't worry about the paid version if you can't or don't
                                want to buy it.
                            </dd>

                            <dt><a target="_blank" href="https://hanabira.org/langs/korean/grammarlist">Hanabira Grammar</a></dt>
                             <dd>Hanabira also offers a useful list of grammar points, divided by level</dd>
                         </dl>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    )
}