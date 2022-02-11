// Imports from package
import { useState } from 'react'
import styled from 'styled-components' //install styled-components
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; //refer to mui icons
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import components here

function Header() {

    const [count, setCount] = useState(0)

    const subtract = () => {
        // if(count > 0){
        //     setCount(count - 1)
        // }else{
        //     alert("We dont allow negativity")
        // }

        // (count > 0) && setCount(count - 1)

        count > 0 && setCount(count - 1) 
    }

    return(
        <Container>
            
            <Title>
                <p>Your Count is: </p>
                <p id="count">{ count }</p>
            </Title>
            

            <Button>
                <AddCircleOutlineIcon className='add-icon' onClick={ () => setCount(count + 1) } />

                { count > 0 &&
                <RemoveCircleOutlineIcon className='sub-icon' onClick={ subtract } /> 
                }
            </Button>

            {/* <p>Header 2 Here</p> */}
        </Container>
    )
}

export default Header

const Container = styled.div`
    /* border: 1px solid grey; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    p{
        /* border: 1px solid grey; */
        display: flex;
        /* align-items: center; */
        justify-content: center;
        /* margin: 10px auto; */
    }
`
const Title = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    /* border: 1px solid grey; */
    border-radius: 10px;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    #count{
        font-size: 35px;
        margin: 0 0 0 10px;
    }

    `
const Button = styled.div`
    /* border: 1px solid grey; */
    display: flex;
    align-items: center;


    .add-icon, .sub-icon{
        color: blue;
        cursor: pointer;
        margin: 10px 12px;
        padding: 10px;
        border: 1px solid lightgrey;
        border-radius: 15px;

        :hover{
            /* color: red; */
            background-color: #c0c0c0;
            padding: 10px;
            /* border-radius: 50%; */
        }
}

`




