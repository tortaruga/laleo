import img from '/assets/japan.svg'; 
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import StartGuide from '../Content/StartGuide';
import JapWebResources from '../Content/JapWebResources';
import JapAppResources from '../Content/JapAppResources';
import JapYoutubeChannels from '../Content/JapYutubeChannels';

export default function ResourcesJap() {
    return (
        <section className="resources">
            <header>
                <img src={img} alt="korean flag" />
                <h1>Resources</h1>
            </header>
            
            <Tabs defaultActiveKey="1" className='resources-tabs'>
                <Tab className='tab' eventKey="1" title="Start here">
                    <div className="tab-content">
                        <StartGuide language='japanese' />
                    </div>
                </Tab>

                <Tab className='tab' eventKey="2" title="Websites">
                    <JapWebResources />
                </Tab>

                
                <Tab className='tab' eventKey="3" title="Apps">
                    <JapAppResources />
                </Tab>

                
                <Tab className='tab' eventKey="4" title="Youtube Channels">
                    <JapYoutubeChannels />
                </Tab>
            </Tabs>

        </section>
    )
}