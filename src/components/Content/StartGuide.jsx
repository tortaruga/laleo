import { Link } from "react-router-dom";
import AlphabetResourcesJap from "./AlphabetResourcesJap";
import AlphabetResourcesKor from "./AlphabetResourcesKor";

export default function StartGuide({language}) {
    return (
        <section className="start-guide-intro">
            <h2>
                If you're just starting your learning journey 
                and have no idea where to begin, start here.
            </h2>
 
            <p>
                First things first: the alphabet. Before you do anything,
                you need to learn your target language's writing system. 
                No relying on romanizations, phonetic spellings, sign language, 
                spiritual intuition — you need to write and read the alphabet. 
            </p>

            {language === 'japanese' && <AlphabetResourcesJap />}    
            {language === 'korean' && <AlphabetResourcesKor />}        

            <p>
                Once you are familiar with the writing system, you can go 
                anywhere you want, really. It depends on your learning style 
                and what works best for you when it comes to languages: you 
                might prefer comprehensible input, structured courses, 
                grammar lessons… Just browse the resources I listed in the
                 next sections, and see what does it for you!
            </p>

            <p>
                Or you can use AI to create an outline for you. 
                You can ask it to give you a studying plan, with a syllabus 
                of topics and rules to learn. It can also create exercises
                for you, and correct your answers. You can basically use it as 
                a language tutor!
            </p>

            <p>
                If you have never learned a language before or have no idea what your
                learning style is, I can share my method with you, and you can try 
                and see if it works. <Link to="/tips">Head over to the tips</Link> and let's begin!
            </p>
        </section>
    )
}



// So here are some resources for that:
// (alphabet charts, romanization systems, apps for writing / recognizing characters)
