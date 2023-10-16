import React from "react";
import {Container,Box,Title,Desc} from "./statestyle";
class State extends React.Component{
    
    render(){
    
        
        
        return(
            <Container>
                {/* <Box type="large">Large</Box>
                <Box type="medium">Medium</Box>
                <Box type="small">Small</Box>
                <Title>Title</Title>
                <Description>Description</Description> */}

                <Box type="large">Large</Box>
                <Box type="medium">Medium</Box>
                <Box type="small">Small</Box>
                <Title>title</Title>
                <Desc>Desc</Desc>



            </Container>
        )
    }
}
export default State;
