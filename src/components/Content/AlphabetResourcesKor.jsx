import { Accordion } from "react-bootstrap";

export default function AlphabetResourcesKor() {
    return (
        <section className="alphabet-resources">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Write and read Korean ✍️​</Accordion.Header>
                    <Accordion.Body>
                        <p>
                           The Korean writing system is called Hangeul, and it uses letters that
                           are organized into syllabic blocks. 
                        </p>

                        <dl>
                            <dt><a target="_blank" href="https://play.google.com/store/apps/details?id=com.jernung.writeit.kor&pcampaignid=web_share">Write it! Korean</a></dt>
                            <dd>I recommend to start with this app, because just like in Japanese characters, in Korean too 
                                stroke order matters. This app is perfect for that, since it teaches you how to both write and pronounce Hangeul.
                            </dd>

                            <dt><a target="_blank" href="http://letslearnhangul.com/">Let's learn Hangul</a></dt>
                            <dd>I actually came across this website while organizing the content for this guide,
                                and I wish knew about it when I was learning Hangeul because it's really fun and makes kearning
                                very easy. It's perfect if you're looking for an online resource instead of an app, but it 
                                doesn't cover stroke order. It covers some useful pronunciation quirks though.
                            </dd>

                            <dt><a target="_blank" href="https://thelunartreehouse.com/2020/01/20/a-guide-to-writing-hangul/">Stroke order diagrams</a></dt>
                            <dd>Useful online resource for learning the stroke order for each letter.</dd>
                        </dl>

                        <h4>Notes on transliteration</h4>
                        <p>There are different ways to transliterate Korean. What I learned was the "official" 
                            romanization (which you can look up <a target="_blank" href="https://www.korean.go.kr/front_eng/roman/roman_01.do">here</a>),
                            but often you'll see people just write phonetically. For example, Let's learn hangul transliterates some letters 
                            differently than I am used to (ex.: "uh" for them is "eo" for me), and as you may have noticed I spell it "Hangeul" while 
                            they spell it "Hangul".  
                        </p>

                        <p>It doesn't really matter which system you use, I think it's a matter of habit and preference. To me
                            it doesn't make sense to transliterate phonetically, because a phonetic spelling changes depending 
                            on the language of who's doing the transliteration. The one you'll encounter the most is the english
                            phonetic spelling (which is only phonetic to english speakers).
                            In my language, for example, "uh" doesn not sound similar to the Korean 어 at all, so the phonetic
                            transliteration doesn't really feel intuitive most of the times. 
                        </p>

                        <p>So in my opinion the official system makes more sense, because once you learn it everyone pronounces
                            and writes things the same no matter what language they speak, and you don't have to guess if the person writing
                            meant "hyung" as in 형 or 흉.
                        </p>

                        <p>But since you should rely mostly on the Hangeul and only a little on romanizations, whatever system 
                            you learn should be fine. For the most part you'll recognize the words anyway you see them romanized. 
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </section>
    )
}


//   <a target="_blank" href="http://letslearnhangul.com/">this is actually a fun way to learn hangeul that i wish i knew when i was learning it</a>

            // <a target="_blank" href="https://play.google.com/store/apps/details?id=com.jernung.writeit.kor&pcampaignid=web_share" target="_blank">Write it! Korean</a>