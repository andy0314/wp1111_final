import { blue } from '@ant-design/colors'
import styled from 'styled-components'
import { Button, Input, Select } from 'antd'
import { useData } from './hooks/useContext'
import { useFilter } from './hooks/useFilter'
import SearchFilterModal from '../components/SearchFilterModal'

const searchOptions = [
    {
        value: 'coursename',
        label: '課程名稱'
    },
    {
        value: 'teachername',
        label: '教師名稱'
    }
]

const semester = [
    {
        value: '111-2',
        label: '111-2'
    },
    {
        value: '111-1',
        label: '111-1'
    }
]

const InputWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-contents: space-around;
`



const SearchBar = () => {
    const { searchKey, setSearchKey, searchType, setSearchType, selectedSemester, setSelectedSemester } = useFilter()
    const { setSearchModalOpen } = useData();

    const handleSearch = () => {
        console.log(`search ${searchKey}`);
    }
    const handleModalOpen = () => {
        setSearchModalOpen(true);
    }
    return (
        <InputWrapper>
            <Input.Group>
                <Select 
                    value={searchType}
                    size='large'
                    style={{width: '150px'}}
                    onChange={(e) => setSearchType(e.target.value)}
                    options={searchOptions}
                />
                <Input.Search 
                    style={{width: 'calc(100% - 300px)'}}
                    size='large'
                    onSearch={handleSearch}
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <Select 
                    value={selectedSemester}
                    size='large'
                    style={{width: '150px'}}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    options={semester}
                />
            </Input.Group>
            <Button onClick={handleModalOpen}>
                篩選課程
            </Button>
            <SearchFilterModal />
        </InputWrapper>
    )
}

export default SearchBar;