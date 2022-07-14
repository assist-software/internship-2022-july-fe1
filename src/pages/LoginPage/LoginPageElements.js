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
    height: auto;
    width: 50vw;
`
export const ContentContainer = styled.div`
    width: 40%;
    height: 60%;
    display: flex;
    flex-direction: column;
`

export const LoginForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    .Google{
        display: flex!important;
        justify-content: center;
        align-items: center;
        color: #0241AE!important;
        
        font-size: 14px!important;
        border-radius: 8px!important;
        border: 1px solid #0241AE!important;
        box-shadow: none!important;
    }

    .Google span{
        font-weight: bold!important;
        padding-left: 35px!important;
    }

    .Google div{
        position: relative;
        left: 10%;
        padding: 0!important;
        margin-top: 5px;
    }

    .Google:hover, .Google:hover div{
        background: #e2edff!important;
    }

    .Google:focus, .Google:focus div{
        background: #b7d1fe!important;
    }

    h2{
        font-size: 12px;
        font-weight: 400;
        color: #596274;
        margin: 10px 0 0 0;
    }

    h4{
        color: #98A2B3;
        font-size: 14px;
    }

    .inline{
        display: flex;
        justify-content: center;
    }

    a{
        text-decoration: none;
        color: #0356E8;
        font-size: 14px;
        margin-left: 5px;
    }

`

export const BreakLine = styled.div`
    margin: 25px 0 0 0;

    p{
        position: relative;
        left: 47%;
        top: -10px;
        color: #6C6C6C;
        font-size: 12px;
        background-color: #fff;
        width: 2rem;
        text-align: center;
    }

    hr{
        background: #D0D0D0;
    }
`
