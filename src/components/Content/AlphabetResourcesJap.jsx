import { Accordion } from "react-bootstrap";

export default function AlphabetResourcesJap() {
    return (
        <section className="alphabet-resources">

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Write and read Japanese ✍️​</Accordion.Header>
                    <Accordion.Body>
                        <p>
                        Japanese has three writing systems: Hiragana,
                        Katakana, and Kanji. For the moment, forget about kanji.
                        Begin by learning how to write and read Hiragana and Katakana.
                        </p>

                        <dl>
                            <dt><a target="_blank" href="https://play.google.com/store/apps/details?id=com.jernung.writeit.jpn&pcampaignid=web_share">Write it! Japanese</a></dt>
                            <dd>This app is very useful to start because it makes you practice writing,
                                and it teaches the correct stroke order for each syllable.
                            </dd>

                            <dt><a target="_blank" href="https://kana-quiz.tofugu.com/">Tofugu kana quizzes</a></dt>
                            <dd>This website is perfect if you want to test yourself on your kana online without needing to download an app.</dd>

                            <dt><a target="_blank" href="https://nihongo.maikojapan.com/hiragana/">hiragana</a> and <a target="_blank" href="https://nihongo.maikojapan.com/katakana/">katakana</a> stroke order diagrams</dt>
                            <dd>For whenever you need a refresher on stroke order</dd>

                            <dt><a target="_blank" href="https://hanabira.org/japanese/kana">Hanabira kana chart</a></dt>
                            <dd>If you need to quickly look up a table of all kana. It's simple and useful, and hovering each kana will display the pronunciation</dd>
                        </dl>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


          
        </section>
    )
}
