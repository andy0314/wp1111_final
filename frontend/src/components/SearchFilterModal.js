import { Modal } from "antd";
import { useData } from "../containers/hooks/useContext";

const SearchFilterModal = () =>{
    const{ searchModalOpen, setSearchModalOpen } = useData();
    return(
        <Modal
            open={searchModalOpen}
            title="設定篩選條件"
            footer={null}
            onCancel={() => setSearchModalOpen(false)}
        >
            
        </Modal>
    )
}

export default SearchFilterModal;