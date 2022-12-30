import { blue } from '@ant-design/colors'
import styled from 'styled-components'
import { Button, Input, Select } from 'antd'
import { useData } from './hooks/useContext'

const options = [
    {
        value: 'coursename',
        label: '課程名稱'
    },
    {
        value: 'teachername',
        label: '教師名稱'
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
    const { searchKey, setSearchKey } = useData()

    const handleSelect = (value) => {
        console.log(`select ${value}`);
    }
    const handleSearch = () => {
        console.log(`search ${searchKey}`);
    }
    const handleModalOpen = () => {
        console.log('open Modal');
    }
    return (
        <InputWrapper>
            <Input.Group>
                <Select 
                    defaultValue="coursename"
                    size='large'
                    style={{width: '150px'}}
                    onChange={handleSelect}
                    options={options}
                />
                <Input.Search 
                    style={{width: 'calc(100% - 150px)'}}
                    size='large'
                    onSearch={handleSearch}
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
            </Input.Group>
            <Button onClick={handleModalOpen}>
                篩選課程
            </Button>
        </InputWrapper>
    )
}

export default SearchBar;