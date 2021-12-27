import styled from "styled-components";

/////////  UserName Typography \/
export const UsernameTypo = styled("h5")`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color:${({theme})=>theme.BWtext};
  font-weight: 700;
  margin: 5px;
  
`;
export const H1Title = styled("h1")`
  width: 100%;
  font-size: 62px;  
  font-weight: 700;  
  margin-bottom:${(props)=>props.MB}px;
  color:${({theme})=>theme.BWtext};
  margin:${(props)=>props.Margin ?props.Margin:""}px;
  font-size:${(props)=>props.fontSize? props.fontSize:"55"}px;
  padding:${(props)=>props.Padding? props.Padding:"0"}px;    
`;

export const H2Title = styled("h2")`
  width: 100%;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //font-size: 24px;
  font-weight: 500;
  margin:${(props)=>props.Margin ?props.Margin:""}px;
  font-size:${(props)=>props.fontSize? props.fontSize:"35"}px;
  padding:${(props)=>props.Padding? props.Padding:"0"}px;  
  color:${({theme})=>theme.BWtext};
`;

export const SubTitle=styled("h3")`
width: 100%;
font-weight: 500;
margin:${(props)=>props.Margin ?props.Margin:"5"}px;
font-size:${(props)=>props.fontSize? props.fontSize:"20"}px;
padding:${(props)=>props.Padding? props.Padding:"2"}px;  
color:${({theme})=>theme.BWtext};
`;

/////////  Normal Typography  \/
export const NormalTypography = styled("p")`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  margin-bottom: 10px;
  font-size:${(props)=>props.fontSize? props.fontSize:"20"}px;
  font-weight:${(props)=>props.weight? props.weight:"400"};
  padding:${(props)=>props.Padding? props.Padding:"0"}px;  
  color:${({theme})=>theme.BWtext};
`;
export const NTitle = styled("p")`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  margin-bottom: 10px;
  font-size:${(props)=>props.fontSize? props.fontSize:"20"}px;
  font-weight:${(props)=>props.weight? props.weight:"400"};
  padding:${(props)=>props.Padding? props.Padding:"0"}px;  
  color:#000;
`;

/////////  Normal Hidden Typography  \/
export const NHTypography = styled("p")`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;   
  white-space: nowrap;   
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  margin-bottom: 10px;    
  color:${({theme})=>theme.BWtext};
  font-size:${(props)=>props.fontSize? props.fontSize:"20"}px;
  padding:${(props)=>props.Padding? props.Padding:"0"}px; 
  &:hover{
    width: 100%;
    white-space: pre-wrap;
   // overflow: auto;
    
    
  }
`;
/////////  Large Typography  \/
export const LargTypography = styled("p")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;  
  font-weight: 600;
  margin-bottom: 15px;
  color:${({theme})=>theme.BWtext};
`;

////////////////  Styled Link Typography <<<<<
export const SLT=styled(Link)` 
 color: #fff;
  font-size: 30px;
  text-decoration: none;
  cursor: pointer;
`