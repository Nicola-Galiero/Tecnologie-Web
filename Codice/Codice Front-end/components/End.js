import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
    background-color: #1a1a1a;    
    margin: 0;
    padding: 0;
    height: 200px; 
    display: flex;
    flex-direction: column;
`;

const Colonna = styled.div`
    background-color: #1a1a1a;
    color: #fff;
    padding: 20px;
    margin-top: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    text-align: center;
`;

const Coln = styled.div`
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
`;

const Powered = styled.div`
    margin-top: 20px; /* Aggiungi uno spazio tra le colonne e il testo "Powered by" */
    text-align: center;
    color: #ffffff;
`;

export default function End() {
    return (
        <StyledHeader>
            <Center>
                <Colonna>
                    <Coln>
                        <h3>About us</h3>
                    </Coln>
                    <Coln>
                        <h3>Payment methods</h3>

                    </Coln>
                    
                </Colonna>
                <Powered><h6>Powered by Nicola Galiero and Nicola Viscillo</h6></Powered>
            </Center>
        </StyledHeader>

        
    );
}