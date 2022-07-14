import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`
export const LeftSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginImage = styled.img`
    heigth: auto;
    width: 50vw;
`
export const ContentContainer = styled.div`
    width: 40%;
    height: 50%;
    display: flex;
    flex-direction: column;
`

export const LoginForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .Google{
        margin-top: 10px!important;
        display: flex!important;
        justify-content: center;
        align-items: center;
        color: #0241AE!important;
        font-weight: 700!important;
        font-size: 18px!important;
        border-radius: 8px!important;
        padding: 3px!important;
        border: 1px solid #0241AE!important;
        box-shadow: none!important;
    }
`

export const BreakLine = styled.div`
    margin: 30px 0 0 0;

    p{
        position: relative;
        left: 47%;
        top: -10px;
        color: #6C6C6C;
        font-size: 16px;
        background-color: #fff;
        width: 3rem;
        text-align: center;
    }

    hr{
        background: #D0D0D0;
    }
`

