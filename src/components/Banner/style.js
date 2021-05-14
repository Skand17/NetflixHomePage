import styled from 'styled-components'

const Banner = styled.section`
    text-align : center;
    background-image : url(${ (props) =>  props.image});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
`

export default Banner