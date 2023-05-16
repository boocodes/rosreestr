import styled from 'styled-components';
import PopularContainerElemWrapper from "./popularContainerElemWrapper";


interface Props{

}


function PopularRepositioriesBlock(props:Props){





    return(
        <>
            <ExternalWrapper>
                <WrapperTitle>
                    Популярные контейнеры
                </WrapperTitle>
                <PopularContainersWrapper>
                    <PopularContainerElemWrapper
                        title={"go"}
                        about={"fpfpfp"}
                        language={"TypeScript"}
                        closed={false}
                    />
                    <PopularContainerElemWrapper
                        title={"go"}
                        about={"fpfpfp"}
                        language={"TypeScript"}
                        closed={false}
                    />
                    <PopularContainerElemWrapper
                        title={"go"}
                        about={"fpfpfp"}
                        language={"TypeScript"}
                        closed={false}
                    />
                    <PopularContainerElemWrapper
                        title={"go"}
                        about={"fpfpfp"}
                        language={"TypeScript"}
                        closed={false}
                    />
                    <PopularContainerElemWrapper
                        title={"go"}
                        about={"fpfpfp"}
                        language={"TypeScript"}
                        closed={false}
                    />
                    <PopularContainerElemWrapper
                        title={"go"}
                        about={"fpfpfp"}
                        language={"TypeScript"}
                        closed={false}
                    />
                    <PopularContainerElemWrapper
                        title={"go"}
                        about={"fpfpfp"}
                        language={"TypeScript"}
                        closed={false}
                    />
                </PopularContainersWrapper>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    margin-bottom: 50px;
`
const WrapperTitle = styled.h3`
    margin-bottom: 30px;
`

const PopularContainersWrapper = styled.div`
    display: flex;
    width: 900px;
    flex-wrap: wrap;
`



export default PopularRepositioriesBlock;