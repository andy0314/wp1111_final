import { Checkbox, Divider, Collapse } from "antd";
import { useFilter } from "../containers/hooks/useFilter";

const { Panel } = Collapse;

const DepartmentSelect = () => {
    const { departFilter, setDepartFilter } = useFilter();
    const handleChange = (e) => {
        console.log(e.target.id, e.target.checked)
        if(e.target.checked === true){
            var temp1 = departFilter;
            temp1.push(e.target.id);
            setDepartFilter(temp1);
        }
        else{
            var temp2 = departFilter.filter((x) => x !== e.target.id)
            setDepartFilter(temp2);
        }
    }

    return(
        <>
            <Collapse bordered={false}>
                <Panel header="1000 文學院">
                    <Checkbox id="文學院" onChange={handleChange}>1000 文學院</Checkbox>
                    <Checkbox id="中文系" onChange={handleChange}>1010 中國文學系</Checkbox>
                    <br/>
                    <Checkbox id="中文系國際生" onChange={handleChange}>1011 中國文學系國際學生學士班</Checkbox>
                    <Checkbox id="外文系" onChange={handleChange}>1020 外國語文學系</Checkbox>
                    <br/>
                    <Checkbox id="歷史系" onChange={handleChange}>1030 歷史學系</Checkbox>
                    <Checkbox id="哲學系" onChange={handleChange}>1040 哲學系</Checkbox>
                    <Checkbox id="人類系" onChange={handleChange}>1050 人類學系</Checkbox>
                    <br/>
                    <Checkbox id="圖資系" onChange={handleChange}>1060 圖書資訊學系</Checkbox>
                    <Checkbox id="日文系" onChange={handleChange}>1070 日本語文學系</Checkbox>
                    <br/>
                    <Checkbox id="應英系" onChange={handleChange}>1080 應用英語學系</Checkbox>
                    <Checkbox id="戲劇系" onChange={handleChange}>1090 戲劇學系</Checkbox>
                    <br/>
                    <br/>
                    <Checkbox id="中文所" onChange={handleChange}>1210 中國文學研究所</Checkbox>
                    <Checkbox id="外文所" onChange={handleChange}>1220 外國語文學研究所</Checkbox>
                    <br/>
                    <Checkbox id="歷史所" onChange={handleChange}>1230 歷史學研究所</Checkbox>
                    <Checkbox id="哲學所" onChange={handleChange}>1240 哲學研究所</Checkbox>
                    <br/>
                    <Checkbox id="人類所" onChange={handleChange}>1250 人類學研究所</Checkbox>
                    <Checkbox id="圖資所" onChange={handleChange}>1260 圖書資訊學研究所</Checkbox>
                    <br/>
                    <Checkbox id="日文所" onChange={handleChange}>1270 日本語文學研究所</Checkbox>
                    <Checkbox id="戲劇所" onChange={handleChange}>1290 戲劇學研究所</Checkbox>
                    <br/>
                    <Checkbox id="藝史所" onChange={handleChange}>1410 藝術史研究所</Checkbox>
                    <Checkbox id="語言所" onChange={handleChange}>1420 語言學研究所</Checkbox>
                    <br/>
                    <Checkbox id="音樂學所" onChange={handleChange}>1440 音樂學研究所</Checkbox>
                    <Checkbox id="臺文所" onChange={handleChange}>1450 臺灣文學研究所</Checkbox>
                    <br/>
                    <Checkbox id="華教碩士學程" onChange={handleChange}>1460 華語教學碩士學位學程</Checkbox>
                    <Checkbox id="翻譯碩士學程" onChange={handleChange}>1470 翻譯碩士學位學程</Checkbox>
                </Panel>
                <Panel header="2000 理學院">
                    <Checkbox id="理學院" onChange={handleChange}>2000 理學院</Checkbox>
                    <Checkbox id="數學系" onChange={handleChange}>2010 數學系</Checkbox>
                    <Checkbox id="物理系" onChange={handleChange}>2020 物理學系</Checkbox>
                    <br/>
                    <Checkbox id="化學系" onChange={handleChange}>2030 化學系</Checkbox>
                    <Checkbox id="地質系" onChange={handleChange}>2040 地質科學系</Checkbox>
                    <Checkbox id="動物系" onChange={handleChange}>2050 動物學系</Checkbox>
                    <br/>
                    <Checkbox id="動物系生物組" onChange={handleChange}>2051 動物生物組</Checkbox>
                    <Checkbox id="漁業生物組" onChange={handleChange}>2051 漁業生物組</Checkbox>
                    <br/>
                    <Checkbox id="植物系" onChange={handleChange}>2060 植物學系</Checkbox>
                    <Checkbox id="心理系" onChange={handleChange}>2070 心理學系</Checkbox>
                    <br/>
                    <Checkbox id="地理系" onChange={handleChange}>2080 地理環境資源學系</Checkbox>
                    <Checkbox id="大氣系" onChange={handleChange}>2090 大氣科學系</Checkbox>
                    <br/>
                    <br/>
                    <Checkbox id="數學所" onChange={handleChange}>2210 數學研究所</Checkbox>
                    <Checkbox id="物理所" onChange={handleChange}>2220 物理學研究所</Checkbox>
                    <Checkbox id="化學所" onChange={handleChange}>2230 化學研究所</Checkbox>
                </Panel>
            </Collapse>
        </>
    )
}

export default DepartmentSelect