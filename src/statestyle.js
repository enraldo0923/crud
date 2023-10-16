// import { css } from "styled-components";
// import styled from "styled-components";

// export const Container = styled.div`
// background-color: coral;
// padding: 20px;
// `;
// const getSize=(props)=>{
//     switch (props.type) {
//         case 'large' : return "300px";
//         case 'medium' : return "200px";
//         case 'small' : return "100px";
//         default: return "200px"
            
//     }
// }



// export const Box = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// font-size: 20px;
// width: ${getSize};
// height: ${getSize};
// border: 2px solid black;
// margin: 20px;

// `;
// const common = css`
// color: #fff;
// border: 2px solid black;
// height: fit-content;
// padding: 10px;
// `
// export const Title =styled.h1`
// ${common};
// border: 4px solid black;
// `
// export const Description =styled.h1`
// ${common}
// `;
import styled from "styled-components";


export const Container = styled.div`
margin: 20px;
`;
const getSize =(props)=>{
    switch (props.type) {
        case 'large': return "300px";
        case 'medium': return "200px";
        case 'small': return "100px";
        default: return '100px';
    }

}


export const Box = styled.div`
border: 2px solid black;
width: ${getSize};
height: ${getSize};
display: flex;
align-items: center;
justify-content: center;

margin: 20px;
`;
export const Title = styled.h1`

`;

export const Desc = styled.h1`
font-size: 12px;
`;
