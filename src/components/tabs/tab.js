import useFetch from "../../hooks/useFetch";

import {
    GlobalContainer,
    TabHeaderContainer,
    TabPanelContainer,
    TabPanelItem
} from "./style";
import TabContainer from "./TabContext";
import TabHeader from "./TabHeader";
import TabPanel from "./Tabpanel";


const Tab = () => {

    let llenarlista = 'global/menu-secundario/'
    const [listafooter, error2] = useFetch(llenarlista);
    return (
        <div className="container">

            <GlobalContainer>
                <TabContainer tab={"g"}>
                    <TabHeaderContainer>
                        {listafooter?.map(({ nid }) => (
                            <TabHeader title={nid.map(h => h.value)} key={nid.map(h => h.value)}>
                                {nid.map(h => h.value)}
                            </TabHeader>
                        ))}
                    </TabHeaderContainer>
                    <TabPanelContainer>
                        {listafooter?.map(({ nid }) => (
                            <TabPanel whenActive={nid.map(h => h.value)} key={nid.map(h => h.value)}>
                                <TabPanelItem>{nid.map(h => h.value)}</TabPanelItem>
                            </TabPanel>
                        ))}
                    </TabPanelContainer>
                </TabContainer>
            </GlobalContainer>
        </div>
    );
};

export default Tab;
