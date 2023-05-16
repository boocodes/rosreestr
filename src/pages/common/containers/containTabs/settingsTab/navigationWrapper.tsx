import styled from "styled-components";


interface Props{

}


function NavgiationWrapper(props:Props){


    return(
        <ExternalWrapper>
            <NavigationSection>
                <NavigationSectionElemWrapper>
                    <NavigationSectionElemWrapper>
                        <NavigationSectionElemTitle>Основные</NavigationSectionElemTitle>
                    </NavigationSectionElemWrapper>
                </NavigationSectionElemWrapper>
            </NavigationSection>
            <NavigationSection>
                <NavigationSectionTitle>Доступ</NavigationSectionTitle>
                <NavigationSectionElemWrapper>
                    <NavigationSectionElemTitle>Объединения</NavigationSectionElemTitle>
                </NavigationSectionElemWrapper>
                <NavigationSectionElemWrapper>
                    <NavigationSectionElemTitle>Возможности модерации</NavigationSectionElemTitle>
                </NavigationSectionElemWrapper>
            </NavigationSection>
            <NavigationSection>
                <NavigationSectionTitle>Код и автоматизация</NavigationSectionTitle>
                <NavigationSectionElemWrapper>
                    <NavigationSectionElemTitle>Ветки</NavigationSectionElemTitle>
                </NavigationSectionElemWrapper>
                <NavigationSectionElemWrapper>
                    <NavigationSectionElemTitle>Теги</NavigationSectionElemTitle>
                </NavigationSectionElemWrapper>
                <NavigationSectionElemWrapper>
                    <NavigationSectionElemTitle>Правила</NavigationSectionElemTitle>
                </NavigationSectionElemWrapper>
                <NavigationSectionElemWrapper>
                    <NavigationSectionElemTitle>Действия</NavigationSectionElemTitle>
                </NavigationSectionElemWrapper>
            </NavigationSection>
            <NavigationSection>
                <NavigationSectionTitle>
                    Интеграции
                </NavigationSectionTitle>
                <NavigationSectionElemWrapper>
                    <NavigationSectionElemTitle>E-mail уведомления</NavigationSectionElemTitle>
                </NavigationSectionElemWrapper>
            </NavigationSection>

        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    width: 300px;
`

const NavigationSection = styled.div`
    padding: 20px 0px;
    border-bottom: 1px solid #e8ecef;
    :last-child{
        border-bottom: none;
    }
`

const NavigationSectionTitle = styled.p`
    margin-bottom: 20px;
    font-size: 16px;
    opacity: 0.7;
`

const NavigationSectionElemWrapper = styled.div`
    margin-bottom: 10px;
`
const NavigationSectionElemTitle = styled.p`
    margin-left: 15px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`



export default NavgiationWrapper;