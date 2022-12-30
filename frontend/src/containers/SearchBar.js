import { blue } from '@ant-design/colors'
import styled from 'styled-components'
import { Button, Input, Select } from 'antd'
import { useData } from './hooks/useContext'
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
        value: '1111',
        label: '111-1'
    },
    {
        value: '1112',
        label: '111-2'
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
    const { searchKey, setSearchKey, setSearchType, setSearchModalOpen, setSelectedSemester } = useData()

    const handleSelect = (value) => {
        setSearchType(value)
    }
    const handleSearch = () => {
        console.log(`search ${searchKey}`);
    }
    const handleModalOpen = () => {
        setSearchModalOpen(true);
    }
    const handleSemester = (value) => {
        setSelectedSemester(value);
    }
    return (
        <InputWrapper>
            <Input.Group>
                <Select 
                    defaultValue="coursename"
                    size='large'
                    style={{width: '150px'}}
                    onChange={handleSelect}
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
                    defaultValue="1111"
                    size='large'
                    style={{width: '150px'}}
                    onChange={handleSemester}
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