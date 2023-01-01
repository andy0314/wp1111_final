import { Collapse, Modal } from "antd";
import { useData } from "../containers/hooks/useContext";

import DepartmentSelect from "./DepartmentSelect";
import GeneralEducationSelect from "./GeneralEducationSelect";
import TimeSelect from "./TimeSelect";

const { Panel } = Collapse;

const SearchFilterModal = () =>{
    const{ searchModalOpen, setSearchModalOpen } = useData();
    return(
        <Modal
            open={searchModalOpen}
            title="設定篩選條件"
            footer={null}
            onCancel={() => setSearchModalOpen(false)}
        >
            
            <Collapse defaultActiveKey={[]}>
                <Panel header="選擇時段" key="1">
                    <TimeSelect />
                </Panel>
                <Panel header="系所" key="2">
                    <DepartmentSelect />
                </Panel>
                <Panel header="通識" key="3">
                    <GeneralEducationSelect />
                </Panel>
            </Collapse>
        </Modal>
    )
}

export default SearchFilterModal;