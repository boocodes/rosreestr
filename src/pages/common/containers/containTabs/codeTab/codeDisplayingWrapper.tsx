import styled from "styled-components";


interface Props{
    userAvatarImgSrc: string;
    lastAction: string;
    actionAuthor: string;
    commitsCount: string;
}


function CodeDisplayingWrapper(props:Props){
    console.log(props);
    return(
        <ExternalWrapper>
            <HeaderWrapper>
                <HeaderAuthorDataWrapper>
                    fsdfs
                    <UserAvatarImg src={props.userAvatarImgSrc}/>
                    <LatestActionAuthor>{props.actionAuthor}</LatestActionAuthor>
                    <LatestAction>{props.lastAction}</LatestAction>
                </HeaderAuthorDataWrapper>
                <HeaderCommonDataWrapper>
                    <CommitsCountWrapper>
                        <CommitsCountNum>{props.commitsCount}</CommitsCountNum>
                        <CommitsCountText>commits</CommitsCountText>
                    </CommitsCountWrapper>
                </HeaderCommonDataWrapper>
            </HeaderWrapper>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    border: 1px solid #d0d7de;
    height: 200px;
    position: relative;
    border-radius: 10px;
    width: 100%;
    margin-top: 30px;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: #f6f8fa;
    border-radius: 10px 10px 0px 0px;
`
const HeaderAuthorDataWrapper = styled.div`
    display: flex;
    align-items: center;
`
const HeaderCommonDataWrapper = styled.div`

`

const UserAvatarImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const LatestAction = styled.p`
    margin-left: 10px;
    font-size: 15px;
    padding-top: 3px;
`
const LatestActionAuthor = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`

const CommitsCountWrapper = styled.p`
    display: flex;
    align-items: center;
`

const CommitsCountNum = styled.p`
    font-weight: bold;
    font-size: 18px;
    margin-right: 5px;
`
const CommitsCountText = styled.p`
    font-size: 18px;
`

export default CodeDisplayingWrapper;