import img from '/assets/korea.svg'; 
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import StartGuide from '../Content/StartGuide';
import KorWebResources from '../Content/KorWebResources';
import KorAppResources from '../Content/KorAppResources';
import KorYoutubeChannels from '../Content/KorYoutubeChannels';

export default function ResourcesKor() {
    return (
        <section className="resources">
            <header>
                <img src={img} alt="korean flag" />
                <h1>Resources</h1>
            </header>

            <Tabs defaultActiveKey="1" className='resources-tabs'>
                <Tab className='tab' eventKey="1" title="Start here">
                    <div className="tab-content">
                        <StartGuide language='korean' />
                    </div>
                </Tab>

                <Tab className='tab' eventKey="2" title="Websites">
                    <KorWebResources />
                </Tab>

                
                <Tab className='tab' eventKey="3" title="Apps">
                    <KorAppResources />
                </Tab>

                
                <Tab className='tab' eventKey="4" title="Youtube Channels">
                    <KorYoutubeChannels />
                </Tab>
            </Tabs>

        </section>
    )
}

