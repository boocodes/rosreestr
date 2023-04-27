import styled from "styled-components";
import CodeWindowImg from '../../../../images/codeContain.png';
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {selectContainViewPage} from "../../../../redux/reducers/contain/selector";

interface Props{


}

function ContainCodeTab(props:Props){

    const containViewPage = useAppSelector(selectContainViewPage);

    return(
        <MainContent>
            <CodeWindowWrapper>
                <CodeWindowHeaderWrapper>
                    <CodeWindowHeaderDisplayingDataWrapper>
                        <CurrentBranchWrapper>
                            <CurrentBranchTitle>stage-design</CurrentBranchTitle>
                        </CurrentBranchWrapper>
                        <BranchCountsWrapper>
                                <BranchCountsTitleBoldSpan>25</BranchCountsTitleBoldSpan>
                                <BranchCountsTitle>branches</BranchCountsTitle>
                        </BranchCountsWrapper>
                    </CodeWindowHeaderDisplayingDataWrapper>
                    <CodeWindowHeaderButtonsWrapper>

                    </CodeWindowHeaderButtonsWrapper>
                </CodeWindowHeaderWrapper>
                <CodeWindowImage src={CodeWindowImg}/>
            </CodeWindowWrapper>
            <AboutWrapper>
                <AboutTitleWrapper>
                    <AboutTitleText>About</AboutTitleText>
                </AboutTitleWrapper>
                <AboutDescriptionWrapper>
                    <AboutDescriptionTitle>{containViewPage.description}</AboutDescriptionTitle>
                </AboutDescriptionWrapper>
            </AboutWrapper>
        </MainContent>
    )
}

const MainContent = styled.div`
    margin: 30px auto 100px auto;
    width: 1300px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;    
`

const CodeWindowWrapper = styled.div`
    width: 870px;
    margin-right: 30px;
`
const CodeWindowImage = styled.img`
    position: relative;
    width: 100%;
`

const AboutWrapper = styled.div`
    width: 400px;
    height: 100px;
`

const AboutTitleWrapper = styled.div`

`
const AboutTitleText = styled.p`
    font-size: 20px;
    font-weight: 700;
`

const AboutDescriptionWrapper = styled.div`
    margin-top: 20px;
`
const AboutDescriptionTitle = styled.p`
    font-size: 18px;
`

const CodeWindowHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-between;
`

const CodeWindowHeaderDisplayingDataWrapper = styled.div`
    display: flex;
    align-items: center;
`

const CodeWindowHeaderButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`

const CurrentBranchWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #d5d8db;
    padding: 8px 12px;
    background-color: #f6f8fa;
    border-radius: 5px;
    margin-right: 15px;
`

const CurrentBranchTitle = styled.p`
    font-size: 19px;
    font-weight: 400;
    opacity: 0.7;
`

const BranchCountsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const BranchCountsTitle = styled.p`
    font-size: 17px;
    font-weight: 400;
    padding-top: 2px;
`

const BranchCountsTitleBoldSpan = styled.span`
    font-size: 17px;
    font-weight: 700;
    margin-right: 5px;
`



export default ContainCodeTab;